import { type CssStylesheetAST } from '../type.js';
export type ParseOptions = {
    source?: string;
    silent?: boolean;
    preserveFormatting?: boolean;
};
export declare const parse: (css: string, options?: ParseOptions) => CssStylesheetAST;
export default parse;
