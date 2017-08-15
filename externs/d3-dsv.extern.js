/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/d3-dsv/index.d.ts:
/**
 * @record
 * @struct
 */
function DSVRowString() {}

/* TODO: IndexSignature:  */
/**
 * @record
 * @struct
 */
function DSVRowAny() {}

/* TODO: IndexSignature:  */
/**
 * @record
 * @struct
 */
function DSVParsedArray() {}
 /** @type {!Array<string>} */
DSVParsedArray.prototype.columns;

/**
 * @template ParsedRow
 * @param {string} csvString
 * @param {?=} row
 * @return {?}
 */
function csvParse(csvString, row) {}

/**
 * @template ParsedRow
 * @param {string} csvString
 * @param {?=} row
 * @return {!Array<!Array<string>>|!Array<?>}
 */
function csvParseRows(csvString, row) {}

/**
 * @param {!Array<?>} rows
 * @param {!Array<string>=} columns
 * @return {string}
 */
function csvFormat(rows, columns) {}

/**
 * @param {!Array<!Array<string>>} rows
 * @return {string}
 */
function csvFormatRows(rows) {}

/**
 * @template MappedRow
 * @param {string} tsvString
 * @param {?=} row
 * @return {?}
 */
function tsvParse(tsvString, row) {}

/**
 * @template MappedRow
 * @param {string} tsvString
 * @param {?=} row
 * @return {!Array<!Array<string>>|!Array<?>}
 */
function tsvParseRows(tsvString, row) {}

/**
 * @param {!Array<?>} rows
 * @param {!Array<string>=} columns
 * @return {string}
 */
function tsvFormat(rows, columns) {}

/**
 * @param {!Array<!Array<string>>} rows
 * @return {string}
 */
function tsvFormatRows(rows) {}
/**
 * @record
 * @struct
 */
function DSV() {}

/**
 * @template ParsedRow
 * @param {string} dsvString
 * @param {?=} row
 * @return {?}
 */
DSV.prototype.parse = function(dsvString, row) {};

/**
 * @template ParsedRow
 * @param {string} dsvString
 * @param {?=} row
 * @return {!Array<!Array<string>>|!Array<?>}
 */
DSV.prototype.parseRows = function(dsvString, row) {};

/**
 * @param {!Array<?>} rows
 * @param {!Array<string>=} columns
 * @return {string}
 */
DSV.prototype.format = function(rows, columns) {};

/**
 * @param {!Array<!Array<string>>} rows
 * @return {string}
 */
DSV.prototype.formatRows = function(rows) {};

/**
 * @param {string} delimiter
 * @return {?}
 */
function dsvFormat(delimiter) {}
