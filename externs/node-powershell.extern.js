/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/node-powershell/index.d.ts:
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "node-powershell"
/** @const */
tsickle_declare_module.node_powershell = {};
/** @const */
tsickle_declare_module.node_powershell.NodePowershell = {};
/**
 * @record
 * @struct
 */
tsickle_declare_module.node_powershell.NodePowershell.ShellOptions = function() {};
 /** @type {boolean} */
tsickle_declare_module.node_powershell.NodePowershell.ShellOptions.prototype.debugMsg;
 /** @type {string} */
tsickle_declare_module.node_powershell.NodePowershell.ShellOptions.prototype.inputEncoding;
 /** @type {string} */
tsickle_declare_module.node_powershell.NodePowershell.ShellOptions.prototype.outputEncoding;
 /** @type {string} */
tsickle_declare_module.node_powershell.NodePowershell.ShellOptions.prototype.executionPolicy;
 /** @type {boolean} */
tsickle_declare_module.node_powershell.NodePowershell.ShellOptions.prototype.noProfile;
/**
 * @record
 * @struct
 */
tsickle_declare_module.node_powershell.NodePowershell.ShellStream = function() {};
 /** @type {!NodeJS.WritableStream} */
tsickle_declare_module.node_powershell.NodePowershell.ShellStream.prototype.stdin;
 /** @type {!NodeJS.ReadableStream} */
tsickle_declare_module.node_powershell.NodePowershell.ShellStream.prototype.stdout;
 /** @type {!NodeJS.ReadableStream} */
tsickle_declare_module.node_powershell.NodePowershell.ShellStream.prototype.err;
 /** @type {!Array<string>} */
tsickle_declare_module.node_powershell.NodePowershell.prototype.history;
 /** @type {!NodePowershell.ShellStream} */
tsickle_declare_module.node_powershell.NodePowershell.prototype.streams;

/**
 * Adds a command to the end of the pipeline of the shell object.
 * @param {string} command
 * @param {(!Array<string>|!Array<!Object<string,string>>)=} params
 * @return {!Promise<!Array<string>>} Every command currently in the pipeline.
 */
tsickle_declare_module.node_powershell.NodePowershell.prototype.addCommand = function(command, params) {};

/**
 * Runs the commands of the shell object pipeline.
 * @return {!Promise<string>} Promise with the command output.
 */
tsickle_declare_module.node_powershell.NodePowershell.prototype.invoke = function() {};

/**
 * Releases all resources used by the shell object and closes the PowerShell child_process.
 * @return {!Promise<string>} Promise with the error message.
 */
tsickle_declare_module.node_powershell.NodePowershell.prototype.dispose = function() {};

/**
 * Listens to events emitted from the shell.
 * @param {string} eventName required - Possible events:
 *  'output' - Emits when shell has an output.
 *  'err' - Emits when shell has an error.
 *  'end' - Emits when shell ends.
 * @param {function(string): void} callback required - Callback function to be called when the event emits.
 * @return {void}
 */
tsickle_declare_module.node_powershell.NodePowershell.prototype.on = function(eventName, callback) {};

/* TODO: ExportAssignment in tsickle_declare_module.node_powershell */