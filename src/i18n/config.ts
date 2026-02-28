export const i18n = {
    defaultLocale: "en",
    locales: ["en", "zh", "hi", "es", "fr", "ar", "bn", "ru", "pt", "ur", "id", "de", "ja"],
} as const;

export type Locale = (typeof i18n)["locales"][number];
