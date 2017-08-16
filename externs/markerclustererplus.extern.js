/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/markerclustererplus/index.d.ts:
/**
 * @record
 * @struct
 */
function ClusterIconStyle() {}
 /** @type {string} */
ClusterIconStyle.prototype.url;
 /** @type {number} */
ClusterIconStyle.prototype.height;
 /** @type {number} */
ClusterIconStyle.prototype.width;
 /** @type {!Array<number>} */
ClusterIconStyle.prototype.anchorText;
 /** @type {!Array<number>} */
ClusterIconStyle.prototype.anchorIcon;
 /** @type {string} */
ClusterIconStyle.prototype.textColor;
 /** @type {number} */
ClusterIconStyle.prototype.textSize;
 /** @type {string} */
ClusterIconStyle.prototype.textDecoration;
 /** @type {string} */
ClusterIconStyle.prototype.fontWeight;
 /** @type {string} */
ClusterIconStyle.prototype.fontStyle;
 /** @type {string} */
ClusterIconStyle.prototype.fontFamily;
 /** @type {string} */
ClusterIconStyle.prototype.backgroundPosition;

/**
 * @constructor
 * @struct
 * A cluster icon.
 * 
 *       to use for various cluster sizes.
 * @param {!Cluster} cluster
 * @param {!Array<!ClusterIconStyle>} styles
 */
function ClusterIconInfo(cluster, styles) {}
 /** @type {string} */
ClusterIconInfo.prototype.text;
 /** @type {number} */
ClusterIconInfo.prototype.index;
 /** @type {string} */
ClusterIconInfo.prototype.title;

/**
 * Adds the icon to the DOM.
 * @return {void}
 */
ClusterIconInfo.prototype.onAdd = function() {};

/**
 * Removes the icon from the DOM.
 * @return {void}
 */
ClusterIconInfo.prototype.onRemove = function() {};

/**
 * Draws the icon.
 * @return {void}
 */
ClusterIconInfo.prototype.draw = function() {};

/**
 * Hides the icon.
 * @return {void}
 */
ClusterIconInfo.prototype.hide = function() {};

/**
 * Positions and shows the icon.
 * @return {void}
 */
ClusterIconInfo.prototype.show = function() {};

/**
 * Sets the icon styles to the appropriate element in the styles array.
 * 
 * @param {!Array<!ClusterIconInfo>} sums
 * @return {void}
 */
ClusterIconInfo.prototype.useStyle = function(sums) {};

/**
 * Sets the position at which to center the icon.
 * 
 * @param {!google.maps.LatLng} center
 * @return {void}
 */
ClusterIconInfo.prototype.setCenter = function(center) {};

/**
 * Creates the cssText style parameter based on the position of the icon.
 * 
 * @param {!google.maps.Point} pos
 * @return {string}
 */
ClusterIconInfo.prototype.createCss = function(pos) {};

/**
 * Returns the position at which to place the DIV depending on the latlng.
 * 
 * @param {!google.maps.LatLng} latLng
 * @return {!google.maps.Point}
 */
ClusterIconInfo.prototype.getPosFromLatLng_ = function(latLng) {};
/**
 * @record
 * @struct
 */
function Cluster() {}

/* TODO: ConstructSignature:  */

/**
 * Returns the number of markers managed by the cluster. You can call this from
 * a <code>click</code>, <code>mouseover</code>, or <code>mouseout</code> event handler
 * for the <code>MarkerClusterer</code> object.
 * 
 * @return {number}
 */
Cluster.prototype.getSize = function() {};

/**
 * Returns the array of markers managed by the cluster. You can call this from
 * a <code>click</code>, <code>mouseover</code>, or <code>mouseout</code> event handler
 * for the <code>MarkerClusterer</code> object.
 * 
 * @return {!Array<!google.maps.Marker>}
 */
Cluster.prototype.getMarkers = function() {};

/**
 * Returns the center of the cluster. You can call this from
 * a <code>click</code>, <code>mouseover</code>, or <code>mouseout</code> event handler
 * for the <code>MarkerClusterer</code> object.
 * 
 * @return {!google.maps.LatLng}
 */
Cluster.prototype.getCenter = function() {};

/**
 * Returns the map with which the cluster is associated.
 * 
 * @ignore
 * @return {!google.maps.Map}
 */
Cluster.prototype.getMap = function() {};

/**
 * Returns the <code>MarkerClusterer</code> object with which the cluster is associated.
 * 
 * @ignore
 * @return {?}
 */
Cluster.prototype.getMarkerClusterer = function() {};

/**
 * Returns the bounds of the cluster.
 * 
 * @ignore
 * @return {!google.maps.LatLngBounds}
 */
Cluster.prototype.getBounds = function() {};

/**
 * Removes the cluster from the map.
 * 
 * @ignore
 * @return {void}
 */
Cluster.prototype.remove = function() {};

/**
 * Adds a marker to the cluster.
 * 
 * @ignore
 * @param {!google.maps.Marker} marker
 * @return {boolean}
 */
Cluster.prototype.addMarker = function(marker) {};

/**
 * Determines if a marker lies within the cluster's bounds.
 * 
 * @ignore
 * @param {!google.maps.Marker} marker
 * @return {boolean}
 */
Cluster.prototype.isMarkerInClusterBounds = function(marker) {};

/**
 * Calculates the extended bounds of the cluster with the grid.
 * @return {void}
 */
Cluster.prototype.calculateBounds_ = function() {};

/**
 * Updates the cluster icon.
 * @return {void}
 */
Cluster.prototype.updateIcon_ = function() {};

/**
 * Determines if a marker has already been added to the cluster.
 * 
 * @param {!google.maps.Marker} marker
 * @return {boolean}
 */
Cluster.prototype.isMarkerAlreadyAdded_ = function(marker) {};
/**
 * @record
 * @struct
 */
function MarkerClustererOptions() {}
 /** @type {number} */
MarkerClustererOptions.prototype.gridSize;
 /** @type {number} */
MarkerClustererOptions.prototype.maxZoom;
 /** @type {boolean} */
MarkerClustererOptions.prototype.zoomOnClick;
 /** @type {boolean} */
MarkerClustererOptions.prototype.averageCenter;
 /** @type {number} */
MarkerClustererOptions.prototype.minimumClusterSize;
 /** @type {boolean} */
MarkerClustererOptions.prototype.ignoreHidden;
 /** @type {string} */
MarkerClustererOptions.prototype.title;
 /** @type {function(!Array<!google.maps.Marker>, number): !ClusterIconInfo} */
MarkerClustererOptions.prototype.calculator;
 /** @type {string} */
MarkerClustererOptions.prototype.clusterClass;
 /** @type {!Array<!ClusterIconStyle>} */
MarkerClustererOptions.prototype.styles;
 /** @type {boolean} */
MarkerClustererOptions.prototype.enableRetinaIcons;
 /** @type {number} */
MarkerClustererOptions.prototype.batchSize;
 /** @type {number} */
MarkerClustererOptions.prototype.batchSizeIE;
 /** @type {string} */
MarkerClustererOptions.prototype.imagePath;
 /** @type {string} */
MarkerClustererOptions.prototype.imageExtension;
 /** @type {!Array<number>} */
MarkerClustererOptions.prototype.imageSizes;
/**
 * @record
 * @struct
 */
function MarkerClusterer() {}

/* TODO: ConstructSignature:  */
 /** @type {number} */
MarkerClusterer.prototype.BATCH_SIZE;
 /** @type {number} */
MarkerClusterer.prototype.BATCH_SIZE_IE;
 /** @type {string} */
MarkerClusterer.prototype.IMAGE_PATH;
 /** @type {string} */
MarkerClusterer.prototype.IMAGE_EXTENSION;
 /** @type {!Array<number>} */
MarkerClusterer.prototype.IMAGE_SIZES;

/**
 * Implementation of the onAdd interface method.
 * @ignore
 * @return {void}
 */
MarkerClusterer.prototype.onAdd = function() {};

/**
 * Implementation of the onRemove interface method.
 * Removes map event listeners and all cluster icons from the DOM.
 * All managed markers are also put back on the map.
 * @ignore
 * @return {void}
 */
MarkerClusterer.prototype.onRemove = function() {};

/**
 * Implementation of the draw interface method.
 * @ignore
 * @return {void}
 */
MarkerClusterer.prototype.draw = function() {};

/**
 * Sets up the styles object.
 * @return {void}
 */
MarkerClusterer.prototype.setupStyles_ = function() {};

/**
 *  Fits the map to the bounds of the markers managed by the clusterer.
 * @return {void}
 */
MarkerClusterer.prototype.fitMapToMarkers = function() {};

/**
 * Returns the value of the <code>gridSize</code> property.
 * 
 * @return {number}
 */
MarkerClusterer.prototype.getGridSize = function() {};

/**
 * Sets the value of the <code>gridSize</code> property.
 * 
 * @param {number} gridSize
 * @return {void}
 */
MarkerClusterer.prototype.setGridSize = function(gridSize) {};

/**
 * Returns the value of the <code>minimumClusterSize</code> property.
 * 
 * @return {number}
 */
MarkerClusterer.prototype.getMinimumClusterSize = function() {};

/**
 * Sets the value of the <code>minimumClusterSize</code> property.
 * 
 * @param {number} minimumClusterSize
 * @return {void}
 */
MarkerClusterer.prototype.setMinimumClusterSize = function(minimumClusterSize) {};

/**
 *  Returns the value of the <code>maxZoom</code> property.
 * 
 *  \@return {number} The maximum zoom level.
 * @return {number}
 */
MarkerClusterer.prototype.getMaxZoom = function() {};

/**
 *  Sets the value of the <code>maxZoom</code> property.
 * 
 *  \@param {number} maxZoom The maximum zoom level.
 * @param {number} maxZoom
 * @return {void}
 */
MarkerClusterer.prototype.setMaxZoom = function(maxZoom) {};

/**
 *  Returns the value of the <code>styles</code> property.
 * 
 *  \@return {Array} The array of styles defining the cluster markers to be used.
 * @return {!Array<!ClusterIconStyle>}
 */
MarkerClusterer.prototype.getStyles = function() {};

/**
 *  Sets the value of the <code>styles</code> property.
 * 
 *  \@param {Array.<ClusterIconStyle>} styles The array of styles to use.
 * @param {!Array<!ClusterIconStyle>} styles
 * @return {void}
 */
MarkerClusterer.prototype.setStyles = function(styles) {};

/**
 * Returns the value of the <code>title</code> property.
 * 
 * @return {string}
 */
MarkerClusterer.prototype.getTitle = function() {};

/**
 *  Sets the value of the <code>title</code> property.
 * 
 *  \@param {string} title The value of the title property.
 * @param {string} title
 * @return {void}
 */
MarkerClusterer.prototype.setTitle = function(title) {};

/**
 * Returns the value of the <code>zoomOnClick</code> property.
 * 
 * @return {boolean}
 */
MarkerClusterer.prototype.getZoomOnClick = function() {};

/**
 *  Sets the value of the <code>zoomOnClick</code> property.
 * 
 *  \@param {boolean} zoomOnClick The value of the zoomOnClick property.
 * @param {boolean} zoomOnClick
 * @return {void}
 */
MarkerClusterer.prototype.setZoomOnClick = function(zoomOnClick) {};

/**
 * Returns the value of the <code>averageCenter</code> property.
 * 
 * @return {boolean}
 */
MarkerClusterer.prototype.getAverageCenter = function() {};

/**
 *  Sets the value of the <code>averageCenter</code> property.
 * 
 *  \@param {boolean} averageCenter The value of the averageCenter property.
 * @param {boolean} averageCenter
 * @return {void}
 */
MarkerClusterer.prototype.setAverageCenter = function(averageCenter) {};

/**
 * Returns the value of the <code>ignoreHidden</code> property.
 * 
 * @return {boolean}
 */
MarkerClusterer.prototype.getIgnoreHidden = function() {};

/**
 * Sets the value of the <code>ignoreHidden</code> property.
 * 
 * @param {boolean} ignoreHidden
 * @return {void}
 */
MarkerClusterer.prototype.setIgnoreHidden = function(ignoreHidden) {};

/**
 * Returns the value of the <code>enableRetinaIcons</code> property.
 * 
 * @return {boolean}
 */
MarkerClusterer.prototype.getEnableRetinaIcons = function() {};

/**
 * Sets the value of the <code>enableRetinaIcons</code> property.
 * 
 * @param {boolean} enableRetinaIcons
 * @return {void}
 */
MarkerClusterer.prototype.setEnableRetinaIcons = function(enableRetinaIcons) {};

/**
 * Returns the value of the <code>imageExtension</code> property.
 * 
 * @return {string}
 */
MarkerClusterer.prototype.getImageExtension = function() {};

/**
 * Sets the value of the <code>imageExtension</code> property.
 * 
 * @param {string} imageExtension
 * @return {void}
 */
MarkerClusterer.prototype.setImageExtension = function(imageExtension) {};

/**
 * Returns the value of the <code>imagePath</code> property.
 * 
 * @return {string}
 */
MarkerClusterer.prototype.getImagePath = function() {};

/**
 * Sets the value of the <code>imagePath</code> property.
 * 
 * @param {string} imagePath
 * @return {void}
 */
MarkerClusterer.prototype.setImagePath = function(imagePath) {};

/**
 * Returns the value of the <code>imageSizes</code> property.
 * 
 * @return {!Array<number>}
 */
MarkerClusterer.prototype.getImageSizes = function() {};

/**
 * Sets the value of the <code>imageSizes</code> property.
 * 
 * @param {!Array<number>} imageSizes
 * @return {void}
 */
MarkerClusterer.prototype.setImageSizes = function(imageSizes) {};

/**
 * Returns the value of the <code>calculator</code> property.
 * 
 * @return {!Function}
 */
MarkerClusterer.prototype.getCalculator = function() {};

/**
 * Sets the value of the <code>calculator</code> property.
 * 
 *  of the calculator property.
 * @param {function(!google.maps.Marker, number): !Function} calculator
 * @return {void}
 */
MarkerClusterer.prototype.setCalculator = function(calculator) {};

/**
 * Sets the value of the <code>hideLabel</code> property.
 * 
 * @param {boolean} printable
 * @return {void}
 */
MarkerClusterer.prototype.setHideLabel = function(printable) {};

/**
 * Returns the value of the <code>hideLabel</code> property.
 * 
 * @return {boolean}
 */
MarkerClusterer.prototype.getHideLabel = function() {};

/**
 * Returns the value of the <code>batchSizeIE</code> property.
 * 
 * @return {number}
 */
MarkerClusterer.prototype.getBatchSizeIE = function() {};

/**
 * Sets the value of the <code>batchSizeIE</code> property.
 * 
 * @param {number} batchSizeIE
 * @return {void}
 */
MarkerClusterer.prototype.setBatchSizeIE = function(batchSizeIE) {};

/**
 * Returns the value of the <code>clusterClass</code> property.
 * 
 * @return {string}
 */
MarkerClusterer.prototype.getClusterClass = function() {};

/**
 * Sets the value of the <code>clusterClass</code> property.
 * 
 * @param {string} clusterClass
 * @return {void}
 */
MarkerClusterer.prototype.setClusterClass = function(clusterClass) {};

/**
 * Returns the array of markers managed by the clusterer.
 * 
 * @return {!Array<!google.maps.Marker>}
 */
MarkerClusterer.prototype.getMarkers = function() {};

/**
 * Returns the number of markers managed by the clusterer.
 * 
 * @return {number}
 */
MarkerClusterer.prototype.getTotalMarkers = function() {};

/**
 * Returns the current array of clusters formed by the clusterer.
 * 
 * @return {!Array<!Cluster>}
 */
MarkerClusterer.prototype.getClusters = function() {};

/**
 * Returns the number of clusters formed by the clusterer.
 * 
 * @return {number}
 */
MarkerClusterer.prototype.getTotalClusters = function() {};

/**
 * Adds a marker to the clusterer. The clusters are redrawn unless
 * <code>opt_nodraw</code> is set to <code>true</code>.
 * 
 * @param {!google.maps.Marker} marker
 * @param {boolean} opt_nodraw
 * @return {void}
 */
MarkerClusterer.prototype.addMarker = function(marker, opt_nodraw) {};

/**
 * Adds an array of markers to the clusterer. The clusters are redrawn unless
 * <code>opt_nodraw</code> is set to <code>true</code>.
 * 
 * @param {!Array<!google.maps.Marker>} markers
 * @param {boolean} opt_nodraw
 * @return {void}
 */
MarkerClusterer.prototype.addMarkers = function(markers, opt_nodraw) {};

/**
 * Pushes a marker to the clusterer.
 * 
 * @param {!google.maps.Marker} marker
 * @return {void}
 */
MarkerClusterer.prototype.pushMarkerTo_ = function(marker) {};

/**
 * Removes a marker from the cluster and map.  The clusters are redrawn unless
 * <code>opt_nodraw</code> is set to <code>true</code>. Returns <code>true</code> if the
 * marker was removed from the clusterer.
 * 
 * @param {!google.maps.Marker} marker
 * @param {boolean} opt_nodraw
 * @param {boolean} noMapRemove
 * @return {boolean}
 */
MarkerClusterer.prototype.removeMarker = function(marker, opt_nodraw, noMapRemove) {};

/**
 * Removes an array of markers from the cluster and map. The clusters are redrawn unless
 * <code>opt_nodraw</code> is set to <code>true</code>. Returns <code>true</code> if markers
 * were removed from the clusterer.
 * 
 * @param {!Array<!google.maps.Marker>} markers
 * @param {boolean} opt_nodraw
 * @param {boolean} opt_noMapRemove
 * @return {boolean}
 */
MarkerClusterer.prototype.removeMarkers = function(markers, opt_nodraw, opt_noMapRemove) {};

/**
 * Removes a marker and returns true if removed, false if not.
 * 
 * @param {!google.maps.Marker} marker
 * @param {boolean} removeFromMap
 * @return {boolean}
 */
MarkerClusterer.prototype.removeMarker_ = function(marker, removeFromMap) {};

/**
 * Removes all clusters and markers from the map and also removes all markers
 * managed by the clusterer.
 * @return {void}
 */
MarkerClusterer.prototype.clearMarkers = function() {};

/**
 * Recalculates and redraws all the marker clusters from scratch.
 * Call this after changing any properties.
 * @return {void}
 */
MarkerClusterer.prototype.repaint = function() {};

/**
 * Returns the current bounds extended by the grid size.
 * 
 * @ignore
 * @param {!google.maps.LatLngBounds} bounds
 * @return {!google.maps.LatLngBounds}
 */
MarkerClusterer.prototype.getExtendedBounds = function(bounds) {};

/**
 * Redraws all the clusters.
 * @return {void}
 */
MarkerClusterer.prototype.redraw_ = function() {};

/**
 * Removes all clusters from the map. The markers are also removed from the map
 * if <code>opt_hide</code> is set to <code>true</code>.
 * 
 *      from the map.
 * @param {boolean} opt_hide
 * @return {void}
 */
MarkerClusterer.prototype.resetViewport_ = function(opt_hide) {};

/**
 * Calculates the distance between two latlng locations in km.
 * 
 * @see http://www.movable-type.co.uk/scripts/latlong.html
 * @param {!google.maps.LatLng} p1
 * @param {!google.maps.LatLng} p2
 * @return {number}
 */
MarkerClusterer.prototype.distanceBetweenPoints_ = function(p1, p2) {};

/**
 * Determines if a marker is contained in a bounds.
 * 
 * @param {!google.maps.Marker} marker
 * @param {!google.maps.LatLngBounds} bounds
 * @return {boolean}
 */
MarkerClusterer.prototype.isMarkerInBounds_ = function(marker, bounds) {};

/**
 * Adds a marker to a cluster, or creates a new cluster.
 * 
 * @param {!google.maps.Marker} marker
 * @return {void}
 */
MarkerClusterer.prototype.addToClosestCluster_ = function(marker) {};

/**
 * Creates the clusters. This is done in batches to avoid timeout errors
 * in some browsers when there is a huge number of markers.
 * 
 *      markers to be added to clusters.
 * @param {number} iFirst
 * @return {void}
 */
MarkerClusterer.prototype.createClusters_ = function(iFirst) {};

/**
 * Extends an object's prototype by another's.
 * 
 * @ignore
 * @param {!Object} obj1
 * @param {!Object} obj2
 * @return {!Object}
 */
MarkerClusterer.prototype.extend = function(obj1, obj2) {};

/**
 * The default function for determining the label text and style
 * for a cluster icon.
 * 
 * @constant
 * @ignore
 * @param {!Array<!google.maps.Marker>} markers
 * @param {number} numStyles
 * @return {!ClusterIconInfo}
 */
MarkerClusterer.prototype.CALCULATOR = function(markers, numStyles) {};
 /** @type {?} */
var MarkerClusterer;

/**
 * @return {string}
 */
String.prototype.trim = function() {};
