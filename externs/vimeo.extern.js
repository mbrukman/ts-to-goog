/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/vimeo/index.d.ts:
/**
 * @record
 * @struct
 */
function VimeoParams() {}
 /** @type {string} */
VimeoParams.prototype.name;
 /** @type {?} */
VimeoParams.prototype.value;
/**
 * @record
 * @struct
 */
function VimeoPlayerAPI() {}

/* TODO: CallSignature:  */

/* TODO: CallSignature:  */

/* TODO: CallSignature:  */

/* TODO: CallSignature:  */
/**
 * @record
 * @struct
 */
function VimeoPlayer() {}
 /** @type {!VimeoPlayerAPI} */
VimeoPlayer.prototype.api;

/**
 * @param {string} eventName
 * @param {function(?): void} callback
 * @return {?}
 */
VimeoPlayer.prototype.addEvent = function(eventName, callback) {};

/**
 * @param {string} eventName
 * @return {void}
 */
VimeoPlayer.prototype.removeEvent = function(eventName) {};

/**
 * @param {string} method
 * @param {!Array<!VimeoParams>} params
 * @param {?} target
 * @return {void}
 */
VimeoPlayer.prototype.postMessage = function(method, params, target) {};

/**
 * @param {?} event
 * @return {?}
 */
VimeoPlayer.prototype.onMessageReceived = function(event) {};

/**
 * @param {string} eventName
 * @param {?} callback
 * @param {string} target_id
 * @return {?}
 */
VimeoPlayer.prototype.storeCallback = function(eventName, callback, target_id) {};

/**
 * @param {string} eventName
 * @param {string} target_id
 * @return {?}
 */
VimeoPlayer.prototype.getCallback = function(eventName, target_id) {};

/**
 * @param {string} eventName
 * @param {string} target_id
 * @return {?}
 */
VimeoPlayer.prototype.removeCallback = function(eventName, target_id) {};

/**
 * @param {string} url
 * @return {string}
 */
VimeoPlayer.prototype.getDomainFromUrl = function(url) {};
 /** @type {!VimeoPlayerAPI} */
var $f;
 /** @type {!VimeoPlayerAPI} */
var Froogaloop;
