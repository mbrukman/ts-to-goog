/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/jjv/index.d.ts:

/**
 * @return {!jjv.Env}
 */
function jjv() {}
/**
 * @record
 * @struct
 */
jjv.Errors = function() {};
 /** @type {!Object<string,{required: boolean, type: string}>} */
jjv.Errors.prototype.validation;
/**
 * @record
 * @struct
 */
jjv.Options = function() {};
 /** @type {boolean} */
jjv.Options.prototype.checkRequired;
 /** @type {boolean} */
jjv.Options.prototype.useDefault;
 /** @type {boolean} */
jjv.Options.prototype.useCoerce;
 /** @type {boolean} */
jjv.Options.prototype.removeAdditional;
/**
 * @record
 * @struct
 */
jjv.Env = function() {};
 /** @type {!jjv.Options} */
jjv.Env.prototype.defaultOptions;

/**
 * @param {string} name
 * @param {!Object} schema
 * @return {void}
 */
jjv.Env.prototype.addSchema = function(name, schema) {};

/**
 * @param {string} name
 * @param {function(?): ?} parse
 * @return {void}
 */
jjv.Env.prototype.addType = function(name, parse) {};

/**
 * @param {string} name
 * @param {function(?): ?} parse
 * @return {void}
 */
jjv.Env.prototype.addFormat = function(name, parse) {};

/**
 * @param {string} name
 * @param {function(?, ?): ?} check
 * @return {void}
 */
jjv.Env.prototype.addCheck = function(name, check) {};

/**
 * @param {string} name
 * @param {function(?): ?} coerce
 * @return {void}
 */
jjv.Env.prototype.addTypeCoercion = function(name, coerce) {};

/**
 * @param {string|!Object} name_or_schema
 * @param {?} object
 * @param {!jjv.Options=} options
 * @return {!jjv.Errors}
 */
jjv.Env.prototype.validate = function(name_or_schema, object, options) {};

/* TODO: ExportAssignment in  */
