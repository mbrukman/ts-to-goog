/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/knockout.deferred.updates/index.d.ts:
/**
 * @record
 * @struct
 */
function KnockoutDeferredTasks() {}

/**
 * @param {!Function} evaluator
 * @param {?=} object
 * @param {!Array<?>=} args
 * @return {?}
 */
KnockoutDeferredTasks.prototype.processImmediate = function(evaluator, object, args) {};

/**
 * @param {!Function} evaluator
 * @param {boolean=} distinct
 * @param {!Array<?>=} options
 * @return {boolean}
 */
KnockoutDeferredTasks.prototype.processDelayed = function(evaluator, distinct, options) {};

/**
 * @param {!Function} evaluator
 * @return {void}
 */
KnockoutDeferredTasks.prototype.makeProcessedCallback = function(evaluator) {};

/**
 * @return {void}
 */
KnockoutStatic.prototype.processAllDeferredBindingUpdates = function() {};

/**
 * @return {void}
 */
KnockoutStatic.prototype.processAllDeferredUpdates = function() {};

/**
 * @param {!Function} evaluator
 * @param {?=} timeout
 * @return {number}
 */
KnockoutStatic.prototype.evaluateAsynchronously = function(evaluator, timeout) {};

/**
 * @param {!Function} callback
 * @param {?} callbackTarget
 * @param {!Array<?>=} callbackArgs
 * @return {?}
 */
KnockoutStatic.prototype.ignoreDependencies = function(callback, callbackTarget, callbackArgs) {};
 /** @type {boolean} */
KnockoutSubscribableFunctions.prototype.deferUpdates;
 /** @type {boolean} */
KnockoutComputedStatic.prototype.deferUpdates;
 /** @type {boolean} */
KnockoutSubscription.prototype.deferUpdates;

/**
 * @param {?} obj
 * @param {!Function} action
 * @return {void}
 */
KnockoutUtils.prototype.objectForEach = function(obj, action) {};

/**
 * @param {?} source
 * @param {!Function} mapping
 * @return {?}
 */
KnockoutUtils.prototype.objectMap = function(source, mapping) {};

/**
 * @param {?} target
 * @param {boolean} value
 * @return {?}
 */
KnockoutExtenders.prototype.deferred = function(target, value) {};
