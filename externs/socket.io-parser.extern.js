/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/socket.io-parser/index.d.ts:
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "socket.io-parser"
/** @const */
tsickle_declare_module.socket_io_parser = {};
/** @const */
tsickle_declare_module.socket_io_parser.Parser = {};

/** @typedef {{type: number, data: ?, id: number}} */
tsickle_declare_module.socket_io_parser.Parser.Packet;

/** @typedef {(string|?|!ArrayBuffer|!Blob)} */
tsickle_declare_module.socket_io_parser.Parser.EncodedPacket;
 /** @type {!Array<string>} */
tsickle_declare_module.socket_io_parser.Parser.types;
 /** @type {number} */
tsickle_declare_module.socket_io_parser.Parser.CONNECT;
 /** @type {number} */
tsickle_declare_module.socket_io_parser.Parser.DISCONNECT;
 /** @type {number} */
tsickle_declare_module.socket_io_parser.Parser.EVENT;
 /** @type {number} */
tsickle_declare_module.socket_io_parser.Parser.ACK;
 /** @type {number} */
tsickle_declare_module.socket_io_parser.Parser.ERROR;
 /** @type {number} */
tsickle_declare_module.socket_io_parser.Parser.BINARY_EVENT;
 /** @type {number} */
tsickle_declare_module.socket_io_parser.Parser.BINARY_ACK;
/**
 * @constructor
 * @struct
 */
tsickle_declare_module.socket_io_parser.Parser.Encoder = function() {};

/**
 * @param {{type: number, data: ?, id: number}} packet
 * @param {function(!Array<(string|?|!ArrayBuffer|!Blob)>): void} callback
 * @return {void}
 */
tsickle_declare_module.socket_io_parser.Parser.Encoder.prototype.encode = function(packet, callback) {};
/**
 * @constructor
 * @struct
 */
tsickle_declare_module.socket_io_parser.Parser.Decoder = function() {};

/**
 * @param {string} event
 * @param {function({type: number, data: ?, id: number}): void} callback
 * @return {void}
 */
tsickle_declare_module.socket_io_parser.Parser.Decoder.prototype.on = function(event, callback) {};

/**
 * @param {(string|?|!ArrayBuffer|!Blob)} encodedPacket
 * @return {void}
 */
tsickle_declare_module.socket_io_parser.Parser.Decoder.prototype.add = function(encodedPacket) {};

/**
 * @return {void}
 */
tsickle_declare_module.socket_io_parser.Parser.Decoder.prototype.destroy = function() {};

/* TODO: ExportAssignment in tsickle_declare_module.socket_io_parser */
