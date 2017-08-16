/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/s3rver/index.d.ts:

/* TODO: ImportDeclaration in  */

/**
 * @constructor
 * @struct
 * @param {?} options
 */
function S3rver(options) {}

/**
 * @param {number} port
 * @return {!S3rver}
 */
S3rver.prototype.setPort = function(port) {};

/**
 * @param {string} hostname
 * @return {!S3rver}
 */
S3rver.prototype.setHostname = function(hostname) {};

/**
 * @param {string} directory
 * @return {!S3rver}
 */
S3rver.prototype.setDirectory = function(directory) {};

/**
 * @param {boolean} silent
 * @return {!S3rver}
 */
S3rver.prototype.setSilent = function(silent) {};

/**
 * @param {string} indexDocument
 * @return {!S3rver}
 */
S3rver.prototype.setIndexDocument = function(indexDocument) {};

/**
 * @param {string} errorDocument
 * @return {!S3rver}
 */
S3rver.prototype.setErrorDocument = function(errorDocument) {};

/**
 * @param {function(!Error, string, number, string): void} callback
 * @return {!Server}
 */
S3rver.prototype.run = function(callback) {};
/**
 * @record
 * @struct
 */
function S3rverOptions() {}
 /** @type {number} */
S3rverOptions.prototype.port;
 /** @type {string} */
S3rverOptions.prototype.hostname;
 /** @type {boolean} */
S3rverOptions.prototype.silent;
 /** @type {string} */
S3rverOptions.prototype.indexDocument;
 /** @type {string} */
S3rverOptions.prototype.errorDocument;
 /** @type {string} */
S3rverOptions.prototype.directory;

/* TODO: ExportAssignment in  */