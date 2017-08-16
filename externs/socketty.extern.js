/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/socketty/index.d.ts:
 /** @type {!socketty.Socketty} */
var socketty;

/* TODO: ExportAssignment in  */

/* TODO: NamespaceExportDeclaration in  */
/**
 * @record
 * @struct
 */
socketty.Socketty = function() {};

/**
 * Connect to a socketty server.
 * @param {string} url The server url
 * @param {function(!socketty.SockettySocket): void} callback The callback to be run when the connection is open
 * @return {!socketty.SockettySocket} A Socket
 */
socketty.Socketty.prototype.connect = function(url, callback) {};

/**
 * Create a socketty server.
 * @param {?} httpServer The HTTP server to use
 * @return {!socketty.SockettyServer} A socketty server
 */
socketty.Socketty.prototype.createServer = function(httpServer) {};
/**
 * @record
 * @struct
 */
socketty.SockettySocket = function() {};

/**
 * Listen for an action.
 * @param {string} action The action to listen to
 * @param {function(?): void} callback A callback to be run when the action is fired
 * @return {void}
 */
socketty.SockettySocket.prototype.on = function(action, callback) {};

/**
 * Send an action, as well as an optional message.
 * @param {string} action The action to send
 * @param {?=} message The message to send
 * @return {void}
 */
socketty.SockettySocket.prototype.send = function(action, message) {};

/**
 * Specify a callback to be run when the socket is disconnected.
 * @param {function(): void} callback The disconnect callback
 * @return {void}
 */
socketty.SockettySocket.prototype.disconnect = function(callback) {};
/**
 * @record
 * @struct
 */
socketty.SockettyServer = function() {};

/**
 * Specify a callback to be run when a new socket connects to the server.
 * @param {function(!socketty.SockettySocket): void} callback The callback
 * @return {void}
 */
socketty.SockettyServer.prototype.connection = function(callback) {};