import { SITE_CONFIG } from "@/lib/seo-data";

interface WebApplicationProps {
    languageName?: string;
    url?: string;
}

export function WebApplicationJsonLd({ languageName, url }: WebApplicationProps) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        name: languageName
            ? `Pretty Print ${languageName}`
            : SITE_CONFIG.name,
        url: url || SITE_CONFIG.domain,
        applicationCategory: "DeveloperApplication",
        operatingSystem: "Any",
        offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
        },
        description: languageName
            ? `Free online ${languageName} code formatter and beautifier. Pretty print ${languageName} code instantly in your browser.`
            : SITE_CONFIG.description,
    };

    // JSON.stringify is safe here as jsonLd is a controlled object structure, not user input
    const jsonLdString = JSON.stringify(jsonLd);
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: jsonLdString }}
        />
    );
}

interface FAQJsonLdProps {
    faqs: { question: string; answer: string }[];
}

export function FAQJsonLd({ faqs }: FAQJsonLdProps) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
            },
        })),
    };

    // JSON.stringify is safe here as jsonLd is a controlled object structure, not user input
    const jsonLdString = JSON.stringify(jsonLd);
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: jsonLdString }}
        />
    );
}

interface BreadcrumbJsonLdProps {
    items: { name: string; url: string }[];
}

export function BreadcrumbJsonLd({ items }: BreadcrumbJsonLdProps) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: item.url,
        })),
    };

    // JSON.stringify is safe here as jsonLd is a controlled object structure, not user input
    const jsonLdString = JSON.stringify(jsonLd);
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: jsonLdString }}
        />
    );
}

export function OrganizationJsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: SITE_CONFIG.name,
        url: SITE_CONFIG.domain,
        logo: `${SITE_CONFIG.domain}/icon.png`,
        sameAs: ["https://github.com/prettyprintonline/prettyprint"],
    };

    // JSON.stringify is safe here as jsonLd is a controlled object structure, not user input
    const jsonLdString = JSON.stringify(jsonLd);
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: jsonLdString }}
        />
    );
}
