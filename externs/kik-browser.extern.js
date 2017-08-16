/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/kik-browser/index.d.ts:
/**
 * @record
 * @struct
 */
function Kik() {}
 /** @type {boolean} */
Kik.prototype.enabled;
 /** @type {!KikMessage} */
Kik.prototype.message;
 /** @type {string} */
Kik.prototype.linkData;
 /** @type {{show: function(): void, hide: function(): void, isEnabled: function(): boolean}} */
Kik.prototype.formHelpers;
 /** @type {{enableGoogleAnalytics: ?}} */
Kik.prototype.metrics;
 /** @type {{get: ?, getFromCamera: ?, getFromGallery: ?, saveToGallery: function(string, function(boolean): void): void}} */
Kik.prototype.photo;
 /** @type {?} */
Kik.prototype.picker;
 /** @type {{background: boolean, back: function(function(): (boolean|void)): void, unbindBack: function(function(): (boolean|void)): void, on: function(string, function(): void): void, off: function(string, function(): void): void, once: function(string, function(): void): void, trigger: function(string, ?): void, getOrientationLock: function(): string, setOrientationLock: ?, statusBar: function(boolean): void, backlightTimeout: function(boolean): void}} */
Kik.prototype.browser;
 /** @type {{platform: {os: {name: string, version: string}, browser: {name: string, version: string}, version: {name: string, version: string}}}} */
Kik.prototype.utils;

/**
 * @param {string|!KikMessage} user_or_message
 * @param {!KikMessage=} message
 * @return {void}
 */
Kik.prototype.send = function(user_or_message, message) {};

/**
 * @param {function(): void} callback
 * @return {void}
 */
Kik.prototype.ready = function(callback) {};

/**
 * @return {boolean}
 */
Kik.prototype.hasPermission = function() {};

/**
 * @param {string} url
 * @param {boolean=} popupMode
 * @return {void}
 */
Kik.prototype.open = function(url, popupMode) {};

/**
 * @param {string} property
 * @param {function(): void} eventHandler
 * @return {void}
 */
Kik.prototype.on = function(property, eventHandler) {};

/**
 * @param {string} property
 * @param {function(): void} eventHandler
 * @return {void}
 */
Kik.prototype.off = function(property, eventHandler) {};

/**
 * @param {string} property
 * @param {function(): void} eventHandler
 * @return {void}
 */
Kik.prototype.once = function(property, eventHandler) {};

/**
 * @param {string} property
 * @param {?=} data
 * @return {void}
 */
Kik.prototype.trigger = function(property, data) {};

/**
 * @param {function(!KikUser): void} callback
 * @return {void}
 */
Kik.prototype.getUser = function(callback) {};

/**
 * @param {function(string): void} callback
 * @return {void}
 */
Kik.prototype.getAnonymousUser = function(callback) {};

/**
 * @param {string} data
 * @param {function(string, string, string): void} callback
 * @return {void}
 */
Kik.prototype.sign = function(data, callback) {};

/**
 * @param {string} data
 * @param {function(string, string, string): void} callback
 * @return {void}
 */
Kik.prototype.anonymousSign = function(data, callback) {};

/**
 * @param {string} username
 * @return {void}
 */
Kik.prototype.openConversation = function(username) {};

/**
 * @param {string} username
 * @return {void}
 */
Kik.prototype.showProfile = function(username) {};

/**
 * @param {!KikPickUsersOptions|function(!Array<!KikUser>): void} options_or_callback
 * @param {function(!Array<!KikUser>): void=} callback
 * @return {void}
 */
Kik.prototype.pickUsers = function(options_or_callback, callback) {};
/**
 * @record
 * @struct
 */
function KikUser() {}
 /** @type {string} */
KikUser.prototype.username;
 /** @type {string} */
KikUser.prototype.fullName;
 /** @type {string} */
KikUser.prototype.firstName;
 /** @type {string} */
KikUser.prototype.lastName;
 /** @type {string} */
KikUser.prototype.pic;
 /** @type {string} */
KikUser.prototype.thumbnail;
/**
 * @record
 * @struct
 */
function KikMessage() {}
 /** @type {string} */
KikMessage.prototype.title;
 /** @type {string} */
KikMessage.prototype.text;
 /** @type {string} */
KikMessage.prototype.pic;
 /** @type {boolean} */
KikMessage.prototype.big;
 /** @type {boolean} */
KikMessage.prototype.noForward;
 /** @type {?} */
KikMessage.prototype.data;
/**
 * @record
 * @struct
 */
function KikPickUsersOptions() {}
 /** @type {number} */
KikPickUsersOptions.prototype.minResults;
 /** @type {number} */
KikPickUsersOptions.prototype.maxResults;
 /** @type {!Array<{username: string}>} */
KikPickUsersOptions.prototype.preselected;
 /** @type {!Array<string>} */
KikPickUsersOptions.prototype.filtered;
 /** @type {boolean} */
KikPickUsersOptions.prototype.filterSelf;
/**
 * @record
 * @struct
 */
function KikGetOptions() {}
 /** @type {number} */
KikGetOptions.prototype.quality;
 /** @type {number} */
KikGetOptions.prototype.minResults;
 /** @type {number} */
KikGetOptions.prototype.maxResults;
 /** @type {number} */
KikGetOptions.prototype.maxHeight;
 /** @type {number} */
KikGetOptions.prototype.maxWidth;
/**
 * @record
 * @struct
 */
function KikGetFromCameraOptions() {}
 /** @type {number} */
KikGetFromCameraOptions.prototype.quality;
 /** @type {number} */
KikGetFromCameraOptions.prototype.maxHeight;
 /** @type {number} */
KikGetFromCameraOptions.prototype.maxWidth;
/**
 * @record
 * @struct
 */
function KikGetFromCameraCallbacks() {}
 /** @type {function(number): void} */
KikGetFromCameraCallbacks.prototype.onSelect;
 /** @type {function(string, number): void} */
KikGetFromCameraCallbacks.prototype.onPhoto;
 /** @type {function(!Array<string>): void} */
KikGetFromCameraCallbacks.prototype.onComplete;
 /** @type {function(): void} */
KikGetFromCameraCallbacks.prototype.onCancel;
 /** @type {!Kik} */
var kik;
