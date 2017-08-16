/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/stale-lru-cache/index.d.ts:

/**
 * @constructor
 * @struct
 * @param {!Cache.CacheOptions<K, V>=} options
 */
function Cache(options) {}

/**
 * @param {K} key
 * @return {boolean}
 */
Cache.prototype.delete = function(key) {};

/**
 * @param {K} key
 * @return {V}
 */
Cache.prototype.get = function(key) {};

/**
 * @param {K} key
 * @param {V} value
 * @param {(string|!Cache.SetOptions<K, V>)=} options
 * @return {boolean}
 */
Cache.prototype.set = function(key, value, options) {};

/**
 * @param {K} key
 * @return {boolean}
 */
Cache.prototype.has = function(key) {};

/**
 * @param {K} key
 * @return {boolean}
 */
Cache.prototype.isStale = function(key) {};

/**
 * @return {!Array<K>}
 */
Cache.prototype.keys = function() {};

/**
 * @return {void}
 */
Cache.prototype.reset = function() {};

/**
 * @return {number}
 */
Cache.prototype.size = function() {};

/**
 * @return {!Array<V>}
 */
Cache.prototype.values = function() {};

/**
 * @param {K} key
 * @param {function(K, function(?, V, (string|!Cache.SetOptions<K, V>)): void): void} revalidate
 * @param {function(?, V, (string|!Cache.SetOptions<K, V>)): void} callback
 * @return {void}
 */
Cache.prototype.wrap = function(key, revalidate, callback) {};

/** @typedef {function(?, V, (string|!Cache.SetOptions<K, V>)): void} */
Cache.OptionsCallback;

/** @typedef {function(K, function(?, V, (string|!Cache.SetOptions<K, V>)): void): void} */
Cache.RevalidationCallback;
/**
 * @record
 * @struct
 */
Cache.CacheOptions = function() {};
 /** @type {number} */
Cache.CacheOptions.prototype.maxAge;
 /** @type {number} */
Cache.CacheOptions.prototype.staleWhileRevalidate;
 /** @type {function(K, function(?, V, (string|!Cache.SetOptions<K, V>)): void): void} */
Cache.CacheOptions.prototype.revalidate;
 /** @type {number} */
Cache.CacheOptions.prototype.maxSize;

/**
 * @param {V} value
 * @param {K} key
 * @return {number}
 */
Cache.CacheOptions.prototype.getSize = function(value, key) {};
/**
 * @record
 * @struct
 */
Cache.SetOptions = function() {};
 /** @type {number} */
Cache.SetOptions.prototype.maxAge;
 /** @type {number} */
Cache.SetOptions.prototype.staleWhileRevalidate;
 /** @type {function(K, function(?, V, (string|!Cache.SetOptions)): void): void} */
Cache.SetOptions.prototype.revalidate;

/* TODO: ExportAssignment in  */
