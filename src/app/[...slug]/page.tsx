import HomePage from "@/components/home-page";
import ToolPage from "@/components/tool-page";
import { PrivacyPage } from "@/components/privacy-page";
import { TermsPage } from "@/components/terms-page";
import { getDictionary } from "@/i18n/get-dictionary";
import { i18n, Locale } from "@/i18n/config";
import { LANGUAGES_SEO, getLanguageAlternates } from "@/lib/seo-data";
import { notFound } from "next/navigation";
import { Metadata } from "next";

type Props = {
    params: Promise<{ slug: string[] }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const p = await params;
    const slug = p.slug || [];

    // Default English Metadata
    const defaultMeta: Metadata = {
        title: `Pretty Print — Free Online Code Formatter & Beautifier for 25+ Languages`,
        description: "Pretty Print is the #1 free online code formatter and beautifier. Pretty print JSON, HTML, CSS, JavaScript, SQL, Python, XML, and 20+ more languages instantly. 100% client-side — your code never leaves the browser.",
        alternates: getLanguageAlternates(),
    };

    if (slug.length === 1) {
        if (i18n.locales.includes(slug[0] as Locale)) {
            return defaultMeta; // We can translate meta tags here via server logic too
        }
        const tool = LANGUAGES_SEO.find(l => l.id === slug[0]);
        if (tool) {
            return { title: tool.title, description: tool.description, keywords: tool.keywords, alternates: getLanguageAlternates(tool.id) };
        }
    }

    if (slug.length === 2) {
        if (i18n.locales.includes(slug[0] as Locale)) {
            if (slug[1] === "privacy") {
                return { title: "Privacy Policy | Pretty Print", description: "Read the Privacy Policy for Pretty Print.", alternates: getLanguageAlternates("privacy") };
            }
            if (slug[1] === "terms") {
                return { title: "Terms of Service | Pretty Print", description: "Read the Terms of Service for using Pretty Print.", alternates: getLanguageAlternates("terms") };
            }
            const tool = LANGUAGES_SEO.find(l => l.id === slug[1]);
            if (tool) {
                return { title: tool.title, description: tool.description, keywords: tool.keywords, alternates: getLanguageAlternates(tool.id) };
            }
        }
    }

    return { title: 'Not Found' };
}

// Allow on-demand rendering for paths not in generateStaticParams
export const dynamicParams = true;

// Edge runtime for Cloudflare Workers compatibility
export const runtime = "edge";

export async function generateStaticParams() {
    const paths: { slug: string[] }[] = [];

    // Only pre-render English tool pages at build time to stay within
    // Cloudflare Pages' 20,000 file deployment limit.
    // Localized pages are rendered on-demand at the edge and cached.
    for (const tool of LANGUAGES_SEO) {
        paths.push({ slug: [tool.id] });
    }

    return paths;
}

export default async function CatchAllPage({ params }: Props) {
    const p = await params;
    const slug = p.slug || [];

    // 1. Translated Homepage (/es)
    if (slug.length === 1 && i18n.locales.includes(slug[0] as Locale)) {
        const locale = slug[0] as Locale;
        const dict = await getDictionary(locale);
        return <HomePage dict={dict} locale={locale} />;
    }

    // 2. English Tool Page (/javascript)
    if (slug.length === 1) {
        const tool = LANGUAGES_SEO.find(l => l.id === slug[0]);
        if (tool) {
            const dict = await getDictionary("en");
            return <ToolPage config={tool} dict={dict} />;
        }
    }

    // 3. Translated Tool / Static Page (/es/javascript, /es/privacy)
    if (slug.length === 2 && i18n.locales.includes(slug[0] as Locale)) {
        const locale = slug[0] as Locale;
        const dict = await getDictionary(locale);

        if (slug[1] === "privacy") return <PrivacyPage dict={dict} />;
        if (slug[1] === "terms") return <TermsPage dict={dict} />;

        const tool = LANGUAGES_SEO.find(l => l.id === slug[1]);
        if (tool) {
            return <ToolPage config={tool} dict={dict} />;
        }
    }

    // 404 Fallback
    notFound();
}
