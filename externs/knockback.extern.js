/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/knockback/index.d.ts:
/** @const */
var Knockback = {};
/**
 * @record
 * @struct
 */
Knockback.EventWatcherOptions = function() {};
 /** @type {function(?): void} */
Knockback.EventWatcherOptions.prototype.emitter;
 /** @type {function(?): void} */
Knockback.EventWatcherOptions.prototype.update;
 /** @type {string} */
Knockback.EventWatcherOptions.prototype.event_selector;
 /** @type {string} */
Knockback.EventWatcherOptions.prototype.key;
/**
 * @record
 * @struct
 */
Knockback.FactoryOptions = function() {};
 /** @type {?} */
Knockback.FactoryOptions.prototype.factories;
/**
 * @record
 * @struct
 */
Knockback.StoreOptions = function() {};
 /** @type {?} */
Knockback.StoreOptions.prototype.creator;
 /** @type {string} */
Knockback.StoreOptions.prototype.path;
 /** @type {!Knockback.Store} */
Knockback.StoreOptions.prototype.store;
 /** @type {!Knockback.Factory} */
Knockback.StoreOptions.prototype.factory;
/**
 * @constructor
 * @struct
 */
Knockback.Destroyable = function() {};

/**
 * @return {?}
 */
Knockback.Destroyable.prototype.destroy = function() {};

/**
 * @constructor
 * @struct
 * @param {!Backbone.Model=} model
 * @param {!Knockback.ViewModelOptions=} options
 * @param {!Knockback.ViewModel=} viewModel
 */
Knockback.ViewModel = function(model, options, viewModel) {};

/**
 * @return {!Knockback.ViewModelOptions}
 */
Knockback.ViewModel.prototype.shareOptions = function() {};

/**
 * @param {?} source
 * @return {?}
 */
Knockback.ViewModel.prototype.extend = function(source) {};

/**
 * @return {!Backbone.Model}
 */
Knockback.ViewModel.prototype.model = function() {};
/**
 * @extends {Knockback.Destroyable}
 * @constructor
 * @struct
 */
Knockback.EventWatcher = function() {};

/**
 * @param {?} options
 * @param {!KnockoutObservable<?>} emitter
 * @param {!Backbone.Model} obj
 * @param {?} callback_options
 * @return {?}
 */
Knockback.EventWatcher.useOptionsOrCreate = function(options, emitter, obj, callback_options) {};

/**
 * @param {!Backbone.Model=} newEmitter
 * @return {!Backbone.Model|?}
 */
Knockback.EventWatcher.prototype.emitter = function(newEmitter) {};

/**
 * @param {?} obj
 * @param {?} callback_info
 * @return {?}
 */
Knockback.EventWatcher.prototype.registerCallbacks = function(obj, callback_info) {};

/**
 * @param {?} obj
 * @return {?}
 */
Knockback.EventWatcher.prototype.releaseCallbacks = function(obj) {};

/**
 * @constructor
 * @struct
 * @param {?} parent_factory
 */
Knockback.Factory = function(parent_factory) {};

/**
 * @param {!Knockback.FactoryOptions} options
 * @param {?} obj
 * @param {string} owner_path
 * @return {?}
 */
Knockback.Factory.useOptionsOrCreate = function(options, obj, owner_path) {};

/**
 * @param {string} path
 * @return {boolean}
 */
Knockback.Factory.prototype.hasPath = function(path) {};

/**
 * @param {string} path
 * @param {?} create_info
 * @return {?}
 */
Knockback.Factory.prototype.addPathMapping = function(path, create_info) {};

/**
 * @param {?} factories
 * @param {string} owner_path
 * @return {?}
 */
Knockback.Factory.prototype.addPathMappings = function(factories, owner_path) {};

/**
 * @param {?} factories
 * @param {string} owner_path
 * @return {boolean}
 */
Knockback.Factory.prototype.hasPathMappings = function(factories, owner_path) {};

/**
 * @param {?} obj
 * @param {string} path
 * @return {?}
 */
Knockback.Factory.prototype.creatorForPath = function(obj, path) {};

/**
 * @constructor
 * @struct
 * @param {!Backbone.Model} model
 * @param {!Knockback.StoreOptions} options
 */
Knockback.Store = function(model, options) {};

/**
 * @param {!Knockback.StoreOptions} options
 * @param {?} obj
 * @param {!KnockoutObservable<?>} observable
 * @return {?}
 */
Knockback.Store.useOptionsOrCreate = function(options, obj, observable) {};

/**
 * @return {?}
 */
Knockback.Store.prototype.clear = function() {};

/**
 * @param {!Backbone.Model} obj
 * @param {!KnockoutObservable<?>} observable
 * @param {!Knockback.StoreOptions} options
 * @return {?}
 */
Knockback.Store.prototype.register = function(obj, observable, options) {};

/**
 * @param {!Backbone.Model} obj
 * @param {!Knockback.StoreOptions} options
 * @return {?}
 */
Knockback.Store.prototype.findOrCreate = function(obj, options) {};

/**
 * @constructor
 * @struct
 * @param {!KnockoutObservable<?>} targetObservable
 * @param {?} defaultValue
 */
Knockback.DefaultObservable = function(targetObservable, defaultValue) {};

/**
 * @return {?}
 */
Knockback.DefaultObservable.prototype.setToDefault = function() {};

/**
 * @constructor
 * @struct
 * @param {string|!KnockoutObservable<?>} format
 * @param {!Array<?>} args
 */
Knockback.FormattedObservable = function(format, args) {};
/**
 * @record
 * @struct
 */
Knockback.LocalizedObservable = function() {};

/**
 * @param {?} value
 * @param {?} options
 * @param {?} vm
 * @return {?}
 */
Knockback.LocalizedObservable.prototype.constructor = function(value, options, vm) {};

/**
 * @return {?}
 */
Knockback.LocalizedObservable.prototype.destroy = function() {};

/**
 * @return {?}
 */
Knockback.LocalizedObservable.prototype.resetToCurrent = function() {};

/**
 * @param {?} value
 * @return {?}
 */
Knockback.LocalizedObservable.prototype.observedValue = function(value) {};

/**
 * @constructor
 * @struct
 * @param {!Backbone.ModelBase} emitter
 * @param {string} event
 */
Knockback.TriggeredObservable = function(emitter, event) {};

/**
 * @param {!Backbone.ModelBase=} newEmitter
 * @return {!Backbone.ModelBase|?}
 */
Knockback.TriggeredObservable.prototype.emitter = function(newEmitter) {};

/**
 * @constructor
 * @struct
 */
Knockback.Statistics = function() {};

/**
 * @return {?}
 */
Knockback.Statistics.prototype.clear = function() {};

/**
 * @param {string} event
 * @return {?}
 */
Knockback.Statistics.prototype.addModelEvent = function(event) {};

/**
 * @return {?}
 */
Knockback.Statistics.prototype.modelEventsStatsString = function() {};

/**
 * @param {string} key
 * @param {?} obj
 * @return {?}
 */
Knockback.Statistics.prototype.register = function(key, obj) {};

/**
 * @param {string} key
 * @param {?} obj
 * @return {?}
 */
Knockback.Statistics.prototype.unregister = function(key, obj) {};

/**
 * @param {?} type
 * @return {number}
 */
Knockback.Statistics.prototype.registeredCount = function(type) {};

/**
 * @param {string} success_message
 * @return {string}
 */
Knockback.Statistics.prototype.registeredStatsString = function(success_message) {};
/**
 * @record
 * @struct
 */
Knockback.OptionsBase = function() {};
 /** @type {string} */
Knockback.OptionsBase.prototype.path;
 /** @type {!Knockback.Store} */
Knockback.OptionsBase.prototype.store;
 /** @type {!Knockback.Factory} */
Knockback.OptionsBase.prototype.factory;
 /** @type {?} */
Knockback.OptionsBase.prototype.options;
/**
 * @extends {Knockback.OptionsBase}
 * @record
 * @struct
 */
Knockback.ViewModelOptions = function() {};
 /** @type {!Array<string>} */
Knockback.ViewModelOptions.prototype.internals;
 /** @type {!Array<string>} */
Knockback.ViewModelOptions.prototype.requires;
 /** @type {!Array<string>} */
Knockback.ViewModelOptions.prototype.keys;
 /** @type {string} */
Knockback.ViewModelOptions.prototype.path;
 /** @type {?} */
Knockback.ViewModelOptions.prototype.factories;

/**
 * @param {?} objOrArray
 * @return {?}
 */
Knockback.ViewModelOptions.prototype.if = function(objOrArray) {};
/**
 * @extends {Knockback.OptionsBase}
 * @record
 * @struct
 */
Knockback.CollectionOptions = function() {};
 /** @type {boolean} */
Knockback.CollectionOptions.prototype.models_only;
 /** @type {?} */
Knockback.CollectionOptions.prototype.view_model;
 /** @type {?} */
Knockback.CollectionOptions.prototype.create;
 /** @type {?} */
Knockback.CollectionOptions.prototype.factories;
 /** @type {?} */
Knockback.CollectionOptions.prototype.comparator;
 /** @type {string} */
Knockback.CollectionOptions.prototype.sort_attribute;
 /** @type {?} */
Knockback.CollectionOptions.prototype.filters;
/**
 * @extends {KnockoutObservableArray}
 * @record
 * @struct
 */
Knockback.CollectionObservable = function() {};

/**
 * @param {!Backbone.Collection<!Backbone.Model>=} colleciton
 * @return {?|!Backbone.Collection<!Backbone.Model>}
 */
Knockback.CollectionObservable.prototype.collection = function(colleciton) {};

/**
 * @return {?}
 */
Knockback.CollectionObservable.prototype.destroy = function() {};

/**
 * @return {!Knockback.CollectionOptions}
 */
Knockback.CollectionObservable.prototype.shareOptions = function() {};

/**
 * @param {?|!Array<?>|function(!Backbone.Model): boolean} id_or_ids_or_iterator
 * @return {!Backbone.Model|!Knockback.CollectionObservable}
 */
Knockback.CollectionObservable.prototype.filters = function(id_or_ids_or_iterator) {};

/**
 * @param {?} comparatorFunction
 * @return {?}
 */
Knockback.CollectionObservable.prototype.comparator = function(comparatorFunction) {};

/**
 * @param {string} attr
 * @return {?}
 */
Knockback.CollectionObservable.prototype.sortAttribute = function(attr) {};

/**
 * @param {!Backbone.Model} model
 * @return {!Knockback.ViewModel}
 */
Knockback.CollectionObservable.prototype.viewModelByModel = function(model) {};

/**
 * @return {boolean}
 */
Knockback.CollectionObservable.prototype.hasViewModels = function() {};
/**
 * @record
 * @struct
 */
Knockback.Utils = function() {};

/**
 * @param {?} obj
 * @param {?=} value
 * @return {?}
 */
Knockback.Utils.prototype.wrappedObservable = function(obj, value) {};

/**
 * @param {?} obj
 * @param {?=} value
 * @return {?}
 */
Knockback.Utils.prototype.wrappedObject = function(obj, value) {};

/**
 * @param {?} obj
 * @param {?=} value
 * @return {?}
 */
Knockback.Utils.prototype.wrappedModel = function(obj, value) {};

/**
 * @param {?} obj
 * @param {?=} value
 * @return {?}
 */
Knockback.Utils.prototype.wrappedStore = function(obj, value) {};

/**
 * @param {?} obj
 * @param {?=} value
 * @return {?}
 */
Knockback.Utils.prototype.wrappedFactory = function(obj, value) {};

/**
 * @param {?} obj
 * @param {?=} value
 * @return {?}
 */
Knockback.Utils.prototype.wrappedEventWatcher = function(obj, value) {};

/**
 * @param {?} obj
 * @return {?}
 */
Knockback.Utils.prototype.wrappedDestroy = function(obj) {};

/**
 * @param {!KnockoutObservable<?>} observable
 * @return {?}
 */
Knockback.Utils.prototype.valueType = function(observable) {};

/**
 * @param {string} path1
 * @param {string} path2
 * @return {string}
 */
Knockback.Utils.prototype.pathJoin = function(path1, path2) {};

/**
 * @param {?} options
 * @param {string} path
 * @return {?}
 */
Knockback.Utils.prototype.optionsPathJoin = function(options, path) {};

/**
 * @param {?} value
 * @param {!Knockback.Factory} factory
 * @param {string} path
 * @param {?} owner
 * @param {string} key
 * @return {?}
 */
Knockback.Utils.prototype.inferCreator = function(value, factory, path, owner, key) {};

/**
 * @param {?} obj
 * @param {?=} options
 * @return {?}
 */
Knockback.Utils.prototype.createFromDefaultCreator = function(obj, options) {};

/**
 * @param {?} obj
 * @return {boolean}
 */
Knockback.Utils.prototype.hasModelSignature = function(obj) {};

/**
 * @param {?} obj
 * @return {boolean}
 */
Knockback.Utils.prototype.hasCollectionSignature = function(obj) {};
/**
 * @extends {Knockback.Utils}
 * @record
 * @struct
 */
Knockback.Static = function() {};
 /** @type {?} */
Knockback.Static.prototype.ViewModel;
 /** @type {?} */
Knockback.Static.prototype.CollectionObservable;

/**
 * @param {!Backbone.Collection<!Backbone.Model>=} model
 * @param {!Knockback.CollectionOptions=} options
 * @return {!Knockback.CollectionObservable}
 */
Knockback.Static.prototype.collectionObservable = function(model, options) {};

/**
 * Base class for observing model attributes.
 * @param {!Backbone.Model} model
 * @param {!Knockback.IObservableOptions|string} options_or_options_attributeName
 * @param {!Knockback.ViewModel=} vm
 * @return {!KnockoutObservable<?>}
 */
Knockback.Static.prototype.observable = function(model, options_or_options_attributeName, vm) {};

/**
 * @param {!Backbone.Model=} model
 * @param {?=} options
 * @return {!KnockoutObservable<?>}
 */
Knockback.Static.prototype.viewModel = function(model, options) {};

/**
 * @param {!KnockoutObservable<?>} targetObservable
 * @param {?} defaultValue
 * @return {!KnockoutObservable<?>}
 */
Knockback.Static.prototype.defaultObservable = function(targetObservable, defaultValue) {};

/**
 * @param {string|!KnockoutObservable<?>} format
 * @param {!Array<?>} args
 * @return {!KnockoutObservable<?>}
 */
Knockback.Static.prototype.formattedObservable = function(format, args) {};

/**
 * @param {?} data
 * @param {?} options
 * @return {!KnockoutObservable<?>}
 */
Knockback.Static.prototype.localizedObservable = function(data, options) {};

/**
 * @param {?} object
 * @param {function(): void=} pre_release
 * @return {?}
 */
Knockback.Static.prototype.release = function(object, pre_release) {};

/**
 * @param {?} object
 * @return {?}
 */
Knockback.Static.prototype.releaseKeys = function(object) {};

/**
 * @param {!Knockback.ViewModel} viewmodel
 * @param {!Element} node
 * @return {?}
 */
Knockback.Static.prototype.releaseOnNodeRemove = function(viewmodel, node) {};

/**
 * @param {string} template
 * @param {!Knockback.ViewModel} viewModel
 * @param {?} options
 * @return {?}
 */
Knockback.Static.prototype.renderTemplate = function(template, viewModel, options) {};

/**
 * @param {string} template
 * @param {!Knockback.ViewModel} viewModel
 * @param {?} options
 * @return {?}
 */
Knockback.Static.prototype.renderAutoReleasedTemplate = function(template, viewModel, options) {};

/**
 * @param {!Knockback.ViewModel} viewModel
 * @param {!Element=} node
 * @return {?}
 */
Knockback.Static.prototype.applyBindings = function(viewModel, node) {};
/**
 * @record
 * @struct
 */
Knockback.IObservableOptions = function() {};
 /** @type {string} */
Knockback.IObservableOptions.prototype.key;
 /** @type {function(): ?} */
Knockback.IObservableOptions.prototype.read;
 /** @type {function(?): void} */
Knockback.IObservableOptions.prototype.write;
 /** @type {!Array<!KnockoutObservable<?>>} */
Knockback.IObservableOptions.prototype.args;
 /** @type {!Knockback.LocalizedObservable} */
Knockback.IObservableOptions.prototype.localizer;
 /** @type {?} */
Knockback.IObservableOptions.prototype.default;
 /** @type {string} */
Knockback.IObservableOptions.prototype.path;
 /** @type {?} */
Knockback.IObservableOptions.prototype.store;
 /** @type {?} */
Knockback.IObservableOptions.prototype.factory;
 /** @type {?} */
Knockback.IObservableOptions.prototype.options;
 /** @type {!Knockback.Static} */
var kb;
