/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/rx-lite-virtualtime/index.d.ts:
/**
 * @record
 * @struct
 */
Rx.VirtualTimeScheduler = function() {};
 /** @type {boolean} */
Rx.VirtualTimeScheduler.prototype.isEnabled;

/**
 * @param {TRelative} time
 * @return {void}
 */
Rx.VirtualTimeScheduler.prototype.advanceBy = function(time) {};

/**
 * @param {TAbsolute} time
 * @return {void}
 */
Rx.VirtualTimeScheduler.prototype.advanceTo = function(time) {};

/**
 * @param {TAbsolute} dueTime
 * @param {function(): void} action
 * @return {!Rx.IDisposable}
 */
Rx.VirtualTimeScheduler.prototype.scheduleAbsolute = function(dueTime, action) {};

/**
 * @template TState
 * @param {TState} state
 * @param {TAbsolute} dueTime
 * @param {function(!Rx.IScheduler, TState): !Rx.IDisposable} action
 * @return {!Rx.IDisposable}
 */
Rx.VirtualTimeScheduler.prototype.scheduleAbsoluteWithState = function(state, dueTime, action) {};

/**
 * @param {TRelative} dueTime
 * @param {function(): void} action
 * @return {!Rx.IDisposable}
 */
Rx.VirtualTimeScheduler.prototype.scheduleRelative = function(dueTime, action) {};

/**
 * @template TState
 * @param {TState} state
 * @param {TRelative} dueTime
 * @param {function(!Rx.IScheduler, TState): !Rx.IDisposable} action
 * @return {!Rx.IDisposable}
 */
Rx.VirtualTimeScheduler.prototype.scheduleRelativeWithState = function(state, dueTime, action) {};

/**
 * @param {TRelative} time
 * @return {void}
 */
Rx.VirtualTimeScheduler.prototype.sleep = function(time) {};

/**
 * @return {!Rx.IDisposable}
 */
Rx.VirtualTimeScheduler.prototype.start = function() {};

/**
 * @return {void}
 */
Rx.VirtualTimeScheduler.prototype.stop = function() {};

/**
 * @param {TAbsolute} from
 * @param {TRelative} by
 * @return {TAbsolute}
 */
Rx.VirtualTimeScheduler.prototype.add = function(from, by) {};

/**
 * @param {TAbsolute} duetime
 * @return {number}
 */
Rx.VirtualTimeScheduler.prototype.toDateTimeOffset = function(duetime) {};

/**
 * @param {number} duetime
 * @return {TRelative}
 */
Rx.VirtualTimeScheduler.prototype.toRelative = function(duetime) {};

/**
 * @return {!Rx.internals.ScheduledItem<TAbsolute>}
 */
Rx.VirtualTimeScheduler.prototype.getNext = function() {};
/**
 * @extends {Rx.VirtualTimeScheduler}
 * @record
 * @struct
 */
Rx.HistoricalScheduler = function() {};
 /** @type {function(new: (?), number, function(number, number): number): ?} */
Rx.HistoricalScheduler;
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "rx-lite-virtualtime"
/** @const */
tsickle_declare_module.rx_lite_virtualtime = {};

/* TODO: ExportAssignment in tsickle_declare_module.rx_lite_virtualtime */
