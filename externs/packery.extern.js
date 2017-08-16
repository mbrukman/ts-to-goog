/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/packery/index.d.ts:
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "packery"
/** @const */
tsickle_declare_module.packery = {};
/**
 * @record
 * @struct
 */
tsickle_declare_module.packery.PackeryOptions = function() {};
 /** @type {string} */
tsickle_declare_module.packery.PackeryOptions.prototype.itemSelector;
 /** @type {number} */
tsickle_declare_module.packery.PackeryOptions.prototype.columnWidth;
 /** @type {number} */
tsickle_declare_module.packery.PackeryOptions.prototype.rowHeight;
 /** @type {number} */
tsickle_declare_module.packery.PackeryOptions.prototype.gutter;
 /** @type {boolean} */
tsickle_declare_module.packery.PackeryOptions.prototype.percentPosition;
 /** @type {string} */
tsickle_declare_module.packery.PackeryOptions.prototype.stamp;
 /** @type {boolean} */
tsickle_declare_module.packery.PackeryOptions.prototype.isHorizontal;
 /** @type {boolean} */
tsickle_declare_module.packery.PackeryOptions.prototype.isOriginLeft;
 /** @type {boolean} */
tsickle_declare_module.packery.PackeryOptions.prototype.isOriginTop;
 /** @type {string} */
tsickle_declare_module.packery.PackeryOptions.prototype.transitionDuration;
 /** @type {!Object} */
tsickle_declare_module.packery.PackeryOptions.prototype.containerStyle;
 /** @type {boolean} */
tsickle_declare_module.packery.PackeryOptions.prototype.isResizeBound;
 /** @type {boolean} */
tsickle_declare_module.packery.PackeryOptions.prototype.isInitLayout;

/**
 * @constructor
 * @struct
 * @param {!Element} element
 * @param {!Object=} options
 */
tsickle_declare_module.packery.Packery = function(element, options) {};

/**
 * [addItems Add item elements to the Packery instance]
 * [addItems Add item elements to the Packery instance]
 * [addItems Add item elements to the Packery instance]
 * @param {!Element|!NodeList|!Array<!Element>} elements
 * @return {void}
 */
tsickle_declare_module.packery.Packery.prototype.addItems = function(elements) {};

/**
 * [appended Add and lay out newly appended item elements]
 * [appended Add and lay out newly appended item elements]
 * [appended Add and lay out newly appended item elements]
 * @param {!Element|!NodeList|!Array<!Element>} elements
 * @return {void}
 */
tsickle_declare_module.packery.Packery.prototype.appended = function(elements) {};

/**
 * [bindDraggabillyEvents Bind Draggabilly events, so that the Packery instance will layout around the dragged element]
 * @param {?} draggie
 * @return {void}
 */
tsickle_declare_module.packery.Packery.prototype.bindDraggabillyEvents = function(draggie) {};

/**
 * [bindResize Binds event listener to window resize, so layout is triggered when the browser window is resized]
 * @return {void}
 */
tsickle_declare_module.packery.Packery.prototype.bindResize = function() {};

/**
 * [bindUIDraggableEvents Bind jQuery UI Draggable events, so that the Packery instance will layout around the dragged element]
 * @param {?} $element
 * @return {void}
 */
tsickle_declare_module.packery.Packery.prototype.bindUIDraggableEvents = function($element) {};

/**
 * [data Get the Packery instance from an element. Note this method is of Packery, rather than of a Packery instance]
 * @param {!Element} element
 * @return {!Packery}
 */
tsickle_declare_module.packery.Packery.prototype.data = function(element) {};

/**
 * [destroy Removes the Packery functionality completely. This will return the element back to its pre-initialized state]
 * @return {void}
 */
tsickle_declare_module.packery.Packery.prototype.destroy = function() {};

/**
 * [fit Fit an item element within the layout, and have other item elements laid out around it. This method is useful when expanding an element, and keeping it in its same position.]
 * @param {!Element} element
 * @param {number=} x
 * @param {number=} y
 * @return {void}
 */
tsickle_declare_module.packery.Packery.prototype.fit = function(element, x, y) {};

/**
 * [getItemElements Get an array of elements used as the Packery instance's items.]
 * @return {!Array<!Element>}
 */
tsickle_declare_module.packery.Packery.prototype.getItemElements = function() {};

/**
 * [getItem Get a Packery.Item from an element]
 * @param {!Element} element
 * @return {?}
 */
tsickle_declare_module.packery.Packery.prototype.getItem = function(element) {};

/**
 * [layout Lay out all item elements.]
 * @return {void}
 */
tsickle_declare_module.packery.Packery.prototype.layout = function() {};

/**
 * [layoutItems Lay out specified items]
 * @param {!Array<?>} items
 * @return {void}
 */
tsickle_declare_module.packery.Packery.prototype.layoutItems = function(items) {};

/**
 * [off Remove an event listener]
 * @param {string} eventName
 * @param {!Function} listener
 * @return {!Packery}
 */
tsickle_declare_module.packery.Packery.prototype.off = function(eventName, listener) {};

/**
 * [on Add an event listener for certain events]
 * @param {string} eventName
 * @param {!Function} listener
 * @return {!Packery}
 */
tsickle_declare_module.packery.Packery.prototype.on = function(eventName, listener) {};

/**
 * [once Add an event listener for certain events, to be triggered once]
 * @param {string} eventName
 * @param {!Function} listener
 * @return {void}
 */
tsickle_declare_module.packery.Packery.prototype.once = function(eventName, listener) {};

/**
 * [prepended Add and lay out newly prepended item elements at the beginning of layout]
 * [prepended Add and lay out newly prepended item elements at the beginning of layout]
 * [prepended Add and lay out newly prepended item elements at the beginning of layout]
 * @param {!Element|!NodeList|!Array<!Element>} elements
 * @return {void}
 */
tsickle_declare_module.packery.Packery.prototype.prepended = function(elements) {};

/**
 * [reloadItems Recollect all item elements]
 * @return {void}
 */
tsickle_declare_module.packery.Packery.prototype.reloadItems = function() {};

/**
 * [remove Remove elements from the Packery instance, then from the DOM]
 * [remove Remove elements from the Packery instance, then from the DOM]
 * [remove Remove elements from the Packery instance, then from the DOM]
 * @param {!Element|!NodeList|!Array<!Element>} elements
 * @return {void}
 */
tsickle_declare_module.packery.Packery.prototype.remove = function(elements) {};

/**
 * [stamp Stamp the elements in the layout. Packery will lay out item elements around stamped element]
 * [stamp Stamp the elements in the layout. Packery will lay out item elements around stamped element]
 * [stamp Stamp the elements in the layout. Packery will lay out item elements around stamped element]
 * @param {!Element|!NodeList|!Array<!Element>} elements
 * @return {void}
 */
tsickle_declare_module.packery.Packery.prototype.stamp = function(elements) {};

/**
 * [unbindResize Un-bind layout to window resize event]
 * @return {void}
 */
tsickle_declare_module.packery.Packery.prototype.unbindResize = function() {};

/**
 * [unstamp Un-stamp the elements, so that Packery will no longer layout item elements around them]
 * [unstamp Un-stamp the elements, so that Packery will no longer layout item elements around them]
 * [unstamp Un-stamp the elements, so that Packery will no longer layout item elements around them]
 * @param {!Element|!NodeList|!Array<!Element>} element
 * @return {void}
 */
tsickle_declare_module.packery.Packery.prototype.unstamp = function(element) {};