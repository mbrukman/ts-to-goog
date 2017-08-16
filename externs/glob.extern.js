/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/glob/index.d.ts:

/* TODO: ImportEqualsDeclaration in  */

/* TODO: ImportEqualsDeclaration in  */

/* TODO: ImportEqualsDeclaration in  */

/**
 * @param {string} pattern
 * @param {function(!Error, !Array<string>): void|!G.IOptions} cb_or_options
 * @param {function(!Error, !Array<string>): void=} cb
 * @return {void}
 */
function G(pattern, cb_or_options, cb) {}

/**
 * @param {string} pattern
 * @param {!G.IOptions=} options
 * @return {!Array<string>}
 */
G.sync = function(pattern, options) {};

/**
 * @param {string} pattern
 * @param {!G.IOptions=} options
 * @return {boolean}
 */
G.hasMagic = function(pattern, options) {};
 /** @type {!G.IGlobStatic} */
G.Glob;
 /** @type {!G.IGlobSyncStatic} */
G.GlobSync;
/**
 * @extends {M.IOptions}
 * @record
 * @struct
 */
G.IOptions = function() {};
 /** @type {string} */
G.IOptions.prototype.cwd;
 /** @type {string} */
G.IOptions.prototype.root;
 /** @type {boolean} */
G.IOptions.prototype.dot;
 /** @type {boolean} */
G.IOptions.prototype.nomount;
 /** @type {boolean} */
G.IOptions.prototype.mark;
 /** @type {boolean} */
G.IOptions.prototype.nosort;
 /** @type {boolean} */
G.IOptions.prototype.stat;
 /** @type {boolean} */
G.IOptions.prototype.silent;
 /** @type {boolean} */
G.IOptions.prototype.strict;
 /** @type {!Object<string,?>} */
G.IOptions.prototype.cache;
 /** @type {!Object<string,!Stats>} */
G.IOptions.prototype.statCache;
 /** @type {?} */
G.IOptions.prototype.symlinks;
 /** @type {boolean} */
G.IOptions.prototype.sync;
 /** @type {boolean} */
G.IOptions.prototype.nounique;
 /** @type {boolean} */
G.IOptions.prototype.nonull;
 /** @type {boolean} */
G.IOptions.prototype.debug;
 /** @type {boolean} */
G.IOptions.prototype.nobrace;
 /** @type {boolean} */
G.IOptions.prototype.noglobstar;
 /** @type {boolean} */
G.IOptions.prototype.noext;
 /** @type {boolean} */
G.IOptions.prototype.nocase;
 /** @type {?} */
G.IOptions.prototype.matchBase;
 /** @type {boolean} */
G.IOptions.prototype.nodir;
 /** @type {?} */
G.IOptions.prototype.ignore;
 /** @type {boolean} */
G.IOptions.prototype.follow;
 /** @type {boolean} */
G.IOptions.prototype.realpath;
 /** @type {boolean} */
G.IOptions.prototype.nonegate;
 /** @type {boolean} */
G.IOptions.prototype.nocomment;
 /** @type {boolean} */
G.IOptions.prototype.absolute;
 /** @type {boolean} */
G.IOptions.prototype.globDebug;
/**
 * @record
 * @struct
 */
G.IGlobStatic = function() {};

/* TODO: ConstructSignature: G */

/* TODO: ConstructSignature: G */
 /** @type {!G.IGlob} */
G.IGlobStatic.prototype.prototype;
/**
 * @record
 * @struct
 */
G.IGlobSyncStatic = function() {};

/* TODO: ConstructSignature: G */
 /** @type {!G.IGlobBase} */
G.IGlobSyncStatic.prototype.prototype;
/**
 * @record
 * @struct
 */
G.IGlobBase = function() {};
 /** @type {!M.IMinimatch} */
G.IGlobBase.prototype.minimatch;
 /** @type {!G.IOptions} */
G.IGlobBase.prototype.options;
 /** @type {boolean} */
G.IGlobBase.prototype.aborted;
 /** @type {!Object<string,?>} */
G.IGlobBase.prototype.cache;
 /** @type {!Object<string,!Stats>} */
G.IGlobBase.prototype.statCache;
 /** @type {!Object<string,boolean>} */
G.IGlobBase.prototype.symlinks;
 /** @type {!Object<string,string>} */
G.IGlobBase.prototype.realpathCache;
 /** @type {!Array<string>} */
G.IGlobBase.prototype.found;
/**
 * @extends {G.IGlobBase}
 * @record
 * @struct
 */
G.IGlob = function() {};
 /** @type {?} */
G.IGlob.prototype.EOF;
 /** @type {boolean} */
G.IGlob.prototype.paused;
 /** @type {number} */
G.IGlob.prototype.maxDepth;
 /** @type {number} */
G.IGlob.prototype.maxLength;
 /** @type {boolean} */
G.IGlob.prototype.changedCwd;
 /** @type {string} */
G.IGlob.prototype.cwd;
 /** @type {string} */
G.IGlob.prototype.root;
 /** @type {?} */
G.IGlob.prototype.error;
 /** @type {!Array<string>} */
G.IGlob.prototype.matches;

/**
 * @return {void}
 */
G.IGlob.prototype.pause = function() {};

/**
 * @return {void}
 */
G.IGlob.prototype.resume = function() {};

/**
 * @return {void}
 */
G.IGlob.prototype.abort = function() {};

/**
 * Deprecated.
 * @param {...?} args
 * @return {void}
 */
G.IGlob.prototype.log = function(args) {};

/**
 * Deprecated.
 * @param {?} m
 * @return {void}
 */
G.IGlob.prototype.emitMatch = function(m) {};

/* TODO: ExportAssignment in  */
