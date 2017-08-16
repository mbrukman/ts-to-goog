/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/portscanner/index.d.ts:

/** @typedef {string} */
var Status;

/** @typedef {?} */
var PortCallback;

/** @typedef {?} */
var StatusCallback;
/**
 * @record
 * @struct
 */
function Options() {}
 /** @type {string} */
Options.prototype.host;
 /** @type {number} */
Options.prototype.timeout;

/**
 * @param {number} port
 * @param {string|?=} host_or_opts_or_checkPortCallback
 * @param {?=} opts_or_checkPortCallback
 * @param {?=} checkPortCallback
 * @return {!Promise<string>|void}
 */
function checkPortStatus(port, host_or_opts_or_checkPortCallback, opts_or_checkPortCallback, checkPortCallback) {}

/**
 * @param {!Array<number>|number} portList_or_startPort
 * @param {?|string|number=} findPortCallback_or_host_or_endPort
 * @param {string|?=} host_or_findPortCallback
 * @param {?=} findPortCallback
 * @return {!Promise<number>|void}
 */
function findAPortNotInUse(portList_or_startPort, findPortCallback_or_host_or_endPort, host_or_findPortCallback, findPortCallback) {}

/**
 * @param {!Array<number>|number} portList_or_startPort
 * @param {?|string|number=} findPortCallback_or_host_or_endPort
 * @param {string|?=} host_or_findPortCallback
 * @param {?=} findPortCallback
 * @return {!Promise<number>|void}
 */
function findAPortInUse(portList_or_startPort, findPortCallback_or_host_or_endPort, host_or_findPortCallback, findPortCallback) {}
