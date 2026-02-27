import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/seo-data";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
            },
        ],
        sitemap: `${SITE_CONFIG.domain}/sitemap.xml`,
    };
}
