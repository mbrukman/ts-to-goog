/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/angular-mocks/index.d.ts:

/* TODO: ImportDeclaration in  */
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "angular"
 /** @type {!IMockStatic} */
tsickle_declare_module.angular.IAngularStatic.prototype.mock;
/**
 * @record
 * @struct
 */
tsickle_declare_module.angular.IInjectStatic = function() {};

/* TODO: CallSignature: tsickle_declare_module.angular */

/* TODO: CallSignature: tsickle_declare_module.angular */

/**
 * @param {boolean=} val
 * @return {void}
 */
tsickle_declare_module.angular.IInjectStatic.prototype.strictDi = function(val) {};
/**
 * @record
 * @struct
 */
tsickle_declare_module.angular.IMockStatic = function() {};
 /** @type {!IInjectStatic} */
tsickle_declare_module.angular.IMockStatic.prototype.inject;
 /** @type {?} */
tsickle_declare_module.angular.IMockStatic.prototype.module;

/**
 * @param {?} obj
 * @return {string}
 */
tsickle_declare_module.angular.IMockStatic.prototype.dump = function(obj) {};

/**
 * @param {number} offset
 * @param {number|string} timestamp
 * @return {!Date}
 */
tsickle_declare_module.angular.IMockStatic.prototype.TzDate = function(offset, timestamp) {};
/**
 * @extends {angular.IServiceProvider}
 * @record
 * @struct
 */
tsickle_declare_module.angular.IExceptionHandlerProvider = function() {};

/**
 * @param {string} mode
 * @return {void}
 */
tsickle_declare_module.angular.IExceptionHandlerProvider.prototype.mode = function(mode) {};

/**
 * @param {number=} delay
 * @return {void}
 */
tsickle_declare_module.angular.ITimeoutService.prototype.flush = function(delay) {};

/**
 * @param {number=} expectedDelay
 * @return {void}
 */
tsickle_declare_module.angular.ITimeoutService.prototype.flushNext = function(expectedDelay) {};

/**
 * @return {void}
 */
tsickle_declare_module.angular.ITimeoutService.prototype.verifyNoPendingTasks = function() {};

/**
 * @param {number=} millis
 * @return {number}
 */
tsickle_declare_module.angular.IIntervalService.prototype.flush = function(millis) {};

/**
 * @return {void}
 */
tsickle_declare_module.angular.ILogService.prototype.assertEmpty = function() {};

/**
 * @return {void}
 */
tsickle_declare_module.angular.ILogService.prototype.reset = function() {};
 /** @type {!Array<string>} */
tsickle_declare_module.angular.ILogCall.prototype.logs;

/* TODO: CallSignature: tsickle_declare_module.angular */

/* TODO: CallSignature: tsickle_declare_module.angular */

/* TODO: CallSignature: tsickle_declare_module.angular */
/**
 * @record
 * @struct
 */
tsickle_declare_module.angular.IComponentControllerService = function() {};

/* TODO: CallSignature: tsickle_declare_module.angular */

/**
 * Flushes pending requests using the trained responses. Requests are flushed in the order they were made, but it is also possible to skip one or more requests (for example to have them flushed later). This is useful for simulating scenarios where responses arrive from the server in any order.
 * 
 * If there are no pending requests to flush when the method is called, an exception is thrown (as this is typically a sign of programming error).
 * @param {number=} count Number of responses to flush. If undefined/null, all pending requests (starting after `skip`) will be flushed.
 * @param {number=} skip Number of pending requests to skip. For example, a value of 5 would skip the first 5 pending requests and start flushing from the 6th onwards. _(default: 0)_
 * @return {void}
 */
tsickle_declare_module.angular.IHttpBackendService.prototype.flush = function(count, skip) {};

/**
 * Resets all request expectations, but preserves all backend definitions.
 * @return {void}
 */
tsickle_declare_module.angular.IHttpBackendService.prototype.resetExpectations = function() {};

/**
 * Verifies that all of the requests defined via the expect api were made. If any of the requests were not made, verifyNoOutstandingExpectation throws an exception.
 * @param {boolean=} digest Do digest before checking expectation. Pass anything except false to trigger digest. NOTE this flag is purposely undocumented by Angular, which means it's not to be used in normal client code.
 * @return {void}
 */
tsickle_declare_module.angular.IHttpBackendService.prototype.verifyNoOutstandingExpectation = function(digest) {};

/**
 * Verifies that there are no outstanding requests that need to be flushed.
 * @return {void}
 */
tsickle_declare_module.angular.IHttpBackendService.prototype.verifyNoOutstandingRequest = function() {};

/**
 * Creates a new request expectation.
 * Throws a preformatted error if expectation(s) don't match supplied string, regular expression, object, or if function returns false.
 * Returns an object with respond method that controls how a matched request is handled.
 * @param {string} method HTTP method.
 * @param {(string|!RegExp|function(string): boolean)} url HTTP url string, regular expression or function that receives a url and returns true if the url matches the current expctation.
 * @param {(string|!Object|!RegExp|function(string): boolean)=} data HTTP request body string, json object, regular expression or function that receives the data and returns true if the data matches the current expectation.
 * @param {(!Object|function(!Object): boolean)=} headers HTTP headers object or function that receives the headers and returns true if the headers match the current expectation.
 * @param {!Array<!Object>=} keys Array of keys to assign to regex matches in the request url.
 * @return {!mock.IRequestHandler}
 */
tsickle_declare_module.angular.IHttpBackendService.prototype.expect = function(method, url, data, headers, keys) {};

/**
 * Creates a new request expectation for DELETE requests.
 * Throws a preformatted error if expectation(s) don't match supplied string, regular expression, object, or if function returns false.
 * Returns an object with respond method that controls how a matched request is handled.
 * @param {(string|!RegExp|function(string): boolean)} url HTTP url string, regular expression or function that receives a url and returns true if the url is as expected.
 * @param {!Object=} headers HTTP headers object to be compared with the HTTP headers in the request.
 * @param {!Array<!Object>=} keys Array of keys to assign to regex matches in the request url.
 * @return {!mock.IRequestHandler}
 */
tsickle_declare_module.angular.IHttpBackendService.prototype.expectDELETE = function(url, headers, keys) {};

/**
 * Creates a new request expectation for GET requests.
 * Throws a preformatted error if expectation(s) don't match supplied string, regular expression, object, or if function returns false.
 * Returns an object with respond method that controls how a matched request is handled.
 * @param {(string|!RegExp|function(string): boolean)} url HTTP url string, regular expression or function that receives a url and returns true if the url matches the current expctation.
 * @param {!Object=} headers HTTP headers object to be compared with the HTTP headers in the request.
 * @param {!Array<!Object>=} keys Array of keys to assign to regex matches in the request url.
 * @return {!mock.IRequestHandler}
 */
tsickle_declare_module.angular.IHttpBackendService.prototype.expectGET = function(url, headers, keys) {};

/**
 * Creates a new request expectation for HEAD requests.
 * Throws a preformatted error if expectation(s) don't match supplied string, regular expression, object, or if function returns false.
 * Returns an object with respond method that controls how a matched request is handled.
 * @param {(string|!RegExp|function(string): boolean)} url HTTP url string, regular expression or function that receives a url and returns true if the url matches the current expctation.
 * @param {!Object=} headers HTTP headers object to be compared with the HTTP headers in the request.
 * @param {!Array<!Object>=} keys Array of keys to assign to regex matches in the request url.
 * @return {!mock.IRequestHandler}
 */
tsickle_declare_module.angular.IHttpBackendService.prototype.expectHEAD = function(url, headers, keys) {};

/**
 * Creates a new request expectation for JSONP requests.
 * Throws a preformatted error if expectation(s) don't match supplied string, regular expression, or if function returns false.
 * Returns an object with respond method that controls how a matched request is handled.
 * @param {(string|!RegExp|function(string): boolean)} url HTTP url string, regular expression or function that receives a url and returns true if the url matches the current expctation.
 * @param {!Array<!Object>=} keys Array of keys to assign to regex matches in the request url.
 * @return {!mock.IRequestHandler}
 */
tsickle_declare_module.angular.IHttpBackendService.prototype.expectJSONP = function(url, keys) {};

/**
 * Creates a new request expectation for PATCH requests.
 * Throws a preformatted error if expectation(s) don't match supplied string, regular expression, object, or if function returns false.
 * Returns an object with respond method that controls how a matched request is handled.
 * @param {(string|!RegExp|function(string): boolean)} url HTTP url string, regular expression or function that receives a url and returns true if the url matches the current expctation.
 * @param {(string|!Object|!RegExp|function(string): boolean)=} data HTTP request body string, json object, regular expression or function that receives the data and returns true if the data matches the current expectation.
 * @param {!Object=} headers HTTP headers object or function that receives the headers and returns true if the headers match the current expectation.
 * @param {!Array<!Object>=} keys Array of keys to assign to regex matches in the request url.
 * @return {!mock.IRequestHandler}
 */
tsickle_declare_module.angular.IHttpBackendService.prototype.expectPATCH = function(url, data, headers, keys) {};

/**
 * Creates a new request expectation for POST requests.
 * Throws a preformatted error if expectation(s) don't match supplied string, regular expression, object, or if function returns false.
 * Returns an object with respond method that controls how a matched request is handled.
 * @param {(string|!RegExp|function(string): boolean)} url HTTP url string, regular expression or function that receives a url and returns true if the url matches the current expctation.
 * @param {(string|!Object|!RegExp|function(string): boolean)=} data HTTP request body string, json object, regular expression or function that receives the data and returns true if the data matches the current expectation.
 * @param {!Object=} headers HTTP headers object or function that receives the headers and returns true if the headers match the current expectation.
 * @param {!Array<!Object>=} keys Array of keys to assign to regex matches in the request url.
 * @return {!mock.IRequestHandler}
 */
tsickle_declare_module.angular.IHttpBackendService.prototype.expectPOST = function(url, data, headers, keys) {};

/**
 * Creates a new request expectation for PUT requests.
 * Throws a preformatted error if expectation(s) don't match supplied string, regular expression, object, or if function returns false.
 * Returns an object with respond method that controls how a matched request is handled.
 * @param {(string|!RegExp|function(string): boolean)} url HTTP url string, regular expression or function that receives a url and returns true if the url matches the current expctation.
 * @param {(string|!Object|!RegExp|function(string): boolean)=} data HTTP request body string, json object, regular expression or function that receives the data and returns true if the data matches the current expectation.
 * @param {!Object=} headers HTTP headers object or function that receives the headers and returns true if the headers match the current expectation.
 * @param {!Array<!Object>=} keys Array of keys to assign to regex matches in the request url.
 * @return {!mock.IRequestHandler}
 */
tsickle_declare_module.angular.IHttpBackendService.prototype.expectPUT = function(url, data, headers, keys) {};

/**
 * Creates a new backend definition.
 * Returns an object with respond method that controls how a matched request is handled.
 * @param {string} method HTTP method.
 * @param {(string|!RegExp|function(string): boolean)} url HTTP url string, regular expression or function that receives a url and returns true if the url matches the current expctation.
 * @param {(string|!Object|!RegExp|function(string): boolean)=} data HTTP request body string, json object, regular expression or function that receives the data and returns true if the data matches the current expectation.
 * @param {(!Object|function(!Object): boolean)=} headers HTTP headers object or function that receives the headers and returns true if the headers match the current expectation.
 * @param {!Array<!Object>=} keys Array of keys to assign to regex matches in the request url.
 * @return {!mock.IRequestHandler}
 */
tsickle_declare_module.angular.IHttpBackendService.prototype.when = function(method, url, data, headers, keys) {};

/**
 * Creates a new backend definition for DELETE requests.
 * Returns an object with respond method that controls how a matched request is handled.
 * @param {(string|!RegExp|function(string): boolean)} url HTTP url string, regular expression or function that receives a url and returns true if the url matches the current expctation.
 * @param {(!Object|function(!Object): boolean)=} headers HTTP headers object or function that receives the headers and returns true if the headers match the current expectation.
 * @param {!Array<!Object>=} keys Array of keys to assign to regex matches in the request url.
 * @return {!mock.IRequestHandler}
 */
tsickle_declare_module.angular.IHttpBackendService.prototype.whenDELETE = function(url, headers, keys) {};

/**
 * Creates a new backend definition for GET requests.
 * Returns an object with respond method that controls how a matched request is handled.
 * @param {(string|!RegExp|function(string): boolean)} url HTTP url string, regular expression or function that receives a url and returns true if the url matches the current expctation.
 * @param {(!Object|function(!Object): boolean)=} headers HTTP headers object or function that receives the headers and returns true if the headers match the current expectation.
 * @param {!Array<!Object>=} keys Array of keys to assign to regex matches in request url described above
 * @return {!mock.IRequestHandler}
 */
tsickle_declare_module.angular.IHttpBackendService.prototype.whenGET = function(url, headers, keys) {};

/**
 * Creates a new backend definition for HEAD requests.
 * Returns an object with respond method that controls how a matched request is handled.
 * @param {(string|!RegExp|function(string): boolean)} url HTTP url string, regular expression or function that receives a url and returns true if the url matches the current expctation.
 * @param {(!Object|function(!Object): boolean)=} headers HTTP headers object or function that receives the headers and returns true if the headers match the current expectation.
 * @param {!Array<!Object>=} keys Array of keys to assign to regex matches in the request url.
 * @return {!mock.IRequestHandler}
 */
tsickle_declare_module.angular.IHttpBackendService.prototype.whenHEAD = function(url, headers, keys) {};

/**
 * Creates a new backend definition for JSONP requests.
 * Returns an object with respond method that controls how a matched request is handled.
 * @param {(string|!RegExp|function(string): boolean)} url HTTP url string, regular expression or function that receives a url and returns true if the url matches the current expctation.
 * @param {!Array<!Object>=} keys Array of keys to assign to regex matches in the request url.
 * @return {!mock.IRequestHandler}
 */
tsickle_declare_module.angular.IHttpBackendService.prototype.whenJSONP = function(url, keys) {};

/**
 * Creates a new backend definition for PATCH requests.
 * Returns an object with respond method that controls how a matched request is handled.
 * @param {(string|!RegExp|function(string): boolean)} url HTTP url string, regular expression or function that receives a url and returns true if the url matches the current expctation.
 * @param {(string|!Object|!RegExp|function(string): boolean)=} data HTTP request body string, json object, regular expression or function that receives the data and returns true if the data matches the current expectation.
 * @param {(!Object|function(!Object): boolean)=} headers HTTP headers object or function that receives the headers and returns true if the headers match the current expectation.
 * @param {!Array<!Object>=} keys Array of keys to assign to regex matches in the request url.
 * @return {!mock.IRequestHandler}
 */
tsickle_declare_module.angular.IHttpBackendService.prototype.whenPATCH = function(url, data, headers, keys) {};

/**
 * Creates a new backend definition for POST requests.
 * Returns an object with respond method that controls how a matched request is handled.
 * @param {(string|!RegExp|function(string): boolean)} url HTTP url string, regular expression or function that receives a url and returns true if the url matches the current expctation.
 * @param {(string|!Object|!RegExp|function(string): boolean)=} data HTTP request body string, json object, regular expression or function that receives the data and returns true if the data matches the current expectation.
 * @param {(!Object|function(!Object): boolean)=} headers HTTP headers object or function that receives the headers and returns true if the headers match the current expectation.
 * @param {!Array<!Object>=} keys Array of keys to assign to regex matches in the request url.
 * @return {!mock.IRequestHandler}
 */
tsickle_declare_module.angular.IHttpBackendService.prototype.whenPOST = function(url, data, headers, keys) {};

/**
 * Creates a new backend definition for PUT requests.
 * Returns an object with respond method that controls how a matched request is handled.
 * @param {(string|!RegExp|function(string): boolean)} url HTTP url string, regular expression or function that receives a url and returns true if the url matches the current expctation.
 * @param {(string|!Object|!RegExp|function(string): boolean)=} data HTTP request body string, json object, regular expression or function that receives the data and returns true if the data matches the current expectation.
 * @param {(!Object|function(!Object): boolean)=} headers HTTP headers object or function that receives the headers and returns true if the headers match the current expectation.
 * @param {!Array<!Object>=} keys Array of keys to assign to regex matches in the request url.
 * @return {!mock.IRequestHandler}
 */
tsickle_declare_module.angular.IHttpBackendService.prototype.whenPUT = function(url, data, headers, keys) {};
/** @const */
tsickle_declare_module.angular.animate = {};
/**
 * @record
 * @struct
 */
tsickle_declare_module.angular.animate.IAnimateService = function() {};

/**
 * This method will close all pending animations (both Javascript and CSS) and it will also flush any remaining animation frames and/or callbacks.
 * @return {void}
 */
tsickle_declare_module.angular.animate.IAnimateService.prototype.closeAndFlush = function() {};

/**
 * This method is used to flush the pending callbacks and animation frames to either start an animation or conclude an animation. Note that this will not actually close an actively running animation (see `closeAndFlush()` for that).
 * @return {void}
 */
tsickle_declare_module.angular.animate.IAnimateService.prototype.flush = function() {};
/** @const */
tsickle_declare_module.angular.mock = {};
/**
 * @record
 * @struct
 */
tsickle_declare_module.angular.mock.IRequestHandler = function() {};

/**
 * Controls the response for a matched request using a function to construct the response.
 * Returns the RequestHandler object for possible overrides.
 * Controls the response for a matched request using supplied static data to construct the response.
 * Returns the RequestHandler object for possible overrides.
 * Controls the response for a matched request using the HTTP status code 200 and supplied static data to construct the response.
 * Returns the RequestHandler object for possible overrides.
 * @param {function(string, string, (string|!Object), !Object, ?): !Array<?>|number|(string|!Object)} func_or_status_or_data Function that receives the request HTTP method, url, data, headers, and an array of keys to regex matches in the request url and returns an array containing response status (number), data, headers, and status text. / HTTP status code to add to the response. / Data to add to the response.
 * @param {(string|!Object)|!Object=} data_or_headers Data to add to the response. / Headers object to add to the response.
 * @param {!Object|string=} headers_or_responseText Headers object to add to the response. / Response text to add to the response.
 * @param {string=} responseText Response text to add to the response.
 * @return {!mock.IRequestHandler}
 */
tsickle_declare_module.angular.mock.IRequestHandler.prototype.respond = function(func_or_status_or_data, data_or_headers, headers_or_responseText, responseText) {};

/**
 * Any request matching a backend definition or expectation with passThrough handler will be passed through to the real backend (an XHR request will be made to the server.)
 * @return {!mock.IRequestHandler}
 */
tsickle_declare_module.angular.mock.IRequestHandler.prototype.passThrough = function() {};
 /** @type {!IInjectStatic} */
var inject;
