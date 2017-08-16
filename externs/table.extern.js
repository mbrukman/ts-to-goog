/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/table/index.d.ts:

/** @typedef {string} */
var borderType;
/**
 * @record
 * @struct
 */
function ColumnConfig() {}
 /** @type {string} */
ColumnConfig.prototype.alignment;
 /** @type {number} */
ColumnConfig.prototype.width;
 /** @type {number} */
ColumnConfig.prototype.truncate;
 /** @type {string} */
ColumnConfig.prototype.paddingLeft;
 /** @type {string} */
ColumnConfig.prototype.paddingRight;
/**
 * @record
 * @struct
 */
function JoinStruct() {}
 /** @type {string} */
JoinStruct.prototype.topBody;
 /** @type {string} */
JoinStruct.prototype.topJoin;
 /** @type {string} */
JoinStruct.prototype.topLeft;
 /** @type {string} */
JoinStruct.prototype.topRight;
 /** @type {string} */
JoinStruct.prototype.bottomBody;
 /** @type {string} */
JoinStruct.prototype.bottomJoin;
 /** @type {string} */
JoinStruct.prototype.bottomLeft;
 /** @type {string} */
JoinStruct.prototype.bottomRight;
 /** @type {string} */
JoinStruct.prototype.bodyLeft;
 /** @type {string} */
JoinStruct.prototype.bodyRight;
 /** @type {string} */
JoinStruct.prototype.bodyJoin;
 /** @type {string} */
JoinStruct.prototype.joinBody;
 /** @type {string} */
JoinStruct.prototype.joinLeft;
 /** @type {string} */
JoinStruct.prototype.joinRight;
 /** @type {string} */
JoinStruct.prototype.joinJoin;
/**
 * @record
 * @struct
 */
function TableUserConfig() {}
 /** @type {?} */
TableUserConfig.prototype.columns;
 /** @type {?} */
TableUserConfig.prototype.border;
 /** @type {?} */
TableUserConfig.prototype.columnDefault;

/**
 * @param {number} index
 * @param {number} size
 * @return {boolean}
 */
TableUserConfig.prototype.drawJoin = function(index, size) {};

/**
 * @param {!Array<?>} data
 * @param {?=} userConfig
 * @return {string}
 */
function table(data, userConfig) {}

/**
 * @param {?} userConfig
 * @return {?}
 */
function createStream(userConfig) {}

/**
 * @param {string} templateName
 * @return {?}
 */
function getBorderCharacters(templateName) {}