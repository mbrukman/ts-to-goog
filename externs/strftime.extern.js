/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/strftime/index.d.ts:
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "strftime"
/** @const */
tsickle_declare_module.strftime = {};

/** @typedef {function(string, !Date): string} */
tsickle_declare_module.strftime.strftimeFunction;
/** @const */
tsickle_declare_module.strftime.strftime = {};

/**
 * Sets locale.
 * @param {!strftime.Locale} locale
 * @return {function(string, !Date): string}
 */
tsickle_declare_module.strftime.strftime.localize = function(locale) {};

/**
 * Sets timezone.
 * @param {(string|number)} offset
 * @return {function(string, !Date): string}
 */
tsickle_declare_module.strftime.strftime.timezone = function(offset) {};
/**
 * @record
 * @struct
 */
tsickle_declare_module.strftime.strftime.LocaleFormats = function() {};
 /** @type {string} */
tsickle_declare_module.strftime.strftime.LocaleFormats.prototype.D;
 /** @type {string} */
tsickle_declare_module.strftime.strftime.LocaleFormats.prototype.F;
 /** @type {string} */
tsickle_declare_module.strftime.strftime.LocaleFormats.prototype.R;
 /** @type {string} */
tsickle_declare_module.strftime.strftime.LocaleFormats.prototype.T;
 /** @type {string} */
tsickle_declare_module.strftime.strftime.LocaleFormats.prototype.X;
 /** @type {string} */
tsickle_declare_module.strftime.strftime.LocaleFormats.prototype.c;
 /** @type {string} */
tsickle_declare_module.strftime.strftime.LocaleFormats.prototype.r;
 /** @type {string} */
tsickle_declare_module.strftime.strftime.LocaleFormats.prototype.v;
 /** @type {string} */
tsickle_declare_module.strftime.strftime.LocaleFormats.prototype.x;
/**
 * @record
 * @struct
 */
tsickle_declare_module.strftime.strftime.Locale = function() {};
 /** @type {!Array<string>} */
tsickle_declare_module.strftime.strftime.Locale.prototype.days;
 /** @type {!Array<string>} */
tsickle_declare_module.strftime.strftime.Locale.prototype.shortDays;
 /** @type {!Array<string>} */
tsickle_declare_module.strftime.strftime.Locale.prototype.months;
 /** @type {!Array<string>} */
tsickle_declare_module.strftime.strftime.Locale.prototype.shortMonths;
 /** @type {string} */
tsickle_declare_module.strftime.strftime.Locale.prototype.AM;
 /** @type {string} */
tsickle_declare_module.strftime.strftime.Locale.prototype.PM;
 /** @type {string} */
tsickle_declare_module.strftime.strftime.Locale.prototype.am;
 /** @type {string} */
tsickle_declare_module.strftime.strftime.Locale.prototype.pm;
 /** @type {!strftime.LocaleFormats} */
tsickle_declare_module.strftime.strftime.Locale.prototype.formats;

/**
 * Format a local time/date according to locale settings
 * Format a local time/date according to locale settings
 * @param {string} format
 * @param {!Date=} date
 * @return {string}
 */
tsickle_declare_module.strftime.strftime = function(format, date) {};

/* TODO: ExportAssignment in tsickle_declare_module.strftime */
