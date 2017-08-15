/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/d3-axis/index.d.ts:

/* TODO: ImportDeclaration in  */
/**
 * @record
 * @struct
 */
function AxisTimeInterval() {}

/**
 * @param {!Date} start
 * @param {!Date} stop
 * @param {number=} step
 * @return {!Array<!Date>}
 */
AxisTimeInterval.prototype.range = function(start, stop, step) {};
/**
 * @record
 * @struct
 */
function AxisScale() {}

/* TODO: CallSignature:  */

/**
 * @return {!Array<?>}
 */
AxisScale.prototype.domain = function() {};

/**
 * @return {!Array<number>}
 */
AxisScale.prototype.range = function() {};

/**
 * @return {?}
 */
AxisScale.prototype.copy = function() {};

/**
 * @return {number}
 */
AxisScale.prototype.bandwidth = function() {};

/** @typedef {(!SVGSVGElement|!SVGGElement)} */
var AxisContainerElement;
/**
 * @record
 * @struct
 */
function Axis() {}

/* TODO: CallSignature:  */

/* TODO: CallSignature:  */

/**
 * Gets the current scale underlying the axis.
 * Sets the scale and returns the axis.
 * 
 * @template A
 * @param {?=} scale  The scale to be used for axis generation
 * @return {?}
 */
Axis.prototype.scale = function(scale) {};

/**
 * Sets the arguments that will be passed to scale.ticks and scale.tickFormat when the axis is rendered, and returns the axis generator.
 * 
 * This method has no effect if the scale does not implement scale.ticks, as with band and point scales.
 * 
 * This method is also a convenience function for axis.tickArguments.
 * 
 * Sets the arguments that will be passed to scale.ticks and scale.tickFormat when the axis is rendered, and returns the axis generator.
 * Use with a TIME SCALE ONLY.
 * 
 * This method is also a convenience function for axis.tickArguments.
 * 
 * Sets the arguments that will be passed to scale.ticks and scale.tickFormat when the axis is rendered, and returns the axis generator.
 * 
 * The meaning of the arguments depends on the axis’ scale type: most commonly, the arguments are a suggested count for the number of ticks
 * (or a time interval for time scales), and an optional format specifier to customize how the tick values are formatted.
 * 
 * This method has no effect if the scale does not implement scale.ticks, as with band and point scales.
 * 
 * To set the tick values explicitly, use axis.tickValues. To set the tick format explicitly, use axis.tickFormat.
 * 
 * This method is also a convenience function for axis.tickArguments.
 * @param {number|?} count_or_interval_or_arg0 Number of ticks that should be rendered / A time interval used to generate date-based ticks. This is typically a TimeInterval/CountableTimeInterval as defined
 * in d3-time. E.g. as obtained by passing in d3.timeMinute.every(15).
 * @param {...string|?=} specifier_or_args An optional format specifier to customize how the tick values are formatted.
 * @return {?}
 */
Axis.prototype.ticks = function(count_or_interval_or_arg0, specifier_or_args) {};

/**
 * Get an array containing the currently set arguments to be passed into scale.ticks and scale.tickFormat, which defaults to the empty array.
 * Sets the arguments that will be passed to scale.ticks and scale.tickFormat when the axis is rendered, and returns the axis generator.
 * 
 * This method has no effect if the scale does not implement scale.ticks, as with band and point scales.
 * To set the tick values explicitly, use axis.tickValues. To set the tick format explicitly, use axis.tickFormat.
 * 
 * See also axis.ticks.
 * 
 * Sets the arguments that will be passed to scale.ticks and scale.tickFormat when the axis is rendered, and returns the axis generator.
 * 
 * This method has no effect if the scale does not implement scale.ticks, as with band and point scales.
 * To set the tick values explicitly, use axis.tickValues. To set the tick format explicitly, use axis.tickFormat.
 * 
 * See also axis.ticks.
 * 
 * Sets the arguments that will be passed to scale.ticks and scale.tickFormat when the axis is rendered, and returns the axis generator.
 * Use with a TIME SCALE ONLY.
 * 
 * See also axis.ticks.
 * 
 * Sets the arguments that will be passed to scale.ticks and scale.tickFormat when the axis is rendered, and returns the axis generator.
 * Use with a TIME SCALE ONLY.
 * 
 * See also axis.ticks.
 * 
 * Sets the arguments that will be passed to scale.ticks and scale.tickFormat when the axis is rendered, and returns the axis generator.
 * 
 * This method has no effect if the scale does not implement scale.ticks, as with band and point scales.
 * To set the tick values explicitly, use axis.tickValues. To set the tick format explicitly, use axis.tickFormat.
 * 
 * See also axis.ticks.
 * 
 * @param {!Array<?>=} args An array containing a single element representing the count, i.e. number of ticks to be rendered. / An array containing two elements. The first element represents the count, i.e. number of ticks to be rendered. The second
 * element is a string representing the format specifier to customize how the tick values are formatted. / An array containing a single element representing a time interval used to generate date-based ticks.
 * This is typically a TimeInterval/CountableTimeInterval as defined in d3-time. E.g. as obtained by passing in d3.timeMinute.every(15). / An array containing two elements. The first element represents a time interval used to generate date-based ticks.
 * This is typically a TimeInterval/CountableTimeInterval as defined in d3-time. E.g. as obtained by passing in d3.timeMinute.every(15).
 * The second element is a string representing the format specifier to customize how the tick values are formatted. / An array with arguments suitable for the scale to be used for tick generation
 * @return {!Array<?>|?}
 */
Axis.prototype.tickArguments = function(args) {};

/**
 * Returns the current tick values, which defaults to null.
 * Specified values to be used for ticks rather than using the scale’s automatic tick generator.
 * The explicit tick values take precedent over the tick arguments set by axis.tickArguments.
 * However, any tick arguments will still be passed to the scale’s tickFormat function if a
 * tick format is not also set.
 * 
 * Clears any previously-set explicit tick values and reverts back to the scale’s tick generator.
 * 
 * @param {!Array<?>|null=} values An array with values from the Domain of the scale underlying the axis. / null
 * @return {!Array<?>|?}
 */
Axis.prototype.tickValues = function(values) {};

/**
 * Returns the currently set tick format function, which defaults to null.
 *  Sets the tick format function and returns the axis.
 * 
 * Reset the tick format function. A null format indicates that the scale’s
 * default formatter should be used, which is generated by calling scale.tickFormat.
 * In this case, the arguments specified by axis.tickArguments
 * are likewise passed to scale.tickFormat.
 * 
 * @param {?|null=} format A function mapping a value from the axis Domain to a formatted string
 * for display purposes. When invoked, the format function is also passed a second argument representing the zero-based index
 * of the tick label in the array of generated tick labels. / null
 * @return {?}
 */
Axis.prototype.tickFormat = function(format) {};

/**
 * Get the current inner tick size, which defaults to 6.
 * Set the inner and outer tick size to the specified value and return the axis.
 * 
 * @param {number=} size Tick size in pixels (Default is 6).
 * @return {number|?}
 */
Axis.prototype.tickSize = function(size) {};

/**
 * Get the current inner tick size, which defaults to 6.
 * The inner tick size controls the length of the tick lines,
 * offset from the native position of the axis.
 * Set the inner tick size to the specified value and return the axis.
 * The inner tick size controls the length of the tick lines,
 * offset from the native position of the axis.
 * 
 * @param {number=} size Tick size in pixels (Default is 6).
 * @return {number|?}
 */
Axis.prototype.tickSizeInner = function(size) {};

/**
 * Get the current outer tick size, which defaults to 6.
 * The outer tick size controls the length of the square ends of the domain path,
 * offset from the native position of the axis. Thus, the “outer ticks” are not actually
 * ticks but part of the domain path, and their position is determined by the associated
 * scale’s domain extent. Thus, outer ticks may overlap with the first or last inner tick.
 * An outer tick size of 0 suppresses the square ends of the domain path,
 * instead producing a straight line.
 * Set the current outer tick size and return the axis.
 * The outer tick size controls the length of the square ends of the domain path,
 * offset from the native position of the axis. Thus, the “outer ticks” are not actually
 * ticks but part of the domain path, and their position is determined by the associated
 * scale’s domain extent. Thus, outer ticks may overlap with the first or last inner tick.
 * An outer tick size of 0 suppresses the square ends of the domain path,
 * instead producing a straight line.
 * 
 * @param {number=} size Tick size in pixels (Default is 6).
 * @return {number|?}
 */
Axis.prototype.tickSizeOuter = function(size) {};

/**
 * Get the current padding, which defaults to 3.
 * Set the current padding and return the axis.
 * 
 * @param {number=} padding Padding in pixels  (Default is 3).
 * @return {number|?}
 */
Axis.prototype.tickPadding = function(padding) {};

/**
 * Constructs a new top-oriented axis generator for the given scale, with empty tick arguments,
 * a tick size of 6 and padding of 3. In this orientation, ticks are drawn above the horizontal domain path.
 * 
 * @template Domain
 * @param {?} scale The scale to be used for axis generation
 * @return {?}
 */
function axisTop(scale) {}

/**
 * Constructs a new right-oriented axis generator for the given scale, with empty tick arguments,
 * a tick size of 6 and padding of 3. In this orientation, ticks are drawn to the right of the vertical domain path.
 * 
 * @template Domain
 * @param {?} scale The scale to be used for axis generation
 * @return {?}
 */
function axisRight(scale) {}

/**
 * Constructs a new bottom-oriented axis generator for the given scale, with empty tick arguments,
 * a tick size of 6 and padding of 3. In this orientation, ticks are drawn below the horizontal domain path.
 * 
 * @template Domain
 * @param {?} scale The scale to be used for axis generation
 * @return {?}
 */
function axisBottom(scale) {}

/**
 * Constructs a new left-oriented axis generator for the given scale, with empty tick arguments,
 * a tick size of 6 and padding of 3. In this orientation, ticks are drawn to the left of the vertical domain path.
 * 
 * @template Domain
 * @param {?} scale The scale to be used for axis generation
 * @return {?}
 */
function axisLeft(scale) {}