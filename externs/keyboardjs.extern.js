/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/keyboardjs/index.d.ts:
/** @const */
var keyboardjs = {};
/**
 * @record
 * @struct
 */
keyboardjs.KeyEvent = function() {};

/**
 * @return {void}
 */
keyboardjs.KeyEvent.prototype.preventRepeat = function() {};
/**
 * @record
 * @struct
 */
keyboardjs.Callback = function() {};

/* TODO: CallSignature: keyboardjs */

/**
 * Binds a keyCombo to specific callback functions.
 * @param {(string|!Array<string>)} keyCombo String of keys to be pressed to execute callbacks.
 * @param {!keyboardjs.Callback} pressed Callback that gets executed when the keyComboState is 'pressed', can be null.
 * @param {!keyboardjs.Callback=} released Callback that gets executed when the keyComboState is 'released'
 * @param {boolean=} preventRepeatByDefault Whether or not to prevent repeat by default. Defaults to false.
 * @return {void}
 */
keyboardjs.bind = function(keyCombo, pressed, released, preventRepeatByDefault) {};

/**
 * Unbinds a keyCombo completely or only specific pressed & released callback combos.
 * @param {(string|!Array<string>)} keyCombo String of keys to be pressed to execute callbacks.
 * @param {!keyboardjs.Callback=} pressed Callback that gets executed when the keyComboState is 'pressed', can be null.
 * @param {!keyboardjs.Callback=} released Callback that gets executed when the keyComboState is 'released', can be null.
 * @return {void}
 */
keyboardjs.unbind = function(keyCombo, pressed, released) {};

/**
 * Sets the context KeyboardJS operates in. Default is global context.
 * Bindings in global context will execute in all contexts.
 * @param {string} identifier The name of the context. If the context doesn't exists, it will be created.
 * Use 'global' to switch to global context.
 * @return {void}
 */
keyboardjs.setContext = function(identifier) {};

/**
 * Executes a Callback without loosing the current context.
 * @param {string} identifier The name of the context the callback should be in. If the context doesn't exists, it will be created.
 * @param {function(): void} inContextCallBack The callback function. Will be executed in the given context.
 * @return {void}
 */
keyboardjs.withContext = function(identifier, inContextCallBack) {};

/**
 * Returns the context KeyboardJS currently operates in.
 * @return {string}
 */
keyboardjs.getContext = function() {};

/**
 * The keyboard will no longer trigger bindings.
 * @return {void}
 */
keyboardjs.pause = function() {};

/**
 * The keyboard will once again trigger bindings.
 * @return {void}
 */
keyboardjs.resume = function() {};

/**
 * All active bindings will released and unbound.
 * @return {void}
 */
keyboardjs.reset = function() {};

/**
 * Triggers a key press. Stays in pressed state until released.
 * @param {string} keyCombo String of keys to be pressed to execute 'pressed' callbacks.
 * @return {void}
 */
keyboardjs.pressKey = function(keyCombo) {};

/**
 * Triggers a key release.
 * @param {string} keyCombo String of keys to be released to execute 'released' callbacks.
 * @return {void}
 */
keyboardjs.releaseKey = function(keyCombo) {};

/**
 * Releases all keys.
 * @return {void}
 */
keyboardjs.releaseAllKeys = function() {};

/**
 * Attaches keyboardJS a specific window and a specific document or form.
 * Attaches keyboardJS to the current window and a specific document or form.
 * Attaches keyboardJS to the current window an document.
 * @param {!Window|(!Document|!HTMLFormElement)=} myWin_or_myDoc The window to attach to. / The document or form to attach to.
 * @param {(!Document|!HTMLFormElement)=} myDoc The document or form to attach to.
 * @return {void}
 */
keyboardjs.watch = function(myWin_or_myDoc, myDoc) {};

/**
 * Detaches KeyboardJS from the window and document/element
 * @return {void}
 */
keyboardjs.stop = function() {};

/* TODO: ExportAssignment in  */

/* TODO: NamespaceExportDeclaration in  */