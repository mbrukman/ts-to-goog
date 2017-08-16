/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/when/index.d.ts:

/**
 * @template T, U
 * @param {!When.Promise<T>|!When.Thenable<T>|T} value
 * @param {function(T): U=} transform
 * @return {!When.Promise<T>|!When.Promise<U>}
 */
function When(value, transform) {}
/** @const */
When._ = {};
/**
 * @record
 * @struct
 */
When._.Fn0 = function() {};

/* TODO: CallSignature: When._ */
/**
 * @record
 * @struct
 */
When._.Fn1 = function() {};

/* TODO: CallSignature: When._ */
/**
 * @record
 * @struct
 */
When._.Fn2 = function() {};

/* TODO: CallSignature: When._ */
/**
 * @record
 * @struct
 */
When._.Fn3 = function() {};

/* TODO: CallSignature: When._ */
/**
 * @record
 * @struct
 */
When._.Fn4 = function() {};

/* TODO: CallSignature: When._ */
/**
 * @record
 * @struct
 */
When._.Fn5 = function() {};

/* TODO: CallSignature: When._ */
/**
 * @record
 * @struct
 */
When._.Fn6 = function() {};

/* TODO: CallSignature: When._ */
/**
 * @extends {When._.Fn0}
 * @record
 * @struct
 */
When._.LiftedFn0 = function() {};
/**
 * @extends {When._.Fn1}
 * @record
 * @struct
 */
When._.LiftedFn1 = function() {};
/**
 * @extends {When._.Fn2}
 * @record
 * @struct
 */
When._.LiftedFn2 = function() {};
/**
 * @extends {When._.Fn3}
 * @record
 * @struct
 */
When._.LiftedFn3 = function() {};
/**
 * @extends {When._.Fn4}
 * @record
 * @struct
 */
When._.LiftedFn4 = function() {};
/**
 * @extends {When._.Fn5}
 * @record
 * @struct
 */
When._.LiftedFn5 = function() {};
/**
 * @record
 * @struct
 */
When._.NodeCallback = function() {};

/* TODO: CallSignature: When._ */
/**
 * @extends {When._.Fn1}
 * @record
 * @struct
 */
When._.NodeFn0 = function() {};
/**
 * @extends {When._.Fn2}
 * @record
 * @struct
 */
When._.NodeFn1 = function() {};
/**
 * @extends {When._.Fn3}
 * @record
 * @struct
 */
When._.NodeFn2 = function() {};
/**
 * @extends {When._.Fn4}
 * @record
 * @struct
 */
When._.NodeFn3 = function() {};
/**
 * @extends {When._.Fn5}
 * @record
 * @struct
 */
When._.NodeFn4 = function() {};
/**
 * @extends {When._.Fn6}
 * @record
 * @struct
 */
When._.NodeFn5 = function() {};

/**
 * @template T, A1, A2, A3, A4, A5
 * @param {!When._.Fn0<T>|!When._.Fn1<A1, T>|!When._.Fn2<A1, A2, T>|!When._.Fn3<A1, A2, A3, T>|!When._.Fn4<A1, A2, A3, A4, T>|!When._.Fn5<A1, A2, A3, A4, A5, T>} f
 * @param {(A1|!When.Promise<A1>)=} arg1
 * @param {(A2|!When.Promise<A2>)=} arg2
 * @param {(A3|!When.Promise<A3>)=} arg3
 * @param {(A4|!When.Promise<A4>)=} arg4
 * @param {(A5|!When.Promise<A5>)=} arg5
 * @return {!When.Promise<T>}
 */
When.attempt = function(f, arg1, arg2, arg3, arg4, arg5) {};

/**
 * @template T, A1, A2, A3, A4, A5
 * @param {!When._.Fn0<T>|!When._.Fn1<A1, T>|!When._.Fn2<A1, A2, T>|!When._.Fn3<A1, A2, A3, T>|!When._.Fn4<A1, A2, A3, A4, T>|!When._.Fn5<A1, A2, A3, A4, A5, T>} f
 * @return {!When._.LiftedFn0<T>|!When._.LiftedFn1<A1, T>|!When._.LiftedFn2<A1, A2, T>|!When._.LiftedFn3<A1, A2, A3, T>|!When._.LiftedFn4<A1, A2, A3, A4, T>|!When._.LiftedFn5<A1, A2, A3, A4, A5, T>}
 */
When.lift = function(f) {};

/**
 * @template T
 * @param {function(function(T): void, function(?): void): void} resolver
 * @return {!When.Promise<T>}
 */
When.promise = function(resolver) {};

/**
 * @template T
 * @param {?} reason
 * @return {!When.Promise<T>}
 */
When.reject = function(reason) {};

/**
 * Return a promise that will resolve only once all the supplied promisesOrValues
 * have resolved. The resolution value of the returned promise will be an array
 * containing the resolution values of each of the promisesOrValues.
 * \@memberOf when
 * 
 * @template T
 * @param {!Array<?>} promisesOrValues array of anything, may contain a mix
 *      of {\@link Promise}s and values
 * @return {!When.Promise<T>}
 */
When.all = function(promisesOrValues) {};

/**
 * Promise-aware array map function, similar to `Array.prototype.map()`,
 * but input array may contain promises or values.
 * @template T
 * @param {!Array<?>} promisesOrValues array of anything, may contain a mix of {\@link Promise}s and values
 * @param {function(?, !Number): ?} mapFunc map function which may return a promise or value
 * @return {!When.Promise<T>} a promise that will fulfill with an array of mapped values
 *  or reject if any input promise rejects.
 */
When.map = function(promisesOrValues, mapFunc) {};

/**
 * Traditional reduce function, similar to `Array.prototype.reduce()`, but
 * input may contain promises and/or values, and reduceFunc
 * may return either a value or a promise, *and* initialValue may
 * be a promise for the starting value.
 * @template T
 * @param {!Array<?>} promisesOrValues array or promise for an array of anything,
 *      may contain a mix of promises and values.
 * @param {function(T, ?, !Number): (T|!When.Promise<T>)} reduceFunc function(accumulated:*, x:*, index:Number):*} f reduce function
 * @param {T} initialValue
 * @return {!When.Promise<T>} a promise that will resolve to the final reduced value
 */
When.reduce = function(promisesOrValues, reduceFunc, initialValue) {};

/**
 * Traditional reduce function, similar to `Array.prototype.reduceRight()`, but
 * input may contain promises and/or values, and reduceFunc
 * may return either a value or a promise, *and* initialValue may
 * be a promise for the starting value.
 * @template T
 * @param {!Array<?>} promisesOrValues array or promise for an array of anything,
 *      may contain a mix of promises and values.
 * @param {function(T, ?, !Number): (T|!When.Promise<T>)} reduceFunc function(accumulated:*, x:*, index:Number):*} f reduce function
 * @param {T} initialValue
 * @return {!When.Promise<T>} a promise that will resolve to the final reduced value
 */
When.reduceRight = function(promisesOrValues, reduceFunc, initialValue) {};
/**
 * @record
 * @struct
 */
When.Descriptor = function() {};
 /** @type {string} */
When.Descriptor.prototype.state;
 /** @type {T} */
When.Descriptor.prototype.value;
 /** @type {?} */
When.Descriptor.prototype.reason;

/**
 * Returns a promise for an array containing the same number of elements as the input array.
 * Each element is a descriptor object describing of the outcome of the corresponding element in the input.
 * The returned promise will only reject if array itself is a rejected promise. Otherwise,
 * it will always fulfill with an array of descriptors. This is in contrast to when.all,
 * which will reject if any element of array rejects.
 * \@memberOf when
 * 
 * @template T
 * @param {!Array<?>} promisesOrValues array of anything, may contain a mix
 *      of {\@link Promise}s and values
 * @return {!When.Promise<!Array<!When.Descriptor<T>>>}
 */
When.settle = function(promisesOrValues) {};

/**
 * Generates a potentially infinite stream of promises by repeatedly calling f until predicate becomes true.
 * \@memberOf when
 * @template U
 * @param {function(U): (U|!When.Promise<U>)} f function that, given a seed, returns the next value or a promise for it.
 * @param {function(U): boolean} predicate function that receives the current iteration value, and should return truthy when the iterating should stop
 * @param {function(U): (void|!When.Promise<?>)} handler function that receives each value as it is produced by f. It may return a promise to delay the next iteration.
 * @param {(U|!When.Promise<U>)} seed initial value provided to the handler, and first f invocation. May be a promise.
 * @return {!When.Promise<U>}
 */
When.iterate = function(f, predicate, handler, seed) {};

/**
 * Similar to when/iterate, when.unfold generates a potentially infinite stream of promises by repeatedly calling
 * unspool until predicate becomes true. when.unfold allows you to thread additional state information through the iteration.
 * \@memberOf when
 * @template T, U
 * @param {function(U): (!Array<?>|!When.Promise<!Array<?>>)} unspool function that, given a seed, returns a [valueToSendToHandler, newSeed] pair.
 * May return an array, array of promises, promise for an array, or promise for an array of promises.
 * @param {function(U): (boolean|!When.Promise<boolean>)} predicate function that receives the current seed, and should return truthy when the unfold should stop
 * @param {function(T): (void|!When.Promise<?>)} handler function that receives the valueToSendToHandler of the current iteration.
 * This function can process valueToSendToHandler in whatever way you need.
 * It may return a promise to delay the next iteration of the unfold.
 * @param {(U|!When.Promise<U>)} seed initial value provided to the first unspool invocation. May be a promise.
 * @return {!When.Promise<void>}
 */
When.unfold = function(unspool, predicate, handler, seed) {};

/**
 * Creates a {promise, resolver} pair, either or both of which
 * may be given out safely to consumers.
 * The resolver has resolve, reject, and progress.  The promise
 * has then plus extended promise API.
 * @template T
 * @return {!When.Deferred<T>}
 */
When.defer = function() {};

/**
 * Joins multiple promises into a single returned promise.
 * Joins multiple promises into a single returned promise.
 * @template T
 * @param {...!When.Promise<T>|?} promises
 * @return {!When.Promise<!Array<T>>} a promise that will fulfill when *all* the input promises
 * have fulfilled, or will reject when *any one* of the input promises rejects.
 */
When.join = function(promises) {};

/**
 * Returns a resolved promise. The returned promise will be
 *  - fulfilled with promiseOrValue if it is a value, or
 *  - if promiseOrValue is a promise
 *    - fulfilled with promiseOrValue's value after it is fulfilled
 *    - rejected with promiseOrValue's reason after it is rejected
 * @template T
 * @param {!When.Promise<T>|!When.Thenable<T>|T=} promise_or_foreign_or_value
 * @return {!When.Promise<T>}
 */
When.resolve = function(promise_or_foreign_or_value) {};
/**
 * @record
 * @struct
 */
When.Deferred = function() {};
 /** @type {!When.Promise<T>} */
When.Deferred.prototype.promise;

/**
 * @param {?} update
 * @return {void}
 */
When.Deferred.prototype.notify = function(update) {};

/**
 * @param {?} reason
 * @return {void}
 */
When.Deferred.prototype.reject = function(reason) {};

/**
 * @param {T|!When.Promise<T>=} value
 * @return {void}
 */
When.Deferred.prototype.resolve = function(value) {};
/**
 * @record
 * @struct
 */
When.Promise = function() {};

/**
 * @template U
 * @param {function(?): (U|!When.Promise<U>)|function(?): boolean|?=} onRejected_or_filter_or_exceptionType
 * @param {function(?): (U|!When.Promise<U>)=} onRejected
 * @return {!When.Promise<U>}
 */
When.Promise.prototype.catch = function(onRejected_or_filter_or_exceptionType, onRejected) {};

/**
 * @param {!Function} onFulfilledOrRejected
 * @return {!When.Promise}
 */
When.Promise.prototype.finally = function(onFulfilledOrRejected) {};

/**
 * @param {!Function} onFulfilledOrRejected
 * @return {!When.Promise}
 */
When.Promise.prototype.ensure = function(onFulfilledOrRejected) {};

/**
 * @return {!When.Snapshot<T>}
 */
When.Promise.prototype.inspect = function() {};

/**
 * @template U
 * @param {(U|!When.Promise<U>)} value
 * @return {!When.Promise<U>}
 */
When.Promise.prototype.yield = function(value) {};

/**
 * @param {T} value
 * @return {!When.Promise}
 */
When.Promise.prototype.else = function(value) {};

/**
 * @param {T} value
 * @return {!When.Promise}
 */
When.Promise.prototype.orElse = function(value) {};

/**
 * @param {function(T): void} onFulfilledSideEffect
 * @return {!When.Promise}
 */
When.Promise.prototype.tap = function(onFulfilledSideEffect) {};

/**
 * @param {number} milliseconds
 * @return {!When.Promise}
 */
When.Promise.prototype.delay = function(milliseconds) {};

/**
 * @param {number} milliseconds
 * @param {?=} reason
 * @return {!When.Promise}
 */
When.Promise.prototype.timeout = function(milliseconds, reason) {};

/**
 * @param {?} thisArg
 * @return {!When.Promise}
 */
When.Promise.prototype.with = function(thisArg) {};

/**
 * @param {?} thisArg
 * @return {!When.Promise}
 */
When.Promise.prototype.withThis = function(thisArg) {};

/**
 * @template U
 * @param {function(?): (U|!When.Promise<U>)|function(?): boolean|?=} onRejected_or_predicate_or_exceptionType
 * @param {function(?): (U|!When.Promise<U>)=} onRejected
 * @return {!When.Promise<U>}
 */
When.Promise.prototype.otherwise = function(onRejected_or_predicate_or_exceptionType, onRejected) {};

/**
 * @template U
 * @param {function(T): (U|!When.Promise<U>)} onFulfilled
 * @param {function(?): (U|!When.Promise<U>)=} onRejected
 * @param {function(?): void=} onProgress
 * @return {!When.Promise<U>}
 */
When.Promise.prototype.then = function(onFulfilled, onRejected, onProgress) {};

/**
 * @template T, A1, A2, A3, A4, A5
 * @param {!When._.Fn0<(T|!When.Promise<T>)>|!When._.Fn1<A1, (T|!When.Promise<T>)>|!When._.Fn2<A1, A2, (T|!When.Promise<T>)>|!When._.Fn3<A1, A2, A3, (T|!When.Promise<T>)>|!When._.Fn4<A1, A2, A3, A4, (T|!When.Promise<T>)>|!When._.Fn5<A1, A2, A3, A4, A5, (T|!When.Promise<T>)>} onFulfilled
 * @return {!When.Promise<T>}
 */
When.Promise.prototype.spread = function(onFulfilled) {};

/**
 * @template U
 * @param {function(T): void=} onFulfilled
 * @param {function(?): void=} onRejected
 * @return {void}
 */
When.Promise.prototype.done = function(onFulfilled, onRejected) {};

/**
 * @template U, V
 * @param {function(T, V): (U|!When.Promise<U>)} combine
 * @param {(V|!When.Promise<V>)} value2
 * @return {!When.Promise<U>}
 */
When.Promise.prototype.fold = function(combine, value2) {};
/**
 * @record
 * @struct
 */
When.Thenable = function() {};

/**
 * @template U
 * @param {function(T): U} onFulfilled
 * @param {function(?): U=} onRejected
 * @return {!When.Thenable<U>}
 */
When.Thenable.prototype.then = function(onFulfilled, onRejected) {};
/**
 * @record
 * @struct
 */
When.Snapshot = function() {};
 /** @type {string} */
When.Snapshot.prototype.state;
 /** @type {T} */
When.Snapshot.prototype.value;
 /** @type {?} */
When.Snapshot.prototype.reason;
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "when"
/** @const */
tsickle_declare_module.when = {};

/* TODO: ExportAssignment in tsickle_declare_module.when */
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "when/node"
/** @const */
tsickle_declare_module.when_node = {};

/* TODO: ImportEqualsDeclaration in tsickle_declare_module.when_node */

/* TODO: ImportEqualsDeclaration in tsickle_declare_module.when_node */

/**
 * @template T, A1, A2, A3, A4, A5
 * @param {!When._.NodeFn0<T>|!When._.NodeFn1<A1, T>|!When._.NodeFn2<A1, A2, T>|!When._.NodeFn3<A1, A2, A3, T>|!When._.NodeFn4<A1, A2, A3, A4, T>|!When._.NodeFn5<A1, A2, A3, A4, A5, T>} fn
 * @return {!When._.LiftedFn0<T>|!When._.LiftedFn1<A1, T>|!When._.LiftedFn2<A1, A2, T>|!When._.LiftedFn3<A1, A2, A3, T>|!When._.LiftedFn4<A1, A2, A3, A4, T>|!When._.LiftedFn5<A1, A2, A3, A4, A5, T>}
 */
tsickle_declare_module.when_node.lift = function(fn) {};

/**
 * @template T, A1, A2, A3, A4, A5
 * @param {!When._.NodeFn0<T>|!When._.NodeFn1<A1, T>|!When._.NodeFn2<A1, A2, T>|!When._.NodeFn3<A1, A2, A3, T>|!When._.NodeFn4<A1, A2, A3, A4, T>|!When._.NodeFn5<A1, A2, A3, A4, A5, T>} fn
 * @param {(A1|!When.Promise<A1>)=} arg1
 * @param {(A2|!When.Promise<A2>)=} arg2
 * @param {(A3|!When.Promise<A3>)=} arg3
 * @param {(A4|!When.Promise<A4>)=} arg4
 * @param {(A5|!When.Promise<A5>)=} arg5
 * @return {!When.Promise<T>}
 */
tsickle_declare_module.when_node.call = function(fn, arg1, arg2, arg3, arg4, arg5) {};

/**
 * @template T
 * @param {!When._.NodeFn0<T>|!When._.NodeFn1<?, T>|!When._.NodeFn2<?, ?, T>|!When._.NodeFn3<?, ?, ?, T>|!When._.NodeFn4<?, ?, ?, ?, T>|!When._.NodeFn5<?, ?, ?, ?, ?, T>} fn
 * @param {(!IArguments|!Array<?>)} args
 * @return {!When.Promise<T>}
 */
tsickle_declare_module.when_node.apply = function(fn, args) {};

/**
 * @param {?} srcApi
 * @param {function(?, !Function, string): ?=} transform
 * @param {?=} destApi
 * @return {?}
 */
tsickle_declare_module.when_node.liftAll = function(srcApi, transform, destApi) {};

/**
 * @template TArg
 * @param {function(?, TArg): void} callback
 * @return {function(!When.Promise<TArg>): !When.Promise<TArg>}
 */
tsickle_declare_module.when_node.liftCallback = function(callback) {};

/**
 * @template TArg
 * @param {!When.Promise<TArg>} arg
 * @param {function(?, TArg): void} callback
 * @return {!When.Promise<TArg>}
 */
tsickle_declare_module.when_node.bindCallback = function(arg, callback) {};
/**
 * @record
 * @struct
 */
tsickle_declare_module.when_node.Resolver = function() {};

/**
 * @param {?} reason
 * @return {void}
 */
tsickle_declare_module.when_node.Resolver.prototype.reject = function(reason) {};

/**
 * @param {T|!When.Promise<T>=} value
 * @return {void}
 */
tsickle_declare_module.when_node.Resolver.prototype.resolve = function(value) {};

/**
 * @template TArg
 * @param {!Resolver<TArg>} resolver
 * @return {function(?, TArg): void}
 */
tsickle_declare_module.when_node.createCallback = function(resolver) {};
