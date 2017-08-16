/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/http-proxy/index.d.ts:

/* TODO: ImportDeclaration in  */

/* TODO: ImportDeclaration in  */

/* TODO: ImportDeclaration in  */

/* TODO: ImportDeclaration in  */

/* TODO: ImportDeclaration in  */

/** @typedef {(string|!Url)} */
var ProxyTargetUrl;

/** @typedef {?} */
var ErrorCallback;

/**
 * @constructor
 * @struct
 * Creates the proxy server with specified options.
 * @param {!Server.ServerOptions=} options - Config object passed to the proxy
 */
function Server(options) {}

/**
 * Used for proxying regular HTTP(S) requests
 * @param {!IncomingMessage} req - Client request.
 * @param {!ServerResponse} res - Client response.
 * @param {!Server.ServerOptions=} options - Additionnal options.
 * @param {?=} callback
 * @return {void}
 */
Server.prototype.web = function(req, res, options, callback) {};

/**
 * Used for proxying regular HTTP(S) requests
 * @param {!IncomingMessage} req - Client request.
 * @param {?} socket - Client socket.
 * @param {?} head - Client head.
 * @param {!Server.ServerOptions=} options - Additionnal options.
 * @return {void}
 */
Server.prototype.ws = function(req, socket, head, options) {};

/**
 * A function that wraps the object in a webserver, for your convenience
 * @param {number} port - Port to listen on
 * @return {!Server}
 */
Server.prototype.listen = function(port) {};

/**
 * A function that closes the inner webserver and stops listening on given port
 * @param {function(): void=} callback
 * @return {void}
 */
Server.prototype.close = function(callback) {};

/**
 * Creates the proxy server with specified options.
 * @param {!Server.ServerOptions=} options Config object passed to the proxy
 * @return {!Server} Proxy object with handlers for `ws` and `web` requests
 */
Server.createProxyServer = function(options) {};

/**
 * Creates the proxy server with specified options.
 * @param {!Server.ServerOptions=} options Config object passed to the proxy
 * @return {!Server} Proxy object with handlers for `ws` and `web` requests
 */
Server.createServer = function(options) {};

/**
 * Creates the proxy server with specified options.
 * @param {!Server.ServerOptions=} options Config object passed to the proxy
 * @return {!Server} Proxy object with handlers for `ws` and `web` requests
 */
Server.createProxy = function(options) {};

/**
 * @param {string} event
 * @param {function(): void} listener
 * @return {Server}
 */
Server.prototype.addListener = function(event, listener) {};

/**
 * @param {string} event
 * @param {function(): void|?|function(!IncomingMessage, !ServerResponse, (string|!Url)): void|function(!ClientRequest, !IncomingMessage, !ServerResponse, !Server.ServerOptions): void|function(!IncomingMessage, !IncomingMessage, !ServerResponse): void|function(!ClientRequest, !IncomingMessage, ?, !Server.ServerOptions, ?): void|function(!Error, !IncomingMessage, !ServerResponse, (string|!Url)): void|function(!IncomingMessage, !ServerResponse, !IncomingMessage): void|function(!IncomingMessage, ?, ?): void} listener
 * @return {Server}
 */
Server.prototype.on = function(event, listener) {};

/**
 * @param {string} event
 * @param {function(): void} listener
 * @return {Server}
 */
Server.prototype.once = function(event, listener) {};

/**
 * @param {string} event
 * @param {function(): void} listener
 * @return {Server}
 */
Server.prototype.removeListener = function(event, listener) {};

/**
 * @param {string=} event
 * @return {Server}
 */
Server.prototype.removeAllListeners = function(event) {};

/**
 * @return {number}
 */
Server.prototype.getMaxListeners = function() {};

/**
 * @param {number} n
 * @return {Server}
 */
Server.prototype.setMaxListeners = function(n) {};

/**
 * @param {string} event
 * @return {!Array<function(): void>}
 */
Server.prototype.listeners = function(event) {};

/**
 * @param {string} event
 * @param {...?} args
 * @return {boolean}
 */
Server.prototype.emit = function(event, args) {};

/**
 * @param {string} type
 * @return {number}
 */
Server.prototype.listenerCount = function(type) {};
/**
 * @record
 * @struct
 */
Server.ServerOptions = function() {};
 /** @type {string} */
Server.ServerOptions.prototype.target;
 /** @type {string} */
Server.ServerOptions.prototype.forward;
 /** @type {?} */
Server.ServerOptions.prototype.agent;
 /** @type {?} */
Server.ServerOptions.prototype.ssl;
 /** @type {boolean} */
Server.ServerOptions.prototype.ws;
 /** @type {boolean} */
Server.ServerOptions.prototype.xfwd;
 /** @type {boolean} */
Server.ServerOptions.prototype.secure;
 /** @type {boolean} */
Server.ServerOptions.prototype.toProxy;
 /** @type {boolean} */
Server.ServerOptions.prototype.prependPath;
 /** @type {boolean} */
Server.ServerOptions.prototype.ignorePath;
 /** @type {boolean} */
Server.ServerOptions.prototype.localAddress;
 /** @type {boolean} */
Server.ServerOptions.prototype.changeOrigin;
 /** @type {string} */
Server.ServerOptions.prototype.auth;
 /** @type {string} */
Server.ServerOptions.prototype.hostRewrite;
 /** @type {boolean} */
Server.ServerOptions.prototype.autoRewrite;
 /** @type {string} */
Server.ServerOptions.prototype.protocolRewrite;

/* TODO: ExportAssignment in  */