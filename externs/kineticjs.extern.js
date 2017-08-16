/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/kineticjs/index.d.ts:
/** @const */
var Kinetic = {};
 /** @type {function(new: (!Kinetic.INode), !Kinetic.ObjectOptionsConfig): ?} */
Kinetic.Node;
/**
 * @record
 * @struct
 */
Kinetic.INode = function() {};

/**
 * @param {?=} cacheConfig
 * @return {!Kinetic.INode}
 */
Kinetic.INode.prototype.cache = function(cacheConfig) {};

/**
 * @param {?} attrs
 * @return {!Kinetic.INode}
 */
Kinetic.INode.prototype.clone = function(attrs) {};

/**
 * @return {void}
 */
Kinetic.INode.prototype.destroy = function() {};

/**
 * @return {!Kinetic.INode}
 */
Kinetic.INode.prototype.draw = function() {};

/**
 * @return {?}
 */
Kinetic.INode.prototype.drawBuffer = function() {};

/**
 * @return {?}
 */
Kinetic.INode.prototype.drawScene = function() {};

/**
 * @return {number}
 */
Kinetic.INode.prototype.getAbsoluteOpacity = function() {};

/**
 * @return {!Kinetic.Vector2d}
 */
Kinetic.INode.prototype.getAbsolutePosition = function() {};

/**
 * @return {?}
 */
Kinetic.INode.prototype.getAbsoluteTransform = function() {};

/**
 * @return {number}
 */
Kinetic.INode.prototype.getAbsoluteZIndex = function() {};

/**
 * @return {?}
 */
Kinetic.INode.prototype.getAttrs = function() {};

/**
 * @return {?}
 */
Kinetic.INode.prototype.getDragBounds = function() {};

/**
 * @return {?}
 */
Kinetic.INode.prototype.getDragConstraint = function() {};

/**
 * @return {boolean}
 */
Kinetic.INode.prototype.getDraggable = function() {};

/**
 * @return {?}
 */
Kinetic.INode.prototype.getLayer = function() {};

/**
 * @return {number}
 */
Kinetic.INode.prototype.getLevel = function() {};

/**
 * @return {?}
 */
Kinetic.INode.prototype.getListening = function() {};

/**
 * @return {string}
 */
Kinetic.INode.prototype.getName = function() {};

/**
 * @return {!Kinetic.Vector2d}
 */
Kinetic.INode.prototype.getOffset = function() {};

/**
 * @return {number}
 */
Kinetic.INode.prototype.getOpacity = function() {};

/**
 * @return {?}
 */
Kinetic.INode.prototype.getParent = function() {};

/**
 * @return {!Kinetic.Vector2d}
 */
Kinetic.INode.prototype.getPosition = function() {};

/**
 * @return {number}
 */
Kinetic.INode.prototype.getRotation = function() {};

/**
 * @return {number}
 */
Kinetic.INode.prototype.getRotationDeg = function() {};

/**
 * @return {!Kinetic.Vector2d}
 */
Kinetic.INode.prototype.getScale = function() {};

/**
 * @return {number}
 */
Kinetic.INode.prototype.getScaleX = function() {};

/**
 * @return {number}
 */
Kinetic.INode.prototype.getScaleY = function() {};

/**
 * @return {!Kinetic.ISize}
 */
Kinetic.INode.prototype.getSize = function() {};

/**
 * @return {!Kinetic.IStage}
 */
Kinetic.INode.prototype.getStage = function() {};

/**
 * @return {?}
 */
Kinetic.INode.prototype.getTransform = function() {};

/**
 * @return {number}
 */
Kinetic.INode.prototype.getZIndex = function() {};

/**
 * @return {void}
 */
Kinetic.INode.prototype.hide = function() {};

/**
 * @return {boolean}
 */
Kinetic.INode.prototype.isDraggable = function() {};

/**
 * @return {boolean}
 */
Kinetic.INode.prototype.isDragging = function() {};

/**
 * @return {boolean}
 */
Kinetic.INode.prototype.isListening = function() {};

/**
 * @param {{x: number, y: number}} change
 * @return {void}
 */
Kinetic.INode.prototype.move = function(change) {};

/**
 * @return {void}
 */
Kinetic.INode.prototype.moveDown = function() {};

/**
 * @param {!Kinetic.IContainer} newContainer
 * @return {void}
 */
Kinetic.INode.prototype.moveTo = function(newContainer) {};

/**
 * @return {void}
 */
Kinetic.INode.prototype.moveToBottom = function() {};

/**
 * @return {void}
 */
Kinetic.INode.prototype.moveToTop = function() {};

/**
 * @return {void}
 */
Kinetic.INode.prototype.moveUp = function() {};

/**
 * @param {string=} name
 * @return {string|void}
 */
Kinetic.INode.prototype.name = function(name) {};

/**
 * @return {?}
 */
Kinetic.INode.prototype.remove = function() {};

/**
 * @param {number} theta
 * @return {void}
 */
Kinetic.INode.prototype.rotate = function(theta) {};

/**
 * @param {number} deg
 * @return {void}
 */
Kinetic.INode.prototype.rotateDeg = function(deg) {};

/**
 * @param {string} typesStr
 * @param {function(?): ?} handler
 * @return {void}
 */
Kinetic.INode.prototype.on = function(typesStr, handler) {};

/**
 * @param {string} typesStr
 * @return {void}
 */
Kinetic.INode.prototype.off = function(typesStr) {};

/**
 * @param {string} typeStr
 * @param {?=} event
 * @param {boolean=} bubble
 * @return {?}
 */
Kinetic.INode.prototype.fire = function(typeStr, event, bubble) {};

/**
 * @param {!Kinetic.Vector2d} pos
 * @return {void}
 */
Kinetic.INode.prototype.setAbsolutePosition = function(pos) {};

/**
 * @param {?} config
 * @return {void}
 */
Kinetic.INode.prototype.setAttrs = function(config) {};

/**
 * @param {?} config
 * @return {void}
 */
Kinetic.INode.prototype.setDefaultAttrs = function(config) {};

/**
 * @param {?} bounds
 * @return {void}
 */
Kinetic.INode.prototype.setDragBounds = function(bounds) {};

/**
 * @param {string} constraint
 * @return {void}
 */
Kinetic.INode.prototype.setDragConstraint = function(constraint) {};

/**
 * @param {boolean} draggable
 * @return {void}
 */
Kinetic.INode.prototype.setDraggable = function(draggable) {};

/**
 * @param {boolean} listening
 * @return {void}
 */
Kinetic.INode.prototype.setListening = function(listening) {};

/**
 * @param {!Kinetic.Vector2d} offset
 * @return {?}
 */
Kinetic.INode.prototype.setOffset = function(offset) {};

/**
 * @param {?} opacity
 * @return {void}
 */
Kinetic.INode.prototype.setOpacity = function(opacity) {};

/**
 * @param {!Kinetic.Vector2d} position
 * @return {void}
 */
Kinetic.INode.prototype.setPosition = function(position) {};

/**
 * @param {number} theta
 * @return {void}
 */
Kinetic.INode.prototype.setRotation = function(theta) {};

/**
 * @param {number} rotDeg
 * @return {void}
 */
Kinetic.INode.prototype.setRotationDeg = function(rotDeg) {};

/**
 * @param {!Kinetic.Vector2d} scale
 * @return {void}
 */
Kinetic.INode.prototype.setScale = function(scale) {};

/**
 * @param {number} scale
 * @return {void}
 */
Kinetic.INode.prototype.setScaleX = function(scale) {};

/**
 * @param {number} scale
 * @return {void}
 */
Kinetic.INode.prototype.setScaleY = function(scale) {};

/**
 * @param {!Kinetic.ISize} size
 * @return {?}
 */
Kinetic.INode.prototype.setSize = function(size) {};

/**
 * @param {number} zIndex
 * @return {void}
 */
Kinetic.INode.prototype.setZIndex = function(zIndex) {};

/**
 * @return {void}
 */
Kinetic.INode.prototype.show = function() {};

/**
 * @param {string} eventType
 * @return {void}
 */
Kinetic.INode.prototype.simulate = function(eventType) {};

/**
 * @param {?} config
 * @return {void}
 */
Kinetic.INode.prototype.toDataURL = function(config) {};

/**
 * @param {?} config
 * @return {void}
 */
Kinetic.INode.prototype.transitionTo = function(config) {};

/**
 * @param {number=} width
 * @return {number|void}
 */
Kinetic.INode.prototype.width = function(width) {};

/**
 * @return {?}
 */
Kinetic.INode.prototype.getWidth = function() {};

/**
 * @param {number} width
 * @return {void}
 */
Kinetic.INode.prototype.setWidth = function(width) {};

/**
 * @param {number=} height
 * @return {number|void}
 */
Kinetic.INode.prototype.height = function(height) {};

/**
 * @return {?}
 */
Kinetic.INode.prototype.getHeight = function() {};

/**
 * @param {number} height
 * @return {?}
 */
Kinetic.INode.prototype.setHeight = function(height) {};

/**
 * @param {string=} id
 * @return {string|void}
 */
Kinetic.INode.prototype.id = function(id) {};

/**
 * @return {string}
 */
Kinetic.INode.prototype.getId = function() {};

/**
 * @param {string} id
 * @return {void}
 */
Kinetic.INode.prototype.setId = function(id) {};

/**
 * @param {number=} x
 * @return {number|void}
 */
Kinetic.INode.prototype.x = function(x) {};

/**
 * @param {number=} y
 * @return {number|void}
 */
Kinetic.INode.prototype.y = function(y) {};

/**
 * @return {number}
 */
Kinetic.INode.prototype.getX = function() {};

/**
 * @param {number} x
 * @return {void}
 */
Kinetic.INode.prototype.setX = function(x) {};

/**
 * @return {number}
 */
Kinetic.INode.prototype.getY = function() {};

/**
 * @param {number} y
 * @return {void}
 */
Kinetic.INode.prototype.setY = function(y) {};
 /** @type {function(new: (!Kinetic.IContainer), ?): ?} */
Kinetic.Container;
/**
 * @extends {Kinetic.INode}
 * @record
 * @struct
 */
Kinetic.IContainer = function() {};

/**
 * @param {!Kinetic.INode} child
 * @return {?}
 */
Kinetic.IContainer.prototype.add = function(child) {};

/**
 * @param {?} attrs
 * @return {!Kinetic.IContainer}
 */
Kinetic.IContainer.prototype.clone = function(attrs) {};

/**
 * @return {!Kinetic.IContainer}
 */
Kinetic.IContainer.prototype.destroyChildren = function() {};

/**
 * @param {string} selector
 * @return {?}
 */
Kinetic.IContainer.prototype.find = function(selector) {};

/**
 * @param {?} selector
 * @return {?}
 */
Kinetic.IContainer.prototype.get = function(selector) {};

/**
 * @return {!Array<!Kinetic.INode>}
 */
Kinetic.IContainer.prototype.getChildren = function() {};

/**
 * @param {?} point
 * @return {?}
 */
Kinetic.IContainer.prototype.getIntersections = function(point) {};

/**
 * @param {?} node
 * @return {?}
 */
Kinetic.IContainer.prototype.isAncestorOf = function(node) {};

/**
 * @return {?}
 */
Kinetic.IContainer.prototype.removeChildren = function() {};
 /** @type {function(new: (!Kinetic.IStage), !Kinetic.StageConfig): ?} */
Kinetic.Stage;
/**
 * @extends {Kinetic.IContainer}
 * @record
 * @struct
 */
Kinetic.IStage = function() {};

/**
 * @param {!Kinetic.ILayer} layer
 * @return {?}
 */
Kinetic.IStage.prototype.add = function(layer) {};

/**
 * @return {?}
 */
Kinetic.IStage.prototype.clear = function() {};

/**
 * @return {!HTMLElement}
 */
Kinetic.IStage.prototype.getContainer = function() {};

/**
 * @return {!HTMLElement}
 */
Kinetic.IStage.prototype.getContent = function() {};

/**
 * @return {!HTMLElement}
 */
Kinetic.IStage.prototype.getDOM = function() {};

/**
 * @return {number}
 */
Kinetic.IStage.prototype.getHeight = function() {};

/**
 * @param {?} pos
 * @return {?}
 */
Kinetic.IStage.prototype.getIntersection = function(pos) {};

/**
 * @param {!Event=} evt
 * @return {?}
 */
Kinetic.IStage.prototype.getMousePosition = function(evt) {};

/**
 * @return {!Kinetic.Vector2d}
 */
Kinetic.IStage.prototype.getPointerPosition = function() {};

/**
 * @return {!Kinetic.IStage}
 */
Kinetic.IStage.prototype.getStage = function() {};

/**
 * @param {!Event=} evt
 * @return {?}
 */
Kinetic.IStage.prototype.getTouchPosition = function(evt) {};

/**
 * @param {!Event=} evt
 * @return {?}
 */
Kinetic.IStage.prototype.getUserPosition = function(evt) {};

/**
 * @return {number}
 */
Kinetic.IStage.prototype.getWidth = function() {};

/**
 * @param {?} JSON
 * @return {?}
 */
Kinetic.IStage.prototype.load = function(JSON) {};

/**
 * @return {?}
 */
Kinetic.IStage.prototype.reset = function() {};

/**
 * @param {number} height
 * @return {?}
 */
Kinetic.IStage.prototype.setHeight = function(height) {};

/**
 * @param {number} width
 * @return {?}
 */
Kinetic.IStage.prototype.setWidth = function(width) {};

/**
 * @param {?} config
 * @return {?}
 */
Kinetic.IStage.prototype.toDataURL = function(config) {};

/**
 * @param {?} config
 * @param {function(): ?} callback
 * @return {?}
 */
Kinetic.IStage.prototype.toImage = function(config, callback) {};

/**
 * @return {?}
 */
Kinetic.IStage.prototype.toJSON = function() {};
 /** @type {function(new: (!Kinetic.ILayer), !Kinetic.LayerConfig): ?} */
Kinetic.Layer;
/**
 * @extends {Kinetic.IContainer}
 * @record
 * @struct
 */
Kinetic.ILayer = function() {};

/**
 * @param {function(): ?} handler
 * @return {?}
 */
Kinetic.ILayer.prototype.afterDraw = function(handler) {};

/**
 * @param {function(): ?} handler
 * @return {?}
 */
Kinetic.ILayer.prototype.beforeDraw = function(handler) {};

/**
 * @return {?}
 */
Kinetic.ILayer.prototype.clear = function() {};

/**
 * @return {!Kinetic.ICanvas}
 */
Kinetic.ILayer.prototype.getCanvas = function() {};

/**
 * @return {?}
 */
Kinetic.ILayer.prototype.getClearBeforeDraw = function() {};

/**
 * @return {!CanvasRenderingContext2D}
 */
Kinetic.ILayer.prototype.getContext = function() {};

/**
 * @return {?}
 */
Kinetic.ILayer.prototype.remove = function() {};

/**
 * @param {boolean} clearBeforeDraw
 * @return {?}
 */
Kinetic.ILayer.prototype.setClearBeforeDraw = function(clearBeforeDraw) {};

/**
 * @param {?} config
 * @return {?}
 */
Kinetic.ILayer.prototype.toDataURL = function(config) {};
/**
 * @record
 * @struct
 */
Kinetic.ICanvas = function() {};
 /** @type {!HTMLCanvasElement} */
Kinetic.ICanvas.prototype._canvas;
 /** @type {number} */
Kinetic.ICanvas.prototype.height;
 /** @type {number} */
Kinetic.ICanvas.prototype.width;

/**
 * @return {number}
 */
Kinetic.ICanvas.prototype.getPixelRatio = function() {};

/**
 * @param {number} pixelRatio
 * @return {?}
 */
Kinetic.ICanvas.prototype.setPixelRatio = function(pixelRatio) {};
 /** @type {function(new: (!Kinetic.IShape), ?): ?} */
Kinetic.Shape;
/**
 * @extends {Kinetic.INode}
 * @record
 * @struct
 */
Kinetic.IShape = function() {};

/**
 * @return {void}
 */
Kinetic.IShape.prototype.applyLineJoin = function() {};

/**
 * @return {void}
 */
Kinetic.IShape.prototype.drawImage = function() {};

/**
 * @return {void}
 */
Kinetic.IShape.prototype.fill = function() {};

/**
 * @param {string} text
 * @return {void}
 */
Kinetic.IShape.prototype.fillText = function(text) {};

/**
 * @return {!Kinetic.ICanvas}
 */
Kinetic.IShape.prototype.getCanvas = function() {};

/**
 * @return {?}
 */
Kinetic.IShape.prototype.getContext = function() {};

/**
 * @return {?}
 */
Kinetic.IShape.prototype.getDrawFunc = function() {};

/**
 * @return {string}
 */
Kinetic.IShape.prototype.getFill = function() {};

/**
 * @return {?}
 */
Kinetic.IShape.prototype.getLineJoin = function() {};

/**
 * @return {?}
 */
Kinetic.IShape.prototype.getShadow = function() {};

/**
 * @return {?}
 */
Kinetic.IShape.prototype.getStroke = function() {};

/**
 * @return {number}
 */
Kinetic.IShape.prototype.getStrokeWidth = function() {};

/**
 * @param {?} point
 * @return {boolean}
 */
Kinetic.IShape.prototype.intersects = function(point) {};

/**
 * @param {function(): ?} drawFunc
 * @return {?}
 */
Kinetic.IShape.prototype.setDrawFunc = function(drawFunc) {};

/**
 * @param {string} fill
 * @return {?}
 */
Kinetic.IShape.prototype.setFill = function(fill) {};

/**
 * @return {?}
 */
Kinetic.IShape.prototype.setLineJoin = function() {};

/**
 * @param {?} config
 * @return {?}
 */
Kinetic.IShape.prototype.setShadow = function(config) {};

/**
 * @param {!Kinetic.ISize} size
 * @return {?}
 */
Kinetic.IShape.prototype.setSize = function(size) {};

/**
 * @param {string} stroke
 * @return {?}
 */
Kinetic.IShape.prototype.setStroke = function(stroke) {};

/**
 * @param {number} strokeWidth
 * @return {?}
 */
Kinetic.IShape.prototype.setStrokeWidth = function(strokeWidth) {};

/**
 * @return {?}
 */
Kinetic.IShape.prototype.stroke = function() {};

/**
 * @param {string} text
 * @return {?}
 */
Kinetic.IShape.prototype.strokeText = function(text) {};
 /** @type {function(new: (!Kinetic.IRect), !Kinetic.RectConfig): ?} */
Kinetic.Rect;
/**
 * @extends {Kinetic.IShape}
 * @record
 * @struct
 */
Kinetic.IRect = function() {};

/**
 * @return {number}
 */
Kinetic.IRect.prototype.getCornerRadius = function() {};

/**
 * @return {number}
 */
Kinetic.IRect.prototype.getHeight = function() {};

/**
 * @return {number}
 */
Kinetic.IRect.prototype.getWidth = function() {};

/**
 * @param {number} radius
 * @return {?}
 */
Kinetic.IRect.prototype.setCornerRadius = function(radius) {};

/**
 * @param {number} height
 * @return {?}
 */
Kinetic.IRect.prototype.setHeight = function(height) {};

/**
 * @param {number} width
 * @return {?}
 */
Kinetic.IRect.prototype.setWidth = function(width) {};
 /** @type {function(new: (!Kinetic.ICircle), !Kinetic.CircleConfig): ?} */
Kinetic.Circle;
/**
 * @extends {Kinetic.IShape}
 * @record
 * @struct
 */
Kinetic.ICircle = function() {};

/**
 * @return {number}
 */
Kinetic.ICircle.prototype.getRadius = function() {};

/**
 * @param {number} radius
 * @return {?}
 */
Kinetic.ICircle.prototype.setRadius = function(radius) {};
 /** @type {function(new: (!Kinetic.IEllipse), !Kinetic.CircleConfig): ?} */
Kinetic.Ellipse;
/**
 * @extends {Kinetic.IShape}
 * @record
 * @struct
 */
Kinetic.IEllipse = function() {};

/**
 * @return {number}
 */
Kinetic.IEllipse.prototype.getRadius = function() {};

/**
 * @param {number} radius
 * @return {?}
 */
Kinetic.IEllipse.prototype.setRadius = function(radius) {};
 /** @type {function(new: (!Kinetic.IGroup), !Kinetic.ObjectOptionsConfig): ?} */
Kinetic.Group;
/**
 * @extends {Kinetic.IContainer}
 * @record
 * @struct
 */
Kinetic.IGroup = function() {};
 /** @type {function(new: (!Kinetic.ICollection)): ?} */
Kinetic.Collection;
/**
 * @record
 * @struct
 */
Kinetic.ICollection = function() {};

/**
 * @param {!Function} method
 * @param {?} val
 * @return {?}
 */
Kinetic.ICollection.prototype.apply = function(method, val) {};

/**
 * @param {function(): ?} func
 * @return {?}
 */
Kinetic.ICollection.prototype.each = function(func) {};
 /** @type {function(new: (!Kinetic.IImage), !Kinetic.ImageConfig): ?} */
Kinetic.Image;
/**
 * @extends {Kinetic.IShape}
 * @record
 * @struct
 */
Kinetic.IImage = function() {};

/**
 * @param {?} config
 * @return {?}
 */
Kinetic.IImage.prototype.applyFilter = function(config) {};

/**
 * @return {?}
 */
Kinetic.IImage.prototype.clearImageBuffer = function() {};

/**
 * @param {function(): ?} callback
 * @return {?}
 */
Kinetic.IImage.prototype.createImageBuffer = function(callback) {};

/**
 * @return {?}
 */
Kinetic.IImage.prototype.getCrop = function() {};

/**
 * @return {?}
 */
Kinetic.IImage.prototype.getFilter = function() {};

/**
 * @return {number}
 */
Kinetic.IImage.prototype.getHeight = function() {};

/**
 * @return {!Kinetic.IImage}
 */
Kinetic.IImage.prototype.getImage = function() {};

/**
 * @return {number}
 */
Kinetic.IImage.prototype.getWidth = function() {};

/**
 * @param {!Kinetic.CropConfig} config
 * @return {?}
 */
Kinetic.IImage.prototype.setCrop = function(config) {};

/**
 * @param {?} config
 * @return {?}
 */
Kinetic.IImage.prototype.setFilter = function(config) {};

/**
 * @param {number} height
 * @return {?}
 */
Kinetic.IImage.prototype.setHeight = function(height) {};

/**
 * @param {!Kinetic.IImage} image
 * @return {?}
 */
Kinetic.IImage.prototype.setImage = function(image) {};

/**
 * @param {number} width
 * @return {?}
 */
Kinetic.IImage.prototype.setWidth = function(width) {};
 /** @type {function(new: (!Kinetic.ILine), !Kinetic.LineConfig): ?} */
Kinetic.Line;
/**
 * @extends {Kinetic.IShape}
 * @record
 * @struct
 */
Kinetic.ILine = function() {};

/**
 * @return {?}
 */
Kinetic.ILine.prototype.getDashArray = function() {};

/**
 * @return {?}
 */
Kinetic.ILine.prototype.getLineCap = function() {};

/**
 * @return {?}
 */
Kinetic.ILine.prototype.getPoints = function() {};

/**
 * @param {?} dashArray
 * @return {?}
 */
Kinetic.ILine.prototype.setDashArray = function(dashArray) {};

/**
 * @param {string} lineCap
 * @return {?}
 */
Kinetic.ILine.prototype.setLineCap = function(lineCap) {};

/**
 * @param {!Array<?>} can
 * @return {?}
 */
Kinetic.ILine.prototype.setPoints = function(can) {};
 /** @type {function(new: (!Kinetic.IPath), !Kinetic.PathConfig): ?} */
Kinetic.Path;
/**
 * @extends {Kinetic.IShape}
 * @record
 * @struct
 */
Kinetic.IPath = function() {};

/**
 * @return {string}
 */
Kinetic.IPath.prototype.getData = function() {};

/**
 * @param {string} SVG
 * @return {?}
 */
Kinetic.IPath.prototype.setData = function(SVG) {};
 /** @type {function(new: (!Kinetic.IRegularPolygon), !Kinetic.RegularPolygonConfig): ?} */
Kinetic.RegularPolygon;
/**
 * @extends {Kinetic.IShape}
 * @record
 * @struct
 */
Kinetic.IRegularPolygon = function() {};

/**
 * @return {number}
 */
Kinetic.IRegularPolygon.prototype.getRadius = function() {};

/**
 * @return {number}
 */
Kinetic.IRegularPolygon.prototype.getSides = function() {};

/**
 * @param {number} radius
 * @return {?}
 */
Kinetic.IRegularPolygon.prototype.setRadius = function(radius) {};

/**
 * @param {number} sides
 * @return {?}
 */
Kinetic.IRegularPolygon.prototype.setSides = function(sides) {};
 /** @type {function(new: (!Kinetic.ISprite), !Kinetic.SpriteConfig): ?} */
Kinetic.Sprite;
/**
 * @extends {Kinetic.IShape}
 * @record
 * @struct
 */
Kinetic.ISprite = function() {};

/**
 * @param {number} index
 * @param {function(): ?} func
 * @return {?}
 */
Kinetic.ISprite.prototype.afterFrame = function(index, func) {};

/**
 * @return {string}
 */
Kinetic.ISprite.prototype.getAnimation = function() {};

/**
 * @return {?}
 */
Kinetic.ISprite.prototype.getAnimations = function() {};

/**
 * @return {number}
 */
Kinetic.ISprite.prototype.getIndex = function() {};

/**
 * @param {string} anim
 * @return {?}
 */
Kinetic.ISprite.prototype.setAnimation = function(anim) {};

/**
 * @param {?} animations
 * @return {?}
 */
Kinetic.ISprite.prototype.setAnimations = function(animations) {};

/**
 * @param {number} index
 * @return {?}
 */
Kinetic.ISprite.prototype.setIndex = function(index) {};

/**
 * @return {?}
 */
Kinetic.ISprite.prototype.start = function() {};

/**
 * @return {?}
 */
Kinetic.ISprite.prototype.stop = function() {};
 /** @type {function(new: (!Kinetic.IStar), !Kinetic.StarConfig): ?} */
Kinetic.Star;
/**
 * @extends {Kinetic.IShape}
 * @record
 * @struct
 */
Kinetic.IStar = function() {};

/**
 * @return {number}
 */
Kinetic.IStar.prototype.getInnerRadius = function() {};

/**
 * @return {number}
 */
Kinetic.IStar.prototype.getNumPoints = function() {};

/**
 * @return {number}
 */
Kinetic.IStar.prototype.getOuterRadius = function() {};

/**
 * @param {number} radius
 * @return {?}
 */
Kinetic.IStar.prototype.setInnerRadius = function(radius) {};

/**
 * @param {number} points
 * @return {?}
 */
Kinetic.IStar.prototype.setNumPoints = function(points) {};

/**
 * @param {number} radius
 * @return {?}
 */
Kinetic.IStar.prototype.setOuterRadius = function(radius) {};
 /** @type {function(new: (!Kinetic.IText), !Kinetic.TextConfig): ?} */
Kinetic.Text;
/**
 * @extends {Kinetic.IShape}
 * @record
 * @struct
 */
Kinetic.IText = function() {};

/**
 * @return {string}
 */
Kinetic.IText.prototype.getAlign = function() {};

/**
 * @return {number}
 */
Kinetic.IText.prototype.getBoxHeight = function() {};

/**
 * @return {number}
 */
Kinetic.IText.prototype.getBoxWidth = function() {};

/**
 * @return {string}
 */
Kinetic.IText.prototype.getFontFamily = function() {};

/**
 * @return {number}
 */
Kinetic.IText.prototype.getFontSize = function() {};

/**
 * @return {string}
 */
Kinetic.IText.prototype.getFontStyle = function() {};

/**
 * @return {number}
 */
Kinetic.IText.prototype.getHeight = function() {};

/**
 * @return {number}
 */
Kinetic.IText.prototype.getLineHeight = function() {};

/**
 * @return {number}
 */
Kinetic.IText.prototype.getPadding = function() {};

/**
 * @return {?}
 */
Kinetic.IText.prototype.getShadow = function() {};

/**
 * @return {string}
 */
Kinetic.IText.prototype.getText = function() {};

/**
 * @return {?}
 */
Kinetic.IText.prototype.getTextFill = function() {};

/**
 * @return {number}
 */
Kinetic.IText.prototype.getTextHeight = function() {};

/**
 * @return {?}
 */
Kinetic.IText.prototype.getTextStroke = function() {};

/**
 * @return {number}
 */
Kinetic.IText.prototype.getTextStrokeWidth = function() {};

/**
 * @return {number}
 */
Kinetic.IText.prototype.getTextWidth = function() {};

/**
 * @return {number}
 */
Kinetic.IText.prototype.getWidth = function() {};

/**
 * @param {string} align
 * @return {?}
 */
Kinetic.IText.prototype.setAlign = function(align) {};

/**
 * @param {string} fontFamily
 * @return {?}
 */
Kinetic.IText.prototype.setFontFamily = function(fontFamily) {};

/**
 * @param {number} fontSize
 * @return {?}
 */
Kinetic.IText.prototype.setFontSize = function(fontSize) {};

/**
 * @param {?} textStroke
 * @return {?}
 */
Kinetic.IText.prototype.setFontStroke = function(textStroke) {};

/**
 * @param {string} fontStyle
 * @return {?}
 */
Kinetic.IText.prototype.setFontStyle = function(fontStyle) {};

/**
 * @param {number} height
 * @return {?}
 */
Kinetic.IText.prototype.setHeight = function(height) {};

/**
 * @param {number} lineHeight
 * @return {?}
 */
Kinetic.IText.prototype.setLineHeight = function(lineHeight) {};

/**
 * @param {number} padding
 * @return {?}
 */
Kinetic.IText.prototype.setPadding = function(padding) {};

/**
 * @param {?} config
 * @return {?}
 */
Kinetic.IText.prototype.setShadow = function(config) {};

/**
 * @param {string} text
 * @return {?}
 */
Kinetic.IText.prototype.setText = function(text) {};

/**
 * @param {?} textFill
 * @return {?}
 */
Kinetic.IText.prototype.setTextFill = function(textFill) {};

/**
 * @param {number} textStrokeWidth
 * @return {?}
 */
Kinetic.IText.prototype.setTextStrokeWidth = function(textStrokeWidth) {};

/**
 * @param {number} width
 * @return {?}
 */
Kinetic.IText.prototype.setWidth = function(width) {};
 /** @type {function(new: (!Kinetic.ITextPath), ?): ?} */
Kinetic.TextPath;
/**
 * @extends {Kinetic.IShape}
 * @record
 * @struct
 */
Kinetic.ITextPath = function() {};

/**
 * @return {string}
 */
Kinetic.ITextPath.prototype.getFontFamily = function() {};

/**
 * @return {number}
 */
Kinetic.ITextPath.prototype.getFontSize = function() {};

/**
 * @return {string}
 */
Kinetic.ITextPath.prototype.getFontStyle = function() {};

/**
 * @return {string}
 */
Kinetic.ITextPath.prototype.getText = function() {};

/**
 * @return {?}
 */
Kinetic.ITextPath.prototype.getTextFill = function() {};

/**
 * @return {number}
 */
Kinetic.ITextPath.prototype.getTextHeight = function() {};

/**
 * @return {?}
 */
Kinetic.ITextPath.prototype.getTextStroke = function() {};

/**
 * @return {number}
 */
Kinetic.ITextPath.prototype.getTextStrokeWidth = function() {};

/**
 * @return {number}
 */
Kinetic.ITextPath.prototype.getTextWidth = function() {};

/**
 * @param {string} fontFamily
 * @return {?}
 */
Kinetic.ITextPath.prototype.setFontFamily = function(fontFamily) {};

/**
 * @param {number} fontSize
 * @return {?}
 */
Kinetic.ITextPath.prototype.setFontSize = function(fontSize) {};

/**
 * @param {?} textStroke
 * @return {?}
 */
Kinetic.ITextPath.prototype.setFontStroke = function(textStroke) {};

/**
 * @param {string} fontStyle
 * @return {?}
 */
Kinetic.ITextPath.prototype.setFontStyle = function(fontStyle) {};

/**
 * @param {string} text
 * @return {?}
 */
Kinetic.ITextPath.prototype.setText = function(text) {};

/**
 * @param {?} textFill
 * @return {?}
 */
Kinetic.ITextPath.prototype.setTextFill = function(textFill) {};

/**
 * @param {number} textStrokeWidth
 * @return {?}
 */
Kinetic.ITextPath.prototype.setTextStrokeWidth = function(textStrokeWidth) {};
 /** @type {function(new: (!Kinetic.IAnimation), !Array<?>): ?} */
Kinetic.Animation;
/**
 * @extends {Kinetic.IContainer}
 * @record
 * @struct
 */
Kinetic.IAnimation = function() {};

/**
 * @return {?}
 */
Kinetic.IAnimation.prototype.start = function() {};

/**
 * @return {?}
 */
Kinetic.IAnimation.prototype.stop = function() {};
/**
 * @record
 * @struct
 */
Kinetic.CropConfig = function() {};
 /** @type {number} */
Kinetic.CropConfig.prototype.x;
 /** @type {number} */
Kinetic.CropConfig.prototype.y;
 /** @type {number} */
Kinetic.CropConfig.prototype.width;
 /** @type {number} */
Kinetic.CropConfig.prototype.height;
/**
 * @extends {Kinetic.ObjectOptionsConfig}
 * @record
 * @struct
 */
Kinetic.StageConfig = function() {};
 /** @type {string} */
Kinetic.StageConfig.prototype.container;
 /** @type {number} */
Kinetic.StageConfig.prototype.width;
 /** @type {number} */
Kinetic.StageConfig.prototype.height;
/**
 * @extends {Kinetic.ObjectOptionsConfig}
 * @record
 * @struct
 */
Kinetic.LayerConfig = function() {};
 /** @type {boolean} */
Kinetic.LayerConfig.prototype.clearBeforeDraw;
/**
 * @extends {Kinetic.DrawOptionsConfig}
 * @extends {Kinetic.ObjectOptionsConfig}
 * @record
 * @struct
 */
Kinetic.RectConfig = function() {};
 /** @type {number} */
Kinetic.RectConfig.prototype.width;
 /** @type {number} */
Kinetic.RectConfig.prototype.height;
 /** @type {number} */
Kinetic.RectConfig.prototype.cornerRadius;
/**
 * @extends {Kinetic.DrawOptionsConfig}
 * @extends {Kinetic.ObjectOptionsConfig}
 * @record
 * @struct
 */
Kinetic.CircleConfig = function() {};
 /** @type {number} */
Kinetic.CircleConfig.prototype.radius;
/**
 * @extends {Kinetic.DrawOptionsConfig}
 * @extends {Kinetic.ObjectOptionsConfig}
 * @record
 * @struct
 */
Kinetic.ImageConfig = function() {};
 /** @type {?} */
Kinetic.ImageConfig.prototype.image;
 /** @type {number} */
Kinetic.ImageConfig.prototype.width;
 /** @type {number} */
Kinetic.ImageConfig.prototype.height;
 /** @type {?} */
Kinetic.ImageConfig.prototype.crop;
/**
 * @extends {Kinetic.DrawOptionsConfig}
 * @extends {Kinetic.ObjectOptionsConfig}
 * @record
 * @struct
 */
Kinetic.SpriteConfig = function() {};
 /** @type {?} */
Kinetic.SpriteConfig.prototype.image;
 /** @type {?} */
Kinetic.SpriteConfig.prototype.animations;
 /** @type {?} */
Kinetic.SpriteConfig.prototype.animation;
 /** @type {number} */
Kinetic.SpriteConfig.prototype.frameRate;
/**
 * @extends {Kinetic.DrawOptionsConfig}
 * @extends {Kinetic.ObjectOptionsConfig}
 * @record
 * @struct
 */
Kinetic.TextConfig = function() {};
 /** @type {string} */
Kinetic.TextConfig.prototype.text;
 /** @type {number} */
Kinetic.TextConfig.prototype.fontSize;
 /** @type {string} */
Kinetic.TextConfig.prototype.fontFamily;
 /** @type {string} */
Kinetic.TextConfig.prototype.fontStyle;
 /** @type {?} */
Kinetic.TextConfig.prototype.textFill;
 /** @type {?} */
Kinetic.TextConfig.prototype.textStroke;
 /** @type {number} */
Kinetic.TextConfig.prototype.textStrokeWidth;
 /** @type {string} */
Kinetic.TextConfig.prototype.align;
 /** @type {string} */
Kinetic.TextConfig.prototype.padding;
 /** @type {number} */
Kinetic.TextConfig.prototype.width;
 /** @type {number} */
Kinetic.TextConfig.prototype.height;
 /** @type {number} */
Kinetic.TextConfig.prototype.lineHeight;
 /** @type {number} */
Kinetic.TextConfig.prototype.cornerRadius;
/**
 * @extends {Kinetic.DrawOptionsConfig}
 * @extends {Kinetic.ObjectOptionsConfig}
 * @record
 * @struct
 */
Kinetic.LineConfig = function() {};
 /** @type {?} */
Kinetic.LineConfig.prototype.points;
 /** @type {string} */
Kinetic.LineConfig.prototype.lineCap;
 /** @type {!Array<number>} */
Kinetic.LineConfig.prototype.dash;
/**
 * @extends {Kinetic.DrawOptionsConfig}
 * @extends {Kinetic.ObjectOptionsConfig}
 * @record
 * @struct
 */
Kinetic.RegularPolygonConfig = function() {};
 /** @type {number} */
Kinetic.RegularPolygonConfig.prototype.sides;
 /** @type {number} */
Kinetic.RegularPolygonConfig.prototype.radius;
/**
 * @extends {Kinetic.DrawOptionsConfig}
 * @extends {Kinetic.ObjectOptionsConfig}
 * @record
 * @struct
 */
Kinetic.PathConfig = function() {};
 /** @type {string} */
Kinetic.PathConfig.prototype.data;
/**
 * @extends {Kinetic.DrawOptionsConfig}
 * @extends {Kinetic.ObjectOptionsConfig}
 * @record
 * @struct
 */
Kinetic.StarConfig = function() {};
 /** @type {number} */
Kinetic.StarConfig.prototype.numPoints;
 /** @type {number} */
Kinetic.StarConfig.prototype.outerRadius;
 /** @type {number} */
Kinetic.StarConfig.prototype.innerRadius;
/**
 * @extends {Kinetic.DrawOptionsConfig}
 * @extends {Kinetic.ObjectOptionsConfig}
 * @record
 * @struct
 */
Kinetic.CustomConfig = function() {};
 /** @type {function(): ?} */
Kinetic.CustomConfig.prototype.drawFunc;
/**
 * @record
 * @struct
 */
Kinetic.DrawOptionsConfig = function() {};
 /** @type {string} */
Kinetic.DrawOptionsConfig.prototype.fill;
 /** @type {string} */
Kinetic.DrawOptionsConfig.prototype.stroke;
 /** @type {number} */
Kinetic.DrawOptionsConfig.prototype.strokeWidth;
 /** @type {string} */
Kinetic.DrawOptionsConfig.prototype.lineJoin;
 /** @type {?} */
Kinetic.DrawOptionsConfig.prototype.shadow;
/**
 * @record
 * @struct
 */
Kinetic.Vector2d = function() {};
 /** @type {number} */
Kinetic.Vector2d.prototype.x;
 /** @type {number} */
Kinetic.Vector2d.prototype.y;
/**
 * @record
 * @struct
 */
Kinetic.ObjectOptionsConfig = function() {};
 /** @type {number} */
Kinetic.ObjectOptionsConfig.prototype.x;
 /** @type {number} */
Kinetic.ObjectOptionsConfig.prototype.y;
 /** @type {boolean} */
Kinetic.ObjectOptionsConfig.prototype.visible;
 /** @type {boolean} */
Kinetic.ObjectOptionsConfig.prototype.listening;
 /** @type {string} */
Kinetic.ObjectOptionsConfig.prototype.id;
 /** @type {string} */
Kinetic.ObjectOptionsConfig.prototype.name;
 /** @type {?} */
Kinetic.ObjectOptionsConfig.prototype.opacity;
 /** @type {!Kinetic.Vector2d} */
Kinetic.ObjectOptionsConfig.prototype.scale;
 /** @type {number} */
Kinetic.ObjectOptionsConfig.prototype.rotation;
 /** @type {number} */
Kinetic.ObjectOptionsConfig.prototype.rotationDeg;
 /** @type {!Kinetic.Vector2d} */
Kinetic.ObjectOptionsConfig.prototype.offset;
 /** @type {boolean} */
Kinetic.ObjectOptionsConfig.prototype.draggable;
 /** @type {string} */
Kinetic.ObjectOptionsConfig.prototype.dragConstraint;
 /** @type {?} */
Kinetic.ObjectOptionsConfig.prototype.dragBounds;
 /** @type {function(!Kinetic.Vector2d): !Kinetic.Vector2d} */
Kinetic.ObjectOptionsConfig.prototype.dragBoundFunc;
 /** @type {number} */
Kinetic.ObjectOptionsConfig.prototype.width;
 /** @type {number} */
Kinetic.ObjectOptionsConfig.prototype.height;
/**
 * @record
 * @struct
 */
Kinetic.ISize = function() {};
 /** @type {number} */
Kinetic.ISize.prototype.width;
 /** @type {number} */
Kinetic.ISize.prototype.height;
