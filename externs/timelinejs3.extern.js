/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/timelinejs3/index.d.ts:
/** @const */
var TL = {};
 /** @type {!TL.ITimeline} */
TL.Timeline;
/**
 * @extends {TL.ITimelineEvents}
 * @record
 * @struct
 */
TL.ITimeline = function() {};

/* TODO: ConstructSignature: TL */

/* TODO: ConstructSignature: TL */
 /** @type {function((string|number)): void} */
TL.ITimeline.prototype.goToId;
 /** @type {function(number): void} */
TL.ITimeline.prototype.goTo;
 /** @type {function(): void} */
TL.ITimeline.prototype.goToStart;
 /** @type {function(): void} */
TL.ITimeline.prototype.goToEnd;
 /** @type {function(): void} */
TL.ITimeline.prototype.goToPrev;
 /** @type {function(): void} */
TL.ITimeline.prototype.goToNext;
 /** @type {function(!TL.ITimelineSlideData): void} */
TL.ITimeline.prototype.add;
 /** @type {function(number): void} */
TL.ITimeline.prototype.remove;
 /** @type {function((string|number)): void} */
TL.ITimeline.prototype.removeId;
 /** @type {function(number): !TL.ITimelineSlideData} */
TL.ITimeline.prototype.getData;
 /** @type {function((string|number)): !TL.ITimelineSlideData} */
TL.ITimeline.prototype.getDataById;
 /** @type {function(number): !TL.ITimelineSlide} */
TL.ITimeline.prototype.getSlide;
 /** @type {function((string|number)): !TL.ITimelineSlide} */
TL.ITimeline.prototype.getSlideById;
 /** @type {function(): !TL.ITimelineSlide} */
TL.ITimeline.prototype.getCurrentSlide;
 /** @type {function(): void} */
TL.ITimeline.prototype.updateDisplay;
 /** @type {function(!TL.ITimelineConfig): void} */
TL.ITimeline.prototype.setConfig;
 /** @type {function(string): void} */
TL.ITimeline.prototype.showMessage;
 /** @type {function(): void} */
TL.ITimeline.prototype.zoomIn;
 /** @type {function(): void} */
TL.ITimeline.prototype.zoomOut;
 /** @type {function(number): void} */
TL.ITimeline.prototype.setZoom;
 /** @type {string} */
TL.ITimeline.prototype.current_id;

/**
 * @param {(string|number)} id
 * @return {number}
 */
TL.ITimeline.prototype._getSlideIndex = function(id) {};
/**
 * @record
 * @struct
 */
TL.ITimelineEvents = function() {};

/**
 * @param {string} type
 * @param {function(): void} fn
 * @param {?=} context
 * @return {!TL.ITimelineEvents}
 */
TL.ITimelineEvents.prototype.addEventListener = function(type, fn, context) {};

/**
 * @param {string} type
 * @return {boolean}
 */
TL.ITimelineEvents.prototype.hasEventListeners = function(type) {};

/**
 * @param {string} type
 * @param {function(): void} fn
 * @param {?=} context
 * @return {!TL.ITimelineEvents}
 */
TL.ITimelineEvents.prototype.removeEventListener = function(type, fn, context) {};

/**
 * @param {string} type
 * @param {?=} data
 * @return {!TL.ITimelineEvents}
 */
TL.ITimelineEvents.prototype.fireEvent = function(type, data) {};

/**
 * @param {string} type
 * @param {function(): void} fn
 * @param {?=} context
 * @return {!TL.ITimelineEvents}
 */
TL.ITimelineEvents.prototype.on = function(type, fn, context) {};

/**
 * @param {string} type
 * @param {function(): void} fn
 * @param {?=} context
 * @return {!TL.ITimelineEvents}
 */
TL.ITimelineEvents.prototype.off = function(type, fn, context) {};

/**
 * @param {string} type
 * @param {?=} data
 * @return {!TL.ITimelineEvents}
 */
TL.ITimelineEvents.prototype.fire = function(type, data) {};
/**
 * @record
 * @struct
 */
TL.ITimelineSlide = function() {};
 /** @type {!TL.ITimelineSlideData} */
TL.ITimelineSlide.prototype.data;
/**
 * @record
 * @struct
 */
TL.ITimelineConfig = function() {};
 /** @type {!Array<!TL.ITimelineSlideData>} */
TL.ITimelineConfig.prototype.events;
 /** @type {!TL.ITimelineSlideData} */
TL.ITimelineConfig.prototype.title;
 /** @type {!Array<!TL.ITimelineEra>} */
TL.ITimelineConfig.prototype.eras;
 /** @type {string} */
TL.ITimelineConfig.prototype.scale;
/**
 * @record
 * @struct
 */
TL.ITimelineSlideData = function() {};
 /** @type {!TL.ITimelineDate} */
TL.ITimelineSlideData.prototype.start_date;
 /** @type {!TL.ITimelineDate} */
TL.ITimelineSlideData.prototype.end_date;
 /** @type {!TL.ITimelineText} */
TL.ITimelineSlideData.prototype.text;
 /** @type {!TL.ITimelineMedia} */
TL.ITimelineSlideData.prototype.media;
 /** @type {string} */
TL.ITimelineSlideData.prototype.group;
 /** @type {string} */
TL.ITimelineSlideData.prototype.display_date;
 /** @type {{url: string, color: string}} */
TL.ITimelineSlideData.prototype.background;
 /** @type {boolean} */
TL.ITimelineSlideData.prototype.autolink;
 /** @type {string} */
TL.ITimelineSlideData.prototype.unique_id;
/**
 * @record
 * @struct
 */
TL.ITimelineEra = function() {};
 /** @type {!TL.ITimelineDate} */
TL.ITimelineEra.prototype.start_date;
 /** @type {!TL.ITimelineDate} */
TL.ITimelineEra.prototype.end_date;
 /** @type {!TL.ITimelineText} */
TL.ITimelineEra.prototype.text;
/**
 * @record
 * @struct
 */
TL.ITimelineDate = function() {};
 /** @type {number} */
TL.ITimelineDate.prototype.year;
 /** @type {number} */
TL.ITimelineDate.prototype.month;
 /** @type {number} */
TL.ITimelineDate.prototype.day;
 /** @type {number} */
TL.ITimelineDate.prototype.hour;
 /** @type {number} */
TL.ITimelineDate.prototype.minute;
 /** @type {number} */
TL.ITimelineDate.prototype.second;
 /** @type {number} */
TL.ITimelineDate.prototype.millisecond;
 /** @type {string} */
TL.ITimelineDate.prototype.display_date;
/**
 * @record
 * @struct
 */
TL.ITimelineText = function() {};
 /** @type {string} */
TL.ITimelineText.prototype.headline;
 /** @type {string} */
TL.ITimelineText.prototype.text;
/**
 * @record
 * @struct
 */
TL.ITimelineMedia = function() {};
 /** @type {string} */
TL.ITimelineMedia.prototype.url;
 /** @type {string} */
TL.ITimelineMedia.prototype.caption;
 /** @type {string} */
TL.ITimelineMedia.prototype.credit;
 /** @type {string} */
TL.ITimelineMedia.prototype.thumbnail;
/**
 * @record
 * @struct
 */
TL.ITimelineOptions = function() {};
 /** @type {boolean} */
TL.ITimelineOptions.prototype.debug;
 /** @type {number} */
TL.ITimelineOptions.prototype.height;
 /** @type {number} */
TL.ITimelineOptions.prototype.width;
 /** @type {boolean} */
TL.ITimelineOptions.prototype.is_embed;
 /** @type {boolean} */
TL.ITimelineOptions.prototype.hash_bookmark;
 /** @type {string} */
TL.ITimelineOptions.prototype.default_bg_color;
 /** @type {number} */
TL.ITimelineOptions.prototype.scale_factor;
 /** @type {number} */
TL.ITimelineOptions.prototype.initial_zoom;
 /** @type {!Array<number>} */
TL.ITimelineOptions.prototype.zoom_sequence;
 /** @type {string} */
TL.ITimelineOptions.prototype.timenav_position;
 /** @type {number} */
TL.ITimelineOptions.prototype.optimal_tick_width;
 /** @type {string} */
TL.ITimelineOptions.prototype.base_class;
 /** @type {number} */
TL.ITimelineOptions.prototype.timenav_height;
 /** @type {number} */
TL.ITimelineOptions.prototype.timenav_height_percentage;
 /** @type {number} */
TL.ITimelineOptions.prototype.timenav_mobile_height_percentage;
 /** @type {number} */
TL.ITimelineOptions.prototype.timenav_height_min;
 /** @type {number} */
TL.ITimelineOptions.prototype.marker_height_min;
 /** @type {number} */
TL.ITimelineOptions.prototype.marker_width_min;
 /** @type {number} */
TL.ITimelineOptions.prototype.marker_padding;
 /** @type {number} */
TL.ITimelineOptions.prototype.start_at_slide;
 /** @type {boolean} */
TL.ITimelineOptions.prototype.start_at_end;
 /** @type {number} */
TL.ITimelineOptions.prototype.menubar_height;
 /** @type {boolean} */
TL.ITimelineOptions.prototype.use_bc;
 /** @type {number} */
TL.ITimelineOptions.prototype.duration;
 /** @type {function(): number} */
TL.ITimelineOptions.prototype.ease;
 /** @type {boolean} */
TL.ITimelineOptions.prototype.dragging;
 /** @type {boolean} */
TL.ITimelineOptions.prototype.trackResize;
 /** @type {number} */
TL.ITimelineOptions.prototype.slide_padding_lr;
 /** @type {string} */
TL.ITimelineOptions.prototype.slide_default_fade;
 /** @type {string} */
TL.ITimelineOptions.prototype.language;
 /** @type {?} */
TL.ITimelineOptions.prototype.ga_property_id;
 /** @type {!Array<string>} */
TL.ITimelineOptions.prototype.track_events;
 /** @type {string} */
TL.ITimelineOptions.prototype.script_path;