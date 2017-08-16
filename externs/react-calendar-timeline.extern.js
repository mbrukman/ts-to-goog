/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/react-calendar-timeline/index.d.ts:
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "react-calendar-timeline"
/** @const */
tsickle_declare_module.react_calendar_timeline = {};
/**
 * @record
 * @struct
 */
tsickle_declare_module.react_calendar_timeline.ReactCalendarTimeline = function() {};
 /** @type {!Array<{id: number, title: ?}>} */
tsickle_declare_module.react_calendar_timeline.ReactCalendarTimeline.prototype.groups;
 /** @type {!Array<{id: number, group: number, title: ?, start_time: ?, end_time: ?, canMove: boolean, canResize: boolean, canChangeGroup: boolean, className: string}>} */
tsickle_declare_module.react_calendar_timeline.ReactCalendarTimeline.prototype.items;
 /** @type {{groupIdKey: string, groupTitleKey: string, itemIdKey: string, itemTitleKey: string, itemGroupKey: string, itemTimeStartKey: string, itemTimeEndKey: string}} */
tsickle_declare_module.react_calendar_timeline.ReactCalendarTimeline.prototype.keys;
 /** @type {number} */
tsickle_declare_module.react_calendar_timeline.ReactCalendarTimeline.prototype.sidebarWidth;
 /** @type {number} */
tsickle_declare_module.react_calendar_timeline.ReactCalendarTimeline.prototype.dragSnap;
 /** @type {number} */
tsickle_declare_module.react_calendar_timeline.ReactCalendarTimeline.prototype.minResizeWidth;
 /** @type {string} */
tsickle_declare_module.react_calendar_timeline.ReactCalendarTimeline.prototype.fixedHeader;
 /** @type {number} */
tsickle_declare_module.react_calendar_timeline.ReactCalendarTimeline.prototype.zIndexStart;
 /** @type {number} */
tsickle_declare_module.react_calendar_timeline.ReactCalendarTimeline.prototype.lineHeight;
 /** @type {number} */
tsickle_declare_module.react_calendar_timeline.ReactCalendarTimeline.prototype.headerLabelGroupHeight;
 /** @type {number} */
tsickle_declare_module.react_calendar_timeline.ReactCalendarTimeline.prototype.headerLabelHeight;
 /** @type {number} */
tsickle_declare_module.react_calendar_timeline.ReactCalendarTimeline.prototype.itemHeightRatio;
 /** @type {number} */
tsickle_declare_module.react_calendar_timeline.ReactCalendarTimeline.prototype.minZoom;
 /** @type {number} */
tsickle_declare_module.react_calendar_timeline.ReactCalendarTimeline.prototype.maxZoom;
 /** @type {boolean} */
tsickle_declare_module.react_calendar_timeline.ReactCalendarTimeline.prototype.canMove;
 /** @type {boolean} */
tsickle_declare_module.react_calendar_timeline.ReactCalendarTimeline.prototype.canChangeGroup;
 /** @type {boolean} */
tsickle_declare_module.react_calendar_timeline.ReactCalendarTimeline.prototype.canResize;
 /** @type {boolean} */
tsickle_declare_module.react_calendar_timeline.ReactCalendarTimeline.prototype.useResizeHandle;
 /** @type {boolean} */
tsickle_declare_module.react_calendar_timeline.ReactCalendarTimeline.prototype.stackItems;
 /** @type {boolean} */
tsickle_declare_module.react_calendar_timeline.ReactCalendarTimeline.prototype.traditionalZoom;
 /** @type {boolean} */
tsickle_declare_module.react_calendar_timeline.ReactCalendarTimeline.prototype.itemTouchSendsClick;
 /** @type {?} */
tsickle_declare_module.react_calendar_timeline.ReactCalendarTimeline.prototype.defaultTimeStart;
 /** @type {?} */
tsickle_declare_module.react_calendar_timeline.ReactCalendarTimeline.prototype.defaultTimeEnd;
 /** @type {number} */
tsickle_declare_module.react_calendar_timeline.ReactCalendarTimeline.prototype.visibleTimeStart;
 /** @type {number} */
tsickle_declare_module.react_calendar_timeline.ReactCalendarTimeline.prototype.visibleTimeEnd;
 /** @type {?} */
tsickle_declare_module.react_calendar_timeline.ReactCalendarTimeline.prototype.children;

/**
 * @param {?} itemId
 * @param {?} dragTime
 * @param {?} newGroupOrder
 * @return {?}
 */
tsickle_declare_module.react_calendar_timeline.ReactCalendarTimeline.prototype.onItemMove = function(itemId, dragTime, newGroupOrder) {};

/**
 * @param {?} itemId
 * @param {?} newResizeEnd
 * @return {?}
 */
tsickle_declare_module.react_calendar_timeline.ReactCalendarTimeline.prototype.onItemResize = function(itemId, newResizeEnd) {};

/**
 * @param {?} itemId
 * @return {?}
 */
tsickle_declare_module.react_calendar_timeline.ReactCalendarTimeline.prototype.onItemSelect = function(itemId) {};

/**
 * @param {?} itemId
 * @return {?}
 */
tsickle_declare_module.react_calendar_timeline.ReactCalendarTimeline.prototype.onItemClick = function(itemId) {};

/**
 * @param {?} groupId
 * @param {?} time
 * @param {?} e
 * @return {?}
 */
tsickle_declare_module.react_calendar_timeline.ReactCalendarTimeline.prototype.onCanvasClick = function(groupId, time, e) {};

/**
 * @param {?} itemId
 * @return {?}
 */
tsickle_declare_module.react_calendar_timeline.ReactCalendarTimeline.prototype.onItemDoubleClick = function(itemId) {};

/**
 * @param {?} action
 * @param {?} itemId
 * @param {?} time
 * @return {?}
 */
tsickle_declare_module.react_calendar_timeline.ReactCalendarTimeline.prototype.moveResizeValidator = function(action, itemId, time) {};

/**
 * @param {?} visibleTimeStart
 * @param {?} visibleTimeEnd
 * @return {?}
 */
tsickle_declare_module.react_calendar_timeline.ReactCalendarTimeline.prototype.onTimeChange = function(visibleTimeStart, visibleTimeEnd) {};

/**
 * @param {?} visibleTimeStart
 * @param {?} visibleTimeEnd
 * @return {?}
 */
tsickle_declare_module.react_calendar_timeline.ReactCalendarTimeline.prototype.onTimeInit = function(visibleTimeStart, visibleTimeEnd) {};

/**
 * @param {?} canvasTimeStart
 * @param {?} canvasTimeEnd
 * @return {?}
 */
tsickle_declare_module.react_calendar_timeline.ReactCalendarTimeline.prototype.onBoundsChange = function(canvasTimeStart, canvasTimeEnd) {};
 /** @type {!React.ClassicComponentClass<?>} */
tsickle_declare_module.react_calendar_timeline.ReactCalendarTimeline;

/* TODO: ExportAssignment in tsickle_declare_module.react_calendar_timeline */
