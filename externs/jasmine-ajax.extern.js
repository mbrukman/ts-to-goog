/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/jasmine-ajax/index.d.ts:
/**
 * @record
 * @struct
 */
function JasmineAjaxResponse() {}
 /** @type {number} */
JasmineAjaxResponse.prototype.status;
 /** @type {string} */
JasmineAjaxResponse.prototype.statusText;
 /** @type {string} */
JasmineAjaxResponse.prototype.responseText;
 /** @type {string} */
JasmineAjaxResponse.prototype.response;
 /** @type {string} */
JasmineAjaxResponse.prototype.contentType;
 /** @type {!Object<string,string>} */
JasmineAjaxResponse.prototype.responseHeaders;
/**
 * @record
 * @struct
 */
function JasmineAjaxRequest() {}
 /** @type {string} */
JasmineAjaxRequest.prototype.url;
 /** @type {string} */
JasmineAjaxRequest.prototype.method;
 /** @type {?} */
JasmineAjaxRequest.prototype.params;
 /** @type {string} */
JasmineAjaxRequest.prototype.username;
 /** @type {string} */
JasmineAjaxRequest.prototype.password;
 /** @type {!Object<string,string>} */
JasmineAjaxRequest.prototype.requestHeaders;
 /** @type {string} */
JasmineAjaxRequest.prototype.overriddenMimeType;

/**
 * @return {string}
 */
JasmineAjaxRequest.prototype.data = function() {};

/**
 * @param {!JasmineAjaxResponse} response
 * @return {void}
 */
JasmineAjaxRequest.prototype.respondWith = function(response) {};

/**
 * @return {void}
 */
JasmineAjaxRequest.prototype.responseTimeout = function() {};

/**
 * @return {void}
 */
JasmineAjaxRequest.prototype.responseError = function() {};
/**
 * @record
 * @struct
 */
function JasmineAjaxRequestTracker() {}

/**
 * @param {!JasmineAjaxRequest} request
 * @return {void}
 */
JasmineAjaxRequestTracker.prototype.track = function(request) {};

/**
 * @return {!JasmineAjaxRequest}
 */
JasmineAjaxRequestTracker.prototype.first = function() {};

/**
 * @return {number}
 */
JasmineAjaxRequestTracker.prototype.count = function() {};

/**
 * @return {void}
 */
JasmineAjaxRequestTracker.prototype.reset = function() {};

/**
 * @return {!JasmineAjaxRequest}
 */
JasmineAjaxRequestTracker.prototype.mostRecent = function() {};

/**
 * @param {number} index
 * @return {!JasmineAjaxRequest}
 */
JasmineAjaxRequestTracker.prototype.at = function(index) {};

/**
 * @param {!RegExp|!Function|string} urlToMatch
 * @return {!Array<!JasmineAjaxRequest>}
 */
JasmineAjaxRequestTracker.prototype.filter = function(urlToMatch) {};
/**
 * @record
 * @struct
 */
function JasmineAjaxRequestStubReturnOptions() {}
 /** @type {number} */
JasmineAjaxRequestStubReturnOptions.prototype.status;
 /** @type {string} */
JasmineAjaxRequestStubReturnOptions.prototype.contentType;
 /** @type {string} */
JasmineAjaxRequestStubReturnOptions.prototype.response;
 /** @type {string} */
JasmineAjaxRequestStubReturnOptions.prototype.responseText;
 /** @type {!Object<string,string>} */
JasmineAjaxRequestStubReturnOptions.prototype.responseHeaders;
/**
 * @record
 * @struct
 */
function JasmineAjaxRequestStub() {}
 /** @type {string} */
JasmineAjaxRequestStub.prototype.data;
 /** @type {string} */
JasmineAjaxRequestStub.prototype.method;

/**
 * @param {!JasmineAjaxRequestStubReturnOptions} options
 * @return {void}
 */
JasmineAjaxRequestStub.prototype.andReturn = function(options) {};

/**
 * @param {string} fullUrl
 * @param {string} data
 * @param {string} method
 * @return {boolean}
 */
JasmineAjaxRequestStub.prototype.matches = function(fullUrl, data, method) {};
/**
 * @record
 * @struct
 */
function JasmineAjaxStubTracker() {}

/**
 * @param {!JasmineAjaxRequestStub} stub
 * @return {void}
 */
JasmineAjaxStubTracker.prototype.addStub = function(stub) {};

/**
 * @return {void}
 */
JasmineAjaxStubTracker.prototype.reset = function() {};

/**
 * @param {string} url
 * @param {string=} data
 * @param {string=} method
 * @return {!JasmineAjaxRequestStub}
 */
JasmineAjaxStubTracker.prototype.findStub = function(url, data, method) {};
/**
 * @record
 * @struct
 */
function JasmineAjaxParamParser() {}

/**
 * @param {!XMLHttpRequest} xhr
 * @return {boolean}
 */
JasmineAjaxParamParser.prototype.test = function(xhr) {};

/**
 * @param {string} paramString
 * @return {?}
 */
JasmineAjaxParamParser.prototype.parse = function(paramString) {};

/**
 * @constructor
 * @struct
 * @param {?} globals
 */
function MockAjax(globals) {}
 /** @type {!JasmineAjaxRequestTracker} */
MockAjax.prototype.requests;
 /** @type {!JasmineAjaxStubTracker} */
MockAjax.prototype.stubs;

/**
 * @return {void}
 */
MockAjax.prototype.install = function() {};

/**
 * @return {void}
 */
MockAjax.prototype.uninstall = function() {};

/**
 * @param {function(): void} closure
 * @return {void}
 */
MockAjax.prototype.withMock = function(closure) {};

/**
 * @param {!JasmineAjaxParamParser} parser
 * @return {void}
 */
MockAjax.prototype.addCustomParamParser = function(parser) {};

/**
 * @param {!RegExp|string} url
 * @param {string|!RegExp=} data
 * @param {string=} method
 * @return {!JasmineAjaxRequestStub}
 */
MockAjax.prototype.stubRequest = function(url, data, method) {};
/** @const */
var jasmine = {};
 /** @type {!MockAjax} */
jasmine.Ajax;