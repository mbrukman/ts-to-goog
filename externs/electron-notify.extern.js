/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/electron-notify/index.d.ts:
/**
 * @record
 * @struct
 */
function ICustomConfig() {}
 /** @type {number} */
ICustomConfig.prototype.width;
 /** @type {number} */
ICustomConfig.prototype.height;
 /** @type {number} */
ICustomConfig.prototype.padding;
 /** @type {number} */
ICustomConfig.prototype.borderRadius;
 /** @type {number} */
ICustomConfig.prototype.displayTime;
 /** @type {number} */
ICustomConfig.prototype.animationSteps;
 /** @type {number} */
ICustomConfig.prototype.animationStepMs;
 /** @type {boolean} */
ICustomConfig.prototype.animateInParallel;
 /** @type {string} */
ICustomConfig.prototype.appIcon;
 /** @type {string} */
ICustomConfig.prototype.pathToModule;
 /** @type {boolean} */
ICustomConfig.prototype.logging;
 /** @type {!Electron.BrowserWindowConstructorOptions} */
ICustomConfig.prototype.defaultWindow;
 /** @type {?} */
ICustomConfig.prototype.defaultStyleContainer;
 /** @type {?} */
ICustomConfig.prototype.defaultStyleAppIcon;
 /** @type {?} */
ICustomConfig.prototype.defaultStyleImage;
 /** @type {?} */
ICustomConfig.prototype.defaultStyleClose;
 /** @type {?} */
ICustomConfig.prototype.defaultStyleText;
/**
 * @record
 * @struct
 */
function ICloseNotificationEvent() {}
 /** @type {string} */
ICloseNotificationEvent.prototype.event;
 /** @type {number} */
ICloseNotificationEvent.prototype.id;
/**
 * @extends {ICloseNotificationEvent}
 * @record
 * @struct
 */
function INotificationEvent() {}
 /** @type {?} */
INotificationEvent.prototype.closeNotification;
/**
 * @record
 * @struct
 */
function INotification() {}
 /** @type {string} */
INotification.prototype.title;
 /** @type {string} */
INotification.prototype.text;
 /** @type {string} */
INotification.prototype.image;
 /** @type {string} */
INotification.prototype.url;
 /** @type {string} */
INotification.prototype.sound;
 /** @type {?} */
INotification.prototype.onClickFunc;
 /** @type {?} */
INotification.prototype.onShowFunc;
 /** @type {?} */
INotification.prototype.onCloseFunc;

/**
 * Change some config options. Can be run multiple times, also between notify()-calls to change electron-notifys behaviour.
 * @param {?} customConfig
 * @return {void}
 */
function setConfig(customConfig) {}

/**
 * Displays new notification.
 * @param {?} notification
 * @return {void}
 */
function notify(notification) {}

/**
 * Clears the animation queue and closes all windows opened by electron-notify. Call this to clean up before quiting your app.
 * @return {void}
 */
function closeAll() {}

/**
 * @return {string}
 */
function getTemplatePath() {}

/**
 * @param {string} path
 * @return {void}
 */
function setTemplatePath(path) {}
