export declare const MAX_LOOP = 10000;
/**
 * Find the first occurrence of any search string in the input string, ignoring escaped characters
 * @param string - The input string to search in
 * @param search - Array of strings to search for
 * @param position - Optional starting position for the search
 * @returns The index of the first match, or -1 if not found
 * @throws {Error} If too many escape sequences are encountered (> MAX_LOOP)
 * @example
 * ```ts
 * // Basic search
 * indexOfArrayNonEscaped('a,b,c', [',']) // 1
 *
 * // Handles escaped characters
 * indexOfArrayNonEscaped('a\\,b,c', [',']) // 4, the first comma is escaped
 * ```
 */
export declare const indexOfArrayNonEscaped: (string: string, search: Array<string>, position?: number) => number;
/**
 * Find the first occurrence of any search string in the input string, respecting brackets and quotes
 * @param string - The input string to search in
 * @param search - Array of strings to search for
 * @param position - Optional starting position for the search
 * @returns The index of the first match, or -1 if not found
 * @throws {Error} If too many escape sequences are encountered (> MAX_LOOP)
 * @example
 * ```ts
 * // Basic search
 * indexOfArrayWithBracketAndQuoteSupport('a,b,c', [',']) // 1
 *
 * // Respects brackets - won't match inside ()
 * indexOfArrayWithBracketAndQuoteSupport('(a,b),c', [',']) // 4, ignores the comma inside ()
 *
 * // Respects quotes - won't match inside quotes
 * indexOfArrayWithBracketAndQuoteSupport('"a,b",c', [',']) // 4, ignores the comma inside quotes
 * indexOfArrayWithBracketAndQuoteSupport("'a,b',c", [',']) // 4, ignores the comma inside quotes
 *
 * // Handles escaped characters
 * indexOfArrayWithBracketAndQuoteSupport('a\\,b,c', [',']) // 4, the first comma is escaped
 * ```
 */
export declare const indexOfArrayWithBracketAndQuoteSupport: (string: string, search: Array<string>, position?: number) => number;
/**
 * Split a string by search tokens, respecting brackets and quotes
 * @example
 * ```ts
 * splitWithBracketAndQuoteSupport('a,b', [',']) // ['a', 'b']
 * splitWithBracketAndQuoteSupport('a,(b,c)', [',']) // ['a', '(b,c)']
 * splitWithBracketAndQuoteSupport('a,"b,c"', [',']) // ['a', '"b,c"']
 * splitWithBracketAndQuoteSupport("a,'b,c'", [',']) // ['a', "'b,c'"]
 * ```
 */
export declare const splitWithBracketAndQuoteSupport: (string: string, search: Array<string>) => Array<string>;
