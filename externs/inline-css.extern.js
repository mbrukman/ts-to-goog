/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/inline-css/index.d.ts:

/* TODO: ImportEqualsDeclaration in  */
/** @const */
var InlineCss = {};
/**
 * @record
 * @struct
 */
InlineCss.Options = function() {};
 /** @type {string} */
InlineCss.Options.prototype.url;
 /** @type {string} */
InlineCss.Options.prototype.extraCss;
 /** @type {boolean} */
InlineCss.Options.prototype.applyStyleTags;
 /** @type {boolean} */
InlineCss.Options.prototype.applyLinkTags;
 /** @type {boolean} */
InlineCss.Options.prototype.removeStyleTags;
 /** @type {boolean} */
InlineCss.Options.prototype.removeLinkTags;
 /** @type {boolean} */
InlineCss.Options.prototype.preserveMediaQueries;
 /** @type {boolean} */
InlineCss.Options.prototype.applyWidthAttributes;
 /** @type {boolean} */
InlineCss.Options.prototype.applyTableAttributes;

/**
 * @param {string} html
 * @param {!InlineCss.Options} options
 * @return {!Bluebird<string>}
 */
function InlineCss(html, options) {}

/* TODO: ExportAssignment in  */