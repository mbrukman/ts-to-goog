/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/zynga-scroller/index.d.ts:

/**
 * @constructor
 * @struct
 * @param {function(number, number, number): void} a
 * @param {{scrollingX: boolean, scrollingY: boolean, animating: boolean, animationDuration: number, bouncing: boolean, locking: boolean, paging: boolean, snapping: boolean, zooming: number, minZoom: number, maxZoom: number}=} b
 */
function Scroller(a, b) {}

/**
 * @param {number} clientWidth
 * @param {number} clientHeight
 * @param {number} contentWidth
 * @param {number} contentHeight
 * @return {void}
 */
Scroller.prototype.setDimensions = function(clientWidth, clientHeight, contentWidth, contentHeight) {};

/**
 * @param {number} clientLeft
 * @param {number} clientTop
 * @return {void}
 */
Scroller.prototype.setPosition = function(clientLeft, clientTop) {};

/**
 * @param {number} width
 * @param {number} height
 * @return {void}
 */
Scroller.prototype.setSnapSize = function(width, height) {};

/**
 * @template T
 * @param {number} height
 * @param {function(): void} activate
 * @param {function(): void} deactivate
 * @param {function(): void} start
 * @return {void}
 */
Scroller.prototype.activatePullToRefresh = function(height, activate, deactivate, start) {};

/**
 * @return {void}
 */
Scroller.prototype.finishPullToRefresh = function() {};

/**
 * @return {{left: number, top: number, zoom: number}}
 */
Scroller.prototype.getValues = function() {};

/**
 * @param {number} level
 * @param {boolean=} animate
 * @param {number=} originLeft
 * @param {number=} originTop
 * @return {void}
 */
Scroller.prototype.zoomTo = function(level, animate, originLeft, originTop) {};

/**
 * @param {number} factor
 * @param {boolean=} animate
 * @param {number=} originLeft
 * @param {number=} originTop
 * @return {void}
 */
Scroller.prototype.zoomBy = function(factor, animate, originLeft, originTop) {};

/**
 * @param {number} left
 * @param {number} top
 * @param {boolean=} animate
 * @return {void}
 */
Scroller.prototype.scrollTo = function(left, top, animate) {};

/**
 * @param {number} leftOffset
 * @param {number} topOffset
 * @param {boolean=} animate
 * @return {void}
 */
Scroller.prototype.scrollBy = function(leftOffset, topOffset, animate) {};

/**
 * @param {number} wheelData
 * @param {number} timeStamp
 * @param {number} pageX
 * @param {number} pageY
 * @return {void}
 */
Scroller.prototype.doMouseZoom = function(wheelData, timeStamp, pageX, pageY) {};

/**
 * @param {{pageX: number, pageY: number}} touches
 * @param {number} timeStamp
 * @return {void}
 */
Scroller.prototype.doTouchStart = function(touches, timeStamp) {};

/**
 * @param {{pageX: number, pageY: number}|!Array<?>} touches
 * @param {number} timeStamp
 * @param {number=} scale
 * @return {void}
 */
Scroller.prototype.doTouchMove = function(touches, timeStamp, scale) {};

/**
 * @param {number} timeStamp
 * @return {void}
 */
Scroller.prototype.doTouchEnd = function(timeStamp) {};