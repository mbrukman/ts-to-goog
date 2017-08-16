/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/perfect-scrollbar/index.d.ts:

/* TODO: PropertySignature: 'ps-scroll-y' */

/* TODO: PropertySignature: 'ps-scroll-x' */

/* TODO: PropertySignature: 'ps-scroll-up' */

/* TODO: PropertySignature: 'ps-scroll-down' */

/* TODO: PropertySignature: 'ps-scroll-left' */

/* TODO: PropertySignature: 'ps-scroll-right' */

/* TODO: PropertySignature: 'ps-y-reach-start' */

/* TODO: PropertySignature: 'ps-y-reach-end' */

/* TODO: PropertySignature: 'ps-x-reach-start' */

/* TODO: PropertySignature: 'ps-x-reach-end' */
/**
 * @record
 * @struct
 */
function PerfectScrollbarSettings() {}
 /** @type {!Array<string>} */
PerfectScrollbarSettings.prototype.handlers;
 /** @type {number} */
PerfectScrollbarSettings.prototype.maxScrollbarLength;
 /** @type {number} */
PerfectScrollbarSettings.prototype.minScrollbarLength;
 /** @type {number} */
PerfectScrollbarSettings.prototype.scrollXMarginOffset;
 /** @type {number} */
PerfectScrollbarSettings.prototype.scrollYMarginOffset;
 /** @type {boolean} */
PerfectScrollbarSettings.prototype.suppressScrollX;
 /** @type {boolean} */
PerfectScrollbarSettings.prototype.suppressScrollY;
 /** @type {boolean} */
PerfectScrollbarSettings.prototype.swipePropagation;
 /** @type {boolean} */
PerfectScrollbarSettings.prototype.swipeEasing;
 /** @type {boolean} */
PerfectScrollbarSettings.prototype.useBothWheelAxes;
 /** @type {boolean} */
PerfectScrollbarSettings.prototype.wheelPropagation;
 /** @type {number} */
PerfectScrollbarSettings.prototype.wheelSpeed;
 /** @type {string} */
PerfectScrollbarSettings.prototype.theme;
/**
 * @record
 * @struct
 */
function PerfectScrollbar() {}

/**
 * @see https://github.com/noraesae/perfect-scrollbar/blob/master/src/js/plugin/initialize.js#L19
 * @param {!HTMLElement} element
 * @param {!PerfectScrollbarSettings=} settings
 * @return {void}
 */
PerfectScrollbar.prototype.initialize = function(element, settings) {};

/**
 * @see https://github.com/noraesae/perfect-scrollbar/blob/master/src/js/plugin/update.js#L9
 * @param {!HTMLElement} element
 * @return {void}
 */
PerfectScrollbar.prototype.update = function(element) {};

/**
 * @see https://github.com/noraesae/perfect-scrollbar/blob/master/src/js/plugin/destroy.js#L7
 * @param {!HTMLElement} element
 * @return {void}
 */
PerfectScrollbar.prototype.destroy = function(element) {};
 /** @type {!PerfectScrollbar} */
var Ps;
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "perfect-scrollbar"
/** @const */
tsickle_declare_module.perfect_scrollbar = {};

/* TODO: ExportAssignment in tsickle_declare_module.perfect_scrollbar */

/**
 * @see https://github.com/noraesae/perfect-scrollbar/blob/master/src/js/adaptor/jquery.js#L6
 * @param {(!PerfectScrollbarSettings|string)=} settingOrCommand
 * @return {?<!HTMLElement>}
 */
JQuery.prototype.perfectScrollbar = function(settingOrCommand) {};
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "perfect-scrollbar/jquery"
/** @const */
tsickle_declare_module.perfect_scrollbar_jquery = {};

/**
 * @param {!JQueryStatic<!HTMLElement>} jQuery
 * @return {void}
 */
tsickle_declare_module.perfect_scrollbar_jquery.mountJQuery = function(jQuery) {};

/* TODO: ExportAssignment in tsickle_declare_module.perfect_scrollbar_jquery */