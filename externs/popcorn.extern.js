/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/popcorn/index.d.ts:
 /** @type {!PopcornStatic} */
var Popcorn;
/**
 * @record
 * @struct
 */
function PopcornStatic() {}

/* TODO: CallSignature:  */

/* TODO: CallSignature:  */
 /** @type {?} */
PopcornStatic.prototype.plugin;
 /** @type {{toSeconds: function(string, number): number}} */
PopcornStatic.prototype.util;
 /** @type {!PopcornLocale} */
PopcornStatic.prototype.locale;

/**
 * @param {!PopcornImpl} insntace
 * @return {?}
 */
PopcornStatic.prototype.destroy = function(insntace) {};

/**
 * @param {string} target
 * @param {?} source
 * @param {...?} rest
 * @return {?}
 */
PopcornStatic.prototype.extend = function(target, source, rest) {};

/**
 * @param {?} object
 * @param {!Function} callback
 * @param {?=} context
 * @return {?}
 */
PopcornStatic.prototype.forEach = function(object, callback, context) {};

/**
 * @param {string} url
 * @param {!Function} successCallback
 * @return {?}
 */
PopcornStatic.prototype.getJSONP = function(url, successCallback) {};

/**
 * @param {string} url
 * @param {!Function} successCallback
 * @return {?}
 */
PopcornStatic.prototype.getScript = function(url, successCallback) {};

/**
 * @param {string} prefix
 * @return {?}
 */
PopcornStatic.prototype.guid = function(prefix) {};

/**
 * @param {?} parserName
 * @param {?} fn
 * @param {?} data
 * @return {?}
 */
PopcornStatic.prototype.parser = function(parserName, fn, data) {};
/**
 * @record
 * @struct
 */
function PopcornLocale() {}

/**
 * @return {string}
 */
PopcornLocale.prototype.get = function() {};

/**
 * @param {string} langRegion
 * @return {?}
 */
PopcornLocale.prototype.set = function(langRegion) {};
/**
 * @record
 * @struct
 */
function PopcornImpl() {}
 /** @type {!HTMLMediaElement} */
PopcornImpl.prototype.media;

/**
 * @param {!Footnote} data
 * @return {?}
 */
PopcornImpl.prototype.footnote = function(data) {};

/**
 * @param {boolean} flag
 * @return {?}
 */
PopcornImpl.prototype.autoplay = function(flag) {};

/**
 * @return {!TimeRanges}
 */
PopcornImpl.prototype.buffered = function() {};

/**
 * @param {string} name
 * @param {?} definitionObject
 * @param {?=} manifest
 * @return {?}
 */
PopcornImpl.prototype.compose = function(name, definitionObject, manifest) {};

/**
 * @param {boolean} flag
 * @return {?}
 */
PopcornImpl.prototype.controls = function(flag) {};

/**
 * @param {string|number} time
 * @param {!Function} callback
 * @return {?}
 */
PopcornImpl.prototype.cue = function(time, callback) {};

/**
 * @param {string|number=} time
 * @return {number}
 */
PopcornImpl.prototype.currentTime = function(time) {};

/**
 * @param {string} pluginName
 * @param {?} options
 * @return {?}
 */
PopcornImpl.prototype.defaults = function(pluginName, options) {};

/**
 * @return {?}
 */
PopcornImpl.prototype.destroy = function() {};

/**
 * @param {string} pluginName
 * @return {?}
 */
PopcornImpl.prototype.disable = function(pluginName) {};

/**
 * @return {number}
 */
PopcornImpl.prototype.duration = function() {};

/**
 * @param {string} eventName
 * @param {?=} dataObject
 * @return {?}
 */
PopcornImpl.prototype.emit = function(eventName, dataObject) {};

/**
 * @param {string} pluginName
 * @return {!PopcornImpl}
 */
PopcornImpl.prototype.enable = function(pluginName) {};

/**
 * @param {string|number} time
 * @param {!Function} callback
 * @return {?}
 */
PopcornImpl.prototype.exec = function(time, callback) {};

/**
 * @param {string} eventName
 * @param {!Function} callback
 * @return {?}
 */
PopcornImpl.prototype.listen = function(eventName, callback) {};

/**
 * @return {?}
 */
PopcornImpl.prototype.load = function() {};

/**
 * @param {boolean} flag
 * @return {?}
 */
PopcornImpl.prototype.loop = function(flag) {};

/**
 * @return {?}
 */
PopcornImpl.prototype.mute = function() {};

/**
 * @param {boolean} flag
 * @return {?}
 */
PopcornImpl.prototype.muted = function(flag) {};

/**
 * @param {string} eventName
 * @param {!Function} callback
 * @return {?}
 */
PopcornImpl.prototype.off = function(eventName, callback) {};

/**
 * @param {string} eventName
 * @param {!Function} callback
 * @return {?}
 */
PopcornImpl.prototype.on = function(eventName, callback) {};

/**
 * @param {number|string=} time
 * @return {?}
 */
PopcornImpl.prototype.pause = function(time) {};

/**
 * @return {boolean}
 */
PopcornImpl.prototype.paused = function() {};

/**
 * @param {number|string=} time
 * @return {?}
 */
PopcornImpl.prototype.play = function(time) {};

/**
 * @param {number=} rate
 * @return {?}
 */
PopcornImpl.prototype.playbackRate = function(rate) {};

/**
 * @return {!TimeRanges}
 */
PopcornImpl.prototype.played = function() {};

/**
 * @return {!ClientRect}
 */
PopcornImpl.prototype.position = function() {};

/**
 * @param {string} state
 * @return {?}
 */
PopcornImpl.prototype.preload = function(state) {};

/**
 * @return {number}
 */
PopcornImpl.prototype.readyState = function() {};

/**
 * @return {number}
 */
PopcornImpl.prototype.roundTime = function() {};

/**
 * @return {?}
 */
PopcornImpl.prototype.seekable = function() {};

/**
 * @return {boolean}
 */
PopcornImpl.prototype.seeking = function() {};

/**
 * @param {string} pluginName
 * @return {?}
 */
PopcornImpl.prototype.toggle = function(pluginName) {};

/**
 * @param {string} eventName
 * @param {?=} dataObject
 * @return {?}
 */
PopcornImpl.prototype.trigger = function(eventName, dataObject) {};

/**
 * @param {string} eventName
 * @param {!Function} callback
 * @return {?}
 */
PopcornImpl.prototype.unlisten = function(eventName, callback) {};

/**
 * @return {?}
 */
PopcornImpl.prototype.unmute = function() {};

/**
 * @param {number=} value
 * @return {number}
 */
PopcornImpl.prototype.volume = function(value) {};

/**
 * @return {string}
 */
PopcornImpl.prototype.getLastTrackEventId = function() {};

/**
 * @param {string} id
 * @return {?}
 */
PopcornImpl.prototype.removeTrackEvent = function(id) {};
/**
 * @record
 * @struct
 */
function PopcornPlugin() {}

/* TODO: CallSignature:  */
 /** @type {!PopcornManifest} */
PopcornPlugin.prototype.manifest;

/**
 * @param {!TrackEvent=} track
 * @return {?}
 */
PopcornPlugin.prototype._setup = function(track) {};

/**
 * @param {!TrackEvent=} track
 * @return {?}
 */
PopcornPlugin.prototype._update = function(track) {};

/**
 * @param {!TrackEvent=} track
 * @return {?}
 */
PopcornPlugin.prototype._teardown = function(track) {};

/**
 * @param {?} event
 * @param {!TrackEvent=} track
 * @return {?}
 */
PopcornPlugin.prototype.start = function(event, track) {};

/**
 * @param {?} event
 * @param {!TrackEvent=} track
 * @return {?}
 */
PopcornPlugin.prototype.end = function(event, track) {};

/**
 * @param {?} event
 * @param {!TrackEvent=} track
 * @return {?}
 */
PopcornPlugin.prototype.frame = function(event, track) {};

/**
 * @return {string}
 */
PopcornPlugin.prototype.toString = function() {};
/**
 * @record
 * @struct
 */
function PopcornManifest() {}
 /** @type {!PopcornManifestAbout} */
PopcornManifest.prototype.about;
 /** @type {!PopcornManifestOptions} */
PopcornManifest.prototype.options;
/**
 * @record
 * @struct
 */
function PopcornManifestAbout() {}
 /** @type {string} */
PopcornManifestAbout.prototype.name;
 /** @type {string} */
PopcornManifestAbout.prototype.version;
 /** @type {string} */
PopcornManifestAbout.prototype.author;
 /** @type {string} */
PopcornManifestAbout.prototype.website;
/**
 * @record
 * @struct
 */
function PopcornManifestOptions() {}
 /** @type {!PopcornManifestOption} */
PopcornManifestOptions.prototype.start;
 /** @type {!PopcornManifestOption} */
PopcornManifestOptions.prototype.end;
 /** @type {string} */
PopcornManifestOptions.prototype.target;
 /** @type {!PopcornManifestOption} */
PopcornManifestOptions.prototype.text;
/**
 * @record
 * @struct
 */
function PopcornManifestOption() {}
 /** @type {string} */
PopcornManifestOption.prototype.elem;
 /** @type {string} */
PopcornManifestOption.prototype.type;
 /** @type {string} */
PopcornManifestOption.prototype.label;
/**
 * @record
 * @struct
 */
function Footnote() {}
 /** @type {number} */
Footnote.prototype.start;
 /** @type {number} */
Footnote.prototype.end;
 /** @type {string} */
Footnote.prototype.target;
 /** @type {string} */
Footnote.prototype.text;
