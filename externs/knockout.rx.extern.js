/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/knockout.rx/index.d.ts:

/**
 * @template TEvent
 * @param {string=} event
 * @return {?<T>|?<TEvent>}
 */
KnockoutSubscribableFunctions.prototype.toObservable = function(event) {};

/**
 * @return {?<T>}
 */
KnockoutObservableFunctions.prototype.toObservableWithReplyLatest = function() {};

/**
 * @return {!Rx.ISubject<T>}
 */
KnockoutObservableFunctions.prototype.toSubject = function() {};

/**
 * @return {?<T>}
 */
KnockoutComputedFunctions.prototype.toObservableWithReplyLatest = function() {};

/**
 * @return {!KnockoutSubscribable<T>}
 */
Rx.Observable.prototype.toKoSubscribable = function() {};

/**
 * @param {T=} initialValue
 * @return {!KnockoutObservable<T>}
 */
Rx.Observable.prototype.toKoObservable = function(initialValue) {};

/**
 * @param {T=} initialValue
 * @return {!KnockoutObservable<T>}
 */
Rx.Subject.prototype.toKoObservable = function(initialValue) {};
