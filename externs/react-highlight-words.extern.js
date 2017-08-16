/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/react-highlight-words/index.d.ts:

/* TODO: ImportDeclaration in  */

/* TODO: ExportAssignment in  */
/**
 * @record
 * @struct
 */
function HighlighterProps() {}
 /** @type {boolean} */
HighlighterProps.prototype.autoEscape;
 /** @type {string} */
HighlighterProps.prototype.activeClassName;
 /** @type {string} */
HighlighterProps.prototype.activeIndex;
 /** @type {string} */
HighlighterProps.prototype.highlightClassName;
 /** @type {?} */
HighlighterProps.prototype.highlightStyle;
 /** @type {string} */
HighlighterProps.prototype.highlightTag;
 /** @type {!Array<string>} */
HighlighterProps.prototype.searchWords;
 /** @type {string} */
HighlighterProps.prototype.textToHighlight;

/**
 * Process each search word and text to highlight before comparing (eg remove accents); signature (text: string): string
 * @param {string} text
 * @return {string}
 */
HighlighterProps.prototype.sanitize = function(text) {};
/**
 * @extends {React.Component}
 * @constructor
 * @struct
 */
function Highlighter() {}
 /** @type {?} */
Highlighter.propTypes;