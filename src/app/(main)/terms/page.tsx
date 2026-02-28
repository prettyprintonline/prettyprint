import { TermsPage } from "@/components/terms-page";
import { getDictionary } from "@/i18n/get-dictionary";
import { getLanguageAlternates } from "@/lib/seo-data";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service | Pretty Print",
    description: "Read the Terms of Service for using Pretty Print. Understand your rights and our client-side processing guarantees.",
    alternates: getLanguageAlternates("terms")
};

export default async function Page() {
    const dict = await getDictionary("en");
    return <TermsPage dict={dict} />;
}
