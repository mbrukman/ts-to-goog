/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/electron-config/index.d.ts:
/**
 * @record
 * @struct
 */
function ElectronConfigOptions() {}
 /** @type {!Object} */
ElectronConfigOptions.prototype.defaults;
 /** @type {string} */
ElectronConfigOptions.prototype.name;

/**
 * @constructor
 * @struct
 * @param {?=} options
 */
function ElectronConfig(options) {}
 /** @type {number} */
ElectronConfig.prototype.size;
 /** @type {!Object} */
ElectronConfig.prototype.store;
 /** @type {string} */
ElectronConfig.prototype.path;

/**
 * Sets an item
 * Sets multiple items at once
 * @param {string|!Object} key_or_object
 * @param {?=} value
 * @return {void}
 */
ElectronConfig.prototype.set = function(key_or_object, value) {};

/**
 * deletes an item
 * @param {string} key
 * @return {void}
 */
ElectronConfig.prototype.delete = function(key) {};

/**
 * retrieves an item
 * @param {string} key
 * @return {?}
 */
ElectronConfig.prototype.get = function(key) {};

/**
 * Checks if an item exists
 * @param {string} key
 * @return {boolean}
 */
ElectronConfig.prototype.has = function(key) {};

/**
 * deletes all items
 * @return {void}
 */
ElectronConfig.prototype.clear = function() {};

/**
 * @return {!Iterator<!Array<?>>}
 */
ElectronConfig.prototype[Symbol.iterator] = function() {};

/* TODO: ExportAssignment in  */