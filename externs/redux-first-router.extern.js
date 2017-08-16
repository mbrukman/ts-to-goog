/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/redux-first-router/index.d.ts:

/* TODO: ImportDeclaration in  */

/* TODO: ImportDeclaration in  */

/** @typedef {?} */
var Nullable;

/** @typedef {?} */
var StateGetter;

/** @typedef {string} */
var RouteString;

/** @typedef {?} */
var RouteThunk;
/**
 * @record
 * @struct
 */
function RouteObject() {}
 /** @type {string} */
RouteObject.prototype.path;
 /** @type {boolean} */
RouteObject.prototype.capitalizedWords;
 /** @type {?} */
RouteObject.prototype.thunk;
 /** @type {string} */
RouteObject.prototype.navKey;

/**
 * @param {string} param
 * @param {string=} key
 * @return {string}
 */
RouteObject.prototype.toPath = function(param, key) {};

/**
 * @param {string} path
 * @param {string=} key
 * @return {string}
 */
RouteObject.prototype.fromPath = function(path, key) {};

/** @typedef {(string|?)} */
var Route;
/**
 * @record
 * @struct
 */
function RoutesMap() {}

/* TODO: IndexSignature:  */
/**
 * @record
 * @struct
 */
function ReceivedAction() {}
 /** @type {string} */
ReceivedAction.prototype.type;
 /** @type {!Object} */
ReceivedAction.prototype.payload;
 /** @type {!Object} */
ReceivedAction.prototype.meta;
 /** @type {!Object} */
ReceivedAction.prototype.query;
 /** @type {string} */
ReceivedAction.prototype.search;
 /** @type {string} */
ReceivedAction.prototype.navKey;
/**
 * @record
 * @struct
 */
function ReceivedActionMeta() {}
 /** @type {string} */
ReceivedActionMeta.prototype.type;
 /** @type {!Object} */
ReceivedActionMeta.prototype.payload;
 /** @type {!Object} */
ReceivedActionMeta.prototype.query;
 /** @type {string} */
ReceivedActionMeta.prototype.navKey;
 /** @type {?} */
ReceivedActionMeta.prototype.meta;
/**
 * @record
 * @struct
 */
function HistoryData() {}
 /** @type {!Array<?>} */
HistoryData.prototype.entries;
 /** @type {number} */
HistoryData.prototype.index;
 /** @type {number} */
HistoryData.prototype.length;
/**
 * @record
 * @struct
 */
function Location() {}
 /** @type {string} */
Location.prototype.pathname;
 /** @type {string} */
Location.prototype.type;
 /** @type {!Object} */
Location.prototype.payload;
 /** @type {!Object} */
Location.prototype.query;
 /** @type {string} */
Location.prototype.search;
/**
 * @record
 * @struct
 */
function LocationState() {}
 /** @type {string} */
LocationState.prototype.pathname;
 /** @type {string} */
LocationState.prototype.type;
 /** @type {!Object} */
LocationState.prototype.payload;
 /** @type {!Object} */
LocationState.prototype.query;
 /** @type {string} */
LocationState.prototype.search;
 /** @type {?} */
LocationState.prototype.prev;
 /** @type {string} */
LocationState.prototype.kind;
 /** @type {?} */
LocationState.prototype.history;
 /** @type {?} */
LocationState.prototype.routesMap;
 /** @type {boolean} */
LocationState.prototype.hasSSR;
/**
 * @record
 * @struct
 */
function ActionMetaLocation() {}
 /** @type {?} */
ActionMetaLocation.prototype.current;
 /** @type {?} */
ActionMetaLocation.prototype.prev;
 /** @type {string} */
ActionMetaLocation.prototype.kind;
 /** @type {?} */
ActionMetaLocation.prototype.history;
/**
 * @record
 * @struct
 */
function NavigationAction() {}
 /** @type {string} */
NavigationAction.prototype.type;
 /** @type {string} */
NavigationAction.prototype.key;
 /** @type {string} */
NavigationAction.prototype.navKey;
 /** @type {string} */
NavigationAction.prototype.routeName;
 /** @type {!Array<?>} */
NavigationAction.prototype.actions;
 /** @type {?} */
NavigationAction.prototype.action;
 /** @type {!Object} */
NavigationAction.prototype.params;
 /** @type {!Object} */
NavigationAction.prototype.meta;
/**
 * @record
 * @struct
 */
function Meta() {}
 /** @type {?} */
Meta.prototype.location;
 /** @type {string} */
Meta.prototype.notFoundPath;
 /** @type {?} */
Meta.prototype.navigation;
 /** @type {!Object} */
Meta.prototype.query;
 /** @type {string} */
Meta.prototype.search;
/**
 * @record
 * @struct
 */
function Action() {}
 /** @type {string} */
Action.prototype.type;
 /** @type {!Object} */
Action.prototype.payload;
 /** @type {?} */
Action.prototype.meta;
 /** @type {!Object} */
Action.prototype.query;
 /** @type {string} */
Action.prototype.navKey;
/**
 * @record
 * @struct
 */
function HistoryLocation() {}
 /** @type {string} */
HistoryLocation.prototype.pathname;
 /** @type {string} */
HistoryLocation.prototype.search;

/** @typedef {string} */
var HistoryAction;

/** @typedef {?} */
var Listener;

/** @typedef {!Object} */
var ScrollBehavior;
/**
 * @record
 * @struct
 */
function Router() {}

/**
 * @param {!Object} action
 * @param {!Object} state
 * @return {!Object}
 */
Router.prototype.getStateForActionOriginal = function(action, state) {};

/**
 * @param {!Object} action
 * @param {!Object} state
 * @return {!Object}
 */
Router.prototype.getStateForAction = function(action, state) {};

/**
 * @param {!Object} state
 * @return {?}
 */
Router.prototype.getPathAndParamsForState = function(state) {};

/**
 * @param {string} path
 * @return {!Object}
 */
Router.prototype.getActionForPathAndParams = function(path) {};
/**
 * @record
 * @struct
 */
function Navigator() {}
 /** @type {?} */
Navigator.prototype.router;
/**
 * @record
 * @struct
 */
function Navigators() {}

/* TODO: IndexSignature:  */

/** @typedef {?} */
var SelectLocationState;

/** @typedef {?} */
var SelectTitleState;
/**
 * @record
 * @struct
 */
function QuerySerializer() {}

/**
 * @param {!Object} params
 * @return {string}
 */
QuerySerializer.prototype.stringify = function(params) {};

/**
 * @param {string} queryString
 * @return {!Object}
 */
QuerySerializer.prototype.parse = function(queryString) {};
/**
 * @record
 * @struct
 */
function NavigatorsConfig() {}
 /** @type {?} */
NavigatorsConfig.prototype.navigators;

/**
 * @param {?} navigators
 * @return {void}
 */
NavigatorsConfig.prototype.patchNavigators = function(navigators) {};

/**
 * @param {?} navigators
 * @param {!Object} action
 * @param {?} navigationAction
 * @param {(string|?)} route
 * @return {!Object}
 */
NavigatorsConfig.prototype.actionToNavigation = function(navigators, action, navigationAction, route) {};

/**
 * @template S
 * @param {?} navigators
 * @param {?} store
 * @param {?} routesMap
 * @param {!Object} action
 * @return {?}
 */
NavigatorsConfig.prototype.navigationToAction = function(navigators, store, routesMap, action) {};
/**
 * @record
 * @struct
 */
function Options() {}
 /** @type {(string|?)} */
Options.prototype.title;
 /** @type {(string|?)} */
Options.prototype.location;
 /** @type {string} */
Options.prototype.notFoundPath;
 /** @type {boolean} */
Options.prototype.scrollTop;
 /** @type {boolean} */
Options.prototype.initialDispatch;
 /** @type {?} */
Options.prototype.querySerializer;
 /** @type {?} */
Options.prototype.navigators;

/**
 * @template S
 * @param {?} dispatch
 * @param {?} getState
 * @return {void}
 */
Options.prototype.onBeforeChange = function(dispatch, getState) {};

/**
 * @template S
 * @param {?} dispatch
 * @param {?} getState
 * @return {void}
 */
Options.prototype.onAfterChange = function(dispatch, getState) {};

/**
 * @template S
 * @param {?} dispatch
 * @param {?} getState
 * @return {void}
 */
Options.prototype.onBackNext = function(dispatch, getState) {};

/**
 * @param {?} history
 * @return {!Object}
 */
Options.prototype.restoreScroll = function(history) {};

/** @typedef {!Object} */
var Params;

/** @typedef {!Object} */
var Payload;

/** @typedef {?} */
var ScrollUpdater;
 /** @type {string} */
var NOT_FOUND;

/**
 * @param {?} action
 * @param {?} routesMap
 * @return {string}
 */
function actionToPath(action, routesMap) {}

/**
 * @return {void}
 */
function back() {}

/**
 * @param {number} n
 * @return {boolean}
 */
function canGo(n) {}

/**
 * @return {boolean}
 */
function canGoBack() {}

/**
 * @return {boolean}
 */
function canGoForward() {}

/**
 * @param {?} history
 * @param {?} routesMap
 * @param {?=} options
 * @return {?}
 */
function connectRoutes(history, routesMap, options) {}

/**
 * @param {number} n
 * @return {void}
 */
function go(n) {}

/**
 * @return {?}
 */
function history() {}

/**
 * @param {?} action
 * @return {boolean}
 */
function isLocationAction(action) {}

/**
 * @return {void}
 */
function next() {}

/**
 * @return {(string|void)}
 */
function nextPath() {}

/**
 * @param {string} pathname
 * @param {?} routesMap
 * @return {?}
 */
function pathToAction(pathname, routesMap) {}

/**
 * @return {(string|void)}
 */
function prevPath() {}

/**
 * @param {string} pathname
 * @return {void}
 */
function push(pathname) {}

/**
 * @param {?} action
 * @return {?}
 */
function redirect(action) {}

/**
 * @param {string} pathname
 * @return {void}
 */
function replace(pathname) {}

/**
 * @return {(void|!Object)}
 */
function scrollBehavior() {}

/**
 * @param {?} action
 * @param {string} kind
 * @return {?}
 */
function setKind(action, kind) {}

/**
 * @return {void}
 */
function updateScroll() {}
