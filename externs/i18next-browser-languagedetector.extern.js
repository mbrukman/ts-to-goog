/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/i18next-browser-languagedetector/index.d.ts:
/** @const */
var i18nextBrowserLanguageDetector = {};
/**
 * @record
 * @struct
 */
i18nextBrowserLanguageDetector.DetectorOptions = function() {};
 /** @type {!Array<string>} */
i18nextBrowserLanguageDetector.DetectorOptions.prototype.order;
 /** @type {string} */
i18nextBrowserLanguageDetector.DetectorOptions.prototype.lookupQuerystring;
 /** @type {string} */
i18nextBrowserLanguageDetector.DetectorOptions.prototype.lookupCookie;
 /** @type {string} */
i18nextBrowserLanguageDetector.DetectorOptions.prototype.lookupLocalStorage;
 /** @type {!Array<string>} */
i18nextBrowserLanguageDetector.DetectorOptions.prototype.caches;
 /** @type {!Array<string>} */
i18nextBrowserLanguageDetector.DetectorOptions.prototype.excludeCacheFor;
 /** @type {number} */
i18nextBrowserLanguageDetector.DetectorOptions.prototype.cookieMinutes;
 /** @type {string} */
i18nextBrowserLanguageDetector.DetectorOptions.prototype.cookieDomain;
 /** @type {!HTMLElement} */
i18nextBrowserLanguageDetector.DetectorOptions.prototype.htmlTag;
/**
 * @record
 * @struct
 */
i18nextBrowserLanguageDetector.CustomDetector = function() {};
 /** @type {string} */
i18nextBrowserLanguageDetector.CustomDetector.prototype.name;

/**
 * @param {string} lng
 * @param {!i18nextBrowserLanguageDetector.DetectorOptions} options
 * @return {void}
 */
i18nextBrowserLanguageDetector.CustomDetector.prototype.cacheUserLanguage = function(lng, options) {};

/**
 * @param {!i18nextBrowserLanguageDetector.DetectorOptions} options
 * @return {string}
 */
i18nextBrowserLanguageDetector.CustomDetector.prototype.lookup = function(options) {};

/**
 * Adds detector.
 * @param {!i18nextBrowserLanguageDetector.CustomDetector} detector
 * @return {!i18nextBrowserLanguageDetector}
 */
i18nextBrowserLanguageDetector.prototype.addDetector = function(detector) {};

/**
 * Initializes detector.
 * @param {!i18nextBrowserLanguageDetector.DetectorOptions=} options
 * @return {void}
 */
i18nextBrowserLanguageDetector.prototype.init = function(options) {};

/* TODO: ExportAssignment in  */