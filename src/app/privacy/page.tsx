import Link from "next/link";
import { Shield, Lock, EyeOff, Globe } from "lucide-react";

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-background pt-16">
            <div className="container px-4 py-20 max-w-4xl mx-auto">
                <header className="mb-16 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-bold border border-emerald-500/20 uppercase tracking-widest mb-6">
                        Privacy First
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6">Privacy Policy</h1>
                    <p className="text-xl text-muted-foreground">
                        Transparency is at the core of Pretty Print. Because your code never leaves your browser, your privacy is literally built into the architecture.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    <div className="p-6 bg-card border rounded-2xl shadow-sm">
                        <Lock className="w-10 h-10 text-primary mb-4" />
                        <h3 className="text-lg font-bold mb-2">100% Client-Side</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            We process all formatting, minification, and validation logic directly within your web browser using JavaScript and Web Workers. Your data is never transmitted to our servers.
                        </p>
                    </div>
                    <div className="p-6 bg-card border rounded-2xl shadow-sm">
                        <EyeOff className="w-10 h-10 text-primary mb-4" />
                        <h3 className="text-lg font-bold mb-2">No Data Logging</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Since we don't have a backend processing layer for your code, we cannot and do not log the contents of your formatting requests. What you paste is for your eyes only.
                        </p>
                    </div>
                </div>

                <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
                    <section>
                        <h2 className="text-2xl font-bold">1. Information We Collect</h2>
                        <p className="text-lg leading-relaxed text-muted-foreground">
                            We aim for minimal data collection. We do not require account creation, and we do not store your source code. The only information we interact with includes:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                            <li><strong>Local Storage:</strong> We use browser Local Storage to save your editor settings (theme, tab size) and your last input to improve your workflow between sessions. You can clear this anytime by clearing your browser cache.</li>
                            <li><strong>Technical Metadata:</strong> Standard web server logs (IP addresses, browser types) are collected by our hosting provider for security and analytics purposes, but these are never linked to the content you format.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold">2. Third-Party Services</h2>
                        <p className="text-lg leading-relaxed text-muted-foreground">
                            We may use third-party tools like Google Analytics to understand site traffic. These tools may use cookies to track anonymous usage patterns (pages visited, time on site). No code data is ever shared with these providers.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold">3. Security</h2>
                        <p className="text-lg leading-relaxed text-muted-foreground">
                            Security is our primary feature. By eliminating the transit of your code over the internet to a central server, we eliminate the primary risk associated with online development tools. Your data remains in your browser's memory partition.
                        </p>
                    </section>

                    <section className="bg-muted/30 p-8 rounded-3xl border">
                        <h2 className="text-2xl font-bold mb-4">4. Policy Updates</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            We may update this policy periodically. Significant changes will be noted on this page. Last updated: February 2026.
                        </p>
                        <p className="mt-6 text-sm">
                            If you have questions, please reach out via our GitHub repository or main contact channels.
                        </p>
                    </section>
                </div>

                <footer className="mt-20 pt-10 border-t text-center">
                    <Link href="/" className="text-primary font-bold hover:underline">
                        Return to Home
                    </Link>
                </footer>
            </div>
        </main>
    );
}
