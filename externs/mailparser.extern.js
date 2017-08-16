/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/mailparser/index.d.ts:

/* TODO: ImportEqualsDeclaration in  */

/* TODO: ImportEqualsDeclaration in  */
/**
 * @record
 * @struct
 */
function StructuredHeader() {}
 /** @type {string} */
StructuredHeader.prototype.value;
 /** @type {?} */
StructuredHeader.prototype.params;

/** @typedef {(string|!Array<string>|?|!Date)} */
var HeaderValue;

/** @typedef {!Map<string, (string|!Array<string>|?|!Date)>} */
var Headers;
/**
 * @record
 * @struct
 */
function EmailAddress() {}
 /** @type {string} */
EmailAddress.prototype.address;
 /** @type {string} */
EmailAddress.prototype.name;
 /** @type {!Array<?>} */
EmailAddress.prototype.group;
/**
 * @record
 * @struct
 */
function AddressObject() {}
 /** @type {!Array<?>} */
AddressObject.prototype.value;
 /** @type {string} */
AddressObject.prototype.html;
 /** @type {string} */
AddressObject.prototype.text;
/**
 * @record
 * @struct
 */
function AttachmentCommon() {}
 /** @type {string} */
AttachmentCommon.prototype.type;
 /** @type {?} */
AttachmentCommon.prototype.content;
 /** @type {string} */
AttachmentCommon.prototype.contentType;
 /** @type {string} */
AttachmentCommon.prototype.contentDisposition;
 /** @type {string} */
AttachmentCommon.prototype.filename;
 /** @type {!Map<string, (string|!Array<string>|?|!Date)>} */
AttachmentCommon.prototype.headers;
 /** @type {string} */
AttachmentCommon.prototype.checksum;
 /** @type {number} */
AttachmentCommon.prototype.size;
 /** @type {string} */
AttachmentCommon.prototype.contentId;
 /** @type {string} */
AttachmentCommon.prototype.cid;
 /** @type {boolean} */
AttachmentCommon.prototype.related;
/**
 * @extends {AttachmentCommon}
 * @record
 * @struct
 */
function Attachment() {}
 /** @type {?} */
Attachment.prototype.content;
 /** @type {boolean} */
Attachment.prototype.related;
/**
 * @extends {AttachmentCommon}
 * @record
 * @struct
 */
function AttachmentStream() {}
 /** @type {!internal.Stream} */
AttachmentStream.prototype.content;

/**
 * Method must be called once you have processed the attachment.
 * @return {void}
 */
AttachmentStream.prototype.release = function() {};
/**
 * @record
 * @struct
 */
function ParsedMail() {}
 /** @type {!Array<?>} */
ParsedMail.prototype.attachments;
 /** @type {!Map<string, (string|!Array<string>|?|!Date)>} */
ParsedMail.prototype.headers;
 /** @type {(string|boolean)} */
ParsedMail.prototype.html;
 /** @type {string} */
ParsedMail.prototype.text;
 /** @type {string} */
ParsedMail.prototype.textAsHtml;
 /** @type {string} */
ParsedMail.prototype.subject;
 /** @type {!Array<string>} */
ParsedMail.prototype.references;
 /** @type {!Date} */
ParsedMail.prototype.date;
 /** @type {?} */
ParsedMail.prototype.to;
 /** @type {?} */
ParsedMail.prototype.from;
 /** @type {?} */
ParsedMail.prototype.cc;
 /** @type {?} */
ParsedMail.prototype.bcc;
 /** @type {?} */
ParsedMail.prototype.replyTo;
 /** @type {string} */
ParsedMail.prototype.messageId;
 /** @type {string} */
ParsedMail.prototype.inReplyTo;
 /** @type {string} */
ParsedMail.prototype.priority;
/**
 * @record
 * @struct
 */
function MessageText() {}
 /** @type {string} */
MessageText.prototype.type;
 /** @type {(string|boolean)} */
MessageText.prototype.html;
 /** @type {string} */
MessageText.prototype.text;
 /** @type {string} */
MessageText.prototype.textAsHtml;

/**
 * @constructor
 * @struct
 * @param {!internal.TransformOptions=} options
 */
function MailParser(options) {}

/**
 * @param {string} event
 * @param {?} callback
 * @return {?}
 */
MailParser.prototype.on = function(event, callback) {};

/** @typedef {(string|?|!internal.Stream)} */
var Source;

/**
 * Parse email message to structure object.
 * 
 * Parse email message to structure object.
 * 
 * @param {(string|?|!internal.Stream)} source A message source.
 * @param {?=} callback Function to get a structured email object.
 * @return {void|!Promise<?>}
 */
function simpleParser(source, callback) {}
