/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/knockout.validation/index.d.ts:
/**
 * @record
 * @struct
 */
function KnockoutValidationGroupingOptions() {}
 /** @type {boolean} */
KnockoutValidationGroupingOptions.prototype.deep;
 /** @type {boolean} */
KnockoutValidationGroupingOptions.prototype.observable;
 /** @type {boolean} */
KnockoutValidationGroupingOptions.prototype.live;
/**
 * @record
 * @struct
 */
function KnockoutValidationValidateOptions() {}
 /** @type {number} */
KnockoutValidationValidateOptions.prototype.throttle;
/**
 * @record
 * @struct
 */
function KnockoutValidationConfiguration() {}
 /** @type {boolean} */
KnockoutValidationConfiguration.prototype.allowHtmlMessages;
 /** @type {boolean} */
KnockoutValidationConfiguration.prototype.decorateElementOnModified;
 /** @type {boolean} */
KnockoutValidationConfiguration.prototype.decorateInputElement;
 /** @type {string} */
KnockoutValidationConfiguration.prototype.errorClass;
 /** @type {string} */
KnockoutValidationConfiguration.prototype.errorElementClass;
 /** @type {string} */
KnockoutValidationConfiguration.prototype.errorMessageClass;
 /** @type {boolean} */
KnockoutValidationConfiguration.prototype.errorsAsTitle;
 /** @type {boolean} */
KnockoutValidationConfiguration.prototype.errorsAsTitleOnModified;
 /** @type {!KnockoutValidationGroupingOptions} */
KnockoutValidationConfiguration.prototype.grouping;
 /** @type {boolean} */
KnockoutValidationConfiguration.prototype.insertMessages;
 /** @type {boolean} */
KnockoutValidationConfiguration.prototype.messagesOnModified;
 /** @type {string} */
KnockoutValidationConfiguration.prototype.messageTemplate;
 /** @type {boolean} */
KnockoutValidationConfiguration.prototype.parseInputAttributes;
 /** @type {boolean} */
KnockoutValidationConfiguration.prototype.registerExtenders;
 /** @type {!KnockoutValidationValidateOptions} */
KnockoutValidationConfiguration.prototype.validate;
 /** @type {boolean} */
KnockoutValidationConfiguration.prototype.writeInputAttributes;
/**
 * @record
 * @struct
 */
function KnockoutValidationUtils() {}

/**
 * @param {?} o
 * @return {boolean}
 */
KnockoutValidationUtils.prototype.isArray = function(o) {};

/**
 * @param {?} o
 * @return {boolean}
 */
KnockoutValidationUtils.prototype.isObject = function(o) {};

/**
 * @param {?} o
 * @return {!Array<?>}
 */
KnockoutValidationUtils.prototype.values = function(o) {};

/**
 * @param {?} o
 * @return {?}
 */
KnockoutValidationUtils.prototype.getValue = function(o) {};

/**
 * @param {!Element} node
 * @param {string} attr
 * @return {boolean}
 */
KnockoutValidationUtils.prototype.hasAttribute = function(node, attr) {};

/**
 * @param {?} o
 * @return {boolean}
 */
KnockoutValidationUtils.prototype.isValidatable = function(o) {};

/**
 * @param {!Element} node
 * @param {!Element} newNode
 * @return {void}
 */
KnockoutValidationUtils.prototype.insertAfter = function(node, newNode) {};

/**
 * @return {number}
 */
KnockoutValidationUtils.prototype.newId = function() {};

/**
 * @param {!Element} element
 * @return {!KnockoutValidationConfiguration}
 */
KnockoutValidationUtils.prototype.getConfigOptions = function(element) {};

/**
 * @param {!Element} node
 * @param {!KnockoutValidationConfiguration} data
 * @return {void}
 */
KnockoutValidationUtils.prototype.setDomData = function(node, data) {};

/**
 * @param {!Element} node
 * @return {!KnockoutValidationConfiguration}
 */
KnockoutValidationUtils.prototype.getDomData = function(node) {};

/**
 * @param {!Element} node
 * @return {!KnockoutValidationConfiguration}
 */
KnockoutValidationUtils.prototype.contextFor = function(node) {};

/**
 * @param {?} val
 * @return {boolean}
 */
KnockoutValidationUtils.prototype.isEmptyVal = function(val) {};
/**
 * @record
 * @struct
 */
function KnockoutValidationAsyncCallbackArgs() {}
 /** @type {boolean} */
KnockoutValidationAsyncCallbackArgs.prototype.isValid;
 /** @type {string} */
KnockoutValidationAsyncCallbackArgs.prototype.message;
/**
 * @record
 * @struct
 */
function KnockoutValidationAsyncCallback() {}

/* TODO: CallSignature:  */

/* TODO: CallSignature:  */
/**
 * @record
 * @struct
 */
function KnockoutValidationRuleBase() {}
 /** @type {string} */
KnockoutValidationRuleBase.prototype.message;
/**
 * @extends {KnockoutValidationRuleBase}
 * @record
 * @struct
 */
function KnockoutValidationRuleDefinition() {}

/**
 * @param {?} value
 * @param {?} params
 * @return {boolean}
 */
KnockoutValidationRuleDefinition.prototype.validator = function(value, params) {};
/**
 * @extends {KnockoutValidationRuleBase}
 * @record
 * @struct
 */
function KnockoutValidationAsyncRuleDefinition() {}
 /** @type {boolean} */
KnockoutValidationAsyncRuleDefinition.prototype.async;

/**
 * @param {?} value
 * @param {?} params
 * @param {!KnockoutValidationAsyncCallback} callback
 * @return {void}
 */
KnockoutValidationAsyncRuleDefinition.prototype.validator = function(value, params, callback) {};
/**
 * @record
 * @struct
 */
function KnockoutValidationAnonymousRuleDefinition() {}
 /** @type {!KnockoutValidationRuleDefinition} */
KnockoutValidationAnonymousRuleDefinition.prototype.validation;
/**
 * @record
 * @struct
 */
function KnockoutValidationRuleDefinitions() {}
 /** @type {!KnockoutValidationRuleDefinition} */
KnockoutValidationRuleDefinitions.prototype.date;
 /** @type {!KnockoutValidationRuleDefinition} */
KnockoutValidationRuleDefinitions.prototype.dateISO;
 /** @type {!KnockoutValidationRuleDefinition} */
KnockoutValidationRuleDefinitions.prototype.digit;
 /** @type {!KnockoutValidationRuleDefinition} */
KnockoutValidationRuleDefinitions.prototype.email;
 /** @type {!KnockoutValidationRuleDefinition} */
KnockoutValidationRuleDefinitions.prototype.equal;
 /** @type {!KnockoutValidationRuleDefinition} */
KnockoutValidationRuleDefinitions.prototype.max;
 /** @type {!KnockoutValidationRuleDefinition} */
KnockoutValidationRuleDefinitions.prototype.maxLength;
 /** @type {!KnockoutValidationRuleDefinition} */
KnockoutValidationRuleDefinitions.prototype.min;
 /** @type {!KnockoutValidationRuleDefinition} */
KnockoutValidationRuleDefinitions.prototype.minLength;
 /** @type {!KnockoutValidationRuleDefinition} */
KnockoutValidationRuleDefinitions.prototype.notEqual;
 /** @type {!KnockoutValidationRuleDefinition} */
KnockoutValidationRuleDefinitions.prototype.number;
 /** @type {!KnockoutValidationRuleDefinition} */
KnockoutValidationRuleDefinitions.prototype.pattern;
 /** @type {!KnockoutValidationRuleDefinition} */
KnockoutValidationRuleDefinitions.prototype.phoneUS;
 /** @type {!KnockoutValidationRuleDefinition} */
KnockoutValidationRuleDefinitions.prototype.required;
 /** @type {!KnockoutValidationRuleDefinition} */
KnockoutValidationRuleDefinitions.prototype.step;
 /** @type {!KnockoutValidationRuleDefinition} */
KnockoutValidationRuleDefinitions.prototype.unique;

/* TODO: IndexSignature:  */
/**
 * @record
 * @struct
 */
function KnockoutValidationRule() {}
 /** @type {string} */
KnockoutValidationRule.prototype.rule;
 /** @type {?} */
KnockoutValidationRule.prototype.params;
 /** @type {string} */
KnockoutValidationRule.prototype.message;
 /** @type {function(): boolean} */
KnockoutValidationRule.prototype.condition;
/**
 * @record
 * @struct
 */
function KnockoutValidationErrors() {}

/* TODO: CallSignature:  */

/**
 * @param {boolean=} show
 * @return {void}
 */
KnockoutValidationErrors.prototype.showAllMessages = function(show) {};
/**
 * @record
 * @struct
 */
function KnockoutValidationGroup() {}
 /** @type {!KnockoutValidationErrors} */
KnockoutValidationGroup.prototype.errors;
 /** @type {function(): boolean} */
KnockoutValidationGroup.prototype.isValid;
 /** @type {function(): boolean} */
KnockoutValidationGroup.prototype.isAnyMessageShown;
/**
 * @record
 * @struct
 */
function KnockoutValidationLocalizationDictionary() {}

/* TODO: IndexSignature:  */
/**
 * @record
 * @struct
 */
function KnockoutValidationStatic() {}
 /** @type {!KnockoutValidationRuleDefinitions} */
KnockoutValidationStatic.prototype.rules;
 /** @type {!KnockoutValidationUtils} */
KnockoutValidationStatic.prototype.utils;

/**
 * @param {!KnockoutValidationConfiguration=} options
 * @param {boolean=} force
 * @return {void}
 */
KnockoutValidationStatic.prototype.init = function(options, force) {};

/**
 * @return {void}
 */
KnockoutValidationStatic.prototype.reset = function() {};

/**
 * @param {?} obj
 * @param {?=} options
 * @return {!KnockoutValidationErrors}
 */
KnockoutValidationStatic.prototype.group = function(obj, options) {};

/**
 * @param {string} message
 * @param {string} params
 * @return {string}
 */
KnockoutValidationStatic.prototype.formatMessage = function(message, params) {};

/**
 * @template T
 * @param {!KnockoutObservable<T>} observable
 * @param {!KnockoutValidationRule} rule
 * @return {!KnockoutObservable<T>}
 */
KnockoutValidationStatic.prototype.addRule = function(observable, rule) {};

/**
 * @param {!KnockoutObservable<?>} observable
 * @param {!KnockoutValidationAnonymousRuleDefinition} ruleObj
 * @return {void}
 */
KnockoutValidationStatic.prototype.addAnonymousRule = function(observable, ruleObj) {};

/**
 * @param {!Element} element
 * @return {!Element}
 */
KnockoutValidationStatic.prototype.insertValidationMessage = function(element) {};

/**
 * @param {!Element} element
 * @param {function(): !KnockoutObservable<?>} valueAccessor
 * @return {void}
 */
KnockoutValidationStatic.prototype.parseInputValidationAttributes = function(element, valueAccessor) {};

/**
 * @param {string} ruleName
 * @return {void}
 */
KnockoutValidationStatic.prototype.addExtender = function(ruleName) {};

/**
 * @return {void}
 */
KnockoutValidationStatic.prototype.registerExtenders = function() {};

/**
 * @param {!KnockoutValidationLocalizationDictionary} msgTranslations
 * @return {void}
 */
KnockoutValidationStatic.prototype.localize = function(msgTranslations) {};

/**
 * @param {string} newLocale
 * @param {!KnockoutValidationLocalizationDictionary} msgTranslations
 * @return {!KnockoutValidationLocalizationDictionary}
 */
KnockoutValidationStatic.prototype.defineLocale = function(newLocale, msgTranslations) {};

/**
 * @param {string} newLocale
 * @return {string}
 */
KnockoutValidationStatic.prototype.locale = function(newLocale) {};

/**
 * @param {!KnockoutObservable<?>} observable
 * @return {boolean}
 */
KnockoutValidationStatic.prototype.validateObservable = function(observable) {};
 /** @type {!KnockoutValidationStatic} */
KnockoutStatic.prototype.validation;

/**
 * @template T
 * @param {T=} initialValue
 * @return {!KnockoutObservable<T>}
 */
KnockoutStatic.prototype.validatedObservable = function(initialValue) {};

/**
 * @param {?} viewModel
 * @param {?=} rootNode
 * @param {!KnockoutValidationConfiguration=} options
 * @return {void}
 */
KnockoutStatic.prototype.applyBindingsWithValidation = function(viewModel, rootNode, options) {};
 /** @type {!KnockoutComputed<boolean>} */
KnockoutSubscribableFunctions.prototype.isValid;
 /** @type {!KnockoutObservable<boolean>} */
KnockoutSubscribableFunctions.prototype.isValidating;
 /** @type {!KnockoutObservableArray<!KnockoutValidationRule>} */
KnockoutSubscribableFunctions.prototype.rules;
 /** @type {!KnockoutObservable<boolean>} */
KnockoutSubscribableFunctions.prototype.isModified;
 /** @type {!KnockoutComputed<string>} */
KnockoutSubscribableFunctions.prototype.error;

/**
 * @param {string} error
 * @return {void}
 */
KnockoutSubscribableFunctions.prototype.setError = function(error) {};

/**
 * @return {void}
 */
KnockoutSubscribableFunctions.prototype.clearError = function() {};
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "knockout.validation"
/** @const */
tsickle_declare_module.knockout_validation = {};

/* TODO: ExportAssignment in tsickle_declare_module.knockout_validation */
 /** @type {!KnockoutValidationStatic} */
var validation;