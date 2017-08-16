/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/osmtogeojson/index.d.ts:
/**
 * @record
 * @struct
 */
function OsmToGeoJSON() {}

/* TODO: CallSignature:  */

/**
 * @param {(!Document|!OsmJSON.OsmJSONObject)} data
 * @param {?=} options
 * @return {!GeoJSON.GeoJSONObject}
 */
OsmToGeoJSON.prototype.toGeojson = function(data, options) {};
/**
 * @record
 * @struct
 */
function Options() {}
 /** @type {boolean} */
Options.prototype.verbose;
 /** @type {boolean} */
Options.prototype.flatProperties;
 /** @type {(!Function|?)} */
Options.prototype.uninterestingTags;
 /** @type {?} */
Options.prototype.polygonFeatures;
/** @const */
var GeoJSON = {};
/**
 * @record
 * @struct
 */
GeoJSON.GeoJSONObject = function() {};
 /** @type {string} */
GeoJSON.GeoJSONObject.prototype.type;
/**
 * @extends {GeoJSON.GeoJSONObject}
 * @record
 * @struct
 */
GeoJSON.Feature = function() {};
 /** @type {string} */
GeoJSON.Feature.prototype.id;
 /** @type {!GeoJSON.Geometry} */
GeoJSON.Feature.prototype.geometry;
 /** @type {?} */
GeoJSON.Feature.prototype.properties;
/**
 * @extends {GeoJSON.GeoJSONObject}
 * @record
 * @struct
 */
GeoJSON.FeatureCollection = function() {};
 /** @type {!Array<!GeoJSON.Feature>} */
GeoJSON.FeatureCollection.prototype.features;
/**
 * @extends {GeoJSON.GeoJSONObject}
 * @record
 * @struct
 */
GeoJSON.Geometry = function() {};
 /** @type {(!Array<?>|!Array<!Array<?>>|!Array<!Array<!Array<?>>>)} */
GeoJSON.Geometry.prototype.coordinates;
/**
 * @extends {GeoJSON.GeoJSONObject}
 * @record
 * @struct
 */
GeoJSON.GeometryCollection = function() {};
 /** @type {!Array<!GeoJSON.Geometry>} */
GeoJSON.GeometryCollection.prototype.geometries;

/** @typedef {!Array<?>} */
GeoJSON.Coordinate2d;

/** @typedef {!Array<?>} */
GeoJSON.Coordinate3d;

/** @typedef {!Array<?>} */
GeoJSON.Coordinate;
/** @const */
var OsmJSON = {};
/**
 * @record
 * @struct
 */
OsmJSON.OsmJSONObject = function() {};
 /** @type {!Array<(!OsmJSON.Node|!OsmJSON.Way|!OsmJSON.Relationship)>} */
OsmJSON.OsmJSONObject.prototype.elements;
/**
 * @record
 * @struct
 */
OsmJSON.Element = function() {};
 /** @type {string} */
OsmJSON.Element.prototype.type;
 /** @type {number} */
OsmJSON.Element.prototype.id;
 /** @type {!Object<string,string>} */
OsmJSON.Element.prototype.tags;
 /** @type {string} */
OsmJSON.Element.prototype.timestamp;
 /** @type {number} */
OsmJSON.Element.prototype.version;
 /** @type {number} */
OsmJSON.Element.prototype.changeset;
 /** @type {string} */
OsmJSON.Element.prototype.user;
 /** @type {number} */
OsmJSON.Element.prototype.uid;
/**
 * @extends {OsmJSON.Element}
 * @record
 * @struct
 */
OsmJSON.Node = function() {};
 /** @type {number} */
OsmJSON.Node.prototype.lat;
 /** @type {number} */
OsmJSON.Node.prototype.lon;
/**
 * @extends {OsmJSON.Element}
 * @record
 * @struct
 */
OsmJSON.Way = function() {};
 /** @type {!Array<number>} */
OsmJSON.Way.prototype.nodes;
/**
 * @extends {OsmJSON.Element}
 * @record
 * @struct
 */
OsmJSON.Relationship = function() {};
 /** @type {!Array<!OsmJSON.Member>} */
OsmJSON.Relationship.prototype.members;
/**
 * @record
 * @struct
 */
OsmJSON.Member = function() {};
 /** @type {string} */
OsmJSON.Member.prototype.type;
 /** @type {number} */
OsmJSON.Member.prototype.ref;
 /** @type {string} */
OsmJSON.Member.prototype.role;
 /** @type {?} */
var osmtogeojson;

/* TODO: ExportAssignment in  */