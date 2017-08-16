/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/leaflet-draw/index.d.ts:
 /** @type {boolean} */
L.MapOptions.prototype.drawControl;
/**
 * @record
 * @struct
 */
L.Control.DrawConstructorOptions = function() {};
 /** @type {string} */
L.Control.DrawConstructorOptions.prototype.position;
 /** @type {!L.Control.DrawOptions} */
L.Control.DrawConstructorOptions.prototype.draw;
 /** @type {!L.Control.EditOptions} */
L.Control.DrawConstructorOptions.prototype.edit;
/**
 * @record
 * @struct
 */
L.Control.DrawOptions = function() {};
 /** @type {(boolean|!L.DrawOptions.PolylineOptions)} */
L.Control.DrawOptions.prototype.polyline;
 /** @type {(boolean|!L.DrawOptions.PolygonOptions)} */
L.Control.DrawOptions.prototype.polygon;
 /** @type {(boolean|!L.DrawOptions.RectangleOptions)} */
L.Control.DrawOptions.prototype.rectangle;
 /** @type {(boolean|!L.DrawOptions.CircleOptions)} */
L.Control.DrawOptions.prototype.circle;
 /** @type {(boolean|!L.DrawOptions.MarkerOptions)} */
L.Control.DrawOptions.prototype.marker;
/**
 * @record
 * @struct
 */
L.Control.EditOptions = function() {};
 /** @type {!L.FeatureGroup} */
L.Control.EditOptions.prototype.featureGroup;
 /** @type {(boolean|!L.DrawOptions.EditHandlerOptions)} */
L.Control.EditOptions.prototype.edit;
 /** @type {(boolean|!L.DrawOptions.DeleteHandlerOptions)} */
L.Control.EditOptions.prototype.remove;
/**
 * @record
 * @struct
 */
L.Control.Draw = function() {};

/**
 * @param {!L.Control.DrawOptions} options
 * @return {void}
 */
L.Control.Draw.prototype.setDrawingOptions = function(options) {};
/** @const */
L.DrawOptions = {};
/**
 * @record
 * @struct
 */
L.DrawOptions.PolylineOptions = function() {};
 /** @type {boolean} */
L.DrawOptions.PolylineOptions.prototype.allowIntersection;
 /** @type {?} */
L.DrawOptions.PolylineOptions.prototype.drawError;
 /** @type {number} */
L.DrawOptions.PolylineOptions.prototype.guidelineDistance;
 /** @type {!L.PolylineOptions} */
L.DrawOptions.PolylineOptions.prototype.shapeOptions;
 /** @type {boolean} */
L.DrawOptions.PolylineOptions.prototype.metric;
 /** @type {number} */
L.DrawOptions.PolylineOptions.prototype.zIndexOffset;
 /** @type {boolean} */
L.DrawOptions.PolylineOptions.prototype.repeatMode;
/**
 * @extends {L.DrawOptions.PolylineOptions}
 * @record
 * @struct
 */
L.DrawOptions.PolygonOptions = function() {};
 /** @type {boolean} */
L.DrawOptions.PolygonOptions.prototype.showArea;
/**
 * @record
 * @struct
 */
L.DrawOptions.RectangleOptions = function() {};
 /** @type {!L.PathOptions} */
L.DrawOptions.RectangleOptions.prototype.shapeOptions;
 /** @type {boolean} */
L.DrawOptions.RectangleOptions.prototype.repeatMode;
/**
 * @record
 * @struct
 */
L.DrawOptions.CircleOptions = function() {};
 /** @type {!L.PathOptions} */
L.DrawOptions.CircleOptions.prototype.shapeOptions;
 /** @type {boolean} */
L.DrawOptions.CircleOptions.prototype.repeatMode;
/**
 * @record
 * @struct
 */
L.DrawOptions.MarkerOptions = function() {};
 /** @type {!L.Icon} */
L.DrawOptions.MarkerOptions.prototype.icon;
 /** @type {number} */
L.DrawOptions.MarkerOptions.prototype.zIndexOffset;
 /** @type {boolean} */
L.DrawOptions.MarkerOptions.prototype.repeatMode;
/**
 * @record
 * @struct
 */
L.DrawOptions.EditHandlerOptions = function() {};
 /** @type {!L.PathOptions} */
L.DrawOptions.EditHandlerOptions.prototype.selectedPathOptions;
/**
 * @record
 * @struct
 */
L.DrawOptions.DeleteHandlerOptions = function() {};
/** @const */
L.Draw = {};
/** @const */
L.Draw.Event = {};
 /** @type {string} */
L.Draw.Event.CREATED;
 /** @type {string} */
L.Draw.Event.EDITED;
 /** @type {string} */
L.Draw.Event.DELETED;
 /** @type {string} */
L.Draw.Event.DRAWSTART;
 /** @type {string} */
L.Draw.Event.DRAWSTOP;
 /** @type {string} */
L.Draw.Event.DRAWVERTEX;
 /** @type {string} */
L.Draw.Event.EDITSTART;
 /** @type {string} */
L.Draw.Event.EDITMOVE;
 /** @type {string} */
L.Draw.Event.EDITRESIZE;
 /** @type {string} */
L.Draw.Event.EDITVERTEX;
 /** @type {string} */
L.Draw.Event.EDITSTOP;
 /** @type {string} */
L.Draw.Event.DELETESTART;
 /** @type {string} */
L.Draw.Event.DELETESTOP;
/** @const */
L.DrawEvents = {};
/**
 * @extends {L.Event}
 * @record
 * @struct
 */
L.DrawEvents.Created = function() {};
 /** @type {!L.Layer} */
L.DrawEvents.Created.prototype.layer;
 /** @type {string} */
L.DrawEvents.Created.prototype.layerType;
/**
 * @extends {L.Event}
 * @record
 * @struct
 */
L.DrawEvents.Edited = function() {};
 /** @type {!L.LayerGroup} */
L.DrawEvents.Edited.prototype.layers;
/**
 * @extends {L.Event}
 * @record
 * @struct
 */
L.DrawEvents.Deleted = function() {};
 /** @type {!L.LayerGroup} */
L.DrawEvents.Deleted.prototype.layers;
/**
 * @extends {L.Event}
 * @record
 * @struct
 */
L.DrawEvents.DrawStart = function() {};
 /** @type {string} */
L.DrawEvents.DrawStart.prototype.layerType;
/**
 * @extends {L.Event}
 * @record
 * @struct
 */
L.DrawEvents.DrawStop = function() {};
 /** @type {string} */
L.DrawEvents.DrawStop.prototype.layerType;
/**
 * @extends {L.Event}
 * @record
 * @struct
 */
L.DrawEvents.EditStart = function() {};
 /** @type {string} */
L.DrawEvents.EditStart.prototype.handler;
/**
 * @extends {L.Event}
 * @record
 * @struct
 */
L.DrawEvents.EditStop = function() {};
 /** @type {string} */
L.DrawEvents.EditStop.prototype.handler;
/**
 * @extends {L.Event}
 * @record
 * @struct
 */
L.DrawEvents.DeleteStart = function() {};
 /** @type {string} */
L.DrawEvents.DeleteStart.prototype.handler;
/**
 * @extends {L.Event}
 * @record
 * @struct
 */
L.DrawEvents.DeleteStop = function() {};
 /** @type {string} */
L.DrawEvents.DeleteStop.prototype.handler;
/** @const */
L.GeometryUtil = {};

/**
 * Returns the area of a polygon drawn with leaflet.draw
 * @param {!Array<!L.LatLngLiteral>} coordinates
 * @return {number}
 */
L.GeometryUtil.geodesicArea = function(coordinates) {};

/**
 * Returns a readable area string in yards or metric
 * @param {number} area
 * @param {boolean} isMetric
 * @return {string}
 */
L.GeometryUtil.readableArea = function(area, isMetric) {};