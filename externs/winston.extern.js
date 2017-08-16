/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/winston/index.d.ts:

/* TODO: ImportDeclaration in  */
/** @const */
var winston = {};
/**
 * @record
 * @struct
 */
winston.AbstractConfigSetLevels = function() {};

/* TODO: IndexSignature: winston */
/**
 * @record
 * @struct
 */
winston.AbstractConfigSetColors = function() {};

/* TODO: IndexSignature: winston */
/**
 * @record
 * @struct
 */
winston.AbstractConfigSet = function() {};
 /** @type {!winston.AbstractConfigSetLevels} */
winston.AbstractConfigSet.prototype.levels;
 /** @type {!winston.AbstractConfigSetColors} */
winston.AbstractConfigSet.prototype.colors;
/**
 * @extends {winston.AbstractConfigSetLevels}
 * @record
 * @struct
 */
winston.CliConfigSetLevels = function() {};
 /** @type {number} */
winston.CliConfigSetLevels.prototype.error;
 /** @type {number} */
winston.CliConfigSetLevels.prototype.warn;
 /** @type {number} */
winston.CliConfigSetLevels.prototype.help;
 /** @type {number} */
winston.CliConfigSetLevels.prototype.data;
 /** @type {number} */
winston.CliConfigSetLevels.prototype.info;
 /** @type {number} */
winston.CliConfigSetLevels.prototype.debug;
 /** @type {number} */
winston.CliConfigSetLevels.prototype.prompt;
 /** @type {number} */
winston.CliConfigSetLevels.prototype.verbose;
 /** @type {number} */
winston.CliConfigSetLevels.prototype.input;
 /** @type {number} */
winston.CliConfigSetLevels.prototype.silly;
/**
 * @extends {winston.AbstractConfigSetColors}
 * @record
 * @struct
 */
winston.CliConfigSetColors = function() {};
 /** @type {string} */
winston.CliConfigSetColors.prototype.error;
 /** @type {string} */
winston.CliConfigSetColors.prototype.warn;
 /** @type {string} */
winston.CliConfigSetColors.prototype.help;
 /** @type {string} */
winston.CliConfigSetColors.prototype.data;
 /** @type {string} */
winston.CliConfigSetColors.prototype.info;
 /** @type {string} */
winston.CliConfigSetColors.prototype.debug;
 /** @type {string} */
winston.CliConfigSetColors.prototype.prompt;
 /** @type {string} */
winston.CliConfigSetColors.prototype.verbose;
 /** @type {string} */
winston.CliConfigSetColors.prototype.input;
 /** @type {string} */
winston.CliConfigSetColors.prototype.silly;
/**
 * @extends {winston.AbstractConfigSetLevels}
 * @record
 * @struct
 */
winston.NpmConfigSetLevels = function() {};
 /** @type {number} */
winston.NpmConfigSetLevels.prototype.error;
 /** @type {number} */
winston.NpmConfigSetLevels.prototype.warn;
 /** @type {number} */
winston.NpmConfigSetLevels.prototype.info;
 /** @type {number} */
winston.NpmConfigSetLevels.prototype.verbose;
 /** @type {number} */
winston.NpmConfigSetLevels.prototype.debug;
 /** @type {number} */
winston.NpmConfigSetLevels.prototype.silly;
/**
 * @extends {winston.AbstractConfigSetColors}
 * @record
 * @struct
 */
winston.NpmConfigSetColors = function() {};
 /** @type {string} */
winston.NpmConfigSetColors.prototype.error;
 /** @type {string} */
winston.NpmConfigSetColors.prototype.warn;
 /** @type {string} */
winston.NpmConfigSetColors.prototype.info;
 /** @type {string} */
winston.NpmConfigSetColors.prototype.verbose;
 /** @type {string} */
winston.NpmConfigSetColors.prototype.debug;
 /** @type {string} */
winston.NpmConfigSetColors.prototype.silly;
/**
 * @extends {winston.AbstractConfigSetLevels}
 * @record
 * @struct
 */
winston.SyslogConfigSetLevels = function() {};
 /** @type {number} */
winston.SyslogConfigSetLevels.prototype.emerg;
 /** @type {number} */
winston.SyslogConfigSetLevels.prototype.alert;
 /** @type {number} */
winston.SyslogConfigSetLevels.prototype.crit;
 /** @type {number} */
winston.SyslogConfigSetLevels.prototype.error;
 /** @type {number} */
winston.SyslogConfigSetLevels.prototype.warning;
 /** @type {number} */
winston.SyslogConfigSetLevels.prototype.notice;
 /** @type {number} */
winston.SyslogConfigSetLevels.prototype.info;
 /** @type {number} */
winston.SyslogConfigSetLevels.prototype.debug;
/**
 * @extends {winston.AbstractConfigSetColors}
 * @record
 * @struct
 */
winston.SyslogConfigSetColors = function() {};
 /** @type {string} */
winston.SyslogConfigSetColors.prototype.emerg;
 /** @type {string} */
winston.SyslogConfigSetColors.prototype.alert;
 /** @type {string} */
winston.SyslogConfigSetColors.prototype.crit;
 /** @type {string} */
winston.SyslogConfigSetColors.prototype.error;
 /** @type {string} */
winston.SyslogConfigSetColors.prototype.warning;
 /** @type {string} */
winston.SyslogConfigSetColors.prototype.notice;
 /** @type {string} */
winston.SyslogConfigSetColors.prototype.info;
 /** @type {string} */
winston.SyslogConfigSetColors.prototype.debug;
/**
 * @record
 * @struct
 */
winston.Winston = function() {};
 /** @type {!winston.Config} */
winston.Winston.prototype.config;
 /** @type {!winston.Transports} */
winston.Winston.prototype.transports;
 /** @type {!winston.TransportStatic} */
winston.Winston.prototype.Transport;
 /** @type {!winston.LoggerStatic} */
winston.Winston.prototype.Logger;
 /** @type {!winston.ContainerStatic} */
winston.Winston.prototype.Container;
 /** @type {!winston.ContainerInstance} */
winston.Winston.prototype.loggers;
 /** @type {!winston.LoggerInstance} */
winston.Winston.prototype.default;
 /** @type {!winston.Exception} */
winston.Winston.prototype.exception;
 /** @type {boolean} */
winston.Winston.prototype.exitOnError;
 /** @type {string} */
winston.Winston.prototype.level;
 /** @type {!winston.LogMethod} */
winston.Winston.prototype.log;
 /** @type {!winston.LeveledLogMethod} */
winston.Winston.prototype.silly;
 /** @type {!winston.LeveledLogMethod} */
winston.Winston.prototype.debug;
 /** @type {!winston.LeveledLogMethod} */
winston.Winston.prototype.verbose;
 /** @type {!winston.LeveledLogMethod} */
winston.Winston.prototype.info;
 /** @type {!winston.LeveledLogMethod} */
winston.Winston.prototype.warn;
 /** @type {!winston.LeveledLogMethod} */
winston.Winston.prototype.error;

/**
 * @param {!winston.QueryOptions|function(!Error, ?): void} options_or_callback
 * @param {function(!Error, ?): void=} callback
 * @return {?}
 */
winston.Winston.prototype.query = function(options_or_callback, callback) {};

/**
 * @param {?=} options
 * @return {!NodeJS.ReadableStream}
 */
winston.Winston.prototype.stream = function(options) {};

/**
 * @param {...!winston.TransportInstance} transports
 * @return {void}
 */
winston.Winston.prototype.handleExceptions = function(transports) {};

/**
 * @param {...!winston.TransportInstance} transports
 * @return {void}
 */
winston.Winston.prototype.unhandleExceptions = function(transports) {};

/**
 * @param {!winston.TransportInstance} transport
 * @param {(!winston.ConsoleTransportOptions|!winston.DailyRotateFileTransportOptions|!winston.FileTransportOptions|!winston.HttpTransportOptions|!winston.MemoryTransportOptions|!winston.WebhookTransportOptions|!winston.WinstonModuleTransportOptions)=} options
 * @param {boolean=} created
 * @return {!winston.LoggerInstance}
 */
winston.Winston.prototype.add = function(transport, options, created) {};

/**
 * @return {void}
 */
winston.Winston.prototype.clear = function() {};

/**
 * @param {(string|!winston.TransportInstance)} transport
 * @return {!winston.LoggerInstance}
 */
winston.Winston.prototype.remove = function(transport) {};

/**
 * @return {!winston.ProfileHandler}
 */
winston.Winston.prototype.startTimer = function() {};

/**
 * @param {string} id
 * @param {string=} msg
 * @param {?=} meta
 * @param {function(!Error, string, string, ?): void=} callback
 * @return {!winston.LoggerInstance}
 */
winston.Winston.prototype.profile = function(id, msg, meta, callback) {};

/**
 * @param {!winston.AbstractConfigSetColors} target
 * @return {?}
 */
winston.Winston.prototype.addColors = function(target) {};

/**
 * @param {!winston.AbstractConfigSetLevels} target
 * @return {?}
 */
winston.Winston.prototype.setLevels = function(target) {};

/**
 * @return {!winston.LoggerInstance}
 */
winston.Winston.prototype.cli = function() {};

/**
 * @return {void}
 */
winston.Winston.prototype.close = function() {};

/**
 * @param {!winston.LoggerOptions} options
 * @return {void}
 */
winston.Winston.prototype.configure = function(options) {};

/** @typedef {string} */
winston.CLILoggingLevel;

/** @typedef {string} */
winston.NPMLoggingLevel;

/** @typedef {string} */
winston.SyslogLoggingLevel;
/**
 * @record
 * @struct
 */
winston.Config = function() {};
 /** @type {!winston.AbstractConfigSetColors} */
winston.Config.prototype.allColors;
 /** @type {{levels: !winston.CliConfigSetLevels, colors: !winston.CliConfigSetColors}} */
winston.Config.prototype.cli;
 /** @type {{levels: !winston.NpmConfigSetLevels, colors: !winston.NpmConfigSetColors}} */
winston.Config.prototype.npm;
 /** @type {{levels: !winston.SyslogConfigSetLevels, colors: !winston.SyslogConfigSetColors}} */
winston.Config.prototype.syslog;

/**
 * @param {!winston.AbstractConfigSetColors} colors
 * @return {void}
 */
winston.Config.prototype.addColors = function(colors) {};

/**
 * @param {number} level
 * @param {string=} message
 * @return {string}
 */
winston.Config.prototype.colorize = function(level, message) {};
/**
 * @record
 * @struct
 */
winston.ExceptionProcessInfo = function() {};
 /** @type {number} */
winston.ExceptionProcessInfo.prototype.pid;
 /** @type {number} */
winston.ExceptionProcessInfo.prototype.uid;
 /** @type {number} */
winston.ExceptionProcessInfo.prototype.gid;
 /** @type {string} */
winston.ExceptionProcessInfo.prototype.cwd;
 /** @type {string} */
winston.ExceptionProcessInfo.prototype.execPath;
 /** @type {string} */
winston.ExceptionProcessInfo.prototype.version;
 /** @type {string} */
winston.ExceptionProcessInfo.prototype.argv;
 /** @type {!NodeJS.MemoryUsage} */
winston.ExceptionProcessInfo.prototype.memoryUsage;
/**
 * @record
 * @struct
 */
winston.ExceptionOsInfo = function() {};
 /** @type {!Array<?>} */
winston.ExceptionOsInfo.prototype.loadavg;
 /** @type {number} */
winston.ExceptionOsInfo.prototype.uptime;
/**
 * @record
 * @struct
 */
winston.ExceptionTrace = function() {};
 /** @type {number} */
winston.ExceptionTrace.prototype.column;
 /** @type {string} */
winston.ExceptionTrace.prototype.file;

/* TODO: PropertySignature: winston."function" */
 /** @type {number} */
winston.ExceptionTrace.prototype.line;
 /** @type {string} */
winston.ExceptionTrace.prototype.method;
 /** @type {boolean} */
winston.ExceptionTrace.prototype.native;
/**
 * @record
 * @struct
 */
winston.ExceptionAllInfo = function() {};
 /** @type {!Date} */
winston.ExceptionAllInfo.prototype.date;
 /** @type {!winston.ExceptionProcessInfo} */
winston.ExceptionAllInfo.prototype.process;
 /** @type {!winston.ExceptionOsInfo} */
winston.ExceptionAllInfo.prototype.os;
 /** @type {!Array<!winston.ExceptionTrace>} */
winston.ExceptionAllInfo.prototype.trace;
 /** @type {!Array<string>} */
winston.ExceptionAllInfo.prototype.stack;
/**
 * @record
 * @struct
 */
winston.Exception = function() {};

/**
 * @param {!Error} err
 * @return {!winston.ExceptionAllInfo}
 */
winston.Exception.prototype.getAllInfo = function(err) {};

/**
 * @return {!winston.ExceptionProcessInfo}
 */
winston.Exception.prototype.getProcessInfo = function() {};

/**
 * @return {!winston.ExceptionOsInfo}
 */
winston.Exception.prototype.getOsInfo = function() {};

/**
 * @param {!Error} err
 * @return {!Array<!winston.ExceptionTrace>}
 */
winston.Exception.prototype.getTrace = function(err) {};

/** @typedef {function(string, string, ?): ?} */
winston.MetadataRewriter;

/** @typedef {function(string, string, ?): (string|{msg: ?, meta: ?})} */
winston.MetadataFilter;
/**
 * @record
 * @struct
 */
winston.LoggerStatic = function() {};

/* TODO: ConstructSignature: winston */
/**
 * @record
 * @struct
 */
winston.LoggerInstance = function() {};
 /** @type {!Array<function(string, string, ?): ?>} */
winston.LoggerInstance.prototype.rewriters;
 /** @type {!Array<function(string, string, ?): (string|{msg: ?, meta: ?})>} */
winston.LoggerInstance.prototype.filters;
 /** @type {!Object<string,!winston.TransportInstance>} */
winston.LoggerInstance.prototype.transports;
 /** @type {!winston.LogMethod} */
winston.LoggerInstance.prototype.log;
 /** @type {!winston.LeveledLogMethod} */
winston.LoggerInstance.prototype.error;
 /** @type {!winston.LeveledLogMethod} */
winston.LoggerInstance.prototype.warn;
 /** @type {!winston.LeveledLogMethod} */
winston.LoggerInstance.prototype.help;
 /** @type {!winston.LeveledLogMethod} */
winston.LoggerInstance.prototype.data;
 /** @type {!winston.LeveledLogMethod} */
winston.LoggerInstance.prototype.info;
 /** @type {!winston.LeveledLogMethod} */
winston.LoggerInstance.prototype.debug;
 /** @type {!winston.LeveledLogMethod} */
winston.LoggerInstance.prototype.prompt;
 /** @type {!winston.LeveledLogMethod} */
winston.LoggerInstance.prototype.verbose;
 /** @type {!winston.LeveledLogMethod} */
winston.LoggerInstance.prototype.input;
 /** @type {!winston.LeveledLogMethod} */
winston.LoggerInstance.prototype.silly;
 /** @type {!winston.LeveledLogMethod} */
winston.LoggerInstance.prototype.emerg;
 /** @type {!winston.LeveledLogMethod} */
winston.LoggerInstance.prototype.alert;
 /** @type {!winston.LeveledLogMethod} */
winston.LoggerInstance.prototype.crit;
 /** @type {!winston.LeveledLogMethod} */
winston.LoggerInstance.prototype.warning;
 /** @type {!winston.LeveledLogMethod} */
winston.LoggerInstance.prototype.notice;
 /** @type {string} */
winston.LoggerInstance.prototype.level;

/**
 * @param {?} target
 * @return {!winston.LoggerInstance}
 */
winston.LoggerInstance.prototype.extend = function(target) {};

/**
 * @param {!winston.QueryOptions|function(!Error, ?): void} options_or_callback
 * @param {function(!Error, ?): void=} callback
 * @return {?}
 */
winston.LoggerInstance.prototype.query = function(options_or_callback, callback) {};

/**
 * @param {?=} options
 * @return {!NodeJS.ReadableStream}
 */
winston.LoggerInstance.prototype.stream = function(options) {};

/**
 * @return {void}
 */
winston.LoggerInstance.prototype.close = function() {};

/**
 * @param {...!winston.TransportInstance} transports
 * @return {void}
 */
winston.LoggerInstance.prototype.handleExceptions = function(transports) {};

/**
 * @param {...!winston.TransportInstance} transports
 * @return {void}
 */
winston.LoggerInstance.prototype.unhandleExceptions = function(transports) {};

/**
 * @param {!winston.TransportInstance} transport
 * @param {(!winston.ConsoleTransportOptions|!winston.DailyRotateFileTransportOptions|!winston.FileTransportOptions|!winston.HttpTransportOptions|!winston.MemoryTransportOptions|!winston.WebhookTransportOptions|!winston.WinstonModuleTransportOptions)=} options
 * @param {boolean=} created
 * @return {!winston.LoggerInstance}
 */
winston.LoggerInstance.prototype.add = function(transport, options, created) {};

/**
 * @return {void}
 */
winston.LoggerInstance.prototype.clear = function() {};

/**
 * @param {!winston.TransportInstance} transport
 * @return {!winston.LoggerInstance}
 */
winston.LoggerInstance.prototype.remove = function(transport) {};

/**
 * @return {!winston.ProfileHandler}
 */
winston.LoggerInstance.prototype.startTimer = function() {};

/**
 * @param {string} id
 * @param {string=} msg
 * @param {?=} meta
 * @param {function(!Error, string, string, ?): void=} callback
 * @return {!winston.LoggerInstance}
 */
winston.LoggerInstance.prototype.profile = function(id, msg, meta, callback) {};

/**
 * @param {!winston.LoggerOptions} options
 * @return {void}
 */
winston.LoggerInstance.prototype.configure = function(options) {};

/**
 * @param {!winston.AbstractConfigSetLevels} target
 * @return {?}
 */
winston.LoggerInstance.prototype.setLevels = function(target) {};

/**
 * @return {!winston.LoggerInstance}
 */
winston.LoggerInstance.prototype.cli = function() {};
/**
 * @record
 * @struct
 */
winston.LoggerOptions = function() {};
 /** @type {!Array<!winston.TransportInstance>} */
winston.LoggerOptions.prototype.transports;
 /** @type {!Array<function(string, string, ?): ?>} */
winston.LoggerOptions.prototype.rewriters;
 /** @type {!Array<function(string, string, ?): (string|{msg: ?, meta: ?})>} */
winston.LoggerOptions.prototype.filters;
 /** @type {!Array<!winston.TransportInstance>} */
winston.LoggerOptions.prototype.exceptionHandlers;
 /** @type {boolean} */
winston.LoggerOptions.prototype.handleExceptions;
 /** @type {string} */
winston.LoggerOptions.prototype.level;
 /** @type {!winston.AbstractConfigSetLevels} */
winston.LoggerOptions.prototype.levels;
 /** @type {?} */
winston.LoggerOptions.prototype.exitOnError;

/* TODO: IndexSignature: winston */
/**
 * @record
 * @struct
 */
winston.TransportStatic = function() {};

/* TODO: ConstructSignature: winston */
/**
 * @extends {winston.TransportStatic}
 * @record
 * @struct
 */
winston.TransportInstance = function() {};
 /** @type {boolean} */
winston.TransportInstance.prototype.silent;
 /** @type {boolean} */
winston.TransportInstance.prototype.raw;
 /** @type {string} */
winston.TransportInstance.prototype.name;
 /** @type {string} */
winston.TransportInstance.prototype.level;
 /** @type {boolean} */
winston.TransportInstance.prototype.handleExceptions;
 /** @type {string} */
winston.TransportInstance.prototype.exceptionsLevel;
 /** @type {boolean} */
winston.TransportInstance.prototype.humanReadableUnhandledException;

/**
 * @param {(string|!Object)} query
 * @return {(string|!Object)}
 */
winston.TransportInstance.prototype.formatQuery = function(query) {};

/**
 * @param {?=} options
 * @return {string}
 */
winston.TransportInstance.prototype.formatter = function(options) {};

/**
 * @param {!winston.QueryOptions} options
 * @return {!winston.QueryOptions}
 */
winston.TransportInstance.prototype.normalizeQuery = function(options) {};

/**
 * @param {(!Object|!Array<?>)} results
 * @param {!Object=} options
 * @return {(!Object|!Array<?>)}
 */
winston.TransportInstance.prototype.formatResults = function(results, options) {};

/**
 * @param {string} msg
 * @param {!Object} meta
 * @param {function(): void} callback
 * @return {void}
 */
winston.TransportInstance.prototype.logException = function(msg, meta, callback) {};
/**
 * @extends {winston.TransportInstance}
 * @record
 * @struct
 */
winston.ConsoleTransportInstance = function() {};
 /** @type {boolean} */
winston.ConsoleTransportInstance.prototype.json;
 /** @type {boolean} */
winston.ConsoleTransportInstance.prototype.colorize;
 /** @type {boolean} */
winston.ConsoleTransportInstance.prototype.prettyPrint;
 /** @type {(boolean|function(): (string|boolean))} */
winston.ConsoleTransportInstance.prototype.timestamp;
 /** @type {boolean} */
winston.ConsoleTransportInstance.prototype.showLevel;
 /** @type {string} */
winston.ConsoleTransportInstance.prototype.label;
 /** @type {boolean} */
winston.ConsoleTransportInstance.prototype.logstash;
 /** @type {string} */
winston.ConsoleTransportInstance.prototype.depth;
 /** @type {boolean} */
winston.ConsoleTransportInstance.prototype.align;
 /** @type {!Object<string,!winston.LeveledLogMethod>} */
winston.ConsoleTransportInstance.prototype.stderrLevels;
 /** @type {string} */
winston.ConsoleTransportInstance.prototype.eol;

/* TODO: ConstructSignature: winston */

/**
 * @param {!Object} obj
 * @return {string}
 */
winston.ConsoleTransportInstance.prototype.stringify = function(obj) {};
/**
 * @extends {winston.TransportInstance}
 * @record
 * @struct
 */
winston.DailyRotateFileTransportInstance = function() {};

/* TODO: ConstructSignature: winston */
/**
 * @extends {winston.TransportInstance}
 * @record
 * @struct
 */
winston.FileTransportInstance = function() {};
 /** @type {boolean} */
winston.FileTransportInstance.prototype.json;
 /** @type {boolean} */
winston.FileTransportInstance.prototype.logstash;
 /** @type {boolean} */
winston.FileTransportInstance.prototype.colorize;
 /** @type {number} */
winston.FileTransportInstance.prototype.maxsize;
 /** @type {boolean} */
winston.FileTransportInstance.prototype.rotationFormat;
 /** @type {boolean} */
winston.FileTransportInstance.prototype.zippedArchive;
 /** @type {number} */
winston.FileTransportInstance.prototype.maxFiles;
 /** @type {boolean} */
winston.FileTransportInstance.prototype.prettyPrint;
 /** @type {string} */
winston.FileTransportInstance.prototype.label;
 /** @type {(boolean|function(): (string|boolean))} */
winston.FileTransportInstance.prototype.timestamp;
 /** @type {string} */
winston.FileTransportInstance.prototype.eol;
 /** @type {boolean} */
winston.FileTransportInstance.prototype.tailable;
 /** @type {string} */
winston.FileTransportInstance.prototype.depth;
 /** @type {boolean} */
winston.FileTransportInstance.prototype.showLevel;
 /** @type {number} */
winston.FileTransportInstance.prototype.maxRetries;

/* TODO: ConstructSignature: winston */

/**
 * @return {void}
 */
winston.FileTransportInstance.prototype.close = function() {};

/**
 * @param {!Object} obj
 * @return {string}
 */
winston.FileTransportInstance.prototype.stringify = function(obj) {};
/**
 * @extends {winston.TransportInstance}
 * @record
 * @struct
 */
winston.HttpTransportInstance = function() {};
 /** @type {string} */
winston.HttpTransportInstance.prototype.name;
 /** @type {boolean} */
winston.HttpTransportInstance.prototype.ssl;
 /** @type {string} */
winston.HttpTransportInstance.prototype.host;
 /** @type {number} */
winston.HttpTransportInstance.prototype.port;
 /** @type {{username: string, password: string}} */
winston.HttpTransportInstance.prototype.auth;
 /** @type {string} */
winston.HttpTransportInstance.prototype.path;
 /** @type {!Agent} */
winston.HttpTransportInstance.prototype.agent;

/* TODO: ConstructSignature: winston */
/**
 * @extends {winston.TransportInstance}
 * @record
 * @struct
 */
winston.MemoryTransportInstance = function() {};
 /** @type {!Array<!winston.GenericTextTransportOptions>} */
winston.MemoryTransportInstance.prototype.errorOutput;
 /** @type {!Array<!winston.GenericTextTransportOptions>} */
winston.MemoryTransportInstance.prototype.writeOutput;
 /** @type {boolean} */
winston.MemoryTransportInstance.prototype.json;
 /** @type {boolean} */
winston.MemoryTransportInstance.prototype.colorize;
 /** @type {boolean} */
winston.MemoryTransportInstance.prototype.prettyPrint;
 /** @type {(boolean|function(): (string|boolean))} */
winston.MemoryTransportInstance.prototype.timestamp;
 /** @type {boolean} */
winston.MemoryTransportInstance.prototype.showLevel;
 /** @type {string} */
winston.MemoryTransportInstance.prototype.label;
 /** @type {string} */
winston.MemoryTransportInstance.prototype.depth;

/* TODO: ConstructSignature: winston */

/**
 * @param {!Object} obj
 * @return {string}
 */
winston.MemoryTransportInstance.prototype.stringify = function(obj) {};
/**
 * @extends {winston.TransportInstance}
 * @record
 * @struct
 */
winston.WebhookTransportInstance = function() {};

/* TODO: ConstructSignature: winston */
/**
 * @extends {winston.TransportInstance}
 * @record
 * @struct
 */
winston.WinstonModuleTrasportInstance = function() {};

/* TODO: ConstructSignature: winston */
/**
 * @record
 * @struct
 */
winston.ContainerStatic = function() {};

/* TODO: ConstructSignature: winston */
/**
 * @extends {winston.ContainerStatic}
 * @record
 * @struct
 */
winston.ContainerInstance = function() {};
 /** @type {!winston.LoggerOptions} */
winston.ContainerInstance.prototype.options;
 /** @type {!Object<string,!winston.LoggerInstance>} */
winston.ContainerInstance.prototype.loggers;
 /** @type {!winston.LoggerOptions} */
winston.ContainerInstance.prototype.default;

/**
 * @param {string} id
 * @param {!winston.LoggerOptions=} options
 * @return {!winston.LoggerInstance}
 */
winston.ContainerInstance.prototype.get = function(id, options) {};

/**
 * @param {string} id
 * @param {!winston.LoggerOptions} options
 * @return {!winston.LoggerInstance}
 */
winston.ContainerInstance.prototype.add = function(id, options) {};

/**
 * @param {string} id
 * @return {boolean}
 */
winston.ContainerInstance.prototype.has = function(id) {};

/**
 * @param {string} id
 * @return {void}
 */
winston.ContainerInstance.prototype.close = function(id) {};
/**
 * @record
 * @struct
 */
winston.Transports = function() {};
 /** @type {!winston.FileTransportInstance} */
winston.Transports.prototype.File;
 /** @type {!winston.ConsoleTransportInstance} */
winston.Transports.prototype.Console;
 /** @type {!winston.WinstonModuleTrasportInstance} */
winston.Transports.prototype.Loggly;
 /** @type {!winston.DailyRotateFileTransportInstance} */
winston.Transports.prototype.DailyRotateFile;
 /** @type {!winston.HttpTransportInstance} */
winston.Transports.prototype.Http;
 /** @type {!winston.MemoryTransportInstance} */
winston.Transports.prototype.Memory;
 /** @type {!winston.WebhookTransportInstance} */
winston.Transports.prototype.Webhook;

/** @typedef {(!winston.ConsoleTransportOptions|!winston.DailyRotateFileTransportOptions|!winston.FileTransportOptions|!winston.HttpTransportOptions|!winston.MemoryTransportOptions|!winston.WebhookTransportOptions|!winston.WinstonModuleTransportOptions)} */
winston.TransportOptions;
/**
 * @record
 * @struct
 */
winston.GenericTransportOptions = function() {};
 /** @type {string} */
winston.GenericTransportOptions.prototype.level;
 /** @type {boolean} */
winston.GenericTransportOptions.prototype.silent;
 /** @type {boolean} */
winston.GenericTransportOptions.prototype.raw;
 /** @type {string} */
winston.GenericTransportOptions.prototype.name;
 /** @type {boolean} */
winston.GenericTransportOptions.prototype.handleExceptions;
 /** @type {string} */
winston.GenericTransportOptions.prototype.exceptionsLevel;
 /** @type {boolean} */
winston.GenericTransportOptions.prototype.humanReadableUnhandledException;

/**
 * @param {?=} options
 * @return {string}
 */
winston.GenericTransportOptions.prototype.formatter = function(options) {};
/**
 * @record
 * @struct
 */
winston.GenericTextTransportOptions = function() {};
 /** @type {boolean} */
winston.GenericTextTransportOptions.prototype.json;
 /** @type {boolean} */
winston.GenericTextTransportOptions.prototype.colorize;
 /** @type {?} */
winston.GenericTextTransportOptions.prototype.colors;
 /** @type {boolean} */
winston.GenericTextTransportOptions.prototype.prettyPrint;
 /** @type {boolean} */
winston.GenericTextTransportOptions.prototype.showLevel;
 /** @type {string} */
winston.GenericTextTransportOptions.prototype.label;
 /** @type {number} */
winston.GenericTextTransportOptions.prototype.depth;
 /** @type {(boolean|function(): (string|boolean))} */
winston.GenericTextTransportOptions.prototype.timestamp;

/**
 * @param {?} obj
 * @return {string}
 */
winston.GenericTextTransportOptions.prototype.stringify = function(obj) {};
/**
 * @record
 * @struct
 */
winston.GenericNetworkTransportOptions = function() {};
 /** @type {string} */
winston.GenericNetworkTransportOptions.prototype.host;
 /** @type {number} */
winston.GenericNetworkTransportOptions.prototype.port;
 /** @type {{username: string, password: string}} */
winston.GenericNetworkTransportOptions.prototype.auth;
 /** @type {string} */
winston.GenericNetworkTransportOptions.prototype.path;
/**
 * @extends {winston.GenericTransportOptions}
 * @extends {winston.GenericTextTransportOptions}
 * @record
 * @struct
 */
winston.ConsoleTransportOptions = function() {};
 /** @type {boolean} */
winston.ConsoleTransportOptions.prototype.logstash;
 /** @type {boolean} */
winston.ConsoleTransportOptions.prototype.debugStdout;
/**
 * @extends {winston.GenericTransportOptions}
 * @extends {winston.GenericTextTransportOptions}
 * @record
 * @struct
 */
winston.DailyRotateFileTransportOptions = function() {};
 /** @type {boolean} */
winston.DailyRotateFileTransportOptions.prototype.logstash;
 /** @type {number} */
winston.DailyRotateFileTransportOptions.prototype.maxsize;
 /** @type {number} */
winston.DailyRotateFileTransportOptions.prototype.maxFiles;
 /** @type {string} */
winston.DailyRotateFileTransportOptions.prototype.eol;
 /** @type {number} */
winston.DailyRotateFileTransportOptions.prototype.maxRetries;
 /** @type {string} */
winston.DailyRotateFileTransportOptions.prototype.datePattern;
 /** @type {string} */
winston.DailyRotateFileTransportOptions.prototype.filename;
 /** @type {string} */
winston.DailyRotateFileTransportOptions.prototype.dirname;
 /** @type {{flags: string, highWaterMark: number}} */
winston.DailyRotateFileTransportOptions.prototype.options;
 /** @type {!NodeJS.WritableStream} */
winston.DailyRotateFileTransportOptions.prototype.stream;
/**
 * @extends {winston.GenericTransportOptions}
 * @extends {winston.GenericTextTransportOptions}
 * @record
 * @struct
 */
winston.FileTransportOptions = function() {};
 /** @type {boolean} */
winston.FileTransportOptions.prototype.logstash;
 /** @type {number} */
winston.FileTransportOptions.prototype.maxsize;
 /** @type {boolean} */
winston.FileTransportOptions.prototype.rotationFormat;
 /** @type {boolean} */
winston.FileTransportOptions.prototype.zippedArchive;
 /** @type {number} */
winston.FileTransportOptions.prototype.maxFiles;
 /** @type {string} */
winston.FileTransportOptions.prototype.eol;
 /** @type {boolean} */
winston.FileTransportOptions.prototype.tailable;
 /** @type {number} */
winston.FileTransportOptions.prototype.maxRetries;
 /** @type {string} */
winston.FileTransportOptions.prototype.filename;
 /** @type {string} */
winston.FileTransportOptions.prototype.dirname;
 /** @type {{flags: string, highWaterMark: number}} */
winston.FileTransportOptions.prototype.options;
 /** @type {!NodeJS.WritableStream} */
winston.FileTransportOptions.prototype.stream;
/**
 * @extends {winston.GenericTransportOptions}
 * @extends {winston.GenericNetworkTransportOptions}
 * @record
 * @struct
 */
winston.HttpTransportOptions = function() {};
 /** @type {boolean} */
winston.HttpTransportOptions.prototype.ssl;
/**
 * @extends {winston.GenericTransportOptions}
 * @extends {winston.GenericTextTransportOptions}
 * @record
 * @struct
 */
winston.MemoryTransportOptions = function() {};
/**
 * @extends {winston.GenericTransportOptions}
 * @extends {winston.GenericNetworkTransportOptions}
 * @record
 * @struct
 */
winston.WebhookTransportOptions = function() {};
 /** @type {string} */
winston.WebhookTransportOptions.prototype.method;
 /** @type {{key: ?, cert: ?, ca: ?}} */
winston.WebhookTransportOptions.prototype.ssl;
/**
 * @extends {winston.GenericTransportOptions}
 * @record
 * @struct
 */
winston.WinstonModuleTransportOptions = function() {};

/* TODO: IndexSignature: winston */
/**
 * @record
 * @struct
 */
winston.QueryOptions = function() {};
 /** @type {number} */
winston.QueryOptions.prototype.rows;
 /** @type {number} */
winston.QueryOptions.prototype.limit;
 /** @type {number} */
winston.QueryOptions.prototype.start;
 /** @type {!Date} */
winston.QueryOptions.prototype.from;
 /** @type {!Date} */
winston.QueryOptions.prototype.until;
 /** @type {string} */
winston.QueryOptions.prototype.order;
 /** @type {?} */
winston.QueryOptions.prototype.fields;
/**
 * @record
 * @struct
 */
winston.ProfileHandler = function() {};
 /** @type {!winston.LoggerInstance} */
winston.ProfileHandler.prototype.logger;
 /** @type {!Date} */
winston.ProfileHandler.prototype.start;

/**
 * @param {string} msg
 * @return {!winston.LoggerInstance}
 */
winston.ProfileHandler.prototype.done = function(msg) {};
/**
 * @record
 * @struct
 */
winston.LogMethod = function() {};

/* TODO: CallSignature: winston */

/* TODO: CallSignature: winston */

/* TODO: CallSignature: winston */
/**
 * @record
 * @struct
 */
winston.LeveledLogMethod = function() {};

/* TODO: CallSignature: winston */

/* TODO: CallSignature: winston */

/* TODO: CallSignature: winston */

/** @typedef {function(?, string, string, ?): void} */
winston.LogCallback;
 /** @type {!winston.Winston} */
var winston;

/* TODO: ExportAssignment in  */