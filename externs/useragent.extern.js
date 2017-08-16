/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/useragent/index.d.ts:
/** @const */
var Useragent = {};

/**
 * @constructor
 * @struct
 * The representation of a parsed user agent.
 * @param {string=} family The name of the browser
 * @param {string=} major Major version of the browser
 * @param {string=} minor Minor version of the browser
 * @param {string=} patch Patch version of the browser
 * @param {string=} source The actual user agent string
 */
Useragent.Agent = function(family, major, minor, patch, source) {};
 /** @type {string} */
Useragent.Agent.prototype.family;
 /** @type {string} */
Useragent.Agent.prototype.major;
 /** @type {string} */
Useragent.Agent.prototype.minor;
 /** @type {string} */
Useragent.Agent.prototype.patch;
 /** @type {string} */
Useragent.Agent.prototype.source;
 /** @type {!Useragent.OperatingSystem} */
Useragent.Agent.prototype.os;
 /** @type {!Useragent.Device} */
Useragent.Agent.prototype.device;

/**
 * Generates a string output of the parsed user agent.
 * @return {string}
 */
Useragent.Agent.prototype.toAgent = function() {};

/**
 * Generates a string output of the parser user agent and operating system.
 * @return {string}
 */
Useragent.Agent.prototype.toString = function() {};

/**
 * Outputs a compiled veersion number of the user agent.
 * @return {string}
 */
Useragent.Agent.prototype.toVersion = function() {};

/**
 * The representation of a parsed Operating System.
 * @return {{family: string, major: string, minor: string, patch: string, device: string, os: string}}
 */
Useragent.Agent.prototype.toJSON = function() {};

/**
 * @constructor
 * @struct
 * The representation of a parsed Operating System.
 * @param {string=} family The name of the os
 * @param {string=} major Major version of the os
 * @param {string=} minor Minor version of the os
 * @param {string=} patch Patch version of the os
 */
Useragent.OperatingSystem = function(family, major, minor, patch) {};
 /** @type {string} */
Useragent.OperatingSystem.prototype.family;
 /** @type {string} */
Useragent.OperatingSystem.prototype.major;
 /** @type {string} */
Useragent.OperatingSystem.prototype.minor;
 /** @type {string} */
Useragent.OperatingSystem.prototype.patch;

/**
 * Generates a stringified version of the Operating System.
 * @return {string}
 */
Useragent.OperatingSystem.prototype.toString = function() {};

/**
 * Generates the version of the Operating System.
 * @return {string}
 */
Useragent.OperatingSystem.prototype.toVersion = function() {};

/**
 * Outputs a JSON string of the OS, values are defaulted to undefined so they are not outputed in the stringify.
 * @return {{family: string, major: string, minor: string, patch: string}}
 */
Useragent.OperatingSystem.prototype.toJSON = function() {};

/**
 * @constructor
 * @struct
 * The representation of a parsed Device.
 * @param {string=} family The name of the device
 * @param {string=} major Major version of the device
 * @param {string=} minor Minor version of the device
 * @param {string=} patch Patch version of the device
 */
Useragent.Device = function(family, major, minor, patch) {};
 /** @type {string} */
Useragent.Device.prototype.family;
 /** @type {string} */
Useragent.Device.prototype.major;
 /** @type {string} */
Useragent.Device.prototype.minor;
 /** @type {string} */
Useragent.Device.prototype.patch;

/**
 * Generates a stringified version of the Device.
 * @return {string}
 */
Useragent.Device.prototype.toString = function() {};

/**
 * Generates the version of the Device.
 * @return {string}
 */
Useragent.Device.prototype.toVersion = function() {};

/**
 * Outputs a JSON string of the Device, values are defaulted to undefined so they are not outputed in the stringify.
 * @return {{family: string, major: string, minor: string, patch: string}}
 */
Useragent.Device.prototype.toJSON = function() {};

/**
 * Parses the user agent string with the generated parsers from the ua-parser project on google code.
 * @param {string=} userAgent The user agent string
 * @param {string=} jsAgent Optional UA from js to detect chrome frame
 * @return {!Useragent.Agent}
 */
Useragent.parse = function(userAgent, jsAgent) {};

/**
 * If you are doing a lot of lookups you might want to cache the results of the parsed user agent string instead, in memory.
 * @param {string=} userAgent The user agent string
 * @param {string=} jsAgent Optional UA from js to detect chrome frame
 * @return {!Useragent.Agent}
 */
Useragent.lookup = function(userAgent, jsAgent) {};

/**
 * Does a more inaccurate but more common check for useragents identification.
 * @param {string=} useragent The user agent
 * @return {!Useragent.Details}
 */
Useragent.is = function(useragent) {};
/**
 * @record
 * @struct
 */
Useragent.Details = function() {};
 /** @type {boolean} */
Useragent.Details.prototype.chrome;
 /** @type {boolean} */
Useragent.Details.prototype.firefox;
 /** @type {boolean} */
Useragent.Details.prototype.ie;
 /** @type {boolean} */
Useragent.Details.prototype.mobile_safari;
 /** @type {boolean} */
Useragent.Details.prototype.mozilla;
 /** @type {boolean} */
Useragent.Details.prototype.opera;
 /** @type {boolean} */
Useragent.Details.prototype.safari;
 /** @type {boolean} */
Useragent.Details.prototype.webkit;
 /** @type {boolean} */
Useragent.Details.prototype.android;
 /** @type {string} */
Useragent.Details.prototype.version;

/**
 * Transform a JSON object back to a valid userAgent string
 * @param {(string|{family: string, major: string, minor: string, patch: string, device: string, os: string})} obj A JSON object or stringified JSON object
 * @return {!Useragent.Agent}
 */
Useragent.fromJSON = function(obj) {};
 /** @type {number} */
Useragent.version;

/* TODO: ExportAssignment in  */