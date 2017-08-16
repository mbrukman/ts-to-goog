/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/lowdb/index.d.ts:
/** @const */
var Lowdb = {};
/**
 * @record
 * @struct
 */
Lowdb.PromiseLike = function() {};

/**
 * Attaches callbacks for the resolution and/or rejection of the Promise.
 * @template TResult
 * @param {function(T): (TResult|!Lowdb.PromiseLike<TResult>)=} onfulfilled The callback to execute when the Promise is resolved.
 * @param {function(?): (TResult|!Lowdb.PromiseLike<TResult>)|function(?): void=} onrejected The callback to execute when the Promise is rejected.
 * @return {!Lowdb.PromiseLike<TResult>} A Promise for the completion of which ever callback is executed.
 */
Lowdb.PromiseLike.prototype.then = function(onfulfilled, onrejected) {};
/**
 * @record
 * @struct
 */
Lowdb.StringRepresentable = function() {};

/**
 * @return {string}
 */
Lowdb.StringRepresentable.prototype.toString = function() {};
/**
 * @record
 * @struct
 */
Lowdb.List = function() {};

/* TODO: IndexSignature: Lowdb */
 /** @type {number} */
Lowdb.List.prototype.length;
/**
 * @record
 * @struct
 */
Lowdb.Dictionary = function() {};

/* TODO: IndexSignature: Lowdb */
/**
 * @record
 * @struct
 */
Lowdb.DictionaryIterator = function() {};

/* TODO: CallSignature: Lowdb */
/**
 * @record
 * @struct
 */
Lowdb.ListIterator = function() {};

/* TODO: CallSignature: Lowdb */
/**
 * @record
 * @struct
 */
Lowdb.StringIterator = function() {};

/* TODO: CallSignature: Lowdb */
/**
 * @record
 * @struct
 */
Lowdb.MixinOptions = function() {};
 /** @type {boolean} */
Lowdb.MixinOptions.prototype.chain;
/**
 * @constructor
 * @struct
 */
Lowdb.LoDashWrapper = function() {};

/**
 * @see _.has
 * @param {(!Lowdb.StringRepresentable|!Array<!Lowdb.StringRepresentable>)} path
 * @return {LowEntryClass}
 */
Lowdb.LoDashWrapper.prototype.has = function(path) {};

/**
 * @see _.hasIn
 * @param {(!Lowdb.StringRepresentable|!Array<!Lowdb.StringRepresentable>)} path
 * @return {LowEntryClass}
 */
Lowdb.LoDashWrapper.prototype.hasIn = function(path) {};

/**
 * @see _.assign
 * @see _.assign
 * @see _.assign
 * @see _.assign
 * @see _.assign
 * @see _.assign
 * @template TSource, TResult, TSource1, TSource2, TSource3, TSource4
 * @param {...TSource|TSource1|?} source_or_source1_or_otherArgs
 * @return {LowEntryClass}
 */
Lowdb.LoDashWrapper.prototype.assign = function(source_or_source1_or_otherArgs) {};

/**
 * @see _.cloneDeep
 * @see _.cloneDeep
 * @template T
 * @return {LowEntryClass}
 */
Lowdb.LoDashWrapper.prototype.cloneDeep = function() {};

/**
 * @see _.cloneDeep
 * @see _.cloneDeep
 * @template T
 * @param {function(?): ?} customizer
 * @return {!Array<LowEntryClass>|LowEntryClass}
 */
Lowdb.LoDashWrapper.prototype.cloneDeepWith = function(customizer) {};

/**
 * @see _.defaults
 * @see _.defaults
 * @see _.defaults
 * @see _.defaults
 * @see _.defaults
 * @see _.defaults
 * @template S1, TResult, S2, S3, S4
 * @param {...S1|!Object} source1_or_sources
 * @return {LowEntryClass}
 */
Lowdb.LoDashWrapper.prototype.defaults = function(source1_or_sources) {};

/**
 * @see _.get
 * @see _.get
 * @template TResult
 * @param {?|(string|number|boolean|!Array<(string|number|boolean)>)} object_or_path
 * @param {(string|number|boolean|!Array<(string|number|boolean)>)|TResult=} path_or_defaultValue
 * @param {TResult=} defaultValue
 * @return {LowEntryClass}
 */
Lowdb.LoDashWrapper.prototype.get = function(object_or_path, path_or_defaultValue, defaultValue) {};

/**
 * @see _.mixin
 * @see _.mixin
 * @template TResult
 * @param {!Lowdb.Dictionary<function(): void>|!Lowdb.MixinOptions=} source_or_options
 * @param {!Lowdb.MixinOptions=} options
 * @return {LowEntryClass}
 */
Lowdb.LoDashWrapper.prototype.mixin = function(source_or_options, options) {};

/**
 * @see _.set
 * @see _.set
 * @template TResult, V
 * @param {(!Lowdb.StringRepresentable|!Array<!Lowdb.StringRepresentable>)} path
 * @param {?|V} value
 * @return {LowEntryClass}
 */
Lowdb.LoDashWrapper.prototype.set = function(path, value) {};

/**
 * @see _.find
 * @see _.find
 * @see _.find
 * @template T, TObject
 * @param {!Lowdb.ListIterator<T, boolean>|string|TObject=} predicate
 * @param {?=} thisArg
 * @return {LowEntryClass}
 */
Lowdb.LoDashWrapper.prototype.find = function(predicate, thisArg) {};

/**
 * @see _.find
 * @see _.filter
 * @see _.filter
 * @see _.filter
 * @see _.filter
 * @see _.filter
 * @template TObject, T, W
 * @param {TObject|!Lowdb.ListIterator<T, boolean>|string|(!Lowdb.ListIterator<T, boolean>|!Lowdb.DictionaryIterator<T, boolean>)|!Lowdb.StringIterator<boolean>|W=} predicate
 * @param {?=} thisArg
 * @return {LowEntryClass}
 */
Lowdb.LoDashWrapper.prototype.filter = function(predicate, thisArg) {};

/**
 * @see _.map
 * @see _.map
 * @see _.map
 * @see _.map
 * @template T, TResult, TObject, TValue
 * @param {!Lowdb.ListIterator<T, TResult>|string|TObject|(!Lowdb.ListIterator<TValue, TResult>|!Lowdb.DictionaryIterator<TValue, TResult>)=} iteratee
 * @param {?=} thisArg
 * @return {LowEntryClass}
 */
Lowdb.LoDashWrapper.prototype.map = function(iteratee, thisArg) {};

/**
 * @see _.range
 * @param {number=} end
 * @param {number=} step
 * @return {LowEntryClass}
 */
Lowdb.LoDashWrapper.prototype.range = function(end, step) {};

/**
 * @see _.rangeRight
 * @param {number=} end
 * @param {number=} step
 * @return {LowEntryClass}
 */
Lowdb.LoDashWrapper.prototype.rangeRight = function(end, step) {};

/**
 * @see _.remove
 * @see _.remove
 * @see _.remove
 * @template T, W
 * @param {!Lowdb.ListIterator<T, boolean>|string|W=} predicate
 * @param {?=} thisArg
 * @return {LowEntryClass}
 */
Lowdb.LoDashWrapper.prototype.remove = function(predicate, thisArg) {};

/**
 * @see _.sortBy
 * @see _.sortBy
 * @see _.sortBy
 * @see _.sortBy
 * @see _.sortBy
 * @see _.sortBy
 * @template T, TSort, W
 * @param {...!Lowdb.ListIterator<T, TSort>|string|W|?|!Array<?>=} iteratee_or_whereValue_or_iteratees
 * @return {LowEntryClass}
 */
Lowdb.LoDashWrapper.prototype.sortBy = function(iteratee_or_whereValue_or_iteratees) {};

/**
 * @see _.slice
 * @param {number=} start
 * @param {number=} end
 * @return {LowEntryClass}
 */
Lowdb.LoDashWrapper.prototype.slice = function(start, end) {};

/**
 * @see _.size
 * @return {LowEntryClass}
 */
Lowdb.LoDashWrapper.prototype.size = function() {};

/**
 * @see _.take
 * @param {number=} n
 * @return {LowEntryClass}
 */
Lowdb.LoDashWrapper.prototype.take = function(n) {};

/**
 * @see _.times
 * @see _.times
 * @template TResult
 * @param {function(number): TResult=} iteratee
 * @return {LowEntryClass}
 */
Lowdb.LoDashWrapper.prototype.times = function(iteratee) {};

/**
 * @see _.uniqueId
 * @return {LowEntryClass}
 */
Lowdb.LoDashWrapper.prototype.uniqueId = function() {};

/**
 * @template T
 * @return {T}
 */
Lowdb.LoDashWrapper.prototype.value = function() {};

/**
 * @template T
 * @return {T}
 */
Lowdb.LoDashWrapper.prototype.pop = function() {};

/**
 * @template T
 * @param {...T} items
 * @return {LowEntryClass}
 */
Lowdb.LoDashWrapper.prototype.push = function(items) {};

/**
 * @template T
 * @return {T}
 */
Lowdb.LoDashWrapper.prototype.shift = function() {};

/**
 * @template T
 * @param {function(T, T): number=} compareFn
 * @return {LowEntryClass}
 */
Lowdb.LoDashWrapper.prototype.sort = function(compareFn) {};

/**
 * @template T
 * @param {number} start
 * @param {number=} deleteCount
 * @param {...?} items
 * @return {LowEntryClass}
 */
Lowdb.LoDashWrapper.prototype.splice = function(start, deleteCount, items) {};

/**
 * @template T
 * @param {...T} items
 * @return {LowEntryClass}
 */
Lowdb.LoDashWrapper.prototype.unshift = function(items) {};
/**
 * @record
 * @struct
 */
Lowdb.Storage = function() {};

/**
 * Reads the database.
 * 
 * Reads the database.
 * 
 * @param {string} source The source location.
 * @param {?} deserialize The deserialize function to apply.
 * @return {!Lowdb.PromiseLike<?>|!Object} Returns a promise with the deserialized db object. / Returns the deserialized db object.
 */
Lowdb.Storage.prototype.read = function(source, deserialize) {};

/**
 * Writes to the database.
 * 
 * Writes to the database.
 * 
 * @param {string} destination The destination location.
 * @param {?} obj The object to write.
 * @param {?} serialize The serialize function to apply.
 * @return {void|!Lowdb.PromiseLike<void>}
 */
Lowdb.Storage.prototype.write = function(destination, obj, serialize) {};
/**
 * @record
 * @struct
 */
Lowdb.Format = function() {};

/**
 * Writes to the database.
 * 
 * @param {?} obj The object to serialize.
 * @return {string} Returns the serialized object string.
 */
Lowdb.Format.prototype.serialize = function(obj) {};

/**
 * Writes to the database.
 * 
 * @param {string} data The object to deserialize.
 * @return {?} Returns the deserialized object.
 */
Lowdb.Format.prototype.deserialize = function(data) {};
/**
 * @record
 * @struct
 */
Lowdb.Options = function() {};
 /** @type {!Lowdb.Storage} */
Lowdb.Options.prototype.storage;
 /** @type {!Lowdb.Format} */
Lowdb.Options.prototype.format;
 /** @type {boolean} */
Lowdb.Options.prototype.writeOnChange;

/**
 * @constructor
 * @struct
 * @param {string} filePath
 * @param {!Lowdb.Options=} options
 */
Lowdb.Lowdb = function(filePath, options) {};

/**
 * Access current database state.
 * Returns Returns the database state.
 * @return {?}
 */
Lowdb.Lowdb.prototype.getState = function() {};

/**
 * Drop or reset database state.
 * @param {?} newState New state of the database
 * @return {void}
 */
Lowdb.Lowdb.prototype.setState = function(newState) {};

/**
 * Persist database.
 * Persist database.
 * @param {string=} source The source location.
 * @return {void|!Lowdb.PromiseLike<?>}
 */
Lowdb.Lowdb.prototype.write = function(source) {};

/**
 * Read database.
 * Read database.
 * @param {string=} source The source location.
 * @return {?|!Lowdb.PromiseLike<?>}
 */
Lowdb.Lowdb.prototype.read = function(source) {};
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "lowdb"
/** @const */
tsickle_declare_module.lowdb = {};

/* TODO: ExportAssignment in tsickle_declare_module.lowdb */
