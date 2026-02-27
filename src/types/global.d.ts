declare module '@prettier/plugin-ruby';
declare module '@prettier/plugin-lua';
declare module 'prettier/plugins/angular';
declare module '@wasm-fmt/clang-format' {
    export function format(code: string, filename?: string): string;
    export default function init(): Promise<void>;
}
declare module '@wasm-fmt/ruff_fmt' {
    export function format(code: string): string;
    export default function init(): Promise<void>;
}
