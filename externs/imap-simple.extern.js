/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/imap-simple/index.d.ts:

/* TODO: ImportEqualsDeclaration in  */
/**
 * @record
 * @struct
 */
function ImapSimpleOptions() {}
 /** @type {!Connection.Config} */
ImapSimpleOptions.prototype.imap;
 /** @type {number} */
ImapSimpleOptions.prototype.connectTimeout;
 /** @type {?} */
ImapSimpleOptions.prototype.onmail;
 /** @type {?} */
ImapSimpleOptions.prototype.onexpunge;
 /** @type {?} */
ImapSimpleOptions.prototype.onupdate;
/**
 * @extends {Connection.ImapMessageBodyInfo}
 * @record
 * @struct
 */
function MessageBodyPart() {}
 /** @type {?} */
MessageBodyPart.prototype.body;
/**
 * @record
 * @struct
 */
function Message() {}
 /** @type {!Connection.ImapMessageAttributes} */
Message.prototype.attributes;
 /** @type {!Array<?>} */
Message.prototype.parts;
 /** @type {number} */
Message.prototype.seqno;

/**
 * @constructor
 * @struct
 * @param {!Connection} imap
 */
function ImapSimple(imap) {}

/**
 * Open a mailbox, calling the provided callback with signature (err, boxName), or resolves the returned promise with boxName.
 * @param {string} boxName
 * @param {?=} callback
 * @return {void|!Promise<string>}
 */
ImapSimple.prototype.openBox = function(boxName, callback) {};

/**
 * Search for and retrieve mail in the previously opened mailbox.
 * @param {!Array<?>} searchCriteria
 * @param {!Connection.FetchOptions} fetchOptions
 * @param {?=} callback
 * @return {void|!Promise<!Array<?>>}
 */
ImapSimple.prototype.search = function(searchCriteria, fetchOptions, callback) {};

/**
 * Close the connection to the imap server.
 * @return {void}
 */
ImapSimple.prototype.end = function() {};

/**
 * Downloads part data (which is either part of the message body, or an attachment). Upon success, either the provided callback will be called with signature (err, data), or the returned promise will be resolved with data. The data will be automatically decoded based on its encoding. If the encoding of the part is not supported, an error will occur.
 * @param {?} message
 * @param {?} part
 * @param {?=} callback
 * @return {void|!Promise<?>}
 */
ImapSimple.prototype.getPartData = function(message, part, callback) {};

/**
 * Adds the provided label(s) to the specified message(s). source corresponds to a node-imap MessageSource which specifies the messages to be moved. label is either a string or array of strings indicating the labels to add. When completed, either calls the provided callback with signature (err), or resolves the returned promise.
 * @param {(string|!Array<string>)} source
 * @param {(string|!Array<string>)} label
 * @param {?=} callback
 * @return {void|!Promise<void>}
 */
ImapSimple.prototype.addMessageLabel = function(source, label, callback) {};

/**
 * Moves the specified message(s) in the currently open mailbox to another mailbox. source corresponds to a node-imap MessageSource which specifies the messages to be moved. When completed, either calls the provided callback with signature (err), or resolves the returned promise.
 * @param {(string|!Array<string>)} source
 * @param {string} boxName
 * @param {?=} callback
 * @return {void|!Promise<void>}
 */
ImapSimple.prototype.moveMessage = function(source, boxName, callback) {};

/**
 * Adds the provided flag(s) to the specified message(s). uid is the uid of the message you want to add the flag to or an array of uids. flag is either a string or array of strings indicating the flags to add.
 * @param {(string|!Array<string>)} source
 * @param {(string|!Array<string>)} flag
 * @param {?=} callback
 * @return {void|!Promise<void>}
 */
ImapSimple.prototype.addFlags = function(source, flag, callback) {};

/**
 * Removes the provided flag(s) from the specified message(s). uid is the uid of the message you want to remove the flag from or an array of uids. flag is either a string or array of strings indicating the flags to remove.
 * @param {(string|!Array<string>)} source
 * @param {(string|!Array<string>)} flag
 * @param {?=} callback
 * @return {void|!Promise<void>}
 */
ImapSimple.prototype.delFlags = function(source, flag, callback) {};
/** @const */
var errors = {};

/**
 * @constructor
 * @struct
 * @param {number} timeout
 */
errors.ConnectionTimeoutError = function(timeout) {};
 /** @type {number} */
errors.ConnectionTimeoutError.prototype.timeout;

/**
 * Main entry point. Connect to an Imap server.
 * @param {?} options
 * @param {?=} callback
 * @return {void|!Promise<?>}
 */
function connect(options, callback) {}

/**
 * Given the message.attributes.struct, retrieve a flattened array of parts objects that describe the structure of the different parts of the message's body. Useful for getting a simple list to iterate for the purposes of, for example, finding all attachments.
 * @param {!Array<?>} struct
 * @return {!Array<?>}
 */
function getParts(struct) {}
