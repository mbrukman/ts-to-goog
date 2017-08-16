/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/node-mysql-wrapper/index.d.ts:

/* TODO: ImportDeclaration in  */

/* TODO: ImportDeclaration in  */

/* TODO: ImportDeclaration in  */
 /** @type {string} */
var EQUAL_TO_PROPERTY_SYMBOL;
 /** @type {string} */
var TABLE_RULES_PROPERTY;

/** @typedef {?} */
var DeleteAnswer;

/** @typedef {?} */
var RawRules;

/** @typedef {?} */
var TableToSearchPart;

/** @typedef {?} */
var PropertyChangedCallback;
/**
 * @record
 * @struct
 */
function Map() {}

/* TODO: IndexSignature:  */
/**
 * @record
 * @struct
 */
function IQuery() {}
 /** @type {!Table<?>} */
IQuery.prototype._table;

/**
 * @param {?} rawCriteria
 * @param {?=} callback
 * @return {!Bluebird<?>}
 */
IQuery.prototype.execute = function(rawCriteria, callback) {};
/**
 * @record
 * @struct
 */
function IQueryConstructor() {}

/* TODO: ConstructSignature:  */

/**
 * @constructor
 * @struct
 * CallbaforEach
 * \@name keyCallback
 * \@returnTye {U}
 */
function Helper() {}

/**
 * Create and return a copy of an object.
 * \@returnType {T}
 * @template T
 * @param {T} object
 * @return {T}
 */
Helper.copyObject = function(object) {};

/**
 * Converts any_string to anyString and returns it.
 * \@returnType {string}
 * @param {string} columnKey
 * @return {string}
 */
Helper.toObjectProperty = function(columnKey) {};

/**
 * Converts anyString to any_string and returns it.
 * \@returnType {string}
 * @param {string} objectKey
 * @return {string}
 */
Helper.toRowProperty = function(objectKey) {};

/**
 * Iterate object's keys and return their values to the callback.
 * \@returnType {U}
 * @template T, U
 * @param {T} map
 * @param {function(T): U} callback
 * @return {U}
 */
Helper.forEachValue = function(map, callback) {};

/**
 * Iterate object's keys and return their names to the callback.
 * \@returnType {U}
 * @template T, U
 * @param {?} map
 * @param {function(string): U} callback
 * @return {U}
 */
Helper.forEachKey = function(map, callback) {};

/**
 * Checks if anything is a function.
 * @param {?} functionToCheck
 * @return {boolean} boolean
 */
Helper.isFunction = function(functionToCheck) {};

/**
 * Checks if an object has 'tableRules' property.
 * @param {?} obj
 * @return {boolean} boolean
 */
Helper.hasRules = function(obj) {};
/**
 * @record
 * @struct
 */
function ICriteriaParts() {}
 /** @type {?} */
ICriteriaParts.prototype.rawCriteriaObject;
 /** @type {!Array<?>} */
ICriteriaParts.prototype.tables;
 /** @type {!Array<string>} */
ICriteriaParts.prototype.noDatabaseProperties;
 /** @type {string} */
ICriteriaParts.prototype.whereClause;

/**
 * @template T
 * @param {!Table<?>} _table
 * @return {string}
 */
ICriteriaParts.prototype.selectFromClause = function(_table) {};

/**
 * @constructor
 * @struct
 * @param {?} rawCriteriaObject
 * @param {!Array<?>} tables
 * @param {!Array<string>} noDatabaseProperties
 * @param {string} whereClause
 */
function CriteriaParts(rawCriteriaObject, tables, noDatabaseProperties, whereClause) {}
 /** @type {?} */
CriteriaParts.prototype.rawCriteriaObject;
 /** @type {!Array<?>} */
CriteriaParts.prototype.tables;
 /** @type {!Array<string>} */
CriteriaParts.prototype.noDatabaseProperties;
 /** @type {string} */
CriteriaParts.prototype.whereClause;

/**
 * @template T
 * @param {!Table<T>} _table
 * @return {string}
 */
CriteriaParts.prototype.selectFromClause = function(_table) {};

/**
 * @constructor
 * @struct
 * @param {!Table<T>} table
 */
function CriteriaDivider(table) {}
 /** @type {?} */
CriteriaDivider.prototype._table;

/**
 * Builds the criteria raw object to Criteria object.
 * \@returnType {Criteria}
 * @param {?} rawCriteriaObject
 * @return {!CriteriaParts}
 */
CriteriaDivider.prototype.build = function(rawCriteriaObject) {};
/**
 * @constructor
 * @struct
 */
function SelectQueryRules() {}
 /** @type {string} */
SelectQueryRules.prototype.lastPropertyClauseName;
 /** @type {string} */
SelectQueryRules.prototype.manuallyEndClause;
 /** @type {string} */
SelectQueryRules.prototype.manuallyBeginClause;
 /** @type {!Array<string>} */
SelectQueryRules.prototype.exceptColumns;
 /** @type {string} */
SelectQueryRules.prototype.orderByColumn;
 /** @type {string} */
SelectQueryRules.prototype.orderByDescColumn;
 /** @type {string} */
SelectQueryRules.prototype.groupByColumn;
 /** @type {number} */
SelectQueryRules.prototype.limitStart;
 /** @type {number} */
SelectQueryRules.prototype.limitEnd;
 /** @type {string} */
SelectQueryRules.prototype.tableName;

/**
 * @return {!SelectQueryRules}
 */
SelectQueryRules.build = function() {};

/**
 * @param {?} propertyClauseName
 * @return {?}
 */
SelectQueryRules.prototype.last = function(propertyClauseName) {};

/**
 * @param {...string} columns
 * @return {!SelectQueryRules}
 */
SelectQueryRules.prototype.except = function(columns) {};

/**
 * Same as .except(...columns)
 * @param {...string} columns
 * @return {!SelectQueryRules}
 */
SelectQueryRules.prototype.exclude = function(columns) {};

/**
 * @param {string} columnKey
 * @param {boolean=} descending
 * @return {!SelectQueryRules}
 */
SelectQueryRules.prototype.orderBy = function(columnKey, descending) {};

/**
 * @param {string} columnKey
 * @return {!SelectQueryRules}
 */
SelectQueryRules.prototype.groupBy = function(columnKey) {};

/**
 * @param {number} limitRowsOrStart
 * @param {number=} limitEnd
 * @return {!SelectQueryRules}
 */
SelectQueryRules.prototype.limit = function(limitRowsOrStart, limitEnd) {};

/**
 * @param {string} manualAfterWhereString
 * @return {!SelectQueryRules}
 */
SelectQueryRules.prototype.appendToBegin = function(manualAfterWhereString) {};

/**
 * @param {string} manualAfterWhereString
 * @return {!SelectQueryRules}
 */
SelectQueryRules.prototype.appendToEnd = function(manualAfterWhereString) {};

/**
 * @param {string} appendToCurrent
 * @return {!SelectQueryRules}
 */
SelectQueryRules.prototype.append = function(appendToCurrent) {};

/**
 * @return {!SelectQueryRules}
 */
SelectQueryRules.prototype.clearOrderBy = function() {};

/**
 * @return {!SelectQueryRules}
 */
SelectQueryRules.prototype.clearGroupBy = function() {};

/**
 * @return {!SelectQueryRules}
 */
SelectQueryRules.prototype.clearLimit = function() {};

/**
 * @return {!SelectQueryRules}
 */
SelectQueryRules.prototype.clearEndClause = function() {};

/**
 * @return {!SelectQueryRules}
 */
SelectQueryRules.prototype.clearBeginClause = function() {};

/**
 * @return {!SelectQueryRules}
 */
SelectQueryRules.prototype.clear = function() {};

/**
 * @param {!SelectQueryRules} parentRule
 * @return {!SelectQueryRules}
 */
SelectQueryRules.prototype.from = function(parentRule) {};

/**
 * @return {boolean}
 */
SelectQueryRules.prototype.isEmpty = function() {};

/**
 * @return {string}
 */
SelectQueryRules.prototype.toString = function() {};

/**
 * @return {?}
 */
SelectQueryRules.prototype.toRawObject = function() {};

/**
 * @param {!SelectQueryRules} rules
 * @return {string}
 */
SelectQueryRules.toString = function(rules) {};

/**
 * @param {!SelectQueryRules} rules
 * @return {?}
 */
SelectQueryRules.toRawObject = function(rules) {};

/**
 * @param {?} obj
 * @return {!SelectQueryRules}
 */
SelectQueryRules.fromRawObject = function(obj) {};

/**
 * @constructor
 * @struct
 * @param {!Table<T>} primaryTable
 * @param {string=} tableName_or_tablePropertyName
 * @param {!CriteriaBuilder<?>=} parentBuilder
 */
function CriteriaBuilder(primaryTable, tableName_or_tablePropertyName, parentBuilder) {}
 /** @type {?} */
CriteriaBuilder.prototype.rawCriteria;
 /** @type {!Table<T>} */
CriteriaBuilder.prototype.primaryTable;
 /** @type {!CriteriaBuilder<?>} */
CriteriaBuilder.prototype.parentBuilder;

/**
 * @param {...string} columns
 * @return {!CriteriaBuilder}
 */
CriteriaBuilder.prototype.except = function(columns) {};

/**
 * Same as .except(...columns)
 * @param {...string} columns
 * @return {!CriteriaBuilder}
 */
CriteriaBuilder.prototype.exclude = function(columns) {};

/**
 * @param {string} key
 * @param {?} value
 * @return {!CriteriaBuilder}
 */
CriteriaBuilder.prototype.where = function(key, value) {};

/**
 * @return {void}
 */
CriteriaBuilder.prototype.createRulesIfNotExists = function() {};

/**
 * @param {string} column
 * @param {boolean=} desceding
 * @return {!CriteriaBuilder}
 */
CriteriaBuilder.prototype.orderBy = function(column, desceding) {};

/**
 * @param {number} start
 * @param {number=} end
 * @return {!CriteriaBuilder}
 */
CriteriaBuilder.prototype.limit = function(start, end) {};

/**
 * @param {string} realTableName
 * @param {string} foreignColumnName
 * @return {!CriteriaBuilder}
 */
CriteriaBuilder.prototype.join = function(realTableName, foreignColumnName) {};

/**
 * @param {string} tableNameProperty
 * @param {string} realTableName
 * @param {string} foreignColumnName
 * @return {!CriteriaBuilder}
 */
CriteriaBuilder.prototype.joinAs = function(tableNameProperty, realTableName, foreignColumnName) {};

/**
 * @param {string} tableNameProperty
 * @return {!CriteriaBuilder}
 */
CriteriaBuilder.prototype.at = function(tableNameProperty) {};

/**
 * @return {!CriteriaBuilder}
 */
CriteriaBuilder.prototype.parent = function() {};

/**
 * @return {!CriteriaBuilder}
 */
CriteriaBuilder.prototype.original = function() {};

/**
 * Auto kanei kuklous mexri na paei sto primary table kai ekei na epistrepsei to sunoliko raw criteria gia execute i kati allo.
 * @return {?}
 */
CriteriaBuilder.prototype.build = function() {};

/**
 * @template T
 * @param {!Table<T>} table
 * @return {!CriteriaBuilder<T>}
 */
CriteriaBuilder.from = function(table) {};

/**
 * @constructor
 * @struct
 * @param {!Table<T>} _table
 */
function SelectQuery(_table) {}
 /** @type {!Table<T>} */
SelectQuery.prototype._table;

/**
 * @param {?} result
 * @param {?} criteria
 * @return {!Bluebird<?>}
 */
SelectQuery.prototype.parseQueryResult = function(result, criteria) {};

/**
 * Executes the select and returns the Promise.
 * @param {?} rawCriteria
 * @param {function(!Array<T>): ?=} callback
 * @return {!Bluebird<!Array<T>>}
 */
SelectQuery.prototype.promise = function(rawCriteria, callback) {};

/**
 * Exactly the same thing as promise().
 * Executes the select and returns the Promise.
 * @param {?} rawCriteria
 * @param {function(!Array<T>): ?=} callback
 * @return {!Bluebird<!Array<T>>}
 */
SelectQuery.prototype.execute = function(rawCriteria, callback) {};

/**
 * @constructor
 * @struct
 * @param {!Table<T>} _table
 */
function SaveQuery(_table) {}
 /** @type {!Table<T>} */
SaveQuery.prototype._table;

/**
 * @param {?} criteriaRawJsObject
 * @param {function(?): ?=} callback
 * @return {!Bluebird<?>}
 */
SaveQuery.prototype.execute = function(criteriaRawJsObject, callback) {};

/**
 * @constructor
 * @struct
 * @param {!Table<T>} _table
 */
function DeleteQuery(_table) {}
 /** @type {!Table<T>} */
DeleteQuery.prototype._table;

/**
 * @param {?} criteriaOrID
 * @param {function(?): ?=} callback
 * @return {!Bluebird<?>}
 */
DeleteQuery.prototype.execute = function(criteriaOrID, callback) {};

/**
 * @constructor
 * @struct
 * @param {string} propertyName
 * @param {?} oldValue
 */
function PropertyChangedArgs(propertyName, oldValue) {}
 /** @type {string} */
PropertyChangedArgs.prototype.propertyName;
 /** @type {?} */
PropertyChangedArgs.prototype.oldValue;

/**
 * @constructor
 * @struct
 * @param {?=} obj
 */
function ObservableObject(obj) {}
 /** @type {!Array<string>} */
ObservableObject.RESERVED_PROPERTY_NAMES;
 /** @type {!Array<?>} */
ObservableObject.prototype.propertyChangedListeners;

/**
 * Make the obj observable. Used in constructor or extend this class and use it.
 * @param {?} obj
 * @return {void}
 */
ObservableObject.prototype.makeObservable = function(obj) {};

/**
 * Add a listener/observer to watch for changes in this object's properties
 * @param {?} listener
 * @return {void}
 */
ObservableObject.prototype.onPropertyChanged = function(listener) {};

/**
 * If developer wants manualy notify for property changed
 * @param {string} propertyName
 * @param {?} oldValue
 * @return {void}
 */
ObservableObject.prototype.notifyPropertyChanged = function(propertyName, oldValue) {};

/**
 * Remove property changed listeners
 * @return {void}
 */
ObservableObject.prototype._forget = function() {};

/**
 * @param {...string} excludeProperties
 * @return {?}
 */
ObservableObject.prototype.toJSON = function(excludeProperties) {};

/** @const */
var CollectionChangedAction = {};
/** @const {number} */
CollectionChangedAction.INSERT;
/** @const {number} */
CollectionChangedAction.DELETE;
/** @const {number} */
CollectionChangedAction.RESET;

/**
 * @constructor
 * @struct
 * @param {CollectionChangedAction} action
 * @param {!Array<(T|?)>=} oldItems
 * @param {!Array<(T|?)>=} newItems
 * @param {number=} oldStartingIndex
 * @param {number=} newStartingIndex
 */
function CollectionChangedEventArgs(action, oldItems, newItems, oldStartingIndex, newStartingIndex) {}
 /** @type {CollectionChangedAction} */
CollectionChangedEventArgs.prototype.action;
 /** @type {!Array<(T|?)>} */
CollectionChangedEventArgs.prototype.oldItems;
 /** @type {!Array<(T|?)>} */
CollectionChangedEventArgs.prototype.newItems;
 /** @type {number} */
CollectionChangedEventArgs.prototype.oldStartingIndex;
 /** @type {number} */
CollectionChangedEventArgs.prototype.newStartingIndex;

/**
 * @constructor
 * @struct
 * @param {!Table<T>} table
 */
function BaseCollection(table) {}
 /** @type {!Array<(T|?)>} */
BaseCollection.prototype.list;
 /** @type {!Array<function(!CollectionChangedEventArgs<T>): void>} */
BaseCollection.prototype.listeners;
 /** @type {number} */
BaseCollection.prototype.length;
 /** @type {!Array<(T|?)>} */
BaseCollection.prototype.items;

/**
 * @param {(string|number|T)} item
 * @return {number}
 */
BaseCollection.prototype.indexOf = function(item) {};

/**
 * @param {(string|number)} itemId
 * @return {T}
 */
BaseCollection.prototype.findItem = function(itemId) {};

/**
 * @param {number} index
 * @return {T}
 */
BaseCollection.prototype.getItem = function(index) {};

/**
 * @param {number} index
 * @return {?}
 */
BaseCollection.prototype.getItemObservable = function(index) {};

/**
 * @param {...(T|?)} items
 * @return {(T|?)}
 */
BaseCollection.prototype.addItem = function(items) {};

/**
 * @param {...(T|?)} items
 * @return {!BaseCollection}
 */
BaseCollection.prototype.removeItem = function(items) {};

/**
 * @param {(string|number)} id
 * @return {!BaseCollection}
 */
BaseCollection.prototype.removeItemById = function(id) {};

/**
 * @param {...(T|?)} items
 * @return {!BaseCollection}
 */
BaseCollection.prototype.forgetItem = function(items) {};

/**
 * @return {!BaseCollection}
 */
BaseCollection.prototype.reset = function() {};

/**
 * @param {!CollectionChangedEventArgs<T>} evtArgs
 * @return {void}
 */
BaseCollection.prototype.notifyCollectionChanged = function(evtArgs) {};

/**
 * @param {function(!CollectionChangedEventArgs<T>): void} callback
 * @return {void}
 */
BaseCollection.prototype.onCollectionChanged = function(callback) {};

/**
 * @constructor
 * @struct
 * @param {!Table<T>} table
 * @param {boolean=} fetchAllFromDatabase
 * @param {!Function=} callbackWhenReady
 */
function ObservableCollection(table, fetchAllFromDatabase, callbackWhenReady) {}
 /** @type {!BaseCollection<T>} */
ObservableCollection.prototype.local;
 /** @type {!Array<?>} */
ObservableCollection.prototype._items;
 /** @type {!Array<?>} */
ObservableCollection.prototype.items;

/**
 * @param {function(!CollectionChangedEventArgs<T>): void} callback
 * @return {void}
 */
ObservableCollection.prototype.onCollectionChanged = function(callback) {};

/**
 * @return {void}
 */
ObservableCollection.prototype.startListeningToDatabase = function() {};

/**
 * @param {?=} criteriaRawJsObject
 * @param {function(!Array<T>): ?=} callback
 * @return {!Bluebird<!Array<T>>}
 */
ObservableCollection.prototype.find = function(criteriaRawJsObject, callback) {};

/**
 * @param {?} criteriaRawJsObject
 * @param {function(T): ?=} callback
 * @return {!Bluebird<T>}
 */
ObservableCollection.prototype.findOne = function(criteriaRawJsObject, callback) {};

/**
 * @param {(string|number)} id
 * @param {function(T): ?=} callback
 * @return {!Bluebird<T>}
 */
ObservableCollection.prototype.findById = function(id, callback) {};

/**
 * @param {?=} tableRules
 * @param {function(!Array<T>): ?=} callback
 * @return {!Bluebird<!Array<T>>}
 */
ObservableCollection.prototype.findAll = function(tableRules, callback) {};

/**
 * .insert() and .update() do the same thing:  .save();
 * @param {?} criteriaRawJsObject
 * @param {function(?): ?=} callback
 * @return {!Bluebird<?>}
 */
ObservableCollection.prototype.insert = function(criteriaRawJsObject, callback) {};

/**
 * @param {?} criteriaRawJsObject
 * @param {function(?): ?=} callback
 * @return {!Bluebird<?>}
 */
ObservableCollection.prototype.update = function(criteriaRawJsObject, callback) {};

/**
 * @param {?} criteriaRawJsObject
 * @param {function(?): ?=} callback
 * @return {!Bluebird<?>}
 */
ObservableCollection.prototype.save = function(criteriaRawJsObject, callback) {};

/**
 * @param {?} criteriaOrID
 * @param {function(?): ?=} callback
 * @return {!Bluebird<?>}
 */
ObservableCollection.prototype.remove = function(criteriaOrID, callback) {};

/**
 * same thing as .remove();
 * @param {?} criteriaOrID
 * @param {function(?): ?=} callback
 * @return {!Bluebird<?>}
 */
ObservableCollection.prototype.delete = function(criteriaOrID, callback) {};

/**
 * @constructor
 * @struct
 * @param {!Table<T>} table
 * @param {string=} name
 */
function MeteorCollection(table, name) {}
 /** @type {?<T>} */
MeteorCollection.prototype.collection;
 /** @type {!Table<T>} */
MeteorCollection.prototype.table;
 /** @type {?<T>} */
MeteorCollection.prototype.rawCollection;

/**
 * @return {void}
 */
MeteorCollection.prototype.startListeningToDatabase = function() {};

/**
 * @param {?} criteriaRawJsObject
 * @return {void}
 */
MeteorCollection.prototype.fill = function(criteriaRawJsObject) {};

/**
 * @return {void}
 */
MeteorCollection.prototype.fillAll = function() {};

/**
 * @param {?} criteriaRawJsObject
 * @return {void}
 */
MeteorCollection.prototype.fillOne = function(criteriaRawJsObject) {};

/**
 * @param {{insert: function(string, T): boolean, update: function(string, T, !Array<string>, ?): boolean, remove: function(string, T): boolean, fetch: !Array<string>, transform: !Function}} options
 * @return {boolean}
 */
MeteorCollection.prototype.allow = function(options) {};

/**
 * @param {{insert: function(string, T): boolean, update: function(string, T, !Array<string>, ?): boolean, remove: function(string, T): boolean, fetch: !Array<string>, transform: !Function}} options
 * @return {boolean}
 */
MeteorCollection.prototype.deny = function(options) {};

/**
 * @param {?=} selector
 * @param {{sort: ?, skip: number, limit: number, fields: ?, reactive: boolean, transform: !Function}=} options
 * @return {?<T>}
 */
MeteorCollection.prototype.find = function(selector, options) {};

/**
 * @param {?=} selector
 * @param {{sort: ?, skip: number, fields: ?, reactive: boolean, transform: !Function}=} options
 * @return {T}
 */
MeteorCollection.prototype.findOne = function(selector, options) {};

/**
 * @constructor
 * @struct
 * @param {(string|?)} connection
 */
function Connection(connection) {}
 /** @type {?} */
Connection.prototype.connection;
 /** @type {!Array<string>} */
Connection.prototype.eventTypes;
 /** @type {!Array<?>} */
Connection.prototype.tableNamesToUseOnly;
 /** @type {!Array<!Table<?>>} */
Connection.prototype.tables;

/**
 * Creates the MysqlConnection from the connection url or the real connection object.
 * \@returnType {nothing}
 * @param {(string|?)} connection
 * @return {void}
 */
Connection.prototype.create = function(connection) {};

/**
 * Attach a real connection.
 * \@returnType {nothing}
 * @param {?} connection
 * @return {void}
 */
Connection.prototype.attach = function(connection) {};

/**
 * Close the entire real connection and remove all event's listeners (if exist).
 * \@returnType {nothing}
 * @param {function(?): void=} callback
 * @return {void}
 */
Connection.prototype.end = function(callback) {};

/**
 * Close the entire real connection and remove all event's listeners (if exist).
 * the difference from the 'end' is that this method doesn't care about errors so no callback passing here.
 * @return {void}
 */
Connection.prototype.destroy = function() {};

/**
 * Clear all binary logs from the whole database.
 * When finish returns a promise, use it with .then(function(){});
 * @return {!Bluebird<void>} Promise
 */
Connection.prototype.clearBinaryLogs = function() {};

/**
 * Link the real connection with this MysqlConnection object.
 * \@returnType {Promise}
 * @param {function(): void=} readyCallback
 * @return {!Bluebird<void>}
 */
Connection.prototype.link = function(readyCallback) {};

/**
 * Force to use/fetch information from only certain of database's tables, otherwise all database's tables information will be fetched.
 * \@returnType {nothing}
 * @param {...?} tables
 * @return {void}
 */
Connection.prototype.useOnly = function(tables) {};

/**
 * This method has the resposibility of fetching the correct tables from the database ( table = columns' names, primary key name).
 * \@returnType {Promise}
 * @return {!Bluebird<void>}
 */
Connection.prototype.fetchDatabaseInformation = function() {};

/**
 * Escape the query column's value  and return it.
 * \@returnType {string}
 * @param {string} val
 * @return {string}
 */
Connection.prototype.escape = function(val) {};

/**
 * Call when must notify the Database events, SAVE(INSERT,UPDATE), REMOVE(DELETE).
 * \@returnType {nothing}
 * @param {string} tableWhichCalled
 * @param {string} queryStr
 * @param {!Array<?>} rawRows
 * @return {void}
 */
Connection.prototype.notice = function(tableWhichCalled, queryStr, rawRows) {};

/**
 * Adds an event listener/watcher on a table for a 'database event'.
 * \@returnType {nothing}
 * @param {string} tableName
 * @param {?} evtType
 * @param {function(!Array<?>): void} callback
 * @return {void}
 */
Connection.prototype.watch = function(tableName, evtType, callback) {};

/**
 * Removes an event listener/watcher from a table for a specific event type.
 * \@returnType {nothing}
 * @param {string} tableName
 * @param {string} evtType
 * @param {function(!Array<?>): void} callbackToRemove
 * @return {void}
 */
Connection.prototype.unwatch = function(tableName, evtType, callbackToRemove) {};

/**
 * Executes a database query.
 * \@returnType {nothing}
 * @param {string} queryStr
 * @param {function(?, ?): ?} callback
 * @param {!Array<?>=} queryArguments
 * @return {void}
 */
Connection.prototype.query = function(queryStr, callback, queryArguments) {};

/**
 * Returns a MysqlTable object from the database factory. (Note: this method doesn't create anything, just finds and returns the correct table, you don't have to create anything at all. Tables are fetched by the library itself.)
 * If you are using typescript you can pass a class (generic<T>) in order to use the auto completion assistance on table's results methods(find,findById,findAll,save,remove,safeRemove).
 * \@returnType {MysqlTable}
 * @template T
 * @param {string} tableName
 * @return {!Table<T>}
 */
Connection.prototype.table = function(tableName) {};

/**
 * @constructor
 * @struct
 * @param {string} tableName
 * @param {!Connection} connection
 */
function Table(tableName, connection) {}
 /** @type {string} */
Table.prototype._name;
 /** @type {!Connection} */
Table.prototype._connection;
 /** @type {!Array<string>} */
Table.prototype._columns;
 /** @type {string} */
Table.prototype._primaryKey;
 /** @type {!CriteriaDivider<T>} */
Table.prototype._criteriaDivider;
 /** @type {!SelectQueryRules} */
Table.prototype._rules;
 /** @type {!SelectQuery<T>} */
Table.prototype._selectQuery;
 /** @type {!SaveQuery<T>} */
Table.prototype._saveQuery;
 /** @type {!DeleteQuery<T>} */
Table.prototype._deleteQuery;
 /** @type {!Array<string>} */
Table.prototype.columns;
 /** @type {string} */
Table.prototype.primaryKey;
 /** @type {!Connection} */
Table.prototype.connection;
 /** @type {string} */
Table.prototype.name;
 /** @type {!SelectQueryRules} */
Table.prototype.rules;
 /** @type {!CriteriaDivider<T>} */
Table.prototype.criteriaDivider;
 /** @type {!CriteriaBuilder<T>} */
Table.prototype.criteria;

/**
 * Adds or turn on an event listener/watcher on a table for a 'database event'.
 * \@returnType {nothing}
 * @param {string} evtType
 * @param {function(!Array<?>): void} callback
 * @return {void}
 */
Table.prototype.on = function(evtType, callback) {};

/**
 * Removes or turn off an event listener/watcher from a table for a specific event type.
 * \@returnType {nothing}
 * @param {string} evtType
 * @param {function(!Array<?>): void} callbackToRemove
 * @return {void}
 */
Table.prototype.off = function(evtType, callbackToRemove) {};

/**
 * Use it when you want to check if extended function is exists here.
 * \@returnType {boolean}
 * @param {string} extendedFunctionName
 * @return {boolean}
 */
Table.prototype.has = function(extendedFunctionName) {};

/**
 * Extends this table's capabilities with a function.
 * \@returnType {nothing}
 * @param {string} functionName
 * @param {function(!Array<?>): ?} theFunction
 * @return {void}
 */
Table.prototype.extend = function(functionName, theFunction) {};

/**
 * Converts and returns an object from this form: { a_property:'dsda', other_property:something, any_property_name:true } to { aProperty:..., otherProperty...,anyPropertyName...}
 * \@returnType {any}
 * @param {?} row
 * @return {?}
 */
Table.prototype.objectFromRow = function(row) {};

/**
 * Converts and returns an object from this form: { aProperty:'dsda', otherProperty:something, anyPropertyName:true } to { a_property:..., other_property...,any_property_name...}
 * \@returnType {any}
 * @param {?} obj
 * @return {?}
 */
Table.prototype.rowFromObject = function(obj) {};

/**
 * Returns and array of [columns[],values[]]
 * \@returnType {array}
 * @param {?} jsObject
 * @return {!Array<?>}
 */
Table.prototype.getRowAsArray = function(jsObject) {};

/**
 * Returns the primary key's value from an object.
 * \@returnType {number | string}
 * @param {?} jsObject
 * @return {(string|number)}
 */
Table.prototype.getPrimaryKeyValue = function(jsObject) {};

/**
 *
 * @param {?} criteriaRawJsObject
 * @param {function(!Array<T>): ?=} callback
 * @return {!Bluebird<!Array<T>>}
 */
Table.prototype.find = function(criteriaRawJsObject, callback) {};

/**
 * @param {?} criteriaRawJsObject
 * @param {function(T): ?=} callback
 * @return {!Bluebird<T>}
 */
Table.prototype.findSingle = function(criteriaRawJsObject, callback) {};

/**
 * @param {(string|number)} id
 * @param {function(T): ?=} callback
 * @return {!Bluebird<T>}
 */
Table.prototype.findById = function(id, callback) {};

/**
 * @param {?=} tableRules
 * @param {function(!Array<T>): ?=} callback
 * @return {!Bluebird<!Array<T>>}
 */
Table.prototype.findAll = function(tableRules, callback) {};

/**
 * @param {?} criteriaRawJsObject
 * @param {function(?): ?=} callback
 * @return {!Bluebird<?>}
 */
Table.prototype.save = function(criteriaRawJsObject, callback) {};

/**
 * @param {(string|number)|?} id_or_criteriaRawObject_or_criteriaOrID
 * @param {function(?): ?=} callback
 * @return {!Bluebird<?>}
 */
Table.prototype.remove = function(id_or_criteriaRawObject_or_criteriaOrID, callback) {};

/**
 * @constructor
 * @struct
 * @param {!Table<T>} table
 */
function MeteorTable(table) {}
 /** @type {!Table<T>} */
MeteorTable.prototype.table;

/**
 * @param {T} doc
 * @param {function(T): void=} callback
 * @return {T}
 */
MeteorTable.prototype.insert = function(doc, callback) {};

/**
 * @param {?} selector
 * @param {function(): ?=} callback
 * @return {?}
 */
MeteorTable.prototype.remove = function(selector, callback) {};

/**
 * @param {?} selector
 * @param {?} modifier
 * @param {{multi: boolean, upsert: boolean}=} options
 * @param {function(T): ?=} callback
 * @return {number}
 */
MeteorTable.prototype.update = function(selector, modifier, options, callback) {};

/**
 * @param {string=} nameOfCollection
 * @param {?=} fillWithCriteria
 * @return {?<T>}
 */
MeteorTable.prototype.collection = function(nameOfCollection, fillWithCriteria) {};

/**
 * @constructor
 * @struct
 * @param {!Connection=} connection
 */
function Database(connection) {}
 /** @type {!Connection} */
Database.prototype.connection;
 /** @type {boolean} */
Database.prototype.isReady;
 /** @type {!Array<!Function>} */
Database.prototype.readyListenerCallbacks;

/**
 * @param {...!Bluebird<?>} _promises
 * @return {!Bluebird<?>}
 */
Database.when = function(_promises) {};

/**
 * @param {!Connection} connection
 * @return {void}
 */
Database.prototype.setConnection = function(connection) {};

/**
 * Force to use/fetch information from only certain of database's tables, otherwise all database's tables information will be fetched.
 * \@returnType {nothing}
 * @param {...?} useTables
 * @return {void}
 */
Database.prototype.useOnly = function(useTables) {};

/**
 * @param {string} tableName
 * @param {string=} functionName
 * @return {boolean}
 */
Database.prototype.has = function(tableName, functionName) {};

/**
 * @param {function(): void=} callback
 * @return {void}
 */
Database.prototype.ready = function(callback) {};

/**
 * @template T
 * @param {string} tableName
 * @return {!Table<T>}
 */
Database.prototype.table = function(tableName) {};

/**
 * @return {void}
 */
Database.prototype.noticeReady = function() {};

/**
 * @param {function(): void} callback
 * @return {void}
 */
Database.prototype.removeReadyListener = function(callback) {};

/**
 * @param {string} queryStr
 * @param {function(?, ?): ?} callback
 * @param {!Array<?>=} queryArguments
 * @return {void}
 */
Database.prototype.query = function(queryStr, callback, queryArguments) {};

/**
 * Close the entire real connection and remove all event's listeners (if exist).
 * the difference from the 'end' is that this method doesn't care about errors so no callback passing here.
 * @return {void}
 */
Database.prototype.destroy = function() {};

/**
 * Close the entire real connection and remove all event's listeners (if exist).
 * \@returnType {nothing}
 * @param {function(?): void} maybeAcallbackError
 * @return {void}
 */
Database.prototype.end = function(maybeAcallbackError) {};

/**
 * @param {string} tableName
 * @return {!SelectQueryRules}
 */
Database.prototype.newTableRules = function(tableName) {};

/**
 * @param {!SelectQueryRules=} parentRules
 * @return {!SelectQueryRules}
 */
Database.prototype.buildRules = function(parentRules) {};

/**
 * @template T
 * @param {string} tableName
 * @param {!Function=} callbackWhenReady
 * @return {!ObservableCollection<T>}
 */
Database.prototype.collection = function(tableName, callbackWhenReady) {};

/**
 * Meteor js feature only: Returns a table which it's collection can make synchronization with the client
 * @template T
 * @param {string} tableName
 * @return {!MeteorTable<T>}
 */
Database.prototype.meteorTable = function(tableName) {};

/**
 * @param {(string|?)} mysqlUrlOrObjectOrMysqlAlreadyConnection
 * @param {...?} useTables
 * @return {!Database}
 */
function wrap(mysqlUrlOrObjectOrMysqlAlreadyConnection, useTables) {}

/**
 * For meteor js only
 * Same as wrap but it's sync mode - autoconnect to the database without need to use database.ready(callback).
 * @param {(string|?)} mysqlUrlOrObjectOrMysqlAlreadyConnection
 * @param {...?} useTables
 * @return {!Database}
 */
function connect(mysqlUrlOrObjectOrMysqlAlreadyConnection, useTables) {}

/**
 * @template T
 * @param {T} obj
 * @return {?}
 */
function observable(obj) {}