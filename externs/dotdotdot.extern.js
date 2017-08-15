/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/dotdotdot/index.d.ts:
/**
 * @record
 * @struct
 */
function JQuery() {}

/**
 * jQuery.dotdotdot is an advanced cross-browser ellipsis for multiple line content plugin.
 * @param {!JQueryDotDotDot.IDotDotDotOptions=} options settings that could modify a behaviour.
 * @return {!JQuery}
 */
JQuery.prototype.dotdotdot = function(options) {};
/** @const */
var JQueryDotDotDot = {};
/**
 * @record
 * @struct
 */
JQueryDotDotDot.IDotDotDotOptions = function() {};
 /** @type {string} */
JQueryDotDotDot.IDotDotDotOptions.prototype.ellipsis;
 /** @type {string} */
JQueryDotDotDot.IDotDotDotOptions.prototype.wrap;
 /** @type {boolean} */
JQueryDotDotDot.IDotDotDotOptions.prototype.fallbackToLetter;
 /** @type {(string|!JQuery)} */
JQueryDotDotDot.IDotDotDotOptions.prototype.after;
 /** @type {(boolean|string)} */
JQueryDotDotDot.IDotDotDotOptions.prototype.watch;
 /** @type {number} */
JQueryDotDotDot.IDotDotDotOptions.prototype.height;
 /** @type {number} */
JQueryDotDotDot.IDotDotDotOptions.prototype.tolerance;
 /** @type {!JQueryDotDotDot.IDotDotDotOptionsLastCharacter} */
JQueryDotDotDot.IDotDotDotOptions.prototype.lastCharacter;

/**
 * Callback function that is fired after the ellipsis is added,
 * receives two parameters:
 * @param {boolean} isTruncated (boolean)
 * @param {?} orgContent (string) Documentation says it is string but it is object
 *        which has e.g.
 *                 context: HTMLHtmlElement;
 *                 length: number; // seems to be always 1
 *                 [index] // this contains the text: orgContent[0].data
 * @return {void}
 */
JQueryDotDotDot.IDotDotDotOptions.prototype.callback = function(isTruncated, orgContent) {};
/**
 * @record
 * @struct
 */
JQueryDotDotDot.IDotDotDotOptionsLastCharacter = function() {};
 /** @type {!Array<string>} */
JQueryDotDotDot.IDotDotDotOptionsLastCharacter.prototype.remove;
 /** @type {!Array<string>} */
JQueryDotDotDot.IDotDotDotOptionsLastCharacter.prototype.noEllipsis;
