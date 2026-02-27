import Link from "next/link";
import { SITE_CONFIG } from "@/lib/seo-data";

export function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t py-8 md:py-0">
            <div className="container px-4 flex flex-col items-center justify-between gap-4 md:h-20 md:flex-row max-w-screen-xl mx-auto">
                <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
                    © {year}{" "}
                    <Link href="/" className="font-medium hover:text-primary transition-colors">
                        {SITE_CONFIG.name}
                    </Link>
                    . Free online code formatter &amp; beautifier. Your code never leaves your browser.
                </p>
                <nav className="flex items-center gap-4 text-sm text-muted-foreground">
                    <Link href="/" className="hover:text-primary transition-colors">
                        Home
                    </Link>
                    <Link href="/json" className="hover:text-primary transition-colors">
                        JSON
                    </Link>
                    <Link href="/html" className="hover:text-primary transition-colors">
                        HTML
                    </Link>
                    <Link href="/javascript" className="hover:text-primary transition-colors">
                        JavaScript
                    </Link>
                    <Link href="/sql" className="hover:text-primary transition-colors">
                        SQL
                    </Link>
                    <div className="w-px h-3 bg-border mx-1 hidden sm:block" />
                    <Link href="/privacy" className="hover:text-primary transition-colors">
                        Privacy
                    </Link>
                    <Link href="/terms" className="hover:text-primary transition-colors">
                        Terms
                    </Link>
                </nav>
            </div>
        </footer>
    );
}
