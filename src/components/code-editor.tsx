"use client";

import { useEffect, useRef } from "react";
import Editor, { Monaco } from "@monaco-editor/react";
import { useTheme } from "next-themes";
import { Loader2 } from "lucide-react";
import { useEditorSettings } from "@/lib/editor-store";

export interface EditorMarker {
    line: number;
    column: number;
    message: string;
}

interface CodeEditorProps {
    language: string;
    value: string;
    onChange?: (value: string | undefined) => void;
    readOnly?: boolean;
    onCursorChange?: (line: number, col: number) => void;
    wordWrap?: boolean;
    markers?: EditorMarker[];
}

export function CodeEditor({ language, value, onChange, readOnly = false, onCursorChange, wordWrap = true, markers = [] }: CodeEditorProps) {
    const { resolvedTheme } = useTheme();
    const { settings } = useEditorSettings();
    const editorRef = useRef<any>(null);
    const monacoRef = useRef<Monaco | null>(null);

    function handleEditorDidMount(editor: any, monaco: Monaco) {
        editorRef.current = editor;
        monacoRef.current = monaco;

        if (onCursorChange) {
            editor.onDidChangeCursorPosition((e: any) => {
                onCursorChange(e.position.lineNumber, e.position.column);
            });
        }
    }

    function handleEditorWillMount(monaco: Monaco) {
        // Configure JavaScript defaults for a better IDE experience
        monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions({
            noSemanticValidation: false,
            noSyntaxValidation: false,
        });

        monaco.languages.typescript.javascriptDefaults.setCompilerOptions({
            target: monaco.languages.typescript.ScriptTarget.ES2020,
            allowNonTsExtensions: true,
            moduleResolution: monaco.languages.typescript.ModuleResolutionKind.NodeJs,
            module: monaco.languages.typescript.ModuleKind.CommonJS,
            noEmit: true,
            typeRoots: ["node_modules/@types"]
        });

        // Configure TypeScript defaults
        monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
            target: monaco.languages.typescript.ScriptTarget.ES2020,
            allowNonTsExtensions: true,
            moduleResolution: monaco.languages.typescript.ModuleResolutionKind.NodeJs,
            module: monaco.languages.typescript.ModuleKind.CommonJS,
            noEmit: true,
            typeRoots: ["node_modules/@types"]
        });

        // Configure JSON defaults
        monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
            validate: true,
            allowComments: true,
            schemas: [] // Can be populated with popular schemas (e.g., package.json)
        });
    }

    useEffect(() => {
        if (!monacoRef.current || !editorRef.current) return;
        const model = editorRef.current.getModel();
        if (!model) return;

        if (markers && markers.length > 0) {
            const editorMarkers = markers.map(m => ({
                startLineNumber: m.line,
                startColumn: m.column,
                endLineNumber: m.line,
                endColumn: m.column + 1,
                message: m.message,
                severity: monacoRef.current!.MarkerSeverity.Error,
            }));
            monacoRef.current.editor.setModelMarkers(model, "owner", editorMarkers);
        } else {
            monacoRef.current.editor.setModelMarkers(model, "owner", []);
        }
    }, [markers]);

    const mapLanguage = (lang: string) => {
        switch (lang) {
            case "javascript": case "babel": case "react": return "javascript";
            case "typescript": case "angular": return "typescript";
            case "c++": return "cpp";
            case "c#": return "csharp";
            case "mdx": return "markdown";
            case "xaml": return "xml";
            case "json": return "json";
            case "html": return "html";
            case "css": return "css";
            case "less": return "less";
            case "scss": return "scss";
            case "sql": return "sql";
            case "python": return "python";
            case "xml": return "xml";
            case "markdown": return "markdown";
            case "yaml": return "yaml";
            case "graphql": return "graphql";
            case "java": return "java";
            case "c": return "c";
            case "php": return "php";
            case "ruby": return "ruby";
            case "lua": return "lua";
            case "perl": return "perl";
            default: return "plaintext";
        }
    };

    return (
        <div className="h-full w-full overflow-hidden bg-background relative flex items-center justify-center">
            <Editor
                height="100%"
                width="100%"
                theme={settings.theme === "system" ? (resolvedTheme === "dark" ? "vs-dark" : "light") : settings.theme}
                language={mapLanguage(language)}
                value={value}
                onChange={onChange}
                beforeMount={handleEditorWillMount}
                onMount={handleEditorDidMount}
                loading={
                    <div className="flex flex-col items-center justify-center text-muted-foreground gap-2">
                        <Loader2 className="h-6 w-6 animate-spin" />
                        <p className="text-sm">Loading Editor...</p>
                    </div>
                }
                options={{
                    minimap: { enabled: settings.minimap },
                    fontSize: settings.fontSize,
                    wordWrap: wordWrap ? "on" : "off",
                    padding: { top: 12, bottom: 12 },
                    readOnly: readOnly,
                    scrollBeyondLastLine: false,
                    smoothScrolling: true,
                    fontFamily: settings.fontFamily,
                    lineNumbers: settings.showLineNumbers ? "on" : "off",
                    renderLineHighlight: readOnly ? "none" : "line",
                    renderWhitespace: settings.showInvisibles ? "all" : "selection",
                    contextmenu: false,
                    folding: true,
                    glyphMargin: false,
                    lineDecorationsWidth: settings.showLineNumbers ? 10 : 0,
                    overviewRulerBorder: false,
                }}
            />
        </div>
    );
}
