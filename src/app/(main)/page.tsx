import HomePage from "@/components/home-page";
import { getDictionary } from "@/i18n/get-dictionary";
import { getLanguageAlternates } from "@/lib/seo-data";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: `Pretty Print — Free Online Code Formatter & Beautifier for 25+ Languages`,
    description:
        "Pretty Print is the #1 free online code formatter and beautifier. Pretty print JSON, HTML, CSS, JavaScript, SQL, Python, XML, and 20+ more languages instantly. 100% client-side — your code never leaves the browser.",
    alternates: getLanguageAlternates()
};

export default async function Page() {
    const dict = await getDictionary("en");
    return <HomePage dict={dict} />;
}
