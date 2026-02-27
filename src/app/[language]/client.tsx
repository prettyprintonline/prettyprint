"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import {
    Copy,
    Download,
    Trash2,
    RefreshCw,
    ChevronRight,
    AlertCircle,
    X,
    Check,
    FileInput,
    FileOutput,
    Clock,
    Braces,
    Keyboard,
    Maximize2,
    Minimize2,
    WrapText,
    Settings2,
    Shrink,
    CheckCircle2,
    Expand, // Added Expand icon
    Wand2, // Added Wand2 icon
} from "lucide-react";
import { CodeEditor, EditorMarker } from "@/components/code-editor";
import { SpecializedViews } from "@/components/output-views";
import { useRouter } from "next/navigation";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { LANGUAGES_SEO } from "@/lib/seo-data";

// --- Snippet Dictionary ---
const EXAMPLES: Record<string, string> = {
    javascript: `function calculateFibonacci(n) {\n  let a=0,b=1,temp;\n  while(n>0){\n    temp=a;a=a+b;b=temp;n--;\n  }\n  return a;\n}\nconsole.log("Fibonacci:",calculateFibonacci(10));`,
    json: `{"name":"Pretty Print","version":"1.0.0","settings":{"theme":"dark","features":["formatting","minification","syntax-highlighting"],"active":true}}`,
    html: `<!DOCTYPE html><html><head><title>My Page</title></head><body><header><h1>Welcome to Pretty Print</h1></header><main><p>This is a completely unformatted HTML document.</p></main></body></html>`,
    css: `body{margin:0;padding:0;background-color:#0f172a;color:#f8fafc;} h1{font-size:2rem;text-align:center;padding:2rem;} .container{max-width:1200px;margin:0 auto;display:flex;}`,
    sql: `SELECT u.id,u.name,COUNT(o.id) as order_count FROM users u LEFT JOIN orders o ON u.id=o.user_id WHERE u.status='active' GROUP BY u.id,u.name HAVING COUNT(o.id)>5 ORDER BY order_count DESC;`,
    python: `def is_prime(n):\n    if n<=1:return False\n    for i in range(2,int(n**0.5)+1):\n        if n%i==0:return False\n    return True\nprimes=[x for x in range(100) if is_prime(x)]`,
    typescript: `interface User{id:number;name:string;isActive:boolean;} const users:User[]=[{id:1,name:"Alice",isActive:true}]; function getActiveUsers(list:User[]):User[]{return list.filter(u=>u.isActive);}`,
    markdown: `# Hello Markdown\nThis is a sample document demonstrating **bold text**, *italics*, and [links](https://example.com).\n\n## Features\n- List Item A\n- List Item B\n\n> "A quote block"`,
    less: `@primary-color: #4CAF50; .button { background-color: @primary-color; &:hover { background-color: darken(@primary-color, 10%); } }`,
    scss: `$primary-color: #4CAF50; .button { background-color: $primary-color; &:hover { background-color: darken($primary-color, 10%); } }`,
    java: `public class HelloWorld { public static void main(String[] args) { System.out.println("Hello, World!"); } }`,
    c: `#include <stdio.h>\nint main() { printf("Hello, World!\\n"); return 0; }`,
    "c++": `#include <iostream>\nint main() { std::cout << "Hello, World!" << std::endl; return 0; }`,
    "c#": `using System;\nclass Program { static void Main() { Console.WriteLine("Hello, World!"); } }`,
    php: `<?php\nfunction greet($name) { return "Hello, " . "!" . $name; }\necho greet("World");\n?>`,
    ruby: `def greet(name)\n  "Hello, #{name}!"\nend\nputs greet("World")`,
    lua: `function greet(name) return "Hello, " .. name .. "!" end print(greet("World"))`,
    perl: `sub greet { my $name = shift; return "Hello, $name!"; } print greet("World");`,
    xml: `<?xml version="1.0" encoding="UTF-8"?><library><book id="1"><title>1984</title><author>George Orwell</author></book></library>`,
    xaml: `<Window x:Class="WpfApp.MainWindow" xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation" xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" Title="MainWindow" Height="450" Width="800"><Grid><Button Content="Click Me" HorizontalAlignment="Center" VerticalAlignment="Center"/></Grid></Window>`,
    yaml: `server:\n  port: 8080\n  host: localhost\ndatabase:\n  url: jdbc:mysql://localhost:3306/db\n  users:\n    - admin\n    - guest`,
    graphql: `query GetUser($id: ID!) { user(id: $id) { id name email posts { id title } } }`,
    react: `import React, { useState } from 'react';\nfunction Counter() { const [count, setCount] = useState(0); return (<div><p>You clicked {count} times</p><button onClick={() => setCount(count + 1)}>Click me</button></div>); }\nexport default Counter;`,
    mdx: `# Hello MDX\n\nimport { Chart } from './components/Chart'\n\n<Chart data={data} />`,
    babel: `const multiply = (a, b) => a * b;`,
    angular: `import { Component } from '@angular/core';\n@Component({ selector: 'app-root', template: '<h1>Hello Angular!</h1>' })\nexport class AppComponent {}`,
};
import { EditorProvider } from "@/lib/editor-store";
import { EditorSettingsModal } from "@/components/editor-settings";
import { KeyboardShortcutsModal } from "@/components/keyboard-shortcuts";
import { formatCode, minifyCode, validateCode } from "@/lib/formatters";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface LanguageEditorClientProps {
    language: string;
    h1: string;
    subtitle: string;
}

export function LanguageEditorClient({
    language,
    h1,
    subtitle,
}: LanguageEditorClientProps) {
    const [inputValue, setInputValue] = useState<string>("");
    const [outputValue, setOutputValue] = useState<string>("");
    const [isFormatting, setIsFormatting] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [showError, setShowError] = useState(false);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

    const [formatTime, setFormatTime] = useState<number | null>(null);
    const [copied, setCopied] = useState(false);

    // Cursors
    const [inputCursor, setInputCursor] = useState({ line: 1, col: 1 });
    const [outputCursor, setOutputCursor] = useState({ line: 1, col: 1 });

    // Settings
    const [autoFormat, setAutoFormat] = useState(true);
    const [wordWrap, setWordWrap] = useState(true);
    const [tabSize, setTabSize] = useState<number>(2);
    const [outputMode, setOutputMode] = useState<string>("Code");

    // Fullscreen & Split
    const [fullscreenPanel, setFullscreenPanel] = useState<"input" | "output" | null>(null);
    const [splitRatio, setSplitRatio] = useState(50);
    const isDragging = useRef(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    // Editor Markers for validation squigglies
    const [editorMarkers, setEditorMarkers] = useState<EditorMarker[]>([]);

    // Auto-format debounce
    const formatTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const validationTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null); // Added validation timer ref
    const lastFormattedRef = useRef<string>("");

    const langUpper = language.toUpperCase();

    const handleAlertClose = () => {
        setShowError(false);
        setSuccessMessage(null);
    };

    const showSuccess = (msg: string) => {
        setErrorMessage(null);
        setShowError(false);
        setSuccessMessage(msg);
        setTimeout(() => setSuccessMessage(null), 3000);
    };

    const runFormat = useCallback(
        async (code: string, currentTabSize: number) => {
            if (!code.trim()) {
                setOutputValue("");
                setFormatTime(null);
                handleAlertClose();
                return;
            }
            setIsFormatting(true);
            handleAlertClose();

            const start = performance.now();
            try {
                const formatted = await formatCode(code, language, { tabWidth: currentTabSize });
                const elapsed = performance.now() - start;
                setOutputValue(formatted);
                setFormatTime(parseFloat(elapsed.toFixed(2)));
                lastFormattedRef.current = code;
            } catch (err: any) {
                const elapsed = performance.now() - start;
                setFormatTime(parseFloat(elapsed.toFixed(2)));
                setErrorMessage(err.message || "An error occurred during formatting.");
                setShowError(true);
            } finally {
                setIsFormatting(false);
            }
        },
        [language]
    );

    const handleInputChange = useCallback(
        (val: string | undefined) => {
            const newVal = val || "";
            setInputValue(newVal);

            // Debounced Live Validation for Squigglies
            if (validationTimerRef.current) clearTimeout(validationTimerRef.current);
            validationTimerRef.current = setTimeout(async () => {
                if (newVal.trim()) {
                    const result = await validateCode(newVal, language);
                    if (!result.valid && result.line) {
                        setEditorMarkers([{ line: result.line, column: result.column || 1, message: result.error || "Syntax Error" }]);
                    } else {
                        setEditorMarkers([]);
                    }
                } else {
                    setEditorMarkers([]);
                }
            }, 800);

            if (autoFormat && newVal.trim()) {
                if (formatTimerRef.current) clearTimeout(formatTimerRef.current);
                formatTimerRef.current = setTimeout(() => {
                    if (newVal !== lastFormattedRef.current) {
                        runFormat(newVal, tabSize);
                    }
                }, 600);
            } else if (!newVal.trim()) {
                setOutputValue("");
                setFormatTime(null);
                handleAlertClose();
                setEditorMarkers([]);
            }
        },
        [autoFormat, runFormat, tabSize, language]
    );

    const handleInsertExample = useCallback(() => {
        const exampleText = EXAMPLES[language] || EXAMPLES["javascript"];
        handleInputChange(exampleText);
        setTimeout(() => {
            runFormat(exampleText, tabSize);
        }, 100);
    }, [language, handleInputChange, runFormat, tabSize]);

    useEffect(() => {
        return () => {
            if (formatTimerRef.current) clearTimeout(formatTimerRef.current);
            if (validationTimerRef.current) clearTimeout(validationTimerRef.current);
        };
    }, []);

    const handleManualFormat = async () => {
        await runFormat(inputValue, tabSize);
    };

    const handleMinify = async () => {
        if (!inputValue.trim()) return;
        setIsFormatting(true);
        try {
            const minified = await minifyCode(inputValue, language);
            setOutputValue(minified);
            setFormatTime(null);
            showSuccess("Code minified successfully!");
        } catch (e) {
            setErrorMessage("Failed to minify code.");
            setShowError(true);
        } finally {
            setIsFormatting(false);
        }
    };

    const handleValidate = async () => {
        if (!inputValue.trim()) {
            showSuccess("Code is empty, but valid.");
            return;
        }
        const result = await validateCode(inputValue, language);
        if (result.valid) {
            showSuccess(`Valid ${langUpper} code!`);
        } else {
            setErrorMessage(result.error || "Invalid code syntax.");
            setShowError(true);
        }
    };

    const handleTabSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newSize = parseInt(e.target.value, 10);
        setTabSize(newSize);
        if (inputValue.trim()) {
            runFormat(inputValue, newSize);
        }
    };

    const handleCopyOutput = useCallback(() => {
        if (!outputValue) return;
        navigator.clipboard.writeText(outputValue);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    }, [outputValue]);

    const handleClearAll = () => {
        setInputValue("");
        setOutputValue("");
        setFormatTime(null);
        handleAlertClose();
        lastFormattedRef.current = "";
        setEditorMarkers([]); // Clear markers on clear all
    };

    const getFileExtension = (lang: string) => {
        switch (lang) {
            case "javascript": case "babel": return "js";
            case "typescript": case "angular": return "ts";
            case "react": return "jsx";
            case "python": return "py";
            case "markdown": return "md";
            case "mdx": return "mdx";
            case "json": return "json";
            case "html": return "html";
            case "css": return "css";
            case "less": return "less";
            case "scss": return "scss";
            case "xml": return "xml";
            case "xaml": return "xaml";
            case "yaml": return "yaml";
            case "sql": return "sql";
            case "graphql": return "graphql";
            case "java": return "java";
            case "c": return "c";
            case "c++": return "cpp";
            case "c#": return "cs";
            case "php": return "php";
            case "ruby": return "rb";
            case "lua": return "lua";
            case "perl": return "pl";
            default: return "txt";
        }
    };

    const handleDownloadOutput = () => {
        if (!outputValue) return;
        const blob = new Blob([outputValue], { type: "text/plain" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `formatted.${getFileExtension(language)}`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    // ── Drag handlers for resizable split ──
    const handleMouseDown = useCallback((e: React.MouseEvent) => {
        e.preventDefault();
        isDragging.current = true;
        document.body.style.cursor = "col-resize";
        document.body.style.userSelect = "none";
    }, []);

    useEffect(() => {
        const stored = localStorage.getItem(`pretty-print-input-${language}`);
        if (stored) {
            setInputValue(stored);
            // Small delay to ensure formatter is ready if needed, though runFormat handles it
            setTimeout(() => runFormat(stored, tabSize), 100);
        }
    }, [language, runFormat, tabSize]);

    // Save to local storage whenever input changes
    useEffect(() => {
        if (inputValue) {
            localStorage.setItem(`pretty-print-input-${language}`, inputValue);
        }
    }, [inputValue, language]);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!isDragging.current || !containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const pct = (x / rect.width) * 100;
            setSplitRatio(Math.max(20, Math.min(80, pct)));
        };

        const handleMouseUp = () => {
            if (isDragging.current) {
                isDragging.current = false;
                document.body.style.cursor = "";
                document.body.style.userSelect = "";
            }
        };

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        };
    }, []);

    // ESC to exit fullscreen
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape" && fullscreenPanel) {
                setFullscreenPanel(null);
            }
        };
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [fullscreenPanel]);

    // Handle alternative Output Modes
    const currentOutputLanguage = outputMode === "Text" ? "plaintext" : language;

    const renderPanel = (type: "input" | "output", isFullscreen: boolean) => {
        const isInput = type === "input";

        return (
            <div
                className={`flex flex-col min-h-0 ${isFullscreen ? "fixed inset-0 z-[100] bg-background" : ""
                    }`}
                style={
                    !isFullscreen
                        ? {
                            width: fullscreenPanel ? (fullscreenPanel === type ? "100%" : "0%") : isInput ? `${splitRatio}%` : `${100 - splitRatio}%`,
                            display: fullscreenPanel && fullscreenPanel !== type ? "none" : undefined,
                        }
                        : undefined
                }
            >
                <div className="flex items-center justify-between px-3 py-1.5 border-b border-border/50 bg-muted/30 shrink-0 flex-wrap gap-2">
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1.5">
                            {isInput ? (
                                <FileInput className="w-3.5 h-3.5 text-muted-foreground" />
                            ) : (
                                <FileOutput className="w-3.5 h-3.5 text-muted-foreground" />
                            )}
                            <span className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground mr-1">
                                {isInput ? "Input" : "Output"}
                            </span>
                        </div>

                        {!isInput && (
                            <div className="flex items-center gap-2">
                                <select
                                    value={outputMode}
                                    onChange={(e) => setOutputMode(e.target.value)}
                                    className="bg-transparent text-[11px] text-muted-foreground border border-border/50 rounded px-1 py-0.5 outline-none focus:ring-1 focus:ring-emerald-500/50"
                                >
                                    <option value="Code">Code</option>
                                    <option value="Text">Text</option>
                                    <option value="Tree">Tree</option>
                                    <option value="Form">Form</option>
                                    <option value="Preview">Preview</option>
                                    <option value="Metrics">Metrics</option>
                                </select>
                            </div>
                        )}

                        {!isInput && outputValue && (
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse hidden sm:inline-block" />
                        )}
                        {!isInput && formatTime !== null && (
                            <span className="text-[10px] text-muted-foreground/60 font-mono flex items-center gap-1">
                                <Clock className="w-2.5 h-2.5 hidden sm:inline-block" />
                                <span className="hidden sm:inline-block">{formatTime}ms</span>
                            </span>
                        )}

                        <span className="text-[10px] text-muted-foreground/60 font-mono">
                            Ln {isInput ? inputCursor.line : outputCursor.line}, Col {isInput ? inputCursor.col : outputCursor.col}
                        </span>
                    </div>

                    <div className="flex items-center gap-0.5">
                        <button
                            onClick={() => setWordWrap(!wordWrap)}
                            className={`p-1 rounded transition-colors ${wordWrap
                                ? "text-emerald-400 bg-emerald-500/10"
                                : "text-muted-foreground/50 hover:text-muted-foreground"
                                }`}
                            title={wordWrap ? "Word wrap: on" : "Word wrap: off"}
                        >
                            <WrapText className="w-3.5 h-3.5" />
                        </button>
                        <button
                            onClick={() => setFullscreenPanel(fullscreenPanel === type ? null : type)}
                            className="p-1 rounded text-muted-foreground/50 hover:text-muted-foreground transition-colors"
                            title={fullscreenPanel === type ? "Exit fullscreen (Esc)" : "Fullscreen"}
                        >
                            {fullscreenPanel === type ? (
                                <Minimize2 className="w-3.5 h-3.5" />
                            ) : (
                                <Maximize2 className="w-3.5 h-3.5" />
                            )}
                        </button>
                        {isInput ? (
                            <button
                                onClick={handleClearAll}
                                className="p-1 rounded text-muted-foreground/50 hover:text-muted-foreground transition-colors"
                                title="Clear"
                            >
                                <Trash2 className="w-3.5 h-3.5" />
                            </button>
                        ) : (
                            <>
                                <button
                                    onClick={handleCopyOutput}
                                    className="p-1 rounded text-muted-foreground/50 hover:text-muted-foreground transition-colors"
                                    title="Copy"
                                    disabled={!outputValue}
                                >
                                    {copied ? (
                                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                                    ) : (
                                        <Copy className="w-3.5 h-3.5" />
                                    )}
                                </button>
                                <button
                                    onClick={handleDownloadOutput}
                                    className="p-1 rounded text-muted-foreground/50 hover:text-muted-foreground transition-colors"
                                    title="Download"
                                    disabled={!outputValue}
                                >
                                    <Download className="w-3.5 h-3.5" />
                                </button>
                            </>
                        )}
                    </div>
                </div>

                <div className="flex-1 min-h-0 relative">
                    {(!isInput && ["Tree", "Form", "Preview", "Metrics"].includes(outputMode)) ? (
                        <SpecializedViews mode={outputMode} language={language} code={outputValue} />
                    ) : (
                        <CodeEditor
                            language={isInput ? language : currentOutputLanguage}
                            value={isInput ? inputValue : outputValue}
                            onChange={isInput ? handleInputChange : undefined}
                            readOnly={!isInput}
                            onCursorChange={(line, col) => isInput ? setInputCursor({ line, col }) : setOutputCursor({ line, col })}
                            wordWrap={wordWrap}
                            markers={isInput ? editorMarkers : []}
                        />
                    )}

                    {isInput && !inputValue && (
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <button
                                onClick={handleInsertExample}
                                className="pointer-events-auto flex items-center gap-2 px-4 py-2 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-500 border border-emerald-500/20 rounded-lg shadow-sm backdrop-blur-sm transition-all text-sm font-medium"
                            >
                                <Wand2 className="w-4 h-4" />
                                Insert Example
                            </button>
                        </div>
                    )}
                </div>
            </div>
        );
    };

    return (
        <EditorProvider>
            <div className="flex flex-col h-[calc(100vh-3.5rem)] bg-background overflow-x-hidden">
                {/* ── Top Toolbar ── */}
                <div className="flex items-center justify-between px-4 py-2 border-b bg-card/80 backdrop-blur-md gap-3 flex-wrap shrink-0">
                    <div className="flex items-center gap-3 text-sm min-w-0">
                        <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors font-medium flex items-center gap-1.5">
                            Home
                        </Link>
                        <ChevronRight className="w-3 h-3 text-muted-foreground/50 shrink-0" />
                        <Select
                            value={language}
                            onValueChange={(val) => router.push(`/${val}`)}
                        >
                            <SelectTrigger className="h-7 w-fit min-w-[140px] px-2 py-0 text-xs font-semibold bg-primary/5 border-primary/10 hover:bg-primary/10 transition-colors uppercase tracking-wider">
                                <SelectValue placeholder="Select Language" />
                            </SelectTrigger>
                            <SelectContent className="max-h-[300px]">
                                {LANGUAGES_SEO.map((lang) => (
                                    <SelectItem key={lang.id} value={lang.id} className="text-xs uppercase font-mono">
                                        {lang.name}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        <span className="bg-emerald-500/10 text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded border border-emerald-500/20 uppercase tracking-wider hidden lg:inline-flex shrink-0">
                            {langUpper}
                        </span>
                    </div>

                    <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">

                        <div className="flex items-center gap-1.5 mr-1 bg-muted/40 rounded-md p-0.5 border border-border/50">
                            <span className="text-[10px] font-medium text-muted-foreground pl-2 pr-1 uppercase tracking-wider">Tab</span>
                            <select
                                value={tabSize}
                                onChange={handleTabSizeChange}
                                className="bg-background text-xs font-medium border border-border/50 rounded px-1.5 py-1 outline-none focus:ring-1 focus:ring-emerald-500/50"
                            >
                                <option value={2}>2 Spaces</option>
                                <option value={4}>4 Spaces</option>
                                <option value={8}>8 Spaces</option>
                            </select>
                        </div>

                        <Button
                            variant="outline"
                            size="sm"
                            onClick={handleValidate}
                            className="h-8 gap-1.5 text-xs border-border/50 hover:bg-muted/50 hidden sm:flex font-medium"
                            disabled={!inputValue.trim()}
                        >
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-500" />
                            Validate
                        </Button>

                        <Button
                            variant="outline"
                            size="sm"
                            onClick={handleMinify}
                            className="h-8 gap-1.5 text-xs border-border/50 hover:bg-muted/50 hidden sm:flex font-medium"
                            disabled={!inputValue.trim()}
                        >
                            <Shrink className="w-3.5 h-3.5 text-amber-500" />
                            Minify
                        </Button>

                        <div className="w-px h-5 bg-border/50 mx-0.5 hidden sm:block" />

                        <button
                            onClick={() => setAutoFormat(!autoFormat)}
                            className={`flex items-center gap-1.5 text-xs font-medium px-2.5 h-8 rounded-md border transition-all ${autoFormat
                                ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                                : "bg-muted/50 text-muted-foreground border-border/50 hover:text-foreground"
                                }`}
                            title={autoFormat ? "Auto-format is on" : "Auto-format is off"}
                        >
                            <RefreshCw className={`w-3.5 h-3.5 ${autoFormat ? "animate-spin-slow" : ""}`} />
                            <span className="hidden sm:inline">Auto</span>
                        </button>

                        <EditorSettingsModal />
                        <KeyboardShortcutsModal />

                        <Button
                            size="sm"
                            onClick={handleManualFormat}
                            disabled={isFormatting || !inputValue.trim()}
                            className="h-8 bg-emerald-600 hover:bg-emerald-500 text-white gap-2 px-4 font-semibold shadow-sm shadow-emerald-900/10 transition-all font-medium"
                        >
                            <RefreshCw className={`w-3.5 h-3.5 ${isFormatting ? "animate-spin" : ""}`} />
                            {isFormatting ? "Formatting..." : "Format"}
                        </Button>
                    </div>
                </div>

                {/* ── Editor Container ── */}
                <div ref={containerRef} className="flex-1 flex flex-col md:flex-row min-h-0 relative">
                    {renderPanel("input", fullscreenPanel === "input")}

                    {!fullscreenPanel && (
                        <div
                            className="hidden md:flex items-center justify-center w-1.5 cursor-col-resize group hover:bg-emerald-500/10 transition-colors relative shrink-0 select-none"
                            onMouseDown={handleMouseDown}
                        >
                            <div className="absolute inset-y-0 -left-1 -right-1 z-10" />
                            <div className="w-0.5 h-8 rounded-full bg-border/60 group-hover:bg-emerald-500/60 transition-colors" />
                        </div>
                    )}

                    {renderPanel("output", fullscreenPanel === "output")}
                </div>

                {/* ── Notifications Toast ── */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-full max-w-md z-50 px-4 flex flex-col gap-2 pointer-events-none">
                    {successMessage && (
                        <div className="bg-emerald-950/95 text-emerald-100 rounded-lg p-3 shadow-xl border border-emerald-800/40 backdrop-blur-md flex items-center gap-3 pointer-events-auto animate-in slide-in-from-bottom-5 fade-in duration-300">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                            <p className="font-medium text-sm text-emerald-200">{successMessage}</p>
                            <button onClick={() => setSuccessMessage(null)} className="ml-auto text-emerald-400 hover:text-emerald-200 transition-colors">
                                <X className="w-4 h-4" />
                            </button>
                        </div>
                    )}

                    {showError && errorMessage && (
                        <div className="bg-red-950/95 text-red-100 rounded-lg p-3 shadow-xl border border-red-800/40 backdrop-blur-md flex items-start gap-3 pointer-events-auto animate-in slide-in-from-bottom-5 fade-in duration-300">
                            <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                            <div className="flex-1 min-w-0">
                                <p className="font-semibold text-sm text-red-200">Processing Error</p>
                                <p className="text-xs text-red-300/90 mt-0.5 break-words max-h-24 overflow-y-auto">
                                    {errorMessage}
                                </p>
                            </div>
                            <button onClick={() => setShowError(false)} className="shrink-0 text-red-400 hover:text-red-200 transition-colors mt-0.5">
                                <X className="w-4 h-4" />
                            </button>
                        </div>
                    )}
                </div>

                {/* ── Status Bar ── */}
                <div className="flex items-center justify-between px-4 py-1.5 border-t border-border/50 bg-muted/20 text-[11px] text-muted-foreground shrink-0">
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1.5">
                            <span
                                className={`w-2 h-2 rounded-full shadow-sm ${isFormatting
                                    ? "bg-yellow-500 shadow-yellow-500/50 animate-pulse"
                                    : "bg-emerald-500 shadow-emerald-500/50"
                                    }`}
                            />
                            <span className="font-medium">
                                {isFormatting ? "Processing..." : "Ready"}
                            </span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Keyboard className="w-3 h-3" />
                            <span>UTF-8</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Braces className="w-3 h-3" />
                            <span>{langUpper}</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <span>{inputValue.split("\n").length} lines</span>
                        <span className="hidden sm:inline text-muted-foreground/50">
                            prettyprint.online
                        </span>
                    </div>
                </div>
            </div>
        </EditorProvider>
    );
}
