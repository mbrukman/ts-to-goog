/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/phonegap-plugin-barcodescanner/index.d.ts:
/**
 * @record
 * @struct
 */
function CordovaPlugins() {}
 /** @type {!phonegapBarcode.BarcodeScanner} */
CordovaPlugins.prototype.barcodeScanner;
/** @const */
var phonegapBarcode = {};
/**
 * @record
 * @struct
 */
phonegapBarcode.BarcodeScanResult = function() {};
 /** @type {string} */
phonegapBarcode.BarcodeScanResult.prototype.text;
 /** @type {string} */
phonegapBarcode.BarcodeScanResult.prototype.format;
 /** @type {boolean} */
phonegapBarcode.BarcodeScanResult.prototype.cancelled;
/**
 * @record
 * @struct
 */
phonegapBarcode.BarcodeScanOptions = function() {};
 /** @type {boolean} */
phonegapBarcode.BarcodeScanOptions.prototype.preferFrontCamera;
 /** @type {boolean} */
phonegapBarcode.BarcodeScanOptions.prototype.showFlipCameraButton;
 /** @type {string} */
phonegapBarcode.BarcodeScanOptions.prototype.prompt;
 /** @type {string} */
phonegapBarcode.BarcodeScanOptions.prototype.formats;
 /** @type {string} */
phonegapBarcode.BarcodeScanOptions.prototype.orientation;
/**
 * @record
 * @struct
 */
phonegapBarcode.EncodingType = function() {};
 /** @type {?} */
phonegapBarcode.EncodingType.prototype.TEXT_TYPE;
 /** @type {?} */
phonegapBarcode.EncodingType.prototype.EMAIL_TYPE;
 /** @type {?} */
phonegapBarcode.EncodingType.prototype.PHONE_TYPE;
 /** @type {?} */
phonegapBarcode.EncodingType.prototype.SMS_TYPE;
/**
 * @record
 * @struct
 */
phonegapBarcode.BarcodeScanner = function() {};
 /** @type {function(function(!phonegapBarcode.BarcodeScanResult): ?, function(?): ?, !phonegapBarcode.BarcodeScanOptions): void} */
phonegapBarcode.BarcodeScanner.prototype.scan;
 /** @type {function(!phonegapBarcode.EncodingType, string, function(?): ?, function(?): ?): void} */
phonegapBarcode.BarcodeScanner.prototype.encode;
 /** @type {!phonegapBarcode.EncodingType} */
phonegapBarcode.BarcodeScanner.prototype.Encode;
