/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/fuse/index.d.ts:

/**
 * @constructor
 * @struct
 * @param {!Array<T>} list
 * @param {!Fuse.Options<T>=} options
 */
function Fuse(list, options) {}

/**
 * @param {string} pattern
 * @return {!Array<T>}
 */
Fuse.prototype.search = function(pattern) {};
/**
 * @record
 * @struct
 */
Fuse.SearchFnConstructor = function() {};

/* TODO: ConstructSignature: Fuse */
/**
 * @record
 * @struct
 */
Fuse.SearchFn = function() {};

/**
 * @param {string} text
 * @return {!Fuse.SearchResult}
 */
Fuse.SearchFn.prototype.search = function(text) {};
/**
 * @record
 * @struct
 */
Fuse.SearchResult = function() {};
 /** @type {boolean} */
Fuse.SearchResult.prototype.isMatch;
 /** @type {number} */
Fuse.SearchResult.prototype.score;
/**
 * @record
 * @struct
 */
Fuse.SearchOptions = function() {};
 /** @type {number} */
Fuse.SearchOptions.prototype.location;
 /** @type {number} */
Fuse.SearchOptions.prototype.distance;
 /** @type {number} */
Fuse.SearchOptions.prototype.threshold;
 /** @type {number} */
Fuse.SearchOptions.prototype.maxPatternLength;
/**
 * @record
 * @struct
 */
Fuse.Options = function() {};
 /** @type {string} */
Fuse.Options.prototype.id;
 /** @type {boolean} */
Fuse.Options.prototype.caseSensitive;
 /** @type {!Array<string>} */
Fuse.Options.prototype.include;
 /** @type {boolean} */
Fuse.Options.prototype.shouldSort;
 /** @type {!Fuse.SearchFnConstructor} */
Fuse.Options.prototype.searchFn;
 /** @type {function({score: number}, {score: number}): number} */
Fuse.Options.prototype.sortFn;
 /** @type {(!Array<string>|!Array<{name: string, weight: number}>)} */
Fuse.Options.prototype.keys;
 /** @type {boolean} */
Fuse.Options.prototype.verbose;
 /** @type {boolean} */
Fuse.Options.prototype.tokenize;
 /** @type {!RegExp} */
Fuse.Options.prototype.tokenSeparator;
 /** @type {boolean} */
Fuse.Options.prototype.matchAllTokens;
 /** @type {number} */
Fuse.Options.prototype.location;
 /** @type {number} */
Fuse.Options.prototype.distance;
 /** @type {number} */
Fuse.Options.prototype.threshold;
 /** @type {number} */
Fuse.Options.prototype.maxPatternLength;
 /** @type {boolean} */
Fuse.Options.prototype.includeScore;
 /** @type {function(T, string): string} */
Fuse.Options.prototype.getFn;

/* TODO: ExportAssignment in  */

/* TODO: NamespaceExportDeclaration in  */
