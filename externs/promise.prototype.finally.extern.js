/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/promise.prototype.finally/index.d.ts:

/**
 * @template U
 * @param {function(): (U|!PromiseLike<U>)=} onFinally
 * @return {!Promise}
 */
Promise.prototype.finally = function(onFinally) {};

/* TODO: ExportAssignment in  */

/**
 * @template T, U
 * @param {!Promise<T>} promise
 * @param {function(): (U|!PromiseLike<U>)=} onFinally
 * @return {!Promise<T>}
 */
function promiseFinally(promise, onFinally) {}

/**
 * @return {void}
 */
promiseFinally.shim = function() {};