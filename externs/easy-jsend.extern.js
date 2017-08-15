/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/easy-jsend/index.d.ts:
/** @const */
var Express = {};
/**
 * @record
 * @struct
 */
Express.MakePartialInput = function() {};
 /** @type {?} */
Express.MakePartialInput.prototype.model;
 /** @type {{limit: number, skip: number}} */
Express.MakePartialInput.prototype.opts;
 /** @type {!Object} */
Express.MakePartialInput.prototype.search;
 /** @type {?} */
Express.MakePartialInput.prototype.result;
/**
 * @record
 * @struct
 */
Express.PartialInput = function() {};
 /** @type {number} */
Express.PartialInput.prototype.limit;
 /** @type {number} */
Express.PartialInput.prototype.offset;
 /** @type {number} */
Express.PartialInput.prototype.count;
 /** @type {?} */
Express.PartialInput.prototype.data;
/**
 * @record
 * @struct
 */
Express.Response = function() {};

/**
 * @param {?=} data
 * @param {number=} status
 * @return {void}
 */
Express.Response.prototype.success = function(data, status) {};

/**
 * @param {?} data
 * @param {number=} status
 * @return {void}
 */
Express.Response.prototype.fail = function(data, status) {};

/**
 * @param {?} err
 * @param {number=} status
 * @return {void}
 */
Express.Response.prototype.error = function(err, status) {};

/**
 * @param {!Express.PartialInput} data
 * @param {number=} status
 * @return {void}
 */
Express.Response.prototype.partial = function(data, status) {};

/**
 * @param {!Express.MakePartialInput} data
 * @return {void}
 */
Express.Response.prototype.makePartial = function(data) {};
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "easy-jsend"
/** @const */
tsickle_declare_module.easy_jsend = {};

/**
 * @param {{partial: boolean}=} conf
 * @return {void}
 */
tsickle_declare_module.easy_jsend.init = function(conf) {};