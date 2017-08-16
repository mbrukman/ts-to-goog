/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/icepick/index.d.ts:

/**
 * @template T
 * @param {T} collection
 * @return {T}
 */
function freeze(collection) {}

/**
 * @template T
 * @param {T} collection
 * @return {T}
 */
function thaw(collection) {}

/**
 * @template T, V
 * @param {T} collection
 * @param {(string|number)} key
 * @param {V} value
 * @return {T}
 */
function assoc(collection, key, value) {}

/**
 * @template T
 * @param {T} collection
 * @param {(string|number)} key
 * @return {T}
 */
function dissoc(collection, key) {}

/**
 * @template T, V
 * @param {T} collection
 * @param {!Array<(string|number)>} path
 * @param {V} value
 * @return {T}
 */
function assocIn(collection, path, value) {}

/**
 * @template T
 * @param {T} collection
 * @param {!Array<(string|number)>} path
 * @return {?}
 */
function getIn(collection, path) {}

/**
 * @template T, V
 * @param {T} collection
 * @param {!Array<(string|number)>} path
 * @param {function(V): V} callback
 * @return {T}
 */
function updateIn(collection, path, callback) {}

/* TODO: ExportDeclaration in  */

/* TODO: ExportDeclaration in  */

/* TODO: ExportDeclaration in  */

/**
 * @template T, S1, S2, S3, S4
 * @param {T} target
 * @param {S1=} source1_or_s1
 * @param {S2=} s2
 * @param {S3=} s3
 * @param {S4=} s4
 * @return {T|?}
 */
function assign(target, source1_or_s1, s2, s3, s4) {}

/* TODO: ExportDeclaration in  */

/**
 * @template T, S1
 * @param {T} target
 * @param {S1} source
 * @return {?}
 */
function merge(target, source) {}

/**
 * @template T
 * @param {!Array<T>} array
 * @param {T} element
 * @return {!Array<T>}
 */
function push(array, element) {}

/**
 * @template T
 * @param {!Array<T>} array
 * @return {!Array<T>}
 */
function pop(array) {}

/**
 * @template T
 * @param {!Array<T>} array
 * @return {!Array<T>}
 */
function shift(array) {}

/**
 * @template T
 * @param {!Array<T>} array
 * @param {T} element
 * @return {!Array<T>}
 */
function unshift(array, element) {}

/**
 * @template T
 * @param {!Array<T>} array
 * @return {!Array<T>}
 */
function reverse(array) {}

/**
 * @template T
 * @param {!Array<T>} array
 * @param {function(T, T): number=} compareFunction
 * @return {!Array<T>}
 */
function sort(array, compareFunction) {}

/**
 * @template T
 * @param {!Array<T>} array
 * @param {number} start
 * @param {number} deleteCount
 * @param {...T} items
 * @return {!Array<T>}
 */
function splice(array, start, deleteCount, items) {}

/**
 * @template T
 * @param {!Array<T>} array
 * @param {number=} begin
 * @param {number=} end
 * @return {!Array<T>}
 */
function slice(array, begin, end) {}

/**
 * @template T, U
 * @param {function(T): U} fn
 * @param {!Array<T>} array
 * @return {!Array<U>}
 */
function map(fn, array) {}

/**
 * @template T
 * @param {function(T): boolean} fn
 * @param {!Array<T>} array
 * @return {!Array<T>}
 */
function filter(fn, array) {}
/**
 * @record
 * @struct
 */
function IcepickWrapper() {}

/**
 * @return {?}
 */
IcepickWrapper.prototype.value = function() {};

/**
 * @return {?}
 */
IcepickWrapper.prototype.freeze = function() {};

/**
 * @return {?}
 */
IcepickWrapper.prototype.thaw = function() {};

/**
 * @template V
 * @param {(string|number)} key
 * @param {?} value
 * @return {?}
 */
IcepickWrapper.prototype.assoc = function(key, value) {};

/**
 * @template V
 * @param {(string|number)} key
 * @param {?} value
 * @return {?}
 */
IcepickWrapper.prototype.set = function(key, value) {};

/**
 * @param {(string|number)} key
 * @return {?}
 */
IcepickWrapper.prototype.dissoc = function(key) {};

/**
 * @param {(string|number)} key
 * @return {?}
 */
IcepickWrapper.prototype.unset = function(key) {};

/**
 * @template V
 * @param {!Array<(string|number)>} path
 * @param {?} value
 * @return {?}
 */
IcepickWrapper.prototype.assocIn = function(path, value) {};

/**
 * @template V
 * @param {!Array<(string|number)>} path
 * @param {?} value
 * @return {?}
 */
IcepickWrapper.prototype.setIn = function(path, value) {};

/**
 * @param {!Array<(string|number)>} path
 * @return {?}
 */
IcepickWrapper.prototype.getIn = function(path) {};

/**
 * @template V
 * @param {!Array<(string|number)>} path
 * @param {?} callback
 * @return {?}
 */
IcepickWrapper.prototype.updateIn = function(path, callback) {};

/**
 * @template S1, S2, S3, S4
 * @param {?} source1_or_s1
 * @param {?=} s2
 * @param {?=} s3
 * @param {?=} s4
 * @return {?}
 */
IcepickWrapper.prototype.assign = function(source1_or_s1, s2, s3, s4) {};

/**
 * @template S1, S2, S3, S4
 * @param {?} source1_or_s1
 * @param {?=} s2
 * @param {?=} s3
 * @param {?=} s4
 * @return {?}
 */
IcepickWrapper.prototype.extend = function(source1_or_s1, s2, s3, s4) {};

/**
 * @template S1
 * @param {?} source
 * @return {?}
 */
IcepickWrapper.prototype.merge = function(source) {};

/**
 * @template T
 * @param {T} target
 * @return {?}
 */
function chain(target) {}