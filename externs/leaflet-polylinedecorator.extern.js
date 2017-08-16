/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/leaflet-polylinedecorator/index.d.ts:
/** @const */
L.Symbol = {};
/**
 * @record
 * @struct
 */
L.Symbol.DashOptions = function() {};
 /** @type {number} */
L.Symbol.DashOptions.prototype.pixelSize;
 /** @type {!L.PathOptions} */
L.Symbol.DashOptions.prototype.pathOptions;

/**
 * @constructor
 * @struct
 * @param {!L.Symbol.DashOptions=} options
 */
L.Symbol.Dash = function(options) {};

/**
 * @param {!L.Symbol.DashOptions=} options
 * @return {!L.Symbol.Dash}
 */
L.Symbol.dash = function(options) {};
/**
 * @record
 * @struct
 */
L.Symbol.ArrowHeadOptions = function() {};
 /** @type {boolean} */
L.Symbol.ArrowHeadOptions.prototype.polygon;
 /** @type {number} */
L.Symbol.ArrowHeadOptions.prototype.pixelSize;
 /** @type {number} */
L.Symbol.ArrowHeadOptions.prototype.headAngle;
 /** @type {!L.PathOptions} */
L.Symbol.ArrowHeadOptions.prototype.pathOptions;

/**
 * @constructor
 * @struct
 * @param {!L.Symbol.ArrowHeadOptions=} options
 */
L.Symbol.ArrowHead = function(options) {};

/**
 * @param {!L.Symbol.ArrowHeadOptions=} options
 * @return {!L.Symbol.ArrowHead}
 */
L.Symbol.arrowHead = function(options) {};
/**
 * @record
 * @struct
 */
L.Symbol.MarkerOptions = function() {};
 /** @type {boolean} */
L.Symbol.MarkerOptions.prototype.rotate;
 /** @type {!L.MarkerOptions} */
L.Symbol.MarkerOptions.prototype.markerOptions;

/**
 * @constructor
 * @struct
 * @param {!L.Symbol.MarkerOptions=} options
 */
L.Symbol.Marker = function(options) {};

/**
 * @param {!L.Symbol.MarkerOptions=} options
 * @return {!L.Symbol.Marker}
 */
L.Symbol.marker = function(options) {};
/**
 * @record
 * @struct
 */
L.Pattern = function() {};
 /** @type {number} */
L.Pattern.prototype.offset;
 /** @type {number} */
L.Pattern.prototype.endOffset;
 /** @type {number} */
L.Pattern.prototype.repeat;
 /** @type {(!L.Symbol.Dash|!L.Symbol.ArrowHead|!L.Symbol.Marker)} */
L.Pattern.prototype.symbol;
/**
 * @record
 * @struct
 */
L.PolylineDecoratorOptions = function() {};
 /** @type {!Array<!L.Pattern>} */
L.PolylineDecoratorOptions.prototype.patterns;

/**
 * @constructor
 * @struct
 * @param {(!L.Polyline|!L.Polygon|!Array<(!L.LatLng|!L.LatLngLiteral|!Array<?>)>|!Array<!L.Polyline>|!Array<!L.Polygon>|!Array<!Array<(!L.LatLng|!L.LatLngLiteral|!Array<?>)>>)} paths
 * @param {!L.PolylineDecoratorOptions=} options
 */
L.PolylineDecorator = function(paths, options) {};

/**
 * @param {(!L.Polyline|!Array<!L.Polyline>)} paths
 * @param {!L.PolylineDecoratorOptions=} options
 * @return {!L.PolylineDecorator}
 */
L.polylineDecorator = function(paths, options) {};