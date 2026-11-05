export declare const parse: (css: string, options?: import("./parse/index.js").ParseOptions) => import("./type.js").CssStylesheetAST;
export declare const stringify: (node: import("./type.js").CssStylesheetAST, options?: import("./stringify/compiler.js").CompilerOptions) => string;
export * from './CssParseError.js';
export * from './CssPosition.js';
export type { ParseOptions } from './parse/index.js';
export type { CompilerOptions } from './stringify/index.js';
export * from './type.js';
declare const _default: {
    parse: (css: string, options?: import("./parse/index.js").ParseOptions) => import("./type.js").CssStylesheetAST;
    stringify: (node: import("./type.js").CssStylesheetAST, options?: import("./stringify/compiler.js").CompilerOptions) => string;
};
export default _default;
