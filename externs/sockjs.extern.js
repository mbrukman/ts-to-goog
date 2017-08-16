/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/sockjs/index.d.ts:

/* TODO: ImportEqualsDeclaration in  */
/**
 * @record
 * @struct
 */
function ServerOptions() {}
 /** @type {string} */
ServerOptions.prototype.sockjs_url;
 /** @type {string} */
ServerOptions.prototype.prefix;
 /** @type {number} */
ServerOptions.prototype.response_limit;
 /** @type {boolean} */
ServerOptions.prototype.websocket;
 /** @type {?} */
ServerOptions.prototype.jsessionid;
 /** @type {number} */
ServerOptions.prototype.heartbeat_delay;
 /** @type {number} */
ServerOptions.prototype.disconnect_delay;

/**
 * @param {string} severity
 * @param {string} message
 * @return {void}
 */
ServerOptions.prototype.log = function(severity, message) {};

/**
 * @param {?=} options
 * @return {?}
 */
function createServer(options) {}
/**
 * @record
 * @struct
 */
function Server() {}

/**
 * @param {!Server} server
 * @param {?=} options
 * @return {?}
 */
Server.prototype.installHandlers = function(server, options) {};

/**
 * @param {string} event
 * @param {?|!Function} listener
 * @return {?}
 */
Server.prototype.on = function(event, listener) {};
/**
 * @extends {NodeJS.ReadWriteStream}
 * @record
 * @struct
 */
function Connection() {}
 /** @type {string} */
Connection.prototype.remoteAddress;
 /** @type {number} */
Connection.prototype.remotePort;
 /** @type {?} */
Connection.prototype.address;
 /** @type {?} */
Connection.prototype.headers;
 /** @type {string} */
Connection.prototype.url;
 /** @type {string} */
Connection.prototype.pathname;
 /** @type {string} */
Connection.prototype.prefix;
 /** @type {string} */
Connection.prototype.protocol;
 /** @type {number} */
Connection.prototype.readyState;
 /** @type {string} */
Connection.prototype.id;

/**
 * @param {string=} code
 * @param {string=} reason
 * @return {boolean}
 */
Connection.prototype.close = function(code, reason) {};

/**
 * @return {void}
 */
Connection.prototype.destroy = function() {};

/**
 * @param {string} event
 * @param {?|!Function} listener
 * @return {?}
 */
Connection.prototype.on = function(event, listener) {};
