/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/require-directory/index.d.ts:
/** @const */
var requireDirectory = {};

/** @typedef {function(string): boolean} */
requireDirectory.CheckPathFn;
/**
 * @record
 * @struct
 */
requireDirectory.RequireDirectoryResult = function() {};

/* TODO: IndexSignature: requireDirectory */
/**
 * @record
 * @struct
 */
requireDirectory.RequireDirectoryOptions = function() {};
 /** @type {!Array<string>} */
requireDirectory.RequireDirectoryOptions.prototype.extensions;
 /** @type {boolean} */
requireDirectory.RequireDirectoryOptions.prototype.recurse;
 /** @type {(!RegExp|function(string): boolean)} */
requireDirectory.RequireDirectoryOptions.prototype.include;
 /** @type {(!RegExp|function(string): boolean)} */
requireDirectory.RequireDirectoryOptions.prototype.exclude;

/**
 * \@description function for renaming modules in resulting hash
 * \@default "change nothing"
 * @param {string} name name of required module
 * @return {string} transformed name of module
 */
requireDirectory.RequireDirectoryOptions.prototype.rename = function(name) {};

/**
 * \@description function that will be called for each required module
 * \@default "change nothing"
 * @param {T} obj required module
 * @return {(void|U)} transformed module OR nothing (in second case module itself will be added to hash)
 */
requireDirectory.RequireDirectoryOptions.prototype.visit = function(obj) {};
 /** @type {!requireDirectory.RequireDirectoryOptions<?, ?>} */
requireDirectory.defaults;

/**
 * \@description function for requiring directory content as hash of modules
 * @template T, U
 * @param {!NodeModule} m module for which has will be created
 * @param {(string|!requireDirectory.RequireDirectoryOptions<T, U>)=} path path to directory, if you want to build hash for another one (default to __dirname)
 * @param {!requireDirectory.RequireDirectoryOptions<T, U>=} options object with options for require-directory call
 * @return {!requireDirectory.RequireDirectoryResult<U>} hash of modules in specified directory
 */
function requireDirectory(m, path, options) {}

/* TODO: ExportAssignment in  */
