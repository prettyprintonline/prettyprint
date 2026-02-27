import Link from "next/link";
import { Search, Home, ArrowRight, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
    return (
        <main className="min-h-[80vh] flex flex-col items-center justify-center bg-background text-foreground px-4">
            <div className="text-center max-w-2xl mx-auto">
                {/* Animated Icon */}
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-primary/10 border border-primary/20 mb-8 animate-bounce">
                    <Search className="w-12 h-12 text-primary" />
                </div>

                <h1 className="text-6xl md:text-8xl font-black mb-6 bg-linear-to-b from-foreground to-foreground/40 bg-clip-text text-transparent">
                    404
                </h1>

                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    Oops! This page went missing.
                </h2>

                <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
                    The code you're looking for might have been minified out of existence or moved to a new repository. Don't worry, our formatting tools are still ready for you!
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                    <Button asChild size="lg" className="rounded-xl h-12 px-8">
                        <Link href="/">
                            <Home className="mr-2 h-4 w-4" />
                            Return Home
                        </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="rounded-xl h-12 px-8">
                        <Link href="/#all-languages">
                            Browse All 26+ Languages
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-lg mx-auto">
                    {[
                        { name: "JSON", href: "/json" },
                        { name: "SQL", href: "/sql" },
                        { name: "HTML", href: "/html" },
                        { name: "JS", href: "/javascript" },
                    ].map((tool) => (
                        <Link
                            key={tool.href}
                            href={tool.href}
                            className="flex items-center justify-center gap-2 p-3 bg-card border rounded-xl hover:border-primary/50 transition-colors text-sm font-semibold"
                        >
                            <Code2 className="w-4 h-4 text-primary" />
                            {tool.name}
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}
