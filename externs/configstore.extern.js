/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/configstore/index.d.ts:

/* TODO: ExportAssignment in  */

/**
 * @constructor
 * @struct
 * @param {string} packageName
 * @param {?=} defaults
 * @param {!Configstore.ConfigstoreOptions=} options
 */
function Configstore(packageName, defaults, options) {}
 /** @type {string} */
Configstore.prototype.path;
 /** @type {?} */
Configstore.prototype.all;
 /** @type {number} */
Configstore.prototype.size;

/**
 * Get an item
 * @param {string} key The string key to get
 * @return {?} The contents of the config from key $key
 */
Configstore.prototype.get = function(key) {};

/**
 * Set an item
 * Set all key/value pairs declared in $values
 * @param {string|?} key_or_values The string key / The values object.
 * @param {?=} val The value to set
 * @return {void}
 */
Configstore.prototype.set = function(key_or_values, val) {};

/**
 * Determines if a key is present in the config
 * @param {string} key The string key to test for
 * @return {boolean} True if the key is present
 */
Configstore.prototype.has = function(key) {};

/**
 * Delete an item.
 * @param {string} key The key to delete
 * @return {void}
 */
Configstore.prototype.delete = function(key) {};

/**
 * Clear the config.
 * Equivalent to <code>Configstore.all = {};</code>
 * @return {void}
 */
Configstore.prototype.clear = function() {};
/**
 * @record
 * @struct
 */
Configstore.ConfigstoreOptions = function() {};
 /** @type {boolean} */
Configstore.ConfigstoreOptions.prototype.globalConfigPath;
