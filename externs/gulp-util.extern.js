/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/gulp-util/index.d.ts:

/* TODO: ImportEqualsDeclaration in  */

/* TODO: ImportEqualsDeclaration in  */

/* TODO: ImportEqualsDeclaration in  */

/* TODO: ExportDeclaration in  */

/**
 * Replaces a file extension in a path. Returns the new path.
 * @param {string} npath
 * @param {string} ext
 * @return {string}
 */
function replaceExtension(npath, ext) {}
 /** @type {?} */
var colors;
 /** @type {?} */
var date;

/**
 * Logs stuff. Already prefixed with [gulp] and all that. Use the right colors
 * for values. If you pass in multiple arguments it will join them by a space.
 * @param {?=} message
 * @param {...?} optionalParams
 * @return {void}
 */
function log(message, optionalParams) {}

/**
 * This is a lodash.template function wrapper. You must pass in a valid gulp
 * file object so it is available to the user or it will error. You can not
 * configure any of the delimiters. Look at the lodash docs for more info.
 * @param {string} tmpl
 * @param {?=} opt
 * @return {?|string}
 */
function template(tmpl, opt) {}
 /** @type {?} */
var env;

/**
 * @return {void}
 */
function beep() {}
 /** @type {?} */
var noop;

/**
 * @param {?} obj
 * @return {boolean}
 */
function isStream(obj) {}

/**
 * @param {?} obj
 * @return {boolean}
 */
function isBuffer(obj) {}

/**
 * @param {?} obj
 * @return {boolean}
 */
function isNull(obj) {}
 /** @type {string} */
var linefeed;

/**
 * @param {...!Array<!NodeJS.ReadWriteStream>|!NodeJS.ReadWriteStream} streams
 * @return {?}
 */
function combine(streams) {}

/**
 * This is similar to es.wait but instead of buffering text into one string
 * it buffers anything into an array (so very useful for file objects).
 * @param {?=} cb
 * @return {!NodeJS.ReadWriteStream}
 */
function buffer(cb) {}

/**
 * @constructor
 * @struct
 * @param {?|string=} options_or_pluginName
 * @param {?|string|!Error=} options_or_message
 * @param {?=} options
 */
function PluginError(options_or_pluginName, options_or_message, options) {}
 /** @type {string} */
PluginError.prototype.name;
 /** @type {?} */
PluginError.prototype.message;
 /** @type {string} */
PluginError.prototype.fileName;
 /** @type {number} */
PluginError.prototype.lineNumber;
 /** @type {string} */
PluginError.prototype.stack;
 /** @type {boolean} */
PluginError.prototype.showStack;
 /** @type {boolean} */
PluginError.prototype.showProperties;
 /** @type {string} */
PluginError.prototype.plugin;
 /** @type {!Error} */
PluginError.prototype.error;
/**
 * @record
 * @struct
 */
function PluginErrorOptions() {}
 /** @type {string} */
PluginErrorOptions.prototype.name;
 /** @type {?} */
PluginErrorOptions.prototype.message;
 /** @type {string} */
PluginErrorOptions.prototype.fileName;
 /** @type {number} */
PluginErrorOptions.prototype.lineNumber;
 /** @type {string} */
PluginErrorOptions.prototype.stack;
 /** @type {boolean} */
PluginErrorOptions.prototype.showStack;
 /** @type {boolean} */
PluginErrorOptions.prototype.showProperties;
 /** @type {string} */
PluginErrorOptions.prototype.plugin;
 /** @type {!Error} */
PluginErrorOptions.prototype.error;
