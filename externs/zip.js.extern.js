/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/zip.js/index.d.ts:
/**
 * @record
 * @struct
 */
function FileEntry() {}
/** @const */
var zip = {};
 /** @type {boolean} */
zip.useWebWorkers;
 /** @type {string} */
zip.workerScriptsPath;
 /** @type {{deflater: !Array<string>, inflater: !Array<string>}} */
zip.workerScripts;
/**
 * @constructor
 * @struct
 */
zip.Reader = function() {};
 /** @type {number} */
zip.Reader.prototype.size;

/**
 * @param {function(): void} callback
 * @param {function(?): void} onerror
 * @return {void}
 */
zip.Reader.prototype.init = function(callback, onerror) {};

/**
 * @param {number} index
 * @param {number} length
 * @param {function(!Uint8Array): void} callback
 * @param {function(?): void=} onerror
 * @return {void}
 */
zip.Reader.prototype.readUint8Array = function(index, length, callback, onerror) {};

/**
 * @constructor
 * @struct
 * @param {string} text
 */
zip.TextReader = function(text) {};

/**
 * @constructor
 * @struct
 * @param {!Blob} blob
 */
zip.BlobReader = function(blob) {};

/**
 * @constructor
 * @struct
 * @param {string} dataURI
 */
zip.Data64URIReader = function(dataURI) {};

/**
 * @constructor
 * @struct
 * @param {string} url
 */
zip.HttpReader = function(url) {};

/**
 * @param {!zip.Reader} reader
 * @param {function(!zip.ZipReader): void} callback
 * @param {function(?): void=} onerror
 * @return {void}
 */
zip.createReader = function(reader, callback, onerror) {};
/**
 * @constructor
 * @struct
 */
zip.ZipReader = function() {};

/**
 * @param {function(!Array<!zip.Entry>): void} callback
 * @return {void}
 */
zip.ZipReader.prototype.getEntries = function(callback) {};

/**
 * @param {function(): void=} callback
 * @return {void}
 */
zip.ZipReader.prototype.close = function(callback) {};
/**
 * @record
 * @struct
 */
zip.Entry = function() {};
 /** @type {string} */
zip.Entry.prototype.filename;
 /** @type {boolean} */
zip.Entry.prototype.directory;
 /** @type {number} */
zip.Entry.prototype.compressedSize;
 /** @type {number} */
zip.Entry.prototype.uncompressedSize;
 /** @type {!Date} */
zip.Entry.prototype.lastModDate;
 /** @type {number} */
zip.Entry.prototype.lastModDateRaw;
 /** @type {string} */
zip.Entry.prototype.comment;
 /** @type {number} */
zip.Entry.prototype.crc32;

/**
 * @param {!zip.Writer} writer
 * @param {function(?): void} onend
 * @param {function(number, number): void=} onprogress
 * @param {boolean=} checkCrc32
 * @return {void}
 */
zip.Entry.prototype.getData = function(writer, onend, onprogress, checkCrc32) {};
/**
 * @constructor
 * @struct
 */
zip.Writer = function() {};

/**
 * @param {function(): void} callback
 * @param {function(?): void=} onerror
 * @return {void}
 */
zip.Writer.prototype.init = function(callback, onerror) {};

/**
 * @param {!Uint8Array} array
 * @param {function(): void} callback
 * @param {function(?): void=} onerror
 * @return {void}
 */
zip.Writer.prototype.writeUint8Array = function(array, callback, onerror) {};

/**
 * @param {function(?): void} callback
 * @param {function(?): void=} onerror
 * @return {void}
 */
zip.Writer.prototype.getData = function(callback, onerror) {};

/**
 * @constructor
 * @struct
 * @param {string} encoding
 */
zip.TextWriter = function(encoding) {};

/**
 * @constructor
 * @struct
 * @param {string} contentType
 */
zip.BlobWriter = function(contentType) {};

/**
 * @constructor
 * @struct
 * @param {!FileEntry} fileEntry
 */
zip.FileWriter = function(fileEntry) {};

/**
 * @constructor
 * @struct
 * @param {string=} mimeString
 */
zip.Data64URIWriter = function(mimeString) {};

/**
 * @param {!zip.Writer} writer
 * @param {function(!zip.ZipWriter): void} callback
 * @param {function(?): void=} onerror
 * @param {boolean=} dontDeflate
 * @return {void}
 */
zip.createWriter = function(writer, callback, onerror, dontDeflate) {};
/**
 * @record
 * @struct
 */
zip.WriteOptions = function() {};
 /** @type {boolean} */
zip.WriteOptions.prototype.directory;
 /** @type {number} */
zip.WriteOptions.prototype.level;
 /** @type {string} */
zip.WriteOptions.prototype.comment;
 /** @type {!Date} */
zip.WriteOptions.prototype.lastModDate;
 /** @type {number} */
zip.WriteOptions.prototype.version;
/**
 * @constructor
 * @struct
 */
zip.ZipWriter = function() {};

/**
 * @param {string} name
 * @param {!zip.Reader} reader
 * @param {function(): void} onend
 * @param {function(number, number): void=} onprogress
 * @param {!zip.WriteOptions=} options
 * @return {void}
 */
zip.ZipWriter.prototype.add = function(name, reader, onend, onprogress, options) {};

/**
 * @param {function(?): void} callback
 * @return {void}
 */
zip.ZipWriter.prototype.close = function(callback) {};
