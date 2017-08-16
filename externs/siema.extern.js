/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/siema/index.d.ts:

/**
 * @constructor
 * @struct
 * @param {?=} options
 */
function Siema(options) {}
 /** @type {number} */
Siema.prototype.currentSlide;

/**
 * @return {void}
 */
Siema.prototype.next = function() {};

/**
 * @return {void}
 */
Siema.prototype.prev = function() {};

/**
 * @param {number} index
 * @return {void}
 */
Siema.prototype.goTo = function(index) {};
/**
 * @record
 * @struct
 */
function SiemaOptions() {}
 /** @type {string} */
SiemaOptions.prototype.selector;
 /** @type {number} */
SiemaOptions.prototype.duration;
 /** @type {string} */
SiemaOptions.prototype.easing;
 /** @type {number} */
SiemaOptions.prototype.perPage;
 /** @type {number} */
SiemaOptions.prototype.startIndex;
 /** @type {boolean} */
SiemaOptions.prototype.draggable;
 /** @type {number} */
SiemaOptions.prototype.threshold;
 /** @type {boolean} */
SiemaOptions.prototype.loop;

/* TODO: ExportAssignment in  */
