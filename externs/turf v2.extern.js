/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/turf v2/index.d.ts:
/** @const */
var turf = {};

/**
 * Calculates a series of aggregations for a set of points within a set of polygons.
 * Sum, average, count, min, max, and deviation are supported.
 * @param {?} polygons Polygons with values on which to aggregate
 * @param {?} points Points to be aggregated
 * @param {!Array<{aggregation: string, inField: string, outField: string}>} aggregations An array of aggregation objects
 * @return {?} Polygons with properties listed based on outField values in aggregations
 */
turf.aggregate = function(polygons, points, aggregations) {};

/**
 * Calculates the average value of a field for a set of points within a set of polygons.
 * @param {?} polygons Polygons with values on which to average
 * @param {?} points Points from which to calculate the average
 * @param {string} field The field in the points features from which to pull values to average
 * @param {string} outField The field in polygons to put results of the averages
 * @return {?} Polygons with the value of outField set to the calculated averages
 */
turf.average = function(polygons, points, field, outField) {};

/**
 * Takes a set of points and a set of polygons and calculates the number of points that fall within the set of polygons.
 * @param {?} polygons Input polygons
 * @param {?} points Input points
 * @param {string} countField A field to append to the attributes of the Polygon features representing Point counts
 * @return {?} Polygons with countField appended
 */
turf.count = function(polygons, points, countField) {};

/**
 * Calculates the standard deviation value of a field for a set of points within a set of polygons.
 * @param {?} polygons Input polygons
 * @param {?} points Input points
 * @param {string} inField The field in points from which to aggregate
 * @param {string} outField The field to append to polygons representing deviation
 * @return {?} Polygons with appended field representing deviation
 */
turf.deviation = function(polygons, points, inField, outField) {};

/**
 * Calculates the maximum value of a field for a set of points within a set of polygons.
 * @param {?} polygons Input polygons
 * @param {?} points Input points
 * @param {string} inField The field in input data to analyze
 * @param {string} outField The field in which to store results
 * @return {?} Polygons with properties listed as outField values
 */
turf.max = function(polygons, points, inField, outField) {};

/**
 * Calculates the median value of a field for a set of points within a set of polygons.
 * @param {?} polygons Input polygons
 * @param {?} points Input points
 * @param {string} inField The field in input data to analyze
 * @param {string} outField The field in which to store results
 * @return {?} Polygons with properties listed as outField values
 */
turf.median = function(polygons, points, inField, outField) {};

/**
 * Calculates the minimum value of a field for a set of points within a set of polygons.
 * @param {?} polygons Input polygons
 * @param {?} points Input points
 * @param {string} inField The field in input data to analyze
 * @param {string} outField The field in which to store results
 * @return {?} Polygons with properties listed as outField values
 */
turf.min = function(polygons, points, inField, outField) {};

/**
 * Calculates the sum of a field for a set of points within a set of polygons.
 * @param {?} polygons Input polygons
 * @param {?} points Input points
 * @param {string} inField The field in input data to analyze
 * @param {string} outField The field in which to store results
 * @return {?} Polygons with properties listed as outField
 */
turf.sum = function(polygons, points, inField, outField) {};

/**
 * Calculates the variance value of a field for a set of points within a set of polygons.
 * @param {?} polygons Input polygons
 * @param {?} points Input points
 * @param {string} inField The field in input data to analyze
 * @param {string} outField The field in which to store results
 * @return {?} Polygons with properties listed as outField
 */
turf.variance = function(polygons, points, inField, outField) {};

/**
 * Takes a line and returns a point at a specified distance along the line.
 * @param {?} line Input line
 * @param {number} distance Distance along the line
 * @param {string=} units
 * @return {?} Point along the line
 */
turf.along = function(line, distance, units) {};

/**
 * Takes one or more features and returns their area in square meters.
 * @param {?} input Input features
 * @return {number} Area in square meters
 */
turf.area = function(input) {};

/**
 * Takes a bbox and returns an equivalent polygon.
 * @param {!Array<number>} bbox An Array of bounding box coordinates in the form: [xLow, yLow, xHigh, yHigh]
 * @return {?} A Polygon representation of the bounding box
 */
turf.bboxPolygon = function(bbox) {};

/**
 * Takes two points and finds the geographic bearing between them.
 * @param {?} start Starting Point
 * @param {?} end Ending point
 * @return {number} Bearing in decimal degrees
 */
turf.bearing = function(start, end) {};

/**
 * Takes a FeatureCollection and returns the absolute center point of all features.
 * @param {?} features Input features
 * @return {?} A Point feature at the absolute center point of all input features
 */
turf.center = function(features) {};

/**
 * Takes one or more features and calculates the centroid using the arithmetic mean of all vertices.
 * This lessens the effect of small islands and artifacts when calculating the centroid of a set of polygons.
 * @param {?} features Input features
 * @return {?} The centroid of the input features
 */
turf.centroid = function(features) {};

/**
 * Takes a Point and calculates the location of a destination point given a distance in degrees, radians, miles, or kilometers; and bearing in degrees.
 * This uses the Haversine formula to account for global curvature.
 * @param {?} start Starting point
 * @param {number} distance Distance from the starting point
 * @param {number} bearing Ranging from -180 and 180
 * @param {string} units 'miles', 'kilometers', 'radians', or 'degrees'
 * @return {?} Destination point
 */
turf.destination = function(start, distance, bearing, units) {};

/**
 * Calculates the distance between two points in degress, radians, miles, or kilometers.
 * This uses the Haversine formula to account for global curvature.
 * @param {?} from Origin point
 * @param {?} to Destination point
 * @param {string=} units
 * @return {number} Distance between the two points
 */
turf.distance = function(from, to, units) {};

/**
 * Takes any number of features and returns a rectangular Polygon that encompasses all vertices.
 * @param {?} fc Input features
 * @return {?} A rectangular Polygon feature that encompasses all vertices
 */
turf.envelope = function(fc) {};

/**
 * Takes a set of features, calculates the extent of all input features, and returns a bounding box.
 * @param {?} input Input features
 * @return {!Array<number>} The bounding box of input given as an array in WSEN order (west, south, east, north)
 */
turf.extent = function(input) {};

/**
 * Takes a line and measures its length in the specified units.
 * @param {?} line Line to measure
 * @param {string} units 'miles', 'kilometers', 'radians', or 'degrees'
 * @return {number} Length of the input line
 */
turf.lineDistance = function(line, units) {};

/**
 * Takes two points and returns a point midway between them.
 * @param {?} pt1 First point
 * @param {?} pt2 Second point
 * @return {?} A point midway between pt1 and pt2
 */
turf.midpoint = function(pt1, pt2) {};

/**
 * Takes a feature and returns a Point guaranteed to be on the surface of the feature. Given a Polygon, the point will be in the area of the polygon.
 * Given a LineString, the point will be along the string. Given a Point, the point will the same as the input.
 * @param {?} input Any feature or set of features
 * @return {?} A point on the surface of input
 */
turf.pointOnSurface = function(input) {};

/**
 * Takes a bounding box and returns a new bounding box with a size expanded or contracted by a factor of X.
 * @param {!Array<number>} bbox A bounding box
 * @param {number} factor The ratio of the new bbox to the input bbox
 * @return {!Array<number>} The resized bbox
 */
turf.size = function(bbox, factor) {};

/**
 * Takes a bounding box and calculates the minimum square bounding box that would contain the input.
 * @param {!Array<number>} bbox A bounding box
 * @return {!Array<number>} A square surrounding bbox
 */
turf.square = function(bbox) {};

/**
 * Takes a line and returns a curved version by applying a Bezier spline algorithm.
 * The bezier spline implementation is by Leszek Rybicki.
 * @param {?} line Input LineString
 * @param {number=} resolution
 * @param {number=} sharpness
 * @return {?} Curved line
 */
turf.bezier = function(line, resolution, sharpness) {};

/**
 * Calculates a buffer for input features for a given radius. Units supported are miles, kilometers, and degrees.
 * @param {?} feature Input to be buffered
 * @param {number} distance Distance to draw the buffer
 * @param {string} units 'miles', 'kilometers', 'radians', or 'degrees'
 * @return {?} Buffered features
 */
turf.buffer = function(feature, distance, units) {};

/**
 * Takes a set of points and returns a concave hull polygon. Internally, this implements a Monotone chain algorithm.
 * @param {?} points Input points
 * @param {number} maxEdge The size of an edge necessary for part of the hull to become concave (in miles)
 * @param {string} units Used for maxEdge distance (miles or kilometers)
 * @return {?} A concave hull
 */
turf.concave = function(points, maxEdge, units) {};

/**
 * Takes a set of points and returns a convex hull polygon. Internally this uses the convex-hull module that implements a monotone chain hull.
 * @param {?} input Input points
 * @return {?} A convex hull
 */
turf.convex = function(input) {};

/**
 * Finds the difference between two polygons by clipping the second polygon from the first.
 * @param {?} poly1 Input Polygon feaure
 * @param {?} poly2 Polygon feature to difference from poly1
 * @return {?} A Polygon feature showing the area of poly1 excluding the area of poly2
 */
turf.difference = function(poly1, poly2) {};

/**
 * Takes two polygons and finds their intersection.
 *  If they share a border, returns the border; if they don't intersect, returns undefined.
 * @param {?} poly1 The first polygon
 * @param {?} poly2 The second polygon
 * @return {?} If poly1 and poly2 overlap, returns a Polygon feature representing the area they overlap;
 * if poly1 and poly2 do not overlap, returns undefined;
 * if poly1 and poly2 share a border, a MultiLineString of the locations where their borders are shared
 */
turf.intersect = function(poly1, poly2) {};

/**
 * Takes a set of polygons and returns a single merged polygon feature.
 * If the input polygon features are not contiguous, this function returns a MultiPolygon feature.
 * @param {?} fc Input polygons
 * @return {?} Merged polygon or multipolygon
 */
turf.merge = function(fc) {};

/**
 * Takes a LineString or Polygon and returns a simplified version.
 * Internally uses simplify-js to perform simplification.
 * @param {?} feature Feature to be simplified
 * @param {number} tolerance Simplification tolerance
 * @param {boolean} highQuality Whether or not to spend more time to create a higher-quality simplification with a different algorithm
 * @return {?} A simplified feature
 */
turf.simplify = function(feature, tolerance, highQuality) {};

/**
 * Takes two polygons and returns a combined polygon.
 * If the input polygons are not contiguous, this function returns a MultiPolygon feature.
 * @param {?} poly1 Input polygon
 * @param {?} poly2 Another input polygon
 * @return {?} A combined Polygon or MultiPolygon feature
 */
turf.union = function(poly1, poly2) {};

/**
 * Combines a FeatureCollection of Point, LineString, or Polygon features into MultiPoint, MultiLineString, or MultiPolygon features.
 * @param {?} fc A FeatureCollection of any type
 * @return {?} A FeatureCollection of corresponding type to input
 */
turf.combine = function(fc) {};

/**
 * Takes a feature or set of features and returns all positions as points.
 * @param {?} input Input features
 * @return {?} Points representing the exploded input features
 */
turf.explode = function(input) {};

/**
 * Takes input features and flips all of their coordinates from [x, y] to [y, x].
 * @param {?} input Input features
 * @return {?} A feature or set of features of the same type as input with flipped coordinates
 */
turf.flip = function(input) {};

/**
 * Takes a polygon and returns points at all self-intersections.
 * @param {?} polygon Input polygon
 * @return {?} Self-intersections
 */
turf.kinks = function(polygon) {};

/**
 * Takes a line, a start Point, and a stop point and returns the line in between those points.
 * @param {?} point1 Starting point
 * @param {?} point2 Stopping point
 * @param {?} line Line to slice
 * @return {?} Sliced line
 */
turf.lineSlice = function(point1, point2, line) {};

/**
 * Takes a Point and a LineString and calculates the closest Point on the LineString.
 * @param {?} line Line to snap to
 * @param {?} point Point to snap from
 * @return {?} Closest point on the line to point
 */
turf.pointOnLine = function(line, point) {};

/**
 * Takes one or more Features and creates a FeatureCollection.
 * @param {!Array<?>} features Input features
 * @return {?} A FeatureCollection of input features
 */
turf.featurecollection = function(features) {};

/**
 * Creates a LineString based on a coordinate array. Properties can be added optionally.
 * @param {!Array<!Array<number>>} coordinates An array of Positions
 * @param {?=} properties
 * @return {?} A LineString feature
 */
turf.linestring = function(coordinates, properties) {};

/**
 * Takes coordinates and properties (optional) and returns a new Point feature.
 * @param {!Array<number>} coordinates Longitude, latitude position (each in decimal degrees)
 * @param {?=} properties
 * @return {?} A Point feature
 */
turf.point = function(coordinates, properties) {};

/**
 * Takes an array of LinearRings and optionally an Object with properties and returns a Polygon feature.
 * @param {!Array<!Array<!Array<number>>>} rings An array of LinearRings
 * @param {?=} properties
 * @return {?} A Polygon feature
 */
turf.polygon = function(rings, properties) {};

/**
 * Takes a FeatureCollection and filters it by a given property and value.
 * @param {?} features Input features
 * @param {string} key The property on which to filter
 * @param {string} value The value of that property on which to filter
 * @return {?} A filtered collection with only features that match input key and value
 */
turf.filter = function(features, key, value) {};

/**
 * Generates random GeoJSON data, including Points and Polygons, for testing and experimentation.
 * @param {string=} type
 * @param {number=} count
 * @param {{bbox: !Array<number>, num_vertices: number, max_radial_length: number}=} options
 * @return {?} Generated random features
 */
turf.random = function(type, count, options) {};

/**
 * Takes a FeatureCollection of any type, a property, and a value and returns a FeatureCollection with features matching that property-value pair removed.
 * @param {?} features Set of input features
 * @param {string} property The property to remove
 * @param {string} value The value to remove
 * @return {?} The resulting FeatureCollection without features that match the property-value pair
 */
turf.remove = function(features, property, value) {};

/**
 * Takes a FeatureCollection and returns a FeatureCollection with given number of features at random.
 * @param {?} features Set of input features
 * @param {number} n Number of features to select
 * @return {?} A FeatureCollection with n features
 */
turf.sample = function(features, n) {};

/**
 * Takes a bounding box and a cell size in degrees and returns a FeatureCollection of flat-topped hexagons (Polygon features) aligned in an "odd-q" vertical grid as described in Hexagonal Grids.
 * @param {!Array<number>} bbox Bounding box in [minX, minY, maxX, maxY] order
 * @param {number} cellWidth Width of cell in specified units
 * @param {string} units Used in calculating cellWidth ('miles' or 'kilometers')
 * @return {?} A hexagonal grid
 */
turf.hexGrid = function(bbox, cellWidth, units) {};

/**
 * Takes points with z-values and an array of value breaks and generates isolines.
 * @param {?} points Input points
 * @param {string} z The property name in points from which z-values will be pulled
 * @param {number} resolution Resolution of the underlying grid
 * @param {!Array<number>} breaks Where to draw contours
 * @return {?} Isolines
 */
turf.isolines = function(points, z, resolution, breaks) {};

/**
 * Takes a triangular plane as a Polygon and a Point within that triangle and returns the z-value at that point.
 * The Polygon needs to have properties a, b, and c that define the values at its three corners.
 * @param {?} interpolatedpoint
 * @param {?} triangle A Polygon feature with three vertices
 * @return {number} The z-value for interpolatedPoint
 */
turf.planepoint = function(interpolatedpoint, triangle) {};

/**
 * Takes a bounding box and a cell depth and returns a set of points in a grid.
 * @param {!Array<number>} extent Extent in [minX, minY, maxX, maxY] order
 * @param {number} cellWidth The distance across each cell
 * @param {string} units Used in calculating cellWidth ('miles' or 'kilometers')
 * @return {?} Grid of points
 */
turf.pointGrid = function(extent, cellWidth, units) {};

/**
 * Takes a bounding box and a cell depth and returns a set of square polygons in a grid.
 * @param {!Array<number>} extent Extent in [minX, minY, maxX, maxY] order
 * @param {number} cellWidth Width of each cell
 * @param {string} units Used in calculating cellWidth ('miles' or 'kilometers')
 * @return {?} Grid of polygons
 */
turf.squareGrid = function(extent, cellWidth, units) {};

/**
 * Takes a set of points and the name of a z-value property and creates a Triangulated Irregular Network, or a TIN for short, returned as a collection of Polygons.
 * These are often used for developing elevation contour maps or stepped heat visualizations.
 * This triangulates the points, as well as adds properties called a, b, and c representing the value of the given propertyName at each of the points that represent the corners of the triangle.
 * @param {?} points Input points
 * @param {string=} propertyName
 * @return {?} TIN output
 */
turf.tin = function(points, propertyName) {};

/**
 * Takes a bounding box and a cell depth and returns a set of triangular polygons in a grid.
 * @param {!Array<number>} extent Extent in [minX, minY, maxX, maxY] order
 * @param {number} cellWidth Width of each cell
 * @param {string} units Used in calculating cellWidth ('miles' or 'kilometers')
 * @return {?} Grid of triangles
 */
turf.triangleGrid = function(extent, cellWidth, units) {};

/**
 * Takes a Point and a Polygon or MultiPolygon and determines if the point resides inside the polygon.
 * The polygon can be convex or concave. The function accounts for holes.
 * @param {?} point Input point
 * @param {?} polygon Input polygon or multipolygon
 * @return {boolean} true if the Point is inside the Polygon; false if the Point is not inside the Polygon
 */
turf.inside = function(point, polygon) {};

/**
 * Takes a set of points and a set of polygons and performs a spatial join.
 * @param {?} points Input points
 * @param {?} polygons Input polygons
 * @param {string} polyId Property in polygons to add to joined Point features
 * @param {string} containingPolyId Property in points in which to store joined property from polygons
 * @return {?} Points with containingPolyId property containing values from polyId
 */
turf.tag = function(points, polygons, polyId, containingPolyId) {};

/**
 * Takes a set of points and a set of polygons and returns the points that fall within the polygons.
 * @param {?} points Input points
 * @param {?} polygons Input polygons
 * @return {?} Points that land within at least one polygon
 */
turf.within = function(points, polygons) {};

/**
 * Takes a set of features and returns an array of the Jenks Natural breaks for a given property.
 * @param {?} input Input features
 * @param {string} field The property in input on which to calculate Jenks natural breaks
 * @param {number} numberOfBreaks Number of classes in which to group the data
 * @return {!Array<number>} The break number for each class plus the minimum and maximum values
 */
turf.jenks = function(input, field, numberOfBreaks) {};

/**
 * Takes a reference point and a set of points and returns the point from the set closest to the reference.
 * @param {?} point The reference point
 * @param {?} against Input point set
 * @return {?} The closest point in the set to the reference point
 */
turf.nearest = function(point, against) {};

/**
 * Takes a FeatureCollection, a property name, and a set of percentiles and returns a quantile array.
 * @param {?} input Set of features
 * @param {string} field The property in input from which to retrieve quantile values
 * @param {!Array<number>} percentiles An Array of percentiles on which to calculate quantile values
 * @return {!Array<number>} An array of the break values
 */
turf.quantile = function(input, field, percentiles) {};

/**
 * Takes a FeatureCollection, an input field, an output field, and an array of translations and outputs an identical FeatureCollection with the output field property populated.
 * @param {?} input Set of input features
 * @param {string} inField The field to translate
 * @param {string} outField The field in which to store translated results
 * @param {!Array<?>} translations An array of translations
 * @return {?} A FeatureCollection with identical geometries to input but with outField populated.
 */
turf.reclass = function(input, inField, outField, translations) {};
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "turf"
/** @const */
tsickle_declare_module.turf = {};

/* TODO: ExportAssignment in tsickle_declare_module.turf */
