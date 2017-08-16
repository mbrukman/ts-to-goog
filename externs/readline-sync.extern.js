/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/readline-sync/index.d.ts:

/** @typedef {(string|number|!RegExp|?)} */
var OptionType;
/**
 * @record
 * @struct
 */
function BasicOptions() {}
 /** @type {?} */
BasicOptions.prototype.prompt;
 /** @type {boolean} */
BasicOptions.prototype.hideEchoBack;
 /** @type {string} */
BasicOptions.prototype.mask;
 /** @type {(string|number|!RegExp|?|!Array<(string|number|!RegExp|?)>)} */
BasicOptions.prototype.limit;
 /** @type {string} */
BasicOptions.prototype.limitMessage;
 /** @type {string} */
BasicOptions.prototype.defaultInput;
 /** @type {(string|number|!RegExp|?|!Array<(string|number|!RegExp|?)>)} */
BasicOptions.prototype.trueValue;
 /** @type {(string|number|!RegExp|?|!Array<(string|number|!RegExp|?)>)} */
BasicOptions.prototype.falseValue;
 /** @type {boolean} */
BasicOptions.prototype.caseSensitive;
 /** @type {boolean} */
BasicOptions.prototype.keepWhitespace;
 /** @type {string} */
BasicOptions.prototype.encoding;
 /** @type {number} */
BasicOptions.prototype.bufferSize;
 /** @type {boolean} */
BasicOptions.prototype.history;
 /** @type {boolean} */
BasicOptions.prototype.cd;
 /** @type {string} */
BasicOptions.prototype.charlist;
 /** @type {?} */
BasicOptions.prototype.min;
 /** @type {?} */
BasicOptions.prototype.max;
 /** @type {?} */
BasicOptions.prototype.confirmMessage;
 /** @type {?} */
BasicOptions.prototype.unmatchMessage;
 /** @type {?} */
BasicOptions.prototype.exists;
 /** @type {boolean} */
BasicOptions.prototype.isFile;
 /** @type {boolean} */
BasicOptions.prototype.isDirectory;
 /** @type {boolean} */
BasicOptions.prototype.create;
 /** @type {boolean} */
BasicOptions.prototype.guide;

/**
 * @param {string} display
 * @param {string} encoding
 * @return {void}
 */
BasicOptions.prototype.print = function(display, encoding) {};

/**
 * @param {string} path
 * @return {(string|boolean)}
 */
BasicOptions.prototype.validate = function(path) {};

/**
 * @param {?=} query
 * @param {?=} options
 * @return {string}
 */
function question(query, options) {}

/**
 * @param {?=} options
 * @return {string}
 */
function prompt(options) {}

/**
 * @param {?=} query
 * @param {?=} options
 * @return {string}
 */
function keyIn(query, options) {}

/**
 * @param {?=} options
 * @return {?}
 */
function setDefaultOptions(options) {}

/**
 * @param {?=} query
 * @param {?=} options
 * @return {string}
 */
function questionEMail(query, options) {}

/**
 * @param {?=} query
 * @param {?=} options
 * @return {string}
 */
function questionNewPassword(query, options) {}

/**
 * @param {?=} query
 * @param {?=} options
 * @return {number}
 */
function questionInt(query, options) {}

/**
 * @param {?=} query
 * @param {?=} options
 * @return {number}
 */
function questionFloat(query, options) {}

/**
 * @param {?=} query
 * @param {?=} options
 * @return {string}
 */
function questionPath(query, options) {}

/**
 * @param {?=} commandHandler
 * @param {?=} options
 * @return {!Array<string>}
 */
function promptCL(commandHandler, options) {}

/**
 * @param {?} inputHandler
 * @param {?=} options
 * @return {void}
 */
function promptLoop(inputHandler, options) {}

/**
 * @param {?=} commandHandler
 * @param {?=} options
 * @return {void}
 */
function promptCLLoop(commandHandler, options) {}

/**
 * @param {?=} options
 * @return {string}
 */
function promptSimShell(options) {}

/**
 * @param {?=} query
 * @param {?=} options
 * @return {(string|boolean)}
 */
function keyInYN(query, options) {}

/**
 * @param {?=} query
 * @param {?=} options
 * @return {boolean}
 */
function keyInYNStrict(query, options) {}

/**
 * @param {?=} query
 * @param {?=} options
 * @return {void}
 */
function keyInPause(query, options) {}

/**
 * @param {!Array<string>} items
 * @param {?=} query
 * @param {?=} options
 * @return {number}
 */
function keyInSelect(items, query, options) {}

/**
 * @return {string}
 */
function getRawInput() {}

/**
 * @deprecated Use the bufferSize option instead: readlineSync.setDefaultOptions({bufferSize: value});
 * @param {number} value
 * @return {void}
 */
function setBufferSize(value) {}

/**
 * @deprecated Use the encoding option instead: readlineSync.setDefaultOptions({encoding: value});
 * @param {string} value
 * @return {void}
 */
function setEncoding(value) {}

/**
 * @deprecated Use the mask option instead: readlineSync.setDefaultOptions({mask: value});
 * @param {string} value
 * @return {void}
 */
function setMask(value) {}

/**
 * @deprecated Use the print option instead: readlineSync.setDefaultOptions({print: value});
 * @param {?} value
 * @return {void}
 */
function setPrint(value) {}

/**
 * @deprecated Use the prompt option instead: readlineSync.setDefaultOptions({prompt: value});
 * @param {?} value
 * @return {void}
 */
function setPrompt(value) {}
