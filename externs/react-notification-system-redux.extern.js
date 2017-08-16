/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/react-notification-system-redux/index.d.ts:

/* TODO: ImportDeclaration in  */

/* TODO: ImportDeclaration in  */

/* TODO: ImportDeclaration in  */

/* TODO: NamespaceExportDeclaration in  */

/* TODO: ExportAssignment in  */
/**
 * @extends {Component}
 * @constructor
 * @struct
 */
function Notifications() {}

/** @typedef {!Array<!NotificationSystem.Notification>} */
Notifications.NotificationsState;

/** @typedef {string} */
Notifications.NotificationLevel;

/** @typedef {function(!Array<!NotificationSystem.Notification>, A): !Array<!NotificationSystem.Notification>} */
Notifications.NotificationsReducer;

/** @typedef {function(!NotificationSystem.Notification): ?} */
Notifications.NotificationShow;
/**
 * @extends {Attributes}
 * @record
 * @struct
 */
Notifications.NotificationsProps = function() {};
 /** @type {!Array<!NotificationSystem.Notification>} */
Notifications.NotificationsProps.prototype.notifications;
 /** @type {function(!Array<!NotificationSystem.Notification>, ?): !Array<!NotificationSystem.Notification>} */
Notifications.reducer;

/**
 * @param {!NotificationSystem.Notification=} opts
 * @param {string=} level
 * @return {?}
 */
Notifications.show = function(opts, level) {};
 /** @type {function(!NotificationSystem.Notification): ?} */
Notifications.error;

/**
 * @param {(string|number|!NotificationSystem.Notification)=} opts
 * @return {?}
 */
Notifications.hide = function(opts) {};
 /** @type {function(!NotificationSystem.Notification): ?} */
Notifications.info;
 /** @type {function(!NotificationSystem.Notification): ?} */
Notifications.success;
 /** @type {function(!NotificationSystem.Notification): ?} */
Notifications.warning;

/**
 * @return {?}
 */
Notifications.removeAll = function() {};
