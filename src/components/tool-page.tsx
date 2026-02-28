import { LanguageEditorClient } from "./tool-client";
import { LanguageSEO, SITE_CONFIG } from "@/lib/seo-data";
import { WebApplicationJsonLd, FAQJsonLd, BreadcrumbJsonLd } from "@/components/json-ld";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

type Props = {
    config: LanguageSEO;
    dict?: any;
};

export default function ToolPage({ config: seo, dict }: Props) {
    const lang = seo.id;

    const t = dict?.tool || {
        whatIs: "What is",
        howTo: "How to Pretty Print",
        online: "Online",
        faqs: "Formatter — Frequently Asked Questions",
        p1_1: "is a free online tool that lets you instantly format, beautify, and indent your",
        p1_2: "code directly in your browser. No signup, no installation, no server uploads — your code stays 100% private. Simply paste your unformatted",
        p1_3: "code, click \"Format Code\", and get clean, readable output in seconds.",
        li1: "Navigate to the",
        li1_2: "formatter page (you're already here!).",
        li2: "Paste your messy or minified",
        li2_2: "code into the editor above.",
        li3: "Click the",
        li3_1: '"Format Code"',
        li3_2: "button to instantly pretty print your code.",
        li4: "Copy the formatted result to your clipboard or download it as a file."
    };

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
                            {t.whatIs} {seo.h1}?
                        </h2>
                        <p className="text-muted-foreground leading-relaxed">
                            {seo.h1} {t.p1_1} {seo.name} {t.p1_2} {seo.name} {t.p1_3}
                        </p>
                    </div>

                    {/* How to use */}
                    <div className="max-w-3xl mx-auto mb-12">
                        <h2 className="text-2xl font-bold mb-4">
                            {t.howTo} {seo.name} {t.online}
                        </h2>
                        <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                            <li>{t.li1} <strong>{seo.name} {t.li1_2}</strong></li>
                            <li>{t.li2} {seo.name} {t.li2_2}</li>
                            <li>{t.li3} <strong>{t.li3_1}</strong> {t.li3_2}</li>
                            <li>{t.li4}</li>
                        </ol>
                    </div>

                    {/* FAQ Accordion */}
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-2xl font-bold mb-6">
                            {seo.name} {t.faqs}
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

