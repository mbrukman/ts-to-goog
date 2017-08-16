/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/ent/index.d.ts:
/**
 * @record
 * @struct
 */
function EntOpts() {}
 /** @type {boolean} */
EntOpts.prototype.numeric;
 /** @type {boolean} */
EntOpts.prototype.named;
 /** @type {?} */
EntOpts.prototype.special;

/**
 * Escape unsafe characters in str with html entities. By default, entities are encoded with numeric decimal codes
 * @param {string} s
 * @param {?=} opts
 * @return {string}
 */
function encode(s, opts) {}

/**
 * Convert html entities in str back to raw text.
 * @param {string} s
 * @return {string}
 */
function decode(s) {}
