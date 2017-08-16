/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/ref-array/index.d.ts:

/* TODO: ImportEqualsDeclaration in  */
/**
 * @extends {Type}
 * @record
 * @struct
 */
function ArrayType() {}
 /** @type {number} */
ArrayType.prototype.BYTES_PER_ELEMENT;
 /** @type {number} */
ArrayType.prototype.fixedLength;
 /** @type {?} */
ArrayType.prototype.type;

/* TODO: ConstructSignature:  */

/* TODO: ConstructSignature:  */

/* TODO: ConstructSignature:  */

/* TODO: CallSignature:  */

/* TODO: CallSignature:  */

/* TODO: CallSignature:  */

/**
 * Accepts a Buffer instance that should be an already-populated with data
 * for the ArrayType. The "length" of the Array is determined by searching
 * through the buffer's contents until an aligned NULL pointer is encountered.
 * @param {?} buffer
 * @return {?}
 */
ArrayType.prototype.untilZeros = function(buffer) {};
 /** @type {function(new: (?<T>), ?, number): ?} */
var ArrayType;

/* TODO: ExportAssignment in  */