/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/node-array-ext/index.d.ts:

/**
 * Processes each of the elements in the array and triggers a callback once every element has been processed.
 *  - note that the elements are called in order but are not guaranteed to finish in order.
 * @template T
 * @param {!Array<T>} array
 * @param {function(number, T, function(!Error): void): void} each
 * @param {function(!Error): void} finish
 * @return {void}
 */
function asyncEach(array, each, finish) {}

/**
 * Processes each of the elements in the array and triggers a callback once every element has been processed.
 *  - note that the elements are called in order and are guaranteed to finish in order.
 * @template T
 * @param {!Array<T>} array
 * @param {function(number, T, function(!Error): void): void} each
 * @param {function(!Error): void} finish
 * @return {void}
 */
function awaitEach(array, each, finish) {}
