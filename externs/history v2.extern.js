/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/history v2/index.d.ts:

/* TODO: NamespaceExportDeclaration in  */

/** @typedef {string} */
var Action;

/** @typedef {?} */
var BeforeUnloadHook;

/** @typedef {?} */
var CreateHistory;

/** @typedef {?} */
var CreateHistoryEnhancer;
/**
 * @record
 * @struct
 */
function History() {}
 /** @type {?} */
History.prototype.getCurrentLocation;

/**
 * @param {?} hook
 * @return {?}
 */
History.prototype.listenBefore = function(hook) {};

/**
 * @param {?} listener
 * @return {?}
 */
History.prototype.listen = function(listener) {};

/**
 * @param {?} location
 * @return {void}
 */
History.prototype.transitionTo = function(location) {};

/**
 * @param {(string|?)} path
 * @return {void}
 */
History.prototype.push = function(path) {};

/**
 * @param {(string|?)} path
 * @return {void}
 */
History.prototype.replace = function(path) {};

/**
 * @param {number} n
 * @return {void}
 */
History.prototype.go = function(n) {};

/**
 * @return {void}
 */
History.prototype.goBack = function() {};

/**
 * @return {void}
 */
History.prototype.goForward = function() {};

/**
 * @return {string}
 */
History.prototype.createKey = function() {};

/**
 * @param {(string|?)} path
 * @return {string}
 */
History.prototype.createPath = function(path) {};

/**
 * @param {(string|?)} path
 * @return {string}
 */
History.prototype.createHref = function(path) {};

/**
 * @deprecated use a location descriptor instead
 * @param {(string|?)|string=} path
 * @param {string|?=} action_or_state
 * @param {string=} key_or_action
 * @param {string=} key
 * @return {?}
 */
History.prototype.createLocation = function(path, action_or_state, key_or_action, key) {};

/**
 * @deprecated use location.key to save state instead
 * @param {?} state
 * @param {string} path
 * @return {void}
 */
History.prototype.pushState = function(state, path) {};

/**
 * @deprecated use location.key to save state instead
 * @param {?} state
 * @param {string} path
 * @return {void}
 */
History.prototype.replaceState = function(state, path) {};

/**
 * @deprecated use location.key to save state instead
 * @param {?} state
 * @return {void}
 */
History.prototype.setState = function(state) {};

/**
 * @deprecated use listenBefore instead
 * @param {?} hook
 * @return {void}
 */
History.prototype.registerTransitionHook = function(hook) {};

/**
 * @deprecated use the callback returned from listenBefore instead
 * @param {?} hook
 * @return {void}
 */
History.prototype.unregisterTransitionHook = function(hook) {};

/** @typedef {?} */
var HistoryOptions;

/** @typedef {?} */
var Location;

/** @typedef {?} */
var LocationDescriptorObject;

/** @typedef {(string|?)} */
History.LocationDescriptor;

/** @typedef {string} */
History.LocationKey;

/** @typedef {?} */
History.LocationListener;

/** @typedef {?} */
History.LocationState;

/** @typedef {string} */
History.Path;

/** @typedef {string} */
History.Pathname;

/** @typedef {?} */
History.Query;

/** @typedef {string} */
History.QueryString;

/** @typedef {string} */
History.Search;

/** @typedef {?} */
History.TransitionHook;

/** @typedef {string} */
History.Href;

/** @typedef {(string|?)} */
var LocationDescriptor;

/** @typedef {string} */
var LocationKey;

/** @typedef {?} */
var LocationListener;

/** @typedef {?} */
var LocationState;

/** @typedef {string} */
var Path;

/** @typedef {string} */
var Pathname;

/** @typedef {?} */
var Query;

/** @typedef {string} */
var QueryString;

/** @typedef {string} */
var Search;

/** @typedef {?} */
var TransitionHook;

/** @typedef {string} */
var Href;
/**
 * @record
 * @struct
 */
function HistoryBeforeUnload() {}

/**
 * @param {?} hook
 * @return {?}
 */
HistoryBeforeUnload.prototype.listenBeforeUnload = function(hook) {};
/**
 * @record
 * @struct
 */
function HistoryQueries() {}

/**
 * @param {?} state
 * @param {string} pathname
 * @param {?=} query
 * @return {void}
 */
HistoryQueries.prototype.pushState = function(state, pathname, query) {};

/**
 * @param {?} state
 * @param {string} pathname
 * @param {?=} query
 * @return {void}
 */
HistoryQueries.prototype.replaceState = function(state, pathname, query) {};

/**
 * @param {string} path
 * @param {?=} query
 * @return {string}
 */
HistoryQueries.prototype.createPath = function(path, query) {};

/**
 * @param {string} path
 * @param {?=} query
 * @return {string}
 */
HistoryQueries.prototype.createHref = function(path, query) {};
/**
 * @record
 * @struct
 */
function Module() {}
 /** @type {?} */
Module.prototype.createHistory;
 /** @type {?} */
Module.prototype.createHashHistory;
 /** @type {?} */
Module.prototype.createMemoryHistory;
 /** @type {?} */
Module.prototype.actions;

/**
 * @param {string=} path
 * @param {?=} state
 * @param {string=} action
 * @param {string=} key
 * @return {?}
 */
Module.prototype.createLocation = function(path, state, action, key) {};

/**
 * @template T
 * @param {?} createHistory
 * @return {?}
 */
Module.prototype.useBasename = function(createHistory) {};

/**
 * @template T
 * @param {?} createHistory
 * @return {?}
 */
Module.prototype.useBeforeUnload = function(createHistory) {};

/**
 * @template T
 * @param {?} createHistory
 * @return {?}
 */
Module.prototype.useQueries = function(createHistory) {};

/* TODO: ExportDeclaration in  */

/* TODO: ExportDeclaration in  */

/* TODO: ExportDeclaration in  */

/* TODO: ExportDeclaration in  */

/* TODO: ExportDeclaration in  */

/* TODO: ExportDeclaration in  */

/* TODO: ExportDeclaration in  */

/* TODO: ImportDeclaration in  */

/* TODO: ExportDeclaration in  */
