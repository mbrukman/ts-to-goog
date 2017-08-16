/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/electron-json-storage/index.d.ts:

/**
 * @param {string} key
 * @param {function(?, !Object): void} callback
 * @return {void}
 */
function get(key, callback) {}

/**
 * @param {string} key
 * @param {!Object} json
 * @param {function(?): void} callback
 * @return {void}
 */
function set(key, json, callback) {}

/**
 * @param {string} key
 * @param {function(?, boolean): void} callback
 * @return {void}
 */
function has(key, callback) {}

/**
 * @param {function(?, !Array<string>): void} callback
 * @return {void}
 */
function keys(callback) {}

/**
 * @param {string} key
 * @param {function(?): void} callback
 * @return {void}
 */
function remove(key, callback) {}

/**
 * @param {function(?): void} callback
 * @return {void}
 */
function clear(callback) {}
