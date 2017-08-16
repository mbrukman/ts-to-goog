/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/js-data v1/index.d.ts:
/** @const */
var JSData = {};
/**
 * @record
 * @struct
 */
JSData.JSDataPromise = function() {};

/**
 * @template U
 * @param {function(R): (U|!JSData.JSDataPromise<U>)=} onFulfilled
 * @param {function(?): (U|!JSData.JSDataPromise<U>)=} onRejected
 * @return {!JSData.JSDataPromise<U>}
 */
JSData.JSDataPromise.prototype.then = function(onFulfilled, onRejected) {};

/**
 * @template U
 * @param {function(?): (U|!JSData.JSDataPromise<U>)=} onRejected
 * @return {!JSData.JSDataPromise<U>}
 */
JSData.JSDataPromise.prototype.catch = function(onRejected) {};

/**
 * @template U
 * @param {function(): U=} finallyCb
 * @return {!JSData.JSDataPromise<U>}
 */
JSData.JSDataPromise.prototype.finally = function(finallyCb) {};
/**
 * @record
 * @struct
 */
JSData.DS = function() {};

/* TODO: ConstructSignature: JSData */
 /** @type {!JSData.DSErrors} */
JSData.DS.prototype.errors;
 /** @type {?} */
JSData.DS.prototype.definitions;
 /** @type {?} */
JSData.DS.prototype.adapters;
 /** @type {!JSData.DSConfiguration} */
JSData.DS.prototype.defaults;

/**
 * @template T
 * @param {string} resourceName
 * @param {!Object} attrs
 * @param {!JSData.DSConfiguration=} options
 * @return {!JSData.JSDataPromise<?>}
 */
JSData.DS.prototype.create = function(resourceName, attrs, options) {};

/**
 * @param {string} resourceName
 * @param {(string|number)} id
 * @param {!JSData.DSAdapterOperationConfiguration=} options
 * @return {!JSData.JSDataPromise<?>}
 */
JSData.DS.prototype.destroy = function(resourceName, id, options) {};

/**
 * @param {string} resourceName
 * @param {(!Object|!JSData.DSFilterParams)=} params
 * @param {!JSData.DSAdapterOperationConfiguration=} options
 * @return {!JSData.JSDataPromise<?>}
 */
JSData.DS.prototype.destroyAll = function(resourceName, params, options) {};

/**
 * @template T
 * @param {string} resourceName
 * @param {(string|number)} id
 * @param {!JSData.DSAdapterOperationConfiguration=} options
 * @return {!JSData.JSDataPromise<?>}
 */
JSData.DS.prototype.find = function(resourceName, id, options) {};

/**
 * @template T
 * @param {string} resourceName
 * @param {(!Object|!JSData.DSFilterParams)=} params
 * @param {!JSData.DSAdapterOperationConfiguration=} options
 * @return {!JSData.JSDataPromise<!Array<?>>}
 */
JSData.DS.prototype.findAll = function(resourceName, params, options) {};

/**
 * @template T
 * @param {string} resourceName
 * @param {(string|number|!Object)} idOrInstance
 * @param {(string|!Array<string>)} relations
 * @param {!JSData.DSAdapterOperationConfiguration=} options
 * @return {!JSData.JSDataPromise<?>}
 */
JSData.DS.prototype.loadRelations = function(resourceName, idOrInstance, relations, options) {};

/**
 * @template T
 * @param {string} resourceName
 * @param {(string|number)} id
 * @param {!Object} attrs
 * @param {!JSData.DSSaveConfiguration=} options
 * @return {!JSData.JSDataPromise<?>}
 */
JSData.DS.prototype.update = function(resourceName, id, attrs, options) {};

/**
 * @template T
 * @param {string} resourceName
 * @param {!Object} attrs
 * @param {(!Object|!JSData.DSFilterParams)=} params
 * @param {!JSData.DSAdapterOperationConfiguration=} options
 * @return {!JSData.JSDataPromise<!Array<?>>}
 */
JSData.DS.prototype.updateAll = function(resourceName, attrs, params, options) {};

/**
 * @param {string} resourceName
 * @param {!JSData.DSConfiguration=} options
 * @return {!JSData.JSDataPromise<?>}
 */
JSData.DS.prototype.reap = function(resourceName, options) {};

/**
 * @template T
 * @param {string} resourceName
 * @param {(string|number)} id
 * @param {!JSData.DSAdapterOperationConfiguration=} options
 * @return {!JSData.JSDataPromise<?>}
 */
JSData.DS.prototype.refresh = function(resourceName, id, options) {};

/**
 * @template T
 * @param {string} resourceName
 * @param {(string|number)} id
 * @param {!JSData.DSSaveConfiguration=} options
 * @return {!JSData.JSDataPromise<?>}
 */
JSData.DS.prototype.save = function(resourceName, id, options) {};

/**
 * @param {string} resourceName
 * @param {(string|number)=} id
 * @return {!Array<!Object>}
 */
JSData.DS.prototype.changeHistory = function(resourceName, id) {};

/**
 * @param {string} resourceName
 * @param {(string|number)} id
 * @return {!Object}
 */
JSData.DS.prototype.changes = function(resourceName, id) {};

/**
 * @param {string} resourceName
 * @param {(string|number|!Object)} idOrInstance
 * @return {void}
 */
JSData.DS.prototype.compute = function(resourceName, idOrInstance) {};

/**
 * @template T
 * @param {string} resourceName
 * @param {T=} attrs
 * @param {!JSData.DSAdapterOperationConfiguration=} options
 * @return {?}
 */
JSData.DS.prototype.createInstance = function(resourceName, attrs, options) {};

/**
 * @return {void}
 */
JSData.DS.prototype.digest = function() {};

/**
 * @template T
 * @param {string} resourceName
 * @param {(string|number)} id
 * @param {!JSData.DSConfiguration=} options
 * @return {?}
 */
JSData.DS.prototype.eject = function(resourceName, id, options) {};

/**
 * @template T
 * @param {string} resourceName
 * @param {(!Object|!JSData.DSFilterParams)} params
 * @param {!JSData.DSConfiguration=} options
 * @return {!Array<?>}
 */
JSData.DS.prototype.ejectAll = function(resourceName, params, options) {};

/**
 * @template T
 * @param {string} resourceName
 * @param {(!Object|!JSData.DSFilterParams)} params
 * @param {!JSData.DSConfiguration=} options
 * @return {!Array<?>}
 */
JSData.DS.prototype.filter = function(resourceName, params, options) {};

/**
 * @template T
 * @param {string} resourceName
 * @param {(string|number)} id
 * @param {!JSData.DSConfiguration=} options
 * @return {?}
 */
JSData.DS.prototype.get = function(resourceName, id, options) {};

/**
 * @template T
 * @param {string} resourceName
 * @param {!Array<(string|number)>=} ids
 * @return {!Array<?>}
 */
JSData.DS.prototype.getAll = function(resourceName, ids) {};

/**
 * @param {string} resourceName
 * @param {(string|number)} id
 * @return {boolean}
 */
JSData.DS.prototype.hasChanges = function(resourceName, id) {};

/**
 * @template T
 * @param {string} resourceName
 * @param {T|!Array<T>} item_or_items
 * @param {!JSData.DSConfiguration=} options
 * @return {?|!Array<?>}
 */
JSData.DS.prototype.inject = function(resourceName, item_or_items, options) {};

/**
 * @param {string} resourceName
 * @param {!Object} object
 * @return {boolean}
 */
JSData.DS.prototype.is = function(resourceName, object) {};

/**
 * @param {string} resourceName
 * @param {(string|number)=} id
 * @return {number}
 */
JSData.DS.prototype.lastModified = function(resourceName, id) {};

/**
 * @param {string} resourceName
 * @param {(string|number)=} id
 * @return {number}
 */
JSData.DS.prototype.lastSaved = function(resourceName, id) {};

/**
 * @template T
 * @param {string} resourceName
 * @param {(string|number)} id
 * @param {!Array<string>=} relations
 * @return {?}
 */
JSData.DS.prototype.link = function(resourceName, id, relations) {};

/**
 * @template T
 * @param {string} resourceName
 * @param {(!Object|!JSData.DSFilterParams)} params
 * @param {!Array<string>=} relations
 * @return {?}
 */
JSData.DS.prototype.linkAll = function(resourceName, params, relations) {};

/**
 * @template T
 * @param {string} resourceName
 * @param {(string|number)} id
 * @param {!Array<string>=} relations
 * @return {?}
 */
JSData.DS.prototype.linkInverse = function(resourceName, id, relations) {};

/**
 * @template T
 * @param {string} resourceName
 * @param {(string|number)} id
 * @return {?}
 */
JSData.DS.prototype.previous = function(resourceName, id) {};

/**
 * @template T
 * @param {string} resourceName
 * @param {(string|number)} id
 * @return {?}
 */
JSData.DS.prototype.revert = function(resourceName, id) {};

/**
 * @template T
 * @param {string} resourceName
 * @param {(string|number)} id
 * @param {!Array<string>=} relations
 * @return {?}
 */
JSData.DS.prototype.unlinkInverse = function(resourceName, id, relations) {};

/**
 * @template T, TActions
 * @param {(string|!JSData.DSResourceDefinitionConfiguration)} resourceNameOrDefinition
 * @return {!JSData.DSResourceDefinition<T>|?}
 */
JSData.DS.prototype.defineResource = function(resourceNameOrDefinition) {};

/**
 * @param {string} adapterId
 * @param {!JSData.IDSAdapter} adapter
 * @param {{default: boolean}=} options
 * @return {void}
 */
JSData.DS.prototype.registerAdapter = function(adapterId, adapter, options) {};
/**
 * @extends {JSData.IDSResourceLifecycleEventHandlers}
 * @record
 * @struct
 */
JSData.DSConfiguration = function() {};
 /** @type {!Object} */
JSData.DSConfiguration.prototype.actions;
 /** @type {boolean} */
JSData.DSConfiguration.prototype.allowSimpleWhere;
 /** @type {string} */
JSData.DSConfiguration.prototype.basePath;
 /** @type {boolean} */
JSData.DSConfiguration.prototype.bypassCache;
 /** @type {boolean} */
JSData.DSConfiguration.prototype.cacheResponse;
 /** @type {string} */
JSData.DSConfiguration.prototype.defaultAdapter;
 /** @type {function(!Array<?>, string, (!Object|!JSData.DSFilterParams), !JSData.DSConfiguration): !Array<?>} */
JSData.DSConfiguration.prototype.defaultFilter;
 /** @type {boolean} */
JSData.DSConfiguration.prototype.eagerEject;
 /** @type {string} */
JSData.DSConfiguration.prototype.endpoint;
 /** @type {(boolean|function(?, !Array<?>): void)} */
JSData.DSConfiguration.prototype.error;
 /** @type {!Array<string>} */
JSData.DSConfiguration.prototype.fallbackAdapters;
 /** @type {!Array<string>} */
JSData.DSConfiguration.prototype.findAllFallbackAdapters;
 /** @type {string} */
JSData.DSConfiguration.prototype.findAllStrategy;
 /** @type {boolean} */
JSData.DSConfiguration.prototype.findBelongsTo;
 /** @type {!Array<string>} */
JSData.DSConfiguration.prototype.findFallbackAdapters;
 /** @type {boolean} */
JSData.DSConfiguration.prototype.findHasOne;
 /** @type {boolean} */
JSData.DSConfiguration.prototype.findHasMany;
 /** @type {boolean} */
JSData.DSConfiguration.prototype.findInverseLinks;
 /** @type {string} */
JSData.DSConfiguration.prototype.findStrategy;
 /** @type {string} */
JSData.DSConfiguration.prototype.idAttribute;
 /** @type {!Array<(string|!RegExp)>} */
JSData.DSConfiguration.prototype.ignoredChanges;
 /** @type {boolean} */
JSData.DSConfiguration.prototype.keepChangeHistory;
 /** @type {boolean} */
JSData.DSConfiguration.prototype.loadFromServer;
 /** @type {(boolean|function(?, !Array<?>): void)} */
JSData.DSConfiguration.prototype.log;
 /** @type {number} */
JSData.DSConfiguration.prototype.maxAge;
 /** @type {boolean} */
JSData.DSConfiguration.prototype.notify;
 /** @type {string} */
JSData.DSConfiguration.prototype.reapAction;
 /** @type {number} */
JSData.DSConfiguration.prototype.reapInterval;
 /** @type {boolean} */
JSData.DSConfiguration.prototype.resetHistoryOnInject;
 /** @type {string} */
JSData.DSConfiguration.prototype.strategy;
 /** @type {boolean} */
JSData.DSConfiguration.prototype.upsert;
 /** @type {boolean} */
JSData.DSConfiguration.prototype.useClass;
 /** @type {boolean} */
JSData.DSConfiguration.prototype.useFilter;
/**
 * @extends {JSData.DSConfiguration}
 * @record
 * @struct
 */
JSData.DSAdapterOperationConfiguration = function() {};
 /** @type {string} */
JSData.DSAdapterOperationConfiguration.prototype.adapter;
 /** @type {!Object<string,(string|number|boolean)>} */
JSData.DSAdapterOperationConfiguration.prototype.params;
/**
 * @extends {JSData.DSAdapterOperationConfiguration}
 * @record
 * @struct
 */
JSData.DSSaveConfiguration = function() {};
 /** @type {boolean} */
JSData.DSSaveConfiguration.prototype.changesOnly;
/**
 * @extends {JSData.DSConfiguration}
 * @record
 * @struct
 */
JSData.DSResourceDefinitionConfiguration = function() {};
 /** @type {string} */
JSData.DSResourceDefinitionConfiguration.prototype.name;
 /** @type {?} */
JSData.DSResourceDefinitionConfiguration.prototype.computed;
 /** @type {?} */
JSData.DSResourceDefinitionConfiguration.prototype.methods;
 /** @type {{hasMany: !Object, hasOne: !Object, belongsTo: !Object}} */
JSData.DSResourceDefinitionConfiguration.prototype.relations;
/**
 * @extends {JSData.DSResourceDefinitionConfiguration}
 * @record
 * @struct
 */
JSData.DSResourceDefinition = function() {};

/**
 * @template TInject
 * @param {TInject} attrs
 * @param {!JSData.DSConfiguration=} options
 * @return {!JSData.JSDataPromise<?>}
 */
JSData.DSResourceDefinition.prototype.create = function(attrs, options) {};

/**
 * @param {(string|number)} id
 * @param {!JSData.DSAdapterOperationConfiguration=} options
 * @return {!JSData.JSDataPromise<void>}
 */
JSData.DSResourceDefinition.prototype.destroy = function(id, options) {};

/**
 * @param {(!Object|!JSData.DSFilterParams)=} params
 * @param {!JSData.DSAdapterOperationConfiguration=} options
 * @return {!JSData.JSDataPromise<void>}
 */
JSData.DSResourceDefinition.prototype.destroyAll = function(params, options) {};

/**
 * @param {(string|number)} id
 * @param {!JSData.DSAdapterOperationConfiguration=} options
 * @return {!JSData.JSDataPromise<?>}
 */
JSData.DSResourceDefinition.prototype.find = function(id, options) {};

/**
 * @param {(!Object|!JSData.DSFilterParams)=} params
 * @param {!JSData.DSAdapterOperationConfiguration=} options
 * @return {!JSData.JSDataPromise<!Array<?>>}
 */
JSData.DSResourceDefinition.prototype.findAll = function(params, options) {};

/**
 * @param {(string|number|!Object)} idOrInstance
 * @param {(string|!Array<string>)} relations
 * @param {!JSData.DSAdapterOperationConfiguration=} options
 * @return {!JSData.JSDataPromise<?>}
 */
JSData.DSResourceDefinition.prototype.loadRelations = function(idOrInstance, relations, options) {};

/**
 * @param {(string|number)} id
 * @param {!Object} attrs
 * @param {!JSData.DSSaveConfiguration=} options
 * @return {!JSData.JSDataPromise<?>}
 */
JSData.DSResourceDefinition.prototype.update = function(id, attrs, options) {};

/**
 * @param {!Object} attrs
 * @param {(!Object|!JSData.DSFilterParams)=} params
 * @param {!JSData.DSAdapterOperationConfiguration=} options
 * @return {!JSData.JSDataPromise<!Array<?>>}
 */
JSData.DSResourceDefinition.prototype.updateAll = function(attrs, params, options) {};

/**
 * @param {!JSData.DSConfiguration=} options
 * @return {!JSData.JSDataPromise<void>}
 */
JSData.DSResourceDefinition.prototype.reap = function(options) {};

/**
 * @param {(string|number)} id
 * @param {!JSData.DSAdapterOperationConfiguration=} options
 * @return {!JSData.JSDataPromise<?>}
 */
JSData.DSResourceDefinition.prototype.refresh = function(id, options) {};

/**
 * @param {(string|number)} id
 * @param {!JSData.DSSaveConfiguration=} options
 * @return {!JSData.JSDataPromise<?>}
 */
JSData.DSResourceDefinition.prototype.save = function(id, options) {};

/**
 * @param {(string|number)=} id
 * @return {!Array<!Object>}
 */
JSData.DSResourceDefinition.prototype.changeHistory = function(id) {};

/**
 * @param {(string|number)} id
 * @return {!Object}
 */
JSData.DSResourceDefinition.prototype.changes = function(id) {};

/**
 * @param {(string|number|!Object)} idOrInstance
 * @return {void}
 */
JSData.DSResourceDefinition.prototype.compute = function(idOrInstance) {};

/**
 * @template TInject
 * @param {TInject=} attrs
 * @param {!JSData.DSAdapterOperationConfiguration=} options
 * @return {?}
 */
JSData.DSResourceDefinition.prototype.createInstance = function(attrs, options) {};

/**
 * @return {void}
 */
JSData.DSResourceDefinition.prototype.digest = function() {};

/**
 * @param {(string|number)} id
 * @param {!JSData.DSConfiguration=} options
 * @return {?}
 */
JSData.DSResourceDefinition.prototype.eject = function(id, options) {};

/**
 * @param {(!Object|!JSData.DSFilterParams)} params
 * @param {!JSData.DSConfiguration=} options
 * @return {!Array<?>}
 */
JSData.DSResourceDefinition.prototype.ejectAll = function(params, options) {};

/**
 * @param {(!Object|!JSData.DSFilterParams)} params
 * @param {!JSData.DSConfiguration=} options
 * @return {!Array<?>}
 */
JSData.DSResourceDefinition.prototype.filter = function(params, options) {};

/**
 * @param {(string|number)} id
 * @param {!JSData.DSConfiguration=} options
 * @return {?}
 */
JSData.DSResourceDefinition.prototype.get = function(id, options) {};

/**
 * @param {!Array<(string|number)>=} ids
 * @return {!Array<?>}
 */
JSData.DSResourceDefinition.prototype.getAll = function(ids) {};

/**
 * @param {(string|number)} id
 * @return {boolean}
 */
JSData.DSResourceDefinition.prototype.hasChanges = function(id) {};

/**
 * @param {T|!Array<T>} item_or_items
 * @param {!JSData.DSConfiguration=} options
 * @return {?|!Array<?>}
 */
JSData.DSResourceDefinition.prototype.inject = function(item_or_items, options) {};

/**
 * @param {!Object} object
 * @return {boolean}
 */
JSData.DSResourceDefinition.prototype.is = function(object) {};

/**
 * @param {(string|number)=} id
 * @return {number}
 */
JSData.DSResourceDefinition.prototype.lastModified = function(id) {};

/**
 * @param {(string|number)=} id
 * @return {number}
 */
JSData.DSResourceDefinition.prototype.lastSaved = function(id) {};

/**
 * @param {(string|number)} id
 * @param {!Array<string>=} relations
 * @return {?}
 */
JSData.DSResourceDefinition.prototype.link = function(id, relations) {};

/**
 * @param {(!Object|!JSData.DSFilterParams)} params
 * @param {!Array<string>=} relations
 * @return {?}
 */
JSData.DSResourceDefinition.prototype.linkAll = function(params, relations) {};

/**
 * @param {(string|number)} id
 * @param {!Array<string>=} relations
 * @return {?}
 */
JSData.DSResourceDefinition.prototype.linkInverse = function(id, relations) {};

/**
 * @param {(string|number)} id
 * @return {?}
 */
JSData.DSResourceDefinition.prototype.previous = function(id) {};

/**
 * @param {(string|number)} id
 * @param {!Array<string>=} relations
 * @return {?}
 */
JSData.DSResourceDefinition.prototype.unlinkInverse = function(id, relations) {};
/**
 * @record
 * @struct
 */
JSData.DSInstanceShorthands = function() {};

/**
 * @return {void}
 */
JSData.DSInstanceShorthands.prototype.DSCompute = function() {};

/**
 * @param {!JSData.DSAdapterOperationConfiguration=} options
 * @return {!JSData.JSDataPromise<?>}
 */
JSData.DSInstanceShorthands.prototype.DSRefresh = function(options) {};

/**
 * @param {!JSData.DSSaveConfiguration=} options
 * @return {!JSData.JSDataPromise<?>}
 */
JSData.DSInstanceShorthands.prototype.DSSave = function(options) {};

/**
 * @param {!JSData.DSAdapterOperationConfiguration=} options
 * @return {!JSData.JSDataPromise<?>}
 */
JSData.DSInstanceShorthands.prototype.DSUpdate = function(options) {};

/**
 * @param {!JSData.DSAdapterOperationConfiguration=} options
 * @return {!JSData.JSDataPromise<void>}
 */
JSData.DSInstanceShorthands.prototype.DSDestroy = function(options) {};

/**
 * @param {!JSData.DSConfiguration=} options
 * @return {!JSData.JSDataPromise<?>}
 */
JSData.DSInstanceShorthands.prototype.DSCreate = function(options) {};

/**
 * @param {(string|!Array<string>)} relations
 * @param {!JSData.DSAdapterOperationConfiguration=} options
 * @return {!JSData.JSDataPromise<?>}
 */
JSData.DSInstanceShorthands.prototype.DSLoadRelations = function(relations, options) {};

/**
 * @return {!Array<!Object>}
 */
JSData.DSInstanceShorthands.prototype.DSChangeHistory = function() {};

/**
 * @return {!Object}
 */
JSData.DSInstanceShorthands.prototype.DSChanges = function() {};

/**
 * @return {boolean}
 */
JSData.DSInstanceShorthands.prototype.DSHasChanges = function() {};

/**
 * @return {number}
 */
JSData.DSInstanceShorthands.prototype.DSLastModified = function() {};

/**
 * @return {number}
 */
JSData.DSInstanceShorthands.prototype.DSLastSaved = function() {};

/**
 * @param {!Array<string>=} relations
 * @return {?}
 */
JSData.DSInstanceShorthands.prototype.DSLink = function(relations) {};

/**
 * @param {!Array<string>=} relations
 * @return {?}
 */
JSData.DSInstanceShorthands.prototype.DSLinkInverse = function(relations) {};

/**
 * @return {?}
 */
JSData.DSInstanceShorthands.prototype.DSPrevious = function() {};

/**
 * @param {!Array<string>=} relations
 * @return {?}
 */
JSData.DSInstanceShorthands.prototype.DSUnlinkInverse = function(relations) {};
/**
 * @record
 * @struct
 */
JSData.DSFilterParams = function() {};
 /** @type {!Object} */
JSData.DSFilterParams.prototype.where;
 /** @type {number} */
JSData.DSFilterParams.prototype.limit;
 /** @type {number} */
JSData.DSFilterParams.prototype.skip;
 /** @type {number} */
JSData.DSFilterParams.prototype.offset;
 /** @type {(string|!Array<string>|!Array<!Array<string>>)} */
JSData.DSFilterParams.prototype.orderBy;
 /** @type {(string|!Array<string>|!Array<!Array<string>>)} */
JSData.DSFilterParams.prototype.sort;

/** @typedef {(!Object|!JSData.DSFilterParams)} */
JSData.DSFilterArg;
/**
 * @record
 * @struct
 */
JSData.IDSResourceLifecycleValidateEventHandlers = function() {};
 /** @type {function(string, ?, function(?, ?): void): void} */
JSData.IDSResourceLifecycleValidateEventHandlers.prototype.beforeValidate;
 /** @type {function(string, ?, function(?, ?): void): void} */
JSData.IDSResourceLifecycleValidateEventHandlers.prototype.validate;
 /** @type {function(string, ?, function(?, ?): void): void} */
JSData.IDSResourceLifecycleValidateEventHandlers.prototype.afterValidate;
/**
 * @record
 * @struct
 */
JSData.IDSResourceLifecycleCreateEventHandlers = function() {};
 /** @type {function(string, ?, function(?, ?): void): void} */
JSData.IDSResourceLifecycleCreateEventHandlers.prototype.beforeCreate;
 /** @type {function(string, ?, function(?, ?): void): void} */
JSData.IDSResourceLifecycleCreateEventHandlers.prototype.afterCreate;
/**
 * @record
 * @struct
 */
JSData.IDSResourceLifecycleCreateInstanceEventHandlers = function() {};
 /** @type {function(string, ?): void} */
JSData.IDSResourceLifecycleCreateInstanceEventHandlers.prototype.beforeCreateInstance;
 /** @type {function(string, ?): void} */
JSData.IDSResourceLifecycleCreateInstanceEventHandlers.prototype.afterCreateInstance;
/**
 * @record
 * @struct
 */
JSData.IDSResourceLifecycleUpdateEventHandlers = function() {};
 /** @type {function(string, ?, function(?, ?): void): void} */
JSData.IDSResourceLifecycleUpdateEventHandlers.prototype.beforeUpdate;
 /** @type {function(string, ?, function(?, ?): void): void} */
JSData.IDSResourceLifecycleUpdateEventHandlers.prototype.afterUpdate;
/**
 * @record
 * @struct
 */
JSData.IDSResourceLifecycleDestroyEventHandlers = function() {};
 /** @type {function(string, ?, function(?, ?): void): void} */
JSData.IDSResourceLifecycleDestroyEventHandlers.prototype.beforeDestroy;
 /** @type {function(string, ?, function(?, ?): void): void} */
JSData.IDSResourceLifecycleDestroyEventHandlers.prototype.afterDestroy;
/**
 * @record
 * @struct
 */
JSData.IDSResourceLifecycleInjectEventHandlers = function() {};
 /** @type {function(string, ?): void} */
JSData.IDSResourceLifecycleInjectEventHandlers.prototype.beforeInject;
 /** @type {function(string, ?): void} */
JSData.IDSResourceLifecycleInjectEventHandlers.prototype.afterInject;
/**
 * @record
 * @struct
 */
JSData.IDSResourceLifecycleEjectEventHandlers = function() {};
 /** @type {function(string, ?): void} */
JSData.IDSResourceLifecycleEjectEventHandlers.prototype.beforeEject;
 /** @type {function(string, ?): void} */
JSData.IDSResourceLifecycleEjectEventHandlers.prototype.afterEject;
/**
 * @record
 * @struct
 */
JSData.IDSResourceLifecycleReapEventHandlers = function() {};
 /** @type {function(string, ?): void} */
JSData.IDSResourceLifecycleReapEventHandlers.prototype.beforeReap;
 /** @type {function(string, ?): void} */
JSData.IDSResourceLifecycleReapEventHandlers.prototype.afterReap;
/**
 * @extends {JSData.IDSResourceLifecycleCreateEventHandlers}
 * @extends {JSData.IDSResourceLifecycleCreateInstanceEventHandlers}
 * @extends {JSData.IDSResourceLifecycleValidateEventHandlers}
 * @extends {JSData.IDSResourceLifecycleUpdateEventHandlers}
 * @extends {JSData.IDSResourceLifecycleDestroyEventHandlers}
 * @extends {JSData.IDSResourceLifecycleInjectEventHandlers}
 * @extends {JSData.IDSResourceLifecycleEjectEventHandlers}
 * @extends {JSData.IDSResourceLifecycleReapEventHandlers}
 * @record
 * @struct
 */
JSData.IDSResourceLifecycleEventHandlers = function() {};
/**
 * @record
 * @struct
 */
JSData.DSErrors = function() {};
 /** @type {!JSData.DSError} */
JSData.DSErrors.prototype.IllegalArgumentError;
 /** @type {!JSData.DSError} */
JSData.DSErrors.prototype.IA;
 /** @type {!JSData.DSError} */
JSData.DSErrors.prototype.RuntimeError;
 /** @type {!JSData.DSError} */
JSData.DSErrors.prototype.R;
 /** @type {!JSData.DSError} */
JSData.DSErrors.prototype.NonexistentResourceError;
 /** @type {!JSData.DSError} */
JSData.DSErrors.prototype.NER;
/**
 * @record
 * @struct
 */
JSData.DSError = function() {};

/* TODO: ConstructSignature: JSData */
 /** @type {string} */
JSData.DSError.prototype.message;
 /** @type {string} */
JSData.DSError.prototype.type;
/**
 * @record
 * @struct
 */
JSData.IDSAdapter = function() {};

/**
 * @template T
 * @param {!JSData.DSResourceDefinition<T>} config
 * @param {!Object} attrs
 * @param {!JSData.DSConfiguration=} options
 * @return {!JSData.JSDataPromise<T>}
 */
JSData.IDSAdapter.prototype.create = function(config, attrs, options) {};

/**
 * @template T
 * @param {!JSData.DSResourceDefinition<T>} config
 * @param {(string|number)} id
 * @param {!JSData.DSConfiguration=} options
 * @return {!JSData.JSDataPromise<?>}
 */
JSData.IDSAdapter.prototype.destroy = function(config, id, options) {};

/**
 * @template T
 * @param {!JSData.DSResourceDefinition<T>} config
 * @param {(!Object|!JSData.DSFilterParams)} params
 * @param {!JSData.DSConfiguration=} options
 * @return {!JSData.JSDataPromise<?>}
 */
JSData.IDSAdapter.prototype.destroyAll = function(config, params, options) {};

/**
 * @template T
 * @param {!JSData.DSResourceDefinition<T>} config
 * @param {(string|number)} id
 * @param {!JSData.DSConfiguration=} options
 * @return {!JSData.JSDataPromise<T>}
 */
JSData.IDSAdapter.prototype.find = function(config, id, options) {};

/**
 * @template T
 * @param {!JSData.DSResourceDefinition<T>} config
 * @param {(!Object|!JSData.DSFilterParams)=} params
 * @param {!JSData.DSConfiguration=} options
 * @return {!JSData.JSDataPromise<T>}
 */
JSData.IDSAdapter.prototype.findAll = function(config, params, options) {};

/**
 * @template T
 * @param {!JSData.DSResourceDefinition<T>} config
 * @param {(string|number)} id
 * @param {!Object} attrs
 * @param {!JSData.DSConfiguration=} options
 * @return {!JSData.JSDataPromise<T>}
 */
JSData.IDSAdapter.prototype.update = function(config, id, attrs, options) {};

/**
 * @template T
 * @param {!JSData.DSResourceDefinition<T>} config
 * @param {!Object} attrs
 * @param {(!Object|!JSData.DSFilterParams)=} params
 * @param {!JSData.DSConfiguration=} options
 * @return {!JSData.JSDataPromise<T>}
 */
JSData.IDSAdapter.prototype.updateAll = function(config, attrs, params, options) {};
/**
 * @record
 * @struct
 */
JSData.DSActionConfig = function() {};
 /** @type {string} */
JSData.DSActionConfig.prototype.adapter;
 /** @type {string} */
JSData.DSActionConfig.prototype.endpoint;
 /** @type {string} */
JSData.DSActionConfig.prototype.pathname;
 /** @type {string} */
JSData.DSActionConfig.prototype.method;
/**
 * @record
 * @struct
 */
JSData.DSActionFn = function() {};

/* TODO: CallSignature: JSData */
 /** @type {{DS: !JSData.DS, DSErrors: !JSData.DSErrors}} */
var JSData;
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "js-data"
/** @const */
tsickle_declare_module.js_data = {};

/* TODO: ExportAssignment in tsickle_declare_module.js_data */
