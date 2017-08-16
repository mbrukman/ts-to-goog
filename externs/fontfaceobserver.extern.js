/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/fontfaceobserver/index.d.ts:
/** @const */
var FontFaceObserver = {};
/**
 * @record
 * @struct
 */
FontFaceObserver.FontVariant = function() {};
 /** @type {(string|number)} */
FontFaceObserver.FontVariant.prototype.weight;
 /** @type {string} */
FontFaceObserver.FontVariant.prototype.style;
 /** @type {string} */
FontFaceObserver.FontVariant.prototype.stretch;

/**
 * Starts observing the loading of the specified font. Immediately returns a new Promise that resolves when the font is available and rejected when the font is not available.
 * @param {string=} testString If your font doesn't contain latin characters you can pass a custom test string.
 * @param {number=} timeout The default timeout for giving up on font loading is 3 seconds. You can increase or decrease this by passing a number of milliseconds.
 * @return {!Promise<void>}
 */
FontFaceObserver.prototype.load = function(testString, timeout) {};
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "fontfaceobserver"
/** @const */
tsickle_declare_module.fontfaceobserver = {};

/* TODO: ExportAssignment in tsickle_declare_module.fontfaceobserver */
