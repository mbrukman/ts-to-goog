/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/nanomsg/index.d.ts:
/**
 * @record
 * @struct
 */
function Options() {}
 /** @type {boolean} */
Options.prototype.raw;
 /** @type {boolean} */
Options.prototype.tcpnodelay;
 /** @type {number} */
Options.prototype.linger;
 /** @type {number} */
Options.prototype.sndbuf;
 /** @type {number} */
Options.prototype.rcvbuf;
 /** @type {number} */
Options.prototype.sndtimeo;
 /** @type {number} */
Options.prototype.rcvtimeo;
 /** @type {number} */
Options.prototype.reconn;
 /** @type {number} */
Options.prototype.maxreconn;
 /** @type {number} */
Options.prototype.sndprio;
 /** @type {number} */
Options.prototype.rcvprio;
 /** @type {boolean} */
Options.prototype.ipv6;
 /** @type {number} */
Options.prototype.rcvmaxsize;
 /** @type {!Array<string>} */
Options.prototype.chan;
 /** @type {string} */
Options.prototype.wsopt;

/**
 * @constructor
 * @struct
 * @param {string} type
 * @param {?} opts
 */
function Socket(type, opts) {}

/**
 * @param {string} addr
 * @return {void}
 */
Socket.prototype.shutdown = function(addr) {};

/**
 * @param {string} addr
 * @return {void}
 */
Socket.prototype.bind = function(addr) {};

/**
 * @param {string} addr
 * @return {void}
 */
Socket.prototype.connect = function(addr) {};

/**
 * @return {void}
 */
Socket.prototype.close = function() {};

/**
 * @param {(string|?)} buf
 * @return {number}
 */
Socket.prototype.send = function(buf) {};

/**
 * @param {string} event
 * @param {?} cb
 * @return {void}
 */
Socket.prototype.on = function(event, cb) {};

/**
 * @param {string} type
 * @param {?=} opts
 * @return {?}
 */
function socket(type, opts) {}
