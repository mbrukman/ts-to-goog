/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/highland/index.d.ts:
/**
 * @record
 * @struct
 */
function HighlandStatic() {}

/* TODO: CallSignature:  */

/* TODO: CallSignature:  */

/* TODO: CallSignature:  */

/* TODO: CallSignature:  */

/* TODO: CallSignature:  */

/* TODO: CallSignature:  */

/* TODO: CallSignature:  */

/* TODO: CallSignature:  */
 /** @type {!Highland.Nil} */
HighlandStatic.prototype.nil;

/**
 * Returns true if `x` is a Highland Stream.
 * 
 * @id isStream
 * \@section Streams
 * \@name _.isStream(x)
 * \@api public
 * @param {?} x - the object to test
 * @return {boolean}
 */
HighlandStatic.prototype.isStream = function(x) {};

/**
 * @param {?} x
 * @return {boolean}
 */
HighlandStatic.prototype.isStreamError = function(x) {};

/**
 * @param {?} x
 * @return {boolean}
 */
HighlandStatic.prototype.isStreamRedirect = function(x) {};

/**
 * Logs values to the console, a simple wrapper around `console.log` that
 * it suitable for passing to other functions by reference without having to
 * call `bind`.
 * 
 * @id log
 * \@section Utils
 * \@name _.log(args..)
 * \@api public
 * @param {?} x
 * @param {...?} args
 * @return {void}
 */
HighlandStatic.prototype.log = function(x, args) {};

/**
 * Wraps a node-style async function which accepts a callback, transforming
 * it to a function which accepts the same arguments minus the callback and
 * returns a Highland Stream instead. The wrapped function keeps its context,
 * so you can safely use it as a method without binding (see the second
 * example below).
 * 
 * wrapCallback also accepts an optional mappingHint, which specifies how
 * callback arguments are pushed to the stream. This can be used to handle
 * non-standard callback protocols that pass back more than one value.
 * 
 * mappingHint can be a function, number, or array. See the documentation on
 * EventEmitter Stream Objects for details on the mapping hint. If
 * mappingHint is a function, it will be called with all but the first
 * argument that is passed to the callback. The first is still assumed to be
 * the error argument.
 * 
 * @id wrapCallback
 * \@section Utils
 * \@name _.wrapCallback(f)
 * \@api public
 * @param {!Function} f
 * @param {(number|!Function|!Array<string>)=} mappingHint
 * @return {function(!Array<?>): !Highland.Stream<?>}
 */
HighlandStatic.prototype.wrapCallback = function(f, mappingHint) {};

/**
 * Extends one object with the properties of another. **Note:** The
 * arguments are in the reverse order of other libraries such as
 * underscore. This is so it follows the convention of other functions in
 * this library and so you can more meaningfully partially apply it.
 * 
 * @id extend
 * \@section Objects
 * \@name _.extend(a, b)
 * \@api public
 * @param {!Object} extensions_or_target
 * @param {!Object=} target
 * @return {!Object|function(!Object): !Object}
 */
HighlandStatic.prototype.extend = function(extensions_or_target, target) {};

/**
 * Returns a property from an object.
 * 
 * @id get
 * \@section Objects
 * \@name _.get(prop, obj)
 * \@api public
 * @param {string} prop
 * @param {!Object=} obj
 * @return {string|function(!Object): !Object}
 */
HighlandStatic.prototype.get = function(prop, obj) {};

/**
 * Returns keys from an Object as a Stream.
 * 
 * @id keys
 * \@section Objects
 * \@name _.keys(obj)
 * \@api public
 * @param {!Object} obj
 * @return {!Highland.Stream<string>}
 */
HighlandStatic.prototype.keys = function(obj) {};

/**
 * Returns key/value pairs for an Object as a Stream. Reads properties
 * lazily, so if you don't read from all keys on an object, not
 * all properties will be read from (may have an effect where getters
 * are used).
 * 
 * @id pairs
 * \@section Objects
 * \@name _.pairs(obj)
 * \@api public
 * @param {!Object|!Array<?>} obj
 * @return {!Highland.Stream<!Array<?>>}
 */
HighlandStatic.prototype.pairs = function(obj) {};

/**
 * Updates a property on an object, returning the updated object.
 * 
 * @id set
 * \@section Objects
 * \@name _.set(prop, value, obj)
 * \@api public
 * @param {string} prop
 * @param {?} val
 * @param {!Object=} obj
 * @return {!Object|function(!Object): !Object}
 */
HighlandStatic.prototype.set = function(prop, val, obj) {};

/**
 * Returns values from an Object as a Stream. Reads properties
 * lazily, so if you don't read from all keys on an object, not
 * all properties will be read from (may have an effect where getters
 * are used).
 * 
 * @id values
 * \@section Objects
 * \@name _.values(obj)
 * \@api public
 * @param {!Object} obj
 * @return {!Highland.Stream<?>}
 */
HighlandStatic.prototype.values = function(obj) {};

/**
 * Creates a composite function, which is the application of function1 to
 * the results of function2. You can pass an arbitrary number of arguments
 * and have them composed. This means you can't partially apply the compose
 * function itself.
 * 
 * @id compose
 * \@name compose(fn1, fn2, ...)
 * \@section Functions
 * \@api public
 * @param {...!Function} functions
 * @return {!Function}
 */
HighlandStatic.prototype.compose = function(functions) {};

/**
 * Transforms a function with specific arity (all arguments must be
 * defined) in a way that it can be called as a chain of functions until
 * the arguments list is saturated.
 * 
 * This function is not itself curryable.
 * 
 * @id curry
 * \@name curry(fn, [*arguments])
 * \@section Functions
 * \@api public
 * @param {!Function} fn
 * @param {...?} args
 * @return {!Function} Function
 */
HighlandStatic.prototype.curry = function(fn, args) {};

/**
 * Evaluates the function `fn` with the argument positions swapped. Only
 * works with functions that accept two arguments.
 * 
 * @id flip
 * \@name flip(fn, [x, y])
 * \@section Functions
 * \@api public
 * @param {!Function} fn
 * @param {...?} args
 * @return {!Function}
 */
HighlandStatic.prototype.flip = function(fn, args) {};

/**
 * Same as `curry` but with a specific number of arguments. This can be
 * useful when functions do not explicitly define all its parameters.
 * 
 * This function is not itself curryable.
 * 
 * @id ncurry
 * \@name ncurry(n, fn, [args...])
 * \@section Functions
 * \@api public
 * @param {number} n
 * @param {!Function} fn
 * @param {...?} args
 * @return {!Function} Function
 */
HighlandStatic.prototype.ncurry = function(n, fn, args) {};

/**
 * Partially applies the function (regardless of whether it has had curry
 * called on it). This will always postpone execution until at least the next
 * call of the partially applied function.
 * 
 * @id partial
 * \@name partial(fn, args...)
 * \@section Functions
 * \@api public
 * @param {!Function} f
 * @param {...?} args
 * @return {!Function}
 */
HighlandStatic.prototype.partial = function(f, args) {};

/**
 * The reversed version of compose. Where arguments are in the order of
 * application.
 * 
 * @id seq
 * \@name seq(fn1, fn2, ...)
 * \@section Functions
 * \@api public
 * @param {...!Function} functions
 * @return {!Function}
 */
HighlandStatic.prototype.seq = function(functions) {};

/**
 * Add two values. Can be partially applied.
 * 
 * @id add
 * \@section Operators
 * \@name _.add(a, b)
 * \@api public
 * @param {number} a
 * @param {number=} b
 * @return {number|function(number): number}
 */
HighlandStatic.prototype.add = function(a, b) {};

/**
 * Perform logical negation on a value. If `x` is truthy then returns false,
 * otherwise returns true.
 * 
 * @id not
 * \@section Operators
 * \@name _.not(x)
 * \@api public
 * 
 * _.not(true)   // => false
 * _.not(false)  // => true
 * @template R
 * @param {?} a
 * @return {boolean}
 */
HighlandStatic.prototype.not = function(a) {};
/** @const */
var Highland = {};
/**
 * @record
 * @struct
 */
Highland.Thenable = function() {};

/**
 * @template U
 * @param {function(R): !Highland.Thenable<U>|function(R): U=} onFulfilled
 * @param {function(?): !Highland.Thenable<U>|function(?): U=} onRejected
 * @return {!Highland.Thenable<U>}
 */
Highland.Thenable.prototype.then = function(onFulfilled, onRejected) {};
/**
 * @record
 * @struct
 */
Highland.Nil = function() {};
 /** @type {!Highland.Nil} */
Highland.Nil.prototype.Highland_NIL;

/**
 * @constructor
 * @struct
 * @param {!Error} err
 */
Highland.StreamError = function(err) {};
 /** @type {!Error} */
Highland.StreamError.prototype.error;

/**
 * @constructor
 * @struct
 * @param {!Highland.Stream<R>} to
 */
Highland.StreamRedirect = function(to) {};
 /** @type {!Highland.Stream<R>} */
Highland.StreamRedirect.prototype.to;
/**
 * @record
 * @struct
 */
Highland.Stream = function() {};

/**
 * Destroys a stream by unlinking it from any consumers and sources. This will
 * stop all consumers from receiving events from this stream and removes this
 * stream as a consumer of any source stream.
 * 
 * This function calls end() on the stream and unlinks it from any piped-to streams.
 * 
 * @id pipe
 * \@section Streams
 * \@name Stream.destroy()
 * \@api public
 * @return {void}
 */
Highland.Stream.prototype.destroy = function() {};

/**
 * Ends a Stream. This is the same as sending a [nil](#nil) value as data.
 * You shouldn't need to call this directly, rather it will be called by
 * any [Node Readable Streams](http://nodejs.org/api/stream.html#stream_class_stream_readable)
 * you pipe in.
 * 
 * @id end
 * \@section Streams
 * \@name Stream.end()
 * \@api public
 * @return {void}
 */
Highland.Stream.prototype.end = function() {};

/**
 * Pauses the stream. All Highland Streams start in the paused state.
 * 
 * @id pause
 * \@section Streams
 * \@name Stream.pause()
 * \@api public
 * @return {void}
 */
Highland.Stream.prototype.pause = function() {};

/**
 * Resumes a paused Stream. This will either read from the Stream's incoming
 * buffer or request more data from an upstream source.
 * 
 * @id resume
 * \@section Streams
 * \@name Stream.resume()
 * \@api public
 * @return {void}
 */
Highland.Stream.prototype.resume = function() {};

/**
 * Writes a value to the Stream. If the Stream is paused it will go into the
 * Stream's incoming buffer, otherwise it will be immediately processed and
 * sent to the Stream's consumers (if any). Returns false if the Stream is
 * paused, true otherwise. This lets Node's pipe method handle back-pressure.
 * 
 * You shouldn't need to call this yourself, but it may be called by Node
 * functions which treat Highland Streams as a [Node Writable Stream](http://nodejs.org/api/stream.html#stream_class_stream_writable).
 * 
 * @id write
 * \@section Streams
 * \@name Stream.write(x)
 * \@api public
 * @param {R} x - the value to write to the Stream
 * @return {boolean}
 */
Highland.Stream.prototype.write = function(x) {};

/**
 * Adds a value to the end of a Stream.
 * 
 * @id append
 * \@section Streams
 * \@name Stream.append(y)
 * \@api public
 * @param {R} y - the value to append to the Stream
 * @return {!Highland.Stream}
 */
Highland.Stream.prototype.append = function(y) {};

/**
 * Takes one Stream and batches incoming data into arrays of given length
 * 
 * @id batch
 * \@section Transforms
 * \@name Stream.batch(n)
 * \@api public
 * 
 * _([1, 2, 3, 4, 5]).batch(2)  // => [1, 2], [3, 4], [5]
 * @param {number} n
 * @return {!Highland.Stream<!Array<R>>}
 */
Highland.Stream.prototype.batch = function(n) {};

/**
 * Takes one Stream and batches incoming data within a maximum time frame
 * into arrays of a maximum length.
 * 
 * @id batchWithTimeOrCount
 * \@section Transforms
 * \@name Stream.batchWithTimeOrCount(ms, n)
 * \@api public
 * 
 * _(function (push) {
 *     push(1);
 *     push(2);
 *     push(3);
 *     setTimeout(push, 20, 4);
 * }).batchWithTimeOrCount(10, 2)
 * 
 * // => [1, 2], [3], [4]
 * @param {number} ms
 * @param {number} n
 * @return {!Highland.Stream<!Array<R>>}
 */
Highland.Stream.prototype.batchWithTimeOrCount = function(ms, n) {};

/**
 * Groups all values into an Array and passes down the stream as a single
 * data event. This is a bit like doing [toArray](#toArray), but instead
 * of accepting a callback and causing a *thunk*, it passes the value on.
 * 
 * @id collect
 * \@section Streams
 * \@name Stream.collect()
 * \@api public
 * @return {!Highland.Stream<!Array<R>>}
 */
Highland.Stream.prototype.collect = function() {};

/**
 * Filters a Stream to drop all non-truthy values.
 * 
 * @id compact
 * \@section Streams
 * \@name Stream.compact()
 * \@api public
 * @return {!Highland.Stream}
 */
Highland.Stream.prototype.compact = function() {};

/**
 * Consumes values from a Stream (once resumed) and returns a new Stream for
 * you to optionally push values onto using the provided push / next functions.
 * 
 * This function forms the basis of many higher-level Stream operations.
 * It will not cause a paused stream to immediately resume, but behaves more
 * like a 'through' stream, handling values as they are read.
 * 
 * @id consume
 * \@section Streams
 * \@name Stream.consume(f)
 * \@api public
 * @template U
 * @param {function(!Error, R, function(!Error, U): void, function(): void): void} f
 * @return {!Highland.Stream<U>}
 */
Highland.Stream.prototype.consume = function(f) {};

/**
 * Holds off pushing data events downstream until there has been no more
 * data for `ms` milliseconds. Sends the last value that occurred before
 * the delay, discarding all other values.
 * 
 * @id debounce
 * \@section Streams
 * \@name Stream.debounce(ms)
 * \@api public
 * @param {number} ms
 * @return {!Highland.Stream}
 */
Highland.Stream.prototype.debounce = function(ms) {};

/**
 * Creates a new Stream which applies a function to each value from the source
 * and re-emits the source value. Useful when you want to mutate the value or
 * perform side effects
 * 
 * @id doto
 * \@section Transforms
 * \@name Stream.doto(f)
 * \@api public
 * 
 * var appended = _([[1], [2], [3], [4]]).doto(function (x) {
 *     x.push(1);
 * });
 * 
 * _([1, 2, 3]).doto(console.log)
 * // 1
 * // 2
 * // 3
 * // => 1, 2, 3
 * @param {function(R): void} f
 * @return {!Highland.Stream}
 */
Highland.Stream.prototype.doto = function(f) {};

/**
 * Acts as the inverse of [`take(n)`](#take) - instead of returning the first `n` values, it ignores the
 * first `n` values and then emits the rest. `n` must be of type `Number`, if not the whole stream will
 * be returned. All errors (even ones emitted before the nth value) will be emitted.
 * 
 * @id drop
 * \@section Transforms
 * \@name Stream.drop(n)
 * \@api public
 * 
 * _([1, 2, 3, 4]).drop(2) // => 3, 4
 * @param {number} n
 * @return {!Highland.Stream}
 */
Highland.Stream.prototype.drop = function(n) {};

/**
 * Extracts errors from a Stream and applies them to an error handler
 * function. Returns a new Stream with the errors removed (unless the error
 * handler chooses to rethrow them using `push`). Errors can also be
 * transformed and put back onto the Stream as values.
 * 
 * @id errors
 * \@section Streams
 * \@name Stream.errors(f)
 * \@api public
 * @param {function(!Error, function(!Error, R): void): void} f
 * @return {!Highland.Stream}
 */
Highland.Stream.prototype.errors = function(f) {};

/**
 * Creates a new Stream including only the values which pass a truth test.
 * 
 * @id filter
 * \@section Streams
 * \@name Stream.filter(f)
 * \@api public
 * @param {function(R): boolean} f - the truth test function
 * @return {!Highland.Stream}
 */
Highland.Stream.prototype.filter = function(f) {};

/**
 * A convenient form of filter, which returns the first object from a
 * Stream that passes the provided truth test
 * 
 * @id find
 * \@section Streams
 * \@name Stream.find(f)
 * \@api public
 * @param {function(R): boolean} f
 * @return {!Highland.Stream}
 */
Highland.Stream.prototype.find = function(f) {};

/**
 * A convenient form of [where](#where), which returns the first object from a
 * Stream that matches a set of property values. findWhere is to [where](#where) as [find](#find) is to [filter](#filter).
 * 
 * @id findWhere
 * \@section Transforms
 * \@name Stream.findWhere(props)
 * \@api public
 * 
 * var docs = [
 *     {type: 'blogpost', title: 'foo'},
 *     {type: 'blogpost', title: 'bar'},
 *     {type: 'comment', title: 'foo'}
 * ];
 * 
 * _(docs).findWhere({type: 'blogpost'})
 * // => {type: 'blogpost', title: 'foo'}
 * 
 * // example with partial application
 * var firstBlogpost = _.findWhere({type: 'blogpost'});
 * 
 * firstBlogpost(docs)
 * // => {type: 'blogpost', title: 'foo'}
 * @param {!Object} props
 * @return {!Highland.Stream}
 */
Highland.Stream.prototype.findWhere = function(props) {};

/**
 * @param {function(R): string|string} f_or_prop
 * @return {!Highland.Stream<!Object<string,!Array<R>>>}
 */
Highland.Stream.prototype.group = function(f_or_prop) {};

/**
 * Creates a new Stream with only the first value from the source.
 * 
 * @id head
 * \@section Streams
 * \@name Stream.head()
 * \@api public
 * 
 * _([1, 2, 3, 4]).head() // => 1
 * @return {!Highland.Stream}
 */
Highland.Stream.prototype.head = function() {};

/**
 * Calls a named method on each object from the Stream - returning
 * a new stream with the result of those calls.
 * 
 * @id invoke
 * \@section Streams
 * \@name Stream.invoke(method, args)
 * \@api public
 * @template U
 * @param {string} method
 * @param {!Array<?>} args
 * @return {!Highland.Stream<U>}
 */
Highland.Stream.prototype.invoke = function(method, args) {};

/**
 * Drops all values from the Stream apart from the last one (if any).
 * 
 * @id last
 * \@section Streams
 * \@name Stream.last()
 * \@api public
 * @return {!Highland.Stream}
 */
Highland.Stream.prototype.last = function() {};

/**
 * Creates a new Stream, which when read from, only returns the last
 * seen value from the source. The source stream does not experience
 * back-pressure. Useful if you're using a Stream to model a changing
 * property which you need to query periodically.
 * 
 * @id latest
 * \@section Streams
 * \@name Stream.latest()
 * \@api public
 * @return {!Highland.Stream}
 */
Highland.Stream.prototype.latest = function() {};

/**
 * Creates a new Stream of transformed values by applying a function to each
 * value from the source. The transformation function can be replaced with
 * a non-function value for convenience, and it will emit that value
 * for every data event on the source Stream.
 * 
 * @id map
 * \@section Streams
 * \@name Stream.map(f)
 * \@api public
 * @template U
 * @param {function(R): U} f - the transformation function or value to map to
 * @return {!Highland.Stream<U>}
 */
Highland.Stream.prototype.map = function(f) {};

/**
 * Retrieves values associated with a given property from all elements in
 * the collection.
 * 
 * @id pluck
 * \@section Streams
 * \@name Stream.pluck(property)
 * \@api public
 * @template U
 * @param {string} prop
 * @return {!Highland.Stream<U>}
 */
Highland.Stream.prototype.pluck = function(prop) {};

/**
 * @template U
 * @param {U} memo
 * @param {function(U, R): U} f
 * @return {!Highland.Stream<U>}
 */
Highland.Stream.prototype.reduce = function(memo, f) {};

/**
 * Same as [reduce](#reduce), but uses the first element as the initial
 * state instead of passing in a `memo` value.
 * 
 * @id reduce1
 * \@section Streams
 * \@name Stream.reduce1(iterator)
 * \@api public
 * @template U
 * @param {U} memo
 * @param {function(U, R): U} f
 * @return {!Highland.Stream<U>}
 */
Highland.Stream.prototype.reduce1 = function(memo, f) {};

/**
 * The inverse of [filter](#filter).
 * 
 * @id reject
 * \@section Streams
 * \@name Stream.reject(f)
 * \@api public
 * 
 * var odds = _([1, 2, 3, 4]).reject(function (x) {
 *     return x % 2 === 0;
 * });
 * @param {function(R): boolean} f
 * @return {!Highland.Stream}
 */
Highland.Stream.prototype.reject = function(f) {};

/**
 * Like [reduce](#reduce), but emits each intermediate value of the
 * reduction as it is calculated.
 * 
 * @id scan
 * \@section Streams
 * \@name Stream.scan(memo, iterator)
 * \@api public
 * @template U
 * @param {U} memo - the initial state of the reduction
 * @param {function(U, R): U} x
 * @return {!Highland.Stream<U>}
 */
Highland.Stream.prototype.scan = function(memo, x) {};

/**
 * Same as [scan](#scan), but uses the first element as the initial
 * state instead of passing in a `memo` value.
 * 
 * @id scan1
 * \@section Streams
 * \@name Stream.scan1(iterator)
 * \@api public
 * 
 * _([1, 2, 3, 4]).scan1(add) // => 1, 3, 6, 10
 * @template U
 * @param {U} memo
 * @param {function(U, R): U} x
 * @return {!Highland.Stream<U>}
 */
Highland.Stream.prototype.scan1 = function(memo, x) {};

/**
 * Like the [errors](#errors) method, but emits a Stream end marker after
 * an Error is encountered.
 * 
 * @id stopOnError
 * \@section Streams
 * \@name Stream.stopOnError(f)
 * \@api public
 * @param {function(!Error): void} f
 * @return {!Highland.Stream}
 */
Highland.Stream.prototype.stopOnError = function(f) {};

/**
 * Creates a new Stream with the first `n` values from the source.
 * 
 * @id take
 * \@section Streams
 * \@name Stream.take(n)
 * \@api public
 * @param {number} n
 * @return {!Highland.Stream}
 */
Highland.Stream.prototype.take = function(n) {};

/**
 * An alias for the [doto](#doto) method.
 * 
 * @id tap
 * \@section Transforms
 * \@name Stream.tap(f)
 * \@api public
 * 
 * _([1, 2, 3]).tap(console.log)
 * @param {function(R): void} f
 * @return {!Highland.Stream}
 */
Highland.Stream.prototype.tap = function(f) {};

/**
 * Ensures that only one data event is push downstream (or into the buffer)
 * every `ms` milliseconds, any other values are dropped.
 * 
 * @id throttle
 * \@section Streams
 * \@name Stream.throttle(ms)
 * \@api public
 * @param {number} ms
 * @return {!Highland.Stream}
 */
Highland.Stream.prototype.throttle = function(ms) {};

/**
 * A convenient form of filter, which returns all objects from a Stream
 * match a set of property values.
 * 
 * @id where
 * \@section Streams
 * \@name Stream.where(props)
 * \@api public
 * @param {!Object} props
 * @return {!Highland.Stream}
 */
Highland.Stream.prototype.where = function(props) {};

/**
 * Concatenates a Stream to the end of this Stream.
 * 
 * Be aware that in the top-level export, the args may be in the reverse
 * order to what you'd expect `_([a], [b]) => [b, a]`, as this follows the
 * convention of other top-level exported functions which do `x` to `y`.
 * 
 * @id concat
 * \@section Streams
 * \@name Stream.concat(ys)
 * \@params {Stream | Array} ys - the values to concatenate onto this Stream
 * \@api public
 * @param {!Highland.Stream|!Array<R>} ys
 * @return {!Highland.Stream}
 */
Highland.Stream.prototype.concat = function(ys) {};

/**
 * Filters using a predicate which returns a Stream. If you need to check
 * against an asynchronous data source when filtering a Stream, this can
 * be convenient. The Stream returned from the filter function should have
 * a Boolean as it's first value (all other values on the Stream will be
 * disregarded).
 * 
 * @id flatFilter
 * \@section Streams
 * \@name Stream.flatFilter(f)
 * \@api public
 * @param {function(R): !Highland.Stream<boolean>} f
 * @return {!Highland.Stream}
 */
Highland.Stream.prototype.flatFilter = function(f) {};

/**
 * Creates a new Stream of values by applying each item in a Stream to an
 * iterator function which may return a Stream. Each item on these result
 * Streams are then emitted on a single output Stream.
 * 
 * The same as calling `stream.map(f).flatten()`.
 * 
 * @id flatMap
 * \@section Streams
 * \@name Stream.flatMap(f)
 * \@api public
 * @template U
 * @param {function(R): !Highland.Stream<U>|function(R): U} f
 * @return {!Highland.Stream<U>}
 */
Highland.Stream.prototype.flatMap = function(f) {};

/**
 * Recursively reads values from a Stream which may contain nested Streams
 * or Arrays. As values or errors are encountered, they are emitted on a
 * single output Stream.
 * 
 * @id flatten
 * \@section Streams
 * \@name Stream.flatten()
 * \@api public
 * @template U
 * @return {!Highland.Stream<U>|!Highland.Stream}
 */
Highland.Stream.prototype.flatten = function() {};

/**
 * Forks a stream, allowing you to add additional consumers with shared
 * back-pressure. A stream forked to multiple consumers will only pull values
 * from it's source as fast as the slowest consumer can handle them.
 * 
 * @id fork
 * \@section Streams
 * \@name Stream.fork()
 * \@api public
 * @return {!Highland.Stream}
 */
Highland.Stream.prototype.fork = function() {};

/**
 * Takes a Stream of Streams and merges their values and errors into a
 * single new Stream. The merged stream ends when all source streams have
 * ended.
 * 
 * Note that no guarantee is made with respect to the order in which
 * values for each stream end up in the merged stream. Values in the
 * merged stream will, however, respect the order they were emitted from
 * their respective streams.
 * 
 * @id merge
 * \@section Streams
 * \@name Stream.merge()
 * \@api public
 * 
 * var txt = _(['foo.txt', 'bar.txt']).map(readFile)
 * var md = _(['baz.md']).map(readFile)
 * 
 * _([txt, md]).merge();
 * // => contents of foo.txt, bar.txt and baz.txt in the order they were read
 * @param {!Highland.Stream<!Highland.Stream>} ys
 * @return {!Highland.Stream}
 */
Highland.Stream.prototype.merge = function(ys) {};

/**
 * Observes a stream, allowing you to handle values as they are emitted, without
 * adding back-pressure or causing data to be pulled from the source. This can
 * be useful when you are performing two related queries on a stream where one
 * would block the other. Just be aware that a slow observer could fill up it's
 * buffer and cause memory issues. Where possible, you should use [fork](#fork).
 * 
 * @id observe
 * \@section Streams
 * \@name Stream.observe()
 * \@api public
 * @return {!Highland.Stream}
 */
Highland.Stream.prototype.observe = function() {};

/**
 * Switches source to an alternate Stream if the current Stream is empty.
 * 
 * @id otherwise
 * \@section Streams
 * \@name Stream.otherwise(ys)
 * \@api public
 * @param {!Highland.Stream} ys
 * @return {!Highland.Stream}
 */
Highland.Stream.prototype.otherwise = function(ys) {};

/**
 * Takes a Stream of Streams and reads from them in parallel, buffering
 * the results until they can be returned to the consumer in their original
 * order.
 * 
 * @id parallel
 * \@section Streams
 * \@name Stream.parallel(n)
 * \@api public
 * @param {number} n
 * @return {!Highland.Stream}
 */
Highland.Stream.prototype.parallel = function(n) {};

/**
 * @template U
 * @return {!Highland.Stream<U>}
 */
Highland.Stream.prototype.sequence = function() {};

/**
 * @template U
 * @return {!Highland.Stream<U>}
 */
Highland.Stream.prototype.series = function() {};

/**
 * Takes two Streams and returns a Stream of corresponding pairs.
 * 
 * @id zip
 * \@section Streams
 * \@name Stream.zip(ys)
 * \@api public
 * @param {!Array<R>|!Highland.Stream} ys
 * @return {!Highland.Stream}
 */
Highland.Stream.prototype.zip = function(ys) {};

/**
 * @param {!Function} f
 * @return {void}
 */
Highland.Stream.prototype.apply = function(f) {};

/**
 * Calls a function once the Stream has ended. This method consumes the stream.
 * If the Stream has already ended, the function is called immediately.
 * 
 * If an error from the Stream reaches this call, it will emit an `error` event
 * (i.e., it will call `emit('error')` on the stream being consumed).  This
 * event will cause an error to be thrown if unhandled.
 * 
 * As a special case, it is possible to chain `done` after a call to
 * [each](#each) even though both methods consume the stream.
 * 
 * @id done
 * \@section Consumption
 * \@name Stream.done(f)
 * \@api public
 * 
 * var total = 0;
 * _([1, 2, 3, 4]).each(function (x) {
 *     total += x;
 * }).done(function () {
 *     // total will be 10
 * });
 * @param {function(): void} f
 * @return {void}
 */
Highland.Stream.prototype.done = function(f) {};

/**
 * Iterates over every value from the Stream, calling the iterator function
 * on each of them. This function causes a **thunk**.
 * 
 * If an error from the Stream reaches the `each` call, it will emit an
 * error event (which will cause it to throw if unhandled).
 * 
 * @id each
 * \@section Streams
 * \@name Stream.each(f)
 * \@api public
 * @param {function(R): void} f
 * @return {void}
 */
Highland.Stream.prototype.each = function(f) {};

/**
 * Pipes a Highland Stream to a [Node Writable Stream](http://nodejs.org/api/stream.html#stream_class_stream_writable)
 * (Highland Streams are also Node Writable Streams). This will pull all the
 * data from the source Highland Stream and write it to the destination,
 * automatically managing flow so that the destination is not overwhelmed
 * by a fast source.
 * 
 * This function returns the destination so you can chain together pipe calls.
 * 
 * @id pipe
 * \@section Streams
 * \@name Stream.pipe(dest)
 * \@api public
 * @template U
 * @param {!Highland.Stream<U>|!NodeJS.ReadWriteStream|!NodeJS.WritableStream} dest
 * @return {!Highland.Stream<U>|void}
 */
Highland.Stream.prototype.pipe = function(dest) {};

/**
 * Consumes a single item from the Stream. Unlike consume, this function will
 * not provide a new stream for you to push values onto, and it will unsubscribe
 * as soon as it has a single error, value or nil from the source.
 * 
 * You probably won't need to use this directly, but it is used internally by
 * some functions in the Highland library.
 * 
 * @id pull
 * \@section Streams
 * \@name Stream.pull(f)
 * \@api public
 * @param {function(!Error, R): void} f
 * @return {void}
 */
Highland.Stream.prototype.pull = function(f) {};

/**
 * Collects all values from a Stream into an Array and calls a function with
 * once with the result. This function causes a **thunk**.
 * 
 * If an error from the Stream reaches the `toArray` call, it will emit an
 * error event (which will cause it to throw if unhandled).
 * 
 * @id toArray
 * \@section Streams
 * \@name Stream.toArray(f)
 * \@api public
 * @param {function(!Array<R>): void} f
 * @return {void}
 */
Highland.Stream.prototype.toArray = function(f) {};

/**
 * Returns the result of a stream to a nodejs-style callback function.
 * 
 * If the stream contains a single value, it will call `cb`
 * with the single item emitted by the stream (if present).
 * If the stream is empty, `cb` will be called without any arguments.
 * If an error is encountered in the stream, this function will stop
 * consumption and call `cb` with the error.
 * If the stream contains more than one item, it will stop consumption
 * and call `cb` with an error.
 * 
 * @id toCallback
 * \@section Consumption
 * \@name Stream.toCallback(cb)
 * \@api public
 * 
 * _([1, 2, 3, 4]).collect().toCallback(function (err, result) {
 *     // parameter result will be [1,2,3,4]
 *     // parameter err will be null
 * });
 * @param {function(!Error, R): void} cb
 * @return {void}
 */
Highland.Stream.prototype.toCallback = function(cb) {};
/**
 * @extends {Highland.Stream}
 * @record
 * @struct
 */
Highland.PipeableStream = function() {};
/**
 * @record
 * @struct
 */
Highland.PipeOptions = function() {};
 /** @type {boolean} */
Highland.PipeOptions.prototype.end;

/** @typedef {(number|!Function|!Array<string>)} */
Highland.MappingHint;
 /** @type {!HighlandStatic} */
var highland;
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "highland"
/** @const */
tsickle_declare_module.highland = {};

/* TODO: ExportAssignment in tsickle_declare_module.highland */
