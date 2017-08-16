/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/gapi.pagespeedonline/index.d.ts:
/** @const */
gapi.client.pagespeedonline = {};
/**
 * @record
 * @struct
 */
gapi.client.pagespeedonline.pagespeedapi = function() {};

/**
 * Runs Page Speed analysis on the page at the specified URL, and returns a Page Speed score, a list of suggestions to make that page faster, and other information.
 * @param {{url: string, locale: string, rule: !Array<string>, screenshot: boolean, stategy: string, fields: string}} object
 * @return {!gapi.client.HttpRequest<!GoogleApiPageSpeedOnlineResource>}
 */
gapi.client.pagespeedonline.pagespeedapi.prototype.runpagespeed = function(object) {};
/**
 * @record
 * @struct
 */
function GoogleApiPageSpeedOnlineResource() {}
 /** @type {string} */
GoogleApiPageSpeedOnlineResource.prototype.kind;
 /** @type {string} */
GoogleApiPageSpeedOnlineResource.prototype.id;
 /** @type {number} */
GoogleApiPageSpeedOnlineResource.prototype.responseCode;
 /** @type {string} */
GoogleApiPageSpeedOnlineResource.prototype.title;
 /** @type {number} */
GoogleApiPageSpeedOnlineResource.prototype.score;
 /** @type {{numberResources: number, numberHosts: number, totalRequestBytes: string, numberStaticResources: number, htmlResponseBytes: string, textResponseBytes: string, cssResponsebytes: string, imageResponseBytes: string, javascriptResponsebytes: string, flashResponseBytes: string, otherResponsebytes: string, numberJsResources: number, numberCssResources: number}} */
GoogleApiPageSpeedOnlineResource.prototype.pageStats;
 /** @type {{locale: string, ruleResults: {AvoidBadRequests: !GoogleApiPageSpeedOnlineRuleResource, AvoidCharsetInMetaTag: !GoogleApiPageSpeedOnlineRuleResource, AvoidCssImport: !GoogleApiPageSpeedOnlineRuleResource, AvoidLandingPageRedirects: !GoogleApiPageSpeedOnlineRuleResource, AvoidLongRunningScripts: !GoogleApiPageSpeedOnlineRuleResource, DeferParsingJavaScript: !GoogleApiPageSpeedOnlineRuleResource, EnableGzipCompression: !GoogleApiPageSpeedOnlineRuleResource, InlineSmallCss: !GoogleApiPageSpeedOnlineRuleResource, InlineSmallJavaScript: !GoogleApiPageSpeedOnlineRuleResource, LeverageBrowserCaching: !GoogleApiPageSpeedOnlineRuleResource, MinifyCss: !GoogleApiPageSpeedOnlineRuleResource, MinifyHTML: !GoogleApiPageSpeedOnlineRuleResource, MinifyJavaScript: !GoogleApiPageSpeedOnlineRuleResource, MinimizeRedirects: !GoogleApiPageSpeedOnlineRuleResource, MinimizeRequestSize: !GoogleApiPageSpeedOnlineRuleResource, OptimizeImages: !GoogleApiPageSpeedOnlineRuleResource, OptimizeTheOrderOfStylesAndScripts: !GoogleApiPageSpeedOnlineRuleResource, PreferAsyncResources: !GoogleApiPageSpeedOnlineRuleResource, PutCssInTheDocumentHead: !GoogleApiPageSpeedOnlineRuleResource, RemoveQueryStringsFromStaticResources: !GoogleApiPageSpeedOnlineRuleResource, ServerResourcesFromAConsistentUrl: !GoogleApiPageSpeedOnlineRuleResource, ServerScaledImages: !GoogleApiPageSpeedOnlineRuleResource, ServeResponseTime: !GoogleApiPageSpeedOnlineRuleResource, SpecifyACacheValidator: !GoogleApiPageSpeedOnlineRuleResource, SpecifyAVaryAcceptEncodingHeader: !GoogleApiPageSpeedOnlineRuleResource, SpecifyCharsetEarly: !GoogleApiPageSpeedOnlineRuleResource, SpecifyImageDimensions: !GoogleApiPageSpeedOnlineRuleResource, SpriteImages: !GoogleApiPageSpeedOnlineRuleResource}}} */
GoogleApiPageSpeedOnlineResource.prototype.formattedResults;
 /** @type {{major: number, minor: number}} */
GoogleApiPageSpeedOnlineResource.prototype.version;
 /** @type {!Array<string>} */
GoogleApiPageSpeedOnlineResource.prototype.invalidRules;
/**
 * @record
 * @struct
 */
function GoogleApiPageSpeedOnlineRuleResource() {}
 /** @type {string} */
GoogleApiPageSpeedOnlineRuleResource.prototype.localizedRuleName;
 /** @type {number} */
GoogleApiPageSpeedOnlineRuleResource.prototype.ruleScore;
 /** @type {number} */
GoogleApiPageSpeedOnlineRuleResource.prototype.ruleImpact;
 /** @type {!Array<{header: {format: string, args: !Array<{type: string, value: string}>}, urls: !Array<{result: {format: string, args: !Array<{type: string, value: string}>}, details: !Array<{format: string, args: !Array<{type: string, value: string}>}>}>}>} */
GoogleApiPageSpeedOnlineRuleResource.prototype.urlBlocks;
