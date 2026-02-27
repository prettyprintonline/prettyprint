import type { MetadataRoute } from "next";
import { LANGUAGES_SEO, SITE_CONFIG } from "@/lib/seo-data";

export default function sitemap(): MetadataRoute.Sitemap {
    const BASE = SITE_CONFIG.domain;

    const languagePages: MetadataRoute.Sitemap = LANGUAGES_SEO.map((lang) => ({
        url: `${BASE}/${encodeURIComponent(lang.id)}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.8,
    }));

    return [
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
        ...languagePages,
    ];
}
