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
        console.error('Format error for language:', language, error);
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
        switch (language) {
            case "json":
                return JSON.stringify(JSON.parse(code));

            case "javascript":
            case "typescript":
            case "babel":
            case "react":
                // Client-side JS minification (removes comments and collapses whitespace)
                return code
                    .replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, '$1') // Remove comments
                    .replace(/\s+/g, ' ') // Collapse whitespace
                    .replace(/ ?([={};,<>():?&|!+*/-]) ?/g, '$1') // Remove spaces around operators
                    .trim();

            case "css":
            case "scss":
            case "less":
                // Client-side CSS minification
                return code
                    .replace(/\/\*[\s\S]*?\*\//g, '') // Remove comments
                    .replace(/\s+/g, ' ') // Collapse whitespace
                    .replace(/ ?([{} :;,]) ?/g, '$1') // Remove spaces around delimiters
                    .replace(/;}/g, '}') // Remove trailing semicolon
                    .trim();

            case "html":
            case "xml":
            case "xaml":
            case "svg":
                // Client-side HTML/XML minification
                return code
                    .replace(/<!--[\s\S]*?-->/g, '') // Remove comments
                    .replace(/>\s+</g, '><') // Remove whitespace between tags
                    .replace(/\s{2,}/g, ' ') // Collapse other whitespace
                    .trim();

            default:
                // Generic fallback
                return code.replace(/\n/g, '').replace(/\s{2,}/g, ' ').trim();
        }
    } catch (e) {
        console.error('Minification error for language:', language, e);
        // Silent fallback to basic minification
        return code.replace(/\n/g, '').replace(/\s{2,}/g, ' ').trim();
    }
}

function autoIndent(code: string, openPatterns: string[], closePatterns: string[]) {
    const PADDING = '  ';
    let indentLevel = 0;

    // Sanitize patterns to prevent ReDoS: escape special regex characters
    const sanitizePattern = (pattern: string) => pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const sanitizedOpenPatterns = openPatterns.map(sanitizePattern);
    const sanitizedClosePatterns = closePatterns.map(sanitizePattern);

    const openRegex = new RegExp(`(${sanitizedOpenPatterns.join('|')})`, 'i');
    const closeRegex = new RegExp(`(${sanitizedClosePatterns.join('|')})`, 'i');

    return code
        .split('\n')
        .map(line => {
            let trimmed = line.trim();
            if (!trimmed) return "";

            const opens = (trimmed.match(openRegex) || []).length;
            const closes = (trimmed.match(closeRegex) || []).length;

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
