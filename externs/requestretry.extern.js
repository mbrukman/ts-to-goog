/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/requestretry/index.d.ts:

/* TODO: ImportEqualsDeclaration in  */

/* TODO: ImportEqualsDeclaration in  */

/** @typedef {?} */
var RetryStrategy;
/** @const */
var requestRetry = {};
/**
 * @extends {request.RequestAPI}
 * @record
 * @struct
 */
requestRetry.RequestAPI = function() {};
 /** @type {{HttpError: ?, HTTPOrNetworkError: ?, NetworkError: ?}} */
requestRetry.RequestAPI.prototype.RetryStrategies;
/**
 * @extends {request.CoreOptions}
 * @record
 * @struct
 */
requestRetry.RequestRetryOptions = function() {};
 /** @type {number} */
requestRetry.RequestRetryOptions.prototype.maxAttempts;
 /** @type {number} */
requestRetry.RequestRetryOptions.prototype.retryDelay;
 /** @type {?} */
requestRetry.RequestRetryOptions.prototype.retryStrategy;
 /** @type {!requestRetry.RequestAPI} */
var requestretry;

/* TODO: ExportAssignment in  */
