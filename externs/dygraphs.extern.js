/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/dygraphs/index.d.ts:
/** @const */
var dygraphs = {};

/** @typedef {!Array<!Array<number>>} */
dygraphs.DataArray;

/** @typedef {(string|!Array<!Array<number>>|!google.visualization.DataTable)} */
dygraphs.Data;
/**
 * @record
 * @struct
 */
dygraphs.PerSeriesOptions = function() {};
 /** @type {string} */
dygraphs.PerSeriesOptions.prototype.axis;
 /** @type {string} */
dygraphs.PerSeriesOptions.prototype.color;
 /** @type {boolean} */
dygraphs.PerSeriesOptions.prototype.drawPoints;
 /** @type {number} */
dygraphs.PerSeriesOptions.prototype.fillAlpha;
 /** @type {boolean} */
dygraphs.PerSeriesOptions.prototype.fillGraph;
 /** @type {number} */
dygraphs.PerSeriesOptions.prototype.highlightCircleSize;
 /** @type {number} */
dygraphs.PerSeriesOptions.prototype.pointSize;
 /** @type {boolean} */
dygraphs.PerSeriesOptions.prototype.showInRangeSelector;
 /** @type {boolean} */
dygraphs.PerSeriesOptions.prototype.stepPlot;
 /** @type {number} */
dygraphs.PerSeriesOptions.prototype.strokeBorderWidth;
 /** @type {string} */
dygraphs.PerSeriesOptions.prototype.strokeBorderColor;
 /** @type {!Array<number>} */
dygraphs.PerSeriesOptions.prototype.strokePattern;
 /** @type {number} */
dygraphs.PerSeriesOptions.prototype.strokeWidth;
/**
 * @record
 * @struct
 */
dygraphs.PerAxisOptions = function() {};
 /** @type {string} */
dygraphs.PerAxisOptions.prototype.axisLabelColor;
 /** @type {number} */
dygraphs.PerAxisOptions.prototype.axisLabelFontSize;
 /** @type {function((number|!Date), number, function(string): ?, !Dygraph): ?} */
dygraphs.PerAxisOptions.prototype.axisLabelFormatter;
 /** @type {number} */
dygraphs.PerAxisOptions.prototype.axisLabelWidth;
 /** @type {string} */
dygraphs.PerAxisOptions.prototype.axisLineColor;
 /** @type {number} */
dygraphs.PerAxisOptions.prototype.axisLineWidth;
 /** @type {number} */
dygraphs.PerAxisOptions.prototype.axisTickSize;
 /** @type {boolean} */
dygraphs.PerAxisOptions.prototype.drawAxis;
 /** @type {string} */
dygraphs.PerAxisOptions.prototype.gridLineColor;
 /** @type {!Array<number>} */
dygraphs.PerAxisOptions.prototype.gridLinePattern;
 /** @type {number} */
dygraphs.PerAxisOptions.prototype.gridLineWidth;
 /** @type {boolean} */
dygraphs.PerAxisOptions.prototype.independentTicks;
 /** @type {boolean} */
dygraphs.PerAxisOptions.prototype.logscale;
 /** @type {number} */
dygraphs.PerAxisOptions.prototype.maxNumberWidth;
 /** @type {number} */
dygraphs.PerAxisOptions.prototype.pixelsPerLabel;
 /** @type {number} */
dygraphs.PerAxisOptions.prototype.sigFigs;
 /** @type {function(number, number, number, function(string): ?, !Dygraph, !Array<number>): !Array<{v: number, label: string}>} */
dygraphs.PerAxisOptions.prototype.ticker;
 /** @type {function(number, function(string): ?, string, !Dygraph, number, number): ?} */
dygraphs.PerAxisOptions.prototype.valueFormatter;
 /** @type {!Array<number>} */
dygraphs.PerAxisOptions.prototype.valueRange;
 /** @type {boolean} */
dygraphs.PerAxisOptions.prototype.drawGrid;
 /** @type {boolean} */
dygraphs.PerAxisOptions.prototype.labelsKMB;
 /** @type {boolean} */
dygraphs.PerAxisOptions.prototype.labelsKMG2;
/**
 * @record
 * @struct
 */
dygraphs.SeriesLegendData = function() {};
 /** @type {string} */
dygraphs.SeriesLegendData.prototype.color;
 /** @type {string} */
dygraphs.SeriesLegendData.prototype.dashHTML;
 /** @type {boolean} */
dygraphs.SeriesLegendData.prototype.isHighlighted;
 /** @type {boolean} */
dygraphs.SeriesLegendData.prototype.isVisible;
 /** @type {string} */
dygraphs.SeriesLegendData.prototype.label;
 /** @type {string} */
dygraphs.SeriesLegendData.prototype.labelHTML;
 /** @type {number} */
dygraphs.SeriesLegendData.prototype.y;
 /** @type {string} */
dygraphs.SeriesLegendData.prototype.yHTML;
/**
 * @record
 * @struct
 */
dygraphs.LegendData = function() {};
 /** @type {number} */
dygraphs.LegendData.prototype.x;
 /** @type {string} */
dygraphs.LegendData.prototype.xHTML;
 /** @type {!Array<!dygraphs.SeriesLegendData>} */
dygraphs.LegendData.prototype.series;
 /** @type {!Dygraph} */
dygraphs.LegendData.prototype.dygraph;
/**
 * @extends {dygraphs.PerSeriesOptions}
 * @extends {dygraphs.PerAxisOptions}
 * @record
 * @struct
 */
dygraphs.Options = function() {};
 /** @type {boolean} */
dygraphs.Options.prototype.animatedZooms;
 /** @type {function(!dygraphs.Annotation, !dygraphs.Point, !Dygraph, !MouseEvent): ?} */
dygraphs.Options.prototype.annotationClickHandler;
 /** @type {function(!dygraphs.Annotation, !dygraphs.Point, !Dygraph, !MouseEvent): ?} */
dygraphs.Options.prototype.annotationDblClickHandler;
 /** @type {function(!dygraphs.Annotation, !dygraphs.Point, !Dygraph, !MouseEvent): ?} */
dygraphs.Options.prototype.annotationMouseOutHandler;
 /** @type {function(!dygraphs.Annotation, !dygraphs.Point, !Dygraph, !MouseEvent): ?} */
dygraphs.Options.prototype.annotationMouseOverHandler;
 /** @type {{x: !dygraphs.PerAxisOptions, y: !dygraphs.PerAxisOptions, y2: !dygraphs.PerAxisOptions}} */
dygraphs.Options.prototype.axes;
 /** @type {function(!MouseEvent, number, !Array<!dygraphs.Point>): ?} */
dygraphs.Options.prototype.clickCallback;
 /** @type {number} */
dygraphs.Options.prototype.colorSaturation;
 /** @type {number} */
dygraphs.Options.prototype.colorValue;
 /** @type {!Array<string>} */
dygraphs.Options.prototype.colors;
 /** @type {boolean} */
dygraphs.Options.prototype.connectSeparatedPoints;
 /** @type {boolean} */
dygraphs.Options.prototype.customBars;
 /** @type {?} */
dygraphs.Options.prototype.dataHandler;
 /** @type {!Array<number>} */
dygraphs.Options.prototype.dateWindow;
 /** @type {string} */
dygraphs.Options.prototype.delimiter;
 /** @type {number} */
dygraphs.Options.prototype.digitsAfterDecimal;
 /** @type {boolean} */
dygraphs.Options.prototype.displayAnnotations;
 /** @type {boolean} */
dygraphs.Options.prototype.drawAxesAtZero;
 /** @type {function(!Dygraph, boolean): ?} */
dygraphs.Options.prototype.drawCallback;
 /** @type {boolean} */
dygraphs.Options.prototype.drawGapEdgePoints;
 /** @type {function(!Dygraph, string, !CanvasRenderingContext2D, number, number, string, number): ?} */
dygraphs.Options.prototype.drawHighlightPointCallback;
 /** @type {function(!Dygraph, string, !CanvasRenderingContext2D, number, number, string, number): ?} */
dygraphs.Options.prototype.drawPointCallback;
 /** @type {boolean} */
dygraphs.Options.prototype.errorBars;
 /** @type {(string|!Array<!Array<number>>|!google.visualization.DataTable)} */
dygraphs.Options.prototype.file;
 /** @type {boolean} */
dygraphs.Options.prototype.fractions;
 /** @type {number} */
dygraphs.Options.prototype.height;
 /** @type {boolean} */
dygraphs.Options.prototype.hideOverlayOnMouseOut;
 /** @type {function(!MouseEvent, number, !Array<!dygraphs.Point>, number, string): ?} */
dygraphs.Options.prototype.highlightCallback;
 /** @type {number} */
dygraphs.Options.prototype.highlightSeriesBackgroundAlpha;
 /** @type {!dygraphs.PerSeriesOptions} */
dygraphs.Options.prototype.highlightSeriesOpts;
 /** @type {boolean} */
dygraphs.Options.prototype.includeZero;
 /** @type {?} */
dygraphs.Options.prototype.interactionModel;
 /** @type {boolean} */
dygraphs.Options.prototype.isZoomedIgnoreProgrammaticZoom;
 /** @type {!Array<string>} */
dygraphs.Options.prototype.labels;
 /** @type {(string|!HTMLElement)} */
dygraphs.Options.prototype.labelsDiv;
 /** @type {!Object<string,string>} */
dygraphs.Options.prototype.labelsDivStyles;
 /** @type {number} */
dygraphs.Options.prototype.labelsDivWidth;
 /** @type {boolean} */
dygraphs.Options.prototype.labelsSeparateLines;
 /** @type {boolean} */
dygraphs.Options.prototype.labelsShowZeroValues;
 /** @type {boolean} */
dygraphs.Options.prototype.labelsUTC;
 /** @type {string} */
dygraphs.Options.prototype.legend;
 /** @type {function(!dygraphs.LegendData): string} */
dygraphs.Options.prototype.legendFormatter;
 /** @type {number} */
dygraphs.Options.prototype.panEdgeFraction;
 /** @type {?} */
dygraphs.Options.prototype.plotter;
 /** @type {!Array<?>} */
dygraphs.Options.prototype.plugins;
 /** @type {function(!MouseEvent, !dygraphs.Point): ?} */
dygraphs.Options.prototype.pointClickCallback;
 /** @type {number} */
dygraphs.Options.prototype.rangeSelectorHeight;
 /** @type {string} */
dygraphs.Options.prototype.rangeSelectorPlotFillColor;
 /** @type {string} */
dygraphs.Options.prototype.rangeSelectorPlotStrokeColor;
 /** @type {number} */
dygraphs.Options.prototype.rightGap;
 /** @type {number} */
dygraphs.Options.prototype.rollPeriod;
 /** @type {!Object<string,!dygraphs.PerSeriesOptions>} */
dygraphs.Options.prototype.series;
 /** @type {boolean} */
dygraphs.Options.prototype.showLabelsOnHighlight;
 /** @type {boolean} */
dygraphs.Options.prototype.showRangeSelector;
 /** @type {boolean} */
dygraphs.Options.prototype.showRoller;
 /** @type {number} */
dygraphs.Options.prototype.sigma;
 /** @type {boolean} */
dygraphs.Options.prototype.stackedGraph;
 /** @type {string} */
dygraphs.Options.prototype.stackedGraphNaNFill;
 /** @type {string} */
dygraphs.Options.prototype.title;
 /** @type {number} */
dygraphs.Options.prototype.titleHeight;
 /** @type {function(!CanvasRenderingContext2D, !dygraphs.Area, !Dygraph): ?} */
dygraphs.Options.prototype.underlayCallback;
 /** @type {function(!MouseEvent): ?} */
dygraphs.Options.prototype.unhighlightCallback;
 /** @type {!Array<boolean>} */
dygraphs.Options.prototype.visibility;
 /** @type {number} */
dygraphs.Options.prototype.width;
 /** @type {boolean} */
dygraphs.Options.prototype.wilsonInterval;
 /** @type {number} */
dygraphs.Options.prototype.xAxisHeight;
 /** @type {number} */
dygraphs.Options.prototype.xLabelHeight;
 /** @type {number} */
dygraphs.Options.prototype.xRangePad;
 /** @type {function(string): number} */
dygraphs.Options.prototype.xValueParser;
 /** @type {string} */
dygraphs.Options.prototype.xlabel;
 /** @type {string} */
dygraphs.Options.prototype.y2label;
 /** @type {number} */
dygraphs.Options.prototype.yLabelWidth;
 /** @type {number} */
dygraphs.Options.prototype.yRangePad;
 /** @type {string} */
dygraphs.Options.prototype.ylabel;
 /** @type {function(number, number, !Array<!Array<?>>): ?} */
dygraphs.Options.prototype.zoomCallback;
/**
 * @record
 * @struct
 */
dygraphs.SeriesProperties = function() {};
 /** @type {string} */
dygraphs.SeriesProperties.prototype.name;
 /** @type {number} */
dygraphs.SeriesProperties.prototype.column;
 /** @type {boolean} */
dygraphs.SeriesProperties.prototype.visible;
 /** @type {string} */
dygraphs.SeriesProperties.prototype.color;
 /** @type {number} */
dygraphs.SeriesProperties.prototype.axis;
/**
 * @record
 * @struct
 */
dygraphs.Area = function() {};
 /** @type {number} */
dygraphs.Area.prototype.x;
 /** @type {number} */
dygraphs.Area.prototype.y;
 /** @type {number} */
dygraphs.Area.prototype.w;
 /** @type {number} */
dygraphs.Area.prototype.h;
/**
 * @record
 * @struct
 */
dygraphs.Point = function() {};
 /** @type {number} */
dygraphs.Point.prototype.idx;
 /** @type {string} */
dygraphs.Point.prototype.name;
 /** @type {number} */
dygraphs.Point.prototype.x;
 /** @type {number} */
dygraphs.Point.prototype.xval;
 /** @type {number} */
dygraphs.Point.prototype.y_bottom;
 /** @type {number} */
dygraphs.Point.prototype.y;
 /** @type {number} */
dygraphs.Point.prototype.y_stacked;
 /** @type {number} */
dygraphs.Point.prototype.y_top;
 /** @type {number} */
dygraphs.Point.prototype.yval_minus;
 /** @type {number} */
dygraphs.Point.prototype.yval;
 /** @type {number} */
dygraphs.Point.prototype.yval_plus;
 /** @type {number} */
dygraphs.Point.prototype.yval_stacked;
 /** @type {!dygraphs.Annotation} */
dygraphs.Point.prototype.annotation;
/**
 * @record
 * @struct
 */
dygraphs.Annotation = function() {};
 /** @type {string} */
dygraphs.Annotation.prototype.series;
 /** @type {(string|number)} */
dygraphs.Annotation.prototype.x;
 /** @type {number} */
dygraphs.Annotation.prototype.xval;
 /** @type {string} */
dygraphs.Annotation.prototype.shortText;
 /** @type {string} */
dygraphs.Annotation.prototype.text;
 /** @type {string} */
dygraphs.Annotation.prototype.icon;
 /** @type {number} */
dygraphs.Annotation.prototype.width;
 /** @type {number} */
dygraphs.Annotation.prototype.height;
 /** @type {string} */
dygraphs.Annotation.prototype.cssClass;
 /** @type {number} */
dygraphs.Annotation.prototype.tickHeight;
 /** @type {boolean} */
dygraphs.Annotation.prototype.attachAtBottom;
 /** @type {!HTMLDivElement} */
dygraphs.Annotation.prototype.div;
 /** @type {function(!dygraphs.Annotation, !dygraphs.Point, !Dygraph, !MouseEvent): ?} */
dygraphs.Annotation.prototype.clickHandler;
 /** @type {function(!dygraphs.Annotation, !dygraphs.Point, !Dygraph, !MouseEvent): ?} */
dygraphs.Annotation.prototype.mouseOverHandler;
 /** @type {function(!dygraphs.Annotation, !dygraphs.Point, !Dygraph, !MouseEvent): ?} */
dygraphs.Annotation.prototype.mouseOutHandler;
 /** @type {function(!dygraphs.Annotation, !dygraphs.Point, !Dygraph, !MouseEvent): ?} */
dygraphs.Annotation.prototype.dblClickHandler;

/** @typedef {string} */
dygraphs.Axis;

/**
 * @constructor
 * @struct
 * @param {(string|!HTMLElement)} container
 * @param {(string|!Array<!Array<number>>|!google.visualization.DataTable|function(): (string|!Array<!Array<number>>|!google.visualization.DataTable))} data
 * @param {!dygraphs.Options=} options
 */
function Dygraph(container, data, options) {}
 /** @type {number} */
Dygraph.SECONDLY;
 /** @type {number} */
Dygraph.TWO_SECONDLY;
 /** @type {number} */
Dygraph.FIVE_SECONDLY;
 /** @type {number} */
Dygraph.TEN_SECONDLY;
 /** @type {number} */
Dygraph.THIRTY_SECONDLY;
 /** @type {number} */
Dygraph.MINUTELY;
 /** @type {number} */
Dygraph.TWO_MINUTELY;
 /** @type {number} */
Dygraph.FIVE_MINUTELY;
 /** @type {number} */
Dygraph.TEN_MINUTELY;
 /** @type {number} */
Dygraph.THIRTY_MINUTELY;
 /** @type {number} */
Dygraph.HOURLY;
 /** @type {number} */
Dygraph.TWO_HOURLY;
 /** @type {number} */
Dygraph.SIX_HOURLY;
 /** @type {number} */
Dygraph.DAILY;
 /** @type {number} */
Dygraph.TWO_DAILY;
 /** @type {number} */
Dygraph.WEEKLY;
 /** @type {number} */
Dygraph.MONTHLY;
 /** @type {number} */
Dygraph.QUARTERLY;
 /** @type {number} */
Dygraph.BIANNUAL;
 /** @type {number} */
Dygraph.ANNUAL;
 /** @type {number} */
Dygraph.DECADAL;
 /** @type {number} */
Dygraph.CENTENNIAL;
 /** @type {number} */
Dygraph.NUM_GRANULARITIES;
 /** @type {?} */
Dygraph.defaultInteractionModel;
 /** @type {!Array<number>} */
Dygraph.DOTTED_LINE;
 /** @type {!Array<number>} */
Dygraph.DASHED_LINE;
 /** @type {!Array<number>} */
Dygraph.DOT_DASH_LINE;
 /** @type {{errorPlotter: ?, linePlotter: ?, fillPlotter: ?}} */
Dygraph.Plotters;

/**
 * Returns the zoomed status of the chart for one or both axes.
 * 
 * Axis is an optional parameter. Can be set to 'x' or 'y'.
 * 
 * The zoomed status for an axis is set whenever a user zooms using the mouse
 * or when the dateWindow or valueRange are updated (unless the
 * isZoomedIgnoreProgrammaticZoom option is also specified).
 * @param {string=} axis
 * @return {boolean}
 */
Dygraph.prototype.isZoomed = function(axis) {};

/**
 * Returns information about the Dygraph object, including its containing ID.
 * @return {string}
 */
Dygraph.prototype.toString = function() {};

/**
 * Returns the current value for an option, as set in the constructor or via
 * updateOptions. You may pass in an (optional) series name to get per-series
 * values for the option.
 * 
 * All values returned by this method should be considered immutable. If you
 * modify them, there is no guarantee that the changes will be honored or that
 * dygraphs will remain in a consistent state. If you want to modify an option,
 * use updateOptions() instead.
 * 
 * @param {string} name
 * @param {string=} seriesName
 * @return {?}
 */
Dygraph.prototype.getOption = function(name, seriesName) {};

/**
 * Get the value of an option on a per-axis basis.
 * @param {string} name
 * @param {string} axis
 * @return {?}
 */
Dygraph.prototype.getOptionForAxis = function(name, axis) {};

/**
 * Returns the current rolling period, as set by the user or an option.
 * @return {number}
 */
Dygraph.prototype.rollPeriod = function() {};

/**
 * Returns the currently-visible x-range. This can be affected by zooming,
 * panning or a call to updateOptions.
 * Returns a two-element array: [left, right].
 * If the Dygraph has dates on the x-axis, these will be millis since epoch.
 * @return {!Array<?>}
 */
Dygraph.prototype.xAxisRange = function() {};

/**
 * Returns the lower- and upper-bound x-axis values of the data set.
 * @return {!Array<?>}
 */
Dygraph.prototype.xAxisExtremes = function() {};

/**
 * Returns the currently-visible y-range for an axis. This can be affected by
 * zooming, panning or a call to updateOptions. Axis indices are zero-based. If
 * called with no arguments, returns the range of the first axis.
 * Returns a two-element array: [bottom, top].
 * @param {number=} idx
 * @return {!Array<?>}
 */
Dygraph.prototype.yAxisRange = function(idx) {};

/**
 * Returns the currently-visible y-ranges for each axis. This can be affected by
 * zooming, panning, calls to updateOptions, etc.
 * Returns an array of [bottom, top] pairs, one for each y-axis.
 * @return {!Array<!Array<?>>}
 */
Dygraph.prototype.yAxisRanges = function() {};

/**
 * Convert from data coordinates to canvas/div X/Y coordinates.
 * If specified, do this conversion for the coordinate system of a particular
 * axis. Uses the first axis by default.
 * Returns a two-element array: [X, Y]
 * 
 * Note: use toDomXCoord instead of toDomCoords(x, null) and use toDomYCoord
 * instead of toDomCoords(null, y, axis).
 * @param {number} x
 * @param {number} y
 * @param {number=} axis
 * @return {!Array<?>}
 */
Dygraph.prototype.toDomCoords = function(x, y, axis) {};

/**
 * Convert from data x coordinates to canvas/div X coordinate.
 * If specified, do this conversion for the coordinate system of a particular
 * axis.
 * Returns a single value or null if x is null.
 * @param {number} x
 * @return {number}
 */
Dygraph.prototype.toDomXCoord = function(x) {};

/**
 * Convert from data y coordinates to canvas/div Y coordinate and optional
 * axis. Uses the first axis by default.
 * 
 * returns a single value or null if y is null.
 * @param {number} y
 * @param {number=} axis
 * @return {number}
 */
Dygraph.prototype.toDomYCoord = function(y, axis) {};

/**
 * Convert from canvas/div coords to data coordinates.
 * If specified, do this conversion for the coordinate system of a particular
 * axis. Uses the first axis by default.
 * Returns a two-element array: [X, Y].
 * 
 * Note: use toDataXCoord instead of toDataCoords(x, null) and use toDataYCoord
 * instead of toDataCoords(null, y, axis).
 * @param {number} x
 * @param {number} y
 * @param {number=} axis
 * @return {!Array<?>}
 */
Dygraph.prototype.toDataCoords = function(x, y, axis) {};

/**
 * Convert from canvas/div x coordinate to data coordinate.
 * 
 * If x is null, this returns null.
 * @param {number} x
 * @return {number}
 */
Dygraph.prototype.toDataXCoord = function(x) {};

/**
 * Convert from canvas/div y coord to value.
 * 
 * If y is null, this returns null.
 * if axis is null, this uses the first axis.
 * @param {number} y
 * @param {number=} axis
 * @return {number}
 */
Dygraph.prototype.toDataYCoord = function(y, axis) {};

/**
 * Converts a y for an axis to a percentage from the top to the
 * bottom of the drawing area.
 * 
 * If the coordinate represents a value visible on the canvas, then
 * the value will be between 0 and 1, where 0 is the top of the canvas.
 * However, this method will return values outside the range, as
 * values can fall outside the canvas.
 * 
 * If y is null, this returns null.
 * if axis is null, this uses the first axis.
 * 
 * @param {number} y
 * @param {number=} axis
 * @return {number}
 */
Dygraph.prototype.toPercentYCoord = function(y, axis) {};

/**
 * Converts an x value to a percentage from the left to the right of
 * the drawing area.
 * 
 * If the coordinate represents a value visible on the canvas, then
 * the value will be between 0 and 1, where 0 is the left of the canvas.
 * However, this method will return values outside the range, as
 * values can fall outside the canvas.
 * 
 * If x is null, this returns null.
 * @param {number} x
 * @return {number}
 */
Dygraph.prototype.toPercentXCoord = function(x) {};

/**
 * Returns the number of columns (including the independent variable).
 * @return {number}
 */
Dygraph.prototype.numColumns = function() {};

/**
 * Returns the number of rows (excluding any header/label row).
 * @return {number}
 */
Dygraph.prototype.numRows = function() {};

/**
 * Returns the value in the given row and column. If the row and column exceed
 * the bounds on the data, returns null. Also returns null if the value is
 * missing.
 *         first row of data, not a header row.
 *         were out of range.
 * @param {number} row
 * @param {number} col
 * @return {number}
 */
Dygraph.prototype.getValue = function(row, col) {};

/**
 * Detach DOM elements in the dygraph and null out all data references.
 * Calling this when you're done with a dygraph can dramatically reduce memory
 * usage. See, e.g., the tests/perf.html example.
 * @return {void}
 */
Dygraph.prototype.destroy = function() {};

/**
 * Return the list of colors. This is either the list of colors passed in the
 * attributes or the autogenerated list of rgb(r,g,b) strings.
 * This does not return colors for invisible series.
 * @return {!Array<string>}
 */
Dygraph.prototype.getColors = function() {};

/**
 * Returns a few attributes of a series, i.e. its color, its visibility, which
 * axis it's assigned to, and its column in the original data.
 * Returns null if the series does not exist.
 * Otherwise, returns an object with column, visibility, color and axis properties.
 * The "axis" property will be set to 1 for y1 and 2 for y2.
 * The "column" property can be fed back into getValue(row, column) to get
 * values for this series.
 * @param {string} series_name
 * @return {!dygraphs.SeriesProperties}
 */
Dygraph.prototype.getPropertiesForSeries = function(series_name) {};

/**
 * Reset the zoom to the original view coordinates. This is the same as
 * double-clicking on the graph.
 * @return {void}
 */
Dygraph.prototype.resetZoom = function() {};

/**
 * Get the current graph's area object.
 * @return {!dygraphs.Area}
 */
Dygraph.prototype.getArea = function() {};

/**
 * Convert a mouse event to DOM coordinates relative to the graph origin.
 * 
 * Returns a two-element array: [X, Y].
 * @param {!MouseEvent} event
 * @return {!Array<?>}
 */
Dygraph.prototype.eventToDomCoords = function(event) {};

/**
 * Manually set the selected points and display information about them in the
 * legend. The selection can be cleared using clearSelection() and queried
 * using getSelection().
 * hover dots on the chart).
 * the highlightSeriesOpts setting.
 * over the graph, disabling closest-series highlighting. Call clearSelection()
 * to unlock it.
 * @param {(number|boolean)} row
 * @param {string=} seriesName
 * @param {boolean=} locked
 * @return {void}
 */
Dygraph.prototype.setSelection = function(row, seriesName, locked) {};

/**
 * Clears the current selection (i.e. points that were highlighted by moving
 * the mouse over the chart).
 * @return {void}
 */
Dygraph.prototype.clearSelection = function() {};

/**
 * Returns the number of the currently selected row. To get data for this row,
 * you can use the getValue method.
 * @return {number}
 */
Dygraph.prototype.getSelection = function() {};

/**
 * Returns the name of the currently-highlighted series.
 * Only available when the highlightSeriesOpts option is in use.
 * @return {string}
 */
Dygraph.prototype.getHighlightSeries = function() {};

/**
 * Returns true if the currently-highlighted series was locked
 * via setSelection(..., seriesName, true).
 * @return {boolean}
 */
Dygraph.prototype.isSeriesLocked = function() {};

/**
 * Returns the number of y-axes on the chart.
 * @return {number}
 */
Dygraph.prototype.numAxes = function() {};

/**
 * Changes various properties of the graph. These can include:
 * <ul>
 * <li>file: changes the source data for the graph</li>
 * <li>errorBars: changes whether the data contains stddev</li>
 * </ul>
 * 
 * There's a huge variety of options that can be passed to this method. For a
 * full list, see http://dygraphs.com/options.html.
 * 
 *         call to updateOptions(). If you know better, you can pass true to
 *         explicitly block the redraw. This can be useful for chaining
 *         updateOptions() calls, avoiding the occasional infinite loop and
 *         preventing redraws when it's not necessary (e.g. when updating a
 *         callback).
 * @param {!dygraphs.Options} input_attrs
 * @param {boolean=} block_redraw
 * @return {void}
 */
Dygraph.prototype.updateOptions = function(input_attrs, block_redraw) {};

/**
 * Resizes the dygraph. If no parameters are specified, resizes to fill the
 * containing div (which has presumably changed size since the dygraph was
 * instantiated. If the width/height are specified, the div will be resized.
 * 
 * This is far more efficient than destroying and re-instantiating a
 * Dygraph, since it doesn't have to reparse the underlying data.
 * 
 * @param {number} width
 * @param {number} height
 * @return {void}
 */
Dygraph.prototype.resize = function(width, height) {};

/**
 * Adjusts the number of points in the rolling average. Updates the graph to
 * reflect the new averaging period.
 * @param {number} length
 * @return {void}
 */
Dygraph.prototype.adjustRoll = function(length) {};

/**
 * Returns a boolean array of visibility statuses.
 * @return {!Array<boolean>}
 */
Dygraph.prototype.visibility = function() {};

/**
 * Changes the visiblity of a series.
 * 
 * @param {number} num
 * @param {boolean} value
 * @return {void}
 */
Dygraph.prototype.setVisibility = function(num, value) {};

/**
 * Update the list of annotations and redraw the chart.
 * See dygraphs.com/annotations.html for more info on how to use annotations.
 * @param {!Array<!dygraphs.Annotation>} ann {Array} An array of annotation objects.
 * @param {boolean=} suppressDraw {Boolean} Set to "true" to block chart redraw (optional).
 * @return {void}
 */
Dygraph.prototype.setAnnotations = function(ann, suppressDraw) {};

/**
 * Return the list of annotations.
 * @return {!Array<!dygraphs.Annotation>}
 */
Dygraph.prototype.annotations = function() {};

/**
 * Get the list of label names for this graph. The first column is the
 * x-axis, so the data series names start at index 1.
 * 
 * Returns null when labels have not yet been defined.
 * @return {!Array<string>}
 */
Dygraph.prototype.getLabels = function() {};

/**
 * Get the index of a series (column) given its name. The first column is the
 * x-axis, so the data series start with index 1.
 * @param {string} name
 * @return {number}
 */
Dygraph.prototype.indexFromSetName = function(name) {};

/**
 * Trigger a callback when the dygraph has drawn itself and is ready to be
 * manipulated. This is primarily useful when dygraphs has to do an XHR for the
 * data (i.e. a URL is passed as the data source) and the chart is drawn
 * asynchronously. If the chart has already drawn, the callback will fire
 * immediately.
 * 
 * This is a good place to call setAnnotations().
 * @param {function(!Dygraph): ?} callback
 * @return {void}
 */
Dygraph.prototype.ready = function(callback) {};
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "dygraphs"
/** @const */
tsickle_declare_module.dygraphs = {};

/* TODO: ExportAssignment in tsickle_declare_module.dygraphs */