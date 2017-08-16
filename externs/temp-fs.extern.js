/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/temp-fs/index.d.ts:

/* TODO: ExportAssignment in  */
/** @const */
var tempfs = {};
/**
 * @record
 * @struct
 */
tempfs.dir = function() {};
 /** @type {!String} */
tempfs.dir.prototype.path;
 /** @type {!Boolean} */
tempfs.dir.prototype.recursive;

/**
 * A special function for you to remove the directory.
 * 
 * If the directory is not tracked, it may throw when an error occurs or
 * the first argument of the callback function will be an Error object.
 * 
 * @param {function(!Error): ?=} callback makes it asynchronous.
 * @return {?}
 */
tempfs.dir.prototype.unlink = function(callback) {};
/**
 * @record
 * @struct
 */
tempfs.file = function() {};
 /** @type {!String} */
tempfs.file.prototype.path;
 /** @type {!Number} */
tempfs.file.prototype.fd;

/**
 * A special function for you to delete the file.
 * 
 * If the file is not tracked, it may throw when an error occurs or the
 * first argument of the callback function will be an Error object.
 * 
 * @param {function(!Error): ?=} callback makes it asynchronous.
 * @return {?}
 */
tempfs.file.prototype.unlink = function(callback) {};
/**
 * @record
 * @struct
 */
tempfs.options = function() {};
 /** @type {!String} */
tempfs.options.prototype.dir;
 /** @type {!Number} */
tempfs.options.prototype.limit;
 /** @type {!Number} */
tempfs.options.prototype.mode;
 /** @type {!String} */
tempfs.options.prototype.name;
 /** @type {!String} */
tempfs.options.prototype.prefix;
 /** @type {!Boolean} */
tempfs.options.prototype.recursive;
 /** @type {!String} */
tempfs.options.prototype.suffix;
 /** @type {!String} */
tempfs.options.prototype.template;
 /** @type {!Boolean} */
tempfs.options.prototype.track;

/**
 * Remove all tracked files and directories asynchronously.
 * @param {function(): ?=} callback
 * @return {?}
 */
tempfs.clear = function(callback) {};

/**
 * Remove all tracked files and directories synchronously.
 * @return {?}
 */
tempfs.clearSync = function() {};

/**
 * Return the path of a system-provided tempdir as
 * <code>require('os').tmpdir()</code> does.
 * 
 * You should not make any assumption about whether the path contains a
 * trailing path separator, or it is a real path. On most system it is not a
 * fixed path, and it can be changed by the user environment. When in doubt,
 * check it first.
 * @return {string}
 */
tempfs.dir = function() {};

/**
 * Try to create a new tempdir asynchronously.
 * 
 * @param {!tempfs.options=} options
 * @param {function(?, ?): ?=} callback function receives two arguments <code>error</code> and
 *                 <code>dir</code>. If <code>error</code> is
 *                 <code>null</code>, <code>dir</code> has the properties of
 *                 {\@link dir}.
 * @return {?}
 */
tempfs.mkdir = function(options, callback) {};

/**
 * The synchronous version of {\@link mkdir}.
 * 
 * @throws when an error happens.
 * @param {!tempfs.options=} options
 * @return {?}
 */
tempfs.mkdirSync = function(options) {};

/**
 * Return a customized/random filename/dirname.
 * @param {!tempfs.options=} options
 * @return {string}
 */
tempfs.name = function(options) {};

/**
 * Try to open a unique tempfile asynchronously.
 * 
 * @param {!tempfs.options=} options
 * @param {function(?, !tempfs.file): ?=} callback function receives two arguments <code>error</code> and
 *                 <code>file</code>. If <code>error</code> is
 *                 <code>null</code>, <code>file</code> has the properties
 *                 of {\@link file}.
 * @return {?}
 */
tempfs.open = function(options, callback) {};

/**
 * The synchronous version of {\@link open}.
 * 
 * @throws when an error happens.
 * @param {!tempfs.options=} options
 * @return {!tempfs.file}
 */
tempfs.openSync = function(options) {};

/**
 * Use it to switch global files/directories tracking on or off.
 * 
 * Turn it on if you don't want to manually delete everything. When it is
 * turned off, all recorded files and directories will not be removed but
 * still kept in case it is turned on again before the program exits.
 * 
 * This switch does not affect manually tracked files through
 * {\@link options#track}. They will be removed automatically on exit.
 * 
 * <b>Note: When an uncaught exception occurs, all tracked temporary files
 * and directories will be removed no matter it is on or off.</b>
 * @param {!Boolean=} on
 * @return {void}
 */
tempfs.track = function(on) {};
