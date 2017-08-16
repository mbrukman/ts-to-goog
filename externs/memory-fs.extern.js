/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/memory-fs/index.d.ts:

/**
 * @constructor
 * @struct
 * @param {?=} data
 */
function MemoryFileSystem(data) {}
 /** @type {?} */
MemoryFileSystem.prototype.data;

/**
 * @param {string} _path
 * @return {?}
 */
MemoryFileSystem.prototype.meta = function(_path) {};

/**
 * @param {string} _path
 * @return {boolean}
 */
MemoryFileSystem.prototype.existsSync = function(_path) {};

/**
 * @param {string} _path
 * @return {{isFile: function(): boolean, isDirectory: function(): boolean, isBlockDevice: function(): boolean, isCharacterDevice: function(): boolean, isSymbolicLink: function(): boolean, isFIFO: function(): boolean, isSocket: function(): boolean}}
 */
MemoryFileSystem.prototype.statSync = function(_path) {};

/**
 * @param {string} _path
 * @param {string=} encoding
 * @return {?}
 */
MemoryFileSystem.prototype.readFileSync = function(_path, encoding) {};

/**
 * @param {string} _path
 * @return {!Array<string>}
 */
MemoryFileSystem.prototype.readdirSync = function(_path) {};

/**
 * @param {string} _path
 * @return {void}
 */
MemoryFileSystem.prototype.mkdirpSync = function(_path) {};

/**
 * @param {string} _path
 * @return {void}
 */
MemoryFileSystem.prototype.mkdirSync = function(_path) {};

/**
 * @param {string} _path
 * @param {string} name
 * @param {function(string): boolean} testFn
 * @return {void}
 */
MemoryFileSystem.prototype._remove = function(_path, name, testFn) {};

/**
 * @param {string} _path
 * @return {void}
 */
MemoryFileSystem.prototype.rmdirSync = function(_path) {};

/**
 * @param {string} _path
 * @return {void}
 */
MemoryFileSystem.prototype.unlinkSync = function(_path) {};

/**
 * @param {string} _path
 * @return {void}
 */
MemoryFileSystem.prototype.readlinkSync = function(_path) {};

/**
 * @param {string} _path
 * @param {(string|?)} content
 * @param {string=} encoding
 * @return {void}
 */
MemoryFileSystem.prototype.writeFileSync = function(_path, content, encoding) {};

/**
 * @param {string} path
 * @param {{start: number, end: number}} options
 * @return {?}
 */
MemoryFileSystem.prototype.createReadStream = function(path, options) {};

/**
 * @param {string} path
 * @param {?} options
 * @return {?}
 */
MemoryFileSystem.prototype.createWriteStream = function(path, options) {};

/**
 * @param {string} path
 * @param {function(boolean): ?} callback
 * @return {?}
 */
MemoryFileSystem.prototype.exists = function(path, callback) {};

/**
 * @param {string} path
 * @param {(string|?)} content
 * @param {function(!Error): ?|string} callback_or_encoding
 * @param {function(!Error): ?=} callback
 * @return {?}
 */
MemoryFileSystem.prototype.writeFile = function(path, content, callback_or_encoding, callback) {};

/**
 * @param {string} path
 * @param {string} request
 * @return {string}
 */
MemoryFileSystem.prototype.join = function(path, request) {};

/**
 * @param {string} path
 * @return {!Array<string>}
 */
MemoryFileSystem.prototype.pathToArray = function(path) {};

/**
 * @param {string} path
 * @return {string}
 */
MemoryFileSystem.prototype.normalize = function(path) {};

/**
 * @param {string} path
 * @param {function(!Error, ?): ?} callback
 * @return {void}
 */
MemoryFileSystem.prototype.stat = function(path, callback) {};

/**
 * @param {string} path
 * @param {function(!Error, ?): ?} callback
 * @return {void}
 */
MemoryFileSystem.prototype.readdir = function(path, callback) {};

/**
 * @param {string} path
 * @param {function(!Error, ?): ?} callback
 * @return {void}
 */
MemoryFileSystem.prototype.mkdirp = function(path, callback) {};

/**
 * @param {string} path
 * @param {function(!Error, ?): ?} callback
 * @return {void}
 */
MemoryFileSystem.prototype.rmdir = function(path, callback) {};

/**
 * @param {string} path
 * @param {function(!Error, ?): ?} callback
 * @return {void}
 */
MemoryFileSystem.prototype.unlink = function(path, callback) {};

/**
 * @param {string} path
 * @param {function(!Error, ?): ?} callback
 * @return {void}
 */
MemoryFileSystem.prototype.readlink = function(path, callback) {};

/**
 * @param {string} path
 * @param {!Object} optArg
 * @param {function(!Error, ?): ?} callback
 * @return {void}
 */
MemoryFileSystem.prototype.mkdir = function(path, optArg, callback) {};

/**
 * @param {string} path
 * @param {!Object} optArg
 * @param {function(!Error, ?): ?} callback
 * @return {void}
 */
MemoryFileSystem.prototype.readFile = function(path, optArg, callback) {};

/* TODO: ExportAssignment in  */
