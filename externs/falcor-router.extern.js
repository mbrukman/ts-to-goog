/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/falcor-router/index.d.ts:

/* TODO: ImportDeclaration in  */

/* TODO: ImportDeclaration in  */

/* TODO: ImportEqualsDeclaration in  */

/**
 * @constructor
 * @struct
 * @param {!Array<(!FalcorRouter.GetRoute|!FalcorRouter.SetRoute|!FalcorRouter.CallRoute)>} routes
 * @param {!FalcorRouter.RouterOptions=} options
 */
function FalcorRouter(routes, options) {}

/**
 * When a route misses on a call, get, or set the unhandledDataSource will
 * have a chance to fulfill that request.
 * 
 * @param {?} dataSource
 * @return {void}
 */
FalcorRouter.prototype.routeUnhandledPathsTo = function(dataSource) {};

/**
 * @param {!Array<(!FalcorRouter.GetRoute|!FalcorRouter.SetRoute|!FalcorRouter.CallRoute)>=} routes
 * @return {?}
 */
FalcorRouter.createClass = function(routes) {};

/**
 * @constructor
 * @struct
 * @param {!FalcorRouter.RouterOptions=} options
 */
FalcorRouter.CreatedRouter = function(options) {};
/**
 * @record
 * @struct
 */
FalcorRouter.Route = function() {};
 /** @type {string} */
FalcorRouter.Route.prototype.route;

/** @typedef {!Array<(string|number|boolean|!FalcorJsonGraph.Range|!Array<(string|number|boolean|!FalcorJsonGraph.Range)>)>} */
FalcorRouter.RoutePathSet;
/**
 * @extends {FalcorRouter.Route}
 * @record
 * @struct
 */
FalcorRouter.CallRoute = function() {};

/**
 * @param {!Array<(string|number|boolean|!FalcorJsonGraph.Range|!Array<(string|number|boolean|!FalcorJsonGraph.Range)>)>} callPath
 * @param {!Array<?>} args
 * @return {(!FalcorJsonGraph.PathValue|!FalcorJsonGraph.InvalidPath|!Array<(!FalcorJsonGraph.PathValue|!FalcorJsonGraph.InvalidPath)>|!FalcorJsonGraph.JSONGraphEnvelope|!Promise<(!FalcorJsonGraph.PathValue|!FalcorJsonGraph.InvalidPath|!Array<(!FalcorJsonGraph.PathValue|!FalcorJsonGraph.InvalidPath)>|!FalcorJsonGraph.JSONGraphEnvelope)>)}
 */
FalcorRouter.CallRoute.prototype.call = function(callPath, args) {};
/**
 * @extends {FalcorRouter.Route}
 * @record
 * @struct
 */
FalcorRouter.GetRoute = function() {};

/**
 * @param {!Array<(string|number|boolean|!FalcorJsonGraph.Range|!Array<(string|number|boolean|!FalcorJsonGraph.Range)>)>} pathset
 * @return {(!FalcorJsonGraph.PathValue|!Array<!FalcorJsonGraph.PathValue>|!FalcorJsonGraph.JSONEnvelope<?>|!Promise<(!FalcorJsonGraph.PathValue|!Array<!FalcorJsonGraph.PathValue>|!FalcorJsonGraph.JSONEnvelope<?>)>)}
 */
FalcorRouter.GetRoute.prototype.get = function(pathset) {};
/**
 * @extends {FalcorRouter.Route}
 * @record
 * @struct
 */
FalcorRouter.SetRoute = function() {};

/**
 * @param {?} jsonGraph
 * @return {(!FalcorJsonGraph.PathValue|!Array<!FalcorJsonGraph.PathValue>|!FalcorJsonGraph.JSONEnvelope<?>|!Promise<(!FalcorJsonGraph.PathValue|!Array<!FalcorJsonGraph.PathValue>|!FalcorJsonGraph.JSONEnvelope<?>)>)}
 */
FalcorRouter.SetRoute.prototype.set = function(jsonGraph) {};

/** @typedef {(!FalcorRouter.GetRoute|!FalcorRouter.SetRoute|!FalcorRouter.CallRoute)} */
FalcorRouter.RouteDefinition;

/** @typedef {(!FalcorJsonGraph.PathValue|!Array<!FalcorJsonGraph.PathValue>|!FalcorJsonGraph.JSONEnvelope<?>)} */
FalcorRouter.RouteResult;

/** @typedef {(!FalcorJsonGraph.PathValue|!FalcorJsonGraph.InvalidPath|!Array<(!FalcorJsonGraph.PathValue|!FalcorJsonGraph.InvalidPath)>|!FalcorJsonGraph.JSONGraphEnvelope)} */
FalcorRouter.CallRouteResult;
/**
 * @record
 * @struct
 */
FalcorRouter.RouterOptions = function() {};
 /** @type {boolean} */
FalcorRouter.RouterOptions.prototype.debug;
 /** @type {number} */
FalcorRouter.RouterOptions.prototype.maxPaths;
 /** @type {number} */
FalcorRouter.RouterOptions.prototype.maxRefFollow;

/* TODO: ExportAssignment in  */