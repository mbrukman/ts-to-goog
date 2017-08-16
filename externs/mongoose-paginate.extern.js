/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/mongoose-paginate/index.d.ts:
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "mongoose"
/**
 * @record
 * @struct
 */
tsickle_declare_module.mongoose.PaginateOptions = function() {};
 /** @type {(string|!Object)} */
tsickle_declare_module.mongoose.PaginateOptions.prototype.select;
 /** @type {(string|!Object)} */
tsickle_declare_module.mongoose.PaginateOptions.prototype.sort;
 /** @type {(string|!Object|!Array<!Object>|!Array<string>)} */
tsickle_declare_module.mongoose.PaginateOptions.prototype.populate;
 /** @type {boolean} */
tsickle_declare_module.mongoose.PaginateOptions.prototype.lean;
 /** @type {boolean} */
tsickle_declare_module.mongoose.PaginateOptions.prototype.leanWithId;
 /** @type {number} */
tsickle_declare_module.mongoose.PaginateOptions.prototype.offset;
 /** @type {number} */
tsickle_declare_module.mongoose.PaginateOptions.prototype.page;
 /** @type {number} */
tsickle_declare_module.mongoose.PaginateOptions.prototype.limit;
/**
 * @record
 * @struct
 */
tsickle_declare_module.mongoose.PaginateResult = function() {};
 /** @type {!Array<T>} */
tsickle_declare_module.mongoose.PaginateResult.prototype.docs;
 /** @type {number} */
tsickle_declare_module.mongoose.PaginateResult.prototype.total;
 /** @type {number} */
tsickle_declare_module.mongoose.PaginateResult.prototype.limit;
 /** @type {number} */
tsickle_declare_module.mongoose.PaginateResult.prototype.page;
 /** @type {number} */
tsickle_declare_module.mongoose.PaginateResult.prototype.pages;
 /** @type {number} */
tsickle_declare_module.mongoose.PaginateResult.prototype.offset;
/**
 * @record
 * @struct
 */
tsickle_declare_module.mongoose.PaginateModel = function() {};

/**
 * @param {!Object=} query
 * @param {!PaginateOptions=} options
 * @param {function(?, !PaginateResult<T>): void=} callback
 * @return {!Promise<!PaginateResult<T>>}
 */
tsickle_declare_module.mongoose.PaginateModel.prototype.paginate = function(query, options, callback) {};
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "mongoose-paginate"
/** @const */
tsickle_declare_module.mongoose_paginate = {};

/* TODO: ImportEqualsDeclaration in tsickle_declare_module.mongoose_paginate */
 /** @type {function(!Schema): void} */
tsickle_declare_module.mongoose_paginate._;

/* TODO: ExportAssignment in tsickle_declare_module.mongoose_paginate */
