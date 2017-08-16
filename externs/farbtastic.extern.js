/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/farbtastic/index.d.ts:
/** @const */
var JQueryFarbtastic = {};

/** @typedef {(string|!Element|?<!HTMLElement>)} */
JQueryFarbtastic.Placeholder;

/** @typedef {function(string): ?} */
JQueryFarbtastic.CallbackFunction;

/** @typedef {(string|!Element|?<!HTMLElement>|function(string): ?)} */
JQueryFarbtastic.Callback;
/**
 * @record
 * @struct
 */
JQueryFarbtastic.Options = function() {};
 /** @type {(string|!Element|?<!HTMLElement>|function(string): ?)} */
JQueryFarbtastic.Options.prototype.callback;
 /** @type {number} */
JQueryFarbtastic.Options.prototype.width;
 /** @type {number} */
JQueryFarbtastic.Options.prototype.wheelWidth;
/**
 * @record
 * @struct
 */
JQueryFarbtastic.Farbtastic = function() {};
 /** @type {(?<!HTMLElement>|function(string): ?)} */
JQueryFarbtastic.Farbtastic.prototype.linked;
 /** @type {string} */
JQueryFarbtastic.Farbtastic.prototype.color;
 /** @type {!Array<number>} */
JQueryFarbtastic.Farbtastic.prototype.hsl;

/**
 * @param {(string|!Element|?<!HTMLElement>|function(string): ?)} callback
 * @return {!JQueryFarbtastic.Farbtastic}
 */
JQueryFarbtastic.Farbtastic.prototype.linkTo = function(callback) {};

/**
 * @param {(string|!Array<number>)} color
 * @return {!JQueryFarbtastic.Farbtastic}
 */
JQueryFarbtastic.Farbtastic.prototype.setColor = function(color) {};

/**
 * @param {!Array<number>} hsl
 * @return {!JQueryFarbtastic.Farbtastic}
 */
JQueryFarbtastic.Farbtastic.prototype.setHSL = function(hsl) {};

/**
 * @param {(string|!Element|?<!HTMLElement>)} placeholder
 * @param {(string|!Element|?<!HTMLElement>|function(string): ?)|!JQueryFarbtastic.Options=} callback_or_options
 * @return {!JQueryFarbtastic.Farbtastic}
 */
JQueryStatic.prototype.farbtastic = function(placeholder, callback_or_options) {};

/**
 * @param {(string|!Element|?<!HTMLElement>|function(string): ?)|!JQueryFarbtastic.Options=} callback_or_options
 * @return {?<!HTMLElement>}
 */
JQuery.prototype.farbtastic = function(callback_or_options) {};
