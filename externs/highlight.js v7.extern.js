/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/highlight.js v7/index.d.ts:
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "highlight.js"
/** @const */
tsickle_declare_module.highlight_js = {};
/** @const */
tsickle_declare_module.highlight_js.hljs = {};
 /** @type {!Object<string,?>} */
tsickle_declare_module.highlight_js.hljs.LANGUAGES;

/**
 * @param {!Node} block
 * @param {boolean} ignoreNewLines
 * @return {string}
 */
tsickle_declare_module.highlight_js.hljs.blockText = function(block, ignoreNewLines) {};

/**
 * @param {!Node} block
 * @return {string}
 */
tsickle_declare_module.highlight_js.hljs.blockLanguage = function(block) {};

/**
 * @param {string} language_name
 * @param {string} value
 * @return {!hljs.IHighlightResult}
 */
tsickle_declare_module.highlight_js.hljs.highlight = function(language_name, value) {};

/**
 * @param {string} text
 * @return {!hljs.IHighlightResult}
 */
tsickle_declare_module.highlight_js.hljs.highlightAuto = function(text) {};

/**
 * @param {string} value
 * @param {boolean} tabReplace
 * @param {boolean} useBR
 * @return {string}
 */
tsickle_declare_module.highlight_js.hljs.fixMarkup = function(value, tabReplace, useBR) {};

/**
 * @param {!Node} block
 * @param {boolean=} tabReplace
 * @param {boolean=} useBR
 * @return {void}
 */
tsickle_declare_module.highlight_js.hljs.highlightBlock = function(block, tabReplace, useBR) {};

/**
 * @return {void}
 */
tsickle_declare_module.highlight_js.hljs.initHighlighting = function() {};

/**
 * @return {void}
 */
tsickle_declare_module.highlight_js.hljs.initHighlightingOnLoad = function() {};
 /** @type {string} */
tsickle_declare_module.highlight_js.hljs.tabReplace;
 /** @type {string} */
tsickle_declare_module.highlight_js.hljs.IDENT_RE;
 /** @type {string} */
tsickle_declare_module.highlight_js.hljs.UNDERSCORE_IDENT_RE;
 /** @type {string} */
tsickle_declare_module.highlight_js.hljs.NUMBER_RE;
 /** @type {string} */
tsickle_declare_module.highlight_js.hljs.C_NUMBER_RE;
 /** @type {string} */
tsickle_declare_module.highlight_js.hljs.BINARY_NUMBER_RE;
 /** @type {string} */
tsickle_declare_module.highlight_js.hljs.RE_STARTERS_RE;
 /** @type {!hljs.IMode} */
tsickle_declare_module.highlight_js.hljs.BACKSLASH_ESCAPE;
 /** @type {!hljs.IMode} */
tsickle_declare_module.highlight_js.hljs.APOS_STRING_MODE;
 /** @type {!hljs.IMode} */
tsickle_declare_module.highlight_js.hljs.QUOTE_STRING_MODE;
 /** @type {!hljs.IMode} */
tsickle_declare_module.highlight_js.hljs.C_LINE_COMMENT_MODE;
 /** @type {!hljs.IMode} */
tsickle_declare_module.highlight_js.hljs.C_BLOCK_COMMENT_MODE;
 /** @type {!hljs.IMode} */
tsickle_declare_module.highlight_js.hljs.HASH_COMMENT_MODE;
 /** @type {!hljs.IMode} */
tsickle_declare_module.highlight_js.hljs.NUMBER_MODE;
 /** @type {!hljs.IMode} */
tsickle_declare_module.highlight_js.hljs.C_NUMBER_MODE;
 /** @type {!hljs.IMode} */
tsickle_declare_module.highlight_js.hljs.BINARY_NUMBER_MODE;
/**
 * @record
 * @struct
 */
tsickle_declare_module.highlight_js.hljs.IHighlightResult = function() {};
 /** @type {number} */
tsickle_declare_module.highlight_js.hljs.IHighlightResult.prototype.relevance;
 /** @type {number} */
tsickle_declare_module.highlight_js.hljs.IHighlightResult.prototype.keyword_count;
 /** @type {string} */
tsickle_declare_module.highlight_js.hljs.IHighlightResult.prototype.value;
/**
 * @extends {hljs.IHighlightResult}
 * @record
 * @struct
 */
tsickle_declare_module.highlight_js.hljs.IAutoHighlightResult = function() {};
 /** @type {string} */
tsickle_declare_module.highlight_js.hljs.IAutoHighlightResult.prototype.language;
 /** @type {!hljs.IAutoHighlightResult} */
tsickle_declare_module.highlight_js.hljs.IAutoHighlightResult.prototype.second_best;
/**
 * @record
 * @struct
 */
tsickle_declare_module.highlight_js.hljs.IMode = function() {};
 /** @type {string} */
tsickle_declare_module.highlight_js.hljs.IMode.prototype.className;
 /** @type {string} */
tsickle_declare_module.highlight_js.hljs.IMode.prototype.begin;
 /** @type {string} */
tsickle_declare_module.highlight_js.hljs.IMode.prototype.end;
 /** @type {boolean} */
tsickle_declare_module.highlight_js.hljs.IMode.prototype.beginWithKeyword;
 /** @type {boolean} */
tsickle_declare_module.highlight_js.hljs.IMode.prototype.endsWithParent;
 /** @type {string} */
tsickle_declare_module.highlight_js.hljs.IMode.prototype.lexems;
 /** @type {!Object} */
tsickle_declare_module.highlight_js.hljs.IMode.prototype.keywords;
 /** @type {string} */
tsickle_declare_module.highlight_js.hljs.IMode.prototype.illegal;
 /** @type {boolean} */
tsickle_declare_module.highlight_js.hljs.IMode.prototype.excludeBegin;
 /** @type {boolean} */
tsickle_declare_module.highlight_js.hljs.IMode.prototype.excludeEnd;
 /** @type {boolean} */
tsickle_declare_module.highlight_js.hljs.IMode.prototype.returnBegin;
 /** @type {boolean} */
tsickle_declare_module.highlight_js.hljs.IMode.prototype.returnEnd;
 /** @type {!Array<!hljs.IMode>} */
tsickle_declare_module.highlight_js.hljs.IMode.prototype.contains;
 /** @type {string} */
tsickle_declare_module.highlight_js.hljs.IMode.prototype.starts;
 /** @type {string} */
tsickle_declare_module.highlight_js.hljs.IMode.prototype.subLanguage;
 /** @type {number} */
tsickle_declare_module.highlight_js.hljs.IMode.prototype.relevance;

/* TODO: ExportAssignment in tsickle_declare_module.highlight_js */
