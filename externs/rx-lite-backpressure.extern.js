/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/rx-lite-backpressure/index.d.ts:

/**
 * Pauses the underlying observable sequence based upon the observable sequence which yields true/false.
 * \@example 
 * var pauser = new Rx.Subject();
 * var source = Rx.Observable.interval(100).pausable(pauser);
 * @param {?<boolean>=} pauser The observable sequence used to pause the underlying sequence.
 * @return {!Rx.PausableObservable<T>} The observable sequence which is paused based upon the pauser.
 */
Rx.Observable.prototype.pausable = function(pauser) {};

/**
 * Pauses the underlying observable sequence based upon the observable sequence which yields true/false,
 * and yields the values that were buffered while paused.
 * \@example 
 * var pauser = new Rx.Subject();
 * var source = Rx.Observable.interval(100).pausableBuffered(pauser);
 * @param {?<boolean>=} pauser The observable sequence used to pause the underlying sequence.
 * @return {!Rx.PausableObservable<T>} The observable sequence which is paused based upon the pauser.
 */
Rx.Observable.prototype.pausableBuffered = function(pauser) {};

/**
 * Attaches a controller to the observable sequence with the ability to queue.
 * \@example 
 * var source = Rx.Observable.interval(100).controlled();
 * source.request(3); // Reads 3 values
 * @param {boolean=} enableQueue
 * @return {!Rx.ControlledObservable<T>}
 */
Rx.Observable.prototype.controlled = function(enableQueue) {};
/**
 * @record
 * @struct
 */
Rx.ControlledObservable = function() {};

/**
 * @param {number=} numberOfItems
 * @return {!Rx.IDisposable}
 */
Rx.ControlledObservable.prototype.request = function(numberOfItems) {};
/**
 * @record
 * @struct
 */
Rx.PausableObservable = function() {};

/**
 * @return {void}
 */
Rx.PausableObservable.prototype.pause = function() {};

/**
 * @return {void}
 */
Rx.PausableObservable.prototype.resume = function() {};
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "rx-lite-backpressure"
/** @const */
tsickle_declare_module.rx_lite_backpressure = {};

/* TODO: ExportAssignment in tsickle_declare_module.rx_lite_backpressure */
