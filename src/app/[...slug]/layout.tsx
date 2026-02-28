import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { getDictionary } from "@/i18n/get-dictionary";
import { OrganizationJsonLd } from "@/components/json-ld";
import { i18n, Locale } from "@/i18n/config";

export default async function CatchAllLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ slug?: string[] }>;
}) {
    const p = await params;
    const slug = p.slug || [];
    const locale = (slug[0] && i18n.locales.includes(slug[0] as any)) ? (slug[0] as Locale) : "en";
    const dict = await getDictionary(locale);

    return (
        <>
            <OrganizationJsonLd />
            <Navbar dict={dict} locale={locale} />
            <div className="flex-1">
                {children}
            </div>
            <Footer dict={dict} locale={locale} />
        </>
    );
}
