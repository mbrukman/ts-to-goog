/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/fbemitter/index.d.ts:
/**
 * @constructor
 * @struct
 */
function EventSubscription() {}
 /** @type {!Function} */
EventSubscription.prototype.listener;
 /** @type {?} */
EventSubscription.prototype.context;

/**
 * Removes this subscription from the subscriber that controls it.
 * @return {void}
 */
EventSubscription.prototype.remove = function() {};

/**
 * @constructor
 * @struct
 */
function EventEmitter() {}

/**
 * Adds a listener to be invoked when events of the specified type are
 * emitted. An optional calling context may be provided. The data arguments
 * emitted will be passed to the listener function.
 * @param {string} eventType
 * @param {!Function} listener
 * @param {?=} context
 * @return {!EventSubscription}
 */
EventEmitter.prototype.addListener = function(eventType, listener, context) {};

/**
 * Similar to addListener, except that the listener is removed after it is
 * invoked once.
 * @param {string} eventType
 * @param {!Function} listener
 * @param {?=} context
 * @return {!EventSubscription}
 */
EventEmitter.prototype.once = function(eventType, listener, context) {};

/**
 * Removes all of the registered listeners, including those registered as
 * listener maps.
 * @param {string=} eventType
 * @return {void}
 */
EventEmitter.prototype.removeAllListeners = function(eventType) {};

/**
 * Provides an API that can be called during an eventing cycle to remove the
 * last listener that was invoked. This allows a developer to provide an event
 * object that can remove the listener (or listener map) during the
 * invocation.
 * 
 * If it is called when not inside of an emitting cycle it will throw.
 * @return {void}
 */
EventEmitter.prototype.removeCurrentListener = function() {};

/**
 * Returns an array of listeners that are currently registered for the given
 * event.
 * @param {string} eventType
 * @return {!Array<!Function>}
 */
EventEmitter.prototype.listeners = function(eventType) {};

/**
 * Emits an event of the given type with the given data. All handlers of that
 * particular type will be notified.
 * @param {string} eventType
 * @param {...?} data
 * @return {void}
 */
EventEmitter.prototype.emit = function(eventType, data) {};