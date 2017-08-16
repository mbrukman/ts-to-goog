/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/redlock v2/index.d.ts:

/* TODO: ImportDeclaration in  */

/* TODO: ImportDeclaration in  */

/* TODO: ExportAssignment in  */
/** @const */
var Redlock = {};

/** @typedef {function(?, T): void} */
Redlock.Callback;

/**
 * @constructor
 * @struct
 * @param {!Redlock} redlock
 * @param {string} resource
 * @param {?} value
 * @param {number} expiration
 */
Redlock.Lock = function(redlock, resource, value, expiration) {};
 /** @type {!Redlock} */
Redlock.Lock.prototype.redlock;
 /** @type {string} */
Redlock.Lock.prototype.resource;
 /** @type {?} */
Redlock.Lock.prototype.value;
 /** @type {number} */
Redlock.Lock.prototype.expiration;

/**
 * @param {function(?, void): void=} callback
 * @return {!Bluebird<void>}
 */
Redlock.Lock.prototype.unlock = function(callback) {};

/**
 * @param {number} ttl
 * @param {function(?, !Redlock.Lock): void=} callback
 * @return {!Bluebird<!Redlock.Lock>}
 */
Redlock.Lock.prototype.extend = function(ttl, callback) {};
/**
 * @record
 * @struct
 */
Redlock.Options = function() {};
 /** @type {number} */
Redlock.Options.prototype.driftFactor;
 /** @type {number} */
Redlock.Options.prototype.retryCount;
 /** @type {number} */
Redlock.Options.prototype.retryDelay;

/**
 * @constructor
 * @struct
 * @param {string=} message
 */
Redlock.LockError = function(message) {};
 /** @type {string} */
Redlock.LockError.prototype.name;
 /** @type {?} */
Redlock.prototype.LockError;
 /** @type {?} */
Redlock.prototype.Lock;
 /** @type {number} */
Redlock.prototype.driftFactor;
 /** @type {number} */
Redlock.prototype.retryCount;
 /** @type {number} */
Redlock.prototype.retryDelay;
 /** @type {!Array<?>} */
Redlock.prototype.servers;

/**
 * @param {string} resource
 * @param {number} ttl
 * @param {function(?, !Redlock.Lock): void=} callback
 * @return {!Bluebird<!Redlock.Lock>}
 */
Redlock.prototype.acquire = function(resource, ttl, callback) {};

/**
 * @param {string} resource
 * @param {number} ttl
 * @param {function(?, !Redlock.Lock): void=} callback
 * @return {!Bluebird<!Redlock.Lock>}
 */
Redlock.prototype.lock = function(resource, ttl, callback) {};

/**
 * @param {string} resource
 * @param {number} ttl
 * @param {function(?, void): void=} errorHandler
 * @return {!Bluebird.Disposer<!Redlock.Lock>}
 */
Redlock.prototype.disposer = function(resource, ttl, errorHandler) {};

/**
 * @param {!Redlock.Lock} lock
 * @param {function(?, void): void=} callback
 * @return {!Bluebird<void>}
 */
Redlock.prototype.release = function(lock, callback) {};

/**
 * @param {!Redlock.Lock} lock
 * @param {function(?, void): void=} callback
 * @return {!Bluebird<void>}
 */
Redlock.prototype.unlock = function(lock, callback) {};

/**
 * @param {!Redlock.Lock} lock
 * @param {number} ttl
 * @param {function(?, !Redlock.Lock): void=} callback
 * @return {!Bluebird<!Redlock.Lock>}
 */
Redlock.prototype.extend = function(lock, ttl, callback) {};

/**
 * @param {string} resource
 * @param {string} value
 * @param {number} ttl
 * @param {function(?, !Redlock.Lock): void=} callback
 * @return {!Bluebird<!Redlock.Lock>}
 */
Redlock.prototype._lock = function(resource, value, ttl, callback) {};
