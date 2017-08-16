/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/leveldown/index.d.ts:

/* TODO: ExportAssignment in  */
 /** @type {function(string): !leveldown.LevelDown} */
var leveldown;

/** @typedef {(string|?)} */
leveldown.Bytes;

/** @typedef {function(?): void} */
leveldown.ErrCallback;

/** @typedef {function(?, number): void} */
leveldown.ErrNumberCallback;

/** @typedef {function(?, ?): void} */
leveldown.ErrBufferCallback;

/** @typedef {function(?, string): void} */
leveldown.ErrStringCallback;

/** @typedef {function(?, string, ?): void} */
leveldown.KeyAsStringCallback;

/** @typedef {function(?, ?, string): void} */
leveldown.ValueAsStringCallback;

/** @typedef {function(?, string, string): void} */
leveldown.KeyAndValueAsStringCallback;

/** @typedef {function(?, ?, ?): void} */
leveldown.KeyAndValueAsBufferCallback;
/**
 * @record
 * @struct
 */
leveldown.PutBatch = function() {};
 /** @type {string} */
leveldown.PutBatch.prototype.type;
 /** @type {(string|?)} */
leveldown.PutBatch.prototype.key;
 /** @type {(string|?)} */
leveldown.PutBatch.prototype.value;
/**
 * @record
 * @struct
 */
leveldown.DelBatch = function() {};
 /** @type {string} */
leveldown.DelBatch.prototype.type;
 /** @type {(string|?)} */
leveldown.DelBatch.prototype.key;

/** @typedef {(!leveldown.PutBatch|!leveldown.DelBatch)} */
leveldown.Batch;
/**
 * @record
 * @struct
 */
leveldown.OpenOptions = function() {};
 /** @type {boolean} */
leveldown.OpenOptions.prototype.createIfMissing;
 /** @type {boolean} */
leveldown.OpenOptions.prototype.errorIfExists;
 /** @type {boolean} */
leveldown.OpenOptions.prototype.compression;
 /** @type {number} */
leveldown.OpenOptions.prototype.cacheSize;
/**
 * @extends {leveldown.OpenOptions}
 * @record
 * @struct
 */
leveldown.OpenAdvancedOptions = function() {};
 /** @type {number} */
leveldown.OpenAdvancedOptions.prototype.writeBufferSize;
 /** @type {number} */
leveldown.OpenAdvancedOptions.prototype.blockSize;
 /** @type {number} */
leveldown.OpenAdvancedOptions.prototype.maxOpenFiles;
 /** @type {number} */
leveldown.OpenAdvancedOptions.prototype.blockRestartInterval;
 /** @type {number} */
leveldown.OpenAdvancedOptions.prototype.maxFileSize;
/**
 * @record
 * @struct
 */
leveldown.WriteOptions = function() {};
 /** @type {boolean} */
leveldown.WriteOptions.prototype.sync;
/**
 * @record
 * @struct
 */
leveldown.ReadOptions = function() {};
 /** @type {boolean} */
leveldown.ReadOptions.prototype.fillCache;
/**
 * @extends {leveldown.ReadOptions}
 * @record
 * @struct
 */
leveldown.BufferReadOptions = function() {};
 /** @type {boolean} */
leveldown.BufferReadOptions.prototype.asBuffer;
/**
 * @extends {leveldown.ReadOptions}
 * @record
 * @struct
 */
leveldown.StringReadOptions = function() {};
 /** @type {boolean} */
leveldown.StringReadOptions.prototype.asBuffer;
/**
 * @record
 * @struct
 */
leveldown.IteratorOptions = function() {};
 /** @type {(string|?)} */
leveldown.IteratorOptions.prototype.gt;
 /** @type {(string|?)} */
leveldown.IteratorOptions.prototype.lt;
 /** @type {(string|?)} */
leveldown.IteratorOptions.prototype.gte;
 /** @type {(string|?)} */
leveldown.IteratorOptions.prototype.lte;
 /** @type {boolean} */
leveldown.IteratorOptions.prototype.reverse;
 /** @type {boolean} */
leveldown.IteratorOptions.prototype.keys;
 /** @type {boolean} */
leveldown.IteratorOptions.prototype.values;
 /** @type {number} */
leveldown.IteratorOptions.prototype.limit;
 /** @type {boolean} */
leveldown.IteratorOptions.prototype.fillCache;
/**
 * @extends {leveldown.IteratorOptions}
 * @record
 * @struct
 */
leveldown.KeyAsStringIteratorOptions = function() {};
 /** @type {boolean} */
leveldown.KeyAsStringIteratorOptions.prototype.keyAsBuffer;
 /** @type {boolean} */
leveldown.KeyAsStringIteratorOptions.prototype.valueAsBuffer;
/**
 * @extends {leveldown.IteratorOptions}
 * @record
 * @struct
 */
leveldown.ValueAsStringIteratorOptions = function() {};
 /** @type {boolean} */
leveldown.ValueAsStringIteratorOptions.prototype.keyAsBuffer;
 /** @type {boolean} */
leveldown.ValueAsStringIteratorOptions.prototype.valueAsBuffer;
/**
 * @extends {leveldown.IteratorOptions}
 * @record
 * @struct
 */
leveldown.KeyAndValueAsStringIteratorOptions = function() {};
 /** @type {boolean} */
leveldown.KeyAndValueAsStringIteratorOptions.prototype.keyAsBuffer;
 /** @type {boolean} */
leveldown.KeyAndValueAsStringIteratorOptions.prototype.valueAsBuffer;
/**
 * @extends {leveldown.IteratorOptions}
 * @record
 * @struct
 */
leveldown.KeyAndValueAsBufferIteratorOptions = function() {};
 /** @type {boolean} */
leveldown.KeyAndValueAsBufferIteratorOptions.prototype.keyAsBuffer;
 /** @type {boolean} */
leveldown.KeyAndValueAsBufferIteratorOptions.prototype.valueAsBuffer;
/**
 * @record
 * @struct
 */
leveldown.Iterator = function() {};

/**
 * @param {(string|?)} key
 * @return {void}
 */
leveldown.Iterator.prototype.seek = function(key) {};

/**
 * @param {function(?): void} callback
 * @return {void}
 */
leveldown.Iterator.prototype.end = function(callback) {};
/**
 * @extends {leveldown.Iterator}
 * @record
 * @struct
 */
leveldown.KeyAsStringIterator = function() {};

/**
 * @param {function(?, string, ?): void} callback
 * @return {void}
 */
leveldown.KeyAsStringIterator.prototype.next = function(callback) {};
/**
 * @extends {leveldown.Iterator}
 * @record
 * @struct
 */
leveldown.ValueAsStringIterator = function() {};

/**
 * @param {function(?, ?, string): void} callback
 * @return {void}
 */
leveldown.ValueAsStringIterator.prototype.next = function(callback) {};
/**
 * @extends {leveldown.Iterator}
 * @record
 * @struct
 */
leveldown.KeyAndValueAsStringIterator = function() {};

/**
 * @param {function(?, string, string): void} callback
 * @return {void}
 */
leveldown.KeyAndValueAsStringIterator.prototype.next = function(callback) {};
/**
 * @extends {leveldown.Iterator}
 * @record
 * @struct
 */
leveldown.KeyAndValueAsBufferIterator = function() {};

/**
 * @param {function(?, ?, ?): void} callback
 * @return {void}
 */
leveldown.KeyAndValueAsBufferIterator.prototype.next = function(callback) {};
/**
 * @record
 * @struct
 */
leveldown.LevelDown = function() {};

/**
 * @param {function(?): void|!leveldown.OpenOptions} callback_or_options
 * @param {function(?): void=} callback
 * @return {void}
 */
leveldown.LevelDown.prototype.open = function(callback_or_options, callback) {};

/**
 * @param {function(?): void=} callback
 * @return {void}
 */
leveldown.LevelDown.prototype.close = function(callback) {};

/**
 * @param {(string|?)} key
 * @param {(string|?)} value
 * @param {function(?): void|!leveldown.WriteOptions} callback_or_options
 * @param {function(?): void=} callback
 * @return {void}
 */
leveldown.LevelDown.prototype.put = function(key, value, callback_or_options, callback) {};

/**
 * @param {(string|?)} key
 * @param {function(?, ?): void|!leveldown.BufferReadOptions|!leveldown.StringReadOptions} callback_or_options
 * @param {function(?, ?): void|function(?, string): void=} callback
 * @return {void}
 */
leveldown.LevelDown.prototype.get = function(key, callback_or_options, callback) {};

/**
 * @param {(string|?)} key
 * @param {function(?): void|!leveldown.WriteOptions=} callback_or_options
 * @param {function(?): void=} callback
 * @return {void}
 */
leveldown.LevelDown.prototype.del = function(key, callback_or_options, callback) {};

/**
 * @param {!Array<(!leveldown.PutBatch|!leveldown.DelBatch)>} operations
 * @param {function(?): void|!leveldown.WriteOptions=} callback_or_options
 * @param {function(?): void=} callback
 * @return {void}
 */
leveldown.LevelDown.prototype.batch = function(operations, callback_or_options, callback) {};

/**
 * @param {(string|?)} start
 * @param {(string|?)} end
 * @param {function(?, number): void} callback
 * @return {void}
 */
leveldown.LevelDown.prototype.approximateSize = function(start, end, callback) {};

/**
 * @param {(string|?)} start
 * @param {(string|?)} end
 * @param {function(?): void} callback
 * @return {void}
 */
leveldown.LevelDown.prototype.compactRange = function(start, end, callback) {};

/**
 * @param {string} property
 * @return {string}
 */
leveldown.LevelDown.prototype.getProperty = function(property) {};

/**
 * @param {!leveldown.KeyAsStringIteratorOptions|!leveldown.ValueAsStringIteratorOptions|!leveldown.KeyAndValueAsStringIteratorOptions|!leveldown.KeyAndValueAsBufferIteratorOptions=} options
 * @return {!leveldown.KeyAsStringIterator|!leveldown.ValueAsStringIterator|!leveldown.KeyAndValueAsStringIterator|!leveldown.KeyAndValueAsBufferIterator}
 */
leveldown.LevelDown.prototype.iterator = function(options) {};

/**
 * @param {string} location
 * @param {function(?): void} callback
 * @return {void}
 */
leveldown.LevelDown.prototype.destroy = function(location, callback) {};

/**
 * @param {string} location
 * @param {function(?): void} callback
 * @return {void}
 */
leveldown.LevelDown.prototype.repair = function(location, callback) {};

/** @typedef {function(string): !leveldown.LevelDown} */
leveldown.Constructor;