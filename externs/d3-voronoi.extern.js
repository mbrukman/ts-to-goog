/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/d3-voronoi/index.d.ts:
/**
 * @record
 * @struct
 */
function VoronoiPoint() {}

/* TODO: PropertySignature: 0 */

/* TODO: PropertySignature: 1 */
/**
 * @record
 * @struct
 */
function VoronoiPointPair() {}

/* TODO: PropertySignature: 0 */

/* TODO: PropertySignature: 1 */
/**
 * @record
 * @struct
 */
function VoronoiPolygon() {}
 /** @type {?} */
VoronoiPolygon.prototype.data;

/** @typedef {!Array<?>} */
var VoronoiTriangle;
/**
 * @extends {VoronoiPoint}
 * @record
 * @struct
 */
function VoronoiSite() {}
 /** @type {number} */
VoronoiSite.prototype.index;
 /** @type {?} */
VoronoiSite.prototype.data;
/**
 * @record
 * @struct
 */
function VoronoiCell() {}
 /** @type {?} */
VoronoiCell.prototype.site;
 /** @type {!Array<number>} */
VoronoiCell.prototype.halfEdges;
/**
 * @extends {VoronoiPointPair}
 * @record
 * @struct
 */
function VoronoiEdge() {}
 /** @type {?} */
VoronoiEdge.prototype.left;
 /** @type {?} */
VoronoiEdge.prototype.right;
/**
 * @record
 * @struct
 */
function VoronoiLink() {}
 /** @type {?} */
VoronoiLink.prototype.source;
 /** @type {?} */
VoronoiLink.prototype.target;
/**
 * @record
 * @struct
 */
function VoronoiLayout() {}

/* TODO: CallSignature:  */

/**
 * Return the current x-coordinate accessor,
 * which defaults to accessing the first element of an array (i.e. at index 0).
 * Set the x-coordinate accessor and return the layout.
 * @param {?=} x An accessor function which takes a data element as input and return a
 * numeric value for the x-coordinate.
 * @return {?}
 */
VoronoiLayout.prototype.x = function(x) {};

/**
 * Return the current y-coordinate accessor,
 * which defaults to accessing the second element of an array (i.e. at index 1).
 * Set the y-coordinate accessor and return the layout.
 * @param {?=} y An accessor function which takes a data element as input and return a
 * numeric value for the y-coordinate.
 * @return {?}
 */
VoronoiLayout.prototype.y = function(y) {};

/**
 * Returns the current clip extent which defaults to null.
 * 
 * The extent bounds are specified as an array [[x0, y0], [x1, y1]],
 * where x0 is the left side of the extent, y0 is the top,
 * x1 is the right and y1 is the bottom.
 * 
 * A clip extent is required when using voronoi.polygons.
 * 
 * Set the clip extent of the Voronoi layout to the specified bounds and return the layout.
 * 
 * A clip extent is required when using voronoi.polygons.
 * 
 * @param {!Array<?>=} extent The extent bounds are specified as an array [[x0, y0], [x1, y1]],
 * where x0 is the left side of the extent, y0 is the top, x1 is the right and y1 is the bottom.
 * @return {!Array<?>|?}
 */
VoronoiLayout.prototype.extent = function(extent) {};

/**
 * Get the clip size of the Voronoi layout. Size is an alias for voronoi.extent
 * where the minimum x and y of the extent are ⟨0,0⟩.
 * Set the clip size and return the layout.
 * 
 * Size is an alias for voronoi.extent where the minimum x and y of the extent are ⟨0,0⟩.
 * 
 * @param {!Array<?>=} size An array representing the x- and y-size of the clip extent,
 * where the minimum x and y of the extent are ⟨0,0⟩.
 * @return {!Array<?>|?}
 */
VoronoiLayout.prototype.size = function(size) {};

/**
 * Return an array of polygons clipped to the extent, one for each input point in the specified data points,
 * corresponding to the cells in the computed Voronoi diagram.
 * 
 * Each polygon is represented as an array of points [x, y] where x and y are the point coordinates,
 * and a data field that refers to the corresponding element in data.
 * Polygons are open: they do not contain a closing point that duplicates the first point;
 * a triangle, for example, is an array of three points. Polygons are also counterclockwise,
 * assuming the origin ⟨0,0⟩ is in the top-left corner.
 * 
 * If the cell’s site is coincident with an earlier site, the associated polygon is null.
 * 
 * Important: Using polygon requires the extent to be set for the layout.
 * 
 * @param {!Array<?>} data Array of data points.
 * @return {!Array<?>}
 */
VoronoiLayout.prototype.polygons = function(data) {};

/**
 * Return the Delaunay triangulation of the specified data array as an array of triangles.
 * Each triangle is a three-element array of elements from data.
 * 
 * @param {!Array<?>} data Array of data points.
 * @return {!Array<!Array<?>>}
 */
VoronoiLayout.prototype.triangles = function(data) {};

/**
 * Return the Delaunay triangulation of the specified data array as an array of links.
 * Each link has source and target attributes referring to elements in data.
 * 
 * @param {!Array<?>} data Array of data points.
 * @return {!Array<?>}
 */
VoronoiLayout.prototype.links = function(data) {};
/**
 * @record
 * @struct
 */
function VoronoiDiagram() {}
 /** @type {!Array<?>} */
VoronoiDiagram.prototype.edges;
 /** @type {!Array<?>} */
VoronoiDiagram.prototype.cells;

/**
 * Return an array of polygons clipped to the extent, one for each cell in the diagram.
 * Each polygon is represented as an array of points [x, y] where x and y are the point coordinates,
 * and a data field that refers to the corresponding element in data.
 * Polygons are open: they do not contain a closing point that duplicates the first point;
 * a triangle, for example, is an array of three points. Polygons are also counterclockwise,
 * assuming the origin ⟨0,0⟩ is in the top-left corner.
 * 
 * If the cell’s site is coincident with an earlier site, the associated polygon is null.
 * @return {!Array<?>}
 */
VoronoiDiagram.prototype.polygons = function() {};

/**
 * Returns the Delaunay triangulation of the specified data array as an array of triangles.
 * Each triangle is a three-element array of elements from data.
 * Since the triangulation is computed as the dual of the Voronoi diagram, and the Voronoi diagram is clipped by the extent,
 * a subset of the Delaunay triangulation is returned.
 * @return {!Array<!Array<?>>}
 */
VoronoiDiagram.prototype.triangles = function() {};

/**
 * Returns the Delaunay triangulation of the specified data array as an array of links, one for each edge in the mesh.
 * Each link has the following attributes:
 * - source (the source node, an element in data)
 * - target (the target node, an element in data)
 * 
 * Since the triangulation is computed as the dual of the Voronoi diagram, and the Voronoi diagram is clipped by the extent, a subset of the Delaunay links is returned.
 * @return {!Array<?>}
 */
VoronoiDiagram.prototype.links = function() {};

/**
 * Return the nearest Voronoi Site to point [x, y]. If radius is specified, only sites within radius distance are considered.
 * If no Voronoi Site can be found (within the specified radius), null is returned.
 * 
 * @param {number} x x-coordinate
 * @param {number} y y-coordinate
 * @param {number=} radius Optional parameter for search radius around [x, y]
 * @return {?}
 */
VoronoiDiagram.prototype.find = function(x, y, radius) {};

/**
 * Creates a new Voronoi layout with default x- and y- accessors and a null extent.
 * 
 * Without specifying a generic the layout is assumed to be based on data represented
 * by a two-dimensional coordinate [number, number] for x- and y-coordinate, respectively.
 * Creates a new Voronoi layout with default x- and y- accessors and a null extent.
 * x- and y-accessors may have to be set to correspond to the data type provided by the
 * generic.
 * 
 * The generic refers to the type of the data for the corresponding element.
 * @template T
 * @return {?}
 */
function voronoi() {}