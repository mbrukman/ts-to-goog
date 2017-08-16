/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/event-stream/index.d.ts:

/* TODO: ImportDeclaration in  */
/**
 * @record
 * @struct
 */
function MapStream() {}
 /** @type {boolean} */
MapStream.prototype.writable;
 /** @type {boolean} */
MapStream.prototype.readable;
 /** @type {?} */
MapStream.prototype.destroy;
 /** @type {?} */
MapStream.prototype.end;
 /** @type {?} */
MapStream.prototype.pause;
 /** @type {?} */
MapStream.prototype.resume;
 /** @type {?} */
MapStream.prototype.write;

/**
 * Create a through stream from an asynchronous function
 * 
 * @param {!Function} asyncFunction
 * @return {?}
 */
function map(asyncFunction) {}

/**
 * Same as map, but the callback is called synchronously. Based on es.through
 * @param {!Function} syncFunction
 * @return {?}
 */
function mapSync(syncFunction) {}

/**
 * Break up a stream and reassemble it so that each line is a chunk. matcher may be a String, or a RegExp
 * 
 * @param {(string|!RegExp)} matcher
 * @return {?}
 */
function split(matcher) {}

/**
 * Create a through stream that emits separator between each chunk, just like Array#join
 * 
 * @param {string} separator
 * @return {?}
 */
function join(separator) {}

/**
 * Merges streams into one and returns it. Incoming data will be emitted as soon it comes into - no ordering will be applied
 * (for example: data1 data1 data2 data1 data2 - where data1 and data2 is data from two streams).
 * Counts how many streams were passed to it and emits end only when all streams emitted end.
 * 
 * Merges streams into one and returns it. Incoming data will be emitted as soon it comes into - no ordering will be applied
 * (for example: data1 data1 data2 data1 data2 - where data1 and data2 is data from two streams).
 * Counts how many streams were passed to it and emits end only when all streams emitted end.
 * 
 * @param {...?|!Array<?>} stream_or_streamArray
 * @return {?}
 */
function concat(stream_or_streamArray) {}

/**
 * Merges streams into one and returns it. Incoming data will be emitted as soon it comes into - no ordering will be applied
 * (for example: data1 data1 data2 data1 data2 - where data1 and data2 is data from two streams).
 * Counts how many streams were passed to it and emits end only when all streams emitted end.
 * 
 * Merges streams into one and returns it. Incoming data will be emitted as soon it comes into - no ordering will be applied
 * (for example: data1 data1 data2 data1 data2 - where data1 and data2 is data from two streams).
 * Counts how many streams were passed to it and emits end only when all streams emitted end.
 * 
 * @param {...?|!Array<?>} stream_or_streamArray
 * @return {?}
 */
function merge(stream_or_streamArray) {}

/**
 * Replace all occurrences of from with to
 * @param {(string|!RegExp)} from
 * @param {(string|!RegExp)} to
 * @return {?}
 */
function replace(from, to) {}

/**
 * Convenience function for parsing JSON chunks. For newline separated JSON, use with es.split.
 * By default it logs parsing errors by console.error; for another behaviour, transforms created by es.parse({error: true})
 * will emit error events for exceptions thrown from JSON.parse, unmodified.
 * @return {?}
 */
function parse() {}

/**
 * convert javascript objects into lines of text. The text will have whitespace escaped and have a \n appended, so it will be compatible with es.parse
 * @return {?}
 */
function stringify() {}

/**
 * create a readable stream (that respects pause) from an async function.
 * 
 * @param {!Function} asyncFunction
 * @return {?}
 */
function readable(asyncFunction) {}

/**
 * Create a readable stream from an Array.
 * 
 * @param {!Array<?>} array
 * @return {?}
 */
function readArray(array) {}

/**
 * create a writeable stream from a callback
 * 
 * @param {!Function} callback
 * @return {?}
 */
function writeArray(callback) {}

/**
 * A stream that buffers all chunks when paused
 * @return {(void|?)}
 */
function pause() {}

/**
 * Takes a writable stream and a readable stream and makes them appear as a readable writable stream.
 * 
 * @param {!internal.Writable} writeStream
 * @param {!internal.Readable} readStream
 * @return {?}
 */
function duplex(writeStream, readStream) {}

/**
 * Create a through stream from a child process
 * 
 * @param {?} child_process
 * @return {?}
 */
function child(child_process) {}

/**
 * waits for stream to emit 'end'. joins chunks of a stream into a single string or buffer.
 * Takes an optional callback, which will be passed the complete string/buffer when it receives the 'end' event.
 * 
 * @param {!Function} callback
 * @return {?}
 */
function wait(callback) {}
