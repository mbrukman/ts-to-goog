/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/phonegap-nfc/index.d.ts:

/**
 * @param {string} type
 * @param {function(!Event): ?} listener
 * @param {boolean=} useCapture
 * @return {void}
 */
Document.prototype.addEventListener = function(type, listener, useCapture) {};
/** @const */
var PhoneGapNfc = {};
/**
 * @record
 * @struct
 */
PhoneGapNfc.Window = function() {};
 /** @type {!PhoneGapNfc.Nfc} */
PhoneGapNfc.Window.prototype.nfc;
 /** @type {!PhoneGapNfc.Ndef} */
PhoneGapNfc.Window.prototype.ndef;
 /** @type {!PhoneGapNfc.Util} */
PhoneGapNfc.Window.prototype.util;

/**
 * @param {!PhoneGapNfc.TagEvent} event
 * @param {string} tagAsJson
 * @return {void}
 */
PhoneGapNfc.Window.prototype.fireNfcTagEvent = function(event, tagAsJson) {};
/**
 * @record
 * @struct
 */
PhoneGapNfc.Tag = function() {};
 /** @type {!Array<number>} */
PhoneGapNfc.Tag.prototype.id;
 /** @type {!Array<string>} */
PhoneGapNfc.Tag.prototype.techTypes;
 /** @type {string} */
PhoneGapNfc.Tag.prototype.type;
 /** @type {string} */
PhoneGapNfc.Tag.prototype.date;
/**
 * @record
 * @struct
 */
PhoneGapNfc.NdefRecord = function() {};
 /** @type {number} */
PhoneGapNfc.NdefRecord.prototype.tnf;
 /** @type {!Array<number>} */
PhoneGapNfc.NdefRecord.prototype.type;
 /** @type {!Array<number>} */
PhoneGapNfc.NdefRecord.prototype.id;
 /** @type {!Array<number>} */
PhoneGapNfc.NdefRecord.prototype.payload;
/**
 * @extends {PhoneGapNfc.Tag}
 * @record
 * @struct
 */
PhoneGapNfc.NdefTag = function() {};
 /** @type {boolean} */
PhoneGapNfc.NdefTag.prototype.canMakeReadOnly;
 /** @type {boolean} */
PhoneGapNfc.NdefTag.prototype.isWritable;
 /** @type {number} */
PhoneGapNfc.NdefTag.prototype.maxSize;
 /** @type {!Array<!PhoneGapNfc.NdefRecord>} */
PhoneGapNfc.NdefTag.prototype.ndefMessage;
/**
 * @record
 * @struct
 */
PhoneGapNfc.TagEvent = function() {};
 /** @type {!PhoneGapNfc.Tag} */
PhoneGapNfc.TagEvent.prototype.tag;
/**
 * @extends {PhoneGapNfc.TagEvent}
 * @record
 * @struct
 */
PhoneGapNfc.NdefTagEvent = function() {};
 /** @type {!PhoneGapNfc.NdefTag} */
PhoneGapNfc.NdefTagEvent.prototype.tag;
/**
 * @record
 * @struct
 */
PhoneGapNfc.UriHelper = function() {};
 /** @type {!Array<string>} */
PhoneGapNfc.UriHelper.prototype.protocols;

/**
 * Decode a URI payload bytes
 * @param {?} data
 * @return {string}
 */
PhoneGapNfc.UriHelper.prototype.decodePayload = function(data) {};

/**
 * shorten a URI with standard prefix
 * @param {string} uri
 * @return {!Array<number>}
 */
PhoneGapNfc.UriHelper.prototype.encodePayload = function(uri) {};
/**
 * @record
 * @struct
 */
PhoneGapNfc.TextHelper = function() {};

/**
 * Decode a URI payload bytes
 * @param {?} data
 * @return {string}
 */
PhoneGapNfc.TextHelper.prototype.decodePayload = function(data) {};

/**
 * Encode text payload
 * @param {string} text
 * @param {string} lang
 * @param {string} encoding
 * @return {!Array<number>}
 */
PhoneGapNfc.TextHelper.prototype.encodePayload = function(text, lang, encoding) {};
/**
 * @record
 * @struct
 */
PhoneGapNfc.Ndef = function() {};
 /** @type {number} */
PhoneGapNfc.Ndef.prototype.TNF_EMPTY;
 /** @type {number} */
PhoneGapNfc.Ndef.prototype.TNF_WELL_KNOWN;
 /** @type {number} */
PhoneGapNfc.Ndef.prototype.TNF_MIME_MEDIA;
 /** @type {number} */
PhoneGapNfc.Ndef.prototype.TNF_ABSOLUTE_URI;
 /** @type {number} */
PhoneGapNfc.Ndef.prototype.TNF_EXTERNAL_TYPE;
 /** @type {number} */
PhoneGapNfc.Ndef.prototype.TNF_UNKNOWN;
 /** @type {number} */
PhoneGapNfc.Ndef.prototype.TNF_UNCHANGED;
 /** @type {number} */
PhoneGapNfc.Ndef.prototype.TNF_RESERVED;
 /** @type {!Array<number>} */
PhoneGapNfc.Ndef.prototype.RTD_TEXT;
 /** @type {!Array<number>} */
PhoneGapNfc.Ndef.prototype.RTD_URI;
 /** @type {!Array<number>} */
PhoneGapNfc.Ndef.prototype.RTD_SMART_POSTER;
 /** @type {!Array<number>} */
PhoneGapNfc.Ndef.prototype.RTD_ALTERNATIVE_CARRIER;
 /** @type {!Array<number>} */
PhoneGapNfc.Ndef.prototype.RTD_HANDOVER_CARRIER;
 /** @type {!Array<number>} */
PhoneGapNfc.Ndef.prototype.RTD_HANDOVER_REQUEST;
 /** @type {!Array<number>} */
PhoneGapNfc.Ndef.prototype.RTD_HANDOVER_SELECT;
 /** @type {!PhoneGapNfc.UriHelper} */
PhoneGapNfc.Ndef.prototype.uriHelper;
 /** @type {!PhoneGapNfc.TextHelper} */
PhoneGapNfc.Ndef.prototype.textHelper;

/**
 * Creates a JSON representation of a NdefRecord.
 * 
 * @see Ndef.textRecord, Ndef.uriRecord and Ndef.mimeMediaRecord for examples
 * @param {number} tnf 3-bit TNF (Type Name Format) - use one of the TNF_* constants
 * @param {!Array<number>} type array, containing zero to 255 bytes, must not be null
 * @param {!Array<number>} id byte array, containing zero to 255 bytes, must not be null
 * @param {!Array<number>} payload byte array, containing zero to (2 ** 32 - 1) bytes, must not be null
 * 
 * @return {!PhoneGapNfc.NdefRecord} NdefRecord
 * 
 */
PhoneGapNfc.Ndef.prototype.record = function(tnf, type, id, payload) {};

/**
 * Helper that creates an NdefRecord containing plain text.
 * 
 * \@paramlanguageCode ISO/IANA language code. Examples: “fi”, “en-US”, “fr- CA”, “jp”. (optional)
 * @param {string} text String of text to encode
 * @param {string} languageCode
 * @param {!Array<number>} id byte[] (optional)
 * 
 * @return {!PhoneGapNfc.NdefRecord} NdefRecord
 */
PhoneGapNfc.Ndef.prototype.textRecord = function(text, languageCode, id) {};

/**
 * Helper that creates a NdefRecord containing a URI.
 * 
 * @param {string} uri String
 * @param {!Array<number>} id byte[] (optional)
 * 
 * @return {!PhoneGapNfc.NdefRecord} NdefRecord
 */
PhoneGapNfc.Ndef.prototype.uriRecord = function(uri, id) {};

/**
 * Helper that creates a NdefRecord containing an absolute URI.
 * 
 * An Absolute URI record means the URI describes the payload of the record.
 * 
 * For example a SOAP message could use "http://schemas.xmlsoap.org/soap/envelope/"
 * as the type and XML content for the payload.
 * 
 * Absolute URI can also be used to write LaunchApp records for Windows.
 * 
 * See 2.4.2 Payload Type of the NDEF Specification
 * http://www.nfc-forum.org/specs/spec_list#ndefts
 * 
 * Note that by default, Android will open the URI defined in the type
 * field of an Absolute URI record (TNF=3) and ignore the payload.
 * BlackBerry and Windows do not open the browser for TNF=3.
 * 
 * To write a URI as the payload use ndef.uriRecord(uri)
 * 
 * @param {string} uri String
 * @param {!Array<number>} payload byte[] or String
 * @param {!Array<number>} id byte[] (optional)
 * 
 * @return {!PhoneGapNfc.NdefRecord} NdefRecord
 */
PhoneGapNfc.Ndef.prototype.absoluteUriRecord = function(uri, payload, id) {};

/**
 * Helper that creates a NdefRecordcontaining an mimeMediaRecord.
 * 
 * @param {string} mimeType String
 * @param {!Array<number>} payload byte[]
 * @param {!Array<number>} id byte[] (optional)
 * @return {!PhoneGapNfc.NdefRecord}
 */
PhoneGapNfc.Ndef.prototype.mimeMediaRecord = function(mimeType, payload, id) {};

/**
 * Helper that creates an NDEF record containing an Smart Poster.
 * 
 * @param {!Array<!PhoneGapNfc.NdefRecord>} ndefRecords array of NdefRecord
 * @param {!Array<number>} id byte[] (optional)
 * 
 * @return {!PhoneGapNfc.NdefRecord} NdefRecord
 */
PhoneGapNfc.Ndef.prototype.smartPoster = function(ndefRecords, id) {};

/**
 * Helper that creates an empty NdefRecord.
 * 
 * @return {!PhoneGapNfc.NdefRecord}
 */
PhoneGapNfc.Ndef.prototype.emptyRecord = function() {};

/**
 * Helper that creates an Android Application Record (AAR).
 * http://developer.android.com/guide/topics/connectivity/nfc/nfc.html#aar
 * @param {string} packageName android package name
 * 
 * @return {!PhoneGapNfc.NdefRecord}
 */
PhoneGapNfc.Ndef.prototype.androidApplicationRecord = function(packageName) {};

/**
 * Encodes an NDEF Message into bytes that can be written to a NFC tag.
 * 
 * @see NFC Data Exchange Format (NDEF) http://www.nfc-forum.org/specs/spec_list/
 * @param {!Array<!PhoneGapNfc.NdefRecord>} ndefRecords an Array of NdefRecord
 * 
 * @return {!Array<number>} Array<number>
 * 
 */
PhoneGapNfc.Ndef.prototype.encodeMessage = function(ndefRecords) {};

/**
 * Decodes an array bytes into an NDEF Message
 * 
 * @see NFC Data Exchange Format (NDEF) http://www.nfc-forum.org/specs/spec_list/
 * @param {!Array<number>} bytes Array<number> read from a NFC tag
 * 
 * @return {!Array<!PhoneGapNfc.NdefRecord>} array of NdefRecord
 * 
 */
PhoneGapNfc.Ndef.prototype.decodeMessage = function(bytes) {};

/**
 * Decode the bit flags from a TNF Byte.
 * 
 * @param {number} tnf_byte
 * @return {?} object with decoded data
 * 
 *  See NFC Data Exchange Format (NDEF) Specification Section 3.2 RecordLayout
 */
PhoneGapNfc.Ndef.prototype.decodeTnf = function(tnf_byte) {};

/**
 * Encode NDEF bit flags into a TNF Byte.
 * 
 * @param {number} mb
 * @param {number} me
 * @param {number} cf
 * @param {number} sr
 * @param {number} il
 * @param {number} tnf
 * @return {number} tnf byte
 * 
 *  See NFC Data Exchange Format (NDEF) Specification Section 3.2 RecordLayout
 */
PhoneGapNfc.Ndef.prototype.encodeTnf = function(mb, me, cf, sr, il, tnf) {};

/**
 * Convert TNF to String for user friendly display
 * 
 * @param {number} tnf tnf byte
 * @return {string}
 */
PhoneGapNfc.Ndef.prototype.tnfToString = function(tnf) {};
/**
 * @record
 * @struct
 */
PhoneGapNfc.Util = function() {};

/**
 * Convert bytes to string
 * @param {!Array<number>} bytes
 * @return {string}
 */
PhoneGapNfc.Util.prototype.bytesToString = function(bytes) {};

/**
 * Convert string to bytes
 * @param {string} string
 * @return {!Array<number>}
 */
PhoneGapNfc.Util.prototype.stringToBytes = function(string) {};

/**
 * Convert bytes to hexadecimal string
 * @param {!Array<number>} bytes
 * @return {string}
 */
PhoneGapNfc.Util.prototype.bytesToHexString = function(bytes) {};
/**
 * @extends {PhoneGapNfc.Util}
 * @record
 * @struct
 */
PhoneGapNfc.Nfc = function() {};

/**
 * Function nfc.addTagDiscoveredListener registers the callback for tag events.
 * This event occurs when any tag is detected by the phone
 * @param {function(!PhoneGapNfc.TagEvent): void} callback The callback that is called when a tag is detected.
 * @param {function(): void=} win The callback that is called when the listener is added.
 * @param {function(): void=} fail The callback that is called if there was an error.
 * @return {void}
 */
PhoneGapNfc.Nfc.prototype.addTagDiscoveredListener = function(callback, win, fail) {};

/**
 * Function nfc.addMimeTypeListener registers the callback for ndef-mime events.
 * A ndef-mime event occurs when a Ndef.TNF_MIME_MEDIA tag is read and matches the specified MIME type.
 * This function can be called multiple times to register different MIME types. You should use the same handler for all MIME messages.
 * @param {string} mimeType The MIME type to filter for messages.
 * @param {function(): void} callback The callback that is called when an NDEF tag matching the MIME type is read.
 * @param {function(): void=} win The callback that is called when the listener is added.
 * @param {function(): void=} fail The callback that is called if there was an error.
 * @return {void}
 */
PhoneGapNfc.Nfc.prototype.addMimeTypeListener = function(mimeType, callback, win, fail) {};

/**
 * Function nfc.addNdefListener registers the callback for ndef events.
 * A ndef event is fired when a NDEF tag is read.
 * For BlackBerry 10, you must configure the type of tags your application will read with an invoke-target in config.xml.
 * On Android registered mimeTypeListeners takes precedence over this more generic NDEF listener.
 * @param {function(!PhoneGapNfc.NdefTagEvent): void} callback The callback that is called when an NDEF tag is read.
 * @param {function(): void=} win The callback that is called when the listener is added.
 * @param {function(): void=} fail The callback that is called if there was an error.
 * @return {void}
 */
PhoneGapNfc.Nfc.prototype.addNdefListener = function(callback, win, fail) {};

/**
 * Function nfc.addNdefFormatableListener registers the callback for ndef-formatable events.
 * A ndef-formatable event occurs when a tag is read that can be NDEF formatted.
 * This is not fired for tags that are already formatted as NDEF.
 * The ndef-formatable event will not contain an NdefMessage.
 * @param {function(!PhoneGapNfc.NdefTagEvent): void} callback The callback that is called when NDEF formatable tag is read.
 * @param {function(): void=} win The callback that is called when the listener is added.
 * @param {function(): void=} fail The callback that is called if there was an error.
 * @return {void}
 */
PhoneGapNfc.Nfc.prototype.addNdefFormatableListener = function(callback, win, fail) {};

/**
 * Function nfc.write writes an NdefMessage to a NFC tag.
 * On Android this method must be called from within an NDEF TagEvent Handler.
 * On Windows this method may be called from within the NDEF TagEvent Handler.
 * On Windows Phone 8.1 this method should be called outside the NDEF TagEvent Handler,
 * otherwise Windows tries to read the tag contents as you are writing to the tag.
 * @param {!Array<!PhoneGapNfc.NdefRecord>} ndefMessage An array of NDEF Records.
 * @param {function(): void=} win The callback that is called when the tag is written.
 * @param {function(): void=} fail The callback that is called if there was an error.
 * @return {void}
 */
PhoneGapNfc.Nfc.prototype.write = function(ndefMessage, win, fail) {};

/**
 * Function nfc.makeReadOnly make a NFC tag read only.
 * Warning this is permanent and can not be undone.
 * On Android this method must be called from within an NDEF TagEvent Handler.
 * @param {function(): void=} win The callback that is called when the tag is locked.
 * @param {function(): void=} fail The callback that is called if there was an error.
 * @return {void}
 */
PhoneGapNfc.Nfc.prototype.makeReadOnly = function(win, fail) {};

/**
 * Function nfc.share writes an NdefMessage via peer-to-peer.
 * This should appear as an NFC tag to another device.
 * @param {!Array<!PhoneGapNfc.NdefRecord>} ndefMessage An array of NDEF Records.
 * @param {function(): void=} win The callback that is called when the message is pushed.
 * @param {function(): void=} fail The callback that is called if there was an error.
 * @return {void}
 */
PhoneGapNfc.Nfc.prototype.share = function(ndefMessage, win, fail) {};

/**
 * Function nfc.unshare stops sharing data via peer-to-peer.
 * @param {function(): void=} win The callback that is called when sharing stops.
 * @param {function(): void=} fail The callback that is called if there was an error.
 * @return {void}
 */
PhoneGapNfc.Nfc.prototype.unshare = function(win, fail) {};

/**
 * Function nfc.handover shares files to a NFC peer using handover. Files are sent by specifying a file:// or context:// URI or a list of URIs.
 * The file transfer is initiated with NFC but the transfer is completed with over Bluetooth or WiFi which is handled by a NFC handover request.
 * The Android code is responsible for building the handover NFC Message.
 * This is Android only, but it should be possible to add implementations for other platforms.
 * @param {(string|!Array<string>)} uris A URI as a String, or an array of URIs.
 * @param {function(): void=} win The callback that is called when the message is pushed.
 * @param {function(): void=} fail The callback that is called if there was an error.
 * @return {void}
 */
PhoneGapNfc.Nfc.prototype.handover = function(uris, win, fail) {};

/**
 * Function nfc.stopHandover stops sharing data via peer-to-peer.
 * @param {function(): void=} win The callback that is called when sharing stops.
 * @param {function(): void=} fail The callback that is called if there was an error.
 * @return {void}
 */
PhoneGapNfc.Nfc.prototype.stopHandover = function(win, fail) {};

/**
 * Function nfc.erase erases a tag by writing an empty message.
 * Will format unformatted tags before writing.
 * This method must be called from within an NDEF TagEvent Handler.
 * @param {function(): void=} win The callback that is called when sharing stops.
 * @param {function(): void=} fail The callback that is called if there was an error.
 * @return {void}
 */
PhoneGapNfc.Nfc.prototype.erase = function(win, fail) {};

/**
 * Function nfc.enabled explicitly checks to see if the phone has NFC and if NFC is enabled.
 * If everything is OK, the success callback is called.
 * If there is a problem, the failure callback will be called with a reason code.
 * The reason will be NO_NFC if the device doesn't support NFC and NFC_DISABLED if the user has disabled NFC.
 * Note: that on Android the NFC status is checked before every API call NO_NFC or NFC_DISABLED can be returned in any failure function.
 * Windows will return NO_NFC_OR_NFC_DISABLED when NFC is not present or disabled.
 * If the user disabled NFC after the application started, Windows may return NFC_DISABLED.
 * Windows checks the NFC status before most API calls, but there are some cases when the NFC state can not be determined.
 * @param {function(!String): void=} win The callback that is called when NFC is enabled.
 * @param {function(!String): void=} fail The callback that is called when NFC is disabled or missing.
 * @return {void}
 */
PhoneGapNfc.Nfc.prototype.enabled = function(win, fail) {};

/**
 * Removes the previously registered event listener added via nfc.addTagDiscoveredListener
 * @param {function(!PhoneGapNfc.TagEvent): void} callback The previously registered callback.
 * @param {function(): void=} win The callback that is called when the listener is successfully removed.
 * @param {function(): void=} fail The callback that is called if there was an error during removal.
 * @return {void}
 */
PhoneGapNfc.Nfc.prototype.removeTagDiscoveredListener = function(callback, win, fail) {};

/**
 * Removes the previously registered event listener added via nfc.addMimeTypeListener
 * @param {string} mimeType The MIME type to filter for messages.
 * @param {function(!PhoneGapNfc.TagEvent): void} callback The previously registered callback.
 * @param {function(): void=} win The callback that is called when the listener is successfully removed.
 * @param {function(): void=} fail The callback that is called if there was an error during removal.
 * @return {void}
 */
PhoneGapNfc.Nfc.prototype.removeMimeTypeListener = function(mimeType, callback, win, fail) {};

/**
 * Removes the previously registered event listener for NDEF tags added via nfc.addNdefListener.
 * @param {function(!PhoneGapNfc.TagEvent): void} callback The previously registered callback.
 * @param {function(): void=} win The callback that is called when the listener is successfully removed.
 * @param {function(): void=} fail The callback that is called if there was an error during removal.
 * @return {void}
 */
PhoneGapNfc.Nfc.prototype.removeNdefListener = function(callback, win, fail) {};

/**
 * Function showSettings opens the NFC settings for the operating system.
 * @param {function(): void=} win Success callback function
 * @param {function(): void=} fail Error callback function, invoked when error occurs.
 * @return {void}
 */
PhoneGapNfc.Nfc.prototype.showSettings = function(win, fail) {};
 /** @type {!PhoneGapNfc.Nfc} */
var nfc;
 /** @type {!PhoneGapNfc.Ndef} */
var ndef;
 /** @type {!PhoneGapNfc.Util} */
var util;
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "nfc"
/** @const */
tsickle_declare_module.nfc = {};

/* TODO: ExportAssignment in tsickle_declare_module.nfc */
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "ndef"
/** @const */
tsickle_declare_module.ndef = {};

/* TODO: ExportAssignment in tsickle_declare_module.ndef */
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "util"
/** @const */
tsickle_declare_module.util = {};

/* TODO: ExportAssignment in tsickle_declare_module.util */
