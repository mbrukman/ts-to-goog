/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/restler/index.d.ts:
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "restler"
/** @const */
tsickle_declare_module.restler = {};

/* TODO: ImportDeclaration in tsickle_declare_module.restler */
/**
 * @record
 * @struct
 */
tsickle_declare_module.restler.RestlerStatic = function() {};

/**
 * Create a DELETE request.
 * @param {string} url
 * @param {!Object=} options
 * @return {!RestlerResult}
 */
tsickle_declare_module.restler.RestlerStatic.prototype.del = function(url, options) {};

/**
 * Create a GET request.
 * @param {string} url
 * @param {!RestlerOptions=} options
 * @return {!RestlerResult}
 */
tsickle_declare_module.restler.RestlerStatic.prototype.get = function(url, options) {};

/**
 * Create a HEAD request.
 * @param {string} url
 * @param {!RestlerOptions=} options
 * @return {!RestlerResult}
 */
tsickle_declare_module.restler.RestlerStatic.prototype.head = function(url, options) {};

/**
 * Send json data via GET method.
 * @param {string} url
 * @param {?=} data
 * @param {!RestlerOptions=} options
 * @param {string=} method
 * @return {!RestlerResult}
 */
tsickle_declare_module.restler.RestlerStatic.prototype.json = function(url, data, options, method) {};

/**
 * Create a PATCH request.
 * @param {string} url
 * @param {!RestlerOptions=} options
 * @return {!RestlerResult}
 */
tsickle_declare_module.restler.RestlerStatic.prototype.patch = function(url, options) {};

/**
 * Send json  data  via PATCH method.
 * @param {string} url
 * @param {?=} data
 * @param {!RestlerOptions=} options
 * @return {!RestlerResult}
 */
tsickle_declare_module.restler.RestlerStatic.prototype.patchJson = function(url, data, options) {};

/**
 * Create a POST request.
 * @param {string} url
 * @param {!RestlerOptions=} options
 * @return {!RestlerResult}
 */
tsickle_declare_module.restler.RestlerStatic.prototype.post = function(url, options) {};

/**
 * Send json data via POST method.
 * @param {string} url
 * @param {?=} data
 * @param {!RestlerOptions=} options
 * @return {!RestlerResult}
 */
tsickle_declare_module.restler.RestlerStatic.prototype.postJson = function(url, data, options) {};

/**
 * Create a PUT request.
 * @param {string} url
 * @param {!RestlerOptions=} options
 * @return {!RestlerResult}
 */
tsickle_declare_module.restler.RestlerStatic.prototype.put = function(url, options) {};

/**
 * Send json data via PUT method.
 * @param {string} url
 * @param {?=} data
 * @param {!RestlerOptions=} options
 * @return {!RestlerResult}
 */
tsickle_declare_module.restler.RestlerStatic.prototype.putJson = function(url, data, options) {};

/**
 * Create a PUT request.
 * @param {string} url
 * @param {!RestlerOptions=} options
 * @return {!RestlerResult}
 */
tsickle_declare_module.restler.RestlerStatic.prototype.service = function(url, options) {};
/**
 * @record
 * @struct
 */
tsickle_declare_module.restler.RestlerOptionsHeader = function() {};

/* TODO: IndexSignature: tsickle_declare_module.restler */
/**
 * @record
 * @struct
 */
tsickle_declare_module.restler.RestlerOptions = function() {};
 /** @type {string} */
tsickle_declare_module.restler.RestlerOptions.prototype.accessToken;
 /** @type {?} */
tsickle_declare_module.restler.RestlerOptions.prototype.agent;
 /** @type {?} */
tsickle_declare_module.restler.RestlerOptions.prototype.client;
 /** @type {?} */
tsickle_declare_module.restler.RestlerOptions.prototype.data;
 /** @type {string} */
tsickle_declare_module.restler.RestlerOptions.prototype.decoding;
 /** @type {string} */
tsickle_declare_module.restler.RestlerOptions.prototype.encoding;
 /** @type {boolean} */
tsickle_declare_module.restler.RestlerOptions.prototype.followRedirects;
 /** @type {!RestlerOptionsHeader} */
tsickle_declare_module.restler.RestlerOptions.prototype.headers;
 /** @type {string} */
tsickle_declare_module.restler.RestlerOptions.prototype.method;
 /** @type {boolean} */
tsickle_declare_module.restler.RestlerOptions.prototype.multipart;
 /** @type {?} */
tsickle_declare_module.restler.RestlerOptions.prototype.parser;
 /** @type {string} */
tsickle_declare_module.restler.RestlerOptions.prototype.password;
 /** @type {?} */
tsickle_declare_module.restler.RestlerOptions.prototype.query;
 /** @type {boolean} */
tsickle_declare_module.restler.RestlerOptions.prototype.rejectUnauthorized;
 /** @type {number} */
tsickle_declare_module.restler.RestlerOptions.prototype.timeout;
 /** @type {string} */
tsickle_declare_module.restler.RestlerOptions.prototype.username;
 /** @type {?} */
tsickle_declare_module.restler.RestlerOptions.prototype.xml2js;
/**
 * @record
 * @struct
 */
tsickle_declare_module.restler.RestlerResult = function() {};

/**
 * Adds the listener function to the end of the listeners array for the event named eventName.
 * @param {string} eventName
 * @param {function(?, !ServerResponse): void} listener
 * @return {!RestlerResult}
 */
tsickle_declare_module.restler.RestlerResult.prototype.on = function(eventName, listener) {};
 /** @type {!RestlerStatic} */
tsickle_declare_module.restler.restler;

/* TODO: ExportAssignment in tsickle_declare_module.restler */
