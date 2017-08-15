/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/cross-storage/index.d.ts:
/**
 * @record
 * @struct
 */
function CrossStorageClientOptions() {}
 /** @type {number} */
CrossStorageClientOptions.prototype.timeout;
 /** @type {?} */
CrossStorageClientOptions.prototype.promise;
 /** @type {string} */
CrossStorageClientOptions.prototype.frameId;

/** @typedef {string} */
var CrossStorageMethod;
/**
 * @record
 * @struct
 */
function SubDomain() {}
 /** @type {!RegExp} */
SubDomain.prototype.origin;
 /** @type {!Array<string>} */
SubDomain.prototype.allow;

/**
 * @constructor
 * @struct
 * Constructs a new cross storage client given the url to a hub. By default, an iframe is created 
 * within the document body that points to the url. It also accepts an options object, which may include 
 * a timeout, frameId, and promise. The timeout, in milliseconds, is applied to each request and defaults 
 * to 5000ms. The options object may also include a frameId, identifying an existing frame on which to 
 * install its listeners. If the promise key is supplied the constructor for a Promise, that Promise 
 * library will be used instead of the default window.Promise.
 * @param {string} hubUrl
 * @param {?} opts
 */
function CrossStorageClient(hubUrl, opts) {}

/**
 * Returns a promise that is fulfilled when a connection has been established with the cross storage 
 * hub. Its use is required to avoid sending any requests prior to initialization being complete.
 * @return {!Promise<void>}
 */
CrossStorageClient.prototype.onConnect = function() {};

/**
 * Sets a key to the specified value, optionally accepting a ttl to passively expire the key after a 
 * number of milliseconds. Returns a promise that is fulfilled on success, or rejected if any errors 
 * setting the key occurred, or the request timed out.
 * @param {string} key
 * @param {?} value
 * @param {number=} ttl
 * @return {!Promise<void>}
 */
CrossStorageClient.prototype.set = function(key, value, ttl) {};

/**
 * Accepts one or more keys for which to retrieve their values. Returns a promise that is settled on 
 * hub response or timeout. On success, it is fulfilled with the value of the key if only passed a 
 * single argument. Otherwise it's resolved with an array of values. On failure, it is rejected with 
 * the corresponding error message.
 * @param {...string} key_or_keys
 * @return {!Promise<?>|!Promise<!Array<?>>}
 */
CrossStorageClient.prototype.get = function(key_or_keys) {};

/**
 * Accepts one or more keys for deletion. Returns a promise that is settled on hub response or timeout.
 * @param {...string} keys
 * @return {!Promise<void>}
 */
CrossStorageClient.prototype.del = function(keys) {};

/**
 * Returns a promise that, when resolved, passes an array of keys currently in storage.
 * @return {!Promise<!Array<string>>}
 */
CrossStorageClient.prototype.getKeys = function() {};

/**
 * Returns a promise that, when resolved, passes an array of keys currently in storage.
 * @return {!Promise<void>}
 */
CrossStorageClient.prototype.clear = function() {};

/**
 * Deletes the iframe and sets the connected state to false. The client can no longer be used after 
 * being invoked.
 * @return {void}
 */
CrossStorageClient.prototype.close = function() {};
/**
 * @constructor
 * @struct
 */
function CrossStorageHub() {}

/**
 * Accepts an array of objects with two keys: origin and allow. The value of origin is expected to be 
 * a RegExp, and allow, an array of strings. The cross storage hub is then initialized to accept requests 
 * from any of the matching origins, allowing access to the associated lists of methods. Methods may 
 * include any of: get, set, del, getKeys and clear. A 'ready' message is sent to the parent window once 
 * complete.
 * @param {!Array<?>} subdomains
 * @return {void}
 */
CrossStorageHub.init = function(subdomains) {};
