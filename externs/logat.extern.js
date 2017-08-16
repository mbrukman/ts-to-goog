/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/logat/index.d.ts:
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "logat"
/** @const */
tsickle_declare_module.logat = {};
/**
 * @record
 * @struct
 */
tsickle_declare_module.logat.LogOptionsI = function() {};
 /** @type {number} */
tsickle_declare_module.logat.LogOptionsI.prototype.logLevel;
 /** @type {number} */
tsickle_declare_module.logat.LogOptionsI.prototype.logMethod;
 /** @type {string} */
tsickle_declare_module.logat.LogOptionsI.prototype.logFileName;
/**
 * @extends {NodeJS.EventEmitter}
 * @constructor
 * @struct
 */
tsickle_declare_module.logat.Logger = function() {};

/**
 * @param {...?} args
 * @return {void}
 */
tsickle_declare_module.logat.Logger.prototype.error = function(args) {};

/**
 * @param {...?} args
 * @return {void}
 */
tsickle_declare_module.logat.Logger.prototype.warn = function(args) {};

/**
 * @param {...?} args
 * @return {void}
 */
tsickle_declare_module.logat.Logger.prototype.info = function(args) {};

/**
 * @param {...?} args
 * @return {void}
 */
tsickle_declare_module.logat.Logger.prototype.debug = function(args) {};

/**
 * @return {!LogOptionsI}
 */
tsickle_declare_module.logat.Logger.prototype.getOptions = function() {};

/**
 * @param {!LogOptionsI} options
 * @return {void}
 */
tsickle_declare_module.logat.Logger.prototype.setOptions = function(options) {};

/* TODO: ExportAssignment in tsickle_declare_module.logat */
