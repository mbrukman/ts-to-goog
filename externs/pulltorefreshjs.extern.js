/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/pulltorefreshjs/index.d.ts:

/**
 * @param {?=} options
 * @return {void}
 */
function init(options) {}
/**
 * @record
 * @struct
 */
function Options() {}
 /** @type {number} */
Options.prototype.distThreshold;
 /** @type {number} */
Options.prototype.distMax;
 /** @type {number} */
Options.prototype.distReload;
 /** @type {string} */
Options.prototype.mainElement;
 /** @type {string} */
Options.prototype.triggerElement;
 /** @type {string} */
Options.prototype.ptrElement;
 /** @type {string} */
Options.prototype.classPrefix;
 /** @type {string} */
Options.prototype.cssProp;
 /** @type {string} */
Options.prototype.iconArrow;
 /** @type {string} */
Options.prototype.iconRefreshing;
 /** @type {string} */
Options.prototype.instructionsPullToRefresh;
 /** @type {string} */
Options.prototype.instructionsReleaseToRefresh;
 /** @type {string} */
Options.prototype.instructionsRefreshing;
 /** @type {number} */
Options.prototype.refreshTimeout;
 /** @type {?} */
Options.prototype.onRefresh;

/**
 * The initialize function.
 * @return {void}
 */
Options.prototype.onInit = function() {};

/**
 * The resistance function, accepts one parameter, must return a number, capping at 1.
 * 
 * Defaults to `t => Math.min(1, t / 2.5)`
 * @param {number} input
 * @return {number}
 */
Options.prototype.resistanceFunction = function(input) {};

/* TODO: NamespaceExportDeclaration in  */
