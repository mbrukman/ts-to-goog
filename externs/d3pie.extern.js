/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/d3pie/index.d.ts:
/** @const */
var d3pie = {};
/**
 * @record
 * @struct
 */
d3pie.ID3PieChart = function() {};

/**
 * @return {void}
 */
d3pie.ID3PieChart.prototype.redraw = function() {};

/**
 * @param {number} index
 * @return {void}
 */
d3pie.ID3PieChart.prototype.openSegment = function(index) {};

/**
 * @param {void} index
 * @return {void}
 */
d3pie.ID3PieChart.prototype.closeSegment = function(index) {};

/**
 * @return {?}
 */
d3pie.ID3PieChart.prototype.getOpenSegment = function() {};

/**
 * @param {string} propKey
 * @param {?} value
 * @return {void}
 */
d3pie.ID3PieChart.prototype.updateProp = function(propKey, value) {};

/**
 * @return {void}
 */
d3pie.ID3PieChart.prototype.destroy = function() {};
/**
 * @record
 * @struct
 */
d3pie.ID3PieStyleOptions = function() {};
 /** @type {string} */
d3pie.ID3PieStyleOptions.prototype.color;
 /** @type {number} */
d3pie.ID3PieStyleOptions.prototype.fontSize;
 /** @type {string} */
d3pie.ID3PieStyleOptions.prototype.font;
/**
 * @extends {d3pie.ID3PieStyleOptions}
 * @record
 * @struct
 */
d3pie.ID3PieTextOptions = function() {};
 /** @type {string} */
d3pie.ID3PieTextOptions.prototype.text;
/**
 * @record
 * @struct
 */
d3pie.ID3PieLabelsOptions = function() {};
 /** @type {string} */
d3pie.ID3PieLabelsOptions.prototype.format;
 /** @type {number} */
d3pie.ID3PieLabelsOptions.prototype.hideWhenLessThanPercentage;
/**
 * @record
 * @struct
 */
d3pie.ID3PieOptions = function() {};
 /** @type {{title: !d3pie.ID3PieTextOptions, subtitle: !d3pie.ID3PieTextOptions, location: string, titleSubtitlePadding: number}} */
d3pie.ID3PieOptions.prototype.header;
 /** @type {?} */
d3pie.ID3PieOptions.prototype.footer;
 /** @type {{canvasHeight: number, canvasWidth: number, pieOuterRadius: (string|number), pieInnerRadius: (string|number)}} */
d3pie.ID3PieOptions.prototype.size;
 /** @type {{sortOrder: string, smallSegmentGrouping: {enabled: boolean, value: number, valueType: string, label: string, color: string}, content: !Array<{label: string, value: number, color: string}>}} */
d3pie.ID3PieOptions.prototype.data;
 /** @type {{outer: ?, inner: !d3pie.ID3PieLabelsOptions, mainLabel: !d3pie.ID3PieStyleOptions, percentage: ?, value: !d3pie.ID3PieStyleOptions, lines: {enabled: boolean, style: string, color: string}, truncation: {enabled: boolean, truncateLength: number}, formatter: function({section: string, value: number, label: string}): string}} */
d3pie.ID3PieOptions.prototype.labels;
 /** @type {{load: {effect: string, speed: number}, pullOutSegmentOnClick: {effect: string, speed: number, size: number}, highlightSegmentOnMouseover: boolean, highlightLuminosity: number}} */
d3pie.ID3PieOptions.prototype.effects;
 /** @type {{enabled: boolean, type: string, string: string, placeholderParser: function(number, {label: string, percentage: number, value: number}): void, styles: {fadeInSpeed: number, backgroundColor: string, backgroundOpacity: number, color: string, borderRadius: number, font: string, fontSize: number, padding: number}}} */
d3pie.ID3PieOptions.prototype.tooltips;
 /** @type {{colors: {background: string, segments: !Array<string>, segmentStroke: string}, gradient: {enabled: boolean, percentage: number, color: string}, canvasPadding: {top: number, right: number, bottom: number, left: number}, pieCenterOffset: {x: number, y: number}, cssPrefix: string}} */
d3pie.ID3PieOptions.prototype.misc;
 /** @type {{onload: !Function, onMouseoverSegment: !Function, onMouseoutSegment: !Function, onClickSegment: !Function}} */
d3pie.ID3PieOptions.prototype.callbacks;
/**
 * @record
 * @struct
 */
d3pie.ID3PieClass = function() {};

/* TODO: ConstructSignature: d3pie */
 /** @type {!d3pie.ID3PieClass} */
var d3pie;
