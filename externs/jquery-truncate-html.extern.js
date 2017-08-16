/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/jquery-truncate-html/index.d.ts:
/**
 * @record
 * @struct
 */
function TruncateOptions() {}
 /** @type {number} */
TruncateOptions.prototype.length;
 /** @type {boolean} */
TruncateOptions.prototype.stripTags;
 /** @type {boolean} */
TruncateOptions.prototype.words;
 /** @type {boolean} */
TruncateOptions.prototype.noBreaks;
 /** @type {string} */
TruncateOptions.prototype.ellipsis;

/**
 * @param {!TruncateOptions} options
 * @return {?<!HTMLElement>}
 */
JQuery.prototype.truncate = function(options) {};

/**
 * @param {string} html
 * @param {!TruncateOptions} options
 * @return {string}
 */
JQueryStatic.prototype.truncate = function(html, options) {};
