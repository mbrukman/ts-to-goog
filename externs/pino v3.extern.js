/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/pino v3/index.d.ts:

/* TODO: ImportEqualsDeclaration in  */

/**
 * @param {(!P.LoggerOptions|!internal.Writable|!internal.Duplex|!internal.Transform)|!P.LoggerOptions=} optionsOrStream_or_options
 * @param {(!internal.Writable|!internal.Duplex|!internal.Transform)=} stream
 * @return {!P.Logger}
 */
function P(optionsOrStream_or_options, stream) {}

/**
 * @param {{timeTransOnly: boolean, levelFirst: boolean, formatter: function(!P.IPinoLog): string}=} opts
 * @return {!internal.Transform}
 */
P.pretty = function(opts) {};

/** @typedef {string} */
P.Level;
/**
 * @record
 * @struct
 */
P.Headers = function() {};

/* TODO: IndexSignature: P */
/**
 * @record
 * @struct
 */
P.IPinoLog = function() {};
 /** @type {number} */
P.IPinoLog.prototype.pid;
 /** @type {string} */
P.IPinoLog.prototype.hostname;
 /** @type {number} */
P.IPinoLog.prototype.level;
 /** @type {string} */
P.IPinoLog.prototype.time;
 /** @type {string} */
P.IPinoLog.prototype.msg;
 /** @type {number} */
P.IPinoLog.prototype.v;
/**
 * @record
 * @struct
 */
P.LevelLabelsToValues = function() {};

/* TODO: IndexSignature: P */
/**
 * @record
 * @struct
 */
P.LevelValuesToLabels = function() {};

/* TODO: IndexSignature: P */
/**
 * @record
 * @struct
 */
P.Serializers = function() {};

/**
 * @param {?} req
 * @return {?}
 */
P.Serializers.prototype.req = function(req) {};

/**
 * @param {?} res
 * @return {?}
 */
P.Serializers.prototype.res = function(res) {};

/**
 * @param {!Error} error
 * @return {?}
 */
P.Serializers.prototype.err = function(error) {};
/**
 * @record
 * @struct
 */
P.LoggerOptions = function() {};
 /** @type {boolean} */
P.LoggerOptions.prototype.safe;
 /** @type {string} */
P.LoggerOptions.prototype.name;
 /** @type {!P.Serializers} */
P.LoggerOptions.prototype.serializers;
 /** @type {boolean} */
P.LoggerOptions.prototype.slowtime;
 /** @type {boolean} */
P.LoggerOptions.prototype.extreme;
 /** @type {boolean} */
P.LoggerOptions.prototype.enabled;
 /** @type {string} */
P.LoggerOptions.prototype.level;
 /** @type {number} */
P.LoggerOptions.prototype.levelVal;
/**
 * @record
 * @struct
 */
P.Pino = function() {};

/* TODO: CallSignature: P */

/* TODO: CallSignature: P */
 /** @type {{values: !P.LevelLabelsToValues, labels: !P.LevelValuesToLabels}} */
P.Pino.prototype.levels;
 /** @type {number} */
P.Pino.prototype.LOG_VERSION;

/** @typedef {function(string, number, string, number): void} */
P.LevelChangeEventListener;

/** @typedef {string} */
P.LevelChangeEvent;
/**
 * @record
 * @struct
 */
P.Logger = function() {};
 /** @type {string} */
P.Logger.prototype.level;
 /** @type {number} */
P.Logger.prototype.levelVal;
 /** @type {{values: !P.LevelLabelsToValues, labels: !P.LevelValuesToLabels}} */
P.Logger.prototype.levels;
 /** @type {number} */
P.Logger.prototype.LOG_VERSION;
 /** @type {!P.Serializers} */
P.Logger.prototype.stdSerializers;

/**
 * @param {!Object} bindings
 * @return {!P.Logger}
 */
P.Logger.prototype.child = function(bindings) {};

/**
 * @param {string} event
 * @param {function(string, number, string, number): void} listener
 * @return {void}
 */
P.Logger.prototype.on = function(event, listener) {};

/**
 * @param {string|!Object} msg_or_obj
 * @param {...?|string=} args_or_msg
 * @return {void}
 */
P.Logger.prototype.fatal = function(msg_or_obj, args_or_msg) {};

/**
 * @param {string|!Object} msg_or_obj
 * @param {...?|string=} args_or_msg
 * @return {void}
 */
P.Logger.prototype.error = function(msg_or_obj, args_or_msg) {};

/**
 * @param {string|!Object} msg_or_obj
 * @param {...?|string=} args_or_msg
 * @return {void}
 */
P.Logger.prototype.warn = function(msg_or_obj, args_or_msg) {};

/**
 * @param {string|!Object} msg_or_obj
 * @param {...?|string=} args_or_msg
 * @return {void}
 */
P.Logger.prototype.info = function(msg_or_obj, args_or_msg) {};

/**
 * @param {string|!Object} msg_or_obj
 * @param {...?|string=} args_or_msg
 * @return {void}
 */
P.Logger.prototype.debug = function(msg_or_obj, args_or_msg) {};

/**
 * @param {string|!Object} msg_or_obj
 * @param {...?|string=} args_or_msg
 * @return {void}
 */
P.Logger.prototype.trace = function(msg_or_obj, args_or_msg) {};

/* TODO: ExportAssignment in  */