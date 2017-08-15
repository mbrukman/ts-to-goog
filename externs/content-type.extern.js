/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/content-type/index.d.ts:

/* TODO: ImportDeclaration in  */
 /** @type {!ct.StaticFunctions} */
var ct;

/* TODO: ExportAssignment in  */
/**
 * @record
 * @struct
 */
ct.StaticFunctions = function() {};

/**
 * @param {(string|!e.Request|!e.Response)} input
 * @return {!ct.MediaType}
 */
ct.StaticFunctions.prototype.parse = function(input) {};

/**
 * @param {!ct.MediaType} obj
 * @return {string}
 */
ct.StaticFunctions.prototype.format = function(obj) {};
/**
 * @record
 * @struct
 */
ct.MediaType = function() {};
 /** @type {string} */
ct.MediaType.prototype.type;
 /** @type {?} */
ct.MediaType.prototype.parameters;