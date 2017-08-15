/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/component-emitter/index.d.ts:
/**
 * @record
 * @struct
 */
function Emitter() {}

/**
 * @param {string} event
 * @param {!Function} listener
 * @return {?}
 */
Emitter.prototype.on = function(event, listener) {};

/**
 * @param {string} event
 * @param {!Function} listener
 * @return {?}
 */
Emitter.prototype.once = function(event, listener) {};

/**
 * @param {string=} event
 * @param {!Function=} listener
 * @return {?}
 */
Emitter.prototype.off = function(event, listener) {};

/**
 * @param {string} event
 * @param {...?} args
 * @return {boolean}
 */
Emitter.prototype.emit = function(event, args) {};

/**
 * @param {string} event
 * @return {!Array<!Function>}
 */
Emitter.prototype.listeners = function(event) {};

/**
 * @param {string} event
 * @return {boolean}
 */
Emitter.prototype.hasListeners = function(event) {};
 /** @type {function(new: (?), ?): ?} */
var constructor;

/* TODO: ExportAssignment in  */