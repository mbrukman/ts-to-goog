/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/p-locate/index.d.ts:

/* TODO: ExportAssignment in  */

/**
 * @template T
 * @param {!Iterable<(T|!PromiseLike<T>)>} input
 * @param {function(T): (boolean|!Promise<boolean>)} tester
 * @param {!pLocate.Options=} options
 * @return {!Promise<T>}
 */
function pLocate(input, tester, options) {}
/**
 * @record
 * @struct
 */
pLocate.Options = function() {};
 /** @type {number} */
pLocate.Options.prototype.concurrency;
 /** @type {boolean} */
pLocate.Options.prototype.preserveOrder;
