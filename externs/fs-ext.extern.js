/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/fs-ext/index.d.ts:

/* TODO: ExportDeclaration in  */

/**
 * Asynchronous flock(2). No arguments other than a possible error are passed to the callback. 
 * @param {number} fd File Descriptor
 * @param {string} flags Flags can be 'sh', 'ex', 'shnb', 'exnb', 'un' and correspond to the various LOCK_SH, LOCK_EX, LOCK_SH|LOCK_NB, etc.
 * 
 * @param {function(!Error): void} callback
 * @return {void}
 */
function flock(fd, flags, callback) {}

/**
 * Synchronous flock(2). Throws an exception on error.
 * @param {number} fd File Descriptor
 * @param {string} flags Flags can be 'sh', 'ex', 'shnb', 'exnb', 'un' and correspond to the various LOCK_SH, LOCK_EX, LOCK_SH|LOCK_NB, etc.
 * 
 * @return {void}
 */
function flockSync(fd, flags) {}

/**
 * Asynchronous fcntl(2).
 * Asynchronous fcntl(2).
 * @param {number} fd File Descriptor
 * @param {string} cmd The supported commands are: 'getfd' ( F_GETFD ) , 'setfd' ( F_SETFD )
 * Requiring this module adds FD_CLOEXEC to the constants module, for use with F_SETFD. / The supported commands are: 'getfd' ( F_GETFD ) , 'setfd' ( F_SETFD )
 * Requiring this module adds FD_CLOEXEC to the constants module, for use with F_SETFD.
 * 
 * @param {number|function(!Error, number): void} arg_or_callback arg
 * 
 * @param {function(!Error, number): void=} callback
 * @return {void}
 */
function fcntl(fd, cmd, arg_or_callback, callback) {}

/**
 * Synchronous fcntl(2). Throws an exception on error.
 * @param {number} fd File Descriptor
 * @param {string} cmd The supported commands are: 'getfd' ( F_GETFD ) , 'setfd' ( F_SETFD )
 * Requiring this module adds FD_CLOEXEC to the constants module, for use with F_SETFD.
 * @param {number=} arg arg
 * @return {number} Returns flags
 * 
 */
function fcntlSync(fd, cmd, arg) {}

/**
 * Asynchronous lseek(2).
 * @param {number} fd File Descriptor
 * @param {number} offset Offset
 * @param {number} whence 
 * Whence can be 0 (SEEK_SET) to set the new position in bytes to offset, 1 (SEEK_CUR) to set the new 
 * position to the current position plus offset bytes (can be negative), or 2 (SEEK_END) to set to the end 
 * of the file plus offset bytes (usually negative or zero to seek to the end of the file).
 * 
 * @param {function(!Error, number): void} callback
 * @return {void}
 */
function seek(fd, offset, whence, callback) {}

/**
 * Synchronous lseek(2). Throws an exception on error. Returns current file position.
 * @param {number} fd File Descriptor
 * @param {number} offset Offset
 * @param {number} whence 
 * Whence can be 0 (SEEK_SET) to set the new position in bytes to offset, 1 (SEEK_CUR) to set the new 
 * position to the current position plus offset bytes (can be negative), or 2 (SEEK_END) to set to the end 
 * of the file plus offset bytes (usually negative or zero to seek to the end of the file).
 * @return {number} Returns current file position.
 * 
 */
function seekSync(fd, offset, whence) {}

/**
 * Asynchronous utime(2).
 * @param {string} path File path
 * @param {number} atime 
 * Arguments atime and mtime are in seconds as for the system call.Note that the number value of Date() is in milliseconds,
 * so to use the 'now' value with fs.utime() you would have to divide by 1000 first, e.g. Date.now()/1000
 * Just like for utime(2), the absence of the atime and mtime means 'now'.
 * @param {number} mtime 
 * Arguments atime and mtime are in seconds as for the system call.Note that the number value of Date() is in milliseconds,
 * so to use the 'now' value with fs.utime() you would have to divide by 1000 first, e.g. Date.now()/1000
 * Just like for utime(2), the absence of the atime and mtime means 'now'.
 * 
 * @param {function(!Error): void} callback
 * @return {void}
 */
function utime(path, atime, mtime, callback) {}

/**
 * Synchronous version of utime(). Throws an exception on error.
 * @param {string} path File path
 * @param {number} atime 
 * Arguments atime and mtime are in seconds as for the system call.Note that the number value of Date() is in milliseconds,
 * so to use the 'now' value with fs.utime() you would have to divide by 1000 first, e.g. Date.now()/1000
 * Just like for utime(2), the absence of the atime and mtime means 'now'.
 * @param {number} mtime 
 * Arguments atime and mtime are in seconds as for the system call.Note that the number value of Date() is in milliseconds,
 * so to use the 'now' value with fs.utime() you would have to divide by 1000 first, e.g. Date.now()/1000
 * Just like for utime(2), the absence of the atime and mtime means 'now'.
 * 
 * @return {void}
 */
function utimeSync(path, atime, mtime) {}
