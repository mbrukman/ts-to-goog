/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/jspdf/index.d.ts:
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "jspdf"
/** @const */
tsickle_declare_module.jspdf = {};

/**
 * @constructor
 * @struct
 * @param {?=} orientation
 * @param {string=} unit
 * @param {string=} format
 * @param {number=} compressPdf
 */
tsickle_declare_module.jspdf.jsPDF = function(orientation, unit, format, compressPdf) {};
 /** @type {?} */
tsickle_declare_module.jspdf.jsPDF.prototype.CapJoinStyles;
 /** @type {string} */
tsickle_declare_module.jspdf.jsPDF.prototype.version;
 /** @type {{pdfEscape: function(string, ?): ?, getStyle: function(string): ?, getFont: function(): ?, getFontSize: function(): number, getLineHeight: function(): number, write: function(string): ?, getCoordinateString: function(number): number, getVerticalCoordinateString: function(number): number, collections: ?, newObject: function(): number, newAdditionalObject: function(): ?, newObjectDeferred: function(): number, newObjectDeferredBegin: function(number): void, putStream: function(string): void, events: ?, scaleFactor: number, pageSize: {width: number, height: number}, output: function(?, ?): ?, getNumberOfPages: function(): number, pages: !Array<number>, out: function(string): void, f2: function(number): number, getPageInfo: function(number): ?, getCurrentPageInfo: function(): ?}} */
tsickle_declare_module.jspdf.jsPDF.prototype.internal;
 /** @type {?} */
tsickle_declare_module.jspdf.jsPDF.prototype.color_spaces;
 /** @type {?} */
tsickle_declare_module.jspdf.jsPDF.prototype.decode;
 /** @type {?} */
tsickle_declare_module.jspdf.jsPDF.prototype.image_compression;
 /** @type {?} */
tsickle_declare_module.jspdf.jsPDF.prototype.annotationPlugin;
 /** @type {{getContext: function(): ?, style: ?}} */
tsickle_declare_module.jspdf.jsPDF.prototype.canvas;
 /** @type {{pageWrapXEnabled: boolean, pageWrapYEnabled: boolean, pageWrapX: number, pageWrapY: number, f2: function(number): number, fillRect: function(number, number, number, number): void, strokeRect: function(number, number, number, number): void, clearRect: function(number, number, number, number): void, save: function(): void, restore: function(): void, beginPath: function(): void, closePath: function(): void, setFillStyle: function(string): void, setStrokeStyle: function(string): void, fillText: function((string|!Array<string>), number, number, number): void, strokeText: function((string|!Array<string>), number, number, number): void, setFont: function(string): void, setTextBaseline: function(string): void, getTextBaseline: function(): string, setLineWidth: function(number): void, setLineCap: function(string): void, setLineJoin: function(string): void, moveTo: function(number, number): void, lastBreak: number, pageBreaks: !Array<?>, lineTo: function(number, number): void, bezierCurveTo: function(number, number, number, number, number, number): void, quadraticCurveTo: function(number, number, number, number): void, arc: function(number, number, number, number, number, ?): void, drawImage: function(string, number, number, number, number, number, number, number, number): void, stroke: function(): void, fill: function(): void, translate: function(number, number): void, measureText: function(string): number}} */
tsickle_declare_module.jspdf.jsPDF.prototype.context2d;

/**
 * @param {!Array<number>=} sizes
 * @return {!jsPDF}
 */
tsickle_declare_module.jspdf.jsPDF.prototype.addPage = function(sizes) {};

/**
 * @param {number} n
 * @return {!jsPDF}
 */
tsickle_declare_module.jspdf.jsPDF.prototype.setPage = function(n) {};

/**
 * @param {number} beforePage
 * @return {!jsPDF}
 */
tsickle_declare_module.jspdf.jsPDF.prototype.insertPage = function(beforePage) {};

/**
 * @param {number} targetPage
 * @param {number} beforePage
 * @return {!jsPDF}
 */
tsickle_declare_module.jspdf.jsPDF.prototype.movePage = function(targetPage, beforePage) {};

/**
 * @param {number} n
 * @return {!jsPDF}
 */
tsickle_declare_module.jspdf.jsPDF.prototype.deletePage = function(n) {};

/**
 * @param {string=} zoom
 * @param {string=} layout
 * @param {string=} pmode
 * @return {!jsPDF}
 */
tsickle_declare_module.jspdf.jsPDF.prototype.setDisplayMode = function(zoom, layout, pmode) {};

/**
 * @param {?} text
 * @param {?} x
 * @param {?} y
 * @param {?=} flags
 * @param {?=} angle
 * @param {?=} align
 * @return {!jsPDF}
 */
tsickle_declare_module.jspdf.jsPDF.prototype.text = function(text, x, y, flags, angle, align) {};

/**
 * @param {string} text
 * @param {number} x
 * @param {number} y
 * @param {number} spacing
 * @return {!jsPDF}
 */
tsickle_declare_module.jspdf.jsPDF.prototype.lstext = function(text, x, y, spacing) {};

/**
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @return {?}
 */
tsickle_declare_module.jspdf.jsPDF.prototype.line = function(x1, y1, x2, y2) {};

/**
 * @return {void}
 */
tsickle_declare_module.jspdf.jsPDF.prototype.clip = function() {};

/**
 * @param {?} lines
 * @param {?} x
 * @param {?} y
 * @param {?=} scale
 * @param {string=} style
 * @param {boolean=} closed
 * @return {!jsPDF}
 */
tsickle_declare_module.jspdf.jsPDF.prototype.lines = function(lines, x, y, scale, style, closed) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} w
 * @param {number} h
 * @param {string=} style
 * @return {!jsPDF}
 */
tsickle_declare_module.jspdf.jsPDF.prototype.rect = function(x, y, w, h, style) {};

/**
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @param {number} x3
 * @param {number} y3
 * @param {string} style
 * @return {!jsPDF}
 */
tsickle_declare_module.jspdf.jsPDF.prototype.triangle = function(x1, y1, x2, y2, x3, y3, style) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} w
 * @param {number} h
 * @param {number} rx
 * @param {number} ry
 * @param {string} style
 * @return {!jsPDF}
 */
tsickle_declare_module.jspdf.jsPDF.prototype.roundedRect = function(x, y, w, h, rx, ry, style) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} rx
 * @param {number} ry
 * @param {string=} style
 * @return {!jsPDF}
 */
tsickle_declare_module.jspdf.jsPDF.prototype.ellipse = function(x, y, rx, ry, style) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} r
 * @param {string} style
 * @return {!jsPDF}
 */
tsickle_declare_module.jspdf.jsPDF.prototype.circle = function(x, y, r, style) {};

/**
 * @param {?} properties
 * @return {!jsPDF}
 */
tsickle_declare_module.jspdf.jsPDF.prototype.setProperties = function(properties) {};

/**
 * @param {number} size
 * @return {!jsPDF}
 */
tsickle_declare_module.jspdf.jsPDF.prototype.setFontSize = function(size) {};

/**
 * @param {string=} fontName
 * @param {string=} fontStyle
 * @return {!jsPDF}
 */
tsickle_declare_module.jspdf.jsPDF.prototype.setFont = function(fontName, fontStyle) {};

/**
 * @param {string} style
 * @return {!jsPDF}
 */
tsickle_declare_module.jspdf.jsPDF.prototype.setFontStyle = function(style) {};

/**
 * @param {string} style
 * @return {!jsPDF}
 */
tsickle_declare_module.jspdf.jsPDF.prototype.setFontType = function(style) {};

/**
 * @return {?}
 */
tsickle_declare_module.jspdf.jsPDF.prototype.getFontList = function() {};

/**
 * @param {string} postScriptName
 * @param {string} fontName
 * @param {string} fontStyle
 * @return {string}
 */
tsickle_declare_module.jspdf.jsPDF.prototype.addFont = function(postScriptName, fontName, fontStyle) {};

/**
 * @param {number} width
 * @return {!jsPDF}
 */
tsickle_declare_module.jspdf.jsPDF.prototype.setLineWidth = function(width) {};

/**
 * @param {(string|number)} ch1
 * @param {number=} ch2
 * @param {number=} ch3
 * @param {number=} ch4
 * @return {!jsPDF}
 */
tsickle_declare_module.jspdf.jsPDF.prototype.setDrawColor = function(ch1, ch2, ch3, ch4) {};

/**
 * @param {(string|number)} ch1
 * @param {number=} ch2
 * @param {number=} ch3
 * @param {number=} ch4
 * @return {!jsPDF}
 */
tsickle_declare_module.jspdf.jsPDF.prototype.setFillColor = function(ch1, ch2, ch3, ch4) {};

/**
 * @param {number=} r
 * @param {number=} g
 * @param {number=} b
 * @return {!jsPDF}
 */
tsickle_declare_module.jspdf.jsPDF.prototype.setTextColor = function(r, g, b) {};

/**
 * @param {(string|number)} style
 * @return {!jsPDF}
 */
tsickle_declare_module.jspdf.jsPDF.prototype.setLineCap = function(style) {};

/**
 * @param {(string|number)} style
 * @return {!jsPDF}
 */
tsickle_declare_module.jspdf.jsPDF.prototype.setLineJoin = function(style) {};

/**
 * @param {string=} type
 * @param {?=} options
 * @return {?}
 */
tsickle_declare_module.jspdf.jsPDF.prototype.output = function(type, options) {};

/**
 * @param {string} filename
 * @return {!jsPDF}
 */
tsickle_declare_module.jspdf.jsPDF.prototype.save = function(filename) {};

/**
 * @param {?} element
 * @param {number|!Function} x_or_callback
 * @param {number=} y
 * @param {?=} options
 * @param {!Function=} callback
 * @return {!jsPDF}
 */
tsickle_declare_module.jspdf.jsPDF.prototype.addHTML = function(element, x_or_callback, y, options, callback) {};

/**
 * @param {string} str
 * @return {?}
 */
tsickle_declare_module.jspdf.jsPDF.prototype.sHashCode = function(str) {};

/**
 * @param {?} object
 * @return {boolean}
 */
tsickle_declare_module.jspdf.jsPDF.prototype.isString = function(object) {};

/**
 * @param {string} dataURI
 * @return {!Array<?>}
 */
tsickle_declare_module.jspdf.jsPDF.prototype.extractInfoFromBase64DataURI = function(dataURI) {};

/**
 * @return {boolean}
 */
tsickle_declare_module.jspdf.jsPDF.prototype.supportsArrayBuffer = function() {};

/**
 * @param {?} object
 * @return {boolean}
 */
tsickle_declare_module.jspdf.jsPDF.prototype.isArrayBuffer = function(object) {};

/**
 * @param {?} object
 * @return {boolean}
 */
tsickle_declare_module.jspdf.jsPDF.prototype.isArrayBufferView = function(object) {};

/**
 * @param {string} binary_string
 * @return {!Uint8Array}
 */
tsickle_declare_module.jspdf.jsPDF.prototype.binaryStringToUint8Array = function(binary_string) {};

/**
 * @param {?} buffer
 * @return {string}
 */
tsickle_declare_module.jspdf.jsPDF.prototype.arrayBufferToBinaryString = function(buffer) {};

/**
 * @param {!ArrayBuffer} arrayBuffer
 * @return {string}
 */
tsickle_declare_module.jspdf.jsPDF.prototype.arrayBufferToBase64 = function(arrayBuffer) {};

/**
 * @param {?} data
 * @param {?} wd
 * @param {?} ht
 * @param {?} cs
 * @param {?} bpc
 * @param {number} imageIndex
 * @param {?} alias
 * @param {?=} f
 * @param {?=} dp
 * @param {?=} trns
 * @param {?=} pal
 * @param {?=} smask
 * @return {?}
 */
tsickle_declare_module.jspdf.jsPDF.prototype.createImageInfo = function(data, wd, ht, cs, bpc, imageIndex, alias, f, dp, trns, pal, smask) {};

/**
 * @param {?=} imageData
 * @param {?=} format
 * @param {number=} x
 * @param {number=} y
 * @param {number=} w
 * @param {number=} h
 * @param {?=} alias
 * @param {?=} compression
 * @param {?=} rotation
 * @return {!jsPDF}
 */
tsickle_declare_module.jspdf.jsPDF.prototype.addImage = function(imageData, format, x, y, w, h, alias, compression, rotation) {};

/**
 * @param {?} data
 * @param {number} index
 * @param {?} alias
 * @param {?=} compression
 * @param {string=} dataAsBinaryString
 * @return {?}
 */
tsickle_declare_module.jspdf.jsPDF.prototype.processJPEG = function(data, index, alias, compression, dataAsBinaryString) {};

/**
 * @return {?}
 */
tsickle_declare_module.jspdf.jsPDF.prototype.processJPG = function() {};

/**
 * @param {?} options
 * @return {void}
 */
tsickle_declare_module.jspdf.jsPDF.prototype.createAnnotation = function(options) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} w
 * @param {number} h
 * @param {?} options
 * @return {void}
 */
tsickle_declare_module.jspdf.jsPDF.prototype.link = function(x, y, w, h, options) {};

/**
 * @param {string} text
 * @param {number} x
 * @param {number} y
 * @param {?} options
 * @return {number}
 */
tsickle_declare_module.jspdf.jsPDF.prototype.textWithLink = function(text, x, y, options) {};

/**
 * @param {string} text
 * @return {number}
 */
tsickle_declare_module.jspdf.jsPDF.prototype.getTextWidth = function(text) {};

/**
 * @return {number}
 */
tsickle_declare_module.jspdf.jsPDF.prototype.getLineHeight = function() {};

/**
 * @return {!jsPDF}
 */
tsickle_declare_module.jspdf.jsPDF.prototype.autoPrint = function() {};

/**
 * @param {!Function} func
 * @return {void}
 */
tsickle_declare_module.jspdf.jsPDF.prototype.setHeaderFunction = function(func) {};

/**
 * @param {string} txt
 * @return {?}
 */
tsickle_declare_module.jspdf.jsPDF.prototype.getTextDimensions = function(txt) {};

/**
 * @return {void}
 */
tsickle_declare_module.jspdf.jsPDF.prototype.cellAddPage = function() {};

/**
 * @return {void}
 */
tsickle_declare_module.jspdf.jsPDF.prototype.cellInitialize = function() {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} w
 * @param {number} h
 * @param {string} txt
 * @param {number} ln
 * @param {string} align
 * @return {!jsPDF}
 */
tsickle_declare_module.jspdf.jsPDF.prototype.cell = function(x, y, w, h, txt, ln, align) {};

/**
 * @param {!Array<?>} array
 * @param {!Function=} comparisonFn
 * @return {number}
 */
tsickle_declare_module.jspdf.jsPDF.prototype.arrayMax = function(array, comparisonFn) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {?} data
 * @param {!Array<string>} headers
 * @param {?} config
 * @return {!jsPDF}
 */
tsickle_declare_module.jspdf.jsPDF.prototype.table = function(x, y, data, headers, config) {};

/**
 * @param {!Array<string>} headerNames
 * @param {!Array<number>} columnWidths
 * @param {!Array<?>} model
 * @return {number}
 */
tsickle_declare_module.jspdf.jsPDF.prototype.calculateLineHeight = function(headerNames, columnWidths, model) {};

/**
 * @param {!Array<?>} config
 * @return {void}
 */
tsickle_declare_module.jspdf.jsPDF.prototype.setTableHeaderRow = function(config) {};

/**
 * @param {number} lineNumber
 * @param {boolean=} new_page
 * @return {void}
 */
tsickle_declare_module.jspdf.jsPDF.prototype.printHeaderRow = function(lineNumber, new_page) {};

/**
 * @param {(string|!HTMLElement)} HTML
 * @param {number} x
 * @param {number} y
 * @param {?=} settings
 * @param {!Function=} callback
 * @param {?=} margins
 * @return {!jsPDF}
 */
tsickle_declare_module.jspdf.jsPDF.prototype.fromHTML = function(HTML, x, y, settings, callback, margins) {};

/**
 * @param {string} txt
 * @return {!jsPDF}
 */
tsickle_declare_module.jspdf.jsPDF.prototype.addJS = function(txt) {};

/**
 * @param {?} imageData
 * @param {number} imageIndex
 * @param {string} alias
 * @param {?} compression
 * @param {string} dataAsBinaryString
 * @return {?}
 */
tsickle_declare_module.jspdf.jsPDF.prototype.processPNG = function(imageData, imageIndex, alias, compression, dataAsBinaryString) {};

/**
 * @param {string} text
 * @param {?=} options
 * @return {!Array<?>}
 */
tsickle_declare_module.jspdf.jsPDF.prototype.getCharWidthsArray = function(text, options) {};

/**
 * @param {string} text
 * @param {?=} options
 * @return {number}
 */
tsickle_declare_module.jspdf.jsPDF.prototype.getStringUnitWidth = function(text, options) {};

/**
 * @param {string} text
 * @param {number} maxlen
 * @param {?=} options
 * @return {?}
 */
tsickle_declare_module.jspdf.jsPDF.prototype.splitTextToSize = function(text, maxlen, options) {};

/**
 * @param {string} svgtext
 * @param {number} x
 * @param {number} y
 * @param {number=} w
 * @param {number=} h
 * @return {!jsPDF}
 */
tsickle_declare_module.jspdf.jsPDF.prototype.addSVG = function(svgtext, x, y, w, h) {};

/**
 * @param {string} pageExpression
 * @return {!jsPDF}
 */
tsickle_declare_module.jspdf.jsPDF.prototype.putTotalPages = function(pageExpression) {};

/* TODO: ExportAssignment in tsickle_declare_module.jspdf */