/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/expr-eval/index.d.ts:

/** @typedef {(string|number|?)} */
var Value;
/**
 * @record
 * @struct
 */
function Values() {}

/* TODO: IndexSignature:  */

/**
 * @constructor
 * @struct
 * @param {?=} options
 */
function Parser(options) {}

/**
 * @param {string} expression
 * @return {?}
 */
Parser.prototype.parse = function(expression) {};

/**
 * @param {string} expression
 * @param {?=} values
 * @return {number}
 */
Parser.prototype.evaluate = function(expression, values) {};

/**
 * @param {string} expression
 * @return {?}
 */
Parser.parse = function(expression) {};

/**
 * @param {string} expression
 * @param {?=} values
 * @return {number}
 */
Parser.evaluate = function(expression, values) {};
/**
 * @record
 * @struct
 */
function Expression() {}

/**
 * @param {?=} values
 * @return {?}
 */
Expression.prototype.simplify = function(values) {};

/**
 * @param {?=} values
 * @return {number}
 */
Expression.prototype.evaluate = function(values) {};

/**
 * @param {?} values
 * @return {?}
 */
Expression.prototype.substitute = function(values) {};

/**
 * @return {!Array<string>}
 */
Expression.prototype.symbols = function() {};

/**
 * @return {!Array<string>}
 */
Expression.prototype.variables = function() {};

/**
 * @param {string} params
 * @param {?=} values
 * @return {?}
 */
Expression.prototype.toJSFunction = function(params, values) {};
