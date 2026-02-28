"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Globe } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { i18n, Locale } from "@/i18n/config";

const localeNames: Record<Locale, string> = {
    en: "English",
    zh: "中文 (Chinese)",
    hi: "हिन्दी (Hindi)",
    es: "Español (Spanish)",
    fr: "Français (French)",
    ar: "العربية (Arabic)",
    bn: "বাংলা (Bengali)",
    ru: "Русский (Russian)",
    pt: "Português (Portuguese)",
    ur: "اردو (Urdu)",
    id: "Bahasa Indonesia",
    de: "Deutsch (German)",
    ja: "日本語 (Japanese)",
};

export function LanguageSwitcher() {
    const pathname = usePathname() || "/";

    // Determine current locale from path
    // Since English is at the root without a prefix, we check if the first segment is a known locale.
    const segments = pathname.split("/").filter(Boolean);
    const firstSegment = segments[0] as Locale | undefined;

    const currentLocale: Locale =
        firstSegment && i18n.locales.includes(firstSegment as Locale) && firstSegment !== "en"
            ? (firstSegment as Locale)
            : i18n.defaultLocale;

    // Build the translated path for a given target locale
    const getTranslatedPath = (targetLocale: Locale) => {
        // Reconstruct the path without the current locale prefix
        let pathWithoutLocale = pathname;
        if (currentLocale !== "en" && pathWithoutLocale.startsWith(`/${currentLocale}`)) {
            pathWithoutLocale = pathWithoutLocale.replace(`/${currentLocale}`, "") || "/";
        }

        if (targetLocale === "en") {
            return pathWithoutLocale; // English uses root URLs without /en
        }
        return `/${targetLocale}${pathWithoutLocale === "/" ? "" : pathWithoutLocale}`;
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="hover:bg-muted/50 transition-colors shrink-0" title="Change Language">
                    <Globe className="h-5 w-5" />
                    <span className="sr-only">Toggle language</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[180px] max-h-[400px] overflow-y-auto">
                {i18n.locales.map((locale) => (
                    <DropdownMenuItem
                        key={locale}
                        asChild
                        className={currentLocale === locale ? "bg-primary/10 font-bold" : ""}
                    >
                        <Link href={getTranslatedPath(locale)} className="w-full cursor-pointer flex items-center justify-between">
                            {localeNames[locale]}
                            {currentLocale === locale && (
                                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            )}
                        </Link>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
