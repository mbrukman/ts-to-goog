/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/vision/index.d.ts:

/* TODO: ImportDeclaration in  */
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "hapi"
 /** @type {?} */
tsickle_declare_module.hapi.Server.prototype.render;

/**
 * Initializes the server views manager
 * @see {\@link https://github.com/hapijs/vision/blob/master/API.md#serverviewsoptions}
 * @param {?} options
 * @return {?}
 */
tsickle_declare_module.hapi.Server.prototype.views = function(options) {};
 /** @type {?} */
tsickle_declare_module.hapi.Request.prototype.render;
 /** @type {(string|{template: string, context: !Object, options: ?})} */
tsickle_declare_module.hapi.RouteHandlerPlugins.prototype.view;

/**
 * Concludes the handler activity by returning control over to the router with a templatized view response
 * Returns a response object. The generated response will have the variety property set to view.
 * The response flow control rules apply.
 * @see {\@link https://github.com/hapijs/vision/blob/master/API.md#replyviewtemplate-context-options}
 * @param {string} templatePath
 * @param {?=} context  optional object used by the template to render context-specific result. Defaults to no context {}.
 * @param {?=} options  optional object used to override the server's views manager configuration for this response. Cannot override isCached, partialsPath, or helpersPath which are only loaded at initialization.
 * @return {?}
 */
tsickle_declare_module.hapi.Base_Reply.prototype.view = function(templatePath, context, options) {};
/**
 * @extends {ServerViewsAdditionalOptions}
 * @record
 * @struct
 */
function ServerViewsConfiguration() {}
 /** @type {?} */
ServerViewsConfiguration.prototype.engines;
 /** @type {string} */
ServerViewsConfiguration.prototype.defaultExtension;
/**
 * @extends {ServerViewsAdditionalOptions}
 * @record
 * @struct
 */
function ServerViewsEnginesOptions() {}
 /** @type {?} */
ServerViewsEnginesOptions.prototype.module;
/**
 * @extends {ViewHandlerOrReplyOptions}
 * @record
 * @struct
 */
function ServerViewsAdditionalOptions() {}
 /** @type {(string|!Array<string>)} */
ServerViewsAdditionalOptions.prototype.partialsPath;
 /** @type {(string|!Array<string>)} */
ServerViewsAdditionalOptions.prototype.helpersPath;
 /** @type {boolean} */
ServerViewsAdditionalOptions.prototype.isCached;
/**
 * @record
 * @struct
 */
function ViewHandlerOrReplyOptions() {}
 /** @type {(string|!Array<string>)} */
ViewHandlerOrReplyOptions.prototype.path;
 /** @type {string} */
ViewHandlerOrReplyOptions.prototype.relativeTo;
 /** @type {boolean} */
ViewHandlerOrReplyOptions.prototype.layout;
 /** @type {(string|!Array<string>)} */
ViewHandlerOrReplyOptions.prototype.layoutPath;
 /** @type {string} */
ViewHandlerOrReplyOptions.prototype.layoutKeyword;
 /** @type {string} */
ViewHandlerOrReplyOptions.prototype.encoding;
 /** @type {boolean} */
ViewHandlerOrReplyOptions.prototype.allowAbsolutePaths;
 /** @type {boolean} */
ViewHandlerOrReplyOptions.prototype.allowInsecureAccess;
 /** @type {?} */
ViewHandlerOrReplyOptions.prototype.compileOptions;
 /** @type {?} */
ViewHandlerOrReplyOptions.prototype.runtimeOptions;
 /** @type {string} */
ViewHandlerOrReplyOptions.prototype.contentType;
 /** @type {string} */
ViewHandlerOrReplyOptions.prototype.compileMode;
 /** @type {(!Object|?)} */
ViewHandlerOrReplyOptions.prototype.context;
/**
 * @record
 * @struct
 */
function CompileOptions() {}
/**
 * @record
 * @struct
 */
function RuntimeOptions() {}
/**
 * @record
 * @struct
 */
function ServerViewCompile() {}

/* TODO: CallSignature:  */

/* TODO: CallSignature:  */
/**
 * @record
 * @struct
 */
function NpmModule() {}
 /** @type {?} */
NpmModule.prototype.compile;

/**
 * initializes additional engine state. The config object is the engine configuration object allowing updates to be made. This is useful for engines like Nunjucks that rely on additional state for rendering. next has the signature function(err).
 * @param {?} config
 * @param {?} next
 * @return {void}
 */
NpmModule.prototype.prepare = function(config, next) {};

/**
 * registers a partial for use during template rendering. The name is the partial path that templates should use to reference the partial and src is the uncompiled template string for the partial.
 * @param {string} name
 * @param {string} src
 * @return {void}
 */
NpmModule.prototype.registerPartial = function(name, src) {};

/**
 * registers a helper for use during template rendering. The name is the name that templates should use to reference the helper and helper is the function that will be invoked when the helper is called.
 * @param {string} name
 * @param {!Function} helper
 * @return {void}
 */
NpmModule.prototype.registerHelper = function(name, helper) {};
/**
 * @record
 * @struct
 */
function EngineConfigurationObject() {}
/**
 * @record
 * @struct
 */
function RenderMethod() {}

/* TODO: CallSignature:  */

/* TODO: CallSignature:  */
/**
 * @record
 * @struct
 */
function RenderCallBack() {}

/* TODO: CallSignature:  */
/**
 * @record
 * @struct
 */
function ViewManager() {}
 /** @type {?} */
ViewManager.prototype.render;

/**
 * Registers a helper, on all configured engines that have a registerHelper() method, for use during template rendering. Engines without a registerHelper() method will be skipped. The name is the name that templates should use to reference the helper and helper is the function that will be invoked when the helper is called.
 * @see {\@link https://github.com/hapijs/vision/blob/master/API.md#managerregisterhelpername-helper}
 * @param {string} name
 * @param {!Function} helper
 * @return {void}
 */
ViewManager.prototype.registerHelper = function(name, helper) {};
 /** @type {?} */
var visionPlugin;

/* TODO: ExportAssignment in  */
