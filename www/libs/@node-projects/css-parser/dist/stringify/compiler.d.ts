import { type CssAllNodesAST, type CssCharsetAST, type CssCommentAST, type CssCommonPositionAST, type CssContainerAST, type CssCounterStyleAST, type CssCustomMediaAST, type CssDeclarationAST, type CssDocumentAST, type CssFontFaceAST, type CssFontFeatureValuesAST, type CssGenericAtRuleAST, type CssHostAST, type CssImportAST, type CssKeyframeAST, type CssKeyframesAST, type CssLayerAST, type CssMediaAST, type CssNamespaceAST, type CssPageAST, type CssPageMarginBoxAST, type CssPositionTryAST, type CssPropertyAST, type CssRuleAST, type CssScopeAST, type CssStartingStyleAST, type CssStylesheetAST, type CssSupportsAST, type CssViewTransitionAST, type CssWhitespaceAST } from '../type.js';
export type CompilerOptions = {
    indent?: string;
    compress?: boolean;
    identity?: boolean;
    removeEmptyRules?: boolean;
};
declare class Compiler {
    level: number;
    indentation: string;
    compress: boolean;
    identity: boolean;
    removeEmptyRules: boolean;
    constructor(options?: CompilerOptions);
    emit(str: string, _position?: CssCommonPositionAST['position']): string;
    /**
     * Increase, decrease or return current indentation.
     */
    indent(level?: number): string;
    visit(node: CssAllNodesAST): string;
    mapVisit(nodes: Array<CssAllNodesAST>, delim?: string): string;
    /**
     * Emit a block at-rule that contains nested rules (e.g. @media, @supports, @container).
     */
    private rulesBlock;
    /**
     * Emit a block at-rule that contains declarations (e.g. @font-face, @property).
     */
    private declsBlock;
    compile(node: CssStylesheetAST): string;
    /**
     * Identity mode: walk the AST including whitespace nodes.
     * Falls back to beautified output when whitespace nodes are not available.
     */
    private identityCompile;
    /**
     * Visit stylesheet node.
     */
    stylesheet(node: CssStylesheetAST): string;
    /**
     * Strip whitespace nodes from an array (used in beautified/compressed modes).
     */
    private stripWhitespace;
    /**
     * Filter out empty rules when removeEmptyRules is enabled.
     */
    private filterEmptyRules;
    /**
     * Check whether a node was newly created (not parsed from source).
     * New nodes lack the raw formatting properties set by the parser.
     */
    private isNewNode;
    /**
     * Visit block children in identity mode, formatting newly added nodes
     * with beautified output while preserving original formatting for
     * existing nodes.
     *
     * @param nodes    - The child nodes to visit
     * @param context  - 'decls' for declaration blocks, 'rules' for nested
     *                   rule blocks (e.g. @media), 'stylesheet' for top-level
     */
    private identityVisitBlock;
    /**
     * Visit whitespace node.
     */
    whitespace(node: CssWhitespaceAST): string;
    /**
     * Visit comment node.
     */
    comment(node: CssCommentAST): string;
    /**
     * Visit container node.
     */
    container(node: CssContainerAST): string;
    /**
     * Visit container node.
     */
    layer(node: CssLayerAST): string;
    /**
     * Visit import node.
     */
    import(node: CssImportAST): string;
    /**
     * Visit media node.
     */
    media(node: CssMediaAST): string;
    /**
     * Visit document node.
     */
    document(node: CssDocumentAST): string;
    /**
     * Visit charset node.
     */
    charset(node: CssCharsetAST): string;
    /**
     * Visit namespace node.
     */
    namespace(node: CssNamespaceAST): string;
    /**
     * Visit starting-style node.
     */
    startingStyle(node: CssStartingStyleAST): string;
    /**
     * Visit supports node.
     */
    supports(node: CssSupportsAST): string;
    /**
     * Visit keyframes node.
     */
    keyframes(node: CssKeyframesAST): string;
    /**
     * Visit keyframe node.
     */
    keyframe(node: CssKeyframeAST): string;
    /**
     * Visit page node.
     */
    page(node: CssPageAST): string;
    /**
     * Visit @page margin box node (@top-left, @bottom-right, etc.).
     */
    pageMarginBox(node: CssPageMarginBoxAST): string;
    /**
     * Visit font-face node.
     */
    fontFace(node: CssFontFaceAST): string;
    /**
     * Visit host node.
     */
    host(node: CssHostAST): string;
    /**
     * Visit custom-media node.
     */
    customMedia(node: CssCustomMediaAST): string;
    /**
     * Visit @property node.
     */
    property(node: CssPropertyAST): string;
    /**
     * Visit @counter-style node.
     */
    counterStyle(node: CssCounterStyleAST): string;
    /**
     * Visit @font-feature-values node.
     */
    fontFeatureValues(node: CssFontFeatureValuesAST): string;
    /**
     * Visit @scope node.
     */
    scope(node: CssScopeAST): string;
    /**
     * Visit @view-transition node.
     */
    viewTransition(node: CssViewTransitionAST): string;
    /**
     * Visit @position-try node.
     */
    positionTry(node: CssPositionTryAST): string;
    /**
     * Visit generic at-rule node (fallback for any unrecognized at-rule).
     */
    genericAtRule(node: CssGenericAtRuleAST): string;
    /**
     * Visit rule node.
     */
    rule(node: CssRuleAST): string;
    /**
     * Visit declaration node.
     */
    declaration(node: CssDeclarationAST): string;
}
export default Compiler;
