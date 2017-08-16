/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/event-to-promise/index.d.ts:

/* TODO: ImportDeclaration in  */

/** @typedef {(!internal.EventEmitter|!EventTarget)} */
var EventSource;
/**
 * @record
 * @struct
 */
function EventToPromiseOptions() {}
 /** @type {boolean} */
EventToPromiseOptions.prototype.array;
 /** @type {string} */
EventToPromiseOptions.prototype.error;
 /** @type {boolean} */
EventToPromiseOptions.prototype.ignoreErrors;

/**
 * Wait for one event. The first parameter of the emitted event is used to resolve/reject the promise.
 * 
 * @param {(!internal.EventEmitter|!EventTarget)} emitter  The event emitter you want to watch an event on.
 * @param {string} event    The name of the event you want to watch.
 * @param {?=} options  An `Object` controlling advanced options.
 * @return {!Promise<?>} The returned promise has a `cancel()` method which can be used to remove the event listeners. Note that the promise will never settled if canceled.
 */
function eventToPromise(emitter, event, options) {}

/**
 * Wait for one of multiple events. The array of all the parameters of the emitted event is used to resolve/reject the promise.
 * 
 * The array also has an event property indicating which event has been emitted.
 * 
 * @param {(!internal.EventEmitter|!EventTarget)} emitter        The event emitter you want to watch an event on.
 * @param {!Array<string>} successEvents  The names of the events which resolve the promise.
 * @param {!Array<string>=} errorEvents    The names of the events which reject the promise. (default: `['error']`)
 * @return {!Promise<?>} The returned promise has a `cancel()` method which can be used to remove the event listeners. Note that the promise will never settled if canceled.
 */
eventToPromise.multi = function(emitter, successEvents, errorEvents) {};

/* TODO: ExportAssignment in  */
