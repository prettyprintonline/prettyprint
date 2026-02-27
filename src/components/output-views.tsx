import { useState } from "react";
import { ChevronRight, ChevronDown, CheckCircle2, AlertCircle, BarChart3 } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface SpecializedViewsProps {
    mode: string;
    language: string;
    code: string;
}

export function SpecializedViews({ mode, language, code }: SpecializedViewsProps) {
    if (!code.trim()) {
        return (
            <div className="absolute inset-0 flex items-center justify-center bg-muted/5 p-6 text-center">
                <p className="text-muted-foreground text-sm">No output to display.</p>
            </div>
        );
    }

    const isJsonLike = ["json", "yaml", "javascript", "typescript"].includes(language);
    let parsedJson: any = null;
    let jsonError = false;

    if (isJsonLike && (mode === "Tree" || mode === "Form")) {
        try {
            // Basic extraction for JS objects if possible, but let's stick to strict JSON parsing for safety
            parsedJson = JSON.parse(code);
        } catch (e) {
            jsonError = true;
        }
    }

    // Handle Tree & Form for JSON
    if (mode === "Tree" || mode === "Form") {
        if (!isJsonLike) {
            return (
                <div className="absolute inset-0 flex items-center justify-center bg-muted/5 p-6 text-center">
                    <div className="max-w-md">
                        <p className="text-muted-foreground text-sm">
                            The <strong>{mode}</strong> mode is optimized for structured data formats like JSON.
                            For <strong>{language}</strong>, please use Code or Text mode.
                        </p>
                    </div>
                </div>
            );
        }

        if (jsonError) {
            return (
                <div className="absolute inset-0 flex items-center justify-center bg-muted/5 p-6 text-center">
                    <div className="max-w-md flex flex-col items-center gap-3">
                        <AlertCircle className="w-8 h-8 text-red-400" />
                        <p className="text-red-400 text-sm font-medium">Invalid JSON Data</p>
                        <p className="text-muted-foreground text-xs">
                            The current output is not valid JSON. Please ensure the code is error-free to use {mode} mode.
                        </p>
                    </div>
                </div>
            );
        }

        if (mode === "Tree") {
            return (
                <div className="absolute inset-0 overflow-auto p-4 bg-background">
                    <JsonTree data={parsedJson} name="root" isRoot />
                </div>
            );
        }

        if (mode === "Form") {
            return (
                <div className="absolute inset-0 overflow-auto p-6 bg-background">
                    <div className="max-w-3xl mx-auto space-y-6">
                        <div className="border-b pb-4 mb-6">
                            <h3 className="text-lg font-semibold flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                                Data Entry Form
                            </h3>
                            <p className="text-xs text-muted-foreground mt-1">Generated dynamically from JSON structure.</p>
                        </div>
                        <JsonForm data={parsedJson} name="root" />
                    </div>
                </div>
            );
        }
    }

    // Handle Preview mode
    if (mode === "Preview") {
        const isHtmlLike = ["html", "svg", "xml"].includes(language);
        const isMarkdownLike = ["markdown", "mdx"].includes(language);

        if (isMarkdownLike) {
            return (
                <div className="absolute inset-0 overflow-auto p-6 bg-background">
                    <div className="max-w-4xl mx-auto prose prose-emerald prose-sm dark:prose-invert">
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                            {code}
                        </ReactMarkdown>
                    </div>
                </div>
            );
        }

        if (isHtmlLike) {
            return (
                <div className="absolute inset-0 bg-white">
                    <iframe
                        srcDoc={code}
                        className="w-full h-full border-none"
                        title="HTML Preview"
                        sandbox="allow-scripts allow-same-origin"
                    />
                </div>
            );
        }

        return (
            <div className="absolute inset-0 flex items-center justify-center bg-muted/5 p-6 text-center">
                <div className="max-w-md">
                    <p className="text-muted-foreground text-sm">
                        The <strong>Preview</strong> mode renders web UI like HTML, SVG, or Markdown.
                        For <strong>{language}</strong>, please use Code or Text mode.
                    </p>
                </div>
            </div>
        );
    }

    // Handle Metrics mode
    if (mode === "Metrics") {
        const lines = code.split("\n").length;
        const chars = code.length;
        const words = code.trim().split(/\s+/).filter(Boolean).length;
        const sizeBytes = new Blob([code]).size;

        const formatBytes = (bytes: number) => {
            if (bytes < 1024) return bytes + " B";
            else if (bytes < 1048576) return (bytes / 1024).toFixed(2) + " KB";
            else return (bytes / 1048576).toFixed(2) + " MB";
        };

        return (
            <div className="absolute inset-0 overflow-auto p-6 bg-background flex flex-col items-center pt-16">
                <div className="max-w-md w-full space-y-6">
                    <div className="text-center mb-8">
                        <div className="mx-auto w-12 h-12 bg-emerald-500/10 rounded-full flex items-center justify-center mb-4">
                            <BarChart3 className="w-6 h-6 text-emerald-500" />
                        </div>
                        <h3 className="text-lg font-semibold text-foreground">Output Metrics</h3>
                        <p className="text-sm text-muted-foreground mt-1">Detailed statistics for the formatted code.</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-muted/30 border border-border/50 rounded-lg p-4 flex flex-col">
                            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">File Size</span>
                            <span className="text-2xl font-bold text-foreground">{formatBytes(sizeBytes)}</span>
                        </div>
                        <div className="bg-muted/30 border border-border/50 rounded-lg p-4 flex flex-col">
                            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Lines</span>
                            <span className="text-2xl font-bold text-foreground">{lines.toLocaleString()}</span>
                        </div>
                        <div className="bg-muted/30 border border-border/50 rounded-lg p-4 flex flex-col">
                            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Characters</span>
                            <span className="text-2xl font-bold text-foreground">{chars.toLocaleString()}</span>
                        </div>
                        <div className="bg-muted/30 border border-border/50 rounded-lg p-4 flex flex-col">
                            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Words</span>
                            <span className="text-2xl font-bold text-foreground">{words.toLocaleString()}</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return null;
}

/* ── Tree Component ── */
function JsonTree({ data, name, isRoot = false }: { data: any, name: string, isRoot?: boolean }) {
    const [isExpanded, setIsExpanded] = useState(true);

    if (typeof data !== "object" || data === null) {
        return (
            <div className="flex items-start gap-2 py-0.5 ml-5 text-[13px] font-mono hover:bg-muted/30 px-1 rounded transition-colors">
                <span className="text-blue-400">"{name}"</span>
                <span className="text-muted-foreground">:</span>
                <span className={
                    typeof data === "string" ? "text-emerald-400 break-all" :
                        typeof data === "number" ? "text-orange-400" :
                            typeof data === "boolean" ? "text-purple-400" : "text-muted-foreground"
                }>
                    {typeof data === "string" ? `"${data}"` : String(data)}
                </span>
            </div>
        );
    }

    const isArray = Array.isArray(data);
    const keys = Object.keys(data);
    const isEmpty = keys.length === 0;

    return (
        <div className="text-[13px] font-mono">
            <div
                className="flex items-center gap-1 py-0.5 hover:bg-muted/30 px-1 rounded transition-colors cursor-pointer select-none"
                onClick={() => setIsExpanded(!isExpanded)}
            >
                {!isEmpty ? (
                    isExpanded ? <ChevronDown className="w-3.5 h-3.5 text-muted-foreground" /> : <ChevronRight className="w-3.5 h-3.5 text-muted-foreground" />
                ) : (
                    <span className="w-3.5 h-3.5"></span>
                )}

                {!isRoot && (
                    <>
                        <span className="text-blue-400">"{name}"</span>
                        <span className="text-muted-foreground">:</span>
                    </>
                )}
                <span className="text-muted-foreground">
                    {isArray ? "[" : "{"} {isEmpty ? (isArray ? "]" : "}") : ""} {!isExpanded && !isEmpty ? `... ${isArray ? "]" : "}"} // ${keys.length} items` : ""}
                </span>
            </div>

            {isExpanded && !isEmpty && (
                <div className="ml-4 border-l border-border/50 pl-2">
                    {keys.map((k, i) => (
                        <div key={k}>
                            <JsonTree data={data[k as keyof typeof data]} name={k} />
                            {i < keys.length - 1 && <span className="text-muted-foreground ml-5">,</span>}
                        </div>
                    ))}
                </div>
            )}

            {isExpanded && !isEmpty && (
                <div className="ml-5 text-muted-foreground">
                    {isArray ? "]" : "}"}
                </div>
            )}
        </div>
    );
}

/* ── Form Component ── */
function JsonForm({ data, name, path = "" }: { data: any, name: string, path?: string }) {
    if (typeof data !== "object" || data === null) {
        return (
            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-2 items-center mb-4">
                <label className="text-sm font-medium text-muted-foreground break-all" title={path || name}>
                    {name.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                </label>
                {typeof data === "boolean" ? (
                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            defaultChecked={data}
                            className="w-4 h-4 rounded border-border bg-input text-emerald-500 focus:ring-emerald-500/50"
                            readOnly
                        />
                        <span className="text-sm">{data ? "True" : "False"}</span>
                    </div>
                ) : typeof data === "number" ? (
                    <input
                        type="number"
                        defaultValue={data}
                        className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-500 disabled:cursor-not-allowed disabled:opacity-50"
                        readOnly
                    />
                ) : (
                    <input
                        type="text"
                        defaultValue={data}
                        className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-500 disabled:cursor-not-allowed disabled:opacity-50"
                        readOnly
                    />
                )}
            </div>
        );
    }

    const isArray = Array.isArray(data);
    const keys = Object.keys(data);

    return (
        <div className="mb-6">
            {name !== "root" && (
                <h4 className="text-sm font-semibold mb-3 pb-1 border-b inline-block text-foreground capitalize">
                    {name.replace(/([A-Z])/g, ' $1')} {isArray ? `(${keys.length} items)` : ""}
                </h4>
            )}
            <div className={name !== "root" ? "pl-4 ml-2 border-l border-border/50" : ""}>
                {keys.map(k => (
                    <JsonForm key={path + "." + k} data={data[k as keyof typeof data]} name={isArray ? `Item ${parseInt(k) + 1}` : k} path={path ? `${path}.${k}` : k} />
                ))}
                {keys.length === 0 && (
                    <p className="text-xs text-muted-foreground italic">Empty {isArray ? "list" : "object"}</p>
                )}
            </div>
        </div>
    );
}

