/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/d3-path/index.d.ts:
/**
 * @record
 * @struct
 */
function Path() {}

/**
 * Move to the specified point ⟨x, y⟩. Equivalent to context.moveTo and SVG’s “moveto” command.
 * 
 * @param {number} x x-Coordinate of point to move to
 * @param {number} y y-Coordinate of point to move to
 * @return {void}
 */
Path.prototype.moveTo = function(x, y) {};

/**
 * Ends the current subpath and causes an automatic straight line to be drawn from the current point to the initial point of the current subpath.
 * Equivalent to context.closePath and SVG’s “closepath” command.
 * @return {void}
 */
Path.prototype.closePath = function() {};

/**
 * Draws a straight line from the current point to the specified point ⟨x, y⟩.
 * Equivalent to context.lineTo and SVG’s “lineto” command.
 * 
 * @param {number} x x-Coordinate of point to draw the line to
 * @param {number} y y-Coordinate of point to draw the line to
 * @return {void}
 */
Path.prototype.lineTo = function(x, y) {};

/**
 * Draws a quadratic Bézier segment from the current point to the specified point ⟨x, y⟩, with the specified control point ⟨cpx, cpy⟩.
 * Equivalent to context.quadraticCurveTo and SVG’s quadratic Bézier curve commands.
 * 
 * @param {number} cpx x-Coordinate of the control point for the quadratic Bézier curve
 * @param {number} cpy y-Coordinate of the control point for the quadratic Bézier curve
 * @param {number} x x-Coordinate of point to draw the curve to
 * @param {number} y y-Coordinate of point to draw the curve to
 * @return {void}
 */
Path.prototype.quadraticCurveTo = function(cpx, cpy, x, y) {};

/**
 * Draws a cubic Bézier segment from the current point to the specified point ⟨x, y⟩, with the specified control points ⟨cpx1, cpy1⟩ and ⟨cpx2, cpy2⟩.
 * Equivalent to context.bezierCurveTo and SVG’s cubic Bézier curve commands.
 * 
 * @param {number} cpx1 x-Coordinate of the first control point for the Bézier curve
 * @param {number} cpy1 y-Coordinate of the first control point for the Bézier curve
 * @param {number} cpx2 x-Coordinate of the second control point for the Bézier curve
 * @param {number} cpy2 y-Coordinate of the second control point for the Bézier curve
 * @param {number} x x-Coordinate of point to draw the curve to
 * @param {number} y y-Coordinate of point to draw the curve to
 * @return {void}
 */
Path.prototype.bezierCurveTo = function(cpx1, cpy1, cpx2, cpy2, x, y) {};

/**
 * Draws a circular arc segment with the specified radius that starts tangent to the line between the current point and the specified point ⟨x1, y1⟩
 * and ends tangent to the line between the specified points ⟨x1, y1⟩ and ⟨x2, y2⟩. If the first tangent point is not equal to the current point,
 * a straight line is drawn between the current point and the first tangent point. Equivalent to context.arcTo and uses SVG’s elliptical arc curve commands.
 * 
 * @param {number} x1 x-Coordinate of the first tangent point
 * @param {number} y1 y-Coordinate of the first tangent point
 * @param {number} x2 x-Coordinate of the second tangent point
 * @param {number} y2 y-Coordinate of the second tangent point
 * @param {number} radius
 * @return {void}
 */
Path.prototype.arcTo = function(x1, y1, x2, y2, radius) {};

/**
 * Draws a circular arc segment with the specified center ⟨x, y⟩, radius, startAngle and endAngle. If anticlockwise is true,
 * the arc is drawn in the anticlockwise direction; otherwise, it is drawn in the clockwise direction.
 * If the current point is not equal to the starting point of the arc, a straight line is drawn from the current point to the start of the arc.
 * Equivalent to context.arc and uses SVG’s elliptical arc curve commands.
 * 
 * @param {number} x x-Coordinate of the center point of the arc segment
 * @param {number} y y-Coordinate of the center point of the arc segment
 * @param {number} radius
 * @param {number} startAngle Start angle of arc segment
 * @param {number} endAngle End angle of arc segment
 * @param {boolean=} anticlockwise Flag indicating directionality (true = anti-clockwise, false = clockwise)
 * @return {void}
 */
Path.prototype.arc = function(x, y, radius, startAngle, endAngle, anticlockwise) {};

/**
 * Creates a new subpath containing just the four points ⟨x, y⟩, ⟨x + w, y⟩, ⟨x + w, y + h⟩, ⟨x, y + h⟩,
 * with those four points connected by straight lines, and then marks the subpath as closed. Equivalent to context.rect and uses SVG’s “lineto” commands.
 * 
 * @param {number} x x-Coordinate of starting point for drawing the rectangle
 * @param {number} y y-Coordinate of starting point for drawing the rectangle
 * @param {number} w Width of rectangle
 * @param {number} h Height of rectangle
 * @return {void}
 */
Path.prototype.rect = function(x, y, w, h) {};

/**
 * Returns the string representation of this path according to SVG’s path data specficiation.
 * @return {string}
 */
Path.prototype.toString = function() {};

/**
 * Construct a D3 Path serializer
 * @return {?}
 */
function path() {}