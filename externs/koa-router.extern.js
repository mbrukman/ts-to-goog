/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/koa-router/index.d.ts:

/* TODO: ImportDeclaration in  */
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "koa"
 /** @type {?} */
tsickle_declare_module.koa.Context.prototype.params;
/** @const */
var Layer = {};
/**
 * @record
 * @struct
 */
Layer.ILayerOptions = function() {};
 /** @type {string} */
Layer.ILayerOptions.prototype.name;
 /** @type {boolean} */
Layer.ILayerOptions.prototype.sensitive;
 /** @type {boolean} */
Layer.ILayerOptions.prototype.strict;
/** @const */
var Router = {};
/**
 * @record
 * @struct
 */
Router.IRouterOptions = function() {};
 /** @type {string} */
Router.IRouterOptions.prototype.prefix;
 /** @type {!Array<string>} */
Router.IRouterOptions.prototype.methods;
 /** @type {string} */
Router.IRouterOptions.prototype.routerPath;
 /** @type {boolean} */
Router.IRouterOptions.prototype.sensitive;
/**
 * @extends {Application.Context}
 * @record
 * @struct
 */
Router.IRouterContext = function() {};
 /** @type {?} */
Router.IRouterContext.prototype.params;
/**
 * @record
 * @struct
 */
Router.IMiddleware = function() {};

/* TODO: CallSignature: Router */
/**
 * @record
 * @struct
 */
Router.IParamMiddleware = function() {};

/* TODO: CallSignature: Router */
/**
 * @record
 * @struct
 */
Router.IRouterAllowedMethodsOptions = function() {};
 /** @type {boolean} */
Router.IRouterAllowedMethodsOptions.prototype.throw;
 /** @type {function(): ?} */
Router.IRouterAllowedMethodsOptions.prototype.notImplemented;
 /** @type {function(): ?} */
Router.IRouterAllowedMethodsOptions.prototype.methodNotAllowed;
 /** @type {!Layer.ILayerOptions} */
Layer.prototype.opts;
 /** @type {string} */
Layer.prototype.name;
 /** @type {!Array<string>} */
Layer.prototype.methods;
 /** @type {!Array<string>} */
Layer.prototype.paramNames;
 /** @type {!Array<!Router.IMiddleware>} */
Layer.prototype.stack;
 /** @type {!RegExp} */
Layer.prototype.regexp;
 /** @type {string} */
Layer.prototype.path;

/**
 * Returns whether request `path` matches route.
 * @param {string} path
 * @return {boolean}
 */
Layer.prototype.match = function(path) {};

/**
 * Returns map of URL parameters for given `path` and `paramNames`.
 * @param {(string|!RegExp)} path
 * @param {!Array<string>} captures
 * @param {!Object=} existingParams
 * @return {!Object}
 */
Layer.prototype.params = function(path, captures, existingParams) {};

/**
 * Returns array of regexp url path captures.
 * @param {string} path
 * @return {!Array<string>}
 */
Layer.prototype.captures = function(path) {};

/**
 * Generate URL for route using given `params`.
 * @param {!Object} params
 * @return {string}
 */
Layer.prototype.url = function(params) {};

/**
 * Run validations on route named parameters.
 * @param {string} param
 * @param {!Router.IMiddleware} fn
 * @return {!Layer}
 */
Layer.prototype.param = function(param, fn) {};

/**
 * Prefix route path.
 * @param {string} prefix
 * @return {!Layer}
 */
Layer.prototype.setPrefix = function(prefix) {};
 /** @type {!Object} */
Router.prototype.params;
 /** @type {!Array<!Layer>} */
Router.prototype.stack;

/**
 * Use given middleware.
 * 
 * Middleware run in the order they are defined by `.use()`. They are invoked
 * sequentially, requests start at the first middleware and work their way
 * "down" the middleware stack.
 * @param {...!Router.IMiddleware|(string|!RegExp)} middleware_or_path
 * @return {!Router}
 */
Router.prototype.use = function(middleware_or_path) {};

/**
 * HTTP get method
 * @param {string|(string|!RegExp)} name_or_path
 * @param {...(string|!RegExp)|!Router.IMiddleware} path_or_middleware
 * @return {!Router}
 */
Router.prototype.get = function(name_or_path, path_or_middleware) {};

/**
 * HTTP post method
 * @param {string|(string|!RegExp)} name_or_path
 * @param {...(string|!RegExp)|!Router.IMiddleware} path_or_middleware
 * @return {!Router}
 */
Router.prototype.post = function(name_or_path, path_or_middleware) {};

/**
 * HTTP put method
 * @param {string|(string|!RegExp)} name_or_path
 * @param {...(string|!RegExp)|!Router.IMiddleware} path_or_middleware
 * @return {!Router}
 */
Router.prototype.put = function(name_or_path, path_or_middleware) {};

/**
 * HTTP delete method
 * @param {string|(string|!RegExp)} name_or_path
 * @param {...(string|!RegExp)|!Router.IMiddleware} path_or_middleware
 * @return {!Router}
 */
Router.prototype.delete = function(name_or_path, path_or_middleware) {};

/**
 * Alias for `router.delete()` because delete is a reserved word
 * @param {string|(string|!RegExp)} name_or_path
 * @param {...(string|!RegExp)|!Router.IMiddleware} path_or_middleware
 * @return {!Router}
 */
Router.prototype.del = function(name_or_path, path_or_middleware) {};

/**
 * HTTP head method
 * @param {string|(string|!RegExp)} name_or_path
 * @param {...(string|!RegExp)|!Router.IMiddleware} path_or_middleware
 * @return {!Router}
 */
Router.prototype.head = function(name_or_path, path_or_middleware) {};

/**
 * HTTP options method
 * @param {string|(string|!RegExp)} name_or_path
 * @param {...(string|!RegExp)|!Router.IMiddleware} path_or_middleware
 * @return {!Router}
 */
Router.prototype.options = function(name_or_path, path_or_middleware) {};

/**
 * HTTP path method
 * @param {string|(string|!RegExp)} name_or_path
 * @param {...(string|!RegExp)|!Router.IMiddleware} path_or_middleware
 * @return {!Router}
 */
Router.prototype.patch = function(name_or_path, path_or_middleware) {};

/**
 * Register route with all methods.
 * @param {string|(string|!RegExp)} name_or_path
 * @param {...(string|!RegExp)|!Router.IMiddleware} path_or_middleware
 * @return {!Router}
 */
Router.prototype.all = function(name_or_path, path_or_middleware) {};

/**
 * Set the path prefix for a Router instance that was already initialized.
 * @param {string} prefix
 * @return {!Router}
 */
Router.prototype.prefix = function(prefix) {};

/**
 * Returns router middleware which dispatches a route matching the request.
 * @return {!Router.IMiddleware}
 */
Router.prototype.routes = function() {};

/**
 * Returns router middleware which dispatches a route matching the request.
 * @return {!Router.IMiddleware}
 */
Router.prototype.middlewares = function() {};

/**
 * Returns separate middleware for responding to `OPTIONS` requests with
 * an `Allow` header containing the allowed methods, as well as responding
 * with `405 Method Not Allowed` and `501 Not Implemented` as appropriate.
 * @param {!Router.IRouterAllowedMethodsOptions=} options
 * @return {!Router.IMiddleware}
 */
Router.prototype.allowedMethods = function(options) {};

/**
 * Redirect `source` to `destination` URL with optional 30x status `code`.
 * 
 * Both `source` and `destination` can be route names.
 * @param {string} source
 * @param {string} destination
 * @param {number=} code
 * @return {!Router}
 */
Router.prototype.redirect = function(source, destination, code) {};

/**
 * Create and register a route.
 * @param {(string|!RegExp)} path
 * @param {!Array<string>} methods
 * @param {!Router.IMiddleware} middleware
 * @param {!Object=} opts
 * @return {!Layer}
 */
Router.prototype.register = function(path, methods, middleware, opts) {};

/**
 * Lookup route with given `name`.
 * @param {string} name
 * @return {!Layer|boolean}
 */
Router.prototype.route = function(name) {};

/**
 * Generate URL for route. Takes either map of named `params` or series of
 * arguments (for regular expression routes)
 * @param {string} name
 * @param {!Object} params
 * @return {string|!Error}
 */
Router.prototype.url = function(name, params) {};

/**
 * Match given `path` and return corresponding routes.
 * @param {string} name
 * @param {string} method
 * @return {!Object}
 */
Router.prototype.match = function(name, method) {};

/**
 * Run middleware for named route parameters. Useful for auto-loading or validation.
 * @param {string} param
 * @param {!Router.IParamMiddleware} middleware
 * @return {!Router}
 */
Router.prototype.param = function(param, middleware) {};

/**
 * Generate URL from url pattern and given `params`.
 * @param {(string|!RegExp)} path
 * @param {!Object} params
 * @return {string}
 */
Router.url = function(path, params) {};

/* TODO: ExportAssignment in  */
