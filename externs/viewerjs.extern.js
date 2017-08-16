/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/viewerjs/index.d.ts:
/** @const */
var Viewer = {};

/** @typedef {function(!HTMLImageElement): string} */
Viewer.ImageSourceDelegate;

/** @typedef {function(): void} */
Viewer.ViewerMethod;
/**
 * @record
 * @struct
 */
Viewer.ViewerOption = function() {};
 /** @type {boolean} */
Viewer.ViewerOption.prototype.inline;
 /** @type {boolean} */
Viewer.ViewerOption.prototype.button;
 /** @type {(number|boolean)} */
Viewer.ViewerOption.prototype.navbar;
 /** @type {(number|boolean)} */
Viewer.ViewerOption.prototype.title;
 /** @type {(number|boolean)} */
Viewer.ViewerOption.prototype.toolbar;
 /** @type {boolean} */
Viewer.ViewerOption.prototype.tooltip;
 /** @type {boolean} */
Viewer.ViewerOption.prototype.movable;
 /** @type {boolean} */
Viewer.ViewerOption.prototype.zoomable;
 /** @type {boolean} */
Viewer.ViewerOption.prototype.rotatable;
 /** @type {boolean} */
Viewer.ViewerOption.prototype.scalable;
 /** @type {boolean} */
Viewer.ViewerOption.prototype.transition;
 /** @type {boolean} */
Viewer.ViewerOption.prototype.fullscreen;
 /** @type {boolean} */
Viewer.ViewerOption.prototype.keyboard;
 /** @type {number} */
Viewer.ViewerOption.prototype.interval;
 /** @type {number} */
Viewer.ViewerOption.prototype.minWidth;
 /** @type {number} */
Viewer.ViewerOption.prototype.minHeight;
 /** @type {number} */
Viewer.ViewerOption.prototype.zoomRatio;
 /** @type {number} */
Viewer.ViewerOption.prototype.minZoomRatio;
 /** @type {number} */
Viewer.ViewerOption.prototype.maxZoomRatio;
 /** @type {number} */
Viewer.ViewerOption.prototype.zIndex;
 /** @type {number} */
Viewer.ViewerOption.prototype.zIndexInline;
 /** @type {(string|function(!HTMLImageElement): string)} */
Viewer.ViewerOption.prototype.url;
 /** @type {function(): void} */
Viewer.ViewerOption.prototype.ready;
 /** @type {function(): void} */
Viewer.ViewerOption.prototype.show;
 /** @type {function(): void} */
Viewer.ViewerOption.prototype.shown;
 /** @type {function(): void} */
Viewer.ViewerOption.prototype.hide;
 /** @type {function(): void} */
Viewer.ViewerOption.prototype.hidden;
 /** @type {function(): void} */
Viewer.ViewerOption.prototype.view;
 /** @type {function(): void} */
Viewer.ViewerOption.prototype.viewed;

/**
 * Change the global default options.
 * @param {!Viewer.ViewerOption} options
 * @return {void}
 */
Viewer.setDefaults = function(options) {};

/**
 * If you have to use other viewer with the same namespace, just call the `Viewer.noConflict` static method to revert to it.
 * @return {void}
 */
Viewer.noConflict = function() {};

/**
 * Show the viewer.
 * \@description Only available in modal mode.
 * @return {void}
 */
Viewer.prototype.show = function() {};

/**
 * hide the viewer.
 * \@description Only available in modal mode.
 * @return {void}
 */
Viewer.prototype.hide = function() {};

/**
 * View one of the images with image's index.
 * @param {number=} index The index of the image for viewing. Default: `0`.
 * @return {void}
 */
Viewer.prototype.view = function(index) {};

/**
 * View the previous image.
 * @return {void}
 */
Viewer.prototype.prev = function() {};

/**
 * View the next image.
 * @return {void}
 */
Viewer.prototype.next = function() {};

/**
 * Move the image with relative offsets.
 * @param {number} offsetX Moving size (px) in the horizontal direction
 * @param {number=} offsetY Moving size (px) in the vertical direction. If not present, its default value is `offsetX`
 * @return {void}
 */
Viewer.prototype.move = function(offsetX, offsetY) {};

/**
 * Move the image to an absolute point.
 * @param {number} x The `left` value of the image
 * @param {number=} y The `top` value of the image. If not present, its default value is `x`.
 * @return {void}
 */
Viewer.prototype.moveTo = function(x, y) {};

/**
 * Zoom the image with a relative ratio
 * @param {number} ratio Zoom in: requires a positive number (ratio > 0). Zoom out: requires a negative number (ratio < 0)
 * @param {boolean=} hasTooltip Show tooltip. Default: `false`
 * @return {void}
 */
Viewer.prototype.zoom = function(ratio, hasTooltip) {};

/**
 * Zoom the image to an absolute ratio.
 * @param {number} ratio Requires a positive number (ratio > 0)
 * @param {boolean=} hasTooltip Show tooltip. Default: `false`
 * @return {void}
 */
Viewer.prototype.zoomTo = function(ratio, hasTooltip) {};

/**
 * Rotate the image with a relative degree.
 * @param {number} degree Rotate right: requires a positive number (degree > 0). Rotate left: requires a negative number (degree < 0)
 * @return {void}
 */
Viewer.prototype.rotate = function(degree) {};

/**
 * Rotate the image to an absolute degree.
 * @param {number} degree
 * @return {void}
 */
Viewer.prototype.rotateTo = function(degree) {};

/**
 * Scale the image.
 * @param {number} scaleX The scaling factor to apply on the abscissa of the image. When equal to `1` it does nothing.
 * @param {number=} scaleY The scaling factor to apply on the ordinate of the image. If not present, its default value is `scaleX`.
 * @return {void}
 */
Viewer.prototype.scale = function(scaleX, scaleY) {};

/**
 * Scale the abscissa of the image.
 * @param {number} scaleX The scaling factor to apply on the abscissa of the image. When equal to `1` it does nothing.
 * @return {void}
 */
Viewer.prototype.scaleX = function(scaleX) {};

/**
 * Scale the ordinate of the image.
 * @param {number} scaleY The scaling factor to apply on the abscissa of the image. When equal to `1` it does nothing.
 * @return {void}
 */
Viewer.prototype.scaleY = function(scaleY) {};

/**
 * Play the images.
 * @return {void}
 */
Viewer.prototype.play = function() {};

/**
 * Stop play.
 * @return {void}
 */
Viewer.prototype.stop = function() {};

/**
 * Enter modal mode.
 * \@description Only available in inline mode.
 * @return {void}
 */
Viewer.prototype.full = function() {};

/**
 * Exit  modal mode.
 * \@description Only available in inline mode.
 * @return {void}
 */
Viewer.prototype.exit = function() {};

/**
 * Show the current ratio of the image with percentage.
 * \@description Requires the `tooltip` option set to `true`.
 * @return {void}
 */
Viewer.prototype.tooltip = function() {};

/**
 * Toggle the image size between its natural size and initial size.
 * @return {void}
 */
Viewer.prototype.toggle = function() {};

/**
 * Reset the image to its initial state.
 * @return {void}
 */
Viewer.prototype.reset = function() {};

/**
 * Update the viewer instance when the source images changed (added, removed or sorted).
 * \@description If you load images dynamically (with XMLHTTPRequest), you can use this method to add the new images to the viewer instance.
 * @return {void}
 */
Viewer.prototype.update = function() {};

/**
 * Destroy the viewer and remove the instance.
 * @return {void}
 */
Viewer.prototype.destroy = function() {};

/* TODO: ExportAssignment in  */
