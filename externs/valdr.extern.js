/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/valdr/index.d.ts:
/** @const */
var valdr = {};
/**
 * @record
 * @struct
 */
valdr.ValdrValidator = function() {};
 /** @type {string} */
valdr.ValdrValidator.prototype.name;

/**
 * Method to be called to perform custom validation over given value.
 * @param {?} value
 * @param {!Object<string,?>=} validationArguments
 * @return {boolean}
 */
valdr.ValdrValidator.prototype.validate = function(value, validationArguments) {};
/**
 * @record
 * @struct
 */
valdr.ValdrConstraintValidator = function() {};

/* TODO: IndexSignature: valdr */
 /** @type {string} */
valdr.ValdrConstraintValidator.prototype.message;
/**
 * @record
 * @struct
 */
valdr.ValdrConstraintFieldName = function() {};

/* TODO: IndexSignature: valdr */
/**
 * @record
 * @struct
 */
valdr.ValdrConstraintTypeName = function() {};

/* TODO: IndexSignature: valdr */
/**
 * @record
 * @struct
 */
valdr.ValdrConstraints = function() {};

/* TODO: IndexSignature: valdr */
/**
 * @extends {valdr.ValdrConstraintValidator}
 * @record
 * @struct
 */
valdr.ValdrViolation = function() {};
 /** @type {boolean} */
valdr.ValdrViolation.prototype.valid;
 /** @type {string} */
valdr.ValdrViolation.prototype.value;
 /** @type {string} */
valdr.ValdrViolation.prototype.field;
 /** @type {string} */
valdr.ValdrViolation.prototype.type;
 /** @type {string} */
valdr.ValdrViolation.prototype.validator;
/**
 * @record
 * @struct
 */
valdr.ValdrValidationResult = function() {};
 /** @type {boolean} */
valdr.ValdrValidationResult.prototype.valid;
 /** @type {!Array<!valdr.ValdrViolation>} */
valdr.ValdrValidationResult.prototype.violations;
 /** @type {!Array<!valdr.ValdrViolation>} */
valdr.ValdrValidationResult.prototype.validationResults;
/**
 * @record
 * @struct
 */
valdr.Valdr = function() {};

/**
 * Validates the value of the given type with the constraints for the given field name.
 * @param {string} typeName the type name.
 * @param {string} fieldName the field name.
 * @param {string} value the value to validate.
 * @return {!valdr.ValdrValidationResult}
 */
valdr.Valdr.prototype.validate = function(typeName, fieldName, value) {};

/**
 * Adds a new list of constraints (JSON Object).
 * @param {!valdr.ValdrConstraints} newConstraints the list of constraints (JSON Object).
 * @return {void}
 */
valdr.Valdr.prototype.addConstraints = function(newConstraints) {};

/**
 * Removes one or many contraints.
 * @param {(string|!Array<string>)} constraintNames the name or array of constraint names.
 * @return {void}
 */
valdr.Valdr.prototype.removeConstraints = function(constraintNames) {};

/**
 * Gets the list of constraints (JSON Object).
 * @return {!valdr.ValdrConstraints} the list of constraints.
 */
valdr.Valdr.prototype.getConstraints = function() {};

/**
 * Sets custom classes on the surrounding elements.
 * @param {{valid: string, invalid: string}} newClasses the new classes.
 * @return {void}
 */
valdr.Valdr.prototype.setClasses = function(newClasses) {};
/**
 * @record
 * @struct
 */
valdr.ValdrProvider = function() {};

/**
 * Adds a new list of constraints (JSON Object).
 * @param {!valdr.ValdrConstraints} newConstraints the list of constraints (JSON Object).
 * @return {void}
 */
valdr.ValdrProvider.prototype.addConstraints = function(newConstraints) {};

/**
 * Removes one or many contraints.
 * @param {(string|!Array<string>)} constraintNames the name or array of constraint names.
 * @return {void}
 */
valdr.ValdrProvider.prototype.removeConstraints = function(constraintNames) {};

/**
 * Sets the constraint URL (eg "/api/constraints").
 * @param {string} url the URL of the contraints.
 * @return {void}
 */
valdr.ValdrProvider.prototype.setConstraintUrl = function(url) {};

/**
 * Adds a custom validator.
 * @param {string} validatorName the name of the custom validator.
 * @return {void}
 */
valdr.ValdrProvider.prototype.addValidator = function(validatorName) {};

/**
 * Adds a constraint validator alias.
 * @param {string} valdrName the validator name.
 * @param {string} alias the validator alias name.
 * @return {void}
 */
valdr.ValdrProvider.prototype.addConstraintAlias = function(valdrName, alias) {};
