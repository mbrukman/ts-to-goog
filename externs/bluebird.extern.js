/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/bluebird/index.d.ts:

/**
 * @constructor
 * @struct
 * Create a new promise. The passed in function will receive functions `resolve` and `reject` as its arguments which can be called to seal the fate of the created promise.
 * If promise cancellation is enabled, passed in function will receive one more function argument `onCancel` that allows to register an optional cancellation callback.
 * @param {function(function((R|!PromiseLike<R>)): void, function(?): void, function(function(): void): void): void} callback
 */
function Bluebird(callback) {}
 /** @type {string} */
Bluebird.version;

/**
 * @template U, TResult1, TResult2
 * @param {function(R): (U|!PromiseLike<U>)|function(R): (TResult1|!PromiseLike<TResult1>)=} onFulfill_or_onfulfilled
 * @param {function(?): (U|!PromiseLike<U>)|function(?): (TResult2|!PromiseLike<TResult2>)=} onReject_or_onrejected
 * @return {!Bluebird<U>|!Bluebird<(TResult1|TResult2)>}
 */
Bluebird.prototype.then = function(onFulfill_or_onfulfilled, onReject_or_onrejected) {};

/**
 * This is a catch-all exception handler, shortcut for calling `.then(null, handler)` on this promise. Any exception happening in a `.then`-chain will propagate to nearest `.catch` handler.
 * 
 * Alias `.caught();` for compatibility with earlier ECMAScript version.
 * This extends `.catch` to work more like catch-clauses in languages like Java or C#. Instead of manually checking `instanceof` or `.name === "SomeError"`, you may specify a number of error constructors which are eligible for this catch handler. The catch handler that is first met that has eligible constructors specified, is the one that will be called.
 * 
 * This method also supports predicate-based filters. If you pass a predicate function instead of an error constructor, the predicate will receive the error as an argument. The return result of the predicate will be used determine whether the error handler should be called.
 * 
 * Alias `.caught();` for compatibility with earlier ECMAScript version.
 * 
 * TODO: disallow non-objects
 * @template U, E1, E2, E3, E4, E5
 * @param {function(?): (void|R|!PromiseLike<R>|!PromiseLike<void>)|function(?): (U|!PromiseLike<U>)|function(new: (E1), !Array<?>): ?|(function(E1): boolean|?)=} onReject_or_filter1
 * @param {function(new: (E2), !Array<?>): ?|(function(E2): boolean|?)|function(E1): (void|R|!PromiseLike<R>|!PromiseLike<void>)|function(E1): (U|!PromiseLike<U>)=} filter2_or_onReject
 * @param {function(new: (E3), !Array<?>): ?|(function(E3): boolean|?)|function((E1|E2)): (void|R|!PromiseLike<R>|!PromiseLike<void>)|function((E1|E2)): (U|!PromiseLike<U>)=} filter3_or_onReject
 * @param {function(new: (E4), !Array<?>): ?|(function(E4): boolean|?)|function((E1|E2|E3)): (void|R|!PromiseLike<R>|!PromiseLike<void>)|function((E1|E2|E3)): (U|!PromiseLike<U>)=} filter4_or_onReject
 * @param {function(new: (E5), !Array<?>): ?|(function(E5): boolean|?)|function((E1|E2|E3|E4)): (void|R|!PromiseLike<R>|!PromiseLike<void>)|function((E1|E2|E3|E4)): (U|!PromiseLike<U>)=} filter5_or_onReject
 * @param {function((E1|E2|E3|E4|E5)): (void|R|!PromiseLike<R>|!PromiseLike<void>)|function((E1|E2|E3|E4|E5)): (void|!PromiseLike<void>|U|!PromiseLike<U>)|function((E1|E2|E3|E4|E5)): (U|!PromiseLike<U>)=} onReject
 * @return {!Bluebird|!Bluebird<(R|U)>}
 */
Bluebird.prototype.catch = function(onReject_or_filter1, filter2_or_onReject, filter3_or_onReject, filter4_or_onReject, filter5_or_onReject, onReject) {};

/**
 * @template U, E1, E2, E3, E4, E5
 * @param {function(?): (void|R|!PromiseLike<R>|!PromiseLike<void>)|function(?): (U|!PromiseLike<U>)|function(new: (E1), !Array<?>): ?|(function(E1): boolean|?)=} onReject_or_filter1
 * @param {function(new: (E2), !Array<?>): ?|(function(E2): boolean|?)|function(E1): (void|R|!PromiseLike<R>|!PromiseLike<void>)|function(E1): (U|!PromiseLike<U>)=} filter2_or_onReject
 * @param {function(new: (E3), !Array<?>): ?|(function(E3): boolean|?)|function((E1|E2)): (void|R|!PromiseLike<R>|!PromiseLike<void>)|function((E1|E2)): (U|!PromiseLike<U>)=} filter3_or_onReject
 * @param {function(new: (E4), !Array<?>): ?|(function(E4): boolean|?)|function((E1|E2|E3)): (void|R|!PromiseLike<R>|!PromiseLike<void>)|function((E1|E2|E3)): (U|!PromiseLike<U>)=} filter4_or_onReject
 * @param {function(new: (E5), !Array<?>): ?|(function(E5): boolean|?)|function((E1|E2|E3|E4)): (void|R|!PromiseLike<R>|!PromiseLike<void>)|function((E1|E2|E3|E4)): (U|!PromiseLike<U>)=} filter5_or_onReject
 * @param {function((E1|E2|E3|E4|E5)): (void|R|!PromiseLike<R>|!PromiseLike<void>)|function((E1|E2|E3|E4|E5)): (U|!PromiseLike<U>)=} onReject
 * @return {!Bluebird|!Bluebird<(R|U)>}
 */
Bluebird.prototype.caught = function(onReject_or_filter1, filter2_or_onReject, filter3_or_onReject, filter4_or_onReject, filter5_or_onReject, onReject) {};

/**
 * Like `.catch` but instead of catching all types of exceptions, it only catches those that don't originate from thrown errors but rather from explicit rejections.
 * @template U
 * @param {function(?): (U|!PromiseLike<U>)} onReject
 * @return {!Bluebird<U>}
 */
Bluebird.prototype.error = function(onReject) {};

/**
 * Pass a handler that will be called regardless of this promise's fate. Returns a new promise chained from this promise. There are special semantics for `.finally()` in that the final value cannot be modified from the handler.
 * 
 * Alias `.lastly();` for compatibility with earlier ECMAScript version.
 * @template U
 * @param {function(): (U|!PromiseLike<U>)} handler
 * @return {!Bluebird}
 */
Bluebird.prototype.finally = function(handler) {};

/**
 * @template U
 * @param {function(): (U|!PromiseLike<U>)} handler
 * @return {!Bluebird}
 */
Bluebird.prototype.lastly = function(handler) {};

/**
 * Create a promise that follows this promise, but is bound to the given `thisArg` value. A bound promise will call its handlers with the bound value set to `this`. Additionally promises derived from a bound promise will also be bound promises with the same `thisArg` binding as the original promise.
 * @param {?} thisArg
 * @return {!Bluebird}
 */
Bluebird.prototype.bind = function(thisArg) {};

/**
 * Like `.then()`, but any unhandled rejection that ends up here will be thrown as an error.
 * @template U
 * @param {function(R): (U|!PromiseLike<U>)=} onFulfilled
 * @param {function(?): (U|!PromiseLike<U>)=} onRejected
 * @return {void}
 */
Bluebird.prototype.done = function(onFulfilled, onRejected) {};

/**
 * Like `.finally()`, but not called for rejections.
 * @template U
 * @param {function(R): !PromiseLike<U>|function(R): U} onFulFill_or_onFulfill
 * @return {!Bluebird}
 */
Bluebird.prototype.tap = function(onFulFill_or_onFulfill) {};

/**
 * Like `.catch()` but rethrows the error
 * TODO: disallow non-objects
 * @template U, E1, E2, E3, E4, E5
 * @param {function(?): (U|!PromiseLike<U>)|(!Object|function(new: (E1), !Array<?>): ?|function(?): boolean)} onReject_or_filter1
 * @param {(!Object|function(new: (E2), !Array<?>): ?|function(?): boolean)|function(E1): (U|!PromiseLike<U>)=} filter2_or_onReject
 * @param {(!Object|function(new: (E3), !Array<?>): ?|function(?): boolean)|function((E1|E2)): (U|!PromiseLike<U>)=} filter3_or_onReject
 * @param {(!Object|function(new: (E4), !Array<?>): ?|function(?): boolean)|function((E1|E2|E3)): (U|!PromiseLike<U>)=} filter4_or_onReject
 * @param {(!Object|function(new: (E5), !Array<?>): ?|function(?): boolean)|function((E1|E2|E3|E4)): (U|!PromiseLike<U>)=} filter5_or_onReject
 * @param {function((E1|E2|E3|E4|E5)): (U|!PromiseLike<U>)=} onReject
 * @return {!Bluebird}
 */
Bluebird.prototype.tapCatch = function(onReject_or_filter1, filter2_or_onReject, filter3_or_onReject, filter4_or_onReject, filter5_or_onReject, onReject) {};

/**
 * Same as calling `Promise.delay(ms, this)`.
 * @param {number} ms
 * @return {!Bluebird}
 */
Bluebird.prototype.delay = function(ms) {};

/**
 * Returns a promise that will be fulfilled with this promise's fulfillment value or rejection reason.
 *  However, if this promise is not fulfilled or rejected within ms milliseconds, the returned promise
 *  is rejected with a TimeoutError or the error as the reason.
 * 
 * You may specify a custom error message with the `message` parameter.
 * @param {number} ms
 * @param {(string|!Error)=} message
 * @return {!Bluebird}
 */
Bluebird.prototype.timeout = function(ms, message) {};

/**
 * Register a node-style callback on this promise. When this promise is is either fulfilled or rejected, the node callback will be called back with the node.js convention where error reason is the first argument and success value is the second argument. The error argument will be `null` in case of success.
 * If the `callback` argument is not a function, this method does not do anything.
 * @param {...function(?, R): void|?} callback_or_sink
 * @return {Bluebird}
 */
Bluebird.prototype.nodeify = function(callback_or_sink) {};

/**
 * @param {...function(?, R): void|?} callback_or_sink
 * @return {Bluebird}
 */
Bluebird.prototype.asCallback = function(callback_or_sink) {};

/**
 * See if this `promise` has been fulfilled.
 * @return {boolean}
 */
Bluebird.prototype.isFulfilled = function() {};

/**
 * See if this `promise` has been rejected.
 * @return {boolean}
 */
Bluebird.prototype.isRejected = function() {};

/**
 * See if this `promise` is still defer.
 * @return {boolean}
 */
Bluebird.prototype.isPending = function() {};

/**
 * See if this `promise` has been cancelled.
 * @return {boolean}
 */
Bluebird.prototype.isCancelled = function() {};

/**
 * See if this `promise` is resolved -> either fulfilled or rejected.
 * @return {boolean}
 */
Bluebird.prototype.isResolved = function() {};

/**
 * Get the fulfillment value of the underlying promise. Throws if the promise isn't fulfilled yet.
 * 
 * throws `TypeError`
 * @return {R}
 */
Bluebird.prototype.value = function() {};

/**
 * Get the rejection reason for the underlying promise. Throws if the promise isn't rejected yet.
 * 
 * throws `TypeError`
 * @return {?}
 */
Bluebird.prototype.reason = function() {};

/**
 * Synchronously inspect the state of this `promise`. The `PromiseInspection` will represent the state of
 * the promise as snapshotted at the time of calling `.reflect()`.
 * @return {!Bluebird<!Bluebird.Inspection<R>>|!Bluebird<!Bluebird.Inspection<?>>}
 */
Bluebird.prototype.reflect = function() {};

/**
 * This is a convenience method for doing:
 * 
 * <code>
 * promise.then(function(obj){
 *     return obj[propertyName].call(obj, arg...);
 * });
 * </code>
 * @param {string} propertyName
 * @param {...?} args
 * @return {!Bluebird<?>}
 */
Bluebird.prototype.call = function(propertyName, args) {};

/**
 * @template U
 * @param {(string|number)} key
 * @return {!Bluebird<U>}
 */
Bluebird.prototype.get = function(key) {};

/**
 * Convenience method for:
 * 
 * <code>
 * .then(function() {
 *    return value;
 * });
 * </code>
 * 
 * in the case where `value` doesn't change its value. That means `value` is bound at the time of calling `.return()`
 * 
 * Alias `.thenReturn();` for compatibility with earlier ECMAScript version.
 * @template U
 * @param {U=} value
 * @return {!Bluebird<void>|!Bluebird<U>}
 */
Bluebird.prototype.return = function(value) {};

/**
 * @template U
 * @param {U=} value
 * @return {!Bluebird<void>|!Bluebird<U>}
 */
Bluebird.prototype.thenReturn = function(value) {};

/**
 * Convenience method for:
 * 
 * <code>
 * .then(function() {
 *    throw reason;
 * });
 * </code>
 * Same limitations apply as with `.return()`.
 * 
 * Alias `.thenThrow();` for compatibility with earlier ECMAScript version.
 * @param {!Error} reason
 * @return {!Bluebird}
 */
Bluebird.prototype.throw = function(reason) {};

/**
 * @param {!Error} reason
 * @return {!Bluebird}
 */
Bluebird.prototype.thenThrow = function(reason) {};

/**
 * Convenience method for:
 * 
 * <code>
 * .catch(function() {
 *    return value;
 * });
 * </code>
 * 
 * in the case where `value` doesn't change its value. That means `value` is bound at the time of calling `.catchReturn()`
 * TODO: disallow non-objects
 * @template U, E1, E2, E3, E4, E5
 * @param {U|(!Object|function(new: (E1), !Array<?>): ?|function(?): boolean)} value_or_filter1
 * @param {(!Object|function(new: (E2), !Array<?>): ?|function(?): boolean)|U=} filter2_or_value
 * @param {(!Object|function(new: (E3), !Array<?>): ?|function(?): boolean)|U=} filter3_or_value
 * @param {(!Object|function(new: (E4), !Array<?>): ?|function(?): boolean)|U=} filter4_or_value
 * @param {(!Object|function(new: (E5), !Array<?>): ?|function(?): boolean)|U=} filter5_or_value
 * @param {U=} value
 * @return {!Bluebird<U>}
 */
Bluebird.prototype.catchReturn = function(value_or_filter1, filter2_or_value, filter3_or_value, filter4_or_value, filter5_or_value, value) {};

/**
 * Convenience method for:
 * 
 * <code>
 * .catch(function() {
 *    throw reason;
 * });
 * </code>
 * Same limitations apply as with `.catchReturn()`.
 * TODO: disallow non-objects
 * @template E1, E2, E3, E4, E5
 * @param {!Error|(!Object|function(new: (E1), !Array<?>): ?|function(?): boolean)} reason_or_filter1
 * @param {(!Object|function(new: (E2), !Array<?>): ?|function(?): boolean)|!Error=} filter2_or_reason
 * @param {(!Object|function(new: (E3), !Array<?>): ?|function(?): boolean)|!Error=} filter3_or_reason
 * @param {(!Object|function(new: (E4), !Array<?>): ?|function(?): boolean)|!Error=} filter4_or_reason
 * @param {(!Object|function(new: (E5), !Array<?>): ?|function(?): boolean)|!Error=} filter5_or_reason
 * @param {!Error=} reason
 * @return {!Bluebird}
 */
Bluebird.prototype.catchThrow = function(reason_or_filter1, filter2_or_reason, filter3_or_reason, filter4_or_reason, filter5_or_reason, reason) {};

/**
 * Convert to String.
 * @return {string}
 */
Bluebird.prototype.toString = function() {};

/**
 * This is implicitly called by `JSON.stringify` when serializing the object. Returns a serialized representation of the `Promise`.
 * @return {!Object}
 */
Bluebird.prototype.toJSON = function() {};

/**
 * Like calling `.then`, but the fulfillment value or rejection reason is assumed to be an array, which is flattened to the formal parameters of the handlers.
 * @template U, W
 * @param {function(!Array<W>): (U|!PromiseLike<U>)|!Function} fulfilledHandler
 * @return {!Bluebird<U>}
 */
Bluebird.prototype.spread = function(fulfilledHandler) {};

/**
 * @template U
 * @return {!Bluebird<!Array<U>>}
 */
Bluebird.prototype.all = function() {};

/**
 * Same as calling `Promise.props(thisPromise)`. With the exception that if this promise is bound to a value, the returned promise is bound to that value too.
 * @template K, V, T
 * @this {!PromiseLike<!Map<K, (V|!PromiseLike<V>)>>|!PromiseLike<?>}
 * @return {!Bluebird<!Map<K, V>>|!Bluebird<T>}
 */
Bluebird.prototype.props = function() {};

/**
 * @template U
 * @return {!Bluebird<U>}
 */
Bluebird.prototype.any = function() {};

/**
 * @template U
 * @param {number} count
 * @return {!Bluebird<!Array<U>>}
 */
Bluebird.prototype.some = function(count) {};

/**
 * @template U
 * @return {!Bluebird<U>}
 */
Bluebird.prototype.race = function() {};

/**
 * @template Q, U
 * @param {function(Q, number, number): (U|!PromiseLike<U>)} mapper
 * @param {!Bluebird.ConcurrencyOption=} options
 * @return {!Bluebird<!Array<U>>}
 */
Bluebird.prototype.map = function(mapper, options) {};

/**
 * @template Q, U
 * @param {function(U, Q, number, number): (U|!PromiseLike<U>)} reducer
 * @param {U=} initialValue
 * @return {!Bluebird<U>}
 */
Bluebird.prototype.reduce = function(reducer, initialValue) {};

/**
 * @template U
 * @param {function(U, number, number): (boolean|!PromiseLike<boolean>)} filterer
 * @param {!Bluebird.ConcurrencyOption=} options
 * @return {!Bluebird<!Array<U>>}
 */
Bluebird.prototype.filter = function(filterer, options) {};

/**
 * Same as calling ``Bluebird.each(thisPromise, iterator)``. With the exception that if this promise is bound to a value, the returned promise is bound to that value too.
 * @template R, U
 * @param {function(R, number, number): (U|!PromiseLike<U>)} iterator
 * @return {!Bluebird<!Array<R>>}
 */
Bluebird.prototype.each = function(iterator) {};

/**
 * Same as calling ``Bluebird.mapSeries(thisPromise, iterator)``. With the exception that if this promise is bound to a value, the returned promise is bound to that value too.
 * @template R, U
 * @param {function(R, number, number): (U|!PromiseLike<U>)} iterator
 * @return {!Bluebird<!Array<U>>}
 */
Bluebird.prototype.mapSeries = function(iterator) {};

/**
 * Cancel this `promise`. Will not do anything if this promise is already settled or if the cancellation feature has not been enabled
 * @return {void}
 */
Bluebird.prototype.cancel = function() {};

/**
 * Basically sugar for doing: somePromise.catch(function(){});
 * 
 * Which is needed in case error handlers are attached asynchronously to the promise later, which would otherwise result in premature unhandled rejection reporting.
 * @return {void}
 */
Bluebird.prototype.suppressUnhandledRejections = function() {};

/**
 * Start the chain of promises with `Promise.try`. Any synchronous exceptions will be turned into rejections on the returned promise.
 * 
 * Note about second argument: if it's specifically a true array, its values become respective arguments for the function call. Otherwise it is passed as is as the first argument for the function call.
 * 
 * Alias for `attempt();` for compatibility with earlier ECMAScript version.
 * @template R
 * @param {function(): (R|!PromiseLike<R>)} fn
 * @return {!Bluebird<R>}
 */
Bluebird.try = function(fn) {};

/**
 * @template R
 * @param {function(): (R|!PromiseLike<R>)} fn
 * @return {!Bluebird<R>}
 */
Bluebird.attempt = function(fn) {};

/**
 * Returns a new function that wraps the given function `fn`. The new function will always return a promise that is fulfilled with the original functions return values or rejected with thrown exceptions from the original function.
 * This method is convenient when a function can sometimes return synchronously or throw synchronously.
 * @param {!Function} fn
 * @return {!Function}
 */
Bluebird.method = function(fn) {};

/**
 * Create a promise that is resolved with the given `value`. If `value` is a thenable or promise, the returned promise will assume its state.
 * @template R
 * @param {(R|!PromiseLike<R>)=} value
 * @return {!Bluebird<void>|!Bluebird<R>}
 */
Bluebird.resolve = function(value) {};

/**
 * Create a promise that is rejected with the given `reason`.
 * @template R
 * @param {?} reason
 * @return {!Bluebird<?>|!Bluebird<R>}
 */
Bluebird.reject = function(reason) {};

/**
 * Create a promise with undecided fate and return a `PromiseResolver` to control it. See resolution?: Promise(#promise-resolution).
 * @template R
 * @return {!Bluebird.Resolver<R>}
 */
Bluebird.defer = function() {};

/**
 * Cast the given `value` to a trusted promise. If `value` is already a trusted `Promise`, it is returned as is. If `value` is not a thenable, a fulfilled is: Promise returned with `value` as its fulfillment value. If `value` is a thenable (Promise-like object, like those returned by jQuery's `$.ajax`), returns a trusted that: Promise assimilates the state of the thenable.
 * @template R
 * @param {(R|!PromiseLike<R>)} value
 * @return {!Bluebird<R>}
 */
Bluebird.cast = function(value) {};

/**
 * Sugar for `Promise.resolve(undefined).bind(thisArg);`. See `.bind()`.
 * @param {?} thisArg
 * @return {!Bluebird<void>}
 */
Bluebird.bind = function(thisArg) {};

/**
 * See if `value` is a trusted Promise.
 * @param {?} value
 * @return {boolean}
 */
Bluebird.is = function(value) {};

/**
 * Call this right after the library is loaded to enabled long stack traces. Long stack traces cannot be disabled after being enabled, and cannot be enabled after promises have already been created. Long stack traces imply a substantial performance penalty, around 4-5x for throughput and 0.5x for latency.
 * @return {void}
 */
Bluebird.longStackTraces = function() {};

/**
 * Returns a promise that will be resolved with value (or undefined) after given ms milliseconds.
 * If value is a promise, the delay will start counting down when it is fulfilled and the returned
 *  promise will be fulfilled with the fulfillment value of the value promise.
 * @template R
 * @param {number} ms
 * @param {(R|!PromiseLike<R>)=} value
 * @return {!Bluebird<R>|!Bluebird<void>}
 */
Bluebird.delay = function(ms, value) {};

/**
 * Returns a function that will wrap the given `nodeFunction`. Instead of taking a callback, the returned function will return a promise whose fate is decided by the callback behavior of the given node function. The node function should conform to node.js convention of accepting a callback as last argument and calling that callback with error as the first argument and success value on the second argument.
 * 
 * If the `nodeFunction` calls its callback with multiple success values, the fulfillment value will be an array of them.
 * 
 * If you pass a `receiver`, the `nodeFunction` will be called as a method on the `receiver`.
 * @template T, A1, A2, A3, A4, A5
 * @param {function(function(?, T): void): void|function(A1, function(?, T): void): void|function(A1, A2, function(?, T): void): void|function(A1, A2, A3, function(?, T): void): void|function(A1, A2, A3, A4, function(?, T): void): void|function(A1, A2, A3, A4, A5, function(?, T): void): void|!Function} func_or_nodeFunction
 * @param {!Bluebird.PromisifyOptions=} options
 * @return {function(): !Bluebird<T>|function(A1): !Bluebird<T>|function(A1, A2): !Bluebird<T>|function(A1, A2, A3): !Bluebird<T>|function(A1, A2, A3, A4): !Bluebird<T>|function(A1, A2, A3, A4, A5): !Bluebird<T>|!Function}
 */
Bluebird.promisify = function(func_or_nodeFunction, options) {};

/**
 * @param {!Object} target
 * @param {!Bluebird.PromisifyAllOptions=} options
 * @return {!Object}
 */
Bluebird.promisifyAll = function(target, options) {};

/**
 * Returns a promise that is resolved by a node style callback function.
 * @template T
 * @param {function(function(?, ?): void): void|function(function(?, T): void): void} resolver
 * @param {!Bluebird.FromNodeOptions=} options
 * @return {!Bluebird<?>|!Bluebird<T>}
 */
Bluebird.fromNode = function(resolver, options) {};

/**
 * @template T
 * @param {function(function(?, ?): void): void|function(function(?, T): void): void} resolver
 * @param {!Bluebird.FromNodeOptions=} options
 * @return {!Bluebird<?>|!Bluebird<T>}
 */
Bluebird.fromCallback = function(resolver, options) {};

/**
 * @template R
 * @param {!Function} generatorFunction
 * @return {!Function}
 */
Bluebird.coroutine = function(generatorFunction) {};

/**
 * Add `handler` as the handler to call when there is a possibly unhandled rejection. The default handler logs the error stack to stderr or `console.error` in browsers.
 * 
 * Passing no value or a non-function will have the effect of removing any kind of handling for possibly unhandled rejections.
 * Add handler as the handler to call when there is a possibly unhandled rejection.
 * The default handler logs the error stack to stderr or console.error in browsers.
 * 
 * Passing no value or a non-function will have the effect of removing any kind of handling for possibly unhandled rejections.
 * 
 * Note: this hook is specific to the bluebird instance its called on, application developers should use global rejection events.
 * @param {function(?): ?|function(!Error, !Bluebird<?>): void=} handler
 * @return {void}
 */
Bluebird.onPossiblyUnhandledRejection = function(handler) {};

/**
 * @template T1, T2, T3, T4, T5, R
 * @param {!Array<?>|(!Array<(R|!PromiseLike<R>)>|!PromiseLike<!Array<(R|!PromiseLike<R>)>>)} values
 * @return {!Bluebird<!Array<?>>|!Bluebird<!Array<R>>}
 */
Bluebird.all = function(values) {};

/**
 * @template K, V, T
 * @param {!PromiseLike<!Map<K, (V|!PromiseLike<V>)>>|!PromiseLike<?>|!Map<K, (V|!PromiseLike<V>)>|?} map_or_object
 * @return {!Bluebird<!Map<K, V>>|!Bluebird<T>}
 */
Bluebird.props = function(map_or_object) {};

/**
 * Like `Promise.some()`, with 1 as `count`. However, if the promise fulfills, the fulfillment value is not an array of 1 but the value directly.
 * @template R
 * @param {(!Array<(R|!PromiseLike<R>)>|!PromiseLike<!Array<(R|!PromiseLike<R>)>>)} values
 * @return {!Bluebird<R>}
 */
Bluebird.any = function(values) {};

/**
 * Given an array, or a promise of an array, which contains promises (or a mix of promises and values) return a promise that is fulfilled or rejected as soon as a promise in the array is fulfilled or rejected with the respective rejection reason or fulfillment value.
 * 
 * **Note** If you pass empty array or a sparse array with no values, or a promise/thenable for such, it will be forever pending.
 * @template R
 * @param {(!Array<(R|!PromiseLike<R>)>|!PromiseLike<!Array<(R|!PromiseLike<R>)>>)} values
 * @return {!Bluebird<R>}
 */
Bluebird.race = function(values) {};

/**
 * @template R
 * @param {!PromiseLike<!Array<!PromiseLike<R>>>|!PromiseLike<!Array<R>>|!Array<!PromiseLike<R>>|!Array<R>} values
 * @param {number} count
 * @return {!Bluebird<!Array<R>>}
 */
Bluebird.some = function(values, count) {};

/**
 * Promise.join(
 *   Promise<any>|any values...,
 *   function handler
 * ) -> Promise
 * For coordinating multiple concurrent discrete promises.
 * 
 * Note: In 1.x and 0.x Promise.join used to be a Promise.all that took the values in as arguments instead in an array. This behavior has been deprecated but is still supported partially - when the last argument is an immediate function value the new semantics will apply
 * @deprecated use .all instead
 * @template R, A1, A2, A3, A4, A5
 * @param {...(A1|!PromiseLike<A1>)|(R|!PromiseLike<R>)} arg1_or_values
 * @return {!Bluebird<R>|!Bluebird<!Array<R>>}
 */
Bluebird.join = function(arg1_or_values) {};

/**
 * @template R, U
 * @param {!PromiseLike<!Array<!PromiseLike<R>>>|!PromiseLike<!Array<R>>|!Array<!PromiseLike<R>>|!Array<R>} values
 * @param {function(R, number, number): (U|!PromiseLike<U>)} mapper
 * @param {!Bluebird.ConcurrencyOption=} options
 * @return {!Bluebird<!Array<U>>}
 */
Bluebird.map = function(values, mapper, options) {};

/**
 * @template R, U
 * @param {!PromiseLike<!Array<!PromiseLike<R>>>|!PromiseLike<!Array<R>>|!Array<!PromiseLike<R>>|!Array<R>} values
 * @param {function(U, R, number, number): (U|!PromiseLike<U>)} reducer
 * @param {U=} initialValue
 * @return {!Bluebird<U>}
 */
Bluebird.reduce = function(values, reducer, initialValue) {};

/**
 * @template R
 * @param {!PromiseLike<!Array<!PromiseLike<R>>>|!PromiseLike<!Array<R>>|!Array<!PromiseLike<R>>|!Array<R>} values
 * @param {function(R, number, number): (boolean|!PromiseLike<boolean>)} filterer
 * @param {!Bluebird.ConcurrencyOption=} option
 * @return {!Bluebird<!Array<R>>}
 */
Bluebird.filter = function(values, filterer, option) {};

/**
 * @template R, U
 * @param {!PromiseLike<!Array<!PromiseLike<R>>>|!Array<!PromiseLike<R>>|(!Array<R>|!PromiseLike<!Array<R>>)} values
 * @param {function(R, number, number): (U|!PromiseLike<U>)} iterator
 * @return {!Bluebird<!Array<R>>}
 */
Bluebird.each = function(values, iterator) {};

/**
 * Given an Iterable(arrays are Iterable), or a promise of an Iterable, which produces promises (or a mix of promises and values), iterate over all the values in the Iterable into an array and iterate over the array serially, in-order.
 * 
 * Returns a promise for an array that contains the values returned by the iterator function in their respective positions. The iterator won't be called for an item until its previous item, and the promise returned by the iterator for that item are fulfilled. This results in a mapSeries kind of utility but it can also be used simply as a side effect iterator similar to Array#forEach.
 * 
 * If any promise in the input array is rejected or any promise returned by the iterator function is rejected, the result will be rejected as well.
 * @template R, U
 * @param {(!Array<(R|!PromiseLike<R>)>|!PromiseLike<!Array<(R|!PromiseLike<R>)>>)} values
 * @param {function(R, number, number): (U|!PromiseLike<U>)} iterator
 * @return {!Bluebird<!Array<U>>}
 */
Bluebird.mapSeries = function(values, iterator) {};

/**
 * A meta method used to specify the disposer method that cleans up a resource when using `Promise.using`.
 * 
 * Returns a Disposer object which encapsulates both the resource as well as the method to clean it up.
 *  The user can pass this object to `Promise.using` to get access to the resource when it becomes available,
 *  as well as to ensure its automatically cleaned up.
 * 
 * The second argument passed to a disposer is the result promise of the using block, which you can
 *  inspect synchronously.
 * @param {function(R, !Bluebird): (void|!PromiseLike<void>)} disposeFn
 * @return {!Bluebird.Disposer<R>}
 */
Bluebird.prototype.disposer = function(disposeFn) {};

/**
 * In conjunction with `.disposer`, using will make sure that no matter what, the specified disposer
 *  will be called when the promise returned by the callback passed to using has settled. The disposer is
 *  necessary because there is no standard interface in node for disposing resources.
 * @template R, T, R1, R2, R3
 * @param {!Bluebird.Disposer<R>|!Bluebird.Disposer<R1>} disposer
 * @param {function(R): !PromiseLike<T>|!Bluebird.Disposer<R2>} executor_or_disposer2
 * @param {function(R1, R2): !PromiseLike<T>|!Bluebird.Disposer<R3>=} executor_or_disposer3
 * @param {function(R1, R2, R3): !PromiseLike<T>=} executor
 * @return {!Bluebird<T>}
 */
Bluebird.using = function(disposer, executor_or_disposer2, executor_or_disposer3, executor) {};

/**
 * Configure long stack traces, warnings, monitoring and cancellation.
 * Note that even though false is the default here, a development environment might be detected which automatically
 *  enables long stack traces and warnings.
 * @param {{warnings: (boolean|{wForgottenReturn: boolean}), longStackTraces: boolean, cancellation: boolean, monitoring: boolean}} options
 * @return {void}
 */
Bluebird.config = function(options) {};
/**
 * @record
 * @struct
 */
Bluebird.ConcurrencyOption = function() {};
 /** @type {number} */
Bluebird.ConcurrencyOption.prototype.concurrency;
/**
 * @record
 * @struct
 */
Bluebird.SpreadOption = function() {};
 /** @type {boolean} */
Bluebird.SpreadOption.prototype.spread;
/**
 * @record
 * @struct
 */
Bluebird.FromNodeOptions = function() {};
 /** @type {boolean} */
Bluebird.FromNodeOptions.prototype.multiArgs;
/**
 * @record
 * @struct
 */
Bluebird.PromisifyOptions = function() {};
 /** @type {?} */
Bluebird.PromisifyOptions.prototype.context;
 /** @type {boolean} */
Bluebird.PromisifyOptions.prototype.multiArgs;
/**
 * @extends {Bluebird.PromisifyOptions}
 * @record
 * @struct
 */
Bluebird.PromisifyAllOptions = function() {};
 /** @type {string} */
Bluebird.PromisifyAllOptions.prototype.suffix;
 /** @type {function(string, !Function, ?, boolean): boolean} */
Bluebird.PromisifyAllOptions.prototype.filter;
 /** @type {function(!Function): function(): !PromiseLike<?>} */
Bluebird.PromisifyAllOptions.prototype.promisifier;
/**
 * @constructor
 * @struct
 */
Bluebird.OperationalError = function() {};
/**
 * @constructor
 * @struct
 */
Bluebird.TimeoutError = function() {};
/**
 * @constructor
 * @struct
 */
Bluebird.CancellationError = function() {};
/**
 * @implements {ArrayLike}
 * @constructor
 * @struct
 */
Bluebird.AggregateError = function() {};
 /** @type {number} */
Bluebird.AggregateError.prototype.length;

/* TODO: IndexSignature: Bluebird */

/**
 * @param {string=} separator
 * @return {string}
 */
Bluebird.AggregateError.prototype.join = function(separator) {};

/**
 * @return {!Error}
 */
Bluebird.AggregateError.prototype.pop = function() {};

/**
 * @param {...!Error} errors
 * @return {number}
 */
Bluebird.AggregateError.prototype.push = function(errors) {};

/**
 * @return {!Error}
 */
Bluebird.AggregateError.prototype.shift = function() {};

/**
 * @param {...!Error} errors
 * @return {number}
 */
Bluebird.AggregateError.prototype.unshift = function(errors) {};

/**
 * @param {number=} begin
 * @param {number=} end
 * @return {!Bluebird.AggregateError}
 */
Bluebird.AggregateError.prototype.slice = function(begin, end) {};

/**
 * @param {function(!Error, number, !Bluebird.AggregateError): boolean} callback
 * @param {?=} thisArg
 * @return {!Bluebird.AggregateError}
 */
Bluebird.AggregateError.prototype.filter = function(callback, thisArg) {};

/**
 * @param {function(!Error, number, !Bluebird.AggregateError): void} callback
 * @param {?=} thisArg
 * @return {undefined}
 */
Bluebird.AggregateError.prototype.forEach = function(callback, thisArg) {};

/**
 * @param {function(!Error, number, !Bluebird.AggregateError): boolean} callback
 * @param {?=} thisArg
 * @return {boolean}
 */
Bluebird.AggregateError.prototype.some = function(callback, thisArg) {};

/**
 * @param {function(!Error, number, !Bluebird.AggregateError): boolean} callback
 * @param {?=} thisArg
 * @return {boolean}
 */
Bluebird.AggregateError.prototype.every = function(callback, thisArg) {};

/**
 * @param {function(!Error, number, !Bluebird.AggregateError): boolean} callback
 * @param {?=} thisArg
 * @return {!Bluebird.AggregateError}
 */
Bluebird.AggregateError.prototype.map = function(callback, thisArg) {};

/**
 * @param {!Error} searchElement
 * @param {number=} fromIndex
 * @return {number}
 */
Bluebird.AggregateError.prototype.indexOf = function(searchElement, fromIndex) {};

/**
 * @param {!Error} searchElement
 * @param {number=} fromIndex
 * @return {number}
 */
Bluebird.AggregateError.prototype.lastIndexOf = function(searchElement, fromIndex) {};

/**
 * @param {function(?, !Error, number, !Bluebird.AggregateError): ?} callback
 * @param {?=} initialValue
 * @return {?}
 */
Bluebird.AggregateError.prototype.reduce = function(callback, initialValue) {};

/**
 * @param {function(?, !Error, number, !Bluebird.AggregateError): ?} callback
 * @param {?=} initialValue
 * @return {?}
 */
Bluebird.AggregateError.prototype.reduceRight = function(callback, initialValue) {};

/**
 * @param {function(!Error, !Error): number=} compareFunction
 * @return {!Bluebird.AggregateError}
 */
Bluebird.AggregateError.prototype.sort = function(compareFunction) {};

/**
 * @return {!Bluebird.AggregateError}
 */
Bluebird.AggregateError.prototype.reverse = function() {};
/**
 * @constructor
 * @struct
 */
Bluebird.Disposer = function() {};

/** @typedef {!PromiseLike<T>} */
Bluebird.Thenable;

/** @typedef {?} */
Bluebird.ResolvableProps;
/**
 * @record
 * @struct
 */
Bluebird.Resolver = function() {};
 /** @type {!Bluebird<R>} */
Bluebird.Resolver.prototype.promise;
 /** @type {function(?, R, !Array<R>): void} */
Bluebird.Resolver.prototype.callback;

/**
 * Resolve the underlying promise with `value` as the resolution value. If `value` is a thenable or a promise, the underlying promise will assume its state.
 * @param {R=} value
 * @return {void}
 */
Bluebird.Resolver.prototype.resolve = function(value) {};

/**
 * Reject the underlying promise with `reason` as the rejection reason.
 * @param {?} reason
 * @return {void}
 */
Bluebird.Resolver.prototype.reject = function(reason) {};
/**
 * @record
 * @struct
 */
Bluebird.Inspection = function() {};

/**
 * See if the underlying promise was fulfilled at the creation time of this inspection object.
 * @return {boolean}
 */
Bluebird.Inspection.prototype.isFulfilled = function() {};

/**
 * See if the underlying promise was rejected at the creation time of this inspection object.
 * @return {boolean}
 */
Bluebird.Inspection.prototype.isRejected = function() {};

/**
 * See if the underlying promise was cancelled at the creation time of this inspection object.
 * @return {boolean}
 */
Bluebird.Inspection.prototype.isCancelled = function() {};

/**
 * See if the underlying promise was defer at the creation time of this inspection object.
 * @return {boolean}
 */
Bluebird.Inspection.prototype.isPending = function() {};

/**
 * Get the fulfillment value of the underlying promise. Throws if the promise wasn't fulfilled at the creation time of this inspection object.
 * 
 * throws `TypeError`
 * @return {R}
 */
Bluebird.Inspection.prototype.value = function() {};

/**
 * Get the rejection reason for the underlying promise. Throws if the promise wasn't rejected at the creation time of this inspection object.
 * 
 * throws `TypeError`
 * @return {?}
 */
Bluebird.Inspection.prototype.reason = function() {};

/**
 * Returns a new independent copy of the Bluebird library.
 * 
 * This method should be used before you use any of the methods which would otherwise alter the global Bluebird object - to avoid polluting global state.
 * @return {?}
 */
Bluebird.getNewLibraryCopy = function() {};

/**
 * This is relevant to browser environments with no module loader.
 * 
 * Release control of the Promise namespace to whatever it was before this library was loaded. Returns a reference to the library namespace so you can attach it to something else.
 * @return {?}
 */
Bluebird.noConflict = function() {};

/**
 * Changes how bluebird schedules calls a-synchronously.
 * 
 * @param {function(function(!Array<?>): void): void} scheduler Should be a function that asynchronously schedules
 *                  the calling of the passed in function
 * @return {void}
 */
Bluebird.setScheduler = function(scheduler) {};

/* TODO: ExportAssignment in  */
