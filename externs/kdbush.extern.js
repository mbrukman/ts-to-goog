/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/kdbush/index.d.ts:

/** @typedef {!Array<!Array<number>>} */
var Points;

/** @typedef {?} */
var Get;

/** @typedef {(!Int32ArrayConstructor|!ArrayConstructor)} */
var ArrayType;

/**
 * @template T
 * @param {!Array<!Array<number>>|!Array<T>} points
 * @param {?=} getX
 * @param {?=} getY
 * @param {number=} nodeSize
 * @param {(!Int32ArrayConstructor|!ArrayConstructor)=} ArrayType
 * @return {!kdbush.KDBush<!Array<!Array<number>>>|!kdbush.KDBush<T>}
 */
function kdbush(points, getX, getY, nodeSize, ArrayType) {}
/**
 * @constructor
 * @struct
 */
kdbush.KDBush = function() {};
 /** @type {!Array<number>} */
kdbush.KDBush.prototype.ids;
 /** @type {!Array<number>} */
kdbush.KDBush.prototype.coords;
 /** @type {number} */
kdbush.KDBush.prototype.nodeSize;
 /** @type {!Array<T>} */
kdbush.KDBush.prototype.points;

/**
 * @param {number} minX
 * @param {number} minY
 * @param {number} maxX
 * @param {number} maxY
 * @return {!Array<number>}
 */
kdbush.KDBush.prototype.range = function(minX, minY, maxX, maxY) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} r
 * @return {!Array<number>}
 */
kdbush.KDBush.prototype.within = function(x, y, r) {};

/* TODO: ExportAssignment in  */