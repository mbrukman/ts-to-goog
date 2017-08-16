/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/node-uuid/index.d.ts:

/* TODO: NamespaceExportDeclaration in  */
/**
 * @record
 * @struct
 */
function UUIDOptions() {}
 /** @type {!Array<?>} */
UUIDOptions.prototype.node;
 /** @type {number} */
UUIDOptions.prototype.clockseq;
 /** @type {(number|!Date)} */
UUIDOptions.prototype.msecs;
 /** @type {number} */
UUIDOptions.prototype.nsecs;
/**
 * @record
 * @struct
 */
function UUID() {}

/**
 * @param {?=} options
 * @param {!Array<number>=} buffer
 * @param {number=} offset
 * @return {string|!Array<number>}
 */
UUID.prototype.v1 = function(options, buffer, offset) {};

/**
 * @param {?=} options
 * @param {!Array<number>=} buffer
 * @param {number=} offset
 * @return {string|!Array<number>}
 */
UUID.prototype.v4 = function(options, buffer, offset) {};

/**
 * @param {string} id
 * @param {!Array<number>=} buffer
 * @param {number=} offset
 * @return {!Array<number>}
 */
UUID.prototype.parse = function(id, buffer, offset) {};

/**
 * @param {!Array<number>} buffer
 * @param {number=} offset
 * @return {string}
 */
UUID.prototype.unparse = function(buffer, offset) {};

/**
 * @param {?=} options
 * @param {!Array<number>|?=} buffer
 * @param {number=} offset
 * @return {string|!Array<number>|?}
 */
function v1(options, buffer, offset) {}

/**
 * @param {?=} options
 * @param {!Array<number>|?=} buffer
 * @param {number=} offset
 * @return {string|!Array<number>|?}
 */
function v4(options, buffer, offset) {}

/**
 * @param {string} id
 * @param {!Array<number>|?=} buffer
 * @param {number=} offset
 * @return {!Array<number>|?}
 */
function parse(id, buffer, offset) {}

/**
 * @param {!Array<number>|?} buffer
 * @param {number=} offset
 * @return {string}
 */
function unparse(buffer, offset) {}