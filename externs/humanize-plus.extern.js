/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/humanize-plus/index.d.ts:

/**
 * @param {number} number
 * @param {number=} decimals
 * @return {string}
 */
function formatNumber(number, decimals) {}

/**
 * @param {number} number
 * @param {number=} decimals
 * @return {string}
 */
function intComma(number, decimals) {}

/**
 * @param {number} number
 * @param {number=} decimals
 * @return {string}
 */
function compactInteger(number, decimals) {}

/**
 * @param {number} number
 * @param {number=} bounds
 * @param {string=} ending
 * @return {string}
 */
function boundedNumber(number, bounds, ending) {}

/**
 * @param {number} value
 * @return {string}
 */
function ordinal(value) {}

/**
 * @param {number} value
 * @param {?=} overrides
 * @return {string}
 */
function times(value, overrides) {}

/**
 * @param {number} value
 * @param {number} intervalMs
 * @param {string=} unit
 * @return {string}
 */
function pace(value, intervalMs, unit) {}

/**
 * @param {number} filesize
 * @param {number=} precision
 * @return {string}
 */
function fileSize(filesize, precision) {}

/**
 * @param {number} number
 * @param {string=} singular
 * @param {string=} plural
 * @return {string}
 */
function pluralize(number, singular, plural) {}

/**
 * @param {string} string
 * @param {number=} length
 * @param {string=} ending
 * @return {string}
 */
function truncate(string, length, ending) {}

/**
 * @param {string} string
 * @param {number=} length
 * @return {string}
 */
function truncateWords(string, length) {}

/**
 * @param {string} string
 * @param {boolean=} downCaseTail
 * @return {string}
 */
function capitalize(string, downCaseTail) {}

/**
 * @param {string} string
 * @return {string}
 */
function capitalizeAll(string) {}

/**
 * @param {string} string
 * @return {string}
 */
function titleCase(string) {}

/**
 * @param {!Array<?>} items
 * @param {number=} limit
 * @param {string=} limitStr
 * @return {string}
 */
function oxford(items, limit, limitStr) {}

/**
 * @param {!Array<?>} list
 * @param {string=} verb
 * @return {string}
 */
function frequency(list, verb) {}

/**
 * @param {number} value
 * @param {number=} precision
 * @return {string}
 */
function toFixed(value, precision) {}

/**
 * @param {number} value
 * @param {number=} base
 * @return {number}
 */
function normalizePrecision(value, base) {}
