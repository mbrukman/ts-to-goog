/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/xml2js/index.d.ts:

/* TODO: ImportDeclaration in  */

/**
 * @param {?} xml
 * @param {?} callback_or_options
 * @param {?=} callback
 * @return {void}
 */
function parseString(xml, callback_or_options, callback) {}
 /** @type {?} */
var defaults;

/**
 * @constructor
 * @struct
 * @param {?=} options
 */
function Builder(options) {}

/**
 * @param {?} rootObj
 * @return {string}
 */
Builder.prototype.buildObject = function(rootObj) {};

/**
 * @constructor
 * @struct
 * @param {?=} options
 */
function Parser(options) {}

/**
 * @param {?} str
 * @param {!Function=} cb
 * @return {void}
 */
Parser.prototype.parseString = function(str, cb) {};

/**
 * @return {void}
 */
Parser.prototype.reset = function() {};
/**
 * @record
 * @struct
 */
function Options() {}
 /** @type {boolean} */
Options.prototype.async;
 /** @type {string} */
Options.prototype.attrkey;
 /** @type {!Array<?>} */
Options.prototype.attrNameProcessors;
 /** @type {!Array<?>} */
Options.prototype.attrValueProcessors;
 /** @type {string} */
Options.prototype.charkey;
 /** @type {boolean} */
Options.prototype.charsAsChildren;
 /** @type {string} */
Options.prototype.childkey;
 /** @type {?} */
Options.prototype.emptyTag;
 /** @type {boolean} */
Options.prototype.explicitArray;
 /** @type {boolean} */
Options.prototype.explicitCharkey;
 /** @type {boolean} */
Options.prototype.explicitChildren;
 /** @type {boolean} */
Options.prototype.explicitRoot;
 /** @type {boolean} */
Options.prototype.ignoreAttrs;
 /** @type {boolean} */
Options.prototype.includeWhiteChars;
 /** @type {boolean} */
Options.prototype.mergeAttrs;
 /** @type {boolean} */
Options.prototype.normalize;
 /** @type {boolean} */
Options.prototype.normalizeTags;
 /** @type {boolean} */
Options.prototype.strict;
 /** @type {!Array<?>} */
Options.prototype.tagNameProcessors;
 /** @type {boolean} */
Options.prototype.trim;
 /** @type {!Function} */
Options.prototype.validator;
 /** @type {!Array<?>} */
Options.prototype.valueProcessors;
 /** @type {boolean} */
Options.prototype.xmlns;
/**
 * @extends {Options}
 * @record
 * @struct
 */
function OptionsV2() {}
 /** @type {boolean} */
OptionsV2.prototype.preserveChildrenOrder;
 /** @type {string} */
OptionsV2.prototype.rootName;
 /** @type {?} */
OptionsV2.prototype.xmldec;
 /** @type {?} */
OptionsV2.prototype.doctype;
 /** @type {?} */
OptionsV2.prototype.renderOpts;
 /** @type {boolean} */
OptionsV2.prototype.headless;
 /** @type {number} */
OptionsV2.prototype.chunkSize;
 /** @type {boolean} */
OptionsV2.prototype.cdata;
/**
 * @record
 * @struct
 */
function convertableToString() {}

/**
 * @return {string}
 */
convertableToString.prototype.toString = function() {};
