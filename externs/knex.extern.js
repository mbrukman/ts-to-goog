/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/knex/index.d.ts:

/* TODO: ImportEqualsDeclaration in  */

/* TODO: ImportEqualsDeclaration in  */

/** @typedef {!Function} */
var Callback;

/** @typedef {!Function} */
var Client;

/** @typedef {(string|number|boolean|!Date|!Array<string>|!Array<number>|!Array<!Date>|!Array<boolean>|?|!Knex.Raw)} */
var Value;

/** @typedef {(string|!Knex.Raw|!Knex.QueryBuilder)} */
var ColumnName;

/** @typedef {(string|!Knex.Raw|!Knex.QueryBuilder)} */
var TableName;
/**
 * @extends {Knex.QueryInterface}
 * @record
 * @struct
 */
function Knex() {}

/* TODO: CallSignature:  */
 /** @type {string} */
Knex.prototype.VERSION;
 /** @type {string} */
Knex.prototype.__knex__;
 /** @type {!Knex.RawBuilder} */
Knex.prototype.raw;
 /** @type {!Knex.SchemaBuilder} */
Knex.prototype.schema;
 /** @type {?} */
Knex.prototype.client;
 /** @type {!Knex.Migrator} */
Knex.prototype.migrate;
 /** @type {?} */
Knex.prototype.seed;
 /** @type {!Knex.FunctionHelper} */
Knex.prototype.fn;

/**
 * @param {?} transactionScope
 * @return {!Bluebird<?>}
 */
Knex.prototype.transaction = function(transactionScope) {};

/**
 * @param {!Function=} callback
 * @return {void|!Bluebird<void>}
 */
Knex.prototype.destroy = function(callback) {};

/**
 * @param {(string|!Knex.Raw|!Knex.QueryBuilder)} tableName
 * @param {!Array<?>} data
 * @param {number} chunkSize
 * @return {!Knex.QueryBuilder}
 */
Knex.prototype.batchInsert = function(tableName, data, chunkSize) {};

/**
 * @return {!Knex.QueryBuilder}
 */
Knex.prototype.queryBuilder = function() {};

/**
 * @param {string} eventName
 * @param {!Function} callback
 * @return {!Knex.QueryBuilder}
 */
Knex.prototype.on = function(eventName, callback) {};

/**
 * @param {!Knex.Config} config
 * @return {?}
 */
function Knex(config) {}
/**
 * @record
 * @struct
 */
Knex.QueryInterface = function() {};
 /** @type {!Knex.Select} */
Knex.QueryInterface.prototype.select;
 /** @type {!Knex.As} */
Knex.QueryInterface.prototype.as;
 /** @type {!Knex.Select} */
Knex.QueryInterface.prototype.columns;
 /** @type {!Knex.Select} */
Knex.QueryInterface.prototype.column;
 /** @type {!Knex.Table} */
Knex.QueryInterface.prototype.from;
 /** @type {!Knex.Table} */
Knex.QueryInterface.prototype.into;
 /** @type {!Knex.Table} */
Knex.QueryInterface.prototype.table;
 /** @type {!Knex.Distinct} */
Knex.QueryInterface.prototype.distinct;
 /** @type {!Knex.Join} */
Knex.QueryInterface.prototype.join;
 /** @type {!Knex.JoinRaw} */
Knex.QueryInterface.prototype.joinRaw;
 /** @type {!Knex.Join} */
Knex.QueryInterface.prototype.innerJoin;
 /** @type {!Knex.Join} */
Knex.QueryInterface.prototype.leftJoin;
 /** @type {!Knex.Join} */
Knex.QueryInterface.prototype.leftOuterJoin;
 /** @type {!Knex.Join} */
Knex.QueryInterface.prototype.rightJoin;
 /** @type {!Knex.Join} */
Knex.QueryInterface.prototype.rightOuterJoin;
 /** @type {!Knex.Join} */
Knex.QueryInterface.prototype.outerJoin;
 /** @type {!Knex.Join} */
Knex.QueryInterface.prototype.fullOuterJoin;
 /** @type {!Knex.Join} */
Knex.QueryInterface.prototype.crossJoin;
 /** @type {!Knex.With} */
Knex.QueryInterface.prototype.with;
 /** @type {!Knex.WithRaw} */
Knex.QueryInterface.prototype.withRaw;
 /** @type {!Knex.WithSchema} */
Knex.QueryInterface.prototype.withSchema;
 /** @type {!Knex.WithWrapped} */
Knex.QueryInterface.prototype.withWrapped;
 /** @type {!Knex.Where} */
Knex.QueryInterface.prototype.where;
 /** @type {!Knex.Where} */
Knex.QueryInterface.prototype.andWhere;
 /** @type {!Knex.Where} */
Knex.QueryInterface.prototype.orWhere;
 /** @type {!Knex.Where} */
Knex.QueryInterface.prototype.whereNot;
 /** @type {!Knex.Where} */
Knex.QueryInterface.prototype.andWhereNot;
 /** @type {!Knex.Where} */
Knex.QueryInterface.prototype.orWhereNot;
 /** @type {!Knex.WhereRaw} */
Knex.QueryInterface.prototype.whereRaw;
 /** @type {!Knex.WhereRaw} */
Knex.QueryInterface.prototype.orWhereRaw;
 /** @type {!Knex.WhereRaw} */
Knex.QueryInterface.prototype.andWhereRaw;
 /** @type {!Knex.WhereWrapped} */
Knex.QueryInterface.prototype.whereWrapped;
 /** @type {!Knex.WhereWrapped} */
Knex.QueryInterface.prototype.havingWrapped;
 /** @type {!Knex.WhereExists} */
Knex.QueryInterface.prototype.whereExists;
 /** @type {!Knex.WhereExists} */
Knex.QueryInterface.prototype.orWhereExists;
 /** @type {!Knex.WhereExists} */
Knex.QueryInterface.prototype.whereNotExists;
 /** @type {!Knex.WhereExists} */
Knex.QueryInterface.prototype.orWhereNotExists;
 /** @type {!Knex.WhereIn} */
Knex.QueryInterface.prototype.whereIn;
 /** @type {!Knex.WhereIn} */
Knex.QueryInterface.prototype.orWhereIn;
 /** @type {!Knex.WhereIn} */
Knex.QueryInterface.prototype.whereNotIn;
 /** @type {!Knex.WhereIn} */
Knex.QueryInterface.prototype.orWhereNotIn;
 /** @type {!Knex.WhereNull} */
Knex.QueryInterface.prototype.whereNull;
 /** @type {!Knex.WhereNull} */
Knex.QueryInterface.prototype.orWhereNull;
 /** @type {!Knex.WhereNull} */
Knex.QueryInterface.prototype.whereNotNull;
 /** @type {!Knex.WhereNull} */
Knex.QueryInterface.prototype.orWhereNotNull;
 /** @type {!Knex.WhereBetween} */
Knex.QueryInterface.prototype.whereBetween;
 /** @type {!Knex.WhereBetween} */
Knex.QueryInterface.prototype.orWhereBetween;
 /** @type {!Knex.WhereBetween} */
Knex.QueryInterface.prototype.andWhereBetween;
 /** @type {!Knex.WhereBetween} */
Knex.QueryInterface.prototype.whereNotBetween;
 /** @type {!Knex.WhereBetween} */
Knex.QueryInterface.prototype.orWhereNotBetween;
 /** @type {!Knex.WhereBetween} */
Knex.QueryInterface.prototype.andWhereNotBetween;
 /** @type {!Knex.GroupBy} */
Knex.QueryInterface.prototype.groupBy;
 /** @type {!Knex.RawQueryBuilder} */
Knex.QueryInterface.prototype.groupByRaw;
 /** @type {!Knex.OrderBy} */
Knex.QueryInterface.prototype.orderBy;
 /** @type {!Knex.RawQueryBuilder} */
Knex.QueryInterface.prototype.orderByRaw;
 /** @type {!Knex.Union} */
Knex.QueryInterface.prototype.union;
 /** @type {!Knex.Having} */
Knex.QueryInterface.prototype.having;
 /** @type {!Knex.Having} */
Knex.QueryInterface.prototype.andHaving;
 /** @type {!Knex.RawQueryBuilder} */
Knex.QueryInterface.prototype.havingRaw;
 /** @type {!Knex.Having} */
Knex.QueryInterface.prototype.orHaving;
 /** @type {!Knex.RawQueryBuilder} */
Knex.QueryInterface.prototype.orHavingRaw;
 /** @type {!Knex.Select} */
Knex.QueryInterface.prototype.first;

/**
 * @param {!Function} callback
 * @return {!Knex.QueryBuilder}
 */
Knex.QueryInterface.prototype.unionAll = function(callback) {};

/**
 * @return {!Knex.QueryBuilder}
 */
Knex.QueryInterface.prototype.clearSelect = function() {};

/**
 * @return {!Knex.QueryBuilder}
 */
Knex.QueryInterface.prototype.clearWhere = function() {};

/**
 * @param {number} offset
 * @return {!Knex.QueryBuilder}
 */
Knex.QueryInterface.prototype.offset = function(offset) {};

/**
 * @param {number} limit
 * @return {!Knex.QueryBuilder}
 */
Knex.QueryInterface.prototype.limit = function(limit) {};

/**
 * @param {string=} columnName
 * @return {!Knex.QueryBuilder}
 */
Knex.QueryInterface.prototype.count = function(columnName) {};

/**
 * @param {string=} columnName
 * @return {!Knex.QueryBuilder}
 */
Knex.QueryInterface.prototype.countDistinct = function(columnName) {};

/**
 * @param {string} columnName
 * @return {!Knex.QueryBuilder}
 */
Knex.QueryInterface.prototype.min = function(columnName) {};

/**
 * @param {string} columnName
 * @return {!Knex.QueryBuilder}
 */
Knex.QueryInterface.prototype.max = function(columnName) {};

/**
 * @param {string} columnName
 * @return {!Knex.QueryBuilder}
 */
Knex.QueryInterface.prototype.sum = function(columnName) {};

/**
 * @param {string} columnName
 * @return {!Knex.QueryBuilder}
 */
Knex.QueryInterface.prototype.sumDistinct = function(columnName) {};

/**
 * @param {string} columnName
 * @return {!Knex.QueryBuilder}
 */
Knex.QueryInterface.prototype.avg = function(columnName) {};

/**
 * @param {string} columnName
 * @return {!Knex.QueryBuilder}
 */
Knex.QueryInterface.prototype.avgDistinct = function(columnName) {};

/**
 * @param {string} columnName
 * @param {number=} amount
 * @return {!Knex.QueryBuilder}
 */
Knex.QueryInterface.prototype.increment = function(columnName, amount) {};

/**
 * @param {string} columnName
 * @param {number=} amount
 * @return {!Knex.QueryBuilder}
 */
Knex.QueryInterface.prototype.decrement = function(columnName, amount) {};

/**
 * @param {boolean=} enabled
 * @return {!Knex.QueryBuilder}
 */
Knex.QueryInterface.prototype.debug = function(enabled) {};

/**
 * @param {string} column
 * @return {!Knex.QueryBuilder}
 */
Knex.QueryInterface.prototype.pluck = function(column) {};

/**
 * @param {?} data
 * @param {(string|!Array<string>)=} returning
 * @return {!Knex.QueryBuilder}
 */
Knex.QueryInterface.prototype.insert = function(data, returning) {};

/**
 * @param {?|string} data_or_columnName
 * @param {(string|!Array<string>)|(string|number|boolean|!Date|!Array<string>|!Array<number>|!Array<!Date>|!Array<boolean>|?|!Knex.Raw)=} returning_or_value
 * @param {(string|!Array<string>)=} returning
 * @return {!Knex.QueryBuilder}
 */
Knex.QueryInterface.prototype.update = function(data_or_columnName, returning_or_value, returning) {};

/**
 * @param {(string|!Array<string>)} column
 * @return {!Knex.QueryBuilder}
 */
Knex.QueryInterface.prototype.returning = function(column) {};

/**
 * @param {(string|!Array<string>)=} returning
 * @return {!Knex.QueryBuilder}
 */
Knex.QueryInterface.prototype.del = function(returning) {};

/**
 * @param {(string|!Array<string>)=} returning
 * @return {!Knex.QueryBuilder}
 */
Knex.QueryInterface.prototype.delete = function(returning) {};

/**
 * @return {!Knex.QueryBuilder}
 */
Knex.QueryInterface.prototype.truncate = function() {};

/**
 * @param {!Knex.Transaction} trx
 * @return {!Knex.QueryBuilder}
 */
Knex.QueryInterface.prototype.transacting = function(trx) {};

/**
 * @param {?} connection
 * @return {!Knex.QueryBuilder}
 */
Knex.QueryInterface.prototype.connection = function(connection) {};

/**
 * @return {!Knex.QueryBuilder}
 */
Knex.QueryInterface.prototype.clone = function() {};
/**
 * @record
 * @struct
 */
Knex.As = function() {};

/* TODO: CallSignature: Knex */
/**
 * @extends {Knex.ColumnNameQueryBuilder}
 * @record
 * @struct
 */
Knex.Select = function() {};
/**
 * @record
 * @struct
 */
Knex.Table = function() {};

/* TODO: CallSignature: Knex */

/* TODO: CallSignature: Knex */
/**
 * @extends {Knex.ColumnNameQueryBuilder}
 * @record
 * @struct
 */
Knex.Distinct = function() {};
/**
 * @record
 * @struct
 */
Knex.Join = function() {};

/* TODO: CallSignature: Knex */

/* TODO: CallSignature: Knex */

/* TODO: CallSignature: Knex */

/* TODO: CallSignature: Knex */

/* TODO: CallSignature: Knex */

/* TODO: CallSignature: Knex */

/* TODO: CallSignature: Knex */
/**
 * @record
 * @struct
 */
Knex.JoinClause = function() {};

/**
 * @param {!Knex.Raw|!Function|!Object<string,(string|!Knex.Raw)>|string} raw_or_callback_or_columns_or_column1
 * @param {string|!Knex.Raw=} column2_or_raw_or_operator
 * @param {string=} column2
 * @return {!Knex.JoinClause}
 */
Knex.JoinClause.prototype.on = function(raw_or_callback_or_columns_or_column1, column2_or_raw_or_operator, column2) {};

/**
 * @param {!Knex.Raw|!Function|!Object<string,(string|!Knex.Raw)>|string} raw_or_callback_or_columns_or_column1
 * @param {string|!Knex.Raw=} column2_or_raw_or_operator
 * @param {string=} column2
 * @return {!Knex.JoinClause}
 */
Knex.JoinClause.prototype.andOn = function(raw_or_callback_or_columns_or_column1, column2_or_raw_or_operator, column2) {};

/**
 * @param {!Knex.Raw|!Function|!Object<string,(string|!Knex.Raw)>|string} raw_or_callback_or_columns_or_column1
 * @param {string|!Knex.Raw=} column2_or_raw_or_operator
 * @param {string=} column2
 * @return {!Knex.JoinClause}
 */
Knex.JoinClause.prototype.orOn = function(raw_or_callback_or_columns_or_column1, column2_or_raw_or_operator, column2) {};

/**
 * @param {(string|!Array<string>|!Knex.Raw|!Object<string,(string|!Knex.Raw)>)} column
 * @return {!Knex.JoinClause}
 */
Knex.JoinClause.prototype.using = function(column) {};

/**
 * @param {string} type
 * @return {!Knex.JoinClause}
 */
Knex.JoinClause.prototype.type = function(type) {};
/**
 * @record
 * @struct
 */
Knex.JoinRaw = function() {};

/* TODO: CallSignature: Knex */
/**
 * @extends {Knex.WithRaw}
 * @extends {Knex.WithWrapped}
 * @record
 * @struct
 */
Knex.With = function() {};
/**
 * @record
 * @struct
 */
Knex.WithRaw = function() {};

/* TODO: CallSignature: Knex */

/* TODO: CallSignature: Knex */
/**
 * @record
 * @struct
 */
Knex.WithSchema = function() {};

/* TODO: CallSignature: Knex */
/**
 * @record
 * @struct
 */
Knex.WithWrapped = function() {};

/* TODO: CallSignature: Knex */
/**
 * @extends {Knex.WhereRaw}
 * @extends {Knex.WhereWrapped}
 * @extends {Knex.WhereNull}
 * @record
 * @struct
 */
Knex.Where = function() {};

/* TODO: CallSignature: Knex */

/* TODO: CallSignature: Knex */

/* TODO: CallSignature: Knex */

/* TODO: CallSignature: Knex */

/* TODO: CallSignature: Knex */

/* TODO: CallSignature: Knex */
/**
 * @extends {Knex.RawQueryBuilder}
 * @record
 * @struct
 */
Knex.WhereRaw = function() {};

/* TODO: CallSignature: Knex */
/**
 * @record
 * @struct
 */
Knex.WhereWrapped = function() {};

/* TODO: CallSignature: Knex */
/**
 * @record
 * @struct
 */
Knex.WhereNull = function() {};

/* TODO: CallSignature: Knex */
/**
 * @record
 * @struct
 */
Knex.WhereIn = function() {};

/* TODO: CallSignature: Knex */

/* TODO: CallSignature: Knex */

/* TODO: CallSignature: Knex */
/**
 * @record
 * @struct
 */
Knex.WhereBetween = function() {};

/* TODO: CallSignature: Knex */
/**
 * @record
 * @struct
 */
Knex.WhereExists = function() {};

/* TODO: CallSignature: Knex */

/* TODO: CallSignature: Knex */

/* TODO: CallSignature: Knex */

/* TODO: CallSignature: Knex */
/**
 * @extends {Knex.RawQueryBuilder}
 * @extends {Knex.ColumnNameQueryBuilder}
 * @record
 * @struct
 */
Knex.GroupBy = function() {};
/**
 * @record
 * @struct
 */
Knex.OrderBy = function() {};

/* TODO: CallSignature: Knex */
/**
 * @record
 * @struct
 */
Knex.Union = function() {};

/* TODO: CallSignature: Knex */

/* TODO: CallSignature: Knex */

/* TODO: CallSignature: Knex */
/**
 * @extends {Knex.RawQueryBuilder}
 * @extends {Knex.WhereWrapped}
 * @record
 * @struct
 */
Knex.Having = function() {};

/* TODO: CallSignature: Knex */
/**
 * @record
 * @struct
 */
Knex.ColumnNameQueryBuilder = function() {};

/* TODO: CallSignature: Knex */

/* TODO: CallSignature: Knex */
/**
 * @record
 * @struct
 */
Knex.RawQueryBuilder = function() {};

/* TODO: CallSignature: Knex */

/* TODO: CallSignature: Knex */

/* TODO: CallSignature: Knex */
/**
 * @extends {Knex.ChainableInterface}
 * @record
 * @struct
 */
Knex.Raw = function() {};

/**
 * @param {string} before
 * @param {string} after
 * @return {!Knex.Raw}
 */
Knex.Raw.prototype.wrap = function(before, after) {};
/**
 * @record
 * @struct
 */
Knex.RawBuilder = function() {};

/* TODO: CallSignature: Knex */

/* TODO: CallSignature: Knex */

/* TODO: CallSignature: Knex */

/* TODO: CallSignature: Knex */
/**
 * @extends {Knex.QueryInterface}
 * @extends {Knex.ChainableInterface}
 * @record
 * @struct
 */
Knex.QueryBuilder = function() {};
 /** @type {!Knex.QueryBuilder} */
Knex.QueryBuilder.prototype.or;
 /** @type {!Knex.QueryBuilder} */
Knex.QueryBuilder.prototype.and;

/**
 * @param {string=} column
 * @return {!Bluebird<!Knex.ColumnInfo>}
 */
Knex.QueryBuilder.prototype.columnInfo = function(column) {};

/**
 * @return {!Knex.QueryBuilder}
 */
Knex.QueryBuilder.prototype.forUpdate = function() {};

/**
 * @return {!Knex.QueryBuilder}
 */
Knex.QueryBuilder.prototype.forShare = function() {};

/**
 * @return {!Knex.Sql}
 */
Knex.QueryBuilder.prototype.toSQL = function() {};

/**
 * @param {string} event
 * @param {!Function} callback
 * @return {!Knex.QueryBuilder}
 */
Knex.QueryBuilder.prototype.on = function(event, callback) {};
/**
 * @record
 * @struct
 */
Knex.Sql = function() {};
 /** @type {string} */
Knex.Sql.prototype.method;
 /** @type {?} */
Knex.Sql.prototype.options;
 /** @type {!Array<(string|number|boolean|!Date|!Array<string>|!Array<number>|!Array<!Date>|!Array<boolean>|?|!Knex.Raw)>} */
Knex.Sql.prototype.bindings;
 /** @type {string} */
Knex.Sql.prototype.sql;
/**
 * @record
 * @struct
 */
Knex.ChainableInterface = function() {};

/**
 * @return {string}
 */
Knex.ChainableInterface.prototype.toQuery = function() {};

/**
 * @param {?} options
 * @return {!Knex.QueryBuilder}
 */
Knex.ChainableInterface.prototype.options = function(options) {};

/**
 * @param {?|function(!Knex.QueryBuilder): ?=} options_or_callback
 * @param {function(!Knex.QueryBuilder): ?=} callback
 * @return {!Knex.QueryBuilder}
 */
Knex.ChainableInterface.prototype.stream = function(options_or_callback, callback) {};

/**
 * @param {?} writable
 * @return {!Knex.QueryBuilder}
 */
Knex.ChainableInterface.prototype.pipe = function(writable) {};

/**
 * @param {!Function} callback
 * @return {!Knex.QueryBuilder}
 */
Knex.ChainableInterface.prototype.exec = function(callback) {};
/**
 * @record
 * @struct
 */
Knex.Transaction = function() {};

/**
 * @param {function(!Knex.Transaction): ?} transactionScope
 * @return {!Bluebird<?>}
 */
Knex.Transaction.prototype.savepoint = function(transactionScope) {};

/**
 * @param {?=} value
 * @return {!Knex.QueryBuilder}
 */
Knex.Transaction.prototype.commit = function(value) {};

/**
 * @param {?=} error
 * @return {!Knex.QueryBuilder}
 */
Knex.Transaction.prototype.rollback = function(error) {};
/**
 * @record
 * @struct
 */
Knex.SchemaBuilder = function() {};

/**
 * @param {string} tableName
 * @param {function(!Knex.CreateTableBuilder): ?} callback
 * @return {!Knex.SchemaBuilder}
 */
Knex.SchemaBuilder.prototype.createTable = function(tableName, callback) {};

/**
 * @param {string} tableName
 * @param {function(!Knex.CreateTableBuilder): ?} callback
 * @return {!Knex.SchemaBuilder}
 */
Knex.SchemaBuilder.prototype.createTableIfNotExists = function(tableName, callback) {};

/**
 * @param {string} oldTableName
 * @param {string} newTableName
 * @return {!Bluebird<void>}
 */
Knex.SchemaBuilder.prototype.renameTable = function(oldTableName, newTableName) {};

/**
 * @param {string} tableName
 * @return {!Knex.SchemaBuilder}
 */
Knex.SchemaBuilder.prototype.dropTable = function(tableName) {};

/**
 * @param {string} tableName
 * @return {!Bluebird<boolean>}
 */
Knex.SchemaBuilder.prototype.hasTable = function(tableName) {};

/**
 * @param {string} tableName
 * @param {string} columnName
 * @return {!Bluebird<boolean>}
 */
Knex.SchemaBuilder.prototype.hasColumn = function(tableName, columnName) {};

/**
 * @param {string} tableName
 * @param {function(!Knex.AlterTableBuilder): ?} callback
 * @return {!Bluebird<void>}
 */
Knex.SchemaBuilder.prototype.table = function(tableName, callback) {};

/**
 * @param {string} tableName
 * @return {!Knex.SchemaBuilder}
 */
Knex.SchemaBuilder.prototype.dropTableIfExists = function(tableName) {};

/**
 * @param {string} statement
 * @return {!Knex.SchemaBuilder}
 */
Knex.SchemaBuilder.prototype.raw = function(statement) {};

/**
 * @param {string} schemaName
 * @return {!Knex.SchemaBuilder}
 */
Knex.SchemaBuilder.prototype.withSchema = function(schemaName) {};
/**
 * @record
 * @struct
 */
Knex.TableBuilder = function() {};

/**
 * @param {string=} columnName
 * @return {!Knex.ColumnBuilder}
 */
Knex.TableBuilder.prototype.increments = function(columnName) {};

/**
 * @param {string=} columnName
 * @return {!Knex.ColumnBuilder}
 */
Knex.TableBuilder.prototype.bigIncrements = function(columnName) {};

/**
 * @param {string} columnName
 * @return {!Knex.TableBuilder}
 */
Knex.TableBuilder.prototype.dropColumn = function(columnName) {};

/**
 * @param {...string} columnNames
 * @return {!Knex.TableBuilder}
 */
Knex.TableBuilder.prototype.dropColumns = function(columnNames) {};

/**
 * @param {string} from
 * @param {string} to
 * @return {!Knex.ColumnBuilder}
 */
Knex.TableBuilder.prototype.renameColumn = function(from, to) {};

/**
 * @param {string} columnName
 * @return {!Knex.ColumnBuilder}
 */
Knex.TableBuilder.prototype.integer = function(columnName) {};

/**
 * @param {string} columnName
 * @return {!Knex.ColumnBuilder}
 */
Knex.TableBuilder.prototype.bigInteger = function(columnName) {};

/**
 * @param {string} columnName
 * @param {string=} textType
 * @return {!Knex.ColumnBuilder}
 */
Knex.TableBuilder.prototype.text = function(columnName, textType) {};

/**
 * @param {string} columnName
 * @param {number=} length
 * @return {!Knex.ColumnBuilder}
 */
Knex.TableBuilder.prototype.string = function(columnName, length) {};

/**
 * @param {string} columnName
 * @param {number=} precision
 * @param {number=} scale
 * @return {!Knex.ColumnBuilder}
 */
Knex.TableBuilder.prototype.float = function(columnName, precision, scale) {};

/**
 * @param {string} columnName
 * @param {number=} precision
 * @param {number=} scale
 * @return {!Knex.ColumnBuilder}
 */
Knex.TableBuilder.prototype.decimal = function(columnName, precision, scale) {};

/**
 * @param {string} columnName
 * @return {!Knex.ColumnBuilder}
 */
Knex.TableBuilder.prototype.boolean = function(columnName) {};

/**
 * @param {string} columnName
 * @return {!Knex.ColumnBuilder}
 */
Knex.TableBuilder.prototype.date = function(columnName) {};

/**
 * @param {string} columnName
 * @return {!Knex.ColumnBuilder}
 */
Knex.TableBuilder.prototype.dateTime = function(columnName) {};

/**
 * @param {string} columnName
 * @return {!Knex.ColumnBuilder}
 */
Knex.TableBuilder.prototype.time = function(columnName) {};

/**
 * @param {string} columnName
 * @return {!Knex.ColumnBuilder}
 */
Knex.TableBuilder.prototype.timestamp = function(columnName) {};

/**
 * @param {boolean=} useTimestampType
 * @param {boolean=} makeDefaultNow
 * @return {!Knex.ColumnBuilder}
 */
Knex.TableBuilder.prototype.timestamps = function(useTimestampType, makeDefaultNow) {};

/**
 * @param {string} columnName
 * @return {!Knex.ColumnBuilder}
 */
Knex.TableBuilder.prototype.binary = function(columnName) {};

/**
 * @param {string} columnName
 * @param {!Array<(string|number|boolean|!Date|!Array<string>|!Array<number>|!Array<!Date>|!Array<boolean>|?|!Knex.Raw)>} values
 * @return {!Knex.ColumnBuilder}
 */
Knex.TableBuilder.prototype.enum = function(columnName, values) {};

/**
 * @param {string} columnName
 * @param {!Array<(string|number|boolean|!Date|!Array<string>|!Array<number>|!Array<!Date>|!Array<boolean>|?|!Knex.Raw)>} values
 * @return {!Knex.ColumnBuilder}
 */
Knex.TableBuilder.prototype.enu = function(columnName, values) {};

/**
 * @param {string} columnName
 * @return {!Knex.ColumnBuilder}
 */
Knex.TableBuilder.prototype.json = function(columnName) {};

/**
 * @param {string} columnName
 * @return {!Knex.ColumnBuilder}
 */
Knex.TableBuilder.prototype.jsonb = function(columnName) {};

/**
 * @param {string} columnName
 * @return {!Knex.ColumnBuilder}
 */
Knex.TableBuilder.prototype.uuid = function(columnName) {};

/**
 * @param {string} val
 * @return {!Knex.TableBuilder}
 */
Knex.TableBuilder.prototype.comment = function(val) {};

/**
 * @param {string} columnName
 * @param {string} type
 * @return {!Knex.ColumnBuilder}
 */
Knex.TableBuilder.prototype.specificType = function(columnName, type) {};

/**
 * @param {!Array<string>} columnNames
 * @return {!Knex.TableBuilder}
 */
Knex.TableBuilder.prototype.primary = function(columnNames) {};

/**
 * @param {!Array<(string|!Knex.Raw)>} columnNames
 * @param {string=} indexName
 * @param {string=} indexType
 * @return {!Knex.TableBuilder}
 */
Knex.TableBuilder.prototype.index = function(columnNames, indexName, indexType) {};

/**
 * @param {!Array<(string|!Knex.Raw)>} columnNames
 * @param {string=} indexName
 * @return {!Knex.TableBuilder}
 */
Knex.TableBuilder.prototype.unique = function(columnNames, indexName) {};

/**
 * @param {string|!Array<string>} column_or_columns
 * @return {!Knex.ForeignConstraintBuilder|!Knex.MultikeyForeignConstraintBuilder}
 */
Knex.TableBuilder.prototype.foreign = function(column_or_columns) {};

/**
 * @param {!Array<string>} columnNames
 * @param {string=} foreignKeyName
 * @return {!Knex.TableBuilder}
 */
Knex.TableBuilder.prototype.dropForeign = function(columnNames, foreignKeyName) {};

/**
 * @param {!Array<(string|!Knex.Raw)>} columnNames
 * @param {string=} indexName
 * @return {!Knex.TableBuilder}
 */
Knex.TableBuilder.prototype.dropUnique = function(columnNames, indexName) {};

/**
 * @param {string=} constraintName
 * @return {!Knex.TableBuilder}
 */
Knex.TableBuilder.prototype.dropPrimary = function(constraintName) {};

/**
 * @param {!Array<(string|!Knex.Raw)>} columnNames
 * @param {string=} indexName
 * @return {!Knex.TableBuilder}
 */
Knex.TableBuilder.prototype.dropIndex = function(columnNames, indexName) {};
/**
 * @extends {Knex.TableBuilder}
 * @record
 * @struct
 */
Knex.CreateTableBuilder = function() {};
/**
 * @extends {Knex.CreateTableBuilder}
 * @record
 * @struct
 */
Knex.MySqlTableBuilder = function() {};

/**
 * @param {string} val
 * @return {!Knex.CreateTableBuilder}
 */
Knex.MySqlTableBuilder.prototype.engine = function(val) {};

/**
 * @param {string} val
 * @return {!Knex.CreateTableBuilder}
 */
Knex.MySqlTableBuilder.prototype.charset = function(val) {};

/**
 * @param {string} val
 * @return {!Knex.CreateTableBuilder}
 */
Knex.MySqlTableBuilder.prototype.collate = function(val) {};
/**
 * @extends {Knex.TableBuilder}
 * @record
 * @struct
 */
Knex.AlterTableBuilder = function() {};
/**
 * @extends {Knex.AlterTableBuilder}
 * @record
 * @struct
 */
Knex.MySqlAlterTableBuilder = function() {};
/**
 * @record
 * @struct
 */
Knex.ColumnBuilder = function() {};

/**
 * @param {string=} indexName
 * @return {!Knex.ColumnBuilder}
 */
Knex.ColumnBuilder.prototype.index = function(indexName) {};

/**
 * @return {!Knex.ColumnBuilder}
 */
Knex.ColumnBuilder.prototype.primary = function() {};

/**
 * @return {!Knex.ColumnBuilder}
 */
Knex.ColumnBuilder.prototype.unique = function() {};

/**
 * @param {string} columnName
 * @return {!Knex.ReferencingColumnBuilder}
 */
Knex.ColumnBuilder.prototype.references = function(columnName) {};

/**
 * @param {string} command
 * @return {!Knex.ColumnBuilder}
 */
Knex.ColumnBuilder.prototype.onDelete = function(command) {};

/**
 * @param {string} command
 * @return {!Knex.ColumnBuilder}
 */
Knex.ColumnBuilder.prototype.onUpdate = function(command) {};

/**
 * @param {(string|number|boolean|!Date|!Array<string>|!Array<number>|!Array<!Date>|!Array<boolean>|?|!Knex.Raw)} value
 * @return {!Knex.ColumnBuilder}
 */
Knex.ColumnBuilder.prototype.defaultTo = function(value) {};

/**
 * @return {!Knex.ColumnBuilder}
 */
Knex.ColumnBuilder.prototype.unsigned = function() {};

/**
 * @return {!Knex.ColumnBuilder}
 */
Knex.ColumnBuilder.prototype.notNullable = function() {};

/**
 * @return {!Knex.ColumnBuilder}
 */
Knex.ColumnBuilder.prototype.nullable = function() {};

/**
 * @param {string} value
 * @return {!Knex.ColumnBuilder}
 */
Knex.ColumnBuilder.prototype.comment = function(value) {};
/**
 * @record
 * @struct
 */
Knex.ForeignConstraintBuilder = function() {};

/**
 * @param {string} columnName
 * @return {!Knex.ReferencingColumnBuilder}
 */
Knex.ForeignConstraintBuilder.prototype.references = function(columnName) {};
/**
 * @record
 * @struct
 */
Knex.MultikeyForeignConstraintBuilder = function() {};

/**
 * @param {!Array<string>} columnNames
 * @return {!Knex.ReferencingColumnBuilder}
 */
Knex.MultikeyForeignConstraintBuilder.prototype.references = function(columnNames) {};
/**
 * @extends {Knex.ColumnBuilder}
 * @record
 * @struct
 */
Knex.PostgreSqlColumnBuilder = function() {};

/**
 * @param {string=} indexName
 * @param {string=} indexType
 * @return {!Knex.ColumnBuilder}
 */
Knex.PostgreSqlColumnBuilder.prototype.index = function(indexName, indexType) {};
/**
 * @extends {Knex.ColumnBuilder}
 * @record
 * @struct
 */
Knex.ReferencingColumnBuilder = function() {};

/**
 * @param {string} tableName
 * @return {!Knex.ColumnBuilder}
 */
Knex.ReferencingColumnBuilder.prototype.inTable = function(tableName) {};
/**
 * @extends {Knex.ColumnBuilder}
 * @record
 * @struct
 */
Knex.AlterColumnBuilder = function() {};
/**
 * @extends {Knex.AlterColumnBuilder}
 * @record
 * @struct
 */
Knex.MySqlAlterColumnBuilder = function() {};

/**
 * @return {!Knex.AlterColumnBuilder}
 */
Knex.MySqlAlterColumnBuilder.prototype.first = function() {};

/**
 * @param {string} columnName
 * @return {!Knex.AlterColumnBuilder}
 */
Knex.MySqlAlterColumnBuilder.prototype.after = function(columnName) {};
/**
 * @record
 * @struct
 */
Knex.ColumnInfo = function() {};
 /** @type {(string|number|boolean|!Date|!Array<string>|!Array<number>|!Array<!Date>|!Array<boolean>|?|!Knex.Raw)} */
Knex.ColumnInfo.prototype.defaultValue;
 /** @type {string} */
Knex.ColumnInfo.prototype.type;
 /** @type {number} */
Knex.ColumnInfo.prototype.maxLength;
 /** @type {boolean} */
Knex.ColumnInfo.prototype.nullable;
/**
 * @record
 * @struct
 */
Knex.Config = function() {};
 /** @type {boolean} */
Knex.Config.prototype.debug;
 /** @type {string} */
Knex.Config.prototype.client;
 /** @type {string} */
Knex.Config.prototype.dialect;
 /** @type {(string|!Knex.ConnectionConfig|!Knex.MariaSqlConnectionConfig|!Knex.MySqlConnectionConfig|!Knex.MsSqlConnectionConfig|!Knex.Sqlite3ConnectionConfig|!Knex.SocketConnectionConfig)} */
Knex.Config.prototype.connection;
 /** @type {!Knex.PoolConfig} */
Knex.Config.prototype.pool;
 /** @type {!Knex.MigratorConfig} */
Knex.Config.prototype.migrations;
 /** @type {number} */
Knex.Config.prototype.acquireConnectionTimeout;
 /** @type {boolean} */
Knex.Config.prototype.useNullAsDefault;
 /** @type {string} */
Knex.Config.prototype.searchPath;
/**
 * @record
 * @struct
 */
Knex.ConnectionConfig = function() {};
 /** @type {string} */
Knex.ConnectionConfig.prototype.host;
 /** @type {string} */
Knex.ConnectionConfig.prototype.user;
 /** @type {string} */
Knex.ConnectionConfig.prototype.password;
 /** @type {string} */
Knex.ConnectionConfig.prototype.database;
 /** @type {string} */
Knex.ConnectionConfig.prototype.domain;
 /** @type {string} */
Knex.ConnectionConfig.prototype.instanceName;
 /** @type {boolean} */
Knex.ConnectionConfig.prototype.debug;
 /** @type {number} */
Knex.ConnectionConfig.prototype.requestTimeout;
/**
 * @record
 * @struct
 */
Knex.MsSqlConnectionConfig = function() {};
 /** @type {string} */
Knex.MsSqlConnectionConfig.prototype.user;
 /** @type {string} */
Knex.MsSqlConnectionConfig.prototype.password;
 /** @type {string} */
Knex.MsSqlConnectionConfig.prototype.server;
 /** @type {string} */
Knex.MsSqlConnectionConfig.prototype.database;
 /** @type {!Knex.MsSqlOptionsConfig} */
Knex.MsSqlConnectionConfig.prototype.options;
/**
 * @record
 * @struct
 */
Knex.MariaSqlConnectionConfig = function() {};
 /** @type {string} */
Knex.MariaSqlConnectionConfig.prototype.user;
 /** @type {string} */
Knex.MariaSqlConnectionConfig.prototype.password;
 /** @type {string} */
Knex.MariaSqlConnectionConfig.prototype.host;
 /** @type {number} */
Knex.MariaSqlConnectionConfig.prototype.port;
 /** @type {string} */
Knex.MariaSqlConnectionConfig.prototype.unixSocket;
 /** @type {string} */
Knex.MariaSqlConnectionConfig.prototype.protocol;
 /** @type {string} */
Knex.MariaSqlConnectionConfig.prototype.db;
 /** @type {boolean} */
Knex.MariaSqlConnectionConfig.prototype.keepQueries;
 /** @type {boolean} */
Knex.MariaSqlConnectionConfig.prototype.multiStatements;
 /** @type {number} */
Knex.MariaSqlConnectionConfig.prototype.connTimeout;
 /** @type {number} */
Knex.MariaSqlConnectionConfig.prototype.pingInterval;
 /** @type {boolean} */
Knex.MariaSqlConnectionConfig.prototype.secureAuth;
 /** @type {boolean} */
Knex.MariaSqlConnectionConfig.prototype.compress;
 /** @type {(boolean|!Knex.MariaSslConfiguration)} */
Knex.MariaSqlConnectionConfig.prototype.ssl;
 /** @type {boolean} */
Knex.MariaSqlConnectionConfig.prototype.local_infile;
 /** @type {string} */
Knex.MariaSqlConnectionConfig.prototype.read_default_file;
 /** @type {string} */
Knex.MariaSqlConnectionConfig.prototype.read_default_group;
 /** @type {string} */
Knex.MariaSqlConnectionConfig.prototype.charset;
 /** @type {number} */
Knex.MariaSqlConnectionConfig.prototype.streamHWM;
/**
 * @record
 * @struct
 */
Knex.MariaSslConfiguration = function() {};
 /** @type {string} */
Knex.MariaSslConfiguration.prototype.key;
 /** @type {string} */
Knex.MariaSslConfiguration.prototype.cert;
 /** @type {string} */
Knex.MariaSslConfiguration.prototype.ca;
 /** @type {string} */
Knex.MariaSslConfiguration.prototype.capath;
 /** @type {string} */
Knex.MariaSslConfiguration.prototype.cipher;
 /** @type {boolean} */
Knex.MariaSslConfiguration.prototype.rejectUnauthorized;
/**
 * @record
 * @struct
 */
Knex.MySqlConnectionConfig = function() {};
 /** @type {string} */
Knex.MySqlConnectionConfig.prototype.host;
 /** @type {number} */
Knex.MySqlConnectionConfig.prototype.port;
 /** @type {string} */
Knex.MySqlConnectionConfig.prototype.localAddress;
 /** @type {string} */
Knex.MySqlConnectionConfig.prototype.socketPath;
 /** @type {string} */
Knex.MySqlConnectionConfig.prototype.user;
 /** @type {string} */
Knex.MySqlConnectionConfig.prototype.password;
 /** @type {string} */
Knex.MySqlConnectionConfig.prototype.database;
 /** @type {string} */
Knex.MySqlConnectionConfig.prototype.charset;
 /** @type {string} */
Knex.MySqlConnectionConfig.prototype.timezone;
 /** @type {number} */
Knex.MySqlConnectionConfig.prototype.connectTimeout;
 /** @type {boolean} */
Knex.MySqlConnectionConfig.prototype.stringifyObjects;
 /** @type {boolean} */
Knex.MySqlConnectionConfig.prototype.insecureAuth;
 /** @type {boolean} */
Knex.MySqlConnectionConfig.prototype.typeCast;
 /** @type {function(string, ?): string} */
Knex.MySqlConnectionConfig.prototype.queryFormat;
 /** @type {boolean} */
Knex.MySqlConnectionConfig.prototype.supportBigNumbers;
 /** @type {boolean} */
Knex.MySqlConnectionConfig.prototype.bigNumberStrings;
 /** @type {boolean} */
Knex.MySqlConnectionConfig.prototype.dateStrings;
 /** @type {boolean} */
Knex.MySqlConnectionConfig.prototype.debug;
 /** @type {boolean} */
Knex.MySqlConnectionConfig.prototype.trace;
 /** @type {boolean} */
Knex.MySqlConnectionConfig.prototype.multipleStatements;
 /** @type {string} */
Knex.MySqlConnectionConfig.prototype.flags;
 /** @type {(string|!Knex.MariaSslConfiguration)} */
Knex.MySqlConnectionConfig.prototype.ssl;
/**
 * @record
 * @struct
 */
Knex.Sqlite3ConnectionConfig = function() {};
 /** @type {string} */
Knex.Sqlite3ConnectionConfig.prototype.filename;
 /** @type {boolean} */
Knex.Sqlite3ConnectionConfig.prototype.debug;
/**
 * @record
 * @struct
 */
Knex.MsSqlOptionsConfig = function() {};
 /** @type {boolean} */
Knex.MsSqlOptionsConfig.prototype.encrypt;
 /** @type {number} */
Knex.MsSqlOptionsConfig.prototype.port;
 /** @type {string} */
Knex.MsSqlOptionsConfig.prototype.domain;
 /** @type {number} */
Knex.MsSqlOptionsConfig.prototype.connectionTimeout;
 /** @type {number} */
Knex.MsSqlOptionsConfig.prototype.requestTimeout;
 /** @type {boolean} */
Knex.MsSqlOptionsConfig.prototype.stream;
 /** @type {boolean} */
Knex.MsSqlOptionsConfig.prototype.parseJSON;
 /** @type {!Knex.PoolConfig} */
Knex.MsSqlOptionsConfig.prototype.pool;
/**
 * @record
 * @struct
 */
Knex.SocketConnectionConfig = function() {};
 /** @type {string} */
Knex.SocketConnectionConfig.prototype.socketPath;
 /** @type {string} */
Knex.SocketConnectionConfig.prototype.user;
 /** @type {string} */
Knex.SocketConnectionConfig.prototype.password;
 /** @type {string} */
Knex.SocketConnectionConfig.prototype.database;
 /** @type {boolean} */
Knex.SocketConnectionConfig.prototype.debug;
/**
 * @record
 * @struct
 */
Knex.PoolConfig = function() {};
 /** @type {string} */
Knex.PoolConfig.prototype.name;
 /** @type {!Function} */
Knex.PoolConfig.prototype.create;
 /** @type {!Function} */
Knex.PoolConfig.prototype.afterCreate;
 /** @type {!Function} */
Knex.PoolConfig.prototype.destroy;
 /** @type {!Function} */
Knex.PoolConfig.prototype.beforeDestroy;
 /** @type {number} */
Knex.PoolConfig.prototype.min;
 /** @type {number} */
Knex.PoolConfig.prototype.max;
 /** @type {boolean} */
Knex.PoolConfig.prototype.refreshIdle;
 /** @type {number} */
Knex.PoolConfig.prototype.idleTimeoutMillis;
 /** @type {number} */
Knex.PoolConfig.prototype.reapIntervalMillis;
 /** @type {boolean} */
Knex.PoolConfig.prototype.returnToHead;
 /** @type {number} */
Knex.PoolConfig.prototype.priorityRange;
 /** @type {!Function} */
Knex.PoolConfig.prototype.validate;
 /** @type {boolean} */
Knex.PoolConfig.prototype.log;
/**
 * @record
 * @struct
 */
Knex.MigratorConfig = function() {};
 /** @type {string} */
Knex.MigratorConfig.prototype.database;
 /** @type {string} */
Knex.MigratorConfig.prototype.directory;
 /** @type {string} */
Knex.MigratorConfig.prototype.extension;
 /** @type {string} */
Knex.MigratorConfig.prototype.tableName;
 /** @type {boolean} */
Knex.MigratorConfig.prototype.disableTransactions;
/**
 * @record
 * @struct
 */
Knex.Migrator = function() {};

/**
 * @param {string} name
 * @param {!Knex.MigratorConfig=} config
 * @return {!Bluebird<string>}
 */
Knex.Migrator.prototype.make = function(name, config) {};

/**
 * @param {!Knex.MigratorConfig=} config
 * @return {!Bluebird<?>}
 */
Knex.Migrator.prototype.latest = function(config) {};

/**
 * @param {!Knex.MigratorConfig=} config
 * @return {!Bluebird<?>}
 */
Knex.Migrator.prototype.rollback = function(config) {};

/**
 * @param {!Knex.MigratorConfig=} config
 * @return {!Bluebird<number>}
 */
Knex.Migrator.prototype.status = function(config) {};

/**
 * @param {!Knex.MigratorConfig=} config
 * @return {!Bluebird<string>}
 */
Knex.Migrator.prototype.currentVersion = function(config) {};
/**
 * @record
 * @struct
 */
Knex.FunctionHelper = function() {};

/**
 * @return {!Knex.Raw}
 */
Knex.FunctionHelper.prototype.now = function() {};

/* TODO: ExportAssignment in  */
