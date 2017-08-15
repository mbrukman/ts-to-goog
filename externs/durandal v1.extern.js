/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/durandal v1/index.d.ts:
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "durandal/system"
/** @const */
tsickle_declare_module.durandal_system = {};
 /** @type {function(?): string} */
tsickle_declare_module.durandal_system.getModuleId;
 /** @type {function(?, string): void} */
tsickle_declare_module.durandal_system.setModuleId;
 /** @type {function(boolean): boolean} */
tsickle_declare_module.durandal_system.debug;
 /** @type {function(?): boolean} */
tsickle_declare_module.durandal_system.isArray;
 /** @type {function(!Array<?>): void} */
tsickle_declare_module.durandal_system.log;
 /** @type {function(!Function): !JQueryDeferred<?>} */
tsickle_declare_module.durandal_system.defer;
 /** @type {function(): string} */
tsickle_declare_module.durandal_system.guid;
 /** @type {function(!Array<string>): !JQueryPromise<?>} */
tsickle_declare_module.durandal_system.acquire;
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "durandal/app"
/** @const */
tsickle_declare_module.durandal_app = {};
 /** @type {string} */
tsickle_declare_module.durandal_app.title;
 /** @type {function(?, ?, ?): !JQueryPromise<?>} */
tsickle_declare_module.durandal_app.showModal;
 /** @type {function(string, string, ?): !JQueryPromise<?>} */
tsickle_declare_module.durandal_app.showMessage;
 /** @type {function(): !JQueryPromise<?>} */
tsickle_declare_module.durandal_app.start;
 /** @type {function(?, string, string): void} */
tsickle_declare_module.durandal_app.setRoot;
 /** @type {function(): void} */
tsickle_declare_module.durandal_app.adaptToDevice;
 /** @type {function(string, !Function, ?): !IEventSubscription} */
tsickle_declare_module.durandal_app.on;
 /** @type {function(string, !Function, ?): ?} */
tsickle_declare_module.durandal_app.off;
 /** @type {function(string, !Array<?>): ?} */
tsickle_declare_module.durandal_app.trigger;
 /** @type {function(?): !Function} */
tsickle_declare_module.durandal_app.proxy;
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "durandal/composition"
/** @const */
tsickle_declare_module.durandal_composition = {};
 /** @type {boolean} */
tsickle_declare_module.durandal_composition.activateDuringComposition;
 /** @type {function(string): string} */
tsickle_declare_module.durandal_composition.convertTransitionToModuleId;
 /** @type {string} */
tsickle_declare_module.durandal_composition.defaultTransitionName;
 /** @type {function(!HTMLElement, !HTMLElement, ?): void} */
tsickle_declare_module.durandal_composition.switchContent;
 /** @type {function(!HTMLElement, !HTMLElement, ?): void} */
tsickle_declare_module.durandal_composition.bindAndShow;
 /** @type {function(?): !JQueryPromise<?>} */
tsickle_declare_module.durandal_composition.defaultStrategy;
 /** @type {function(?): ?} */
tsickle_declare_module.durandal_composition.getSettings;
 /** @type {function(!HTMLElement, ?): void} */
tsickle_declare_module.durandal_composition.executeStrategy;
 /** @type {function(!HTMLElement, ?): void} */
tsickle_declare_module.durandal_composition.inject;
 /** @type {function(!HTMLElement, ?, ?): void} */
tsickle_declare_module.durandal_composition.compose;
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "durandal/http"
/** @const */
tsickle_declare_module.durandal_http = {};
 /** @type {string} */
tsickle_declare_module.durandal_http.defaultJSONPCallbackParam;
 /** @type {function(string, !Object): !JQueryPromise<?>} */
tsickle_declare_module.durandal_http.get;
 /** @type {function(string, !Object, string): !JQueryPromise<?>} */
tsickle_declare_module.durandal_http.jsonp;
 /** @type {function(string, !Object): !JQueryPromise<?>} */
tsickle_declare_module.durandal_http.post;
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "durandal/modalDialog"
/** @const */
tsickle_declare_module.durandal_modalDialog = {};
 /** @type {number} */
tsickle_declare_module.durandal_modalDialog.currentZIndex;
 /** @type {function(): number} */
tsickle_declare_module.durandal_modalDialog.getNextZIndex;
 /** @type {function(): boolean} */
tsickle_declare_module.durandal_modalDialog.isModalOpen;
 /** @type {function(string): ?} */
tsickle_declare_module.durandal_modalDialog.getContext;
 /** @type {function(string, ?): !JQueryPromise<?>} */
tsickle_declare_module.durandal_modalDialog.addContext;
 /** @type {function(?, ?): ?} */
tsickle_declare_module.durandal_modalDialog.createCompositionSettings;
 /** @type {function(?, ?, ?): !JQueryPromise<?>} */
tsickle_declare_module.durandal_modalDialog.show;
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "durandal/viewEngine"
/** @const */
tsickle_declare_module.durandal_viewEngine = {};
 /** @type {string} */
tsickle_declare_module.durandal_viewEngine.viewExtension;
 /** @type {string} */
tsickle_declare_module.durandal_viewEngine.viewPlugin;
 /** @type {function(string): boolean} */
tsickle_declare_module.durandal_viewEngine.isViewUrl;
 /** @type {function(string): string} */
tsickle_declare_module.durandal_viewEngine.convertViewUrlToViewId;
 /** @type {function(string): string} */
tsickle_declare_module.durandal_viewEngine.convertViewIdToRequirePath;
 /** @type {function(string): !HTMLElement} */
tsickle_declare_module.durandal_viewEngine.parseMarkup;
 /** @type {function(string): !JQueryPromise<?>} */
tsickle_declare_module.durandal_viewEngine.createView;
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "durandal/viewLocator"
/** @const */
tsickle_declare_module.durandal_viewLocator = {};
 /** @type {function(string, string, string): string} */
tsickle_declare_module.durandal_viewLocator.useConvention;
 /** @type {function(!Object, !Array<!HTMLElement>): !JQueryPromise<?>} */
tsickle_declare_module.durandal_viewLocator.locateViewForObject;
 /** @type {function(string): string} */
tsickle_declare_module.durandal_viewLocator.convertModuleIdToViewId;
 /** @type {function(?): string} */
tsickle_declare_module.durandal_viewLocator.determineFallbackViewId;
 /** @type {function(string, string): string} */
tsickle_declare_module.durandal_viewLocator.translateViewIdToArea;
 /** @type {function(?, string, !Array<!HTMLElement>): !JQueryPromise<?>} */
tsickle_declare_module.durandal_viewLocator.locateView;
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "durandal/viewModel"
/** @const */
tsickle_declare_module.durandal_viewModel = {};
 /** @type {!IViewModelDefaults} */
tsickle_declare_module.durandal_viewModel.defaults;
 /** @type {?} */
tsickle_declare_module.durandal_viewModel.activator;
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "durandal/viewModelBinder"
/** @const */
tsickle_declare_module.durandal_viewModelBinder = {};
 /** @type {function(!KnockoutBindingContext, !HTMLElement, ?): void} */
tsickle_declare_module.durandal_viewModelBinder.bindContext;
 /** @type {function(?, !HTMLElement): void} */
tsickle_declare_module.durandal_viewModelBinder.bind;
/**
 * @record
 * @struct
 */
function IViewModelDefaults() {}
 /** @type {boolean} */
IViewModelDefaults.prototype.closeOnDeactivate;

/**
 * When the activator attempts to activate an item as described below, it will only activate the new item, by default, if it is a different instance than the current. Overwrite this function to change that behavior.
 * @param {?} currentItem
 * @param {?} newItem
 * @param {?} activationData
 * @return {boolean}
 */
IViewModelDefaults.prototype.areSameItem = function(currentItem, newItem, activationData) {};

/**
 * Interprets values returned from guard methods like canActivate and canDeactivate by transforming them into bools. The default implementation translates string values "Yes" and "Ok" as true...and all other string values as false. Non string values evaluate according to the truthy/falsey values of JavaScript. Replace this function with your own to expand or set up different values. This transformation is used by the activator internally and allows it to work smoothly in the common scenario where a deactivated item needs to show a message box to prompt the user before closing. Since the message box returns a promise that resolves to the button option the user selected, it can be automatically processed as part of the activator's guard check.
 * @param {?} value
 * @return {boolean}
 */
IViewModelDefaults.prototype.interpretResponse = function(value) {};

/**
 * called before activating a module
 * @param {?} newItem
 * @return {?}
 */
IViewModelDefaults.prototype.beforeActivate = function(newItem) {};

/**
 * called after deactivating a module
 * @return {?}
 */
IViewModelDefaults.prototype.afterDeactivate = function() {};
/**
 * @record
 * @struct
 */
function IDurandalViewModelActiveItem() {}

/* TODO: CallSignature:  */
 /** @type {!IViewModelDefaults} */
IDurandalViewModelActiveItem.prototype.settings;

/**
 * This observable is set internally by the activator during the activation process. It can be used to determine if an activation is currently happening.
 * @param {boolean=} val
 * @return {boolean}
 */
IDurandalViewModelActiveItem.prototype.isActivating = function(val) {};

/**
 * Pass a specific item as well as an indication of whether it should be closed, and this function will tell you the answer.
 * @param {?} item
 * @param {?} close
 * @return {!JQueryPromise<?>}
 */
IDurandalViewModelActiveItem.prototype.canDeactivateItem = function(item, close) {};

/**
 * Deactivates the specified item (optionally closing it). Deactivation follows the lifecycle and thus only works if the item can be deactivated.
 * @param {?} item
 * @param {?} close
 * @return {!JQueryDeferred<?>}
 */
IDurandalViewModelActiveItem.prototype.deactivateItem = function(item, close) {};

/**
 * Determines if a specific item can be activated. You can pass an arbitrary object to this function, which will be passed to the item's canActivate function , if present. This is useful if you are manually controlling activation and you want to provide some context for the operation.
 * @param {?} newItem
 * @param {?=} activationData
 * @return {!JQueryPromise<?>}
 */
IDurandalViewModelActiveItem.prototype.canActivateItem = function(newItem, activationData) {};

/**
 * Activates a specific item. Activation follows the lifecycle and thus only occurs if possible. activationData functions as stated above.
 * @param {?} newItem
 * @param {?=} activationData
 * @return {!JQueryPromise<?>}
 */
IDurandalViewModelActiveItem.prototype.activateItem = function(newItem, activationData) {};

/**
 * Checks whether or not the activator itself can be activated...that is whether or not it's current item or initial value can be activated.
 * @return {!JQueryPromise<?>}
 */
IDurandalViewModelActiveItem.prototype.canActivate = function() {};

/**
 * Activates the activator...that is..it activates it's current item or initial value.
 * @return {!JQueryPromise<?>}
 */
IDurandalViewModelActiveItem.prototype.activate = function() {};

/**
 * Checks whether or not the activator itself can be deactivated...that is whether or not it's current item can be deactivated.
 * @return {!JQueryPromise<?>}
 */
IDurandalViewModelActiveItem.prototype.canDeactivate = function() {};

/**
 *  Deactivates the activator...interpreted as deactivating its current item.
 * @return {!JQueryDeferred<?>}
 */
IDurandalViewModelActiveItem.prototype.deactivate = function() {};

/**
 * Adds canActivate, activate, canDeactivate and deactivate functions to the provided model which pass through to the corresponding functions on the activator.
 * @param {?} includeIn
 * @return {!JQueryPromise<?>}
 */
IDurandalViewModelActiveItem.prototype.includeIn = function(includeIn) {};

/**
 * Sets up a collection representing a pool of objects which the activator will activate. See below for details. Activators without an item boolean always close their values on deactivate. Activators with an items pool only deactivate, but do not close them.
 * @param {?} items
 * @return {!IDurandalViewModelActiveItem}
 */
IDurandalViewModelActiveItem.prototype.forItems = function(items) {};
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "durandal/plugins/router"
/** @const */
tsickle_declare_module.durandal_plugins_router = {};
/**
 * @record
 * @struct
 */
tsickle_declare_module.durandal_plugins_router.IRouteInfo = function() {};
 /** @type {string} */
tsickle_declare_module.durandal_plugins_router.IRouteInfo.prototype.url;
 /** @type {string} */
tsickle_declare_module.durandal_plugins_router.IRouteInfo.prototype.moduleId;
 /** @type {string} */
tsickle_declare_module.durandal_plugins_router.IRouteInfo.prototype.name;
 /** @type {string} */
tsickle_declare_module.durandal_plugins_router.IRouteInfo.prototype.caption;
 /** @type {boolean} */
tsickle_declare_module.durandal_plugins_router.IRouteInfo.prototype.visible;
 /** @type {!Object} */
tsickle_declare_module.durandal_plugins_router.IRouteInfo.prototype.settings;
 /** @type {string} */
tsickle_declare_module.durandal_plugins_router.IRouteInfo.prototype.hash;
 /** @type {!KnockoutComputed<boolean>} */
tsickle_declare_module.durandal_plugins_router.IRouteInfo.prototype.isActive;
/**
 * @record
 * @struct
 */
tsickle_declare_module.durandal_plugins_router.IRouteInfoParameters = function() {};
 /** @type {?} */
tsickle_declare_module.durandal_plugins_router.IRouteInfoParameters.prototype.url;
 /** @type {string} */
tsickle_declare_module.durandal_plugins_router.IRouteInfoParameters.prototype.moduleId;
 /** @type {string} */
tsickle_declare_module.durandal_plugins_router.IRouteInfoParameters.prototype.name;
 /** @type {string} */
tsickle_declare_module.durandal_plugins_router.IRouteInfoParameters.prototype.caption;
 /** @type {boolean} */
tsickle_declare_module.durandal_plugins_router.IRouteInfoParameters.prototype.visible;
 /** @type {!Object} */
tsickle_declare_module.durandal_plugins_router.IRouteInfoParameters.prototype.settings;
 /** @type {!KnockoutObservable<boolean>} */
tsickle_declare_module.durandal_plugins_router.ready;
 /** @type {!KnockoutObservableArray<!IRouteInfo>} */
tsickle_declare_module.durandal_plugins_router.allRoutes;
 /** @type {!KnockoutObservableArray<!IRouteInfo>} */
tsickle_declare_module.durandal_plugins_router.visibleRoutes;
 /** @type {!KnockoutObservable<boolean>} */
tsickle_declare_module.durandal_plugins_router.isNavigating;
 /** @type {!IDurandalViewModelActiveItem} */
tsickle_declare_module.durandal_plugins_router.activeItem;
 /** @type {!KnockoutObservable<!IRouteInfo>} */
tsickle_declare_module.durandal_plugins_router.activeRoute;
 /** @type {function(): void} */
tsickle_declare_module.durandal_plugins_router.afterCompose;
 /** @type {function(!IRouteInfo, ?, ?): ?} */
tsickle_declare_module.durandal_plugins_router.getActivatableInstance;
 /** @type {function(): void} */
tsickle_declare_module.durandal_plugins_router.navigateBack;
 /** @type {function(): void} */
tsickle_declare_module.durandal_plugins_router.useConvention;
 /** @type {function(string): void} */
tsickle_declare_module.durandal_plugins_router.navigateTo;
 /** @type {function(string): void} */
tsickle_declare_module.durandal_plugins_router.replaceLocation;
 /** @type {function(string): string} */
tsickle_declare_module.durandal_plugins_router.convertRouteToName;
 /** @type {function(string): string} */
tsickle_declare_module.durandal_plugins_router.convertRouteToModuleId;
 /** @type {function(string): string} */
tsickle_declare_module.durandal_plugins_router.autoConvertRouteToModuleId;
 /** @type {function(!IRouteInfo): void} */
tsickle_declare_module.durandal_plugins_router.prepareRouteInfo;
 /** @type {function(!IRouteInfo, ?): void} */
tsickle_declare_module.durandal_plugins_router.handleInvalidRoute;
 /** @type {function(string): void} */
tsickle_declare_module.durandal_plugins_router.mapAuto;
 /** @type {function(string, string, string): !IRouteInfo} */
tsickle_declare_module.durandal_plugins_router.mapNav;
 /** @type {?} */
tsickle_declare_module.durandal_plugins_router.mapRoute;
 /** @type {?} */
tsickle_declare_module.durandal_plugins_router.map;
 /** @type {function(string): !JQueryPromise<?>} */
tsickle_declare_module.durandal_plugins_router.activate;
 /** @type {function(!IRouteInfo, ?, ?): ?} */
tsickle_declare_module.durandal_plugins_router.guardRoute;
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "durandal/widget"
/** @const */
tsickle_declare_module.durandal_widget = {};

/**
 * Use this function to create a widget through code. The element should reference a dom element that the widget will be created on. The settings can be either a string or an object. If it's a string, it should specify the widget kind. If it's an object, it represents settings that will be passed along to the widget. This object should have a kind property used to identify the widget kind to create. Optionally, you can specify a bindingContext of which you want the widget's binding context to be created as a child.
 * @param {?} element
 * @param {?} settings
 * @param {?=} bindingContext
 * @return {?}
 */
tsickle_declare_module.durandal_widget.create = function(element, settings, bindingContext) {};

/**
 * By default, you can create widgets in html by using the widget binding extension. Calling registerKind allows you to easily create a custom binding handler for your widget kind. Without calling registerKind you might declare a widget binding for an expander control with
 * @param {string} kind
 * @return {?}
 */
tsickle_declare_module.durandal_widget.registerKind = function(kind) {};

/**
 * Use this to re-map a widget kind identifier to a new viewId or moduleId representing the 'skin' and 'behavior' respectively.
 * @param {string} kind
 * @param {string=} viewId
 * @param {string=} moduleId
 * @return {?}
 */
tsickle_declare_module.durandal_widget.mapKind = function(kind, viewId, moduleId) {};

/**
 * Developers implementing widgets may wish to use this function to acquire the resolved template parts for a widget. Pass a single dom element or an array of elements and get back an object keyed by part name whose values are the dom elements corresponding to each part in that scope.
 * @param {?} elements
 * @return {?}
 */
tsickle_declare_module.durandal_widget.getParts = function(elements) {};

/**
 * (overrridable) Replace this to re-interpret the kind id as a module path. By default it does a lookup for any custom maps added through mapKind and then falls back to the path "durandal/widgets/{kind}/controller".
 * @param {?} kind
 * @return {string}
 */
tsickle_declare_module.durandal_widget.convertKindToModuleId = function(kind) {};

/**
 * (overridable) Replace this to re-interpret the kind id as a view id. The default does a lookup for any custom maps added through mapKind and then falls back to the path "durandal/widgets/{kind}/view".
 * @param {?} kind
 * @return {string}
 */
tsickle_declare_module.durandal_widget.convertKindToViewId = function(kind) {};
/**
 * @record
 * @struct
 */
function IEventSubscription() {}

/**
 * This function adding callback to event subscription
 * @param {?} thenCallback
 * @return {void}
 */
IEventSubscription.prototype.then = function(thenCallback) {};

/**
 * This function removing current subscription from event handlers
 * @return {void}
 */
IEventSubscription.prototype.off = function() {};
