/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/revalidator/index.d.ts:
/** @const */
var Revalidator = {};
/**
 * @record
 * @struct
 */
Revalidator.IOptions = function() {};
 /** @type {boolean} */
Revalidator.IOptions.prototype.validateFormats;
 /** @type {boolean} */
Revalidator.IOptions.prototype.validateFormatsStrict;
 /** @type {boolean} */
Revalidator.IOptions.prototype.validateFormatExtensions;
 /** @type {boolean} */
Revalidator.IOptions.prototype.additionalProperties;
 /** @type {boolean} */
Revalidator.IOptions.prototype.cast;
/**
 * @record
 * @struct
 */
Revalidator.RevalidatorStatic = function() {};

/**
 * @template T
 * @param {T} object
 * @param {!Revalidator.JSONSchema<T>} schema
 * @param {!Revalidator.IOptions=} options
 * @return {!Revalidator.IReturnMessage}
 */
Revalidator.RevalidatorStatic.prototype.validate = function(object, schema, options) {};

/** @typedef {string} */
Revalidator.Types;

/** @typedef {string} */
Revalidator.Formats;
/**
 * @record
 * @struct
 */
Revalidator.IErrrorProperty = function() {};
 /** @type {string} */
Revalidator.IErrrorProperty.prototype.property;
 /** @type {string} */
Revalidator.IErrrorProperty.prototype.message;
/**
 * @record
 * @struct
 */
Revalidator.IReturnMessage = function() {};
 /** @type {boolean} */
Revalidator.IReturnMessage.prototype.valid;
 /** @type {!Array<!Revalidator.IErrrorProperty>} */
Revalidator.IReturnMessage.prototype.errors;
/**
 * @record
 * @struct
 */
Revalidator.JSONSchema = function() {};
 /** @type {!Revalidator.ISchemas<T>} */
Revalidator.JSONSchema.prototype.properties;
/**
 * @record
 * @struct
 */
Revalidator.ISchemas = function() {};

/* TODO: IndexSignature: Revalidator */
/**
 * @record
 * @struct
 */
Revalidator.ISchema = function() {};
 /** @type {(string|!Array<string>)} */
Revalidator.ISchema.prototype.type;
 /** @type {boolean} */
Revalidator.ISchema.prototype.required;
 /** @type {(string|!RegExp)} */
Revalidator.ISchema.prototype.pattern;
 /** @type {number} */
Revalidator.ISchema.prototype.maxLength;
 /** @type {string} */
Revalidator.ISchema.prototype.description;
 /** @type {number} */
Revalidator.ISchema.prototype.minLength;
 /** @type {number} */
Revalidator.ISchema.prototype.minimum;
 /** @type {number} */
Revalidator.ISchema.prototype.maximum;
 /** @type {boolean} */
Revalidator.ISchema.prototype.allowEmpty;
 /** @type {number} */
Revalidator.ISchema.prototype.exclusiveMinimum;
 /** @type {number} */
Revalidator.ISchema.prototype.exclusiveMaximum;
 /** @type {number} */
Revalidator.ISchema.prototype.divisibleBy;
 /** @type {number} */
Revalidator.ISchema.prototype.minItems;
 /** @type {number} */
Revalidator.ISchema.prototype.maxItems;
 /** @type {boolean} */
Revalidator.ISchema.prototype.uniqueItems;
 /** @type {!Array<?>} */
Revalidator.ISchema.prototype.enum;
 /** @type {string} */
Revalidator.ISchema.prototype.message;
 /** @type {!Object<string,string>} */
Revalidator.ISchema.prototype.messages;
 /** @type {?} */
Revalidator.ISchema.prototype.default;
 /** @type {string} */
Revalidator.ISchema.prototype.format;
 /** @type {function(?, T): boolean} */
Revalidator.ISchema.prototype.conform;
 /** @type {string} */
Revalidator.ISchema.prototype.dependencies;
 /** @type {!Revalidator.RevalidatorStatic} */
var revalidator;
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "revalidator"
/** @const */
tsickle_declare_module.revalidator = {};

/* TODO: ExportAssignment in tsickle_declare_module.revalidator */
