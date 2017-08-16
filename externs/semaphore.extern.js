/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/semaphore/index.d.ts:

/**
 * @param {number=} capacity
 * @return {!semaphore.Semaphore}
 */
function semaphore(capacity) {}
/**
 * @record
 * @struct
 */
semaphore.Task = function() {};

/* TODO: CallSignature: semaphore */
/**
 * @record
 * @struct
 */
semaphore.Semaphore = function() {};
 /** @type {number} */
semaphore.Semaphore.prototype.capacity;

/**
 * @param {!semaphore.Task|number} task_or_n
 * @param {!semaphore.Task=} task
 * @return {void}
 */
semaphore.Semaphore.prototype.take = function(task_or_n, task) {};

/**
 * @param {number=} n
 * @return {void}
 */
semaphore.Semaphore.prototype.leave = function(n) {};

/* TODO: ExportAssignment in  */
