/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/backbone-fetch-cache/index.d.ts:

/* TODO: ImportDeclaration in  */
/**
 * @record
 * @struct
 */
function SuperMethods() {}

/**
 * @param {!Backbone.ModelFetchOptions=} options
 * @return {!JQueryXHR}
 */
SuperMethods.prototype.modelFetch = function(options) {};

/**
 * @param {...?} arg
 * @return {!JQueryXHR}
 */
SuperMethods.prototype.modelSync = function(arg) {};

/**
 * @param {!Backbone.CollectionFetchOptions=} options
 * @return {!JQueryXHR}
 */
SuperMethods.prototype.collectionFetch = function(options) {};
/**
 * @record
 * @struct
 */
function GetCacheOptions() {}
 /** @type {?} */
GetCacheOptions.prototype.data;
 /** @type {string} */
GetCacheOptions.prototype.url;
/**
 * @extends {GetCacheOptions}
 * @record
 * @struct
 */
function SetCacheOptions() {}
 /** @type {boolean} */
SetCacheOptions.prototype.cache;
 /** @type {(number|boolean)} */
SetCacheOptions.prototype.expires;
 /** @type {boolean} */
SetCacheOptions.prototype.prefill;
 /** @type {(number|boolean)} */
SetCacheOptions.prototype.prefillExpires;
/**
 * @record
 * @struct
 */
function Cache() {}
 /** @type {number} */
Cache.prototype.expires;
 /** @type {number} */
Cache.prototype.lastSync;
 /** @type {number} */
Cache.prototype.prefillExpires;
 /** @type {?} */
Cache.prototype.value;
/**
 * @record
 * @struct
 */
function GetCacheKeyObject() {}
 /** @type {?} */
GetCacheKeyObject.prototype.getCacheKey;
 /** @type {?} */
GetCacheKeyObject.prototype.url;

/** @typedef {(string|?)} */
var GetCacheKeyOptions;
/**
 * @record
 * @struct
 */
function Static() {}
 /** @type {boolean} */
Static.prototype.enabled;
 /** @type {boolean} */
Static.prototype.localStorage;
 /** @type {?} */
Static.prototype._superMethods;

/**
 * Sometimes you just need to clear a cached item manually.
 * Backbone.fetchCache.clearItem() can be called safely from anywhere
 * in your application. It will take your backbone Model or Collection,
 * a function that returns the key String, or the key String itself. If
 * you pass in a Model or Collection, the .getCacheKey() method will be
 * checked before the url property.
 * @param {...?} args
 * @return {?}
 */
Static.prototype.clearItem = function(args) {};

/**
 * You can explicitly fetch a cached item, without having to call the
 * models/collection fetch. This might be useful for debugging and
 * testing.
 * @param {?|(string|?)} key
 * @param {?=} opts
 * @return {?}
 */
Static.prototype.getCache = function(key, opts) {};

/**
 * @param {?|(string|?)} key
 * @param {?=} opts
 * @return {string}
 */
Static.prototype.getCacheKey = function(key, opts) {};

/**
 * If you want to know when was the last (server) sync of a given key, you can use.
 * @param {?|(string|?)} key
 * @param {?=} opts
 * @return {number}
 */
Static.prototype.getLastSync = function(key, opts) {};

/**
 * @return {void}
 */
Static.prototype.getLocalStorage = function() {};

/**
 * @return {string}
 */
Static.prototype.getLocalStorageKey = function() {};

/**
 * When setting items in localStorage, the browser may throw a
 * QUOTA_EXCEEDED_ERR, meaning the store is full. Backbone.fetchCache
 * tries to work around this problem by deleting what it considers the
 * most stale item to make space for the new data. The staleness of
 * data is determined by the sorting function priorityFn, which by
 * default returns the oldest item.
 * @param {?} a
 * @param {?} b
 * @return {number}
 */
Static.prototype.priorityFn = function(a, b) {};

/**
 * @return {void}
 */
Static.prototype.reset = function() {};

/**
 * @param {?|(string|?)} instance
 * @param {?=} opts
 * @param {?=} attrs
 * @return {void}
 */
Static.prototype.setCache = function(instance, opts, attrs) {};

/**
 * @param {...?} args
 * @return {?}
 */
Static.prototype.setLocalStorage = function(args) {};
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "backbone"
 /** @type {?} */
tsickle_declare_module.backbone.fetchCache;
/**
 * @extends {Backbone.ModelFetchOptions}
 * @record
 * @struct
 */
tsickle_declare_module.backbone.ModelFetchWithCacheOptions = function() {};
 /** @type {boolean} */
tsickle_declare_module.backbone.ModelFetchWithCacheOptions.prototype.cache;
 /** @type {?} */
tsickle_declare_module.backbone.ModelFetchWithCacheOptions.prototype.context;
 /** @type {number} */
tsickle_declare_module.backbone.ModelFetchWithCacheOptions.prototype.expires;
 /** @type {boolean} */
tsickle_declare_module.backbone.ModelFetchWithCacheOptions.prototype.prefill;
 /** @type {number} */
tsickle_declare_module.backbone.ModelFetchWithCacheOptions.prototype.prefillExpires;
 /** @type {function(?, ?, !ModelFetchWithCacheOptions): void} */
tsickle_declare_module.backbone.ModelFetchWithCacheOptions.prototype.prefillSuccess;
/**
 * @extends {ModelFetchWithCacheOptions}
 * @record
 * @struct
 */
tsickle_declare_module.backbone.CollectionFetchWithCacheOptions = function() {};
 /** @type {function(?): void} */
tsickle_declare_module.backbone.CollectionFetchWithCacheOptions.prototype.prefillSuccess;
/**
 * @record
 * @struct
 */
tsickle_declare_module.backbone.ModelWithCache = function() {};

/**
 * @param {!ModelFetchWithCacheOptions=} options
 * @return {!JQueryXHR}
 */
tsickle_declare_module.backbone.ModelWithCache.prototype.fetch = function(options) {};
/**
 * @record
 * @struct
 */
tsickle_declare_module.backbone.CollectionWithCache = function() {};

/**
 * @param {!CollectionFetchWithCacheOptions=} options
 * @return {!JQueryXHR}
 */
tsickle_declare_module.backbone.CollectionWithCache.prototype.fetch = function(options) {};

/* TODO: NamespaceExportDeclaration in  */
