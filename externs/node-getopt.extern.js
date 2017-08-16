/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/node-getopt/index.d.ts:
/**
 * @record
 * @struct
 */
function OptionMap() {}

/* TODO: IndexSignature:  */

/**
 * @constructor
 * @struct
 * @param {!Array<string>} argv
 * @param {?} options
 */
function ParsedOption(argv, options) {}
 /** @type {!Array<string>} */
ParsedOption.prototype.argv;
 /** @type {?} */
ParsedOption.prototype.options;

/**
 * @return {boolean}
 */
ParsedOption.prototype.empty = function() {};
/**
 * @record
 * @struct
 */
function EventCallback() {}

/* TODO: CallSignature:  */
/**
 * @record
 * @struct
 */
function ErrorFunc() {}

/* TODO: CallSignature:  */
/**
 * @record
 * @struct
 */
function OptionConfigurationArray() {}

/* TODO: IndexSignature:  */

/**
 * @constructor
 * @struct
 * options is a set of option. each option contains 3 fields.
 *    [short_name, long_name_with_definition, comment]
 *    Definition:
 *    * '=ARG':   has argument
 *    * '[=ARG]': has argument but optional
 *    * '+':      multiple option supported
 * 
 *    ARG can be replaced by any word.
 * @param {!Array<?>} options
 */
function Getopt(options) {}
 /** @type {boolean} */
Getopt.HAS_ARGUMENT;
 /** @type {boolean} */
Getopt.NO_ARGUMENT;
 /** @type {boolean} */
Getopt.MULTI_SUPPORTED;
 /** @type {boolean} */
Getopt.SINGLE_ONLY;
 /** @type {string} */
Getopt.VERSION;

/**
 * after parsing, trigger the action if optionName is found.
 * the 'this' in action will be the instance of Getopt.
 * @param {string} name
 * @param {?} cb
 * @return {!Getopt}
 */
Getopt.prototype.on = function(name, cb) {};

/**
 * @param {string} name
 * @param {?} cb
 * @return {!Getopt}
 */
Getopt.prototype.emit = function(name, cb) {};

/**
 * parse argv
 * 
 * Returns: {argv: '...', options: {...}}
 * 
 * @param {!Array<string>} argv
 * @return {!ParsedOption}
 */
Getopt.prototype.parse = function(argv) {};

/**
 * alias of parse(process.argv.slice(2))
 * @return {!ParsedOption}
 */
Getopt.prototype.parse_system = function() {};

/**
 * @return {!ParsedOption}
 */
Getopt.prototype.parseSystem = function() {};

/**
 * Set help template. the placeholders will be replaced by getopt.
 * 
 * Placeholders:
 *    * [[OPTIONS]] - The options list
 * 
 * Returns: String
 * @param {string} help
 * @return {!Getopt}
 */
Getopt.prototype.setHelp = function(help) {};

/**
 * console.info(getopt.getHelp());
 * @return {!Getopt}
 */
Getopt.prototype.showHelp = function() {};

/**
 * Get the help generated.
 * @return {string}
 */
Getopt.prototype.getHelp = function() {};

/**
 * set help template to HELP if HELP is not empty.
 * bind 'help' option to default action, show help and exit with 0.
 * @param {string=} help
 * @return {!Getopt}
 */
Getopt.prototype.bindHelp = function(help) {};

/**
 * @return {string}
 */
Getopt.prototype.getVersion = function() {};

/**
 * @return {string}
 */
Getopt.getVersion = function() {};

/**
 * when parse failed callback will be trigger. default is display error message and exit with 1.
 * @param {?} errorFunc
 * @return {!Getopt}
 */
Getopt.prototype.error = function(errorFunc) {};

/**
 * equals new Getopt(options)
 * @param {!Array<!Array<string>>} options
 * @return {!Getopt}
 */
Getopt.create = function(options) {};

/* TODO: ExportAssignment in  */