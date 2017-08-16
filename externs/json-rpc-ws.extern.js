/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/json-rpc-ws/index.d.ts:

/* TODO: ImportDeclaration in  */

/**
 * @template TConnection
 * @return {?}
 */
function createServer() {}

/**
 * @template TConnection
 * @return {?}
 */
function createClient() {}

/**
 * @constructor
 * @struct
 */
function Server() {}
 /** @type {!WebSocket.Server} */
Server.prototype.server;

/**
 * Start the server
 * @param {!WebSocket.IServerOptions=} options
 * @param {?=} callback
 * @return {void}
 */
Server.prototype.start = function(options, callback) {};

/**
 * Stop the server
 * @return {void}
 */
Server.prototype.stop = function() {};

/**
 * @constructor
 * @struct
 * @param {!WebSocket} WebSocket
 * @param {boolean=} browser
 */
function Client(WebSocket, browser) {}

/**
 * Connect to a json-rpc-ws server
 * @param {string} url
 * @param {?} connected
 * @return {void}
 */
Client.prototype.connect = function(url, connected) {};

/**
 * Test whether we have a connection or not
 * @return {boolean}
 */
Client.prototype.isConnected = function() {};

/**
 * Return the current connection (there can be only one)
 * @return {?}
 */
Client.prototype.getConnection = function() {};

/**
 * Close the current connection
 * @param {?} callback
 * @return {void}
 */
Client.prototype.disconnect = function(callback) {};
/**
 * @constructor
 * @struct
 */
function Base() {}

/**
 * Add a handler function for a given method
 * @template ParamType, ParamCallbackType
 * @param {string} eventName
 * @param {?} handler
 * @return {void}
 */
Base.prototype.expose = function(eventName, handler) {};

/**
 * Send a method request through a specific connection
 * @template ParamType, ParamCallbackType
 * @param {string} eventName
 * @param {?=} params
 * @param {?=} callback
 * @return {void}
 */
Base.prototype.send = function(eventName, params, callback) {};

/**
 * Connected event handler
 * @param {!WebSocket} socket
 * @return {void}
 */
Base.prototype.connected = function(socket) {};

/**
 * Disconnected event handler
 * @param {?} connection
 * @return {void}
 */
Base.prototype.disconnected = function(connection) {};

/**
 * Test if a handler exists for a given method
 * @param {string} method
 * @return {boolean}
 */
Base.prototype.hasHandler = function(method) {};

/**
 * Get handler for a given method
 * @template ParamType, ParamCallbackType
 * @param {string} method
 * @return {?}
 */
Base.prototype.getHandler = function(method) {};

/**
 * Get a connection by id
 * @param {string} id
 * @return {?}
 */
Base.prototype.getConnection = function(id) {};

/**
 * Shut down all existing connections
 * 
 * @return {void}
 */
Base.prototype.hangup = function() {};
/**
 * @record
 * @struct
 */
function Connection() {}
 /** @type {string} */
Connection.prototype.id;
 /** @type {!WebSocket} */
Connection.prototype.socket;
 /** @type {?} */
Connection.prototype.parent;
 /** @type {?} */
Connection.prototype.responseHandlers;

/**
 * @template ParamType
 * @param {?} payload
 * @return {void}
 */
Connection.prototype.sendRaw = function(payload) {};

/**
 * @template ParamType
 * @param {?} payload
 * @return {void}
 */
Connection.prototype.processPayload = function(payload) {};

/**
 * @param {string} id
 * @param {?=} error
 * @param {?=} result
 * @return {void}
 */
Connection.prototype.sendResult = function(id, error, result) {};

/**
 * @template ParamType, ParamCallbackType
 * @param {string} method
 * @param {?} params
 * @param {?=} callback
 * @return {void}
 */
Connection.prototype.sendMethod = function(method, params, callback) {};

/**
 * @param {?} error
 * @param {string=} id
 * @param {?=} data
 * @return {void}
 */
Connection.prototype.sendError = function(error, id, data) {};

/**
 * @param {?=} error
 * @return {void}
 */
Connection.prototype.close = function(error) {};

/**
 * @param {?=} callback
 * @return {void}
 */
Connection.prototype.hangup = function(callback) {};

/**
 * @param {?} data
 * @return {void}
 */
Connection.prototype.message = function(data) {};
/**
 * @record
 * @struct
 */
function Payload() {}
 /** @type {string} */
Payload.prototype.jsonrpc;
 /** @type {string} */
Payload.prototype.id;
 /** @type {string} */
Payload.prototype.method;
 /** @type {?} */
Payload.prototype.params;
 /** @type {?} */
Payload.prototype.result;
 /** @type {?} */
Payload.prototype.error;

/** @typedef {?} */
var Handler;

/** @typedef {?} */
var ReplyCallback;

/**
 * Returns a valid jsonrpc2.0 error reply
 * @param {string} type
 * @param {(string|number)} id
 * @param {?} data
 * @return {?}
 */
function Errors(type, id, data) {}