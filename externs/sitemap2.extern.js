/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/sitemap2/index.d.ts:
 /** @type {?} */
var sitemap2;

/* TODO: ExportAssignment in  */
/**
 * @record
 * @struct
 */
function Sitemap() {}

/* TODO: ConstructSignature:  */
 /** @type {string} */
Sitemap.prototype.hostName;
 /** @type {string} */
Sitemap.prototype.fileName;
 /** @type {number} */
Sitemap.prototype.limit;
 /** @type {!Array<string>} */
Sitemap.prototype.urls;
 /** @type {!Array<?>} */
Sitemap.prototype.childrens;

/**
 * @param {(string|!Array<string>|?|!Array<?>)} urlData
 * @return {?}
 */
Sitemap.prototype.addUrl = function(urlData) {};

/**
 * @param {?} sm
 * @return {?}
 */
Sitemap.prototype.addSitemap = function(sm) {};

/**
 * @return {!Array<?>}
 */
Sitemap.prototype.toXML = function() {};
/**
 * @record
 * @struct
 */
function SitemapConfig() {}
 /** @type {string} */
SitemapConfig.prototype.hostName;
 /** @type {string} */
SitemapConfig.prototype.fileName;
 /** @type {number} */
SitemapConfig.prototype.limit;
 /** @type {number} */
SitemapConfig.prototype.cacheTime;
 /** @type {string} */
SitemapConfig.prototype.xslUrl;
 /** @type {!Array<string>} */
SitemapConfig.prototype.urls;
 /** @type {!Array<?>} */
SitemapConfig.prototype.childrens;
/**
 * @record
 * @struct
 */
function UrlData() {}
 /** @type {string} */
UrlData.prototype.url;
 /** @type {string} */
UrlData.prototype.chengefreq;
 /** @type {(string|number)} */
UrlData.prototype.priority;
 /** @type {!Date} */
UrlData.prototype.lastmod;
 /** @type {boolean} */
UrlData.prototype.lastmodWithTime;
 /** @type {boolean} */
UrlData.prototype.lastmodInISO;
 /** @type {?} */
UrlData.prototype.video;
/**
 * @record
 * @struct
 */
function SitemapXml() {}
 /** @type {string} */
SitemapXml.prototype.fileName;
 /** @type {string} */
SitemapXml.prototype.xml;
