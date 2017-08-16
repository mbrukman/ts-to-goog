/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/tar/index.d.ts:

/* TODO: ImportEqualsDeclaration in  */
/**
 * @record
 * @struct
 */
function HeaderProperties() {}
 /** @type {string} */
HeaderProperties.prototype.path;
 /** @type {number} */
HeaderProperties.prototype.mode;
 /** @type {boolean} */
HeaderProperties.prototype.noProprietary;
 /** @type {number} */
HeaderProperties.prototype.uid;
 /** @type {number} */
HeaderProperties.prototype.gid;
 /** @type {number} */
HeaderProperties.prototype.size;
 /** @type {number} */
HeaderProperties.prototype.mtime;
 /** @type {string} */
HeaderProperties.prototype.uname;
 /** @type {string} */
HeaderProperties.prototype.gname;
 /** @type {number} */
HeaderProperties.prototype.devmaj;
 /** @type {number} */
HeaderProperties.prototype.devmin;
/**
 * @record
 * @struct
 */
function ExtractOptions() {}
 /** @type {string} */
ExtractOptions.prototype.type;
 /** @type {boolean} */
ExtractOptions.prototype.Directory;
 /** @type {string} */
ExtractOptions.prototype.path;
 /** @type {number} */
ExtractOptions.prototype.strip;
/**
 * @extends {NodeJS.ReadWriteStream}
 * @record
 * @struct
 */
function ParseStream() {}
 /** @type {number} */
ParseStream.prototype.position;
 /** @type {!internal.Stream} */
ParseStream.prototype._stream;
 /** @type {boolean} */
ParseStream.prototype._ended;

/**
 * @return {void}
 */
ParseStream.prototype._streamEnd = function() {};

/**
 * @param {?} c
 * @return {void}
 */
ParseStream.prototype._process = function(c) {};

/**
 * @param {?} c
 * @return {void}
 */
ParseStream.prototype._startEntry = function(c) {};
/**
 * @extends {NodeJS.ReadWriteStream}
 * @record
 * @struct
 */
function PackStream() {}
 /** @type {boolean} */
PackStream.prototype.writable;
 /** @type {boolean} */
PackStream.prototype.readable;
 /** @type {boolean} */
PackStream.prototype._noProprietary;
 /** @type {?} */
PackStream.prototype._global;
 /** @type {!Array<!internal.Stream>} */
PackStream.prototype._buffer;
 /** @type {?} */
PackStream.prototype._currentEntry;
 /** @type {boolean} */
PackStream.prototype._processing;
 /** @type {!internal.Stream} */
PackStream.prototype._pipeRoot;
 /** @type {boolean} */
PackStream.prototype._needDrain;
 /** @type {boolean} */
PackStream.prototype._paused;

/**
 * @param {?} props
 * @return {void}
 */
PackStream.prototype.addGlobal = function(props) {};

/**
 * @param {!internal.Stream} stream
 * @return {boolean}
 */
PackStream.prototype.add = function(stream) {};

/**
 * @return {void}
 */
PackStream.prototype.destroy = function() {};

/**
 * @return {void}
 */
PackStream.prototype._process = function() {};
/**
 * @extends {ParseStream}
 * @record
 * @struct
 */
function ExtractStream() {}
 /** @type {{path: number, mode: number, uid: number, gid: number, size: number, mtime: number, cksum: number, type: number, linkpath: number, ustar: number, ustarvar: number, uname: number, gname: number, devmaj: number, devmin: number, prefix: number, fill: number}} */
var fields;
 /** @type {!Array<number>} */
var fieldSize;
 /** @type {!Array<number>} */
var fieldOffs;
 /** @type {!Array<number>} */
var fieldEnds;
 /** @type {{0: string,  : string, : string, 1: string, 2: string, 3: string, 4: string, 5: string, 6: string, 7: string, g: string, x: string, A: string, D: string, I: string, K: string, L: string, M: string, N: string, S: string, V: string, X: string, File: string, OldFile: string, Link: string, SymbolicLick: string, CharacterDevice: string, BlockDevice: string, Directory: string, FIFO: string, ContiguousFile: string, GlobalExtendedHeader: string, ExtendedHeader: string, SolarisACL: string, GNUDumpDir: string, INode: string, NextFileHasLonLinkPath: string, NextFileHasLongPath: string, ContinuationFile: string, TapeVolumeHeader: string, OldExtendedHeader: string}} */
var types;
 /** @type {{suid: number, sgid: number, svtx: number, uread: number, uwrite: number, uexec: number, gread: number, gwrite: number, gexec: number, oread: number, owrite: number, oexec: number}} */
var modes;
 /** @type {{mode: boolean, uid: boolean, gid: boolean, size: boolean, mtime: boolean, devmaj: boolean, devmin: boolean, cksum: boolean, atime: boolean, ctime: boolean, dev: boolean, ino: boolean, nlink: boolean}} */
var numeric;
 /** @type {{atime: boolean, charset: boolean, comment: boolean, ctime: boolean, gid: boolean, gname: boolean, linkpat: boolean, mtime: boolean, path: boolean, realtime: boolean, security: boolean, size: boolean, uid: boolean, uname: boolean}} */
var knownExtended;
 /** @type {number} */
var headerSize;
 /** @type {number} */
var blockSize;

/**
 * Returns a writable stream. Write tar data to it and it will emit entry events for each entry parsed from the tarball. This is used by tar.Extract.
 * @return {?}
 */
function Parse() {}

/**
 * Returns a through stream. Use fstream to write files into the pack stream and you will receive tar archive data from the pack stream.
 * This only works with directories, it does not work with individual files.
 * The optional properties object are used to set properties in the tar 'Global Extended Header'.
 * @param {?=} props
 * @return {?}
 */
function Pack(props) {}

/**
 * Returns a through stream. Write tar data to the stream and the files in the tarball will be extracted onto the filesystem.
 * Returns a through stream. Write tar data to the stream and the files in the tarball will be extracted onto the filesystem.
 * options can be:
 * ```
 * {
 *   path: '/path/to/extract/tar/into',
 *   strip: 0, // how many path segments to strip from the root when extracting
 * }
 * ```
 * options also get passed to the fstream.Writer instance that tar uses internally.
 * @param {string|?} path_or_opts
 * @return {?}
 */
function Extract(path_or_opts) {}
