/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/js-combinatorics/index.d.ts:
/** @const */
var __Combinatorics = {};
/**
 * @record
 * @struct
 */
__Combinatorics.IGenerator = function() {};
 /** @type {number} */
__Combinatorics.IGenerator.prototype.length;

/**
 * Returns the element or undefined if no more element is available.
 * @return {T}
 */
__Combinatorics.IGenerator.prototype.next = function() {};

/**
 * Applies the callback function for each element.
 * @param {function(T): void} f
 * @return {void}
 */
__Combinatorics.IGenerator.prototype.forEach = function(f) {};

/**
 * All elements at once with function applied to each element.
 * @template TResult
 * @param {function(T): TResult} f
 * @return {!Array<TResult>}
 */
__Combinatorics.IGenerator.prototype.map = function(f) {};

/**
 * Returns an array with elements that passes the filter function.
 * @param {function(T): boolean} predicate
 * @return {!Array<T>}
 */
__Combinatorics.IGenerator.prototype.filter = function(predicate) {};

/**
 * All elements at once.
 * @return {!Array<T>}
 */
__Combinatorics.IGenerator.prototype.toArray = function() {};
/**
 * @extends {__Combinatorics.IGenerator}
 * @record
 * @struct
 */
__Combinatorics.IPredictableGenerator = function() {};

/**
 * Returns the nth element (starting 0).
 * @param {number} n
 * @return {T}
 */
__Combinatorics.IPredictableGenerator.prototype.nth = function(n) {};
/**
 * @extends {__Combinatorics.IPredictableGenerator}
 * @record
 * @struct
 */
__Combinatorics.ICartesianProductGenerator = function() {};

/**
 * Arguments are coordinates in integer.
 * Arguments can be out of bounds but it returns undefined in such cases.
 * @param {...number} coordinates
 * @return {T}
 */
__Combinatorics.ICartesianProductGenerator.prototype.get = function(coordinates) {};

/**
 * Calculates m P n
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
__Combinatorics.P = function(m, n) {};

/**
 * Calculates m C n
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
__Combinatorics.C = function(m, n) {};

/**
 * Calculates n!
 * @param {number} n
 * @return {number}
 */
__Combinatorics.factorial = function(n) {};

/**
 * Returns the factoradic representation of n in array, in least significant order.
 * See http://en.wikipedia.org/wiki/Factorial_number_system
 * @param {number} n
 * @return {!Array<number>}
 */
__Combinatorics.factoradic = function(n) {};

/**
 * Generates the power set of array.
 * @template T
 * @param {!Array<T>} a
 * @return {!__Combinatorics.IPredictableGenerator<!Array<T>>}
 */
__Combinatorics.power = function(a) {};

/**
 * Generates the combination of array with n elements.
 * When n is ommited, the length of the array is used.
 * @template T
 * @param {!Array<T>} a
 * @param {number=} n
 * @return {!__Combinatorics.IGenerator<!Array<T>>}
 */
__Combinatorics.combination = function(a, n) {};

/**
 * Generates the permutation of array with n elements.
 * When n is ommited, the length of the array is used.
 * @template T
 * @param {!Array<T>} a
 * @param {number=} n
 * @return {!__Combinatorics.IGenerator<!Array<T>>}
 */
__Combinatorics.permutation = function(a, n) {};

/**
 * Generates the permutation of the combination of n.
 * Equivalent to permutation(combination(a)), but more efficient.
 * @template T
 * @param {!Array<T>} a
 * @return {!__Combinatorics.IGenerator<!Array<T>>}
 */
__Combinatorics.permutationCombination = function(a) {};

/**
 * Generates n-digit "numbers" where each digit is an element in array.
 * Note this "number" is in the least significant order.
 * When n is ommited, the length of the array is used.
 * @template T
 * @param {!Array<T>} a
 * @param {number=} n
 * @return {!__Combinatorics.IPredictableGenerator<!Array<T>>}
 */
__Combinatorics.baseN = function(a, n) {};

/**
 * Generates the cartesian product of the arrays. All arguments must be arrays with more than one element.
 * @template T1, T2, T3, T4, T5, T6, T7, T8, T9, T10
 * @param {...!Array<T1>|!Array<?>} a1_or_a
 * @return {!__Combinatorics.ICartesianProductGenerator<!Array<?>>}
 */
__Combinatorics.cartesianProduct = function(a1_or_a) {};
 /** @type {string} */
__Combinatorics.VERSION;

/* TODO: ExportAssignment in  */

/* TODO: NamespaceExportDeclaration in  */