/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/jquery.clientsidelogging/index.d.ts:
/**
 * @record
 * @struct
 */
function ClientSideLoggingClientInfoObject() {}
 /** @type {boolean} */
ClientSideLoggingClientInfoObject.prototype.location;
 /** @type {boolean} */
ClientSideLoggingClientInfoObject.prototype.screen_size;
 /** @type {boolean} */
ClientSideLoggingClientInfoObject.prototype.user_agent;
 /** @type {boolean} */
ClientSideLoggingClientInfoObject.prototype.window_size;
/**
 * @record
 * @struct
 */
function ClientSideLoggingObject() {}
 /** @type {string} */
ClientSideLoggingObject.prototype.error_url;
 /** @type {string} */
ClientSideLoggingObject.prototype.info_url;
 /** @type {string} */
ClientSideLoggingObject.prototype.log_url;
 /** @type {number} */
ClientSideLoggingObject.prototype.log_level;
 /** @type {boolean} */
ClientSideLoggingObject.prototype.native_error;
 /** @type {boolean} */
ClientSideLoggingObject.prototype.hijack_console;
 /** @type {string} */
ClientSideLoggingObject.prototype.query_var;
 /** @type {!ClientSideLoggingClientInfoObject} */
ClientSideLoggingObject.prototype.client_info;
 /** @type {function(?): ?} */
JQueryStatic.prototype.info;
 /** @type {function(?): ?} */
JQueryStatic.prototype.log;
 /** @type {function(!ClientSideLoggingObject): ?} */
JQueryStatic.prototype.clientSideLogging;

/**
 * @param {?=} what
 * @return {?}
 */
JQueryStatic.prototype.error = function(what) {};