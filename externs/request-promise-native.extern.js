/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/request-promise-native/index.d.ts:
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "request-promise-native"
/** @const */
tsickle_declare_module.request_promise_native = {};

/* TODO: ImportEqualsDeclaration in tsickle_declare_module.request_promise_native */

/* TODO: ImportEqualsDeclaration in tsickle_declare_module.request_promise_native */
/** @const */
tsickle_declare_module.request_promise_native.requestPromise = {};
/**
 * @extends {request.Request}
 * @record
 * @struct
 */
tsickle_declare_module.request_promise_native.requestPromise.RequestPromise = function() {};

/**
 * @return {!Promise<?>}
 */
tsickle_declare_module.request_promise_native.requestPromise.RequestPromise.prototype.promise = function() {};
/**
 * @extends {request.CoreOptions}
 * @record
 * @struct
 */
tsickle_declare_module.request_promise_native.requestPromise.RequestPromiseOptions = function() {};
 /** @type {boolean} */
tsickle_declare_module.request_promise_native.requestPromise.RequestPromiseOptions.prototype.simple;
 /** @type {boolean} */
tsickle_declare_module.request_promise_native.requestPromise.RequestPromiseOptions.prototype.resolveWithFullResponse;

/**
 * @param {?} body
 * @param {!IncomingMessage} response
 * @param {boolean=} resolveWithFullResponse
 * @return {?}
 */
tsickle_declare_module.request_promise_native.requestPromise.RequestPromiseOptions.prototype.transform = function(body, response, resolveWithFullResponse) {};

/** @typedef {!request.RequestResponse} */
tsickle_declare_module.request_promise_native.requestPromise.FullResponse;

/** @typedef {?} */
tsickle_declare_module.request_promise_native.requestPromise.OptionsWithUri;

/** @typedef {?} */
tsickle_declare_module.request_promise_native.requestPromise.OptionsWithUrl;

/** @typedef {?} */
tsickle_declare_module.request_promise_native.requestPromise.Options;
 /** @type {!request.RequestAPI<!requestPromise.RequestPromise, !requestPromise.RequestPromiseOptions, (!request.UriOptions|!request.UrlOptions)>} */
tsickle_declare_module.request_promise_native.requestPromise;

/* TODO: ExportAssignment in tsickle_declare_module.request_promise_native */
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "request-promise-native/errors"
/** @const */
tsickle_declare_module.request_promise_native_errors = {};

/* TODO: ImportEqualsDeclaration in tsickle_declare_module.request_promise_native_errors */

/* TODO: ImportEqualsDeclaration in tsickle_declare_module.request_promise_native_errors */
/**
 * @record
 * @struct
 */
tsickle_declare_module.request_promise_native_errors.RequestError = function() {};
 /** @type {?} */
tsickle_declare_module.request_promise_native_errors.RequestError.prototype.cause;
 /** @type {?} */
tsickle_declare_module.request_promise_native_errors.RequestError.prototype.error;
 /** @type {?} */
tsickle_declare_module.request_promise_native_errors.RequestError.prototype.options;
 /** @type {!IncomingMessage} */
tsickle_declare_module.request_promise_native_errors.RequestError.prototype.response;
/**
 * @record
 * @struct
 */
tsickle_declare_module.request_promise_native_errors.RequestErrorConstructor = function() {};

/* TODO: ConstructSignature: tsickle_declare_module.request_promise_native_errors */

/* TODO: CallSignature: tsickle_declare_module.request_promise_native_errors */
 /** @type {?} */
tsickle_declare_module.request_promise_native_errors.RequestErrorConstructor.prototype.prototype;
 /** @type {!RequestErrorConstructor} */
tsickle_declare_module.request_promise_native_errors.RequestError;
/**
 * @record
 * @struct
 */
tsickle_declare_module.request_promise_native_errors.StatusCodeError = function() {};
 /** @type {number} */
tsickle_declare_module.request_promise_native_errors.StatusCodeError.prototype.statusCode;
 /** @type {?} */
tsickle_declare_module.request_promise_native_errors.StatusCodeError.prototype.error;
 /** @type {?} */
tsickle_declare_module.request_promise_native_errors.StatusCodeError.prototype.options;
 /** @type {!IncomingMessage} */
tsickle_declare_module.request_promise_native_errors.StatusCodeError.prototype.response;
/**
 * @record
 * @struct
 */
tsickle_declare_module.request_promise_native_errors.StatusCodeErrorConstructor = function() {};

/* TODO: ConstructSignature: tsickle_declare_module.request_promise_native_errors */

/* TODO: CallSignature: tsickle_declare_module.request_promise_native_errors */
 /** @type {?} */
tsickle_declare_module.request_promise_native_errors.StatusCodeErrorConstructor.prototype.prototype;
 /** @type {!StatusCodeErrorConstructor} */
tsickle_declare_module.request_promise_native_errors.StatusCodeError;
/**
 * @record
 * @struct
 */
tsickle_declare_module.request_promise_native_errors.TransformError = function() {};
 /** @type {?} */
tsickle_declare_module.request_promise_native_errors.TransformError.prototype.cause;
 /** @type {?} */
tsickle_declare_module.request_promise_native_errors.TransformError.prototype.error;
 /** @type {?} */
tsickle_declare_module.request_promise_native_errors.TransformError.prototype.options;
 /** @type {!IncomingMessage} */
tsickle_declare_module.request_promise_native_errors.TransformError.prototype.response;
/**
 * @record
 * @struct
 */
tsickle_declare_module.request_promise_native_errors.TransformErrorConstructor = function() {};

/* TODO: ConstructSignature: tsickle_declare_module.request_promise_native_errors */

/* TODO: CallSignature: tsickle_declare_module.request_promise_native_errors */
 /** @type {?} */
tsickle_declare_module.request_promise_native_errors.TransformErrorConstructor.prototype.prototype;
 /** @type {!TransformErrorConstructor} */
tsickle_declare_module.request_promise_native_errors.TransformError;