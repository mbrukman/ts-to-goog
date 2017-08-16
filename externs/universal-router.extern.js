/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/universal-router/index.d.ts:
/**
 * @record
 * @struct
 */
function Params() {}

/* TODO: IndexSignature:  */
/**
 * @record
 * @struct
 */
function Context() {}
 /** @type {string} */
Context.prototype.path;
/**
 * @extends {Context}
 * @record
 * @struct
 */
function ActionContext() {}
 /** @type {?} */
ActionContext.prototype.params;
/**
 * @record
 * @struct
 */
function Route() {}
 /** @type {string} */
Route.prototype.path;
 /** @type {!Array<?>} */
Route.prototype.children;

/**
 * @param {?} ctx
 * @param {?} params
 * @return {(void|?|!Promise<?>)}
 */
Route.prototype.action = function(ctx, params) {};

/** @typedef {!Array<?>} */
var Routes;

/**
 * Resolve function that is given routes and a path or context object.
 * Returns a Promise that resolves to result of the action function of the
 * matched route.
 * 
 *  returns a Promise, R can be the type the Promise resolves to.
 * 
 *  context object that contains the path along with other data.
 * @template C, R
 * @param {(?|!Array<?>)} routes
 * @param {(string|!String|?)} pathOrContext
 * @return {!Promise<?>}
 */
function resolve(routes, pathOrContext) {}
