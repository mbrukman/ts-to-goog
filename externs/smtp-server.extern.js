/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/smtp-server/index.d.ts:

/**
 * @constructor
 * @struct
 * @param {?} options
 */
function SMTPServer(options) {}

/**
 * @param {?} callback
 * @return {?}
 */
SMTPServer.prototype.close = function(callback) {};

/**
 * @param {...?} args
 * @return {void}
 */
SMTPServer.prototype.listen = function(args) {};

/**
 * @param {?} auth
 * @param {?} session
 * @param {?} callback
 * @return {?}
 */
SMTPServer.prototype.onAuth = function(auth, session, callback) {};

/**
 * @param {?} callback
 * @return {?}
 */
SMTPServer.prototype.onClose = function(callback) {};

/**
 * @param {?} session
 * @param {?} callback
 * @return {?}
 */
SMTPServer.prototype.onConnect = function(session, callback) {};

/**
 * @param {?} stream
 * @param {?} session
 * @param {?} callback
 * @return {?}
 */
SMTPServer.prototype.onData = function(stream, session, callback) {};

/**
 * @param {?} address
 * @param {?} session
 * @param {?} callback
 * @return {?}
 */
SMTPServer.prototype.onMailFrom = function(address, session, callback) {};

/**
 * @param {?} address
 * @param {?} session
 * @param {?} callback
 * @return {?}
 */
SMTPServer.prototype.onRcptTo = function(address, session, callback) {};
/**
 * @record
 * @struct
 */
function SMTPServerOptions() {}
 /** @type {boolean} */
SMTPServerOptions.prototype.secure;
 /** @type {?} */
SMTPServerOptions.prototype.key;
 /** @type {?} */
SMTPServerOptions.prototype.cert;
 /** @type {?} */
SMTPServerOptions.prototype.ca;
 /** @type {string} */
SMTPServerOptions.prototype.name;
 /** @type {string} */
SMTPServerOptions.prototype.banner;
 /** @type {number} */
SMTPServerOptions.prototype.size;
 /** @type {!Array<string>} */
SMTPServerOptions.prototype.authMethods;
 /** @type {?} */
SMTPServerOptions.prototype.authOptional;
 /** @type {!Array<string>} */
SMTPServerOptions.prototype.disabledCommands;
 /** @type {boolean} */
SMTPServerOptions.prototype.hideSTARTTLS;
 /** @type {boolean} */
SMTPServerOptions.prototype.hidePIPELINING;
 /** @type {boolean} */
SMTPServerOptions.prototype.hide8BITMIME;
 /** @type {boolean} */
SMTPServerOptions.prototype.hideSMTPUTF8;
 /** @type {boolean} */
SMTPServerOptions.prototype.allowInsecureAuth;
 /** @type {boolean} */
SMTPServerOptions.prototype.disableReverseLookup;
 /** @type {!Object} */
SMTPServerOptions.prototype.sniOptions;
 /** @type {boolean} */
SMTPServerOptions.prototype.logger;
 /** @type {number} */
SMTPServerOptions.prototype.maxClients;
 /** @type {boolean} */
SMTPServerOptions.prototype.useProxy;
 /** @type {boolean} */
SMTPServerOptions.prototype.useXClient;
 /** @type {boolean} */
SMTPServerOptions.prototype.useXForward;
 /** @type {boolean} */
SMTPServerOptions.prototype.lmtp;
 /** @type {number} */
SMTPServerOptions.prototype.socketTimeout;
 /** @type {number} */
SMTPServerOptions.prototype.closeTimeout;
 /** @type {?} */
SMTPServerOptions.prototype.onAuth;
 /** @type {?} */
SMTPServerOptions.prototype.onConnect;
 /** @type {?} */
SMTPServerOptions.prototype.onMailFrom;
 /** @type {?} */
SMTPServerOptions.prototype.onRcptTo;
 /** @type {?} */
SMTPServerOptions.prototype.onData;
 /** @type {?} */
SMTPServerOptions.prototype.onClose;
/**
 * @record
 * @struct
 */
function Authentication() {}
 /** @type {string} */
Authentication.prototype.method;
 /** @type {string} */
Authentication.prototype.username;
 /** @type {string} */
Authentication.prototype.password;
 /** @type {string} */
Authentication.prototype.accessToken;
 /** @type {?} */
Authentication.prototype.validatePassword;
/**
 * @record
 * @struct
 */
function AuthenticationResponse() {}
 /** @type {?} */
AuthenticationResponse.prototype.user;
 /** @type {!Object} */
AuthenticationResponse.prototype.data;
/**
 * @record
 * @struct
 */
function Session() {}
 /** @type {string} */
Session.prototype.id;
 /** @type {?} */
Session.prototype.remoteAddress;
 /** @type {string} */
Session.prototype.clientHostname;
 /** @type {string} */
Session.prototype.openingCommand;
 /** @type {string} */
Session.prototype.hostNameApearsAs;
 /** @type {?} */
Session.prototype.envelope;
/**
 * @record
 * @struct
 */
function Envelope() {}
 /** @type {?} */
Envelope.prototype.mailFrom;
 /** @type {!Array<?>} */
Envelope.prototype.rcptTo;
/**
 * @record
 * @struct
 */
function Address() {}
 /** @type {string} */
Address.prototype.address;
 /** @type {!Object} */
Address.prototype.args;
