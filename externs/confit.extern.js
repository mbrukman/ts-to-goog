/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/confit/index.d.ts:
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "confit"
/** @const */
tsickle_declare_module.confit = {};
/**
 * @record
 * @struct
 */
tsickle_declare_module.confit.ProtocolsSetPrivate = function() {};

/* TODO: IndexSignature: tsickle_declare_module.confit */
/**
 * @record
 * @struct
 */
tsickle_declare_module.confit.ConfigStore = function() {};

/**
 * @param {string} name
 * @return {?}
 */
tsickle_declare_module.confit.ConfigStore.prototype.get = function(name) {};

/**
 * @template T
 * @param {string} name
 * @param {T} newValue
 * @return {T}
 */
tsickle_declare_module.confit.ConfigStore.prototype.set = function(name, newValue) {};

/**
 * @param {!Object} newSettings
 * @return {void}
 */
tsickle_declare_module.confit.ConfigStore.prototype.use = function(newSettings) {};

/** @typedef {{basedir: string, protocols: !ProtocolsSetPrivate}} */
tsickle_declare_module.confit.options;
/**
 * @record
 * @struct
 */
tsickle_declare_module.confit.ConfigFactory = function() {};

/**
 * @param {function(?, !ConfigStore): ?} callback
 * @return {void}
 */
tsickle_declare_module.confit.ConfigFactory.prototype.create = function(callback) {};

/**
 * @param {(string|!Object)} filepathOrSettingsObj
 * @return {ConfigFactory}
 */
tsickle_declare_module.confit.ConfigFactory.prototype.addOverride = function(filepathOrSettingsObj) {};

/**
 * @param {(string|!Object)} filepathOrSettingsObj
 * @return {ConfigFactory}
 */
tsickle_declare_module.confit.ConfigFactory.prototype.addDefault = function(filepathOrSettingsObj) {};

/**
 * @param {(string|{basedir: string, protocols: !ProtocolsSetPrivate})} optionsOrBaseDir
 * @return {!ConfigFactory}
 */
tsickle_declare_module.confit.confit = function(optionsOrBaseDir) {};
/**
 * @extends {ProtocolsSetPrivate}
 * @record
 * @struct
 */
tsickle_declare_module.confit.confit.ProtocolsSet = function() {};

/* TODO: ExportAssignment in tsickle_declare_module.confit */