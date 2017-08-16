/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/jasminewd2/index.d.ts:
/**
 * @record
 * @struct
 */
jasmine.Promise = function() {};

/**
 * @template U
 * @param {function(T): (U|!jasmine.Promise<U>)=} onFulfill
 * @param {function(?): (U|!jasmine.Promise<U>)=} onReject
 * @return {!jasmine.Promise<U>}
 */
jasmine.Promise.prototype.then = function(onFulfill, onReject) {};

/**
 * @param {?} expected
 * @param {?=} expectationFailOutput
 * @return {!jasmine.Promise<void>}
 */
jasmine.Matchers.prototype.toBe = function(expected, expectationFailOutput) {};

/**
 * @param {?} expected
 * @param {?=} expectationFailOutput
 * @return {!jasmine.Promise<void>}
 */
jasmine.Matchers.prototype.toEqual = function(expected, expectationFailOutput) {};

/**
 * @param {(string|!RegExp|!jasmine.Promise<(string|!RegExp)>)} expected
 * @param {?=} expectationFailOutput
 * @return {!jasmine.Promise<void>}
 */
jasmine.Matchers.prototype.toMatch = function(expected, expectationFailOutput) {};

/**
 * @param {?=} expectationFailOutput
 * @return {!jasmine.Promise<void>}
 */
jasmine.Matchers.prototype.toBeDefined = function(expectationFailOutput) {};

/**
 * @param {?=} expectationFailOutput
 * @return {!jasmine.Promise<void>}
 */
jasmine.Matchers.prototype.toBeUndefined = function(expectationFailOutput) {};

/**
 * @param {?=} expectationFailOutput
 * @return {!jasmine.Promise<void>}
 */
jasmine.Matchers.prototype.toBeNull = function(expectationFailOutput) {};

/**
 * @return {!jasmine.Promise<void>}
 */
jasmine.Matchers.prototype.toBeNaN = function() {};

/**
 * @param {?=} expectationFailOutput
 * @return {!jasmine.Promise<void>}
 */
jasmine.Matchers.prototype.toBeTruthy = function(expectationFailOutput) {};

/**
 * @param {?=} expectationFailOutput
 * @return {!jasmine.Promise<void>}
 */
jasmine.Matchers.prototype.toBeFalsy = function(expectationFailOutput) {};

/**
 * @return {!jasmine.Promise<void>}
 */
jasmine.Matchers.prototype.toHaveBeenCalled = function() {};

/**
 * @param {...?} params
 * @return {!jasmine.Promise<void>}
 */
jasmine.Matchers.prototype.toHaveBeenCalledWith = function(params) {};

/**
 * @param {(number|!jasmine.Promise<number>)} expected
 * @return {!jasmine.Promise<void>}
 */
jasmine.Matchers.prototype.toHaveBeenCalledTimes = function(expected) {};

/**
 * @param {?} expected
 * @param {?=} expectationFailOutput
 * @return {!jasmine.Promise<void>}
 */
jasmine.Matchers.prototype.toContain = function(expected, expectationFailOutput) {};

/**
 * @param {(number|!jasmine.Promise<number>)} expected
 * @param {?=} expectationFailOutput
 * @return {!jasmine.Promise<void>}
 */
jasmine.Matchers.prototype.toBeLessThan = function(expected, expectationFailOutput) {};

/**
 * @param {(number|!jasmine.Promise<number>)} expected
 * @param {?=} expectationFailOutput
 * @return {!jasmine.Promise<void>}
 */
jasmine.Matchers.prototype.toBeLessThanOrEqual = function(expected, expectationFailOutput) {};

/**
 * @param {(number|!jasmine.Promise<number>)} expected
 * @param {?=} expectationFailOutput
 * @return {!jasmine.Promise<void>}
 */
jasmine.Matchers.prototype.toBeGreaterThan = function(expected, expectationFailOutput) {};

/**
 * @param {(number|!jasmine.Promise<number>)} expected
 * @param {?=} expectationFailOutput
 * @return {!jasmine.Promise<void>}
 */
jasmine.Matchers.prototype.toBeGreaterThanOrEqual = function(expected, expectationFailOutput) {};

/**
 * @param {(number|!jasmine.Promise<number>)} expected
 * @param {?=} precision
 * @param {?=} expectationFailOutput
 * @return {!jasmine.Promise<void>}
 */
jasmine.Matchers.prototype.toBeCloseTo = function(expected, precision, expectationFailOutput) {};

/**
 * @param {?=} expected
 * @return {!jasmine.Promise<void>}
 */
jasmine.Matchers.prototype.toThrow = function(expected) {};

/**
 * @param {(string|!RegExp|!jasmine.Promise<(string|!RegExp)>)|function(new: ((!Error|!jasmine.Promise<function(new: (!Error), !Array<?>): ?>)), !Array<?>): ?=} message_or_expected
 * @param {(string|!RegExp|!jasmine.Promise<(string|!RegExp)>)=} message
 * @return {!jasmine.Promise<void>}
 */
jasmine.Matchers.prototype.toThrowError = function(message_or_expected, message) {};
 /** @type {!jasmine.ArrayLikeMatchers} */
jasmine.ArrayLikeMatchers.prototype.not;

/**
 * @param {(!jasmine.ArrayLike<T>|!jasmine.Any|!jasmine.Spy|!jasmine.ObjectContaining<!jasmine.ArrayLike<T>>)} expected
 * @param {?=} expectationFailOutput
 * @return {!jasmine.Promise<void>}
 */
jasmine.ArrayLikeMatchers.prototype.toBe = function(expected, expectationFailOutput) {};

/**
 * @param {(!jasmine.ArrayLike<T>|!jasmine.Any|!jasmine.Spy|!jasmine.ObjectContaining<!jasmine.ArrayLike<T>>)} expected
 * @param {?=} expectationFailOutput
 * @return {!jasmine.Promise<void>}
 */
jasmine.ArrayLikeMatchers.prototype.toEqual = function(expected, expectationFailOutput) {};

/**
 * @param {T} expected
 * @param {?=} expectationFailOutput
 * @return {!jasmine.Promise<void>}
 */
jasmine.ArrayLikeMatchers.prototype.toContain = function(expected, expectationFailOutput) {};

/**
 * @param {!jasmine.AsyncCustomMatcherFactories} matchers
 * @return {void}
 */
jasmine.Env.prototype.addMatchers = function(matchers) {};

/**
 * @param {!jasmine.AsyncCustomMatcherFactories} matchers
 * @return {void}
 */
jasmine.Spec.prototype.addMatchers = function(matchers) {};
/**
 * @record
 * @struct
 */
jasmine.AsyncCustomMatcherFactories = function() {};

/* TODO: IndexSignature: jasmine */
/**
 * @record
 * @struct
 */
jasmine.AsyncCustomMatcherFactory = function() {};

/* TODO: CallSignature: jasmine */
/**
 * @record
 * @struct
 */
jasmine.AsyncCustomMatcher = function() {};

/**
 * @template T
 * @param {T|?} actual
 * @param {T|?} expected
 * @return {!jasmine.AsyncCustomMatcherResult}
 */
jasmine.AsyncCustomMatcher.prototype.compare = function(actual, expected) {};
/**
 * @record
 * @struct
 */
jasmine.AsyncCustomMatcherResult = function() {};
 /** @type {(boolean|!jasmine.Promise<boolean>)} */
jasmine.AsyncCustomMatcherResult.prototype.pass;
 /** @type {string} */
jasmine.AsyncCustomMatcherResult.prototype.message;