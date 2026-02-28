import { PrivacyPage } from "@/components/privacy-page";
import { getDictionary } from "@/i18n/get-dictionary";
import { getLanguageAlternates } from "@/lib/seo-data";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | Pretty Print",
    description: "Read the Privacy Policy for Pretty Print. We process everything client-side and never store or transmit your code.",
    alternates: getLanguageAlternates("privacy")
};

export default async function Page() {
    const dict = await getDictionary("en");
    return <PrivacyPage dict={dict} />;
}
