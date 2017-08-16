/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/rsync/index.d.ts:

/* TODO: ImportDeclaration in  */
/**
 * @record
 * @struct
 */
function StreamDataHandler() {}

/* TODO: CallSignature:  */
/**
 * @record
 * @struct
 */
function Pattern() {}
 /** @type {string} */
Pattern.prototype.action;
 /** @type {string} */
Pattern.prototype.pattern;
/**
 * @record
 * @struct
 */
function Flag() {}

/* TODO: IndexSignature:  */
/**
 * @record
 * @struct
 */
function Rsync() {}

/**
 * @param {string} option
 * @param {string=} value
 * @return {?}
 */
Rsync.prototype.set = function(option, value) {};

/**
 * @param {string} option
 * @return {?}
 */
Rsync.prototype.unset = function(option) {};

/**
 * @param {...string|?|!Array<string>} flags
 * @return {?}
 */
Rsync.prototype.flags = function(flags) {};

/**
 * @param {string} option
 * @return {boolean}
 */
Rsync.prototype.isSet = function(option) {};

/**
 * @param {string} option
 * @return {?}
 */
Rsync.prototype.option = function(option) {};

/**
 * @return {!Array<string>}
 */
Rsync.prototype.args = function() {};

/**
 * @return {string}
 */
Rsync.prototype.command = function() {};

/**
 * @param {?} stdout
 * @param {?} stderr
 * @return {?}
 */
Rsync.prototype.output = function(stdout, stderr) {};

/**
 * @param {?} callback
 * @param {?=} stdout
 * @param {?=} stderr
 * @return {!ChildProcess}
 */
Rsync.prototype.execute = function(callback, stdout, stderr) {};

/**
 * @param {string} cwd
 * @return {string}
 */
Rsync.prototype.cwd = function(cwd) {};

/**
 * @param {string} shell
 * @return {?}
 */
Rsync.prototype.shell = function(shell) {};

/**
 * @return {?}
 */
Rsync.prototype.delete = function() {};

/**
 * @return {?}
 */
Rsync.prototype.progress = function() {};

/**
 * @return {?}
 */
Rsync.prototype.archive = function() {};

/**
 * @return {?}
 */
Rsync.prototype.compress = function() {};

/**
 * @return {?}
 */
Rsync.prototype.recursive = function() {};

/**
 * @return {?}
 */
Rsync.prototype.update = function() {};

/**
 * @return {?}
 */
Rsync.prototype.quiet = function() {};

/**
 * @return {?}
 */
Rsync.prototype.dirs = function() {};

/**
 * @return {?}
 */
Rsync.prototype.links = function() {};

/**
 * @return {?}
 */
Rsync.prototype.dry = function() {};

/**
 * @param {string=} e
 * @return {string|?}
 */
Rsync.prototype.executable = function(e) {};

/**
 * @param {string=} e
 * @return {string|?}
 */
Rsync.prototype.executableShell = function(e) {};

/**
 * @param {string=} d
 * @return {string|?}
 */
Rsync.prototype.destination = function(d) {};

/**
 * @param {string|!Array<string>=} s
 * @return {!Array<string>|?}
 */
Rsync.prototype.source = function(s) {};

/**
 * @param {!Array<(string|?)>} patterns
 * @return {?}
 */
Rsync.prototype.patterns = function(patterns) {};

/**
 * @param {string|!Array<string>} p
 * @return {?}
 */
Rsync.prototype.exclude = function(p) {};

/**
 * @param {string|!Array<string>} p
 * @return {?}
 */
Rsync.prototype.include = function(p) {};
/**
 * @record
 * @struct
 */
function RsyncStatic() {}

/* TODO: ConstructSignature:  */
 /** @type {?} */
var e;

/* TODO: ExportAssignment in  */
