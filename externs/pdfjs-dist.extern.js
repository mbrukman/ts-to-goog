/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/pdfjs-dist/index.d.ts:
/**
 * @record
 * @struct
 */
function PDFPromise() {}

/**
 * @return {boolean}
 */
PDFPromise.prototype.isResolved = function() {};

/**
 * @return {boolean}
 */
PDFPromise.prototype.isRejected = function() {};

/**
 * @param {T} value
 * @return {void}
 */
PDFPromise.prototype.resolve = function(value) {};

/**
 * @param {string} reason
 * @return {void}
 */
PDFPromise.prototype.reject = function(reason) {};

/**
 * @template U
 * @param {function(T): U} onResolve
 * @param {function(string): void=} onReject
 * @return {!PDFPromise<U>}
 */
PDFPromise.prototype.then = function(onResolve, onReject) {};
/**
 * @record
 * @struct
 */
function PDFTreeNode() {}
 /** @type {string} */
PDFTreeNode.prototype.title;
 /** @type {boolean} */
PDFTreeNode.prototype.bold;
 /** @type {boolean} */
PDFTreeNode.prototype.italic;
 /** @type {!Array<number>} */
PDFTreeNode.prototype.color;
 /** @type {?} */
PDFTreeNode.prototype.dest;
 /** @type {!Array<!PDFTreeNode>} */
PDFTreeNode.prototype.items;
/**
 * @record
 * @struct
 */
function PDFInfo() {}
 /** @type {string} */
PDFInfo.prototype.PDFFormatVersion;
 /** @type {boolean} */
PDFInfo.prototype.IsAcroFormPresent;
 /** @type {boolean} */
PDFInfo.prototype.IsXFAPresent;

/* TODO: IndexSignature:  */
/**
 * @record
 * @struct
 */
function PDFMetadata() {}

/**
 * @return {void}
 */
PDFMetadata.prototype.parse = function() {};

/**
 * @param {string} name
 * @return {string}
 */
PDFMetadata.prototype.get = function(name) {};

/**
 * @param {string} name
 * @return {boolean}
 */
PDFMetadata.prototype.has = function(name) {};
/**
 * @record
 * @struct
 */
function PDFSource() {}
 /** @type {string} */
PDFSource.prototype.url;
 /** @type {!Uint8Array} */
PDFSource.prototype.data;
 /** @type {?} */
PDFSource.prototype.httpHeaders;
 /** @type {string} */
PDFSource.prototype.password;
/**
 * @record
 * @struct
 */
function PDFProgressData() {}
 /** @type {number} */
PDFProgressData.prototype.loaded;
 /** @type {number} */
PDFProgressData.prototype.total;
/**
 * @record
 * @struct
 */
function PDFDocumentProxy() {}
 /** @type {number} */
PDFDocumentProxy.prototype.numPages;
 /** @type {string} */
PDFDocumentProxy.prototype.fingerprint;

/**
 * True if embedded document fonts are in use.  Will be set during rendering of the pages.
 * 
 * @return {boolean}
 */
PDFDocumentProxy.prototype.embeddedFontsUsed = function() {};

/**
 * @param {number} number The page number to get.  The first page is 1.
 * @return {!PDFPromise<!PDFPageProxy>} A promise that is resolved with a PDFPageProxy.
 * 
 */
PDFDocumentProxy.prototype.getPage = function(number) {};

/**
 * TODO: return type of Promise<???>
 *  A promise that is resolved with a lookup table for mapping named destinations to reference numbers.
 * 
 * @return {!PDFPromise<!Array<?>>}
 */
PDFDocumentProxy.prototype.getDestinations = function() {};

/**
 *  A promise that is resolved with an array of all the JavaScript strings in the name tree.
 * 
 * @return {!PDFPromise<!Array<string>>}
 */
PDFDocumentProxy.prototype.getJavaScript = function() {};

/**
 *  A promise that is resolved with an array that is a tree outline (if it has one) of the PDF.  \@see PDFTreeNode
 * 
 * @return {!PDFPromise<!Array<!PDFTreeNode>>}
 */
PDFDocumentProxy.prototype.getOutline = function() {};

/**
 * A promise that is resolved with the info and metadata of the PDF.
 * 
 * @return {!PDFPromise<{info: !PDFInfo, metadata: !PDFMetadata}>}
 */
PDFDocumentProxy.prototype.getMetadata = function() {};

/**
 * Is the PDF encrypted?
 * 
 * @return {!PDFPromise<boolean>}
 */
PDFDocumentProxy.prototype.isEncrypted = function() {};

/**
 * A promise that is resolved with Uint8Array that has the raw PDF data.
 * 
 * @return {!PDFPromise<!Uint8Array>}
 */
PDFDocumentProxy.prototype.getData = function() {};

/**
 * TODO: return type of Promise<???>
 * A promise that is resolved when the document's data is loaded.
 * 
 * @return {!PDFPromise<!Array<?>>}
 */
PDFDocumentProxy.prototype.dataLoaded = function() {};

/**
 * 
 * 
 * @return {void}
 */
PDFDocumentProxy.prototype.destroy = function() {};
/**
 * @record
 * @struct
 */
function PDFRef() {}
 /** @type {number} */
PDFRef.prototype.num;
 /** @type {?} */
PDFRef.prototype.gen;
/**
 * @record
 * @struct
 */
function PDFPageViewportOptions() {}
 /** @type {?} */
PDFPageViewportOptions.prototype.viewBox;
 /** @type {number} */
PDFPageViewportOptions.prototype.scale;
 /** @type {number} */
PDFPageViewportOptions.prototype.rotation;
 /** @type {number} */
PDFPageViewportOptions.prototype.offsetX;
 /** @type {number} */
PDFPageViewportOptions.prototype.offsetY;
 /** @type {boolean} */
PDFPageViewportOptions.prototype.dontFlip;
/**
 * @record
 * @struct
 */
function PDFPageViewport() {}
 /** @type {number} */
PDFPageViewport.prototype.width;
 /** @type {number} */
PDFPageViewport.prototype.height;
 /** @type {number} */
PDFPageViewport.prototype.fontScale;
 /** @type {!Array<number>} */
PDFPageViewport.prototype.transforms;

/**
 * @param {!PDFPageViewportOptions} options
 * @return {!PDFPageViewport}
 */
PDFPageViewport.prototype.clone = function(options) {};

/**
 * @param {number} x
 * @param {number} y
 * @return {!Array<number>}
 */
PDFPageViewport.prototype.convertToViewportPoint = function(x, y) {};

/**
 * @param {!Array<number>} rect
 * @return {!Array<number>}
 */
PDFPageViewport.prototype.convertToViewportRectangle = function(rect) {};

/**
 * @param {number} x
 * @param {number} y
 * @return {!Array<number>}
 */
PDFPageViewport.prototype.convertToPdfPoint = function(x, y) {};
/**
 * @record
 * @struct
 */
function PDFAnnotationData() {}
 /** @type {string} */
PDFAnnotationData.prototype.subtype;
 /** @type {!Array<number>} */
PDFAnnotationData.prototype.rect;
 /** @type {?} */
PDFAnnotationData.prototype.annotationFlags;
 /** @type {!Array<number>} */
PDFAnnotationData.prototype.color;
 /** @type {number} */
PDFAnnotationData.prototype.borderWidth;
 /** @type {boolean} */
PDFAnnotationData.prototype.hasAppearance;
/**
 * @record
 * @struct
 */
function PDFAnnotations() {}

/**
 * @return {!PDFAnnotationData}
 */
PDFAnnotations.prototype.getData = function() {};

/**
 * @return {boolean}
 */
PDFAnnotations.prototype.hasHtml = function() {};

/**
 * @param {?} commonOjbs
 * @return {!HTMLElement}
 */
PDFAnnotations.prototype.getHtmlElement = function(commonOjbs) {};

/**
 * @param {string} tagName
 * @param {!Array<number>} rect
 * @return {!HTMLElement}
 */
PDFAnnotations.prototype.getEmptyContainer = function(tagName, rect) {};

/**
 * @return {boolean}
 */
PDFAnnotations.prototype.isViewable = function() {};

/**
 * @param {?} keys
 * @return {!PDFPromise<?>}
 */
PDFAnnotations.prototype.loadResources = function(keys) {};

/**
 * @param {?} evaluator
 * @return {!PDFPromise<?>}
 */
PDFAnnotations.prototype.getOperatorList = function(evaluator) {};
/**
 * @record
 * @struct
 */
function PDFRenderTextLayer() {}

/**
 * @return {void}
 */
PDFRenderTextLayer.prototype.beginLayout = function() {};

/**
 * @return {void}
 */
PDFRenderTextLayer.prototype.endLayout = function() {};

/**
 * @return {void}
 */
PDFRenderTextLayer.prototype.appendText = function() {};
/**
 * @record
 * @struct
 */
function PDFRenderImageLayer() {}

/**
 * @return {void}
 */
PDFRenderImageLayer.prototype.beginLayout = function() {};

/**
 * @return {void}
 */
PDFRenderImageLayer.prototype.endLayout = function() {};

/**
 * @return {void}
 */
PDFRenderImageLayer.prototype.appendImage = function() {};
/**
 * @record
 * @struct
 */
function PDFRenderParams() {}
 /** @type {!CanvasRenderingContext2D} */
PDFRenderParams.prototype.canvasContext;
 /** @type {!PDFPageViewport} */
PDFRenderParams.prototype.viewport;
 /** @type {!PDFRenderTextLayer} */
PDFRenderParams.prototype.textLayer;
 /** @type {!PDFRenderImageLayer} */
PDFRenderParams.prototype.imageLayer;
 /** @type {function(function(): void): void} */
PDFRenderParams.prototype.continueCallback;
/**
 * @record
 * @struct
 */
function PDFViewerParams() {}
 /** @type {!HTMLElement} */
PDFViewerParams.prototype.container;
 /** @type {!HTMLElement} */
PDFViewerParams.prototype.viewer;
/**
 * @extends {PDFPromise}
 * @record
 * @struct
 */
function PDFRenderTask() {}

/**
 * Cancel the rendering task.  If the task is currently rendering it will not be cancelled until graphics pauses with a timeout.  The promise that this object extends will resolve when cancelled.
 * 
 * @return {void}
 */
PDFRenderTask.prototype.cancel = function() {};
/**
 * @record
 * @struct
 */
function PDFPageProxy() {}
 /** @type {number} */
PDFPageProxy.prototype.pageNumber;
 /** @type {number} */
PDFPageProxy.prototype.rotate;
 /** @type {!PDFRef} */
PDFPageProxy.prototype.ref;
 /** @type {!Array<number>} */
PDFPageProxy.prototype.view;

/**
 * @param {number} scale The desired scale of the viewport.
 * @param {number=} rotate Degrees to rotate the viewport.  If omitted this defaults to the page rotation.
 * @return {!PDFPageViewport} 
 * 
 */
PDFPageProxy.prototype.getViewport = function(scale, rotate) {};

/**
 * A promise that is resolved with an array of the annotation objects.
 * 
 * @return {!PDFPromise<!PDFAnnotations>}
 */
PDFPageProxy.prototype.getAnnotations = function() {};

/**
 * Begins the process of rendering a page to the desired context.
 * @param {!PDFRenderParams} params Rendering options.
 * @return {!PDFRenderTask} An extended promise that is resolved when the page finishes rendering.
 * 
 */
PDFPageProxy.prototype.render = function(params) {};

/**
 * A promise that is resolved with the string that is the text content frm the page.
 * 
 * @return {!PDFPromise<!TextContent>}
 */
PDFPageProxy.prototype.getTextContent = function() {};

/**
 * Destroyes resources allocated by the page.
 * 
 * @return {void}
 */
PDFPageProxy.prototype.destroy = function() {};
/**
 * @record
 * @struct
 */
function TextContentItem() {}
 /** @type {string} */
TextContentItem.prototype.str;
 /** @type {!Array<number>} */
TextContentItem.prototype.transform;
 /** @type {number} */
TextContentItem.prototype.width;
 /** @type {number} */
TextContentItem.prototype.height;
 /** @type {string} */
TextContentItem.prototype.dir;
 /** @type {string} */
TextContentItem.prototype.fontName;
/**
 * @record
 * @struct
 */
function TextContent() {}
 /** @type {!Array<!TextContentItem>} */
TextContent.prototype.items;
 /** @type {?} */
TextContent.prototype.styles;
/**
 * @record
 * @struct
 */
function PDFObjects() {}

/**
 * @param {number} objId
 * @param {?=} callback
 * @return {?}
 */
PDFObjects.prototype.get = function(objId, callback) {};

/**
 * @param {number} objId
 * @param {?} data
 * @return {?}
 */
PDFObjects.prototype.resolve = function(objId, data) {};

/**
 * @param {number} objId
 * @return {boolean}
 */
PDFObjects.prototype.isResolved = function(objId) {};

/**
 * @param {number} objId
 * @return {boolean}
 */
PDFObjects.prototype.hasData = function(objId) {};

/**
 * @param {number} objId
 * @return {?}
 */
PDFObjects.prototype.getData = function(objId) {};

/**
 * @return {void}
 */
PDFObjects.prototype.clear = function() {};
/**
 * @record
 * @struct
 */
function PDFJSUtilStatic() {}

/**
 * Normalize rectangle so that (x1,y1) < (x2,y2)
 * 
 * For coordinate systems whose origin lies in the bottom-left, this
 * means normalization to (BL,TR) ordering. For systems with origin in the
 * top-left, this means (TL,BR) ordering.
 * 
 * @param {!Array<number>} rect
 * @return {!Array<number>}
 */
PDFJSUtilStatic.prototype.normalizeRect = function(rect) {};
/**
 * @record
 * @struct
 */
function PDFJSStatic() {}
 /** @type {number} */
PDFJSStatic.prototype.maxImageSize;
 /** @type {string} */
PDFJSStatic.prototype.cMapUrl;
 /** @type {boolean} */
PDFJSStatic.prototype.cMapPacked;
 /** @type {boolean} */
PDFJSStatic.prototype.disableFontFace;
 /** @type {string} */
PDFJSStatic.prototype.imageResourcesPath;
 /** @type {boolean} */
PDFJSStatic.prototype.disableWorker;
 /** @type {string} */
PDFJSStatic.prototype.workerSrc;
 /** @type {boolean} */
PDFJSStatic.prototype.disableRange;
 /** @type {boolean} */
PDFJSStatic.prototype.disableStream;
 /** @type {boolean} */
PDFJSStatic.prototype.disableAutoFetch;
 /** @type {boolean} */
PDFJSStatic.prototype.pdfBug;
 /** @type {boolean} */
PDFJSStatic.prototype.postMessageTransfers;
 /** @type {boolean} */
PDFJSStatic.prototype.disableCreateObjectURL;
 /** @type {boolean} */
PDFJSStatic.prototype.disableWebGL;
 /** @type {boolean} */
PDFJSStatic.prototype.disableFullscreen;
 /** @type {boolean} */
PDFJSStatic.prototype.useOnlyCssZoom;
 /** @type {number} */
PDFJSStatic.prototype.verbosity;
 /** @type {number} */
PDFJSStatic.prototype.maxCanvasPixels;
 /** @type {boolean} */
PDFJSStatic.prototype.openExternalLinksInNewWindow;
 /** @type {boolean} */
PDFJSStatic.prototype.isEvalSupported;
 /** @type {!PDFJSUtilStatic} */
PDFJSStatic.prototype.Util;

/**
 * This is the main entry point for loading a PDF and interacting with it.
 * NOTE: If a URL is used to fetch the PDF data a standard XMLHttpRequest(XHR)
 * is used, which means it must follow the same origin rules that any XHR does
 * e.g. No corss domain requests without CORS.
 * @param {string|!Uint8Array|!PDFSource} source
 * @param {?=} pdfDataRangeTransport Used if you want to manually server range requests for data in the PDF.  \@ee viewer.js for an example of pdfDataRangeTransport's interface.
 * @param {function(function(string): void, string): string=} passwordCallback Used to request a password if wrong or no password was provided.  The callback receives two parameters: function that needs to be called with new password and the reason.
 * @param {function(!PDFProgressData): void=} progressCallback Progress callback.
 * @return {!PDFPromise<!PDFDocumentProxy>} A promise that is resolved with PDFDocumentProxy object.
 * 
 */
PDFJSStatic.prototype.getDocument = function(source, pdfDataRangeTransport, passwordCallback, progressCallback) {};

/**
 * @param {!PDFViewerParams} params
 * @return {void}
 */
PDFJSStatic.prototype.PDFViewer = function(params) {};
 /** @type {!PDFJSStatic} */
var PDFJS;
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "pdfjs-dist"
/** @const */
tsickle_declare_module.pdfjs_dist = {};

/* TODO: ExportAssignment in tsickle_declare_module.pdfjs_dist */