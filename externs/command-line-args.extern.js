/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/command-line-args/index.d.ts:

/**
 * Returns an object containing all options set on the command line. By default it parses the global  [`process.argv`](https://nodejs.org/api/process.html#process_process_argv) array.
 * 
 * By default, an exception is thrown if the user sets an unknown option (one without a valid [definition](#exp_module_definition--OptionDefinition)). To enable __partial parsing__, invoke `commandLineArgs` with the `partial` option - all unknown arguments will be returned in the `_unknown` property.
 * 
 * 
 * @throws `UNKNOWN_OPTION` if `options.partial` is false and the user set an undefined option
 * @throws `NAME_MISSING` if an option definition is missing the required `name` property
 * @throws `INVALID_TYPE` if an option definition has a `type` value that's not a function
 * @throws `INVALID_ALIAS` if an alias is numeric, a hyphen or a length other than 1
 * @throws `DUPLICATE_NAME` if an option definition name was used more than once
 * @throws `DUPLICATE_ALIAS` if an option definition alias was used more than once
 * @throws `DUPLICATE_DEFAULT_OPTION` if more than one option definition has `defaultOption: true`
 * \@alias module:command-line-args
 * @param {!Array<!commandLineArgs.OptionDefinition>} optionDefinitions
 * @param {!commandLineArgs.Options=} options
 * @return {?}
 */
function commandLineArgs(optionDefinitions, options) {}
/**
 * @record
 * @struct
 */
commandLineArgs.OptionDefinition = function() {};
 /** @type {string} */
commandLineArgs.OptionDefinition.prototype.name;
 /** @type {function(string): ?} */
commandLineArgs.OptionDefinition.prototype.type;
 /** @type {string} */
commandLineArgs.OptionDefinition.prototype.alias;
 /** @type {boolean} */
commandLineArgs.OptionDefinition.prototype.multiple;
 /** @type {boolean} */
commandLineArgs.OptionDefinition.prototype.defaultOption;
 /** @type {?} */
commandLineArgs.OptionDefinition.prototype.defaultValue;
 /** @type {(string|!Array<string>)} */
commandLineArgs.OptionDefinition.prototype.group;
/**
 * @record
 * @struct
 */
commandLineArgs.Options = function() {};
 /** @type {!Array<string>} */
commandLineArgs.Options.prototype.argv;
 /** @type {boolean} */
commandLineArgs.Options.prototype.partial;

/* TODO: ExportAssignment in  */