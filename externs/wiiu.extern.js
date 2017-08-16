/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/wiiu/index.d.ts:
/** @const */
var wiiu = {};

/** @const */
wiiu.TPValidity = {};
/** @const {number} */
wiiu.TPValidity.VALID;
/** @const {number} */
wiiu.TPValidity.X_INVALID;
/** @const {number} */
wiiu.TPValidity.Y_INVALID;
/** @const {number} */
wiiu.TPValidity.INVALID;

/** @const */
wiiu.Button = {};
/** @const {number} */
wiiu.Button.MINUS;
/** @const {number} */
wiiu.Button.SELECT;
/** @const {number} */
wiiu.Button.PLUS;
/** @const {number} */
wiiu.Button.START;
/** @const {number} */
wiiu.Button.R;
/** @const {number} */
wiiu.Button.L;
/** @const {number} */
wiiu.Button.ZR;
/** @const {number} */
wiiu.Button.ZL;
/** @const {number} */
wiiu.Button.DOWN;
/** @const {number} */
wiiu.Button.UP;
/** @const {number} */
wiiu.Button.RIGHT;
/** @const {number} */
wiiu.Button.LEFT;
/** @const {number} */
wiiu.Button.Y;
/** @const {number} */
wiiu.Button.X;
/** @const {number} */
wiiu.Button.B;
/** @const {number} */
wiiu.Button.A;
/** @const {number} */
wiiu.Button.R_STICK;
/** @const {number} */
wiiu.Button.L_STICK;
/** @const {number} */
wiiu.Button.R_STICK_DOWN;
/** @const {number} */
wiiu.Button.R_STICK_UP;
/** @const {number} */
wiiu.Button.R_STICK_RIGHT;
/** @const {number} */
wiiu.Button.R_STICK_LEFT;
/** @const {number} */
wiiu.Button.L_STICK_DOWN;
/** @const {number} */
wiiu.Button.L_STICK_UP;
/** @const {number} */
wiiu.Button.L_STICK_RIGHT;
/** @const {number} */
wiiu.Button.L_STICK_LEFT;
/**
 * @record
 * @struct
 */
wiiu.WiiuGamePad = function() {};
 /** @type {boolean} */
wiiu.WiiuGamePad.prototype.isEnabled;
 /** @type {boolean} */
wiiu.WiiuGamePad.prototype.isDataValid;
 /** @type {boolean} */
wiiu.WiiuGamePad.prototype.tpTouch;
 /** @type {number} */
wiiu.WiiuGamePad.prototype.tpValidity;
 /** @type {number} */
wiiu.WiiuGamePad.prototype.contentX;
 /** @type {number} */
wiiu.WiiuGamePad.prototype.contentY;
 /** @type {number} */
wiiu.WiiuGamePad.prototype.lStickX;
 /** @type {number} */
wiiu.WiiuGamePad.prototype.lStickY;
 /** @type {number} */
wiiu.WiiuGamePad.prototype.rStickX;
 /** @type {number} */
wiiu.WiiuGamePad.prototype.rStickY;
 /** @type {number} */
wiiu.WiiuGamePad.prototype.hold;
 /** @type {number} */
wiiu.WiiuGamePad.prototype.accX;
 /** @type {number} */
wiiu.WiiuGamePad.prototype.accY;
 /** @type {number} */
wiiu.WiiuGamePad.prototype.accZ;
 /** @type {number} */
wiiu.WiiuGamePad.prototype.gyroX;
 /** @type {number} */
wiiu.WiiuGamePad.prototype.gyroY;
 /** @type {number} */
wiiu.WiiuGamePad.prototype.gyroZ;
 /** @type {number} */
wiiu.WiiuGamePad.prototype.angleX;
 /** @type {number} */
wiiu.WiiuGamePad.prototype.angleY;
 /** @type {number} */
wiiu.WiiuGamePad.prototype.angleZ;
 /** @type {number} */
wiiu.WiiuGamePad.prototype.dirXx;
 /** @type {number} */
wiiu.WiiuGamePad.prototype.dirXy;
 /** @type {number} */
wiiu.WiiuGamePad.prototype.dirYx;
 /** @type {number} */
wiiu.WiiuGamePad.prototype.dirXz;
 /** @type {number} */
wiiu.WiiuGamePad.prototype.dirYy;
 /** @type {number} */
wiiu.WiiuGamePad.prototype.dirYz;
 /** @type {number} */
wiiu.WiiuGamePad.prototype.dirZx;
 /** @type {number} */
wiiu.WiiuGamePad.prototype.dirZz;
 /** @type {number} */
wiiu.WiiuGamePad.prototype.dirZy;

/**
 * @return {!wiiu.WiiuGamePad}
 */
wiiu.WiiuGamePad.prototype.update = function() {};
/**
 * @record
 * @struct
 */
wiiu.VideoPlayer = function() {};
 /** @type {number} */
wiiu.VideoPlayer.prototype.viewMode;

/**
 * @return {boolean}
 */
wiiu.VideoPlayer.prototype.end = function() {};

/** @const */
wiiu.ImageViewErrorCode = {};
/** @const {number} */
wiiu.ImageViewErrorCode.UNSUPPORTED_FORMAT;
/** @const {number} */
wiiu.ImageViewErrorCode.DIMENSIONS_TOO_LARGE;
/** @const {number} */
wiiu.ImageViewErrorCode.FILE_SIZE_TOO_LARGE;
/** @const {number} */
wiiu.ImageViewErrorCode.TOO_MANY_PIXELS_PROGRESSIVE_JPEG;
/**
 * @record
 * @struct
 */
wiiu.ImageView = function() {};
 /** @type {number} */
wiiu.ImageView.prototype.viewMode;

/**
 * @return {boolean}
 */
wiiu.ImageView.prototype.end = function() {};

/**
 * @return {number}
 */
wiiu.ImageView.prototype.getErrorCode = function() {};
 /** @type {!wiiu.WiiuGamePad} */
wiiu.gamepad;
 /** @type {!wiiu.VideoPlayer} */
wiiu.videoplayer;
 /** @type {!wiiu.ImageView} */
wiiu.imageview;

/**
 * @param {string} type
 * @param {function(!CustomEvent): ?} listener
 * @param {boolean=} useCapture
 * @return {void}
 */
HTMLElement.prototype.addEventListener = function(type, listener, useCapture) {};
 /** @type {?} */
Window.prototype.wiiu;

/**
 * @param {string} type
 * @param {function(!CustomEvent): ?} listener
 * @param {boolean=} useCapture
 * @return {void}
 */
Window.prototype.addEventListener = function(type, listener, useCapture) {};
