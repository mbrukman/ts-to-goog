/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/z-schema/index.d.ts:
/** @const */
var Validator = {};
/**
 * @record
 * @struct
 */
Validator.Options = function() {};
 /** @type {number} */
Validator.Options.prototype.asyncTimeout;
 /** @type {boolean} */
Validator.Options.prototype.forceAdditional;
 /** @type {boolean} */
Validator.Options.prototype.assumeAdditional;
 /** @type {boolean} */
Validator.Options.prototype.forceItems;
 /** @type {boolean} */
Validator.Options.prototype.forceMinItems;
 /** @type {boolean} */
Validator.Options.prototype.forceMaxItems;
 /** @type {boolean} */
Validator.Options.prototype.forceMinLength;
 /** @type {boolean} */
Validator.Options.prototype.forceMaxLength;
 /** @type {boolean} */
Validator.Options.prototype.forceProperties;
 /** @type {boolean} */
Validator.Options.prototype.ignoreUnresolvableReferences;
 /** @type {boolean} */
Validator.Options.prototype.noExtraKeywords;
 /** @type {boolean} */
Validator.Options.prototype.noTypeless;
 /** @type {boolean} */
Validator.Options.prototype.noEmptyStrings;
 /** @type {boolean} */
Validator.Options.prototype.noEmptyArrays;
 /** @type {boolean} */
Validator.Options.prototype.strictUris;
 /** @type {boolean} */
Validator.Options.prototype.strictMode;
 /** @type {boolean} */
Validator.Options.prototype.reportPathAsArray;
 /** @type {boolean} */
Validator.Options.prototype.breakOnFirstError;
 /** @type {boolean} */
Validator.Options.prototype.pedanticCheck;
 /** @type {boolean} */
Validator.Options.prototype.ignoreUnknownFormats;
/**
 * @record
 * @struct
 */
Validator.SchemaError = function() {};
 /** @type {string} */
Validator.SchemaError.prototype.name;
 /** @type {string} */
Validator.SchemaError.prototype.message;
 /** @type {!Array<!Validator.SchemaErrorDetail>} */
Validator.SchemaError.prototype.details;
/**
 * @record
 * @struct
 */
Validator.SchemaErrorDetail = function() {};
 /** @type {string} */
Validator.SchemaErrorDetail.prototype.message;
 /** @type {string} */
Validator.SchemaErrorDetail.prototype.code;
 /** @type {!Array<string>} */
Validator.SchemaErrorDetail.prototype.params;
 /** @type {string} */
Validator.SchemaErrorDetail.prototype.path;
 /** @type {string} */
Validator.SchemaErrorDetail.prototype.description;
 /** @type {!Array<!Validator.SchemaErrorDetail>} */
Validator.SchemaErrorDetail.prototype.inner;

/**
 * Register a custom format.
 * 
 * @param {string} formatName
 * @param {function(?): boolean} validatorFunction - custom format validator function.
 *   Returns `true` if `value` matches the custom format.
 * @return {void}
 */
Validator.registerFormat = function(formatName, validatorFunction) {};

/**
 * Unregister a format.
 * 
 * @param {string} name - name of the custom format
 * @return {void}
 */
Validator.unregisterFormat = function(name) {};

/**
 * Get the list of all registered formats.
 * 
 * Both the names of the burned-in formats and the custom format names are
 * returned by this function.
 * 
 * @return {!Array<string>}
 */
Validator.getRegisteredFormats = function() {};

/**
 * @return {!Validator.Options}
 */
Validator.getDefaultOptions = function() {};

/**
 * @param {?} schema - JSON object representing schema
 * @return {boolean}
 */
Validator.prototype.validateSchema = function(schema) {};

/**
 * @param {?} json - either a JSON string or a parsed JSON object
 * @param {?} schema - the JSON object representing the schema
 * @param {function(?, boolean): void=} callback
 * @return {boolean|void} true if json matches schema
 */
Validator.prototype.validate = function(json, schema, callback) {};

/**
 * Returns an Error object for the most recent failed validation, or null if the validation was successful.
 * @return {!Validator.SchemaError}
 */
Validator.prototype.getLastError = function() {};

/**
 * Returns the error details for the most recent validation, or undefined if the validation was successful.
 * This is the same list as the SchemaError.details property.
 * @return {!Array<!Validator.SchemaErrorDetail>}
 */
Validator.prototype.getLastErrors = function() {};

/* TODO: ExportAssignment in  */