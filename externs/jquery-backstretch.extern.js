/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/jquery-backstretch/index.d.ts:
/** @const */
var JQueryBackStretch = {};
/**
 * @record
 * @struct
 */
JQueryBackStretch.BackStretchOptions = function() {};
 /** @type {boolean} */
JQueryBackStretch.BackStretchOptions.prototype.centeredX;
 /** @type {boolean} */
JQueryBackStretch.BackStretchOptions.prototype.centeredY;
 /** @type {(string|number)} */
JQueryBackStretch.BackStretchOptions.prototype.duration;
 /** @type {number} */
JQueryBackStretch.BackStretchOptions.prototype.fade;
/**
 * @record
 * @struct
 */
JQueryBackStretch.BackStretch = function() {};

/**
 * This method is called automatically when the container (window or
 * block-level element) is resized, however you can always call this
 * manually if needed.
 * @return {!JQueryBackStretch.BackStretch}
 */
JQueryBackStretch.BackStretch.prototype.resize = function() {};

/**
 * Jump to the slide at a given index, where n is the number of the
 * image that you'd like to display. Slide number starts at 0.
 * 
 * @param {number} newIndex
 * @return {!JQueryBackStretch.BackStretch}
 */
JQueryBackStretch.BackStretch.prototype.show = function(newIndex) {};

/**
 * Advance to the next image in a slideshow.
 * @return {!JQueryBackStretch.BackStretch}
 */
JQueryBackStretch.BackStretch.prototype.next = function() {};

/**
 * Display the previous image in a slideshow.
 * @return {!JQueryBackStretch.BackStretch}
 */
JQueryBackStretch.BackStretch.prototype.prev = function() {};

/**
 * Pause the slideshow.
 * @return {!JQueryBackStretch.BackStretch}
 */
JQueryBackStretch.BackStretch.prototype.pause = function() {};

/**
 * Resume a paused slideshow.
 * @return {!JQueryBackStretch.BackStretch}
 */
JQueryBackStretch.BackStretch.prototype.resume = function() {};

/**
 * Destroy the Backstretch instance. Optionally, you can pass in a Boolean
 * parameter, preserveBackground, to determine whether or not you'd like
 * to keep the current image stretched as the background image.
 * 
 * @param {boolean=} preserveBackground
 * @return {void}
 */
JQueryBackStretch.BackStretch.prototype.destroy = function(preserveBackground) {};

/**
 * @param {!Array<string>} images
 * @param {!JQueryBackStretch.BackStretchOptions=} config
 * @return {!JQueryBackStretch.BackStretch}
 */
JQueryStatic.prototype.backstretch = function(images, config) {};

/**
 * @param {!Array<string>|string} images_or_method
 * @param {!JQueryBackStretch.BackStretchOptions=} config
 * @return {!JQueryBackStretch.BackStretch|?<!HTMLElement>}
 */
JQuery.prototype.backstretch = function(images_or_method, config) {};