/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/express-brute/index.d.ts:

/* TODO: ImportEqualsDeclaration in  */

/**
 * @constructor
 * @struct
 * \@summary Constructor.
 * @param {?} store
 * @param {!ExpressBrute.Options=} options
 */
function ExpressBrute(store, options) {}

/**
 * \@summary Generates middleware that will bounce requests with the same key and IP address that happen faster than the current wait time by calling failCallback.
 * @param {!ExpressBrute.Middleware} options
 * @return {!e.RequestHandler}
 */
ExpressBrute.prototype.getMiddleware = function(options) {};

/**
 * \@summary Middleware that will bounce requests that happen faster than the current wait time by calling failCallback.
 * @param {!e.Request} request
 * @param {!e.Response} response
 * @param {!Function} next
 * @return {!e.RequestHandler}
 */
ExpressBrute.prototype.prevent = function(request, response, next) {};

/**
 * \@summary Resets the wait time between requests back to its initial value.
 * @param {string} ip
 * @param {string} key
 * @param {!Function} next
 * @return {!e.RequestHandler}
 */
ExpressBrute.prototype.reset = function(ip, key, next) {};
/**
 * @record
 * @struct
 */
ExpressBrute.MemoryStoreOptions = function() {};
 /** @type {string} */
ExpressBrute.MemoryStoreOptions.prototype.prefix;
/**
 * @record
 * @struct
 */
ExpressBrute.Middleware = function() {};
 /** @type {!Function} */
ExpressBrute.Middleware.prototype.failCallback;
 /** @type {boolean} */
ExpressBrute.Middleware.prototype.ignoreIP;
 /** @type {?} */
ExpressBrute.Middleware.prototype.key;
/**
 * @record
 * @struct
 */
ExpressBrute.Options = function() {};
 /** @type {number} */
ExpressBrute.Options.prototype.freeRetries;
 /** @type {boolean} */
ExpressBrute.Options.prototype.attachResetToRequest;
 /** @type {boolean} */
ExpressBrute.Options.prototype.refreshTimeoutOnRequest;
 /** @type {number} */
ExpressBrute.Options.prototype.minWait;
 /** @type {number} */
ExpressBrute.Options.prototype.maxWait;
 /** @type {number} */
ExpressBrute.Options.prototype.lifetime;
 /** @type {function(!e.Request, !e.Response, !Function, ?): void} */
ExpressBrute.Options.prototype.failCallback;
 /** @type {?} */
ExpressBrute.Options.prototype.handleStoreError;

/**
 * @constructor
 * @struct
 * \@summary Constructor.
 * @param {!ExpressBrute.MemoryStoreOptions=} options
 */
ExpressBrute.MemoryStore = function(options) {};

/**
 * \@summary Gets key value.
 * @param {string} key
 * @param {function(?, !Object): void} callback
 * @return {void}
 */
ExpressBrute.MemoryStore.prototype.get = function(key, callback) {};

/**
 * \@summary Sets the key value.
 * @param {string} key
 * @param {?} value
 * @param {number} lifetime
 * @param {function(?): void} callback
 * @return {void}
 */
ExpressBrute.MemoryStore.prototype.set = function(key, value, lifetime, callback) {};

/**
 * \@summary Deletes the key.
 * @param {string} key
 * @param {function(?): void} callback
 * @return {void}
 */
ExpressBrute.MemoryStore.prototype.reset = function(key, callback) {};

/* TODO: ExportAssignment in  */
