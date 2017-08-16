/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/numjs/index.d.ts:

/* TODO: NamespaceExportDeclaration in  */

/* TODO: ImportDeclaration in  */

/** @typedef {(string|!Int8Array|!Int16Array|!Int32Array|!Uint8Array|!Uint16Array|!Uint32Array|!Float32Array|!Float64Array|!Uint8ClampedArray|!Array<?>)} */
var NdType;
/**
 * @record
 * @struct
 */
function NdArray() {}
 /** @type {number} */
NdArray.prototype.ndim;
 /** @type {?} */
NdArray.prototype.T;

/**
 * @param {...number} args
 * @return {?}
 */
NdArray.prototype.slice = function(args) {};

/**
 * Return a copy of the array collapsed into one dimension using row-major order (C-style)
 * 
 * @template P
 * @return {?}
 */
NdArray.prototype.flatten = function() {};

/**
 * Permute the dimensions of the array.
 * 
 * @param {...!Array<number>|number=} args
 * @return {?}
 */
NdArray.prototype.transpose = function(args) {};

/**
 * Dot product of two arrays.
 * 
 * @param {(!Int8Array|!Int16Array|!Int32Array|!Uint8Array|!Uint16Array|!Uint32Array|!Float32Array|!Float64Array|!Uint8ClampedArray|?|!Array<?>)} x
 * @return {?}
 */
NdArray.prototype.dot = function(x) {};

/**
 * Assign `x` to the array, element-wise.
 * 
 * @param {(number|!Int8Array|!Int16Array|!Int32Array|!Uint8Array|!Uint16Array|!Uint32Array|!Float32Array|!Float64Array|!Uint8ClampedArray|?|!Array<?>)} x
 * @param {boolean=} copy
 * @return {?}
 */
NdArray.prototype.assign = function(x, copy) {};

/**
 * Add `x` to the array, element-wise.
 * 
 * @param {(number|!Int8Array|!Int16Array|!Int32Array|!Uint8Array|!Uint16Array|!Uint32Array|!Float32Array|!Float64Array|!Uint8ClampedArray|?|!Array<?>)} x
 * @param {boolean=} copy
 * @return {?}
 */
NdArray.prototype.add = function(x, copy) {};

/**
 * Subtract `x` to the array, element-wise.
 * 
 * @param {(number|!Int8Array|!Int16Array|!Int32Array|!Uint8Array|!Uint16Array|!Uint32Array|!Float32Array|!Float64Array|!Uint8ClampedArray|?|!Array<?>)} x
 * @param {boolean=} copy
 * @return {?}
 */
NdArray.prototype.subtract = function(x, copy) {};

/**
 * Multiply array by `x`, element-wise.
 * 
 * @param {(number|!Int8Array|!Int16Array|!Int32Array|!Uint8Array|!Uint16Array|!Uint32Array|!Float32Array|!Float64Array|!Uint8ClampedArray|?|!Array<?>)} x
 * @param {boolean=} copy
 * @return {?}
 */
NdArray.prototype.multiply = function(x, copy) {};

/**
 * Divide array by `x`, element-wise.
 * 
 * @param {(number|!Int8Array|!Int16Array|!Int32Array|!Uint8Array|!Uint16Array|!Uint32Array|!Float32Array|!Float64Array|!Uint8ClampedArray|?|!Array<?>)} x
 * @param {boolean=} copy
 * @return {?}
 */
NdArray.prototype.divide = function(x, copy) {};

/**
 * Raise array elements to powers from given array, element-wise.
 * 
 * @param {(number|!Int8Array|!Int16Array|!Int32Array|!Uint8Array|!Uint16Array|!Uint32Array|!Float32Array|!Float64Array|!Uint8ClampedArray|?|!Array<?>)} x
 * @param {boolean=} copy
 * @return {?}
 */
NdArray.prototype.pow = function(x, copy) {};

/**
 * Calculate the exponential of all elements in the array, element-wise.
 * 
 * @param {boolean=} copy
 * @return {?}
 */
NdArray.prototype.exp = function(copy) {};

/**
 * Calculate the positive square-root of all elements in the array, element-wise.
 * 
 * @param {boolean=} copy
 * @return {?}
 */
NdArray.prototype.sqrt = function(copy) {};

/**
 * Return the maximum value of the array
 * 
 * @return {?}
 */
NdArray.prototype.max = function() {};

/**
 * Return the minimum value of the array
 * 
 * @return {?}
 */
NdArray.prototype.min = function() {};

/**
 * Sum of array elements.
 * 
 * @return {?}
 */
NdArray.prototype.sum = function() {};

/**
 * Returns the standard deviation, a measure of the spread of a distribution, of the array elements.
 * 
 * @return {number}
 */
NdArray.prototype.std = function() {};

/**
 * Return the arithmetic mean of array elements.
 * 
 * @return {?}
 */
NdArray.prototype.mean = function() {};

/**
 * Converts {NdArray} to a native JavaScript {Array}
 * 
 * @template LT
 * @return {!Array<?>}
 */
NdArray.prototype.tolist = function() {};

/**
 * @template LT
 * @return {!Array<?>}
 */
NdArray.prototype.valueOf = function() {};

/**
 * Stringify the array to make it readable in the console, by a human.
 * 
 * @return {string}
 */
NdArray.prototype.inspect = function() {};

/**
 * Stringify object to JSON
 * @return {?}
 */
NdArray.prototype.toJSON = function() {};

/**
 * Create a full copy of the array
 * 
 * @return {?}
 */
NdArray.prototype.clone = function() {};

/**
 * Return true if two arrays have the same shape and elements, false otherwise.
 * @template U
 * @param {(!Int8Array|!Int16Array|!Int32Array|!Uint8Array|!Uint16Array|!Uint32Array|!Float32Array|!Float64Array|!Uint8ClampedArray|!Array<?>|?)} array
 * @return {boolean}
 */
NdArray.prototype.equal = function(array) {};

/**
 * Round array to the to the nearest integer.
 * 
 * @param {boolean=} copy
 * @return {?}
 */
NdArray.prototype.round = function(copy) {};

/**
 * Return the inverse of the array, element-wise.
 * 
 * @return {?}
 */
NdArray.prototype.negative = function() {};

/**
 * @return {?}
 */
NdArray.prototype.diag = function() {};

/**
 * @param {number} axis
 * @param {?} cb
 * @return {void}
 */
NdArray.prototype.iteraxis = function(axis, cb) {};

/**
 * Returns the discrete, linear convolution of the array using the given filter.
 * 
 * \@note: Arrays must have the same dimensions and `filter` must be smaller than the array.
 * \@note: The convolution product is only given for points where the signals overlap completely. Values outside the signal boundary have no effect. This behaviour is known as the 'valid' mode.
 * \@note: Use optimized code for 3x3, 3x3x1, 5x5, 5x5x1 filters, FFT otherwise.
 * 
 * @param {(!Int8Array|!Int16Array|!Int32Array|!Uint8Array|!Uint16Array|!Uint32Array|!Float32Array|!Float64Array|!Uint8ClampedArray|?|!Array<?>)} filter
 * @return {?}
 */
NdArray.prototype.convolve = function(filter) {};

/**
 * @param {(!Int8Array|!Int16Array|!Int32Array|!Uint8Array|!Uint16Array|!Uint32Array|!Float32Array|!Float64Array|!Uint8ClampedArray|?|!Array<?>)} filter
 * @return {?}
 */
NdArray.prototype.fftconvolve = function(filter) {};

/** @typedef {(!Int8Array|!Int16Array|!Int32Array|!Uint8Array|!Uint16Array|!Uint32Array|!Float32Array|!Float64Array|!Uint8ClampedArray|!Array<?>)} */
var NdArrayData;

/** @typedef {(!Int8Array|!Int16Array|!Int32Array|!Uint8Array|!Uint16Array|!Uint32Array|!Float32Array|!Float64Array|!Uint8ClampedArray|!Array<?>|?)} */
var NjArray;

/** @typedef {(number|!Int8Array|!Int16Array|!Int32Array|!Uint8Array|!Uint16Array|!Uint32Array|!Float32Array|!Float64Array|!Uint8ClampedArray|!Array<?>|?)} */
var NjParam;

/**
 * Return absolute value of the input array, element-wise.
 * 
 * @template T
 * @param {(number|!Int8Array|!Int16Array|!Int32Array|!Uint8Array|!Uint16Array|!Uint32Array|!Float32Array|!Float64Array|!Uint8ClampedArray|?|!Array<?>)} x
 * @return {?}
 */
function abs(x) {}

/**
 * Add arguments, element-wise.
 * 
 * @template T
 * @param {(number|!Int8Array|!Int16Array|!Int32Array|!Uint8Array|!Uint16Array|!Uint32Array|!Float32Array|!Float64Array|!Uint8ClampedArray|?|!Array<?>)} a
 * @param {(number|!Int8Array|!Int16Array|!Int32Array|!Uint8Array|!Uint16Array|!Uint32Array|!Float32Array|!Float64Array|!Uint8ClampedArray|?|!Array<?>)} b
 * @return {?}
 */
function add(a, b) {}

/**
 * Return evenly spaced values within a given interval.
 * 
 * @template T
 * @param {number} start_or_stop
 * @param {number|(string|!Int8Array|!Int16Array|!Int32Array|!Uint8Array|!Uint16Array|!Uint32Array|!Float32Array|!Float64Array|!Uint8ClampedArray|!Array<?>)=} stop_or_dtype
 * @param {(string|!Int8Array|!Int16Array|!Int32Array|!Uint8Array|!Uint16Array|!Uint32Array|!Float32Array|!Float64Array|!Uint8ClampedArray|!Array<?>)|number=} dtype_or_step
 * @param {(string|!Int8Array|!Int16Array|!Int32Array|!Uint8Array|!Uint16Array|!Uint32Array|!Float32Array|!Float64Array|!Uint8ClampedArray|!Array<?>)=} dtype
 * @return {?}
 */
function arange(start_or_stop, stop_or_dtype, dtype_or_step, dtype) {}

/**
 * Return trigonometric inverse cosine of the input array, element-wise.
 * 
 * @template T
 * @param {(number|!Int8Array|!Int16Array|!Int32Array|!Uint8Array|!Uint16Array|!Uint32Array|!Float32Array|!Float64Array|!Uint8ClampedArray|?|!Array<?>)} x
 * @return {?}
 */
function arccos(x) {}

/**
 * Return trigonometric inverse sine of the input array, element-wise.
 * 
 * @template T
 * @param {(number|!Int8Array|!Int16Array|!Int32Array|!Uint8Array|!Uint16Array|!Uint32Array|!Float32Array|!Float64Array|!Uint8ClampedArray|?|!Array<?>)} x
 * @return {?}
 */
function arcsin(x) {}

/**
 * Return trigonometric inverse tangent of the input array, element-wise.
 * 
 * @template T
 * @param {(number|!Int8Array|!Int16Array|!Int32Array|!Uint8Array|!Uint16Array|!Uint32Array|!Float32Array|!Float64Array|!Uint8ClampedArray|?|!Array<?>)} x
 * @return {?}
 */
function arctan(x) {}

/**
 * Clip (limit) the values in an array between min and max, element-wise.
 * 
 * @template T
 * @param {(number|!Int8Array|!Int16Array|!Int32Array|!Uint8Array|!Uint16Array|!Uint32Array|!Float32Array|!Float64Array|!Uint8ClampedArray|?|!Array<?>)} x
 * @param {number=} min
 * @param {number=} max
 * @return {?}
 */
function clip(x, min, max) {}

/**
 * Join given arrays along the last axis.
 * 
 * @template T
 * @param {...(!Int8Array|!Int16Array|!Int32Array|!Uint8Array|!Uint16Array|!Uint32Array|!Float32Array|!Float64Array|!Uint8ClampedArray|?|!Array<?>)} arrays
 * @return {?}
 */
function concatenate(arrays) {}

/**
 * Convolve 2 N-dimensionnal arrays
 * 
 * @template T
 * @param {(!Int8Array|!Int16Array|!Int32Array|!Uint8Array|!Uint16Array|!Uint32Array|!Float32Array|!Float64Array|!Uint8ClampedArray|?|!Array<?>)} a
 * @param {(!Int8Array|!Int16Array|!Int32Array|!Uint8Array|!Uint16Array|!Uint32Array|!Float32Array|!Float64Array|!Uint8ClampedArray|?|!Array<?>)} b
 * @return {?}
 */
function convolve(a, b) {}

/**
 * Return trigonometric cosine of the input array, element-wise.
 * 
 * @template T
 * @param {(number|!Int8Array|!Int16Array|!Int32Array|!Uint8Array|!Uint16Array|!Uint32Array|!Float32Array|!Float64Array|!Uint8ClampedArray|?|!Array<?>)} x
 * @return {?}
 */
function cos(x) {}

/**
 * Divide `a` by `b`, element-wise.
 * 
 * @template T
 * @param {(!Int8Array|!Int16Array|!Int32Array|!Uint8Array|!Uint16Array|!Uint32Array|!Float32Array|!Float64Array|!Uint8ClampedArray|?|!Array<?>)} a
 * @param {(number|!Int8Array|!Int16Array|!Int32Array|!Uint8Array|!Uint16Array|!Uint32Array|!Float32Array|!Float64Array|!Uint8ClampedArray|?|!Array<?>)} b
 * @return {?}
 */
function divide(a, b) {}

/**
 * Dot product of two arrays. WARNING: supported products are: - matrix dot matrix - vector dot vector - matrix dot vector - vector dot matrix
 * 
 * @template T
 * @param {(!Int8Array|!Int16Array|!Int32Array|!Uint8Array|!Uint16Array|!Uint32Array|!Float32Array|!Float64Array|!Uint8ClampedArray|?|!Array<?>)} a
 * @param {(!Int8Array|!Int16Array|!Int32Array|!Uint8Array|!Uint16Array|!Uint32Array|!Float32Array|!Float64Array|!Uint8ClampedArray|?|!Array<?>)} b
 * @return {?}
 */
function dot(a, b) {}

/**
 * Return a new array of given shape and type, filled with `undefined` values.
 * 
 * @template T
 * @param {(number|!Int8Array|!Int16Array|!Int32Array|!Uint8Array|!Uint16Array|!Uint32Array|!Float32Array|!Float64Array|!Uint8ClampedArray|!Array<?>)} shape
 * @param {(string|!Int8Array|!Int16Array|!Int32Array|!Uint8Array|!Uint16Array|!Uint32Array|!Float32Array|!Float64Array|!Uint8ClampedArray|!Array<?>)=} dtype
 * @return {?}
 */
function empty(shape, dtype) {}

/**
 * Return true if two arrays have the same shape and elements, false otherwise.
 * 
 * @template T
 * @param {(!Int8Array|!Int16Array|!Int32Array|!Uint8Array|!Uint16Array|!Uint32Array|!Float32Array|!Float64Array|!Uint8ClampedArray|!Array<?>|?)} a
 * @param {(!Int8Array|!Int16Array|!Int32Array|!Uint8Array|!Uint16Array|!Uint32Array|!Float32Array|!Float64Array|!Uint8ClampedArray|!Array<?>|?)} b
 * @return {boolean}
 */
function equal(a, b) {}

/**
 * Calculate the exponential of all elements in the input array, element-wise.
 * 
 * @template T
 * @param {(number|!Int8Array|!Int16Array|!Int32Array|!Uint8Array|!Uint16Array|!Uint32Array|!Float32Array|!Float64Array|!Uint8ClampedArray|?|!Array<?>)} x
 * @return {?}
 */
function exp(x) {}

/**
 * Convolve 2 N-dimensionnal arrays using Fast Fourier Transform (FFT)
 * 
 * @template T
 * @param {(!Int8Array|!Int16Array|!Int32Array|!Uint8Array|!Uint16Array|!Uint32Array|!Float32Array|!Float64Array|!Uint8ClampedArray|?|!Array<?>)} a
 * @param {(!Int8Array|!Int16Array|!Int32Array|!Uint8Array|!Uint16Array|!Uint32Array|!Float32Array|!Float64Array|!Uint8ClampedArray|?|!Array<?>)} b
 * @return {?}
 */
function fftconvolve(a, b) {}

/**
 * Return a copy of the array collapsed into one dimension using row-major order (C-style)
 * 
 * @template T
 * @param {(!Int8Array|!Int16Array|!Int32Array|!Uint8Array|!Uint16Array|!Uint32Array|!Float32Array|!Float64Array|!Uint8ClampedArray|?|!Array<?>)} array
 * @return {?}
 */
function flatten(array) {}

/**
 * @template T
 * @param {(!Int8Array|!Int16Array|!Int32Array|!Uint8Array|!Uint16Array|!Uint32Array|!Float32Array|!Float64Array|!Uint8ClampedArray|!Array<?>)} array
 * @return {!Uint8Array}
 */
function getRawData(array) {}

/**
 * @template T
 * @param {(!Int8Array|!Int16Array|!Int32Array|!Uint8Array|!Uint16Array|!Uint32Array|!Float32Array|!Float64Array|!Uint8ClampedArray|!Array<?>)} array
 * @param {(!Int8Array|!Int16Array|!Int32Array|!Uint8Array|!Uint16Array|!Uint32Array|!Float32Array|!Float64Array|!Uint8ClampedArray|!Array<?>)} data
 * @return {!Uint8Array}
 */
function setRawData(array, data) {}

/**
 * Return the maximum value of the array
 * 
 * @template T
 * @param {(number|!Int8Array|!Int16Array|!Int32Array|!Uint8Array|!Uint16Array|!Uint32Array|!Float32Array|!Float64Array|!Uint8ClampedArray|!Array<?>|?)} x
 * @return {?}
 */
function max(x) {}

/**
 * Return the arithmetic mean of input array elements.
 * 
 * @template T
 * @param {(number|!Int8Array|!Int16Array|!Int32Array|!Uint8Array|!Uint16Array|!Uint32Array|!Float32Array|!Float64Array|!Uint8ClampedArray|!Array<?>|?)} x
 * @return {?}
 */
function mean(x) {}

/**
 * Return the minimum value of the array
 * 
 * @template T
 * @param {(number|!Int8Array|!Int16Array|!Int32Array|!Uint8Array|!Uint16Array|!Uint32Array|!Float32Array|!Float64Array|!Uint8ClampedArray|!Array<?>|?)} x
 * @return {?}
 */
function min(x) {}

/**
 * Multiply arguments, element-wise.
 * 
 * @template T
 * @param {(!Int8Array|!Int16Array|!Int32Array|!Uint8Array|!Uint16Array|!Uint32Array|!Float32Array|!Float64Array|!Uint8ClampedArray|?|!Array<?>)} a
 * @param {(number|!Int8Array|!Int16Array|!Int32Array|!Uint8Array|!Uint16Array|!Uint32Array|!Float32Array|!Float64Array|!Uint8ClampedArray|?|!Array<?>)} b
 * @return {?}
 */
function multiply(a, b) {}

/**
 * Return the inverse of the input array, element-wise.
 * 
 * @template T
 * @param {(number|!Int8Array|!Int16Array|!Int32Array|!Uint8Array|!Uint16Array|!Uint32Array|!Float32Array|!Float64Array|!Uint8ClampedArray|?|!Array<?>)} x
 * @return {?}
 */
function negative(x) {}

/**
 * Return a new array of given shape and type, filled with ones.
 * 
 * @template T
 * @param {(number|!Int8Array|!Int16Array|!Int32Array|!Uint8Array|!Uint16Array|!Uint32Array|!Float32Array|!Float64Array|!Uint8ClampedArray|!Array<?>)} shape
 * @param {string=} dtype
 * @return {?}
 */
function ones(shape, dtype) {}

/**
 * Raise first array elements to powers from second array, element-wise.
 * 
 * @template T
 * @param {(number|!Int8Array|!Int16Array|!Int32Array|!Uint8Array|!Uint16Array|!Uint32Array|!Float32Array|!Float64Array|!Uint8ClampedArray|?|!Array<?>)} x1
 * @param {(number|!Int8Array|!Int16Array|!Int32Array|!Uint8Array|!Uint16Array|!Uint32Array|!Float32Array|!Float64Array|!Uint8ClampedArray|?|!Array<?>)} x2
 * @return {?}
 */
function power(x1, x2) {}

/**
 * Create an array of the given shape and propagate it with random samples from a uniform distribution over [0, 1].
 * 
 * @template T
 * @param {(number|!Int8Array|!Int16Array|!Int32Array|!Uint8Array|!Uint16Array|!Uint32Array|!Float32Array|!Float64Array|!Uint8ClampedArray|!Array<?>)=} shape
 * @return {?}
 */
function random(shape) {}

/**
 * Gives a new shape to an array without changing its data.
 * 
 * @template T
 * @param {(!Int8Array|!Int16Array|!Int32Array|!Uint8Array|!Uint16Array|!Uint32Array|!Float32Array|!Float64Array|!Uint8ClampedArray|?|!Array<?>)} array
 * @param {?} shape
 * @return {?}
 */
function reshape(array, shape) {}

/**
 * Round an array to the to the nearest integer.
 * 
 * @template T
 * @param {(!Int8Array|!Int16Array|!Int32Array|!Uint8Array|!Uint16Array|!Uint32Array|!Float32Array|!Float64Array|!Uint8ClampedArray|?|!Array<?>)} x
 * @return {?}
 */
function round(x) {}

/**
 * Return the sigmoid of the input array, element-wise.
 * 
 * @template T
 * @param {(number|!Int8Array|!Int16Array|!Int32Array|!Uint8Array|!Uint16Array|!Uint32Array|!Float32Array|!Float64Array|!Uint8ClampedArray|?|!Array<?>)} x
 * @param {number=} t
 * @return {?}
 */
function sigmoid(x, t) {}

/**
 * Return trigonometric sine of the input array, element-wise.
 * 
 * @template T
 * @param {(number|!Int8Array|!Int16Array|!Int32Array|!Uint8Array|!Uint16Array|!Uint32Array|!Float32Array|!Float64Array|!Uint8ClampedArray|?|!Array<?>)} x
 * @return {?}
 */
function sin(x) {}

/**
 * Return the softmax, or normalized exponential, of the input array, element-wise.
 * 
 * @template T
 * @param {(number|!Int8Array|!Int16Array|!Int32Array|!Uint8Array|!Uint16Array|!Uint32Array|!Float32Array|!Float64Array|!Uint8ClampedArray|?|!Array<?>)} x
 * @return {?}
 */
function softmax(x) {}

/**
 * Calculate the positive square-root of all elements in the input array, element-wise.
 * 
 * @template T
 * @param {(number|!Int8Array|!Int16Array|!Int32Array|!Uint8Array|!Uint16Array|!Uint32Array|!Float32Array|!Float64Array|!Uint8ClampedArray|?|!Array<?>)} x
 * @return {?}
 */
function sqrt(x) {}

/**
 * Returns the standard deviation, a measure of the spread of a distribution, of the input array elements.
 * 
 * @template T
 * @param {(number|!Int8Array|!Int16Array|!Int32Array|!Uint8Array|!Uint16Array|!Uint32Array|!Float32Array|!Float64Array|!Uint8ClampedArray|!Array<?>|?)} x
 * @return {?}
 */
function std(x) {}

/**
 * Subtract second argument from the first, element-wise.
 * 
 * @template T
 * @param {(number|!Int8Array|!Int16Array|!Int32Array|!Uint8Array|!Uint16Array|!Uint32Array|!Float32Array|!Float64Array|!Uint8ClampedArray|!Array<?>|?)} a
 * @param {(number|!Int8Array|!Int16Array|!Int32Array|!Uint8Array|!Uint16Array|!Uint32Array|!Float32Array|!Float64Array|!Uint8ClampedArray|!Array<?>|?)} b
 * @return {?}
 */
function subtract(a, b) {}

/**
 * Return the sum of input array elements.
 * 
 * @template T
 * @param {(number|!Int8Array|!Int16Array|!Int32Array|!Uint8Array|!Uint16Array|!Uint32Array|!Float32Array|!Float64Array|!Uint8ClampedArray|!Array<?>|?)} x
 * @return {?}
 */
function sum(x) {}

/**
 * Return trigonometric tangent of the input array, element-wise.
 * 
 * @template T
 * @param {(number|!Int8Array|!Int16Array|!Int32Array|!Uint8Array|!Uint16Array|!Uint32Array|!Float32Array|!Float64Array|!Uint8ClampedArray|?|!Array<?>)} x
 * @return {?}
 */
function tan(x) {}

/**
 * Return hyperbolic tangent of the input array, element-wise.
 * 
 * @template T
 * @param {(number|!Int8Array|!Int16Array|!Int32Array|!Uint8Array|!Uint16Array|!Uint32Array|!Float32Array|!Float64Array|!Uint8ClampedArray|?|!Array<?>)} x
 * @return {?}
 */
function tanh(x) {}

/**
 * Permute the dimensions of the input array according to the given axes.
 * 
 * \@example 
 * 
 * arr = nj.arange(6).reshape(1,2,3)
 * // array([[[ 0, 1, 2],
 * //         [ 3, 4, 5]]])
 * arr.T
 * // array([[[ 0],
 * //         [ 3]],
 * //        [[ 1],
 * //         [ 4]],
 * //        [[ 2],
 * //         [ 5]]])
 * arr.transpose(1,0,2)
 * // array([[[ 0, 1, 2]],
 * //        [[ 3, 4, 5]]])
 * @template T
 * @param {(number|!Int8Array|!Int16Array|!Int32Array|!Uint8Array|!Uint16Array|!Uint32Array|!Float32Array|!Float64Array|!Uint8ClampedArray|?|!Array<?>)} x
 * @param {number=} axes
 * @return {?}
 */
function transpose(x, axes) {}

/**
 * Return a new array of given shape and type, filled with zeros.
 * 
 * @template T
 * @param {(number|!Int8Array|!Int16Array|!Int32Array|!Uint8Array|!Uint16Array|!Uint32Array|!Float32Array|!Float64Array|!Uint8ClampedArray|!Array<?>)} shape
 * @param {string=} dtype
 * @return {?}
 */
function zeros(shape, dtype) {}
/** @const */
var errors = {};

/**
 * @param {string=} message
 * @return {!Error}
 */
errors.ValueError = function(message) {};

/**
 * @param {string=} message
 * @return {!Error}
 */
errors.ConfigError = function(message) {};

/**
 * @param {string=} message
 * @return {!Error}
 */
errors.NotImplementedError = function(message) {};

/**
 * @template T, U
 * @param {!Array<?>} shape1
 * @param {!Array<?>} shape2
 * @return {!Array<?>}
 */
function broadcast(shape1, shape2) {}

/**
 * @template T
 * @param {(!Int8Array|!Int16Array|!Int32Array|!Uint8Array|!Uint16Array|!Uint32Array|!Float32Array|!Float64Array|!Uint8ClampedArray|?|!Array<?>)} x
 * @return {?}
 */
function fft(x) {}

/**
 * @template T
 * @param {(!Int8Array|!Int16Array|!Int32Array|!Uint8Array|!Uint16Array|!Uint32Array|!Float32Array|!Float64Array|!Uint8ClampedArray|?|!Array<?>)} x
 * @return {?}
 */
function ifft(x) {}

/**
 * Extract a diagonal or construct a diagonal array.
 * 
 * @template T
 * @param {(!Int8Array|!Int16Array|!Int32Array|!Uint8Array|!Uint16Array|!Uint32Array|!Float32Array|!Float64Array|!Uint8ClampedArray|?|!Array<?>)} x
 * @return {?}
 */
function diag(x) {}

/**
 * The identity array is a square array with ones on the main diagonal.
 * @template T
 * @param {?} n
 * @param {string=} dtype
 * @return {?}
 */
function identity(n, dtype) {}

/**
 * Join a sequence of arrays along a new axis.
 * The axis parameter specifies the index of the new axis in the dimensions of the result.
 * For example, if axis=0 it will be the first dimension and if axis=-1 it will be the last dimension.
 * @template T
 * @param {!Array<?>} arrays
 * @param {number=} axis
 * @return {?}
 */
function stack(arrays, axis) {}
/** @const */
var images = {};
/** @const */
images.data = {};
 /** @type {?} */
images.data.digit;
 /** @type {?} */
images.data.five;
 /** @type {?} */
images.data.node;
 /** @type {?} */
images.data.lena;
 /** @type {?} */
images.data.lenna;
 /** @type {?} */
images.data.moon;

/**
 * @param {string} input
 * @return {?}
 */
images.read = function(input) {};

/**
 * @template T
 * @param {?} img
 * @param {string} dest
 * @return {void}
 */
images.save = function(img, dest) {};

/**
 * @template T
 * @param {?} img
 * @param {number} height
 * @param {number} width
 * @return {?}
 */
images.resize = function(img, height, width) {};

/**
 * @template T
 * @param {?} img
 * @return {?}
 */
images.sat = function(img) {};

/**
 * @template T
 * @param {?} img
 * @return {?}
 */
images.ssat = function(img) {};

/**
 * @template T
 * @param {?} img
 * @return {?}
 */
images.sobel = function(img) {};

/**
 * @template T
 * @param {?} img
 * @return {?}
 */
images.scharr = function(img) {};

/**
 * @template T
 * @param {number} h0
 * @param {number} w0
 * @param {number} H
 * @param {number} W
 * @param {?} SAT
 * @return {number}
 */
images.areaSum = function(h0, w0, H, W, SAT) {};

/**
 * @template T
 * @param {?} img
 * @return {number}
 */
images.areaValue = function(img) {};

/**
 * @template T
 * @param {?} img
 * @return {?}
 */
images.rgb2gray = function(img) {};

/**
 * @template T, O
 * @param {?} img
 * @return {?}
 */
images.flip = function(img) {};

/**
 * @template T
 * @param {(!Int8Array|!Int16Array|!Int32Array|!Uint8Array|!Uint16Array|!Uint32Array|!Float32Array|!Float64Array|!Uint8ClampedArray|?|!Array<?>)} arr
 * @param {string=} dtype
 * @return {?}
 */
function array(arr, dtype) {}

/**
 * @template T
 * @param {(!Int8Array|!Int16Array|!Int32Array|!Uint8Array|!Uint16Array|!Uint32Array|!Float32Array|!Float64Array|!Uint8ClampedArray|!Array<?>|?)} arr
 * @return {(!Int8Array|!Int16Array|!Int32Array|!Uint8Array|!Uint16Array|!Uint32Array|!Float32Array|!Float64Array|!Uint8ClampedArray|!Array<!Int8Array>|?)}
 */
function int8(arr) {}

/**
 * @template T
 * @param {(!Int8Array|!Int16Array|!Int32Array|!Uint8Array|!Uint16Array|!Uint32Array|!Float32Array|!Float64Array|!Uint8ClampedArray|!Array<?>|?)} arr
 * @return {(!Int8Array|!Int16Array|!Int32Array|!Uint8Array|!Uint16Array|!Uint32Array|!Float32Array|!Float64Array|!Uint8ClampedArray|?|!Array<!Uint8Array>)}
 */
function uint8(arr) {}

/**
 * @template T
 * @param {(!Int8Array|!Int16Array|!Int32Array|!Uint8Array|!Uint16Array|!Uint32Array|!Float32Array|!Float64Array|!Uint8ClampedArray|!Array<?>|?)} arr
 * @return {(!Int8Array|!Int16Array|!Int32Array|!Uint8Array|!Uint16Array|!Uint32Array|!Float32Array|!Float64Array|!Uint8ClampedArray|!Array<!Int16Array>|?)}
 */
function int16(arr) {}

/**
 * @template T
 * @param {(!Int8Array|!Int16Array|!Int32Array|!Uint8Array|!Uint16Array|!Uint32Array|!Float32Array|!Float64Array|!Uint8ClampedArray|!Array<?>|?)} arr
 * @return {(!Int8Array|!Int16Array|!Int32Array|!Uint8Array|!Uint16Array|!Uint32Array|!Float32Array|!Float64Array|!Uint8ClampedArray|!Array<!Uint16Array>|?)}
 */
function uint16(arr) {}

/**
 * @template T
 * @param {(!Int8Array|!Int16Array|!Int32Array|!Uint8Array|!Uint16Array|!Uint32Array|!Float32Array|!Float64Array|!Uint8ClampedArray|!Array<?>|?)} arr
 * @return {(!Int8Array|!Int16Array|!Int32Array|!Uint8Array|!Uint16Array|!Uint32Array|!Float32Array|!Float64Array|!Uint8ClampedArray|!Array<!Int32Array>|?)}
 */
function int32(arr) {}

/**
 * @template T
 * @param {(!Int8Array|!Int16Array|!Int32Array|!Uint8Array|!Uint16Array|!Uint32Array|!Float32Array|!Float64Array|!Uint8ClampedArray|!Array<?>|?)} arr
 * @return {(!Int8Array|!Int16Array|!Int32Array|!Uint8Array|!Uint16Array|!Uint32Array|!Float32Array|!Float64Array|!Uint8ClampedArray|?|!Array<!Uint32Array>)}
 */
function uint32(arr) {}

/**
 * @template T
 * @param {(!Int8Array|!Int16Array|!Int32Array|!Uint8Array|!Uint16Array|!Uint32Array|!Float32Array|!Float64Array|!Uint8ClampedArray|!Array<?>|?)} arr
 * @return {(!Int8Array|!Int16Array|!Int32Array|!Uint8Array|!Uint16Array|!Uint32Array|!Float32Array|!Float64Array|!Uint8ClampedArray|?|!Array<!Float32Array>)}
 */
function float32(arr) {}

/**
 * @template T
 * @param {(!Int8Array|!Int16Array|!Int32Array|!Uint8Array|!Uint16Array|!Uint32Array|!Float32Array|!Float64Array|!Uint8ClampedArray|!Array<?>|?)} arr
 * @return {(!Int8Array|!Int16Array|!Int32Array|!Uint8Array|!Uint16Array|!Uint32Array|!Float32Array|!Float64Array|!Uint8ClampedArray|!Array<!Float64Array>|?)}
 */
function float64(arr) {}
