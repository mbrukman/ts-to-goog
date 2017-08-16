/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/esprima-walk/index.d.ts:

/* TODO: ImportDeclaration in  */

/** @typedef {?} */
var NodeWithParent;

/**
 * Walk the provided AST; fn is called once for each node with a `type`
 * @param {?} ast
 * @param {function(?): void} fn
 * @return {void}
 */
function walk(ast, fn) {}

/**
 * Walk the provided AST; fn is called once for each node with a `type`
 * @param {?} ast
 * @param {function(?): void} fn
 * @return {void}
 */
walk.walk = function(ast, fn) {};

/**
 * Walk the provided AST; fn is called once for each node with a `type`.
 * Adds a parent property prior to invoking fn when applicable
 * @param {?} ast
 * @param {function(?): void} fn
 * @return {void}
 */
walk.walkAddParent = function(ast, fn) {};

/* TODO: ExportAssignment in  */
