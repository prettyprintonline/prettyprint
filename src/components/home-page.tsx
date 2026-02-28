import Link from "next/link";
import { getLocalizedHref } from "@/lib/locale-navigation";
import { LANGUAGES_SEO, SITE_CONFIG } from "@/lib/seo-data";
import { WebApplicationJsonLd, FAQJsonLd } from "@/components/json-ld";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Zap, Shield, Palette, ArrowUpRight, ArrowRight, Code2, FileCode2, PlaySquare, CopyCheck, Github } from "lucide-react";
import { SearchBar } from "@/components/search-bar";
import { Separator } from "@/components/ui/separator";

// FAQs are dynamic

/* Featured tools — limited grid shown on homepage */
const FEATURED = LANGUAGES_SEO.slice(0, 8);

/* Color map for language icons */
const ICON_COLORS: Record<string, string> = {
  json: "bg-yellow-500/15 text-yellow-500 border-yellow-500/25",
  javascript: "bg-yellow-400/15 text-yellow-400 border-yellow-400/25",
  typescript: "bg-blue-500/15 text-blue-500 border-blue-500/25",
  react: "bg-cyan-400/15 text-cyan-400 border-cyan-400/25",
  html: "bg-orange-500/15 text-orange-500 border-orange-500/25",
  css: "bg-blue-400/15 text-blue-400 border-blue-400/25",
  less: "bg-indigo-400/15 text-indigo-400 border-indigo-400/25",
  scss: "bg-pink-500/15 text-pink-500 border-pink-500/25",
  sql: "bg-emerald-500/15 text-emerald-500 border-emerald-500/25",
  python: "bg-green-500/15 text-green-500 border-green-500/25",
  java: "bg-red-500/15 text-red-500 border-red-500/25",
  c: "bg-slate-400/15 text-slate-400 border-slate-400/25",
  "c++": "bg-violet-500/15 text-violet-500 border-violet-500/25",
  "c#": "bg-purple-500/15 text-purple-500 border-purple-500/25",
  php: "bg-violet-400/15 text-violet-400 border-violet-400/25",
  ruby: "bg-red-400/15 text-red-400 border-red-400/25",
  lua: "bg-blue-600/15 text-blue-600 border-blue-600/25",
  perl: "bg-amber-600/15 text-amber-600 border-amber-600/25",
  xml: "bg-teal-500/15 text-teal-500 border-teal-500/25",
  xaml: "bg-teal-400/15 text-teal-400 border-teal-400/25",
  yaml: "bg-rose-400/15 text-rose-400 border-rose-400/25",
  graphql: "bg-pink-600/15 text-pink-600 border-pink-600/25",
  markdown: "bg-gray-400/15 text-gray-400 border-gray-400/25",
  mdx: "bg-amber-500/15 text-amber-500 border-amber-500/25",
  babel: "bg-yellow-600/15 text-yellow-600 border-yellow-600/25",
  angular: "bg-red-600/15 text-red-600 border-red-600/25",
};

const POPULAR_TAGS = [
  { label: "JSON Formatter", href: "/json" },
  { label: "SQL Beautifier", href: "/sql" },
  { label: "XML Formatter", href: "/xml" },
  { label: "CSS Beautifier", href: "/css" },
  { label: "HTML Formatter", href: "/html" },
];

export default function HomePage({ dict, locale }: { dict: any; locale?: string }) {
  const ddir = dict?.directory || {
    title: "Complete Tool Directory",
    subtitle: "Whatever language you speak, we can read. All parsers rely on industry-standard formatting rules including AST logic and standard protocol validation."
  };
  const dart = dict?.article || {
    title1: "The Ultimate Free Online",
    title2: "Code Formatter & Beautifier",
    subtitle: "{dart.subtitle}",
    p1: "In the modern software development lifecycle, engineers constantly interact with compressed blocks of logic. Whether you are debugging a complex API payload mapped in JSON, decrypting a production-bundle of JavaScript, or reviewing deeply nested queries in SQL, attempting to parse unformatted text is an exercise in frustration.",
    p2: "Our tool acts as a universal hub for codebase aesthetics. No matter if you're working with HTML templates, CSS stylesheets, or Python modules, Pretty Print instantly beautifies your source code with industry-standard rules.",
    privacyWhy: "{dart.privacyWhy}",
    privacyP1: "Most legacy beautifier tools submit your raw code to remote backend servers. For developers working under strict NDA policies or managing sensitive .env configurations, this represents a catastrophic security vulnerability.",
    privacyP2: "Pretty Print leverages native browser WebAssembly and integrated script engines. Your proprietary code sequences are 100% private and never leave your browser partition.",
    techSpecs: "{dart.techSpecs}",
    tsZero: "Zero Latency",
    tsZeroDesc: "AST parsing occurs instantly in the browser thread.",
    tsLangs: "26+ Languages",
    tsLangsDesc: "Support for React, SQL, JSON, YAML, and more.",
    tsIDE: "IDE Framework",
    tsIDEDesc: "Monaco-powered workspace with VS Code themes.",
    tsBi: "Bi-directional",
    tsBiDesc: "Switch between beautified and minified states.",
    editorEngine: "Editor Engine",
    privacyModel: "Privacy Model",
    advTools: "Advanced Productivity Tools",
    advTools1: "Intellisense Validations",
    advTools1Desc: "Go beyond simple indentation. Our editor recognizes unresolved loops, missing bracket constraints, or invalid XML tags through real-time red squiggly highlighting—identical to your desktop IDE.",
    advTools2: "Bi-directional Minification",
    advTools2Desc: "Efficiency is key for production deployments. Transform rich, readable source files back into high-compression states via Terser and CSSNano integrations, perfect for CDN-ready assets."
  };
  const dfaq = dict?.faq || {
    title: "Frequently Asked Questions",
    subtitle: "Everything you need to know about our formatting tool."
  };
  const faqsItems: { question: string, answer: string }[] = dict?.faqItems || [
    {
      question: "What is Pretty Print?",
      answer: "Pretty Print is a free online code formatter and beautifier that supports 25+ programming languages. It instantly formats messy, minified, or unreadable code into clean, properly indented, human-readable output — all directly in your browser.",
    },
    {
      question: "Is Pretty Print free to use?",
      answer: "Yes, Pretty Print is 100% free with no signup, no limits, and no ads. You can format unlimited code across all supported languages at no cost.",
    },
    {
      question: "Is my code safe when using Pretty Print?",
      answer: "Absolutely. Pretty Print processes everything 100% client-side in your browser using JavaScript and WebAssembly. Your code never leaves your device and is never uploaded to any server. This makes it safe for sensitive and proprietary code.",
    },
    {
      question: "Which programming languages does Pretty Print support?",
      answer: "Pretty Print supports 25+ languages including JSON, JavaScript, TypeScript, HTML, CSS, SCSS, LESS, SQL, Python, Java, C, C++, C#, PHP, Ruby, Lua, Perl, XML, XAML, YAML, GraphQL, Markdown, MDX, Babel, React (JSX/TSX), and Angular templates.",
    },
    {
      question: "How does Pretty Print work?",
      answer: "Simply select your programming language, paste your messy code into the editor, and click the \"Format Code\" button. Your code will be instantly beautified with proper indentation, spacing, and formatting. You can then copy or download the result.",
    },
    {
      question: "Do I need to install anything to use Pretty Print?",
      answer: "No. Pretty Print runs entirely in your web browser. There is nothing to download, install, or configure. Just visit the website and start formatting.",
    }
  ];

  const t = dict?.hero || {
    supportedLanguages: "26 Languages Supported",
    title1: "Instantly Beautify",
    title2: "Any Code",
    subtitle: "A lightning-fast, privacy-focused code formatter for developers. Support for JSON, JavaScript, HTML, CSS, and 20+ other languages.",
    popular: "Popular:"
  };
  const tf = dict?.features || {
    title: "Why Choose Pretty Print?",
    subtitle: "Designed for modern developers who need robust, private, and instant tools.",
    astTitle: "Lightning Fast AST",
    astDesc: "We use strict Abstract Syntax Trees (AST) logic built into bleeding-edge JavaScript parsers, skipping the server and rendering immediately.",
    privacyTitle: "100% Client-Side Private",
    privacyDesc: "Zero data tracking. Zero remote payloads. All minification and formatting calculations occur natively inside your browser.",
    themeTitle: "VS Code Themes & Plugins",
    themeDesc: "Enjoy familiar Intellisense logic via the Monaco Editor framework with real-time squiggly-line syntax highlighting."
  };
  const tt = dict?.topTools || {
    title: "Top Formatter Tools",
    viewAll: "View all 26 formats",
    formatterSuffix: "Formatter"
  };
  const th = dict?.howItWorks || {
    title: "How to Format Code Online",
    subtitle: "Tired of messy one-liners? Follow these three simple steps to beautify or minify your code completely free.",
    step1Title: "Select Language",
    step1Desc: "Choose from our massive library of 26 supported languages ranging from frontend stacks (HTML, React, CSS) to backend data structures (SQL, Python, JSON).",
    step2Title: "Paste & Format",
    step2Desc: "Drop your minified text block directly into the left editor panel. As soon as you paste, our AST processors will validate schema errors and format it instantly.",
    step3Title: "Copy or Minify",
    step3Desc: "Use the toolbar to copy the beautifully structured document, download it directly to a file extension, or even reverse the process to compress and minify your web bundles!"
  };

  return (
    <main>
      <WebApplicationJsonLd />
      <FAQJsonLd faqs={faqsItems} />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden">
        <div className="container px-4 pt-20 pb-16 max-w-screen-xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 text-xs font-medium px-3 py-1.5 rounded-full border border-emerald-500/20 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            {t.supportedLanguages}
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-balance leading-[1.1] mb-6">
            {t.title1}
            <br />
            <span className="text-primary">{t.title2}</span>
          </h1>

          <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-10 text-balance">
            {t.subtitle}
          </p>

          {/* Search Bar */}
          <SearchBar languages={LANGUAGES_SEO} locale={locale} dict={dict} />

          {/* GitHub CTA */}
          <div className="flex justify-center mt-6">
            <Link href="https://github.com/prettyprintonline/prettyprint" target="_blank" rel="noopener noreferrer">
              <button className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full border border-primary/30 bg-background px-6 py-2.5 text-sm font-semibold text-foreground shadow-sm hover:bg-muted/50 hover:border-primary/50 transition-all duration-300">
                <Github className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                <span>Star us on GitHub</span>
                <span className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                  <span className="relative h-full w-8 bg-white/5" />
                </span>
              </button>
            </Link>
          </div>

          {/* Popular Tags */}
          <div className="flex items-center justify-center gap-2 flex-wrap mt-6 text-xs text-muted-foreground">
            <span>{t.popular}</span>
            {POPULAR_TAGS.map((tag) => (
              <Link
                key={tag.href}
                href={getLocalizedHref(tag.href, locale)}
                className="hover:text-primary transition-colors"
              >
                {tag.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="bg-card border-y">
        <div className="container px-4 py-16 max-w-screen-xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{tf.title}</h2>
            <p className="text-muted-foreground">{tf.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center p-6 bg-background rounded-2xl border shadow-sm">
              <div className="w-14 h-14 rounded-full bg-yellow-500/10 flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-yellow-500" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{tf.astTitle}</h3>
              <p className="text-sm text-muted-foreground">
                {tf.astDesc}
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-background rounded-2xl border shadow-sm">
              <div className="w-14 h-14 rounded-full bg-emerald-500/10 flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-emerald-500" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{tf.privacyTitle}</h3>
              <p className="text-sm text-muted-foreground">
                {tf.privacyDesc}
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-background rounded-2xl border shadow-sm">
              <div className="w-14 h-14 rounded-full bg-violet-500/10 flex items-center justify-center mb-6">
                <Palette className="w-7 h-7 text-violet-500" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{tf.themeTitle}</h3>
              <p className="text-sm text-muted-foreground">
                {tf.themeDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Top Formatter Tools ── */}
      <section className="bg-background" id="top-tools">
        <div className="container px-4 py-16 max-w-screen-xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl font-bold">{tt.title}</h2>
            <Link
              href="#all-languages"
              className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline transition-colors"
            >
              {tt.viewAll}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <Link
            href="#all-languages"
            className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline transition-colors"
          >
            {tt.viewAll}
            <ArrowRight className="w-4 h-4" />
          </Link>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {FEATURED.map((lang) => (
              <Link key={lang.id} href={getLocalizedHref(`/${encodeURIComponent(lang.id)}`, locale)}>
                <div className="group border rounded-xl p-5 hover:border-primary/40 transition-all cursor-pointer h-full bg-card hover:bg-muted/30 hover:-translate-y-1 shadow-sm hover:shadow-md">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center text-base font-bold border ${ICON_COLORS[lang.id] || "bg-primary/10 text-primary border-primary/20"}`}
                    >
                      {lang.icon}
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h3 className="font-semibold text-base mb-2 text-foreground">{lang.name} {tt.formatterSuffix}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {dict?.formatterCards?.[lang.id] || lang.cardDesc}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* View All Button for Mobile */}
          <div className="flex sm:hidden justify-center mt-8">
            <Link
              href="#all-languages"
              className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/80 text-secondary-foreground px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
            >
              {tt.viewAll}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── How It Works (SEO / Conversion) ── */}
      <section className="bg-muted/30 border-y">
        <div className="container px-4 py-20 max-w-screen-xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-4">{th.title}</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">{th.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto relative">
            <div className="relative p-8 bg-card border rounded-2xl shadow-sm hover:border-primary/50 transition-colors">
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold shadow-md">1</div>
              <FileCode2 className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-3">{th.step1Title}</h3>
              <p className="text-muted-foreground leading-relaxed">{th.step1Desc}</p>
            </div>

            <div className="relative p-8 bg-card border rounded-2xl shadow-sm hover:border-primary/50 transition-colors">
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold shadow-md">2</div>
              <PlaySquare className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-3">{th.step2Title}</h3>
              <p className="text-muted-foreground leading-relaxed">{th.step2Desc}</p>
            </div>

            <div className="relative p-8 bg-card border rounded-2xl shadow-sm hover:border-primary/50 transition-colors">
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold shadow-md">3</div>
              <CopyCheck className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-3">{th.step3Title}</h3>
              <p className="text-muted-foreground leading-relaxed">{th.step3Desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Full Language Grid ── */}
      <section id="all-languages" className="bg-background">
        <div className="container px-4 py-20 max-w-screen-xl mx-auto">
          <div className="flex flex-col items-center mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4">{ddir.title}</h2>
            <p className="text-muted-foreground max-w-2xl">{ddir.subtitle}</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
            {LANGUAGES_SEO.map((lang) => (
              <Link key={lang.id} href={getLocalizedHref(`/${encodeURIComponent(lang.id)}`, locale)}>
                <div className="group flex items-center gap-3 border rounded-xl p-3 hover:border-primary/60 hover:bg-muted/20 transition-all cursor-pointer bg-card shadow-sm hover:shadow-md">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold border shrink-0 ${ICON_COLORS[lang.id] || "bg-primary/10 text-primary border-primary/20"}`}
                  >
                    {lang.icon}
                  </div>
                  <span className="text-sm font-semibold truncate group-hover:text-primary transition-colors">
                    {lang.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── SEO Rich Content Article ── */}
      <article className="border-t bg-card/30 relative">
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

        <div className="container px-4 py-28 max-w-5xl mx-auto relative">
          <header className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6 bg-linear-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
              {dart.title1} <br /> {dart.title2}
            </h2>
            <div className="h-1.5 w-24 bg-primary mx-auto rounded-full mb-8" />
            <p className="text-xl text-muted-foreground leading-relaxed">
              {dart.subtitle}
            </p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Left Column: Context & Internal Links */}
            <div className="lg:col-span-7 space-y-12">
              <section className="prose prose-neutral dark:prose-invert max-w-none prose-p:text-lg prose-p:leading-relaxed prose-strong:text-foreground prose-a:text-primary prose-a:no-underline hover:prose-a:underline">
                <p>
                  {dart.p1}
                </p>
                <p>
                  {dart.p2}
                </p>
              </section>

              <div className="bg-muted/30 border rounded-3xl p-8 space-y-6">
                <h3 className="text-2xl font-bold flex items-center gap-3">
                  <Shield className="w-6 h-6 text-primary" />
                  {dart.privacyWhy}
                </h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
                  <p>
                    {dart.privacyP1}
                  </p>
                  <p>
                    {dart.privacyP2}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Technical Spec List & Features */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-background border shadow-xl rounded-3xl p-8 sticky top-24">
                <h3 className="text-xl font-bold mb-6 underline decoration-primary/30 underline-offset-4 font-mono">{dart.techSpecs}</h3>
                <ul className="space-y-6 m-0 p-0 list-none">
                  {[
                    {
                      icon: <Zap className="w-5 h-5" />,
                      title: dart.tsZero,
                      desc: dart.tsZeroDesc,
                    },
                    {
                      icon: <Code2 className="w-5 h-5" />,
                      title: dart.tsLangs,
                      desc: dart.tsLangsDesc,
                    },
                    {
                      icon: <Palette className="w-5 h-5" />,
                      title: dart.tsIDE,
                      desc: dart.tsIDEDesc,
                    },
                    {
                      icon: <FileCode2 className="w-5 h-5" />,
                      title: dart.tsBi,
                      desc: dart.tsBiDesc,
                    },
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 group">
                      <div className="w-10 h-10 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                        {item.icon}
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-bold text-sm uppercase tracking-wider text-foreground">
                          {item.title}
                        </h4>
                        <p className="text-sm text-muted-foreground leading-snug">
                          {item.desc}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>

                <Separator className="my-8" />

                <div className="space-y-6">
                  <div className="flex items-center justify-between text-sm font-medium">
                    <span className="text-muted-foreground">{dart.editorEngine}</span>
                    <span className="text-foreground">Microsoft Monaco</span>
                  </div>
                  <div className="flex items-center justify-between text-sm font-medium">
                    <span className="text-muted-foreground">{dart.privacyModel}</span>
                    <span className="text-green-500 font-bold uppercase tracking-tighter">100% Client-Side</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <section className="mt-28 border-t pt-20">
            <h3 className="text-3xl font-bold text-center mb-16 underline decoration-primary/30 underline-offset-8 italic">{dart.advTools}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto text-center md:text-left">
              <div className="space-y-4 bg-card/50 p-8 rounded-3xl border border-border/50">
                <h4 className="text-xl font-bold flex items-center gap-2 justify-center md:justify-start">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  {dart.advTools1}
                </h4>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {dart.advTools1Desc}
                </p>
              </div>
              <div className="space-y-4 bg-card/50 p-8 rounded-3xl border border-border/50">
                <h4 className="text-xl font-bold flex items-center gap-2 justify-center md:justify-start">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  {dart.advTools2}
                </h4>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {dart.advTools2Desc}
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>

      {/* ── FAQ ── */}
      <section className="border-t bg-muted/20">
        <div className="container px-4 py-20 max-w-screen-xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{dfaq.title}</h2>
            <p className="text-muted-foreground">{dfaq.subtitle}</p>
          </div>
          <div className="max-w-3xl mx-auto bg-card border rounded-2xl p-6 shadow-sm">
            <Accordion type="single" collapsible className="w-full">
              {faqsItems.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className={i === faqsItems.length - 1 ? "border-0" : ""}>
                  <AccordionTrigger className="text-left text-base font-semibold py-4 hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pt-2 pb-5 text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </main >
  );
}
