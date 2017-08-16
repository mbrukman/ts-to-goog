/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/yog2-kernel/index.d.ts:

/* TODO: ImportDeclaration in  */

/* TODO: ImportDeclaration in  */

/* TODO: ImportDeclaration in  */

/* TODO: ImportDeclaration in  */

/* TODO: ImportDeclaration in  */
 /** @type {?} */
var yog;
/**
 * @record
 * @struct
 */
function YogBootstrapOption() {}
 /** @type {string} */
YogBootstrapOption.prototype.rootPath;
 /** @type {string} */
YogBootstrapOption.prototype.pluginsPath;
 /** @type {string} */
YogBootstrapOption.prototype.confPath;
 /** @type {!e.Express} */
YogBootstrapOption.prototype.app;
/**
 * @extends {e.Request}
 * @record
 * @struct
 */
function Request() {}
 /** @type {string} */
Request.prototype.CURRENT_APP;
 /** @type {?} */
Request.prototype.ral;
 /** @type {?} */
Request.prototype.ralP;
/**
 * @extends {e.Response}
 * @record
 * @struct
 */
function Response() {}
 /** @type {!yogBigpipe.BigPipe} */
Response.prototype.bigpipe;
/**
 * @record
 * @struct
 */
function ActionObject() {}
 /** @type {!e.RequestHandler} */
ActionObject.prototype.get;
 /** @type {!e.RequestHandler} */
ActionObject.prototype.post;
 /** @type {!e.RequestHandler} */
ActionObject.prototype.put;
 /** @type {!e.RequestHandler} */
ActionObject.prototype.delete;
 /** @type {!e.RequestHandler} */
ActionObject.prototype.del;
 /** @type {!e.RequestHandler} */
ActionObject.prototype.copy;
 /** @type {!e.RequestHandler} */
ActionObject.prototype.head;
 /** @type {!e.RequestHandler} */
ActionObject.prototype.options;
 /** @type {!e.RequestHandler} */
ActionObject.prototype.purge;
 /** @type {!e.RequestHandler} */
ActionObject.prototype.lock;
 /** @type {!e.RequestHandler} */
ActionObject.prototype.unlock;
 /** @type {!e.RequestHandler} */
ActionObject.prototype.propfind;
 /** @type {!e.RequestHandler} */
ActionObject.prototype.view;
 /** @type {!e.RequestHandler} */
ActionObject.prototype.link;
 /** @type {!e.RequestHandler} */
ActionObject.prototype.unlick;
 /** @type {!e.RequestHandler} */
ActionObject.prototype.patch;

/* TODO: IndexSignature:  */
/**
 * @record
 * @struct
 */
function Router() {}

/**
 * @param {string} actionName
 * @return {(!e.RequestHandler|?)}
 */
Router.prototype.action = function(actionName) {};

/**
 * @param {?} fn
 * @return {!e.RequestHandler}
 */
Router.prototype.wrapAsync = function(fn) {};
/** @const */
var yog = {};
/**
 * @constructor
 * @struct
 */
yog.Yog = function() {};
 /** @type {function(): ?} */
yog.Yog.prototype.express;
 /** @type {!e.Express} */
yog.Yog.prototype.app;
 /** @type {!_.LoDashStatic} */
yog.Yog.prototype._;
 /** @type {!yog_log.Logger} */
yog.Yog.prototype.log;
 /** @type {?} */
yog.Yog.prototype.ral;
 /** @type {?} */
yog.Yog.prototype.RAL;
 /** @type {?} */
yog.Yog.prototype.ralP;
 /** @type {?} */
yog.Yog.prototype.view;
 /** @type {string} */
yog.Yog.prototype.ROOT_PATH;

/**
 * @param {string} appName
 * @return {void}
 */
yog.Yog.prototype.reloadApp = function(appName) {};

/**
 * @return {void}
 */
yog.Yog.prototype.reloadView = function() {};

/**
 * @return {void}
 */
yog.Yog.prototype.reloadIsomorphic = function() {};

/**
 * @param {?} option
 * @param {?=} callback
 * @return {void}
 */
yog.Yog.prototype.bootstrap = function(option, callback) {};

/* TODO: ExportAssignment in  */
