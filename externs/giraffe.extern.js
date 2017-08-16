/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/giraffe/index.d.ts:
/** @const */
var Giraffe = {};
/**
 * @record
 * @struct
 */
Giraffe.GiraffeObject = function() {};
 /** @type {!Giraffe.App} */
Giraffe.GiraffeObject.prototype.app;
 /** @type {!Giraffe.StringMap} */
Giraffe.GiraffeObject.prototype.appEvents;
 /** @type {!Giraffe.StringMap} */
Giraffe.GiraffeObject.prototype.dataEvents;
 /** @type {!Giraffe.DefaultOptions} */
Giraffe.GiraffeObject.prototype.defaultOptions;

/**
 * @return {?}
 */
Giraffe.GiraffeObject.prototype.initialize = function() {};

/**
 * @return {?}
 */
Giraffe.GiraffeObject.prototype.beforeInitialize = function() {};

/**
 * @return {?}
 */
Giraffe.GiraffeObject.prototype.afterInitialize = function() {};

/**
 * @return {?}
 */
Giraffe.GiraffeObject.prototype.dispose = function() {};

/**
 * @return {?}
 */
Giraffe.GiraffeObject.prototype.beforeDispose = function() {};

/**
 * @return {?}
 */
Giraffe.GiraffeObject.prototype.afterDispose = function() {};
/**
 * @record
 * @struct
 */
Giraffe.AttachmentOptions = function() {};
 /** @type {string} */
Giraffe.AttachmentOptions.prototype.method;
 /** @type {boolean} */
Giraffe.AttachmentOptions.prototype.forceRender;
 /** @type {boolean} */
Giraffe.AttachmentOptions.prototype.suppressRender;
/**
 * @record
 * @struct
 */
Giraffe.DefaultOptions = function() {};
 /** @type {boolean} */
Giraffe.DefaultOptions.prototype.disposeOnDetach;
 /** @type {boolean} */
Giraffe.DefaultOptions.prototype.alwaysRender;
 /** @type {boolean} */
Giraffe.DefaultOptions.prototype.saveScrollPosition;
 /** @type {string} */
Giraffe.DefaultOptions.prototype.documentTitle;
/**
 * @record
 * @struct
 */
Giraffe.AppMap = function() {};

/* TODO: IndexSignature: Giraffe */
/**
 * @record
 * @struct
 */
Giraffe.ViewMap = function() {};

/* TODO: IndexSignature: Giraffe */
/**
 * @record
 * @struct
 */
Giraffe.StringMap = function() {};

/* TODO: IndexSignature: Giraffe */
 /** @type {!Giraffe.App} */
Giraffe.app;
 /** @type {!Giraffe.AppMap} */
Giraffe.apps;
 /** @type {!Giraffe.DefaultOptions} */
Giraffe.defaultOptions;
 /** @type {string} */
Giraffe.version;
 /** @type {!Giraffe.ViewMap<!Giraffe.Model>} */
Giraffe.views;

/**
 * @param {!Giraffe.GiraffeObject} instance
 * @return {!Giraffe.GiraffeObject}
 */
Giraffe.bindAppEvents = function(instance) {};

/**
 * @param {!Giraffe.GiraffeObject} instance
 * @return {!Giraffe.GiraffeObject}
 */
Giraffe.bindDataEvents = function(instance) {};

/**
 * @param {!Backbone.Events} context
 * @param {!Backbone.Events} target
 * @param {?} event
 * @param {!Function} callback
 * @return {?}
 */
Giraffe.bindEvent = function(context, target, event, callback) {};

/**
 * @param {!Backbone.Events} context
 * @param {!Backbone.Events} target
 * @param {?} event
 * @param {!Function} callback
 * @return {?}
 */
Giraffe.unbindEvent = function(context, target, event, callback) {};

/**
 * @param {!Backbone.Events} context
 * @param {!Backbone.Events} target
 * @param {?} eventMap
 * @return {?}
 */
Giraffe.bindEventMap = function(context, target, eventMap) {};

/**
 * @param {!Backbone.Events} context
 * @param {!Backbone.Events} target
 * @param {?} eventMap
 * @return {?}
 */
Giraffe.unbindEventMap = function(context, target, eventMap) {};

/**
 * @param {?} instance
 * @param {?=} options
 * @return {?}
 */
Giraffe.configure = function(instance, options) {};

/**
 * @param {!Giraffe.GiraffeObject} instance
 * @param {...?} args
 * @return {!Giraffe.GiraffeObject}
 */
Giraffe.dispose = function(instance, args) {};

/**
 * @param {...?} args
 * @return {!Giraffe.GiraffeObject}
 */
Giraffe.disposeThis = function(args) {};

/**
 * @param {?} obj
 * @param {string} name
 * @param {!Function} before
 * @param {!Function} after
 * @return {?}
 */
Giraffe.wrapFn = function(obj, name, before, after) {};
/**
 * @extends {Backbone.Collection}
 * @implements {Giraffe.GiraffeObject}
 * @constructor
 * @struct
 */
Giraffe.Collection = function() {};
 /** @type {!Giraffe.App} */
Giraffe.Collection.prototype.app;
 /** @type {function(new: (TModel)): ?} */
Giraffe.Collection.prototype.model;
/**
 * @extends {Backbone.Model}
 * @implements {Giraffe.GiraffeObject}
 * @constructor
 * @struct
 */
Giraffe.Model = function() {};
 /** @type {!Giraffe.App} */
Giraffe.Model.prototype.app;
/**
 * @extends {Backbone.Router}
 * @implements {Giraffe.GiraffeObject}
 * @constructor
 * @struct
 */
Giraffe.Router = function() {};
 /** @type {!Giraffe.App} */
Giraffe.Router.prototype.app;
 /** @type {string} */
Giraffe.Router.prototype.namespace;
 /** @type {!Giraffe.StringMap} */
Giraffe.Router.prototype.triggers;

/**
 * @param {string} appEvent
 * @param {...?} args
 * @return {?}
 */
Giraffe.Router.prototype.cause = function(appEvent, args) {};

/**
 * @param {string} appEvent
 * @param {...?} args
 * @return {boolean}
 */
Giraffe.Router.prototype.isCaused = function(appEvent, args) {};

/**
 * @param {string} appEvent
 * @param {...?} args
 * @return {string}
 */
Giraffe.Router.prototype.getRoute = function(appEvent, args) {};

/**
 * @param {string} url
 * @return {?}
 */
Giraffe.Router.prototype.reload = function(url) {};
/**
 * @extends {Backbone.View}
 * @implements {Giraffe.GiraffeObject}
 * @constructor
 * @struct
 */
Giraffe.View = function() {};
 /** @type {!Giraffe.App} */
Giraffe.View.prototype.app;
 /** @type {!Giraffe.StringMap} */
Giraffe.View.prototype.appEvents;
 /** @type {!Array<!Giraffe.View>} */
Giraffe.View.prototype.children;
 /** @type {!Giraffe.StringMap} */
Giraffe.View.prototype.dataEvents;
 /** @type {!Giraffe.DefaultOptions} */
Giraffe.View.prototype.defaultOptions;
 /** @type {string} */
Giraffe.View.prototype.documentTitle;
 /** @type {!Giraffe.View} */
Giraffe.View.prototype.parent;
 /** @type {?} */
Giraffe.View.prototype.template;
 /** @type {!Giraffe.StringMap} */
Giraffe.View.prototype.ui;

/**
 * @param {?} el
 * @param {!Giraffe.AttachmentOptions=} options
 * @return {!Giraffe.View}
 */
Giraffe.View.prototype.attachTo = function(el, options) {};

/**
 * @param {!Giraffe.View} view
 * @param {!Giraffe.AttachmentOptions=} options
 * @return {!Giraffe.View}
 */
Giraffe.View.prototype.attach = function(view, options) {};

/**
 * @param {?} el
 * @return {boolean}
 */
Giraffe.View.prototype.isAttached = function(el) {};

/**
 * @param {?=} options
 * @return {!Giraffe.View}
 */
Giraffe.View.prototype.render = function(options) {};

/**
 * @return {?}
 */
Giraffe.View.prototype.beforeRender = function() {};

/**
 * @return {?}
 */
Giraffe.View.prototype.afterRender = function() {};

/**
 * @return {string}
 */
Giraffe.View.prototype.templateStrategy = function() {};

/**
 * @return {?}
 */
Giraffe.View.prototype.serialize = function() {};

/**
 * @param {!Giraffe.View} parent
 * @return {!Giraffe.View}
 */
Giraffe.View.prototype.setParent = function(parent) {};

/**
 * @param {!Giraffe.View} child
 * @return {!Giraffe.View}
 */
Giraffe.View.prototype.addChild = function(child) {};

/**
 * @param {!Array<!Giraffe.View>} children
 * @return {!Giraffe.View}
 */
Giraffe.View.prototype.addChildren = function(children) {};

/**
 * @param {!Giraffe.View} child
 * @param {boolean=} preserve
 * @return {!Giraffe.View}
 */
Giraffe.View.prototype.removeChild = function(child, preserve) {};

/**
 * @param {boolean=} preserve
 * @return {!Giraffe.View}
 */
Giraffe.View.prototype.removeChildren = function(preserve) {};

/**
 * @param {boolean=} preserve
 * @return {!Giraffe.View}
 */
Giraffe.View.prototype.detach = function(preserve) {};

/**
 * @param {boolean=} preserve
 * @return {!Giraffe.View}
 */
Giraffe.View.prototype.detachChildren = function(preserve) {};

/**
 * @param {string} method
 * @param {...?} args
 * @return {?}
 */
Giraffe.View.prototype.invoke = function(method, args) {};

/**
 * @return {!Giraffe.View}
 */
Giraffe.View.prototype.dispose = function() {};

/**
 * @return {!Giraffe.View}
 */
Giraffe.View.prototype.beforeDispose = function() {};

/**
 * @return {!Giraffe.View}
 */
Giraffe.View.prototype.afterDispose = function() {};

/**
 * @param {?} el
 * @param {boolean=} preserve
 * @return {!Giraffe.View<!Giraffe.Model>}
 */
Giraffe.View.detachByElement = function(el, preserve) {};

/**
 * @template TModel
 * @param {?} el
 * @return {!Giraffe.View<!Giraffe.Model>}
 */
Giraffe.View.getClosestView = function(el) {};

/**
 * @param {string} cid
 * @return {!Giraffe.View<!Giraffe.Model>}
 */
Giraffe.View.getByCid = function(cid) {};

/**
 * @param {?} el
 * @param {?=} parent
 * @param {boolean=} allowParentMatch
 * @return {?<!HTMLElement>}
 */
Giraffe.View.to$El = function(el, parent, allowParentMatch) {};

/**
 * @param {!Array<string>} events
 * @param {string=} prefix
 * @return {!Array<string>}
 */
Giraffe.View.setDocumentEvents = function(events, prefix) {};

/**
 * @param {string=} prefix
 * @return {?}
 */
Giraffe.View.removeDocumentEvents = function(prefix) {};

/**
 * @param {string=} prefix
 * @return {?}
 */
Giraffe.View.setDocumentEventPrefix = function(prefix) {};

/**
 * @param {?} strategy
 * @param {?=} instance
 * @return {?}
 */
Giraffe.View.setTemplateStrategy = function(strategy, instance) {};
/**
 * @extends {Giraffe.View}
 * @constructor
 * @struct
 */
Giraffe.App = function() {};
 /** @type {!Giraffe.StringMap} */
Giraffe.App.prototype.routes;

/**
 * @param {function(?, function(): void): void} initializer
 * @return {!Giraffe.App}
 */
Giraffe.App.prototype.addInitializer = function(initializer) {};

/**
 * @param {?=} options
 * @return {!Giraffe.App}
 */
Giraffe.App.prototype.start = function(options) {};
/** @const */
Giraffe.Contrib = {};
/**
 * @extends {Backbone.Events}
 * @implements {Giraffe.GiraffeObject}
 * @constructor
 * @struct
 */
Giraffe.Contrib.Controller = function() {};
 /** @type {!Giraffe.App} */
Giraffe.Contrib.Controller.prototype.app;
/**
 * @extends {Giraffe.View}
 * @constructor
 * @struct
 */
Giraffe.Contrib.CollectionView = function() {};
 /** @type {!Giraffe.Collection<TModel>} */
Giraffe.Contrib.CollectionView.prototype.collection;
 /** @type {!Giraffe.View<TModel>} */
Giraffe.Contrib.CollectionView.prototype.modelView;
 /** @type {!Array<?>} */
Giraffe.Contrib.CollectionView.prototype.modelViewArgs;
 /** @type {?} */
Giraffe.Contrib.CollectionView.prototype.modelViewEl;
 /** @type {boolean} */
Giraffe.Contrib.CollectionView.prototype.renderOnChange;

/**
 * @param {!Giraffe.Model} model
 * @return {!Giraffe.View<TModel>}
 */
Giraffe.Contrib.CollectionView.prototype.findByModel = function(model) {};

/**
 * @param {!Giraffe.Model} model
 * @return {!Giraffe.View<TModel>}
 */
Giraffe.Contrib.CollectionView.prototype.addOne = function(model) {};

/**
 * @param {!Giraffe.Model} model
 * @return {!Giraffe.View<TModel>}
 */
Giraffe.Contrib.CollectionView.prototype.removeOne = function(model) {};

/**
 * @param {?} ctx
 * @return {?}
 */
Giraffe.Contrib.CollectionView.getDefaults = function(ctx) {};
/**
 * @extends {Giraffe.View}
 * @constructor
 * @struct
 */
Giraffe.Contrib.FastCollectionView = function() {};
 /** @type {!Giraffe.Collection<TModel>} */
Giraffe.Contrib.FastCollectionView.prototype.collection;
 /** @type {?} */
Giraffe.Contrib.FastCollectionView.prototype.modelTemplate;
 /** @type {string} */
Giraffe.Contrib.FastCollectionView.prototype.modelTemplateStrategy;
 /** @type {?} */
Giraffe.Contrib.FastCollectionView.prototype.modelEl;
 /** @type {boolean} */
Giraffe.Contrib.FastCollectionView.prototype.renderOnChange;

/**
 * @return {?}
 */
Giraffe.Contrib.FastCollectionView.prototype.modelSerialize = function() {};

/**
 * @return {!Giraffe.View<TModel>}
 */
Giraffe.Contrib.FastCollectionView.prototype.addAll = function() {};

/**
 * @param {!Giraffe.Model} model
 * @return {!Giraffe.View<TModel>}
 */
Giraffe.Contrib.FastCollectionView.prototype.addOne = function(model) {};

/**
 * @param {!Giraffe.Model} model
 * @return {!Giraffe.View<TModel>}
 */
Giraffe.Contrib.FastCollectionView.prototype.removeOne = function(model) {};

/**
 * @param {number} index
 * @return {!Giraffe.View<TModel>}
 */
Giraffe.Contrib.FastCollectionView.prototype.removeByIndex = function(index) {};

/**
 * @param {!Giraffe.Model} model
 * @return {?<!HTMLElement>}
 */
Giraffe.Contrib.FastCollectionView.prototype.findElByModel = function(model) {};

/**
 * @param {number} index
 * @return {?<!HTMLElement>}
 */
Giraffe.Contrib.FastCollectionView.prototype.findElByIndex = function(index) {};

/**
 * @param {?} el
 * @return {!Giraffe.Model}
 */
Giraffe.Contrib.FastCollectionView.prototype.findModelByEl = function(el) {};

/**
 * @param {?} ctx
 * @return {?}
 */
Giraffe.Contrib.FastCollectionView.getDefaults = function(ctx) {};
