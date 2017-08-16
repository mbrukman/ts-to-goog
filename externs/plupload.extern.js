/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/plupload/index.d.ts:
/**
 * @record
 * @struct
 */
function plupload_settings() {}
 /** @type {?} */
plupload_settings.prototype.browse_button;
 /** @type {string} */
plupload_settings.prototype.url;
 /** @type {!plupload_filters} */
plupload_settings.prototype.filters;
 /** @type {?} */
plupload_settings.prototype.headers;
 /** @type {number} */
plupload_settings.prototype.max_retries;
 /** @type {boolean} */
plupload_settings.prototype.multipart;
 /** @type {?} */
plupload_settings.prototype.multipart_params;
 /** @type {(string|number)} */
plupload_settings.prototype.chunk_size;
 /** @type {!plupload_resize} */
plupload_settings.prototype.resize;
 /** @type {string} */
plupload_settings.prototype.drop_element;
 /** @type {boolean} */
plupload_settings.prototype.multi_selection;
 /** @type {?} */
plupload_settings.prototype.required_features;
 /** @type {boolean} */
plupload_settings.prototype.unique_names;
 /** @type {string} */
plupload_settings.prototype.runtimes;
 /** @type {string} */
plupload_settings.prototype.file_data_name;
 /** @type {?} */
plupload_settings.prototype.container;
 /** @type {string} */
plupload_settings.prototype.flash_swf_url;
 /** @type {string} */
plupload_settings.prototype.silverlight_xap_url;
 /** @type {!plupload_events} */
plupload_settings.prototype.init;
/**
 * @record
 * @struct
 */
function plupload_filters() {}
 /** @type {!Array<!plupload_filters_mime_types>} */
plupload_filters.prototype.mime_types;
 /** @type {(string|number)} */
plupload_filters.prototype.max_file_size;
 /** @type {boolean} */
plupload_filters.prototype.prevent_duplicates;
/**
 * @record
 * @struct
 */
function plupload_filters_mime_types() {}
 /** @type {string} */
plupload_filters_mime_types.prototype.title;
 /** @type {string} */
plupload_filters_mime_types.prototype.extensions;
/**
 * @record
 * @struct
 */
function plupload_resize() {}
 /** @type {number} */
plupload_resize.prototype.width;
 /** @type {number} */
plupload_resize.prototype.height;
 /** @type {boolean} */
plupload_resize.prototype.crop;
 /** @type {number} */
plupload_resize.prototype.quality;
 /** @type {boolean} */
plupload_resize.prototype.preserve_headers;
/**
 * @record
 * @struct
 */
function plupload_queue_progress() {}
 /** @type {number} */
plupload_queue_progress.prototype.size;
 /** @type {number} */
plupload_queue_progress.prototype.loaded;
 /** @type {number} */
plupload_queue_progress.prototype.uploaded;
 /** @type {number} */
plupload_queue_progress.prototype.failed;
 /** @type {number} */
plupload_queue_progress.prototype.queued;
 /** @type {number} */
plupload_queue_progress.prototype.percent;
 /** @type {number} */
plupload_queue_progress.prototype.bytesPerSec;

/**
 * @return {void}
 */
plupload_queue_progress.prototype.reset = function() {};
/**
 * @record
 * @struct
 */
function plupload_event() {}

/* TODO: CallSignature:  */
/**
 * @record
 * @struct
 */
function plupload_event_file() {}

/* TODO: CallSignature:  */
/**
 * @record
 * @struct
 */
function plupload_event_files() {}

/* TODO: CallSignature:  */
/**
 * @record
 * @struct
 */
function plupload_event_OptionChanged() {}

/* TODO: CallSignature:  */
/**
 * @record
 * @struct
 */
function plupload_event_FileUploaded() {}

/* TODO: CallSignature:  */
/**
 * @record
 * @struct
 */
function plupload_event_ChunkUploaded() {}

/* TODO: CallSignature:  */
/**
 * @record
 * @struct
 */
function plupload_event_Error() {}

/* TODO: CallSignature:  */
/**
 * @record
 * @struct
 */
function plupload_events() {}
 /** @type {!plupload_event} */
plupload_events.prototype.Init;
 /** @type {!plupload_event} */
plupload_events.prototype.PostInit;
 /** @type {!plupload_event_OptionChanged} */
plupload_events.prototype.OptionChanged;
 /** @type {!plupload_event} */
plupload_events.prototype.Refresh;
 /** @type {!plupload_event} */
plupload_events.prototype.StateChanged;
 /** @type {!plupload_event_file} */
plupload_events.prototype.UploadFile;
 /** @type {!plupload_event_file} */
plupload_events.prototype.BeforeUpload;
 /** @type {!plupload_event} */
plupload_events.prototype.QueueChanged;
 /** @type {!plupload_event_file} */
plupload_events.prototype.UploadProgress;
 /** @type {!plupload_event_files} */
plupload_events.prototype.FilesRemoved;
 /** @type {!plupload_event_file} */
plupload_events.prototype.FileFiltered;
 /** @type {!plupload_event_files} */
plupload_events.prototype.FilesAdded;
 /** @type {!plupload_event_FileUploaded} */
plupload_events.prototype.FileUploaded;
 /** @type {!plupload_event_ChunkUploaded} */
plupload_events.prototype.ChunkUploaded;
 /** @type {!plupload_event_files} */
plupload_events.prototype.UploadComplete;
 /** @type {!plupload_event_Error} */
plupload_events.prototype.Error;
 /** @type {!plupload_event} */
plupload_events.prototype.Destroy;
/**
 * @record
 * @struct
 */
function plupload_response() {}
 /** @type {string} */
plupload_response.prototype.response;
 /** @type {number} */
plupload_response.prototype.status;
 /** @type {string} */
plupload_response.prototype.responseHeaders;
/**
 * @extends {plupload_response}
 * @record
 * @struct
 */
function plupload_chunk_response() {}
 /** @type {number} */
plupload_chunk_response.prototype.offset;
 /** @type {number} */
plupload_chunk_response.prototype.total;
/**
 * @extends {plupload_response}
 * @record
 * @struct
 */
function plupload_error() {}
 /** @type {number} */
plupload_error.prototype.code;
 /** @type {string} */
plupload_error.prototype.message;
 /** @type {?} */
plupload_error.prototype.file;
/**
 * @constructor
 * @struct
 */
function plupload() {}
 /** @type {string} */
plupload.VERSION;
 /** @type {number} */
plupload.STOPPED;
 /** @type {number} */
plupload.STARTED;
 /** @type {number} */
plupload.QUEUED;
 /** @type {number} */
plupload.UPLOADING;
 /** @type {number} */
plupload.FAILED;
 /** @type {number} */
plupload.DONE;
 /** @type {number} */
plupload.GENERIC_ERROR;
 /** @type {number} */
plupload.HTTP_ERROR;
 /** @type {number} */
plupload.IO_ERROR;
 /** @type {number} */
plupload.SECURITY_ERROR;
 /** @type {number} */
plupload.INIT_ERROR;
 /** @type {number} */
plupload.FILE_SIZE_ERROR;
 /** @type {number} */
plupload.FILE_EXTENSION_ERROR;
 /** @type {number} */
plupload.FILE_DUPLICATE_ERROR;
 /** @type {number} */
plupload.IMAGE_FORMAT_ERROR;
 /** @type {number} */
plupload.MEMORY_ERROR;
 /** @type {number} */
plupload.IMAGE_DIMENSIONS_ERROR;
 /** @type {?} */
plupload.mimeTypes;
 /** @type {?} */
plupload.ua;
 /** @type {string} */
plupload.prototype.id;
 /** @type {number} */
plupload.prototype.state;
 /** @type {string} */
plupload.prototype.features;
 /** @type {string} */
plupload.prototype.runtime;
 /** @type {?} */
plupload.prototype.files;
 /** @type {?} */
plupload.prototype.settings;
 /** @type {!plupload_queue_progress} */
plupload.prototype.total;

/**
 * @param {!plupload_settings} settings
 * @return {void}
 */
plupload.Uploader = function(settings) {};

/**
 * @param {?} o
 * @return {string}
 */
plupload.typeOf = function(o) {};

/**
 * @param {?} target
 * @return {?}
 */
plupload.extend = function(target) {};

/**
 * @param {string} guid
 * @return {string}
 */
plupload.guid = function(guid) {};

/**
 * Methods
 * @return {?}
 */
plupload.prototype.init = function() {};

/**
 * @param {?} option
 * @param {?=} value
 * @return {?}
 */
plupload.prototype.setOption = function(option, value) {};

/**
 * @param {string=} option
 * @return {?}
 */
plupload.prototype.getOption = function(option) {};

/**
 * @return {?}
 */
plupload.prototype.refresh = function() {};

/**
 * @return {?}
 */
plupload.prototype.start = function() {};

/**
 * @return {?}
 */
plupload.prototype.stop = function() {};

/**
 * @param {boolean} disable
 * @return {?}
 */
plupload.prototype.disableBrowse = function(disable) {};

/**
 * @param {string} id
 * @return {?}
 */
plupload.prototype.getFile = function(id) {};

/**
 * @param {?} file
 * @param {string=} fileName
 * @return {?}
 */
plupload.prototype.addFile = function(file, fileName) {};

/**
 * @param {?} file
 * @return {?}
 */
plupload.prototype.removeFile = function(file) {};

/**
 * @param {number=} start
 * @param {number=} length
 * @return {?}
 */
plupload.prototype.splice = function(start, length) {};

/**
 * @param {string} name
 * @param {?} Multiple
 * @return {?}
 */
plupload.prototype.trigger = function(name, Multiple) {};

/**
 * @param {string} name
 * @return {?}
 */
plupload.prototype.hasEventListener = function(name) {};

/**
 * @param {string} name
 * @param {?} func
 * @param {?} scope
 * @return {?}
 */
plupload.prototype.bind = function(name, func, scope) {};

/**
 * @param {string} name
 * @param {?} func
 * @return {?}
 */
plupload.prototype.unbind = function(name, func) {};

/**
 * @return {?}
 */
plupload.prototype.unbindAll = function() {};

/**
 * @return {?}
 */
plupload.prototype.destroy = function() {};
