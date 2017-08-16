/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/gently/index.d.ts:

/* TODO: ExportAssignment in  */

/**
 * @constructor
 * @struct
 */
function Gently() {}
 /** @type {!Array<?>} */
Gently.prototype.hijacked;

/**
 * @param {?} obj
 * @param {string} method
 * @param {function(!Array<?>): ?|number=} stubFn_or_count
 * @param {function(!Array<?>): ?=} stubFn
 * @return {function(!Array<?>): ?}
 */
Gently.prototype.expect = function(obj, method, stubFn_or_count, stubFn) {};

/**
 * @param {?} obj
 * @param {string} method
 * @return {void}
 */
Gently.prototype.restore = function(obj, method) {};

/**
 * @param {function(string): ?} realRequire
 * @return {function(string): ?}
 */
Gently.prototype.hijack = function(realRequire) {};

/**
 * @param {string} location
 * @param {string=} exportsName
 * @return {?}
 */
Gently.prototype.stub = function(location, exportsName) {};

/**
 * @param {string=} msg
 * @return {void}
 */
Gently.prototype.verify = function(msg) {};