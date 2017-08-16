/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/vivus/index.d.ts:

/* TODO: ExportAssignment in  */

/* TODO: NamespaceExportDeclaration in  */

/**
 * @constructor
 * @struct
 * @param {(string|!HTMLElement)} element The DOM element, or the ID of a DOM element, to interact with.
 * @param {!Vivus.VivusOptions=} options
 * @param {function(!Vivus): void=} callback Callback to call at the end of the animation
 */
function Vivus(element, options, callback) {}
 /** @type {function(number): number} */
Vivus.LINEAR;
 /** @type {function(number): number} */
Vivus.EASE;
 /** @type {function(number): number} */
Vivus.EASE_OUT;
 /** @type {function(number): number} */
Vivus.EASE_IN;
 /** @type {function(number): number} */
Vivus.EASE_OUT_BOUNCE;

/**
 * Plays the animation with the speed given in parameter.
 * A speed of `1` is the normal speed.
 * This value can be negative to go reverse, between 0 and 1 to play slowly, or greater than 1 to go faster.
 * Callback executed after the animation is finished (optional).
 * 
 * (default: `1`)
 * @param {number=} speed
 * @param {function(): void=} callback
 * @return {Vivus}
 */
Vivus.prototype.play = function(speed, callback) {};

/**
 * Stops the animation.
 * @return {Vivus}
 */
Vivus.prototype.stop = function() {};

/**
 * Reinitialises the SVG to the original undrawn state.
 * @return {Vivus}
 */
Vivus.prototype.reset = function() {};

/**
 * Completely draws the SVG at its final state.
 * @return {Vivus}
 */
Vivus.prototype.finish = function() {};

/**
 * Set the progress of the animation.
 * Progress must be a `number` between `0` and `1`.
 * @param {number} progress
 * @return {Vivus}
 */
Vivus.prototype.setFrameProgress = function(progress) {};

/**
 * Get the status of the animation between start, progress, end.
 * @return {string}
 */
Vivus.prototype.getStatus = function() {};

/**
 * Reset the SVG but make the instance out of order.
 * @return {void}
 */
Vivus.prototype.destroy = function() {};

/** @typedef {function(number): number} */
Vivus.TimingFunction;
/**
 * @record
 * @struct
 */
Vivus.VivusOptions = function() {};
 /** @type {string} */
Vivus.VivusOptions.prototype.type;
 /** @type {string} */
Vivus.VivusOptions.prototype.file;
 /** @type {number} */
Vivus.VivusOptions.prototype.duration;
 /** @type {string} */
Vivus.VivusOptions.prototype.start;
 /** @type {number} */
Vivus.VivusOptions.prototype.delay;
 /** @type {function(!Vivus): void} */
Vivus.VivusOptions.prototype.onReady;
 /** @type {function(number): number} */
Vivus.VivusOptions.prototype.pathTimingFunction;
 /** @type {function(number): number} */
Vivus.VivusOptions.prototype.animTimingFunction;
 /** @type {number} */
Vivus.VivusOptions.prototype.dashGap;
 /** @type {boolean} */
Vivus.VivusOptions.prototype.forceRender;
 /** @type {boolean} */
Vivus.VivusOptions.prototype.reverseStack;
 /** @type {boolean} */
Vivus.VivusOptions.prototype.selfDestroy;
