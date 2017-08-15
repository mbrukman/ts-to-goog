/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/cbor/index.d.ts:

/* TODO: ImportEqualsDeclaration in  */

/**
 * @param {(string|?)} input
 * @return {?}
 */
function decode(input) {}

/**
 * @param {(string|?)} input
 * @param {?} callback
 * @return {void}
 */
function decodeAll(input, callback) {}

/**
 * @param {(string|?)} input
 * @return {!Array<?>}
 */
function decodeAllSync(input) {}

/**
 * @param {(string|?)} input
 * @param {?} callback
 * @return {void}
 */
function decodeFirst(input, callback) {}

/**
 * @param {(string|?)} input
 * @return {?}
 */
function decodeFirstSync(input) {}

/**
 * @param {?} input
 * @return {?}
 */
function encode(input) {}

/**
 * @constructor
 * @struct
 * @param {?=} params
 */
function Decoder(params) {}

/**
 * @constructor
 * @struct
 */
function Encoder() {}

/**
 * @template T
 * @param {?} type
 * @param {?} encodeFunction
 * @return {void}
 */
Encoder.prototype.addSemanticType = function(type, encodeFunction) {};

/**
 * @param {?} input
 * @return {void}
 */
Encoder.prototype.pushAny = function(input) {};
/** @const */
var leveldb = {};

/**
 * @param {(string|?)} input
 * @return {!Array<?>}
 */
leveldb.decode = function(input) {};

/**
 * @param {?} input
 * @return {?}
 */
leveldb.encode = function(input) {};
 /** @type {boolean} */
leveldb.buffer;
 /** @type {string} */
leveldb.name;