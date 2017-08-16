/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/long/index.d.ts:

/* TODO: ExportAssignment in  */

/* TODO: NamespaceExportDeclaration in  */
/** @const */
var Long = {};
 /** @type {!Long} */
Long.MAX_UNSIGNED_VALUE;
 /** @type {!Long} */
Long.MAX_VALUE;
 /** @type {!Long} */
Long.MIN_VALUE;
 /** @type {!Long} */
Long.NEG_ONE;
 /** @type {!Long} */
Long.ONE;
 /** @type {!Long} */
Long.UONE;
 /** @type {!Long} */
Long.UZERO;
 /** @type {!Long} */
Long.ZERO;
 /** @type {number} */
Long.prototype.high;
 /** @type {number} */
Long.prototype.low;
 /** @type {boolean} */
Long.prototype.unsigned;

/**
 * Returns a Long representing the 64 bit integer that comes by concatenating the given low and high bits. Each is assumed to use 32 bits.
 * @param {number} lowBits
 * @param {number} highBits
 * @param {boolean=} unsigned
 * @return {!Long}
 */
Long.fromBits = function(lowBits, highBits, unsigned) {};

/**
 * Returns a Long representing the given 32 bit integer value.
 * @param {number} value
 * @param {boolean=} unsigned
 * @return {!Long}
 */
Long.fromInt = function(value, unsigned) {};

/**
 * Returns a Long representing the given value, provided that it is a finite number. Otherwise, zero is returned.
 * @param {number} value
 * @param {boolean=} unsigned
 * @return {!Long}
 */
Long.fromNumber = function(value, unsigned) {};

/**
 * Returns a Long representation of the given string, written using the specified radix.
 * @param {string} str
 * @param {(number|boolean)=} unsigned
 * @param {number=} radix
 * @return {!Long}
 */
Long.fromString = function(str, unsigned, radix) {};

/**
 * Tests if the specified object is a Long.
 * @param {?} obj
 * @return {boolean}
 */
Long.isLong = function(obj) {};

/**
 * Converts the specified value to a Long.
 * @param {(string|number|!Long|{low: number, high: number, unsigned: boolean})} val
 * @return {!Long}
 */
Long.fromValue = function(val) {};

/**
 * Returns the sum of this and the specified Long.
 * @param {(string|number|!Long)} addend
 * @return {!Long}
 */
Long.prototype.add = function(addend) {};

/**
 * Returns the bitwise AND of this Long and the specified.
 * @param {(string|number|!Long)} other
 * @return {!Long}
 */
Long.prototype.and = function(other) {};

/**
 * Compares this Long's value with the specified's.
 * @param {(string|number|!Long)} other
 * @return {number}
 */
Long.prototype.compare = function(other) {};

/**
 * Compares this Long's value with the specified's.
 * @param {(string|number|!Long)} other
 * @return {number}
 */
Long.prototype.comp = function(other) {};

/**
 * Returns this Long divided by the specified.
 * @param {(string|number|!Long)} divisor
 * @return {!Long}
 */
Long.prototype.divide = function(divisor) {};

/**
 * Returns this Long divided by the specified.
 * @param {(string|number|!Long)} divisor
 * @return {!Long}
 */
Long.prototype.div = function(divisor) {};

/**
 * Tests if this Long's value equals the specified's.
 * @param {(string|number|!Long)} other
 * @return {boolean}
 */
Long.prototype.equals = function(other) {};

/**
 * Tests if this Long's value equals the specified's.
 * @param {(string|number|!Long)} other
 * @return {boolean}
 */
Long.prototype.eq = function(other) {};

/**
 * Gets the high 32 bits as a signed integer.
 * @return {number}
 */
Long.prototype.getHighBits = function() {};

/**
 * Gets the high 32 bits as an unsigned integer.
 * @return {number}
 */
Long.prototype.getHighBitsUnsigned = function() {};

/**
 * Gets the low 32 bits as a signed integer.
 * @return {number}
 */
Long.prototype.getLowBits = function() {};

/**
 * Gets the low 32 bits as an unsigned integer.
 * @return {number}
 */
Long.prototype.getLowBitsUnsigned = function() {};

/**
 * Gets the number of bits needed to represent the absolute value of this Long.
 * @return {number}
 */
Long.prototype.getNumBitsAbs = function() {};

/**
 * Tests if this Long's value is greater than the specified's.
 * @param {(string|number|!Long)} other
 * @return {boolean}
 */
Long.prototype.greaterThan = function(other) {};

/**
 * Tests if this Long's value is greater than the specified's.
 * @param {(string|number|!Long)} other
 * @return {boolean}
 */
Long.prototype.gt = function(other) {};

/**
 * Tests if this Long's value is greater than or equal the specified's.
 * @param {(string|number|!Long)} other
 * @return {boolean}
 */
Long.prototype.greaterThanOrEqual = function(other) {};

/**
 * Tests if this Long's value is greater than or equal the specified's.
 * @param {(string|number|!Long)} other
 * @return {boolean}
 */
Long.prototype.gte = function(other) {};

/**
 * Tests if this Long's value is even.
 * @return {boolean}
 */
Long.prototype.isEven = function() {};

/**
 * Tests if this Long's value is negative.
 * @return {boolean}
 */
Long.prototype.isNegative = function() {};

/**
 * Tests if this Long's value is odd.
 * @return {boolean}
 */
Long.prototype.isOdd = function() {};

/**
 * Tests if this Long's value is positive.
 * @return {boolean}
 */
Long.prototype.isPositive = function() {};

/**
 * Tests if this Long's value equals zero.
 * @return {boolean}
 */
Long.prototype.isZero = function() {};

/**
 * Tests if this Long's value is less than the specified's.
 * @param {(string|number|!Long)} other
 * @return {boolean}
 */
Long.prototype.lessThan = function(other) {};

/**
 * Tests if this Long's value is less than the specified's.
 * @param {(string|number|!Long)} other
 * @return {boolean}
 */
Long.prototype.lt = function(other) {};

/**
 * Tests if this Long's value is less than or equal the specified's.
 * @param {(string|number|!Long)} other
 * @return {boolean}
 */
Long.prototype.lessThanOrEqual = function(other) {};

/**
 * Tests if this Long's value is less than or equal the specified's.
 * @param {(string|number|!Long)} other
 * @return {boolean}
 */
Long.prototype.lte = function(other) {};

/**
 * Returns this Long modulo the specified.
 * @param {(string|number|!Long)} other
 * @return {!Long}
 */
Long.prototype.modulo = function(other) {};

/**
 * Returns this Long modulo the specified.
 * @param {(string|number|!Long)} other
 * @return {!Long}
 */
Long.prototype.mod = function(other) {};

/**
 * Returns the product of this and the specified Long.
 * @param {(string|number|!Long)} multiplier
 * @return {!Long}
 */
Long.prototype.multiply = function(multiplier) {};

/**
 * Returns the product of this and the specified Long.
 * @param {(string|number|!Long)} multiplier
 * @return {!Long}
 */
Long.prototype.mul = function(multiplier) {};

/**
 * Negates this Long's value.
 * @return {!Long}
 */
Long.prototype.negate = function() {};

/**
 * Negates this Long's value.
 * @return {!Long}
 */
Long.prototype.neg = function() {};

/**
 * Returns the bitwise NOT of this Long.
 * @return {!Long}
 */
Long.prototype.not = function() {};

/**
 * Tests if this Long's value differs from the specified's.
 * @param {(string|number|!Long)} other
 * @return {boolean}
 */
Long.prototype.notEquals = function(other) {};

/**
 * Tests if this Long's value differs from the specified's.
 * @param {(string|number|!Long)} other
 * @return {boolean}
 */
Long.prototype.neq = function(other) {};

/**
 * Returns the bitwise OR of this Long and the specified.
 * @param {(string|number|!Long)} other
 * @return {!Long}
 */
Long.prototype.or = function(other) {};

/**
 * Returns this Long with bits shifted to the left by the given amount.
 * @param {(number|!Long)} numBits
 * @return {!Long}
 */
Long.prototype.shiftLeft = function(numBits) {};

/**
 * Returns this Long with bits shifted to the left by the given amount.
 * @param {(number|!Long)} numBits
 * @return {!Long}
 */
Long.prototype.shl = function(numBits) {};

/**
 * Returns this Long with bits arithmetically shifted to the right by the given amount.
 * @param {(number|!Long)} numBits
 * @return {!Long}
 */
Long.prototype.shiftRight = function(numBits) {};

/**
 * Returns this Long with bits arithmetically shifted to the right by the given amount.
 * @param {(number|!Long)} numBits
 * @return {!Long}
 */
Long.prototype.shr = function(numBits) {};

/**
 * Returns this Long with bits logically shifted to the right by the given amount.
 * @param {(number|!Long)} numBits
 * @return {!Long}
 */
Long.prototype.shiftRightUnsigned = function(numBits) {};

/**
 * Returns this Long with bits logically shifted to the right by the given amount.
 * @param {(number|!Long)} numBits
 * @return {!Long}
 */
Long.prototype.shru = function(numBits) {};

/**
 * Returns the difference of this and the specified Long.
 * @param {(string|number|!Long)} subtrahend
 * @return {!Long}
 */
Long.prototype.subtract = function(subtrahend) {};

/**
 * Returns the difference of this and the specified Long.
 * @param {(string|number|!Long)} subtrahend
 * @return {!Long}
 */
Long.prototype.sub = function(subtrahend) {};

/**
 * Converts the Long to a 32 bit integer, assuming it is a 32 bit integer.
 * @return {number}
 */
Long.prototype.toInt = function() {};

/**
 * Converts the Long to a the nearest floating-point representation of this value (double, 53 bit mantissa).
 * @return {number}
 */
Long.prototype.toNumber = function() {};

/**
 * Converts this Long to signed.
 * @return {!Long}
 */
Long.prototype.toSigned = function() {};

/**
 * Converts the Long to a string written in the specified radix.
 * @param {number=} radix
 * @return {string}
 */
Long.prototype.toString = function(radix) {};

/**
 * Converts this Long to unsigned.
 * @return {!Long}
 */
Long.prototype.toUnsigned = function() {};

/**
 * Returns the bitwise XOR of this Long and the given one.
 * @param {(string|number|!Long)} other
 * @return {!Long}
 */
Long.prototype.xor = function(other) {};
