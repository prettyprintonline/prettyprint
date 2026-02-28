import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Script from "next/script";
import { OrganizationJsonLd, WebApplicationJsonLd } from "@/components/json-ld";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://prettyprint.online"),
  title: {
    default: "Pretty Print — Free Online Code Formatter & Beautifier for 25+ Languages",
    template: "%s | Pretty Print",
  },
  description: "Ultra-fast, 100% client-side code formatter and beautifier. Pretty print JSON, HTML, CSS, JavaScript, SQL, and 20+ more languages instantly with zero data tracking.",
  keywords: ["pretty print", "code formatter", "online beautifier", "json formatter", "sql beautifier", "javascript formatter", "html beautifier", "client-side formatter"],
  authors: [{ name: "Pretty Print Team" }],
  creator: "Pretty Print",
  publisher: "Pretty Print",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://prettyprint.online",
    siteName: "Pretty Print",
    title: "Pretty Print — The World's Fastest Privacy-First Code Formatter",
    description: "Format and beautify your code instantly with our 100% client-side tool. No data ever leaves your browser.",
    images: [
      {
        url: "/favicon.svg",
        width: 1200,
        height: 630,
        alt: "Pretty Print - Code Formatter",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pretty Print — Privacy-First Code Beautifier",
    description: "Instant formatting for 25+ languages. Fast, private, and free.",
    images: ["/favicon.svg"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="search"
          type="application/opensearchdescription+xml"
          title="Pretty Print"
          href="/opensearch.xml"
        />
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-M47XNHYXM0"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-M47XNHYXM0');
          `}
        </Script>
        {/* Synchronous Language Detection to prevent incorrect browser translation popups  */}
        <script dangerouslySetInnerHTML={{
          __html: `
          try {
            var path = window.location.pathname.split('/')[1];
            var locales = ['en','es','fr','de','zh','hi','pt','ru','id','ja','ar','bn','ur'];
            var loc = locales.includes(path) ? path : 'en';
            document.documentElement.lang = loc;
          } catch(e) {}
        `}} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
