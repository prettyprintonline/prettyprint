"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface EditorSettings {
    theme: string;
    fontSize: number;
    fontFamily: string;
    minimap: boolean;
    showLineNumbers: boolean;
    showInvisibles: boolean;
}

const defaultSettings: EditorSettings = {
    theme: "system", // "system", "vs-dark", "light", "hc-black"
    fontSize: 13,
    fontFamily: "'JetBrains Mono', 'Fira Code', 'Menlo', 'Monaco', 'Courier New', monospace",
    minimap: false,
    showLineNumbers: true,
    showInvisibles: false,
};

interface EditorContextType {
    settings: EditorSettings;
    updateSettings: (newSettings: Partial<EditorSettings>) => void;
}

const EditorContext = createContext<EditorContextType | undefined>(undefined);

export function EditorProvider({ children }: { children: ReactNode }) {
    const [settings, setSettings] = useState<EditorSettings>(defaultSettings);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem("pretty-print-editor-settings");
        if (saved) {
            try {
                setSettings({ ...defaultSettings, ...JSON.parse(saved) });
            } catch (e) { }
        }
        setIsLoaded(true);
    }, []);

    const updateSettings = (newSettings: Partial<EditorSettings>) => {
        setSettings((prev) => {
            const updated = { ...prev, ...newSettings };
            localStorage.setItem("pretty-print-editor-settings", JSON.stringify(updated));
            return updated;
        });
    };

    // Prevent hydration mismatch by optionally rendering children directly if preferred
    // but since it's a client provider, returning early is fine.
    if (!isLoaded) {
        // Just render children with default settings to prevent blocking
        return (
            <EditorContext.Provider value={{ settings: defaultSettings, updateSettings }}>
                {children}
            </EditorContext.Provider>
        );
    }

    return (
        <EditorContext.Provider value={{ settings, updateSettings }}>
            {children}
        </EditorContext.Provider>
    );
}

export function useEditorSettings() {
    const context = useContext(EditorContext);
    if (context === undefined) {
        throw new Error("useEditorSettings must be used within an EditorProvider");
    }
    return context;
}
