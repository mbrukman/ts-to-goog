/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/joi/index.d.ts:
/**
 * @record
 * @struct
 */
function ValidationOptions() {}
 /** @type {boolean} */
ValidationOptions.prototype.abortEarly;
 /** @type {boolean} */
ValidationOptions.prototype.convert;
 /** @type {boolean} */
ValidationOptions.prototype.allowUnknown;
 /** @type {boolean} */
ValidationOptions.prototype.skipFunctions;
 /** @type {(boolean|?)} */
ValidationOptions.prototype.stripUnknown;
 /** @type {!Object} */
ValidationOptions.prototype.language;
 /** @type {string} */
ValidationOptions.prototype.presence;
 /** @type {!Object} */
ValidationOptions.prototype.context;
 /** @type {boolean} */
ValidationOptions.prototype.noDefaults;
/**
 * @record
 * @struct
 */
function RenameOptions() {}
 /** @type {boolean} */
RenameOptions.prototype.alias;
 /** @type {boolean} */
RenameOptions.prototype.multiple;
 /** @type {boolean} */
RenameOptions.prototype.override;
 /** @type {boolean} */
RenameOptions.prototype.ignoreUndefined;
/**
 * @record
 * @struct
 */
function EmailOptions() {}
 /** @type {(number|boolean)} */
EmailOptions.prototype.errorLevel;
 /** @type {(!Object|!Array<string>)} */
EmailOptions.prototype.tldWhitelist;
 /** @type {number} */
EmailOptions.prototype.minDomainAtoms;
/**
 * @record
 * @struct
 */
function IpOptions() {}
 /** @type {(string|!Array<string>)} */
IpOptions.prototype.version;
 /** @type {string} */
IpOptions.prototype.cidr;

/** @typedef {string} */
var GuidVersions;
/**
 * @record
 * @struct
 */
function GuidOptions() {}
 /** @type {(string|!Array<string>)} */
GuidOptions.prototype.version;
/**
 * @record
 * @struct
 */
function UriOptions() {}
 /** @type {(string|!RegExp|!Array<(string|!RegExp)>)} */
UriOptions.prototype.scheme;
/**
 * @record
 * @struct
 */
function WhenOptions() {}
 /** @type {?} */
WhenOptions.prototype.is;
 /** @type {?} */
WhenOptions.prototype.then;
 /** @type {?} */
WhenOptions.prototype.otherwise;
/**
 * @record
 * @struct
 */
function ReferenceOptions() {}
 /** @type {string} */
ReferenceOptions.prototype.separator;
 /** @type {string} */
ReferenceOptions.prototype.contextPrefix;
/**
 * @record
 * @struct
 */
function IPOptions() {}
 /** @type {!Array<string>} */
IPOptions.prototype.version;
 /** @type {string} */
IPOptions.prototype.cidr;
/**
 * @record
 * @struct
 */
function ValidationError() {}
 /** @type {boolean} */
ValidationError.prototype.isJoi;
 /** @type {!Array<?>} */
ValidationError.prototype.details;
 /** @type {?} */
ValidationError.prototype._object;

/**
 * @return {string}
 */
ValidationError.prototype.annotate = function() {};
/**
 * @record
 * @struct
 */
function ValidationErrorItem() {}
 /** @type {string} */
ValidationErrorItem.prototype.message;
 /** @type {string} */
ValidationErrorItem.prototype.type;
 /** @type {string} */
ValidationErrorItem.prototype.path;
 /** @type {?} */
ValidationErrorItem.prototype.options;
 /** @type {?} */
ValidationErrorItem.prototype.context;
/**
 * @record
 * @struct
 */
function ValidationErrorFunction() {}

/* TODO: CallSignature:  */
/**
 * @record
 * @struct
 */
function ValidationResult() {}
 /** @type {?} */
ValidationResult.prototype.error;
 /** @type {?} */
ValidationResult.prototype.value;
/**
 * @record
 * @struct
 */
function SchemaMap() {}

/* TODO: IndexSignature:  */
/**
 * @extends {AnySchema}
 * @record
 * @struct
 */
function Schema() {}
/**
 * @extends {Schema}
 * @record
 * @struct
 */
function Reference() {}
/**
 * @record
 * @struct
 */
function AnySchema() {}

/**
 * Validates a value using the schema and options.
 * @template T, R
 * @param {?} value
 * @param {?=} options_or_callback
 * @param {?=} callback
 * @return {?}
 */
AnySchema.prototype.validate = function(value, options_or_callback, callback) {};

/**
 * Whitelists a value
 * @param {?|!Array<?>} value_or_values
 * @param {...?} values
 * @return {?}
 */
AnySchema.prototype.allow = function(value_or_values, values) {};

/**
 * Adds the provided values into the allowed whitelist and marks them as the only valid values allowed.
 * @param {?|!Array<?>} value_or_values
 * @param {...?} values
 * @return {?}
 */
AnySchema.prototype.valid = function(value_or_values, values) {};

/**
 * @param {?|!Array<?>} value_or_values
 * @param {...?} values
 * @return {?}
 */
AnySchema.prototype.only = function(value_or_values, values) {};

/**
 * @param {?|!Array<?>} value_or_values
 * @param {...?} values
 * @return {?}
 */
AnySchema.prototype.equal = function(value_or_values, values) {};

/**
 * Blacklists a value
 * @param {?|!Array<?>} value_or_values
 * @param {...?} values
 * @return {?}
 */
AnySchema.prototype.invalid = function(value_or_values, values) {};

/**
 * @param {?|!Array<?>} value_or_values
 * @param {...?} values
 * @return {?}
 */
AnySchema.prototype.disallow = function(value_or_values, values) {};

/**
 * @param {?|!Array<?>} value_or_values
 * @param {...?} values
 * @return {?}
 */
AnySchema.prototype.not = function(value_or_values, values) {};

/**
 * Marks a key as required which will not allow undefined as value. All keys are optional by default.
 * @return {?}
 */
AnySchema.prototype.required = function() {};

/**
 * Marks a key as optional which will allow undefined as values. Used to annotate the schema for readability as all keys are optional by default.
 * @return {?}
 */
AnySchema.prototype.optional = function() {};

/**
 * Marks a key as forbidden which will not allow any value except undefined. Used to explicitly forbid keys.
 * @return {?}
 */
AnySchema.prototype.forbidden = function() {};

/**
 * Marks a key to be removed from a resulting object or array after validation. Used to sanitize output.
 * @return {?}
 */
AnySchema.prototype.strip = function() {};

/**
 * Annotates the key
 * @param {string} desc
 * @return {?}
 */
AnySchema.prototype.description = function(desc) {};

/**
 * Annotates the key
 * @param {string|!Array<string>} notes
 * @return {?}
 */
AnySchema.prototype.notes = function(notes) {};

/**
 * Annotates the key
 * @param {string|!Array<string>} notes
 * @return {?}
 */
AnySchema.prototype.tags = function(notes) {};

/**
 * Attaches metadata to the key.
 * @param {!Object} meta
 * @return {?}
 */
AnySchema.prototype.meta = function(meta) {};

/**
 * Annotates the key with an example value, must be valid.
 * @param {?} value
 * @return {?}
 */
AnySchema.prototype.example = function(value) {};

/**
 * Annotates the key with an unit name.
 * @param {string} name
 * @return {?}
 */
AnySchema.prototype.unit = function(name) {};

/**
 * Overrides the global validate() options for the current key and any sub-key.
 * @param {?} options
 * @return {?}
 */
AnySchema.prototype.options = function(options) {};

/**
 * Sets the options.convert options to false which prevent type casting for the current key and any child keys.
 * @param {boolean=} isStrict
 * @return {?}
 */
AnySchema.prototype.strict = function(isStrict) {};

/**
 * Sets a default value if the original value is undefined.
 * @param {?=} value - the value.
 *   value supports references.
 *   value may also be a function which returns the default value.
 *   If value is specified as a function that accepts a single parameter, that parameter will be a context
 *    object that can be used to derive the resulting value. This clones the object however, which incurs some
 *    overhead so if you don't need access to the context define your method so that it does not accept any
 *    parameters.
 *   Without any value, default has no effect, except for object that will then create nested defaults
 *    (applying inner defaults of that object).
 * 
 * Note that if value is an object, any changes to the object after default() is called will change the
 *  reference and any future assignment.
 * 
 * Additionally, when specifying a method you must either have a description property on your method or the
 *  second parameter is required.
 * @param {string=} description
 * @return {?}
 */
AnySchema.prototype.default = function(value, description) {};

/**
 * Returns a new type that is the result of adding the rules of one type to another.
 * @param {?} schema
 * @return {?}
 */
AnySchema.prototype.concat = function(schema) {};

/**
 * Converts the type into an alternatives type where the conditions are merged into the type definition where:
 * @template U
 * @param {string|?} ref
 * @param {?} options
 * @return {?}
 */
AnySchema.prototype.when = function(ref, options) {};

/**
 * Overrides the key name in error messages.
 * @param {string} name
 * @return {?}
 */
AnySchema.prototype.label = function(name) {};

/**
 * Outputs the original untouched value instead of the casted value.
 * @param {boolean=} isRaw
 * @return {?}
 */
AnySchema.prototype.raw = function(isRaw) {};

/**
 * Considers anything that matches the schema to be empty (undefined).
 * @param {?=} schema - any object or joi schema to match. An undefined schema unsets that rule.
 * @return {?}
 */
AnySchema.prototype.empty = function(schema) {};

/**
 * Overrides the default joi error with a custom error if the rule fails where:
 * @param {(!Error|?)} err - can be:
 *   an instance of `Error` - the override error.
 *   a `function(errors)`, taking an array of errors as argument, where it must either:
 *    return a `string` - substitutes the error message with this text
 *    return a single `object` or an `Array` of it, where:
 *     `type` - optional parameter providing the type of the error (eg. `number.min`).
 *     `message` - optional parameter if `template` is provided, containing the text of the error.
 *     `template` - optional parameter if `message` is provided, containing a template string, using the same format as usual joi language errors.
 *     `context` - optional parameter, to provide context to your error if you are using the `template`.
 *    return an `Error` - same as when you directly provide an `Error`, but you can customize the error message based on the errors.
 * 
 * Note that if you provide an `Error`, it will be returned as-is, unmodified and undecorated with any of the
 * normal joi error properties. If validation fails and another error is found before the error
 * override, that error will be returned and the override will be ignored (unless the `abortEarly`
 * option has been set to `false`).
 * @return {?}
 */
AnySchema.prototype.error = function(err) {};

/**
 * Creates a joi error object.
 * Used in conjunction with custom rules.
 * @param {string} ruleName - the rule name to create the error for.
 * @param {?} context - must contain `v` eg. the value that was validated, all other properties
 *  are available in the `language` templates.
 * @param {?} state - should the context passed into the `validate` function in a
 *  custom rule
 * @param {?} options - should the context passed into the `validate` function in a
 *  custom rule
 * @return {?}
 */
AnySchema.prototype.createError = function(ruleName, context, state, options) {};
/**
 * @record
 * @struct
 */
function State() {}
/**
 * @extends {AnySchema}
 * @record
 * @struct
 */
function BooleanSchema() {}

/**
 * Allows for additional values to be considered valid booleans by converting them to true during validation.
 * Accepts a value or an array of values. String comparisons are by default case insensitive,
 * see boolean.insensitive() to change this behavior.
 * @param {...(string|number|!Array<string>|!Array<number>)} values - strings, numbers or arrays of them
 * @return {?}
 */
BooleanSchema.prototype.truthy = function(values) {};

/**
 * Allows for additional values to be considered valid booleans by converting them to false during validation.
 * Accepts a value or an array of values. String comparisons are by default case insensitive,
 * see boolean.insensitive() to change this behavior.
 * @param {...(string|number|!Array<string>|!Array<number>)} values - strings, numbers or arrays of them
 * @return {?}
 */
BooleanSchema.prototype.falsy = function(values) {};

/**
 * Allows the values provided to truthy and falsy as well as the "true" and "false" default conversion
 * (when not in strict() mode) to be matched in a case insensitive manner.
 * @param {boolean} enabled
 * @return {?}
 */
BooleanSchema.prototype.insensitive = function(enabled) {};
/**
 * @extends {AnySchema}
 * @record
 * @struct
 */
function NumberSchema() {}

/**
 * Specifies the minimum value.
 * It can also be a reference to another field.
 * @param {number|?} limit
 * @return {?}
 */
NumberSchema.prototype.min = function(limit) {};

/**
 * Specifies the maximum value.
 * It can also be a reference to another field.
 * @param {number|?} limit
 * @return {?}
 */
NumberSchema.prototype.max = function(limit) {};

/**
 * Specifies that the value must be greater than limit.
 * It can also be a reference to another field.
 * @param {number|?} limit
 * @return {?}
 */
NumberSchema.prototype.greater = function(limit) {};

/**
 * Specifies that the value must be less than limit.
 * It can also be a reference to another field.
 * @param {number|?} limit
 * @return {?}
 */
NumberSchema.prototype.less = function(limit) {};

/**
 * Requires the number to be an integer (no floating point).
 * @return {?}
 */
NumberSchema.prototype.integer = function() {};

/**
 * Specifies the maximum number of decimal places where:
 *  limit - the maximum number of decimal places allowed.
 * @param {number} limit
 * @return {?}
 */
NumberSchema.prototype.precision = function(limit) {};

/**
 * Specifies that the value must be a multiple of base.
 * @param {number} base
 * @return {?}
 */
NumberSchema.prototype.multiple = function(base) {};

/**
 * Requires the number to be positive.
 * @return {?}
 */
NumberSchema.prototype.positive = function() {};

/**
 * Requires the number to be negative.
 * @return {?}
 */
NumberSchema.prototype.negative = function() {};
/**
 * @extends {AnySchema}
 * @record
 * @struct
 */
function StringSchema() {}

/**
 * Allows the value to match any whitelist of blacklist item in a case insensitive comparison.
 * @return {?}
 */
StringSchema.prototype.insensitive = function() {};

/**
 * Specifies the minimum number string characters.
 * @param {number|?} limit - the minimum number of string characters required. It can also be a reference to another field.
 * @param {string=} encoding - if specified, the string length is calculated in bytes using the provided encoding.
 * @return {?}
 */
StringSchema.prototype.min = function(limit, encoding) {};

/**
 * Specifies the maximum number of string characters.
 * @param {number|?} limit - the maximum number of string characters allowed. It can also be a reference to another field.
 * @param {string=} encoding - if specified, the string length is calculated in bytes using the provided encoding.
 * @return {?}
 */
StringSchema.prototype.max = function(limit, encoding) {};

/**
 * Requires the number to be a credit card number (Using Lunh Algorithm).
 * @return {?}
 */
StringSchema.prototype.creditCard = function() {};

/**
 * Specifies the exact string length required
 * @param {number|?} limit - the required string length. It can also be a reference to another field.
 * @param {string=} encoding - if specified, the string length is calculated in bytes using the provided encoding.
 * @return {?}
 */
StringSchema.prototype.length = function(limit, encoding) {};

/**
 * Defines a regular expression rule.
 * @param {!RegExp} pattern - a regular expression object the string value must match against.
 * @param {string=} name - optional name for patterns (useful with multiple patterns). Defaults to 'required'.
 * @return {?}
 */
StringSchema.prototype.regex = function(pattern, name) {};

/**
 * Replace characters matching the given pattern with the specified replacement string where:
 * @param {!RegExp|string} pattern - a regular expression object to match against, or a string of which all occurrences will be replaced.
 * @param {string} replacement - the string that will replace the pattern.
 * @return {?}
 */
StringSchema.prototype.replace = function(pattern, replacement) {};

/**
 * Requires the string value to only contain a-z, A-Z, and 0-9.
 * @return {?}
 */
StringSchema.prototype.alphanum = function() {};

/**
 * Requires the string value to only contain a-z, A-Z, 0-9, and underscore _.
 * @return {?}
 */
StringSchema.prototype.token = function() {};

/**
 * Requires the string value to be a valid email address.
 * @param {?=} options
 * @return {?}
 */
StringSchema.prototype.email = function(options) {};

/**
 * Requires the string value to be a valid ip address.
 * @param {?=} options
 * @return {?}
 */
StringSchema.prototype.ip = function(options) {};

/**
 * Requires the string value to be a valid RFC 3986 URI.
 * @param {?=} options
 * @return {?}
 */
StringSchema.prototype.uri = function(options) {};

/**
 * Requires the string value to be a valid GUID.
 * @param {?=} options
 * @return {?}
 */
StringSchema.prototype.guid = function(options) {};

/**
 * Requires the string value to be a valid hexadecimal string.
 * @return {?}
 */
StringSchema.prototype.hex = function() {};

/**
 * Requires the string value to be a valid hostname as per RFC1123.
 * @return {?}
 */
StringSchema.prototype.hostname = function() {};

/**
 * Requires the string value to be in valid ISO 8601 date format.
 * @return {?}
 */
StringSchema.prototype.isoDate = function() {};

/**
 * Requires the string value to be all lowercase. If the validation convert option is on (enabled by default), the string will be forced to lowercase.
 * @return {?}
 */
StringSchema.prototype.lowercase = function() {};

/**
 * Requires the string value to be all uppercase. If the validation convert option is on (enabled by default), the string will be forced to uppercase.
 * @return {?}
 */
StringSchema.prototype.uppercase = function() {};

/**
 * Requires the string value to contain no whitespace before or after. If the validation convert option is on (enabled by default), the string will be trimmed.
 * @return {?}
 */
StringSchema.prototype.trim = function() {};
/**
 * @extends {AnySchema}
 * @record
 * @struct
 */
function ArraySchema() {}

/**
 * Allow this array to be sparse.
 * enabled can be used with a falsy value to go back to the default behavior.
 * @param {?=} enabled
 * @return {?}
 */
ArraySchema.prototype.sparse = function(enabled) {};

/**
 * Allow single values to be checked against rules as if it were provided as an array.
 * enabled can be used with a falsy value to go back to the default behavior.
 * @param {?=} enabled
 * @return {?}
 */
ArraySchema.prototype.single = function(enabled) {};

/**
 * List the types allowed for the array values.
 * type can be an array of values, or multiple values can be passed as individual arguments.
 * If a given type is .required() then there must be a matching item in the array.
 * If a type is .forbidden() then it cannot appear in the array.
 * Required items can be added multiple times to signify that multiple items must be found.
 * Errors will contain the number of items that didn't match.
 * Any unmatched item having a label will be mentioned explicitly.
 * 
 * @param {...?|!Array<?>} types
 * @return {?}
 */
ArraySchema.prototype.items = function(types) {};

/**
 * Lists the types in sequence order for the array values where:
 * @param {...?|!Array<?>} types
 * @return {?}
 */
ArraySchema.prototype.ordered = function(types) {};

/**
 * Specifies the minimum number of items in the array.
 * @param {number} limit
 * @return {?}
 */
ArraySchema.prototype.min = function(limit) {};

/**
 * Specifies the maximum number of items in the array.
 * @param {number} limit
 * @return {?}
 */
ArraySchema.prototype.max = function(limit) {};

/**
 * Specifies the exact number of items in the array.
 * @param {number} limit
 * @return {?}
 */
ArraySchema.prototype.length = function(limit) {};

/**
 * Requires the array values to be unique.
 * Be aware that a deep equality is performed on elements of the array having a type of object,
 * a performance penalty is to be expected for this kind of operation.
 * @param {?|string=} comparator
 * @return {?}
 */
ArraySchema.prototype.unique = function(comparator) {};
/**
 * @extends {AnySchema}
 * @record
 * @struct
 */
function ObjectSchema() {}

/**
 * Sets the allowed object keys.
 * @param {?=} schema
 * @return {?}
 */
ObjectSchema.prototype.keys = function(schema) {};

/**
 * Specifies the minimum number of keys in the object.
 * @param {number} limit
 * @return {?}
 */
ObjectSchema.prototype.min = function(limit) {};

/**
 * Specifies the maximum number of keys in the object.
 * @param {number} limit
 * @return {?}
 */
ObjectSchema.prototype.max = function(limit) {};

/**
 * Specifies the exact number of keys in the object.
 * @param {number} limit
 * @return {?}
 */
ObjectSchema.prototype.length = function(limit) {};

/**
 * Specify validation rules for unknown keys matching a pattern.
 * @param {!RegExp} regex
 * @param {?} schema
 * @return {?}
 */
ObjectSchema.prototype.pattern = function(regex, schema) {};

/**
 * Defines an all-or-nothing relationship between keys where if one of the peers is present, all of them are required as well.
 * @param {string|!Array<string>} peer1_or_peers
 * @param {...string} peers - the key names of which if one present, all are required. peers can be a single string value,
 * an array of string values, or each peer provided as an argument.
 * @return {?}
 */
ObjectSchema.prototype.and = function(peer1_or_peers, peers) {};

/**
 * Defines a relationship between keys where not all peers can be present at the same time.
 * @param {string|!Array<string>} peer1_or_peers
 * @param {...string} peers - the key names of which if one present, the others may not all be present.
 * peers can be a single string value, an array of string values, or each peer provided as an argument.
 * @return {?}
 */
ObjectSchema.prototype.nand = function(peer1_or_peers, peers) {};

/**
 * Defines a relationship between keys where one of the peers is required (and more than one is allowed).
 * @param {string|!Array<string>} peer1_or_peers
 * @param {...string} peers
 * @return {?}
 */
ObjectSchema.prototype.or = function(peer1_or_peers, peers) {};

/**
 * Defines an exclusive relationship between a set of keys. one of them is required but not at the same time where:
 * @param {string|!Array<string>} peer1_or_peers
 * @param {...string} peers
 * @return {?}
 */
ObjectSchema.prototype.xor = function(peer1_or_peers, peers) {};

/**
 * Requires the presence of other keys whenever the specified key is present.
 * @param {string} key
 * @param {string|!Array<string>} peers
 * @return {?}
 */
ObjectSchema.prototype.with = function(key, peers) {};

/**
 * Forbids the presence of other keys whenever the specified is present.
 * @param {string} key
 * @param {string|!Array<string>} peers
 * @return {?}
 */
ObjectSchema.prototype.without = function(key, peers) {};

/**
 * Renames a key to another name (deletes the renamed key).
 * @param {string} from
 * @param {string} to
 * @param {?=} options
 * @return {?}
 */
ObjectSchema.prototype.rename = function(from, to, options) {};

/**
 * Verifies an assertion where.
 * @param {string|?} ref
 * @param {?} schema
 * @param {string=} message
 * @return {?}
 */
ObjectSchema.prototype.assert = function(ref, schema, message) {};

/**
 * Overrides the handling of unknown keys for the scope of the current object only (does not apply to children).
 * @param {boolean=} allow
 * @return {?}
 */
ObjectSchema.prototype.unknown = function(allow) {};

/**
 * Requires the object to be an instance of a given constructor.
 * 
 * @param {!Function} constructor - the constructor function that the object must be an instance of.
 * @param {string=} name - an alternate name to use in validation errors. This is useful when the constructor function does not have a name.
 * @return {?}
 */
ObjectSchema.prototype.type = function(constructor, name) {};

/**
 * Sets the specified children to required.
 * 
 * @param {string|!Array<string>} children_or_child - can be a single string value, an array of string values, or each child provided as an argument.
 * 
 *   var schema = Joi.object().keys({ a: { b: Joi.number() }, c: { d: Joi.string() } });
 *   var requiredSchema = schema.requiredKeys('', 'a.b', 'c', 'c.d');
 * 
 * Note that in this example '' means the current object, a is not required but b is, as well as c and d.
 * @param {...string} children
 * @return {?}
 */
ObjectSchema.prototype.requiredKeys = function(children_or_child, children) {};

/**
 * Sets the specified children to optional.
 * 
 * @param {string|!Array<string>} children_or_child - can be a single string value, an array of string values, or each child provided as an argument.
 * 
 * The behavior is exactly the same as requiredKeys.
 * @param {...string} children
 * @return {?}
 */
ObjectSchema.prototype.optionalKeys = function(children_or_child, children) {};
/**
 * @extends {AnySchema}
 * @record
 * @struct
 */
function BinarySchema() {}

/**
 * Sets the string encoding format if a string input is converted to a buffer.
 * @param {string} encoding
 * @return {?}
 */
BinarySchema.prototype.encoding = function(encoding) {};

/**
 * Specifies the minimum length of the buffer.
 * @param {number} limit
 * @return {?}
 */
BinarySchema.prototype.min = function(limit) {};

/**
 * Specifies the maximum length of the buffer.
 * @param {number} limit
 * @return {?}
 */
BinarySchema.prototype.max = function(limit) {};

/**
 * Specifies the exact length of the buffer:
 * @param {number} limit
 * @return {?}
 */
BinarySchema.prototype.length = function(limit) {};
/**
 * @extends {AnySchema}
 * @record
 * @struct
 */
function DateSchema() {}

/**
 * Specifies the oldest date allowed.
 * Notes: 'now' can be passed in lieu of date so as to always compare relatively to the current date,
 * allowing to explicitly ensure a date is either in the past or in the future.
 * It can also be a reference to another field.
 * @param {!Date|number|string|?} date
 * @return {?}
 */
DateSchema.prototype.min = function(date) {};

/**
 * Specifies the latest date allowed.
 * Notes: 'now' can be passed in lieu of date so as to always compare relatively to the current date,
 * allowing to explicitly ensure a date is either in the past or in the future.
 * It can also be a reference to another field.
 * @param {!Date|number|string|?} date
 * @return {?}
 */
DateSchema.prototype.max = function(date) {};

/**
 * Specifies the allowed date format:
 * @param {string|!Array<string>} format - string or array of strings that follow the moment.js format.
 * @return {?}
 */
DateSchema.prototype.format = function(format) {};

/**
 * Requires the string value to be in valid ISO 8601 date format.
 * @return {?}
 */
DateSchema.prototype.iso = function() {};

/**
 * Requires the value to be a timestamp interval from Unix Time.
 * @param {string=} type - the type of timestamp (allowed values are unix or javascript [default])
 * @return {?}
 */
DateSchema.prototype.timestamp = function(type) {};
/**
 * @extends {AnySchema}
 * @record
 * @struct
 */
function FunctionSchema() {}

/**
 * Specifies the arity of the function where:
 * @param {number} n - the arity expected.
 * @return {?}
 */
FunctionSchema.prototype.arity = function(n) {};

/**
 * Specifies the minimal arity of the function where:
 * @param {number} n - the minimal arity expected.
 * @return {?}
 */
FunctionSchema.prototype.minArity = function(n) {};

/**
 * Specifies the minimal arity of the function where:
 * @param {number} n - the minimal arity expected.
 * @return {?}
 */
FunctionSchema.prototype.maxArity = function(n) {};

/**
 * Requires the function to be a Joi reference.
 * @return {?}
 */
FunctionSchema.prototype.ref = function() {};
/**
 * @extends {AnySchema}
 * @record
 * @struct
 */
function AlternativesSchema() {}

/**
 * @param {!Array<?>|?} schemas_or_type1
 * @param {?=} type2
 * @param {...?} types
 * @return {?}
 */
AlternativesSchema.prototype.try = function(schemas_or_type1, type2, types) {};

/**
 * @template T
 * @param {string|?} ref
 * @param {?} options
 * @return {?}
 */
AlternativesSchema.prototype.when = function(ref, options) {};
/**
 * @record
 * @struct
 */
function Terms() {}
 /** @type {?} */
Terms.prototype.value;
 /** @type {?} */
Terms.prototype.state;
 /** @type {?} */
Terms.prototype.options;
/**
 * @record
 * @struct
 */
function Rules() {}
 /** @type {string} */
Rules.prototype.name;
 /** @type {?} */
Rules.prototype.params;
 /** @type {?} */
Rules.prototype.setup;
 /** @type {?} */
Rules.prototype.validate;
 /** @type {(string|!Function)} */
Rules.prototype.description;
/**
 * @record
 * @struct
 */
function Extension() {}
 /** @type {string} */
Extension.prototype.name;
 /** @type {?} */
Extension.prototype.base;
 /** @type {?} */
Extension.prototype.pre;
 /** @type {?} */
Extension.prototype.language;
 /** @type {?} */
Extension.prototype.describe;
 /** @type {!Array<?>} */
Extension.prototype.rules;
/**
 * @record
 * @struct
 */
function Err() {}

/**
 * @return {string}
 */
Err.prototype.toString = function() {};

/**
 * Generates a schema object that matches any data type.
 * @return {?}
 */
function any() {}

/**
 * Generates a schema object that matches an array data type.
 * @return {?}
 */
function array() {}

/**
 * Generates a schema object that matches a boolean data type (as well as the strings 'true', 'false', 'yes', and 'no'). Can also be called via bool().
 * @return {?}
 */
function bool() {}

/**
 * @return {?}
 */
function boolean() {}

/**
 * Generates a schema object that matches a Buffer data type (as well as the strings which will be converted to Buffers).
 * @return {?}
 */
function binary() {}

/**
 * Generates a schema object that matches a date type (as well as a JavaScript date string or number of milliseconds).
 * @return {?}
 */
function date() {}

/**
 * Generates a schema object that matches a function type.
 * @return {?}
 */
function func() {}

/**
 * Generates a schema object that matches a number data type (as well as strings that can be converted to numbers).
 * @return {?}
 */
function number() {}

/**
 * Generates a schema object that matches an object data type (as well as JSON strings that parsed into objects).
 * @param {?=} schema
 * @return {?}
 */
function object(schema) {}

/**
 * Generates a schema object that matches a string data type. Note that empty strings are not allowed by default and must be enabled with allow('').
 * @return {?}
 */
function string() {}

/**
 * Generates a type that will match one of the provided alternative schemas
 * @param {!Array<?>|?=} types_or_type1
 * @param {?=} type2
 * @param {...?} types
 * @return {?}
 */
function alternatives(types_or_type1, type2, types) {}

/**
 * Generates a placeholder schema for a schema that you would provide with the fn.
 * Supports the same methods of the any() type.
 * This is mostly useful for recursive schemas
 * @param {function(): ?} cb
 * @return {?}
 */
function lazy(cb) {}

/**
 * Validates a value using the given schema and options.
 * @template T, R
 * @param {?} value
 * @param {?|!Object=} callback_or_schema
 * @param {?=} callback_or_options
 * @param {?=} callback
 * @return {?}
 */
function validate(value, callback_or_schema, callback_or_options, callback) {}

/**
 * Converts literal schema definition to joi schema object (or returns the same back if already a joi schema object).
 * @param {!Object} schema
 * @return {?}
 */
function compile(schema) {}

/**
 * Validates a value against a schema and throws if validation fails.
 * 
 * @param {?} value - the value to validate.
 * @param {?} schema - the schema object.
 * @param {(string|!Error)=} message - optional message string prefix added in front of the error message. may also be an Error object.
 * @return {void}
 */
function assert(value, schema, message) {}

/**
 * Validates a value against a schema, returns valid object, and throws if validation fails where:
 * 
 * @template T
 * @param {?} value - the value to validate.
 * @param {?} schema - the schema object.
 * @param {(string|!Error)=} message - optional message string prefix added in front of the error message. may also be an Error object.
 * @return {?}
 */
function attempt(value, schema, message) {}

/**
 * Generates a reference to the value of the named key.
 * @param {string} key
 * @param {?=} options
 * @return {?}
 */
function ref(key, options) {}

/**
 * Checks whether or not the provided argument is a reference. It's especially useful if you want to post-process error messages.
 * @param {?} ref
 * @return {boolean}
 */
function isRef(ref) {}

/**
 * Get a sub-schema of an existing schema based on a path. Path separator is a dot (.).
 * @param {?} schema
 * @param {string} path
 * @return {?}
 */
function reach(schema, path) {}

/**
 * Creates a new Joi instance customized with the extension(s) you provide included.
 * @param {?} extention
 * @return {?}
 */
function extend(extention) {}

/**
 * Whitelists a value
 * @param {?|!Array<?>} value_or_values
 * @param {...?} values
 * @return {?}
 */
function allow(value_or_values, values) {}

/**
 * Adds the provided values into the allowed whitelist and marks them as the only valid values allowed.
 * @param {?|!Array<?>} value_or_values
 * @param {...?} values
 * @return {?}
 */
function valid(value_or_values, values) {}

/**
 * @param {?|!Array<?>} value_or_values
 * @param {...?} values
 * @return {?}
 */
function only(value_or_values, values) {}

/**
 * @param {?|!Array<?>} value_or_values
 * @param {...?} values
 * @return {?}
 */
function equal(value_or_values, values) {}

/**
 * Blacklists a value
 * @param {?|!Array<?>} value_or_values
 * @param {...?} values
 * @return {?}
 */
function invalid(value_or_values, values) {}

/**
 * @param {?|!Array<?>} value_or_values
 * @param {...?} values
 * @return {?}
 */
function disallow(value_or_values, values) {}

/**
 * @param {?|!Array<?>} value_or_values
 * @param {...?} values
 * @return {?}
 */
function not(value_or_values, values) {}

/**
 * Marks a key as required which will not allow undefined as value. All keys are optional by default.
 * @return {?}
 */
function required() {}

/**
 * Marks a key as optional which will allow undefined as values. Used to annotate the schema for readability as all keys are optional by default.
 * @return {?}
 */
function optional() {}

/**
 * Marks a key as forbidden which will not allow any value except undefined. Used to explicitly forbid keys.
 * @return {?}
 */
function forbidden() {}

/**
 * Marks a key to be removed from a resulting object or array after validation. Used to sanitize output.
 * @return {?}
 */
function strip() {}

/**
 * Annotates the key
 * @param {string} desc
 * @return {?}
 */
function description(desc) {}

/**
 * Annotates the key
 * @param {string|!Array<string>} notes
 * @return {?}
 */
function notes(notes) {}

/**
 * Annotates the key
 * @param {string|!Array<string>} notes
 * @return {?}
 */
function tags(notes) {}

/**
 * Attaches metadata to the key.
 * @param {!Object} meta
 * @return {?}
 */
function meta(meta) {}

/**
 * Annotates the key with an example value, must be valid.
 * @param {?} value
 * @return {?}
 */
function example(value) {}

/**
 * Annotates the key with an unit name.
 * @param {string} name
 * @return {?}
 */
function unit(name) {}

/**
 * Overrides the global validate() options for the current key and any sub-key.
 * @param {?} options
 * @return {?}
 */
function options(options) {}

/**
 * Sets the options.convert options to false which prevent type casting for the current key and any child keys.
 * @param {boolean=} isStrict
 * @return {?}
 */
function strict(isStrict) {}

/**
 * Returns a new type that is the result of adding the rules of one type to another.
 * @template T
 * @param {?} schema
 * @return {?}
 */
function concat(schema) {}

/**
 * Converts the type into an alternatives type where the conditions are merged into the type definition where:
 * @template U
 * @param {string|?} ref
 * @param {?} options
 * @return {?}
 */
function when(ref, options) {}

/**
 * Overrides the key name in error messages.
 * @param {string} name
 * @return {?}
 */
function label(name) {}

/**
 * Outputs the original untouched value instead of the casted value.
 * @param {boolean=} isRaw
 * @return {?}
 */
function raw(isRaw) {}

/**
 * Considers anything that matches the schema to be empty (undefined).
 * @param {?=} schema - any object or joi schema to match. An undefined schema unsets that rule.
 * @return {?}
 */
function empty(schema) {}
