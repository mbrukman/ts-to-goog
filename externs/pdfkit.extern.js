/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/pdfkit/index.d.ts:
/** @const */
var PDFKit = {};
/**
 * @record
 * @struct
 */
PDFKit.PDFGradient = function() {};

/* TODO: ConstructSignature: PDFKit */

/**
 * @param {number} pos
 * @param {(string|!PDFKit.PDFGradient)=} color
 * @param {number=} opacity
 * @return {!PDFKit.PDFGradient}
 */
PDFKit.PDFGradient.prototype.stop = function(pos, color, opacity) {};

/**
 * @return {void}
 */
PDFKit.PDFGradient.prototype.embed = function() {};

/**
 * @return {void}
 */
PDFKit.PDFGradient.prototype.apply = function() {};
/**
 * @extends {PDFKit.PDFGradient}
 * @record
 * @struct
 */
PDFKit.PDFLinearGradient = function() {};

/* TODO: ConstructSignature: PDFKit */

/**
 * @param {function(): ?} fn
 * @return {?}
 */
PDFKit.PDFLinearGradient.prototype.shader = function(fn) {};

/**
 * @return {!PDFKit.PDFLinearGradient}
 */
PDFKit.PDFLinearGradient.prototype.opacityGradient = function() {};
/**
 * @extends {PDFKit.PDFGradient}
 * @record
 * @struct
 */
PDFKit.PDFRadialGradient = function() {};

/* TODO: ConstructSignature: PDFKit */

/**
 * @param {function(): ?} fn
 * @return {?}
 */
PDFKit.PDFRadialGradient.prototype.shader = function(fn) {};

/**
 * @return {!PDFKit.PDFRadialGradient}
 */
PDFKit.PDFRadialGradient.prototype.opacityGradient = function() {};
/** @const */
PDFKit.Mixins = {};
/**
 * @record
 * @struct
 */
PDFKit.Mixins.AnnotationOption = function() {};
 /** @type {string} */
PDFKit.Mixins.AnnotationOption.prototype.Type;
 /** @type {?} */
PDFKit.Mixins.AnnotationOption.prototype.Rect;
 /** @type {!Array<number>} */
PDFKit.Mixins.AnnotationOption.prototype.Border;
 /** @type {string} */
PDFKit.Mixins.AnnotationOption.prototype.SubType;
 /** @type {string} */
PDFKit.Mixins.AnnotationOption.prototype.Contents;
 /** @type {string} */
PDFKit.Mixins.AnnotationOption.prototype.Name;
 /** @type {string} */
PDFKit.Mixins.AnnotationOption.prototype.color;
 /** @type {!Array<number>} */
PDFKit.Mixins.AnnotationOption.prototype.QuadPoints;
 /** @type {?} */
PDFKit.Mixins.AnnotationOption.prototype.A;
 /** @type {?} */
PDFKit.Mixins.AnnotationOption.prototype.B;
 /** @type {?} */
PDFKit.Mixins.AnnotationOption.prototype.C;
 /** @type {?} */
PDFKit.Mixins.AnnotationOption.prototype.L;
 /** @type {string} */
PDFKit.Mixins.AnnotationOption.prototype.DA;
/**
 * @record
 * @struct
 */
PDFKit.Mixins.PDFAnnotation = function() {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} w
 * @param {number} h
 * @param {!PDFKit.Mixins.AnnotationOption} option
 * @return {TDocument}
 */
PDFKit.Mixins.PDFAnnotation.prototype.annotate = function(x, y, w, h, option) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} w
 * @param {number} h
 * @param {string} content
 * @param {!PDFKit.Mixins.AnnotationOption=} option
 * @return {TDocument}
 */
PDFKit.Mixins.PDFAnnotation.prototype.note = function(x, y, w, h, content, option) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} w
 * @param {number} h
 * @param {string} url
 * @param {!PDFKit.Mixins.AnnotationOption=} option
 * @return {TDocument}
 */
PDFKit.Mixins.PDFAnnotation.prototype.link = function(x, y, w, h, url, option) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} w
 * @param {number} h
 * @param {!PDFKit.Mixins.AnnotationOption=} option
 * @return {TDocument}
 */
PDFKit.Mixins.PDFAnnotation.prototype.highlight = function(x, y, w, h, option) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} w
 * @param {number} h
 * @param {!PDFKit.Mixins.AnnotationOption=} option
 * @return {TDocument}
 */
PDFKit.Mixins.PDFAnnotation.prototype.underline = function(x, y, w, h, option) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} w
 * @param {number} h
 * @param {!PDFKit.Mixins.AnnotationOption=} option
 * @return {TDocument}
 */
PDFKit.Mixins.PDFAnnotation.prototype.strike = function(x, y, w, h, option) {};

/**
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @param {!PDFKit.Mixins.AnnotationOption=} option
 * @return {TDocument}
 */
PDFKit.Mixins.PDFAnnotation.prototype.lineAnnotation = function(x1, y1, x2, y2, option) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} w
 * @param {number} h
 * @param {!PDFKit.Mixins.AnnotationOption=} option
 * @return {TDocument}
 */
PDFKit.Mixins.PDFAnnotation.prototype.rectAnnotation = function(x, y, w, h, option) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} w
 * @param {number} h
 * @param {!PDFKit.Mixins.AnnotationOption=} option
 * @return {TDocument}
 */
PDFKit.Mixins.PDFAnnotation.prototype.ellipseAnnotation = function(x, y, w, h, option) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} w
 * @param {number} h
 * @param {string} text
 * @param {!PDFKit.Mixins.AnnotationOption=} option
 * @return {TDocument}
 */
PDFKit.Mixins.PDFAnnotation.prototype.textAnnotation = function(x, y, w, h, text, option) {};
/**
 * @record
 * @struct
 */
PDFKit.Mixins.PDFColor = function() {};

/**
 * @param {(string|!PDFKit.PDFGradient)} color
 * @param {number=} opacity
 * @return {TDocument}
 */
PDFKit.Mixins.PDFColor.prototype.fillColor = function(color, opacity) {};

/**
 * @param {string} color
 * @param {number=} opacity
 * @return {TDocument}
 */
PDFKit.Mixins.PDFColor.prototype.strokeColor = function(color, opacity) {};

/**
 * @param {number} opacity
 * @return {TDocument}
 */
PDFKit.Mixins.PDFColor.prototype.opacity = function(opacity) {};

/**
 * @param {number} opacity
 * @return {TDocument}
 */
PDFKit.Mixins.PDFColor.prototype.fillOpacity = function(opacity) {};

/**
 * @param {number} opacity
 * @return {TDocument}
 */
PDFKit.Mixins.PDFColor.prototype.strokeOpacity = function(opacity) {};

/**
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @return {!PDFKit.PDFLinearGradient}
 */
PDFKit.Mixins.PDFColor.prototype.linearGradient = function(x1, y1, x2, y2) {};

/**
 * @param {number} x1
 * @param {number} y1
 * @param {number} r1
 * @param {number} x2
 * @param {number} y2
 * @param {number} r2
 * @return {!PDFKit.PDFRadialGradient}
 */
PDFKit.Mixins.PDFColor.prototype.radialGradient = function(x1, y1, r1, x2, y2, r2) {};
/**
 * @record
 * @struct
 */
PDFKit.Mixins.PDFFont = function() {};

/**
 * @param {?|string} buffer_or_src
 * @param {string=} family
 * @param {number=} size
 * @return {TDocument}
 */
PDFKit.Mixins.PDFFont.prototype.font = function(buffer_or_src, family, size) {};

/**
 * @param {number} size
 * @return {TDocument}
 */
PDFKit.Mixins.PDFFont.prototype.fontSize = function(size) {};

/**
 * @param {boolean=} includeGap
 * @return {number}
 */
PDFKit.Mixins.PDFFont.prototype.currentLineHeight = function(includeGap) {};

/**
 * @param {string} name
 * @param {string=} src
 * @param {string=} family
 * @return {TDocument}
 */
PDFKit.Mixins.PDFFont.prototype.registerFont = function(name, src, family) {};
/**
 * @record
 * @struct
 */
PDFKit.Mixins.ImageOption = function() {};
 /** @type {number} */
PDFKit.Mixins.ImageOption.prototype.width;
 /** @type {number} */
PDFKit.Mixins.ImageOption.prototype.height;
 /** @type {number} */
PDFKit.Mixins.ImageOption.prototype.scale;
 /** @type {!Array<number>} */
PDFKit.Mixins.ImageOption.prototype.fit;
/**
 * @record
 * @struct
 */
PDFKit.Mixins.PDFImage = function() {};

/**
 * Draw an image in PDFKit document.
 * @param {?} src
 * @param {number|!PDFKit.Mixins.ImageOption=} x_or_options
 * @param {number=} y
 * @param {!PDFKit.Mixins.ImageOption=} options
 * @return {TDocument}
 */
PDFKit.Mixins.PDFImage.prototype.image = function(src, x_or_options, y, options) {};
/**
 * @record
 * @struct
 */
PDFKit.Mixins.TextOptions = function() {};
 /** @type {boolean} */
PDFKit.Mixins.TextOptions.prototype.lineBreak;
 /** @type {number} */
PDFKit.Mixins.TextOptions.prototype.width;
 /** @type {number} */
PDFKit.Mixins.TextOptions.prototype.height;
 /** @type {(string|boolean)} */
PDFKit.Mixins.TextOptions.prototype.ellipsis;
 /** @type {number} */
PDFKit.Mixins.TextOptions.prototype.columns;
 /** @type {number} */
PDFKit.Mixins.TextOptions.prototype.columnGap;
 /** @type {number} */
PDFKit.Mixins.TextOptions.prototype.indent;
 /** @type {number} */
PDFKit.Mixins.TextOptions.prototype.paragraphGap;
 /** @type {number} */
PDFKit.Mixins.TextOptions.prototype.lineGap;
 /** @type {number} */
PDFKit.Mixins.TextOptions.prototype.wordSpacing;
 /** @type {number} */
PDFKit.Mixins.TextOptions.prototype.characterSpacing;
 /** @type {boolean} */
PDFKit.Mixins.TextOptions.prototype.fill;
 /** @type {boolean} */
PDFKit.Mixins.TextOptions.prototype.stroke;
 /** @type {string} */
PDFKit.Mixins.TextOptions.prototype.link;
 /** @type {boolean} */
PDFKit.Mixins.TextOptions.prototype.underline;
 /** @type {boolean} */
PDFKit.Mixins.TextOptions.prototype.strike;
 /** @type {boolean} */
PDFKit.Mixins.TextOptions.prototype.continued;
 /** @type {string} */
PDFKit.Mixins.TextOptions.prototype.align;
/**
 * @record
 * @struct
 */
PDFKit.Mixins.PDFText = function() {};

/**
 * @param {number} lineGap
 * @return {TDocument}
 */
PDFKit.Mixins.PDFText.prototype.lineGap = function(lineGap) {};

/**
 * @param {number=} line
 * @return {TDocument}
 */
PDFKit.Mixins.PDFText.prototype.moveDown = function(line) {};

/**
 * @param {number=} line
 * @return {TDocument}
 */
PDFKit.Mixins.PDFText.prototype.moveUp = function(line) {};

/**
 * @param {string} text
 * @param {number|!PDFKit.Mixins.TextOptions=} x_or_options
 * @param {number=} y
 * @param {!PDFKit.Mixins.TextOptions=} options
 * @return {TDocument}
 */
PDFKit.Mixins.PDFText.prototype.text = function(text, x_or_options, y, options) {};

/**
 * @param {string} text
 * @param {!PDFKit.Mixins.TextOptions=} options
 * @return {number}
 */
PDFKit.Mixins.PDFText.prototype.widthOfString = function(text, options) {};

/**
 * @param {string} text
 * @param {!PDFKit.Mixins.TextOptions=} options
 * @return {number}
 */
PDFKit.Mixins.PDFText.prototype.heightOfString = function(text, options) {};

/**
 * @param {!Array<?>} list
 * @param {number|!PDFKit.Mixins.TextOptions=} x_or_options
 * @param {number=} y
 * @param {!PDFKit.Mixins.TextOptions=} options
 * @return {TDocument}
 */
PDFKit.Mixins.PDFText.prototype.list = function(list, x_or_options, y, options) {};
/**
 * @record
 * @struct
 */
PDFKit.Mixins.PDFVector = function() {};

/**
 * @return {TDocument}
 */
PDFKit.Mixins.PDFVector.prototype.save = function() {};

/**
 * @return {TDocument}
 */
PDFKit.Mixins.PDFVector.prototype.restore = function() {};

/**
 * @return {TDocument}
 */
PDFKit.Mixins.PDFVector.prototype.closePath = function() {};

/**
 * @param {number} w
 * @return {TDocument}
 */
PDFKit.Mixins.PDFVector.prototype.lineWidth = function(w) {};

/**
 * @param {string} c
 * @return {TDocument}
 */
PDFKit.Mixins.PDFVector.prototype.lineCap = function(c) {};

/**
 * @param {string} j
 * @return {TDocument}
 */
PDFKit.Mixins.PDFVector.prototype.lineJoin = function(j) {};

/**
 * @param {?} m
 * @return {TDocument}
 */
PDFKit.Mixins.PDFVector.prototype.miterLimit = function(m) {};

/**
 * @param {number} length
 * @param {?} option
 * @return {TDocument}
 */
PDFKit.Mixins.PDFVector.prototype.dash = function(length, option) {};

/**
 * @return {TDocument}
 */
PDFKit.Mixins.PDFVector.prototype.undash = function() {};

/**
 * @param {number} x
 * @param {number} y
 * @return {TDocument}
 */
PDFKit.Mixins.PDFVector.prototype.moveTo = function(x, y) {};

/**
 * @param {number} x
 * @param {number} y
 * @return {TDocument}
 */
PDFKit.Mixins.PDFVector.prototype.lineTo = function(x, y) {};

/**
 * @param {number} cp1x
 * @param {number} cp1y
 * @param {number} cp2x
 * @param {number} cp2y
 * @param {number} x
 * @param {number} y
 * @return {TDocument}
 */
PDFKit.Mixins.PDFVector.prototype.bezierCurveTo = function(cp1x, cp1y, cp2x, cp2y, x, y) {};

/**
 * @param {number} cpx
 * @param {number} cpy
 * @param {number} x
 * @param {number} y
 * @return {TDocument}
 */
PDFKit.Mixins.PDFVector.prototype.quadraticCurveTo = function(cpx, cpy, x, y) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} w
 * @param {number} h
 * @return {TDocument}
 */
PDFKit.Mixins.PDFVector.prototype.rect = function(x, y, w, h) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} w
 * @param {number} h
 * @param {number=} r
 * @return {TDocument}
 */
PDFKit.Mixins.PDFVector.prototype.roundedRect = function(x, y, w, h, r) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} r1
 * @param {number=} r2
 * @return {TDocument}
 */
PDFKit.Mixins.PDFVector.prototype.ellipse = function(x, y, r1, r2) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} raduis
 * @return {TDocument}
 */
PDFKit.Mixins.PDFVector.prototype.circle = function(x, y, raduis) {};

/**
 * @param {...!Array<number>} points
 * @return {TDocument}
 */
PDFKit.Mixins.PDFVector.prototype.polygon = function(points) {};

/**
 * @param {string} path
 * @return {TDocument}
 */
PDFKit.Mixins.PDFVector.prototype.path = function(path) {};

/**
 * @param {(string|!PDFKit.PDFGradient)} color
 * @param {string=} rule
 * @return {TDocument}
 */
PDFKit.Mixins.PDFVector.prototype.fill = function(color, rule) {};

/**
 * @param {(string|!PDFKit.PDFGradient)=} color
 * @return {TDocument}
 */
PDFKit.Mixins.PDFVector.prototype.stroke = function(color) {};

/**
 * @param {string} fillColor
 * @param {string=} strokeColor
 * @param {string=} rule
 * @return {TDocument}
 */
PDFKit.Mixins.PDFVector.prototype.fillAndStroke = function(fillColor, strokeColor, rule) {};

/**
 * @param {string=} rule
 * @return {TDocument}
 */
PDFKit.Mixins.PDFVector.prototype.clip = function(rule) {};

/**
 * @param {number} m11
 * @param {number} m12
 * @param {number} m21
 * @param {number} m22
 * @param {number} dx
 * @param {number} dy
 * @return {TDocument}
 */
PDFKit.Mixins.PDFVector.prototype.transform = function(m11, m12, m21, m22, dx, dy) {};

/**
 * @param {number} x
 * @param {number} y
 * @return {TDocument}
 */
PDFKit.Mixins.PDFVector.prototype.translate = function(x, y) {};

/**
 * @param {number} angle
 * @param {{origin: !Array<number>}=} options
 * @return {TDocument}
 */
PDFKit.Mixins.PDFVector.prototype.rotate = function(angle, options) {};

/**
 * @param {number} xFactor
 * @param {number=} yFactor
 * @param {{origin: !Array<number>}=} options
 * @return {TDocument}
 */
PDFKit.Mixins.PDFVector.prototype.scale = function(xFactor, yFactor, options) {};
/**
 * @record
 * @struct
 */
PDFKit.PDFData = function() {};

/* TODO: ConstructSignature: PDFKit */

/**
 * @return {?}
 */
PDFKit.PDFData.prototype.readByte = function() {};

/**
 * @param {?} byte
 * @return {void}
 */
PDFKit.PDFData.prototype.writeByte = function(byte) {};

/**
 * @param {number} index
 * @return {?}
 */
PDFKit.PDFData.prototype.byteAt = function(index) {};

/**
 * @return {boolean}
 */
PDFKit.PDFData.prototype.readBool = function() {};

/**
 * @param {boolean} val
 * @return {boolean}
 */
PDFKit.PDFData.prototype.writeBool = function(val) {};

/**
 * @return {number}
 */
PDFKit.PDFData.prototype.readUInt32 = function() {};

/**
 * @param {number} val
 * @return {void}
 */
PDFKit.PDFData.prototype.writeUInt32 = function(val) {};

/**
 * @return {number}
 */
PDFKit.PDFData.prototype.readInt32 = function() {};

/**
 * @param {number} val
 * @return {void}
 */
PDFKit.PDFData.prototype.writeInt32 = function(val) {};

/**
 * @return {number}
 */
PDFKit.PDFData.prototype.readUInt16 = function() {};

/**
 * @param {number} val
 * @return {void}
 */
PDFKit.PDFData.prototype.writeUInt16 = function(val) {};

/**
 * @return {number}
 */
PDFKit.PDFData.prototype.readInt16 = function() {};

/**
 * @param {number} val
 * @return {void}
 */
PDFKit.PDFData.prototype.writeInt16 = function(val) {};

/**
 * @param {number} length
 * @return {string}
 */
PDFKit.PDFData.prototype.readString = function(length) {};

/**
 * @param {string} val
 * @return {void}
 */
PDFKit.PDFData.prototype.writeString = function(val) {};

/**
 * @param {number} pos
 * @param {number} length
 * @return {string}
 */
PDFKit.PDFData.prototype.stringAt = function(pos, length) {};

/**
 * @return {number}
 */
PDFKit.PDFData.prototype.readShort = function() {};

/**
 * @param {number} val
 * @return {void}
 */
PDFKit.PDFData.prototype.writeShort = function(val) {};

/**
 * @return {number}
 */
PDFKit.PDFData.prototype.readLongLong = function() {};

/**
 * @param {number} val
 * @return {void}
 */
PDFKit.PDFData.prototype.writeLongLong = function(val) {};

/**
 * @return {number}
 */
PDFKit.PDFData.prototype.readInt = function() {};

/**
 * @param {number} val
 * @return {void}
 */
PDFKit.PDFData.prototype.writeInt = function(val) {};

/**
 * @param {number} start
 * @param {number} end
 * @return {!Array<?>}
 */
PDFKit.PDFData.prototype.slice = function(start, end) {};

/**
 * @param {number} length
 * @return {!Array<?>}
 */
PDFKit.PDFData.prototype.read = function(length) {};

/**
 * @param {!Array<?>} bytes
 * @return {void}
 */
PDFKit.PDFData.prototype.write = function(bytes) {};
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "pdfkit/js/data"
/** @const */
tsickle_declare_module.pdfkit_js_data = {};
 /** @type {!PDFKit.PDFData} */
tsickle_declare_module.pdfkit_js_data.PDFKitData;

/* TODO: ExportAssignment in tsickle_declare_module.pdfkit_js_data */
/**
 * @record
 * @struct
 */
PDFKit.DocumentInfo = function() {};
 /** @type {string} */
PDFKit.DocumentInfo.prototype.Producer;
 /** @type {string} */
PDFKit.DocumentInfo.prototype.Creator;
 /** @type {!Date} */
PDFKit.DocumentInfo.prototype.CreationDate;
 /** @type {string} */
PDFKit.DocumentInfo.prototype.Title;
 /** @type {string} */
PDFKit.DocumentInfo.prototype.Author;
 /** @type {string} */
PDFKit.DocumentInfo.prototype.Keywords;
 /** @type {!Date} */
PDFKit.DocumentInfo.prototype.ModDate;
/**
 * @record
 * @struct
 */
PDFKit.PDFDocumentOptions = function() {};
 /** @type {boolean} */
PDFKit.PDFDocumentOptions.prototype.compress;
 /** @type {!PDFKit.DocumentInfo} */
PDFKit.PDFDocumentOptions.prototype.info;
 /** @type {boolean} */
PDFKit.PDFDocumentOptions.prototype.autoFirstPage;
 /** @type {(string|!Array<number>)} */
PDFKit.PDFDocumentOptions.prototype.size;
 /** @type {number} */
PDFKit.PDFDocumentOptions.prototype.margin;
 /** @type {{top: number, left: number, bottom: number, right: number}} */
PDFKit.PDFDocumentOptions.prototype.margins;
 /** @type {string} */
PDFKit.PDFDocumentOptions.prototype.layout;
 /** @type {boolean} */
PDFKit.PDFDocumentOptions.prototype.bufferPages;
/**
 * @extends {NodeJS.ReadableStream}
 * @extends {PDFKit.Mixins.PDFAnnotation}
 * @extends {PDFKit.Mixins.PDFColor}
 * @extends {PDFKit.Mixins.PDFImage}
 * @extends {PDFKit.Mixins.PDFText}
 * @extends {PDFKit.Mixins.PDFVector}
 * @extends {PDFKit.Mixins.PDFFont}
 * @record
 * @struct
 */
PDFKit.PDFDocument = function() {};
 /** @type {number} */
PDFKit.PDFDocument.prototype.version;
 /** @type {boolean} */
PDFKit.PDFDocument.prototype.compress;
 /** @type {!PDFKit.DocumentInfo} */
PDFKit.PDFDocument.prototype.info;
 /** @type {!PDFKit.PDFDocumentOptions} */
PDFKit.PDFDocument.prototype.options;
 /** @type {!PDFKit.PDFPage} */
PDFKit.PDFDocument.prototype.page;
 /** @type {number} */
PDFKit.PDFDocument.prototype.x;
 /** @type {number} */
PDFKit.PDFDocument.prototype.y;

/* TODO: ConstructSignature: PDFKit */

/**
 * @param {!PDFKit.PDFDocumentOptions=} options
 * @return {!PDFKit.PDFDocument}
 */
PDFKit.PDFDocument.prototype.addPage = function(options) {};

/**
 * @return {{start: number, count: number}}
 */
PDFKit.PDFDocument.prototype.bufferedPageRange = function() {};

/**
 * @param {number=} n
 * @return {!PDFKit.PDFPage}
 */
PDFKit.PDFDocument.prototype.switchToPage = function(n) {};

/**
 * @return {void}
 */
PDFKit.PDFDocument.prototype.flushPages = function() {};

/**
 * @param {!Object} data
 * @return {!PDFKit.PDFKitReference}
 */
PDFKit.PDFDocument.prototype.ref = function(data) {};

/**
 * @param {?} data
 * @return {!PDFKit.PDFDocument}
 */
PDFKit.PDFDocument.prototype.addContent = function(data) {};

/**
 * Deprecated
 * @param {string} fileName
 * @param {?} fn
 * @return {void}
 */
PDFKit.PDFDocument.prototype.write = function(fileName, fn) {};

/**
 * Deprecated. Throws exception
 * @param {?} fn
 * @return {void}
 */
PDFKit.PDFDocument.prototype.output = function(fn) {};

/**
 * @return {void}
 */
PDFKit.PDFDocument.prototype.end = function() {};

/**
 * @return {string}
 */
PDFKit.PDFDocument.prototype.toString = function() {};
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "pdfkit"
/** @const */
tsickle_declare_module.pdfkit = {};
 /** @type {!PDFKit.PDFDocument} */
tsickle_declare_module.pdfkit.doc;

/* TODO: ExportAssignment in tsickle_declare_module.pdfkit */
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "pdfkit/js/gradient"
/** @const */
tsickle_declare_module.pdfkit_js_gradient = {};
 /** @type {{PDFGradient: !PDFKit.PDFGradient, PDFLinearGradient: !PDFKit.PDFLinearGradient, PDFRadialGradiant: !PDFKit.PDFRadialGradient}} */
tsickle_declare_module.pdfkit_js_gradient.gradient;

/* TODO: ExportAssignment in tsickle_declare_module.pdfkit_js_gradient */
/**
 * @record
 * @struct
 */
PDFKit.PDFPage = function() {};
 /** @type {string} */
PDFKit.PDFPage.prototype.size;
 /** @type {string} */
PDFKit.PDFPage.prototype.layout;
 /** @type {{top: number, left: number, bottom: number, right: number}} */
PDFKit.PDFPage.prototype.margins;
 /** @type {number} */
PDFKit.PDFPage.prototype.width;
 /** @type {number} */
PDFKit.PDFPage.prototype.height;
 /** @type {!PDFKit.PDFDocument} */
PDFKit.PDFPage.prototype.document;
 /** @type {!PDFKit.PDFKitReference} */
PDFKit.PDFPage.prototype.content;
 /** @type {!PDFKit.PDFKitReference} */
PDFKit.PDFPage.prototype.dictionary;
 /** @type {?} */
PDFKit.PDFPage.prototype.fonts;
 /** @type {?} */
PDFKit.PDFPage.prototype.xobjects;
 /** @type {?} */
PDFKit.PDFPage.prototype.ext_gstates;
 /** @type {?} */
PDFKit.PDFPage.prototype.patterns;
 /** @type {?} */
PDFKit.PDFPage.prototype.annotations;

/**
 * @return {number}
 */
PDFKit.PDFPage.prototype.maxY = function() {};

/**
 * @param {?} chunk
 * @return {void}
 */
PDFKit.PDFPage.prototype.write = function(chunk) {};

/**
 * @return {void}
 */
PDFKit.PDFPage.prototype.end = function() {};
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "pdfkit/js/page"
/** @const */
tsickle_declare_module.pdfkit_js_page = {};
 /** @type {!PDFKit.PDFPage} */
tsickle_declare_module.pdfkit_js_page.PDFKitPage;

/* TODO: ExportAssignment in tsickle_declare_module.pdfkit_js_page */

/**
 * @constructor
 * @struct
 * @param {!PDFKit.PDFDocument} document
 * @param {number} id
 * @param {!Object} data
 */
PDFKit.PDFKitReference = function(document, id, data) {};
 /** @type {number} */
PDFKit.PDFKitReference.prototype.id;
 /** @type {number} */
PDFKit.PDFKitReference.prototype.gen;
 /** @type {?} */
PDFKit.PDFKitReference.prototype.deflate;
 /** @type {boolean} */
PDFKit.PDFKitReference.prototype.compress;
 /** @type {number} */
PDFKit.PDFKitReference.prototype.uncompressedLength;
 /** @type {!Array<?>} */
PDFKit.PDFKitReference.prototype.chunks;
 /** @type {{Font: ?, XObject: ?, ExtGState: ?, Pattern: ?, Annots: ?}} */
PDFKit.PDFKitReference.prototype.data;
 /** @type {!PDFKit.PDFDocument} */
PDFKit.PDFKitReference.prototype.document;

/**
 * @return {void}
 */
PDFKit.PDFKitReference.prototype.initDeflate = function() {};

/**
 * @param {?} chunk
 * @return {void}
 */
PDFKit.PDFKitReference.prototype.write = function(chunk) {};

/**
 * @param {?} chunk
 * @return {void}
 */
PDFKit.PDFKitReference.prototype.end = function(chunk) {};

/**
 * @return {void}
 */
PDFKit.PDFKitReference.prototype.finalize = function() {};

/**
 * @return {string}
 */
PDFKit.PDFKitReference.prototype.toString = function() {};
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "pdfkit/js/reference"
/** @const */
tsickle_declare_module.pdfkit_js_reference = {};
 /** @type {!PDFKit.PDFKitReference} */
tsickle_declare_module.pdfkit_js_reference.PDFKitReference;

/* TODO: ExportAssignment in tsickle_declare_module.pdfkit_js_reference */
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "pdfkit/js/mixins/annotations"
/** @const */
tsickle_declare_module.pdfkit_js_mixins_annotations = {};
 /** @type {!PDFKit.Mixins.PDFAnnotation<void>} */
tsickle_declare_module.pdfkit_js_mixins_annotations.PDFKitAnnotation;

/* TODO: ExportAssignment in tsickle_declare_module.pdfkit_js_mixins_annotations */
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "pdfkit/js/mixins/color"
/** @const */
tsickle_declare_module.pdfkit_js_mixins_color = {};
 /** @type {!PDFKit.Mixins.PDFColor<void>} */
tsickle_declare_module.pdfkit_js_mixins_color.PDFKitColor;

/* TODO: ExportAssignment in tsickle_declare_module.pdfkit_js_mixins_color */
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "pdfkit/js/mixins/fonts"
/** @const */
tsickle_declare_module.pdfkit_js_mixins_fonts = {};
 /** @type {!PDFKit.Mixins.PDFFont<void>} */
tsickle_declare_module.pdfkit_js_mixins_fonts.PDFKitFont;

/* TODO: ExportAssignment in tsickle_declare_module.pdfkit_js_mixins_fonts */
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "pdfkit/js/mixins/images"
/** @const */
tsickle_declare_module.pdfkit_js_mixins_images = {};
 /** @type {!PDFKit.Mixins.PDFImage<void>} */
tsickle_declare_module.pdfkit_js_mixins_images.PDFKitImage;

/* TODO: ExportAssignment in tsickle_declare_module.pdfkit_js_mixins_images */
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "pdfkit/js/mixins/text"
/** @const */
tsickle_declare_module.pdfkit_js_mixins_text = {};
 /** @type {!PDFKit.Mixins.PDFText<void>} */
tsickle_declare_module.pdfkit_js_mixins_text.PDFKitText;

/* TODO: ExportAssignment in tsickle_declare_module.pdfkit_js_mixins_text */
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "pdfkit/js/mixins/vector"
/** @const */
tsickle_declare_module.pdfkit_js_mixins_vector = {};
 /** @type {!PDFKit.Mixins.PDFVector<void>} */
tsickle_declare_module.pdfkit_js_mixins_vector.PDFKitVector;

/* TODO: ExportAssignment in tsickle_declare_module.pdfkit_js_mixins_vector */