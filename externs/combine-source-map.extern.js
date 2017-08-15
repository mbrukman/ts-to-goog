/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/combine-source-map/index.d.ts:

/**
 * @constructor
 * @struct
 * @param {string=} file
 * @param {string=} sourceRoot
 */
function Combiner(file, sourceRoot) {}

/**
 * Adds map to underlying source map.
 * If source contains a source map comment that has the source of the original file inlined it will offset these
 * mappings and include them.
 * If no source map comment is found or it has no source inlined, mappings for the file will be generated and included
 * @param {{sourceFile: string, source: string}} opts the 'sourceFile' path/name and the file's 'source' contents
 * @param {!Combiner.Offset=} offset the source file 'line' number and 'column' number offsets
 * @return {!Combiner}
 */
Combiner.prototype.addFile = function(opts, offset) {};

/**
 * output the combined source map in base64 format
 * @return {string} base64 encoded combined source map
 */
Combiner.prototype.base64 = function() {};

/**
 * generate a base64 encoded sourceMappingURL comment
 * @return {string} base64 encoded sourceMappingUrl comment of the combined source map
 */
Combiner.prototype.comment = function() {};

/**
 * @param {string} sourceFile
 * @param {string} source
 * @param {!Combiner.Offset=} offset
 * @return {!Combiner}
 */
Combiner.prototype._addGeneratedMap = function(sourceFile, source, offset) {};

/**
 * @param {string} sourceFile
 * @param {string} source
 * @param {?} existingMap
 * @param {!Combiner.Offset=} offset
 * @return {!Combiner}
 */
Combiner.prototype._addExistingMap = function(sourceFile, source, existingMap, offset) {};
/**
 * @record
 * @struct
 */
Combiner.Offset = function() {};
 /** @type {number} */
Combiner.Offset.prototype.line;
 /** @type {number} */
Combiner.Offset.prototype.column;

/**
 * Create a source map combiner that accepts multiple files, offsets them and then combines them into one source map.
 * @param {string=} file optional name of the generated file
 * @param {string=} sourceRoot optional sourceRoot of the map to be generated
 * @return {!Combiner} Combiner instance to which source maps can be added and later combined
 */
Combiner.create = function(file, sourceRoot) {};

/**
 * removeComments
 * @param {string} src
 * @return {string} src with all sourceMappingUrl comments removed
 */
Combiner.removeComments = function(src) {};

/* TODO: ExportAssignment in  */

/* TODO: NamespaceExportDeclaration in  */