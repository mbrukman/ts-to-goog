/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/angular-formly/index.d.ts:
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "AngularFormly"
/** @const */
tsickle_declare_module.AngularFormly = {};

/* TODO: ExportAssignment in tsickle_declare_module.AngularFormly */
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "angular-formly"
/** @const */
tsickle_declare_module.angular_formly = {};
 /** @type {string} */
tsickle_declare_module.angular_formly.angularFormlyDefaultExport;

/* TODO: ExportAssignment in tsickle_declare_module.angular_formly */
/** @const */
var AngularFormly = {};
/**
 * @record
 * @struct
 */
AngularFormly.IFieldArray = function() {};
/**
 * @record
 * @struct
 */
AngularFormly.IFieldGroup = function() {};
 /** @type {!Object<string,?>} */
AngularFormly.IFieldGroup.prototype.data;
 /** @type {string} */
AngularFormly.IFieldGroup.prototype.className;
 /** @type {string} */
AngularFormly.IFieldGroup.prototype.elementAttributes;
 /** @type {!AngularFormly.IFieldArray} */
AngularFormly.IFieldGroup.prototype.fieldGroup;
 /** @type {!Object} */
AngularFormly.IFieldGroup.prototype.form;
 /** @type {boolean} */
AngularFormly.IFieldGroup.prototype.hide;
 /** @type {(string|!AngularFormly.IExpressionFunction)} */
AngularFormly.IFieldGroup.prototype.hideExpression;
 /** @type {(string|number)} */
AngularFormly.IFieldGroup.prototype.key;
 /** @type {(string|!Object<string,?>)} */
AngularFormly.IFieldGroup.prototype.model;
 /** @type {!AngularFormly.IFormOptionsAPI} */
AngularFormly.IFieldGroup.prototype.options;
 /** @type {!AngularFormly.ITemplateOptions} */
AngularFormly.IFieldGroup.prototype.templateOptions;
 /** @type {(string|!Array<string>)} */
AngularFormly.IFieldGroup.prototype.wrapper;
/**
 * @record
 * @struct
 */
AngularFormly.IFormOptionsAPI = function() {};
 /** @type {!Object<string,?>} */
AngularFormly.IFormOptionsAPI.prototype.data;
 /** @type {(!Function|!Array<!Function>)} */
AngularFormly.IFormOptionsAPI.prototype.fieldTransform;
 /** @type {!Object} */
AngularFormly.IFormOptionsAPI.prototype.formState;
 /** @type {boolean} */
AngularFormly.IFormOptionsAPI.prototype.removeChromeAutoComplete;
 /** @type {!Function} */
AngularFormly.IFormOptionsAPI.prototype.resetModel;
 /** @type {!AngularFormly.ITemplateManipulators} */
AngularFormly.IFormOptionsAPI.prototype.templateManipulators;
 /** @type {!Function} */
AngularFormly.IFormOptionsAPI.prototype.updateInitialValue;
 /** @type {(string|!Array<string>)} */
AngularFormly.IFormOptionsAPI.prototype.wrapper;
/**
 * @record
 * @struct
 */
AngularFormly.IExpressionFunction = function() {};

/* TODO: CallSignature: AngularFormly */
/**
 * @record
 * @struct
 */
AngularFormly.IModelOptions = function() {};
 /** @type {string} */
AngularFormly.IModelOptions.prototype.updateOn;
 /** @type {number} */
AngularFormly.IModelOptions.prototype.debounce;
 /** @type {boolean} */
AngularFormly.IModelOptions.prototype.allowInvalid;
 /** @type {string} */
AngularFormly.IModelOptions.prototype.getterSetter;
 /** @type {string} */
AngularFormly.IModelOptions.prototype.timezone;
/**
 * @record
 * @struct
 */
AngularFormly.ITemplateManipulator = function() {};

/* TODO: CallSignature: AngularFormly */
/**
 * @record
 * @struct
 */
AngularFormly.ITemplateManipulators = function() {};
 /** @type {!Array<!AngularFormly.ITemplateManipulator>} */
AngularFormly.ITemplateManipulators.prototype.preWrapper;
 /** @type {!Array<!AngularFormly.ITemplateManipulator>} */
AngularFormly.ITemplateManipulators.prototype.postWrapper;
/**
 * @record
 * @struct
 */
AngularFormly.ISelectOption = function() {};
 /** @type {string} */
AngularFormly.ISelectOption.prototype.name;
 /** @type {string} */
AngularFormly.ISelectOption.prototype.value;
 /** @type {string} */
AngularFormly.ISelectOption.prototype.group;
/**
 * @record
 * @struct
 */
AngularFormly.ITemplateOptions = function() {};
 /** @type {boolean} */
AngularFormly.ITemplateOptions.prototype.disabled;
 /** @type {number} */
AngularFormly.ITemplateOptions.prototype.maxlength;
 /** @type {number} */
AngularFormly.ITemplateOptions.prototype.minlength;
 /** @type {string} */
AngularFormly.ITemplateOptions.prototype.pattern;
 /** @type {boolean} */
AngularFormly.ITemplateOptions.prototype.required;
 /** @type {number} */
AngularFormly.ITemplateOptions.prototype.max;
 /** @type {number} */
AngularFormly.ITemplateOptions.prototype.min;
 /** @type {(string|number)} */
AngularFormly.ITemplateOptions.prototype.placeholder;
 /** @type {number} */
AngularFormly.ITemplateOptions.prototype.tabindex;
 /** @type {string} */
AngularFormly.ITemplateOptions.prototype.type;
 /** @type {(string|!AngularFormly.IExpressionFunction)} */
AngularFormly.ITemplateOptions.prototype.onBlur;
 /** @type {(string|!AngularFormly.IExpressionFunction)} */
AngularFormly.ITemplateOptions.prototype.onChange;
 /** @type {(string|!AngularFormly.IExpressionFunction)} */
AngularFormly.ITemplateOptions.prototype.onClick;
 /** @type {(string|!AngularFormly.IExpressionFunction)} */
AngularFormly.ITemplateOptions.prototype.onFocus;
 /** @type {(string|!AngularFormly.IExpressionFunction)} */
AngularFormly.ITemplateOptions.prototype.onKeydown;
 /** @type {(string|!AngularFormly.IExpressionFunction)} */
AngularFormly.ITemplateOptions.prototype.onKeypress;
 /** @type {(string|!AngularFormly.IExpressionFunction)} */
AngularFormly.ITemplateOptions.prototype.onKeyup;
 /** @type {string} */
AngularFormly.ITemplateOptions.prototype.label;
 /** @type {string} */
AngularFormly.ITemplateOptions.prototype.description;

/* TODO: IndexSignature: AngularFormly */
 /** @type {!Array<!AngularFormly.ISelectOption>} */
AngularFormly.ITemplateOptions.prototype.options;
 /** @type {string} */
AngularFormly.ITemplateOptions.prototype.groupProp;
 /** @type {string} */
AngularFormly.ITemplateOptions.prototype.valueProp;
 /** @type {string} */
AngularFormly.ITemplateOptions.prototype.labelProp;
/**
 * @record
 * @struct
 */
AngularFormly.IValidator = function() {};
 /** @type {(string|!AngularFormly.IExpressionFunction)} */
AngularFormly.IValidator.prototype.expression;
 /** @type {(string|!AngularFormly.IExpressionFunction)} */
AngularFormly.IValidator.prototype.message;
/**
 * @record
 * @struct
 */
AngularFormly.IWatcher = function() {};
 /** @type {boolean} */
AngularFormly.IWatcher.prototype.deep;
 /** @type {(string|function(string, !AngularFormly.ITemplateScope): boolean)} */
AngularFormly.IWatcher.prototype.expression;
 /** @type {function(string, ?, ?, !AngularFormly.ITemplateScope, !Function): void} */
AngularFormly.IWatcher.prototype.listener;
 /** @type {string} */
AngularFormly.IWatcher.prototype.type;
/**
 * @record
 * @struct
 */
AngularFormly.IFieldConfigurationObject = function() {};
 /** @type {!Object<string,(string|!AngularFormly.IExpressionFunction|!AngularFormly.IValidator)>} */
AngularFormly.IFieldConfigurationObject.prototype.asyncValidators;
 /** @type {(string|!Function)} */
AngularFormly.IFieldConfigurationObject.prototype.controller;
 /** @type {!Object<string,?>} */
AngularFormly.IFieldConfigurationObject.prototype.data;
 /** @type {?} */
AngularFormly.IFieldConfigurationObject.prototype.defaultValue;
 /** @type {string} */
AngularFormly.IFieldConfigurationObject.prototype.className;
 /** @type {!Object<string,string>} */
AngularFormly.IFieldConfigurationObject.prototype.elementAttributes;
 /** @type {!Object<string,(string|!AngularFormly.IExpressionFunction|!AngularFormly.IValidator)>} */
AngularFormly.IFieldConfigurationObject.prototype.expressionProperties;
 /** @type {boolean} */
AngularFormly.IFieldConfigurationObject.prototype.hide;
 /** @type {(string|!AngularFormly.IExpressionFunction)} */
AngularFormly.IFieldConfigurationObject.prototype.hideExpression;
 /** @type {string} */
AngularFormly.IFieldConfigurationObject.prototype.id;
 /** @type {?} */
AngularFormly.IFieldConfigurationObject.prototype.initialValue;
 /** @type {(string|number)} */
AngularFormly.IFieldConfigurationObject.prototype.key;
 /** @type {!angular.IDirectiveLinkFn} */
AngularFormly.IFieldConfigurationObject.prototype.link;
 /** @type {(string|!Object<string,?>)} */
AngularFormly.IFieldConfigurationObject.prototype.model;
 /** @type {!AngularFormly.IModelOptions} */
AngularFormly.IFieldConfigurationObject.prototype.modelOptions;
 /** @type {string} */
AngularFormly.IFieldConfigurationObject.prototype.name;
 /** @type {?} */
AngularFormly.IFieldConfigurationObject.prototype.ngModelAttrs;
 /** @type {!Object<string,string>} */
AngularFormly.IFieldConfigurationObject.prototype.ngModelElAttrs;
 /** @type {boolean} */
AngularFormly.IFieldConfigurationObject.prototype.noFormControl;
 /** @type {(string|!Array<string>)} */
AngularFormly.IFieldConfigurationObject.prototype.optionsTypes;
 /** @type {(string|function(!AngularFormly.IFieldConfigurationObject): (string|!angular.IPromise<string>))} */
AngularFormly.IFieldConfigurationObject.prototype.template;
 /** @type {!AngularFormly.ITemplateManipulators} */
AngularFormly.IFieldConfigurationObject.prototype.templateManipulators;
 /** @type {!AngularFormly.ITemplateOptions} */
AngularFormly.IFieldConfigurationObject.prototype.templateOptions;
 /** @type {(string|function(!AngularFormly.IFieldConfigurationObject): (string|!angular.IPromise<string>))} */
AngularFormly.IFieldConfigurationObject.prototype.templateUrl;
 /** @type {string} */
AngularFormly.IFieldConfigurationObject.prototype.type;
 /** @type {{errorExistsAndShouldBeVisible: boolean, messages: !Object<string,(string|!AngularFormly.IExpressionFunction)>, show: boolean}} */
AngularFormly.IFieldConfigurationObject.prototype.validation;
 /** @type {!Object<string,(string|!AngularFormly.IExpressionFunction|!AngularFormly.IValidator)>} */
AngularFormly.IFieldConfigurationObject.prototype.validators;
 /** @type {(!AngularFormly.IWatcher|!Array<!AngularFormly.IWatcher>)} */
AngularFormly.IFieldConfigurationObject.prototype.watcher;
 /** @type {(string|!Array<string>)} */
AngularFormly.IFieldConfigurationObject.prototype.wrapper;
 /** @type {(!angular.IFormController|!Array<!angular.IFormController>)} */
AngularFormly.IFieldConfigurationObject.prototype.formControl;
 /** @type {function(): void} */
AngularFormly.IFieldConfigurationObject.prototype.resetModel;
 /** @type {function(): void} */
AngularFormly.IFieldConfigurationObject.prototype.runExpressions;
 /** @type {function(): void} */
AngularFormly.IFieldConfigurationObject.prototype.updateInitialValue;

/**
 * This is a getter/setter function for the value that your field is representing. Useful when using getterSetter: true
 * in the modelOptions (in fact, if you don't disable the ngModelAttrsTemplateManipulator that comes built-in with formly,
 * it will automagically change your field's ng-model attribute to use options.value.
 * 
 * see http://docs.angular-formly.com/docs/field-configuration-object#value-gettersetter-function
 * @param {?=} val
 * @return {?|void}
 */
AngularFormly.IFieldConfigurationObject.prototype.value = function(val) {};
/**
 * @record
 * @struct
 */
AngularFormly.ITypeOptions = function() {};
 /** @type {!Object<string,!Function>} */
AngularFormly.ITypeOptions.prototype.apiCheck;
 /** @type {string} */
AngularFormly.ITypeOptions.prototype.apiCheckFunction;
 /** @type {?} */
AngularFormly.ITypeOptions.prototype.apiCheckInstance;
 /** @type {!Object} */
AngularFormly.ITypeOptions.prototype.apiCheckOptions;
 /** @type {(!Function|!AngularFormly.IFieldConfigurationObject)} */
AngularFormly.ITypeOptions.prototype.defaultOptions;
 /** @type {(string|!Function|!Array<?>)} */
AngularFormly.ITypeOptions.prototype.controller;
 /** @type {!Object<string,?>} */
AngularFormly.ITypeOptions.prototype.data;
 /** @type {string} */
AngularFormly.ITypeOptions.prototype.extends;
 /** @type {!angular.IDirectiveLinkFn} */
AngularFormly.ITypeOptions.prototype.link;
 /** @type {boolean} */
AngularFormly.ITypeOptions.prototype.overwriteOk;
 /** @type {string} */
AngularFormly.ITypeOptions.prototype.name;
 /** @type {(string|!Function)} */
AngularFormly.ITypeOptions.prototype.template;
 /** @type {(string|!Function)} */
AngularFormly.ITypeOptions.prototype.templateUrl;
 /** @type {!Function} */
AngularFormly.ITypeOptions.prototype.validateOptions;
 /** @type {(string|!Array<string>)} */
AngularFormly.ITypeOptions.prototype.wrapper;
/**
 * @record
 * @struct
 */
AngularFormly.IWrapperOptions = function() {};
 /** @type {!Object<string,!Function>} */
AngularFormly.IWrapperOptions.prototype.apiCheck;
 /** @type {string} */
AngularFormly.IWrapperOptions.prototype.apiCheckFunction;
 /** @type {?} */
AngularFormly.IWrapperOptions.prototype.apiCheckInstance;
 /** @type {!Object} */
AngularFormly.IWrapperOptions.prototype.apiCheckOptions;
 /** @type {boolean} */
AngularFormly.IWrapperOptions.prototype.overwriteOk;
 /** @type {string} */
AngularFormly.IWrapperOptions.prototype.name;
 /** @type {string} */
AngularFormly.IWrapperOptions.prototype.template;
 /** @type {string} */
AngularFormly.IWrapperOptions.prototype.templateUrl;
 /** @type {!Array<string>} */
AngularFormly.IWrapperOptions.prototype.types;
 /** @type {!Function} */
AngularFormly.IWrapperOptions.prototype.validateOptions;
/**
 * @record
 * @struct
 */
AngularFormly.IFormlyConfigExtras = function() {};
 /** @type {boolean} */
AngularFormly.IFormlyConfigExtras.prototype.disableNgModelAttrsManipulator;
 /** @type {?} */
AngularFormly.IFormlyConfigExtras.prototype.apiCheckInstance;
 /** @type {boolean} */
AngularFormly.IFormlyConfigExtras.prototype.ngModelAttrsManipulatorPreferUnbound;
 /** @type {boolean} */
AngularFormly.IFormlyConfigExtras.prototype.removeChromeAutoComplete;
 /** @type {string} */
AngularFormly.IFormlyConfigExtras.prototype.defaultHideDirective;
 /** @type {?} */
AngularFormly.IFormlyConfigExtras.prototype.errorExistsAndShouldBeVisibleExpression;
 /** @type {!Function} */
AngularFormly.IFormlyConfigExtras.prototype.getFieldId;
 /** @type {(!Function|!Array<!Function>)} */
AngularFormly.IFormlyConfigExtras.prototype.fieldTransform;
 /** @type {boolean} */
AngularFormly.IFormlyConfigExtras.prototype.explicitAsync;
/**
 * @record
 * @struct
 */
AngularFormly.IFormlyConfig = function() {};
 /** @type {boolean} */
AngularFormly.IFormlyConfig.prototype.disableWarnings;
 /** @type {!AngularFormly.IFormlyConfigExtras} */
AngularFormly.IFormlyConfig.prototype.extras;
 /** @type {!AngularFormly.ITemplateManipulators} */
AngularFormly.IFormlyConfig.prototype.templateManipulators;

/**
 * @param {!AngularFormly.ITypeOptions} typeOptions
 * @return {void}
 */
AngularFormly.IFormlyConfig.prototype.setType = function(typeOptions) {};

/**
 * @param {!AngularFormly.IWrapperOptions} wrapperOptions
 * @return {void}
 */
AngularFormly.IFormlyConfig.prototype.setWrapper = function(wrapperOptions) {};
/**
 * @record
 * @struct
 */
AngularFormly.ITemplateScopeOptions = function() {};
 /** @type {(!angular.IFormController|!Array<!angular.IFormController>)} */
AngularFormly.ITemplateScopeOptions.prototype.formControl;
 /** @type {!AngularFormly.ITemplateOptions} */
AngularFormly.ITemplateScopeOptions.prototype.templateOptions;
 /** @type {!Object} */
AngularFormly.ITemplateScopeOptions.prototype.validation;
/**
 * @record
 * @struct
 */
AngularFormly.ITemplateScope = function() {};
 /** @type {!AngularFormly.ITemplateScopeOptions} */
AngularFormly.ITemplateScope.prototype.options;
 /** @type {(!angular.IFormController|!Array<!angular.IFormController>)} */
AngularFormly.ITemplateScope.prototype.fc;
 /** @type {!AngularFormly.IFieldArray} */
AngularFormly.ITemplateScope.prototype.fields;
 /** @type {?} */
AngularFormly.ITemplateScope.prototype.form;
 /** @type {!Object} */
AngularFormly.ITemplateScope.prototype.formState;
 /** @type {string} */
AngularFormly.ITemplateScope.prototype.id;
 /** @type {number} */
AngularFormly.ITemplateScope.prototype.index;
 /** @type {(string|!Object<string,?>)} */
AngularFormly.ITemplateScope.prototype.model;
 /** @type {boolean} */
AngularFormly.ITemplateScope.prototype.showError;
 /** @type {!AngularFormly.ITemplateOptions} */
AngularFormly.ITemplateScope.prototype.to;
/**
 * @record
 * @struct
 */
AngularFormly.IValidationMessages = function() {};
 /** @type {!Object<string,function(?, ?, !AngularFormly.ITemplateScope): string>} */
AngularFormly.IValidationMessages.prototype.messages;

/**
 * @param {string} name
 * @param {string} prop
 * @param {string} prefix
 * @param {string} suffix
 * @param {string} alternate
 * @return {void}
 */
AngularFormly.IValidationMessages.prototype.addTemplateOptionValueMessage = function(name, prop, prefix, suffix, alternate) {};

/**
 * @param {string} name
 * @param {string} string
 * @return {void}
 */
AngularFormly.IValidationMessages.prototype.addStringMessage = function(name, string) {};
