/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/c3/index.d.ts:

/* TODO: ImportDeclaration in  */

/* TODO: ExportAssignment in  */

/* TODO: NamespaceExportDeclaration in  */
/** @const */
var c3 = {};

/** @typedef {!Array<(string|number|boolean)>} */
c3.PrimitiveArray;

/** @typedef {function(?, string, number, number): void} */
c3.FormatFunction;
/**
 * @record
 * @struct
 */
c3.TargetIds = function() {};
 /** @type {(string|!Array<string>)} */
c3.TargetIds.prototype.ids;

/** @typedef {(string|!Array<string>)} */
c3.ArrayOrString;
/**
 * @record
 * @struct
 */
c3.ChartConfiguration = function() {};
 /** @type {(string|!HTMLElement|!d3.Selection<?>)} */
c3.ChartConfiguration.prototype.bindto;
 /** @type {{width: number, height: number}} */
c3.ChartConfiguration.prototype.size;
 /** @type {{top: number, right: number, bottom: number, left: number}} */
c3.ChartConfiguration.prototype.padding;
 /** @type {{pattern: !Array<string>, threshold: ?}} */
c3.ChartConfiguration.prototype.color;
 /** @type {{enabled: boolean}} */
c3.ChartConfiguration.prototype.interaction;
 /** @type {{duration: number}} */
c3.ChartConfiguration.prototype.transition;
 /** @type {!c3.Data} */
c3.ChartConfiguration.prototype.data;
 /** @type {!c3.Axis} */
c3.ChartConfiguration.prototype.axis;
 /** @type {!c3.Grid} */
c3.ChartConfiguration.prototype.grid;
 /** @type {!Array<!c3.RegionOptions>} */
c3.ChartConfiguration.prototype.regions;
 /** @type {!c3.LegendOptions} */
c3.ChartConfiguration.prototype.legend;
 /** @type {!c3.TooltipOptions} */
c3.ChartConfiguration.prototype.tooltip;
 /** @type {!c3.SubchartOptions} */
c3.ChartConfiguration.prototype.subchart;
 /** @type {!c3.ZoomOptions} */
c3.ChartConfiguration.prototype.zoom;
 /** @type {!c3.PointOptions} */
c3.ChartConfiguration.prototype.point;
 /** @type {{connectNull: boolean, step: {type: string}}} */
c3.ChartConfiguration.prototype.line;
 /** @type {{zerobased: boolean}} */
c3.ChartConfiguration.prototype.area;
 /** @type {{width: (number|{ratio: number, max: number}), zerobased: boolean}} */
c3.ChartConfiguration.prototype.bar;
 /** @type {{label: {show: boolean, format: function(number, number, string): string, threshold: number}, expand: boolean}} */
c3.ChartConfiguration.prototype.pie;
 /** @type {{label: {show: boolean, format: function(number, number, string): string, threshold: number}, expand: boolean, width: number, title: string}} */
c3.ChartConfiguration.prototype.donut;
 /** @type {{label: {show: boolean, format: function(?, number): string}, expand: boolean, min: number, max: number, units: string, width: number}} */
c3.ChartConfiguration.prototype.gauge;
 /** @type {{interpolation: {type: string}}} */
c3.ChartConfiguration.prototype.spline;

/**
 * Set a callback to execute when the chart is initialized.
 * @return {void}
 */
c3.ChartConfiguration.prototype.oninit = function() {};

/**
 * Set a callback which is executed when the chart is rendered. Basically, this callback will be called in each time when the chart is redrawed.
 * @return {void}
 */
c3.ChartConfiguration.prototype.onrendered = function() {};

/**
 * Set a callback to execute when mouse enters the chart.
 * @return {void}
 */
c3.ChartConfiguration.prototype.onmouseover = function() {};

/**
 * Set a callback to execute when mouse leaves the chart.
 * @return {void}
 */
c3.ChartConfiguration.prototype.onmouseout = function() {};

/**
 * Set a callback to execute when user resizes the screen.
 * @return {void}
 */
c3.ChartConfiguration.prototype.onresize = function() {};

/**
 * Set a callback to execute when screen resize finished.
 * @return {void}
 */
c3.ChartConfiguration.prototype.onresized = function() {};
/**
 * @record
 * @struct
 */
c3.Data = function() {};
 /** @type {string} */
c3.Data.prototype.url;
 /** @type {!Object} */
c3.Data.prototype.json;
 /** @type {!Array<!Array<(string|number|boolean)>>} */
c3.Data.prototype.rows;
 /** @type {!Array<!Array<(string|number|boolean)>>} */
c3.Data.prototype.columns;
 /** @type {string} */
c3.Data.prototype.mimeType;
 /** @type {{x: string, value: !Array<string>}} */
c3.Data.prototype.keys;
 /** @type {string} */
c3.Data.prototype.x;
 /** @type {!Object<string,string>} */
c3.Data.prototype.xs;
 /** @type {string} */
c3.Data.prototype.xFormat;
 /** @type {!Object<string,string>} */
c3.Data.prototype.names;
 /** @type {!Object<string,string>} */
c3.Data.prototype.classes;
 /** @type {!Array<!Array<string>>} */
c3.Data.prototype.groups;
 /** @type {!Object<string,string>} */
c3.Data.prototype.axes;
 /** @type {string} */
c3.Data.prototype.type;
 /** @type {!Object<string,string>} */
c3.Data.prototype.types;
 /** @type {(boolean|{format: function(?, string, number, number): void}|{format: !Object<string,?>})} */
c3.Data.prototype.labels;
 /** @type {(string|function(!Array<string>): void)} */
c3.Data.prototype.order;
 /** @type {!Object<string,?>} */
c3.Data.prototype.regions;
 /** @type {!Object<string,(string|!d3.Rgb|function(?): (string|!d3.Rgb))>} */
c3.Data.prototype.colors;
 /** @type {(boolean|!Array<string>)} */
c3.Data.prototype.hide;
 /** @type {{label: {text: string}}} */
c3.Data.prototype.empty;
 /** @type {{enabled: boolean, grouped: boolean, multiple: boolean, draggable: boolean, isselectable: function(?): boolean}} */
c3.Data.prototype.selection;

/**
 * Set color converter function.
 * This option should a function and the specified function receives color (e.g. '#ff0000') and d that has data parameters like id, value, index, etc. And it must return a string that
 * represents color (e.g. '#00ff00').
 * @param {string} color
 * @param {?} d
 * @return {(string|!d3.Rgb)}
 */
c3.Data.prototype.color = function(color, d) {};

/**
 * Set a callback for click event on each data point.
 * This callback will be called when each data point clicked and will receive d and element as the arguments.
 * - d is the data clicked and element is the element clicked. In this callback, this will be the Chart object.
 * @param {?} d
 * @param {?} element
 * @return {void}
 */
c3.Data.prototype.onclick = function(d, element) {};

/**
 * Set a callback for mouseover event on each data point.
 * This callback will be called when mouse cursor moves onto each data point and will receive d as the argument.
 * - d is the data where mouse cursor moves onto. In this callback, this will be the Chart object.
 * @param {?} d
 * @param {?=} element
 * @return {void}
 */
c3.Data.prototype.onmouseover = function(d, element) {};

/**
 * Set a callback for mouseout event on each data point.
 * This callback will be called when mouse cursor moves out each data point and will receive d as the argument.
 * - d is the data where mouse cursor moves out. In this callback, this will be the Chart object.
 * @param {?} d
 * @param {?=} element
 * @return {void}
 */
c3.Data.prototype.onmouseout = function(d, element) {};

/**
 * @param {?} d
 * @param {?=} element
 * @return {void}
 */
c3.Data.prototype.onselected = function(d, element) {};

/**
 * @param {?} d
 * @param {?=} element
 * @return {void}
 */
c3.Data.prototype.onunselected = function(d, element) {};
/**
 * @record
 * @struct
 */
c3.Axis = function() {};
 /** @type {boolean} */
c3.Axis.prototype.rotated;
 /** @type {!c3.XAxisConfiguration} */
c3.Axis.prototype.x;
 /** @type {!c3.YAxisConfiguration} */
c3.Axis.prototype.y;
 /** @type {!c3.YAxisConfiguration} */
c3.Axis.prototype.y2;
/**
 * @record
 * @struct
 */
c3.XAxisConfiguration = function() {};
 /** @type {boolean} */
c3.XAxisConfiguration.prototype.show;
 /** @type {string} */
c3.XAxisConfiguration.prototype.type;
 /** @type {boolean} */
c3.XAxisConfiguration.prototype.localtime;
 /** @type {!Array<string>} */
c3.XAxisConfiguration.prototype.categories;
 /** @type {!c3.XTickConfiguration} */
c3.XAxisConfiguration.prototype.tick;
 /** @type {number} */
c3.XAxisConfiguration.prototype.max;
 /** @type {number} */
c3.XAxisConfiguration.prototype.min;
 /** @type {{left: number, right: number}} */
c3.XAxisConfiguration.prototype.padding;
 /** @type {number} */
c3.XAxisConfiguration.prototype.height;
 /** @type {(!Array<number>|function(): !Array<number>)} */
c3.XAxisConfiguration.prototype.extent;
 /** @type {(string|{text: string, position: string})} */
c3.XAxisConfiguration.prototype.label;
/**
 * @record
 * @struct
 */
c3.YAxisConfiguration = function() {};
 /** @type {boolean} */
c3.YAxisConfiguration.prototype.show;
 /** @type {boolean} */
c3.YAxisConfiguration.prototype.inner;
 /** @type {number} */
c3.YAxisConfiguration.prototype.max;
 /** @type {number} */
c3.YAxisConfiguration.prototype.min;
 /** @type {boolean} */
c3.YAxisConfiguration.prototype.inverted;
 /** @type {number} */
c3.YAxisConfiguration.prototype.center;
 /** @type {(string|{text: string, position: string})} */
c3.YAxisConfiguration.prototype.label;
 /** @type {!c3.YTickConfiguration} */
c3.YAxisConfiguration.prototype.tick;
 /** @type {{top: number, bottom: number}} */
c3.YAxisConfiguration.prototype.padding;
 /** @type {!Array<number>} */
c3.YAxisConfiguration.prototype.default;
/**
 * @record
 * @struct
 */
c3.XTickConfiguration = function() {};
 /** @type {boolean} */
c3.XTickConfiguration.prototype.centered;
 /** @type {(string|function((number|!Date)): (string|number))} */
c3.XTickConfiguration.prototype.format;
 /** @type {(boolean|!c3.CullingConfiguration)} */
c3.XTickConfiguration.prototype.culling;
 /** @type {number} */
c3.XTickConfiguration.prototype.count;
 /** @type {boolean} */
c3.XTickConfiguration.prototype.fit;
 /** @type {(!Array<string>|!Array<number>)} */
c3.XTickConfiguration.prototype.values;
 /** @type {number} */
c3.XTickConfiguration.prototype.rotate;
 /** @type {boolean} */
c3.XTickConfiguration.prototype.outer;
 /** @type {boolean} */
c3.XTickConfiguration.prototype.multiline;
/**
 * @record
 * @struct
 */
c3.YTickConfiguration = function() {};
 /** @type {boolean} */
c3.YTickConfiguration.prototype.outer;
 /** @type {!Array<number>} */
c3.YTickConfiguration.prototype.values;
 /** @type {number} */
c3.YTickConfiguration.prototype.count;

/**
 * Set formatter for y axis tick text.
 * This option accepts d3.format object as well as a function you define.
 * @param {number} x
 * @return {string}
 */
c3.YTickConfiguration.prototype.format = function(x) {};
/**
 * @record
 * @struct
 */
c3.CullingConfiguration = function() {};
 /** @type {number} */
c3.CullingConfiguration.prototype.max;
/**
 * @record
 * @struct
 */
c3.Grid = function() {};
 /** @type {{show: boolean, lines: !Array<!c3.LineOptions>}} */
c3.Grid.prototype.x;
 /** @type {{show: boolean, lines: !Array<!c3.LineOptions>}} */
c3.Grid.prototype.y;
/**
 * @record
 * @struct
 */
c3.LineOptions = function() {};
 /** @type {number} */
c3.LineOptions.prototype.value;
 /** @type {string} */
c3.LineOptions.prototype.text;
 /** @type {string} */
c3.LineOptions.prototype.axis;
 /** @type {string} */
c3.LineOptions.prototype.position;
 /** @type {string} */
c3.LineOptions.prototype.class;
/**
 * @record
 * @struct
 */
c3.RegionOptions = function() {};
 /** @type {string} */
c3.RegionOptions.prototype.axis;
 /** @type {(string|number|!Date)} */
c3.RegionOptions.prototype.start;
 /** @type {(string|number|!Date)} */
c3.RegionOptions.prototype.end;
 /** @type {string} */
c3.RegionOptions.prototype.class;
/**
 * @record
 * @struct
 */
c3.LegendOptions = function() {};
 /** @type {boolean} */
c3.LegendOptions.prototype.show;
 /** @type {(string|boolean|!Array<string>)} */
c3.LegendOptions.prototype.hide;
 /** @type {string} */
c3.LegendOptions.prototype.position;
 /** @type {{anchor: string, x: number, y: number, step: number}} */
c3.LegendOptions.prototype.inset;
 /** @type {{onclick: function(?): void, onmouseover: function(?): void, onmouseout: function(?): void}} */
c3.LegendOptions.prototype.item;
/**
 * @record
 * @struct
 */
c3.TooltipOptions = function() {};
 /** @type {boolean} */
c3.TooltipOptions.prototype.show;
 /** @type {boolean} */
c3.TooltipOptions.prototype.grouped;
 /** @type {{title: function(?): string, name: function(string, number, string, number): string, value: function(?, number, string, number): string}} */
c3.TooltipOptions.prototype.format;

/**
 * Set custom position for the tooltip. This option can be used to modify the tooltip position by returning object that has top and left.
 * @param {?} data
 * @param {number} width
 * @param {number} height
 * @param {?} element
 * @return {{top: number, left: number}}
 */
c3.TooltipOptions.prototype.position = function(data, width, height, element) {};

/**
 * Set custom HTML for the tooltip.
 * Specified function receives data, defaultTitleFormat, defaultValueFormat and color of the data point to show. If tooltip.grouped is true, data includes multiple data points.
 * @param {?} data
 * @param {string} defaultTitleFormat
 * @param {string} defaultValueFormat
 * @param {?} color
 * @return {string}
 */
c3.TooltipOptions.prototype.contents = function(data, defaultTitleFormat, defaultValueFormat, color) {};
/**
 * @record
 * @struct
 */
c3.SubchartOptions = function() {};
 /** @type {boolean} */
c3.SubchartOptions.prototype.show;
 /** @type {{height: number}} */
c3.SubchartOptions.prototype.size;

/**
 * Set callback for brush event.
 * Specified function receives the current zoomed x domain.
 * @param {?} domain
 * @return {void}
 */
c3.SubchartOptions.prototype.onbrush = function(domain) {};
/**
 * @record
 * @struct
 */
c3.ZoomOptions = function() {};
 /** @type {boolean} */
c3.ZoomOptions.prototype.enabled;
 /** @type {boolean} */
c3.ZoomOptions.prototype.rescale;
 /** @type {!Array<?>} */
c3.ZoomOptions.prototype.extent;

/**
 * Set callback that is called when the chart is zooming. Specified function receives the zoomed domain.
 * @param {?} domain
 * @return {void}
 */
c3.ZoomOptions.prototype.onzoom = function(domain) {};

/**
 * Set callback that is called when zooming starts. Specified function receives the zoom event.
 * @param {!Event} event
 * @return {void}
 */
c3.ZoomOptions.prototype.onzoomstart = function(event) {};

/**
 * Set callback that is called when zooming ends. Specified function receives the zoomed domain.
 * @param {?} domain
 * @return {void}
 */
c3.ZoomOptions.prototype.onzoomend = function(domain) {};
/**
 * @record
 * @struct
 */
c3.PointOptions = function() {};
 /** @type {boolean} */
c3.PointOptions.prototype.show;
 /** @type {(number|function(?): number)} */
c3.PointOptions.prototype.r;
 /** @type {{expand: {enabled: boolean, r: number}}} */
c3.PointOptions.prototype.focus;
 /** @type {{r: number}} */
c3.PointOptions.prototype.select;
/**
 * @record
 * @struct
 */
c3.ChartAPI = function() {};
 /** @type {!c3.GridOperations} */
c3.ChartAPI.prototype.xgrids;
 /** @type {!c3.GridOperations} */
c3.ChartAPI.prototype.ygrids;
 /** @type {?} */
c3.ChartAPI.prototype.regions;
 /** @type {?} */
c3.ChartAPI.prototype.data;
 /** @type {{labels: function(!Object<string,string>): !Object<string,string>, min: function((number|!Object<string,number>)): (number|!Object<string,number>), max: function((number|!Object<string,number>)): (number|!Object<string,number>), range: function({min: (number|!Object<string,number>), max: (number|!Object<string,number>)}): {min: (number|!Object<string,number>), max: (number|!Object<string,number>)}}} */
c3.ChartAPI.prototype.axis;
 /** @type {{show: function((string|!Array<string>)): void, hide: function((string|!Array<string>)): void}} */
c3.ChartAPI.prototype.legend;
 /** @type {?} */
c3.ChartAPI.prototype.zoom;

/**
 * This API highlights specified targets and fade out the others.
 * You can specify multiple targets by giving an array that includes id as String. If no argument is given, all of targets will be highlighted.
 * @param {(string|!Array<string>)=} targetIds
 * @return {void}
 */
c3.ChartAPI.prototype.focus = function(targetIds) {};

/**
 * This API fades out specified targets and reverts the others.
 * You can specify multiple targets by giving an array that includes id as String. If no argument is given, all of targets will be faded out.
 * @param {(string|!Array<string>)=} targetIds
 * @return {void}
 */
c3.ChartAPI.prototype.defocus = function(targetIds) {};

/**
 * This API reverts specified targets.
 * You can specify multiple targets by giving an array that includes id as String. If no argument is given, all of targets will be reverted.
 * @param {(string|!Array<string>)=} targetIds
 * @return {void}
 */
c3.ChartAPI.prototype.revert = function(targetIds) {};

/**
 * This API shows specified targets.
 * You can specify multiple targets by giving an array that includes id as String. If no argument is given, all of targets will be shown.
 * If withLegend is set true, legend will be shown together with the specified data.
 * @param {(string|!Array<string>)=} targetIds
 * @param {{withLegend: boolean}=} options
 * @return {void}
 */
c3.ChartAPI.prototype.show = function(targetIds, options) {};

/**
 * This API hides specified targets.
 * You can specify multiple targets by giving an array that includes id as String. If no argument is given, all of targets will be hidden.
 * If withLegend is set true, legend will be hidden together with the specified data.
 * @param {(string|!Array<string>)=} targetIds
 * @param {{withLegend: boolean}=} options
 * @return {void}
 */
c3.ChartAPI.prototype.hide = function(targetIds, options) {};

/**
 * This API toggles (shows or hides) specified targets.
 * You can specify multiple targets by giving an array that includes id as String. If no argument is given, all of targets will be toggles.
 * If withLegend is set true, legend will be toggled together with the specified data.
 * @param {(string|!Array<string>)=} targetIds
 * @param {{withLegend: boolean}=} options
 * @return {void}
 */
c3.ChartAPI.prototype.toggle = function(targetIds, options) {};

/**
 * Load data to the chart.
 * If url, json, rows and columns given, the data will be loaded. If data that has the same target id is given, the chart will be updated. Otherwise, new target will be added.
 * If classes given, the classes specifed by data.classes will be updated. classes must be Object that has target id as keys.
 * If categories given, the categories specifed by axis.x.categories or data.x will be updated. categories must be Array.
 * If axes given, the axes specifed by data.axes will be updated. axes must be Object that has target id as keys.
 * If colors given, the colors specifed by data.colors will be updated. colors must be Object that has target id as keys.
 * If type or types given, the type of targets will be updated. type must be String and types must be Object.
 * If unload given, data will be unloaded before loading new data. If true given, all of data will be unloaded. If target ids given as String or Array, specified targets will be unloaded.
 * If done given, the specified function will be called after data loded.
 * NOTE: unload should be used if some data needs to be unloaded simultaneously. If you call unload API soon after/before load instead of unload param, chart will not be rendered properly
 * because of cancel of animation.
 * NOTE: done will be called after data loaded, but it's not after rendering. It's because rendering will finish after some transition and there is some time lag between loading and rendering.
 * @param {{url: string, json: !Object, keys: {x: string, value: !Array<string>}, rows: !Array<!Array<(string|number|boolean)>>, columns: !Array<!Array<(string|number|boolean)>>, names: !Object<string,string>, classes: !Object<string,string>, categories: !Array<string>, axes: !Object<string,string>, colors: !Object<string,(string|!d3.Rgb)>, type: string, types: !Object<string,string>, unload: (string|boolean|!Array<string>), done: function(): ?}} args
 * @return {void}
 */
c3.ChartAPI.prototype.load = function(args) {};

/**
 * Unload data to the chart.
 * You can specify multiple targets by giving an array that includes id as String. If no argument is given, all of targets will be toggles.
 * If ids given, the data that has specified target id will be unloaded. ids should be String or Array. If ids is not specified, all data will be unloaded.
 * If done given, the specified function will be called after data loded.
 * NOTE: If you call load API soon after/before unload, unload param of load should be used. Otherwise chart will not be rendered properly because of cancel of animation.
 * NOTE: done will be called after data loaded, but it's not after rendering. It's because rendering will finish after some transition and there is some time lag between loading and rendering.
 * @param {!c3.TargetIds=} targetIds
 * @param {function(): ?=} done
 * @return {?}
 */
c3.ChartAPI.prototype.unload = function(targetIds, done) {};

/**
 * Flow data to the chart. By this API, you can append new data points to the chart.
 * If json, rows and columns given, the data will be loaded. If data that has the same target id is given, the chart will be appended. Otherwise, new target will be added. One of these is
 * required when calling. If json specified, keys is required as well as data.json
 * If to is given, the lower x edge will move to that point. If not given, the lower x edge will move by the number of given data points.
 * If length is given, the lower x edge will move by the number of this argument.
 * If duration is given, the duration of the transition will be specified value. If not given, transition.duration will be used as default.
 * If done is given, the specified function will be called when flow ends.
 * @param {{json: !Object, keys: {x: string, value: !Array<string>}, rows: !Array<!Array<(string|number|boolean)>>, columns: !Array<!Array<(string|number|boolean)>>, to: ?, length: number, duration: number, done: function(): ?}} args
 * @return {void}
 */
c3.ChartAPI.prototype.flow = function(args) {};

/**
 * Change data point state to selected. By this API, you can select data points. To use this API, data.selection.enabled needs to be set true.
 * @param {!Array<string>=} ids Specify target ids to be selected. If this argument is not given, all targets will be the candidate.
 * @param {!Array<number>=} indices Specify indices to be selected. If this argument is not given, all data points will be the candidate.
 * @param {boolean=} resetOthers If this argument is set true, the data points that are not specified by ids, indices will be unselected.
 * @return {void}
 */
c3.ChartAPI.prototype.select = function(ids, indices, resetOthers) {};

/**
 * Change data point state to unselected. By this API, you can unselect data points. To use this API, data.selection.enabled needs to be set true.
 * @param {!Array<string>=} ids Specify target ids to be unselected. If this argument is not given, all targets will be the candidate.
 * @param {!Array<number>=} indices Specify indices to be unselected. If this argument is not given, all data points will be the candidate.
 * @return {void}
 */
c3.ChartAPI.prototype.unselect = function(ids, indices) {};

/**
 * Get selected data points. By this API, you can get selected data points information. To use this API, data.selection.enabled needs to be set true.
 * @param {string=} targetId You can filter the result by giving target id that you want to get. If not given, all of data points will be returned.
 * @return {!c3.Data}
 */
c3.ChartAPI.prototype.selected = function(targetId) {};

/**
 * Change the type of the chart.
 * @param {string} type Specify the type to be transformed. The types listed in data.type can be used.
 * @param {(string|!Array<string>)=} targetIds Specify targets to be transformed. If not given, all targets will be the candidate.
 * @return {void}
 */
c3.ChartAPI.prototype.transform = function(type, targetIds) {};

/**
 * Update groups for the targets.
 * @param {!Array<!Array<string>>} groups This argument needs to be an Array that includes one or more Array that includes target ids to be grouped.
 * @return {void}
 */
c3.ChartAPI.prototype.groups = function(groups) {};

/**
 * Gets and sets the value a category
 * @param {number} index Index of the category to get or set
 * @param {string=} category
 * @return {string}
 */
c3.ChartAPI.prototype.category = function(index, category) {};

/**
 * Get and set the categories
 * @param {!Array<string>=} categories
 * @return {!Array<string>}
 */
c3.ChartAPI.prototype.categories = function(categories) {};

/**
 * Get the color for the specified targetId
 * @param {string} targetId
 * @return {string}
 */
c3.ChartAPI.prototype.color = function(targetId) {};

/**
 * Get and set x values for the chart.
 * @param {!Array<(string|number|boolean)>=} x If x is given, x values of every target will be updated. If no argument is given, current x values will be returned as an Object whose keys are the target ids.
 * @return {!Array<(string|number|boolean)>}
 */
c3.ChartAPI.prototype.x = function(x) {};

/**
 * Get and set x values for the chart.
 * @param {!Object<string,!Array<(string|number|boolean)>>=} xs
 * @return {!Object<string,!Array<(string|number|boolean)>>}
 */
c3.ChartAPI.prototype.xs = function(xs) {};

/**
 * Unzoom to the original domain.
 * @return {void}
 */
c3.ChartAPI.prototype.unzoom = function() {};

/**
 * Resize the chart. If no size is specified it will resize to fit.
 * @param {{width: number, height: number}=} size This argument should include width and height in pixels.
 * @return {void}
 */
c3.ChartAPI.prototype.resize = function(size) {};

/**
 * Force to redraw.
 * @return {void}
 */
c3.ChartAPI.prototype.flush = function() {};

/**
 * Reset the chart object and remove element and events completely.
 * @return {void}
 */
c3.ChartAPI.prototype.destroy = function() {};
/**
 * @record
 * @struct
 */
c3.GridOperations = function() {};

/* TODO: CallSignature: c3 */

/**
 * Add x/y grid lines. This API adds new x/y grid lines instead of replacing like xgrids.
 * @param {(!Object|!Array<?>)} grids New x/y grid lines will be added. The format of this argument is the same as grid.x.lines or grid.y.lines and it's possible to give an Object if only one line will be added.
 * @return {void}
 */
c3.GridOperations.prototype.add = function(grids) {};

/**
 * Remove x/y grid lines. This API removes x/y grid lines.
 * @param {{class: string, value: (string|number)}=} args This argument should include value or class. If value is given, the x/y grid lines that have specified x/y value will be removed. If class is given, the x/y grid lines that
 * have specified class will be removed. If args is not given, all of x/y grid lines will be removed.
 * @return {void}
 */
c3.GridOperations.prototype.remove = function(args) {};

/**
 * @param {!c3.ChartConfiguration} config
 * @return {!c3.ChartAPI}
 */
c3.generate = function(config) {};
