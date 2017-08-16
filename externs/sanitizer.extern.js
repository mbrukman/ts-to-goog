/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/sanitizer/index.d.ts:
/**
 * @record
 * @struct
 */
function ISaxHandler() {}

/**
 * @param {string} name
 * @param {!Array<string>} attribs
 * @param {?} param
 * @return {void}
 */
ISaxHandler.prototype.startTag = function(name, attribs, param) {};

/**
 * @param {string} name
 * @param {?} param
 * @return {void}
 */
ISaxHandler.prototype.endTag = function(name, param) {};

/**
 * @param {string} text
 * @param {?} param
 * @return {void}
 */
ISaxHandler.prototype.pcdata = function(text, param) {};

/**
 * @param {string} text
 * @param {?} param
 * @return {void}
 */
ISaxHandler.prototype.cdata = function(text, param) {};

/**
 * @param {string} text
 * @param {?} param
 * @return {void}
 */
ISaxHandler.prototype.rcdata = function(text, param) {};

/**
 * @param {string} text
 * @param {?} param
 * @return {void}
 */
ISaxHandler.prototype.comment = function(text, param) {};

/**
 * @param {?} param
 * @return {void}
 */
ISaxHandler.prototype.startDoc = function(param) {};

/**
 * @param {?} param
 * @return {void}
 */
ISaxHandler.prototype.endDoc = function(param) {};

/**
 * @param {string} s
 * @return {string}
 */
function escape(s) {}

/**
 * @param {?} yourHandler
 * @return {function(!Array<?>): ?}
 */
function makeSaxParser(yourHandler) {}

/**
 * @param {string} s
 * @return {string}
 */
function normalizeRCData(s) {}

/**
 * @param {string} s
 * @return {string}
 */
function sanitize(s) {}

/**
 * @param {string} s
 * @return {string}
 */
function unescapeEntities(s) {}
