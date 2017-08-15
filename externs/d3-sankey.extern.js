/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/d3-sankey/index.d.ts:

/* TODO: ImportDeclaration in  */
/**
 * @record
 * @struct
 */
function SankeyExtraProperties() {}

/* TODO: IndexSignature:  */
/**
 * @record
 * @struct
 */
function SankeyNodeMinimal() {}
 /** @type {!Array<?>} */
SankeyNodeMinimal.prototype.sourceLinks;
 /** @type {!Array<?>} */
SankeyNodeMinimal.prototype.targetLinks;
 /** @type {number} */
SankeyNodeMinimal.prototype.value;
 /** @type {number} */
SankeyNodeMinimal.prototype.index;
 /** @type {number} */
SankeyNodeMinimal.prototype.depth;
 /** @type {number} */
SankeyNodeMinimal.prototype.height;
 /** @type {number} */
SankeyNodeMinimal.prototype.x0;
 /** @type {number} */
SankeyNodeMinimal.prototype.x1;
 /** @type {number} */
SankeyNodeMinimal.prototype.y0;
 /** @type {number} */
SankeyNodeMinimal.prototype.y1;

/** @typedef {?} */
var SankeyNode;
/**
 * @record
 * @struct
 */
function SankeyLinkMinimal() {}
 /** @type {(string|number|?)} */
SankeyLinkMinimal.prototype.source;
 /** @type {(string|number|?)} */
SankeyLinkMinimal.prototype.target;
 /** @type {number} */
SankeyLinkMinimal.prototype.value;
 /** @type {number} */
SankeyLinkMinimal.prototype.y0;
 /** @type {number} */
SankeyLinkMinimal.prototype.y1;
 /** @type {number} */
SankeyLinkMinimal.prototype.width;
 /** @type {number} */
SankeyLinkMinimal.prototype.index;

/** @typedef {?} */
var SankeyLink;
/**
 * @record
 * @struct
 */
function SankeyGraph() {}
 /** @type {!Array<?>} */
SankeyGraph.prototype.nodes;
 /** @type {!Array<?>} */
SankeyGraph.prototype.links;
/**
 * @record
 * @struct
 */
function SankeyLayout() {}

/* TODO: CallSignature:  */

/**
 * Recomputes the specified graph’s links’ positions, updating the following properties of each link:
 * 
 * - link.sy: the link’s vertical starting position (at source node)
 * - link.ty: the link’s vertical end position (at target node)
 * 
 * This method is intended to be called after computing the initial Sankey layout, for example when the diagram is repositioned interactively.
 * 
 * @param {?} graph
 * @return {?}
 */
SankeyLayout.prototype.update = function(graph) {};

/**
 * Return the current nodes accessor function, which defaults to a function returning the "nodes" property of the
 * first argument it is invoked with.
 * Set the Sankey generator's nodes accessor to a function returning the specified array of objects and returns this Sankey layout generator.
 * 
 * Set the Sankey generator's nodes accessor to the specified function and returns this Sankey layout generator.
 * 
 * @param {!Array<?>|?=} nodes Array of nodes. / A nodes accessor function. The function is invoked when the Sankey layout is generated, being passed any arguments passed to the Sankey generator.
 * This function must return an array of nodes.
 * @return {?}
 */
SankeyLayout.prototype.nodes = function(nodes) {};

/**
 * Return the current links accessor function, which defaults to a function returning the "links" property of the
 * first argument it is invoked with.
 * Set the Sankey generator's links accessor to a function returning the specified array of objects and returns this Sankey layout generator.
 * 
 * Set the Sankey generator's links accessor to the specified function and returns this Sankey layout generator.
 * 
 * @param {!Array<?>|?=} links Array of links. / A links accessor function. The function is invoked when the Sankey layout is generated, being passed any arguments passed to the Sankey generator.
 * This function must return an array of links.
 * @return {?}
 */
SankeyLayout.prototype.links = function(links) {};

/**
 * Return the current node id accessor.
 * The default accessor is a function being passed in a Sankey layout node and returning its numeric node.index.
 * Set the node id accessor to the specified function and return this Sankey layout generator.
 * 
 * The default accessor is a function being passed in a Sankey layout node and returning its numeric node.index.
 * The default id accessor allows each link’s source and target to be specified as a zero-based index into the nodes array.
 * 
 * @param {?=} nodeId A node id accessor function being passed a node in the Sankey graph and returning its id.
 * @return {?}
 */
SankeyLayout.prototype.nodeId = function(nodeId) {};

/**
 * Return the current node alignment method, which defaults to d3.sankeyJustify.
 * Set the node alignment method the specified function and return this Sankey layout generator.
 * 
 * @param {?=} nodeAlign A node alignment function which is evaluated for each input node in order,
 * being passed the current node and the total depth n of the graph (one plus the maximum node.depth),
 * and must return an integer between 0 and n - 1 that indicates the desired horizontal position of the node in the generated Sankey diagram.
 * @return {?}
 */
SankeyLayout.prototype.nodeAlign = function(nodeAlign) {};

/**
 * Return the current node width, which defaults to 24.
 * Set the node width to the specified number and return this Sankey layout generator.
 * 
 * @param {number=} width Width of node in pixels, which defaults to 24.
 * @return {number|?}
 */
SankeyLayout.prototype.nodeWidth = function(width) {};

/**
 * Return the current node padding, which defaults to 8.
 * 
 * Node padding refers to the vertical space between nodes which occupy the same horizontal space.
 * Set the vertical separation between nodes at each column to the specified number and return this Sankey layout generator.
 * 
 * @param {number=} padding Node padding, i.e. vertical separation between nodes at each column, in pixels, which defaults to 8.
 * @return {number|?}
 */
SankeyLayout.prototype.nodePadding = function(padding) {};

/**
 * Return the current extent which defaults to [[0, 0], [1, 1]].
 * Set the extent of the Sankey layout to the specified bounds and returns this Sankey layout generator.
 * 
 * @param {!Array<?>=} extent Extent bounds for the layout. The extent bounds are specified as an array [[x0, y0], [x1, y1]],
 * where x0 is the left side of the extent, y0 is the top, x1 is the right and y1 is the bottom. The default is [[0, 0], [1, 1]].
 * @return {!Array<?>|?}
 */
SankeyLayout.prototype.extent = function(extent) {};

/**
 * Return the current layout size in pixels. The size is a two element array of [width, height] which defaults to [1, 1].
 * Set the size of the layout and return this Sankey layout generator.
 * This convenience method is equivalent to using extent([[0, 0], [width, height]]).
 * 
 * @param {!Array<?>=} size A two element array of [width, height] in pixels which defaults to [1, 1].
 * @return {!Array<?>|?}
 */
SankeyLayout.prototype.size = function(size) {};

/**
 * Return the current number of relaxation iterations, which defaults to 32.
 * Set the number of relaxation iterations when generating the layout and return this Sankey layout generator.
 * 
 * @param {number=} iterations Number of relaxation iterations, which defaluts to 32.
 * @return {number|?}
 */
SankeyLayout.prototype.iterations = function(iterations) {};

/**
 * Get a Sankey layout generator.
 * 
 * Invoking sankey() without generics, means the node type and link type assume no user-defined attributes, i.e.
 * only the attributes internally used by the Sankey layout generator.
 * 
 * Default nodes/links accessors are assumed.
 * Get a Sankey layout generator.
 * 
 * Default nodes/links accessors are assumed.
 * 
 * The first generic N refers to user-defined properties contained in the node data passed into
 * Sankey layout generator. These properties are IN EXCESS to the properties explicitly identified in the
 * SankeyNodeMinimal interface.
 * 
 * The second generic L refers to user-defined properties contained in the link data passed into
 * Sankey layout generator. These properties are IN EXCESS to the properties explicitly identified in the
 * SankeyLinkMinimal interface.
 * Get a Sankey layout generator.
 * 
 * The nodes/links accessors need to be configured to work with the data type of the first argument passed
 * in when invoking the Sankey lyout generator.
 * 
 * The first generic corresponds to the data type of the first argument passed in when invoking the Sankey layout generator,
 * and its nodes/links accessors.
 * 
 * The second generic N refers to user-defined properties contained in the node data passed into
 * Sankey layout generator. These properties are IN EXCESS to the properties explicitly identified in the
 * SankeyNodeMinimal interface.
 * 
 * The third generic L refers to user-defined properties contained in the link data passed into
 * Sankey layout generator. These properties are IN EXCESS to the properties explicitly identified in the
 * SankeyLinkMinimal interface.
 * @template N, L, Data
 * @return {?}
 */
function sankey() {}

/**
 * Compute the horizontal node position of a node in a Sankey layout with left alignment.
 * Returns (node.depth) to indicate the desired horizontal position of the node in the generated Sankey diagram.
 * 
 * @param {?} node Sankey node for which to calculate the horizontal node position.
 * @param {number} n Total depth n of the graph  (one plus the maximum node.depth)
 * @return {number}
 */
function sankeyLeft(node, n) {}

/**
 * Compute the horizontal node position of a node in a Sankey layout with right alignment.
 * Returns (n - 1 - node.height) to indicate the desired horizontal position of the node in the generated Sankey diagram.
 * 
 * @param {?} node Sankey node for which to calculate the horizontal node position.
 * @param {number} n Total depth n of the graph  (one plus the maximum node.depth)
 * @return {number}
 */
function sankeyRight(node, n) {}

/**
 * Compute the horizontal node position of a node in a Sankey layout with center alignment.
 * Like d3.sankeyLeft, except that nodes without any incoming links are moved as right as possible.
 * Returns an integer between 0 and n - 1 that indicates the desired horizontal position of the node in the generated Sankey diagram.
 * 
 * @param {?} node Sankey node for which to calculate the horizontal node position.
 * @param {number} n Total depth n of the graph  (one plus the maximum node.depth)
 * @return {number}
 */
function sankeyCenter(node, n) {}

/**
 * Compute the horizontal node position of a node in a Sankey layout with justified alignment.
 * Like d3.sankeyLeft, except that nodes without any outgoing links are moved to the far right.
 * Returns an integer between 0 and n - 1 that indicates the desired horizontal position of the node in the generated Sankey diagram.
 * 
 * @param {?} node Sankey node for which to calculate the horizontal node position.
 * @param {number} n Total depth n of the graph  (one plus the maximum node.depth)
 * @return {number}
 */
function sankeyJustify(node, n) {}

/**
 * Get a horizontal link shape suitable for a Sankey diagram.
 * Source and target accessors are pre-configured and work with the
 * default x- and y- accessors of the link shape generator.
 * Get a horizontal link shape suitable for a Sankey diagram.
 * Source and target accessors are pre-configured and work with the
 * default x- and y- accessors of the link shape generator.
 * 
 * The first generic N refers to user-defined properties contained in the node data passed into
 * Sankey layout generator. These properties are IN EXCESS to the properties explicitly identified in the
 * SankeyNodeMinimal interface.
 * 
 * The second generic L refers to user-defined properties contained in the link data passed into
 * Sankey layout generator. These properties are IN EXCESS to the properties explicitly identified in the
 * SankeyLinkMinimal interface.
 * @template N, L
 * @return {?}
 */
function sankeyLinkHorizontal() {}
