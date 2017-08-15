/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/cordova-plugin-badge/index.d.ts:
/**
 * @record
 * @struct
 */
function CordovaPlugins() {}
 /** @type {{badge: !CordovaPluginBadge}} */
CordovaPlugins.prototype.notification;
/**
 * @record
 * @struct
 */
function CordovaPluginBadgeOptions() {}
 /** @type {boolean} */
CordovaPluginBadgeOptions.prototype.autoClear;
/**
 * @record
 * @struct
 */
function CordovaPluginBadge() {}

/**
 * @param {function(number): void=} callback
 * @param {?=} scope
 * @return {void}
 */
CordovaPluginBadge.prototype.clear = function(callback, scope) {};

/**
 * @param {number=} badge
 * @param {function(number): void=} callback
 * @param {?=} scope
 * @return {void}
 */
CordovaPluginBadge.prototype.set = function(badge, callback, scope) {};

/**
 * @param {function(number): void=} callback
 * @param {?=} scope
 * @return {void}
 */
CordovaPluginBadge.prototype.get = function(callback, scope) {};

/**
 * @param {number=} count
 * @param {function(number): void=} callback
 * @param {?=} scope
 * @return {void}
 */
CordovaPluginBadge.prototype.increase = function(count, callback, scope) {};

/**
 * @param {number=} count
 * @param {function(number): void=} callback
 * @param {?=} scope
 * @return {void}
 */
CordovaPluginBadge.prototype.decrease = function(count, callback, scope) {};

/**
 * @param {function(boolean): void=} callback
 * @param {?=} scope
 * @return {void}
 */
CordovaPluginBadge.prototype.hasPermission = function(callback, scope) {};

/**
 * @param {function(boolean): void=} callback
 * @param {?=} scope
 * @return {void}
 */
CordovaPluginBadge.prototype.requestPermission = function(callback, scope) {};

/**
 * @param {!CordovaPluginBadgeOptions} config
 * @return {!CordovaPluginBadgeOptions}
 */
CordovaPluginBadge.prototype.configure = function(config) {};
