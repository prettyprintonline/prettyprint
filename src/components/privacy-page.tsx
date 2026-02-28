import Link from "next/link";
import { Shield, Lock, EyeOff, Globe } from "lucide-react";

export function PrivacyPage({ dict }: { dict?: any }) {
    const t = dict?.privacy || {
        badge: "Privacy First",
        title: "Privacy Policy",
        subtitle: "Transparency is at the core of Pretty Print. Because your code never leaves your browser, your privacy is literally built into the architecture.",
        box1Title: "100% Client-Side",
        box1Desc: "We process all formatting, minification, and validation logic directly within your web browser using JavaScript and Web Workers. Your data is never transmitted to our servers.",
        box2Title: "No Data Logging",
        box2Desc: "Since we don't have a backend processing layer for your code, we cannot and do not log the contents of your formatting requests. What you paste is for your eyes only.",
        s1Title: "1. Information We Collect",
        s1Desc: "We aim for minimal data collection. We do not require account creation, and we do not store your source code. The only information we interact with includes:",
        s1Li1: "We use browser Local Storage to save your editor settings (theme, tab size) and your last input to improve your workflow between sessions. You can clear this anytime by clearing your browser cache.",
        s1Li2: "Standard web server logs (IP addresses, browser types) are collected by our hosting provider for security and analytics purposes, but these are never linked to the content you format.",
        s2Title: "2. Third-Party Services",
        s2Desc: "We may use third-party tools like Google Analytics to understand site traffic. These tools may use cookies to track anonymous usage patterns (pages visited, time on site). No code data is ever shared with these providers.",
        s3Title: "3. Security",
        s3Desc: "Security is our primary feature. By eliminating the transit of your code over the internet to a central server, we eliminate the primary risk associated with online development tools. Your data remains in your browser's memory partition.",
        s4Title: "4. Policy Updates",
        s4Desc: "We may update this policy periodically. Significant changes will be noted on this page. Last updated: February 2026.",
        s4Footer: "If you have questions, please reach out via our GitHub repository or main contact channels.",
        returnHome: "Return to Home"
    };

    return (
        <main className="min-h-screen bg-background pt-16">
            <div className="container px-4 py-20 max-w-4xl mx-auto">
                <header className="mb-16 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-bold border border-emerald-500/20 uppercase tracking-widest mb-6">
                        {t.badge}
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6">{t.title}</h1>
                    <p className="text-xl text-muted-foreground">
                        {t.subtitle}
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    <div className="p-6 bg-card border rounded-2xl shadow-sm">
                        <Lock className="w-10 h-10 text-primary mb-4" />
                        <h3 className="text-lg font-bold mb-2">{t.box1Title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            {t.box1Desc}
                        </p>
                    </div>
                    <div className="p-6 bg-card border rounded-2xl shadow-sm">
                        <EyeOff className="w-10 h-10 text-primary mb-4" />
                        <h3 className="text-lg font-bold mb-2">{t.box2Title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            {t.box2Desc}
                        </p>
                    </div>
                </div>

                <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
                    <section>
                        <h2 className="text-2xl font-bold">{t.s1Title}</h2>
                        <p className="text-lg leading-relaxed text-muted-foreground">
                            {t.s1Desc}
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                            <li><strong>Local Storage:</strong> {t.s1Li1}</li>
                            <li><strong>Technical Metadata:</strong> {t.s1Li2}</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold">{t.s2Title}</h2>
                        <p className="text-lg leading-relaxed text-muted-foreground">
                            {t.s2Desc}
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold">{t.s3Title}</h2>
                        <p className="text-lg leading-relaxed text-muted-foreground">
                            {t.s3Desc}
                        </p>
                    </section>

                    <section className="bg-muted/30 p-8 rounded-3xl border">
                        <h2 className="text-2xl font-bold mb-4">{t.s4Title}</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            {t.s4Desc}
                        </p>
                        <p className="mt-6 text-sm">
                            {t.s4Footer}
                        </p>
                    </section>
                </div>

                <footer className="mt-20 pt-10 border-t text-center">
                    <Link href="/" className="text-primary font-bold hover:underline">
                        {t.returnHome}
                    </Link>
                </footer>
            </div>
        </main>
    );
}
