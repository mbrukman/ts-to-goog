/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/sigmajs/index.d.ts:
/** @const */
var SigmaJs = {};
/**
 * @record
 * @struct
 */
SigmaJs.Animation = function() {};

/**
 * @param {!SigmaJs.Camera} camera
 * @param {!Object<string,?>} target
 * @param {!Object<string,?>} options
 * @return {number}
 */
SigmaJs.Animation.prototype.camera = function(camera, target, options) {};
/**
 * @record
 * @struct
 */
SigmaJs.Camera = function() {};
 /** @type {number} */
SigmaJs.Camera.prototype.angle;
 /** @type {number} */
SigmaJs.Camera.prototype.ratio;
 /** @type {string} */
SigmaJs.Camera.prototype.readPrefix;
 /** @type {number} */
SigmaJs.Camera.prototype.x;
 /** @type {number} */
SigmaJs.Camera.prototype.y;

/**
 * @param {number} x
 * @param {number} y
 * @return {{x: number, y: number}}
 */
SigmaJs.Camera.prototype.cameraPosition = function(x, y) {};

/**
 * @param {!Object<string,?>} settings
 * @return {void}
 */
SigmaJs.Camera.prototype.goTo = function(settings) {};

/**
 * @param {number} x
 * @param {number} y
 * @return {{x: number, y: number}}
 */
SigmaJs.Camera.prototype.graphPosition = function(x, y) {};

/**
 * @param {string} setting
 * @return {?}
 */
SigmaJs.Camera.prototype.settings = function(setting) {};
/**
 * @record
 * @struct
 */
SigmaJs.Canvas = function() {};
 /** @type {!Object<string,function(!SigmaJs.Edge, !SigmaJs.Node, !SigmaJs.Node, !Array<?>): void>} */
SigmaJs.Canvas.prototype.edges;
 /** @type {!Object<string,function(!SigmaJs.Node, !Array<?>): void>} */
SigmaJs.Canvas.prototype.labels;
 /** @type {!Object<string,function(!SigmaJs.Node, !Array<?>): void>} */
SigmaJs.Canvas.prototype.nodes;
/**
 * @record
 * @struct
 */
SigmaJs.Classes = function() {};
 /** @type {!SigmaJs.Configurable} */
SigmaJs.Classes.prototype.configurable;
 /** @type {!SigmaJs.Graph} */
SigmaJs.Classes.prototype.graph;
/**
 * @record
 * @struct
 */
SigmaJs.Configurable = function() {};

/* TODO: ConstructSignature: SigmaJs */

/* TODO: ConstructSignature: SigmaJs */

/* TODO: CallSignature: SigmaJs */
/**
 * @record
 * @struct
 */
SigmaJs.CustomShapes = function() {};

/**
 * @param {!SigmaJs.Sigma} sigma
 * @return {void}
 */
SigmaJs.CustomShapes.prototype.init = function(sigma) {};
/**
 * @record
 * @struct
 */
SigmaJs.DragNodes = function() {};

/* TODO: CallSignature: SigmaJs */
/**
 * @record
 * @struct
 */
SigmaJs.Edge = function() {};

/* TODO: IndexSignature: SigmaJs */
 /** @type {string} */
SigmaJs.Edge.prototype.color;
 /** @type {string} */
SigmaJs.Edge.prototype.id;
 /** @type {number} */
SigmaJs.Edge.prototype.size;
 /** @type {string} */
SigmaJs.Edge.prototype.source;
 /** @type {string} */
SigmaJs.Edge.prototype.target;
/**
 * @record
 * @struct
 */
SigmaJs.JsonParser = function() {};

/* TODO: CallSignature: SigmaJs */
/**
 * @record
 * @struct
 */
SigmaJs.GexfParser = function() {};

/* TODO: CallSignature: SigmaJs */
/**
 * @record
 * @struct
 */
SigmaJs.Graph = function() {};

/**
 * @param {!SigmaJs.Edge} edge
 * @return {!SigmaJs.Graph}
 */
SigmaJs.Graph.prototype.addEdge = function(edge) {};

/**
 * @param {!SigmaJs.Node} node
 * @return {!SigmaJs.Graph}
 */
SigmaJs.Graph.prototype.addNode = function(node) {};

/**
 * @param {string} name
 * @param {function(?): ?} method
 * @return {void}
 */
SigmaJs.Graph.prototype.addMethod = function(name, method) {};

/**
 * @return {!SigmaJs.Graph}
 */
SigmaJs.Graph.prototype.clear = function() {};

/**
 * @param {string|!Array<string>} id_or_ids
 * @param {string=} type
 * @return {number|!Array<number>}
 */
SigmaJs.Graph.prototype.degree = function(id_or_ids, type) {};

/**
 * @param {string} id
 * @return {!SigmaJs.Graph}
 */
SigmaJs.Graph.prototype.dropEdge = function(id) {};

/**
 * @param {string} id
 * @return {!SigmaJs.Graph}
 */
SigmaJs.Graph.prototype.dropNode = function(id) {};

/**
 * @param {string|!Array<string>=} id_or_ids
 * @return {!Array<!SigmaJs.Edge>|!SigmaJs.Edge}
 */
SigmaJs.Graph.prototype.edges = function(id_or_ids) {};

/**
 * @return {!SigmaJs.Graph}
 */
SigmaJs.Graph.prototype.kill = function() {};

/**
 * @param {string|!Array<string>=} id_or_ids
 * @return {!Array<!SigmaJs.Node>|!SigmaJs.Node}
 */
SigmaJs.Graph.prototype.nodes = function(id_or_ids) {};
/**
 * @record
 * @struct
 */
SigmaJs.GraphData = function() {};
 /** @type {!Array<!SigmaJs.Edge>} */
SigmaJs.GraphData.prototype.edges;
 /** @type {!Array<!SigmaJs.Node>} */
SigmaJs.GraphData.prototype.nodes;
/**
 * @record
 * @struct
 */
SigmaJs.Image = function() {};
 /** @type {number} */
SigmaJs.Image.prototype.clip;
 /** @type {number} */
SigmaJs.Image.prototype.scale;
 /** @type {string} */
SigmaJs.Image.prototype.url;
 /** @type {number} */
SigmaJs.Image.prototype.x;
 /** @type {number} */
SigmaJs.Image.prototype.y;
/**
 * @record
 * @struct
 */
SigmaJs.Miscellaneous = function() {};
 /** @type {!SigmaJs.Animation} */
SigmaJs.Miscellaneous.prototype.animation;
/**
 * @record
 * @struct
 */
SigmaJs.Node = function() {};

/* TODO: IndexSignature: SigmaJs */
 /** @type {string} */
SigmaJs.Node.prototype.color;
 /** @type {string} */
SigmaJs.Node.prototype.id;
 /** @type {?} */
SigmaJs.Node.prototype.image;
 /** @type {string} */
SigmaJs.Node.prototype.label;
 /** @type {number} */
SigmaJs.Node.prototype.size;
 /** @type {string} */
SigmaJs.Node.prototype.type;
 /** @type {number} */
SigmaJs.Node.prototype.x;
 /** @type {number} */
SigmaJs.Node.prototype.y;
/**
 * @record
 * @struct
 */
SigmaJs.Parsers = function() {};
 /** @type {!SigmaJs.JsonParser} */
SigmaJs.Parsers.prototype.json;
 /** @type {!SigmaJs.GexfParser} */
SigmaJs.Parsers.prototype.gexf;
/**
 * @record
 * @struct
 */
SigmaJs.Plugins = function() {};
 /** @type {!SigmaJs.DragNodes} */
SigmaJs.Plugins.prototype.dragNodes;
/**
 * @record
 * @struct
 */
SigmaJs.Renderer = function() {};
 /** @type {!HTMLElement} */
SigmaJs.Renderer.prototype.container;

/**
 * @return {!SigmaJs.Sigma}
 */
SigmaJs.Renderer.prototype.refresh = function() {};

/**
 * @return {!SigmaJs.Sigma}
 */
SigmaJs.Renderer.prototype.render = function() {};

/**
 * @return {!SigmaJs.Sigma}
 */
SigmaJs.Renderer.prototype.resize = function() {};

/**
 * @param {!SigmaJs.Settings} settings
 * @return {void}
 */
SigmaJs.Renderer.prototype.settings = function(settings) {};
/**
 * @record
 * @struct
 */
SigmaJs.RendererConfigs = function() {};
 /** @type {!Element} */
SigmaJs.RendererConfigs.prototype.container;
 /** @type {string} */
SigmaJs.RendererConfigs.prototype.id;
 /** @type {string} */
SigmaJs.RendererConfigs.prototype.type;
/**
 * @record
 * @struct
 */
SigmaJs.ShapeLibrary = function() {};

/**
 * @return {?}
 */
SigmaJs.ShapeLibrary.prototype.enumerate = function() {};
/**
 * @record
 * @struct
 */
SigmaJs.Sigma = function() {};
 /** @type {!Array<!SigmaJs.Camera>} */
SigmaJs.Sigma.prototype.cameras;
 /** @type {!SigmaJs.Graph} */
SigmaJs.Sigma.prototype.graph;
 /** @type {!Array<!SigmaJs.Renderer>} */
SigmaJs.Sigma.prototype.renderers;

/**
 * @param {!SigmaJs.RendererConfigs=} configs
 * @return {!SigmaJs.Renderer}
 */
SigmaJs.Sigma.prototype.addRenderer = function(configs) {};

/**
 * @param {string} event
 * @param {function(?): void} callback
 * @return {void}
 */
SigmaJs.Sigma.prototype.bind = function(event, callback) {};

/**
 * @param {string|!SigmaJs.Renderer} renderer
 * @return {!SigmaJs.Sigma}
 */
SigmaJs.Sigma.prototype.killRenderer = function(renderer) {};

/**
 * @return {void}
 */
SigmaJs.Sigma.prototype.kill = function() {};

/**
 * @return {void}
 */
SigmaJs.Sigma.prototype.refresh = function() {};

/**
 * @param {string|!SigmaJs.Settings} key_or_settings
 * @return {?|void}
 */
SigmaJs.Sigma.prototype.settings = function(key_or_settings) {};

/**
 * @param {!Object<string,?>} configs
 * @return {void}
 */
SigmaJs.Sigma.prototype.configForceAtlas2 = function(configs) {};

/**
 * @return {boolean}
 */
SigmaJs.Sigma.prototype.isForceAtlas2Running = function() {};

/**
 * @return {void}
 */
SigmaJs.Sigma.prototype.killForceAtlas2 = function() {};

/**
 * @param {!Object<string,?>=} configs
 * @return {void}
 */
SigmaJs.Sigma.prototype.startForceAtlas2 = function(configs) {};

/**
 * @return {void}
 */
SigmaJs.Sigma.prototype.stopForceAtlas2 = function() {};
/**
 * @record
 * @struct
 */
SigmaJs.SigmaConfigs = function() {};
 /** @type {!Element} */
SigmaJs.SigmaConfigs.prototype.container;
 /** @type {!SigmaJs.GraphData} */
SigmaJs.SigmaConfigs.prototype.graph;
 /** @type {string} */
SigmaJs.SigmaConfigs.prototype.id;
 /** @type {!Array<!SigmaJs.Renderer>} */
SigmaJs.SigmaConfigs.prototype.renderers;
 /** @type {!Object<string,?>} */
SigmaJs.SigmaConfigs.prototype.settings;
/**
 * @record
 * @struct
 */
SigmaJs.SigmaFactory = function() {};

/* TODO: ConstructSignature: SigmaJs */

/* TODO: ConstructSignature: SigmaJs */

/* TODO: ConstructSignature: SigmaJs */

/* TODO: ConstructSignature: SigmaJs */
 /** @type {!SigmaJs.Canvas} */
SigmaJs.SigmaFactory.prototype.canvas;
 /** @type {!SigmaJs.Classes} */
SigmaJs.SigmaFactory.prototype.classes;
 /** @type {!SigmaJs.Miscellaneous} */
SigmaJs.SigmaFactory.prototype.misc;
 /** @type {!SigmaJs.Parsers} */
SigmaJs.SigmaFactory.prototype.parsers;
 /** @type {!SigmaJs.Plugins} */
SigmaJs.SigmaFactory.prototype.plugins;
 /** @type {!SigmaJs.SVG} */
SigmaJs.SigmaFactory.prototype.svg;
/**
 * @record
 * @struct
 */
SigmaJs.Settings = function() {};
 /** @type {boolean} */
SigmaJs.Settings.prototype.clone;
 /** @type {boolean} */
SigmaJs.Settings.prototype.immutable;
 /** @type {boolean} */
SigmaJs.Settings.prototype.verbose;
 /** @type {string} */
SigmaJs.Settings.prototype.defaultNodeType;
 /** @type {string} */
SigmaJs.Settings.prototype.defaultEdgeType;
 /** @type {string} */
SigmaJs.Settings.prototype.defaultLabelColor;
 /** @type {string} */
SigmaJs.Settings.prototype.defaultEdgeColor;
 /** @type {string} */
SigmaJs.Settings.prototype.defaultNodeColor;
 /** @type {string} */
SigmaJs.Settings.prototype.defaultLabelSize;
 /** @type {string} */
SigmaJs.Settings.prototype.edgeColor;
 /** @type {number} */
SigmaJs.Settings.prototype.minArrowSize;
 /** @type {string} */
SigmaJs.Settings.prototype.font;
 /** @type {string} */
SigmaJs.Settings.prototype.fontStyle;
 /** @type {string} */
SigmaJs.Settings.prototype.labelAlignment;
 /** @type {string} */
SigmaJs.Settings.prototype.labelColor;
 /** @type {string} */
SigmaJs.Settings.prototype.labelSize;
 /** @type {string} */
SigmaJs.Settings.prototype.labelSizeRatio;
 /** @type {number} */
SigmaJs.Settings.prototype.labelThreshold;
 /** @type {number} */
SigmaJs.Settings.prototype.webglOversamplingRatio;
 /** @type {number} */
SigmaJs.Settings.prototype.borderSize;
 /** @type {string} */
SigmaJs.Settings.prototype.defaultNodeBorderColor;
 /** @type {number} */
SigmaJs.Settings.prototype.hoverFont;
 /** @type {string} */
SigmaJs.Settings.prototype.hoverFontStyle;
 /** @type {string} */
SigmaJs.Settings.prototype.labelHoverShadow;
 /** @type {string} */
SigmaJs.Settings.prototype.labelHoverShadowColor;
 /** @type {string} */
SigmaJs.Settings.prototype.nodeHoverColor;
 /** @type {string} */
SigmaJs.Settings.prototype.defaultNodeHoverColor;
 /** @type {string} */
SigmaJs.Settings.prototype.labelHoverBGColor;
 /** @type {string} */
SigmaJs.Settings.prototype.defaultHoverLabelBGColor;
 /** @type {string} */
SigmaJs.Settings.prototype.labelHoverColor;
 /** @type {string} */
SigmaJs.Settings.prototype.defaultLabelHoverColor;
 /** @type {boolean} */
SigmaJs.Settings.prototype.singleHover;
 /** @type {string} */
SigmaJs.Settings.prototype.edgeHoverColor;
 /** @type {number} */
SigmaJs.Settings.prototype.edgeHoverSizeRatio;
 /** @type {string} */
SigmaJs.Settings.prototype.defaultEdgeHoverColor;
 /** @type {boolean} */
SigmaJs.Settings.prototype.edgeHoverExtremities;
 /** @type {boolean} */
SigmaJs.Settings.prototype.drawLabels;
 /** @type {boolean} */
SigmaJs.Settings.prototype.drawEdges;
 /** @type {boolean} */
SigmaJs.Settings.prototype.drawNodes;
 /** @type {boolean} */
SigmaJs.Settings.prototype.batchEdgesDrawing;
 /** @type {boolean} */
SigmaJs.Settings.prototype.hideEdgesOnMove;
 /** @type {number} */
SigmaJs.Settings.prototype.canvasEdgesBatchSize;
 /** @type {number} */
SigmaJs.Settings.prototype.webglEdgesBatchSize;
 /** @type {string} */
SigmaJs.Settings.prototype.scalingMode;
 /** @type {number} */
SigmaJs.Settings.prototype.sideMargin;
 /** @type {number} */
SigmaJs.Settings.prototype.minEdgeSize;
 /** @type {number} */
SigmaJs.Settings.prototype.maxEdgeSize;
 /** @type {number} */
SigmaJs.Settings.prototype.minNodeSize;
 /** @type {number} */
SigmaJs.Settings.prototype.maxNodeSize;
 /** @type {boolean} */
SigmaJs.Settings.prototype.touchEnabled;
 /** @type {boolean} */
SigmaJs.Settings.prototype.mouseEnabled;
 /** @type {boolean} */
SigmaJs.Settings.prototype.mouseWheelEnabled;
 /** @type {boolean} */
SigmaJs.Settings.prototype.doubleClickEnabled;
 /** @type {boolean} */
SigmaJs.Settings.prototype.eventsEnabled;
 /** @type {number} */
SigmaJs.Settings.prototype.zoomingRatio;
 /** @type {number} */
SigmaJs.Settings.prototype.doubleClickZoomingRatio;
 /** @type {number} */
SigmaJs.Settings.prototype.zoomMin;
 /** @type {number} */
SigmaJs.Settings.prototype.zoomMax;
 /** @type {number} */
SigmaJs.Settings.prototype.mouseZoomDuration;
 /** @type {number} */
SigmaJs.Settings.prototype.doubleClickZoomDuration;
 /** @type {number} */
SigmaJs.Settings.prototype.mouseInertiaDuration;
 /** @type {number} */
SigmaJs.Settings.prototype.mouseInertiaRatio;
 /** @type {number} */
SigmaJs.Settings.prototype.touchInertiaDuration;
 /** @type {number} */
SigmaJs.Settings.prototype.touchInertiaRatio;
 /** @type {number} */
SigmaJs.Settings.prototype.doubleClickTimeout;
 /** @type {number} */
SigmaJs.Settings.prototype.doubleTapTimeout;
 /** @type {number} */
SigmaJs.Settings.prototype.dragTimeout;
 /** @type {boolean} */
SigmaJs.Settings.prototype.autoResize;
 /** @type {?} */
SigmaJs.Settings.prototype.autoRescale;
 /** @type {boolean} */
SigmaJs.Settings.prototype.enableCamera;
 /** @type {boolean} */
SigmaJs.Settings.prototype.enableHovering;
 /** @type {boolean} */
SigmaJs.Settings.prototype.enableEdgeHovering;
 /** @type {number} */
SigmaJs.Settings.prototype.edgeHoverPrecision;
 /** @type {boolean} */
SigmaJs.Settings.prototype.rescaleIgnoreSize;
 /** @type {boolean} */
SigmaJs.Settings.prototype.skipErrors;
 /** @type {number} */
SigmaJs.Settings.prototype.nodesPowRatio;
 /** @type {number} */
SigmaJs.Settings.prototype.edgesPowRatio;
 /** @type {number} */
SigmaJs.Settings.prototype.animationsTime;
/**
 * @record
 * @struct
 */
SigmaJs.SVG = function() {};
 /** @type {?} */
SigmaJs.SVG.prototype.edges;
 /** @type {!Object<string,!SigmaJs.SVGObject<!SigmaJs.Node>>} */
SigmaJs.SVG.prototype.labels;
 /** @type {!Object<string,!SigmaJs.SVGObject<!SigmaJs.Node>>} */
SigmaJs.SVG.prototype.nodes;
/**
 * @record
 * @struct
 */
SigmaJs.SVGEdgeLabels = function() {};

/* TODO: IndexSignature: SigmaJs */
/**
 * @record
 * @struct
 */
SigmaJs.SVGObject = function() {};
 /** @type {function(T, !Array<?>): !Element} */
SigmaJs.SVGObject.prototype.create;
 /** @type {function(T, !Array<?>): void} */
SigmaJs.SVGObject.prototype.update;
 /** @type {!SigmaJs.SigmaFactory} */
var sigma;
 /** @type {!SigmaJs.CustomShapes} */
var CustomShapes;
 /** @type {!SigmaJs.CustomShapes} */
var ShapeLibrary;
