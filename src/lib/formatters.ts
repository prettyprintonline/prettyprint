import prettier from "prettier/standalone";
import * as babelPlugin from "prettier/plugins/babel";
import * as estreePlugin from "prettier/plugins/estree";
import * as htmlPlugin from "prettier/plugins/html";
import * as cssPlugin from "prettier/plugins/postcss";
import * as markdownPlugin from "prettier/plugins/markdown";
import * as typescriptPlugin from "prettier/plugins/typescript";
import * as yamlPlugin from "prettier/plugins/yaml";
import * as graphqlPlugin from "prettier/plugins/graphql";
import * as angularPlugin from "prettier/plugins/angular";
import { format as formatSql } from 'sql-formatter';
import * as xmlPlugin from "@prettier/plugin-xml";
import * as phpPlugin from "@prettier/plugin-php/standalone";

export interface FormatOptions {
    tabWidth?: number;
}

export async function formatCode(code: string, language: string, options?: FormatOptions): Promise<string> {
    if (!code.trim()) return code;

    try {
        switch (language) {
            // --- Prettier Core Web Languages ---
            case "javascript":
            case "babel":
            case "react": // JSX formatted by babel
                return await prettier.format(code, {
                    parser: "babel",
                    plugins: [babelPlugin, estreePlugin],
                    semi: true,
                    singleQuote: false,
                    tabWidth: options?.tabWidth ?? 2,
                });
            case "json":
                return await prettier.format(code, {
                    parser: "json",
                    plugins: [babelPlugin, estreePlugin],
                    tabWidth: options?.tabWidth ?? 2,
                });
            case "typescript":
                return await prettier.format(code, {
                    parser: "typescript",
                    plugins: [typescriptPlugin, estreePlugin],
                    semi: true,
                    tabWidth: options?.tabWidth ?? 2,
                });
            case "html":
                return await prettier.format(code, {
                    parser: "html",
                    plugins: [htmlPlugin],
                    printWidth: 100,
                });
            case "angular":
                return await prettier.format(code, {
                    parser: "angular",
                    plugins: [angularPlugin, htmlPlugin, babelPlugin, estreePlugin],
                    printWidth: 100,
                });
            case "css":
            case "less":
            case "scss":
                return await prettier.format(code, {
                    parser: language,
                    plugins: [cssPlugin],
                    tabWidth: options?.tabWidth ?? 2,
                });
            case "markdown":
            case "mdx":
                return await prettier.format(code, {
                    parser: language,
                    plugins: [markdownPlugin, babelPlugin, estreePlugin],
                });
            case "graphql":
                return await prettier.format(code, {
                    parser: "graphql",
                    plugins: [graphqlPlugin],
                });
            case "yaml":
                return await prettier.format(code, {
                    parser: "yaml",
                    plugins: [yamlPlugin],
                    tabWidth: options?.tabWidth ?? 2,
                });

            // --- Prettier Community Plugins ---
            case "xml":
            case "xaml":
                return await prettier.format(code, {
                    parser: "xml",
                    plugins: [xmlPlugin],
                    xmlWhitespaceSensitivity: "ignore",
                } as any);

            // --- SQL Formatter ---
            case "sql":
                return formatSql(code, { language: 'sql', keywordCase: 'upper' });

            // --- WASM Formatters ---
            case "c":
            case "c++":
            case "java":
            case "c#":
            // --- Custom Basic Fallbacks ---
            case "c":
            case "c++":
            case "java":
            case "c#":
            case "perl":
                return formatPerlBasic(code);

            case "python":
                return formatPythonBasic(code);

            // --- Custom Basic Fallbacks ---
            case "php":
            case "perl":
                return formatPerlBasic(code);
            case "ruby":
                return formatRubyBasic(code);
            case "lua":
                return formatLuaBasic(code);

            default:
                // Return as is if no formatter matches
                return code;
        }
    } catch (error) {
        console.error(`Format error for ${language}:`, error);
        throw new Error(`Syntax error. Unable to parse the ${language} code.`);
    }
}

// Basic Regex-based indentation fallbacks for backend languages unsupported by client-side tools
function formatPythonBasic(code: string) {
    return code.split('\n').map(line => line.trimEnd()).join('\n');
}

function formatPerlBasic(code: string) {
    return autoIndent(code, ['\\{', '\\[', '\\('], ['\\}', '\\]', '\\)']);
}

function formatRubyBasic(code: string) {
    return autoIndent(code, ['\\bdef\\b', '\\bif\\b', '\\bunless\\b', '\\bdo\\b', '\\bclass\\b', '\\bmodule\\b', '\\bcase\\b'], ['\\bend\\b']);
}

function formatLuaBasic(code: string) {
    return autoIndent(code, ['\\bfunction\\b', '\\bthen\\b', '\\bdo\\b', '\\brepeat\\b'], ['\\bend\\b', '\\buntil\\b']);
}

export interface ValidationError {
    valid: boolean;
    error?: string;
    line?: number;
    column?: number;
}

export async function validateCode(code: string, language: string): Promise<ValidationError> {
    if (!code.trim()) return { valid: true };
    try {
        // For languages parsed by prettier, we can simulate validation by formatting
        // which gives us rich AST error position mapping in e.loc
        await formatCode(code, language);
        return { valid: true };
    } catch (e: any) {
        let line: number | undefined;
        let column: number | undefined;

        if (e.loc?.start) {
            line = e.loc.start.line;
            column = e.loc.start.column;
        } else if (e.message) {
            const match = e.message.match(/\(?(\d+):(\d+)\)?/) || e.message.match(/(?:line|Line)\s+(\d+).*?(?:column|Column)\s+(\d+)/);
            if (match) {
                line = parseInt(match[1], 10);
                column = parseInt(match[2], 10);
            }
        }

        let cleanError = e.message || "Syntax error";
        if (cleanError.includes("\n")) {
            cleanError = cleanError.split("\n")[0];
        }

        return { valid: false, error: cleanError, line, column };
    }
}

export async function minifyCode(code: string, language: string): Promise<string> {
    if (!code.trim()) return code;

    try {
        const response = await fetch("/api/minify", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ code, language })
        });

        if (!response.ok) {
            throw new Error(`API error: ${response.statusText}`);
        }

        const data = await response.json();
        if (data.error) {
            throw new Error(data.error);
        }

        return data.minified;
    } catch (e) {
        console.error(`Minification network error for ${language}:`, e);
        // Fallback to old regex if API call fails
        return code.replace(/\n/g, '').replace(/\s{2,}/g, ' ').trim();
    }
}

function autoIndent(code: string, openPatterns: string[], closePatterns: string[]) {
    const PADDING = '  ';
    let indentLevel = 0;

    const openRegex = new RegExp(`(${openPatterns.join('|')})`, 'i');
    const closeRegex = new RegExp(`(${closePatterns.join('|')})`, 'i');

    return code
        .split('\n')
        .map(line => {
            let trimmed = line.trim();
            if (!trimmed) return "";

            const opens = (trimmed.match(new RegExp(openRegex, 'g')) || []).length;
            const closes = (trimmed.match(new RegExp(closeRegex, 'g')) || []).length;

            // Decrease indent immediately if the line *starts* with a closer
            if (closeRegex.test(trimmed.split(' ')[0])) {
                indentLevel = Math.max(0, indentLevel - 1);
            }

            const formattedLine = PADDING.repeat(indentLevel) + trimmed;

            // Calculate next line indent based on difference
            if (opens > closes) {
                indentLevel++;
            } else if (closes > opens && !closeRegex.test(trimmed.split(' ')[0])) {
                indentLevel = Math.max(0, indentLevel - (closes - opens));
            }

            return formattedLine;
        })
        .join('\n');
}
