/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/node-dogstatsd/index.d.ts:
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "node-dogstatsd"
/** @const */
tsickle_declare_module.node_dogstatsd = {};
/**
 * @record
 * @struct
 */
tsickle_declare_module.node_dogstatsd.StatsDOptions = function() {};
 /** @type {!Array<string>} */
tsickle_declare_module.node_dogstatsd.StatsDOptions.prototype.global_tags;

/**
 * @constructor
 * @struct
 * @param {string} host
 * @param {number=} port
 * @param {string=} socket
 * @param {!StatsDOptions=} options
 */
tsickle_declare_module.node_dogstatsd.StatsD = function(host, port, socket, options) {};

/**
 * @param {string} stat
 * @param {number} time
 * @param {number=} sample_rate
 * @param {!Array<string>=} tags
 * @return {void}
 */
tsickle_declare_module.node_dogstatsd.StatsD.prototype.timing = function(stat, time, sample_rate, tags) {};

/**
 * @param {string} stat
 * @param {number=} sample_rate
 * @param {!Array<string>=} tags
 * @return {void}
 */
tsickle_declare_module.node_dogstatsd.StatsD.prototype.increment = function(stat, sample_rate, tags) {};

/**
 * @param {string} stat
 * @param {number} value
 * @param {!Array<string>=} tags
 * @return {void}
 */
tsickle_declare_module.node_dogstatsd.StatsD.prototype.incrementBy = function(stat, value, tags) {};

/**
 * @param {string} stat
 * @param {number=} sample_rate
 * @param {!Array<string>=} tags
 * @return {void}
 */
tsickle_declare_module.node_dogstatsd.StatsD.prototype.decrement = function(stat, sample_rate, tags) {};

/**
 * @param {string} stat
 * @param {number} value
 * @param {!Array<string>=} tags
 * @return {void}
 */
tsickle_declare_module.node_dogstatsd.StatsD.prototype.decrementBy = function(stat, value, tags) {};

/**
 * @param {string} stat
 * @param {number} value
 * @param {number=} sample_rate
 * @param {!Array<string>=} tags
 * @return {void}
 */
tsickle_declare_module.node_dogstatsd.StatsD.prototype.gauge = function(stat, value, sample_rate, tags) {};

/**
 * @param {string} stat
 * @param {number} time
 * @param {number=} sample_rate
 * @param {!Array<string>=} tags
 * @return {void}
 */
tsickle_declare_module.node_dogstatsd.StatsD.prototype.histogram = function(stat, time, sample_rate, tags) {};

/**
 * @return {void}
 */
tsickle_declare_module.node_dogstatsd.StatsD.prototype.close = function() {};
