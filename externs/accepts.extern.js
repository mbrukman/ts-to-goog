/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/accepts/index.d.ts:
/** @const */
var accepts = {};
/**
 * @record
 * @struct
 */
accepts.Headers = function() {};

/* TODO: IndexSignature: accepts */
/**
 * @record
 * @struct
 */
accepts.Accepts = function() {};

/**
 * Return the first accepted charset. If nothing in `charsets` is accepted, then `false` is returned.
 * @param {...!Array<string>|string} charsets
 * @return {(string|boolean)}
 */
accepts.Accepts.prototype.charset = function(charsets) {};

/**
 * Return the charsets that the request accepts, in the order of the client's preference (most preferred first).
 * @return {!Array<string>}
 */
accepts.Accepts.prototype.charsets = function() {};

/**
 * Return the first accepted encoding. If nothing in `encodings` is accepted, then `false` is returned.
 * @param {...!Array<string>|string} encodings
 * @return {(string|boolean)}
 */
accepts.Accepts.prototype.encoding = function(encodings) {};

/**
 * Return the encodings that the request accepts, in the order of the client's preference (most preferred first).
 * @return {!Array<string>}
 */
accepts.Accepts.prototype.encodings = function() {};

/**
 * Return the first accepted language. If nothing in `languages` is accepted, then `false` is returned.
 * @param {...!Array<string>|string} languages
 * @return {(string|boolean)}
 */
accepts.Accepts.prototype.language = function(languages) {};

/**
 * Return the languages that the request accepts, in the order of the client's preference (most preferred first).
 * @return {!Array<string>}
 */
accepts.Accepts.prototype.languages = function() {};

/**
 * Return the first accepted type (and it is returned as the same text as what appears in the `types` array). If nothing in `types` is accepted, then `false` is returned.
 * 
 * The `types` array can contain full MIME types or file extensions. Any value that is not a full MIME types is passed to `require('mime-types').lookup`.
 * @param {...!Array<string>|string} types
 * @return {(string|boolean)}
 */
accepts.Accepts.prototype.type = function(types) {};

/**
 * Return the types that the request accepts, in the order of the client's preference (most preferred first).
 * @return {!Array<string>}
 */
accepts.Accepts.prototype.types = function() {};

/**
 * @param {{headers: !accepts.Headers}} req
 * @return {!accepts.Accepts}
 */
function accepts(req) {}

/* TODO: ExportAssignment in  */