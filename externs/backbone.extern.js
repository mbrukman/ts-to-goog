/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/backbone/index.d.ts:

/* TODO: ExportAssignment in  */

/* TODO: NamespaceExportDeclaration in  */

/* TODO: ImportDeclaration in  */
/** @const */
var Backbone = {};
/**
 * @extends {Backbone.Silenceable}
 * @record
 * @struct
 */
Backbone.AddOptions = function() {};
 /** @type {number} */
Backbone.AddOptions.prototype.at;
 /** @type {boolean} */
Backbone.AddOptions.prototype.merge;
/**
 * @extends {Backbone.Silenceable}
 * @record
 * @struct
 */
Backbone.HistoryOptions = function() {};
 /** @type {boolean} */
Backbone.HistoryOptions.prototype.pushState;
 /** @type {string} */
Backbone.HistoryOptions.prototype.root;
/**
 * @record
 * @struct
 */
Backbone.NavigateOptions = function() {};
 /** @type {boolean} */
Backbone.NavigateOptions.prototype.trigger;
 /** @type {boolean} */
Backbone.NavigateOptions.prototype.replace;
/**
 * @record
 * @struct
 */
Backbone.RouterOptions = function() {};
 /** @type {?} */
Backbone.RouterOptions.prototype.routes;
/**
 * @record
 * @struct
 */
Backbone.Silenceable = function() {};
 /** @type {boolean} */
Backbone.Silenceable.prototype.silent;
/**
 * @record
 * @struct
 */
Backbone.Validable = function() {};
 /** @type {boolean} */
Backbone.Validable.prototype.validate;
/**
 * @record
 * @struct
 */
Backbone.Waitable = function() {};
 /** @type {boolean} */
Backbone.Waitable.prototype.wait;
/**
 * @record
 * @struct
 */
Backbone.Parseable = function() {};
 /** @type {?} */
Backbone.Parseable.prototype.parse;
/**
 * @record
 * @struct
 */
Backbone.PersistenceOptions = function() {};
 /** @type {string} */
Backbone.PersistenceOptions.prototype.url;
 /** @type {?} */
Backbone.PersistenceOptions.prototype.data;
 /** @type {function(!JQueryXHR): void} */
Backbone.PersistenceOptions.prototype.beforeSend;
 /** @type {function(?, ?, ?): void} */
Backbone.PersistenceOptions.prototype.success;
 /** @type {function(?, !JQueryXHR, ?): void} */
Backbone.PersistenceOptions.prototype.error;
/**
 * @extends {Backbone.Silenceable}
 * @extends {Backbone.Validable}
 * @record
 * @struct
 */
Backbone.ModelSetOptions = function() {};
/**
 * @extends {Backbone.PersistenceOptions}
 * @extends {Backbone.ModelSetOptions}
 * @extends {Backbone.Parseable}
 * @record
 * @struct
 */
Backbone.ModelFetchOptions = function() {};
/**
 * @extends {Backbone.Silenceable}
 * @extends {Backbone.Waitable}
 * @extends {Backbone.Validable}
 * @extends {Backbone.Parseable}
 * @extends {Backbone.PersistenceOptions}
 * @record
 * @struct
 */
Backbone.ModelSaveOptions = function() {};
 /** @type {boolean} */
Backbone.ModelSaveOptions.prototype.patch;
/**
 * @extends {Backbone.Waitable}
 * @extends {Backbone.PersistenceOptions}
 * @record
 * @struct
 */
Backbone.ModelDestroyOptions = function() {};
/**
 * @extends {Backbone.PersistenceOptions}
 * @extends {Backbone.Parseable}
 * @record
 * @struct
 */
Backbone.CollectionFetchOptions = function() {};
 /** @type {boolean} */
Backbone.CollectionFetchOptions.prototype.reset;
/**
 * @record
 * @struct
 */
Backbone.ObjectHash = function() {};

/* TODO: IndexSignature: Backbone */
/**
 * @record
 * @struct
 */
Backbone.RoutesHash = function() {};

/* TODO: IndexSignature: Backbone */
/**
 * @record
 * @struct
 */
Backbone.EventsHash = function() {};

/* TODO: IndexSignature: Backbone */
/**
 * @constructor
 * @struct
 */
Backbone.Events = function() {};

/**
 * @param {string|!Backbone.EventsHash} eventName_or_eventMap
 * @param {!Function=} callback
 * @param {?=} context
 * @return {?}
 */
Backbone.Events.prototype.on = function(eventName_or_eventMap, callback, context) {};

/**
 * @param {string=} eventName
 * @param {!Function=} callback
 * @param {?=} context
 * @return {?}
 */
Backbone.Events.prototype.off = function(eventName, callback, context) {};

/**
 * @param {string} eventName
 * @param {...?} args
 * @return {?}
 */
Backbone.Events.prototype.trigger = function(eventName, args) {};

/**
 * @param {string} eventName
 * @param {!Function} callback
 * @param {?=} context
 * @return {?}
 */
Backbone.Events.prototype.bind = function(eventName, callback, context) {};

/**
 * @param {string=} eventName
 * @param {!Function=} callback
 * @param {?=} context
 * @return {?}
 */
Backbone.Events.prototype.unbind = function(eventName, callback, context) {};

/**
 * @param {string} events
 * @param {!Function} callback
 * @param {?=} context
 * @return {?}
 */
Backbone.Events.prototype.once = function(events, callback, context) {};

/**
 * @param {?} object
 * @param {string} events
 * @param {!Function} callback
 * @return {?}
 */
Backbone.Events.prototype.listenTo = function(object, events, callback) {};

/**
 * @param {?} object
 * @param {string} events
 * @param {!Function} callback
 * @return {?}
 */
Backbone.Events.prototype.listenToOnce = function(object, events, callback) {};

/**
 * @param {?=} object
 * @param {string=} events
 * @param {!Function=} callback
 * @return {?}
 */
Backbone.Events.prototype.stopListening = function(object, events, callback) {};
/**
 * @extends {Backbone.Events}
 * @constructor
 * @struct
 */
Backbone.ModelBase = function() {};
 /** @type {?} */
Backbone.ModelBase.prototype.url;

/**
 * @param {?} response
 * @param {?=} options
 * @return {?}
 */
Backbone.ModelBase.prototype.parse = function(response, options) {};

/**
 * @param {?=} options
 * @return {?}
 */
Backbone.ModelBase.prototype.toJSON = function(options) {};

/**
 * @param {...?} arg
 * @return {!JQueryXHR}
 */
Backbone.ModelBase.prototype.sync = function(arg) {};

/**
 * @constructor
 * @struct
 * @param {?=} attributes
 * @param {?=} options
 */
Backbone.Model = function(attributes, options) {};
 /** @type {?} */
Backbone.Model.prototype.attributes;
 /** @type {!Array<?>} */
Backbone.Model.prototype.changed;
 /** @type {string} */
Backbone.Model.prototype.cidPrefix;
 /** @type {string} */
Backbone.Model.prototype.cid;
 /** @type {!Backbone.Collection<?>} */
Backbone.Model.prototype.collection;
 /** @type {boolean} */
Backbone.Model.prototype._changing;
 /** @type {?} */
Backbone.Model.prototype._previousAttributes;
 /** @type {boolean} */
Backbone.Model.prototype._pending;
 /** @type {?} */
Backbone.Model.prototype.id;
 /** @type {string} */
Backbone.Model.prototype.idAttribute;
 /** @type {?} */
Backbone.Model.prototype.validationError;
 /** @type {?} */
Backbone.Model.prototype.urlRoot;

/**
 * Do not use, prefer TypeScript's extend functionality.
 * 
 * @param {?} properties
 * @param {?=} classProperties
 * @return {?}
 */
Backbone.Model.extend = function(properties, classProperties) {};

/**
 * Default attributes for the model. It can be an object hash or a method returning an object hash.
 * For assigning an object hash, do it like this: this.defaults = <any>{ attribute: value, ... };
 * That works only if you set it in the constructor or the initialize method.
 * 
 * @return {!Backbone.ObjectHash}
 */
Backbone.Model.prototype.defaults = function() {};

/**
 * @param {?=} attributes
 * @param {?=} options
 * @return {void}
 */
Backbone.Model.prototype.initialize = function(attributes, options) {};

/**
 * @param {!Backbone.ModelFetchOptions=} options
 * @return {!JQueryXHR}
 */
Backbone.Model.prototype.fetch = function(options) {};

/**
 * @param {string} attributeName
 * @return {?}
 */
Backbone.Model.prototype.get = function(attributeName) {};

/**
 * @param {string|?} attributeName_or_obj
 * @param {?|!Backbone.ModelSetOptions=} value_or_options
 * @param {!Backbone.ModelSetOptions=} options
 * @return {!Backbone.Model}
 */
Backbone.Model.prototype.set = function(attributeName_or_obj, value_or_options, options) {};

/**
 * Return an object containing all the attributes that have changed, or
 * false if there are no changed attributes. Useful for determining what
 * parts of a view need to be updated and/or what attributes need to be
 * persisted to the server. Unset attributes will be set to undefined.
 * You can also pass an attributes object to diff against the model,
 * determining if there *would be* a change.
 * @param {?=} attributes
 * @return {?}
 */
Backbone.Model.prototype.changedAttributes = function(attributes) {};

/**
 * @param {!Backbone.Silenceable=} options
 * @return {?}
 */
Backbone.Model.prototype.clear = function(options) {};

/**
 * @return {!Backbone.Model}
 */
Backbone.Model.prototype.clone = function() {};

/**
 * @param {!Backbone.ModelDestroyOptions=} options
 * @return {?}
 */
Backbone.Model.prototype.destroy = function(options) {};

/**
 * @param {string} attribute
 * @return {string}
 */
Backbone.Model.prototype.escape = function(attribute) {};

/**
 * @param {string} attribute
 * @return {boolean}
 */
Backbone.Model.prototype.has = function(attribute) {};

/**
 * @param {string=} attribute
 * @return {boolean}
 */
Backbone.Model.prototype.hasChanged = function(attribute) {};

/**
 * @return {boolean}
 */
Backbone.Model.prototype.isNew = function() {};

/**
 * @param {?=} options
 * @return {boolean}
 */
Backbone.Model.prototype.isValid = function(options) {};

/**
 * @param {string} attribute
 * @return {?}
 */
Backbone.Model.prototype.previous = function(attribute) {};

/**
 * @return {!Array<?>}
 */
Backbone.Model.prototype.previousAttributes = function() {};

/**
 * @param {?=} attributes
 * @param {!Backbone.ModelSaveOptions=} options
 * @return {?}
 */
Backbone.Model.prototype.save = function(attributes, options) {};

/**
 * @param {string} attribute
 * @param {!Backbone.Silenceable=} options
 * @return {!Backbone.Model}
 */
Backbone.Model.prototype.unset = function(attribute, options) {};

/**
 * @param {?} attributes
 * @param {?=} options
 * @return {?}
 */
Backbone.Model.prototype.validate = function(attributes, options) {};

/**
 * @param {?} attributes
 * @param {?} options
 * @return {boolean}
 */
Backbone.Model.prototype._validate = function(attributes, options) {};

/**
 * @return {!Array<string>}
 */
Backbone.Model.prototype.keys = function() {};

/**
 * @return {!Array<?>}
 */
Backbone.Model.prototype.values = function() {};

/**
 * @return {!Array<?>}
 */
Backbone.Model.prototype.pairs = function() {};

/**
 * @return {?}
 */
Backbone.Model.prototype.invert = function() {};

/**
 * @param {...!Array<string>|string|function(?, ?, ?): ?} keys_or_fn
 * @return {?}
 */
Backbone.Model.prototype.pick = function(keys_or_fn) {};

/**
 * @param {...!Array<string>|string|function(?, ?, ?): ?} keys_or_fn
 * @return {?}
 */
Backbone.Model.prototype.omit = function(keys_or_fn) {};

/**
 * @return {?}
 */
Backbone.Model.prototype.chain = function() {};

/**
 * @return {boolean}
 */
Backbone.Model.prototype.isEmpty = function() {};

/**
 * @param {?} attrs
 * @return {boolean}
 */
Backbone.Model.prototype.matches = function(attrs) {};

/**
 * @constructor
 * @struct
 * @param {(!Array<TModel>|!Array<!Object>)=} models
 * @param {?=} options
 */
Backbone.Collection = function(models, options) {};
 /** @type {function(new: (TModel), !Array<?>): ?} */
Backbone.Collection.prototype.model;
 /** @type {!Array<TModel>} */
Backbone.Collection.prototype.models;
 /** @type {number} */
Backbone.Collection.prototype.length;
 /** @type {(string|function(TModel): (string|number)|function(TModel, TModel): number)} */
Backbone.Collection.prototype.comparator;

/**
 * Do not use, prefer TypeScript's extend functionality.
 * 
 * @param {?} properties
 * @param {?=} classProperties
 * @return {?}
 */
Backbone.Collection.extend = function(properties, classProperties) {};

/**
 * @param {(!Array<TModel>|!Array<!Object>)=} models
 * @param {?=} options
 * @return {void}
 */
Backbone.Collection.prototype.initialize = function(models, options) {};

/**
 * @param {!Backbone.CollectionFetchOptions=} options
 * @return {!JQueryXHR}
 */
Backbone.Collection.prototype.fetch = function(options) {};

/**
 * @param {(!Object|TModel)|!Array<(!Object|TModel)>} model_or_models
 * @param {!Backbone.AddOptions=} options
 * @return {TModel|!Array<TModel>}
 */
Backbone.Collection.prototype.add = function(model_or_models, options) {};

/**
 * @param {number} index
 * @return {TModel}
 */
Backbone.Collection.prototype.at = function(index) {};

/**
 * Get a model from a collection, specified by an id, a cid, or by passing in a model.
 * 
 * @param {(string|number|!Backbone.Model)} id
 * @return {TModel}
 */
Backbone.Collection.prototype.get = function(id) {};

/**
 * @param {(string|number|!Backbone.Model)} key
 * @return {boolean}
 */
Backbone.Collection.prototype.has = function(key) {};

/**
 * @param {?} attributes
 * @param {!Backbone.ModelSaveOptions=} options
 * @return {TModel}
 */
Backbone.Collection.prototype.create = function(attributes, options) {};

/**
 * @param {string} attribute
 * @return {!Array<?>}
 */
Backbone.Collection.prototype.pluck = function(attribute) {};

/**
 * @param {TModel} model
 * @param {!Backbone.AddOptions=} options
 * @return {TModel}
 */
Backbone.Collection.prototype.push = function(model, options) {};

/**
 * @param {!Backbone.Silenceable=} options
 * @return {TModel}
 */
Backbone.Collection.prototype.pop = function(options) {};

/**
 * @param {(!Object|TModel)|!Array<(!Object|TModel)>} model_or_models
 * @param {!Backbone.Silenceable=} options
 * @return {TModel|!Array<TModel>}
 */
Backbone.Collection.prototype.remove = function(model_or_models, options) {};

/**
 * @param {!Array<TModel>=} models
 * @param {!Backbone.Silenceable=} options
 * @return {!Array<TModel>}
 */
Backbone.Collection.prototype.reset = function(models, options) {};

/**
 * @param {!Array<TModel>=} models
 * @param {!Backbone.Silenceable=} options
 * @return {!Array<TModel>}
 */
Backbone.Collection.prototype.set = function(models, options) {};

/**
 * @param {!Backbone.Silenceable=} options
 * @return {TModel}
 */
Backbone.Collection.prototype.shift = function(options) {};

/**
 * @param {!Backbone.Silenceable=} options
 * @return {!Backbone.Collection}
 */
Backbone.Collection.prototype.sort = function(options) {};

/**
 * @param {TModel} model
 * @param {!Backbone.AddOptions=} options
 * @return {TModel}
 */
Backbone.Collection.prototype.unshift = function(model, options) {};

/**
 * @param {?} properties
 * @return {!Array<TModel>}
 */
Backbone.Collection.prototype.where = function(properties) {};

/**
 * @param {?} properties
 * @return {TModel}
 */
Backbone.Collection.prototype.findWhere = function(properties) {};

/**
 * @param {?} attrs
 * @return {?}
 */
Backbone.Collection.prototype.modelId = function(attrs) {};

/**
 * @param {?=} attributes
 * @param {?=} options
 * @return {?}
 */
Backbone.Collection.prototype._prepareModel = function(attributes, options) {};

/**
 * @param {TModel} model
 * @return {void}
 */
Backbone.Collection.prototype._removeReference = function(model) {};

/**
 * @param {string} event
 * @param {TModel} model
 * @param {!Backbone.Collection} collection
 * @param {?} options
 * @return {void}
 */
Backbone.Collection.prototype._onModelEvent = function(event, model, collection, options) {};

/**
 * @param {?} obj
 * @return {boolean}
 */
Backbone.Collection.prototype._isModel = function(obj) {};

/**
 * Return a shallow copy of this collection's models, using the same options as native Array#slice.
 * @param {number} min
 * @param {number=} max
 * @return {!Array<TModel>}
 */
Backbone.Collection.prototype.slice = function(min, max) {};

/**
 * @param {!_.ListIterator<TModel, boolean>=} iterator
 * @param {?=} context
 * @return {boolean}
 */
Backbone.Collection.prototype.all = function(iterator, context) {};

/**
 * @param {!_.ListIterator<TModel, boolean>=} iterator
 * @param {?=} context
 * @return {boolean}
 */
Backbone.Collection.prototype.any = function(iterator, context) {};

/**
 * @return {?}
 */
Backbone.Collection.prototype.chain = function() {};

/**
 * @template TResult
 * @param {!_.ListIterator<TModel, TResult>} iterator
 * @param {?=} context
 * @return {!Array<TResult>}
 */
Backbone.Collection.prototype.collect = function(iterator, context) {};

/**
 * @param {TModel} value
 * @return {boolean}
 */
Backbone.Collection.prototype.contains = function(value) {};

/**
 * @param {!_.ListIterator<TModel, ?>|string=} iterator
 * @return {!_.Dictionary<number>}
 */
Backbone.Collection.prototype.countBy = function(iterator) {};

/**
 * @param {!_.ListIterator<TModel, boolean>} iterator
 * @param {?=} context
 * @return {TModel}
 */
Backbone.Collection.prototype.detect = function(iterator, context) {};

/**
 * @param {!Array<TModel>} others
 * @return {!Array<TModel>}
 */
Backbone.Collection.prototype.difference = function(others) {};

/**
 * @param {number=} n
 * @return {!Array<TModel>}
 */
Backbone.Collection.prototype.drop = function(n) {};

/**
 * @param {!_.ListIterator<TModel, void>} iterator
 * @param {?=} context
 * @return {!Array<TModel>}
 */
Backbone.Collection.prototype.each = function(iterator, context) {};

/**
 * @param {!_.ListIterator<TModel, boolean>} iterator
 * @param {?=} context
 * @return {boolean}
 */
Backbone.Collection.prototype.every = function(iterator, context) {};

/**
 * @param {!_.ListIterator<TModel, boolean>} iterator
 * @param {?=} context
 * @return {!Array<TModel>}
 */
Backbone.Collection.prototype.filter = function(iterator, context) {};

/**
 * @param {!_.ListIterator<TModel, boolean>} iterator
 * @param {?=} context
 * @return {TModel}
 */
Backbone.Collection.prototype.find = function(iterator, context) {};

/**
 * @param {!_.ListIterator<TModel, boolean>} predicate
 * @param {?=} context
 * @return {number}
 */
Backbone.Collection.prototype.findIndex = function(predicate, context) {};

/**
 * @param {!_.ListIterator<TModel, boolean>} predicate
 * @param {?=} context
 * @return {number}
 */
Backbone.Collection.prototype.findLastIndex = function(predicate, context) {};

/**
 * @param {number=} n
 * @return {TModel|!Array<TModel>}
 */
Backbone.Collection.prototype.first = function(n) {};

/**
 * @template TResult
 * @param {!_.MemoIterator<TModel, TResult>} iterator
 * @param {TResult=} memo
 * @param {?=} context
 * @return {TResult}
 */
Backbone.Collection.prototype.foldl = function(iterator, memo, context) {};

/**
 * @template TResult
 * @param {!_.MemoIterator<TModel, TResult>} iterator
 * @param {TResult=} memo
 * @param {?=} context
 * @return {TResult}
 */
Backbone.Collection.prototype.foldr = function(iterator, memo, context) {};

/**
 * @param {!_.ListIterator<TModel, void>} iterator
 * @param {?=} context
 * @return {!Array<TModel>}
 */
Backbone.Collection.prototype.forEach = function(iterator, context) {};

/**
 * @param {!_.ListIterator<TModel, ?>|string} iterator
 * @param {?=} context
 * @return {!_.Dictionary<!Array<TModel>>}
 */
Backbone.Collection.prototype.groupBy = function(iterator, context) {};

/**
 * @param {number=} n
 * @return {TModel|!Array<TModel>}
 */
Backbone.Collection.prototype.head = function(n) {};

/**
 * @param {TModel} value
 * @return {boolean}
 */
Backbone.Collection.prototype.include = function(value) {};

/**
 * @param {TModel} value
 * @return {boolean}
 */
Backbone.Collection.prototype.includes = function(value) {};

/**
 * @param {!_.ListIterator<TModel, ?>|string} iterator
 * @param {?=} context
 * @return {!_.Dictionary<TModel>}
 */
Backbone.Collection.prototype.indexBy = function(iterator, context) {};

/**
 * @param {TModel} value
 * @param {boolean=} isSorted
 * @return {number}
 */
Backbone.Collection.prototype.indexOf = function(value, isSorted) {};

/**
 * @param {number=} n
 * @return {TModel|!Array<TModel>}
 */
Backbone.Collection.prototype.initial = function(n) {};

/**
 * @template TResult
 * @param {!_.MemoIterator<TModel, TResult>} iterator
 * @param {TResult=} memo
 * @param {?=} context
 * @return {TResult}
 */
Backbone.Collection.prototype.inject = function(iterator, memo, context) {};

/**
 * @param {string} methodName
 * @param {...?} args
 * @return {?}
 */
Backbone.Collection.prototype.invoke = function(methodName, args) {};

/**
 * @return {boolean}
 */
Backbone.Collection.prototype.isEmpty = function() {};

/**
 * @param {number=} n
 * @return {TModel|!Array<TModel>}
 */
Backbone.Collection.prototype.last = function(n) {};

/**
 * @param {TModel} value
 * @param {number=} from
 * @return {number}
 */
Backbone.Collection.prototype.lastIndexOf = function(value, from) {};

/**
 * @template TResult
 * @param {!_.ListIterator<TModel, TResult>} iterator
 * @param {?=} context
 * @return {!Array<TResult>}
 */
Backbone.Collection.prototype.map = function(iterator, context) {};

/**
 * @param {!_.ListIterator<TModel, ?>=} iterator
 * @param {?=} context
 * @return {TModel}
 */
Backbone.Collection.prototype.max = function(iterator, context) {};

/**
 * @param {!_.ListIterator<TModel, ?>=} iterator
 * @param {?=} context
 * @return {TModel}
 */
Backbone.Collection.prototype.min = function(iterator, context) {};

/**
 * @param {!_.ListIterator<TModel, boolean>} iterator
 * @return {!Array<!Array<TModel>>}
 */
Backbone.Collection.prototype.partition = function(iterator) {};

/**
 * @template TResult
 * @param {!_.MemoIterator<TModel, TResult>} iterator
 * @param {TResult=} memo
 * @param {?=} context
 * @return {TResult}
 */
Backbone.Collection.prototype.reduce = function(iterator, memo, context) {};

/**
 * @template TResult
 * @param {!_.MemoIterator<TModel, TResult>} iterator
 * @param {TResult=} memo
 * @param {?=} context
 * @return {TResult}
 */
Backbone.Collection.prototype.reduceRight = function(iterator, memo, context) {};

/**
 * @param {!_.ListIterator<TModel, boolean>} iterator
 * @param {?=} context
 * @return {!Array<TModel>}
 */
Backbone.Collection.prototype.reject = function(iterator, context) {};

/**
 * @param {number=} n
 * @return {!Array<TModel>}
 */
Backbone.Collection.prototype.rest = function(n) {};

/**
 * @param {number=} n
 * @return {TModel|!Array<TModel>}
 */
Backbone.Collection.prototype.sample = function(n) {};

/**
 * @param {!_.ListIterator<TModel, boolean>} iterator
 * @param {?=} context
 * @return {!Array<TModel>}
 */
Backbone.Collection.prototype.select = function(iterator, context) {};

/**
 * @return {!Array<TModel>}
 */
Backbone.Collection.prototype.shuffle = function() {};

/**
 * @return {number}
 */
Backbone.Collection.prototype.size = function() {};

/**
 * @param {!_.ListIterator<TModel, boolean>=} iterator
 * @param {?=} context
 * @return {boolean}
 */
Backbone.Collection.prototype.some = function(iterator, context) {};

/**
 * @template TSort
 * @param {!_.ListIterator<TModel, TSort>|string=} iterator
 * @param {?=} context
 * @return {!Array<TModel>}
 */
Backbone.Collection.prototype.sortBy = function(iterator, context) {};

/**
 * @param {number=} n
 * @return {!Array<TModel>}
 */
Backbone.Collection.prototype.tail = function(n) {};

/**
 * @param {number=} n
 * @return {TModel|!Array<TModel>}
 */
Backbone.Collection.prototype.take = function(n) {};

/**
 * @return {!Array<TModel>}
 */
Backbone.Collection.prototype.toArray = function() {};

/**
 * @param {...TModel} values
 * @return {!Array<TModel>}
 */
Backbone.Collection.prototype.without = function(values) {};

/**
 * @constructor
 * @struct
 * @param {!Backbone.RouterOptions=} options
 */
Backbone.Router = function(options) {};
 /** @type {?} */
Backbone.Router.prototype.routes;

/**
 * Do not use, prefer TypeScript's extend functionality.
 * 
 * @param {?} properties
 * @param {?=} classProperties
 * @return {?}
 */
Backbone.Router.extend = function(properties, classProperties) {};

/**
 * @param {!Backbone.RouterOptions=} options
 * @return {void}
 */
Backbone.Router.prototype.initialize = function(options) {};

/**
 * @param {(string|!RegExp)} route
 * @param {string} name
 * @param {!Function=} callback
 * @return {!Backbone.Router}
 */
Backbone.Router.prototype.route = function(route, name, callback) {};

/**
 * @param {string} fragment
 * @param {!Backbone.NavigateOptions|boolean=} options_or_trigger
 * @return {!Backbone.Router}
 */
Backbone.Router.prototype.navigate = function(fragment, options_or_trigger) {};

/**
 * @param {!Function} callback
 * @param {!Array<?>} args
 * @param {string} name
 * @return {void}
 */
Backbone.Router.prototype.execute = function(callback, args, name) {};

/**
 * @return {void}
 */
Backbone.Router.prototype._bindRoutes = function() {};

/**
 * @param {string} route
 * @return {!RegExp}
 */
Backbone.Router.prototype._routeToRegExp = function(route) {};

/**
 * @param {!RegExp} route
 * @param {string} fragment
 * @return {!Array<string>}
 */
Backbone.Router.prototype._extractParameters = function(route, fragment) {};
 /** @type {!Backbone.History} */
Backbone.history;
/**
 * @extends {Backbone.Events}
 * @constructor
 * @struct
 */
Backbone.History = function() {};
 /** @type {!Array<?>} */
Backbone.History.prototype.handlers;
 /** @type {number} */
Backbone.History.prototype.interval;
 /** @type {boolean} */
Backbone.History.started;
 /** @type {?} */
Backbone.History.prototype.options;

/**
 * @param {!Backbone.HistoryOptions=} options
 * @return {boolean}
 */
Backbone.History.prototype.start = function(options) {};

/**
 * @param {!Window=} window
 * @return {string}
 */
Backbone.History.prototype.getHash = function(window) {};

/**
 * @param {string=} fragment
 * @return {string}
 */
Backbone.History.prototype.getFragment = function(fragment) {};

/**
 * @param {string} fragment
 * @return {string}
 */
Backbone.History.prototype.decodeFragment = function(fragment) {};

/**
 * @return {string}
 */
Backbone.History.prototype.getSearch = function() {};

/**
 * @return {void}
 */
Backbone.History.prototype.stop = function() {};

/**
 * @param {string} route
 * @param {!Function} callback
 * @return {number}
 */
Backbone.History.prototype.route = function(route, callback) {};

/**
 * @param {?=} e
 * @return {void}
 */
Backbone.History.prototype.checkUrl = function(e) {};

/**
 * @return {string}
 */
Backbone.History.prototype.getPath = function() {};

/**
 * @return {boolean}
 */
Backbone.History.prototype.matchRoot = function() {};

/**
 * @return {boolean}
 */
Backbone.History.prototype.atRoot = function() {};

/**
 * @param {string=} fragmentOverride
 * @return {boolean}
 */
Backbone.History.prototype.loadUrl = function(fragmentOverride) {};

/**
 * @param {string} fragment
 * @param {?=} options
 * @return {boolean}
 */
Backbone.History.prototype.navigate = function(fragment, options) {};

/**
 * @param {!Location} location
 * @param {string} fragment
 * @param {boolean} replace
 * @return {void}
 */
Backbone.History.prototype._updateHash = function(location, fragment, replace) {};
/**
 * @record
 * @struct
 */
Backbone.ViewOptions = function() {};
 /** @type {TModel} */
Backbone.ViewOptions.prototype.model;
 /** @type {!Backbone.Collection<?>} */
Backbone.ViewOptions.prototype.collection;
 /** @type {?} */
Backbone.ViewOptions.prototype.el;
 /** @type {!Backbone.EventsHash} */
Backbone.ViewOptions.prototype.events;
 /** @type {string} */
Backbone.ViewOptions.prototype.id;
 /** @type {string} */
Backbone.ViewOptions.prototype.className;
 /** @type {string} */
Backbone.ViewOptions.prototype.tagName;
 /** @type {!Object<string,?>} */
Backbone.ViewOptions.prototype.attributes;

/**
 * @constructor
 * @struct
 * @param {!Backbone.ViewOptions<TModel>=} options
 */
Backbone.View = function(options) {};
 /** @type {TModel} */
Backbone.View.prototype.model;
 /** @type {!Backbone.Collection<TModel>} */
Backbone.View.prototype.collection;
 /** @type {string} */
Backbone.View.prototype.id;
 /** @type {string} */
Backbone.View.prototype.cid;
 /** @type {string} */
Backbone.View.prototype.className;
 /** @type {string} */
Backbone.View.prototype.tagName;
 /** @type {?} */
Backbone.View.prototype.el;
 /** @type {?<!HTMLElement>} */
Backbone.View.prototype.$el;
 /** @type {?} */
Backbone.View.prototype.attributes;

/**
 * Do not use, prefer TypeScript's extend functionality.
 * 
 * @param {?} properties
 * @param {?=} classProperties
 * @return {?}
 */
Backbone.View.extend = function(properties, classProperties) {};

/**
 * @param {!Backbone.ViewOptions<TModel>=} options
 * @return {void}
 */
Backbone.View.prototype.initialize = function(options) {};

/**
 * Events hash or a method returning the events hash that maps events/selectors to methods on your View.
 * For assigning events as object hash, do it like this: this.events = <any>{ "event:selector": callback, ... };
 * That works only if you set it in the constructor or the initialize method.
 * 
 * @return {!Backbone.EventsHash}
 */
Backbone.View.prototype.events = function() {};

/**
 * @param {string|?} selector
 * @return {?<!HTMLElement>}
 */
Backbone.View.prototype.$ = function(selector) {};

/**
 * @param {(!HTMLElement|?<!HTMLElement>)|?} element
 * @param {boolean=} delegate
 * @return {!Backbone.View}
 */
Backbone.View.prototype.setElement = function(element, delegate) {};

/**
 * @return {!Backbone.View}
 */
Backbone.View.prototype.render = function() {};

/**
 * @return {!Backbone.View}
 */
Backbone.View.prototype.remove = function() {};

/**
 * @param {!Backbone.EventsHash=} events
 * @return {?}
 */
Backbone.View.prototype.delegateEvents = function(events) {};

/**
 * @param {string} eventName
 * @param {string} selector
 * @param {!Function} listener
 * @return {!Backbone.View}
 */
Backbone.View.prototype.delegate = function(eventName, selector, listener) {};

/**
 * @return {?}
 */
Backbone.View.prototype.undelegateEvents = function() {};

/**
 * @param {string} eventName
 * @param {string=} selector
 * @param {!Function=} listener
 * @return {!Backbone.View}
 */
Backbone.View.prototype.undelegate = function(eventName, selector, listener) {};

/**
 * @return {void}
 */
Backbone.View.prototype._ensureElement = function() {};

/**
 * @param {string} method
 * @param {!Backbone.Model} model
 * @param {!JQueryAjaxSettings=} options
 * @return {?}
 */
Backbone.sync = function(method, model, options) {};

/**
 * @param {!JQueryAjaxSettings=} options
 * @return {!JQueryXHR}
 */
Backbone.ajax = function(options) {};
 /** @type {boolean} */
Backbone.emulateHTTP;
 /** @type {boolean} */
Backbone.emulateJSON;

/**
 * @return {?}
 */
Backbone.noConflict = function() {};
 /** @type {!JQueryStatic<!HTMLElement>} */
Backbone.$;
