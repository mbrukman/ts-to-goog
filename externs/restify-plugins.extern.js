/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/restify-plugins/index.d.ts:

/* TODO: ImportDeclaration in  */

/* TODO: ImportEqualsDeclaration in  */
/** @const */
var pre = {};

/**
 * Provide req.set(key, val) and req.get(key) methods for setting and retrieving context to a specific request.
 * @return {?}
 */
pre.context = function() {};

/**
 *
 * @return {?}
 */
pre.dedupeSlashes = function() {};

/**
 * This pre handler fixes issues with node hanging when an asyncHandler is used prior to bodyParser.
 * @return {?}
 */
pre.pause = function() {};

/**
 * Cleans up duplicate or trailing / on the URL
 * @return {?}
 */
pre.sanitizePath = function() {};

/**
 * Automatically reuse incoming request header as the request id.
 * @param {?} options
 * @return {?}
 */
pre.reqIdHeaders = function(options) {};

/**
 * Checks req.urls query params with strict key/val format and rejects non-strict requests with status code 400.
 * @param {?=} options
 * @return {?}
 */
pre.strictQueryParams = function(options) {};

/**
 * Regexp to capture curl user-agents
 * @param {?=} options
 * @return {?}
 */
pre.userAgentConnection = function(options) {};

/**
 * Check the client's Accept header can be handled by this server.
 * @param {!Array<string>} accepts
 * @return {?}
 */
function acceptParser(accepts) {}
/**
 * @record
 * @struct
 */
function AuditLoggerOptions() {}
 /** @type {!Logger} */
AuditLoggerOptions.prototype.log;
 /** @type {?} */
AuditLoggerOptions.prototype.server;
 /** @type {?} */
AuditLoggerOptions.prototype.logBuffer;
 /** @type {boolean} */
AuditLoggerOptions.prototype.printLog;
 /** @type {boolean} */
AuditLoggerOptions.prototype.body;

/**
 * An audit logger for recording all handled requests
 * @param {?} options
 * @return {?}
 */
function auditLogger(options) {}

/**
 * Authorization header
 * @param {?=} options
 * @return {?}
 */
function authorizationParser(options) {}

/**
 * Conditional headers (If-*)
 * @return {!Array<?>}
 */
function conditionalRequest() {}

/**
 * Handles disappeared CORS headers
 * @return {?}
 */
function fullResponse() {}
/**
 * @record
 * @struct
 */
function BodyParserOptions() {}
 /** @type {number} */
BodyParserOptions.prototype.maxBodySize;
 /** @type {boolean} */
BodyParserOptions.prototype.mapParams;
 /** @type {boolean} */
BodyParserOptions.prototype.mapFiles;
 /** @type {boolean} */
BodyParserOptions.prototype.overrideParams;
 /** @type {boolean} */
BodyParserOptions.prototype.keepExtensions;
 /** @type {string} */
BodyParserOptions.prototype.uploadDir;
 /** @type {boolean} */
BodyParserOptions.prototype.multiples;
 /** @type {string} */
BodyParserOptions.prototype.hash;
 /** @type {boolean} */
BodyParserOptions.prototype.rejectUnknown;
 /** @type {?} */
BodyParserOptions.prototype.reviver;
 /** @type {number} */
BodyParserOptions.prototype.maxFieldsSize;

/**
 * A callback to handle any multipart part which is not a file.
 * If this is omitted, the default handler is invoked which may or may not map the parts into req.params, depending on the mapParams-option.
 * @return {void}
 */
BodyParserOptions.prototype.multipartHandler = function() {};

/**
 * A callback to handle any multipart file.
 * It will be a file if the part have a Content-Disposition with the filename parameter set.
 * This typically happens when a browser sends a form and there is a parameter similar to <input type="file" />.
 * If this is not provided, the default behaviour is to map the contents into req.params.
 * @return {void}
 */
BodyParserOptions.prototype.multipartFileHandler = function() {};

/**
 * Parses POST bodies to req.body. automatically uses one of the following parsers based on content type.
 * @param {?=} options
 * @return {!Array<?>}
 */
function bodyParser(options) {}

/**
 * Reads the body of the request.
 * @param {?=} options
 * @return {?}
 */
function bodyReader(options) {}
/**
 * @record
 * @struct
 */
function UrlEncodedBodyParser() {}
 /** @type {boolean} */
UrlEncodedBodyParser.prototype.mapParams;
 /** @type {boolean} */
UrlEncodedBodyParser.prototype.overrideParams;

/**
 * Parse the HTTP request body IFF the contentType is application/x-www-form-urlencoded.
 * 
 * If req.params already contains a given key, that key is skipped and an
 * error is logged.
 * @param {?=} options
 * @return {!Array<?>}
 */
function urlEncodedBodyParser(options) {}

/**
 * Parses JSON POST bodies
 * @param {?=} options
 * @return {!Array<?>}
 */
function jsonBodyParser(options) {}

/**
 * Parses JSONP callback
 * @return {?}
 */
function jsonp() {}
/**
 * @record
 * @struct
 */
function MultipartBodyParser() {}
 /** @type {boolean} */
MultipartBodyParser.prototype.overrideParams;
 /** @type {boolean} */
MultipartBodyParser.prototype.multiples;
 /** @type {boolean} */
MultipartBodyParser.prototype.keepExtensions;
 /** @type {string} */
MultipartBodyParser.prototype.uploadDir;
 /** @type {number} */
MultipartBodyParser.prototype.maxFieldsSize;
 /** @type {string} */
MultipartBodyParser.prototype.hash;
 /** @type {?} */
MultipartBodyParser.prototype.multipartFileHandler;
 /** @type {?} */
MultipartBodyParser.prototype.multipartHandler;
 /** @type {boolean} */
MultipartBodyParser.prototype.mapParams;
 /** @type {boolean} */
MultipartBodyParser.prototype.mapFiles;

/**
 * Parses JSONP callback
 * @param {?=} options
 * @return {?}
 */
function multipartBodyParser(options) {}
/**
 * @record
 * @struct
 */
function QueryParserOptions() {}
 /** @type {boolean} */
QueryParserOptions.prototype.mapParams;
 /** @type {boolean} */
QueryParserOptions.prototype.overrideParams;
 /** @type {boolean} */
QueryParserOptions.prototype.allowDots;
 /** @type {number} */
QueryParserOptions.prototype.arrayLimit;
 /** @type {number} */
QueryParserOptions.prototype.depth;
 /** @type {number} */
QueryParserOptions.prototype.parameterLimit;
 /** @type {boolean} */
QueryParserOptions.prototype.parseArrays;
 /** @type {boolean} */
QueryParserOptions.prototype.plainObjects;
 /** @type {boolean} */
QueryParserOptions.prototype.strictNullHandling;

/**
 * Parses URL query paramters into `req.query`. Many options correspond directly to option defined for the underlying [qs.parse](https://github.com/ljharb/qs)
 * @param {?=} options
 * @return {?}
 */
function queryParser(options) {}
/**
 * @record
 * @struct
 */
function RequestLogger() {}
 /** @type {?} */
RequestLogger.prototype.properties;
 /** @type {?} */
RequestLogger.prototype.serializers;
 /** @type {?} */
RequestLogger.prototype.headers;
 /** @type {?} */
RequestLogger.prototype.log;

/**
 * Adds timers for each handler in your request chain
 * 
 * `options.properties` properties to pass to bunyan's `log.child()` method
 * @param {?=} options
 * @return {?}
 */
function requestLogger(options) {}

/**
 * expires requests based on current time + delta
 * @param {number=} delta - age in seconds
 * @return {?}
 */
function dateParser(delta) {}

/**
 * gzips the response if client send `accept-encoding: gzip`
 * @param {?=} options options to pass to gzlib
 * @return {?}
 */
function gzipResponse(options) {}
/**
 * @record
 * @struct
 */
function ServeStatic() {}
 /** @type {boolean} */
ServeStatic.prototype.appendRequestPath;
 /** @type {string} */
ServeStatic.prototype.directory;
 /** @type {number} */
ServeStatic.prototype.maxAge;
 /** @type {?} */
ServeStatic.prototype.match;
 /** @type {string} */
ServeStatic.prototype.charSet;
 /** @type {string} */
ServeStatic.prototype.file;
 /** @type {string} */
ServeStatic.prototype.etag;
 /** @type {?} */
ServeStatic.prototype.default;
 /** @type {boolean} */
ServeStatic.prototype.gzip;

/**
 * Used to serve static files
 * @param {?=} options
 * @return {?}
 */
function serveStatic(options) {}
/**
 * @record
 * @struct
 */
function ThrottleOptions() {}
 /** @type {number} */
ThrottleOptions.prototype.burst;
 /** @type {number} */
ThrottleOptions.prototype.rate;
 /** @type {boolean} */
ThrottleOptions.prototype.ip;
 /** @type {boolean} */
ThrottleOptions.prototype.username;
 /** @type {boolean} */
ThrottleOptions.prototype.xff;
 /** @type {?} */
ThrottleOptions.prototype.tokensTable;
 /** @type {number} */
ThrottleOptions.prototype.maxKeys;
 /** @type {?} */
ThrottleOptions.prototype.overrides;
/**
 * @record
 * @struct
 */
function MetricsCallback() {}
 /** @type {!Error} */
MetricsCallback.prototype.err;
 /** @type {?} */
MetricsCallback.prototype.metrics;
 /** @type {?} */
MetricsCallback.prototype.req;
 /** @type {?} */
MetricsCallback.prototype.res;
 /** @type {?} */
MetricsCallback.prototype.route;

/** @typedef {string} */
var TMetricsCallback;
/**
 * @record
 * @struct
 */
function MetricsCallbackOptions() {}
 /** @type {number} */
MetricsCallbackOptions.prototype.statusCode;
 /** @type {string} */
MetricsCallbackOptions.prototype.method;
 /** @type {number} */
MetricsCallbackOptions.prototype.latency;
 /** @type {string} */
MetricsCallbackOptions.prototype.path;
 /** @type {string} */
MetricsCallbackOptions.prototype.connectionState;

/**
 * Listens to the server's after event and emits information about that request (5.x compatible only).
 * 
 * ```
 * server.on('after', plugins.metrics( (err, metrics) =>
 * {
 *    // metrics is an object containing information about the request
 * }));
 * ```
 * @param {?} opts
 * @param {?} callback
 * @return {?}
 */
function metrics(opts, callback) {}

/**
 * Parse the client's request for an OAUTH2 access tokensTable
 * 
 * Subsequent handlers will see `req.oauth2`, which looks like:
 * ```
 * {
 *    oauth2: {accessToken: 'mF_9.B5f-4.1JqM&p=q'}
 * }
 * ```
 * @return {?}
 */
function oauth2TokenParser() {}

/**
 *  throttles responses
 * @param {?=} options
 * @return {?}
 */
function throttle(options) {}
/**
 * @record
 * @struct
 */
function RequestExpiryOptions() {}
 /** @type {string} */
RequestExpiryOptions.prototype.absoluteHeader;
 /** @type {string} */
RequestExpiryOptions.prototype.startHeader;
 /** @type {string} */
RequestExpiryOptions.prototype.timeoutHeader;

/**
 * A request expiry will use headers to tell if the incoming request has expired or not.
 * 
 * There are two options for this plugin:
 *   1. Absolute Time
 *     * Time in Milliseconds since the Epoch when this request should be considered expired
 *   2. Timeout
 *     * The request start time is supplied
 *     * A timeout, in milliseconds, is given
 *     * The timeout is added to the request start time to arrive at the absolute time
 *       in which the request is considered expires
 * @param {?=} options
 * @return {?}
 */
function requestExpiry(options) {}

/* TODO: NamespaceExportDeclaration in  */
