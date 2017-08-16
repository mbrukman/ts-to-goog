/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/html-webpack-template/index.d.ts:

/* TODO: ImportDeclaration in  */

/* TODO: ExportAssignment in  */
 /** @type {string} */
var HtmlWebpackTemplate;
/**
 * @record
 * @struct
 */
HtmlWebpackTemplate.GoogleAnalyticsOptions = function() {};
 /** @type {boolean} */
HtmlWebpackTemplate.GoogleAnalyticsOptions.prototype.pageViewOnLoad;
 /** @type {string} */
HtmlWebpackTemplate.GoogleAnalyticsOptions.prototype.trackingId;
/**
 * @record
 * @struct
 */
HtmlWebpackTemplate.Attributes = function() {};

/* TODO: IndexSignature: HtmlWebpackTemplate */

/** @typedef {(string|!HtmlWebpackTemplate.Attributes)} */
HtmlWebpackTemplate.Resource;

/** @typedef {(string|!HtmlWebpackTemplate.Attributes)} */
HtmlWebpackTemplate.Link;

/** @typedef {(string|!HtmlWebpackTemplate.Attributes)} */
HtmlWebpackTemplate.Script;
/**
 * @extends {HtmlWebpackPluginOptions}
 * @record
 * @struct
 */
HtmlWebpackTemplate.Options = function() {};
 /** @type {string} */
HtmlWebpackTemplate.Options.prototype.appMountId;
 /** @type {!Array<string>} */
HtmlWebpackTemplate.Options.prototype.appMountIds;
 /** @type {string} */
HtmlWebpackTemplate.Options.prototype.baseHref;
 /** @type {string} */
HtmlWebpackTemplate.Options.prototype.devServer;
 /** @type {!HtmlWebpackTemplate.GoogleAnalyticsOptions} */
HtmlWebpackTemplate.Options.prototype.googleAnalytics;
 /** @type {boolean} */
HtmlWebpackTemplate.Options.prototype.inject;
 /** @type {string} */
HtmlWebpackTemplate.Options.prototype.inlineManifestWebpackName;
 /** @type {!Array<(string|!HtmlWebpackTemplate.Attributes)>} */
HtmlWebpackTemplate.Options.prototype.links;
 /** @type {!Array<!HtmlWebpackTemplate.Attributes>} */
HtmlWebpackTemplate.Options.prototype.meta;
 /** @type {boolean} */
HtmlWebpackTemplate.Options.prototype.mobile;
 /** @type {!Array<(string|!HtmlWebpackTemplate.Attributes)>} */
HtmlWebpackTemplate.Options.prototype.scripts;
 /** @type {string} */
HtmlWebpackTemplate.Options.prototype.template;
 /** @type {!Object} */
HtmlWebpackTemplate.Options.prototype.window;

/** @typedef {!HtmlWebpackTemplate.GoogleAnalyticsOptions} */
HtmlWebpackTemplate.GoogleAnalyticsConfig;

/** @typedef {!HtmlWebpackTemplate.Options} */
HtmlWebpackTemplate.Config;
