/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/nprogress/index.d.ts:
/**
 * @record
 * @struct
 */
function NProgressStatic() {}
 /** @type {string} */
NProgressStatic.prototype.version;
 /** @type {?} */
NProgressStatic.prototype.status;

/**
 * Shows the progress bar and begins trickling progress.
 * @return {!NProgressStatic}
 */
NProgressStatic.prototype.start = function() {};

/**
 * Finishes loading by transitioning it to 100%, then fading out.
 * @param {boolean=} forceShow
 * @return {!NProgressStatic}
 */
NProgressStatic.prototype.done = function(forceShow) {};

/**
 * Increments the progress bar with a random amount. This will never get to 100%: use it for every image load (or similar).
 * Increments the progress bar with a set amount.
 * @param {number=} amount
 * @return {!NProgressStatic}
 */
NProgressStatic.prototype.inc = function(amount) {};

/**
 * Removes the progress indicator.
 * @return {void}
 */
NProgressStatic.prototype.remove = function() {};

/**
 * Sets the progress percentage.
 * @param {number} progressPercent
 * @return {!NProgressStatic}
 */
NProgressStatic.prototype.set = function(progressPercent) {};

/**
 * Configures the progress indicator.
 * @param {!NProgressConfigureOptions} options
 * @return {!NProgressStatic}
 */
NProgressStatic.prototype.configure = function(options) {};

/**
 * Gets whether progress has been started.
 * @return {boolean}
 */
NProgressStatic.prototype.isStarted = function() {};
/**
 * @record
 * @struct
 */
function NProgressConfigureOptions() {}
 /** @type {string} */
NProgressConfigureOptions.prototype.parent;
 /** @type {number} */
NProgressConfigureOptions.prototype.minimum;
 /** @type {number} */
NProgressConfigureOptions.prototype.trickleSpeed;
 /** @type {boolean} */
NProgressConfigureOptions.prototype.showSpinner;
 /** @type {boolean} */
NProgressConfigureOptions.prototype.trickle;
 /** @type {string} */
NProgressConfigureOptions.prototype.easing;
 /** @type {number} */
NProgressConfigureOptions.prototype.speed;
 /** @type {string} */
NProgressConfigureOptions.prototype.template;
 /** @type {!NProgressStatic} */
var NProgress;
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "nprogress"
/** @const */
tsickle_declare_module.nprogress = {};

/* TODO: ExportAssignment in tsickle_declare_module.nprogress */
