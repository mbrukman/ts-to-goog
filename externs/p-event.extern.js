/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/p-event/index.d.ts:

/* TODO: ExportAssignment in  */

/**
 * @template T, TRest
 * @param {!pEvent.Emitter<T, TRest>|!pEvent.Emitter<T, T>} emitter
 * @param {(string|symbol)} event
 * @param {?|!pEvent.Options<T>=} options_or_filter
 * @return {!Promise<!Array<(T|TRest)>>|!Promise<T>}
 */
function pEvent(emitter, event, options_or_filter) {}
/**
 * @record
 * @struct
 */
pEvent.Emitter = function() {};
 /** @type {?} */
pEvent.Emitter.prototype.on;
 /** @type {?} */
pEvent.Emitter.prototype.addListener;
 /** @type {?} */
pEvent.Emitter.prototype.addEventListener;
 /** @type {?} */
pEvent.Emitter.prototype.off;
 /** @type {?} */
pEvent.Emitter.prototype.removeListener;
 /** @type {?} */
pEvent.Emitter.prototype.removeEventListener;
/**
 * @record
 * @struct
 */
pEvent.Options = function() {};
 /** @type {!Array<string>} */
pEvent.Options.prototype.rejectionEvents;
 /** @type {boolean} */
pEvent.Options.prototype.multiArgs;
 /** @type {number} */
pEvent.Options.prototype.timeout;
 /** @type {?} */
pEvent.Options.prototype.filter;

/** @typedef {?} */
var AddRmListenerFn;

/** @typedef {?} */
var FilterFn;
/**
 * @extends {pEvent.Options}
 * @record
 * @struct
 */
function MultiArgsOptions() {}
 /** @type {boolean} */
MultiArgsOptions.prototype.multiArgs;
