/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/jsdeferred/index.d.ts:

/* TODO: ImportEqualsDeclaration in  */
/**
 * @record
 * @struct
 */
function Loop() {}
 /** @type {number} */
Loop.prototype.begin;
 /** @type {number} */
Loop.prototype.end;
 /** @type {number} */
Loop.prototype.step;
/**
 * @record
 * @struct
 */
function ConnectOption() {}
 /** @type {?} */
ConnectOption.prototype.target;
 /** @type {!Array<?>} */
ConnectOption.prototype.args;
 /** @type {number} */
ConnectOption.prototype.ok;
 /** @type {number} */
ConnectOption.prototype.ng;
/**
 * @record
 * @struct
 */
function RetryOption() {}
 /** @type {number} */
RetryOption.prototype.wait;
/**
 * @record
 * @struct
 */
function DeferredizedFunction() {}

/* TODO: CallSignature:  */
/**
 * @record
 * @struct
 */
function DeferredizedFunctionWithNumber() {}

/* TODO: CallSignature:  */
/**
 * @record
 * @struct
 */
function FunctionWithNumber() {}

/* TODO: CallSignature:  */
/**
 * @record
 * @struct
 */
function ErrorCallback() {}

/* TODO: CallSignature:  */

/**
 * @constructor
 * @struct
 */
function Deferred() {}
 /** @type {!Array<string>} */
Deferred.methods;

/**
 * @param {?} obj
 * @return {boolean}
 */
Deferred.isDeferred = function(obj) {};

/**
 * @param {!Function} fun
 * @return {!Deferred}
 */
Deferred.next = function(fun) {};

/**
 * @param {...?} args
 * @return {!Deferred}
 */
Deferred.chain = function(args) {};

/**
 * @param {number} n
 * @return {!Deferred}
 */
Deferred.wait = function(n) {};

/**
 * @param {!Function=} fun
 * @param {...?} args
 * @return {!Deferred}
 */
Deferred.call = function(fun, args) {};

/**
 * @param {?} dl
 * @return {!Deferred}
 */
Deferred.parallel = function(dl) {};

/**
 * @param {?} dl
 * @return {!Deferred}
 */
Deferred.earlier = function(dl) {};

/**
 * @param {number|!Loop} n
 * @param {!FunctionWithNumber} fun
 * @return {!Deferred}
 */
Deferred.loop = function(n, fun) {};

/**
 * @param {number} n
 * @param {!FunctionWithNumber} fun
 * @return {!Deferred}
 */
Deferred.repeat = function(n, fun) {};

/**
 * @param {string} name
 * @param {!DeferredizedFunction} fun
 * @return {void}
 */
Deferred.register = function(name, fun) {};

/**
 * @param {?|!Function} funo
 * @param {string|!ConnectOption=} options
 * @return {!DeferredizedFunction}
 */
Deferred.connect = function(funo, options) {};

/**
 * @param {number} retryCount
 * @param {!DeferredizedFunctionWithNumber} funcDeferred
 * @param {!RetryOption=} options
 * @return {!Deferred}
 */
Deferred.retry = function(retryCount, funcDeferred, options) {};

/**
 * @param {?=} obj
 * @param {!Array<string>=} list
 * @return {?}
 */
Deferred.define = function(obj, list) {};

/**
 * @param {!Function} fun
 * @return {!Deferred}
 */
Deferred.prototype.next = function(fun) {};

/**
 * @param {number} n
 * @return {!Deferred}
 */
Deferred.prototype.wait = function(n) {};

/**
 * @param {!ErrorCallback} fun
 * @return {!Deferred}
 */
Deferred.prototype.error = function(fun) {};

/**
 * @param {?=} val
 * @return {!Deferred}
 */
Deferred.prototype.call = function(val) {};

/**
 * @param {?} err
 * @return {!Deferred}
 */
Deferred.prototype.fail = function(err) {};

/**
 * @return {!Deferred}
 */
Deferred.prototype.cancel = function() {};

/**
 * @param {?} dl
 * @return {!Deferred}
 */
Deferred.prototype.parallel = function(dl) {};

/**
 * @param {number|!Loop} n
 * @param {!FunctionWithNumber} fun
 * @return {!Deferred}
 */
Deferred.prototype.loop = function(n, fun) {};

/**
 * @param {!Function} fun
 * @return {!Deferred}
 */
JQueryXHR.prototype.next = function(fun) {};

/**
 * @param {...?} args
 * @return {!Deferred}
 */
function chain(args) {}

/**
 * @param {number} n
 * @return {!Deferred}
 */
function wait(n) {}

/**
 * @param {!Function=} fun
 * @param {...?} args
 * @return {!Deferred}
 */
function call(fun, args) {}

/**
 * @param {?} dl
 * @return {!Deferred}
 */
function parallel(dl) {}

/**
 * @param {?} dl
 * @return {!Deferred}
 */
function earlier(dl) {}

/**
 * @param {number|!Loop} n
 * @param {!FunctionWithNumber} fun
 * @return {!Deferred}
 */
function loop(n, fun) {}

/**
 * @param {number} n
 * @param {!FunctionWithNumber} fun
 * @return {!Deferred}
 */
function repeat(n, fun) {}

/**
 * @param {!Function} fun
 * @return {!Deferred}
 */
function next(fun) {}
