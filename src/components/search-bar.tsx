"use client";

import { useState, useRef, useEffect } from "react";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

interface LanguageItem {
    id: string;
    name: string;
    icon: string;
}

interface SearchBarProps {
    languages: LanguageItem[];
}

export function SearchBar({ languages }: SearchBarProps) {
    const [query, setQuery] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    const filtered = query.trim()
        ? languages.filter(
            (l) =>
                l.name.toLowerCase().includes(query.toLowerCase()) ||
                l.id.toLowerCase().includes(query.toLowerCase())
        )
        : [];

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (
                containerRef.current &&
                !containerRef.current.contains(e.target as Node)
            ) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    useEffect(() => {
        function handleKeyDown(e: KeyboardEvent) {
            if ((e.metaKey || e.ctrlKey) && e.key === "k") {
                e.preventDefault();
                inputRef.current?.focus();
            }
        }
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, []);

    const handleSelect = (id: string) => {
        setQuery("");
        setIsOpen(false);
        router.push(`/${encodeURIComponent(id)}`);
    };

    return (
        <div ref={containerRef} className="relative max-w-lg mx-auto w-full">
            <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                    ref={inputRef}
                    type="text"
                    placeholder="Search for a language (e.g., JSON, SQL, Python)..."
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value);
                        setIsOpen(true);
                    }}
                    onFocus={() => query.trim() && setIsOpen(true)}
                    className="w-full h-12 pl-11 pr-16 rounded-xl border bg-card text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all"
                />
                <kbd className="absolute right-3 top-1/2 -translate-y-1/2 hidden sm:inline-flex items-center gap-0.5 px-2 py-0.5 bg-muted text-muted-foreground text-[10px] font-mono rounded border">
                    ⌘K
                </kbd>
            </div>

            {/* Dropdown */}
            {isOpen && filtered.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-card border rounded-xl shadow-xl overflow-hidden z-50 max-h-72 overflow-y-auto">
                    {filtered.map((lang) => (
                        <button
                            key={lang.id}
                            onClick={() => handleSelect(lang.id)}
                            className="flex items-center gap-3 w-full px-4 py-3 hover:bg-muted/60 transition-colors text-left text-sm"
                        >
                            <span className="w-7 h-7 rounded-md bg-primary/10 flex items-center justify-center text-primary text-xs font-bold border border-primary/20 shrink-0">
                                {lang.icon}
                            </span>
                            <span className="font-medium">{lang.name} Formatter</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
