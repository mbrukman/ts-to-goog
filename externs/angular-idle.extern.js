/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/angular-idle/index.d.ts:

/* TODO: ImportDeclaration in  */
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "angular"
/** @const */
tsickle_declare_module.angular.idle = {};
/**
 * @extends {angular.IServiceProvider}
 * @record
 * @struct
 */
tsickle_declare_module.angular.idle.ITitleProvider = function() {};

/**
 * Enables or disables the Title functionality.
 * 
 * @param {boolean} enabled Boolean, default is true.
 * @return {void}
 */
tsickle_declare_module.angular.idle.ITitleProvider.prototype.enabled = function(enabled) {};
/**
 * @record
 * @struct
 */
tsickle_declare_module.angular.idle.ITitleService = function() {};

/**
 * Allows the title functionality to be enabled or disabled on the fly.
 * @param {boolean} enabled
 * @return {void}
 */
tsickle_declare_module.angular.idle.ITitleService.prototype.setEnabled = function(enabled) {};

/**
 * Returns whether or not the title functionality has been enabled.
 * @return {boolean}
 */
tsickle_declare_module.angular.idle.ITitleService.prototype.isEnabled = function() {};

/**
 * Will store val as the "original" title of the document.
 * 
 * Tracking the original title is important when restoring the title after displaying, for example, the idle warning message.
 * Returns the "original" title value that has been previously set.
 * 
 * Tracking the original title is important when restoring the title after displaying, for example, the idle warning message.
 * @param {string=} val
 * @return {void|string}
 */
tsickle_declare_module.angular.idle.ITitleService.prototype.original = function(val) {};

/**
 * Changes the actual title of the document.
 * Returns the current document title.
 * @param {string=} val
 * @return {void|string}
 */
tsickle_declare_module.angular.idle.ITitleService.prototype.value = function(val) {};

/**
 * If overwrite is false or unspecified, updates the "original" title with the current document title
 * if it has not already been stored. If overwrite is true, the current document title is stored regardless.
 * @param {boolean=} overwrite
 * @return {void}
 */
tsickle_declare_module.angular.idle.ITitleService.prototype.store = function(overwrite) {};

/**
 * Sets the title to the original value (if it was stored or set previously).
 * @return {void}
 */
tsickle_declare_module.angular.idle.ITitleService.prototype.restore = function() {};

/**
 * Sets the text to use as the message displayed when the user is idle.
 * Gets the text to use as the message displayed when the user is idle.
 * @param {string=} val
 * @return {void|string}
 */
tsickle_declare_module.angular.idle.ITitleService.prototype.idleMessage = function(val) {};

/**
 * Sets the text to use as the message displayed when the user is timed out.
 * Gets the text to use as the message displayed when the user is timed out.
 * @param {string=} val
 * @return {void|string}
 */
tsickle_declare_module.angular.idle.ITitleService.prototype.timedOutMessage = function(val) {};

/**
 * Stores the original title if it hasn't been already, determines the number minutes, seconds,
 * and total seconds from countdown, and displays the idleMessage with the aforementioned values interpolated.
 * @param {number} countdown
 * @return {void}
 */
tsickle_declare_module.angular.idle.ITitleService.prototype.setAsIdle = function(countdown) {};

/**
 * Stores the original title if it hasn't been already, and displays the timedOutMessage.
 * @return {void}
 */
tsickle_declare_module.angular.idle.ITitleService.prototype.setAsTimedOut = function() {};
/**
 * @extends {angular.IServiceProvider}
 * @record
 * @struct
 */
tsickle_declare_module.angular.idle.IKeepAliveProvider = function() {};

/**
 * If configured, options will be used to issue a request using $http.
 * If the value is null, no HTTP request will be issued.
 * You can specify a string, which it will assume to be a URL to a simple GET request.
 * Otherwise, you can use the same options $http takes. However, cache will always be false.
 * 
 * @param {(string|!angular.IRequestConfig)} value May be string or IRequestConfig, default is null.
 * @return {void}
 */
tsickle_declare_module.angular.idle.IKeepAliveProvider.prototype.http = function(value) {};

/**
 * This specifies how often the keepalive event is triggered and the
 * HTTP request is issued.
 * 
 * @param {number} seconds Integer, default is 10 minutes. Must be greater than 0.
 * @return {void}
 */
tsickle_declare_module.angular.idle.IKeepAliveProvider.prototype.interval = function(seconds) {};
/**
 * @record
 * @struct
 */
tsickle_declare_module.angular.idle.IKeepAliveService = function() {};

/**
 * Starts pinging periodically until stop() is called.
 * @return {void}
 */
tsickle_declare_module.angular.idle.IKeepAliveService.prototype.start = function() {};

/**
 * Stops pinging.
 * @return {void}
 */
tsickle_declare_module.angular.idle.IKeepAliveService.prototype.stop = function() {};

/**
 * Performs one ping only.
 * @return {void}
 */
tsickle_declare_module.angular.idle.IKeepAliveService.prototype.ping = function() {};

/**
 * Changes the interval value at runtime.
 * You will need to restart the pinging process by calling start() manually for the changes to be reflected.
 * @param {number} seconds
 * @return {void}
 */
tsickle_declare_module.angular.idle.IKeepAliveService.prototype.setInterval = function(seconds) {};
/**
 * @extends {angular.IServiceProvider}
 * @record
 * @struct
 */
tsickle_declare_module.angular.idle.IIdleProvider = function() {};

/**
 * Specifies the DOM events the service will watch to reset the idle timeout.
 * Multiple events should be separated by a space.
 * 
 * @param {string} events string, default 'mousemove keydown DOMMouseScroll mousewheel mousedown'
 * @return {void}
 */
tsickle_declare_module.angular.idle.IIdleProvider.prototype.interrupt = function(events) {};

/**
 * The idle timeout duration in seconds. After this amount of time passes without the user
 * performing an action that triggers one of the watched DOM events, the user is considered
 * idle.
 * 
 * @param {number} seconds integer, default is 20min
 * @return {void}
 */
tsickle_declare_module.angular.idle.IIdleProvider.prototype.idle = function(seconds) {};

/**
 * The amount of time the user has to respond (in seconds) before they have been considered
 * timed out.
 * 
 * @param {number} seconds integer, default is 30s
 * @return {void}
 */
tsickle_declare_module.angular.idle.IIdleProvider.prototype.timeout = function(seconds) {};

/**
 * When true or idle, user activity will automatically interrupt the warning countdown
 * and reset the idle state. If false or off, you will need to manually call watch()
 * when you want to start watching for idleness again. If notIdle, user activity will
 * only automatically interrupt if the user is not yet idle.
 * 
 * @param {(string|boolean)} enabled boolean or string, possible values: off/false, idle/true, or notIdle
 * @return {void}
 */
tsickle_declare_module.angular.idle.IIdleProvider.prototype.autoResume = function(enabled) {};

/**
 * When true, the Keepalive service is automatically stopped and started as needed.
 * 
 * @param {boolean} enabled boolean, default is true
 * @return {void}
 */
tsickle_declare_module.angular.idle.IIdleProvider.prototype.keepalive = function(enabled) {};
/**
 * @record
 * @struct
 */
tsickle_declare_module.angular.idle.IIdleService = function() {};

/**
 * Gets the current idle value
 * @return {number}
 */
tsickle_declare_module.angular.idle.IIdleService.prototype.getIdle = function() {};

/**
 * Gets the current timeout value
 * @return {number}
 */
tsickle_declare_module.angular.idle.IIdleService.prototype.getTimeout = function() {};

/**
 * Updates the idle value (see IdleProvider.idle()) and
 * restarts the watch if its running.
 * @param {number} idle
 * @return {void}
 */
tsickle_declare_module.angular.idle.IIdleService.prototype.setIdle = function(idle) {};

/**
 * Updates the timeout value (see IdleProvider.timeout()) and
 * restarts the watch if its running.
 * @param {number} timeout
 * @return {void}
 */
tsickle_declare_module.angular.idle.IIdleService.prototype.setTimeout = function(timeout) {};

/**
 * Whether user has timed out (meaning idleDuration + timeout has passed without any activity)
 * @return {boolean}
 */
tsickle_declare_module.angular.idle.IIdleService.prototype.isExpired = function() {};

/**
 * Whether or not the watch() has been called and it is watching for idleness.
 * @return {boolean}
 */
tsickle_declare_module.angular.idle.IIdleService.prototype.running = function() {};

/**
 * Whether or not the user appears to be idle.
 * @return {boolean}
 */
tsickle_declare_module.angular.idle.IIdleService.prototype.idling = function() {};

/**
 * Starts watching for idleness, or resets the idle/warning state and continues watching.
 * @return {void}
 */
tsickle_declare_module.angular.idle.IIdleService.prototype.watch = function() {};

/**
 * Stops watching for idleness, and resets the idle/warning state.
 * @return {void}
 */
tsickle_declare_module.angular.idle.IIdleService.prototype.unwatch = function() {};

/**
 * Manually trigger the idle interrupt that normally occurs during user activity.
 * @return {?}
 */
tsickle_declare_module.angular.idle.IIdleService.prototype.interrupt = function() {};
