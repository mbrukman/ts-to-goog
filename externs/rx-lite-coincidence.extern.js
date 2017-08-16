/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/rx-lite-coincidence/index.d.ts:

/**
 * @template TRight, TDurationLeft, TDurationRight, TResult
 * @param {?<TRight>} right
 * @param {function(T): ?<TDurationLeft>} leftDurationSelector
 * @param {function(TRight): ?<TDurationRight>} rightDurationSelector
 * @param {function(T, TRight): TResult} resultSelector
 * @return {?<TResult>}
 */
Rx.Observable.prototype.join = function(right, leftDurationSelector, rightDurationSelector, resultSelector) {};

/**
 * @template TRight, TDurationLeft, TDurationRight, TResult
 * @param {?<TRight>} right
 * @param {function(T): ?<TDurationLeft>} leftDurationSelector
 * @param {function(TRight): ?<TDurationRight>} rightDurationSelector
 * @param {function(T, ?<TRight>): TResult} resultSelector
 * @return {?<TResult>}
 */
Rx.Observable.prototype.groupJoin = function(right, leftDurationSelector, rightDurationSelector, resultSelector) {};

/**
 * @template TWindowOpening, TWindowClosing
 * @param {?<TWindowOpening>|function(): ?<TWindowClosing>} windowOpenings_or_windowClosingSelector
 * @param {function(): ?<TWindowClosing>=} windowClosingSelector
 * @return {?<?>}
 */
Rx.Observable.prototype.window = function(windowOpenings_or_windowClosingSelector, windowClosingSelector) {};

/**
 * @template TBufferOpening, TBufferClosing
 * @param {?<TBufferOpening>|function(): ?<TBufferClosing>} bufferOpenings_or_bufferClosingSelector
 * @param {function(): ?<TBufferClosing>=} bufferClosingSelector
 * @return {?<!Array<T>>}
 */
Rx.Observable.prototype.buffer = function(bufferOpenings_or_bufferClosingSelector, bufferClosingSelector) {};

/**
 * Returns a new observable that triggers on the second and subsequent triggerings of the input observable.
 * The Nth triggering of the input observable passes the arguments from the N-1th and Nth triggering as a pair.
 * The argument passed to the N-1th triggering is held in hidden internal state until the Nth triggering occurs.
 * @return {?<!Array<T>>} An observable that triggers on successive pairs of observations from the input observable as an array.
 */
Rx.Observable.prototype.pairwise = function() {};

/**
 * Returns two observables which partition the observations of the source by the given function.
 * The first will trigger observations for those values for which the predicate returns true.
 * The second will trigger observations for those values where the predicate returns false.
 * The predicate is executed once for each subscribed observer.
 * Both also propagate all error observations arising from the source and each completes
 * when the source completes.
 * @param {function(T, number, ?): boolean} predicate 
 *    The function to determine which output Observable will trigger a particular observation.
 * @param {?=} thisArg
 * @return {!Array<?>} 
 *    An array of observables. The first triggers when the predicate returns true,
 *    and the second triggers when the predicate returns false.
 */
Rx.Observable.prototype.partition = function(predicate, thisArg) {};
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "rx-lite-coincidence"
/** @const */
tsickle_declare_module.rx_lite_coincidence = {};

/* TODO: ExportAssignment in tsickle_declare_module.rx_lite_coincidence */