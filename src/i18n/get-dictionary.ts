import "server-only";
import type { Locale } from "./config";

// We import the dictionaries dynamically to avoid bundling all languages
const dictionaries = {
    en: () => import("./dictionaries/en.json").then((module) => module.default),
    zh: () => import("./dictionaries/zh.json").then((module) => module.default),
    hi: () => import("./dictionaries/hi.json").then((module) => module.default),
    es: () => import("./dictionaries/es.json").then((module) => module.default),
    fr: () => import("./dictionaries/fr.json").then((module) => module.default),
    ar: () => import("./dictionaries/ar.json").then((module) => module.default),
    bn: () => import("./dictionaries/bn.json").then((module) => module.default),
    ru: () => import("./dictionaries/ru.json").then((module) => module.default),
    pt: () => import("./dictionaries/pt.json").then((module) => module.default),
    ur: () => import("./dictionaries/ur.json").then((module) => module.default),
    id: () => import("./dictionaries/id.json").then((module) => module.default),
    de: () => import("./dictionaries/de.json").then((module) => module.default),
    ja: () => import("./dictionaries/ja.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
