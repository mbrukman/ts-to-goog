/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/iframe-resizer/index.d.ts:
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "iframe-resizer"
/** @const */
tsickle_declare_module.iframe_resizer = {};
/**
 * @record
 * @struct
 */
tsickle_declare_module.iframe_resizer.IFrameObject = function() {};

/**
 * @return {void}
 */
tsickle_declare_module.iframe_resizer.IFrameObject.prototype.close = function() {};

/**
 * @param {string} anchor
 * @return {void}
 */
tsickle_declare_module.iframe_resizer.IFrameObject.prototype.moveToAnchor = function(anchor) {};

/**
 * @return {void}
 */
tsickle_declare_module.iframe_resizer.IFrameObject.prototype.resize = function() {};

/**
 * @param {?} message
 * @param {string=} targetOrigin
 * @return {void}
 */
tsickle_declare_module.iframe_resizer.IFrameObject.prototype.sendMessage = function(message, targetOrigin) {};
/**
 * @record
 * @struct
 */
tsickle_declare_module.iframe_resizer.IFrameComponent = function() {};
 /** @type {!IFrameObject} */
tsickle_declare_module.iframe_resizer.IFrameComponent.prototype.iFrameResizer;
/**
 * @record
 * @struct
 */
tsickle_declare_module.iframe_resizer.IFrameOptions = function() {};
 /** @type {boolean} */
tsickle_declare_module.iframe_resizer.IFrameOptions.prototype.autoResize;
 /** @type {string} */
tsickle_declare_module.iframe_resizer.IFrameOptions.prototype.bodyBackground;
 /** @type {number} */
tsickle_declare_module.iframe_resizer.IFrameOptions.prototype.bodyMargin;
 /** @type {boolean} */
tsickle_declare_module.iframe_resizer.IFrameOptions.prototype.checkOrigin;
 /** @type {boolean} */
tsickle_declare_module.iframe_resizer.IFrameOptions.prototype.inPageLinks;
 /** @type {string} */
tsickle_declare_module.iframe_resizer.IFrameOptions.prototype.heightCalculationMethod;
 /** @type {string} */
tsickle_declare_module.iframe_resizer.IFrameOptions.prototype.id;
 /** @type {number} */
tsickle_declare_module.iframe_resizer.IFrameOptions.prototype.interval;
 /** @type {boolean} */
tsickle_declare_module.iframe_resizer.IFrameOptions.prototype.log;
 /** @type {number} */
tsickle_declare_module.iframe_resizer.IFrameOptions.prototype.maxHeight;
 /** @type {number} */
tsickle_declare_module.iframe_resizer.IFrameOptions.prototype.maxWidth;
 /** @type {number} */
tsickle_declare_module.iframe_resizer.IFrameOptions.prototype.minHeight;
 /** @type {number} */
tsickle_declare_module.iframe_resizer.IFrameOptions.prototype.minWidth;
 /** @type {string} */
tsickle_declare_module.iframe_resizer.IFrameOptions.prototype.resizeFrom;
 /** @type {(boolean|string)} */
tsickle_declare_module.iframe_resizer.IFrameOptions.prototype.scrolling;
 /** @type {boolean} */
tsickle_declare_module.iframe_resizer.IFrameOptions.prototype.sizeHeight;
 /** @type {boolean} */
tsickle_declare_module.iframe_resizer.IFrameOptions.prototype.sizeWidth;
 /** @type {number} */
tsickle_declare_module.iframe_resizer.IFrameOptions.prototype.tolerance;
 /** @type {string} */
tsickle_declare_module.iframe_resizer.IFrameOptions.prototype.widthCalculationMethod;
 /** @type {function(string): void} */
tsickle_declare_module.iframe_resizer.IFrameOptions.prototype.closedCallback;
 /** @type {function(!IFrameComponent): void} */
tsickle_declare_module.iframe_resizer.IFrameOptions.prototype.initCallback;
 /** @type {function(!IFrameMessageData): void} */
tsickle_declare_module.iframe_resizer.IFrameOptions.prototype.messageCallback;
 /** @type {function(!IFrameResizedData): void} */
tsickle_declare_module.iframe_resizer.IFrameOptions.prototype.resizedCallback;
 /** @type {function(!IFrameScrollData): boolean} */
tsickle_declare_module.iframe_resizer.IFrameOptions.prototype.scrollCallback;
/**
 * @record
 * @struct
 */
tsickle_declare_module.iframe_resizer.IFramePageOptions = function() {};
 /** @type {string} */
tsickle_declare_module.iframe_resizer.IFramePageOptions.prototype.targetOrigin;
 /** @type {function(?): void} */
tsickle_declare_module.iframe_resizer.IFramePageOptions.prototype.messageCallback;
 /** @type {function(): void} */
tsickle_declare_module.iframe_resizer.IFramePageOptions.prototype.readyCallback;
 /** @type {(string|function(): number)} */
tsickle_declare_module.iframe_resizer.IFramePageOptions.prototype.heightCalculationMethod;
 /** @type {(string|function(): number)} */
tsickle_declare_module.iframe_resizer.IFramePageOptions.prototype.widthCalculationMethod;

/** @typedef {string} */
tsickle_declare_module.iframe_resizer.HeightCalculationMethod;

/** @typedef {string} */
tsickle_declare_module.iframe_resizer.WidthCalculationMethod;
/**
 * @record
 * @struct
 */
tsickle_declare_module.iframe_resizer.IFramePage = function() {};

/**
 * Turn autoResizing of the iFrame on and off. Returns bool of current state.
 * @param {boolean=} resize
 * @return {boolean}
 */
tsickle_declare_module.iframe_resizer.IFramePage.prototype.autoResize = function(resize) {};

/**
 * Remove the iFrame from the parent page.
 * @return {void}
 */
tsickle_declare_module.iframe_resizer.IFramePage.prototype.close = function() {};

/**
 * Returns the ID of the iFrame that the page is contained in.
 * @return {string}
 */
tsickle_declare_module.iframe_resizer.IFramePage.prototype.getId = function() {};

/**
 * Ask the containing page for its positioning coordinates.
 * 
 * Your callback function will be recalled when the parent page is scrolled or resized.
 * 
 * Pass false to disable the callback.
 * @param {(boolean|function(!PageInfo): void)} callback
 * @return {void}
 */
tsickle_declare_module.iframe_resizer.IFramePage.prototype.getPageInfo = function(callback) {};

/**
 * Scroll the parent page to the coordinates x and y
 * @param {number} x
 * @param {number} y
 * @return {void}
 */
tsickle_declare_module.iframe_resizer.IFramePage.prototype.scrollTo = function(x, y) {};

/**
 * Scroll the parent page to the coordinates x and y relative to the position of the iFrame.
 * @param {number} x
 * @param {number} y
 * @return {void}
 */
tsickle_declare_module.iframe_resizer.IFramePage.prototype.scrollToOffset = function(x, y) {};

/**
 * Send data to the containing page, message can be any data type that can be serialized into JSON. The `targetOrigin`
 * option is used to restrict where the message is sent to; to stop an attacker mimicking your parent page.
 * See the MDN documentation on postMessage for more details.
 * @param {?} message
 * @param {string=} targetOrigin
 * @return {void}
 */
tsickle_declare_module.iframe_resizer.IFramePage.prototype.sendMessage = function(message, targetOrigin) {};

/**
 * Change the method use to workout the height of the iFrame.
 * @param {string} method
 * @return {void}
 */
tsickle_declare_module.iframe_resizer.IFramePage.prototype.setHeightCalculationMethod = function(method) {};

/**
 * Change the method use to workout the width of the iFrame.
 * @param {string} method
 * @return {void}
 */
tsickle_declare_module.iframe_resizer.IFramePage.prototype.setWidthCalculationMethod = function(method) {};

/**
 * Set default target origin.
 * @param {string} targetOrigin
 * @return {void}
 */
tsickle_declare_module.iframe_resizer.IFramePage.prototype.setTargetOrigin = function(targetOrigin) {};

/**
 * Manually force iFrame to resize. To use passed arguments you need first to disable the `autoResize` option to
 * prevent auto resizing and enable the `sizeWidth` option if you wish to set the width.
 * @param {string=} customHeight
 * @param {string=} customWidth
 * @return {void}
 */
tsickle_declare_module.iframe_resizer.IFramePage.prototype.size = function(customHeight, customWidth) {};
/**
 * @record
 * @struct
 */
tsickle_declare_module.iframe_resizer.PageInfo = function() {};
 /** @type {number} */
tsickle_declare_module.iframe_resizer.PageInfo.prototype.iframeHeight;
 /** @type {number} */
tsickle_declare_module.iframe_resizer.PageInfo.prototype.iframeWidth;
 /** @type {number} */
tsickle_declare_module.iframe_resizer.PageInfo.prototype.clientHeight;
 /** @type {number} */
tsickle_declare_module.iframe_resizer.PageInfo.prototype.clientWidth;
 /** @type {number} */
tsickle_declare_module.iframe_resizer.PageInfo.prototype.offsetLeft;
 /** @type {number} */
tsickle_declare_module.iframe_resizer.PageInfo.prototype.offsetTop;
 /** @type {number} */
tsickle_declare_module.iframe_resizer.PageInfo.prototype.scrollLeft;
 /** @type {number} */
tsickle_declare_module.iframe_resizer.PageInfo.prototype.scrollTop;
/**
 * @record
 * @struct
 */
tsickle_declare_module.iframe_resizer.IFrameResizedData = function() {};
 /** @type {!IFrameComponent} */
tsickle_declare_module.iframe_resizer.IFrameResizedData.prototype.iframe;
 /** @type {number} */
tsickle_declare_module.iframe_resizer.IFrameResizedData.prototype.height;
 /** @type {number} */
tsickle_declare_module.iframe_resizer.IFrameResizedData.prototype.width;
 /** @type {string} */
tsickle_declare_module.iframe_resizer.IFrameResizedData.prototype.type;
/**
 * @record
 * @struct
 */
tsickle_declare_module.iframe_resizer.IFrameMessageData = function() {};
 /** @type {!IFrameComponent} */
tsickle_declare_module.iframe_resizer.IFrameMessageData.prototype.iframe;
 /** @type {string} */
tsickle_declare_module.iframe_resizer.IFrameMessageData.prototype.message;
/**
 * @record
 * @struct
 */
tsickle_declare_module.iframe_resizer.IFrameScrollData = function() {};
 /** @type {number} */
tsickle_declare_module.iframe_resizer.IFrameScrollData.prototype.x;
 /** @type {number} */
tsickle_declare_module.iframe_resizer.IFrameScrollData.prototype.y;

/**
 * @param {!IFrameOptions} options
 * @param {(string|!HTMLElement)} target
 * @return {!Array<!IFrameComponent>}
 */
tsickle_declare_module.iframe_resizer.iframeResizer = function(options, target) {};