/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/csv-stringify/index.d.ts:
/** @const */
var stringify = {};
/**
 * @record
 * @struct
 */
stringify.StringifyOpts = function() {};
 /** @type {!Array<string>} */
stringify.StringifyOpts.prototype.columns;
 /** @type {string} */
stringify.StringifyOpts.prototype.delimiter;
 /** @type {boolean} */
stringify.StringifyOpts.prototype.eof;
 /** @type {boolean} */
stringify.StringifyOpts.prototype.escape;
 /** @type {boolean} */
stringify.StringifyOpts.prototype.header;
 /** @type {string} */
stringify.StringifyOpts.prototype.lineBreaks;
 /** @type {string} */
stringify.StringifyOpts.prototype.quote;
 /** @type {boolean} */
stringify.StringifyOpts.prototype.quoted;
 /** @type {boolean} */
stringify.StringifyOpts.prototype.quotedEmpty;
 /** @type {boolean} */
stringify.StringifyOpts.prototype.quotedString;
 /** @type {string} */
stringify.StringifyOpts.prototype.rowDelimiter;
 /** @type {!stringify.FormatterOpts} */
stringify.StringifyOpts.prototype.formatters;
/**
 * @record
 * @struct
 */
stringify.FormatterOpts = function() {};
 /** @type {function(boolean): string} */
stringify.FormatterOpts.prototype.bool;
 /** @type {function(!Date): string} */
stringify.FormatterOpts.prototype.date;
 /** @type {function(?): string} */
stringify.FormatterOpts.prototype.object;
/**
 * @extends {NodeJS.ReadWriteStream}
 * @record
 * @struct
 */
stringify.Stringifier = function() {};

/**
 * @param {?|(string|?)} line_or_buffer
 * @param {string|function(!Error, string): void=} encoding_or_cb
 * @param {function(!Error, string): void=} cb
 * @return {boolean}
 */
stringify.Stringifier.prototype.write = function(line_or_buffer, encoding_or_cb, cb) {};

/**
 * Streaming stringifier
 * Callback version: string in --> callback with string out
 * @param {!stringify.StringifyOpts|(!Array<!Array<?>>|!Array<!Object>)=} opts_or_input
 * @param {!stringify.StringifyOpts|function(!Error, string): void=} opts_or_callback
 * @param {function(!Error, string): void=} callback
 * @return {!stringify.Stringifier|void}
 */
function stringify(opts_or_input, opts_or_callback, callback) {}

/* TODO: ExportAssignment in  */
