import { NextResponse } from "next/server";
import { minify as terserMinify } from "terser";
import postcss from "postcss";
import cssnano from "cssnano";
import { minify as htmlMinify } from "html-minifier-terser";

export const runtime = 'edge';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { code, language } = body;

        if (!code || !language) {
            return NextResponse.json({ error: "Missing code or language" }, { status: 400 });
        }

        let minified = code;

        if (language === "json") {
            try {
                minified = JSON.stringify(JSON.parse(code));
            } catch (e) {
                // Return as is if invalid JSON
            }
        } else if (language === "javascript" || language === "typescript" || language === "babel" || language === "react") {
            const result = await terserMinify(code, {
                compress: true,
                mangle: true,
                format: { comments: false },
            });
            minified = result.code || code;
        } else if (language === "css" || language === "scss" || language === "less") {
            const result = await postcss([cssnano]).process(code, { from: undefined });
            minified = result.css;
        } else if (language === "html" || language === "svg") {
            minified = await htmlMinify(code, {
                collapseWhitespace: true,
                removeComments: true,
                minifyCSS: true,
                minifyJS: true,
            });
        } else {
            // Apply basic fallback minification for other languages
            minified = code.replace(/\n/g, '').replace(/\s{2,}/g, ' ').trim();
        }

        return NextResponse.json({ minified });

    } catch (error: any) {
        console.error("Minification API Error:", error);
        return NextResponse.json(
            { error: error.message || "Failed to minify code" },
            { status: 500 }
        );
    }
}
