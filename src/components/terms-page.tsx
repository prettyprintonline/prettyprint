import Link from "next/link";
import { Scale, CheckCircle, AlertTriangle, HelpCircle } from "lucide-react";

export function TermsPage({ dict }: { dict?: any }) {
    const t = dict?.terms || {
        badge: "Usage Guidelines",
        title: "Terms of Service",
        subtitle: "By using Pretty Print, you agree to these simple terms designed to keep the service free and fast for everyone.",
        s1Title: "1. Acceptance of Terms",
        s1Desc: "Pretty Print provides a web-based code formatting service. By accessing our website, you acknowledge that you have read, understood, and agree to be bound by these terms. This service is provided 'as is' without warranty of any kind.",
        s2Title: "2. Permitted Use",
        s2Desc: "You are free to use Pretty Print for personal, educational, or commercial purposes. You may format as much code as you need. However, you agree not to:",
        s2Li1: "Use the service for any illegal activities or to process malicious code.",
        s2Li2: "Attempt to scrape, heavy-load, or DDoS the platform services.",
        s2Li3: "Bypass any security measures or rate limits if implemented.",
        s3Title: "3. Limitation of Liability",
        s3Desc: "While we strive for 100% accuracy in our formatting algorithms, Pretty Print is not responsible for any bugs, data loss, or system failures that may occur after you use the formatted output in your own projects. Always verify critical code before deployment.",
        s4Title: "4. Intellectual Property",
        s4Desc: "Pretty Print does not claim any ownership over the code you paste or format. The code remains your intellectual property. Our website's design, logo, and custom logic remain the property of the Pretty Print developers.",
        returnHome: "Back to Toolbase"
    };

    return (
        <main className="min-h-screen bg-background pt-16">
            <div className="container px-4 py-20 max-w-4xl mx-auto">
                <header className="mb-16 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-500 text-xs font-bold border border-blue-500/20 uppercase tracking-widest mb-6">
                        {t.badge}
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6">{t.title}</h1>
                    <p className="text-xl text-muted-foreground">
                        {t.subtitle}
                    </p>
                </header>

                <div className="prose prose-neutral dark:prose-invert max-w-none space-y-12">
                    <section>
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center border border-primary/10">
                                <CheckCircle className="w-5 h-5 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold m-0">{t.s1Title}</h2>
                        </div>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            {t.s1Desc}
                        </p>
                    </section>

                    <section>
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center border border-primary/10">
                                <Scale className="w-5 h-5 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold m-0">{t.s2Title}</h2>
                        </div>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            {t.s2Desc}
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                            <li>{t.s2Li1}</li>
                            <li>{t.s2Li2}</li>
                            <li>{t.s2Li3}</li>
                        </ul>
                    </section>

                    <section>
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center border border-primary/10">
                                <AlertTriangle className="w-5 h-5 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold m-0">{t.s3Title}</h2>
                        </div>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            {t.s3Desc}
                        </p>
                    </section>

                    <section className="bg-card border rounded-3xl p-8 shadow-sm">
                        <div className="flex items-center gap-4 mb-4">
                            <HelpCircle className="w-6 h-6 text-primary" />
                            <h2 className="text-2xl font-bold m-0">{t.s4Title}</h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed mb-0">
                            {t.s4Desc}
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
