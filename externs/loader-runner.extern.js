/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/loader-runner/index.d.ts:
/**
 * @record
 * @struct
 */
function Loader() {}
 /** @type {string} */
Loader.prototype.path;
 /** @type {string} */
Loader.prototype.query;
 /** @type {string} */
Loader.prototype.request;
 /** @type {?} */
Loader.prototype.options;
 /** @type {?} */
Loader.prototype.normal;
 /** @type {?} */
Loader.prototype.pitch;
 /** @type {string} */
Loader.prototype.raw;
 /** @type {?} */
Loader.prototype.data;
 /** @type {boolean} */
Loader.prototype.pitchExecuted;
 /** @type {boolean} */
Loader.prototype.normalExecuted;
/**
 * @record
 * @struct
 */
function RunLoaderOption() {}
 /** @type {string} */
RunLoaderOption.prototype.resource;
 /** @type {!Array<?>} */
RunLoaderOption.prototype.loaders;
 /** @type {?} */
RunLoaderOption.prototype.context;
 /** @type {?} */
RunLoaderOption.prototype.readResource;
/**
 * @record
 * @struct
 */
function RunLoaderResult() {}
 /** @type {!Array<?>} */
RunLoaderResult.prototype.result;
 /** @type {?} */
RunLoaderResult.prototype.resourceBuffer;
 /** @type {boolean} */
RunLoaderResult.prototype.cacheable;
 /** @type {!Array<string>} */
RunLoaderResult.prototype.fileDependencies;
 /** @type {!Array<string>} */
RunLoaderResult.prototype.contextDependencies;
/**
 * @record
 * @struct
 */
function ExtendedLoaderContext() {}
 /** @type {string} */
ExtendedLoaderContext.prototype.context;
 /** @type {number} */
ExtendedLoaderContext.prototype.loaderIndex;
 /** @type {!Array<?>} */
ExtendedLoaderContext.prototype.loaders;
 /** @type {string} */
ExtendedLoaderContext.prototype.resourcePath;
 /** @type {string} */
ExtendedLoaderContext.prototype.resourceQuery;
 /** @type {?} */
ExtendedLoaderContext.prototype.async;
 /** @type {?} */
ExtendedLoaderContext.prototype.callback;
 /** @type {?} */
ExtendedLoaderContext.prototype.cacheable;
 /** @type {?} */
ExtendedLoaderContext.prototype.dependency;
 /** @type {?} */
ExtendedLoaderContext.prototype.addDependency;
 /** @type {?} */
ExtendedLoaderContext.prototype.addContextDependency;
 /** @type {?} */
ExtendedLoaderContext.prototype.getDependencies;
 /** @type {?} */
ExtendedLoaderContext.prototype.getContextDependencies;
 /** @type {?} */
ExtendedLoaderContext.prototype.clearDependencies;
 /** @type {string} */
ExtendedLoaderContext.prototype.resource;
 /** @type {string} */
ExtendedLoaderContext.prototype.request;
 /** @type {string} */
ExtendedLoaderContext.prototype.remainingRequest;
 /** @type {string} */
ExtendedLoaderContext.prototype.currentRequest;
 /** @type {string} */
ExtendedLoaderContext.prototype.previousRequest;
 /** @type {(string|?)} */
ExtendedLoaderContext.prototype.query;
 /** @type {?} */
ExtendedLoaderContext.prototype.data;

/**
 * @param {string} resource
 * @return {string}
 */
function getContext(resource) {}

/**
 * @param {?} options
 * @param {?} callback
 * @return {void}
 */
function runLoaders(options, callback) {}