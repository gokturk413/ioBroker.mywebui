/**
 * A fast lexer (scanner) for CSS input.
 *
 * Inspired by the approach used in es-module-shims / es-module-lexer,
 * this lexer uses numeric character-code comparisons (`charCodeAt`)
 * instead of single-character string comparisons, and employs sticky
 * (`y`-flag) regular expressions matched directly against the full
 * input to avoid creating temporary substring slices.
 *
 * The Lexer keeps an index (`pos`) into the original input.  Simple
 * token types (whitespace, braces, colons, semicolons, commas) are
 * scanned character-by-character via `charCodeAt`, avoiding regular
 * expressions for those cases.  For complex patterns `matchRegex` uses
 * a sticky regex positioned at `pos` so no string copy is needed.
 */
declare const Ch_SLASH = 47;
declare const Ch_AT = 64;
declare const Ch_CLOSE = 125;
declare const Ch_STAR = 42;
export declare class Lexer {
    /** The complete CSS source string. */
    readonly input: string;
    /** Current read position (index into `input`). */
    pos: number;
    /** Current source line (1-based). */
    lineno: number;
    /** Current source column (1-based). */
    column: number;
    constructor(input: string);
    /** Returns `true` when there is still input to consume. */
    get hasMore(): boolean;
    /**
     * Returns the character code at `pos + offset` without advancing,
     * or `NaN` when past the end of input.
     *
     * Comparing numeric codes (`charCodeAt`) is faster than creating
     * single-character strings with bracket indexing.
     */
    charCodeAt(offset?: number): number;
    /**
     * Returns the character at `pos + offset` without advancing, or an
     * empty string when past the end of input.
     */
    charAt(offset?: number): string;
    /**
     * Returns the remaining input from the current position.
     *
     * This creates a new string (same cost as the old `css.slice(…)` approach)
     * and is provided for compatibility with the bracket/quote-aware search
     * utilities that accept a plain string.
     */
    get remaining(): string;
    /**
     * Advance `pos` by `n` characters, updating line/column tracking.
     * Returns the consumed slice.
     */
    consume(n: number): string;
    /**
     * Advance `pos` up to (but not including) `absolutePos`, updating
     * line/column tracking.  Returns the consumed slice.
     */
    consumeTo(absolutePos: number): string;
    /**
     * Apply a sticky (`y`-flag) regex directly against the full input
     * at the current position.  If the regex matches, the matched text
     * is consumed and the `RegExpExecArray` is returned; otherwise
     * `null` is returned and `pos` is not changed.
     *
     * Using the `y` flag with `lastIndex` avoids creating a temporary
     * substring slice (which the old `^`-anchor + `this.remaining`
     * approach required).
     */
    matchRegex(re: RegExp): RegExpExecArray | null;
    /**
     * Consume zero or more whitespace characters (space, tab, CR, LF,
     * form-feed) using `charCodeAt` instead of string comparisons.
     */
    skipWhitespace(): void;
    /**
     * If the current character is `{`, consume it and any following
     * whitespace, then return `true`.  Otherwise return `false`.
     */
    tryOpenBrace(): boolean;
    /**
     * If the current character is `}`, consume it and return `true`.
     * Otherwise return `false`.
     */
    tryCloseBrace(): boolean;
    /**
     * If the current character is `:`, consume it and any following
     * whitespace, then return `true`.  Otherwise return `false`.
     */
    tryColon(): boolean;
    /**
     * Consume any leading semicolons and whitespace characters using
     * `charCodeAt` instead of string comparisons.
     */
    skipSemicolonAndWhitespace(): void;
    /**
     * If the current character is `,`, consume it and any following
     * whitespace, then return `true`.  Otherwise return `false`.
     */
    tryCommaAndWhitespace(): boolean;
    /**
     * Returns a snapshot of the current source position as an object
     * suitable for use in `Position` nodes.
     */
    getPosition(): {
        line: number;
        column: number;
    };
    /**
     * Update `lineno`, `column`, and `pos` for a range of characters in
     * the original input.  Uses `charCodeAt` for the newline check.
     */
    private _advanceRange;
}
export { Ch_AT, Ch_CLOSE, Ch_SLASH, Ch_STAR };
