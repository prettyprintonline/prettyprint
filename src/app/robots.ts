import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/seo-data";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
            },
            // Explicitly allow major AI crawlers for AI SEO / GEO
            {
                userAgent: "GPTBot",
                allow: "/",
            },
            {
                userAgent: "ChatGPT-User",
                allow: "/",
            },
            {
                userAgent: "Google-Extended",
                allow: "/",
            },
            {
                userAgent: "PerplexityBot",
                allow: "/",
            },
            {
                userAgent: "ClaudeBot",
                allow: "/",
            },
            {
                userAgent: "Applebot-Extended",
                allow: "/",
            },
            {
                userAgent: "Bytespider",
                allow: "/",
            },
            {
                userAgent: "anthropic-ai",
                allow: "/",
            },
        ],
        sitemap: `${SITE_CONFIG.domain}/sitemap.xml`,
    };
}
