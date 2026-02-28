import type { MetadataRoute } from "next";
import { LANGUAGES_SEO, SITE_CONFIG } from "@/lib/seo-data";
import { i18n } from "@/i18n/config";

export default function sitemap(): MetadataRoute.Sitemap {
    const BASE = SITE_CONFIG.domain;
    const locales = i18n.locales.filter(l => l !== "en");

    const sm: MetadataRoute.Sitemap = [
        {
            url: BASE,
            lastModified: new Date(),
            changeFrequency: "weekly" as const,
            priority: 1.0,
        },
        {
            url: `${BASE}/privacy`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: 0.5,
        },
        {
            url: `${BASE}/terms`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: 0.5,
        },
    ];

    // 1. Translated Homepages
    for (const locale of locales) {
        sm.push({
            url: `${BASE}/${locale}`,
            lastModified: new Date(),
            changeFrequency: "weekly" as const,
            priority: 0.9,
        });
    }

    // 2. English Tool Pages
    for (const tool of LANGUAGES_SEO) {
        sm.push({
            url: `${BASE}/${encodeURIComponent(tool.id)}`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: 0.8,
        });
    }

    // 3. Translated Tool Pages
    for (const locale of locales) {
        for (const tool of LANGUAGES_SEO) {
            sm.push({
                url: `${BASE}/${locale}/${encodeURIComponent(tool.id)}`,
                lastModified: new Date(),
                changeFrequency: "monthly" as const,
                priority: 0.7,
            });
        }
    }

    return sm;
}

