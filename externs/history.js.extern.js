/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/history.js/index.d.ts:
/**
 * @record
 * @struct
 */
function HistoryAdapter() {}

/**
 * @param {?} element
 * @param {string} event
 * @param {function(): void} callback
 * @return {void}
 */
HistoryAdapter.prototype.bind = function(element, event, callback) {};

/**
 * @param {?} element
 * @param {string} event
 * @return {void}
 */
HistoryAdapter.prototype.trigger = function(element, event) {};

/**
 * @param {function(): void} callback
 * @return {void}
 */
HistoryAdapter.prototype.onDomLoad = function(callback) {};
/**
 * @record
 * @struct
 */
function Historyjs() {}
 /** @type {boolean} */
Historyjs.prototype.enabled;
 /** @type {!HistoryAdapter} */
Historyjs.prototype.Adapter;
 /** @type {!HistoryOptions} */
Historyjs.prototype.options;
 /** @type {{hashChange: ?, pushState: ?}} */
Historyjs.prototype.emulated;

/**
 * @param {?} data
 * @param {string} title
 * @param {string} url
 * @param {boolean=} queue
 * @return {boolean}
 */
Historyjs.prototype.pushState = function(data, title, url, queue) {};

/**
 * @param {?} data
 * @param {string} title
 * @param {string} url
 * @param {boolean=} queue
 * @return {boolean}
 */
Historyjs.prototype.replaceState = function(data, title, url, queue) {};

/**
 * @param {boolean=} friendly
 * @param {boolean=} create
 * @return {!HistoryState}
 */
Historyjs.prototype.getState = function(friendly, create) {};

/**
 * @param {!HistoryState} passedState
 * @return {string}
 */
Historyjs.prototype.getStateId = function(passedState) {};

/**
 * @param {string} id
 * @return {!HistoryState}
 */
Historyjs.prototype.getStateById = function(id) {};

/**
 * @param {number} index
 * @return {!HistoryState}
 */
Historyjs.prototype.getStateByIndex = function(index) {};

/**
 * @return {number}
 */
Historyjs.prototype.getCurrentIndex = function() {};

/**
 * @return {string}
 */
Historyjs.prototype.getHash = function() {};

/**
 * @return {void}
 */
Historyjs.prototype.back = function() {};

/**
 * @return {void}
 */
Historyjs.prototype.forward = function() {};

/**
 * @param {!Number} x
 * @return {void}
 */
Historyjs.prototype.go = function(x) {};

/**
 * @param {...?} messages
 * @return {void}
 */
Historyjs.prototype.log = function(messages) {};

/**
 * @param {...?} messages
 * @return {void}
 */
Historyjs.prototype.debug = function(messages) {};

/**
 * History.setTitle(title)
 * Applies the title to the document
 * @param {!HistoryState} newState
 * @return {boolean}
 */
Historyjs.prototype.setTitle = function(newState) {};

/**
 * @return {!Historyjs}
 */
Historyjs.prototype.clearQueue = function() {};

/**
 * @return {void}
 */
Historyjs.prototype.clearAllIntervals = function() {};

/**
 * @return {string}
 */
Historyjs.prototype.getRootUrl = function() {};
/**
 * @record
 * @struct
 */
function HistoryState() {}
 /** @type {?} */
HistoryState.prototype.data;
 /** @type {string} */
HistoryState.prototype.title;
 /** @type {string} */
HistoryState.prototype.url;
 /** @type {string} */
HistoryState.prototype.hashedUrl;
 /** @type {string} */
HistoryState.prototype.cleanUrl;
/**
 * @record
 * @struct
 */
function HistoryOptions() {}
 /** @type {number} */
HistoryOptions.prototype.hashChangeInterval;
 /** @type {number} */
HistoryOptions.prototype.safariPollInterval;
 /** @type {number} */
HistoryOptions.prototype.doubleCheckInterval;
 /** @type {boolean} */
HistoryOptions.prototype.disableSuid;
 /** @type {number} */
HistoryOptions.prototype.storeInterval;
 /** @type {number} */
HistoryOptions.prototype.busyDelay;
 /** @type {boolean} */
HistoryOptions.prototype.debug;
 /** @type {string} */
HistoryOptions.prototype.initialTitle;
 /** @type {boolean} */
HistoryOptions.prototype.html4Mode;
 /** @type {number} */
HistoryOptions.prototype.delayInit;
