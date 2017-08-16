/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/shipit/index.d.ts:

/* TODO: ImportDeclaration in  */

/* TODO: ImportDeclaration in  */

/* TODO: ImportDeclaration in  */

/** @typedef {?} */
var LocalOrRemoteCommand;

/** @typedef {?} */
var EmptyCallback;

/** @typedef {?} */
var TaskExecution;
/**
 * @record
 * @struct
 */
function Options() {}
 /** @type {string} */
Options.prototype.environment;
 /** @type {!WriteStream} */
Options.prototype.stderr;
 /** @type {!WriteStream} */
Options.prototype.stdout;
/**
 * @record
 * @struct
 */
function ShipitLocal() {}
 /** @type {!ChildProcess} */
ShipitLocal.prototype.child;
 /** @type {!WriteStream} */
ShipitLocal.prototype.stderr;
 /** @type {!WriteStream} */
ShipitLocal.prototype.stdout;
/**
 * @record
 * @struct
 */
function Tasks() {}

/* TODO: IndexSignature:  */
/**
 * @record
 * @struct
 */
function Task() {}
 /** @type {boolean} */
Task.prototype.blocking;
 /** @type {!Array<string>} */
Task.prototype.dep;
 /** @type {string} */
Task.prototype.name;

/**
 * @return {void}
 */
Task.prototype.fn = function() {};

/**
 * @param {string} name
 * @param {(?|!Array<string>)} depsOrFn
 * @param {?=} fn
 * @return {?}
 */
function blTask(name, depsOrFn, fn) {}

/**
 * @param {string} name
 * @return {?}
 */
function emit(name) {}

/**
 * @param {!Object} config
 * @return {?}
 */
function initConfig(config) {}

/**
 * @param {string} command
 * @param {!ExecOptions=} options
 * @param {?=} callback
 * @return {!PromiseLike<?>}
 */
function local(command, options, callback) {}

/**
 * @param {...?} log
 * @return {void}
 */
function log(log) {}

/**
 * @param {string} name
 * @param {?} callback
 * @return {?}
 */
function on(name, callback) {}

/**
 * @param {string} command
 * @param {!ExecOptions=} options
 * @param {?=} callback
 * @return {!PromiseLike<?>}
 */
function remote(command, options, callback) {}

/**
 * @param {string} src
 * @param {string} dest
 * @param {!ExecOptions=} options
 * @param {?=} callback
 * @return {!PromiseLike<?>}
 */
function remoteCopy(src, dest, options, callback) {}

/**
 * @param {...(string|!Array<string>)|string} tasks
 * @return {?}
 */
function start(tasks) {}

/**
 * @param {string} name
 * @param {(?|!Array<string>)} depsOrFn
 * @param {?=} fn
 * @return {?}
 */
function task(name, depsOrFn, fn) {}
 /** @type {!Object} */
var config;
 /** @type {?} */
var domain;
 /** @type {?} */
var doneCallback;
 /** @type {string} */
var environment;
 /** @type {!Array<?>} */
var seq;
 /** @type {?} */
var tasks;
 /** @type {boolean} */
var isRunning;

/* TODO: NamespaceExportDeclaration in  */
