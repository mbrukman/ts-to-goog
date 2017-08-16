/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/js-data-angular/index.d.ts:

/* TODO: ImportDeclaration in  */

/* TODO: ImportDeclaration in  */
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "js-data"
/**
 * @record
 * @struct
 */
tsickle_declare_module.js_data.DSProvider = function() {};
 /** @type {!JSData.DSConfiguration} */
tsickle_declare_module.js_data.DSProvider.prototype.defaults;

/**
 * @template T
 * @param {string} resourceName
 * @param {!JSData.DSFilterParams} params
 * @param {!angular.IScope} scope
 * @param {string} expr
 * @param {function(!JSData.DSError, !Array<?>): void=} cb
 * @return {!Function}
 */
tsickle_declare_module.js_data.DS.prototype.bindAll = function(resourceName, params, scope, expr, cb) {};

/**
 * @template T
 * @param {string} resourceName
 * @param {(string|number)} id
 * @param {!angular.IScope} scope
 * @param {string} expr
 * @param {function(!JSData.DSError, ?): void=} cb
 * @return {!Function}
 */
tsickle_declare_module.js_data.DS.prototype.bindOne = function(resourceName, id, scope, expr, cb) {};

/**
 * @param {!JSData.DSFilterParams} params
 * @param {!angular.IScope} scope
 * @param {string} expr
 * @param {function(!JSData.DSError, !Array<?>): void=} cb
 * @return {!Function}
 */
tsickle_declare_module.js_data.DSResourceDefinition.prototype.bindAll = function(params, scope, expr, cb) {};

/**
 * @param {(string|number)} id
 * @param {!angular.IScope} scope
 * @param {string} expr
 * @param {function(!JSData.DSError, ?): void=} cb
 * @return {!Function}
 */
tsickle_declare_module.js_data.DSResourceDefinition.prototype.bindOne = function(id, scope, expr, cb) {};