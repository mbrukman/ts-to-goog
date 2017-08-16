/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/js-md5/index.d.ts:
/** @const */
var md5 = {};

/** @typedef {(string|!Array<?>|!Uint8Array|!ArrayBuffer)} */
md5.message;
/**
 * @record
 * @struct
 */
md5.Md5 = function() {};

/**
 * @return {!Array<number>}
 */
md5.Md5.prototype.array = function() {};

/**
 * @return {!ArrayBuffer}
 */
md5.Md5.prototype.arrayBuffer = function() {};

/**
 * @return {!ArrayBuffer}
 */
md5.Md5.prototype.buffer = function() {};

/**
 * @return {!Array<number>}
 */
md5.Md5.prototype.digest = function() {};

/**
 * @return {string}
 */
md5.Md5.prototype.hex = function() {};

/**
 * @return {string}
 */
md5.Md5.prototype.toString = function() {};

/**
 * @param {(string|!Array<?>|!Uint8Array|!ArrayBuffer)} message
 * @return {!md5.Md5}
 */
md5.Md5.prototype.update = function(message) {};
/**
 * @record
 * @struct
 */
md5.md5 = function() {};

/* TODO: CallSignature: md5 */

/**
 * @param {(string|!Array<?>|!Uint8Array|!ArrayBuffer)} message
 * @return {string}
 */
md5.md5.prototype.hex = function(message) {};

/**
 * @param {(string|!Array<?>|!Uint8Array|!ArrayBuffer)} message
 * @return {!Array<number>}
 */
md5.md5.prototype.array = function(message) {};

/**
 * @param {(string|!Array<?>|!Uint8Array|!ArrayBuffer)} message
 * @return {!Array<number>}
 */
md5.md5.prototype.digest = function(message) {};

/**
 * @param {(string|!Array<?>|!Uint8Array|!ArrayBuffer)} message
 * @return {!ArrayBuffer}
 */
md5.md5.prototype.arrayBuffer = function(message) {};

/**
 * @param {(string|!Array<?>|!Uint8Array|!ArrayBuffer)} message
 * @return {!ArrayBuffer}
 */
md5.md5.prototype.buffer = function(message) {};

/**
 * @return {!md5.Md5}
 */
md5.md5.prototype.create = function() {};

/**
 * @param {(string|!Array<?>|!Uint8Array|!ArrayBuffer)} message
 * @return {!md5.Md5}
 */
md5.md5.prototype.update = function(message) {};
 /** @type {!md5.md5} */
var md5;

/* TODO: ExportAssignment in  */
