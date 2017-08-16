/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/geodesy/index.d.ts:

/** @typedef {string} */
var format;

/** @typedef {string} */
var datum;

/** @typedef {string} */
var hemisphere;

/** @typedef {string} */
var ellipsoid;

/** @typedef {!Array<?>} */
var transform;

/** @typedef {?} */
var LatLon;
/**
 * @record
 * @struct
 */
function Datum() {}
 /** @type {?} */
Datum.prototype.ellipsoid;
 /** @type {!Array<?>} */
Datum.prototype.transform;
/**
 * @record
 * @struct
 */
function Datums() {}
 /** @type {?} */
Datums.prototype.ED50;
 /** @type {?} */
Datums.prototype.Irl1975;
 /** @type {?} */
Datums.prototype.NAD27;
 /** @type {?} */
Datums.prototype.NAD83;
 /** @type {?} */
Datums.prototype.NTF;
 /** @type {?} */
Datums.prototype.OSGB36;
 /** @type {?} */
Datums.prototype.Potsdam;
 /** @type {?} */
Datums.prototype.TokyoJapan;
 /** @type {?} */
Datums.prototype.WGS72;
 /** @type {?} */
Datums.prototype.WGS84;
/**
 * @record
 * @struct
 */
function Ellipsoid() {}
 /** @type {number} */
Ellipsoid.prototype.a;
 /** @type {number} */
Ellipsoid.prototype.b;
 /** @type {number} */
Ellipsoid.prototype.f;
/**
 * @record
 * @struct
 */
function Ellipsoids() {}
 /** @type {?} */
Ellipsoids.prototype.WGS84;
 /** @type {?} */
Ellipsoids.prototype.GRS80;
 /** @type {?} */
Ellipsoids.prototype.Airy1830;
 /** @type {?} */
Ellipsoids.prototype.AiryModified;
 /** @type {?} */
Ellipsoids.prototype.Intl1924;
 /** @type {?} */
Ellipsoids.prototype.Bessel1841;

/**
 * @constructor
 * @struct
 * @param {number} zone
 * @param {string} band
 * @param {string} e100k
 * @param {string} n100k
 * @param {number} easting
 * @param {number} northing
 * @param {string=} datum
 */
function Mgrs(zone, band, e100k, n100k, easting, northing, datum) {}
 /** @type {number} */
Mgrs.prototype.zone;
 /** @type {string} */
Mgrs.prototype.band;
 /** @type {string} */
Mgrs.prototype.e100k;
 /** @type {string} */
Mgrs.prototype.n100k;
 /** @type {number} */
Mgrs.prototype.easting;
 /** @type {number} */
Mgrs.prototype.northing;
 /** @type {string} */
Mgrs.prototype.datum;
 /** @type {string} */
Mgrs.prototype.latBands;
 /** @type {string} */
Mgrs.prototype.e100kLetters;
 /** @type {string} */
Mgrs.prototype.n100kLetters;

/**
 * @param {string} mgrsGridRef
 * @return {?}
 */
Mgrs.parse = function(mgrsGridRef) {};

/**
 * @return {?}
 */
Mgrs.prototype.toUtm = function() {};

/**
 * @param {number=} digits
 * @return {string}
 */
Mgrs.prototype.toString = function(digits) {};

/**
 * @constructor
 * @struct
 * @param {number} zone
 * @param {string} hemisphere
 * @param {number} easting
 * @param {number} northing
 * @param {string=} datum
 * @param {number=} convergence
 * @param {number=} scale
 */
function Utm(zone, hemisphere, easting, northing, datum, convergence, scale) {}
 /** @type {number} */
Utm.prototype.zone;
 /** @type {string} */
Utm.prototype.hemisphere;
 /** @type {number} */
Utm.prototype.easting;
 /** @type {number} */
Utm.prototype.northing;
 /** @type {?} */
Utm.prototype.datum;
 /** @type {number} */
Utm.prototype.convergence;
 /** @type {number} */
Utm.prototype.scale;

/**
 * @param {string} utmCoord
 * @param {string=} datum
 * @return {?}
 */
Utm.parse = function(utmCoord, datum) {};

/**
 * @return {?}
 */
Utm.prototype.toLatLonE = function() {};

/**
 * @return {?}
 */
Utm.prototype.toMgrs = function() {};

/**
 * @param {number=} digits
 * @return {string}
 */
Utm.prototype.toString = function(digits) {};
/** @const */
var Dms = {};
 /** @type {string} */
Dms.separator;

/**
 * @param {string} dmsStr
 * @return {number}
 */
Dms.parseDMS = function(dmsStr) {};

/**
 * @param {number} deg
 * @param {string=} format
 * @param {number=} dp
 * @return {string}
 */
Dms.toDMS = function(deg, format, dp) {};

/**
 * @param {number} deg
 * @param {string=} format
 * @param {number=} dp
 * @return {string}
 */
Dms.toLat = function(deg, format, dp) {};

/**
 * @param {number} deg
 * @param {string=} format
 * @param {number=} dp
 * @return {string}
 */
Dms.toLon = function(deg, format, dp) {};

/**
 * @param {number} deg
 * @param {string=} format
 * @param {number=} dp
 * @return {string}
 */
Dms.toBrng = function(deg, format, dp) {};

/**
 * @param {number} bearing
 * @param {number=} precision
 * @return {string}
 */
Dms.compassPoint = function(bearing, precision) {};

/**
 * @constructor
 * @struct
 * @param {number} x
 * @param {number} y
 * @param {number} z
 */
function Vector3d(x, y, z) {}
 /** @type {number} */
Vector3d.prototype.x;
 /** @type {number} */
Vector3d.prototype.y;
 /** @type {number} */
Vector3d.prototype.z;

/**
 * @param {?} v
 * @return {?}
 */
Vector3d.prototype.plus = function(v) {};

/**
 * @param {?} v
 * @return {?}
 */
Vector3d.prototype.minus = function(v) {};

/**
 * @param {number} x
 * @return {?}
 */
Vector3d.prototype.times = function(x) {};

/**
 * @param {number} x
 * @return {?}
 */
Vector3d.prototype.dividedBy = function(x) {};

/**
 * @param {?} v
 * @return {number}
 */
Vector3d.prototype.dot = function(v) {};

/**
 * @param {?} v
 * @return {?}
 */
Vector3d.prototype.cross = function(v) {};

/**
 * @return {?}
 */
Vector3d.prototype.negate = function() {};

/**
 * @return {number}
 */
Vector3d.prototype.length = function() {};

/**
 * @return {?}
 */
Vector3d.prototype.unit = function() {};

/**
 * @param {?} v
 * @param {?=} n
 * @return {number}
 */
Vector3d.prototype.angleTo = function(v, n) {};

/**
 * @param {?} axis
 * @param {number} theta
 * @return {?}
 */
Vector3d.prototype.rotateAround = function(axis, theta) {};

/**
 * @param {number=} precision
 * @return {string}
 */
Vector3d.prototype.toString = function(precision) {};

/**
 * @param {?} datum
 * @return {?}
 */
Vector3d.prototype.toLatLonE = function(datum) {};

/**
 * @param {!Array<number>} t
 * @return {?}
 */
Vector3d.prototype.applyTransform = function(t) {};

/**
 * @constructor
 * @struct
 * @param {number} easting
 * @param {number} northing
 */
function OsGridRef(easting, northing) {}
 /** @type {number} */
OsGridRef.prototype.easting;
 /** @type {number} */
OsGridRef.prototype.northing;

/**
 * @param {?} p
 * @return {?}
 */
OsGridRef.latLonToOsGrid = function(p) {};

/**
 * @param {?} gridref
 * @param {?=} datum
 * @return {?}
 */
OsGridRef.osGridToLatLon = function(gridref, datum) {};

/**
 * @param {string} gridref
 * @return {?}
 */
OsGridRef.parse = function(gridref) {};

/**
 * @param {number=} digits
 * @return {string}
 */
OsGridRef.prototype.toString = function(digits) {};

/**
 * @constructor
 * @struct
 * @param {number} lat
 * @param {number} lon
 * @param {?=} datum
 */
function LatLonEllipsoidal(lat, lon, datum) {}
 /** @type {number} */
LatLonEllipsoidal.prototype.lat;
 /** @type {number} */
LatLonEllipsoidal.prototype.lon;
 /** @type {?} */
LatLonEllipsoidal.prototype.datum;
 /** @type {?} */
LatLonEllipsoidal.datum;
 /** @type {?} */
LatLonEllipsoidal.ellipsoid;

/**
 * @return {?}
 */
LatLonEllipsoidal.prototype.toUtm = function() {};

/**
 * @param {?} toDatum
 * @return {?}
 */
LatLonEllipsoidal.prototype.convertDatum = function(toDatum) {};

/**
 * @return {?}
 */
LatLonEllipsoidal.prototype.toCartesian = function() {};

/**
 * @param {string=} format
 * @param {number=} dp
 * @return {string}
 */
LatLonEllipsoidal.prototype.toString = function(format, dp) {};

/**
 * @constructor
 * @struct
 * @param {number} lat
 * @param {number} lon
 */
function LatLonSpherical(lat, lon) {}
 /** @type {number} */
LatLonSpherical.prototype.lat;
 /** @type {number} */
LatLonSpherical.prototype.lon;

/**
 * @param {?} point
 * @param {number=} radius
 * @return {number}
 */
LatLonSpherical.prototype.distanceTo = function(point, radius) {};

/**
 * @param {?} point
 * @return {number}
 */
LatLonSpherical.prototype.bearingTo = function(point) {};

/**
 * @param {?} point
 * @return {number}
 */
LatLonSpherical.prototype.finalBearingTo = function(point) {};

/**
 * @param {?} point
 * @return {number}
 */
LatLonSpherical.prototype.midpointTo = function(point) {};

/**
 * @param {?} point
 * @param {number} fraction
 * @return {?}
 */
LatLonSpherical.prototype.intermediatePointTo = function(point, fraction) {};

/**
 * @param {number} distance
 * @param {number} bearing
 * @param {number=} radius
 * @return {?}
 */
LatLonSpherical.prototype.destinationPoint = function(distance, bearing, radius) {};

/**
 * @param {?} point1
 * @param {number} bearing1
 * @param {?} point2
 * @param {number} bearing2
 * @return {?}
 */
LatLonSpherical.intersection = function(point1, bearing1, point2, bearing2) {};

/**
 * @param {?} pathStart
 * @param {?} pathEnd
 * @param {number=} radius
 * @return {number}
 */
LatLonSpherical.prototype.crossTrackDistanceTo = function(pathStart, pathEnd, radius) {};

/**
 * @param {number} bearing
 * @return {number}
 */
LatLonSpherical.prototype.maxLatitude = function(bearing) {};

/**
 * @param {?} point1
 * @param {?} point2
 * @param {number} latitude
 * @return {?}
 */
LatLonSpherical.crossingParallels = function(point1, point2, latitude) {};

/**
 * @param {?} point
 * @param {number=} radius
 * @return {number}
 */
LatLonSpherical.prototype.rhumbDistanceTo = function(point, radius) {};

/**
 * @param {?} point
 * @return {number}
 */
LatLonSpherical.prototype.rhumbBearingTo = function(point) {};

/**
 * @param {number} distance
 * @param {number} bearing
 * @param {number=} radius
 * @return {?}
 */
LatLonSpherical.prototype.rhumbDestinationPoint = function(distance, bearing, radius) {};

/**
 * @param {?} point
 * @return {?}
 */
LatLonSpherical.prototype.rhumbMidpointTo = function(point) {};

/**
 * @param {?} point
 * @return {boolean}
 */
LatLonSpherical.prototype.equals = function(point) {};

/**
 * @param {!Array<?>} polygon
 * @param {number=} radius
 * @return {number}
 */
LatLonSpherical.areaOf = function(polygon, radius) {};

/**
 * @param {string=} format
 * @param {number=} dp
 * @return {string}
 */
LatLonSpherical.prototype.toString = function(format, dp) {};
