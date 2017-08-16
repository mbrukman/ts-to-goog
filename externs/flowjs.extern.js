/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/flowjs/index.d.ts:
/** @const */
var flowjs = {};
/**
 * @record
 * @struct
 */
flowjs.IFlow = function() {};
 /** @type {boolean} */
flowjs.IFlow.prototype.support;
 /** @type {boolean} */
flowjs.IFlow.prototype.supportDirectory;
 /** @type {!Object} */
flowjs.IFlow.prototype.opts;
 /** @type {!Array<!flowjs.IFlowFile>} */
flowjs.IFlow.prototype.files;

/**
 * @param {!Array<!HTMLElement>} domNodes
 * @param {boolean} isDirectory
 * @param {boolean} singleFile
 * @param {!Object} attributes
 * @return {void}
 */
flowjs.IFlow.prototype.assignBrowse = function(domNodes, isDirectory, singleFile, attributes) {};

/**
 * @param {!Array<!HTMLElement>} domNodes
 * @return {void}
 */
flowjs.IFlow.prototype.assignDrop = function(domNodes) {};

/**
 * @param {!Array<!HTMLElement>} domNodes
 * @return {void}
 */
flowjs.IFlow.prototype.unAssignDrop = function(domNodes) {};

/**
 * @param {string} event
 * @param {!Function} callback
 * @return {void}
 */
flowjs.IFlow.prototype.on = function(event, callback) {};

/**
 * @param {string=} event
 * @param {!Function=} callback
 * @return {void}
 */
flowjs.IFlow.prototype.off = function(event, callback) {};

/**
 * @return {void}
 */
flowjs.IFlow.prototype.upload = function() {};

/**
 * @return {void}
 */
flowjs.IFlow.prototype.pause = function() {};

/**
 * @return {void}
 */
flowjs.IFlow.prototype.resume = function() {};

/**
 * @return {void}
 */
flowjs.IFlow.prototype.cancel = function() {};

/**
 * @return {number}
 */
flowjs.IFlow.prototype.progress = function() {};

/**
 * @return {boolean}
 */
flowjs.IFlow.prototype.isUploading = function() {};

/**
 * @param {!File} file
 * @return {void}
 */
flowjs.IFlow.prototype.addFile = function(file) {};

/**
 * @param {!flowjs.IFlowFile} file
 * @return {void}
 */
flowjs.IFlow.prototype.removeFile = function(file) {};

/**
 * @param {string} uniqueIdentifier
 * @return {!flowjs.IFlowFile}
 */
flowjs.IFlow.prototype.getFromUniqueIdentifier = function(uniqueIdentifier) {};

/**
 * @return {number}
 */
flowjs.IFlow.prototype.getSize = function() {};

/**
 * @return {number}
 */
flowjs.IFlow.prototype.sizeUploaded = function() {};

/**
 * @return {number}
 */
flowjs.IFlow.prototype.timeRemaining = function() {};
/**
 * @record
 * @struct
 */
flowjs.IFlowOptions = function() {};
 /** @type {string} */
flowjs.IFlowOptions.prototype.target;
 /** @type {boolean} */
flowjs.IFlowOptions.prototype.singleFile;
 /** @type {number} */
flowjs.IFlowOptions.prototype.chunkSize;
 /** @type {boolean} */
flowjs.IFlowOptions.prototype.forceChunkSize;
 /** @type {number} */
flowjs.IFlowOptions.prototype.simultaneousUploads;
 /** @type {string} */
flowjs.IFlowOptions.prototype.fileParameterName;
 /** @type {!Object} */
flowjs.IFlowOptions.prototype.query;
 /** @type {!Object} */
flowjs.IFlowOptions.prototype.headers;
 /** @type {boolean} */
flowjs.IFlowOptions.prototype.withCredentials;
 /** @type {string} */
flowjs.IFlowOptions.prototype.method;
 /** @type {string} */
flowjs.IFlowOptions.prototype.testMethod;
 /** @type {string} */
flowjs.IFlowOptions.prototype.uploadMethod;
 /** @type {boolean} */
flowjs.IFlowOptions.prototype.allowDuplicateUploads;
 /** @type {boolean} */
flowjs.IFlowOptions.prototype.prioritizeFirstAndLastChunk;
 /** @type {boolean} */
flowjs.IFlowOptions.prototype.testChunks;
 /** @type {!Function} */
flowjs.IFlowOptions.prototype.preprocess;
 /** @type {!Function} */
flowjs.IFlowOptions.prototype.initFileFn;
 /** @type {!Function} */
flowjs.IFlowOptions.prototype.generateUniqueIdentifier;
 /** @type {number} */
flowjs.IFlowOptions.prototype.maxChunkRetries;
 /** @type {number} */
flowjs.IFlowOptions.prototype.chunkRetryInterval;
 /** @type {number} */
flowjs.IFlowOptions.prototype.progressCallbacksInterval;
 /** @type {number} */
flowjs.IFlowOptions.prototype.speedSmoothingFactor;
 /** @type {!Array<string>} */
flowjs.IFlowOptions.prototype.successStatuses;
 /** @type {!Array<string>} */
flowjs.IFlowOptions.prototype.permanentErrors;
/**
 * @record
 * @struct
 */
flowjs.IFlowFile = function() {};
 /** @type {!flowjs.IFlow} */
flowjs.IFlowFile.prototype.flowObj;
 /** @type {!File} */
flowjs.IFlowFile.prototype.file;
 /** @type {string} */
flowjs.IFlowFile.prototype.name;
 /** @type {string} */
flowjs.IFlowFile.prototype.relativePath;
 /** @type {number} */
flowjs.IFlowFile.prototype.size;
 /** @type {string} */
flowjs.IFlowFile.prototype.uniqueIdentifier;
 /** @type {number} */
flowjs.IFlowFile.prototype.averageSpeed;
 /** @type {number} */
flowjs.IFlowFile.prototype.currentSpeed;
 /** @type {!Array<?>} */
flowjs.IFlowFile.prototype.chunks;
 /** @type {boolean} */
flowjs.IFlowFile.prototype.paused;
 /** @type {boolean} */
flowjs.IFlowFile.prototype.error;

/**
 * @param {boolean} relative
 * @return {number}
 */
flowjs.IFlowFile.prototype.progress = function(relative) {};

/**
 * @return {void}
 */
flowjs.IFlowFile.prototype.pause = function() {};

/**
 * @return {void}
 */
flowjs.IFlowFile.prototype.resume = function() {};

/**
 * @return {void}
 */
flowjs.IFlowFile.prototype.cancel = function() {};

/**
 * @return {void}
 */
flowjs.IFlowFile.prototype.retry = function() {};

/**
 * @return {void}
 */
flowjs.IFlowFile.prototype.bootstrap = function() {};

/**
 * @return {boolean}
 */
flowjs.IFlowFile.prototype.isUploading = function() {};

/**
 * @return {boolean}
 */
flowjs.IFlowFile.prototype.isComplete = function() {};

/**
 * @return {number}
 */
flowjs.IFlowFile.prototype.sizeUploaded = function() {};

/**
 * @return {number}
 */
flowjs.IFlowFile.prototype.timeRemaining = function() {};

/**
 * @return {string}
 */
flowjs.IFlowFile.prototype.getExtension = function() {};

/**
 * @return {string}
 */
flowjs.IFlowFile.prototype.getType = function() {};

/* TODO: ExportAssignment in  */

/* TODO: NamespaceExportDeclaration in  */
