/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/pouchdb-core/index.d.ts:
/**
 * @record
 * @struct
 */
function Buffer() {}

/**
 * @param {string} string
 * @param {number=} offset
 * @param {number=} length
 * @param {string=} encoding
 * @return {number}
 */
Buffer.prototype.write = function(string, offset, length, encoding) {};

/**
 * @param {string=} encoding
 * @param {number=} start
 * @param {number=} end
 * @return {string}
 */
Buffer.prototype.toString = function(encoding, start, end) {};

/**
 * @return {{type: string, data: !Array<?>}}
 */
Buffer.prototype.toJSON = function() {};

/**
 * @param {!Buffer} otherBuffer
 * @return {boolean}
 */
Buffer.prototype.equals = function(otherBuffer) {};

/**
 * @param {!Buffer} otherBuffer
 * @param {number=} targetStart
 * @param {number=} targetEnd
 * @param {number=} sourceStart
 * @param {number=} sourceEnd
 * @return {number}
 */
Buffer.prototype.compare = function(otherBuffer, targetStart, targetEnd, sourceStart, sourceEnd) {};

/**
 * @param {!Buffer} targetBuffer
 * @param {number=} targetStart
 * @param {number=} sourceStart
 * @param {number=} sourceEnd
 * @return {number}
 */
Buffer.prototype.copy = function(targetBuffer, targetStart, sourceStart, sourceEnd) {};

/**
 * @param {number=} start
 * @param {number=} end
 * @return {!Buffer}
 */
Buffer.prototype.slice = function(start, end) {};

/**
 * @param {number} value
 * @param {number} offset
 * @param {number} byteLength
 * @param {boolean=} noAssert
 * @return {number}
 */
Buffer.prototype.writeUIntLE = function(value, offset, byteLength, noAssert) {};

/**
 * @param {number} value
 * @param {number} offset
 * @param {number} byteLength
 * @param {boolean=} noAssert
 * @return {number}
 */
Buffer.prototype.writeUIntBE = function(value, offset, byteLength, noAssert) {};

/**
 * @param {number} value
 * @param {number} offset
 * @param {number} byteLength
 * @param {boolean=} noAssert
 * @return {number}
 */
Buffer.prototype.writeIntLE = function(value, offset, byteLength, noAssert) {};

/**
 * @param {number} value
 * @param {number} offset
 * @param {number} byteLength
 * @param {boolean=} noAssert
 * @return {number}
 */
Buffer.prototype.writeIntBE = function(value, offset, byteLength, noAssert) {};

/**
 * @param {number} offset
 * @param {number} byteLength
 * @param {boolean=} noAssert
 * @return {number}
 */
Buffer.prototype.readUIntLE = function(offset, byteLength, noAssert) {};

/**
 * @param {number} offset
 * @param {number} byteLength
 * @param {boolean=} noAssert
 * @return {number}
 */
Buffer.prototype.readUIntBE = function(offset, byteLength, noAssert) {};

/**
 * @param {number} offset
 * @param {number} byteLength
 * @param {boolean=} noAssert
 * @return {number}
 */
Buffer.prototype.readIntLE = function(offset, byteLength, noAssert) {};

/**
 * @param {number} offset
 * @param {number} byteLength
 * @param {boolean=} noAssert
 * @return {number}
 */
Buffer.prototype.readIntBE = function(offset, byteLength, noAssert) {};

/**
 * @param {number} offset
 * @param {boolean=} noAssert
 * @return {number}
 */
Buffer.prototype.readUInt8 = function(offset, noAssert) {};

/**
 * @param {number} offset
 * @param {boolean=} noAssert
 * @return {number}
 */
Buffer.prototype.readUInt16LE = function(offset, noAssert) {};

/**
 * @param {number} offset
 * @param {boolean=} noAssert
 * @return {number}
 */
Buffer.prototype.readUInt16BE = function(offset, noAssert) {};

/**
 * @param {number} offset
 * @param {boolean=} noAssert
 * @return {number}
 */
Buffer.prototype.readUInt32LE = function(offset, noAssert) {};

/**
 * @param {number} offset
 * @param {boolean=} noAssert
 * @return {number}
 */
Buffer.prototype.readUInt32BE = function(offset, noAssert) {};

/**
 * @param {number} offset
 * @param {boolean=} noAssert
 * @return {number}
 */
Buffer.prototype.readInt8 = function(offset, noAssert) {};

/**
 * @param {number} offset
 * @param {boolean=} noAssert
 * @return {number}
 */
Buffer.prototype.readInt16LE = function(offset, noAssert) {};

/**
 * @param {number} offset
 * @param {boolean=} noAssert
 * @return {number}
 */
Buffer.prototype.readInt16BE = function(offset, noAssert) {};

/**
 * @param {number} offset
 * @param {boolean=} noAssert
 * @return {number}
 */
Buffer.prototype.readInt32LE = function(offset, noAssert) {};

/**
 * @param {number} offset
 * @param {boolean=} noAssert
 * @return {number}
 */
Buffer.prototype.readInt32BE = function(offset, noAssert) {};

/**
 * @param {number} offset
 * @param {boolean=} noAssert
 * @return {number}
 */
Buffer.prototype.readFloatLE = function(offset, noAssert) {};

/**
 * @param {number} offset
 * @param {boolean=} noAssert
 * @return {number}
 */
Buffer.prototype.readFloatBE = function(offset, noAssert) {};

/**
 * @param {number} offset
 * @param {boolean=} noAssert
 * @return {number}
 */
Buffer.prototype.readDoubleLE = function(offset, noAssert) {};

/**
 * @param {number} offset
 * @param {boolean=} noAssert
 * @return {number}
 */
Buffer.prototype.readDoubleBE = function(offset, noAssert) {};

/**
 * @return {!Buffer}
 */
Buffer.prototype.swap16 = function() {};

/**
 * @return {!Buffer}
 */
Buffer.prototype.swap32 = function() {};

/**
 * @return {!Buffer}
 */
Buffer.prototype.swap64 = function() {};

/**
 * @param {number} value
 * @param {number} offset
 * @param {boolean=} noAssert
 * @return {number}
 */
Buffer.prototype.writeUInt8 = function(value, offset, noAssert) {};

/**
 * @param {number} value
 * @param {number} offset
 * @param {boolean=} noAssert
 * @return {number}
 */
Buffer.prototype.writeUInt16LE = function(value, offset, noAssert) {};

/**
 * @param {number} value
 * @param {number} offset
 * @param {boolean=} noAssert
 * @return {number}
 */
Buffer.prototype.writeUInt16BE = function(value, offset, noAssert) {};

/**
 * @param {number} value
 * @param {number} offset
 * @param {boolean=} noAssert
 * @return {number}
 */
Buffer.prototype.writeUInt32LE = function(value, offset, noAssert) {};

/**
 * @param {number} value
 * @param {number} offset
 * @param {boolean=} noAssert
 * @return {number}
 */
Buffer.prototype.writeUInt32BE = function(value, offset, noAssert) {};

/**
 * @param {number} value
 * @param {number} offset
 * @param {boolean=} noAssert
 * @return {number}
 */
Buffer.prototype.writeInt8 = function(value, offset, noAssert) {};

/**
 * @param {number} value
 * @param {number} offset
 * @param {boolean=} noAssert
 * @return {number}
 */
Buffer.prototype.writeInt16LE = function(value, offset, noAssert) {};

/**
 * @param {number} value
 * @param {number} offset
 * @param {boolean=} noAssert
 * @return {number}
 */
Buffer.prototype.writeInt16BE = function(value, offset, noAssert) {};

/**
 * @param {number} value
 * @param {number} offset
 * @param {boolean=} noAssert
 * @return {number}
 */
Buffer.prototype.writeInt32LE = function(value, offset, noAssert) {};

/**
 * @param {number} value
 * @param {number} offset
 * @param {boolean=} noAssert
 * @return {number}
 */
Buffer.prototype.writeInt32BE = function(value, offset, noAssert) {};

/**
 * @param {number} value
 * @param {number} offset
 * @param {boolean=} noAssert
 * @return {number}
 */
Buffer.prototype.writeFloatLE = function(value, offset, noAssert) {};

/**
 * @param {number} value
 * @param {number} offset
 * @param {boolean=} noAssert
 * @return {number}
 */
Buffer.prototype.writeFloatBE = function(value, offset, noAssert) {};

/**
 * @param {number} value
 * @param {number} offset
 * @param {boolean=} noAssert
 * @return {number}
 */
Buffer.prototype.writeDoubleLE = function(value, offset, noAssert) {};

/**
 * @param {number} value
 * @param {number} offset
 * @param {boolean=} noAssert
 * @return {number}
 */
Buffer.prototype.writeDoubleBE = function(value, offset, noAssert) {};

/**
 * @param {?} value
 * @param {number=} offset
 * @param {number=} end
 * @return {Buffer}
 */
Buffer.prototype.fill = function(value, offset, end) {};

/**
 * @param {(string|number|!Buffer)} value
 * @param {number=} byteOffset
 * @param {string=} encoding
 * @return {number}
 */
Buffer.prototype.indexOf = function(value, byteOffset, encoding) {};

/**
 * @param {(string|number|!Buffer)} value
 * @param {number=} byteOffset
 * @param {string=} encoding
 * @return {number}
 */
Buffer.prototype.lastIndexOf = function(value, byteOffset, encoding) {};

/**
 * @return {!IterableIterator<!Array<?>>}
 */
Buffer.prototype.entries = function() {};

/**
 * @param {(string|number|!Buffer)} value
 * @param {number=} byteOffset
 * @param {string=} encoding
 * @return {boolean}
 */
Buffer.prototype.includes = function(value, byteOffset, encoding) {};

/**
 * @return {!IterableIterator<number>}
 */
Buffer.prototype.keys = function() {};

/**
 * @return {!IterableIterator<number>}
 */
Buffer.prototype.values = function() {};
/**
 * @record
 * @struct
 */
function EventEmitter() {}

/**
 * @param {(string|symbol)} event
 * @param {!Function} listener
 * @return {EventEmitter}
 */
EventEmitter.prototype.addListener = function(event, listener) {};

/**
 * @param {(string|symbol)} event
 * @param {!Function} listener
 * @return {EventEmitter}
 */
EventEmitter.prototype.on = function(event, listener) {};

/**
 * @param {(string|symbol)} event
 * @param {!Function} listener
 * @return {EventEmitter}
 */
EventEmitter.prototype.once = function(event, listener) {};

/**
 * @param {(string|symbol)} event
 * @param {!Function} listener
 * @return {EventEmitter}
 */
EventEmitter.prototype.removeListener = function(event, listener) {};

/**
 * @param {(string|symbol)=} event
 * @return {EventEmitter}
 */
EventEmitter.prototype.removeAllListeners = function(event) {};

/**
 * @param {number} n
 * @return {EventEmitter}
 */
EventEmitter.prototype.setMaxListeners = function(n) {};

/**
 * @return {number}
 */
EventEmitter.prototype.getMaxListeners = function() {};

/**
 * @param {(string|symbol)} event
 * @return {!Array<!Function>}
 */
EventEmitter.prototype.listeners = function(event) {};

/**
 * @param {(string|symbol)} event
 * @param {...?} args
 * @return {boolean}
 */
EventEmitter.prototype.emit = function(event, args) {};

/**
 * @param {(string|symbol)} type
 * @return {number}
 */
EventEmitter.prototype.listenerCount = function(type) {};

/**
 * @param {(string|symbol)} event
 * @param {!Function} listener
 * @return {EventEmitter}
 */
EventEmitter.prototype.prependListener = function(event, listener) {};

/**
 * @param {(string|symbol)} event
 * @param {!Function} listener
 * @return {EventEmitter}
 */
EventEmitter.prototype.prependOnceListener = function(event, listener) {};

/**
 * @return {!Array<(string|symbol)>}
 */
EventEmitter.prototype.eventNames = function() {};
/** @const */
var PouchDB = {};
/** @const */
PouchDB.Core = {};
/**
 * @record
 * @struct
 */
PouchDB.Core.Error = function() {};
 /** @type {number} */
PouchDB.Core.Error.prototype.status;
 /** @type {string} */
PouchDB.Core.Error.prototype.name;
 /** @type {string} */
PouchDB.Core.Error.prototype.message;
 /** @type {string} */
PouchDB.Core.Error.prototype.reason;
 /** @type {(string|boolean)} */
PouchDB.Core.Error.prototype.error;
 /** @type {string} */
PouchDB.Core.Error.prototype.id;
 /** @type {string} */
PouchDB.Core.Error.prototype.rev;

/** @typedef {function(!PouchDB.Core.Error, R): void} */
PouchDB.Core.Callback;

/** @typedef {string} */
PouchDB.Core.DocumentId;

/** @typedef {string} */
PouchDB.Core.DocumentKey;

/** @typedef {string} */
PouchDB.Core.AttachmentId;

/** @typedef {string} */
PouchDB.Core.RevisionId;

/** @typedef {string} */
PouchDB.Core.Availability;

/** @typedef {(string|!Buffer|!Blob)} */
PouchDB.Core.Attachment;
/**
 * @record
 * @struct
 */
PouchDB.Core.Options = function() {};
 /** @type {!PouchDB.Configuration.RemoteRequesterConfiguration} */
PouchDB.Core.Options.prototype.ajax;
/**
 * @record
 * @struct
 */
PouchDB.Core.BasicResponse = function() {};
 /** @type {boolean} */
PouchDB.Core.BasicResponse.prototype.ok;
/**
 * @extends {PouchDB.Core.BasicResponse}
 * @record
 * @struct
 */
PouchDB.Core.Response = function() {};
 /** @type {string} */
PouchDB.Core.Response.prototype.id;
 /** @type {string} */
PouchDB.Core.Response.prototype.rev;
/**
 * @record
 * @struct
 */
PouchDB.Core.DatabaseInfo = function() {};
 /** @type {string} */
PouchDB.Core.DatabaseInfo.prototype.db_name;
 /** @type {number} */
PouchDB.Core.DatabaseInfo.prototype.doc_count;
 /** @type {(string|number)} */
PouchDB.Core.DatabaseInfo.prototype.update_seq;
/**
 * @record
 * @struct
 */
PouchDB.Core.Revision = function() {};
 /** @type {?} */
PouchDB.Core.Revision.prototype.ok;
/**
 * @record
 * @struct
 */
PouchDB.Core.RevisionInfo = function() {};
 /** @type {string} */
PouchDB.Core.RevisionInfo.prototype.rev;
 /** @type {string} */
PouchDB.Core.RevisionInfo.prototype.status;
/**
 * @record
 * @struct
 */
PouchDB.Core.RevisionDiffOptions = function() {};

/* TODO: IndexSignature: PouchDB.Core */
/**
 * @record
 * @struct
 */
PouchDB.Core.RevisionDiff = function() {};
 /** @type {!Array<string>} */
PouchDB.Core.RevisionDiff.prototype.missing;
 /** @type {!Array<string>} */
PouchDB.Core.RevisionDiff.prototype.possible_ancestors;
/**
 * @record
 * @struct
 */
PouchDB.Core.RevisionDiffResponse = function() {};

/* TODO: IndexSignature: PouchDB.Core */
/**
 * @record
 * @struct
 */
PouchDB.Core.IdMeta = function() {};
 /** @type {string} */
PouchDB.Core.IdMeta.prototype._id;
/**
 * @record
 * @struct
 */
PouchDB.Core.RevisionIdMeta = function() {};
 /** @type {string} */
PouchDB.Core.RevisionIdMeta.prototype._rev;
/**
 * @record
 * @struct
 */
PouchDB.Core.GetMeta = function() {};
 /** @type {!Array<string>} */
PouchDB.Core.GetMeta.prototype._conflicts;
 /** @type {string} */
PouchDB.Core.GetMeta.prototype._rev;
 /** @type {!Array<!PouchDB.Core.RevisionInfo>} */
PouchDB.Core.GetMeta.prototype._revs_info;
 /** @type {{ids: !Array<string>, start: number}} */
PouchDB.Core.GetMeta.prototype._revisions;
 /** @type {!PouchDB.Core.Attachments} */
PouchDB.Core.GetMeta.prototype._attachments;
/**
 * @record
 * @struct
 */
PouchDB.Core.AttachmentResponse = function() {};
 /** @type {string} */
PouchDB.Core.AttachmentResponse.prototype.content_type;
 /** @type {string} */
PouchDB.Core.AttachmentResponse.prototype.digest;
 /** @type {boolean} */
PouchDB.Core.AttachmentResponse.prototype.stub;
 /** @type {number} */
PouchDB.Core.AttachmentResponse.prototype.length;
 /** @type {(string|!Buffer|!Blob)} */
PouchDB.Core.AttachmentResponse.prototype.data;
/**
 * @record
 * @struct
 */
PouchDB.Core.Attachments = function() {};

/* TODO: IndexSignature: PouchDB.Core */

/** @typedef {Content} */
PouchDB.Core.NewDocument;

/** @typedef {?} */
PouchDB.Core.Document;

/** @typedef {?} */
PouchDB.Core.ExistingDocument;

/** @typedef {?} */
PouchDB.Core.RemoveDocument;

/** @typedef {?} */
PouchDB.Core.PostDocument;

/** @typedef {?} */
PouchDB.Core.PutDocument;
/**
 * @record
 * @struct
 */
PouchDB.Core.PutAttachment = function() {};
 /** @type {string} */
PouchDB.Core.PutAttachment.prototype.content_type;
 /** @type {(string|!Buffer|!Blob)} */
PouchDB.Core.PutAttachment.prototype.data;
/**
 * @extends {PouchDB.Core.Options}
 * @record
 * @struct
 */
PouchDB.Core.AllDocsOptions = function() {};
 /** @type {boolean} */
PouchDB.Core.AllDocsOptions.prototype.attachments;
 /** @type {boolean} */
PouchDB.Core.AllDocsOptions.prototype.binary;
 /** @type {boolean} */
PouchDB.Core.AllDocsOptions.prototype.conflicts;
 /** @type {boolean} */
PouchDB.Core.AllDocsOptions.prototype.descending;
 /** @type {boolean} */
PouchDB.Core.AllDocsOptions.prototype.include_docs;
 /** @type {number} */
PouchDB.Core.AllDocsOptions.prototype.limit;
 /** @type {number} */
PouchDB.Core.AllDocsOptions.prototype.skip;
/**
 * @extends {PouchDB.Core.AllDocsOptions}
 * @record
 * @struct
 */
PouchDB.Core.AllDocsWithKeyOptions = function() {};
 /** @type {string} */
PouchDB.Core.AllDocsWithKeyOptions.prototype.key;
/**
 * @extends {PouchDB.Core.AllDocsOptions}
 * @record
 * @struct
 */
PouchDB.Core.AllDocsWithKeysOptions = function() {};
 /** @type {!Array<string>} */
PouchDB.Core.AllDocsWithKeysOptions.prototype.keys;
/**
 * @extends {PouchDB.Core.AllDocsOptions}
 * @record
 * @struct
 */
PouchDB.Core.AllDocsWithinRangeOptions = function() {};
 /** @type {string} */
PouchDB.Core.AllDocsWithinRangeOptions.prototype.startkey;
 /** @type {string} */
PouchDB.Core.AllDocsWithinRangeOptions.prototype.endkey;
 /** @type {boolean} */
PouchDB.Core.AllDocsWithinRangeOptions.prototype.inclusive_end;
/**
 * @record
 * @struct
 */
PouchDB.Core.AllDocsMeta = function() {};
 /** @type {!Array<string>} */
PouchDB.Core.AllDocsMeta.prototype._conflicts;
 /** @type {!PouchDB.Core.Attachments} */
PouchDB.Core.AllDocsMeta.prototype._attachments;
/**
 * @record
 * @struct
 */
PouchDB.Core.AllDocsResponse = function() {};
 /** @type {number} */
PouchDB.Core.AllDocsResponse.prototype.offset;
 /** @type {number} */
PouchDB.Core.AllDocsResponse.prototype.total_rows;
 /** @type {!Array<{doc: ?, id: string, key: string, value: {rev: string, deleted: boolean}}>} */
PouchDB.Core.AllDocsResponse.prototype.rows;
/**
 * @extends {PouchDB.Core.Options}
 * @record
 * @struct
 */
PouchDB.Core.BulkDocsOptions = function() {};
 /** @type {boolean} */
PouchDB.Core.BulkDocsOptions.prototype.new_edits;
/**
 * @extends {PouchDB.Core.Options}
 * @record
 * @struct
 */
PouchDB.Core.BulkGetOptions = function() {};
 /** @type {!Array<{id: string, rev: string}>} */
PouchDB.Core.BulkGetOptions.prototype.docs;
 /** @type {boolean} */
PouchDB.Core.BulkGetOptions.prototype.revs;
 /** @type {boolean} */
PouchDB.Core.BulkGetOptions.prototype.attachments;
 /** @type {boolean} */
PouchDB.Core.BulkGetOptions.prototype.binary;
/**
 * @record
 * @struct
 */
PouchDB.Core.BulkGetResponse = function() {};
 /** @type {{docs: !Array<({ok: ?}|{error: !PouchDB.Core.Error})>}} */
PouchDB.Core.BulkGetResponse.prototype.results;
/**
 * @record
 * @struct
 */
PouchDB.Core.ChangesMeta = function() {};
 /** @type {!Array<string>} */
PouchDB.Core.ChangesMeta.prototype._conflicts;
 /** @type {boolean} */
PouchDB.Core.ChangesMeta.prototype._deleted;
 /** @type {!PouchDB.Core.Attachments} */
PouchDB.Core.ChangesMeta.prototype._attachments;
/**
 * @record
 * @struct
 */
PouchDB.Core.ChangesOptions = function() {};
 /** @type {boolean} */
PouchDB.Core.ChangesOptions.prototype.live;
 /** @type {(string|number)} */
PouchDB.Core.ChangesOptions.prototype.since;
 /** @type {(number|boolean)} */
PouchDB.Core.ChangesOptions.prototype.timeout;
 /** @type {boolean} */
PouchDB.Core.ChangesOptions.prototype.include_docs;
 /** @type {(number|boolean)} */
PouchDB.Core.ChangesOptions.prototype.limit;
 /** @type {boolean} */
PouchDB.Core.ChangesOptions.prototype.conflicts;
 /** @type {boolean} */
PouchDB.Core.ChangesOptions.prototype.attachments;
 /** @type {boolean} */
PouchDB.Core.ChangesOptions.prototype.binary;
 /** @type {boolean} */
PouchDB.Core.ChangesOptions.prototype.descending;
 /** @type {(number|boolean)} */
PouchDB.Core.ChangesOptions.prototype.heartbeat;
 /** @type {(string|function(?, ?): ?)} */
PouchDB.Core.ChangesOptions.prototype.filter;
 /** @type {!Array<string>} */
PouchDB.Core.ChangesOptions.prototype.doc_ids;
 /** @type {!Object<string,?>} */
PouchDB.Core.ChangesOptions.prototype.query_params;
 /** @type {string} */
PouchDB.Core.ChangesOptions.prototype.view;
/**
 * @record
 * @struct
 */
PouchDB.Core.ChangesResponseChange = function() {};
 /** @type {string} */
PouchDB.Core.ChangesResponseChange.prototype.id;
 /** @type {(string|number)} */
PouchDB.Core.ChangesResponseChange.prototype.seq;
 /** @type {!Array<{rev: string}>} */
PouchDB.Core.ChangesResponseChange.prototype.changes;
 /** @type {boolean} */
PouchDB.Core.ChangesResponseChange.prototype.deleted;
 /** @type {?} */
PouchDB.Core.ChangesResponseChange.prototype.doc;
/**
 * @record
 * @struct
 */
PouchDB.Core.ChangesResponse = function() {};
 /** @type {string} */
PouchDB.Core.ChangesResponse.prototype.status;
 /** @type {(string|number)} */
PouchDB.Core.ChangesResponse.prototype.last_seq;
 /** @type {!Array<!PouchDB.Core.ChangesResponseChange<Content>>} */
PouchDB.Core.ChangesResponse.prototype.results;
/**
 * @extends {EventEmitter}
 * @record
 * @struct
 */
PouchDB.Core.Changes = function() {};

/**
 * @param {string} event
 * @param {function(!PouchDB.Core.ChangesResponseChange<Content>): ?|function(!PouchDB.Core.ChangesResponse<Content>): ?|function(?): ?} listener
 * @return {Changes}
 */
PouchDB.Core.Changes.prototype.on = function(event, listener) {};

/**
 * @return {void}
 */
PouchDB.Core.Changes.prototype.cancel = function() {};
/**
 * @extends {PouchDB.Core.Options}
 * @record
 * @struct
 */
PouchDB.Core.GetOptions = function() {};
 /** @type {boolean} */
PouchDB.Core.GetOptions.prototype.conflicts;
 /** @type {string} */
PouchDB.Core.GetOptions.prototype.rev;
 /** @type {boolean} */
PouchDB.Core.GetOptions.prototype.revs;
 /** @type {boolean} */
PouchDB.Core.GetOptions.prototype.revs_info;
 /** @type {boolean} */
PouchDB.Core.GetOptions.prototype.attachments;
 /** @type {boolean} */
PouchDB.Core.GetOptions.prototype.binary;
 /** @type {boolean} */
PouchDB.Core.GetOptions.prototype.latest;
/**
 * @extends {PouchDB.Core.Options}
 * @record
 * @struct
 */
PouchDB.Core.GetOpenRevisions = function() {};
 /** @type {(!Array<string>|string)} */
PouchDB.Core.GetOpenRevisions.prototype.open_revs;
 /** @type {boolean} */
PouchDB.Core.GetOpenRevisions.prototype.revs;
/**
 * @extends {PouchDB.Core.Options}
 * @record
 * @struct
 */
PouchDB.Core.CompactOptions = function() {};
 /** @type {number} */
PouchDB.Core.CompactOptions.prototype.interval;
/**
 * @extends {PouchDB.Core.BasicResponse}
 * @record
 * @struct
 */
PouchDB.Core.RemoveAttachmentResponse = function() {};
 /** @type {string} */
PouchDB.Core.RemoveAttachmentResponse.prototype.id;
 /** @type {string} */
PouchDB.Core.RemoveAttachmentResponse.prototype.rev;

/** @typedef {string} */
PouchDB.Plugin;
/** @const */
PouchDB.Configuration = {};
/**
 * @record
 * @struct
 */
PouchDB.Configuration.CommonDatabaseConfiguration = function() {};
 /** @type {string} */
PouchDB.Configuration.CommonDatabaseConfiguration.prototype.name;
 /** @type {string} */
PouchDB.Configuration.CommonDatabaseConfiguration.prototype.adapter;
/**
 * @extends {PouchDB.Configuration.CommonDatabaseConfiguration}
 * @record
 * @struct
 */
PouchDB.Configuration.LocalDatabaseConfiguration = function() {};
 /** @type {boolean} */
PouchDB.Configuration.LocalDatabaseConfiguration.prototype.auto_compaction;
 /** @type {number} */
PouchDB.Configuration.LocalDatabaseConfiguration.prototype.revs_limit;
/**
 * @record
 * @struct
 */
PouchDB.Configuration.RemoteRequesterConfiguration = function() {};
 /** @type {number} */
PouchDB.Configuration.RemoteRequesterConfiguration.prototype.timeout;
 /** @type {boolean} */
PouchDB.Configuration.RemoteRequesterConfiguration.prototype.cache;
 /** @type {!Object<string,string>} */
PouchDB.Configuration.RemoteRequesterConfiguration.prototype.headers;
 /** @type {boolean} */
PouchDB.Configuration.RemoteRequesterConfiguration.prototype.withCredentials;
/**
 * @extends {PouchDB.Configuration.CommonDatabaseConfiguration}
 * @record
 * @struct
 */
PouchDB.Configuration.RemoteDatabaseConfiguration = function() {};
 /** @type {!PouchDB.Configuration.RemoteRequesterConfiguration} */
PouchDB.Configuration.RemoteDatabaseConfiguration.prototype.ajax;
 /** @type {{username: string, password: string}} */
PouchDB.Configuration.RemoteDatabaseConfiguration.prototype.auth;
 /** @type {boolean} */
PouchDB.Configuration.RemoteDatabaseConfiguration.prototype.skip_setup;

/** @typedef {(!PouchDB.Configuration.LocalDatabaseConfiguration|!PouchDB.Configuration.RemoteDatabaseConfiguration)} */
PouchDB.Configuration.DatabaseConfiguration;
/**
 * @extends {EventEmitter}
 * @record
 * @struct
 */
PouchDB.Static = function() {};
 /** @type {string} */
PouchDB.Static.prototype.version;
 /** @type {!debug.IDebug} */
PouchDB.Static.prototype.debug;

/* TODO: ConstructSignature: PouchDB */

/**
 * @param {string} plugin
 * @return {!PouchDB.Static}
 */
PouchDB.Static.prototype.plugin = function(plugin) {};

/**
 * @param {string} event
 * @param {function(string): ?} listener
 * @return {Static}
 */
PouchDB.Static.prototype.on = function(event, listener) {};

/**
 * The returned object is a constructor function that works the same as PouchDB,
 * except that whenever you invoke it (e.g. with new), the given options will be passed in by default.
 * @param {(!PouchDB.Configuration.LocalDatabaseConfiguration|!PouchDB.Configuration.RemoteDatabaseConfiguration)} options
 * @return {function(new: (!PouchDB.Database<Content>), string, (!PouchDB.Configuration.LocalDatabaseConfiguration|!PouchDB.Configuration.RemoteDatabaseConfiguration)): ?}
 */
PouchDB.Static.prototype.defaults = function(options) {};
/**
 * @record
 * @struct
 */
PouchDB.Database = function() {};

/**
 * Fetch all documents matching the given options.
 * @template Model
 * @param {(!PouchDB.Core.AllDocsWithKeyOptions|!PouchDB.Core.AllDocsOptions|!PouchDB.Core.AllDocsWithKeysOptions|!PouchDB.Core.AllDocsWithinRangeOptions)=} options
 * @return {!Promise<!PouchDB.Core.AllDocsResponse<?>>}
 */
PouchDB.Database.prototype.allDocs = function(options) {};

/**
 * Create, update or delete multiple documents. The docs argument is an array of documents.
 * If you omit an _id parameter on a given document, the database will create a new document and assign the ID for you.
 * To update a document, you must include both an _id parameter and a _rev parameter,
 * which should match the ID and revision of the document on which to base your updates.
 * Finally, to delete a document, include a _deleted parameter with the value true.
 * Create, update or delete multiple documents. The docs argument is an array of documents.
 * If you omit an _id parameter on a given document, the database will create a new document and assign the ID for you.
 * To update a document, you must include both an _id parameter and a _rev parameter,
 * which should match the ID and revision of the document on which to base your updates.
 * Finally, to delete a document, include a _deleted parameter with the value true.
 * @template Model
 * @param {!Array<?>} docs
 * @param {!PouchDB.Core.BulkDocsOptions=} options
 * @param {function(!PouchDB.Core.Error, !Array<!PouchDB.Core.Response>): void=} callback
 * @return {void|!Promise<!Array<!PouchDB.Core.Response>>}
 */
PouchDB.Database.prototype.bulkDocs = function(docs, options, callback) {};

/**
 * Compact the database
 * Compact the database
 * @param {!PouchDB.Core.CompactOptions=} options
 * @param {function(!PouchDB.Core.Error, !PouchDB.Core.Response): void=} callback
 * @return {!Promise<!PouchDB.Core.Response>|void}
 */
PouchDB.Database.prototype.compact = function(options, callback) {};

/**
 * Destroy the database
 * Destroy the database
 * @param {!PouchDB.Core.Options=} options
 * @param {function(!PouchDB.Core.Error, ?): void=} callback
 * @return {void|!Promise<void>}
 */
PouchDB.Database.prototype.destroy = function(options, callback) {};

/**
 * Fetch a document
 * Fetch a document
 * Fetch a document
 * Fetch a document
 * @template Model
 * @param {string} docId
 * @param {!PouchDB.Core.GetOptions|!PouchDB.Core.GetOpenRevisions=} options
 * @param {function(!PouchDB.Core.Error, ?): void|function(!PouchDB.Core.Error, !Array<!PouchDB.Core.Revision<?>>): void=} callback
 * @return {void|!Promise<?>|!Promise<!Array<!PouchDB.Core.Revision<?>>>}
 */
PouchDB.Database.prototype.get = function(docId, options, callback) {};

/**
 * Create a new document without providing an id.
 * 
 * You should prefer put() to post(), because when you post(), you are
 * missing an opportunity to use allDocs() to sort documents by _id
 * (because your _ids are random).
 * 
 * @see {\@link https://pouchdb.com/2014/06/17/12-pro-tips-for-better-code-with-pouchdb.html|PouchDB Pro Tips}
 * Create a new document without providing an id.
 * 
 * You should prefer put() to post(), because when you post(), you are
 * missing an opportunity to use allDocs() to sort documents by _id
 * (because your _ids are random).
 * 
 * @see {\@link https://pouchdb.com/2014/06/17/12-pro-tips-for-better-code-with-pouchdb.html|PouchDB Pro Tips}
 * @template Model
 * @param {?} doc
 * @param {!PouchDB.Core.Options=} options
 * @param {function(!PouchDB.Core.Error, !PouchDB.Core.Response): void=} callback
 * @return {void|!Promise<!PouchDB.Core.Response>}
 */
PouchDB.Database.prototype.post = function(doc, options, callback) {};

/**
 * Create a new document or update an existing document.
 * 
 * If the document already exists, you must specify its revision _rev,
 * otherwise a conflict will occur.
 * There are some restrictions on valid property names of the documents.
 * If you try to store non-JSON data (for instance Date objects) you may
 * see inconsistent results.
 * Create a new document or update an existing document.
 * 
 * If the document already exists, you must specify its revision _rev,
 * otherwise a conflict will occur.
 * There are some restrictions on valid property names of the documents.
 * If you try to store non-JSON data (for instance Date objects) you may
 * see inconsistent results.
 * @template Model
 * @param {?} doc
 * @param {!PouchDB.Core.Options=} options
 * @param {function(!PouchDB.Core.Error, !PouchDB.Core.Response): void=} callback
 * @return {void|!Promise<!PouchDB.Core.Response>}
 */
PouchDB.Database.prototype.put = function(doc, options, callback) {};

/**
 * Remove a doc from the database
 * Remove a doc from the database
 * Remove a doc from the database
 * Remove a doc from the database
 * @param {?|string} doc_or_docId
 * @param {!PouchDB.Core.Options|string=} options_or_revision
 * @param {function(!PouchDB.Core.Error, !PouchDB.Core.Response): void|!PouchDB.Core.Options=} callback_or_options
 * @param {function(!PouchDB.Core.Error, !PouchDB.Core.Response): void=} callback
 * @return {void|!Promise<!PouchDB.Core.Response>}
 */
PouchDB.Database.prototype.remove = function(doc_or_docId, options_or_revision, callback_or_options, callback) {};

/**
 * Get database information
 * Get database information
 * @param {function(!PouchDB.Core.Error, !PouchDB.Core.DatabaseInfo): void=} callback
 * @return {void|!Promise<!PouchDB.Core.DatabaseInfo>}
 */
PouchDB.Database.prototype.info = function(callback) {};

/**
 * A list of changes made to documents in the database, in the order they were made.
 * It returns an object with the method cancel(), which you call if you don’t want to listen to new changes anymore.
 * 
 * It is an event emitter and will emit a 'change' event on each document change,
 * a 'complete' event when all the changes have been processed, and an 'error' event when an error occurs.
 * Calling cancel() will unsubscribe all event listeners automatically.
 * A list of changes made to documents in the database, in the order they were made.
 * It returns an object with the method cancel(), which you call if you don’t want to listen to new changes anymore.
 * 
 * It is an event emitter and will emit a 'change' event on each document change,
 * a 'complete' event when all the changes have been processed, and an 'error' event when an error occurs.
 * Calling cancel() will unsubscribe all event listeners automatically.
 * @template Model
 * @param {!PouchDB.Core.ChangesOptions=} options
 * @param {function(!PouchDB.Core.Error, !PouchDB.Core.Changes<?>): void=} callback
 * @return {void|!PouchDB.Core.Changes<?>}
 */
PouchDB.Database.prototype.changes = function(options, callback) {};

/**
 * Close the database
 * Close the database
 * @param {function(!PouchDB.Core.Error, ?): void=} callback
 * @return {void|!Promise<void>}
 */
PouchDB.Database.prototype.close = function(callback) {};

/**
 * Attaches a binary object to a document.
 * This method will update an existing document to add the attachment, so it requires a rev if the document already exists.
 * If the document doesn’t already exist, then this method will create an empty document containing the attachment.
 * Attaches a binary object to a document.
 * This method will update an existing document to add the attachment, so it requires a rev if the document already exists.
 * If the document doesn’t already exist, then this method will create an empty document containing the attachment.
 * Attaches a binary object to a document.
 * This method will update an existing document to add the attachment, so it requires a rev if the document already exists.
 * If the document doesn’t already exist, then this method will create an empty document containing the attachment.
 * Attaches a binary object to a document.
 * This method will update an existing document to add the attachment, so it requires a rev if the document already exists.
 * If the document doesn’t already exist, then this method will create an empty document containing the attachment.
 * @param {string} docId
 * @param {string} attachmentId
 * @param {string|(string|!Buffer|!Blob)} rev_or_attachment
 * @param {(string|!Buffer|!Blob)|string} attachment_or_type
 * @param {string|function(!PouchDB.Core.Error, !PouchDB.Core.Response): void=} type_or_callback
 * @param {function(!PouchDB.Core.Error, !PouchDB.Core.Response): void=} callback
 * @return {void|!Promise<!PouchDB.Core.Response>}
 */
PouchDB.Database.prototype.putAttachment = function(docId, attachmentId, rev_or_attachment, attachment_or_type, type_or_callback, callback) {};

/**
 * Get attachment data
 * Get attachment data
 * Get attachment data
 * @param {string} docId
 * @param {string} attachmentId
 * @param {{rev: string}|function(!PouchDB.Core.Error, (!Buffer|!Blob)): void=} options_or_callback
 * @param {function(!PouchDB.Core.Error, (!Buffer|!Blob)): void=} callback
 * @return {void|!Promise<(!Buffer|!Blob)>}
 */
PouchDB.Database.prototype.getAttachment = function(docId, attachmentId, options_or_callback, callback) {};

/**
 * Delete an attachment from a doc. You must supply the rev of the existing doc.
 * Delete an attachment from a doc. You must supply the rev of the existing doc.
 * @param {string} docId
 * @param {string} attachmentId
 * @param {string} rev
 * @param {function(!PouchDB.Core.Error, !PouchDB.Core.RemoveAttachmentResponse): void=} callback
 * @return {void|!Promise<!PouchDB.Core.RemoveAttachmentResponse>}
 */
PouchDB.Database.prototype.removeAttachment = function(docId, attachmentId, rev, callback) {};

/**
 * Given a set of document/revision IDs, returns the document bodies (and, optionally, attachment data) for each ID/revision pair specified.
 * Given a set of document/revision IDs, returns the document bodies (and, optionally, attachment data) for each ID/revision pair specified.
 * @template Model
 * @param {!PouchDB.Core.BulkGetOptions} options
 * @param {function(!PouchDB.Core.Error, !PouchDB.Core.BulkGetResponse<?>): void=} callback
 * @return {void|!Promise<!PouchDB.Core.BulkGetResponse<?>>}
 */
PouchDB.Database.prototype.bulkGet = function(options, callback) {};

/**
 * Given a set of document/revision IDs, returns the subset of those that do not correspond to revisions stored in the database
 * Given a set of document/revision IDs, returns the subset of those that do not correspond to revisions stored in the database
 * @param {!PouchDB.Core.RevisionDiffOptions} diff
 * @param {function(!PouchDB.Core.Error, !PouchDB.Core.RevisionDiffResponse): void=} callback
 * @return {void|!Promise<!PouchDB.Core.RevisionDiffResponse>}
 */
PouchDB.Database.prototype.revsDiff = function(diff, callback) {};
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "pouchdb-core"
/** @const */
tsickle_declare_module.pouchdb_core = {};
 /** @type {!PouchDB.Static} */
tsickle_declare_module.pouchdb_core.PouchDb;

/* TODO: ExportAssignment in tsickle_declare_module.pouchdb_core */
 /** @type {!PouchDB.Static} */
var PouchDB;