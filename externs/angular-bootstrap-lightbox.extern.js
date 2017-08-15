/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/angular-bootstrap-lightbox/index.d.ts:
/** @const */
var angular = {};
/** @const */
angular.bootstrap = {};
/** @const */
angular.bootstrap.lightbox = {};
/**
 * @record
 * @struct
 */
angular.bootstrap.lightbox.ILightboxImageInfo = function() {};
 /** @type {string} */
angular.bootstrap.lightbox.ILightboxImageInfo.prototype.url;
 /** @type {number} */
angular.bootstrap.lightbox.ILightboxImageInfo.prototype.width;
 /** @type {number} */
angular.bootstrap.lightbox.ILightboxImageInfo.prototype.height;
 /** @type {string} */
angular.bootstrap.lightbox.ILightboxImageInfo.prototype.thumbUrl;
 /** @type {string} */
angular.bootstrap.lightbox.ILightboxImageInfo.prototype.caption;
/**
 * @record
 * @struct
 */
angular.bootstrap.lightbox.IImageDimensionLimits = function() {};
 /** @type {number} */
angular.bootstrap.lightbox.IImageDimensionLimits.prototype.minWidth;
 /** @type {number} */
angular.bootstrap.lightbox.IImageDimensionLimits.prototype.minHeight;
 /** @type {number} */
angular.bootstrap.lightbox.IImageDimensionLimits.prototype.maxWidth;
 /** @type {number} */
angular.bootstrap.lightbox.IImageDimensionLimits.prototype.maxHeight;
/**
 * @record
 * @struct
 */
angular.bootstrap.lightbox.IImageDimensionParameter = function() {};
 /** @type {number} */
angular.bootstrap.lightbox.IImageDimensionParameter.prototype.windowWidth;
 /** @type {number} */
angular.bootstrap.lightbox.IImageDimensionParameter.prototype.windowHeight;
 /** @type {number} */
angular.bootstrap.lightbox.IImageDimensionParameter.prototype.imageWidth;
 /** @type {number} */
angular.bootstrap.lightbox.IImageDimensionParameter.prototype.imageHeight;
/**
 * @record
 * @struct
 */
angular.bootstrap.lightbox.IModalDimensionsParameter = function() {};
 /** @type {number} */
angular.bootstrap.lightbox.IModalDimensionsParameter.prototype.windowWidth;
 /** @type {number} */
angular.bootstrap.lightbox.IModalDimensionsParameter.prototype.windowHeight;
 /** @type {number} */
angular.bootstrap.lightbox.IModalDimensionsParameter.prototype.imageDisplayWidth;
 /** @type {number} */
angular.bootstrap.lightbox.IModalDimensionsParameter.prototype.imageDisplayHeight;
/**
 * @record
 * @struct
 */
angular.bootstrap.lightbox.IModalDimensions = function() {};
 /** @type {number} */
angular.bootstrap.lightbox.IModalDimensions.prototype.width;
 /** @type {number} */
angular.bootstrap.lightbox.IModalDimensions.prototype.height;
/**
 * @record
 * @struct
 */
angular.bootstrap.lightbox.ILightbox = function() {};

/**
 * @param {!Array<!angular.bootstrap.lightbox.ILightboxImageInfo>} images
 * @param {number} index
 * @return {void}
 */
angular.bootstrap.lightbox.ILightbox.prototype.openModal = function(images, index) {};
/**
 * @record
 * @struct
 */
angular.bootstrap.lightbox.ILightBoxProvider = function() {};
 /** @type {string} */
angular.bootstrap.lightbox.ILightBoxProvider.prototype.templateUrl;
 /** @type {function(!angular.bootstrap.lightbox.IImageDimensionParameter): !angular.bootstrap.lightbox.IImageDimensionLimits} */
angular.bootstrap.lightbox.ILightBoxProvider.prototype.calculateImageDimensionLimits;
 /** @type {function(!angular.bootstrap.lightbox.IModalDimensionsParameter): !angular.bootstrap.lightbox.IModalDimensions} */
angular.bootstrap.lightbox.ILightBoxProvider.prototype.calculateModalDimensions;