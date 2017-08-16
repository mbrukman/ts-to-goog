/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/fluent-ffmpeg/index.d.ts:

/* TODO: ImportDeclaration in  */

/* TODO: ImportDeclaration in  */
/** @const */
var Ffmpeg = {};
/**
 * @record
 * @struct
 */
Ffmpeg.FfmpegCommandLogger = function() {};

/**
 * @param {...?} data
 * @return {void}
 */
Ffmpeg.FfmpegCommandLogger.prototype.error = function(data) {};

/**
 * @param {...?} data
 * @return {void}
 */
Ffmpeg.FfmpegCommandLogger.prototype.warning = function(data) {};

/**
 * @param {...?} data
 * @return {void}
 */
Ffmpeg.FfmpegCommandLogger.prototype.info = function(data) {};

/**
 * @param {...?} data
 * @return {void}
 */
Ffmpeg.FfmpegCommandLogger.prototype.debug = function(data) {};
/**
 * @record
 * @struct
 */
Ffmpeg.FfmpegCommandOptions = function() {};
 /** @type {!Ffmpeg.FfmpegCommandLogger} */
Ffmpeg.FfmpegCommandOptions.prototype.logger;
 /** @type {number} */
Ffmpeg.FfmpegCommandOptions.prototype.niceness;
 /** @type {number} */
Ffmpeg.FfmpegCommandOptions.prototype.priority;
 /** @type {string} */
Ffmpeg.FfmpegCommandOptions.prototype.presets;
 /** @type {string} */
Ffmpeg.FfmpegCommandOptions.prototype.preset;
 /** @type {number} */
Ffmpeg.FfmpegCommandOptions.prototype.stdoutLines;
 /** @type {number} */
Ffmpeg.FfmpegCommandOptions.prototype.timeout;
 /** @type {(string|!internal.Readable)} */
Ffmpeg.FfmpegCommandOptions.prototype.source;
/**
 * @record
 * @struct
 */
Ffmpeg.FilterSpecification = function() {};
 /** @type {string} */
Ffmpeg.FilterSpecification.prototype.filter;
 /** @type {(string|!Array<string>)} */
Ffmpeg.FilterSpecification.prototype.inputs;
 /** @type {(string|!Array<string>)} */
Ffmpeg.FilterSpecification.prototype.outputs;
 /** @type {?} */
Ffmpeg.FilterSpecification.prototype.options;

/** @typedef {function(!Ffmpeg.FfmpegCommand): string} */
Ffmpeg.GetPreset;
/**
 * @record
 * @struct
 */
Ffmpeg.Filter = function() {};
 /** @type {string} */
Ffmpeg.Filter.prototype.description;
 /** @type {string} */
Ffmpeg.Filter.prototype.input;
 /** @type {boolean} */
Ffmpeg.Filter.prototype.multipleInputs;
 /** @type {string} */
Ffmpeg.Filter.prototype.output;
 /** @type {boolean} */
Ffmpeg.Filter.prototype.multipleOutputs;
/**
 * @record
 * @struct
 */
Ffmpeg.Filters = function() {};

/* TODO: IndexSignature: Ffmpeg */

/** @typedef {function(!Error, !Ffmpeg.Filters): void} */
Ffmpeg.FiltersCallback;
/**
 * @record
 * @struct
 */
Ffmpeg.Codec = function() {};
 /** @type {string} */
Ffmpeg.Codec.prototype.type;
 /** @type {string} */
Ffmpeg.Codec.prototype.description;
 /** @type {boolean} */
Ffmpeg.Codec.prototype.canDecode;
 /** @type {boolean} */
Ffmpeg.Codec.prototype.canEncode;
 /** @type {boolean} */
Ffmpeg.Codec.prototype.drawHorizBand;
 /** @type {boolean} */
Ffmpeg.Codec.prototype.directRendering;
 /** @type {boolean} */
Ffmpeg.Codec.prototype.weirdFrameTruncation;
 /** @type {boolean} */
Ffmpeg.Codec.prototype.intraFrameOnly;
 /** @type {boolean} */
Ffmpeg.Codec.prototype.isLossy;
 /** @type {boolean} */
Ffmpeg.Codec.prototype.isLossless;
/**
 * @record
 * @struct
 */
Ffmpeg.Codecs = function() {};

/* TODO: IndexSignature: Ffmpeg */

/** @typedef {function(!Error, !Ffmpeg.Codecs): void} */
Ffmpeg.CodecsCallback;
/**
 * @record
 * @struct
 */
Ffmpeg.Encoder = function() {};
 /** @type {string} */
Ffmpeg.Encoder.prototype.type;
 /** @type {string} */
Ffmpeg.Encoder.prototype.description;
 /** @type {boolean} */
Ffmpeg.Encoder.prototype.frameMT;
 /** @type {boolean} */
Ffmpeg.Encoder.prototype.sliceMT;
 /** @type {boolean} */
Ffmpeg.Encoder.prototype.experimental;
 /** @type {boolean} */
Ffmpeg.Encoder.prototype.drawHorizBand;
 /** @type {boolean} */
Ffmpeg.Encoder.prototype.directRendering;
/**
 * @record
 * @struct
 */
Ffmpeg.Encoders = function() {};

/* TODO: IndexSignature: Ffmpeg */

/** @typedef {function(!Error, !Ffmpeg.Encoders): void} */
Ffmpeg.EncodersCallback;
/**
 * @record
 * @struct
 */
Ffmpeg.Format = function() {};
 /** @type {string} */
Ffmpeg.Format.prototype.description;
 /** @type {boolean} */
Ffmpeg.Format.prototype.canDemux;
 /** @type {boolean} */
Ffmpeg.Format.prototype.canMux;
/**
 * @record
 * @struct
 */
Ffmpeg.Formats = function() {};

/* TODO: IndexSignature: Ffmpeg */

/** @typedef {function(!Error, !Ffmpeg.Formats): void} */
Ffmpeg.FormatsCallback;
/**
 * @record
 * @struct
 */
Ffmpeg.FfprobeData = function() {};
 /** @type {!Array<?>} */
Ffmpeg.FfprobeData.prototype.stream;
 /** @type {?} */
Ffmpeg.FfprobeData.prototype.format;
 /** @type {!Array<?>} */
Ffmpeg.FfprobeData.prototype.chapters;
/**
 * @record
 * @struct
 */
Ffmpeg.ScreenshotsConfig = function() {};
 /** @type {number} */
Ffmpeg.ScreenshotsConfig.prototype.count;
 /** @type {string} */
Ffmpeg.ScreenshotsConfig.prototype.folder;
 /** @type {string} */
Ffmpeg.ScreenshotsConfig.prototype.filename;
 /** @type {(!Array<string>|!Array<number>)} */
Ffmpeg.ScreenshotsConfig.prototype.timemarks;
 /** @type {(!Array<string>|!Array<number>)} */
Ffmpeg.ScreenshotsConfig.prototype.timestamps;
 /** @type {boolean} */
Ffmpeg.ScreenshotsConfig.prototype.fastSeek;
 /** @type {string} */
Ffmpeg.ScreenshotsConfig.prototype.size;

/**
 * @constructor
 * @struct
 * @param {!Ffmpeg.FfmpegCommandOptions|(string|!internal.Readable)=} options_or_input
 * @param {!Ffmpeg.FfmpegCommandOptions=} options
 */
Ffmpeg.FfmpegCommand = function(options_or_input, options) {};

/**
 * @param {(string|!internal.Readable)} source
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.mergeAdd = function(source) {};

/**
 * @param {(string|!internal.Readable)} source
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.addInput = function(source) {};

/**
 * @param {(string|!internal.Readable)} source
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.input = function(source) {};

/**
 * @param {string} format
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.withInputFormat = function(format) {};

/**
 * @param {string} format
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.inputFormat = function(format) {};

/**
 * @param {string} format
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.fromFormat = function(format) {};

/**
 * @param {number} fps
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.withInputFps = function(fps) {};

/**
 * @param {number} fps
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.withInputFPS = function(fps) {};

/**
 * @param {number} fps
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.withFpsInput = function(fps) {};

/**
 * @param {number} fps
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.withFPSInput = function(fps) {};

/**
 * @param {number} fps
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.inputFPS = function(fps) {};

/**
 * @param {number} fps
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.inputFps = function(fps) {};

/**
 * @param {number} fps
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.fpsInput = function(fps) {};

/**
 * @param {number} fps
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.FPSInput = function(fps) {};

/**
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.nativeFramerate = function() {};

/**
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.withNativeFramerate = function() {};

/**
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.native = function() {};

/**
 * @param {(string|number)} seek
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.setStartTime = function(seek) {};

/**
 * @param {(string|number)} seek
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.seekInput = function(seek) {};

/**
 * @param {(string|number)} duration
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.loop = function(duration) {};

/**
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.withNoAudio = function() {};

/**
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.noAudio = function() {};

/**
 * @param {string} codec
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.withAudioCodec = function(codec) {};

/**
 * @param {string} codec
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.audioCodec = function(codec) {};

/**
 * @param {(string|number)} bitrate
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.withAudioBitrate = function(bitrate) {};

/**
 * @param {(string|number)} bitrate
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.audioBitrate = function(bitrate) {};

/**
 * @param {number} channels
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.withAudioChannels = function(channels) {};

/**
 * @param {number} channels
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.audioChannels = function(channels) {};

/**
 * @param {number} freq
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.withAudioFrequency = function(freq) {};

/**
 * @param {number} freq
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.audioFrequency = function(freq) {};

/**
 * @param {number} quality
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.withAudioQuality = function(quality) {};

/**
 * @param {number} quality
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.audioQuality = function(quality) {};

/**
 * @param {{filter: string, options: ?}} filters
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.withAudioFilter = function(filters) {};

/**
 * @param {{filter: string, options: ?}} filters
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.withAudioFilters = function(filters) {};

/**
 * @param {{filter: string, options: ?}} filters
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.audioFilter = function(filters) {};

/**
 * @param {{filter: string, options: ?}} filters
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.audioFilters = function(filters) {};

/**
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.withNoVideo = function() {};

/**
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.noVideo = function() {};

/**
 * @param {string} codec
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.withVideoCodec = function(codec) {};

/**
 * @param {string} codec
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.videoCodec = function(codec) {};

/**
 * @param {(string|number)} bitrate
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.withVideoBitrate = function(bitrate) {};

/**
 * @param {(string|number)} bitrate
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.videoBitrate = function(bitrate) {};

/**
 * @param {{filter: string, options: ?}} filters
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.withVideoFilter = function(filters) {};

/**
 * @param {{filter: string, options: ?}} filters
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.withVideoFilters = function(filters) {};

/**
 * @param {{filter: string, options: ?}} filters
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.videoFilter = function(filters) {};

/**
 * @param {{filter: string, options: ?}} filters
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.videoFilters = function(filters) {};

/**
 * @param {number} fps
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.withOutputFps = function(fps) {};

/**
 * @param {number} fps
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.withOutputFPS = function(fps) {};

/**
 * @param {number} fps
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.withFpsOutput = function(fps) {};

/**
 * @param {number} fps
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.withFPSOutput = function(fps) {};

/**
 * @param {number} fps
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.withFps = function(fps) {};

/**
 * @param {number} fps
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.withFPS = function(fps) {};

/**
 * @param {number} fps
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.outputFPS = function(fps) {};

/**
 * @param {number} fps
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.outputFps = function(fps) {};

/**
 * @param {number} fps
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.fpsOutput = function(fps) {};

/**
 * @param {number} fps
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.FPSOutput = function(fps) {};

/**
 * @param {number} fps
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.fps = function(fps) {};

/**
 * @param {number} fps
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.FPS = function(fps) {};

/**
 * @param {number} frames
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.takeFrames = function(frames) {};

/**
 * @param {number} frames
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.withFrames = function(frames) {};

/**
 * @param {number} frames
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.frames = function(frames) {};

/**
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.keepPixelAspect = function() {};

/**
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.keepDisplayAspect = function() {};

/**
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.keepDisplayAspectRatio = function() {};

/**
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.keepDAR = function() {};

/**
 * @param {string} size
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.withSize = function(size) {};

/**
 * @param {string} size
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.setSize = function(size) {};

/**
 * @param {string} size
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.size = function(size) {};

/**
 * @param {(string|number)} aspect
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.withAspect = function(aspect) {};

/**
 * @param {(string|number)} aspect
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.withAspectRatio = function(aspect) {};

/**
 * @param {(string|number)} aspect
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.setAspect = function(aspect) {};

/**
 * @param {(string|number)} aspect
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.setAspectRatio = function(aspect) {};

/**
 * @param {(string|number)} aspect
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.aspect = function(aspect) {};

/**
 * @param {(string|number)} aspect
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.aspectRatio = function(aspect) {};

/**
 * @param {boolean} pad
 * @param {string} color
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.applyAutopadding = function(pad, color) {};

/**
 * @param {boolean} pad
 * @param {string} color
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.applyAutoPadding = function(pad, color) {};

/**
 * @param {boolean} pad
 * @param {string} color
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.applyAutopad = function(pad, color) {};

/**
 * @param {boolean} pad
 * @param {string} color
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.applyAutoPad = function(pad, color) {};

/**
 * @param {boolean} pad
 * @param {string} color
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.withAutopadding = function(pad, color) {};

/**
 * @param {boolean} pad
 * @param {string} color
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.withAutoPadding = function(pad, color) {};

/**
 * @param {boolean} pad
 * @param {string} color
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.withAutopad = function(pad, color) {};

/**
 * @param {boolean} pad
 * @param {string} color
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.withAutoPad = function(pad, color) {};

/**
 * @param {boolean} pad
 * @param {string} color
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.autoPad = function(pad, color) {};

/**
 * @param {boolean} pad
 * @param {string} color
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.autopad = function(pad, color) {};

/**
 * @param {(string|!internal.Writable)} target
 * @param {{end: boolean}=} pipeopts
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.addOutput = function(target, pipeopts) {};

/**
 * @param {(string|!internal.Writable)} target
 * @param {{end: boolean}=} pipeopts
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.output = function(target, pipeopts) {};

/**
 * @param {(string|number)} seek
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.seekOutput = function(seek) {};

/**
 * @param {(string|number)} seek
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.seek = function(seek) {};

/**
 * @param {(string|number)} duration
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.withDuration = function(duration) {};

/**
 * @param {(string|number)} duration
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.setDuration = function(duration) {};

/**
 * @param {(string|number)} duration
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.duration = function(duration) {};

/**
 * @param {string} format
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.toFormat = function(format) {};

/**
 * @param {string} format
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.withOutputFormat = function(format) {};

/**
 * @param {string} format
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.outputFormat = function(format) {};

/**
 * @param {string} format
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.format = function(format) {};

/**
 * @param {string} spec
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.map = function(spec) {};

/**
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.updateFlvMetadata = function() {};

/**
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.flvmeta = function() {};

/**
 * @param {string} format
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.preset = function(format) {};

/**
 * @param {...!Array<string>|string} options
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.addInputOption = function(options) {};

/**
 * @param {...!Array<string>|string} options
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.addInputOptions = function(options) {};

/**
 * @param {...!Array<string>|string} options
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.withInputOption = function(options) {};

/**
 * @param {...!Array<string>|string} options
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.withInputOptions = function(options) {};

/**
 * @param {...!Array<string>|string} options
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.inputOption = function(options) {};

/**
 * @param {...!Array<string>|string} options
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.inputOptions = function(options) {};

/**
 * @param {...!Array<string>|string} options
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.addOutputOption = function(options) {};

/**
 * @param {...!Array<string>|string} options
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.addOutputOptions = function(options) {};

/**
 * @param {...!Array<string>|string} options
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.addOption = function(options) {};

/**
 * @param {...!Array<string>|string} options
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.addOptions = function(options) {};

/**
 * @param {...!Array<string>|string} options
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.withOutputOption = function(options) {};

/**
 * @param {...!Array<string>|string} options
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.withOutputOptions = function(options) {};

/**
 * @param {...!Array<string>|string} options
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.withOption = function(options) {};

/**
 * @param {...!Array<string>|string} options
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.withOptions = function(options) {};

/**
 * @param {...!Array<string>|string} options
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.outputOption = function(options) {};

/**
 * @param {...!Array<string>|string} options
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.outputOptions = function(options) {};

/**
 * @param {(string|!Array<!Ffmpeg.FilterSpecification>)} spec
 * @param {!Array<string>} map
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.filterGraph = function(spec, map) {};

/**
 * @param {(string|!Array<!Ffmpeg.FilterSpecification>)} spec
 * @param {!Array<string>} map
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.complexFilter = function(spec, map) {};

/**
 * @param {(string|function(!Ffmpeg.FfmpegCommand): string)} proset
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.usingPreset = function(proset) {};

/**
 * @param {(string|function(!Ffmpeg.FfmpegCommand): string)} proset
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.pnreset = function(proset) {};

/**
 * @param {number} niceness
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.renice = function(niceness) {};

/**
 * @param {string} signal
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.kill = function(signal) {};

/**
 * @param {string} path
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.setFfmpegPath = function(path) {};

/**
 * @param {string} path
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.setFfprobePath = function(path) {};

/**
 * @param {string} path
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.setFlvtoolPath = function(path) {};

/**
 * @param {function(!Error, !Ffmpeg.Filters): void} callback
 * @return {void}
 */
Ffmpeg.FfmpegCommand.prototype.availableFilters = function(callback) {};

/**
 * @param {function(!Error, !Ffmpeg.Filters): void} callback
 * @return {void}
 */
Ffmpeg.FfmpegCommand.prototype.getAvailableFilters = function(callback) {};

/**
 * @param {function(!Error, !Ffmpeg.Codecs): void} callback
 * @return {void}
 */
Ffmpeg.FfmpegCommand.prototype.availableCodecs = function(callback) {};

/**
 * @param {function(!Error, !Ffmpeg.Codecs): void} callback
 * @return {void}
 */
Ffmpeg.FfmpegCommand.prototype.getAvailableCodecs = function(callback) {};

/**
 * @param {function(!Error, !Ffmpeg.Encoders): void} callback
 * @return {void}
 */
Ffmpeg.FfmpegCommand.prototype.availableEncoders = function(callback) {};

/**
 * @param {function(!Error, !Ffmpeg.Encoders): void} callback
 * @return {void}
 */
Ffmpeg.FfmpegCommand.prototype.getAvailableEncoders = function(callback) {};

/**
 * @param {function(!Error, !Ffmpeg.Formats): void} callback
 * @return {void}
 */
Ffmpeg.FfmpegCommand.prototype.availableFormats = function(callback) {};

/**
 * @param {function(!Error, !Ffmpeg.Formats): void} callback
 * @return {void}
 */
Ffmpeg.FfmpegCommand.prototype.getAvailableFormats = function(callback) {};

/**
 * @param {function(?, !Ffmpeg.FfprobeData): void|number|!Array<string>} callback_or_index_or_options
 * @param {function(?, !Ffmpeg.FfprobeData): void|!Array<string>=} callback_or_options
 * @param {function(?, !Ffmpeg.FfprobeData): void=} callback
 * @return {function(?, !Ffmpeg.FfprobeData): void}
 */
Ffmpeg.FfmpegCommand.prototype.ffprobe = function(callback_or_index_or_options, callback_or_options, callback) {};

/**
 * @param {string} output
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.saveToFile = function(output) {};

/**
 * @param {string} output
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.save = function(output) {};

/**
 * @param {!internal.Writable} stream
 * @param {{end: boolean}=} options
 * @return {!internal.Writable}
 */
Ffmpeg.FfmpegCommand.prototype.writeToStream = function(stream, options) {};

/**
 * @param {!internal.Writable} stream
 * @param {{end: boolean}=} options
 * @return {!internal.Writable}
 */
Ffmpeg.FfmpegCommand.prototype.pipe = function(stream, options) {};

/**
 * @param {!internal.Writable} stream
 * @param {{end: boolean}=} options
 * @return {!internal.Writable}
 */
Ffmpeg.FfmpegCommand.prototype.stream = function(stream, options) {};

/**
 * @param {(number|!Ffmpeg.ScreenshotsConfig)} config
 * @param {string=} folder
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.takeScreenshots = function(config, folder) {};

/**
 * @param {(number|!Ffmpeg.ScreenshotsConfig)} config
 * @param {string=} folder
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.thumbnail = function(config, folder) {};

/**
 * @param {(number|!Ffmpeg.ScreenshotsConfig)} config
 * @param {string=} folder
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.thumbnails = function(config, folder) {};

/**
 * @param {(number|!Ffmpeg.ScreenshotsConfig)} config
 * @param {string=} folder
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.screenshot = function(config, folder) {};

/**
 * @param {(number|!Ffmpeg.ScreenshotsConfig)} config
 * @param {string=} folder
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.screenshots = function(config, folder) {};

/**
 * @param {(string|!internal.Writable)} target
 * @param {{end: boolean}=} options
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.mergeToFile = function(target, options) {};

/**
 * @param {(string|!internal.Writable)} target
 * @param {{end: boolean}=} options
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.concatenate = function(target, options) {};

/**
 * @param {(string|!internal.Writable)} target
 * @param {{end: boolean}=} options
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.concat = function(target, options) {};

/**
 * @return {!Ffmpeg.FfmpegCommand}
 */
Ffmpeg.FfmpegCommand.prototype.clone = function() {};

/**
 * @return {void}
 */
Ffmpeg.FfmpegCommand.prototype.run = function() {};

/**
 * @param {!Ffmpeg.FfmpegCommandOptions|(string|!internal.Readable)=} options_or_input
 * @param {!Ffmpeg.FfmpegCommandOptions=} options
 * @return {!Ffmpeg.FfmpegCommand}
 */
function Ffmpeg(options_or_input, options) {}

/* TODO: ExportAssignment in  */