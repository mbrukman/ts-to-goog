/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/pg-types/index.d.ts:
/**
 * @record
 * @struct
 */
function TypeParser() {}

/* TODO: CallSignature:  */

/**
 * @param {number} oid
 * @param {string} format
 * @return {?}
 */
function getTypeParser(oid, format) {}

/**
 * @param {number} oid
 * @param {string|?} format_or_parseFn
 * @param {?=} parseFn
 * @return {void}
 */
function setTypeParser(oid, format_or_parseFn, parseFn) {}
/** @const */
var arrayParser = {};

/**
 * @param {?} source
 * @param {?} transform
 * @return {?}
 */
arrayParser.create = function(source, transform) {};
