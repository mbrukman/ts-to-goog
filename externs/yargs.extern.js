/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/yargs/index.d.ts:
/** @const */
var yargs = {};
/**
 * @record
 * @struct
 */
yargs.Argv = function() {};
 /** @type {!yargs.Arguments} */
yargs.Argv.prototype.argv;

/* TODO: CallSignature: yargs */

/**
 * @param {(string|!Array<string>)} args
 * @param {!Object=} context
 * @param {function(!Error, !yargs.Arguments, string): void=} parseCallback
 * @return {!yargs.Arguments}
 */
yargs.Argv.prototype.parse = function(args, context, parseCallback) {};

/**
 * @return {!yargs.Argv}
 */
yargs.Argv.prototype.reset = function() {};

/**
 * @param {string=} loc
 * @return {string|!yargs.Argv}
 */
yargs.Argv.prototype.locale = function(loc) {};

/**
 * @param {boolean} detect
 * @return {!yargs.Argv}
 */
yargs.Argv.prototype.detectLocale = function(detect) {};

/**
 * @return {number}
 */
yargs.Argv.prototype.terminalWidth = function() {};

/**
 * @param {string|!Array<string>|!Object<string,(string|!Array<string>)>} shortName_or_shortNames_or_aliases
 * @param {(string|!Array<string>)|string=} longName
 * @return {!yargs.Argv}
 */
yargs.Argv.prototype.alias = function(shortName_or_shortNames_or_aliases, longName) {};

/**
 * @param {string|!Array<string>} key_or_keys
 * @return {!yargs.Argv}
 */
yargs.Argv.prototype.array = function(key_or_keys) {};

/**
 * @param {string|!Object<string,?>} key_or_defaults
 * @param {?|string=} value_or_description
 * @param {string=} description
 * @return {!yargs.Argv}
 */
yargs.Argv.prototype.default = function(key_or_defaults, value_or_description, description) {};

/**
 * @deprecated since version 6.6.0
 * @param {string|!Array<string>|number} key_or_keys_or_positionals
 * @param {string|boolean|number=} msg_or_required_or_max
 * @param {string=} msg
 * @return {!yargs.Argv}
 */
yargs.Argv.prototype.demand = function(key_or_keys_or_positionals, msg_or_required_or_max, msg) {};

/**
 * @param {number} min
 * @param {string|number=} minMsg_or_max
 * @param {string=} minMsg
 * @param {string=} maxMsg
 * @return {!yargs.Argv}
 */
yargs.Argv.prototype.demandCommand = function(min, minMsg_or_max, minMsg, maxMsg) {};

/**
 * @param {(string|!Array<string>)} key
 * @param {string|boolean=} msg_or_demand
 * @return {!yargs.Argv}
 */
yargs.Argv.prototype.demandOption = function(key, msg_or_demand) {};

/**
 * @deprecated since version 6.6.0
 * @param {string|!Array<number>|number} key_or_keys_or_positionals
 * @param {string|boolean} msg_or_required
 * @return {!yargs.Argv}
 */
yargs.Argv.prototype.require = function(key_or_keys_or_positionals, msg_or_required) {};

/**
 * @deprecated since version 6.6.0
 * @param {string|!Array<number>|number} key_or_keys_or_positionals
 * @param {string|boolean} msg_or_required
 * @return {!yargs.Argv}
 */
yargs.Argv.prototype.required = function(key_or_keys_or_positionals, msg_or_required) {};

/**
 * @param {string|!Array<string>} key_or_keys
 * @return {!yargs.Argv}
 */
yargs.Argv.prototype.requiresArg = function(key_or_keys) {};

/**
 * @param {(string|!Array<string>)|!Object<string,string>} key_or_descriptions
 * @param {string=} description
 * @return {!yargs.Argv}
 */
yargs.Argv.prototype.describe = function(key_or_descriptions, description) {};

/**
 * @param {string|!Object<string,!yargs.Options>} key_or_options
 * @param {!yargs.Options=} options
 * @return {!yargs.Argv}
 */
yargs.Argv.prototype.option = function(key_or_options, options) {};

/**
 * @param {string|!Object<string,!yargs.Options>} key_or_options
 * @param {!yargs.Options=} options
 * @return {!yargs.Argv}
 */
yargs.Argv.prototype.options = function(key_or_options, options) {};

/**
 * @param {string|!Object<string,!yargs.Options>=} message_or_options
 * @param {!Object<string,!yargs.Options>=} options
 * @return {!yargs.Argv}
 */
yargs.Argv.prototype.usage = function(message_or_options, options) {};

/**
 * @param {(string|!Array<string>)|!yargs.CommandModule} command_or_module
 * @param {string=} description
 * @param {function(!yargs.Argv): !yargs.Argv|!Object<string,!yargs.Options>|!yargs.CommandModule=} builder_or_module
 * @param {function(!yargs.Arguments): void=} handler
 * @return {!yargs.Argv}
 */
yargs.Argv.prototype.command = function(command_or_module, description, builder_or_module, handler) {};

/**
 * @param {string} dir
 * @param {!yargs.RequireDirectoryOptions=} opts
 * @return {!yargs.Argv}
 */
yargs.Argv.prototype.commandDir = function(dir, opts) {};

/**
 * @param {string=} cmd
 * @param {function(string, ?, function(!Array<string>): void): void|function(string, ?): !Array<string>|string=} fn_or_description
 * @param {function(string, ?, function(!Array<string>): void): void|function(string, ?): !Array<string>=} fn
 * @return {!yargs.Argv}
 */
yargs.Argv.prototype.completion = function(cmd, fn_or_description, fn) {};

/**
 * @param {string} command
 * @param {string} description
 * @return {!yargs.Argv}
 */
yargs.Argv.prototype.example = function(command, description) {};

/**
 * @param {function(!yargs.Arguments, !Object<string,string>): ?} func
 * @param {boolean=} global
 * @return {!yargs.Argv}
 */
yargs.Argv.prototype.check = function(func, global) {};

/**
 * @param {string|!Array<string>} key_or_keys
 * @return {!yargs.Argv}
 */
yargs.Argv.prototype.boolean = function(key_or_keys) {};

/**
 * @param {string|!Array<string>} key_or_keys
 * @return {!yargs.Argv}
 */
yargs.Argv.prototype.string = function(key_or_keys) {};

/**
 * @param {string|!Array<string>} key_or_keys
 * @return {!yargs.Argv}
 */
yargs.Argv.prototype.number = function(key_or_keys) {};

/**
 * @param {!Object<string,!Array<(string|boolean)>>|string} choices_or_key
 * @param {!Array<(string|boolean)>=} values
 * @return {!yargs.Argv}
 */
yargs.Argv.prototype.choices = function(choices_or_key, values) {};

/**
 * @param {!Object|string|!Array<string>=} explicitConfigurationObject_or_key_or_keys
 * @param {string|function(string): !Object=} description_or_parseFn
 * @param {function(string): !Object=} parseFn
 * @return {!yargs.Argv}
 */
yargs.Argv.prototype.config = function(explicitConfigurationObject_or_key_or_keys, description_or_parseFn, parseFn) {};

/**
 * @param {string|!Object<string,string>} key_or_conflicts
 * @param {string=} value
 * @return {!yargs.Argv}
 */
yargs.Argv.prototype.conflicts = function(key_or_conflicts, value) {};

/**
 * @param {number} columns
 * @return {!yargs.Argv}
 */
yargs.Argv.prototype.wrap = function(columns) {};

/**
 * @return {!yargs.Argv}
 */
yargs.Argv.prototype.strict = function() {};

/**
 * @param {boolean|string=} enableExplicit_or_option
 * @param {boolean|string=} enableExplicit_or_description
 * @param {boolean=} enableExplicit
 * @return {!yargs.Argv}
 */
yargs.Argv.prototype.help = function(enableExplicit_or_option, enableExplicit_or_description, enableExplicit) {};

/**
 * @param {string|boolean=} prefix_or_enable
 * @return {!yargs.Argv}
 */
yargs.Argv.prototype.env = function(prefix_or_enable) {};

/**
 * @param {string} msg
 * @return {!yargs.Argv}
 */
yargs.Argv.prototype.epilog = function(msg) {};

/**
 * @param {string} msg
 * @return {!yargs.Argv}
 */
yargs.Argv.prototype.epilogue = function(msg) {};

/**
 * @param {string|function(): string=} version
 * @param {string=} option
 * @param {string=} description
 * @return {!yargs.Argv}
 */
yargs.Argv.prototype.version = function(version, option, description) {};

/**
 * @param {boolean} enable
 * @param {string=} message
 * @return {!yargs.Argv}
 */
yargs.Argv.prototype.showHelpOnFail = function(enable, message) {};

/**
 * @param {string=} consoleLevel
 * @return {!yargs.Argv}
 */
yargs.Argv.prototype.showHelp = function(consoleLevel) {};

/**
 * @param {boolean} enabled
 * @return {!yargs.Argv}
 */
yargs.Argv.prototype.exitProcess = function(enabled) {};

/**
 * @param {string|!Array<string>} key_or_keys
 * @return {!yargs.Argv}
 */
yargs.Argv.prototype.global = function(key_or_keys) {};

/**
 * @param {string|!Array<string>} key_or_keys
 * @param {string} groupName
 * @return {!yargs.Argv}
 */
yargs.Argv.prototype.group = function(key_or_keys, groupName) {};

/**
 * @param {string|!Object<string,number>} key_or_nargs
 * @param {number=} count
 * @return {!yargs.Argv}
 */
yargs.Argv.prototype.nargs = function(key_or_nargs, count) {};

/**
 * @param {string|!Array<string>} key_or_keys
 * @return {!yargs.Argv}
 */
yargs.Argv.prototype.normalize = function(key_or_keys) {};

/**
 * @param {string|!Object<string,string>} key_or_implies
 * @param {string=} value
 * @return {!yargs.Argv}
 */
yargs.Argv.prototype.implies = function(key_or_implies, value) {};

/**
 * @param {string|!Array<string>} key_or_keys
 * @return {!yargs.Argv}
 */
yargs.Argv.prototype.count = function(key_or_keys) {};

/**
 * @param {function(string, !Error): ?} func
 * @return {!yargs.Argv}
 */
yargs.Argv.prototype.fail = function(func) {};

/**
 * @template T, U
 * @param {(string|!Array<string>)|!Object<string,function(T): U>} key_or_opts
 * @param {function(T): U=} func
 * @return {!yargs.Argv}
 */
yargs.Argv.prototype.coerce = function(key_or_opts, func) {};

/**
 * @param {!Array<string>} args
 * @param {function(!Array<string>): void} done
 * @return {!yargs.Argv}
 */
yargs.Argv.prototype.getCompletion = function(args, done) {};

/**
 * @param {string|!Array<string>} key_or_keys
 * @param {string=} cwd
 * @return {!yargs.Argv}
 */
yargs.Argv.prototype.pkgConf = function(key_or_keys, cwd) {};

/**
 * @return {!yargs.Argv}
 */
yargs.Argv.prototype.recommendCommands = function() {};

/**
 * @return {!yargs.Argv}
 */
yargs.Argv.prototype.showCompletionScript = function() {};

/**
 * @param {string|!Array<string>} key_or_keys
 * @return {!yargs.Argv}
 */
yargs.Argv.prototype.skipValidation = function(key_or_keys) {};

/**
 * @param {!Object<string,string>} obj
 * @return {!yargs.Argv}
 */
yargs.Argv.prototype.updateLocale = function(obj) {};

/**
 * @param {!Object<string,string>} obj
 * @return {!yargs.Argv}
 */
yargs.Argv.prototype.updateStrings = function(obj) {};
/**
 * @record
 * @struct
 */
yargs.Arguments = function() {};
 /** @type {!Array<string>} */
yargs.Arguments.prototype._;
 /** @type {string} */
yargs.Arguments.prototype.$0;

/* TODO: IndexSignature: yargs */
/**
 * @record
 * @struct
 */
yargs.RequireDirectoryOptions = function() {};
 /** @type {boolean} */
yargs.RequireDirectoryOptions.prototype.recurse;
 /** @type {!Array<string>} */
yargs.RequireDirectoryOptions.prototype.extensions;
 /** @type {function(?, string, string): ?} */
yargs.RequireDirectoryOptions.prototype.visit;
 /** @type {(!RegExp|function(string): boolean)} */
yargs.RequireDirectoryOptions.prototype.include;
 /** @type {(!RegExp|function(string): boolean)} */
yargs.RequireDirectoryOptions.prototype.exclude;
/**
 * @record
 * @struct
 */
yargs.Options = function() {};
 /** @type {(string|!Array<string>)} */
yargs.Options.prototype.alias;
 /** @type {boolean} */
yargs.Options.prototype.array;
 /** @type {boolean} */
yargs.Options.prototype.boolean;
 /** @type {!Array<(string|boolean)>} */
yargs.Options.prototype.choices;
 /** @type {function(?): ?} */
yargs.Options.prototype.coerce;
 /** @type {boolean} */
yargs.Options.prototype.config;
 /** @type {function(string): !Object} */
yargs.Options.prototype.configParser;
 /** @type {(string|!Object)} */
yargs.Options.prototype.conflicts;
 /** @type {boolean} */
yargs.Options.prototype.count;
 /** @type {?} */
yargs.Options.prototype.default;
 /** @type {string} */
yargs.Options.prototype.defaultDescription;
 /** @type {(string|boolean)} */
yargs.Options.prototype.demand;
 /** @type {(string|boolean)} */
yargs.Options.prototype.demandOption;
 /** @type {string} */
yargs.Options.prototype.desc;
 /** @type {string} */
yargs.Options.prototype.describe;
 /** @type {string} */
yargs.Options.prototype.description;
 /** @type {boolean} */
yargs.Options.prototype.global;
 /** @type {string} */
yargs.Options.prototype.group;
 /** @type {(string|!Object)} */
yargs.Options.prototype.implies;
 /** @type {number} */
yargs.Options.prototype.nargs;
 /** @type {boolean} */
yargs.Options.prototype.normalize;
 /** @type {boolean} */
yargs.Options.prototype.number;
 /** @type {(string|boolean)} */
yargs.Options.prototype.require;
 /** @type {(string|boolean)} */
yargs.Options.prototype.required;
 /** @type {(string|boolean)} */
yargs.Options.prototype.requiresArg;
 /** @type {boolean} */
yargs.Options.prototype.skipValidation;
 /** @type {boolean} */
yargs.Options.prototype.string;
 /** @type {string} */
yargs.Options.prototype.type;
/**
 * @record
 * @struct
 */
yargs.CommandModule = function() {};
 /** @type {(string|!Array<string>)} */
yargs.CommandModule.prototype.aliases;
 /** @type {(!Object<string,!yargs.Options>|function(!yargs.Argv): !yargs.Argv)} */
yargs.CommandModule.prototype.builder;
 /** @type {(string|!Array<string>)} */
yargs.CommandModule.prototype.command;
 /** @type {(string|boolean)} */
yargs.CommandModule.prototype.describe;
 /** @type {function(?): void} */
yargs.CommandModule.prototype.handler;

/** @typedef {function(!Error, !yargs.Arguments, string): void} */
yargs.ParseCallback;

/** @typedef {(!Object<string,!yargs.Options>|function(!yargs.Argv): !yargs.Argv)} */
yargs.CommandBuilder;

/** @typedef {function(string, ?): !Array<string>} */
yargs.SyncCompletionFunction;

/** @typedef {function(string, ?, function(!Array<string>): void): void} */
yargs.AsyncCompletionFunction;

/** @typedef {(string|boolean)} */
yargs.Choice;

/** @typedef {!Array<(string|boolean)>} */
yargs.Choices;
 /** @type {!yargs.Argv} */
var yargs;

/* TODO: ExportAssignment in  */
