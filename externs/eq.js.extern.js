/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/eq.js/index.d.ts:
 /** @type {!eq.EqjsStatic} */
var eqjs;
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "eq.js"
/** @const */
tsickle_declare_module.eq_js = {};

/* TODO: ExportAssignment in tsickle_declare_module.eq_js */
/** @const */
var eq = {};

/** @typedef {(!HTMLElement|!HTMLCollectionOf<!Element>|!Array<!HTMLElement>|!NodeList|!JQuery)} */
eq.AvailableElementType;
/**
 * @record
 * @struct
 */
eq.EqjsStatic = function() {};
 /** @type {!eq.EqjsNodesTable} */
eq.EqjsStatic.prototype.nodes;
 /** @type {number} */
eq.EqjsStatic.prototype.nodesLength;

/**
 * Runs through all nodes and finds their widths and points
 * @param {(!HTMLElement|!HTMLCollectionOf<!Element>|!Array<!HTMLElement>|!NodeList|!JQuery)} nodes
 * @param {!Function=} callback function to use as a callback once query and nodeWrites have finished
 * @return {void}
 */
eq.EqjsStatic.prototype.query = function(nodes, callback) {};

/**
 *  Refreshes the list of nodes for eqjs to work with
 * @return {void}
 */
eq.EqjsStatic.prototype.refreshNodes = function() {};

/**
 * Sorts a simple object (key: value) by value and returns a sorted object.
 * @param {string} obj e.g. "small: 380, medium: 490, large: 600"
 * @return {!Array<!eq.EqjsKeyValuePair>}
 */
eq.EqjsStatic.prototype.sortObj = function(obj) {};

/**
 * Runs through all nodes and writes their eq status.
 * @param {(!HTMLElement|!HTMLCollectionOf<!Element>|!Array<!HTMLElement>|!NodeList|!JQuery)=} nodes An array or NodeList of nodes to query
 * @return {void}
 */
eq.EqjsStatic.prototype.nodeWrites = function(nodes) {};
/**
 * @record
 * @struct
 */
eq.EqjsKeyValuePair = function() {};
 /** @type {string} */
eq.EqjsKeyValuePair.prototype.key;
 /** @type {number} */
eq.EqjsKeyValuePair.prototype.value;
/**
 * @record
 * @struct
 */
eq.EqjsNodesTable = function() {};

/* TODO: IndexSignature: eq */
/**
 * @record
 * @struct
 */
function JQuery() {}