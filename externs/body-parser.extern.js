/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/body-parser/index.d.ts:

/* TODO: ImportDeclaration in  */

/**
 * @param {?=} options
 * @return {!e.RequestHandler}
 */
function bodyParser(options) {}
/**
 * @record
 * @struct
 */
bodyParser.Options = function() {};
 /** @type {boolean} */
bodyParser.Options.prototype.inflate;
 /** @type {(string|number)} */
bodyParser.Options.prototype.limit;
 /** @type {(string|!Array<string>|function(!e.Request): ?)} */
bodyParser.Options.prototype.type;

/**
 * @param {!e.Request} req
 * @param {!e.Response} res
 * @param {?} buf
 * @param {string} encoding
 * @return {void}
 */
bodyParser.Options.prototype.verify = function(req, res, buf, encoding) {};
/**
 * @extends {bodyParser.Options}
 * @record
 * @struct
 */
bodyParser.OptionsJson = function() {};
 /** @type {boolean} */
bodyParser.OptionsJson.prototype.strict;

/**
 * @param {string} key
 * @param {?} value
 * @return {?}
 */
bodyParser.OptionsJson.prototype.reviver = function(key, value) {};
/**
 * @extends {bodyParser.Options}
 * @record
 * @struct
 */
bodyParser.OptionsText = function() {};
 /** @type {string} */
bodyParser.OptionsText.prototype.defaultCharset;
/**
 * @extends {bodyParser.Options}
 * @record
 * @struct
 */
bodyParser.OptionsUrlencoded = function() {};
 /** @type {boolean} */
bodyParser.OptionsUrlencoded.prototype.extended;
 /** @type {number} */
bodyParser.OptionsUrlencoded.prototype.parameterLimit;

/**
 * @param {!bodyParser.OptionsJson=} options
 * @return {!e.RequestHandler}
 */
bodyParser.json = function(options) {};

/**
 * @param {!bodyParser.Options=} options
 * @return {!e.RequestHandler}
 */
bodyParser.raw = function(options) {};

/**
 * @param {!bodyParser.OptionsText=} options
 * @return {!e.RequestHandler}
 */
bodyParser.text = function(options) {};

/**
 * @param {!bodyParser.OptionsUrlencoded=} options
 * @return {!e.RequestHandler}
 */
bodyParser.urlencoded = function(options) {};

/* TODO: ExportAssignment in  */
