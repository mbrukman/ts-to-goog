/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/angular-scroll/index.d.ts:
/** @const */
var duScroll = {};
/**
 * @extends {angular.IDocumentService}
 * @record
 * @struct
 */
duScroll.IDocumentService = function() {};

/**
 * @param {number|!angular.IAugmentedJQuery} left_or_element
 * @param {number=} top_or_offset
 * @param {number=} duration
 * @param {!Function=} easing
 * @return {void|!angular.IPromise<void>}
 */
duScroll.IDocumentService.prototype.duScrollTo = function(left_or_element, top_or_offset, duration, easing) {};

/**
 * @param {!angular.IAugmentedJQuery} element
 * @param {number=} offset
 * @param {number=} duration
 * @param {!Function=} easing
 * @return {void|!angular.IPromise<void>}
 */
duScroll.IDocumentService.prototype.duScrollToElement = function(element, offset, duration, easing) {};

/**
 * @param {!angular.IAugmentedJQuery} element
 * @param {number=} offset
 * @param {number=} duration
 * @param {!Function=} easing
 * @return {!angular.IPromise<void>}
 */
duScroll.IDocumentService.prototype.duScrollToElementAnimated = function(element, offset, duration, easing) {};

/**
 * @param {number=} top
 * @param {number=} duration
 * @param {!Function=} easing
 * @return {void|!angular.IPromise<void>|number}
 */
duScroll.IDocumentService.prototype.duScrollTop = function(top, duration, easing) {};

/**
 * @param {number} top
 * @param {number=} duration
 * @param {!Function=} easing
 * @return {!angular.IPromise<void>}
 */
duScroll.IDocumentService.prototype.duScrollTopAnimated = function(top, duration, easing) {};

/**
 * @param {number=} left
 * @param {number=} duration
 * @param {!Function=} easing
 * @return {void|!angular.IPromise<void>|number}
 */
duScroll.IDocumentService.prototype.duScrollLeft = function(left, duration, easing) {};

/**
 * @param {number} left
 * @param {number=} duration
 * @param {!Function=} easing
 * @return {!angular.IPromise<void>}
 */
duScroll.IDocumentService.prototype.duScrollLeftAnimated = function(left, duration, easing) {};
