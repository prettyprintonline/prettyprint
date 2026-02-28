import Link from "next/link";
import { SITE_CONFIG } from "@/lib/seo-data";
import { getLocalizedHref } from "@/lib/locale-navigation";

export function Footer({ dict, locale }: { dict?: any; locale?: string }) {
    const t = dict?.footer || {
        description: "Free online code formatter & beautifier. Your code never leaves your browser.",
        home: "Home",
        privacy: "Privacy",
        terms: "Terms"
    };
    const year = new Date().getFullYear();

    return (
        <footer className="border-t py-8 md:py-0">
            <div className="container px-4 flex flex-col items-center justify-between gap-4 md:h-20 md:flex-row max-w-screen-xl mx-auto">
                <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
                    © {year}{" "}
                    <Link href={getLocalizedHref("/", locale)} className="font-medium hover:text-primary transition-colors">
                        {SITE_CONFIG.name}
                    </Link>
                    . {t.description}
                </p>
                <nav className="flex items-center gap-4 text-sm text-muted-foreground">
                    <Link href={getLocalizedHref("/", locale)} className="hover:text-primary transition-colors">
                        {t.home}
                    </Link>
                    <Link href={getLocalizedHref("/json", locale)} className="hover:text-primary transition-colors">
                        JSON
                    </Link>
                    <Link href={getLocalizedHref("/html", locale)} className="hover:text-primary transition-colors">
                        HTML
                    </Link>
                    <Link href={getLocalizedHref("/javascript", locale)} className="hover:text-primary transition-colors">
                        JavaScript
                    </Link>
                    <Link href={getLocalizedHref("/sql", locale)} className="hover:text-primary transition-colors">
                        SQL
                    </Link>
                    <div className="w-px h-3 bg-border mx-1 hidden sm:block" />
                    <Link href={getLocalizedHref("/privacy", locale)} className="hover:text-primary transition-colors">
                        {t.privacy}
                    </Link>
                    <Link href={getLocalizedHref("/terms", locale)} className="hover:text-primary transition-colors">
                        {t.terms}
                    </Link>
                </nav>
            </div>
        </footer>
    );
}
