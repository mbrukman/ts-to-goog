/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/bittorrent-protocol/index.d.ts:

/* TODO: ImportDeclaration in  */
 /** @type {!BittorrentProtocol.BittorrentProtocol} */
var BittorrentProtocol;
/**
 * @record
 * @struct
 */
BittorrentProtocol.BittorrentProtocol = function() {};

/* TODO: ConstructSignature: BittorrentProtocol */

/* TODO: CallSignature: BittorrentProtocol */
/**
 * @record
 * @struct
 */
BittorrentProtocol.ExtensionConstructor = function() {};

/* TODO: ConstructSignature: BittorrentProtocol */
/**
 * @record
 * @struct
 */
BittorrentProtocol.Extension = function() {};
 /** @type {string} */
BittorrentProtocol.Extension.prototype.name;

/**
 * @param {string} infoHash
 * @param {string} peerId
 * @param {!Object<string,boolean>} extensions
 * @return {void}
 */
BittorrentProtocol.Extension.prototype.onHandshake = function(infoHash, peerId, extensions) {};

/**
 * @param {!Object<string,?>} handshake
 * @return {void}
 */
BittorrentProtocol.Extension.prototype.onExtendedHandshake = function(handshake) {};

/**
 * @param {?} buf
 * @return {void}
 */
BittorrentProtocol.Extension.prototype.onMessage = function(buf) {};
/**
 * @record
 * @struct
 */
BittorrentProtocol.Request = function() {};
 /** @type {number} */
BittorrentProtocol.Request.prototype.piece;
 /** @type {number} */
BittorrentProtocol.Request.prototype.offset;
 /** @type {number} */
BittorrentProtocol.Request.prototype.length;

/**
 * @return {void}
 */
BittorrentProtocol.Request.prototype.callback = function() {};
/**
 * @record
 * @struct
 */
BittorrentProtocol.Wire = function() {};
 /** @type {string} */
BittorrentProtocol.Wire.prototype.peerId;
 /** @type {?} */
BittorrentProtocol.Wire.prototype.peerIdBuffer;
 /** @type {string} */
BittorrentProtocol.Wire.prototype.type;
 /** @type {boolean} */
BittorrentProtocol.Wire.prototype.amChoking;
 /** @type {boolean} */
BittorrentProtocol.Wire.prototype.amInterested;
 /** @type {boolean} */
BittorrentProtocol.Wire.prototype.peerChoking;
 /** @type {boolean} */
BittorrentProtocol.Wire.prototype.peerInterested;
 /** @type {!Array<!BittorrentProtocol.Request>} */
BittorrentProtocol.Wire.prototype.requests;
 /** @type {!Array<!BittorrentProtocol.Request>} */
BittorrentProtocol.Wire.prototype.peerRequests;
 /** @type {!Object<number,string>} */
BittorrentProtocol.Wire.prototype.extendedMapping;
 /** @type {!Object<string,number>} */
BittorrentProtocol.Wire.prototype.peerExtendedMapping;

/**
 * @param {boolean} enable
 * @return {void}
 */
BittorrentProtocol.Wire.prototype.setKeepAlive = function(enable) {};

/**
 * @param {number} ms
 * @param {boolean=} unref
 * @return {void}
 */
BittorrentProtocol.Wire.prototype.setTimeot = function(ms, unref) {};

/**
 * @return {void}
 */
BittorrentProtocol.Wire.prototype.destroy = function() {};

/**
 * @param {!BittorrentProtocol.ExtensionConstructor} ext
 * @return {void}
 */
BittorrentProtocol.Wire.prototype.use = function(ext) {};

/**
 * @param {(string|?)} infoHash
 * @param {(string|?)} peerId
 * @param {?=} extensions
 * @return {void}
 */
BittorrentProtocol.Wire.prototype.handshake = function(infoHash, peerId, extensions) {};

/**
 * @return {void}
 */
BittorrentProtocol.Wire.prototype.choke = function() {};

/**
 * @return {void}
 */
BittorrentProtocol.Wire.prototype.unchoke = function() {};

/**
 * @return {void}
 */
BittorrentProtocol.Wire.prototype.interested = function() {};

/**
 * @return {void}
 */
BittorrentProtocol.Wire.prototype.uninterested = function() {};

/**
 * @param {number} index
 * @return {void}
 */
BittorrentProtocol.Wire.prototype.have = function(index) {};

/**
 * @param {?} bitfield
 * @return {void}
 */
BittorrentProtocol.Wire.prototype.bitfield = function(bitfield) {};

/**
 * @template T
 * @param {number} index
 * @param {number} offset
 * @param {number} length
 * @param {function(!Error): T=} cb
 * @return {(void|T)}
 */
BittorrentProtocol.Wire.prototype.request = function(index, offset, length, cb) {};

/**
 * @param {number} index
 * @param {number} offset
 * @param {?} buffer
 * @return {void}
 */
BittorrentProtocol.Wire.prototype.piece = function(index, offset, buffer) {};

/**
 * @param {number} index
 * @param {number} offset
 * @param {number} length
 * @return {void}
 */
BittorrentProtocol.Wire.prototype.cancel = function(index, offset, length) {};

/**
 * @param {number} port
 * @return {void}
 */
BittorrentProtocol.Wire.prototype.port = function(port) {};

/**
 * @param {(string|number)} ext
 * @param {?} obj
 * @return {void}
 */
BittorrentProtocol.Wire.prototype.extend = function(ext, obj) {};

/**
 * @param {string} event
 * @param {function(?): void|function(): void|function(number): void|function(string, string, !Array<!BittorrentProtocol.Extension>): void|function(number, number, number, function(): void): void|function(number, number, ?): void|function(number, number, number): void|function(string, ?): void|function(!Array<?>): void} listener
 * @return {Wire|void}
 */
BittorrentProtocol.Wire.prototype.on = function(event, listener) {};

/* TODO: ExportAssignment in  */
