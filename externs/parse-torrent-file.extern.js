/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/parse-torrent-file/index.d.ts:

/**
 * @param {(?|!ParseTorrentFile.Torrent)} torrent
 * @return {!ParseTorrentFile.Instance}
 */
function ParseTorrentFile(torrent) {}

/**
 * @param {(?|!ParseTorrentFile.Torrent)} torrent
 * @return {!ParseTorrentFile.Instance}
 */
ParseTorrentFile.decode = function(torrent) {};

/**
 * @param {!ParseTorrentFile.Instance} parsed
 * @return {?}
 */
ParseTorrentFile.encode = function(parsed) {};
/**
 * @record
 * @struct
 */
ParseTorrentFile.TorrentInfo = function() {};

/* TODO: PropertySignature: ParseTorrentFile.'name.utf-8' */
 /** @type {string} */
ParseTorrentFile.TorrentInfo.prototype.name;
 /** @type {!Array<!File>} */
ParseTorrentFile.TorrentInfo.prototype.files;

/* TODO: PropertySignature: ParseTorrentFile.'piece length' */
 /** @type {number} */
ParseTorrentFile.TorrentInfo.prototype.pieces;
 /** @type {boolean} */
ParseTorrentFile.TorrentInfo.prototype.private;
/**
 * @record
 * @struct
 */
ParseTorrentFile.Torrent = function() {};
 /** @type {!ParseTorrentFile.TorrentInfo} */
ParseTorrentFile.Torrent.prototype.info;

/* TODO: PropertySignature: ParseTorrentFile.'creation date' */

/* TODO: PropertySignature: ParseTorrentFile.'created by' */
 /** @type {?} */
ParseTorrentFile.Torrent.prototype.comment;

/* TODO: PropertySignature: ParseTorrentFile.'announce-list' */
 /** @type {string} */
ParseTorrentFile.Torrent.prototype.announce;

/* TODO: PropertySignature: ParseTorrentFile.'url-list' */
/**
 * @record
 * @struct
 */
ParseTorrentFile.ParsedFile = function() {};
 /** @type {string} */
ParseTorrentFile.ParsedFile.prototype.path;
 /** @type {string} */
ParseTorrentFile.ParsedFile.prototype.name;
 /** @type {number} */
ParseTorrentFile.ParsedFile.prototype.length;
 /** @type {number} */
ParseTorrentFile.ParsedFile.prototype.offset;
/**
 * @record
 * @struct
 */
ParseTorrentFile.Instance = function() {};
 /** @type {!ParseTorrentFile.TorrentInfo} */
ParseTorrentFile.Instance.prototype.info;
 /** @type {?} */
ParseTorrentFile.Instance.prototype.infoBuffer;
 /** @type {string} */
ParseTorrentFile.Instance.prototype.infoHash;
 /** @type {?} */
ParseTorrentFile.Instance.prototype.infoHashBuffer;
 /** @type {string} */
ParseTorrentFile.Instance.prototype.name;
 /** @type {boolean} */
ParseTorrentFile.Instance.prototype.private;
 /** @type {!Date} */
ParseTorrentFile.Instance.prototype.created;
 /** @type {string} */
ParseTorrentFile.Instance.prototype.createdBy;
 /** @type {!Array<string>} */
ParseTorrentFile.Instance.prototype.announce;
 /** @type {!Array<string>} */
ParseTorrentFile.Instance.prototype.urlList;
 /** @type {number} */
ParseTorrentFile.Instance.prototype.pieceLength;
 /** @type {number} */
ParseTorrentFile.Instance.prototype.lastPieceLength;
 /** @type {!Array<string>} */
ParseTorrentFile.Instance.prototype.pieces;
 /** @type {number} */
ParseTorrentFile.Instance.prototype.length;
 /** @type {!Array<!ParseTorrentFile.ParsedFile>} */
ParseTorrentFile.Instance.prototype.files;

/* TODO: ExportAssignment in  */