export const SITE_CONFIG = {
    name: "Pretty Print",
    domain: "https://prettyprint.online",
    tagline: "Pretty Print Your Code Online — Free Code Formatter & Beautifier",
    description:
        "Pretty Print is a free online code formatter and beautifier for 25+ programming languages. Paste your messy code and instantly pretty print it. 100% client-side — your code never leaves the browser.",
};

export interface LanguageSEO {
    id: string;
    name: string;
    icon: string;
    title: string;
    description: string;
    h1: string;
    subtitle: string;
    keywords: string[];
    cardDesc: string;
    faqs: { question: string; answer: string }[];
}

export const LANGUAGES_SEO: LanguageSEO[] = [
    {
        id: "json",
        name: "JSON",
        icon: "{}",
        title: "Pretty Print JSON - Beautify JSON Code Online",
        description:
            "Pretty Print JSON online for free. Paste your minified or messy JSON data and instantly beautify, format, and validate it. Free online JSON formatter, viewer, and beautifier.",
        h1: "Pretty Print JSON",
        subtitle: "Beautify & Format JSON Data Online — Free, Instant, No Signup",
        keywords: [
            "pretty print json",
            "pretty print json online",
            "json formatter",
            "json formatter online",
            "beautify json",
            "beautify json online",
            "json beautifier",
            "format json",
            "json pretty printer",
            "json viewer",
            "minify json",
            "json validator",
        ],
        cardDesc: "Pretty print JSON data — format, validate, and beautify instantly.",
        faqs: [
            {
                question: "What is Pretty Print JSON?",
                answer:
                    "Pretty Print JSON is a free online tool that formats minified or unreadable JSON data into a clean, properly indented, and human-readable structure. It helps developers quickly inspect, debug, and share JSON payloads.",
            },
            {
                question: "How do I pretty print JSON online?",
                answer:
                    "Simply paste your JSON code into the editor above and click the \"Format Code\" button. Your JSON will be instantly beautified with proper indentation and spacing. You can then copy or download the result.",
            },
            {
                question: "Is my JSON data safe when using this tool?",
                answer:
                    "Yes, absolutely. Pretty Print processes everything 100% client-side in your browser. Your JSON data never leaves your device and is never sent to any server.",
            },
            {
                question: "Can this tool validate my JSON?",
                answer:
                    "Yes. If your JSON contains syntax errors, the formatter will display an error message indicating the issue. Only valid JSON can be successfully formatted.",
            },
        ],
    },
    {
        id: "javascript",
        name: "JavaScript",
        icon: "JS",
        title: "Pretty Print JavaScript - Beautify JS Code Online",
        description:
            "Pretty Print JavaScript online for free. Paste your messy or minified JS code and instantly beautify, format, and indent it. Free online JavaScript formatter and beautifier.",
        h1: "Pretty Print JavaScript",
        subtitle: "Beautify & Format JavaScript Code Online — Free & Instant",
        keywords: [
            "pretty print javascript",
            "pretty print javascript online",
            "javascript formatter",
            "javascript formatter online",
            "beautify javascript",
            "beautify javascript online",
            "js beautifier",
            "format javascript",
            "javascript pretty printer",
            "js formatter",
            "beautify js",
            "format js online",
        ],
        cardDesc: "Pretty print JavaScript — beautify and format JS code online.",
        faqs: [
            {
                question: "What is Pretty Print JavaScript?",
                answer:
                    "Pretty Print JavaScript is a free online tool that formats messy or minified JavaScript code into clean, readable, and properly indented code. It uses Prettier under the hood for industry-standard formatting.",
            },
            {
                question: "How do I beautify JavaScript code online?",
                answer:
                    "Paste your JavaScript code into the editor, click \"Format Code\", and your JS will be instantly beautified with proper indentation, semicolons, and consistent quote styles.",
            },
            {
                question: "Does this tool support ES6+ and modern JavaScript?",
                answer:
                    "Yes. The formatter supports all modern JavaScript syntax including arrow functions, template literals, destructuring, async/await, and ES modules.",
            },
            {
                question: "Is this JavaScript formatter free to use?",
                answer:
                    "Yes, completely free with no limits. There is no signup required and your code is processed entirely in your browser — nothing is uploaded to any server.",
            },
        ],
    },
    {
        id: "typescript",
        name: "TypeScript",
        icon: "TS",
        title: "Pretty Print TypeScript - Format TypeScript Code Online",
        description:
            "Pretty Print TypeScript online for free. Instantly format, beautify, and indent your TS code with proper type alignment. Free online TypeScript formatter.",
        h1: "Pretty Print TypeScript",
        subtitle: "Format & Beautify TypeScript Code Online — Free & Instant",
        keywords: [
            "pretty print typescript",
            "typescript formatter",
            "typescript formatter online",
            "beautify typescript",
            "format typescript",
            "ts formatter",
            "typescript beautifier",
            "pretty print ts",
        ],
        cardDesc: "Pretty print TypeScript — format TS code with perfect type alignment.",
        faqs: [
            {
                question: "What is Pretty Print TypeScript?",
                answer:
                    "Pretty Print TypeScript is a free online formatter that beautifies your TypeScript code with proper indentation, type alignment, and consistent styling using Prettier.",
            },
            {
                question: "Does it support TypeScript-specific syntax?",
                answer:
                    "Yes, it fully supports interfaces, generics, enums, type aliases, decorators, and all TypeScript-specific syntax.",
            },
            {
                question: "Can I format .tsx (React TypeScript) files?",
                answer:
                    "For TSX files, use our React (JSX/TSX) formatter which handles JSX embedded in TypeScript perfectly.",
            },
            {
                question: "Is my TypeScript code safe?",
                answer:
                    "Yes. All formatting happens in your browser. Your TypeScript code never leaves your device.",
            },
        ],
    },
    {
        id: "react",
        name: "React (JSX/TSX)",
        icon: "⚛️",
        title: "Pretty Print React - Format JSX & TSX Code Online",
        description:
            "Pretty Print React JSX/TSX code online for free. Instantly beautify and format your React components with proper indentation. Free online React formatter.",
        h1: "Pretty Print React",
        subtitle: "Beautify & Format JSX/TSX React Components Online — Free",
        keywords: [
            "pretty print react",
            "react formatter",
            "jsx formatter",
            "tsx formatter",
            "beautify react",
            "format jsx",
            "react beautifier",
            "pretty print jsx",
            "format react components",
        ],
        cardDesc: "Pretty print React — beautify JSX and TSX components instantly.",
        faqs: [
            {
                question: "What is Pretty Print React?",
                answer:
                    "Pretty Print React is a free online tool that formats JSX and TSX code used in React applications. It beautifies your component code with proper indentation and consistent styling.",
            },
            {
                question: "Does it support both JSX and TSX?",
                answer:
                    "Yes, the formatter handles both JSX (JavaScript XML) and TSX (TypeScript XML) syntax perfectly using Prettier's Babel parser.",
            },
            {
                question: "Can I format entire React component files?",
                answer:
                    "Absolutely. Paste your full React component including imports, hooks, state management, and JSX return statements — it will all be formatted.",
            },
            {
                question: "Is this tool free?",
                answer:
                    "Yes, it's 100% free with no signup. Your React code is processed entirely in your browser.",
            },
        ],
    },
    {
        id: "html",
        name: "HTML",
        icon: "<>",
        title: "Pretty Print HTML - Beautify HTML Code Online",
        description:
            "Pretty Print HTML online for free. Paste your messy HTML code and instantly beautify, format, and indent it. Free online HTML formatter and beautifier tool.",
        h1: "Pretty Print HTML",
        subtitle: "Beautify & Format HTML Code Online — Free, Instant, No Signup",
        keywords: [
            "pretty print html",
            "pretty print html online",
            "html formatter",
            "html formatter online",
            "beautify html",
            "beautify html online",
            "html beautifier",
            "format html",
            "html pretty printer",
            "html indent",
        ],
        cardDesc: "Pretty print HTML — beautify and indent HTML markup online.",
        faqs: [
            {
                question: "What is Pretty Print HTML?",
                answer:
                    "Pretty Print HTML is a free online tool that formats messy or minified HTML code into clean, properly indented, and readable markup. It handles nested tags, attributes, and inline elements.",
            },
            {
                question: "How do I beautify HTML online?",
                answer:
                    "Paste your HTML code into the editor above and click \"Format Code\". Your HTML will be instantly formatted with proper indentation and tag alignment.",
            },
            {
                question: "Does it handle inline CSS and JavaScript in HTML?",
                answer:
                    "Yes. The formatter preserves embedded CSS in <style> tags and JavaScript in <script> tags while formatting the surrounding HTML structure.",
            },
            {
                question: "Is my HTML code secure?",
                answer:
                    "100% secure. All processing happens locally in your browser. Your HTML code is never uploaded to any server.",
            },
        ],
    },
    {
        id: "css",
        name: "CSS",
        icon: "#",
        title: "Pretty Print CSS - Beautify CSS Code Online",
        description:
            "Pretty Print CSS online for free. Paste your minified or messy CSS and instantly beautify, format, and organize it. Free online CSS formatter and beautifier.",
        h1: "Pretty Print CSS",
        subtitle: "Beautify & Format CSS Stylesheets Online — Free & Instant",
        keywords: [
            "pretty print css",
            "pretty print css online",
            "css formatter",
            "css formatter online",
            "beautify css",
            "beautify css online",
            "css beautifier",
            "format css",
            "css pretty printer",
            "unminify css",
        ],
        cardDesc: "Pretty print CSS — format and beautify stylesheets online.",
        faqs: [
            {
                question: "What is Pretty Print CSS?",
                answer:
                    "Pretty Print CSS is a free online tool that formats minified or messy CSS code into clean, readable stylesheets with proper indentation, spacing, and property alignment.",
            },
            {
                question: "Can I unminify CSS with this tool?",
                answer:
                    "Yes. If you have minified CSS (all on one line), this tool will expand it into properly formatted, readable CSS with each property on its own line.",
            },
            {
                question: "Does it support CSS3 features?",
                answer:
                    "Yes, it supports all modern CSS including CSS Grid, Flexbox, custom properties (variables), media queries, animations, and more.",
            },
            {
                question: "Is this CSS formatter free?",
                answer:
                    "Yes, completely free with unlimited usage. No signup required. Your CSS never leaves your browser.",
            },
        ],
    },
    {
        id: "less",
        name: "LESS",
        icon: "L",
        title: "Pretty Print LESS - Beautify LESS Code Online",
        description:
            "Pretty Print LESS online for free. Instantly format and beautify your LESS preprocessor stylesheets. Free online LESS formatter and beautifier.",
        h1: "Pretty Print LESS",
        subtitle: "Beautify & Format LESS Preprocessor Code Online — Free",
        keywords: [
            "pretty print less",
            "less formatter",
            "less formatter online",
            "beautify less",
            "format less",
            "less beautifier",
            "less css formatter",
        ],
        cardDesc: "Pretty print LESS — beautify LESS preprocessor stylesheets.",
        faqs: [
            {
                question: "What is Pretty Print LESS?",
                answer:
                    "Pretty Print LESS is a free online tool that formats LESS preprocessor code into clean, readable stylesheets with proper indentation and variable alignment.",
            },
            {
                question: "Does it support LESS-specific features?",
                answer:
                    "Yes, it handles LESS variables, mixins, nested rules, functions, and all LESS-specific syntax.",
            },
            {
                question: "Can I convert LESS to CSS here?",
                answer:
                    "This tool focuses on formatting/beautifying LESS code, not compiling it. For compilation, use a LESS compiler.",
            },
            {
                question: "Is it free?",
                answer:
                    "Yes, 100% free. No signup needed. Everything runs in your browser.",
            },
        ],
    },
    {
        id: "scss",
        name: "SCSS",
        icon: "S",
        title: "Pretty Print SCSS - Beautify SCSS Code Online",
        description:
            "Pretty Print SCSS online for free. Instantly format and beautify your SCSS/Sass stylesheets. Free online SCSS formatter and beautifier.",
        h1: "Pretty Print SCSS",
        subtitle: "Beautify & Format SCSS/Sass Code Online — Free & Instant",
        keywords: [
            "pretty print scss",
            "scss formatter",
            "scss formatter online",
            "beautify scss",
            "format scss",
            "scss beautifier",
            "sass formatter",
            "pretty print sass",
        ],
        cardDesc: "Pretty print SCSS — format and beautify Sass stylesheets online.",
        faqs: [
            {
                question: "What is Pretty Print SCSS?",
                answer:
                    "Pretty Print SCSS is a free online formatter for SCSS (Sassy CSS) code. It beautifies your stylesheets with proper indentation, nesting alignment, and consistent formatting.",
            },
            {
                question: "Does it support SCSS-specific syntax?",
                answer:
                    "Yes, including variables ($var), mixins (@mixin), nesting, partials, extends, and all Sass features.",
            },
            {
                question: "Is this the same as a Sass formatter?",
                answer:
                    "This formats SCSS syntax (the curly-brace variant of Sass). The indented Sass syntax requires a different parser.",
            },
            {
                question: "Is it free and secure?",
                answer:
                    "Yes, completely free. Your code is processed in your browser only and never sent to any server.",
            },
        ],
    },
    {
        id: "sql",
        name: "SQL",
        icon: "DB",
        title: "Pretty Print SQL - Format SQL Queries Online",
        description:
            "Pretty Print SQL online for free. Instantly format, beautify, and indent SQL queries with proper keyword capitalization. Free online SQL formatter.",
        h1: "Pretty Print SQL",
        subtitle: "Format & Beautify SQL Queries Online — Free & Instant",
        keywords: [
            "pretty print sql",
            "pretty print sql online",
            "sql formatter",
            "sql formatter online",
            "beautify sql",
            "format sql",
            "sql beautifier",
            "sql pretty printer",
            "sql query formatter",
            "format sql query online",
        ],
        cardDesc: "Pretty print SQL — capitalize keywords and indent queries online.",
        faqs: [
            {
                question: "What is Pretty Print SQL?",
                answer:
                    "Pretty Print SQL is a free online tool that formats SQL queries with proper indentation, keyword capitalization (SELECT, FROM, WHERE, etc.), and clean structure for better readability.",
            },
            {
                question: "Which SQL dialects are supported?",
                answer:
                    "The formatter supports standard SQL syntax and works well with MySQL, PostgreSQL, SQLite, SQL Server, and most SQL dialects.",
            },
            {
                question: "Does it capitalize SQL keywords?",
                answer:
                    "Yes. The formatter automatically capitalizes SQL keywords like SELECT, INSERT, UPDATE, DELETE, FROM, WHERE, JOIN, and more.",
            },
            {
                question: "Is it safe for production queries?",
                answer:
                    "Yes. Your SQL queries are processed entirely in your browser and never leave your device. No data is logged or stored.",
            },
        ],
    },
    {
        id: "python",
        name: "Python",
        icon: "PY",
        title: "Pretty Print Python - Format Python Code Online",
        description:
            "Pretty Print Python code online for free. Clean up trailing whitespace, normalize line breaks, and beautify your Python scripts. Free online Python formatter.",
        h1: "Pretty Print Python",
        subtitle: "Format & Beautify Python Code Online — Free & Instant",
        keywords: [
            "pretty print python",
            "pretty print python online",
            "python formatter",
            "python formatter online",
            "beautify python",
            "format python",
            "python beautifier",
            "python code formatter",
            "python indent fixer",
        ],
        cardDesc: "Pretty print Python — clean up and beautify Python scripts online.",
        faqs: [
            {
                question: "What is Pretty Print Python?",
                answer:
                    "Pretty Print Python is a free online tool that cleans up your Python code by removing trailing whitespace, normalizing line breaks, and ensuring consistent formatting.",
            },
            {
                question: "Does it fix Python indentation?",
                answer:
                    "The tool cleans up trailing whitespace and normalizes line endings. For full PEP 8 compliance, consider using a dedicated tool like Black or autopep8 locally.",
            },
            {
                question: "Is my Python code kept private?",
                answer:
                    "Yes. All processing happens locally in your browser. Your Python code is never uploaded to any server.",
            },
            {
                question: "Is it free?",
                answer:
                    "Yes, 100% free with no signup or usage limits.",
            },
        ],
    },
    {
        id: "java",
        name: "Java",
        icon: "☕",
        title: "Pretty Print Java - Format Java Code Online",
        description:
            "Pretty Print Java code online for free. Instantly format and beautify your Java source code with proper bracket indentation. Free online Java formatter.",
        h1: "Pretty Print Java",
        subtitle: "Format & Beautify Java Code Online — Free & Instant",
        keywords: [
            "pretty print java",
            "java formatter",
            "java formatter online",
            "beautify java",
            "format java",
            "java beautifier",
            "java code formatter",
            "pretty print java online",
        ],
        cardDesc: "Pretty print Java — format and indent Java source code online.",
        faqs: [
            {
                question: "What is Pretty Print Java?",
                answer:
                    "Pretty Print Java is a free online tool that formats Java source code with proper bracket-based indentation and consistent spacing for improved readability.",
            },
            {
                question: "Does it support modern Java syntax?",
                answer:
                    "Yes, the formatter handles all Java syntax including generics, lambdas, streams, records, and sealed classes through bracket-based indentation.",
            },
            {
                question: "Is my Java code safe?",
                answer:
                    "Absolutely. Everything is processed 100% in your browser. No code is ever sent to any server.",
            },
            {
                question: "Is it free?",
                answer:
                    "Yes, completely free with no limits or signup required.",
            },
        ],
    },
    {
        id: "c",
        name: "C",
        icon: "C",
        title: "Pretty Print C - Format C Code Online",
        description:
            "Pretty Print C code online for free. Instantly format and beautify your C source code with proper indentation. Free online C formatter and beautifier.",
        h1: "Pretty Print C",
        subtitle: "Format & Beautify C Code Online — Free & Instant",
        keywords: [
            "pretty print c",
            "c formatter",
            "c formatter online",
            "beautify c",
            "format c code",
            "c beautifier",
            "c code formatter",
            "c indent",
        ],
        cardDesc: "Pretty print C — format and indent C source code online.",
        faqs: [
            {
                question: "What is Pretty Print C?",
                answer:
                    "Pretty Print C is a free online tool that formats C source code with proper bracket-based indentation, helping you write cleaner and more readable C programs.",
            },
            {
                question: "Does it support C11/C17 syntax?",
                answer:
                    "Yes, the formatter handles all C syntax through intelligent bracket-based indentation that works across all C standards.",
            },
            {
                question: "Is it secure?",
                answer:
                    "Yes. All processing is done in your browser. Your C code never leaves your device.",
            },
            {
                question: "Is it free?",
                answer:
                    "Yes, 100% free with no registration required.",
            },
        ],
    },
    {
        id: "c++",
        name: "C++",
        icon: "C++",
        title: "Pretty Print C++ - Format C++ Code Online",
        description:
            "Pretty Print C++ code online for free. Instantly format and beautify your C++ source code with proper indentation. Free online C++ formatter and beautifier.",
        h1: "Pretty Print C++",
        subtitle: "Format & Beautify C++ Code Online — Free & Instant",
        keywords: [
            "pretty print c++",
            "c++ formatter",
            "c++ formatter online",
            "beautify c++",
            "format c++",
            "cpp beautifier",
            "c++ code formatter",
            "cpp formatter online",
        ],
        cardDesc: "Pretty print C++ — format and indent C++ application code online.",
        faqs: [
            {
                question: "What is Pretty Print C++?",
                answer:
                    "Pretty Print C++ is a free online tool that formats C++ source code with proper indentation and consistent bracket alignment for better readability.",
            },
            {
                question: "Does it support modern C++ (C++17, C++20)?",
                answer:
                    "Yes, the formatter uses bracket-based indentation that works with all modern C++ features including concepts, ranges, and coroutines.",
            },
            {
                question: "Is it safe to paste my C++ code?",
                answer:
                    "Yes. Your code is processed entirely in your browser and never transmitted to any server.",
            },
            {
                question: "Is it free?",
                answer:
                    "Yes, completely free with unlimited usage.",
            },
        ],
    },
    {
        id: "c#",
        name: "C#",
        icon: "C#",
        title: "Pretty Print C# - Format C# Code Online",
        description:
            "Pretty Print C# code online for free. Instantly format and beautify your C# .NET code with proper indentation. Free online C# formatter and beautifier.",
        h1: "Pretty Print C#",
        subtitle: "Format & Beautify C# .NET Code Online — Free & Instant",
        keywords: [
            "pretty print c#",
            "c# formatter",
            "c# formatter online",
            "beautify c#",
            "format c#",
            "csharp formatter",
            "c# beautifier",
            "dotnet formatter online",
        ],
        cardDesc: "Pretty print C# — format and beautify .NET C# code online.",
        faqs: [
            {
                question: "What is Pretty Print C#?",
                answer:
                    "Pretty Print C# is a free online formatter that beautifies C# code with proper indentation and bracket alignment, making your .NET code more readable.",
            },
            {
                question: "Does it support .NET 8 and C# 12 syntax?",
                answer:
                    "Yes, the formatter handles all C# syntax through intelligent bracket and parenthesis based indentation.",
            },
            {
                question: "Is my code safe?",
                answer:
                    "Yes. 100% client-side processing. Your C# code never leaves your browser.",
            },
            {
                question: "Is it free?",
                answer:
                    "Yes, completely free with no signup or limits.",
            },
        ],
    },
    {
        id: "php",
        name: "PHP",
        icon: "PHP",
        title: "Pretty Print PHP - Format PHP Code Online",
        description:
            "Pretty Print PHP code online for free. Instantly format and beautify your PHP scripts with proper indentation. Free online PHP formatter and beautifier.",
        h1: "Pretty Print PHP",
        subtitle: "Format & Beautify PHP Code Online — Free & Instant",
        keywords: [
            "pretty print php",
            "php formatter",
            "php formatter online",
            "beautify php",
            "format php",
            "php beautifier",
            "php code formatter",
            "pretty print php online",
        ],
        cardDesc: "Pretty print PHP — format and beautify PHP scripts online.",
        faqs: [
            {
                question: "What is Pretty Print PHP?",
                answer:
                    "Pretty Print PHP is a free online tool that formats PHP code with proper indentation and bracket alignment for improved readability and maintainability.",
            },
            {
                question: "Does it support modern PHP syntax?",
                answer:
                    "Yes, the formatter handles PHP syntax including classes, functions, namespaces, and modern PHP features through bracket-based indentation.",
            },
            {
                question: "Is my PHP code secure?",
                answer:
                    "Yes. All processing happens in your browser. Your PHP code is never sent to any external server.",
            },
            {
                question: "Is it free?",
                answer:
                    "Yes, completely free with no limits.",
            },
        ],
    },
    {
        id: "ruby",
        name: "Ruby",
        icon: "RB",
        title: "Pretty Print Ruby - Format Ruby Code Online",
        description:
            "Pretty Print Ruby code online for free. Instantly format and beautify your Ruby scripts with proper block indentation. Free online Ruby formatter.",
        h1: "Pretty Print Ruby",
        subtitle: "Format & Beautify Ruby Code Online — Free & Instant",
        keywords: [
            "pretty print ruby",
            "ruby formatter",
            "ruby formatter online",
            "beautify ruby",
            "format ruby",
            "ruby beautifier",
            "ruby code formatter",
        ],
        cardDesc: "Pretty print Ruby — format and beautify Ruby scripts online.",
        faqs: [
            {
                question: "What is Pretty Print Ruby?",
                answer:
                    "Pretty Print Ruby is a free online tool that formats Ruby code with proper block-based indentation (def, class, module, do, if, etc.) for cleaner, more readable code.",
            },
            {
                question: "Does it support Ruby on Rails code?",
                answer:
                    "Yes, Rails controller, model, and view helper code can be formatted since the formatter understands Ruby block syntax.",
            },
            {
                question: "Is it safe?",
                answer:
                    "Yes. Everything runs in your browser. No data is transmitted to any server.",
            },
            {
                question: "Is it free?",
                answer:
                    "Yes, 100% free. No signup required.",
            },
        ],
    },
    {
        id: "lua",
        name: "Lua",
        icon: "LUA",
        title: "Pretty Print Lua - Format Lua Code Online",
        description:
            "Pretty Print Lua code online for free. Instantly format and beautify your Lua scripts with proper indentation. Free online Lua formatter and beautifier.",
        h1: "Pretty Print Lua",
        subtitle: "Format & Beautify Lua Scripts Online — Free & Instant",
        keywords: [
            "pretty print lua",
            "lua formatter",
            "lua formatter online",
            "beautify lua",
            "format lua",
            "lua beautifier",
            "lua code formatter",
        ],
        cardDesc: "Pretty print Lua — format and beautify Lua scripts online.",
        faqs: [
            {
                question: "What is Pretty Print Lua?",
                answer:
                    "Pretty Print Lua is a free online tool that formats Lua scripts with proper function/then/do block indentation for better readability.",
            },
            {
                question: "Does it support Lua 5.4 syntax?",
                answer:
                    "Yes, the formatter works with all Lua versions through intelligent block-based indentation.",
            },
            {
                question: "Is it safe?",
                answer:
                    "Yes. Your Lua code is processed in your browser and never sent anywhere.",
            },
            {
                question: "Is it free?",
                answer:
                    "Yes, completely free with no signup or limits.",
            },
        ],
    },
    {
        id: "perl",
        name: "Perl",
        icon: "🐪",
        title: "Pretty Print Perl - Format Perl Code Online",
        description:
            "Pretty Print Perl code online for free. Instantly format and beautify your Perl scripts with proper indentation. Free online Perl formatter.",
        h1: "Pretty Print Perl",
        subtitle: "Format & Beautify Perl Code Online — Free & Instant",
        keywords: [
            "pretty print perl",
            "perl formatter",
            "perl formatter online",
            "beautify perl",
            "format perl",
            "perl beautifier",
            "perl code formatter",
        ],
        cardDesc: "Pretty print Perl — format and beautify Perl scripts online.",
        faqs: [
            {
                question: "What is Pretty Print Perl?",
                answer:
                    "Pretty Print Perl is a free online tool that formats Perl scripts with proper bracket and block indentation for improved readability.",
            },
            {
                question: "Does it support Perl 5 syntax?",
                answer:
                    "Yes, the formatter handles Perl syntax through bracket-based indentation that works with all Perl versions.",
            },
            {
                question: "Is it secure?",
                answer:
                    "Yes. All processing happens locally in your browser.",
            },
            {
                question: "Is it free?",
                answer:
                    "Yes, 100% free. No signup needed.",
            },
        ],
    },
    {
        id: "xml",
        name: "XML",
        icon: "/>",
        title: "Pretty Print XML - Format XML Code Online",
        description:
            "Pretty Print XML online for free. Paste your minified XML and instantly beautify, format, and indent it. Free online XML formatter and beautifier tool.",
        h1: "Pretty Print XML",
        subtitle: "Beautify & Format XML Documents Online — Free & Instant",
        keywords: [
            "pretty print xml",
            "pretty print xml online",
            "xml formatter",
            "xml formatter online",
            "beautify xml",
            "beautify xml online",
            "xml beautifier",
            "format xml",
            "xml pretty printer",
            "xml viewer",
        ],
        cardDesc: "Pretty print XML — format and indent XML documents online.",
        faqs: [
            {
                question: "What is Pretty Print XML?",
                answer:
                    "Pretty Print XML is a free online tool that formats minified or messy XML documents into clean, properly indented markup with consistent tag alignment.",
            },
            {
                question: "Can I format large XML files?",
                answer:
                    "Yes. Since the formatting happens in your browser, it can handle large XML documents efficiently without any upload limits.",
            },
            {
                question: "Does it validate XML?",
                answer:
                    "If your XML has syntax errors, the formatter will report them. Only well-formed XML can be successfully formatted.",
            },
            {
                question: "Is it safe?",
                answer:
                    "Yes. Your XML data is processed entirely in your browser and never transmitted anywhere.",
            },
        ],
    },
    {
        id: "xaml",
        name: "XAML",
        icon: "X",
        title: "Pretty Print XAML - Format XAML Code Online",
        description:
            "Pretty Print XAML online for free. Instantly format and beautify your XAML interface markup with proper indentation. Free online XAML formatter.",
        h1: "Pretty Print XAML",
        subtitle: "Format & Beautify XAML Markup Online — Free & Instant",
        keywords: [
            "pretty print xaml",
            "xaml formatter",
            "xaml formatter online",
            "beautify xaml",
            "format xaml",
            "xaml beautifier",
            "wpf xaml formatter",
        ],
        cardDesc: "Pretty print XAML — format and beautify interface markup online.",
        faqs: [
            {
                question: "What is Pretty Print XAML?",
                answer:
                    "Pretty Print XAML is a free online tool that formats XAML (eXtensible Application Markup Language) used in WPF, UWP, and .NET MAUI applications with proper tag indentation.",
            },
            {
                question: "Does it support WPF XAML?",
                answer:
                    "Yes, it formats all XAML dialects including WPF, UWP, Xamarin.Forms, and .NET MAUI XAML files.",
            },
            {
                question: "Is it safe?",
                answer:
                    "Yes. Your XAML is processed entirely in your browser.",
            },
            {
                question: "Is it free?",
                answer:
                    "Yes, 100% free with no registration.",
            },
        ],
    },
    {
        id: "yaml",
        name: "YAML",
        icon: "Y",
        title: "Pretty Print YAML - Format YAML Code Online",
        description:
            "Pretty Print YAML online for free. Instantly format and beautify your YAML configuration files with proper indentation. Free online YAML formatter.",
        h1: "Pretty Print YAML",
        subtitle: "Format & Beautify YAML Configuration Files Online — Free",
        keywords: [
            "pretty print yaml",
            "pretty print yaml online",
            "yaml formatter",
            "yaml formatter online",
            "beautify yaml",
            "format yaml",
            "yaml beautifier",
            "yaml pretty printer",
        ],
        cardDesc: "Pretty print YAML — format and beautify configuration files online.",
        faqs: [
            {
                question: "What is Pretty Print YAML?",
                answer:
                    "Pretty Print YAML is a free online tool that formats YAML configuration files with proper indentation and consistent key-value alignment.",
            },
            {
                question: "Does it validate YAML syntax?",
                answer:
                    "Yes. If your YAML has syntax errors (incorrect indentation, missing colons, etc.), the formatter will report an error message.",
            },
            {
                question: "Can I format Docker Compose and Kubernetes YAML?",
                answer:
                    "Yes. The formatter works with all YAML files including Docker Compose, Kubernetes manifests, GitHub Actions, and any other YAML configuration.",
            },
            {
                question: "Is it free and private?",
                answer:
                    "Yes. 100% free, no signup, and your YAML data never leaves your browser.",
            },
        ],
    },
    {
        id: "graphql",
        name: "GraphQL",
        icon: "QL",
        title: "Pretty Print GraphQL - Format GraphQL Queries Online",
        description:
            "Pretty Print GraphQL online for free. Instantly format and beautify your GraphQL queries, mutations, and schemas. Free online GraphQL formatter.",
        h1: "Pretty Print GraphQL",
        subtitle: "Format & Beautify GraphQL Queries Online — Free & Instant",
        keywords: [
            "pretty print graphql",
            "graphql formatter",
            "graphql formatter online",
            "beautify graphql",
            "format graphql",
            "graphql beautifier",
            "graphql query formatter",
        ],
        cardDesc: "Pretty print GraphQL — format queries and schemas online.",
        faqs: [
            {
                question: "What is Pretty Print GraphQL?",
                answer:
                    "Pretty Print GraphQL is a free online tool that formats GraphQL queries, mutations, subscriptions, and schema definitions with proper indentation and field alignment.",
            },
            {
                question: "Does it support GraphQL fragments?",
                answer:
                    "Yes, the formatter handles all GraphQL syntax including fragments, directives, variables, and type definitions.",
            },
            {
                question: "Is it safe for sensitive schemas?",
                answer:
                    "Yes. Your GraphQL code is processed entirely in your browser and never sent to any server.",
            },
            {
                question: "Is it free?",
                answer:
                    "Yes, completely free with no limits.",
            },
        ],
    },
    {
        id: "markdown",
        name: "Markdown",
        icon: "M↓",
        title: "Pretty Print Markdown - Format Markdown Online",
        description:
            "Pretty Print Markdown online for free. Instantly format and beautify your Markdown documents with consistent heading, list, and code block formatting.",
        h1: "Pretty Print Markdown",
        subtitle: "Format & Beautify Markdown Documents Online — Free",
        keywords: [
            "pretty print markdown",
            "markdown formatter",
            "markdown formatter online",
            "beautify markdown",
            "format markdown",
            "markdown beautifier",
            "md formatter",
        ],
        cardDesc: "Pretty print Markdown — format and beautify .md documents online.",
        faqs: [
            {
                question: "What is Pretty Print Markdown?",
                answer:
                    "Pretty Print Markdown is a free online tool that formats Markdown documents with consistent heading levels, list indentation, code block formatting, and link alignment.",
            },
            {
                question: "Does it support GitHub Flavored Markdown?",
                answer:
                    "Yes, the formatter supports GFM including tables, task lists, strikethrough, and code fences.",
            },
            {
                question: "Is it safe?",
                answer:
                    "Yes. Your Markdown is processed in your browser and never uploaded anywhere.",
            },
            {
                question: "Is it free?",
                answer:
                    "Yes, 100% free with no registration required.",
            },
        ],
    },
    {
        id: "mdx",
        name: "MDX",
        icon: "MDX",
        title: "Pretty Print MDX - Format MDX Code Online",
        description:
            "Pretty Print MDX online for free. Instantly format and beautify your MDX files combining Markdown with JSX components. Free online MDX formatter.",
        h1: "Pretty Print MDX",
        subtitle: "Format & Beautify MDX Files Online — Free & Instant",
        keywords: [
            "pretty print mdx",
            "mdx formatter",
            "mdx formatter online",
            "beautify mdx",
            "format mdx",
            "mdx beautifier",
        ],
        cardDesc: "Pretty print MDX — format Markdown + JSX files online.",
        faqs: [
            {
                question: "What is Pretty Print MDX?",
                answer:
                    "Pretty Print MDX is a free online tool that formats MDX files — a format that combines Markdown with JSX components, commonly used in documentation and blog frameworks.",
            },
            {
                question: "Does it handle JSX components inside MDX?",
                answer:
                    "Yes, the formatter properly handles both the Markdown content and embedded JSX/React component syntax.",
            },
            {
                question: "Is it safe?",
                answer:
                    "Yes. Everything is processed in your browser.",
            },
            {
                question: "Is it free?",
                answer:
                    "Yes, 100% free with unlimited usage.",
            },
        ],
    },
    {
        id: "babel",
        name: "Babel",
        icon: "B",
        title: "Pretty Print Babel - Format Babel JavaScript Online",
        description:
            "Pretty Print Babel JavaScript code online for free. Instantly format and beautify your Babel-transpiled JS code. Free online Babel formatter.",
        h1: "Pretty Print Babel",
        subtitle: "Format & Beautify Babel JavaScript Online — Free & Instant",
        keywords: [
            "pretty print babel",
            "babel formatter",
            "babel formatter online",
            "beautify babel",
            "format babel",
            "babel javascript formatter",
        ],
        cardDesc: "Pretty print Babel — format Babel-transpiled JavaScript online.",
        faqs: [
            {
                question: "What is Pretty Print Babel?",
                answer:
                    "Pretty Print Babel is a free online tool that formats JavaScript code using the Babel parser, supporting the latest ECMAScript features, proposals, and experimental syntax.",
            },
            {
                question: "How is it different from the JavaScript formatter?",
                answer:
                    "The Babel formatter uses Prettier's Babel parser which supports experimental JavaScript features and proposals that the standard JS parser may not handle.",
            },
            {
                question: "Is it safe?",
                answer:
                    "Yes. All formatting happens in your browser. Nothing is sent to any server.",
            },
            {
                question: "Is it free?",
                answer:
                    "Yes, completely free with no limits.",
            },
        ],
    },
    {
        id: "angular",
        name: "Angular",
        icon: "A",
        title: "Pretty Print Angular - Format Angular Templates Online",
        description:
            "Pretty Print Angular template code online for free. Instantly format and beautify your Angular HTML templates with proper directive alignment. Free online Angular formatter.",
        h1: "Pretty Print Angular",
        subtitle: "Format & Beautify Angular Templates Online — Free & Instant",
        keywords: [
            "pretty print angular",
            "angular formatter",
            "angular formatter online",
            "beautify angular",
            "format angular",
            "angular template formatter",
            "angular html formatter",
        ],
        cardDesc: "Pretty print Angular — format Angular template code online.",
        faqs: [
            {
                question: "What is Pretty Print Angular?",
                answer:
                    "Pretty Print Angular is a free online tool that formats Angular HTML templates with proper directive, binding, and structural directive alignment.",
            },
            {
                question: "Does it support Angular 17+ syntax?",
                answer:
                    "Yes, the formatter handles Angular template syntax including *ngIf, *ngFor, @if, @for, event bindings, and property bindings.",
            },
            {
                question: "Is it safe?",
                answer:
                    "Yes. Your Angular templates are processed entirely in your browser.",
            },
            {
                question: "Is it free?",
                answer:
                    "Yes, 100% free with no registration needed.",
            },
        ],
    },
];

/**
 * Lookup a language's SEO data by its slug ID.
 */
export function getLanguageSEO(id: string): LanguageSEO | undefined {
    return LANGUAGES_SEO.find((lang) => lang.id === id);
}
