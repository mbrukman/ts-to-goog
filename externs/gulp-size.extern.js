/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/gulp-size/index.d.ts:
/** @const */
var size = {};
/**
 * @record
 * @struct
 */
size.Options = function() {};
 /** @type {boolean} */
size.Options.prototype.showFiles;
 /** @type {boolean} */
size.Options.prototype.gzip;
 /** @type {string} */
size.Options.prototype.title;
 /** @type {boolean} */
size.Options.prototype.pretty;
 /** @type {boolean} */
size.Options.prototype.showTotal;
/**
 * @extends {NodeJS.ReadWriteStream}
 * @record
 * @struct
 */
size.SizeStream = function() {};
 /** @type {number} */
size.SizeStream.prototype.size;
 /** @type {string} */
size.SizeStream.prototype.prettySize;

/**
 * @param {!size.Options=} options
 * @return {!size.SizeStream}
 */
function size(options) {}

/* TODO: ExportAssignment in  */