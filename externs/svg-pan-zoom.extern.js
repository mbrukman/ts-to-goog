/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/svg-pan-zoom/index.d.ts:
/** @const */
var SvgPanZoom = {};
/**
 * @record
 * @struct
 */
SvgPanZoom.Options = function() {};
 /** @type {(string|!HTMLElement|!SVGElement)} */
SvgPanZoom.Options.prototype.viewportSelector;
 /** @type {boolean} */
SvgPanZoom.Options.prototype.panEnabled;
 /** @type {boolean} */
SvgPanZoom.Options.prototype.controlIconsEnabled;
 /** @type {boolean} */
SvgPanZoom.Options.prototype.zoomEnabled;
 /** @type {boolean} */
SvgPanZoom.Options.prototype.dblClickZoomEnabled;
 /** @type {boolean} */
SvgPanZoom.Options.prototype.mouseWheelZoomEnabled;
 /** @type {boolean} */
SvgPanZoom.Options.prototype.preventMouseEventsDefault;
 /** @type {number} */
SvgPanZoom.Options.prototype.zoomScaleSensitivity;
 /** @type {number} */
SvgPanZoom.Options.prototype.minZoom;
 /** @type {number} */
SvgPanZoom.Options.prototype.maxZoom;
 /** @type {boolean} */
SvgPanZoom.Options.prototype.fit;
 /** @type {boolean} */
SvgPanZoom.Options.prototype.contain;
 /** @type {boolean} */
SvgPanZoom.Options.prototype.center;
 /** @type {(number|string)} */
SvgPanZoom.Options.prototype.refreshRate;
 /** @type {function(number, number): boolean} */
SvgPanZoom.Options.prototype.beforeZoom;
 /** @type {function(number): void} */
SvgPanZoom.Options.prototype.onZoom;
 /** @type {function(!SvgPanZoom.Point, !SvgPanZoom.Point): (boolean|!SvgPanZoom.PointModifier)} */
SvgPanZoom.Options.prototype.beforePan;
 /** @type {function(!SvgPanZoom.Point): void} */
SvgPanZoom.Options.prototype.onPan;
 /** @type {!SvgPanZoom.CustomEventHandler} */
SvgPanZoom.Options.prototype.customEventsHandler;
 /** @type {!SVGElement} */
SvgPanZoom.Options.prototype.eventsListenerElement;
/**
 * @record
 * @struct
 */
SvgPanZoom.CustomEventHandler = function() {};
 /** @type {!Array<string>} */
SvgPanZoom.CustomEventHandler.prototype.haltEventListeners;
 /** @type {function(!SvgPanZoom.CustomEventOptions): void} */
SvgPanZoom.CustomEventHandler.prototype.init;
 /** @type {!Function} */
SvgPanZoom.CustomEventHandler.prototype.destroy;
/**
 * @record
 * @struct
 */
SvgPanZoom.CustomEventOptions = function() {};
 /** @type {!SVGSVGElement} */
SvgPanZoom.CustomEventOptions.prototype.svgElement;
 /** @type {!SvgPanZoom.Instance} */
SvgPanZoom.CustomEventOptions.prototype.instance;
/**
 * @record
 * @struct
 */
SvgPanZoom.Point = function() {};
 /** @type {number} */
SvgPanZoom.Point.prototype.x;
 /** @type {number} */
SvgPanZoom.Point.prototype.y;
/**
 * @record
 * @struct
 */
SvgPanZoom.PointModifier = function() {};
 /** @type {(number|boolean)} */
SvgPanZoom.PointModifier.prototype.x;
 /** @type {(number|boolean)} */
SvgPanZoom.PointModifier.prototype.y;
/**
 * @record
 * @struct
 */
SvgPanZoom.Instance = function() {};

/* TODO: CallSignature: SvgPanZoom */

/**
 * Enables Panning on svg element
 * @return {!SvgPanZoom.Instance}
 */
SvgPanZoom.Instance.prototype.enablePan = function() {};

/**
 * Disables panning on svg element
 * @return {!SvgPanZoom.Instance}
 */
SvgPanZoom.Instance.prototype.disablePan = function() {};

/**
 * Checks if Panning is enabled or not
 * @return {boolean}
 */
SvgPanZoom.Instance.prototype.isPanEnabled = function() {};

/**
 * @param {function(!SvgPanZoom.Point): void} fn
 * @return {!SvgPanZoom.Instance}
 */
SvgPanZoom.Instance.prototype.setBeforePan = function(fn) {};

/**
 * @param {function(number, number): void} fn
 * @return {!SvgPanZoom.Instance}
 */
SvgPanZoom.Instance.prototype.setOnPan = function(fn) {};

/**
 * Pan to a rendered position
 * 
 * @param {!SvgPanZoom.Point} point
 * @return {!SvgPanZoom.Instance}
 */
SvgPanZoom.Instance.prototype.pan = function(point) {};

/**
 * Relatively pan the graph by a specified rendered position vector
 * 
 * @param {!SvgPanZoom.Point} point
 * @return {!SvgPanZoom.Instance}
 */
SvgPanZoom.Instance.prototype.panBy = function(point) {};

/**
 * Get pan vector
 * 
 * @return {!SvgPanZoom.Point}
 */
SvgPanZoom.Instance.prototype.getPan = function() {};

/**
 * @return {!SvgPanZoom.Instance}
 */
SvgPanZoom.Instance.prototype.resetPan = function() {};

/**
 * @return {!SvgPanZoom.Instance}
 */
SvgPanZoom.Instance.prototype.enableZoom = function() {};

/**
 * @return {!SvgPanZoom.Instance}
 */
SvgPanZoom.Instance.prototype.disableZoom = function() {};

/**
 * @return {boolean}
 */
SvgPanZoom.Instance.prototype.isZoomEnabled = function() {};

/**
 * @return {!SvgPanZoom.Instance}
 */
SvgPanZoom.Instance.prototype.enableControlIcons = function() {};

/**
 * @return {!SvgPanZoom.Instance}
 */
SvgPanZoom.Instance.prototype.disableControlIcons = function() {};

/**
 * @return {boolean}
 */
SvgPanZoom.Instance.prototype.isControlIconsEnabled = function() {};

/**
 * @return {!SvgPanZoom.Instance}
 */
SvgPanZoom.Instance.prototype.enableDblClickZoom = function() {};

/**
 * @return {!SvgPanZoom.Instance}
 */
SvgPanZoom.Instance.prototype.disableDblClickZoom = function() {};

/**
 * @return {boolean}
 */
SvgPanZoom.Instance.prototype.isDblClickZoomEnabled = function() {};

/**
 * @return {!SvgPanZoom.Instance}
 */
SvgPanZoom.Instance.prototype.enableMouseWheelZoom = function() {};

/**
 * @return {!SvgPanZoom.Instance}
 */
SvgPanZoom.Instance.prototype.disableMouseWheelZoom = function() {};

/**
 * @return {boolean}
 */
SvgPanZoom.Instance.prototype.isMouseWheelZoomEnabled = function() {};

/**
 * @param {number} scale
 * @return {!SvgPanZoom.Instance}
 */
SvgPanZoom.Instance.prototype.setZoomScaleSensitivity = function(scale) {};

/**
 * @param {number} zoom
 * @return {!SvgPanZoom.Instance}
 */
SvgPanZoom.Instance.prototype.setMinZoom = function(zoom) {};

/**
 * @param {number} zoom
 * @return {!SvgPanZoom.Instance}
 */
SvgPanZoom.Instance.prototype.setMaxZoom = function(zoom) {};

/**
 * @param {function(number): void} fn
 * @return {!SvgPanZoom.Instance}
 */
SvgPanZoom.Instance.prototype.setBeforeZoom = function(fn) {};

/**
 * @param {function(number): void} fn
 * @return {!SvgPanZoom.Instance}
 */
SvgPanZoom.Instance.prototype.setOnZoom = function(fn) {};

/**
 * @param {number} scale
 * @return {void}
 */
SvgPanZoom.Instance.prototype.zoom = function(scale) {};

/**
 * @return {!SvgPanZoom.Instance}
 */
SvgPanZoom.Instance.prototype.zoomIn = function() {};

/**
 * @return {!SvgPanZoom.Instance}
 */
SvgPanZoom.Instance.prototype.zoomOut = function() {};

/**
 * @param {number} scale
 * @return {!SvgPanZoom.Instance}
 */
SvgPanZoom.Instance.prototype.zoomBy = function(scale) {};

/**
 * @param {number} scale
 * @param {!SvgPanZoom.Point} point
 * @return {!SvgPanZoom.Instance}
 */
SvgPanZoom.Instance.prototype.zoomAtPoint = function(scale, point) {};

/**
 * @param {number} scale
 * @param {!SvgPanZoom.Point} point
 * @return {!SvgPanZoom.Instance}
 */
SvgPanZoom.Instance.prototype.zoomAtPointBy = function(scale, point) {};

/**
 * @return {!SvgPanZoom.Instance}
 */
SvgPanZoom.Instance.prototype.resetZoom = function() {};

/**
 * Get zoom scale/level
 * 
 * @return {number}
 */
SvgPanZoom.Instance.prototype.getZoom = function() {};

/**
 * Adjust viewport size (only) so it will fit in SVG
 * Does not center image
 * 
 * @return {!SvgPanZoom.Instance}
 */
SvgPanZoom.Instance.prototype.fit = function() {};

/**
 * Adjust viewport size (only) so it will contain in SVG
 * Does not center image
 * 
 * @return {!SvgPanZoom.Instance}
 */
SvgPanZoom.Instance.prototype.contain = function() {};

/**
 * Adjust viewport pan (only) so it will be centered in SVG
 * Does not zoom/fit image
 * 
 * @return {!SvgPanZoom.Instance}
 */
SvgPanZoom.Instance.prototype.center = function() {};

/**
 * Recalculates cached svg dimensions and controls position
 * 
 * @return {!SvgPanZoom.Instance}
 */
SvgPanZoom.Instance.prototype.resize = function() {};

/**
 * @return {!SvgPanZoom.Instance}
 */
SvgPanZoom.Instance.prototype.reset = function() {};

/**
 * Update content cached BorderBox
 * Use when viewport contents change
 * 
 * @return {!SvgPanZoom.Instance}
 */
SvgPanZoom.Instance.prototype.updateBBox = function() {};

/**
 * @return {void}
 */
SvgPanZoom.Instance.prototype.destroy = function() {};
 /** @type {!SvgPanZoom.Instance} */
var svgPanZoom;
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "svg-pan-zoom"
/** @const */
tsickle_declare_module.svg_pan_zoom = {};

/* TODO: ExportAssignment in tsickle_declare_module.svg_pan_zoom */
