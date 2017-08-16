/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/p-every/index.d.ts:

/* TODO: ExportAssignment in  */

/**
 * @template T
 * @param {!Iterable<(T|!PromiseLike<T>)>} input
 * @param {function(T, number): (boolean|!Promise<boolean>)} testFn
 * @param {!pEvery.Options=} options
 * @return {!Promise<boolean>}
 */
function pEvery(input, testFn, options) {}
/**
 * @record
 * @struct
 */
pEvery.Options = function() {};
 /** @type {number} */
pEvery.Options.prototype.concurrency;
