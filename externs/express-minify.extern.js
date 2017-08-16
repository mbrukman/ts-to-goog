/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/express-minify/index.d.ts:
/** @const */
var Express = {};
/**
 * @extends {ExpressMinifyInterfaces.ExpressMinifyResponse}
 * @record
 * @struct
 */
Express.Response = function() {};
/** @const */
var ExpressMinifyInterfaces = {};
/**
 * @record
 * @struct
 */
ExpressMinifyInterfaces.ExpressMinifyOptions = function() {};
 /** @type {(string|boolean)} */
ExpressMinifyInterfaces.ExpressMinifyOptions.prototype.cache;
 /** @type {!NodeRequire} */
ExpressMinifyInterfaces.ExpressMinifyOptions.prototype.uglifyJS;
 /** @type {!NodeRequire} */
ExpressMinifyInterfaces.ExpressMinifyOptions.prototype.cssmin;
 /** @type {!Function} */
ExpressMinifyInterfaces.ExpressMinifyOptions.prototype.onerror;
 /** @type {!RegExp} */
ExpressMinifyInterfaces.ExpressMinifyOptions.prototype.js_match;
 /** @type {!RegExp} */
ExpressMinifyInterfaces.ExpressMinifyOptions.prototype.css_match;
 /** @type {!RegExp} */
ExpressMinifyInterfaces.ExpressMinifyOptions.prototype.sass_match;
 /** @type {!RegExp} */
ExpressMinifyInterfaces.ExpressMinifyOptions.prototype.less_match;
 /** @type {!RegExp} */
ExpressMinifyInterfaces.ExpressMinifyOptions.prototype.stylus_match;
 /** @type {!RegExp} */
ExpressMinifyInterfaces.ExpressMinifyOptions.prototype.coffee_match;
 /** @type {!RegExp} */
ExpressMinifyInterfaces.ExpressMinifyOptions.prototype.json_match;
/**
 * @record
 * @struct
 */
ExpressMinifyInterfaces.ExpressMinifyResponse = function() {};
 /** @type {boolean} */
ExpressMinifyInterfaces.ExpressMinifyResponse.prototype._skip;
 /** @type {boolean} */
ExpressMinifyInterfaces.ExpressMinifyResponse.prototype._no_minify;
 /** @type {boolean} */
ExpressMinifyInterfaces.ExpressMinifyResponse.prototype._no_cache;
 /** @type {boolean} */
ExpressMinifyInterfaces.ExpressMinifyResponse.prototype._uglifyMangle;
 /** @type {!Object} */
ExpressMinifyInterfaces.ExpressMinifyResponse.prototype._uglifyOutput;
 /** @type {(boolean|!Object)} */
ExpressMinifyInterfaces.ExpressMinifyResponse.prototype._uglifyCompress;
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "express-minify"
/** @const */
tsickle_declare_module.express_minify = {};

/* TODO: ImportEqualsDeclaration in tsickle_declare_module.express_minify */

/**
 * @param {!ExpressMinifyInterfaces.ExpressMinifyOptions=} options
 * @return {!e.RequestHandler}
 */
tsickle_declare_module.express_minify.minify = function(options) {};

/* TODO: ExportAssignment in tsickle_declare_module.express_minify */