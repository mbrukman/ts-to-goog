/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/convert-source-map/index.d.ts:
/**
 * @record
 * @struct
 */
function SourceMapConverter() {}
 /** @type {?} */
SourceMapConverter.prototype.sourcemap;

/**
 * Returns a copy of the underlying source map
 * @return {?}
 */
SourceMapConverter.prototype.toObject = function() {};

/**
 * Converts source map to json string. If space is given (optional), this will be passed to JSON.stringify when the JSON string is generated
 * @param {(string|number)=} space
 * @return {string}
 */
SourceMapConverter.prototype.toJSON = function(space) {};

/**
 * Converts source map to base64 encoded json string
 * @return {string}
 */
SourceMapConverter.prototype.toBase64 = function() {};

/**
 * Converts source map to an inline comment that can be appended to the source-file.
 * By default, the comment is formatted like: //# sourceMappingURL=..., which you would normally see in a JS source file.
 * When options.multiline == true, the comment is formatted like: /*# sourceMappingURL=... *\/, which you would find in a CSS source file
 * @param {?=} options
 * @return {string}
 */
SourceMapConverter.prototype.toComment = function(options) {};

/**
 * Adds given property to the source map. Throws an error if property already exists
 * @param {string} key
 * @param {?} value
 * @return {?}
 */
SourceMapConverter.prototype.addProperty = function(key, value) {};

/**
 * Sets given property to the source map. If property doesn't exist it is added, otherwise its value is updated
 * @param {string} key
 * @param {?} value
 * @return {?}
 */
SourceMapConverter.prototype.setProperty = function(key, value) {};

/**
 * Gets given property of the source map
 * @param {string} key
 * @return {?}
 */
SourceMapConverter.prototype.getProperty = function(key) {};

/**
 * Returns source map converter from given object
 * @param {?} obj
 * @return {?}
 */
function fromObject(obj) {}

/**
 * Returns source map converter from given json string
 * @param {string} json
 * @return {?}
 */
function fromJSON(json) {}

/**
 * Returns source map converter from given base64 encoded json string
 * @param {string} base64
 * @return {?}
 */
function fromBase64(base64) {}

/**
 * Returns source map converter from given base64 encoded json string prefixed with //# sourceMappingURL=...
 * @param {string} comment
 * @return {?}
 */
function fromComment(comment) {}

/**
 * Returns source map converter from given filename by parsing //# sourceMappingURL=filename.
 * filename must point to a file that is found inside the mapFileDir. Most tools store this file right next to the generated file, i.e. the one containing the source map.
 * @param {string} comment
 * @param {string} commentFileDir
 * @return {?}
 */
function fromMapFileComment(comment, commentFileDir) {}

/**
 * Finds last sourcemap comment in file and returns source map converter or returns null if no source map comment was found.
 * If largeSource is set to true, an algorithm that does not use regex is applied to find the source map.
 * This is faster and especially useful if you're running into "call stack size exceeded" errors with the default algorithm.
 * However, it is less accurate and may match content that isn't a source map comment.
 * @param {string} content
 * @param {boolean=} largeSource
 * @return {?}
 */
function fromSource(content, largeSource) {}

/**
 * Finds last sourcemap comment in file and returns source map converter or returns null if no source map comment was found.
 * The sourcemap will be read from the map file found by parsing # sourceMappingURL=file comment. For more info see fromMapFileComment.
 * @param {string} content
 * @param {string} commentFileDir
 * @return {?}
 */
function fromMapFileSource(content, commentFileDir) {}

/**
 * Returns src with all source map comments removed
 * @param {string} src
 * @return {string}
 */
function removeComments(src) {}

/**
 * Returns src with all source map comments pointing to map files removed
 * @param {string} src
 * @return {string}
 */
function removeMapFileComments(src) {}
 /** @type {!RegExp} */
var commentRegex;
 /** @type {!RegExp} */
var mapFileCommentRegex;

/**
 * Returns a comment that links to an external source map via file.
 * By default, the comment is formatted like: //# sourceMappingURL=..., which you would normally see in a JS source file.
 * When options.multiline == true, the comment is formatted like: /*# sourceMappingURL=... *\/, which you would find in a CSS source file.
 * @param {string} file
 * @param {?=} options
 * @return {string}
 */
function generateMapFileComment(file, options) {}
