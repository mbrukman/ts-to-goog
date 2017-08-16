/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/snazzy-info-window/index.d.ts:
/** @const */
var SnazzyInfoWindow = {};

/** @typedef {string} */
SnazzyInfoWindow.PlacementOptions;
/**
 * @record
 * @struct
 */
SnazzyInfoWindow.Offset = function() {};
 /** @type {string} */
SnazzyInfoWindow.Offset.prototype.top;
 /** @type {string} */
SnazzyInfoWindow.Offset.prototype.bottom;
 /** @type {string} */
SnazzyInfoWindow.Offset.prototype.left;
 /** @type {string} */
SnazzyInfoWindow.Offset.prototype.right;
/**
 * @record
 * @struct
 */
SnazzyInfoWindow.EdgeOffset = function() {};
 /** @type {number} */
SnazzyInfoWindow.EdgeOffset.prototype.top;
 /** @type {number} */
SnazzyInfoWindow.EdgeOffset.prototype.bottom;
 /** @type {number} */
SnazzyInfoWindow.EdgeOffset.prototype.left;
 /** @type {number} */
SnazzyInfoWindow.EdgeOffset.prototype.right;
/**
 * @record
 * @struct
 */
SnazzyInfoWindow.Border = function() {};
 /** @type {string} */
SnazzyInfoWindow.Border.prototype.width;
 /** @type {string} */
SnazzyInfoWindow.Border.prototype.color;
/**
 * @record
 * @struct
 */
SnazzyInfoWindow.Shadow = function() {};
 /** @type {string} */
SnazzyInfoWindow.Shadow.prototype.h;
 /** @type {string} */
SnazzyInfoWindow.Shadow.prototype.v;
 /** @type {string} */
SnazzyInfoWindow.Shadow.prototype.blur;
 /** @type {string} */
SnazzyInfoWindow.Shadow.prototype.spread;
 /** @type {string} */
SnazzyInfoWindow.Shadow.prototype.opacity;
 /** @type {string} */
SnazzyInfoWindow.Shadow.prototype.color;
/**
 * @record
 * @struct
 */
SnazzyInfoWindow.Callbacks = function() {};

/**
 * Called before the info window attempts to open.
 * Return false to cancel the open.
 * @return {(boolean|void)}
 */
SnazzyInfoWindow.Callbacks.prototype.beforeOpen = function() {};

/**
 * Called when the info window is opening.
 * This occurs at the end of the OverlayView onAdd() implementation.
 * At this point the info window is added to the DOM but is not drawn yet.
 * @return {(boolean|void)}
 */
SnazzyInfoWindow.Callbacks.prototype.open = function() {};

/**
 * Called when the info window has opened.
 * This occurs at the end of the OverlayView draw() implementation.
 * At this point the info window is added to the DOM and should be visible.
 * @return {(boolean|void)}
 */
SnazzyInfoWindow.Callbacks.prototype.afterOpen = function() {};

/**
 * Called before the info window attempts to close.
 * Return false to cancel the close.
 * @return {(boolean|void)}
 */
SnazzyInfoWindow.Callbacks.prototype.beforeClose = function() {};

/**
 * Called when the info window is closing.
 * This occurs at the beginning of the OverlayView onRemove() implementation.
 * At this point the info window is still in the DOM.
 * @return {(boolean|void)}
 */
SnazzyInfoWindow.Callbacks.prototype.close = function() {};

/**
 * Called after the info window has closed.
 * This occurs at the end of the OverlayView onRemove() implementation.
 * At this point the info window should be removed from the DOM.
 * @return {(boolean|void)}
 */
SnazzyInfoWindow.Callbacks.prototype.afterClose = function() {};
/**
 * @record
 * @struct
 */
SnazzyInfoWindow.InfoWindowOptions = function() {};
 /** @type {!google.maps.Marker} */
SnazzyInfoWindow.InfoWindowOptions.prototype.marker;
 /** @type {(string|!HTMLElement)} */
SnazzyInfoWindow.InfoWindowOptions.prototype.content;
 /** @type {string} */
SnazzyInfoWindow.InfoWindowOptions.prototype.placement;
 /** @type {!google.maps.Map} */
SnazzyInfoWindow.InfoWindowOptions.prototype.map;
 /** @type {(!google.maps.LatLng|{lat: number, lng: number})} */
SnazzyInfoWindow.InfoWindowOptions.prototype.position;
 /** @type {string} */
SnazzyInfoWindow.InfoWindowOptions.prototype.wrapperClass;
 /** @type {number} */
SnazzyInfoWindow.InfoWindowOptions.prototype.maxWidth;
 /** @type {number} */
SnazzyInfoWindow.InfoWindowOptions.prototype.maxHeight;
 /** @type {!SnazzyInfoWindow.Offset} */
SnazzyInfoWindow.InfoWindowOptions.prototype.offset;
 /** @type {!SnazzyInfoWindow.EdgeOffset} */
SnazzyInfoWindow.InfoWindowOptions.prototype.edgeOffset;
 /** @type {string} */
SnazzyInfoWindow.InfoWindowOptions.prototype.backgroundColor;
 /** @type {string} */
SnazzyInfoWindow.InfoWindowOptions.prototype.padding;
 /** @type {(boolean|!SnazzyInfoWindow.Border)} */
SnazzyInfoWindow.InfoWindowOptions.prototype.border;
 /** @type {string} */
SnazzyInfoWindow.InfoWindowOptions.prototype.borderRadius;
 /** @type {string} */
SnazzyInfoWindow.InfoWindowOptions.prototype.fontColor;
 /** @type {string} */
SnazzyInfoWindow.InfoWindowOptions.prototype.fontSize;
 /** @type {(string|boolean)} */
SnazzyInfoWindow.InfoWindowOptions.prototype.pointer;
 /** @type {(boolean|!SnazzyInfoWindow.Shadow)} */
SnazzyInfoWindow.InfoWindowOptions.prototype.shadow;
 /** @type {boolean} */
SnazzyInfoWindow.InfoWindowOptions.prototype.openOnMarkerClick;
 /** @type {boolean} */
SnazzyInfoWindow.InfoWindowOptions.prototype.closeOnMapClick;
 /** @type {boolean} */
SnazzyInfoWindow.InfoWindowOptions.prototype.closeWhenOthersOpen;
 /** @type {boolean} */
SnazzyInfoWindow.InfoWindowOptions.prototype.showCloseButton;
 /** @type {boolean} */
SnazzyInfoWindow.InfoWindowOptions.prototype.closeButtonMarkup;
 /** @type {boolean} */
SnazzyInfoWindow.InfoWindowOptions.prototype.panOnOpen;
 /** @type {!SnazzyInfoWindow.Callbacks} */
SnazzyInfoWindow.InfoWindowOptions.prototype.callbacks;

/**
 * Will attempt to open the info window.
 * @return {void}
 */
SnazzyInfoWindow.prototype.open = function() {};

/**
 * Will attempt to close the info window.
 * @return {void}
 */
SnazzyInfoWindow.prototype.close = function() {};

/**
 * Determines if the info window is open.
 * @return {boolean}
 */
SnazzyInfoWindow.prototype.isOpen = function() {};

/**
 * Will destroy the info window.
 * If the info window is open it will be forced closed bypassing the regular beforeClose callback.
 * All Google Map event listeners associated to this info window will be removed.
 * @return {void}
 */
SnazzyInfoWindow.prototype.destroy = function() {};

/**
 * Set the content in the info window.
 * This can be called at any time.
 * @param {(string|!HTMLElement)} content string od DOM element
 * @return {void}
 */
SnazzyInfoWindow.prototype.setContent = function(content) {};

/**
 * Set the position of the info window.
 * A valid Google Map instance must be associated to the info window.
 * This could be either through the marker or map option.
 * @param {(!google.maps.LatLng|{lat: number, lng: number})} latLng
 * @return {void}
 */
SnazzyInfoWindow.prototype.setPosition = function(latLng) {};

/**
 * Will return the DOM Element for the wrapper container of the info window.
 * @return {!HTMLElement}
 */
SnazzyInfoWindow.prototype.getWrapper = function() {};

/* TODO: ExportAssignment in  */
