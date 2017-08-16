/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/ora/index.d.ts:

/** @typedef {string} */
var SpinnerName;

/** @typedef {string} */
var Color;
/**
 * @record
 * @struct
 */
function Options() {}
 /** @type {string} */
Options.prototype.text;
 /** @type {(string|?)} */
Options.prototype.spinner;
 /** @type {string} */
Options.prototype.color;
 /** @type {number} */
Options.prototype.interval;
 /** @type {!NodeJS.WritableStream} */
Options.prototype.stream;
 /** @type {boolean} */
Options.prototype.enabled;
/**
 * @record
 * @struct
 */
function PersistOptions() {}
 /** @type {string} */
PersistOptions.prototype.symbol;
 /** @type {string} */
PersistOptions.prototype.text;
/**
 * @record
 * @struct
 */
function Spinner() {}
 /** @type {number} */
Spinner.prototype.interval;
 /** @type {!Array<string>} */
Spinner.prototype.frames;
/**
 * @constructor
 * @struct
 */
function Ora() {}
 /** @type {string} */
Ora.prototype.text;
 /** @type {string} */
Ora.prototype.color;

/**
 * @param {string=} text
 * @return {!Ora}
 */
Ora.prototype.start = function(text) {};

/**
 * @return {!Ora}
 */
Ora.prototype.stop = function() {};

/**
 * @param {string=} text
 * @return {!Ora}
 */
Ora.prototype.succeed = function(text) {};

/**
 * @param {string=} text
 * @return {!Ora}
 */
Ora.prototype.fail = function(text) {};

/**
 * @param {string=} text
 * @return {!Ora}
 */
Ora.prototype.warn = function(text) {};

/**
 * @param {string=} text
 * @return {!Ora}
 */
Ora.prototype.info = function(text) {};

/**
 * @param {(string|?)=} options
 * @return {!Ora}
 */
Ora.prototype.stopAndPersist = function(options) {};

/**
 * @return {!Ora}
 */
Ora.prototype.clear = function() {};

/**
 * @return {!Ora}
 */
Ora.prototype.render = function() {};

/**
 * @return {!Ora}
 */
Ora.prototype.frame = function() {};

/**
 * @param {!PromiseLike<?>} action
 * @param {(string|?)=} options
 * @return {!Ora}
 */
Ora.prototype.promise = function(action, options) {};
/**
 * @record
 * @struct
 */
function oraFactory() {}

/* TODO: CallSignature:  */

/* TODO: ConstructSignature:  */
 /** @type {?} */
var ora;

/* TODO: ExportAssignment in  */
