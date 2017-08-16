/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/isbn-utils/index.d.ts:

/** @typedef {?} */
var IGroups;
/**
 * @constructor
 * @struct
 */
function ISBNcodes() {}
 /** @type {string} */
ISBNcodes.prototype.source;
 /** @type {string} */
ISBNcodes.prototype.prefix;
 /** @type {string} */
ISBNcodes.prototype.group;
 /** @type {string} */
ISBNcodes.prototype.publisher;
 /** @type {string} */
ISBNcodes.prototype.article;
 /** @type {string} */
ISBNcodes.prototype.check;
 /** @type {string} */
ISBNcodes.prototype.check10;
 /** @type {string} */
ISBNcodes.prototype.check13;
 /** @type {string} */
ISBNcodes.prototype.groupname;

/**
 * @constructor
 * @struct
 * @param {string} val
 * @param {?} groups
 */
function ISBN(val, groups) {}
 /** @type {?} */
ISBN.prototype.codes;

/**
 * @param {boolean=} hyphenate
 * @return {string}
 */
ISBN.prototype.asIsbn10 = function(hyphenate) {};

/**
 * @param {boolean=} hyphenate
 * @return {string}
 */
ISBN.prototype.asIsbn13 = function(hyphenate) {};

/**
 * @return {boolean}
 */
ISBN.prototype.isIsbn10 = function() {};

/**
 * @return {boolean}
 */
ISBN.prototype.isIsbn13 = function() {};

/**
 * @return {boolean}
 */
ISBN.prototype.isValid = function() {};

/**
 * @param {string} isbn
 * @param {boolean=} hyphenate
 * @return {string}
 */
function asIsbn10(isbn, hyphenate) {}

/**
 * @param {string} isbn
 * @param {boolean=} hyphenate
 * @return {string}
 */
function asIsbn13(isbn, hyphenate) {}

/**
 * @param {string} isbn
 * @param {?=} groups
 * @return {?}
 */
function parse(isbn, groups) {}

/**
 * @param {string} isbn
 * @return {string}
 */
function hyphenate(isbn) {}

/**
 * @param {string} isbn
 * @param {?=} groups
 * @return {boolean}
 */
function isValid(isbn, groups) {}