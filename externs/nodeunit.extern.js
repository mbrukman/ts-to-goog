/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/nodeunit/index.d.ts:
/**
 * @record
 * @struct
 */
function ITestCase() {}

/* TODO: CallSignature:  */
 /** @type {?} */
var testCase;
/**
 * @record
 * @struct
 */
function Test() {}
 /** @type {?} */
Test.prototype.done;

/**
 * @param {number} num
 * @return {void}
 */
Test.prototype.expect = function(num) {};

/**
 * @param {?} actual
 * @param {?} expected
 * @param {string} message
 * @param {string} operator
 * @return {void}
 */
Test.prototype.fail = function(actual, expected, message, operator) {};

/**
 * @param {?} value
 * @param {string} message
 * @return {void}
 */
Test.prototype.assert = function(value, message) {};

/**
 * @param {?} value
 * @param {string=} message
 * @return {void}
 */
Test.prototype.ok = function(value, message) {};

/**
 * @param {?} actual
 * @param {?} expected
 * @param {string=} message
 * @return {void}
 */
Test.prototype.equal = function(actual, expected, message) {};

/**
 * @param {?} actual
 * @param {?} expected
 * @param {string=} message
 * @return {void}
 */
Test.prototype.notEqual = function(actual, expected, message) {};

/**
 * @param {?} actual
 * @param {?} expected
 * @param {string=} message
 * @return {void}
 */
Test.prototype.deepEqual = function(actual, expected, message) {};

/**
 * @param {?} actual
 * @param {?} expected
 * @param {string=} message
 * @return {void}
 */
Test.prototype.notDeepEqual = function(actual, expected, message) {};

/**
 * @param {?} actual
 * @param {?} expected
 * @param {string=} message
 * @return {void}
 */
Test.prototype.strictEqual = function(actual, expected, message) {};

/**
 * @param {?} actual
 * @param {?} expected
 * @param {string=} message
 * @return {void}
 */
Test.prototype.notStrictEqual = function(actual, expected, message) {};

/**
 * @param {?} block
 * @param {?=} error
 * @param {string=} message
 * @return {void}
 */
Test.prototype.throws = function(block, error, message) {};

/**
 * @param {?} block
 * @param {?=} error
 * @param {string=} message
 * @return {void}
 */
Test.prototype.doesNotThrow = function(block, error, message) {};

/**
 * @param {?} value
 * @return {void}
 */
Test.prototype.ifError = function(value) {};

/**
 * @param {?} actual
 * @param {?} expected
 * @param {string=} message
 * @return {void}
 */
Test.prototype.equals = function(actual, expected, message) {};

/**
 * @param {?} actual
 * @param {?} expected
 * @param {string=} message
 * @return {void}
 */
Test.prototype.same = function(actual, expected, message) {};
/**
 * @record
 * @struct
 */
function ITestBody() {}

/* TODO: CallSignature:  */
/**
 * @record
 * @struct
 */
function ITestGroup() {}
 /** @type {?} */
ITestGroup.prototype.setUp;
 /** @type {?} */
ITestGroup.prototype.tearDown;

/* TODO: IndexSignature:  */
/**
 * @record
 * @struct
 */
function ICallbackFunction() {}

/* TODO: CallSignature:  */
