/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/smooth-scrollbar/index.d.ts:

/* TODO: NamespaceExportDeclaration in  */
/**
 * @record
 * @struct
 */
function ScrollbarOptions() {}
 /** @type {number} */
ScrollbarOptions.prototype.speed;
 /** @type {number} */
ScrollbarOptions.prototype.damping;
 /** @type {number} */
ScrollbarOptions.prototype.thumbMinSize;
 /** @type {boolean} */
ScrollbarOptions.prototype.syncCallbacks;
 /** @type {boolean} */
ScrollbarOptions.prototype.renderByPixels;
 /** @type {(boolean|string)} */
ScrollbarOptions.prototype.continuousScrolling;
 /** @type {(boolean|string)} */
ScrollbarOptions.prototype.overscrollEffect;
 /** @type {string} */
ScrollbarOptions.prototype.overscrollEffectColor;
 /** @type {number} */
ScrollbarOptions.prototype.overscrollDamping;
/**
 * @record
 * @struct
 */
function ScrollbarTargets() {}
 /** @type {!HTMLElement} */
ScrollbarTargets.prototype.container;
 /** @type {!HTMLElement} */
ScrollbarTargets.prototype.content;
 /** @type {?} */
ScrollbarTargets.prototype.xAxis;
 /** @type {?} */
ScrollbarTargets.prototype.yAxis;
/**
 * @record
 * @struct
 */
function ScrollIntoViewOptions() {}
 /** @type {number} */
ScrollIntoViewOptions.prototype.offsetTop;
 /** @type {number} */
ScrollIntoViewOptions.prototype.offsetLeft;
 /** @type {boolean} */
ScrollIntoViewOptions.prototype.onlyScrollIfNeeded;
/**
 * @record
 * @struct
 */
function ScrollStatusObject() {}
 /** @type {?} */
ScrollStatusObject.prototype.direction;
 /** @type {?} */
ScrollStatusObject.prototype.offset;
 /** @type {?} */
ScrollStatusObject.prototype.limit;
/**
 * @constructor
 * @struct
 */
function Scrollbar() {}
 /** @type {?} */
Scrollbar.prototype.targets;
 /** @type {?} */
Scrollbar.prototype.offset;
 /** @type {?} */
Scrollbar.prototype.limit;
 /** @type {number} */
Scrollbar.prototype.scrollTop;
 /** @type {number} */
Scrollbar.prototype.scrollLeft;

/**
 * Init scrollbar on given element, and returns scrollbar instance
 * @param {!HTMLElement} element
 * @param {?=} options
 * @return {?}
 */
Scrollbar.init = function(element, options) {};

/**
 * Automatically init scrollbar on all elements refer to selector scrollbar, [scrollbar], [data-scrollbar]
 * @param {?=} options
 * @return {!Array<?>}
 */
Scrollbar.initAll = function(options) {};

/**
 * Check if scrollbar exists on given element:
 * @param {!HTMLElement} element
 * @return {boolean}
 */
Scrollbar.has = function(element) {};

/**
 * Get scrollbar on the given element
 * @param {!HTMLElement} element
 * @return {?}
 */
Scrollbar.get = function(element) {};

/**
 * Get all scrollbar instances
 * @return {!Array<?>}
 */
Scrollbar.getAll = function() {};

/**
 * Remove scrollbar on the given element
 * @param {!HTMLElement} element
 * @param {boolean=} isRemoval
 * @return {void}
 */
Scrollbar.destroy = function(element, isRemoval) {};

/**
 * Destroys all scrollbar instances
 * @return {void}
 */
Scrollbar.destroyAll = function() {};

/**
 * Scrollbars are automatically updated with 100ms debounce (or childList changes if MutationObserver is supported).
 * You can call update() to force an update, this will be useful when you modified contents inside scrollbar
 * @param {boolean=} async
 * @return {void}
 */
Scrollbar.prototype.update = function(async) {};

/**
 * Return the size of scrollbar container and scroll content
 * @return {?}
 */
Scrollbar.prototype.getSize = function() {};

/**
 * Like window.scrollTo(), scroll content will be set to the given position immediately.
 * @param {number} x
 * @param {number} y
 * @param {boolean=} withoutCallbacks
 * @return {void}
 */
Scrollbar.prototype.setPosition = function(x, y, withoutCallbacks) {};

/**
 * Scroll to given position with easing, callback will be invoked with instance after scrolling:
 * @param {number} x
 * @param {number} y
 * @param {number=} duration
 * @param {?=} callback
 * @return {void}
 */
Scrollbar.prototype.scrollTo = function(x, y, duration, callback) {};

/**
 * Scroll target element into visible area of scrollbar, like DOM method element.scrollIntoView().
 * This will be helpful when you want to create some anchors.
 * @param {!HTMLElement} element
 * @param {?=} options
 * @return {void}
 */
Scrollbar.prototype.scrollIntoView = function(element, options) {};

/**
 * Check if an element is visible in the current view area.
 * @param {!HTMLElement} element
 * @return {boolean}
 */
Scrollbar.prototype.isVisible = function(element) {};

/**
 * Register scrolling listener to scrollbar instance, callbacks will be invoked in every small scrolling.
 * @param {?} listener
 * @return {void}
 */
Scrollbar.prototype.addListener = function(listener) {};

/**
 * Remove the given listeneer from listeners collection, like Element.removeEventListener().
 * @param {?} listener
 * @return {void}
 */
Scrollbar.prototype.removeListener = function(listener) {};

/**
 * This is another useful method when you want to make infinite scrolling.
 * Callbacks will be invoked with status object when you scrolling down over a threshold.
 * @param {?} listener
 * @param {number=} threshold
 * @return {void}
 */
Scrollbar.prototype.infiniteScroll = function(listener, threshold) {};

/**
 * Remove DOM event handlers that match regex rules
 * \@example 
 * instance.unregisterEvents(/touch/, /key/);
 * @param {...!RegExp} regexps
 * @return {void}
 */
Scrollbar.prototype.unregisterEvents = function(regexps) {};

/**
 * Recover events that are unregistered.
 * @param {...!RegExp} regexps
 * @return {void}
 */
Scrollbar.prototype.registerEvents = function(regexps) {};

/**
 * Clear all movements and stop scrollbar immediately, will be useful when you want to stop scrollbar and set it to another position.
 * @return {void}
 */
Scrollbar.prototype.clearMovement = function() {};

/**
 * Alias for clearMovement() method.
 * @return {void}
 */
Scrollbar.prototype.stop = function() {};

/**
 * Remove this scrollbar instance
 * @param {boolean=} isRemoval
 * @return {void}
 */
Scrollbar.prototype.destroy = function(isRemoval) {};

/**
 * Get content element of the scrollbar, which contains all of your contents within scrollbar.
 * In other words, all contents that you've put them into target element, will be moved here after you initialized the scrollbar.
 * @return {!HTMLElement}
 */
Scrollbar.prototype.getContentElem = function() {};

/**
 * Show scrollbar track, you can choose whether 'x' or 'y' or 'both', default is 'both' which will show tracks both on x-axis and y-axis.
 * @param {string=} direction
 * @return {void}
 */
Scrollbar.prototype.showTrack = function(direction) {};

/**
 * Like showTrack() method, but for hiding the track on specified direction.
 * @param {string=} direction
 * @return {void}
 */
Scrollbar.prototype.hideTrack = function(direction) {};
