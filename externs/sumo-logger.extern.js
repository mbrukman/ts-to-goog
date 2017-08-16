/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/sumo-logger/index.d.ts:
/** @const */
var SumoLogger = {};
/**
 * @record
 * @struct
 */
SumoLogger.SumoLoggerOptions = function() {};
 /** @type {string} */
SumoLogger.SumoLoggerOptions.prototype.endpoint;
 /** @type {number} */
SumoLogger.SumoLoggerOptions.prototype.interval;
 /** @type {string} */
SumoLogger.SumoLoggerOptions.prototype.clientUrl;
 /** @type {boolean} */
SumoLogger.SumoLoggerOptions.prototype.sendErrors;
 /** @type {string} */
SumoLogger.SumoLoggerOptions.prototype.sessionKey;
 /** @type {string} */
SumoLogger.SumoLoggerOptions.prototype.hostName;
 /** @type {string} */
SumoLogger.SumoLoggerOptions.prototype.sourceCategory;
 /** @type {string} */
SumoLogger.SumoLoggerOptions.prototype.sourceName;

/**
 * You can provide a function that is executed only when logs are successfully sent.
 * The only information you can be sure of in the callback is that the call succeeded.
 * There is no other response information.
 * @return {void}
 */
SumoLogger.SumoLoggerOptions.prototype.onSuccess = function() {};

/**
 * You can provide a function that is executed if an error
 * occurs when the logs are sent.
 * @return {void}
 */
SumoLogger.SumoLoggerOptions.prototype.onError = function() {};
/**
 * @record
 * @struct
 */
SumoLogger.PerMessageOptions = function() {};
 /** @type {!Date} */
SumoLogger.PerMessageOptions.prototype.timestamp;
 /** @type {string} */
SumoLogger.PerMessageOptions.prototype.sessionKey;
 /** @type {string} */
SumoLogger.PerMessageOptions.prototype.url;

/**
 * **(Vanilla JS lib only)**
 * Set the configuration for sending logs. Options are listed in the next section.
 * In the Node.js module, configuration options are sent when instantiating the object.
 * @param {!SumoLogger.SumoLoggerOptions} options
 * @return {void}
 */
SumoLogger.prototype.config = function(options) {};

/**
 * Set a log message to be sent.
 * All logs are sent as JSON objects.
 * If you call `log()` with just a string, the string is included as a field called msg.
 * If you call the function with a JSON object, each field in the object is included as a separate field.
 * Fields called `sessionId`, `url`, and `timestamp` are sent in both cases.
 * Set a log message to be sent.
 * All logs are sent as JSON objects.
 * If you call `log()` with just a string, the string is included as a field called msg.
 * If you call the function with a JSON object, each field in the object is included as a separate field.
 * Fields called `sessionId`, `url`, and `timestamp` are sent in both cases.
 * @template T
 * @param {string|?} message_or_event
 * @param {!SumoLogger.PerMessageOptions=} options
 * @return {void}
 */
SumoLogger.prototype.log = function(message_or_event, options) {};

/**
 * Force any pending logs to be sent immediately. This is mainly for use in a
 * logOut/`window.onBeforeUnload` flow to ensure that any remaining queued
 * messages are sent to Sumo Logic.
 * @return {void}
 */
SumoLogger.prototype.flushLogs = function() {};

/* TODO: ExportAssignment in  */