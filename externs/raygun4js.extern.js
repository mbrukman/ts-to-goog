/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/raygun4js/index.d.ts:
/**
 * @record
 * @struct
 */
function TracekitStackTrace() {}
 /** @type {string} */
TracekitStackTrace.prototype.message;
 /** @type {string} */
TracekitStackTrace.prototype.mode;
 /** @type {string} */
TracekitStackTrace.prototype.name;
 /** @type {!Array<!TracekitStack>} */
TracekitStackTrace.prototype.stack;
 /** @type {string} */
TracekitStackTrace.prototype.url;
 /** @type {string} */
TracekitStackTrace.prototype.useragent;
/**
 * @record
 * @struct
 */
function TracekitStack() {}
 /** @type {number} */
TracekitStack.prototype.column;
 /** @type {?} */
TracekitStack.prototype.context;
 /** @type {string} */
TracekitStack.prototype.func;
 /** @type {number} */
TracekitStack.prototype.line;
 /** @type {string} */
TracekitStack.prototype.url;
/**
 * @record
 * @struct
 */
function RaygunStackTrace() {}
 /** @type {number} */
RaygunStackTrace.prototype.LineNumber;
 /** @type {number} */
RaygunStackTrace.prototype.ColumnNumber;
 /** @type {string} */
RaygunStackTrace.prototype.ClassName;
 /** @type {string} */
RaygunStackTrace.prototype.FileName;
 /** @type {string} */
RaygunStackTrace.prototype.MethodName;
/**
 * @record
 * @struct
 */
function RaygunOptions() {}
 /** @type {boolean} */
RaygunOptions.prototype.allowInsecureSubmissions;
 /** @type {boolean} */
RaygunOptions.prototype.ignoreAjaxAbort;
 /** @type {boolean} */
RaygunOptions.prototype.ignoreAjaxError;
 /** @type {boolean} */
RaygunOptions.prototype.disableAnonymousUserTracking;
 /** @type {boolean} */
RaygunOptions.prototype.disableErrorTracking;
 /** @type {boolean} */
RaygunOptions.prototype.disablePulse;
 /** @type {!Array<(string|!RegExp)>} */
RaygunOptions.prototype.excludedHostnames;
 /** @type {!Array<(string|!RegExp)>} */
RaygunOptions.prototype.excludedUserAgents;
 /** @type {number} */
RaygunOptions.prototype.pulseMaxVirtualPageDuration;
 /** @type {boolean} */
RaygunOptions.prototype.pulseIgnoreUrlCasing;
 /** @type {string} */
RaygunOptions.prototype.apiUrl;
 /** @type {boolean} */
RaygunOptions.prototype.wrapAsynchronousCallbacks;
 /** @type {boolean} */
RaygunOptions.prototype.debugMode;
 /** @type {boolean} */
RaygunOptions.prototype.ignore3rdPartyErrors;
 /** @type {string} */
RaygunOptions.prototype.apiEndpoint;
 /** @type {string} */
RaygunOptions.prototype.from;
/**
 * @record
 * @struct
 */
function RaygunPayload() {}
 /** @type {!Date} */
RaygunPayload.prototype.OccurredOn;
 /** @type {{Error: {ClassName: string, Message: string, StackTrace: !Array<!RaygunStackTrace>}, Environment: {UtcOffset: number, User-Language: string, Document-Mode: number, Browser-Width: number, Browser-Height: number, Screen-Width: number, Screen-Height: number, Color-Depth: number, Browser: string, Browser-Name: string, Browser-Version: string, Platform: string}, Client: {Name: string, Version: string}, UserCustomData: ?, Tags: !Array<string>, Request: {Url: string, QueryString: string, Headers: {User-Agent: string, Referer: string, Host: string}}, Version: string, User: {Identifier: string, IsAnonymous: boolean, Email: string, FullName: string, FirstName: string, UUID: ?}, GroupingKey: string}} */
RaygunPayload.prototype.Details;
/**
 * @record
 * @struct
 */
function RaygunStatic() {}

/**
 * Prevents Raygun from overwriting anything bound to `window.Raygun`.
 * @return {!RaygunStatic}
 */
RaygunStatic.prototype.noConflict = function() {};

/**
 * Creates a new Raygun object. Allows the sending of errors to different applications.
 * @return {!RaygunStatic}
 */
RaygunStatic.prototype.constructNewRaygun = function() {};

/**
 * Configures the Raygun provider.
 * @param {string} apiKey
 * @param {!RaygunOptions=} options
 * @param {?=} customdata
 * @return {!RaygunStatic}
 */
RaygunStatic.prototype.init = function(apiKey, options, customdata) {};

/**
 * Attaches custom data to any errors sent to Raygun.
 * @param {?} customdata
 * @return {!RaygunStatic}
 */
RaygunStatic.prototype.withCustomData = function(customdata) {};

/**
 * Allows errors to be filtered by tag in the Raygun Dashboard.
 * @param {!Array<string>} tags
 * @return {!RaygunStatic}
 */
RaygunStatic.prototype.withTags = function(tags) {};

/**
 * Attaches to the `window.onerror` handler. Enables unhandled errors to be automatically tracked.
 * @return {!RaygunStatic}
 */
RaygunStatic.prototype.attach = function() {};

/**
 * Detaches the handler from the window.onerror method. Unhandled errors will no longer be tracked.
 * @return {!RaygunStatic}
 */
RaygunStatic.prototype.detach = function() {};

/**
 * Sends an error/exception to the Raygun Api.
 * @param {!Error} ex
 * @param {?=} customData
 * @param {!Array<string>=} tags
 * @return {!RaygunStatic}
 */
RaygunStatic.prototype.send = function(ex, customData, tags) {};

/**
 * Provides additional information about the current user.
 * @param {string} user
 * @param {boolean=} isAnonymous
 * @param {string=} email
 * @param {string=} fullName
 * @param {string=} firstName
 * @param {string=} uuid
 * @return {!RaygunStatic}
 */
RaygunStatic.prototype.setUser = function(user, isAnonymous, email, fullName, firstName, uuid) {};

/**
 * Resets the information about the current user.
 * @return {void}
 */
RaygunStatic.prototype.resetAnonymousUser = function() {};

/**
 * Allows errors to be filtered by version in the Raygun Dashboard. Versions should be in the format `x.x.x`
 * @param {string} version
 * @return {!RaygunStatic}
 */
RaygunStatic.prototype.setVersion = function(version) {};

/**
 * Whether caught errors should be saved in Local Storage when there is no network activity. Saved errors will be send when another error occurs, and activity is regained. Disabled by default.
 * @param {boolean} enableOffline
 * @return {!RaygunStatic}
 */
RaygunStatic.prototype.saveIfOffline = function(enableOffline) {};

/**
 * Blacklist keys to prevent their values from being sent to Raygun.
 * @param {!Array<(string|!RegExp)>} filteredKeys
 * @return {!RaygunStatic}
 */
RaygunStatic.prototype.filterSensitiveData = function(filteredKeys) {};

/**
 * Change the scope at which filters are applied. Defaults to `customData` by default.
 * @param {string} scope
 * @return {!RaygunStatic}
 */
RaygunStatic.prototype.setFilterScope = function(scope) {};

/**
 * Whitelist damains which should transmit errors to Raygun.
 * @param {!Array<string>} whitelist
 * @return {!RaygunStatic}
 */
RaygunStatic.prototype.whitelistCrossOriginDomains = function(whitelist) {};

/**
 * Executed before the payload is sent. If a truthy object is returned, Raygun will attempt to use that as the payload. Raygun will abort the send if `false` is returned.
 * @param {function(!RaygunPayload): (boolean|!RaygunPayload)} callback
 * @return {!RaygunStatic}
 */
RaygunStatic.prototype.onBeforeSend = function(callback) {};

/**
 * Overrides the default automatic grouping and instead group errors together by the string returned by the callback.
 * @param {function(!RaygunPayload, !TracekitStackTrace, ?): (string|void)} callback
 * @return {!RaygunStatic}
 */
RaygunStatic.prototype.groupingKey = function(callback) {};

/**
 * @param {function(!XMLHttpRequest): void} callback
 * @return {!RaygunStatic}
 */
RaygunStatic.prototype.onBeforeXHR = function(callback) {};

/**
 * @param {function(!XMLHttpRequest): void} callback
 * @return {!RaygunStatic}
 */
RaygunStatic.prototype.onAfterSend = function(callback) {};

/**
 * @return {void}
 */
RaygunStatic.prototype.endSession = function() {};

/**
 * Track Single Page Application route events.
 * @param {string} type
 * @param {{path: string}} options
 * @return {void}
 */
RaygunStatic.prototype.trackEvent = function(type, options) {};

/**
 * Records a manual breadcrumb with the given message and metadata passed.
 * @param {string} message
 * @param {?=} metadata
 * @return {void}
 */
RaygunStatic.prototype.recordBreadcrumb = function(message, metadata) {};

/**
 * Enables all breadcrumbs level or a type can be passed which will enable only that passed one.
 * @param {string=} type
 * @return {void}
 */
RaygunStatic.prototype.enableAutoBreadcrumbs = function(type) {};

/**
 * Disables all breadcrumbs or a type can be passed to disable only that one.
 * @param {string=} type
 * @return {void}
 */
RaygunStatic.prototype.disableAutoBreadcrumbs = function(type) {};

/**
 * Pass "breadcrumbsLevel" alongside a valid breadcrumbs level to set the current level. Passing options other than "breadcrumbsLevel" will set xhr hosts to ignore being
 * @param {string=} option
 * @param {string=} value
 * @return {void}
 */
RaygunStatic.prototype.setBreadcrumbOption = function(option, value) {};
/**
 * @record
 * @struct
 */
function RaygunV2UserDetails() {}
 /** @type {string} */
RaygunV2UserDetails.prototype.identifier;
 /** @type {string} */
RaygunV2UserDetails.prototype.isAnonymous;
 /** @type {string} */
RaygunV2UserDetails.prototype.email;
 /** @type {string} */
RaygunV2UserDetails.prototype.fullName;
 /** @type {string} */
RaygunV2UserDetails.prototype.firstName;
 /** @type {string} */
RaygunV2UserDetails.prototype.uuid;
/**
 * @record
 * @struct
 */
function RaygunV2() {}

/* TODO: CallSignature:  */

/* TODO: CallSignature:  */

/* TODO: CallSignature:  */

/* TODO: CallSignature:  */

/* TODO: CallSignature:  */

/* TODO: CallSignature:  */

/* TODO: CallSignature:  */

/* TODO: CallSignature:  */

/* TODO: CallSignature:  */

/* TODO: CallSignature:  */

/* TODO: CallSignature:  */

/* TODO: CallSignature:  */

/* TODO: CallSignature:  */

/* TODO: CallSignature:  */

/* TODO: CallSignature:  */

/* TODO: CallSignature:  */

/* TODO: CallSignature:  */

/* TODO: CallSignature:  */

/* TODO: CallSignature:  */

/* TODO: CallSignature:  */

/* TODO: CallSignature:  */

/* TODO: CallSignature:  */

/* TODO: CallSignature:  */

/* TODO: CallSignature:  */

/* TODO: CallSignature:  */

/* TODO: CallSignature:  */
 /** @type {!RaygunStatic} */
Window.prototype.Raygun;
 /** @type {!RaygunStatic} */
var Raygun;
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "raygun4js"
/** @const */
tsickle_declare_module.raygun_js = {};

/* TODO: ExportAssignment in tsickle_declare_module.raygun_js */
