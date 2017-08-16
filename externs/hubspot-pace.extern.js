/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/hubspot-pace/index.d.ts:
/** @const */
var HubSpotPaceInterfaces = {};
/**
 * @record
 * @struct
 */
HubSpotPaceInterfaces.PaceOptions = function() {};
 /** @type {number} */
HubSpotPaceInterfaces.PaceOptions.prototype.catchupTime;
 /** @type {number} */
HubSpotPaceInterfaces.PaceOptions.prototype.initialRate;
 /** @type {number} */
HubSpotPaceInterfaces.PaceOptions.prototype.minTime;
 /** @type {number} */
HubSpotPaceInterfaces.PaceOptions.prototype.ghostTime;
 /** @type {number} */
HubSpotPaceInterfaces.PaceOptions.prototype.maxProgressPerFrame;
 /** @type {number} */
HubSpotPaceInterfaces.PaceOptions.prototype.easeFactor;
 /** @type {boolean} */
HubSpotPaceInterfaces.PaceOptions.prototype.startOnPageLoad;
 /** @type {boolean} */
HubSpotPaceInterfaces.PaceOptions.prototype.restartOnPushState;
 /** @type {(number|boolean)} */
HubSpotPaceInterfaces.PaceOptions.prototype.restartOnRequestAfter;
 /** @type {string} */
HubSpotPaceInterfaces.PaceOptions.prototype.target;
 /** @type {(string|boolean)} */
HubSpotPaceInterfaces.PaceOptions.prototype.document;
 /** @type {(boolean|!HubSpotPaceInterfaces.PaceElementsOptions)} */
HubSpotPaceInterfaces.PaceOptions.prototype.elements;
 /** @type {(boolean|!HubSpotPaceInterfaces.PaceEventLagOptions)} */
HubSpotPaceInterfaces.PaceOptions.prototype.eventLag;
 /** @type {(boolean|!HubSpotPaceInterfaces.PaceAjaxOptions)} */
HubSpotPaceInterfaces.PaceOptions.prototype.ajax;
/**
 * @record
 * @struct
 */
HubSpotPaceInterfaces.PaceElementsOptions = function() {};
 /** @type {number} */
HubSpotPaceInterfaces.PaceElementsOptions.prototype.checkInterval;
 /** @type {!Array<string>} */
HubSpotPaceInterfaces.PaceElementsOptions.prototype.selectors;
/**
 * @record
 * @struct
 */
HubSpotPaceInterfaces.PaceEventLagOptions = function() {};
 /** @type {number} */
HubSpotPaceInterfaces.PaceEventLagOptions.prototype.minSamples;
 /** @type {number} */
HubSpotPaceInterfaces.PaceEventLagOptions.prototype.sampleCount;
 /** @type {number} */
HubSpotPaceInterfaces.PaceEventLagOptions.prototype.lagThreshold;
/**
 * @record
 * @struct
 */
HubSpotPaceInterfaces.PaceAjaxOptions = function() {};
 /** @type {!Array<string>} */
HubSpotPaceInterfaces.PaceAjaxOptions.prototype.trackMethods;
 /** @type {boolean} */
HubSpotPaceInterfaces.PaceAjaxOptions.prototype.trackWebSockets;
 /** @type {!Array<(string|!RegExp)>} */
HubSpotPaceInterfaces.PaceAjaxOptions.prototype.ignoreURLs;
/**
 * @record
 * @struct
 */
HubSpotPaceInterfaces.Pace = function() {};
 /** @type {!HubSpotPaceInterfaces.PaceOptions} */
HubSpotPaceInterfaces.Pace.prototype.options;

/**
 * @param {!HubSpotPaceInterfaces.PaceOptions=} options
 * @return {void}
 */
HubSpotPaceInterfaces.Pace.prototype.start = function(options) {};

/**
 * @return {void}
 */
HubSpotPaceInterfaces.Pace.prototype.restart = function() {};

/**
 * @return {void}
 */
HubSpotPaceInterfaces.Pace.prototype.stop = function() {};

/**
 * @param {function(): void} fn
 * @param {...?} args
 * @return {void}
 */
HubSpotPaceInterfaces.Pace.prototype.track = function(fn, args) {};

/**
 * @param {function(): void} fn
 * @param {...?} args
 * @return {void}
 */
HubSpotPaceInterfaces.Pace.prototype.ignore = function(fn, args) {};

/**
 * @param {string} event
 * @param {function(!Array<?>): void} handler
 * @param {?=} context
 * @return {void}
 */
HubSpotPaceInterfaces.Pace.prototype.on = function(event, handler, context) {};

/**
 * @param {string} event
 * @param {function(!Array<?>): void=} handler
 * @return {void}
 */
HubSpotPaceInterfaces.Pace.prototype.off = function(event, handler) {};

/**
 * @param {string} event
 * @param {function(!Array<?>): void} handler
 * @param {?=} context
 * @return {void}
 */
HubSpotPaceInterfaces.Pace.prototype.once = function(event, handler, context) {};

/** @const */
HubSpotPaceInterfaces.PaceEvent = {};
/** @const {number} */
HubSpotPaceInterfaces.PaceEvent.start;
/** @const {number} */
HubSpotPaceInterfaces.PaceEvent.stop;
/** @const {number} */
HubSpotPaceInterfaces.PaceEvent.restart;
/** @const {number} */
HubSpotPaceInterfaces.PaceEvent.done;
/** @const {number} */
HubSpotPaceInterfaces.PaceEvent.hide;
 /** @type {!HubSpotPaceInterfaces.Pace} */
var pace;
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "HubSpot-pace"
/** @const */
tsickle_declare_module.HubSpot_pace = {};

/* TODO: ExportAssignment in tsickle_declare_module.HubSpot_pace */