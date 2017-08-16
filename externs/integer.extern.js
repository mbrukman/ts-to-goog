/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/integer/index.d.ts:

/**
 * @param {(string|number|!Integer.IntClass)} val
 * @return {!Integer.IntClass}
 */
function Integer(val) {}

/** @typedef {(string|number|!Integer.IntClass)} */
Integer.IntLike;

/**
 * @param {number} low
 * @param {number=} high
 * @return {!Integer.IntClass}
 */
Integer.fromBits = function(low, high) {};

/**
 * @param {number} val
 * @param {(number|!Integer.IntClass)=} defaultVal
 * @return {!Integer.IntClass}
 */
Integer.fromNumber = function(val, defaultVal) {};

/**
 * @param {string} val
 * @param {number=} radix
 * @param {(string|!Integer.IntClass)=} defaultVal
 * @return {!Integer.IntClass}
 */
Integer.fromString = function(val, radix, defaultVal) {};

/**
 * @param {?} val
 * @return {boolean}
 */
Integer.isInstance = function(val) {};
 /** @type {!Integer.IntClass} */
Integer.MAX_VALUE;
 /** @type {!Integer.IntClass} */
Integer.MIN_VALUE;
 /** @type {!Integer.IntClass} */
Integer.ZERO;
 /** @type {!Integer.IntClass} */
Integer.ONE;
 /** @type {!Integer.IntClass} */
Integer.NEG_ONE;

/**
 * @constructor
 * @struct
 * @param {(string|number|!Integer.IntClass)} val
 */
Integer.IntClass = function(val) {};
 /** @type {number} */
Integer.IntClass.prototype.low;
 /** @type {number} */
Integer.IntClass.prototype.high;

/**
 * @param {(string|number|!Integer.IntClass)} augend
 * @return {!Integer.IntClass}
 */
Integer.IntClass.prototype.add = function(augend) {};

/**
 * @param {(string|number|!Integer.IntClass)} augend
 * @return {!Integer.IntClass}
 */
Integer.IntClass.prototype.plus = function(augend) {};

/**
 * @param {(string|number|!Integer.IntClass)} subtrahend
 * @return {!Integer.IntClass}
 */
Integer.IntClass.prototype.sub = function(subtrahend) {};

/**
 * @param {(string|number|!Integer.IntClass)} subtrahend
 * @return {!Integer.IntClass}
 */
Integer.IntClass.prototype.subtract = function(subtrahend) {};

/**
 * @param {(string|number|!Integer.IntClass)} subtrahend
 * @return {!Integer.IntClass}
 */
Integer.IntClass.prototype.minus = function(subtrahend) {};

/**
 * @param {(string|number|!Integer.IntClass)} multiplier
 * @return {!Integer.IntClass}
 */
Integer.IntClass.prototype.mul = function(multiplier) {};

/**
 * @param {(string|number|!Integer.IntClass)} multiplier
 * @return {!Integer.IntClass}
 */
Integer.IntClass.prototype.multiply = function(multiplier) {};

/**
 * @param {(string|number|!Integer.IntClass)} multiplier
 * @return {!Integer.IntClass}
 */
Integer.IntClass.prototype.times = function(multiplier) {};

/**
 * @param {(string|number|!Integer.IntClass)} divisor
 * @return {!Integer.IntClass}
 */
Integer.IntClass.prototype.div = function(divisor) {};

/**
 * @param {(string|number|!Integer.IntClass)} divisor
 * @return {!Integer.IntClass}
 */
Integer.IntClass.prototype.divide = function(divisor) {};

/**
 * @param {(string|number|!Integer.IntClass)} divisor
 * @return {!Integer.IntClass}
 */
Integer.IntClass.prototype.divideBy = function(divisor) {};

/**
 * @param {(string|number|!Integer.IntClass)} divisor
 * @return {!Integer.IntClass}
 */
Integer.IntClass.prototype.dividedBy = function(divisor) {};

/**
 * @param {(string|number|!Integer.IntClass)} divisor
 * @return {!Integer.IntClass}
 */
Integer.IntClass.prototype.over = function(divisor) {};

/**
 * @param {(string|number|!Integer.IntClass)} divisor
 * @return {!Integer.IntClass}
 */
Integer.IntClass.prototype.mod = function(divisor) {};

/**
 * @param {(string|number|!Integer.IntClass)} divisor
 * @return {!Integer.IntClass}
 */
Integer.IntClass.prototype.modulo = function(divisor) {};

/**
 * @return {!Integer.IntClass}
 */
Integer.IntClass.prototype.neg = function() {};

/**
 * @return {!Integer.IntClass}
 */
Integer.IntClass.prototype.negate = function() {};

/**
 * @return {!Integer.IntClass}
 */
Integer.IntClass.prototype.abs = function() {};

/**
 * @return {!Integer.IntClass}
 */
Integer.IntClass.prototype.absoluteValue = function() {};

/**
 * @param {(string|number|!Integer.IntClass)} bits
 * @return {!Integer.IntClass}
 */
Integer.IntClass.prototype.and = function(bits) {};

/**
 * @param {(string|number|!Integer.IntClass)} bits
 * @return {!Integer.IntClass}
 */
Integer.IntClass.prototype.or = function(bits) {};

/**
 * @param {(string|number|!Integer.IntClass)} bits
 * @return {!Integer.IntClass}
 */
Integer.IntClass.prototype.xor = function(bits) {};

/**
 * @return {!Integer.IntClass}
 */
Integer.IntClass.prototype.not = function() {};

/**
 * @param {number} bits
 * @return {!Integer.IntClass}
 */
Integer.IntClass.prototype.shl = function(bits) {};

/**
 * @param {number} bits
 * @return {!Integer.IntClass}
 */
Integer.IntClass.prototype.shiftLeft = function(bits) {};

/**
 * @param {number} bits
 * @return {!Integer.IntClass}
 */
Integer.IntClass.prototype.shr = function(bits) {};

/**
 * @param {number} bits
 * @return {!Integer.IntClass}
 */
Integer.IntClass.prototype.shiftRight = function(bits) {};

/**
 * @param {(string|number|!Integer.IntClass)} val
 * @return {boolean}
 */
Integer.IntClass.prototype.eq = function(val) {};

/**
 * @param {(string|number|!Integer.IntClass)} val
 * @return {boolean}
 */
Integer.IntClass.prototype.equals = function(val) {};

/**
 * @param {(string|number|!Integer.IntClass)} val
 * @return {boolean}
 */
Integer.IntClass.prototype.isEqualTo = function(val) {};

/**
 * @param {(string|number|!Integer.IntClass)} val
 * @return {boolean}
 */
Integer.IntClass.prototype.neq = function(val) {};

/**
 * @param {(string|number|!Integer.IntClass)} val
 * @return {boolean}
 */
Integer.IntClass.prototype.notEquals = function(val) {};

/**
 * @param {(string|number|!Integer.IntClass)} val
 * @return {boolean}
 */
Integer.IntClass.prototype.isNotEqualTo = function(val) {};

/**
 * @param {(string|number|!Integer.IntClass)} val
 * @return {boolean}
 */
Integer.IntClass.prototype.doesNotEqual = function(val) {};

/**
 * @param {(string|number|!Integer.IntClass)} val
 * @return {boolean}
 */
Integer.IntClass.prototype.gt = function(val) {};

/**
 * @param {(string|number|!Integer.IntClass)} val
 * @return {boolean}
 */
Integer.IntClass.prototype.greaterThan = function(val) {};

/**
 * @param {(string|number|!Integer.IntClass)} val
 * @return {boolean}
 */
Integer.IntClass.prototype.isGreaterThan = function(val) {};

/**
 * @param {(string|number|!Integer.IntClass)} val
 * @return {boolean}
 */
Integer.IntClass.prototype.gte = function(val) {};

/**
 * @param {(string|number|!Integer.IntClass)} val
 * @return {boolean}
 */
Integer.IntClass.prototype.greaterThanOrEquals = function(val) {};

/**
 * @param {(string|number|!Integer.IntClass)} val
 * @return {boolean}
 */
Integer.IntClass.prototype.isGreaterThanOrEqualTo = function(val) {};

/**
 * @param {(string|number|!Integer.IntClass)} val
 * @return {boolean}
 */
Integer.IntClass.prototype.lt = function(val) {};

/**
 * @param {(string|number|!Integer.IntClass)} val
 * @return {boolean}
 */
Integer.IntClass.prototype.lessThan = function(val) {};

/**
 * @param {(string|number|!Integer.IntClass)} val
 * @return {boolean}
 */
Integer.IntClass.prototype.isLessThan = function(val) {};

/**
 * @param {(string|number|!Integer.IntClass)} val
 * @return {boolean}
 */
Integer.IntClass.prototype.lte = function(val) {};

/**
 * @param {(string|number|!Integer.IntClass)} val
 * @return {boolean}
 */
Integer.IntClass.prototype.lessThanOrEquals = function(val) {};

/**
 * @param {(string|number|!Integer.IntClass)} val
 * @return {boolean}
 */
Integer.IntClass.prototype.isLessThanOrEqualTo = function(val) {};

/**
 * @param {(string|number|!Integer.IntClass)} val
 * @return {number}
 */
Integer.IntClass.prototype.compare = function(val) {};

/**
 * @return {number}
 */
Integer.IntClass.prototype.bitSizeAbs = function() {};

/**
 * @return {boolean}
 */
Integer.IntClass.prototype.isEven = function() {};

/**
 * @return {boolean}
 */
Integer.IntClass.prototype.isOdd = function() {};

/**
 * @return {boolean}
 */
Integer.IntClass.prototype.isPositive = function() {};

/**
 * @return {boolean}
 */
Integer.IntClass.prototype.isNegative = function() {};

/**
 * @return {boolean}
 */
Integer.IntClass.prototype.isZero = function() {};

/**
 * @return {boolean}
 */
Integer.IntClass.prototype.isNonZero = function() {};

/**
 * @return {boolean}
 */
Integer.IntClass.prototype.isNotZero = function() {};

/**
 * @return {boolean}
 */
Integer.IntClass.prototype.isSafe = function() {};

/**
 * @return {boolean}
 */
Integer.IntClass.prototype.isUnsafe = function() {};

/**
 * @return {number}
 */
Integer.IntClass.prototype.toNumber = function() {};

/**
 * @return {number}
 */
Integer.IntClass.prototype.toNumberUnsafe = function() {};

/**
 * @param {number=} radix
 * @return {string}
 */
Integer.IntClass.prototype.toString = function(radix) {};

/**
 * @return {number}
 */
Integer.IntClass.prototype.valueOf = function() {};

/* TODO: ExportAssignment in  */
