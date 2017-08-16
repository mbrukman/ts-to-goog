/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/jquery-jsonrpcclient/index.d.ts:
/**
 * @extends {JQueryAjaxSettings}
 * @record
 * @struct
 */
function JsonRpcClientOptions() {}
 /** @type {string} */
JsonRpcClientOptions.prototype.ajaxUrl;
 /** @type {!Object<string,?>} */
JsonRpcClientOptions.prototype.headers;
 /** @type {string} */
JsonRpcClientOptions.prototype.socketUrl;
 /** @type {function(!MessageEvent): void} */
JsonRpcClientOptions.prototype.onmessage;
 /** @type {function(!Event): void} */
JsonRpcClientOptions.prototype.onopen;
 /** @type {function(!CloseEvent): void} */
JsonRpcClientOptions.prototype.onclose;
 /** @type {function(!Event): void} */
JsonRpcClientOptions.prototype.onerror;
 /** @type {function(function(): void): !WebSocket} */
JsonRpcClientOptions.prototype.getSockect;
 /** @type {number} */
JsonRpcClientOptions.prototype.timeout;
/**
 * @record
 * @struct
 */
function JsonRpcClient() {}

/**
 * \@fn call
 * \@memberof JsonRpcClient
 * 
 * 
 * @param {string} method
 * @param {(!Object|!Array<?>)} params
 * @param {function(?): void} successCb
 * @param {function(?): void} errorCb
 * @return {!JQueryDeferred<!JQueryXHR>}
 */
JsonRpcClient.prototype.call = function(method, params, successCb, errorCb) {};

/**
 * Notify sends a command to the server that won't need a response.  In http, there is probably
 * an empty response - that will be dropped, but in ws there should be no response at all.
 * 
 * This is very similar to call, but has no id and no handling of callbacks.
 * 
 * \@fn notify
 * \@memberof JsonRpcClient
 * 
 * 
 * @param {string} method
 * @param {(!Object|!Array<?>)} params
 * @return {!JQueryDeferred<!JQueryXHR>}
 */
JsonRpcClient.prototype.notify = function(method, params) {};

/**
 * Make a batch-call by using a callback.
 * 
 * The callback will get an object "batch" as only argument.  On batch, you can call the methods
 * "call" and "notify" just as if it was a normal JsonRpcClient object, and all calls will be
 * sent as a batch call then the callback is done.
 * 
 * \@fn batch
 * \@memberof JsonRpcClient
 * 
 *                    Note, that batch calls should always get an overall success, and the
 *                    only error
 * @param {function(!JsonRpcClient): void} callback
 * @param {function(?): void} allDoneCb
 * @param {function(?): void} errorCb
 * @return {void}
 */
JsonRpcClient.prototype.batch = function(callback, allDoneCb, errorCb) {};
/**
 * @record
 * @struct
 */
function JsonRpcClientFactory() {}

/* TODO: ConstructSignature:  */
 /** @type {!JsonRpcClientFactory} */
JQueryStatic.prototype.JsonRpcClient;
