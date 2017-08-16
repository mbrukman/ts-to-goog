/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/ndarray/index.d.ts:

/**
 * @template T
 * @param {(!Int8Array|!Int16Array|!Int32Array|!Uint8Array|!Uint16Array|!Uint32Array|!Float32Array|!Float64Array|!Uint8ClampedArray|!Array<T>)} data
 * @param {!Array<number>=} shape
 * @param {!Array<number>=} stride
 * @param {number=} offset
 * @return {?<T>}
 */
function ndarray(data, shape, stride, offset) {}
 /** @type {(!Int8Array|!Int16Array|!Int32Array|!Uint8Array|!Uint16Array|!Uint32Array|!Float32Array|!Float64Array|!Uint8ClampedArray|!Array<?>)} */
ndarray.prototype.data;
 /** @type {!Array<number>} */
ndarray.prototype.shape;
 /** @type {!Array<number>} */
ndarray.prototype.stride;
 /** @type {number} */
ndarray.prototype.offset;
 /** @type {string} */
ndarray.prototype.dtype;
 /** @type {number} */
ndarray.prototype.size;
 /** @type {!Array<number>} */
ndarray.prototype.order;
 /** @type {number} */
ndarray.prototype.dimension;
 /** @type {?} */
ndarray.prototype.T;

/**
 * @param {...number} args
 * @return {?}
 */
ndarray.prototype.get = function(args) {};

/**
 * @param {...number} args
 * @return {?}
 */
ndarray.prototype.set = function(args) {};

/**
 * @param {...number} args
 * @return {?}
 */
ndarray.prototype.index = function(args) {};

/**
 * @param {...number} args
 * @return {?}
 */
ndarray.prototype.lo = function(args) {};

/**
 * @param {...number} args
 * @return {?}
 */
ndarray.prototype.hi = function(args) {};

/**
 * @param {...number} args
 * @return {?}
 */
ndarray.prototype.step = function(args) {};

/**
 * @param {...number} args
 * @return {?}
 */
ndarray.prototype.transpose = function(args) {};

/**
 * @param {...number} args
 * @return {?}
 */
ndarray.prototype.pick = function(args) {};

/**
 * @param {...number} shapes
 * @return {?}
 */
ndarray.prototype.reshape = function(shapes) {};

/** @typedef {string} */
ndarray.DataType;

/** @typedef {(!Array<T>|!Int8Array|!Int16Array|!Int32Array|!Uint8Array|!Uint16Array|!Uint32Array|!Float32Array|!Float64Array|!Uint8ClampedArray)} */
ndarray.Data;

/* TODO: ExportAssignment in  */
