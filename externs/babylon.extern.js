/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/babylon/index.d.ts:

/* TODO: ImportDeclaration in  */

/**
 * @param {string} code
 * @param {?=} opts
 * @return {?}
 */
function parse(code, opts) {}

/**
 * @param {string} input
 * @param {?=} options
 * @return {?}
 */
function parseExpression(input, options) {}
/**
 * @record
 * @struct
 */
function BabylonOptions() {}
 /** @type {boolean} */
BabylonOptions.prototype.allowImportExportEverywhere;
 /** @type {boolean} */
BabylonOptions.prototype.allowReturnOutsideFunction;
 /** @type {boolean} */
BabylonOptions.prototype.allowSuperOutsideMethod;
 /** @type {string} */
BabylonOptions.prototype.sourceType;
 /** @type {string} */
BabylonOptions.prototype.sourceFilename;
 /** @type {!Array<string>} */
BabylonOptions.prototype.plugins;

/** @typedef {string} */
var PluginName;
