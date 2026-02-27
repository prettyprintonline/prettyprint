"use client";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Keyboard } from "lucide-react";

const shortcuts = [
    { key: "Ctrl + S / Cmd + S", desc: "Format Code" },
    { key: "Ctrl + / / Cmd + /", desc: "Toggle Line Comment" },
    { key: "Ctrl + F / Cmd + F", desc: "Find Options" },
    { key: "Ctrl + H / Cmd + Option + F", desc: "Replace Options" },
    { key: "Alt + Z / Option + Z", desc: "Toggle Word Wrap" },
    { key: "F1", desc: "Show Command Palette" },
    { key: "Ctrl + Space", desc: "Trigger Suggestion" },
    { key: "Ctrl + [ / Cmd + [", desc: "Indent Line / Outdent Line" },
    { key: "Shift + Alt + F", desc: "Format Document (Native)" },
    { key: "Alt + Up / Down", desc: "Move Line Up / Down" },
];

export function KeyboardShortcutsModal() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <button
                    className="p-1 rounded text-muted-foreground/50 hover:text-muted-foreground transition-colors"
                    title="Keyboard Shortcuts"
                >
                    <Keyboard className="w-3.5 h-3.5" />
                </button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
                <DialogHeader>
                    <DialogTitle>Keyboard Shortcuts</DialogTitle>
                    <DialogDescription>
                        Quick references for the Monaco code editor.
                    </DialogDescription>
                </DialogHeader>

                <div className="py-2">
                    <div className="rounded-md border border-border/50 divide-y divide-border/50 overflow-hidden bg-muted/10">
                        {shortcuts.map((shortcut, idx) => (
                            <div key={idx} className="flex justify-between items-center px-4 py-2.5 text-sm hover:bg-muted/30 transition-colors">
                                <span className="text-muted-foreground">{shortcut.desc}</span>
                                <div className="flex gap-1.5 font-mono text-[11px] font-medium">
                                    {shortcut.key.split(' / ').map((k, i) => (
                                        <span key={i} className="bg-muted px-2 py-0.5 rounded shadow-sm border border-border/50 text-foreground">
                                            {k}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
