/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/validatorjs/index.d.ts:
/** @const */
var Validator = {};
/**
 * @record
 * @struct
 */
Validator.ParsedRule = function() {};
 /** @type {!Array<{name: string, value: ?}>} */
Validator.ParsedRule.prototype.attribute;
/**
 * @record
 * @struct
 */
Validator.ValidationErrors = function() {};

/* TODO: IndexSignature: Validator */
/**
 * @record
 * @struct
 */
Validator.ErrorMessages = function() {};

/* TODO: IndexSignature: Validator */
/**
 * @record
 * @struct
 */
Validator.AttributeNames = function() {};

/* TODO: IndexSignature: Validator */

/** @typedef {function(?): ?} */
Validator.AttributeFormatter;
/**
 * @record
 * @struct
 */
Validator.Errors = function() {};
 /** @type {!Validator.ValidationErrors} */
Validator.Errors.prototype.errors;

/**
 * @param {string} attribute
 * @param {string} message
 * @return {void}
 */
Validator.Errors.prototype.add = function(attribute, message) {};

/**
 * @param {string} attribute
 * @return {!Array<string>}
 */
Validator.Errors.prototype.get = function(attribute) {};

/**
 * @param {string} attribute
 * @return {(string|boolean)}
 */
Validator.Errors.prototype.first = function(attribute) {};

/**
 * @return {!Validator.ValidationErrors}
 */
Validator.Errors.prototype.all = function() {};

/**
 * @param {string} attribute
 * @return {boolean}
 */
Validator.Errors.prototype.has = function(attribute) {};
/**
 * @record
 * @struct
 */
Validator.ValidatorStatic = function() {};

/* TODO: ConstructSignature: Validator */

/**
 * @param {string} lang
 * @param {!Validator.ErrorMessages} messages
 * @return {?}
 */
Validator.ValidatorStatic.prototype.setMessages = function(lang, messages) {};

/**
 * @param {string} lang
 * @return {!Validator.ErrorMessages}
 */
Validator.ValidatorStatic.prototype.getMessages = function(lang) {};

/**
 * @param {string} lang
 * @return {void}
 */
Validator.ValidatorStatic.prototype.useLang = function(lang) {};

/**
 * @return {string}
 */
Validator.ValidatorStatic.prototype.getDefaultLang = function() {};

/**
 * @param {function(?): ?} func
 * @return {void}
 */
Validator.ValidatorStatic.prototype.setAttributeFormatter = function(func) {};

/**
 * @param {(boolean|!Array<string>)} attributes
 * @return {void}
 */
Validator.ValidatorStatic.prototype.stopOnError = function(attributes) {};

/**
 * @param {string} name
 * @param {!Function} fn
 * @param {string} message
 * @return {void}
 */
Validator.ValidatorStatic.prototype.register = function(name, fn, message) {};

/**
 * @param {string} name
 * @param {!Function} fn
 * @param {string} message
 * @return {void}
 */
Validator.ValidatorStatic.prototype.registerAsync = function(name, fn, message) {};
/**
 * @record
 * @struct
 */
Validator.Validator = function() {};
 /** @type {string} */
Validator.Validator.prototype.lang;
 /** @type {A} */
Validator.Validator.prototype.input;
 /** @type {!Validator.ErrorMessages} */
Validator.Validator.prototype.messages;
 /** @type {!Validator.Errors} */
Validator.Validator.prototype.errors;
 /** @type {number} */
Validator.Validator.prototype.errorCount;
 /** @type {boolean} */
Validator.Validator.prototype.hasAsync;
 /** @type {?} */
Validator.Validator.prototype.rules;
 /** @type {!Array<string>} */
Validator.Validator.prototype.numericRules;
 /** @type {function(?): ?} */
Validator.Validator.prototype.attributeFormatter;

/**
 * @return {boolean}
 */
Validator.Validator.prototype.check = function() {};

/**
 * @param {!Function=} passes
 * @param {!Function=} fails
 * @return {void}
 */
Validator.Validator.prototype.checkAsync = function(passes, fails) {};

/**
 * @param {!Validator.AttributeNames} attributes
 * @return {void}
 */
Validator.Validator.prototype.setAttributeNames = function(attributes) {};

/**
 * @param {function(?): ?} func
 * @return {void}
 */
Validator.Validator.prototype.setAttributeFormatter = function(func) {};

/**
 * @param {string} name
 * @return {!Function}
 */
Validator.Validator.prototype.getRule = function(name) {};

/**
 * @param {!Function=} passes
 * @return {(boolean|void)}
 */
Validator.Validator.prototype.stopOnError = function(passes) {};

/**
 * @param {!Function=} passes
 * @return {(boolean|void)}
 */
Validator.Validator.prototype.passes = function(passes) {};

/**
 * @param {!Function=} fails
 * @return {(boolean|void)}
 */
Validator.Validator.prototype.fails = function(fails) {};
 /** @type {!Validator.ValidatorStatic} */
var Validator;

/* TODO: ExportAssignment in  */

/* TODO: NamespaceExportDeclaration in  */
