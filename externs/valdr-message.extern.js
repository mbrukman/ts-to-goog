/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/valdr-message/index.d.ts:
/** @const */
var valdr = {};
/** @const */
valdr.message = {};
/**
 * @record
 * @struct
 */
valdr.message.ValdrMessage = function() {};
 /** @type {string} */
valdr.message.ValdrMessage.prototype.templateUrl;
 /** @type {boolean} */
valdr.message.ValdrMessage.prototype.translateAvailable;
 /** @type {boolean} */
valdr.message.ValdrMessage.prototype.angularMessagesEnabled;

/**
 * Sets the default message template.
 * @param {string} template the default message template (eg "<div class="valdr-message">{{ violation.message }}</div>").
 * @return {void}
 */
valdr.message.ValdrMessage.prototype.setTemplate = function(template) {};

/**
 * Adds messages for AngularJS build-in validators (eg "required" and "number") or for specific fields (eg "Person.lastName.required").
 * @param {!Object<string,string>} messages the list of key/value pairs.
 * @return {void}
 */
valdr.message.ValdrMessage.prototype.addMessages = function(messages) {};

/**
 * Gets the validator message.
 * @param {string} typeName the name of the type.
 * @param {string} fieldName the name of the field.
 * @param {string} validatorName the name of the validator.
 * @return {string}
 */
valdr.message.ValdrMessage.prototype.getMessage = function(typeName, fieldName, validatorName) {};
/**
 * @record
 * @struct
 */
valdr.message.ValdrMessageProvider = function() {};

/**
 * Sets the default message template.
 * @param {string} template the default message template (eg "<div class="valdr-message">{{ violation.message }}</div>").
 * @return {void}
 */
valdr.message.ValdrMessageProvider.prototype.setTemplate = function(template) {};

/**
 * Sets the URL for the default message template (eg "/partials/valdrMessageTemplate.html").
 * @param {string} url the URL of the default message template.
 * @return {void}
 */
valdr.message.ValdrMessageProvider.prototype.setTemplateUrl = function(url) {};

/**
 * Adds messages for AngularJS build-in validators (eg "required" and "number") or for specific fields (eg "Person.lastName.required").
 * @param {!Object<string,string>} messages the list of key/value pairs.
 * @return {void}
 */
valdr.message.ValdrMessageProvider.prototype.addMessages = function(messages) {};

/**
 * Gets the validator message.
 * @param {string} typeName the name of the type.
 * @param {string} fieldName the name of the field.
 * @param {string} validatorName the name of the validator.
 * @return {string}
 */
valdr.message.ValdrMessageProvider.prototype.getMessage = function(typeName, fieldName, validatorName) {};
