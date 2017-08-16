/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/rx-lite-async/index.d.ts:

/**
 * Invokes the asynchronous function, surfacing the result through an observable sequence.
 * @template T
 * @param {function(): !Rx.IPromise<T>} functionAsync Asynchronous function which returns a Promise to run.
 * @return {?<T>} An observable sequence exposing the function's result value, or an exception.
 */
Rx.ObservableStatic.prototype.startAsync = function(functionAsync) {};

/**
 * @template T
 * @param {function(): T} func
 * @param {?=} context
 * @param {!Rx.IScheduler=} scheduler
 * @return {?<T>}
 */
Rx.ObservableStatic.prototype.start = function(func, context, scheduler) {};

/**
 * @template TResult, T1, T2, T3, T4
 * @param {function(): TResult|function(T1): TResult|function(!Array<T1>): TResult|function(T1, T2): TResult|function(T1, !Array<T2>): TResult|function(T1, T2, T3): TResult|function(T1, T2, !Array<T3>): TResult|function(T1, T2, T3, T4): TResult|function(T1, T2, T3, !Array<T4>): TResult} func
 * @param {?=} context
 * @param {!Rx.IScheduler=} scheduler
 * @return {function(): ?<TResult>|function(T1): ?<TResult>|function(!Array<T1>): ?<TResult>|function(T1, T2): ?<TResult>|function(T1, !Array<T2>): ?<TResult>|function(T1, T2, T3): ?<TResult>|function(T1, T2, !Array<T3>): ?<TResult>|function(T1, T2, T3, T4): ?<TResult>|function(T1, T2, T3, !Array<T4>): ?<TResult>}
 */
Rx.ObservableStatic.prototype.toAsync = function(func, context, scheduler) {};
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "rx-lite-async"
/** @const */
tsickle_declare_module.rx_lite_async = {};

/* TODO: ExportAssignment in tsickle_declare_module.rx_lite_async */
