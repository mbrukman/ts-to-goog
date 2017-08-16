/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/geoip-lite/index.d.ts:
/** @const */
var mod = {};
/**
 * @record
 * @struct
 */
mod.Lookup = function() {};
 /** @type {!Array<number>} */
mod.Lookup.prototype.range;
 /** @type {string} */
mod.Lookup.prototype.country;
 /** @type {string} */
mod.Lookup.prototype.region;
 /** @type {string} */
mod.Lookup.prototype.city;
 /** @type {!Array<number>} */
mod.Lookup.prototype.ll;

/**
 * @param {string} ip
 * @return {!mod.Lookup}
 */
mod.lookup = function(ip) {};

/**
 * @param {number} ip
 * @return {string}
 */
mod.pretty = function(ip) {};

/**
 * @return {void}
 */
mod.startWatchingDataUpdate = function() {};

/**
 * @return {void}
 */
mod.stopWatchingDataUpdate = function() {};

/* TODO: ExportAssignment in  */
