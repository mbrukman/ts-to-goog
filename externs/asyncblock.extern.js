/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/asyncblock/index.d.ts:

/**
 * @template T
 * @param {function(!asyncblock.IFlow): void} f
 * @param {function(?, T): void=} callback
 * @return {void}
 */
function asyncblock(f, callback) {}

/**
 * @template T
 * @param {function(!asyncblock.IFlow): void} f
 * @param {function(?, T): void=} callback
 * @return {void}
 */
asyncblock.nostack = function(f, callback) {};
/**
 * @record
 * @struct
 */
asyncblock.IFlow = function() {};
 /** @type {number} */
asyncblock.IFlow.prototype.maxParallel;
 /** @type {function(?): void} */
asyncblock.IFlow.prototype.errorCallback;
 /** @type {number} */
asyncblock.IFlow.prototype.taskTimeout;
 /** @type {boolean} */
asyncblock.IFlow.prototype.timeoutIsError;

/**
 * @param {!Array<string>|string|number|!asyncblock.IFlowOptions=} responseFormat_or_key_or_options
 * @param {!Array<string>=} responseFormat
 * @return {!asyncblock.IExecuteFunction}
 */
asyncblock.IFlow.prototype.add = function(responseFormat_or_key_or_options, responseFormat) {};

/**
 * @param {!Array<string>|string|number|!asyncblock.IFlowOptions=} responseFormat_or_key_or_options
 * @param {!Array<string>=} responseFormat
 * @return {!asyncblock.IExecuteFunction}
 */
asyncblock.IFlow.prototype.callback = function(responseFormat_or_key_or_options, responseFormat) {};

/**
 * @template T
 * @param {string|number=} key
 * @return {T}
 */
asyncblock.IFlow.prototype.wait = function(key) {};

/**
 * @template T
 * @param {string} key
 * @return {T}
 */
asyncblock.IFlow.prototype.get = function(key) {};

/**
 * @param {string|!asyncblock.IFlowOptions} key_or_options
 * @param {!Array<string>=} responseFormat
 * @return {!asyncblock.IExecuteFunction}
 */
asyncblock.IFlow.prototype.set = function(key_or_options, responseFormat) {};

/**
 * @param {string} key
 * @return {void}
 */
asyncblock.IFlow.prototype.del = function(key) {};

/**
 * @template T
 * @param {?} task
 * @return {T}
 */
asyncblock.IFlow.prototype.sync = function(task) {};

/**
 * @param {!asyncblock.IExecuteFunction|string|number|!Array<string>|!asyncblock.IFlowOptions} toExecute_or_key_or_responseFormat_or_options
 * @param {!asyncblock.IExecuteFunction|!Array<string>=} toExecute_or_responseFormat
 * @param {!asyncblock.IExecuteFunction=} toExecute
 * @return {void}
 */
asyncblock.IFlow.prototype.queue = function(toExecute_or_key_or_responseFormat_or_options, toExecute_or_responseFormat, toExecute) {};

/**
 * @return {void}
 */
asyncblock.IFlow.prototype.doneAdding = function() {};

/**
 * @template T
 * @return {T}
 */
asyncblock.IFlow.prototype.forceWait = function() {};
/**
 * @record
 * @struct
 */
asyncblock.IFlowOptions = function() {};
 /** @type {boolean} */
asyncblock.IFlowOptions.prototype.ignoreError;
 /** @type {string} */
asyncblock.IFlowOptions.prototype.key;
 /** @type {!Array<string>} */
asyncblock.IFlowOptions.prototype.responseFormat;
 /** @type {number} */
asyncblock.IFlowOptions.prototype.timeout;
 /** @type {boolean} */
asyncblock.IFlowOptions.prototype.timeoutIsError;
 /** @type {boolean} */
asyncblock.IFlowOptions.prototype.dontWait;
 /** @type {boolean} */
asyncblock.IFlowOptions.prototype.firstArgIsError;
/**
 * @record
 * @struct
 */
asyncblock.IExecuteFunction = function() {};

/* TODO: CallSignature: asyncblock */

/* TODO: CallSignature: asyncblock */

/* TODO: CallSignature: asyncblock */

/* TODO: CallSignature: asyncblock */

/* TODO: CallSignature: asyncblock */

/* TODO: CallSignature: asyncblock */

/* TODO: CallSignature: asyncblock */

/* TODO: ExportAssignment in  */