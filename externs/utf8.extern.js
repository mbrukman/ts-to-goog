/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/utf8/index.d.ts:
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "utf8"
/** @const */
tsickle_declare_module.utf_ = {};
 /** @type {string} */
tsickle_declare_module.utf_.version;

/**
 * Encodes any given JavaScript string (string) as UTF-8, and returns the UTF-8-encoded version of the string.
 * It throws an error if the input string contains a non-scalar value, i.e. a lone surrogate.
 * @param {string} inputString
 * @return {string}
 */
tsickle_declare_module.utf_.encode = function(inputString) {};

/**
 * Decodes any given UTF-8-encoded string (byteString) as UTF-8, and returns the UTF-8-decoded version of the string.
 * It throws an error when malformed UTF-8 is detected.
 * @param {string} byteString
 * @return {string}
 */
tsickle_declare_module.utf_.decode = function(byteString) {};