/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/askmethat-rating/index.d.ts:

/** @const */
var AskmethatRatingSteps = {};
/** @const {number} */
AskmethatRatingSteps.DecimalStep;
/** @const {number} */
AskmethatRatingSteps.HalfStep;
/** @const {number} */
AskmethatRatingSteps.OnePerOneStep;
/**
 * @record
 * @struct
 */
function AskmethatRatingOptions() {}
 /** @type {string} */
AskmethatRatingOptions.prototype.hoverColor;
 /** @type {string} */
AskmethatRatingOptions.prototype.backgroundColor;
 /** @type {number} */
AskmethatRatingOptions.prototype.minRating;
 /** @type {number} */
AskmethatRatingOptions.prototype.maxRating;
 /** @type {string} */
AskmethatRatingOptions.prototype.fontClass;
 /** @type {boolean} */
AskmethatRatingOptions.prototype.readonly;
 /** @type {?} */
AskmethatRatingOptions.prototype.step;
 /** @type {string} */
AskmethatRatingOptions.prototype.inputName;

/**
 * @constructor
 * @struct
 * constructor with div element, default rating value & default options
 * 
 * @param {!HTMLDivElement} element This is the html container for the rating elements
 * @param {number=} defaultValue Default value set when the plugin render the rating
 * @param {?=} options Default option base on AskmethatRatingOptions type
 */
function AskmethatRating(element, defaultValue, options) {}
 /** @type {?} */
AskmethatRating.prototype.parentElement;
 /** @type {?} */
AskmethatRating.prototype.pValue;
 /** @type {?} */
AskmethatRating.prototype.styleSheet;
 /** @type {?} */
AskmethatRating.prototype.changeEvent;
 /** @type {?} */
AskmethatRating.prototype.ratingClick;
 /** @type {?} */
AskmethatRating.prototype.mouseMove;
 /** @type {number} */
AskmethatRating.prototype.value;
 /** @type {?} */
AskmethatRating.prototype._defaultOptions;
 /** @type {?} */
AskmethatRating.prototype.defaultOptions;

/**
 * render a new rating, by default value is the minRating
 * 
 * @param {number=} value this is the default value set when the plugin is rendered, by default IAskmethatRatingOptions.minRating
 * @return {void}
 */
AskmethatRating.prototype.render = function(value) {};

/**
 * @param {?=} event
 * @return {?}
 */
AskmethatRating.prototype.onRatingClick = function(event) {};

/**
 * @param {number} value
 * @return {number}
 */
AskmethatRating.prototype.getValueAccordingToStep = function(value) {};

/**
 * @param {?=} event
 * @return {?}
 */
AskmethatRating.prototype.onMouseMove = function(event) {};

/**
 * @param {?=} event
 * @return {?}
 */
AskmethatRating.prototype.onMouseLeave = function(event) {};

/**
 * @param {number} value
 * @return {void}
 */
AskmethatRating.prototype.setOrUnsetActive = function(value) {};

/**
 * Check if disabled attribute is added or removed from the input
 * Update readonly status if needed for the rating
 * @return {?}
 */
AskmethatRating.prototype.mutationEvent = function() {};

/**
 * This is fired by mutation observer when an attribute changed in the hidden input
 * Is protected to have some unit tests
 * @param {!Array<!MutationRecord>} mutations
 * @return {void}
 */
AskmethatRating.prototype.mutationDisableEvent = function(mutations) {};

/**
 * @param {string} identifier
 * @return {number}
 */
AskmethatRating.value = function(identifier) {};