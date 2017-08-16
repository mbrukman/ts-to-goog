/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/pathwatcher/index.d.ts:

/* TODO: ImportDeclaration in  */

/* TODO: ImportDeclaration in  */

/* TODO: NamespaceExportDeclaration in  */
/**
 * @record
 * @struct
 */
function IFileStatic() {}

/* TODO: ConstructSignature:  */
/**
 * @record
 * @struct
 */
function IFile() {}
 /** @type {string} */
IFile.prototype.realPath;
 /** @type {string} */
IFile.prototype.path;
 /** @type {boolean} */
IFile.prototype.symlink;
 /** @type {string} */
IFile.prototype.cachedContents;
 /** @type {string} */
IFile.prototype.digest;

/**
 * @return {void}
 */
IFile.prototype.handleEventSubscriptions = function() {};

/**
 * @param {string} path
 * @return {void}
 */
IFile.prototype.setPath = function(path) {};

/**
 * @return {string}
 */
IFile.prototype.getPath = function() {};

/**
 * @return {string}
 */
IFile.prototype.getRealPathSync = function() {};

/**
 * @return {string}
 */
IFile.prototype.getBaseName = function() {};

/**
 * @param {string} text
 * @return {void}
 */
IFile.prototype.write = function(text) {};

/**
 * @param {boolean} flushCache
 * @return {string}
 */
IFile.prototype.readSync = function(flushCache) {};

/**
 * @param {boolean=} flushCache
 * @return {!Promise<string>}
 */
IFile.prototype.read = function(flushCache) {};

/**
 * @return {boolean}
 */
IFile.prototype.existsSync = function() {};

/**
 * @param {string} contents
 * @return {void}
 */
IFile.prototype.setDigest = function(contents) {};

/**
 * @return {string}
 */
IFile.prototype.getDigest = function() {};

/**
 * @param {string} filePath
 * @param {string} text
 * @return {void}
 */
IFile.prototype.writeFileWithPrivilegeEscalationSync = function(filePath, text) {};

/**
 * @param {string} eventType
 * @param {string} eventPath
 * @return {void}
 */
IFile.prototype.handleNativeChangeEvent = function(eventType, eventPath) {};

/**
 * @return {void}
 */
IFile.prototype.detectResurrectionAfterDelay = function() {};

/**
 * @return {void}
 */
IFile.prototype.detectResurrection = function() {};

/**
 * @return {void}
 */
IFile.prototype.subscribeToNativeChangeEvents = function() {};

/**
 * @return {void}
 */
IFile.prototype.unsubscribeFromNativeChangeEvents = function() {};
/**
 * @record
 * @struct
 */
function IDirectoryStatic() {}

/* TODO: ConstructSignature:  */
/**
 * @record
 * @struct
 */
function IDirectory() {}
 /** @type {string} */
IDirectory.prototype.realPath;
 /** @type {string} */
IDirectory.prototype.path;
 /** @type {boolean} */
IDirectory.prototype.symlink;

/**
 * @return {string}
 */
IDirectory.prototype.getBaseName = function() {};

/**
 * @return {void}
 */
IDirectory.prototype.getPath = function() {};

/**
 * @return {string}
 */
IDirectory.prototype.getRealPathSync = function() {};

/**
 * @param {string} pathToCheck
 * @return {boolean}
 */
IDirectory.prototype.contains = function(pathToCheck) {};

/**
 * @param {string} fullPath
 * @return {string}
 */
IDirectory.prototype.relativize = function(fullPath) {};

/**
 * @return {!Array<?>}
 */
IDirectory.prototype.getEntriesSync = function() {};

/**
 * @param {!Function} callback
 * @return {void}
 */
IDirectory.prototype.getEntries = function(callback) {};

/**
 * @return {void}
 */
IDirectory.prototype.subscribeToNativeChangeEvents = function() {};

/**
 * @return {void}
 */
IDirectory.prototype.unsubscribeFromNativeChangeEvents = function() {};

/**
 * @param {string} prefix
 * @param {string} fullPath
 * @return {boolean}
 */
IDirectory.prototype.isPathPrefixOf = function(prefix, fullPath) {};
/**
 * @record
 * @struct
 */
function IHandleWatcher() {}

/**
 * @param {?} event
 * @param {?} filePath
 * @param {?} oldFilePath
 * @return {?}
 */
IHandleWatcher.prototype.onEvent = function(event, filePath, oldFilePath) {};

/**
 * @return {void}
 */
IHandleWatcher.prototype.start = function() {};

/**
 * @return {void}
 */
IHandleWatcher.prototype.closeIfNoListener = function() {};

/**
 * @return {void}
 */
IHandleWatcher.prototype.close = function() {};
/**
 * @record
 * @struct
 */
function IPathWatcher() {}
 /** @type {boolean} */
IPathWatcher.prototype.isWatchingParent;
 /** @type {?} */
IPathWatcher.prototype.path;
 /** @type {?} */
IPathWatcher.prototype.handleWatcher;

/**
 * @return {void}
 */
IPathWatcher.prototype.close = function() {};

/**
 * @param {string} path
 * @param {!Function} callback
 * @return {?}
 */
function watch(path, callback) {}

/**
 * @return {void}
 */
function closeAllWatchers() {}

/**
 * @return {!Array<string>}
 */
function getWatchedPaths() {}
 /** @type {?} */
var File;
 /** @type {?} */
var Directory;
