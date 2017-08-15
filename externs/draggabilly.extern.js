/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/draggabilly/index.d.ts:
/**
 * @record
 * @struct
 */
function Position() {}
 /** @type {number} */
Position.prototype.x;
 /** @type {number} */
Position.prototype.y;
/**
 * @record
 * @struct
 */
function DraggabillyOptions() {}
 /** @type {string} */
DraggabillyOptions.prototype.axis;
 /** @type {(string|boolean|!Element)} */
DraggabillyOptions.prototype.containment;
 /** @type {!Array<?>} */
DraggabillyOptions.prototype.grid;
 /** @type {string} */
DraggabillyOptions.prototype.handle;

/** @typedef {string} */
var DraggabillyClickEventName;

/** @typedef {string} */
var DraggabillyMoveEventName;

/**
 * @constructor
 * @struct
 * @param {(string|!Element)} element
 * @param {?=} options
 */
function Draggabilly(element, options) {}
 /** @type {?} */
Draggabilly.prototype.position;

/**
 * @param {string} eventName
 * @param {?} listener
 * @return {?}
 */
Draggabilly.prototype.on = function(eventName, listener) {};

/**
 * @param {string} eventName
 * @param {?} listener
 * @return {?}
 */
Draggabilly.prototype.off = function(eventName, listener) {};

/**
 * @param {string} eventName
 * @param {?} listener
 * @return {?}
 */
Draggabilly.prototype.once = function(eventName, listener) {};

/**
 * @return {void}
 */
Draggabilly.prototype.enable = function() {};

/**
 * @return {void}
 */
Draggabilly.prototype.disable = function() {};

/**
 * @return {void}
 */
Draggabilly.prototype.destroy = function() {};