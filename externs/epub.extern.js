/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/epub/index.d.ts:
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "epub"
/** @const */
tsickle_declare_module.epub = {};

/* TODO: ImportDeclaration in tsickle_declare_module.epub */
/**
 * @record
 * @struct
 */
tsickle_declare_module.epub.TocElement = function() {};
 /** @type {number} */
tsickle_declare_module.epub.TocElement.prototype.level;
 /** @type {number} */
tsickle_declare_module.epub.TocElement.prototype.order;
 /** @type {string} */
tsickle_declare_module.epub.TocElement.prototype.title;
 /** @type {string} */
tsickle_declare_module.epub.TocElement.prototype.id;
 /** @type {string} */
tsickle_declare_module.epub.TocElement.prototype.href;

/**
 * @constructor
 * @struct
 * @param {string} epubfile
 * @param {string=} imagewebroot
 * @param {string=} chapterwebroot
 */
tsickle_declare_module.epub.EPub = function(epubfile, imagewebroot, chapterwebroot) {};
 /** @type {!Object} */
tsickle_declare_module.epub.EPub.prototype.metadata;
 /** @type {!Object} */
tsickle_declare_module.epub.EPub.prototype.manifest;
 /** @type {!Object} */
tsickle_declare_module.epub.EPub.prototype.spine;
 /** @type {!Array<!Object>} */
tsickle_declare_module.epub.EPub.prototype.flow;
 /** @type {!Array<!TocElement>} */
tsickle_declare_module.epub.EPub.prototype.toc;

/**
 * @return {void}
 */
tsickle_declare_module.epub.EPub.prototype.parse = function() {};

/**
 * @param {string} chapterId
 * @param {function(!Error, string): void} callback
 * @return {void}
 */
tsickle_declare_module.epub.EPub.prototype.getChapter = function(chapterId, callback) {};

/**
 * @param {string} chapterId
 * @param {function(!Error, string): void} callback
 * @return {void}
 */
tsickle_declare_module.epub.EPub.prototype.getChapterRaw = function(chapterId, callback) {};

/**
 * @param {string} id
 * @param {function(!Error, ?, string): void} callback
 * @return {void}
 */
tsickle_declare_module.epub.EPub.prototype.getImage = function(id, callback) {};

/**
 * @param {string} id
 * @param {function(!Error, ?, string): void} callback
 * @return {void}
 */
tsickle_declare_module.epub.EPub.prototype.getFile = function(id, callback) {};

/* TODO: ExportAssignment in tsickle_declare_module.epub */
