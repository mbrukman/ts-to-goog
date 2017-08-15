/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/amplify/index.d.ts:
/** @const */
var amplify = {};
/**
 * @record
 * @struct
 */
amplify.RequestSettings = function() {};
 /** @type {string} */
amplify.RequestSettings.prototype.resourceId;
 /** @type {?} */
amplify.RequestSettings.prototype.data;

/**
 * @param {...?} args
 * @return {void}
 */
amplify.RequestSettings.prototype.success = function(args) {};

/**
 * @param {...?} args
 * @return {void}
 */
amplify.RequestSettings.prototype.error = function(args) {};

/** @typedef {function(?, string, !JQueryXHR, function(!Array<?>): void, function(!Array<?>): void): void} */
amplify.Decoder;
/**
 * @record
 * @struct
 */
amplify.Decoders = function() {};

/* TODO: IndexSignature: amplify */
 /** @type {function(?, string, !JQueryXHR, function(!Array<?>): void, function(!Array<?>): void): void} */
amplify.Decoders.prototype.jsSend;
/**
 * @extends {JQueryAjaxSettings}
 * @record
 * @struct
 */
amplify.AjaxSettings = function() {};
 /** @type {?} */
amplify.AjaxSettings.prototype.cache;
 /** @type {(!Object|function(?): ?)} */
amplify.AjaxSettings.prototype.dataMap;
 /** @type {?} */
amplify.AjaxSettings.prototype.decoder;
/**
 * @record
 * @struct
 */
amplify.Request = function() {};

/* TODO: CallSignature: amplify */

/* TODO: CallSignature: amplify */
 /** @type {!amplify.Decoders} */
amplify.Request.prototype.decoders;
 /** @type {?} */
amplify.Request.prototype.cache;

/**
 * 
 * Define a resource.
 * resourceId: Identifier string for the resource.
 * requestType: The type of data retrieval method from the server. See the request types sections for more information.
 * settings: A set of key/value pairs that relate to the server communication technology. The following settings are available:
 *   Any settings found in jQuery.ajax().
 *   cache: See the cache section for more details.
 *   decoder: See the decoder section for more details.
 * 
 * Define a custom request.
 * resourceId: Identifier string for the resource.
 * resource: Function to handle requests. Receives a hash with the following properties:
 *   resourceId: Identifier string for the resource.
 *   data: Data provided by the user.
 *   success: Callback to invoke on success.
 *   error: Callback to invoke on error.
 * @param {string} resourceId
 * @param {string|function(!amplify.RequestSettings): void} requestType_or_resource
 * @param {!amplify.AjaxSettings=} settings
 * @return {void}
 */
amplify.Request.prototype.define = function(resourceId, requestType_or_resource, settings) {};
/**
 * @record
 * @struct
 */
amplify.Subscribe = function() {};

/* TODO: CallSignature: amplify */

/* TODO: CallSignature: amplify */
/**
 * @record
 * @struct
 */
amplify.StorageTypeStore = function() {};

/* TODO: CallSignature: amplify */

/* TODO: CallSignature: amplify */

/* TODO: CallSignature: amplify */
/**
 * @extends {amplify.StorageTypeStore}
 * @record
 * @struct
 */
amplify.Store = function() {};
 /** @type {!amplify.StorageTypeStore} */
amplify.Store.prototype.localStorage;
 /** @type {!amplify.StorageTypeStore} */
amplify.Store.prototype.sessionStorage;
 /** @type {!amplify.StorageTypeStore} */
amplify.Store.prototype.globalStorage;
 /** @type {!amplify.StorageTypeStore} */
amplify.Store.prototype.userData;
 /** @type {!amplify.StorageTypeStore} */
amplify.Store.prototype.memory;
/**
 * @record
 * @struct
 */
amplify.Static = function() {};
 /** @type {!amplify.Subscribe} */
amplify.Static.prototype.subscribe;
 /** @type {!amplify.Store} */
amplify.Static.prototype.store;
 /** @type {!amplify.Request} */
amplify.Static.prototype.request;

/**
 * 
 * Remove a subscription.
 * topic: The topic being unsubscribed from.
 * callback: The callback that was originally subscribed.
 * @param {string} topic
 * @param {!Function} callback
 * @return {void}
 */
amplify.Static.prototype.unsubscribe = function(topic, callback) {};

/**
 * 
 * Publish a message.
 * topic: The name of the message to publish.
 * Any additional parameters will be passed to the subscriptions.
 * amplify.publish returns a boolean indicating whether any subscriptions returned false.
 * The return value is true if none of the subscriptions returned false, and false otherwise.
 * Note that only one subscription can return false because doing so will prevent additional subscriptions from being invoked.
 * @param {string} topic
 * @param {...?} args
 * @return {boolean}
 */
amplify.Static.prototype.publish = function(topic, args) {};
 /** @type {!amplify.Static} */
var amplify;

/* TODO: ExportAssignment in  */

/* TODO: NamespaceExportDeclaration in  */
