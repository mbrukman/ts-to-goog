/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/nconf/index.d.ts:
 /** @type {number} */
var version;
 /** @type {?} */
var stores;
 /** @type {!Array<?>} */
var sources;

/**
 * @param {string} key
 * @param {?=} callback
 * @return {?}
 */
function clear(key, callback) {}

/**
 * @param {string} key
 * @param {?=} callback
 * @return {?}
 */
function get(key, callback) {}

/**
 * @param {string} key
 * @param {?} value
 * @param {?=} callback
 * @return {?}
 */
function merge(key, value, callback) {}

/**
 * @param {string} key
 * @param {?} value
 * @param {?=} callback
 * @return {?}
 */
function set(key, value, callback) {}

/**
 * @param {?=} callback
 * @return {?}
 */
function reset(callback) {}

/**
 * @param {?=} callback
 * @return {?}
 */
function load(callback) {}

/**
 * @param {?} data
 * @return {void}
 */
function mergeSources(data) {}

/**
 * @return {?}
 */
function loadSources() {}

/**
 * @param {?} value
 * @param {?=} callback
 * @return {?}
 */
function save(value, callback) {}

/**
 * @param {string} name
 * @param {?=} options
 * @return {!Provider}
 */
function add(name, options) {}

/**
 * @param {?=} options
 * @return {!Provider}
 */
function argv(options) {}

/**
 * @param {?=} options
 * @return {!Provider}
 */
function env(options) {}

/**
 * @param {string|?} name_or_options
 * @param {?|string=} options_or_filename
 * @return {!Provider}
 */
function file(name_or_options, options_or_filename) {}

/**
 * @param {string} name
 * @param {?=} options
 * @return {!Provider}
 */
function use(name, options) {}

/**
 * @param {?=} options
 * @return {!Provider}
 */
function defaults(options) {}

/**
 * @param {?=} options
 * @return {void}
 */
function init(options) {}

/**
 * @param {?=} options
 * @return {!Provider}
 */
function overrides(options) {}

/**
 * @param {string} name
 * @return {void}
 */
function remove(name) {}

/**
 * @param {!Array<string>} keys
 * @return {boolean}
 */
function required(keys) {}

/**
 * @param {string} name
 * @param {?} options
 * @return {?}
 */
function create(name, options) {}

/**
 * @param {...?} values
 * @return {string}
 */
function key(values) {}

/**
 * @param {?} key
 * @return {!Array<?>}
 */
function path(key) {}

/**
 * @param {?} files
 * @param {?=} callback
 * @return {void}
 */
function loadFiles(files, callback) {}

/**
 * @param {?} files
 * @param {?=} callback
 * @return {void}
 */
function loadFilesSync(files, callback) {}
/**
 * @record
 * @struct
 */
function IFormats() {}
 /** @type {?} */
IFormats.prototype.json;
 /** @type {?} */
IFormats.prototype.ini;
 /** @type {?} */
var formats;
/**
 * @record
 * @struct
 */
function IFormat() {}
 /** @type {?} */
IFormat.prototype.stringify;
 /** @type {?} */
IFormat.prototype.parse;
/**
 * @record
 * @struct
 */
function IOptions() {}

/* TODO: IndexSignature:  */
/**
 * @record
 * @struct
 */
function IFileOptions() {}
 /** @type {string} */
IFileOptions.prototype.type;
 /** @type {string} */
IFileOptions.prototype.file;
 /** @type {string} */
IFileOptions.prototype.dir;
 /** @type {boolean} */
IFileOptions.prototype.search;
 /** @type {?} */
IFileOptions.prototype.format;
 /** @type {number} */
IFileOptions.prototype.json_spacing;
/**
 * @record
 * @struct
 */
function ICallbackFunction() {}

/* TODO: CallSignature:  */

/**
 * @constructor
 * @struct
 * @param {?} options
 */
function Provider(options) {}
 /** @type {?} */
Provider.prototype.stores;
 /** @type {!Array<?>} */
Provider.prototype.sources;

/**
 * @param {string} key
 * @param {?=} callback
 * @return {?}
 */
Provider.prototype.clear = function(key, callback) {};

/**
 * @param {string} key
 * @param {?=} callback
 * @return {?}
 */
Provider.prototype.get = function(key, callback) {};

/**
 * @param {string} key
 * @param {?} value
 * @param {?=} callback
 * @return {?}
 */
Provider.prototype.merge = function(key, value, callback) {};

/**
 * @param {string} key
 * @param {?} value
 * @param {?=} callback
 * @return {?}
 */
Provider.prototype.set = function(key, value, callback) {};

/**
 * @param {?=} callback
 * @return {?}
 */
Provider.prototype.reset = function(callback) {};

/**
 * @param {?=} callback
 * @return {?}
 */
Provider.prototype.load = function(callback) {};

/**
 * @param {?} data
 * @return {void}
 */
Provider.prototype.mergeSources = function(data) {};

/**
 * @return {?}
 */
Provider.prototype.loadSources = function() {};

/**
 * @param {?} value
 * @param {?=} callback
 * @return {?}
 */
Provider.prototype.save = function(value, callback) {};

/**
 * @param {string} name
 * @param {?=} options
 * @return {!Provider}
 */
Provider.prototype.add = function(name, options) {};

/**
 * @param {?=} options
 * @return {!Provider}
 */
Provider.prototype.argv = function(options) {};

/**
 * @param {?=} options
 * @return {!Provider}
 */
Provider.prototype.env = function(options) {};

/**
 * @param {string|?} name_or_options
 * @param {?|string=} options_or_filename
 * @return {!Provider}
 */
Provider.prototype.file = function(name_or_options, options_or_filename) {};

/**
 * @param {string} name
 * @param {?=} options
 * @return {!Provider}
 */
Provider.prototype.use = function(name, options) {};

/**
 * @param {?=} options
 * @return {!Provider}
 */
Provider.prototype.defaults = function(options) {};

/**
 * @param {?=} options
 * @return {void}
 */
Provider.prototype.init = function(options) {};

/**
 * @param {?=} options
 * @return {!Provider}
 */
Provider.prototype.overrides = function(options) {};

/**
 * @param {string} name
 * @return {void}
 */
Provider.prototype.remove = function(name) {};

/**
 * @param {!Array<string>} keys
 * @return {boolean}
 */
Provider.prototype.required = function(keys) {};

/**
 * @param {string} name
 * @param {?} options
 * @return {?}
 */
Provider.prototype.create = function(name, options) {};
/**
 * @record
 * @struct
 */
function IStore() {}
 /** @type {string} */
IStore.prototype.type;

/**
 * @param {string} key
 * @return {?}
 */
IStore.prototype.get = function(key) {};

/**
 * @param {string} key
 * @param {?} value
 * @return {boolean}
 */
IStore.prototype.set = function(key, value) {};

/**
 * @param {string} key
 * @return {boolean}
 */
IStore.prototype.clear = function(key) {};

/**
 * @param {string} key
 * @param {?} value
 * @return {boolean}
 */
IStore.prototype.merge = function(key, value) {};

/**
 * @param {?=} callback
 * @return {boolean}
 */
IStore.prototype.reset = function(callback) {};
