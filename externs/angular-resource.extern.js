/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/angular-resource/index.d.ts:
 /** @type {string} */
var _;

/* TODO: ExportAssignment in  */

/* TODO: ImportDeclaration in  */
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "angular"
/** @const */
tsickle_declare_module.angular.resource = {};
/**
 * @record
 * @struct
 */
tsickle_declare_module.angular.resource.IResourceOptions = function() {};
 /** @type {boolean} */
tsickle_declare_module.angular.resource.IResourceOptions.prototype.stripTrailingSlashes;
 /** @type {boolean} */
tsickle_declare_module.angular.resource.IResourceOptions.prototype.cancellable;
/**
 * @record
 * @struct
 */
tsickle_declare_module.angular.resource.IResourceService = function() {};

/* TODO: CallSignature: tsickle_declare_module.angular.resource */

/* TODO: CallSignature: tsickle_declare_module.angular.resource */

/* TODO: CallSignature: tsickle_declare_module.angular.resource */
/**
 * @record
 * @struct
 */
tsickle_declare_module.angular.resource.IActionHash = function() {};

/* TODO: IndexSignature: tsickle_declare_module.angular.resource */
/**
 * @record
 * @struct
 */
tsickle_declare_module.angular.resource.IResourceResponse = function() {};
 /** @type {?} */
tsickle_declare_module.angular.resource.IResourceResponse.prototype.config;
 /** @type {?} */
tsickle_declare_module.angular.resource.IResourceResponse.prototype.data;
 /** @type {?} */
tsickle_declare_module.angular.resource.IResourceResponse.prototype.headers;
 /** @type {?} */
tsickle_declare_module.angular.resource.IResourceResponse.prototype.resource;
 /** @type {number} */
tsickle_declare_module.angular.resource.IResourceResponse.prototype.status;
 /** @type {string} */
tsickle_declare_module.angular.resource.IResourceResponse.prototype.statusText;
/**
 * @record
 * @struct
 */
tsickle_declare_module.angular.resource.IResourceInterceptor = function() {};

/**
 * @param {!resource.IResourceResponse} response
 * @return {?}
 */
tsickle_declare_module.angular.resource.IResourceInterceptor.prototype.response = function(response) {};

/**
 * @param {?} rejection
 * @return {?}
 */
tsickle_declare_module.angular.resource.IResourceInterceptor.prototype.responseError = function(rejection) {};
/**
 * @record
 * @struct
 */
tsickle_declare_module.angular.resource.IActionDescriptor = function() {};
 /** @type {string} */
tsickle_declare_module.angular.resource.IActionDescriptor.prototype.method;
 /** @type {?} */
tsickle_declare_module.angular.resource.IActionDescriptor.prototype.params;
 /** @type {string} */
tsickle_declare_module.angular.resource.IActionDescriptor.prototype.url;
 /** @type {boolean} */
tsickle_declare_module.angular.resource.IActionDescriptor.prototype.isArray;
 /** @type {(!angular.IHttpRequestTransformer|!Array<!angular.IHttpRequestTransformer>)} */
tsickle_declare_module.angular.resource.IActionDescriptor.prototype.transformRequest;
 /** @type {(!angular.IHttpResponseTransformer|!Array<!angular.IHttpResponseTransformer>)} */
tsickle_declare_module.angular.resource.IActionDescriptor.prototype.transformResponse;
 /** @type {?} */
tsickle_declare_module.angular.resource.IActionDescriptor.prototype.headers;
 /** @type {(boolean|!angular.ICacheObject)} */
tsickle_declare_module.angular.resource.IActionDescriptor.prototype.cache;
 /** @type {number} */
tsickle_declare_module.angular.resource.IActionDescriptor.prototype.timeout;
 /** @type {boolean} */
tsickle_declare_module.angular.resource.IActionDescriptor.prototype.cancellable;
 /** @type {boolean} */
tsickle_declare_module.angular.resource.IActionDescriptor.prototype.withCredentials;
 /** @type {string} */
tsickle_declare_module.angular.resource.IActionDescriptor.prototype.responseType;
 /** @type {!resource.IResourceInterceptor} */
tsickle_declare_module.angular.resource.IActionDescriptor.prototype.interceptor;
/**
 * @record
 * @struct
 */
tsickle_declare_module.angular.resource.IResourceMethod = function() {};

/* TODO: CallSignature: tsickle_declare_module.angular.resource */

/* TODO: CallSignature: tsickle_declare_module.angular.resource */

/* TODO: CallSignature: tsickle_declare_module.angular.resource */

/* TODO: CallSignature: tsickle_declare_module.angular.resource */

/* TODO: CallSignature: tsickle_declare_module.angular.resource */
/**
 * @record
 * @struct
 */
tsickle_declare_module.angular.resource.IResourceArrayMethod = function() {};

/* TODO: CallSignature: tsickle_declare_module.angular.resource */

/* TODO: CallSignature: tsickle_declare_module.angular.resource */

/* TODO: CallSignature: tsickle_declare_module.angular.resource */

/* TODO: CallSignature: tsickle_declare_module.angular.resource */

/* TODO: CallSignature: tsickle_declare_module.angular.resource */
/**
 * @record
 * @struct
 */
tsickle_declare_module.angular.resource.IResourceClass = function() {};

/* TODO: ConstructSignature: tsickle_declare_module.angular.resource */
 /** @type {!resource.IResourceMethod<T>} */
tsickle_declare_module.angular.resource.IResourceClass.prototype.get;
 /** @type {!resource.IResourceArrayMethod<T>} */
tsickle_declare_module.angular.resource.IResourceClass.prototype.query;
 /** @type {!resource.IResourceMethod<T>} */
tsickle_declare_module.angular.resource.IResourceClass.prototype.save;
 /** @type {!resource.IResourceMethod<T>} */
tsickle_declare_module.angular.resource.IResourceClass.prototype.remove;
 /** @type {!resource.IResourceMethod<T>} */
tsickle_declare_module.angular.resource.IResourceClass.prototype.delete;
/**
 * @record
 * @struct
 */
tsickle_declare_module.angular.resource.IResource = function() {};
 /** @type {!angular.IPromise<T>} */
tsickle_declare_module.angular.resource.IResource.prototype.$promise;
 /** @type {boolean} */
tsickle_declare_module.angular.resource.IResource.prototype.$resolved;

/**
 * @param {!Object|!Function=} params_or_success
 * @param {!Function=} success_or_error
 * @param {!Function=} error
 * @return {!angular.IPromise<T>}
 */
tsickle_declare_module.angular.resource.IResource.prototype.$get = function(params_or_success, success_or_error, error) {};

/**
 * @param {!Object|!Function=} params_or_success
 * @param {!Function=} success_or_error
 * @param {!Function=} error
 * @return {!angular.IPromise<!resource.IResourceArray<T>>}
 */
tsickle_declare_module.angular.resource.IResource.prototype.$query = function(params_or_success, success_or_error, error) {};

/**
 * @param {!Object|!Function=} params_or_success
 * @param {!Function=} success_or_error
 * @param {!Function=} error
 * @return {!angular.IPromise<T>}
 */
tsickle_declare_module.angular.resource.IResource.prototype.$save = function(params_or_success, success_or_error, error) {};

/**
 * @param {!Object|!Function=} params_or_success
 * @param {!Function=} success_or_error
 * @param {!Function=} error
 * @return {!angular.IPromise<T>}
 */
tsickle_declare_module.angular.resource.IResource.prototype.$remove = function(params_or_success, success_or_error, error) {};

/**
 * @param {!Object|!Function=} params_or_success
 * @param {!Function=} success_or_error
 * @param {!Function=} error
 * @return {!angular.IPromise<T>}
 */
tsickle_declare_module.angular.resource.IResource.prototype.$delete = function(params_or_success, success_or_error, error) {};

/**
 * @return {void}
 */
tsickle_declare_module.angular.resource.IResource.prototype.$cancelRequest = function() {};

/**
 * @return {T}
 */
tsickle_declare_module.angular.resource.IResource.prototype.toJSON = function() {};
/**
 * @record
 * @struct
 */
tsickle_declare_module.angular.resource.IResourceArray = function() {};
 /** @type {!angular.IPromise<!resource.IResourceArray>} */
tsickle_declare_module.angular.resource.IResourceArray.prototype.$promise;
 /** @type {boolean} */
tsickle_declare_module.angular.resource.IResourceArray.prototype.$resolved;

/**
 * @return {void}
 */
tsickle_declare_module.angular.resource.IResourceArray.prototype.$cancelRequest = function() {};
/**
 * @record
 * @struct
 */
tsickle_declare_module.angular.resource.IResourceServiceFactoryFunction = function() {};

/* TODO: CallSignature: tsickle_declare_module.angular.resource */

/* TODO: CallSignature: tsickle_declare_module.angular.resource */
/**
 * @extends {angular.IServiceProvider}
 * @record
 * @struct
 */
tsickle_declare_module.angular.resource.IResourceServiceProvider = function() {};
 /** @type {!resource.IResourceOptions} */
tsickle_declare_module.angular.resource.IResourceServiceProvider.prototype.defaults;

/**
 * creating a resource service factory
 * @param {string} name
 * @param {!resource.IResourceServiceFactoryFunction<?>} resourceServiceFactoryFunction
 * @return {!angular.IModule}
 */
tsickle_declare_module.angular.IModule.prototype.factory = function(name, resourceServiceFactoryFunction) {};

/**
 * @param {string} name
 * @return {!resource.IResourceService}
 */
tsickle_declare_module.angular.auto.IInjectorService.prototype.get = function(name) {};
 /** @type {!angular.IPromise<!Array>} */
Array.prototype.$promise;
 /** @type {boolean} */
Array.prototype.$resolved;
