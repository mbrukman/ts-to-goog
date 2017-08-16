/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/swipeview/index.d.ts:
/**
 * @record
 * @struct
 */
function SwipeViewEvent() {}

/* TODO: CallSignature:  */
/**
 * @record
 * @struct
 */
function SwipeViewOptions() {}
 /** @type {string} */
SwipeViewOptions.prototype.text;
 /** @type {number} */
SwipeViewOptions.prototype.numberOfPages;
 /** @type {number} */
SwipeViewOptions.prototype.snapThreshold;
 /** @type {boolean} */
SwipeViewOptions.prototype.hastyPageFlip;
 /** @type {boolean} */
SwipeViewOptions.prototype.loop;

/**
 * @constructor
 * @struct
 * @param {string} element
 * @param {!SwipeViewOptions=} options
 */
function SwipeView(element, options) {}
 /** @type {!Array<!HTMLElement>} */
SwipeView.prototype.masterPages;
 /** @type {number} */
SwipeView.prototype.currentMasterPage;
 /** @type {!HTMLElement} */
SwipeView.prototype.wrapper;
 /** @type {!HTMLElement} */
SwipeView.prototype.slider;
 /** @type {!SwipeViewEvent} */
SwipeView.prototype.onFlip;
 /** @type {!SwipeViewEvent} */
SwipeView.prototype.onMoveOut;
 /** @type {!SwipeViewEvent} */
SwipeView.prototype.onMoveIn;
 /** @type {!SwipeViewEvent} */
SwipeView.prototype.onTouchStart;
 /** @type {number} */
SwipeView.prototype.wrapperHeight;

/**
 * @return {void}
 */
SwipeView.prototype.destroy = function() {};

/**
 * @return {void}
 */
SwipeView.prototype.refreshSize = function() {};

/**
 * @param {number} n
 * @return {void}
 */
SwipeView.prototype.updatePageCount = function(n) {};

/**
 * @param {number} p
 * @return {void}
 */
SwipeView.prototype.goToPage = function(p) {};

/**
 * @return {void}
 */
SwipeView.prototype.next = function() {};

/**
 * @return {void}
 */
SwipeView.prototype.prev = function() {};

/**
 * @param {!Event} e
 * @return {void}
 */
SwipeView.prototype.handleEvent = function(e) {};
