/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/memwatch-next/index.d.ts:
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "memwatch-next"
/** @const */
tsickle_declare_module.memwatch_next = {};

/** @typedef {function((!Object|!LeakInformation|!StatsInformation)): void} */
tsickle_declare_module.memwatch_next.EventCallback;
/**
 * @constructor
 * @struct
 */
tsickle_declare_module.memwatch_next.HeapDiff = function() {};
 /** @type {function(): void} */
tsickle_declare_module.memwatch_next.HeapDiff.prototype.end;
/**
 * @record
 * @struct
 */
tsickle_declare_module.memwatch_next.StatsInformation = function() {};
 /** @type {number} */
tsickle_declare_module.memwatch_next.StatsInformation.prototype.current_base;
 /** @type {number} */
tsickle_declare_module.memwatch_next.StatsInformation.prototype.estimated_base;
 /** @type {number} */
tsickle_declare_module.memwatch_next.StatsInformation.prototype.heap_compactions;
 /** @type {number} */
tsickle_declare_module.memwatch_next.StatsInformation.prototype.max;
 /** @type {number} */
tsickle_declare_module.memwatch_next.StatsInformation.prototype.min;
 /** @type {number} */
tsickle_declare_module.memwatch_next.StatsInformation.prototype.num_full_gc;
 /** @type {number} */
tsickle_declare_module.memwatch_next.StatsInformation.prototype.num_inc_gc;
 /** @type {number} */
tsickle_declare_module.memwatch_next.StatsInformation.prototype.usage_trend;
/**
 * @record
 * @struct
 */
tsickle_declare_module.memwatch_next.LeakInformation = function() {};
 /** @type {!Date} */
tsickle_declare_module.memwatch_next.LeakInformation.prototype.end;
 /** @type {number} */
tsickle_declare_module.memwatch_next.LeakInformation.prototype.growth;
 /** @type {string} */
tsickle_declare_module.memwatch_next.LeakInformation.prototype.reason;
 /** @type {!Date} */
tsickle_declare_module.memwatch_next.LeakInformation.prototype.start;

/**
 * Subscribe to a event.
 * @param {string} eventName
 * @param {function((!Object|!LeakInformation|!StatsInformation)): void} callback
 * @return {void}
 */
tsickle_declare_module.memwatch_next.on = function(eventName, callback) {};
