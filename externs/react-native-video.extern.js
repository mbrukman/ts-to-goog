/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/react-native-video/index.d.ts:

/* TODO: ImportDeclaration in  */

/* TODO: ImportDeclaration in  */
/**
 * @extends {ViewProperties}
 * @record
 * @struct
 */
function VideoProperties() {}
 /** @type {?} */
VideoProperties.prototype.src;
 /** @type {number} */
VideoProperties.prototype.seek;
 /** @type {boolean} */
VideoProperties.prototype.fullscreen;
 /** @type {(number|?)} */
VideoProperties.prototype.source;
 /** @type {string} */
VideoProperties.prototype.resizeMode;
 /** @type {string} */
VideoProperties.prototype.poster;
 /** @type {boolean} */
VideoProperties.prototype.repeat;
 /** @type {boolean} */
VideoProperties.prototype.paused;
 /** @type {boolean} */
VideoProperties.prototype.muted;
 /** @type {number} */
VideoProperties.prototype.volume;
 /** @type {number} */
VideoProperties.prototype.rate;
 /** @type {boolean} */
VideoProperties.prototype.playInBackground;
 /** @type {boolean} */
VideoProperties.prototype.playWhenInactive;
 /** @type {string} */
VideoProperties.prototype.ignoreSilentSwitch;
 /** @type {boolean} */
VideoProperties.prototype.disableFocus;
 /** @type {boolean} */
VideoProperties.prototype.controls;
 /** @type {number} */
VideoProperties.prototype.currentTime;
 /** @type {number} */
VideoProperties.prototype.progressUpdateInterval;
 /** @type {number} */
VideoProperties.prototype.scaleX;
 /** @type {number} */
VideoProperties.prototype.scaleY;
 /** @type {number} */
VideoProperties.prototype.translateX;
 /** @type {number} */
VideoProperties.prototype.translateY;
 /** @type {number} */
VideoProperties.prototype.rotation;

/**
 * @return {void}
 */
VideoProperties.prototype.onVideoLoadStart = function() {};

/**
 * @return {void}
 */
VideoProperties.prototype.onVideoLoad = function() {};

/**
 * @return {void}
 */
VideoProperties.prototype.onVideoBuffer = function() {};

/**
 * @return {void}
 */
VideoProperties.prototype.onVideoError = function() {};

/**
 * @return {void}
 */
VideoProperties.prototype.onVideoProgress = function() {};

/**
 * @return {void}
 */
VideoProperties.prototype.onVideoSeek = function() {};

/**
 * @return {void}
 */
VideoProperties.prototype.onVideoEnd = function() {};

/**
 * @return {void}
 */
VideoProperties.prototype.onTimedMetadata = function() {};

/**
 * @return {void}
 */
VideoProperties.prototype.onVideoFullscreenPlayerWillPresent = function() {};

/**
 * @return {void}
 */
VideoProperties.prototype.onVideoFullscreenPlayerDidPresent = function() {};

/**
 * @return {void}
 */
VideoProperties.prototype.onVideoFullscreenPlayerWillDismiss = function() {};

/**
 * @return {void}
 */
VideoProperties.prototype.onVideoFullscreenPlayerDidDismiss = function() {};

/**
 * @return {void}
 */
VideoProperties.prototype.onLoadStart = function() {};

/**
 * @return {void}
 */
VideoProperties.prototype.onLoad = function() {};

/**
 * @return {void}
 */
VideoProperties.prototype.onBuffer = function() {};

/**
 * @return {void}
 */
VideoProperties.prototype.onError = function() {};

/**
 * @return {void}
 */
VideoProperties.prototype.onProgress = function() {};

/**
 * @return {void}
 */
VideoProperties.prototype.onSeek = function() {};

/**
 * @return {void}
 */
VideoProperties.prototype.onEnd = function() {};

/**
 * @return {void}
 */
VideoProperties.prototype.onFullscreenPlayerWillPresent = function() {};

/**
 * @return {void}
 */
VideoProperties.prototype.onFullscreenPlayerDidPresent = function() {};

/**
 * @return {void}
 */
VideoProperties.prototype.onFullscreenPlayerWillDismiss = function() {};

/**
 * @return {void}
 */
VideoProperties.prototype.onFullscreenPlayerDidDismiss = function() {};

/**
 * @return {void}
 */
VideoProperties.prototype.onReadyForDisplay = function() {};

/**
 * @return {void}
 */
VideoProperties.prototype.onPlaybackStalled = function() {};

/**
 * @return {void}
 */
VideoProperties.prototype.onPlaybackResume = function() {};

/**
 * @return {void}
 */
VideoProperties.prototype.onPlaybackRateChange = function() {};

/**
 * @return {void}
 */
VideoProperties.prototype.onAudioFocusChanged = function() {};

/**
 * @return {void}
 */
VideoProperties.prototype.onAudioBecomingNoisy = function() {};
/**
 * @constructor
 * @struct
 */
function Video() {}

/**
 * @param {number} time
 * @return {void}
 */
Video.prototype.seek = function(time) {};

/**
 * @return {void}
 */
Video.prototype.presentFullscreenPlayer = function() {};

/**
 * @return {void}
 */
Video.prototype.dismissFullscreenPlayer = function() {};
