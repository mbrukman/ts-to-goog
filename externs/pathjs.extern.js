/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/pathjs/index.d.ts:
/**
 * @record
 * @struct
 */
function IPathHistory() {}
 /** @type {?} */
IPathHistory.prototype.initial;

/**
 * @param {?} state
 * @param {string} title
 * @param {string} path
 * @return {void}
 */
IPathHistory.prototype.pushState = function(state, title, path) {};

/**
 * @param {?} event
 * @return {void}
 */
IPathHistory.prototype.popState = function(event) {};

/**
 * @param {?} fallback
 * @return {void}
 */
IPathHistory.prototype.listen = function(fallback) {};
/**
 * @record
 * @struct
 */
function IPathRoute() {}

/**
 * @param {function(): void} fn
 * @return {!IPathRoute}
 */
IPathRoute.prototype.to = function(fn) {};

/**
 * @param {(!Function|!Array<!Function>)} fns
 * @return {!IPathRoute}
 */
IPathRoute.prototype.enter = function(fns) {};

/**
 * @param {function(): void} fn
 * @return {!IPathRoute}
 */
IPathRoute.prototype.exit = function(fn) {};

/**
 * @return {!Array<string>}
 */
IPathRoute.prototype.partition = function() {};

/**
 * @return {void}
 */
IPathRoute.prototype.run = function() {};
/**
 * @record
 * @struct
 */
function IPathRoutes() {}
 /** @type {!IPathRoute} */
IPathRoutes.prototype.current;
 /** @type {!IPathRoute} */
IPathRoutes.prototype.root;
 /** @type {!Function} */
IPathRoutes.prototype.rescue;
 /** @type {!IPathRoute} */
IPathRoutes.prototype.previous;
 /** @type {!Object} */
IPathRoutes.prototype.defined;
/**
 * @record
 * @struct
 */
function IPathCore() {}
 /** @type {!IPathRouteConstructor} */
IPathCore.prototype.route;
/**
 * @record
 * @struct
 */
function IPathRouteConstructor() {}

/* TODO: ConstructSignature:  */
/**
 * @record
 * @struct
 */
function IPath() {}
 /** @type {!IPathHistory} */
IPath.prototype.history;
 /** @type {!IPathCore} */
IPath.prototype.core;
 /** @type {!IPathRoutes} */
IPath.prototype.routes;

/**
 * @param {string} path
 * @return {!IPathRoute}
 */
IPath.prototype.map = function(path) {};

/**
 * @param {string} path
 * @return {void}
 */
IPath.prototype.root = function(path) {};

/**
 * @param {!Function} fn
 * @return {void}
 */
IPath.prototype.rescue = function(fn) {};

/**
 * @param {string} path
 * @param {boolean} parameterize
 * @return {!IPathRoute}
 */
IPath.prototype.match = function(path, parameterize) {};

/**
 * @param {string} passed_route
 * @return {void}
 */
IPath.prototype.dispatch = function(passed_route) {};

/**
 * @return {void}
 */
IPath.prototype.listen = function() {};
 /** @type {!IPath} */
var Path;
