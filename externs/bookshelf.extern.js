/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/bookshelf/index.d.ts:

/* TODO: ImportEqualsDeclaration in  */

/* TODO: ImportEqualsDeclaration in  */

/* TODO: ImportEqualsDeclaration in  */

/* TODO: ImportEqualsDeclaration in  */

/* TODO: ImportEqualsDeclaration in  */
/**
 * @record
 * @struct
 */
function Bookshelf() {}
 /** @type {string} */
Bookshelf.prototype.VERSION;
 /** @type {?} */
Bookshelf.prototype.knex;
 /** @type {?} */
Bookshelf.prototype.Model;
 /** @type {?} */
Bookshelf.prototype.Collection;

/**
 * @param {(string|!Function|!Array<string>)} name
 * @param {?=} options
 * @return {?}
 */
Bookshelf.prototype.plugin = function(name, options) {};

/**
 * @template T
 * @param {?} callback
 * @return {!Bluebird<?>}
 */
Bookshelf.prototype.transaction = function(callback) {};

/**
 * @param {?} knex
 * @return {?}
 */
function Bookshelf(knex) {}

/** @typedef {string} */
Bookshelf.SortOrder;
/**
 * @constructor
 * @struct
 */
Bookshelf.Events = function() {};

/**
 * @param {string=} event
 * @param {!Bookshelf.EventFunction<T>=} callback
 * @param {?=} context
 * @return {void}
 */
Bookshelf.Events.prototype.on = function(event, callback, context) {};

/**
 * @param {string=} event
 * @return {void}
 */
Bookshelf.Events.prototype.off = function(event) {};

/**
 * @param {string=} event
 * @param {...?} args
 * @return {void}
 */
Bookshelf.Events.prototype.trigger = function(event, args) {};

/**
 * @param {string} name
 * @param {...?} args
 * @return {!Bluebird<?>}
 */
Bookshelf.Events.prototype.triggerThen = function(name, args) {};

/**
 * @param {string} event
 * @param {!Bookshelf.EventFunction<T>} callback
 * @param {?=} context
 * @return {void}
 */
Bookshelf.Events.prototype.once = function(event, callback, context) {};
/**
 * @record
 * @struct
 */
Bookshelf.IModelBase = function() {};
 /** @type {(boolean|!Array<string>)} */
Bookshelf.IModelBase.prototype.hasTimestamps;
 /** @type {string} */
Bookshelf.IModelBase.prototype.tableName;
/**
 * @extends {Bookshelf.IModelBase}
 * @record
 * @struct
 */
Bookshelf.ModelBase = function() {};
 /** @type {string} */
Bookshelf.ModelBase.prototype.idAttribute;
 /** @type {?} */
Bookshelf.ModelBase.prototype.id;
 /** @type {?} */
Bookshelf.ModelBase.prototype.attributes;

/**
 * @return {T}
 */
Bookshelf.ModelBase.prototype.clear = function() {};

/**
 * @return {T}
 */
Bookshelf.ModelBase.prototype.clone = function() {};

/**
 * @param {string} attribute
 * @return {string}
 */
Bookshelf.ModelBase.prototype.escape = function(attribute) {};

/**
 * @param {?} attributes
 * @return {?}
 */
Bookshelf.ModelBase.prototype.format = function(attributes) {};

/**
 * @param {string} attribute
 * @return {?}
 */
Bookshelf.ModelBase.prototype.get = function(attribute) {};

/**
 * @param {string} attribute
 * @return {boolean}
 */
Bookshelf.ModelBase.prototype.has = function(attribute) {};

/**
 * @param {string=} attribute
 * @return {boolean}
 */
Bookshelf.ModelBase.prototype.hasChanged = function(attribute) {};

/**
 * @return {boolean}
 */
Bookshelf.ModelBase.prototype.isNew = function() {};

/**
 * @param {!Object} response
 * @return {!Object}
 */
Bookshelf.ModelBase.prototype.parse = function(response) {};

/**
 * @return {?}
 */
Bookshelf.ModelBase.prototype.previousAttributes = function() {};

/**
 * @param {string} attribute
 * @return {?}
 */
Bookshelf.ModelBase.prototype.previous = function(attribute) {};

/**
 * @template R
 * @param {string} relation
 * @return {(R|!Bookshelf.Collection<R>)}
 */
Bookshelf.ModelBase.prototype.related = function(relation) {};

/**
 * @param {!Bookshelf.SerializeOptions=} options
 * @return {?}
 */
Bookshelf.ModelBase.prototype.serialize = function(options) {};

/**
 * @param {!Object<string,?>|string=} attribute
 * @param {!Bookshelf.SetOptions|?=} options_or_value
 * @param {!Bookshelf.SetOptions=} options
 * @return {T}
 */
Bookshelf.ModelBase.prototype.set = function(attribute, options_or_value, options) {};

/**
 * @param {!Bookshelf.TimestampOptions=} options
 * @return {?}
 */
Bookshelf.ModelBase.prototype.timestamp = function(options) {};

/**
 * @param {!Bookshelf.SerializeOptions=} options
 * @return {?}
 */
Bookshelf.ModelBase.prototype.toJSON = function(options) {};

/**
 * @param {string} attribute
 * @return {T}
 */
Bookshelf.ModelBase.prototype.unset = function(attribute) {};

/**
 * @template R
 * @return {R}
 */
Bookshelf.ModelBase.prototype.invert = function() {};

/**
 * @return {!Array<string>}
 */
Bookshelf.ModelBase.prototype.keys = function() {};

/**
 * @template R
 * @param {...function(?, string, ?): boolean|string=} predicate_or_attributes
 * @return {R}
 */
Bookshelf.ModelBase.prototype.omit = function(predicate_or_attributes) {};

/**
 * @return {!Array<!Array<?>>}
 */
Bookshelf.ModelBase.prototype.pairs = function() {};

/**
 * @template R
 * @param {...function(?, string, ?): boolean|string=} predicate_or_attributes
 * @return {R}
 */
Bookshelf.ModelBase.prototype.pick = function(predicate_or_attributes) {};

/**
 * @return {!Array<?>}
 */
Bookshelf.ModelBase.prototype.values = function() {};
/**
 * @extends {Bookshelf.ModelBase}
 * @constructor
 * @struct
 */
Bookshelf.Model = function() {};
 /** @type {!createError.Error<!Error>} */
Bookshelf.Model.NotFoundError;
 /** @type {!createError.Error<!Error>} */
Bookshelf.Model.NoRowsUpdatedError;
 /** @type {!createError.Error<!Error>} */
Bookshelf.Model.NoRowsDeletedError;

/**
 * @template T
 * @param {!Array<T>=} models
 * @param {!Bookshelf.CollectionOptions<T>=} options
 * @return {!Bookshelf.Collection<T>}
 */
Bookshelf.Model.collection = function(models, options) {};

/**
 * @param {string=} column
 * @param {!Bookshelf.SyncOptions=} options
 * @return {!Bluebird<number>}
 */
Bookshelf.Model.count = function(column, options) {};

/**
 * @deprecated use Typescript classes
 * @template T
 * @param {?=} prototypeProperties
 * @param {?=} classProperties
 * @return {!Function}
 */
Bookshelf.Model.extend = function(prototypeProperties, classProperties) {};

/**
 * @template T
 * @return {!Bluebird<!Bookshelf.Collection<T>>}
 */
Bookshelf.Model.fetchAll = function() {};

/**
 * @deprecated should use `new` objects instead.
 * @template T
 * @param {?=} attributes
 * @param {!Bookshelf.ModelOptions=} options
 * @return {T}
 */
Bookshelf.Model.forge = function(attributes, options) {};

/**
 * @template T
 * @param {!Object<string,?>|string} properties_or_key
 * @param {(string|number|boolean)=} operatorOrValue
 * @param {(string|number|boolean)=} valueIfOperator
 * @return {T}
 */
Bookshelf.Model.where = function(properties_or_key, operatorOrValue, valueIfOperator) {};

/**
 * @template R
 * @param {function(new: (R), !Array<?>): ?} target
 * @param {string=} foreignKey
 * @param {string=} foreignKeyTarget
 * @return {R}
 */
Bookshelf.Model.prototype.belongsTo = function(target, foreignKey, foreignKeyTarget) {};

/**
 * @template R
 * @param {function(new: (R), !Array<?>): ?} target
 * @param {string=} table
 * @param {string=} foreignKey
 * @param {string=} otherKey
 * @param {string=} foreignKeyTarget
 * @param {string=} otherKeyTarget
 * @return {!Bookshelf.Collection<R>}
 */
Bookshelf.Model.prototype.belongsToMany = function(target, table, foreignKey, otherKey, foreignKeyTarget, otherKeyTarget) {};

/**
 * @param {string=} column
 * @param {!Bookshelf.SyncOptions=} options
 * @return {!Bluebird<number>}
 */
Bookshelf.Model.prototype.count = function(column, options) {};

/**
 * @param {!Bookshelf.DestroyOptions=} options
 * @return {!Bluebird<T>}
 */
Bookshelf.Model.prototype.destroy = function(options) {};

/**
 * @param {!Bookshelf.FetchOptions=} options
 * @return {!Bluebird<T>}
 */
Bookshelf.Model.prototype.fetch = function(options) {};

/**
 * @param {!Bookshelf.FetchAllOptions=} options
 * @return {!Bluebird<!Bookshelf.Collection<T>>}
 */
Bookshelf.Model.prototype.fetchAll = function(options) {};

/**
 * @template R
 * @param {function(new: (R), !Array<?>): ?} target
 * @param {string=} foreignKey
 * @param {string=} foreignKeyTarget
 * @return {!Bookshelf.Collection<R>}
 */
Bookshelf.Model.prototype.hasMany = function(target, foreignKey, foreignKeyTarget) {};

/**
 * @template R
 * @param {function(new: (R), !Array<?>): ?} target
 * @param {string=} foreignKey
 * @param {string=} foreignKeyTarget
 * @return {R}
 */
Bookshelf.Model.prototype.hasOne = function(target, foreignKey, foreignKeyTarget) {};

/**
 * @param {(string|!Array<string>)} relations
 * @param {!Bookshelf.LoadOptions=} options
 * @return {!Bluebird<T>}
 */
Bookshelf.Model.prototype.load = function(relations, options) {};

/**
 * @template R
 * @param {function(new: (R), !Array<?>): ?} target
 * @param {string=} name
 * @param {!Array<string>=} columnNames
 * @param {string=} morphValue
 * @return {!Bookshelf.Collection<R>}
 */
Bookshelf.Model.prototype.morphMany = function(target, name, columnNames, morphValue) {};

/**
 * @template R
 * @param {function(new: (R), !Array<?>): ?} target
 * @param {string=} name
 * @param {!Array<string>=} columnNames
 * @param {string=} morphValue
 * @return {R}
 */
Bookshelf.Model.prototype.morphOne = function(target, name, columnNames, morphValue) {};

/**
 * @param {string} name
 * @param {...!Array<string>|?=} columnNames_or_target
 * @return {T}
 */
Bookshelf.Model.prototype.morphTo = function(name, columnNames_or_target) {};

/**
 * @param {string} column
 * @param {string=} order
 * @return {T}
 */
Bookshelf.Model.prototype.orderBy = function(column, order) {};

/**
 * @param {...function(!Knex.QueryBuilder): void|string|!Object<string,?>} callback_or_query
 * @return {!Knex.QueryBuilder|T}
 */
Bookshelf.Model.prototype.query = function(callback_or_query) {};

/**
 * @param {!Bookshelf.FetchOptions=} options
 * @return {!Bluebird<T>}
 */
Bookshelf.Model.prototype.refresh = function(options) {};

/**
 * @return {T}
 */
Bookshelf.Model.prototype.resetQuery = function() {};

/**
 * @param {string|!Object<string,?>=} key_or_attrs
 * @param {?|!Bookshelf.SaveOptions=} val_or_options
 * @param {!Bookshelf.SaveOptions=} options
 * @return {!Bluebird<T>}
 */
Bookshelf.Model.prototype.save = function(key_or_attrs, val_or_options, options) {};

/**
 * @template R
 * @param {?} interim
 * @param {string=} throughForeignKey
 * @param {string=} otherKey
 * @return {R}
 */
Bookshelf.Model.prototype.through = function(interim, throughForeignKey, otherKey) {};

/**
 * @param {!Object<string,?>|string} properties_or_key
 * @param {(string|number|boolean)=} operatorOrValue
 * @param {(string|number|boolean)=} valueIfOperator
 * @return {T}
 */
Bookshelf.Model.prototype.where = function(properties_or_key, operatorOrValue, valueIfOperator) {};

/**
 * @constructor
 * @struct
 * @param {!Array<T>=} models
 * @param {!Bookshelf.CollectionOptions<T>=} options
 */
Bookshelf.CollectionBase = function(models, options) {};
 /** @type {number} */
Bookshelf.CollectionBase.prototype.length;

/**
 * @param {(!Array<T>|!Array<!Object<string,?>>)} models
 * @param {!Bookshelf.CollectionAddOptions=} options
 * @return {!Bookshelf.Collection<T>}
 */
Bookshelf.CollectionBase.prototype.add = function(models, options) {};

/**
 * @param {number} index
 * @return {T}
 */
Bookshelf.CollectionBase.prototype.at = function(index) {};

/**
 * @return {!Bookshelf.Collection<T>}
 */
Bookshelf.CollectionBase.prototype.clone = function() {};

/**
 * @param {!Bookshelf.CollectionFetchOptions=} options
 * @return {!Bluebird<!Bookshelf.Collection<T>>}
 */
Bookshelf.CollectionBase.prototype.fetch = function(options) {};

/**
 * @param {!Object<string,?>} match
 * @return {T}
 */
Bookshelf.CollectionBase.prototype.findWhere = function(match) {};

/**
 * @param {?} id
 * @return {T}
 */
Bookshelf.CollectionBase.prototype.get = function(id) {};

/**
 * @param {string} name
 * @param {...?} args
 * @return {!Bluebird<?>}
 */
Bookshelf.CollectionBase.prototype.invokeThen = function(name, args) {};

/**
 * @param {?} response
 * @return {?}
 */
Bookshelf.CollectionBase.prototype.parse = function(response) {};

/**
 * @param {string} attribute
 * @return {!Array<?>}
 */
Bookshelf.CollectionBase.prototype.pluck = function(attribute) {};

/**
 * @return {void}
 */
Bookshelf.CollectionBase.prototype.pop = function() {};

/**
 * @param {?} model
 * @return {!Bookshelf.Collection<T>}
 */
Bookshelf.CollectionBase.prototype.push = function(model) {};

/**
 * @template R
 * @param {function(R, T, number, !Array<T>): R} iterator
 * @param {R} initialValue
 * @param {?} context
 * @return {!Bluebird<R>}
 */
Bookshelf.CollectionBase.prototype.reduceThen = function(iterator, initialValue, context) {};

/**
 * @param {T|!Array<T>} model
 * @param {!Bookshelf.EventOptions=} options
 * @return {T|!Array<T>}
 */
Bookshelf.CollectionBase.prototype.remove = function(model, options) {};

/**
 * @param {!Array<?>} model
 * @param {!Bookshelf.CollectionAddOptions=} options
 * @return {!Array<T>}
 */
Bookshelf.CollectionBase.prototype.reset = function(model, options) {};

/**
 * @param {!Bookshelf.SerializeOptions=} options
 * @return {!Array<?>}
 */
Bookshelf.CollectionBase.prototype.serialize = function(options) {};

/**
 * @param {(!Array<T>|!Array<!Object<string,?>>)} models
 * @param {!Bookshelf.CollectionSetOptions=} options
 * @return {!Bookshelf.Collection<T>}
 */
Bookshelf.CollectionBase.prototype.set = function(models, options) {};

/**
 * @param {!Bookshelf.EventOptions=} options
 * @return {void}
 */
Bookshelf.CollectionBase.prototype.shift = function(options) {};

/**
 * @param {number=} begin
 * @param {number=} end
 * @return {void}
 */
Bookshelf.CollectionBase.prototype.slice = function(begin, end) {};

/**
 * @param {!Bookshelf.SerializeOptions=} options
 * @return {!Array<?>}
 */
Bookshelf.CollectionBase.prototype.toJSON = function(options) {};

/**
 * @param {?} model
 * @param {!Bookshelf.CollectionAddOptions=} options
 * @return {void}
 */
Bookshelf.CollectionBase.prototype.unshift = function(model, options) {};

/**
 * @param {!Object<string,?>} match
 * @param {boolean} firstOnly
 * @return {(T|!Bookshelf.Collection<T>)}
 */
Bookshelf.CollectionBase.prototype.where = function(match, firstOnly) {};

/**
 * @template R
 * @param {(string|function(T, number, !ArrayLike<T>): boolean|function(T, string, !_.Dictionary<T>): boolean)|R=} predicate
 * @param {?=} thisArg
 * @return {boolean}
 */
Bookshelf.CollectionBase.prototype.all = function(predicate, thisArg) {};

/**
 * @template R
 * @param {(string|function(T, number, !ArrayLike<T>): boolean|function(T, string, !_.Dictionary<T>): boolean)|R=} predicate
 * @param {?=} thisArg
 * @return {boolean}
 */
Bookshelf.CollectionBase.prototype.any = function(predicate, thisArg) {};

/**
 * @return {!_.LoDashExplicitObjectWrapper<T>}
 */
Bookshelf.CollectionBase.prototype.chain = function() {};

/**
 * @template R
 * @param {(string|function(T, number, !ArrayLike<T>): boolean|function(T, string, !_.Dictionary<T>): boolean)|R=} predicate
 * @param {?=} thisArg
 * @return {!Array<T>}
 */
Bookshelf.CollectionBase.prototype.collect = function(predicate, thisArg) {};

/**
 * @param {?} value
 * @param {number=} fromIndex
 * @return {boolean}
 */
Bookshelf.CollectionBase.prototype.contains = function(value, fromIndex) {};

/**
 * @template R
 * @param {(string|function(T, number, !ArrayLike<T>): boolean|function(T, string, !_.Dictionary<T>): boolean)|R=} predicate
 * @param {?=} thisArg
 * @return {!_.Dictionary<number>}
 */
Bookshelf.CollectionBase.prototype.countBy = function(predicate, thisArg) {};

/**
 * @template R
 * @param {(string|function(T, number, !ArrayLike<T>): boolean|function(T, string, !_.Dictionary<T>): boolean)|R=} predicate
 * @param {?=} thisArg
 * @return {T}
 */
Bookshelf.CollectionBase.prototype.detect = function(predicate, thisArg) {};

/**
 * @param {...T} values
 * @return {!Array<T>}
 */
Bookshelf.CollectionBase.prototype.difference = function(values) {};

/**
 * @param {number=} n
 * @return {!Array<T>}
 */
Bookshelf.CollectionBase.prototype.drop = function(n) {};

/**
 * @param {function(T, number, !ArrayLike<T>): void|function(T, string, !_.Dictionary<T>): void|function(T, string, ?): void=} callback
 * @param {?=} thisArg
 * @return {!ArrayLike<T>|!_.Dictionary<T>|T}
 */
Bookshelf.CollectionBase.prototype.each = function(callback, thisArg) {};

/**
 * @template R
 * @param {(string|function(T, number, !ArrayLike<T>): boolean|function(T, string, !_.Dictionary<T>): boolean)|R=} predicate
 * @param {?=} thisArg
 * @return {boolean}
 */
Bookshelf.CollectionBase.prototype.every = function(predicate, thisArg) {};

/**
 * @template R
 * @param {(string|function(T, number, !ArrayLike<T>): boolean|function(T, string, !_.Dictionary<T>): boolean)|R=} predicate
 * @param {?=} thisArg
 * @return {!Array<T>}
 */
Bookshelf.CollectionBase.prototype.filter = function(predicate, thisArg) {};

/**
 * @template R
 * @param {(string|function(T, number, !ArrayLike<T>): boolean|function(T, string, !_.Dictionary<T>): boolean)|R=} predicate
 * @param {?=} thisArg
 * @return {T}
 */
Bookshelf.CollectionBase.prototype.find = function(predicate, thisArg) {};

/**
 * @return {T}
 */
Bookshelf.CollectionBase.prototype.first = function() {};

/**
 * @template R
 * @param {function(R, T, ?, !Array<T>): R=} callback
 * @param {R=} accumulator
 * @param {?=} thisArg
 * @return {R}
 */
Bookshelf.CollectionBase.prototype.foldl = function(callback, accumulator, thisArg) {};

/**
 * @template R
 * @param {function(R, T, ?, !Array<T>): R=} callback
 * @param {R=} accumulator
 * @param {?=} thisArg
 * @return {R}
 */
Bookshelf.CollectionBase.prototype.foldr = function(callback, accumulator, thisArg) {};

/**
 * @param {function(T, number, !ArrayLike<T>): void|function(T, string, !_.Dictionary<T>): void|function(T, string, ?): void=} callback
 * @param {?=} thisArg
 * @return {!ArrayLike<T>|!_.Dictionary<T>|T}
 */
Bookshelf.CollectionBase.prototype.forEach = function(callback, thisArg) {};

/**
 * @template R
 * @param {(string|function(T, number, !ArrayLike<T>): boolean|function(T, string, !_.Dictionary<T>): boolean)|R=} predicate
 * @param {?=} thisArg
 * @return {!_.Dictionary<!Array<T>>}
 */
Bookshelf.CollectionBase.prototype.groupBy = function(predicate, thisArg) {};

/**
 * @return {T}
 */
Bookshelf.CollectionBase.prototype.head = function() {};

/**
 * @param {?} value
 * @param {number=} fromIndex
 * @return {boolean}
 */
Bookshelf.CollectionBase.prototype.include = function(value, fromIndex) {};

/**
 * @param {?} value
 * @param {number=} fromIndex
 * @return {number}
 */
Bookshelf.CollectionBase.prototype.indexOf = function(value, fromIndex) {};

/**
 * @return {!Array<T>}
 */
Bookshelf.CollectionBase.prototype.initial = function() {};

/**
 * @template R
 * @param {function(R, T, ?, !Array<T>): R=} callback
 * @param {R=} accumulator
 * @param {?=} thisArg
 * @return {R}
 */
Bookshelf.CollectionBase.prototype.inject = function(callback, accumulator, thisArg) {};

/**
 * @param {(string|!Function)} methodName
 * @param {...?} args
 * @return {?}
 */
Bookshelf.CollectionBase.prototype.invoke = function(methodName, args) {};

/**
 * @return {boolean}
 */
Bookshelf.CollectionBase.prototype.isEmpty = function() {};

/**
 * @return {!Array<string>}
 */
Bookshelf.CollectionBase.prototype.keys = function() {};

/**
 * @return {T}
 */
Bookshelf.CollectionBase.prototype.last = function() {};

/**
 * @param {?} value
 * @param {number=} fromIndex
 * @return {number}
 */
Bookshelf.CollectionBase.prototype.lastIndexOf = function(value, fromIndex) {};

/**
 * @template U
 * @param {(string|function(T, number, !ArrayLike<T>): U)|(string|function(T, string, !_.Dictionary<T>): U)|string=} predicate
 * @param {?=} thisArg
 * @return {!Array<U>}
 */
Bookshelf.CollectionBase.prototype.map = function(predicate, thisArg) {};

/**
 * @template R
 * @param {(string|function(T, number, !ArrayLike<T>): boolean)|R=} predicate
 * @param {?=} thisArg
 * @return {T}
 */
Bookshelf.CollectionBase.prototype.max = function(predicate, thisArg) {};

/**
 * @template R
 * @param {(string|function(T, number, !ArrayLike<T>): boolean)|R=} predicate
 * @param {?=} thisArg
 * @return {T}
 */
Bookshelf.CollectionBase.prototype.min = function(predicate, thisArg) {};

/**
 * @template R
 * @param {function(R, T, ?, !Array<T>): R=} callback
 * @param {R=} accumulator
 * @param {?=} thisArg
 * @return {R}
 */
Bookshelf.CollectionBase.prototype.reduce = function(callback, accumulator, thisArg) {};

/**
 * @template R
 * @param {function(R, T, ?, !Array<T>): R=} callback
 * @param {R=} accumulator
 * @param {?=} thisArg
 * @return {R}
 */
Bookshelf.CollectionBase.prototype.reduceRight = function(callback, accumulator, thisArg) {};

/**
 * @template R
 * @param {(string|function(T, number, !ArrayLike<T>): boolean|function(T, string, !_.Dictionary<T>): boolean)|R=} predicate
 * @param {?=} thisArg
 * @return {!Array<T>}
 */
Bookshelf.CollectionBase.prototype.reject = function(predicate, thisArg) {};

/**
 * @return {!Array<T>}
 */
Bookshelf.CollectionBase.prototype.rest = function() {};

/**
 * @template R
 * @param {(string|function(T, number, !ArrayLike<T>): boolean|function(T, string, !_.Dictionary<T>): boolean)|R=} predicate
 * @param {?=} thisArg
 * @return {!Array<T>}
 */
Bookshelf.CollectionBase.prototype.select = function(predicate, thisArg) {};

/**
 * @return {!Array<T>}
 */
Bookshelf.CollectionBase.prototype.shuffle = function() {};

/**
 * @return {number}
 */
Bookshelf.CollectionBase.prototype.size = function() {};

/**
 * @template R
 * @param {(string|function(T, number, !ArrayLike<T>): boolean|function(T, string, !_.Dictionary<T>): boolean)|R=} predicate
 * @param {?=} thisArg
 * @return {boolean}
 */
Bookshelf.CollectionBase.prototype.some = function(predicate, thisArg) {};

/**
 * @template R
 * @param {(string|function(T, number, !ArrayLike<T>): boolean|function(T, string, !_.Dictionary<T>): boolean)|R=} predicate
 * @param {?=} thisArg
 * @return {!Array<T>}
 */
Bookshelf.CollectionBase.prototype.sortBy = function(predicate, thisArg) {};

/**
 * @return {!Array<T>}
 */
Bookshelf.CollectionBase.prototype.tail = function() {};

/**
 * @param {number=} n
 * @return {!Array<T>}
 */
Bookshelf.CollectionBase.prototype.take = function(n) {};

/**
 * @return {!Array<T>}
 */
Bookshelf.CollectionBase.prototype.toArray = function() {};

/**
 * @param {...?} values
 * @return {!Array<T>}
 */
Bookshelf.CollectionBase.prototype.without = function(values) {};
/**
 * @extends {Bookshelf.CollectionBase}
 * @constructor
 * @struct
 */
Bookshelf.Collection = function() {};
 /** @type {!createError.Error<!Error>} */
Bookshelf.Collection.EmptyError;

/**
 * @deprecated use Typescript classes
 * @template T
 * @param {?=} prototypeProperties
 * @param {?=} classProperties
 * @return {!Function}
 */
Bookshelf.Collection.extend = function(prototypeProperties, classProperties) {};

/**
 * @deprecated should use `new` objects instead.
 * @template T
 * @param {?=} attributes
 * @param {!Bookshelf.ModelOptions=} options
 * @return {T}
 */
Bookshelf.Collection.forge = function(attributes, options) {};

/**
 * @param {?} ids
 * @param {!Bookshelf.SyncOptions=} options
 * @return {!Bluebird<!Bookshelf.Collection>}
 */
Bookshelf.Collection.prototype.attach = function(ids, options) {};

/**
 * @param {string=} column
 * @param {!Bookshelf.SyncOptions=} options
 * @return {!Bluebird<number>}
 */
Bookshelf.Collection.prototype.count = function(column, options) {};

/**
 * @param {!Object<string,?>} model
 * @param {!Bookshelf.CollectionCreateOptions=} options
 * @return {!Bluebird<T>}
 */
Bookshelf.Collection.prototype.create = function(model, options) {};

/**
 * @param {!Array<?>|!Bookshelf.SyncOptions=} ids_or_options
 * @param {!Bookshelf.SyncOptions=} options
 * @return {!Bluebird<?>}
 */
Bookshelf.Collection.prototype.detach = function(ids_or_options, options) {};

/**
 * @param {!Bookshelf.CollectionFetchOneOptions=} options
 * @return {!Bluebird<T>}
 */
Bookshelf.Collection.prototype.fetchOne = function(options) {};

/**
 * @param {(string|!Array<string>)} relations
 * @param {!Bookshelf.SyncOptions=} options
 * @return {!Bluebird<!Bookshelf.Collection>}
 */
Bookshelf.Collection.prototype.load = function(relations, options) {};

/**
 * @param {string} column
 * @param {string=} order
 * @return {T}
 */
Bookshelf.Collection.prototype.orderBy = function(column, order) {};

/**
 * @param {...function(!Knex.QueryBuilder): void|string|!Object<string,?>} callback_or_query
 * @return {!Knex.QueryBuilder|!Bookshelf.Collection}
 */
Bookshelf.Collection.prototype.query = function(callback_or_query) {};

/**
 * @return {!Bookshelf.Collection}
 */
Bookshelf.Collection.prototype.resetQuery = function() {};

/**
 * @template R
 * @param {?} interim
 * @param {string=} throughForeignKey
 * @param {string=} otherKey
 * @return {!Bookshelf.Collection<R>}
 */
Bookshelf.Collection.prototype.through = function(interim, throughForeignKey, otherKey) {};

/**
 * @param {?} attributes
 * @param {!Bookshelf.PivotOptions=} options
 * @return {!Bluebird<number>}
 */
Bookshelf.Collection.prototype.updatePivot = function(attributes, options) {};

/**
 * @param {!Array<string>} columns
 * @return {!Bookshelf.Collection}
 */
Bookshelf.Collection.prototype.withPivot = function(columns) {};
/**
 * @record
 * @struct
 */
Bookshelf.ModelOptions = function() {};
 /** @type {string} */
Bookshelf.ModelOptions.prototype.tableName;
 /** @type {boolean} */
Bookshelf.ModelOptions.prototype.hasTimestamps;
 /** @type {boolean} */
Bookshelf.ModelOptions.prototype.parse;
/**
 * @extends {Bookshelf.SyncOptions}
 * @record
 * @struct
 */
Bookshelf.LoadOptions = function() {};
 /** @type {!Array<(string|!Bookshelf.WithRelatedQuery)>} */
Bookshelf.LoadOptions.prototype.withRelated;
/**
 * @extends {Bookshelf.SyncOptions}
 * @record
 * @struct
 */
Bookshelf.FetchOptions = function() {};
 /** @type {boolean} */
Bookshelf.FetchOptions.prototype.require;
 /** @type {(string|!Array<string>)} */
Bookshelf.FetchOptions.prototype.columns;
 /** @type {!Array<(string|!Bookshelf.WithRelatedQuery)>} */
Bookshelf.FetchOptions.prototype.withRelated;
/**
 * @record
 * @struct
 */
Bookshelf.WithRelatedQuery = function() {};

/* TODO: IndexSignature: Bookshelf */
/**
 * @extends {Bookshelf.FetchOptions}
 * @record
 * @struct
 */
Bookshelf.FetchAllOptions = function() {};
/**
 * @extends {Bookshelf.SyncOptions}
 * @record
 * @struct
 */
Bookshelf.SaveOptions = function() {};
 /** @type {string} */
Bookshelf.SaveOptions.prototype.method;
 /** @type {string} */
Bookshelf.SaveOptions.prototype.defaults;
 /** @type {boolean} */
Bookshelf.SaveOptions.prototype.patch;
 /** @type {boolean} */
Bookshelf.SaveOptions.prototype.require;
/**
 * @extends {Bookshelf.SyncOptions}
 * @record
 * @struct
 */
Bookshelf.DestroyOptions = function() {};
 /** @type {boolean} */
Bookshelf.DestroyOptions.prototype.require;
/**
 * @record
 * @struct
 */
Bookshelf.SerializeOptions = function() {};
 /** @type {boolean} */
Bookshelf.SerializeOptions.prototype.shallow;
 /** @type {boolean} */
Bookshelf.SerializeOptions.prototype.omitPivot;
/**
 * @record
 * @struct
 */
Bookshelf.SetOptions = function() {};
 /** @type {boolean} */
Bookshelf.SetOptions.prototype.unset;
/**
 * @record
 * @struct
 */
Bookshelf.TimestampOptions = function() {};
 /** @type {string} */
Bookshelf.TimestampOptions.prototype.method;
/**
 * @record
 * @struct
 */
Bookshelf.SyncOptions = function() {};
 /** @type {!Knex.Transaction} */
Bookshelf.SyncOptions.prototype.transacting;
 /** @type {boolean} */
Bookshelf.SyncOptions.prototype.debug;
/**
 * @record
 * @struct
 */
Bookshelf.CollectionOptions = function() {};
 /** @type {(string|boolean|function(T, T): number)} */
Bookshelf.CollectionOptions.prototype.comparator;
/**
 * @extends {Bookshelf.EventOptions}
 * @record
 * @struct
 */
Bookshelf.CollectionAddOptions = function() {};
 /** @type {number} */
Bookshelf.CollectionAddOptions.prototype.at;
 /** @type {boolean} */
Bookshelf.CollectionAddOptions.prototype.merge;
/**
 * @record
 * @struct
 */
Bookshelf.CollectionFetchOptions = function() {};
 /** @type {boolean} */
Bookshelf.CollectionFetchOptions.prototype.require;
 /** @type {(string|!Array<string>)} */
Bookshelf.CollectionFetchOptions.prototype.withRelated;
/**
 * @record
 * @struct
 */
Bookshelf.CollectionFetchOneOptions = function() {};
 /** @type {boolean} */
Bookshelf.CollectionFetchOneOptions.prototype.require;
 /** @type {(string|!Array<string>)} */
Bookshelf.CollectionFetchOneOptions.prototype.columns;
/**
 * @extends {Bookshelf.EventOptions}
 * @record
 * @struct
 */
Bookshelf.CollectionSetOptions = function() {};
 /** @type {boolean} */
Bookshelf.CollectionSetOptions.prototype.add;
 /** @type {boolean} */
Bookshelf.CollectionSetOptions.prototype.remove;
 /** @type {boolean} */
Bookshelf.CollectionSetOptions.prototype.merge;
/**
 * @record
 * @struct
 */
Bookshelf.PivotOptions = function() {};
 /** @type {?} */
Bookshelf.PivotOptions.prototype.query;
 /** @type {boolean} */
Bookshelf.PivotOptions.prototype.require;
/**
 * @record
 * @struct
 */
Bookshelf.EventOptions = function() {};
 /** @type {boolean} */
Bookshelf.EventOptions.prototype.silent;
/**
 * @record
 * @struct
 */
Bookshelf.EventFunction = function() {};

/* TODO: CallSignature: Bookshelf */
/**
 * @extends {Bookshelf.ModelOptions}
 * @extends {Bookshelf.SyncOptions}
 * @extends {Bookshelf.CollectionAddOptions}
 * @extends {Bookshelf.SaveOptions}
 * @record
 * @struct
 */
Bookshelf.CollectionCreateOptions = function() {};

/* TODO: ExportAssignment in  */