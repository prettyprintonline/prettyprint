import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { getDictionary } from "@/i18n/get-dictionary";
import { OrganizationJsonLd } from "@/components/json-ld";

export default async function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const dict = await getDictionary("en");

    return (
        <>
            <OrganizationJsonLd />
            <Navbar dict={dict} />
            <div className="flex-1">
                {children}
            </div>
            <Footer dict={dict} />
        </>
    );
}
