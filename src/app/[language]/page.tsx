import { Metadata } from "next";
import { notFound } from "next/navigation";
import { LanguageEditorClient } from "./client";
import { getLanguageSEO, LANGUAGES_SEO, SITE_CONFIG } from "@/lib/seo-data";
import { WebApplicationJsonLd, FAQJsonLd, BreadcrumbJsonLd } from "@/components/json-ld";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

type Props = {
    params: Promise<{ language: string }>;
};

/* ── Static Generation for all 25 language pages ── */
export async function generateStaticParams() {
    return LANGUAGES_SEO.map((lang) => ({
        language: lang.id,
    }));
}

/* ── Dynamic SEO Metadata ── */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const language = (await params).language;
    const seo = getLanguageSEO(language);

    if (!seo) {
        return {
            title: "Page Not Found",
        };
    }

    return {
        title: seo.title,
        description: seo.description,
        keywords: seo.keywords,
        alternates: {
            canonical: `${SITE_CONFIG.domain}/${encodeURIComponent(seo.id)}`,
        },
        openGraph: {
            title: seo.title,
            description: seo.description,
            url: `${SITE_CONFIG.domain}/${encodeURIComponent(seo.id)}`,
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: seo.title,
            description: seo.description,
        },
    };
}

/* ── Page Component ── */
export default async function LanguagePage({ params }: Props) {
    const lang = (await params).language;
    const seo = getLanguageSEO(lang);

    if (!seo) {
        notFound();
    }

    return (
        <>
            {/* Structured Data */}
            <WebApplicationJsonLd languageName={seo.name} url={`${SITE_CONFIG.domain}/${encodeURIComponent(seo.id)}`} />
            <FAQJsonLd faqs={seo.faqs} />
            <BreadcrumbJsonLd
                items={[
                    { name: "Pretty Print", url: SITE_CONFIG.domain },
                    { name: seo.h1, url: `${SITE_CONFIG.domain}/${encodeURIComponent(seo.id)}` },
                ]}
            />

            {/* Client Editor (interactive) */}
            <LanguageEditorClient language={lang} h1={seo.h1} subtitle={seo.subtitle} />

            {/* Server-rendered SEO Content (crawlable) */}
            <section className="border-t bg-muted/30">
                <div className="container px-4 py-12 max-w-screen-xl mx-auto">
                    {/* What is this tool */}
                    <div className="max-w-3xl mx-auto mb-12">
                        <h2 className="text-2xl font-bold mb-4">
                            What is {seo.h1}?
                        </h2>
                        <p className="text-muted-foreground leading-relaxed">
                            {seo.h1} is a free online tool that lets you instantly format,
                            beautify, and indent your {seo.name} code directly in your
                            browser. No signup, no installation, no server uploads — your
                            code stays 100% private. Simply paste your unformatted{" "}
                            {seo.name} code, click &quot;Format Code&quot;, and get clean,
                            readable output in seconds.
                        </p>
                    </div>

                    {/* How to use */}
                    <div className="max-w-3xl mx-auto mb-12">
                        <h2 className="text-2xl font-bold mb-4">
                            How to Pretty Print {seo.name} Online
                        </h2>
                        <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                            <li>Navigate to the <strong>{seo.name} formatter</strong> page (you&apos;re already here!).</li>
                            <li>Paste your messy or minified {seo.name} code into the editor above.</li>
                            <li>Click the <strong>&quot;Format Code&quot;</strong> button to instantly pretty print your code.</li>
                            <li>Copy the formatted result to your clipboard or download it as a file.</li>
                        </ol>
                    </div>

                    {/* FAQ Accordion */}
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-2xl font-bold mb-6">
                            {seo.name} Formatter — Frequently Asked Questions
                        </h2>
                        <Accordion type="single" collapsible className="w-full">
                            {seo.faqs.map((faq, i) => (
                                <AccordionItem key={i} value={`faq-${i}`}>
                                    <AccordionTrigger className="text-left text-base">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </section>
        </>
    );
}
