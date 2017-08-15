/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/cachefactory/index.d.ts:
/** @const */
var CacheFactory = {};
/**
 * @record
 * @struct
 */
CacheFactory.IStoreImplementation = function() {};

/**
 * @param {string} key
 * @return {string}
 */
CacheFactory.IStoreImplementation.prototype.getItem = function(key) {};

/**
 * @param {string} key
 * @param {string} value
 * @return {void}
 */
CacheFactory.IStoreImplementation.prototype.setItem = function(key, value) {};

/**
 * @param {string} key
 * @return {void}
 */
CacheFactory.IStoreImplementation.prototype.removeItem = function(key) {};
/**
 * @record
 * @struct
 */
CacheFactory.CacheGetOptions = function() {};

/**
 * @param {string} key
 * @param {?} value
 * @return {?}
 */
CacheFactory.CacheGetOptions.prototype.onExpire = function(key, value) {};
/**
 * @record
 * @struct
 */
CacheFactory.CachePutOptions = function() {};
 /** @type {number} */
CacheFactory.CachePutOptions.prototype.maxAge;
 /** @type {boolean} */
CacheFactory.CachePutOptions.prototype.storeOnReject;
 /** @type {boolean} */
CacheFactory.CachePutOptions.prototype.storeOnResolve;
 /** @type {!Date} */
CacheFactory.CachePutOptions.prototype.created;
 /** @type {!Date} */
CacheFactory.CachePutOptions.prototype.access;
 /** @type {!Date} */
CacheFactory.CachePutOptions.prototype.expires;
/**
 * @extends {CacheFactory.CachePutOptions}
 * @record
 * @struct
 */
CacheFactory.CacheTouchOptions = function() {};
/**
 * @record
 * @struct
 */
CacheFactory.CacheOptions = function() {};
 /** @type {number} */
CacheFactory.CacheOptions.prototype.cacheFlushInterval;
 /** @type {number} */
CacheFactory.CacheOptions.prototype.capacity;
 /** @type {string} */
CacheFactory.CacheOptions.prototype.deleteOnExpire;
 /** @type {boolean} */
CacheFactory.CacheOptions.prototype.disabled;
 /** @type {number} */
CacheFactory.CacheOptions.prototype.maxAge;
 /** @type {number} */
CacheFactory.CacheOptions.prototype.recycleFreq;
 /** @type {boolean} */
CacheFactory.CacheOptions.prototype.storeOnReject;
 /** @type {boolean} */
CacheFactory.CacheOptions.prototype.storeOnResolve;
 /** @type {!CacheFactory.IStoreImplementation} */
CacheFactory.CacheOptions.prototype.storageImpl;
 /** @type {string} */
CacheFactory.CacheOptions.prototype.storageMode;
 /** @type {string} */
CacheFactory.CacheOptions.prototype.storagePrefix;

/**
 * @param {string} key
 * @param {?} value
 * @return {?}
 */
CacheFactory.CacheOptions.prototype.onExpire = function(key, value) {};
/**
 * @record
 * @struct
 */
CacheFactory.ICache = function() {};
 /** @type {string} */
CacheFactory.ICache.prototype.$$id;

/**
 * Return the item with the given key.options, if provided, must be an object.
 * 
 * If the cache is in passive mode, then options.onExpire can be a function that will be called with the key
 * and value of the requested item if the requested item is expired, with the get call itself returning undefined.
 * @template T
 * @param {string} key
 * @param {!CacheFactory.CacheGetOptions=} options
 * @return {T}
 */
CacheFactory.ICache.prototype.get = function(key, options) {};

/**
 * Insert the item with the given key and value into the cache.options, if provided, must be an object.
 * 
 * If inserting a promise, options.storeOnReject determines whether to insert the rejection value if the promise
 * rejects (overriding the default storeOnReject setting for the cache). If inserting a promise, options.storeOnResolve
 * determines whether to insert the resolved value if the promise resolves (overriding the default storeOnResolve setting for the cache).
 * 
 * @template T
 * @param {string} key
 * @param {T} value
 * @param {!CacheFactory.CachePutOptions=} options
 * @return {void}
 */
CacheFactory.ICache.prototype.put = function(key, value, options) {};

/**
 * Remove and return the item with the given key, if it is in the cache.
 * @template T
 * @param {string} key
 * @return {T}
 */
CacheFactory.ICache.prototype.remove = function(key) {};

/**
 * Remove all items in the cache.
 * @return {void}
 */
CacheFactory.ICache.prototype.removeAll = function() {};

/**
 * Remove and return all expired items in the cache.
 * @return {!Object<string,?>}
 */
CacheFactory.ICache.prototype.removeExpired = function() {};

/**
 * Completely destroy this cache and its data.
 * @return {void}
 */
CacheFactory.ICache.prototype.destroy = function() {};

/**
 * Returns an object containing information about the cache.
 * 
 * Returns an object containing information about the item with the given key, if the item is in the cache.
 * 
 * @param {string=} key
 * @return {!CacheFactory.CacheInfo|!CacheFactory.CacheItemInfo}
 */
CacheFactory.ICache.prototype.info = function(key) {};

/**
 * Return the keys of all items in the cache as an object.
 * @return {?}
 */
CacheFactory.ICache.prototype.keySet = function() {};

/**
 * Return the keys of all items in the cache as an array.
 * @return {!Array<string>} []
 */
CacheFactory.ICache.prototype.keys = function() {};

/**
 * Enable the cache.
 * @return {void}
 */
CacheFactory.ICache.prototype.enable = function() {};

/**
 * Disable the cache.
 * @return {void}
 */
CacheFactory.ICache.prototype.disable = function() {};

/**
 * cache#touch() will "touch" all items in the cache.
 * cache#touch(key) will "touch" the item with the given key.
 * 
 * @param {string=} key
 * @param {!CacheFactory.CacheTouchOptions=} options
 * @return {void}
 */
CacheFactory.ICache.prototype.touch = function(key, options) {};

/**
 * Set the cacheFlushInterval for the cache.
 * @param {number} cacheFlushInterval
 * @return {void}
 */
CacheFactory.ICache.prototype.setCacheFlushInterval = function(cacheFlushInterval) {};

/**
 * Set the capacity for the cache.Setting this lower than the current item count will result in those items being removed.
 * @param {number} capacity
 * @return {void}
 */
CacheFactory.ICache.prototype.setCapacity = function(capacity) {};

/**
 * Set the deleteOnExpire for the cache.
 * @param {string} deleteOnExpire
 * @return {void}
 */
CacheFactory.ICache.prototype.setDeleteOnExpire = function(deleteOnExpire) {};

/**
 * Set the maxAge for the cache.
 * @param {number} maxAge
 * @return {void}
 */
CacheFactory.ICache.prototype.setMaxAge = function(maxAge) {};

/**
 * Set the onExpire for the cache.
 * @param {!Function} onExpire
 * @return {void}
 */
CacheFactory.ICache.prototype.setOnExpire = function(onExpire) {};

/**
 * Set the recycleFreq for the cache.
 * @param {number} recycleFreq
 * @return {void}
 */
CacheFactory.ICache.prototype.setRecycleFreq = function(recycleFreq) {};

/**
 * Set the storageMode for the cache.This will move data from the current storage medium to the new one.
 * @param {string} storageMode
 * @return {void}
 */
CacheFactory.ICache.prototype.setStorageMode = function(storageMode) {};

/**
 * Set multiple options for the cache at a time.Setting strict to true will reset options for the cache
 * that are not specifically set in the options hash to CacheFactoryProvider.defaults.
 * @param {!CacheFactory.CacheOptions} options
 * @param {boolean=} strict
 * @return {void}
 */
CacheFactory.ICache.prototype.setOptions = function(options, strict) {};

/**
 * Return the values of all items in the cache as an array.
 * @return {!Array<?>} Array<any>
 */
CacheFactory.ICache.prototype.values = function() {};
/**
 * @record
 * @struct
 */
CacheFactory.ICacheFactory = function() {};
 /** @type {!CacheFactory.IBinaryHeap} */
CacheFactory.ICacheFactory.prototype.BinaryHeap;
 /** @type {!CacheFactory.IUtils} */
CacheFactory.ICacheFactory.prototype.utils;
 /** @type {!CacheFactory.CacheOptions} */
CacheFactory.ICacheFactory.prototype.defaults;

/* TODO: CallSignature: CacheFactory */

/**
 * Create a cache. cache must not already exist. cacheId must be a string. options is an optional argument and must be an object.
 * Any options you pass here will override any default options.
 * @param {string} cacheId
 * @param {!CacheFactory.CacheOptions=} options
 * @return {!CacheFactory.ICache} ICache
 */
CacheFactory.ICacheFactory.prototype.createCache = function(cacheId, options) {};

/**
 * Return the cache with the given cacheId.
 * @param {string} cacheId The id of the cache storage.
 * @param {!CacheFactory.CacheOptions=} options
 * @return {!CacheFactory.ICache} ICache
 */
CacheFactory.ICacheFactory.prototype.get = function(cacheId, options) {};

/**
 * Return an object of key- value pairs, the keys being cache ids and the values being the result of .info() being called on each cache.
 * @return {!CacheFactory.CacheInfo} CacheInfo
 */
CacheFactory.ICacheFactory.prototype.info = function() {};

/**
 * Return the ids of all registered caches as an object.
 * @return {!Object<string,!CacheFactory.ICache>}
 */
CacheFactory.ICacheFactory.prototype.keySet = function() {};

/**
 * Return the ids of all registered caches as an array.
 * @return {!Array<string>} Array<string>
 */
CacheFactory.ICacheFactory.prototype.keys = function() {};

/**
 * Destroy the cache with the given cacheId.
 * @param {string} cacheId
 * @return {void}
 */
CacheFactory.ICacheFactory.prototype.destroy = function(cacheId) {};

/**
 * Destroy all registered caches.
 * @return {void}
 */
CacheFactory.ICacheFactory.prototype.destroyAll = function() {};

/**
 * Remove all data from all registered caches.
 * @return {void}
 */
CacheFactory.ICacheFactory.prototype.clearAll = function() {};

/**
 * Enable all registered caches.
 * @return {void}
 */
CacheFactory.ICacheFactory.prototype.enableAll = function() {};

/**
 * Disable all registered caches.
 * @return {void}
 */
CacheFactory.ICacheFactory.prototype.disableAll = function() {};

/**
 * Call.touch() on all registered caches.
 * @return {void}
 */
CacheFactory.ICacheFactory.prototype.touchAll = function() {};

/**
 * Call.removeExpired() on all registered caches.Returns a hash of any expired items, keyed by cache id.
 * @return {!Array<!Object<string,!Array<!Object<string,?>>>>}
 */
CacheFactory.ICacheFactory.prototype.removeExpiredFromAll = function() {};
/**
 * @record
 * @struct
 */
CacheFactory.IUtils = function() {};
 /** @type {?} */
CacheFactory.IUtils.prototype.Promise;

/**
 * @param {?} value
 * @return {boolean}
 */
CacheFactory.IUtils.prototype.isNumber = function(value) {};

/**
 * @param {?} value
 * @return {boolean}
 */
CacheFactory.IUtils.prototype.isString = function(value) {};

/**
 * @param {?} value
 * @return {boolean}
 */
CacheFactory.IUtils.prototype.isObject = function(value) {};

/**
 * @param {?} value
 * @return {boolean}
 */
CacheFactory.IUtils.prototype.isFunction = function(value) {};

/**
 * @param {?} a
 * @param {?} b
 * @return {boolean}
 */
CacheFactory.IUtils.prototype.equals = function(a, b) {};

/**
 * @param {?} value
 * @return {!Object}
 */
CacheFactory.IUtils.prototype.fromJson = function(value) {};
/**
 * @record
 * @struct
 */
CacheFactory.HeapItem = function() {};
 /** @type {string} */
CacheFactory.HeapItem.prototype.key;
 /** @type {!Date} */
CacheFactory.HeapItem.prototype.accessed;
/**
 * @record
 * @struct
 */
CacheFactory.IBinaryHeap = function() {};

/* TODO: CallSignature: CacheFactory */
 /** @type {!Array<!CacheFactory.HeapItem>} */
CacheFactory.IBinaryHeap.prototype.heap;
 /** @type {!CacheFactory.IWeightFunc} */
CacheFactory.IBinaryHeap.prototype.weightFunc;
 /** @type {!CacheFactory.ICompareFunc} */
CacheFactory.IBinaryHeap.prototype.compareFunc;

/**
 * @param {!CacheFactory.HeapItem} node
 * @return {void}
 */
CacheFactory.IBinaryHeap.prototype.push = function(node) {};

/**
 * @return {!CacheFactory.HeapItem}
 */
CacheFactory.IBinaryHeap.prototype.pop = function() {};

/**
 * @return {!CacheFactory.HeapItem}
 */
CacheFactory.IBinaryHeap.prototype.peek = function() {};

/**
 * @param {!CacheFactory.HeapItem} node
 * @return {!CacheFactory.HeapItem}
 */
CacheFactory.IBinaryHeap.prototype.remove = function(node) {};

/**
 * @return {void}
 */
CacheFactory.IBinaryHeap.prototype.removeAll = function() {};

/**
 * @return {!Number}
 */
CacheFactory.IBinaryHeap.prototype.size = function() {};
/**
 * @record
 * @struct
 */
CacheFactory.IWeightFunc = function() {};

/* TODO: CallSignature: CacheFactory */
/**
 * @record
 * @struct
 */
CacheFactory.ICompareFunc = function() {};

/* TODO: CallSignature: CacheFactory */
/**
 * @record
 * @struct
 */
CacheFactory.CacheInfo = function() {};
 /** @type {!Number} */
CacheFactory.CacheInfo.prototype.size;
 /** @type {!Object<string,?>} */
CacheFactory.CacheInfo.prototype.caches;
 /** @type {!Number} */
CacheFactory.CacheInfo.prototype.capacity;
 /** @type {!Number} */
CacheFactory.CacheInfo.prototype.maxAge;
 /** @type {string} */
CacheFactory.CacheInfo.prototype.deleteOnExpire;
 /** @type {!Function} */
CacheFactory.CacheInfo.prototype.onExpire;
 /** @type {!Number} */
CacheFactory.CacheInfo.prototype.cacheFlushInterval;
 /** @type {!Number} */
CacheFactory.CacheInfo.prototype.recycleFreq;
 /** @type {string} */
CacheFactory.CacheInfo.prototype.storageMode;
 /** @type {!CacheFactory.IStoreImplementation} */
CacheFactory.CacheInfo.prototype.storageImpl;
 /** @type {boolean} */
CacheFactory.CacheInfo.prototype.disabled;
 /** @type {string} */
CacheFactory.CacheInfo.prototype.storagePrefix;
 /** @type {boolean} */
CacheFactory.CacheInfo.prototype.storeOnResolve;
 /** @type {boolean} */
CacheFactory.CacheInfo.prototype.storeOnReject;
/**
 * @record
 * @struct
 */
CacheFactory.CacheItemInfo = function() {};
 /** @type {!Date} */
CacheFactory.CacheItemInfo.prototype.created;
 /** @type {!Date} */
CacheFactory.CacheItemInfo.prototype.accessed;
 /** @type {!Date} */
CacheFactory.CacheItemInfo.prototype.expires;
 /** @type {boolean} */
CacheFactory.CacheItemInfo.prototype.isExpired;
 /** @type {!CacheFactory.ICacheFactory} */
var CacheFactory;

/* TODO: ExportAssignment in  */

/* TODO: NamespaceExportDeclaration in  */
