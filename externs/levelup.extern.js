/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/levelup/index.d.ts:

/* TODO: ImportDeclaration in  */

/* TODO: ExportAssignment in  */
 /** @type {!levelup.LevelUpConstructor} */
var levelup;
/**
 * @record
 * @struct
 */
levelup.CustomEncoding = function() {};
 /** @type {boolean} */
levelup.CustomEncoding.prototype.buffer;
 /** @type {string} */
levelup.CustomEncoding.prototype.type;

/**
 * @param {?} val
 * @return {(string|?)}
 */
levelup.CustomEncoding.prototype.encode = function(val) {};

/**
 * @param {(string|?)} val
 * @return {?}
 */
levelup.CustomEncoding.prototype.decode = function(val) {};

/** @typedef {(string|!levelup.CustomEncoding)} */
levelup.Encoding;
/**
 * @record
 * @struct
 */
levelup.Batch = function() {};
 /** @type {string} */
levelup.Batch.prototype.type;
 /** @type {?} */
levelup.Batch.prototype.key;
 /** @type {?} */
levelup.Batch.prototype.value;
 /** @type {(string|!levelup.CustomEncoding)} */
levelup.Batch.prototype.keyEncoding;
 /** @type {(string|!levelup.CustomEncoding)} */
levelup.Batch.prototype.valueEncoding;
/**
 * @record
 * @struct
 */
levelup.LevelUpBase = function() {};

/**
 * @param {function(?): ?=} callback
 * @return {void}
 */
levelup.LevelUpBase.prototype.open = function(callback) {};

/**
 * @param {function(?): ?=} callback
 * @return {void}
 */
levelup.LevelUpBase.prototype.close = function(callback) {};

/**
 * @param {?} key
 * @param {?} value
 * @param {function(?): ?|{sync: boolean}=} callback_or_options
 * @param {function(?): ?=} callback
 * @return {void}
 */
levelup.LevelUpBase.prototype.put = function(key, value, callback_or_options, callback) {};

/**
 * @param {?} key
 * @param {function(?, ?): ?|{keyEncoding: (string|!levelup.CustomEncoding), fillCache: boolean}=} callback_or_options
 * @param {function(?, ?): ?=} callback
 * @return {void}
 */
levelup.LevelUpBase.prototype.get = function(key, callback_or_options, callback) {};

/**
 * @param {?} key
 * @param {function(?): ?|{keyEncoding: (string|!levelup.CustomEncoding), sync: boolean}=} callback_or_options
 * @param {function(?): ?=} callback
 * @return {void}
 */
levelup.LevelUpBase.prototype.del = function(key, callback_or_options, callback) {};

/**
 * @param {!Array<BatchType>=} array
 * @param {{keyEncoding: (string|!levelup.CustomEncoding), valueEncoding: (string|!levelup.CustomEncoding), sync: boolean}|function(?): ?=} options_or_callback
 * @param {function(?): ?=} callback
 * @return {void|!levelup.LevelUpChain}
 */
levelup.LevelUpBase.prototype.batch = function(array, options_or_callback, callback) {};

/**
 * @return {boolean}
 */
levelup.LevelUpBase.prototype.isOpen = function() {};

/**
 * @return {boolean}
 */
levelup.LevelUpBase.prototype.isClosed = function() {};

/**
 * @param {?=} options
 * @return {?}
 */
levelup.LevelUpBase.prototype.createReadStream = function(options) {};

/**
 * @param {?=} options
 * @return {?}
 */
levelup.LevelUpBase.prototype.createKeyStream = function(options) {};

/**
 * @param {?=} options
 * @return {?}
 */
levelup.LevelUpBase.prototype.createValueStream = function(options) {};

/**
 * @param {?=} options
 * @return {?}
 */
levelup.LevelUpBase.prototype.createWriteStream = function(options) {};

/**
 * @param {string} location
 * @param {!Function=} callback
 * @return {void}
 */
levelup.LevelUpBase.prototype.destroy = function(location, callback) {};

/**
 * @param {string} location
 * @param {!Function=} callback
 * @return {void}
 */
levelup.LevelUpBase.prototype.repair = function(location, callback) {};

/** @typedef {!levelup.LevelUpBase<!levelup.Batch>} */
levelup.LevelUp;
/**
 * @record
 * @struct
 */
levelup.LevelUpChain = function() {};

/**
 * @param {?} key
 * @param {?} value
 * @param {{sync: boolean}=} options
 * @return {!levelup.LevelUpChain}
 */
levelup.LevelUpChain.prototype.put = function(key, value, options) {};

/**
 * @param {?} key
 * @param {{keyEncoding: (string|!levelup.CustomEncoding), sync: boolean}=} options
 * @return {!levelup.LevelUpChain}
 */
levelup.LevelUpChain.prototype.del = function(key, options) {};

/**
 * @return {!levelup.LevelUpChain}
 */
levelup.LevelUpChain.prototype.clear = function() {};

/**
 * @param {function(?): ?=} callback
 * @return {!levelup.LevelUpChain}
 */
levelup.LevelUpChain.prototype.write = function(callback) {};
/**
 * @record
 * @struct
 */
levelup.levelupOptions = function() {};
 /** @type {boolean} */
levelup.levelupOptions.prototype.createIfMissing;
 /** @type {boolean} */
levelup.levelupOptions.prototype.errorIfExists;
 /** @type {boolean} */
levelup.levelupOptions.prototype.compression;
 /** @type {number} */
levelup.levelupOptions.prototype.cacheSize;
 /** @type {(string|!levelup.CustomEncoding)} */
levelup.levelupOptions.prototype.keyEncoding;
 /** @type {(string|!levelup.CustomEncoding)} */
levelup.levelupOptions.prototype.valueEncoding;
 /** @type {function(string): !leveldown.LevelDown} */
levelup.levelupOptions.prototype.db;
/**
 * @record
 * @struct
 */
levelup.LevelUpConstructor = function() {};

/* TODO: CallSignature: levelup */
