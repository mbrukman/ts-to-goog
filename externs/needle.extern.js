/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/needle/index.d.ts:
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "needle"
/** @const */
tsickle_declare_module.needle = {};

/* TODO: ImportDeclaration in tsickle_declare_module.needle */

/* TODO: ImportDeclaration in tsickle_declare_module.needle */

/* TODO: ImportDeclaration in tsickle_declare_module.needle */
/** @const */
tsickle_declare_module.needle.Needle = {};
/**
 * @record
 * @struct
 */
tsickle_declare_module.needle.Needle.NeedleResponse = function() {};
 /** @type {?} */
tsickle_declare_module.needle.Needle.NeedleResponse.prototype.body;
 /** @type {?} */
tsickle_declare_module.needle.Needle.NeedleResponse.prototype.raw;
 /** @type {number} */
tsickle_declare_module.needle.Needle.NeedleResponse.prototype.bytes;

/** @typedef {!NodeJS.ReadableStream} */
tsickle_declare_module.needle.Needle.ReadableStream;

/** @typedef {function(!Error, !Needle.NeedleResponse, ?): void} */
tsickle_declare_module.needle.Needle.NeedleCallback;
/**
 * @record
 * @struct
 */
tsickle_declare_module.needle.Needle.Cookies = function() {};

/* TODO: IndexSignature: tsickle_declare_module.needle.Needle */

/** @typedef {?} */
tsickle_declare_module.needle.Needle.NeedleOptions;
/**
 * @record
 * @struct
 */
tsickle_declare_module.needle.Needle.RequestOptions = function() {};
 /** @type {number} */
tsickle_declare_module.needle.Needle.RequestOptions.prototype.open_timeout;
 /** @type {number} */
tsickle_declare_module.needle.Needle.RequestOptions.prototype.read_timeout;
 /** @type {number} */
tsickle_declare_module.needle.Needle.RequestOptions.prototype.timeout;
 /** @type {number} */
tsickle_declare_module.needle.Needle.RequestOptions.prototype.follow_max;
 /** @type {number} */
tsickle_declare_module.needle.Needle.RequestOptions.prototype.follow;
 /** @type {boolean} */
tsickle_declare_module.needle.Needle.RequestOptions.prototype.multipart;
 /** @type {(boolean|!Agent)} */
tsickle_declare_module.needle.Needle.RequestOptions.prototype.agent;
 /** @type {string} */
tsickle_declare_module.needle.Needle.RequestOptions.prototype.proxy;
 /** @type {!Object} */
tsickle_declare_module.needle.Needle.RequestOptions.prototype.headers;
 /** @type {string} */
tsickle_declare_module.needle.Needle.RequestOptions.prototype.auth;
 /** @type {boolean} */
tsickle_declare_module.needle.Needle.RequestOptions.prototype.json;
 /** @type {!Needle.Cookies} */
tsickle_declare_module.needle.Needle.RequestOptions.prototype.cookies;
 /** @type {boolean} */
tsickle_declare_module.needle.Needle.RequestOptions.prototype.compressed;
 /** @type {string} */
tsickle_declare_module.needle.Needle.RequestOptions.prototype.username;
 /** @type {string} */
tsickle_declare_module.needle.Needle.RequestOptions.prototype.password;
 /** @type {string} */
tsickle_declare_module.needle.Needle.RequestOptions.prototype.accept;
 /** @type {string} */
tsickle_declare_module.needle.Needle.RequestOptions.prototype.connection;
 /** @type {string} */
tsickle_declare_module.needle.Needle.RequestOptions.prototype.user_agent;
/**
 * @record
 * @struct
 */
tsickle_declare_module.needle.Needle.ResponseOptions = function() {};
 /** @type {boolean} */
tsickle_declare_module.needle.Needle.ResponseOptions.prototype.decode_response;
 /** @type {boolean} */
tsickle_declare_module.needle.Needle.ResponseOptions.prototype.decode;
 /** @type {boolean} */
tsickle_declare_module.needle.Needle.ResponseOptions.prototype.parse_response;
 /** @type {boolean} */
tsickle_declare_module.needle.Needle.ResponseOptions.prototype.parse;
 /** @type {boolean} */
tsickle_declare_module.needle.Needle.ResponseOptions.prototype.parse_cookies;
 /** @type {string} */
tsickle_declare_module.needle.Needle.ResponseOptions.prototype.output;
/**
 * @record
 * @struct
 */
tsickle_declare_module.needle.Needle.RedirectOptions = function() {};
 /** @type {boolean} */
tsickle_declare_module.needle.Needle.RedirectOptions.prototype.follow_set_cookie;
 /** @type {boolean} */
tsickle_declare_module.needle.Needle.RedirectOptions.prototype.follow_set_referer;
 /** @type {boolean} */
tsickle_declare_module.needle.Needle.RedirectOptions.prototype.follow_keep_method;
 /** @type {boolean} */
tsickle_declare_module.needle.Needle.RedirectOptions.prototype.follow_if_same_host;
 /** @type {boolean} */
tsickle_declare_module.needle.Needle.RedirectOptions.prototype.follow_if_same_protocol;
/**
 * @record
 * @struct
 */
tsickle_declare_module.needle.Needle.KeyValue = function() {};

/* TODO: IndexSignature: tsickle_declare_module.needle.Needle */

/** @typedef {(string|?|!NodeJS.ReadableStream|!Needle.KeyValue)} */
tsickle_declare_module.needle.Needle.BodyData;
/**
 * @record
 * @struct
 */
tsickle_declare_module.needle.Needle.NeedleStatic = function() {};

/**
 * @param {?} options
 * @return {void}
 */
tsickle_declare_module.needle.Needle.NeedleStatic.prototype.defaults = function(options) {};

/**
 * @param {string} url
 * @param {function(!Error, !Needle.NeedleResponse, ?): void|?=} callback_or_options
 * @param {function(!Error, !Needle.NeedleResponse, ?): void=} callback
 * @return {!NodeJS.ReadableStream}
 */
tsickle_declare_module.needle.Needle.NeedleStatic.prototype.head = function(url, callback_or_options, callback) {};

/**
 * @param {string} url
 * @param {function(!Error, !Needle.NeedleResponse, ?): void|?=} callback_or_options
 * @param {function(!Error, !Needle.NeedleResponse, ?): void=} callback
 * @return {!NodeJS.ReadableStream}
 */
tsickle_declare_module.needle.Needle.NeedleStatic.prototype.get = function(url, callback_or_options, callback) {};

/**
 * @param {string} url
 * @param {(string|?|!NodeJS.ReadableStream|!Needle.KeyValue)} data
 * @param {function(!Error, !Needle.NeedleResponse, ?): void|?=} callback_or_options
 * @param {function(!Error, !Needle.NeedleResponse, ?): void=} callback
 * @return {!NodeJS.ReadableStream}
 */
tsickle_declare_module.needle.Needle.NeedleStatic.prototype.post = function(url, data, callback_or_options, callback) {};

/**
 * @param {string} url
 * @param {(string|?|!NodeJS.ReadableStream|!Needle.KeyValue)} data
 * @param {function(!Error, !Needle.NeedleResponse, ?): void|?=} callback_or_options
 * @param {function(!Error, !Needle.NeedleResponse, ?): void=} callback
 * @return {!NodeJS.ReadableStream}
 */
tsickle_declare_module.needle.Needle.NeedleStatic.prototype.put = function(url, data, callback_or_options, callback) {};

/**
 * @param {string} url
 * @param {(string|?|!NodeJS.ReadableStream|!Needle.KeyValue)} data
 * @param {function(!Error, !Needle.NeedleResponse, ?): void|?=} callback_or_options
 * @param {function(!Error, !Needle.NeedleResponse, ?): void=} callback
 * @return {!NodeJS.ReadableStream}
 */
tsickle_declare_module.needle.Needle.NeedleStatic.prototype.patch = function(url, data, callback_or_options, callback) {};

/**
 * @param {string} url
 * @param {(string|?|!NodeJS.ReadableStream|!Needle.KeyValue)} data
 * @param {function(!Error, !Needle.NeedleResponse, ?): void|?=} callback_or_options
 * @param {function(!Error, !Needle.NeedleResponse, ?): void=} callback
 * @return {!NodeJS.ReadableStream}
 */
tsickle_declare_module.needle.Needle.NeedleStatic.prototype.delete = function(url, data, callback_or_options, callback) {};

/**
 * @param {string} method
 * @param {string} url
 * @param {(string|?|!NodeJS.ReadableStream|!Needle.KeyValue)} data
 * @param {function(!Error, !Needle.NeedleResponse, ?): void|?=} callback_or_options
 * @param {function(!Error, !Needle.NeedleResponse, ?): void=} callback
 * @return {!NodeJS.ReadableStream}
 */
tsickle_declare_module.needle.Needle.NeedleStatic.prototype.request = function(method, url, data, callback_or_options, callback) {};
 /** @type {!Needle.NeedleStatic} */
tsickle_declare_module.needle.needle;

/* TODO: ExportAssignment in tsickle_declare_module.needle */
