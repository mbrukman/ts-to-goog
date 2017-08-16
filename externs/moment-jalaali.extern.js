/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/moment-jalaali/index.d.ts:

/* TODO: ImportDeclaration in  */

/* TODO: ExportAssignment in  */
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "moment"

/** @typedef {string} */
tsickle_declare_module.moment.JUnitOfTime;
/**
 * @record
 * @struct
 */
tsickle_declare_module.moment.LoadPersianOptions = function() {};
 /** @type {boolean} */
tsickle_declare_module.moment.LoadPersianOptions.prototype.usePersianDigits;

/**
 * Add persian language.
 * @param {!LoadPersianOptions=} options
 * @return {void}
 */
tsickle_declare_module.moment.loadPersian = function(options) {};

/**
 * @param {number} year
 * @return {boolean}
 */
tsickle_declare_module.moment.jIsLeapYear = function(year) {};

/**
 * @param {number} year
 * @param {number} month
 * @return {number}
 */
tsickle_declare_module.moment.jDaysInMonth = function(year, month) {};

/**
 * @param {string} jUnitOfTime
 * @return {!moment.Moment}
 */
tsickle_declare_module.moment.Moment.prototype.startOf = function(jUnitOfTime) {};

/**
 * @param {string} jUnitOfTime
 * @return {!moment.Moment}
 */
tsickle_declare_module.moment.Moment.prototype.endOf = function(jUnitOfTime) {};

/**
 * @param {(string|number)} amount
 * @param {string} jUnitOfTime
 * @return {!moment.Moment}
 */
tsickle_declare_module.moment.Moment.prototype.add = function(amount, jUnitOfTime) {};

/**
 * @param {(string|number)} amount
 * @param {string} jUnitOfTime
 * @return {!moment.Moment}
 */
tsickle_declare_module.moment.Moment.prototype.subtract = function(amount, jUnitOfTime) {};

/**
 * @param {number=} y
 * @return {!moment.Moment|number}
 */
tsickle_declare_module.moment.Moment.prototype.jYear = function(y) {};

/**
 * @param {(string|number)=} M
 * @return {!moment.Moment|number}
 */
tsickle_declare_module.moment.Moment.prototype.jMonth = function(M) {};

/**
 * @param {number=} d
 * @return {!moment.Moment|number}
 */
tsickle_declare_module.moment.Moment.prototype.jDate = function(d) {};

/**
 * @param {number=} d
 * @return {!moment.Moment|number}
 */
tsickle_declare_module.moment.Moment.prototype.jWeek = function(d) {};

/**
 * @param {number=} d
 * @return {!moment.Moment|number}
 */
tsickle_declare_module.moment.Moment.prototype.jWeekYear = function(d) {};

/**
 * @param {number=} d
 * @return {!moment.Moment|number}
 */
tsickle_declare_module.moment.Moment.prototype.jDayOfYear = function(d) {};
