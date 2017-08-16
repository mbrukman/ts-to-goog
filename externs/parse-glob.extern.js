/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/parse-glob/index.d.ts:
/** @const */
var parseGlob = {};
/**
 * @record
 * @struct
 */
parseGlob.Result = function() {};
 /** @type {string} */
parseGlob.Result.prototype.orig;
 /** @type {{glob: boolean, negated: boolean, extglob: boolean, braces: boolean, brackets: boolean, globstar: boolean, dotfile: boolean, dotdir: boolean}} */
parseGlob.Result.prototype.is;
 /** @type {string} */
parseGlob.Result.prototype.glob;
 /** @type {string} */
parseGlob.Result.prototype.base;
 /** @type {{dirname: string, basename: string, filename: string, extname: string, ext: string}} */
parseGlob.Result.prototype.path;
/**
 * @record
 * @struct
 */
function ParseGlob() {}

/* TODO: CallSignature:  */
 /** @type {?} */
var parseGlob;

/* TODO: ExportAssignment in  */
