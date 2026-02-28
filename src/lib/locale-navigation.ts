import { i18n, Locale } from "@/i18n/config";

export function getLocalizedHref(path: string, locale?: string): string {
    const currentLocale = locale || i18n.defaultLocale;

    // Normalize root path explicitly
    if (path === "/") {
        return currentLocale === "en" ? "/" : `/${currentLocale}`;
    }

    const normalizedPath = path.startsWith('/') ? path : `/${path}`;

    if (currentLocale === "en") {
        return normalizedPath;
    }

    return `/${currentLocale}${normalizedPath}`;
}
