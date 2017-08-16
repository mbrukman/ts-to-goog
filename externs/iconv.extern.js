/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/iconv/index.d.ts:
/** @const */
var Iconv = {};
/**
 * @record
 * @struct
 */
Iconv.Static = function() {};

/* TODO: ConstructSignature: Iconv */

/* TODO: CallSignature: Iconv */
/**
 * @extends {NodeJS.WritableStream}
 * @record
 * @struct
 */
Iconv.Iconv = function() {};
 /** @type {boolean} */
Iconv.Iconv.prototype.writable;

/**
 * @param {(string|?)} input
 * @param {string=} encoding
 * @return {?}
 */
Iconv.Iconv.prototype.convert = function(input, encoding) {};

/**
 * @param {(string|?)|string} input_or_buffer_or_str
 * @param {string|!Function=} encoding_or_cb
 * @param {!Function=} cb
 * @return {boolean}
 */
Iconv.Iconv.prototype.write = function(input_or_buffer_or_str, encoding_or_cb, cb) {};

/**
 * @param {(string|?)|?|string=} input_or_buffer_or_str
 * @param {string|!Function=} encoding_or_cb
 * @param {!Function=} cb
 * @return {void}
 */
Iconv.Iconv.prototype.end = function(input_or_buffer_or_str, encoding_or_cb, cb) {};

/**
 * @template T
 * @param {T} destination
 * @param {{end: boolean}=} options
 * @return {T}
 */
Iconv.Iconv.prototype.pipe = function(destination, options) {};
 /** @type {!Iconv.Static} */
var Iconv;

/* TODO: ExportAssignment in  */
