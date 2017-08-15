/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/angular-feature-flags/index.d.ts:

/* TODO: ImportDeclaration in  */
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "angular"
/** @const */
tsickle_declare_module.angular.featureflags = {};
/**
 * @record
 * @struct
 */
tsickle_declare_module.angular.featureflags.FlagData = function() {};
 /** @type {string} */
tsickle_declare_module.angular.featureflags.FlagData.prototype.key;
 /** @type {boolean} */
tsickle_declare_module.angular.featureflags.FlagData.prototype.active;
 /** @type {string} */
tsickle_declare_module.angular.featureflags.FlagData.prototype.name;
 /** @type {string} */
tsickle_declare_module.angular.featureflags.FlagData.prototype.description;
/**
 * @record
 * @struct
 */
tsickle_declare_module.angular.featureflags.FeatureFlagsProvider = function() {};

/**
 * @param {!Array<!featureflags.FlagData>} flags
 * @return {void}
 */
tsickle_declare_module.angular.featureflags.FeatureFlagsProvider.prototype.setInitialFlags = function(flags) {};
/**
 * @record
 * @struct
 */
tsickle_declare_module.angular.featureflags.FeatureFlagsService = function() {};

/**
 * @param {(!angular.IPromise<!featureflags.FlagData>|!angular.IHttpPromise<!featureflags.FlagData>)} flagsPromise
 * @return {void}
 */
tsickle_declare_module.angular.featureflags.FeatureFlagsService.prototype.set = function(flagsPromise) {};
