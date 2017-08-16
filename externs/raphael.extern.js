/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/raphael/index.d.ts:
/**
 * @record
 * @struct
 */
function BoundingBox() {}
 /** @type {number} */
BoundingBox.prototype.x;
 /** @type {number} */
BoundingBox.prototype.y;
 /** @type {number} */
BoundingBox.prototype.x2;
 /** @type {number} */
BoundingBox.prototype.y2;
 /** @type {number} */
BoundingBox.prototype.width;
 /** @type {number} */
BoundingBox.prototype.height;
/**
 * @record
 * @struct
 */
function RaphaelAnimation() {}

/**
 * @param {number} delay
 * @return {!RaphaelAnimation}
 */
RaphaelAnimation.prototype.delay = function(delay) {};

/**
 * @param {number} repeat
 * @return {!RaphaelAnimation}
 */
RaphaelAnimation.prototype.repeat = function(repeat) {};
/**
 * @record
 * @struct
 */
function RaphaelFont() {}
 /** @type {number} */
RaphaelFont.prototype.w;
 /** @type {?} */
RaphaelFont.prototype.face;
 /** @type {?} */
RaphaelFont.prototype.glyphs;
/**
 * @record
 * @struct
 */
function RaphaelElement() {}
 /** @type {string} */
RaphaelElement.prototype.id;
 /** @type {!RaphaelMatrix} */
RaphaelElement.prototype.matrix;
 /** @type {!RaphaelElement} */
RaphaelElement.prototype.next;
 /** @type {!SVGElement} */
RaphaelElement.prototype.node;
 /** @type {!RaphaelPaper} */
RaphaelElement.prototype.paper;
 /** @type {!RaphaelElement} */
RaphaelElement.prototype.prev;
 /** @type {!RaphaelStatic} */
RaphaelElement.prototype.raphael;

/**
 * @param {!Object<string,?>|!RaphaelAnimation} params_or_animation
 * @param {number=} ms
 * @param {string=} easing
 * @param {!Function=} callback
 * @return {!RaphaelElement}
 */
RaphaelElement.prototype.animate = function(params_or_animation, ms, easing, callback) {};

/**
 * @param {!RaphaelElement} el
 * @param {!RaphaelAnimation} anim
 * @param {?|!RaphaelAnimation} params_or_animation
 * @param {number=} ms
 * @param {string=} easing
 * @param {!Function=} callback
 * @return {!RaphaelElement}
 */
RaphaelElement.prototype.animateWith = function(el, anim, params_or_animation, ms, easing, callback) {};

/**
 * @param {string|!Array<string>|?} attrName_or_attrNames_or_params
 * @param {?=} value
 * @return {!RaphaelElement|?|!Array<?>}
 */
RaphaelElement.prototype.attr = function(attrName_or_attrNames_or_params, value) {};

/**
 * @param {!Function} handler
 * @return {!RaphaelElement}
 */
RaphaelElement.prototype.click = function(handler) {};

/**
 * @return {!RaphaelElement}
 */
RaphaelElement.prototype.clone = function() {};

/**
 * @param {string} key
 * @param {?=} value
 * @return {?|!RaphaelElement}
 */
RaphaelElement.prototype.data = function(key, value) {};

/**
 * @param {!Function} handler
 * @return {!RaphaelElement}
 */
RaphaelElement.prototype.dblclick = function(handler) {};

/**
 * @param {function(number, number, number, number, !DragEvent): !Object} onmove
 * @param {function(number, number, !DragEvent): !Object} onstart
 * @param {function(?): !Object} onend
 * @param {?=} mcontext
 * @param {?=} scontext
 * @param {?=} econtext
 * @return {!RaphaelElement}
 */
RaphaelElement.prototype.drag = function(onmove, onstart, onend, mcontext, scontext, econtext) {};

/**
 * @param {boolean=} isWithoutTransform
 * @return {!BoundingBox}
 */
RaphaelElement.prototype.getBBox = function(isWithoutTransform) {};

/**
 * @param {{width: number, fill: boolean, opacity: number, offsetx: number, offsety: number, color: string}=} glow
 * @return {!RaphaelSet}
 */
RaphaelElement.prototype.glow = function(glow) {};

/**
 * @return {!RaphaelElement}
 */
RaphaelElement.prototype.hide = function() {};

/**
 * @param {!Function} f_in
 * @param {!Function} f_out
 * @param {?=} icontext
 * @param {?=} ocontext
 * @return {!RaphaelElement}
 */
RaphaelElement.prototype.hover = function(f_in, f_out, icontext, ocontext) {};

/**
 * @param {!RaphaelElement} el
 * @return {!RaphaelElement}
 */
RaphaelElement.prototype.insertAfter = function(el) {};

/**
 * @param {!RaphaelElement} el
 * @return {!RaphaelElement}
 */
RaphaelElement.prototype.insertBefore = function(el) {};

/**
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
RaphaelElement.prototype.isPointInside = function(x, y) {};

/**
 * @return {boolean}
 */
RaphaelElement.prototype.isVisible = function() {};

/**
 * @param {!Function} handler
 * @return {!RaphaelElement}
 */
RaphaelElement.prototype.mousedown = function(handler) {};

/**
 * @param {!Function} handler
 * @return {!RaphaelElement}
 */
RaphaelElement.prototype.mousemove = function(handler) {};

/**
 * @param {!Function} handler
 * @return {!RaphaelElement}
 */
RaphaelElement.prototype.mouseout = function(handler) {};

/**
 * @param {!Function} handler
 * @return {!RaphaelElement}
 */
RaphaelElement.prototype.mouseover = function(handler) {};

/**
 * @param {!Function} handler
 * @return {!RaphaelElement}
 */
RaphaelElement.prototype.mouseup = function(handler) {};

/**
 * @param {!Function} f
 * @return {!RaphaelElement}
 */
RaphaelElement.prototype.onDragOver = function(f) {};

/**
 * @param {!RaphaelAnimation=} anim
 * @return {!RaphaelElement}
 */
RaphaelElement.prototype.pause = function(anim) {};

/**
 * @return {void}
 */
RaphaelElement.prototype.remove = function() {};

/**
 * @param {string=} key
 * @return {!RaphaelElement}
 */
RaphaelElement.prototype.removeData = function(key) {};

/**
 * @param {!RaphaelAnimation=} anim
 * @return {!RaphaelElement}
 */
RaphaelElement.prototype.resume = function(anim) {};

/**
 * @param {number} deg
 * @param {number=} cx
 * @param {number=} cy
 * @return {!RaphaelElement}
 */
RaphaelElement.prototype.rotate = function(deg, cx, cy) {};

/**
 * @param {!RaphaelAnimation} anim
 * @param {number=} value
 * @return {void|!RaphaelElement}
 */
RaphaelElement.prototype.setTime = function(anim, value) {};

/**
 * @return {!RaphaelElement}
 */
RaphaelElement.prototype.show = function() {};

/**
 * @param {!RaphaelAnimation=} anim
 * @param {number=} value
 * @return {!Array<{anim: !RaphaelAnimation, status: number}>|number|!RaphaelElement}
 */
RaphaelElement.prototype.status = function(anim, value) {};

/**
 * @param {!RaphaelAnimation=} anim
 * @return {!RaphaelElement}
 */
RaphaelElement.prototype.stop = function(anim) {};

/**
 * @return {!RaphaelElement}
 */
RaphaelElement.prototype.toBack = function() {};

/**
 * @return {!RaphaelElement}
 */
RaphaelElement.prototype.toFront = function() {};

/**
 * @param {!Function} handler
 * @return {!RaphaelElement}
 */
RaphaelElement.prototype.touchcancel = function(handler) {};

/**
 * @param {!Function} handler
 * @return {!RaphaelElement}
 */
RaphaelElement.prototype.touchend = function(handler) {};

/**
 * @param {!Function} handler
 * @return {!RaphaelElement}
 */
RaphaelElement.prototype.touchmove = function(handler) {};

/**
 * @param {!Function} handler
 * @return {!RaphaelElement}
 */
RaphaelElement.prototype.touchstart = function(handler) {};

/**
 * @param {string=} tstr
 * @return {string|!RaphaelElement}
 */
RaphaelElement.prototype.transform = function(tstr) {};

/**
 * @param {!Function} handler
 * @return {!RaphaelElement}
 */
RaphaelElement.prototype.unclick = function(handler) {};

/**
 * @param {!Function} handler
 * @return {!RaphaelElement}
 */
RaphaelElement.prototype.undblclick = function(handler) {};

/**
 * @return {!RaphaelElement}
 */
RaphaelElement.prototype.undrag = function() {};

/**
 * @param {!Function=} f_in
 * @param {!Function=} f_out
 * @return {!RaphaelElement}
 */
RaphaelElement.prototype.unhover = function(f_in, f_out) {};

/**
 * @param {!Function} handler
 * @return {!RaphaelElement}
 */
RaphaelElement.prototype.unmousedown = function(handler) {};

/**
 * @param {!Function} handler
 * @return {!RaphaelElement}
 */
RaphaelElement.prototype.unmousemove = function(handler) {};

/**
 * @param {!Function} handler
 * @return {!RaphaelElement}
 */
RaphaelElement.prototype.unmouseout = function(handler) {};

/**
 * @param {!Function} handler
 * @return {!RaphaelElement}
 */
RaphaelElement.prototype.unmouseover = function(handler) {};

/**
 * @param {!Function} handler
 * @return {!RaphaelElement}
 */
RaphaelElement.prototype.unmouseup = function(handler) {};

/**
 * @param {!Function} handler
 * @return {!RaphaelElement}
 */
RaphaelElement.prototype.untouchcancel = function(handler) {};

/**
 * @param {!Function} handler
 * @return {!RaphaelElement}
 */
RaphaelElement.prototype.untouchend = function(handler) {};

/**
 * @param {!Function} handler
 * @return {!RaphaelElement}
 */
RaphaelElement.prototype.untouchmove = function(handler) {};

/**
 * @param {!Function} handler
 * @return {!RaphaelElement}
 */
RaphaelElement.prototype.untouchstart = function(handler) {};
/**
 * @extends {RaphaelElement}
 * @record
 * @struct
 */
function RaphaelPath() {}

/**
 * @param {number} length
 * @return {{x: number, y: number, alpha: number}}
 */
RaphaelPath.prototype.getPointAtLength = function(length) {};

/**
 * @param {number} from
 * @param {number} to
 * @return {string}
 */
RaphaelPath.prototype.getSubpath = function(from, to) {};

/**
 * @return {number}
 */
RaphaelPath.prototype.getTotalLength = function() {};
/**
 * @record
 * @struct
 */
function RaphaelSet() {}
 /** @type {number} */
RaphaelSet.prototype.length;

/* TODO: IndexSignature:  */
 /** @type {string} */
RaphaelSet.prototype.id;
 /** @type {!RaphaelMatrix} */
RaphaelSet.prototype.matrix;
 /** @type {!RaphaelSet} */
RaphaelSet.prototype.next;
 /** @type {!RaphaelPaper} */
RaphaelSet.prototype.paper;
 /** @type {!RaphaelSet} */
RaphaelSet.prototype.prev;
 /** @type {!RaphaelStatic} */
RaphaelSet.prototype.raphael;

/**
 * @return {void}
 */
RaphaelSet.prototype.clear = function() {};

/**
 * @param {!RaphaelElement} element
 * @return {boolean}
 */
RaphaelSet.prototype.exclude = function(element) {};

/**
 * @param {!Function} callback
 * @param {?=} thisArg
 * @return {!RaphaelSet}
 */
RaphaelSet.prototype.forEach = function(callback, thisArg) {};

/**
 * @return {!RaphaelElement}
 */
RaphaelSet.prototype.pop = function() {};

/**
 * @param {...?} RaphaelElement
 * @return {!RaphaelSet}
 */
RaphaelSet.prototype.push = function(RaphaelElement) {};

/**
 * @param {number} index
 * @param {number} count
 * @param {...!RaphaelElement} insertion
 * @return {!RaphaelSet}
 */
RaphaelSet.prototype.splice = function(index, count, insertion) {};

/**
 * @param {!Object<string,?>|!RaphaelAnimation} params_or_animation
 * @param {number=} ms
 * @param {string=} easing
 * @param {!Function=} callback
 * @return {!RaphaelSet}
 */
RaphaelSet.prototype.animate = function(params_or_animation, ms, easing, callback) {};

/**
 * @param {!RaphaelElement} el
 * @param {!RaphaelAnimation} anim
 * @param {?|!RaphaelAnimation} params_or_animation
 * @param {number=} ms
 * @param {string=} easing
 * @param {!Function=} callback
 * @return {!RaphaelSet}
 */
RaphaelSet.prototype.animateWith = function(el, anim, params_or_animation, ms, easing, callback) {};

/**
 * @param {string|!Object<string,?>|!Array<string>} attrName_or_params_or_attrNames
 * @param {?=} value
 * @return {!RaphaelSet|?|!Array<?>}
 */
RaphaelSet.prototype.attr = function(attrName_or_params_or_attrNames, value) {};

/**
 * @param {!Function} handler
 * @return {!RaphaelSet}
 */
RaphaelSet.prototype.click = function(handler) {};

/**
 * @return {!RaphaelSet}
 */
RaphaelSet.prototype.clone = function() {};

/**
 * @param {string} key
 * @param {?=} value
 * @return {?|!RaphaelSet}
 */
RaphaelSet.prototype.data = function(key, value) {};

/**
 * @param {!Function} handler
 * @return {!RaphaelSet}
 */
RaphaelSet.prototype.dblclick = function(handler) {};

/**
 * @param {function(number, number, number, number, !DragEvent): !Object} onmove
 * @param {function(number, number, !DragEvent): !Object} onstart
 * @param {function(?): !Object} onend
 * @param {?=} mcontext
 * @param {?=} scontext
 * @param {?=} econtext
 * @return {!RaphaelSet}
 */
RaphaelSet.prototype.drag = function(onmove, onstart, onend, mcontext, scontext, econtext) {};

/**
 * @param {boolean=} isWithoutTransform
 * @return {!BoundingBox}
 */
RaphaelSet.prototype.getBBox = function(isWithoutTransform) {};

/**
 * @param {{width: number, fill: boolean, opacity: number, offsetx: number, offsety: number, color: string}=} glow
 * @return {!RaphaelSet}
 */
RaphaelSet.prototype.glow = function(glow) {};

/**
 * @return {!RaphaelSet}
 */
RaphaelSet.prototype.hide = function() {};

/**
 * @param {!Function} f_in
 * @param {!Function} f_out
 * @param {?=} icontext
 * @param {?=} ocontext
 * @return {!RaphaelSet}
 */
RaphaelSet.prototype.hover = function(f_in, f_out, icontext, ocontext) {};

/**
 * @param {!RaphaelElement} el
 * @return {!RaphaelSet}
 */
RaphaelSet.prototype.insertAfter = function(el) {};

/**
 * @param {!RaphaelElement} el
 * @return {!RaphaelSet}
 */
RaphaelSet.prototype.insertBefore = function(el) {};

/**
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
RaphaelSet.prototype.isPointInside = function(x, y) {};

/**
 * @return {boolean}
 */
RaphaelSet.prototype.isVisible = function() {};

/**
 * @param {!Function} handler
 * @return {!RaphaelSet}
 */
RaphaelSet.prototype.mousedown = function(handler) {};

/**
 * @param {!Function} handler
 * @return {!RaphaelSet}
 */
RaphaelSet.prototype.mousemove = function(handler) {};

/**
 * @param {!Function} handler
 * @return {!RaphaelSet}
 */
RaphaelSet.prototype.mouseout = function(handler) {};

/**
 * @param {!Function} handler
 * @return {!RaphaelSet}
 */
RaphaelSet.prototype.mouseover = function(handler) {};

/**
 * @param {!Function} handler
 * @return {!RaphaelSet}
 */
RaphaelSet.prototype.mouseup = function(handler) {};

/**
 * @param {!Function} f
 * @return {!RaphaelSet}
 */
RaphaelSet.prototype.onDragOver = function(f) {};

/**
 * @param {!RaphaelAnimation=} anim
 * @return {!RaphaelSet}
 */
RaphaelSet.prototype.pause = function(anim) {};

/**
 * @return {void}
 */
RaphaelSet.prototype.remove = function() {};

/**
 * @param {string=} key
 * @return {!RaphaelSet}
 */
RaphaelSet.prototype.removeData = function(key) {};

/**
 * @param {!RaphaelAnimation=} anim
 * @return {!RaphaelSet}
 */
RaphaelSet.prototype.resume = function(anim) {};

/**
 * @param {!RaphaelAnimation} anim
 * @param {number=} value
 * @return {void|!RaphaelSet}
 */
RaphaelSet.prototype.setTime = function(anim, value) {};

/**
 * @return {!RaphaelSet}
 */
RaphaelSet.prototype.show = function() {};

/**
 * @param {!RaphaelAnimation=} anim
 * @param {number=} value
 * @return {!Array<{anim: !RaphaelAnimation, status: number}>|number|!RaphaelSet}
 */
RaphaelSet.prototype.status = function(anim, value) {};

/**
 * @param {!RaphaelAnimation=} anim
 * @return {!RaphaelSet}
 */
RaphaelSet.prototype.stop = function(anim) {};

/**
 * @return {!RaphaelSet}
 */
RaphaelSet.prototype.toBack = function() {};

/**
 * @return {!RaphaelSet}
 */
RaphaelSet.prototype.toFront = function() {};

/**
 * @param {!Function} handler
 * @return {!RaphaelSet}
 */
RaphaelSet.prototype.touchcancel = function(handler) {};

/**
 * @param {!Function} handler
 * @return {!RaphaelSet}
 */
RaphaelSet.prototype.touchend = function(handler) {};

/**
 * @param {!Function} handler
 * @return {!RaphaelSet}
 */
RaphaelSet.prototype.touchmove = function(handler) {};

/**
 * @param {!Function} handler
 * @return {!RaphaelSet}
 */
RaphaelSet.prototype.touchstart = function(handler) {};

/**
 * @param {string=} tstr
 * @return {string|!RaphaelSet}
 */
RaphaelSet.prototype.transform = function(tstr) {};

/**
 * @param {!Function} handler
 * @return {!RaphaelSet}
 */
RaphaelSet.prototype.unclick = function(handler) {};

/**
 * @param {!Function} handler
 * @return {!RaphaelSet}
 */
RaphaelSet.prototype.undblclick = function(handler) {};

/**
 * @return {!RaphaelSet}
 */
RaphaelSet.prototype.undrag = function() {};

/**
 * @param {!Function=} f_in
 * @param {!Function=} f_out
 * @return {!RaphaelSet}
 */
RaphaelSet.prototype.unhover = function(f_in, f_out) {};

/**
 * @param {!Function} handler
 * @return {!RaphaelSet}
 */
RaphaelSet.prototype.unmousedown = function(handler) {};

/**
 * @param {!Function} handler
 * @return {!RaphaelSet}
 */
RaphaelSet.prototype.unmousemove = function(handler) {};

/**
 * @param {!Function} handler
 * @return {!RaphaelSet}
 */
RaphaelSet.prototype.unmouseout = function(handler) {};

/**
 * @param {!Function} handler
 * @return {!RaphaelSet}
 */
RaphaelSet.prototype.unmouseover = function(handler) {};

/**
 * @param {!Function} handler
 * @return {!RaphaelSet}
 */
RaphaelSet.prototype.unmouseup = function(handler) {};

/**
 * @param {!Function} handler
 * @return {!RaphaelSet}
 */
RaphaelSet.prototype.untouchcancel = function(handler) {};

/**
 * @param {!Function} handler
 * @return {!RaphaelSet}
 */
RaphaelSet.prototype.untouchend = function(handler) {};

/**
 * @param {!Function} handler
 * @return {!RaphaelSet}
 */
RaphaelSet.prototype.untouchmove = function(handler) {};

/**
 * @param {!Function} handler
 * @return {!RaphaelSet}
 */
RaphaelSet.prototype.untouchstart = function(handler) {};
/**
 * @record
 * @struct
 */
function RaphaelMatrix() {}

/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @param {number} d
 * @param {number} e
 * @param {number} f
 * @param {!RaphaelMatrix} matrix
 * @return {!RaphaelMatrix}
 */
RaphaelMatrix.prototype.add = function(a, b, c, d, e, f, matrix) {};

/**
 * @return {!RaphaelMatrix}
 */
RaphaelMatrix.prototype.clone = function() {};

/**
 * @return {!RaphaelMatrix}
 */
RaphaelMatrix.prototype.invert = function() {};

/**
 * @param {number} a
 * @param {number} x
 * @param {number} y
 * @return {void}
 */
RaphaelMatrix.prototype.rotate = function(a, x, y) {};

/**
 * @param {number} x
 * @param {number=} y
 * @param {number=} cx
 * @param {number=} cy
 * @return {void}
 */
RaphaelMatrix.prototype.scale = function(x, y, cx, cy) {};

/**
 * @return {{dx: number, dy: number, scalex: number, scaley: number, shear: number, rotate: number, isSimple: boolean}}
 */
RaphaelMatrix.prototype.split = function() {};

/**
 * @return {string}
 */
RaphaelMatrix.prototype.toTransformString = function() {};

/**
 * @param {number} x
 * @param {number} y
 * @return {void}
 */
RaphaelMatrix.prototype.translate = function(x, y) {};

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
RaphaelMatrix.prototype.x = function(x, y) {};

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
RaphaelMatrix.prototype.y = function(x, y) {};
/**
 * @record
 * @struct
 */
function RaphaelPaper() {}
 /** @type {!RaphaelElement} */
RaphaelPaper.prototype.bottom;
 /** @type {!SVGSVGElement} */
RaphaelPaper.prototype.canvas;
 /** @type {!SVGDefsElement} */
RaphaelPaper.prototype.defs;
 /** @type {number} */
RaphaelPaper.prototype.height;
 /** @type {!RaphaelElement} */
RaphaelPaper.prototype.top;
 /** @type {number} */
RaphaelPaper.prototype.width;

/**
 * @param {?} JSON
 * @return {!RaphaelSet}
 */
RaphaelPaper.prototype.add = function(JSON) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} r
 * @return {!RaphaelElement}
 */
RaphaelPaper.prototype.circle = function(x, y, r) {};

/**
 * @return {void}
 */
RaphaelPaper.prototype.clear = function() {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} rx
 * @param {number} ry
 * @return {!RaphaelElement}
 */
RaphaelPaper.prototype.ellipse = function(x, y, rx, ry) {};

/**
 * @param {function(!RaphaelElement): boolean} callback
 * @param {?=} thisArg
 * @return {!RaphaelPaper}
 */
RaphaelPaper.prototype.forEach = function(callback, thisArg) {};

/**
 * @param {number} id
 * @return {!RaphaelElement}
 */
RaphaelPaper.prototype.getById = function(id) {};

/**
 * @param {number} x
 * @param {number} y
 * @return {!RaphaelElement}
 */
RaphaelPaper.prototype.getElementByPoint = function(x, y) {};

/**
 * @param {number} x
 * @param {number} y
 * @return {!RaphaelSet}
 */
RaphaelPaper.prototype.getElementsByPoint = function(x, y) {};

/**
 * @param {string} family
 * @param {string|number=} weight
 * @param {string=} style
 * @param {string=} stretch
 * @return {!RaphaelFont}
 */
RaphaelPaper.prototype.getFont = function(family, weight, style, stretch) {};

/**
 * @param {string} src
 * @param {number} x
 * @param {number} y
 * @param {number} width
 * @param {number} height
 * @return {!RaphaelElement}
 */
RaphaelPaper.prototype.image = function(src, x, y, width, height) {};

/**
 * @param {(string|!Array<(string|number)>)=} pathString
 * @return {!RaphaelPath}
 */
RaphaelPaper.prototype.path = function(pathString) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {string} str
 * @param {!RaphaelFont} font
 * @param {number=} size
 * @param {string=} origin
 * @param {number=} letter_spacing
 * @return {!RaphaelPath}
 */
RaphaelPaper.prototype.print = function(x, y, str, font, size, origin, letter_spacing) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} width
 * @param {number} height
 * @param {number=} r
 * @return {!RaphaelElement}
 */
RaphaelPaper.prototype.rect = function(x, y, width, height, r) {};

/**
 * @return {void}
 */
RaphaelPaper.prototype.remove = function() {};

/**
 * @return {void}
 */
RaphaelPaper.prototype.renderfix = function() {};

/**
 * @return {void}
 */
RaphaelPaper.prototype.safari = function() {};

/**
 * @param {!Array<!RaphaelElement>=} elements
 * @return {!RaphaelSet}
 */
RaphaelPaper.prototype.set = function(elements) {};

/**
 * @return {!RaphaelSet}
 */
RaphaelPaper.prototype.setFinish = function() {};

/**
 * @param {number} width
 * @param {number} height
 * @return {void}
 */
RaphaelPaper.prototype.setSize = function(width, height) {};

/**
 * @return {void}
 */
RaphaelPaper.prototype.setStart = function() {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} w
 * @param {number} h
 * @param {boolean} fit
 * @return {void}
 */
RaphaelPaper.prototype.setViewBox = function(x, y, w, h, fit) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {string} text
 * @return {!RaphaelElement}
 */
RaphaelPaper.prototype.text = function(x, y, text) {};
/**
 * @record
 * @struct
 */
function RaphaelStatic() {}

/* TODO: CallSignature:  */

/* TODO: CallSignature:  */

/* TODO: CallSignature:  */

/* TODO: CallSignature:  */

/* TODO: CallSignature:  */
 /** @type {?} */
RaphaelStatic.prototype.easing_formulas;
 /** @type {?} */
RaphaelStatic.prototype.el;
 /** @type {?} */
RaphaelStatic.prototype.fn;
 /** @type {?} */
RaphaelStatic.prototype.getColor;
 /** @type {?} */
RaphaelStatic.prototype.st;
 /** @type {boolean} */
RaphaelStatic.prototype.svg;
 /** @type {string} */
RaphaelStatic.prototype.type;
 /** @type {boolean} */
RaphaelStatic.prototype.vml;

/**
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @param {number=} x3
 * @param {number=} y3
 * @return {number}
 */
RaphaelStatic.prototype.angle = function(x1, y1, x2, y2, x3, y3) {};

/**
 * @param {?} params
 * @param {number} ms
 * @param {string=} easing
 * @param {!Function=} callback
 * @return {!RaphaelAnimation}
 */
RaphaelStatic.prototype.animation = function(params, ms, easing, callback) {};

/**
 * @param {number|!Array<?>} p1x_or_bez
 * @param {number=} p1y
 * @param {number=} c1x
 * @param {number=} c1y
 * @param {number=} c2x
 * @param {number=} c2y
 * @param {number=} p2x
 * @param {number=} p2y
 * @return {{min: {x: number, y: number}, max: {x: number, y: number}}}
 */
RaphaelStatic.prototype.bezierBBox = function(p1x_or_bez, p1y, c1x, c1y, c2x, c2y, p2x, p2y) {};

/**
 * @param {string} clr
 * @return {{r: number, g: number, b: number, hex: string, error: boolean, h: number, s: number, v: number, l: number}}
 */
RaphaelStatic.prototype.color = function(clr) {};

/**
 * @return {string}
 */
RaphaelStatic.prototype.createUUID = function() {};

/**
 * @param {number} deg
 * @return {number}
 */
RaphaelStatic.prototype.deg = function(deg) {};

/**
 * @param {number} p1x
 * @param {number} p1y
 * @param {number} c1x
 * @param {number} c1y
 * @param {number} c2x
 * @param {number} c2y
 * @param {number} p2x
 * @param {number} p2y
 * @param {number} t
 * @return {{x: number, y: number, m: {x: number, y: number}, n: {x: number, y: number}, start: {x: number, y: number}, end: {x: number, y: number}, alpha: number}}
 */
RaphaelStatic.prototype.findDotsAtSegment = function(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t) {};

/**
 * @param {string} token
 * @param {...?} parameters
 * @return {string}
 */
RaphaelStatic.prototype.format = function(token, parameters) {};

/**
 * @param {string} token
 * @param {!JSON} json
 * @return {string}
 */
RaphaelStatic.prototype.fullfill = function(token, json) {};

/**
 * @param {string} path
 * @param {number} length
 * @return {{x: number, y: number, alpha: number}}
 */
RaphaelStatic.prototype.getPointAtLength = function(path, length) {};

/**
 * @param {string} colour
 * @return {{r: number, g: number, b: number, hex: string, error: boolean}}
 */
RaphaelStatic.prototype.getRGB = function(colour) {};

/**
 * @param {string} path
 * @param {number} from
 * @param {number} to
 * @return {string}
 */
RaphaelStatic.prototype.getSubpath = function(path, from, to) {};

/**
 * @param {string} path
 * @return {number}
 */
RaphaelStatic.prototype.getTotalLength = function(path) {};

/**
 * @param {number} h
 * @param {number} s
 * @param {number} b
 * @return {string}
 */
RaphaelStatic.prototype.hsb = function(h, s, b) {};

/**
 * @param {number} h
 * @param {number} s
 * @param {number} v
 * @return {{r: number, g: number, b: number, hex: string}}
 */
RaphaelStatic.prototype.hsb2rgb = function(h, s, v) {};

/**
 * @param {number} h
 * @param {number} s
 * @param {number} l
 * @return {string}
 */
RaphaelStatic.prototype.hsl = function(h, s, l) {};

/**
 * @param {number} h
 * @param {number} s
 * @param {number} l
 * @return {{r: number, g: number, b: number, hex: string}}
 */
RaphaelStatic.prototype.hsl2rgb = function(h, s, l) {};

/**
 * @param {?} o
 * @param {string} type
 * @return {boolean}
 */
RaphaelStatic.prototype.is = function(o, type) {};

/**
 * @param {string} bbox1
 * @param {string} bbox2
 * @return {boolean}
 */
RaphaelStatic.prototype.isBBoxIntersect = function(bbox1, bbox2) {};

/**
 * @param {string} bbox
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
RaphaelStatic.prototype.isPointInsideBBox = function(bbox, x, y) {};

/**
 * @param {string} path
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
RaphaelStatic.prototype.isPointInsidePath = function(path, x, y) {};

/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @param {number} d
 * @param {number} e
 * @param {number} f
 * @return {!RaphaelMatrix}
 */
RaphaelStatic.prototype.matrix = function(a, b, c, d, e, f) {};

/**
 * @return {void}
 */
RaphaelStatic.prototype.ninja = function() {};

/**
 * @param {string|!Array<string>} pathString
 * @return {!Array<string>}
 */
RaphaelStatic.prototype.parsePathString = function(pathString) {};

/**
 * @param {string|!Array<string>} TString
 * @return {!Array<string>}
 */
RaphaelStatic.prototype.parseTransformString = function(TString) {};

/**
 * @param {string|!Array<string>} pathString
 * @return {!Array<string>}
 */
RaphaelStatic.prototype.path2curve = function(pathString) {};

/**
 * @param {string} path
 * @return {!BoundingBox}
 */
RaphaelStatic.prototype.pathBBox = function(path) {};

/**
 * @param {string} path1
 * @param {string} path2
 * @return {!Array<{x: number, y: number, t1: number, t2: number, segment1: number, segment2: number, bez1: !Array<?>, bez2: !Array<?>}>}
 */
RaphaelStatic.prototype.pathIntersection = function(path1, path2) {};

/**
 * @param {string|!Array<string>} pathString
 * @return {!Array<string>}
 */
RaphaelStatic.prototype.pathToRelative = function(pathString) {};

/**
 * @param {number} deg
 * @return {number}
 */
RaphaelStatic.prototype.rad = function(deg) {};

/**
 * @param {!RaphaelFont} font
 * @return {!RaphaelFont}
 */
RaphaelStatic.prototype.registerFont = function(font) {};

/**
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @return {string}
 */
RaphaelStatic.prototype.rgb = function(r, g, b) {};

/**
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @return {{h: number, s: number, b: number}}
 */
RaphaelStatic.prototype.rgb2hsb = function(r, g, b) {};

/**
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @return {{h: number, s: number, l: number}}
 */
RaphaelStatic.prototype.rgb2hsl = function(r, g, b) {};

/**
 * @param {!Window} newwin
 * @return {void}
 */
RaphaelStatic.prototype.setWindow = function(newwin) {};

/**
 * @param {number|!Array<number>} values
 * @param {number} value
 * @param {number=} tolerance
 * @return {number}
 */
RaphaelStatic.prototype.snapTo = function(values, value, tolerance) {};

/**
 * @param {string} path
 * @param {string|!Array<string>} transform
 * @return {!RaphaelMatrix}
 */
RaphaelStatic.prototype.toMatrix = function(path, transform) {};

/**
 * @param {string} path
 * @param {string|!Array<string>} transform
 * @return {string}
 */
RaphaelStatic.prototype.transformPath = function(path, transform) {};
 /** @type {!RaphaelStatic} */
var Raphael;
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "raphael"
/** @const */
tsickle_declare_module.raphael = {};

/* TODO: ExportAssignment in tsickle_declare_module.raphael */
