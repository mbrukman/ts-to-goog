/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/vega/index.d.ts:
/** @const */
var vg = {};

/** @typedef {?} */
vg.ChartViewConstructor;
/**
 * @record
 * @struct
 */
vg.Parse = function() {};

/**
 * @param {string|!vg.Spec} url_or_spec
 * @param {function(?): void} callback
 * @return {void}
 */
vg.Parse.prototype.spec = function(url_or_spec, callback) {};

/**
 * @param {!Array<!vg.Data>} dataSet
 * @param {function(): void} callback
 * @return {void}
 */
vg.Parse.prototype.data = function(dataSet, callback) {};
/**
 * @record
 * @struct
 */
vg.ViewArgs = function() {};
 /** @type {?} */
vg.ViewArgs.prototype.el;
 /** @type {?} */
vg.ViewArgs.prototype.data;
 /** @type {boolean} */
vg.ViewArgs.prototype.hover;
 /** @type {string} */
vg.ViewArgs.prototype.renderer;
/**
 * @record
 * @struct
 */
vg.View = function() {};

/**
 * @param {number=} w
 * @return {number|View}
 */
vg.View.prototype.width = function(w) {};

/**
 * @param {number=} h
 * @return {number|View}
 */
vg.View.prototype.height = function(h) {};

/**
 * @param {!vg.Padding=} p
 * @return {!vg.Padding|View}
 */
vg.View.prototype.padding = function(p) {};

/**
 * @param {!Array<number>=} v
 * @return {!Array<number>|View}
 */
vg.View.prototype.viewport = function(v) {};

/**
 * @param {string} r
 * @return {View}
 */
vg.View.prototype.renderer = function(r) {};

/**
 * @param {?=} d
 * @return {!vg.Runtime.DataSets|View}
 */
vg.View.prototype.data = function(d) {};

/**
 * @param {string|!Element} selector_or_node
 * @return {View}
 */
vg.View.prototype.initialize = function(selector_or_node) {};

/**
 * @param {!Array<?>=} r
 * @return {View}
 */
vg.View.prototype.render = function(r) {};

/**
 * @param {!vg.UpdateOptions=} options
 * @return {View}
 */
vg.View.prototype.update = function(options) {};

/**
 * @return {!vg.Model}
 */
vg.View.prototype.model = function() {};

/**
 * @param {!vg.Defs=} defs
 * @return {!vg.Defs|View}
 */
vg.View.prototype.defs = function(defs) {};
/**
 * @extends {vg.View}
 * @record
 * @struct
 */
vg.SvgView = function() {};

/**
 * @return {string}
 */
vg.SvgView.prototype.svg = function() {};
/**
 * @extends {vg.View}
 * @record
 * @struct
 */
vg.CanvasView = function() {};

/**
 * @return {?}
 */
vg.CanvasView.prototype.canvas = function() {};
/**
 * @record
 * @struct
 */
vg.Padding = function() {};
 /** @type {number} */
vg.Padding.prototype.top;
 /** @type {number} */
vg.Padding.prototype.right;
 /** @type {number} */
vg.Padding.prototype.bottom;
 /** @type {number} */
vg.Padding.prototype.left;
/**
 * @record
 * @struct
 */
vg.UpdateOptions = function() {};
 /** @type {string} */
vg.UpdateOptions.prototype.props;
 /** @type {?} */
vg.UpdateOptions.prototype.items;
 /** @type {number} */
vg.UpdateOptions.prototype.duration;
 /** @type {string} */
vg.UpdateOptions.prototype.ease;
/**
 * @record
 * @struct
 */
vg.Bounds = function() {};
 /** @type {number} */
vg.Bounds.prototype.x1;
 /** @type {number} */
vg.Bounds.prototype.y1;
 /** @type {number} */
vg.Bounds.prototype.x2;
 /** @type {number} */
vg.Bounds.prototype.y2;

/**
 * @return {!vg.Bounds}
 */
vg.Bounds.prototype.clear = function() {};

/**
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @return {!vg.Bounds}
 */
vg.Bounds.prototype.set = function(x1, y1, x2, y2) {};

/**
 * @param {number} x
 * @param {number} y
 * @return {!vg.Bounds}
 */
vg.Bounds.prototype.add = function(x, y) {};

/**
 * @param {number} d
 * @return {!vg.Bounds}
 */
vg.Bounds.prototype.expand = function(d) {};

/**
 * @return {!vg.Bounds}
 */
vg.Bounds.prototype.round = function() {};

/**
 * @param {number} dx
 * @param {number} dy
 * @return {!vg.Bounds}
 */
vg.Bounds.prototype.translate = function(dx, dy) {};

/**
 * @param {number} angle
 * @param {number} x
 * @param {number} y
 * @return {!vg.Bounds}
 */
vg.Bounds.prototype.rotate = function(angle, x, y) {};

/**
 * @param {!vg.Bounds} b
 * @return {!vg.Bounds}
 */
vg.Bounds.prototype.union = function(b) {};

/**
 * @param {!vg.Bounds} b
 * @return {boolean}
 */
vg.Bounds.prototype.encloses = function(b) {};

/**
 * @param {!vg.Bounds} b
 * @return {boolean}
 */
vg.Bounds.prototype.intersects = function(b) {};

/**
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
vg.Bounds.prototype.contains = function(x, y) {};

/**
 * @return {number}
 */
vg.Bounds.prototype.width = function() {};

/**
 * @return {number}
 */
vg.Bounds.prototype.height = function() {};
/**
 * @record
 * @struct
 */
vg.Model = function() {};

/**
 * @param {!vg.Defs=} defs
 * @return {!vg.Defs|!vg.Model}
 */
vg.Model.prototype.defs = function(defs) {};

/**
 * @param {!vg.Runtime.DataSets=} data
 * @return {!vg.Runtime.DataSets|!vg.Model}
 */
vg.Model.prototype.data = function(data) {};

/**
 * @param {string} name
 * @param {?} tx
 * @param {?} input
 * @return {void}
 */
vg.Model.prototype.ingest = function(name, tx, input) {};

/**
 * @param {string} name
 * @param {?} tx
 * @return {void}
 */
vg.Model.prototype.dependencies = function(name, tx) {};

/**
 * @param {number} w
 * @return {!vg.Model}
 */
vg.Model.prototype.width = function(w) {};

/**
 * @param {number} h
 * @return {!vg.Model}
 */
vg.Model.prototype.height = function(h) {};

/**
 * @param {!vg.Node=} node
 * @return {!vg.Node|!vg.Model}
 */
vg.Model.prototype.scene = function(node) {};

/**
 * @return {!vg.Model}
 */
vg.Model.prototype.build = function() {};

/**
 * @param {?=} trans
 * @param {string=} request
 * @param {?=} item
 * @return {!vg.Model}
 */
vg.Model.prototype.encode = function(trans, request, item) {};

/**
 * @return {!vg.Model}
 */
vg.Model.prototype.reset = function() {};
/** @const */
vg.Runtime = {};
/**
 * @record
 * @struct
 */
vg.Runtime.DataSets = function() {};

/* TODO: IndexSignature: vg.Runtime */
/**
 * @record
 * @struct
 */
vg.Runtime.Datum = function() {};

/* TODO: IndexSignature: vg.Runtime */
/**
 * @record
 * @struct
 */
vg.Runtime.Marks = function() {};
 /** @type {string} */
vg.Runtime.Marks.prototype.type;
 /** @type {number} */
vg.Runtime.Marks.prototype.width;
 /** @type {number} */
vg.Runtime.Marks.prototype.height;
 /** @type {!Array<!vg.Scale>} */
vg.Runtime.Marks.prototype.scales;
 /** @type {!Array<!vg.Axis>} */
vg.Runtime.Marks.prototype.axes;
 /** @type {!Array<!vg.Legend>} */
vg.Runtime.Marks.prototype.legends;
 /** @type {!Array<!vg.Mark>} */
vg.Runtime.Marks.prototype.marks;
/**
 * @record
 * @struct
 */
vg.Runtime.PropertySets = function() {};
 /** @type {!vg.Runtime.Properties} */
vg.Runtime.PropertySets.prototype.enter;
 /** @type {!vg.Runtime.Properties} */
vg.Runtime.PropertySets.prototype.exit;
 /** @type {!vg.Runtime.Properties} */
vg.Runtime.PropertySets.prototype.update;
 /** @type {!vg.Runtime.Properties} */
vg.Runtime.PropertySets.prototype.hover;
/**
 * @record
 * @struct
 */
vg.Runtime.Properties = function() {};

/* TODO: CallSignature: vg.Runtime */
/**
 * @record
 * @struct
 */
vg.Node = function() {};
 /** @type {!vg.Mark} */
vg.Node.prototype.def;
 /** @type {string} */
vg.Node.prototype.marktype;
 /** @type {boolean} */
vg.Node.prototype.interactive;
 /** @type {!Array<!vg.Node>} */
vg.Node.prototype.items;
 /** @type {!vg.Bounds} */
vg.Node.prototype.bounds;
 /** @type {!Object<string,?>} */
vg.Node.prototype.scales;
 /** @type {!Array<!vg.Node>} */
vg.Node.prototype.axisItems;

/**
 * @param {string} name
 * @return {boolean}
 */
vg.Node.prototype.hasPropertySet = function(name) {};

/**
 * @param {number} offset
 * @param {number} index
 * @return {!vg.Node}
 */
vg.Node.prototype.cousin = function(offset, index) {};

/**
 * @param {number} offset
 * @return {!vg.Node}
 */
vg.Node.prototype.sibling = function(offset) {};

/**
 * @return {!vg.Node}
 */
vg.Node.prototype.remove = function() {};

/**
 * @return {void}
 */
vg.Node.prototype.touch = function() {};
/**
 * @record
 * @struct
 */
vg.Defs = function() {};
 /** @type {number} */
vg.Defs.prototype.width;
 /** @type {number} */
vg.Defs.prototype.height;
 /** @type {!Array<number>} */
vg.Defs.prototype.viewport;
 /** @type {?} */
vg.Defs.prototype.padding;
 /** @type {!vg.Runtime.Marks} */
vg.Defs.prototype.marks;
 /** @type {!Array<!vg.Data>} */
vg.Defs.prototype.data;
/**
 * @record
 * @struct
 */
vg.Spec = function() {};
 /** @type {string} */
vg.Spec.prototype.name;
 /** @type {number} */
vg.Spec.prototype.width;
 /** @type {number} */
vg.Spec.prototype.height;
 /** @type {!Array<number>} */
vg.Spec.prototype.viewport;
 /** @type {(string|number|{top: number, left: number, right: number, bottom: number})} */
vg.Spec.prototype.padding;
 /** @type {!Array<!vg.Data>} */
vg.Spec.prototype.data;
 /** @type {!Array<!vg.Scale>} */
vg.Spec.prototype.scales;
 /** @type {!Array<!vg.Axis>} */
vg.Spec.prototype.axes;
 /** @type {!Array<!vg.Legend>} */
vg.Spec.prototype.legends;
 /** @type {!Array<(!vg.Mark|!vg.GroupMark)>} */
vg.Spec.prototype.marks;
/**
 * @record
 * @struct
 */
vg.Data = function() {};
 /** @type {string} */
vg.Data.prototype.name;
 /** @type {(!vg.Data.JsonFormat|!vg.Data.CsvOrTsvFormat|!vg.Data.TopoJsonFormat|!vg.Data.TreeJson)} */
vg.Data.prototype.format;
 /** @type {?} */
vg.Data.prototype.values;
 /** @type {string} */
vg.Data.prototype.source;
 /** @type {string} */
vg.Data.prototype.url;
 /** @type {!Array<!vg.Data.Transform>} */
vg.Data.prototype.transform;
/**
 * @record
 * @struct
 */
vg.Data.FormatBase = function() {};
 /** @type {string} */
vg.Data.FormatBase.prototype.type;
/**
 * @extends {vg.Data.FormatBase}
 * @record
 * @struct
 */
vg.Data.JsonFormat = function() {};
 /** @type {string} */
vg.Data.JsonFormat.prototype.type;
 /** @type {string} */
vg.Data.JsonFormat.prototype.property;
/**
 * @extends {vg.Data.FormatBase}
 * @record
 * @struct
 */
vg.Data.CsvOrTsvFormat = function() {};
 /** @type {string} */
vg.Data.CsvOrTsvFormat.prototype.type;
 /** @type {!Object<string,string>} */
vg.Data.CsvOrTsvFormat.prototype.parse;
/**
 * @extends {vg.Data.FormatBase}
 * @record
 * @struct
 */
vg.Data.TopoJsonFormat = function() {};
 /** @type {string} */
vg.Data.TopoJsonFormat.prototype.type;
 /** @type {string} */
vg.Data.TopoJsonFormat.prototype.feature;
 /** @type {string} */
vg.Data.TopoJsonFormat.prototype.mesh;
/**
 * @extends {vg.Data.FormatBase}
 * @record
 * @struct
 */
vg.Data.TreeJson = function() {};
 /** @type {string} */
vg.Data.TreeJson.prototype.type;
 /** @type {string} */
vg.Data.TreeJson.prototype.children;
 /** @type {!Object<string,string>} */
vg.Data.TreeJson.prototype.parse;

/** @typedef {(!vg.Data.JsonFormat|!vg.Data.CsvOrTsvFormat|!vg.Data.TopoJsonFormat|!vg.Data.TreeJson)} */
vg.Data.Format;
/**
 * @record
 * @struct
 */
vg.Data.Transform = function() {};
/**
 * @record
 * @struct
 */
vg.Scale = function() {};
 /** @type {string} */
vg.Scale.prototype.name;
 /** @type {string} */
vg.Scale.prototype.type;
 /** @type {?} */
vg.Scale.prototype.domain;
 /** @type {?} */
vg.Scale.prototype.domainMin;
 /** @type {?} */
vg.Scale.prototype.domainMax;
 /** @type {?} */
vg.Scale.prototype.range;
 /** @type {?} */
vg.Scale.prototype.rangeMin;
 /** @type {?} */
vg.Scale.prototype.rangeMax;
 /** @type {boolean} */
vg.Scale.prototype.reverse;
 /** @type {boolean} */
vg.Scale.prototype.round;
 /** @type {boolean} */
vg.Scale.prototype.points;
 /** @type {number} */
vg.Scale.prototype.padding;
 /** @type {boolean} */
vg.Scale.prototype.sort;
 /** @type {boolean} */
vg.Scale.prototype.clamp;
 /** @type {(string|boolean)} */
vg.Scale.prototype.nice;
 /** @type {number} */
vg.Scale.prototype.exponent;
 /** @type {boolean} */
vg.Scale.prototype.zero;
/**
 * @record
 * @struct
 */
vg.Axis = function() {};
 /** @type {string} */
vg.Axis.prototype.type;
 /** @type {string} */
vg.Axis.prototype.scale;
 /** @type {string} */
vg.Axis.prototype.orient;
 /** @type {string} */
vg.Axis.prototype.title;
 /** @type {number} */
vg.Axis.prototype.titleOffset;
 /** @type {string} */
vg.Axis.prototype.format;
 /** @type {number} */
vg.Axis.prototype.ticks;
 /** @type {!Array<?>} */
vg.Axis.prototype.values;
 /** @type {number} */
vg.Axis.prototype.subdivide;
 /** @type {number} */
vg.Axis.prototype.tickPadding;
 /** @type {number} */
vg.Axis.prototype.tickSize;
 /** @type {number} */
vg.Axis.prototype.tickSizeMajor;
 /** @type {number} */
vg.Axis.prototype.tickSizeMinor;
 /** @type {number} */
vg.Axis.prototype.tickSizeEnd;
 /** @type {?} */
vg.Axis.prototype.offset;
 /** @type {string} */
vg.Axis.prototype.layer;
 /** @type {boolean} */
vg.Axis.prototype.grid;
 /** @type {!vg.Axis.Properties} */
vg.Axis.prototype.properties;
/**
 * @record
 * @struct
 */
vg.Axis.Properties = function() {};
 /** @type {!vg.PropertySet} */
vg.Axis.Properties.prototype.ticks;
 /** @type {!vg.PropertySet} */
vg.Axis.Properties.prototype.minorTicks;
 /** @type {!vg.PropertySet} */
vg.Axis.Properties.prototype.grid;
 /** @type {!vg.PropertySet} */
vg.Axis.Properties.prototype.labels;
 /** @type {!vg.PropertySet} */
vg.Axis.Properties.prototype.title;
 /** @type {!vg.PropertySet} */
vg.Axis.Properties.prototype.axis;
/**
 * @record
 * @struct
 */
vg.Legend = function() {};
/**
 * @record
 * @struct
 */
vg.Mark = function() {};
 /** @type {string} */
vg.Mark.prototype.type;
 /** @type {string} */
vg.Mark.prototype.name;
 /** @type {string} */
vg.Mark.prototype.description;
 /** @type {!vg.Mark.From} */
vg.Mark.prototype.from;
 /** @type {string} */
vg.Mark.prototype.key;
 /** @type {!vg.ValueRef} */
vg.Mark.prototype.delay;
 /** @type {string} */
vg.Mark.prototype.ease;
 /** @type {boolean} */
vg.Mark.prototype.interactive;
 /** @type {!vg.PropertySets} */
vg.Mark.prototype.properties;
/**
 * @record
 * @struct
 */
vg.Mark.From = function() {};
 /** @type {string} */
vg.Mark.From.prototype.data;
 /** @type {string} */
vg.Mark.From.prototype.mark;
 /** @type {!Array<!vg.Data.Transform>} */
vg.Mark.From.prototype.transform;
/**
 * @extends {vg.Mark}
 * @record
 * @struct
 */
vg.GroupMark = function() {};
 /** @type {string} */
vg.GroupMark.prototype.type;
 /** @type {!Array<!vg.Scale>} */
vg.GroupMark.prototype.scales;
 /** @type {!Array<!vg.Axis>} */
vg.GroupMark.prototype.axes;
 /** @type {!Array<!vg.Legend>} */
vg.GroupMark.prototype.legends;
 /** @type {!Array<(!vg.Mark|!vg.GroupMark)>} */
vg.GroupMark.prototype.marks;
/**
 * @record
 * @struct
 */
vg.PropertySets = function() {};
 /** @type {!vg.PropertySet} */
vg.PropertySets.prototype.enter;
 /** @type {!vg.PropertySet} */
vg.PropertySets.prototype.exit;
 /** @type {!vg.PropertySet} */
vg.PropertySets.prototype.update;
 /** @type {!vg.PropertySet} */
vg.PropertySets.prototype.hover;
/**
 * @record
 * @struct
 */
vg.PropertySet = function() {};
 /** @type {!vg.ValueRef} */
vg.PropertySet.prototype.x;
 /** @type {!vg.ValueRef} */
vg.PropertySet.prototype.x2;
 /** @type {!vg.ValueRef} */
vg.PropertySet.prototype.width;
 /** @type {!vg.ValueRef} */
vg.PropertySet.prototype.y;
 /** @type {!vg.ValueRef} */
vg.PropertySet.prototype.y2;
 /** @type {!vg.ValueRef} */
vg.PropertySet.prototype.height;
 /** @type {!vg.ValueRef} */
vg.PropertySet.prototype.opacity;
 /** @type {!vg.ValueRef} */
vg.PropertySet.prototype.fill;
 /** @type {!vg.ValueRef} */
vg.PropertySet.prototype.fillOpacity;
 /** @type {!vg.ValueRef} */
vg.PropertySet.prototype.stroke;
 /** @type {!vg.ValueRef} */
vg.PropertySet.prototype.strokeWidth;
 /** @type {!vg.ValueRef} */
vg.PropertySet.prototype.strokeOpacity;
 /** @type {!vg.ValueRef} */
vg.PropertySet.prototype.strokeDash;
 /** @type {!vg.ValueRef} */
vg.PropertySet.prototype.strokeDashOffset;
 /** @type {!vg.ValueRef} */
vg.PropertySet.prototype.size;
 /** @type {!vg.ValueRef} */
vg.PropertySet.prototype.shape;
 /** @type {!vg.ValueRef} */
vg.PropertySet.prototype.path;
 /** @type {!vg.ValueRef} */
vg.PropertySet.prototype.innerRadius;
 /** @type {!vg.ValueRef} */
vg.PropertySet.prototype.outerRadius;
 /** @type {!vg.ValueRef} */
vg.PropertySet.prototype.startAngle;
 /** @type {!vg.ValueRef} */
vg.PropertySet.prototype.endAngle;
 /** @type {!vg.ValueRef} */
vg.PropertySet.prototype.interpolate;
 /** @type {!vg.ValueRef} */
vg.PropertySet.prototype.tension;
 /** @type {!vg.ValueRef} */
vg.PropertySet.prototype.align;
 /** @type {!vg.ValueRef} */
vg.PropertySet.prototype.baseline;
 /** @type {!vg.ValueRef} */
vg.PropertySet.prototype.url;
 /** @type {!vg.ValueRef} */
vg.PropertySet.prototype.text;
 /** @type {!vg.ValueRef} */
vg.PropertySet.prototype.dx;
 /** @type {!vg.ValueRef} */
vg.PropertySet.prototype.dy;
 /** @type {!vg.ValueRef} */
vg.PropertySet.prototype.angle;
 /** @type {!vg.ValueRef} */
vg.PropertySet.prototype.font;
 /** @type {!vg.ValueRef} */
vg.PropertySet.prototype.fontSize;
 /** @type {!vg.ValueRef} */
vg.PropertySet.prototype.fontWeight;
 /** @type {!vg.ValueRef} */
vg.PropertySet.prototype.fontStyle;
/**
 * @record
 * @struct
 */
vg.ValueRef = function() {};
 /** @type {?} */
vg.ValueRef.prototype.value;
 /** @type {?} */
vg.ValueRef.prototype.field;
 /** @type {?} */
vg.ValueRef.prototype.group;
 /** @type {?} */
vg.ValueRef.prototype.scale;
 /** @type {number} */
vg.ValueRef.prototype.mult;
 /** @type {number} */
vg.ValueRef.prototype.offset;
 /** @type {boolean} */
vg.ValueRef.prototype.band;
 /** @type {!vg.Parse} */
vg.parse;
/** @const */
vg.scene = {};

/**
 * @param {!vg.Node} mark
 * @return {!vg.Node}
 */
vg.scene.item = function(mark) {};
 /** @type {number} */
vg.Bounds.prototype.x1;
 /** @type {number} */
vg.Bounds.prototype.y1;
 /** @type {number} */
vg.Bounds.prototype.x2;
 /** @type {number} */
vg.Bounds.prototype.y2;

/**
 * @return {!vg.Bounds}
 */
vg.Bounds.prototype.clear = function() {};

/**
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @return {!vg.Bounds}
 */
vg.Bounds.prototype.set = function(x1, y1, x2, y2) {};

/**
 * @param {number} x
 * @param {number} y
 * @return {!vg.Bounds}
 */
vg.Bounds.prototype.add = function(x, y) {};

/**
 * @param {number} d
 * @return {!vg.Bounds}
 */
vg.Bounds.prototype.expand = function(d) {};

/**
 * @return {!vg.Bounds}
 */
vg.Bounds.prototype.round = function() {};

/**
 * @param {number} dx
 * @param {number} dy
 * @return {!vg.Bounds}
 */
vg.Bounds.prototype.translate = function(dx, dy) {};

/**
 * @param {number} angle
 * @param {number} x
 * @param {number} y
 * @return {!vg.Bounds}
 */
vg.Bounds.prototype.rotate = function(angle, x, y) {};

/**
 * @param {!vg.Bounds} b
 * @return {!vg.Bounds}
 */
vg.Bounds.prototype.union = function(b) {};

/**
 * @param {!vg.Bounds} b
 * @return {boolean}
 */
vg.Bounds.prototype.encloses = function(b) {};

/**
 * @param {!vg.Bounds} b
 * @return {boolean}
 */
vg.Bounds.prototype.intersects = function(b) {};

/**
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
vg.Bounds.prototype.contains = function(x, y) {};

/**
 * @return {number}
 */
vg.Bounds.prototype.width = function() {};

/**
 * @return {number}
 */
vg.Bounds.prototype.height = function() {};

/* TODO: ExportAssignment in  */

/* TODO: NamespaceExportDeclaration in  */

/* TODO: NamespaceExportDeclaration in  */
