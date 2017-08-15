/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/bucks/index.d.ts:
/** @const */
var Bucks = {};
/**
 * @record
 * @struct
 */
Bucks.BucksStatic = function() {};
 /** @type {string} */
Bucks.BucksStatic.prototype.VERSION;
 /** @type {boolean} */
Bucks.BucksStatic.prototype.DEBUG;
 /** @type {!Array<!Bucks.Bucks>} */
Bucks.BucksStatic.prototype.running;
 /** @type {!Array<!Bucks.Bucks>} */
Bucks.BucksStatic.prototype.living;

/* TODO: ConstructSignature: Bucks */

/**
 * Catch all errors.
 * @param {function(!Error, !Bucks.Bucks): ?} onError Function called after catching error
 * @return {void}
 */
Bucks.BucksStatic.prototype.onError = function(onError) {};
/**
 * @record
 * @struct
 */
Bucks.Bucks = function() {};

/**
 * Add a task.
 * @param {!Bucks.TaskWithNext} task Function added async chain
 * @return {!Bucks.Bucks}
 */
Bucks.Bucks.prototype.add = function(task) {};

/**
 * Add a task called only in case of success.
 * @param {function(?, !Bucks.Task): ?} onSuccess Function called only in case of success
 * @return {!Bucks.Bucks}
 */
Bucks.Bucks.prototype.then = function(onSuccess) {};

/**
 * Add a empty task.
 * @return {!Bucks.Bucks}
 */
Bucks.Bucks.prototype.empty = function() {};

/**
 * Add a task called only in case of error.
 * @param {function(!Error, !Bucks.Task): ?} onError Function called only in case of error
 * @return {!Bucks.Bucks}
 */
Bucks.Bucks.prototype.error = function(onError) {};

/**
 * Add tasks in asynchronous way and join their results.
 * @param {!Array<!Bucks.TaskWithNext>} tasks Functions called in asynchronous way and join their results
 * @return {!Bucks.Bucks}
 */
Bucks.Bucks.prototype.parallel = function(tasks) {};

/**
 * Add tasks in asynchronous way and join their results.
 * @param {!Array<!Bucks.TaskWithNext>} tasks Functions added async chain
 * @return {!Bucks.Bucks}
 */
Bucks.Bucks.prototype.waterfall = function(tasks) {};

/**
 * Add delay execution.
 * @param {number} ms number millisecond for delaying
 * @return {!Bucks.Bucks}
 */
Bucks.Bucks.prototype.delay = function(ms) {};

/**
 * Called when destroy async chain.
 * @return {void}
 */
Bucks.Bucks.prototype.dispose = function() {};

/**
 * Destroy this object and call last callback function.
 * @param {!Error=} err If specify err and no callback, throw to execute failure callback
 * @return {!Bucks.Bucks}
 */
Bucks.Bucks.prototype.destroy = function(err) {};

/**
 * Complete creating async chain and start executing.
 * @param {!Bucks.Task=} callback Last callback function
 * @param {function(!Error): ?=} errback Handler for occurring error in last callback function
 * @return {void}
 */
Bucks.Bucks.prototype.end = function(callback, errback) {};
/**
 * @record
 * @struct
 */
Bucks.TaskWithNext = function() {};

/* TODO: CallSignature: Bucks */
/**
 * @record
 * @struct
 */
Bucks.Task = function() {};

/* TODO: CallSignature: Bucks */
 /** @type {!Bucks.BucksStatic} */
var Bucks;
