/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/bootbox/index.d.ts:
/**
 * @record
 * @struct
 */
function BootboxBaseOptions() {}
 /** @type {(string|!Element)} */
BootboxBaseOptions.prototype.title;
 /** @type {function((string|boolean)): ?} */
BootboxBaseOptions.prototype.callback;
 /** @type {(boolean|function(): ?)} */
BootboxBaseOptions.prototype.onEscape;
 /** @type {boolean} */
BootboxBaseOptions.prototype.show;
 /** @type {boolean} */
BootboxBaseOptions.prototype.backdrop;
 /** @type {boolean} */
BootboxBaseOptions.prototype.closeButton;
 /** @type {boolean} */
BootboxBaseOptions.prototype.animate;
 /** @type {string} */
BootboxBaseOptions.prototype.className;
 /** @type {string} */
BootboxBaseOptions.prototype.size;
 /** @type {!BootboxButtonMap} */
BootboxBaseOptions.prototype.buttons;
/**
 * @extends {BootboxBaseOptions}
 * @record
 * @struct
 */
function BootboxDialogOptions() {}
 /** @type {(string|!Element)} */
BootboxDialogOptions.prototype.message;
/**
 * @extends {BootboxDialogOptions}
 * @record
 * @struct
 */
function BootboxAlertOptions() {}
 /** @type {function(): ?} */
BootboxAlertOptions.prototype.callback;
 /** @type {!BootboxAlertButtonMap} */
BootboxAlertOptions.prototype.buttons;
/**
 * @extends {BootboxDialogOptions}
 * @record
 * @struct
 */
function BootboxConfirmOptions() {}
 /** @type {function(boolean): ?} */
BootboxConfirmOptions.prototype.callback;
 /** @type {!BootboxConfirmPromptButtonMap} */
BootboxConfirmOptions.prototype.buttons;
/**
 * @extends {BootboxBaseOptions}
 * @record
 * @struct
 */
function BootboxPromptOptions() {}
 /** @type {string} */
BootboxPromptOptions.prototype.title;
 /** @type {string} */
BootboxPromptOptions.prototype.value;
 /** @type {string} */
BootboxPromptOptions.prototype.inputType;
 /** @type {function(string): ?} */
BootboxPromptOptions.prototype.callback;
 /** @type {!BootboxConfirmPromptButtonMap} */
BootboxPromptOptions.prototype.buttons;
 /** @type {!Array<{text: string, value: string, group: string}>} */
BootboxPromptOptions.prototype.inputOptions;
/**
 * @record
 * @struct
 */
function BootboxDefaultOptions() {}
 /** @type {string} */
BootboxDefaultOptions.prototype.locale;
 /** @type {boolean} */
BootboxDefaultOptions.prototype.show;
 /** @type {boolean} */
BootboxDefaultOptions.prototype.backdrop;
 /** @type {boolean} */
BootboxDefaultOptions.prototype.closeButton;
 /** @type {boolean} */
BootboxDefaultOptions.prototype.animate;
 /** @type {string} */
BootboxDefaultOptions.prototype.className;
/**
 * @record
 * @struct
 */
function BootboxButton() {}
 /** @type {string} */
BootboxButton.prototype.label;
 /** @type {string} */
BootboxButton.prototype.className;
 /** @type {function(): ?} */
BootboxButton.prototype.callback;
/**
 * @record
 * @struct
 */
function BootboxButtonMap() {}

/* TODO: IndexSignature:  */
/**
 * @extends {BootboxButtonMap}
 * @record
 * @struct
 */
function BootboxAlertButtonMap() {}
 /** @type {(!Function|!BootboxButton)} */
BootboxAlertButtonMap.prototype.ok;
/**
 * @extends {BootboxButtonMap}
 * @record
 * @struct
 */
function BootboxConfirmPromptButtonMap() {}
 /** @type {(!Function|!BootboxButton)} */
BootboxConfirmPromptButtonMap.prototype.confirm;
 /** @type {(!Function|!BootboxButton)} */
BootboxConfirmPromptButtonMap.prototype.cancel;
/**
 * @record
 * @struct
 */
function BootboxLocaleValues() {}
 /** @type {string} */
BootboxLocaleValues.prototype.OK;
 /** @type {string} */
BootboxLocaleValues.prototype.CANCEL;
 /** @type {string} */
BootboxLocaleValues.prototype.CONFIRM;
/**
 * @record
 * @struct
 */
function BootboxStatic() {}

/**
 * @param {string|!BootboxAlertOptions} message_or_options
 * @param {function(): void=} callback
 * @return {?<!HTMLElement>}
 */
BootboxStatic.prototype.alert = function(message_or_options, callback) {};

/**
 * @param {string|!BootboxConfirmOptions} message_or_options
 * @param {function(boolean): void=} callback
 * @return {?<!HTMLElement>}
 */
BootboxStatic.prototype.confirm = function(message_or_options, callback) {};

/**
 * @param {string|!BootboxPromptOptions} message_or_options
 * @param {function(string): void=} callback
 * @return {?<!HTMLElement>}
 */
BootboxStatic.prototype.prompt = function(message_or_options, callback) {};

/**
 * @param {string|!BootboxDialogOptions} message_or_options
 * @param {function(string): void=} callback
 * @return {?<!HTMLElement>}
 */
BootboxStatic.prototype.dialog = function(message_or_options, callback) {};

/**
 * @param {!BootboxDefaultOptions} options
 * @return {void}
 */
BootboxStatic.prototype.setDefaults = function(options) {};

/**
 * @return {void}
 */
BootboxStatic.prototype.hideAll = function() {};

/**
 * @param {string} name
 * @param {!BootboxLocaleValues} values
 * @return {void}
 */
BootboxStatic.prototype.addLocale = function(name, values) {};

/**
 * @param {string} name
 * @return {void}
 */
BootboxStatic.prototype.removeLocale = function(name) {};

/**
 * @param {string} name
 * @return {void}
 */
BootboxStatic.prototype.setLocale = function(name) {};
 /** @type {!BootboxStatic} */
var bootbox;
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "bootbox"
/** @const */
tsickle_declare_module.bootbox = {};

/* TODO: ExportAssignment in tsickle_declare_module.bootbox */
