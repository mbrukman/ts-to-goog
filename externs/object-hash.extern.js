/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/object-hash/index.d.ts:

/* TODO: ImportEqualsDeclaration in  */

/* TODO: ExportAssignment in  */

/* TODO: NamespaceExportDeclaration in  */
/** @const */
var ObjectHash = {};
/**
 * @record
 * @struct
 */
ObjectHash.IOptions = function() {};
 /** @type {string} */
ObjectHash.IOptions.prototype.algorithm;
 /** @type {string} */
ObjectHash.IOptions.prototype.encoding;
 /** @type {boolean} */
ObjectHash.IOptions.prototype.excludeValues;
/**
 * @record
 * @struct
 */
ObjectHash.HashTableItem = function() {};
 /** @type {?} */
ObjectHash.HashTableItem.prototype.value;
 /** @type {number} */
ObjectHash.HashTableItem.prototype.count;
/**
 * @extends {ObjectHash.HashTableItem}
 * @record
 * @struct
 */
ObjectHash.HashTableItemWithKey = function() {};
 /** @type {string} */
ObjectHash.HashTableItemWithKey.prototype.hash;
/**
 * @record
 * @struct
 */
ObjectHash.HashTable = function() {};

/**
 * @param {...?} values
 * @return {!ObjectHash.HashTable}
 */
ObjectHash.HashTable.prototype.add = function(values) {};

/**
 * @param {...?} values
 * @return {!ObjectHash.HashTable}
 */
ObjectHash.HashTable.prototype.remove = function(values) {};

/**
 * @param {string} key
 * @return {boolean}
 */
ObjectHash.HashTable.prototype.hasKey = function(key) {};

/**
 * @param {string} key
 * @return {?}
 */
ObjectHash.HashTable.prototype.getValue = function(key) {};

/**
 * @param {string} key
 * @return {number}
 */
ObjectHash.HashTable.prototype.getCount = function(key) {};

/**
 * @return {!Object<string,!ObjectHash.HashTableItem>}
 */
ObjectHash.HashTable.prototype.table = function() {};

/**
 * @return {!Array<!ObjectHash.HashTableItemWithKey>}
 */
ObjectHash.HashTable.prototype.toArray = function() {};

/**
 * @return {!ObjectHash.HashTable}
 */
ObjectHash.HashTable.prototype.reset = function() {};
/**
 * @record
 * @struct
 */
ObjectHash.HashTableStatic = function() {};

/* TODO: CallSignature: ObjectHash */
/**
 * @record
 * @struct
 */
ObjectHash.Hash = function() {};

/* TODO: CallSignature: ObjectHash */
 /** @type {!ObjectHash.HashTableStatic} */
ObjectHash.Hash.prototype.HashTable;

/**
 * @param {?} object
 * @return {string}
 */
ObjectHash.Hash.prototype.sha1 = function(object) {};

/**
 * @param {?} object
 * @return {string}
 */
ObjectHash.Hash.prototype.keys = function(object) {};

/**
 * @param {?} object
 * @return {string}
 */
ObjectHash.Hash.prototype.MD5 = function(object) {};

/**
 * @param {?} object
 * @return {string}
 */
ObjectHash.Hash.prototype.keysMD5 = function(object) {};
 /** @type {!ObjectHash.Hash} */
ObjectHash.HashStatic;
