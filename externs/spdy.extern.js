/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/spdy/index.d.ts:

/* TODO: ImportDeclaration in  */

/* TODO: ImportDeclaration in  */
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "spdy"
/** @const */
tsickle_declare_module.spdy = {};
/** @const */
tsickle_declare_module.spdy.agent = {};
/**
 * @constructor
 * @struct
 */
tsickle_declare_module.spdy.agent.Agent = function() {};
/**
 * @extends {Agent}
 * @constructor
 * @struct
 */
tsickle_declare_module.spdy.agent.PlainAgent = function() {};

/**
 * @param {?} base
 * @param {!agent.AgentOptions} options
 * @return {(!agent.Agent|!agent.PlainAgent)}
 */
tsickle_declare_module.spdy.agent.create = function(base, options) {};
/**
 * @extends {AgentOptions}
 * @record
 * @struct
 */
tsickle_declare_module.spdy.agent.AgentOptions = function() {};
 /** @type {number} */
tsickle_declare_module.spdy.agent.AgentOptions.prototype.port;
 /** @type {{plain: boolean, ssl: boolean, x-forwarded-for: string, protocol: string, protocols: !Array<string>}} */
tsickle_declare_module.spdy.agent.AgentOptions.prototype.spdy;
/**
 * @record
 * @struct
 */
tsickle_declare_module.spdy.Handle = function() {};

/**
 * @param {!Object} options
 * @param {?} stream
 * @param {!socket.Socket} socket
 * @return {!Handle}
 */
tsickle_declare_module.spdy.Handle.prototype.create = function(options, stream, socket) {};

/**
 * @param {!Function=} callback
 * @return {?}
 */
tsickle_declare_module.spdy.Handle.prototype.getStream = function(callback) {};

/**
 * @param {!socket.Socket} socket
 * @param {!Object} options
 * @return {void}
 */
tsickle_declare_module.spdy.Handle.prototype.assignSocket = function(socket, options) {};

/**
 * @param {?} req
 * @return {void}
 */
tsickle_declare_module.spdy.Handle.prototype.assignClientRequest = function(req) {};

/**
 * @param {?} req
 * @return {void}
 */
tsickle_declare_module.spdy.Handle.prototype.assignRequest = function(req) {};

/**
 * @param {?} res
 * @return {void}
 */
tsickle_declare_module.spdy.Handle.prototype.assignResponse = function(res) {};

/**
 * @return {void}
 */
tsickle_declare_module.spdy.Handle.prototype.emitRequest = function() {};

/**
 * @param {?} status
 * @param {?} headers
 * @return {void}
 */
tsickle_declare_module.spdy.Handle.prototype.emitResponse = function(status, headers) {};
/** @const */
tsickle_declare_module.spdy.request = {};

/**
 * @param {string} type
 * @return {void}
 */
tsickle_declare_module.spdy.request.onNewListener = function(type) {};
/** @const */
tsickle_declare_module.spdy.response = {};

/**
 * @param {number} statusCode
 * @param {string|!Object} reason_or_obj
 * @param {!Object=} obj
 * @return {void}
 */
tsickle_declare_module.spdy.response.writeHead = function(statusCode, reason_or_obj, obj) {};

/**
 * @param {?} data
 * @param {string} encoding
 * @param {!Function} callback
 * @return {void}
 */
tsickle_declare_module.spdy.response.end = function(data, encoding, callback) {};
/** @const */
tsickle_declare_module.spdy.server = {};
/**
 * @extends {Server}
 * @record
 * @struct
 */
tsickle_declare_module.spdy.server.Server = function() {};
/**
 * @record
 * @struct
 */
tsickle_declare_module.spdy.server.PlainServer = function() {};
/**
 * @record
 * @struct
 */
tsickle_declare_module.spdy.server.IncomingMessage = function() {};
/**
 * @record
 * @struct
 */
tsickle_declare_module.spdy.server.ServerResponse = function() {};

/**
 * @param {string} filename
 * @param {!server.PushOptions} options
 * @return {?}
 */
tsickle_declare_module.spdy.server.ServerResponse.prototype.push = function(filename, options) {};

/**
 * @param {?|!ServerOptions|function(!server.IncomingMessage, !server.ServerResponse): void} base_or_options_or_handler
 * @param {!ServerOptions|function(!server.IncomingMessage, !server.ServerResponse): void=} options_or_handler
 * @param {function(!server.IncomingMessage, !server.ServerResponse): void=} handler
 * @return {!server.Server}
 */
tsickle_declare_module.spdy.server.create = function(base_or_options_or_handler, options_or_handler, handler) {};

/** @typedef {string} */
tsickle_declare_module.spdy.server.Protocol;
/**
 * @record
 * @struct
 */
tsickle_declare_module.spdy.server.PushOptions = function() {};
 /** @type {number} */
tsickle_declare_module.spdy.server.PushOptions.prototype.status;
 /** @type {string} */
tsickle_declare_module.spdy.server.PushOptions.prototype.method;
 /** @type {?} */
tsickle_declare_module.spdy.server.PushOptions.prototype.request;
 /** @type {?} */
tsickle_declare_module.spdy.server.PushOptions.prototype.response;
/**
 * @extends {ServerOptions}
 * @record
 * @struct
 */
tsickle_declare_module.spdy.server.ServerOptions = function() {};
 /** @type {{protocols: !Array<string>, plain: boolean, x-forwarded-for: boolean, connection: {windowSize: number, autoSpdy31: boolean}}} */
tsickle_declare_module.spdy.server.ServerOptions.prototype.spdy;
/** @const */
tsickle_declare_module.spdy.socket = {};
/**
 * @record
 * @struct
 */
tsickle_declare_module.spdy.socket.Socket = function() {};

/** @typedef {!agent.Agent} */
tsickle_declare_module.spdy.Agent;

/** @typedef {!agent.PlainAgent} */
tsickle_declare_module.spdy.PlainAgent;

/** @typedef {!agent.AgentOptions} */
tsickle_declare_module.spdy.AgentOptions;

/** @typedef {!socket.Socket} */
tsickle_declare_module.spdy.Socket;

/** @typedef {!server.Server} */
tsickle_declare_module.spdy.Server;

/** @typedef {!server.IncomingMessage} */
tsickle_declare_module.spdy.IncomingMessage;

/** @typedef {!server.IncomingMessage} */
tsickle_declare_module.spdy.ServerRequest;

/** @typedef {!server.ServerResponse} */
tsickle_declare_module.spdy.ServerResponse;

/** @typedef {!server.PlainServer} */
tsickle_declare_module.spdy.PlainServer;

/** @typedef {!server.ServerOptions} */
tsickle_declare_module.spdy.ServerOptions;

/**
 * @param {?|!agent.AgentOptions} base_or_options
 * @param {!agent.AgentOptions=} options
 * @return {(!agent.Agent|!agent.PlainAgent)}
 */
tsickle_declare_module.spdy.createAgent = function(base_or_options, options) {};

/**
 * @param {?|!server.ServerOptions|function(!server.IncomingMessage, !server.ServerResponse): void} base_or_options_or_handler
 * @param {!server.ServerOptions|function(!server.IncomingMessage, !server.ServerResponse): void=} options_or_handler
 * @param {function(!server.IncomingMessage, !server.ServerResponse): void=} handler
 * @return {!server.Server}
 */
tsickle_declare_module.spdy.createServer = function(base_or_options_or_handler, options_or_handler, handler) {};
