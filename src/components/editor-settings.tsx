"use client";

import { useEditorSettings } from "@/lib/editor-store";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Settings2 } from "lucide-react";

export function EditorSettingsModal() {
    const { settings, updateSettings } = useEditorSettings();

    // Basic map extraction to rehydrate select dropdown correctly
    const extractFontFamily = (ff: string) => {
        if (ff.includes("Fira Code")) return "Fira Code";
        if (ff.includes("Menlo")) return "Menlo";
        if (ff.includes("Courier New")) return "Courier New";
        return "JetBrains Mono";
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <button
                    className="p-1 rounded text-muted-foreground/50 hover:text-muted-foreground transition-colors"
                    title="Editor Settings"
                >
                    <Settings2 className="w-3.5 h-3.5" />
                </button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
                <DialogHeader>
                    <DialogTitle>Editor Settings</DialogTitle>
                    <DialogDescription>
                        Customize your coding environment.
                    </DialogDescription>
                </DialogHeader>

                <div className="space-y-6 py-4">
                    <div className="space-y-4">
                        <h4 className="text-sm font-medium border-b pb-2">Appearance</h4>

                        <div className="grid grid-cols-[1fr_auto] items-center gap-4">
                            <Label className="text-sm font-normal text-muted-foreground">Editor Theme</Label>
                            <Select
                                value={settings.theme}
                                onValueChange={(val: string) => updateSettings({ theme: val })}
                            >
                                <SelectTrigger className="w-[180px] h-8">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="system">System Default</SelectItem>
                                    <SelectItem value="vs-dark">VS Dark</SelectItem>
                                    <SelectItem value="light">VS Light</SelectItem>
                                    <SelectItem value="hc-black">High Contrast</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="grid grid-cols-[1fr_auto] items-center gap-4">
                            <Label className="text-sm font-normal text-muted-foreground">Font Family</Label>
                            <Select
                                value={extractFontFamily(settings.fontFamily)}
                                onValueChange={(val: string) => updateSettings({ fontFamily: `'${val}', 'Fira Code', 'Menlo', 'Monaco', 'Courier New', monospace` })}
                            >
                                <SelectTrigger className="w-[180px] h-8">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="JetBrains Mono">JetBrains Mono</SelectItem>
                                    <SelectItem value="Fira Code">Fira Code</SelectItem>
                                    <SelectItem value="Menlo">Menlo</SelectItem>
                                    <SelectItem value="Courier New">Courier New</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="grid grid-cols-[1fr_auto] items-center gap-4">
                            <Label className="text-sm font-normal text-muted-foreground">Font Size</Label>
                            <Select
                                value={settings.fontSize.toString()}
                                onValueChange={(val: string) => updateSettings({ fontSize: parseInt(val) })}
                            >
                                <SelectTrigger className="w-[180px] h-8">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="11">11px</SelectItem>
                                    <SelectItem value="12">12px</SelectItem>
                                    <SelectItem value="13">13px</SelectItem>
                                    <SelectItem value="14">14px</SelectItem>
                                    <SelectItem value="16">16px</SelectItem>
                                    <SelectItem value="18">18px</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-sm font-medium border-b pb-2 mt-2">Behavior</h4>

                        <div className="flex items-center justify-between">
                            <Label htmlFor="minimap" className="font-normal text-muted-foreground">Show Minimap</Label>
                            <Switch
                                id="minimap"
                                checked={settings.minimap}
                                onCheckedChange={(val: boolean) => updateSettings({ minimap: val })}
                            />
                        </div>

                        <div className="flex items-center justify-between">
                            <Label htmlFor="linenumbers" className="font-normal text-muted-foreground">Show Line Numbers</Label>
                            <Switch
                                id="linenumbers"
                                checked={settings.showLineNumbers}
                                onCheckedChange={(val: boolean) => updateSettings({ showLineNumbers: val })}
                            />
                        </div>

                        <div className="flex items-center justify-between">
                            <Label htmlFor="invisibles" className="font-normal text-muted-foreground">Show Whitespace Characters</Label>
                            <Switch
                                id="invisibles"
                                checked={settings.showInvisibles}
                                onCheckedChange={(val: boolean) => updateSettings({ showInvisibles: val })}
                            />
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
