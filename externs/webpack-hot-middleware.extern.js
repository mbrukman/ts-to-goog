/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/webpack-hot-middleware/index.d.ts:

/* TODO: ImportDeclaration in  */

/* TODO: ImportDeclaration in  */

/* TODO: ExportAssignment in  */

/**
 * @param {!webpack.Compiler} compiler
 * @param {!WebpackHotMiddleware.Options=} options
 * @return {function(!IncomingMessage, !ServerResponse, !Function): void}
 */
function WebpackHotMiddleware(compiler, options) {}
/**
 * @record
 * @struct
 */
WebpackHotMiddleware.Options = function() {};
 /** @type {(boolean|function(?, !Array<?>): void)} */
WebpackHotMiddleware.Options.prototype.log;
 /** @type {string} */
WebpackHotMiddleware.Options.prototype.path;
 /** @type {number} */
WebpackHotMiddleware.Options.prototype.heartbeat;

/** @typedef {function(?, !Array<?>): void} */
WebpackHotMiddleware.Logger;
