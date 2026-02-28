import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { Code2, ChevronDown, Github } from "lucide-react";
import { Button } from "./ui/button";
import { LanguageSwitcher } from "./language-switcher";
import { getLocalizedHref } from "@/lib/locale-navigation";

export function Navbar({ dict, locale }: { dict?: any; locale?: string }) {
    const t = dict?.nav || {
        allFormats: "All Formats",
        clientSide: "Client-Side Only",
        starGithub: "Star us on GitHub"
    };
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 transition-all duration-300">
            <div className="container px-4 flex h-16 max-w-screen-xl items-center justify-between mx-auto">
                <div className="flex items-center gap-8">
                    <Link href={getLocalizedHref("/", locale)} className="flex items-center gap-2.5 group transition-all" title="Pretty Print — Free Online Code Formatter">
                        <div className="bg-primary text-primary-foreground p-2 rounded-xl shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform duration-300">
                            <Code2 className="h-5 w-5" />
                        </div>
                        <div className="flex flex-col leading-none">
                            <span className="font-black text-lg tracking-tight">
                                PRETTY<span className="text-primary italic">PRINT</span>
                            </span>
                            <span className="text-[10px] text-muted-foreground font-bold uppercase tracking-[0.2em] mt-0.5">
                                Pro Formatter
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-1 text-sm font-medium">
                        {[
                            { name: "JSON", href: "/json" },
                            { name: "SQL", href: "/sql" },
                            { name: "HTML", href: "/html" },
                            { name: "JS", href: "/javascript" },
                        ].map((item) => (
                            <Link
                                key={item.name}
                                href={getLocalizedHref(item.href, locale)}
                                className="px-4 py-2 rounded-lg hover:bg-muted/50 transition-colors relative group"
                            >
                                {item.name}
                                <span className="absolute bottom-1.5 left-4 right-4 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                            </Link>
                        ))}
                    </nav>
                </div>

                <div className="flex items-center gap-3">
                    <Link
                        href={getLocalizedHref("/#all-languages", locale)}
                        className="hidden md:flex items-center gap-1 px-4 py-2 rounded-lg hover:bg-muted/50 transition-colors text-sm font-medium text-muted-foreground hover:text-foreground"
                    >
                        {t.allFormats}
                        <ChevronDown className="w-3.5 h-3.5 opacity-50" />
                    </Link>
                    <Link href="https://github.com/prettyprintonline/prettyprint" target="_blank" rel="noopener noreferrer">
                        <Button variant="ghost" size="icon" className="hover:bg-muted/50 transition-colors" title={t.starGithub}>
                            <Github className="h-5 w-5" />
                            <span className="sr-only">GitHub</span>
                        </Button>
                    </Link>
                    <LanguageSwitcher />
                    <div className="hidden sm:flex items-center h-8 px-3 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-bold border border-emerald-500/20 uppercase tracking-wider animate-pulse mr-2">
                        {t.clientSide}
                    </div>
                </div>
            </div>
        </header>
    );
}
