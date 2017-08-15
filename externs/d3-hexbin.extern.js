/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/d3-hexbin/index.d.ts:
/**
 * @record
 * @struct
 */
function HexbinBin() {}
 /** @type {number} */
HexbinBin.prototype.x;
 /** @type {number} */
HexbinBin.prototype.y;
/**
 * @record
 * @struct
 */
function Hexbin() {}

/* TODO: CallSignature:  */

/**
 * Returns the SVG path string for the hexagon centered at the origin ⟨0,0⟩.
 * The path string is defined with relative coordinates such that you can
 * easily translate the hexagon to the desired position.
 * If radius is not specified, the hexbin’s current radius is used.
 * If radius is specified, a hexagon with the specified radius is returned;
 * this is useful for area-encoded bivariate hexbins.
 * 
 * @param {number=} radius
 * @return {string}
 */
Hexbin.prototype.hexagon = function(radius) {};

/**
 * Returns an array of [x, y] points representing the centers of every
 * hexagon in the extent.
 * @return {!Array<!Array<?>>}
 */
Hexbin.prototype.centers = function() {};

/**
 * Returns an SVG path string representing the hexagonal mesh that covers
 * the extent; the returned path is intended to be stroked.
 * The mesh may extend slightly beyond the extent and may need to be clipped.
 * @return {string}
 */
Hexbin.prototype.mesh = function() {};

/**
 * If x is specified, sets the x-coordinate accessor to the specified
 * function and returns this hexbin generator.
 * 
 * The x-coordinate accessor is used by hexbin to compute the x-coordinate
 * of each point. The default value assumes each point is specified as
 * a two-element array of numbers [x, y].
 * If x is not specified, returns the current x-coordinate accessor,
 * 
 * which defaults to:
 * 
 *   function x(d) {
 *     return d[0];
 *   }
 * 
 * The x-coordinate accessor is used by hexbin to compute the x-coordinate
 * of each point. The default value assumes each point is specified as
 * a two-element array of numbers [x, y].
 * 
 * @param {?=} x
 * @return {?}
 */
Hexbin.prototype.x = function(x) {};

/**
 * If y is specified, sets the y-coordinate accessor to the specified
 * function and returns this hexbin generator.
 * 
 * The y-coordinate accessor is used by hexbin to compute the y-coordinate
 * of each point. The default value assumes each point is specified as
 * a two-element array of numbers [x, y].
 * If y is not specified, returns the current y-coordinate accessor,
 * 
 * which defaults to:
 * 
 *   function y(d) {
 *     return d[1];
 *   }
 * 
 * The y-coordinate accessor is used by hexbin to compute the y-coordinate
 * of each point. The default value assumes each point is specified as
 * a two-element array of numbers [x, y].
 * @param {?=} y
 * @return {?}
 */
Hexbin.prototype.y = function(y) {};

/**
 * If radius is specified, sets the radius of the hexagon to
 * the specified number.
 * 
 * The hexagons are pointy-topped (rather than flat-topped);
 * the width of each hexagon is radius × 2 × sin(π / 3)
 * and the height of each hexagon radius × 3 / 2.
 * If radius is not specified, returns the current radius,
 * which defaults to 1.
 * 
 * The hexagons are pointy-topped (rather than flat-topped);
 * the width of each hexagon is radius × 2 × sin(π / 3)
 * and the height of each hexagon radius × 3 / 2.
 * @param {number=} radius
 * @return {?|number}
 */
Hexbin.prototype.radius = function(radius) {};

/**
 * If extent is specified, sets the hexbin generator’s extent to the
 * specified bounds [[x0, y0], [x1, y1]] and returns the hexbin generator.
 * If extent is not specified, returns the generator’s current
 * extent [[x0, y0], [x1, y1]], where x0 and y0 are the lower bounds and
 * x1 and y1 are the upper bounds.
 * 
 * The extent defaults to [[0, 0], [1, 1]].
 * @param {!Array<?>=} extent
 * @return {?|!Array<?>}
 */
Hexbin.prototype.extent = function(extent) {};

/**
 * Constructs a new default hexbin generator.
 * @template T
 * @return {?}
 */
function hexbin() {}
