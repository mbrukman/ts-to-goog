/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/forever-monitor/index.d.ts:
/**
 * @record
 * @struct
 */
function SpawnWith() {}
 /** @type {!Array<number>} */
SpawnWith.prototype.customFds;
 /** @type {boolean} */
SpawnWith.prototype.setsid;
 /** @type {number} */
SpawnWith.prototype.uid;
 /** @type {number} */
SpawnWith.prototype.gid;
/**
 * @record
 * @struct
 */
function Options() {}
 /** @type {boolean} */
Options.prototype.silent;
 /** @type {string} */
Options.prototype.uid;
 /** @type {string} */
Options.prototype.pidFile;
 /** @type {number} */
Options.prototype.max;
 /** @type {boolean} */
Options.prototype.killTree;
 /** @type {number} */
Options.prototype.minUptime;
 /** @type {number} */
Options.prototype.spinSleepTime;
 /** @type {string} */
Options.prototype.command;
 /** @type {!Array<string>} */
Options.prototype.args;
 /** @type {string} */
Options.prototype.sourceDir;
 /** @type {boolean} */
Options.prototype.watch;
 /** @type {boolean} */
Options.prototype.watchIgnoreDotFiles;
 /** @type {!Array<string>} */
Options.prototype.watchIgnorePatters;
 /** @type {string} */
Options.prototype.watchDirectory;
 /** @type {?} */
Options.prototype.spawnWith;
 /** @type {?} */
Options.prototype.env;
 /** @type {string} */
Options.prototype.cwd;
 /** @type {string} */
Options.prototype.logFile;
 /** @type {string} */
Options.prototype.outFile;
 /** @type {string} */
Options.prototype.errFile;

/**
 * @param {string} command
 * @param {!Array<string>} args
 * @return {?}
 */
Options.prototype.parser = function(command, args) {};

/**
 * @param {(string|!Array<string>)} script
 * @param {?=} options
 * @return {?}
 */
function start(script, options) {}

/**
 * @param {number} pid
 * @param {boolean=} killTree
 * @param {string=} signal
 * @param {?=} callback
 * @return {void}
 */
function kill(pid, killTree, signal, callback) {}

/**
 * @param {number} pid
 * @return {boolean}
 */
function checkProcess(pid) {}
 /** @type {string} */
var version;

/**
 * @constructor
 * @struct
 * @param {(string|!Array<string>)} script - Location of the target script to run.
 * @param {?=} options
 */
function Monitor(script, options) {}

/**
 * \@description Start the process that this instance is configured for
 * @param {boolean=} restart
 * @return {?}
 */
Monitor.prototype.start = function(restart) {};

/**
 * \@description Tries to spawn the target Forever child process.
 * @return {boolean}
 */
Monitor.prototype.trySpawn = function() {};

/**
 * \@description Restarts the target script associated with this instance.
 * @return {?}
 */
Monitor.prototype.restart = function() {};

/**
 * \@description Stops the target script associated with this instance. Prevents it from auto-respawning
 * @return {?}
 */
Monitor.prototype.stop = function() {};

/**
 * \@description Kills the ChildProcess object associated with this instance
 * @param {boolean=} forceStop
 * @return {?}
 */
Monitor.prototype.kill = function(forceStop) {};

/**
 * \@description Sends a message to a forked ChildProcess object associated with this instance
 * @param {?=} msg
 * @return {?}
 */
Monitor.prototype.send = function(msg) {};

/**
 * respond with JSON for this instance
 * @return {string}
 */
Monitor.prototype.toString = function() {};

/**
 * @param {string} command - Command string to parse
 * @param {!Array<string>=} args - Additional default arguments
 * @return {(boolean|?)}
 */
Monitor.prototype.parseCommand = function(command, args) {};