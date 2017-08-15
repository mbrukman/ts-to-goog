/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/d3-time/index.d.ts:
/**
 * @record
 * @struct
 */
function TimeInterval() {}

/* TODO: CallSignature:  */

/**
 * Returns a new date representing the latest interval boundary date before or equal to date.
 * 
 * For example, timeDay.floor(date) typically returns 12:00 AM local time on the given date.
 * 
 * This method is idempotent: if the specified date is already floored to the current interval,
 * a new date with an identical time is returned.
 * Furthermore, the returned date is the minimum expressible value of the associated interval,
 * such that interval.floor(interval.floor(date) - 1) returns the preceeding interval boundary date.
 * 
 * Note that the == and === operators do not compare by value with Date objects,
 * and thus you cannot use them to tell whether the specified date has already been floored.
 * Instead, coerce to a number and then compare.
 * 
 * This is more reliable than testing whether the time is 12:00 AM, as in some time zones midnight may not exist due to daylight saving.
 * 
 * @param {!Date} date A date object.
 * @return {!Date}
 */
TimeInterval.prototype.floor = function(date) {};

/**
 * Returns a new date representing the closest interval boundary date to date.
 * 
 * For example, timeDay.round(date) typically returns 12:00 AM local time on the given date if it is on or before noon,
 * and 12:00 AM of the following day if it is after noon.
 * 
 * This method is idempotent: if the specified date is already rounded to the current interval, a new date with an identical time is returned.
 * 
 * @param {!Date} date A date object.
 * @return {!Date}
 */
TimeInterval.prototype.round = function(date) {};

/**
 * Returns a new date representing the earliest interval boundary date after or equal to date.
 * 
 * For example, timeDay.ceil(date) typically returns 12:00 AM local time on the date following the given date.
 * 
 * This method is idempotent: if the specified date is already ceilinged to the current interval,
 * a new date with an identical time is returned. Furthermore,
 * the returned date is the maximum expressible value of the associated interval,
 * such that interval.ceil(interval.ceil(date) + 1) returns the following interval boundary date.
 * 
 * @param {!Date} date A date object.
 * @return {!Date}
 */
TimeInterval.prototype.ceil = function(date) {};

/**
 * Returns a new date equal to date plus step intervals.
 * 
 * If step is not specified it defaults to 1.
 * 
 * This method does not round the specified date to the interval. For example, if date is today at 5:34 PM,
 * then timeDay.offset(date, 1) returns 5:34 PM tomorrow (even if daylight saving changes!).
 * 
 * @param {!Date} date A date object.
 * @param {number=} step An optional number of steps to apply when calculating the offset date.
 * If step is negative, then the returned date will be before the specified date;
 * if step is zero, then a copy of the specified date is returned; if step is not an integer, it is floored.
 * @return {!Date}
 */
TimeInterval.prototype.offset = function(date, step) {};

/**
 * Returns an array of dates representing every interval boundary after or equal to start (inclusive) and before stop (exclusive).
 * 
 * If step is specified, then every step-th boundary will be returned; for example,
 * for the timeDay interval a step of 2 will return every other day.
 * If step is not an integer, it is floored.
 * 
 * The first date in the returned array is the earliest boundary after or equal to start;
 * subsequent dates are offset by step intervals and floored.
 * Thus, two overlapping ranges may be inconsistent.
 * 
 * To make ranges consistent when a step is specified, use CountableInterval.every instead.
 * 
 * @param {!Date} start A start date object for the range.
 * @param {!Date} stop A stop date object for the range.
 * @param {number=} step An optional number of steps to apply when calculating the dates in the range.
 * @return {!Array<!Date>}
 */
TimeInterval.prototype.range = function(start, stop, step) {};

/**
 * Returns a new interval that is a filtered subset of this interval using the specified test function.
 * 
 * @param {?} test A test function which is passed a date and should return true if and only if
 * the specified date should be considered part of the interval.
 * @return {?}
 */
TimeInterval.prototype.filter = function(test) {};
/**
 * @extends {TimeInterval}
 * @record
 * @struct
 */
function CountableTimeInterval() {}

/**
 * Returns the number of interval boundaries after start (exclusive) and before or equal to end (inclusive).
 * 
 * Note that this behavior is slightly different than interval.range,
 * because its purpose is to return the zero-based number of the specified end date relative to the specified start date.
 * 
 * @param {!Date} start A start date object.
 * @param {!Date} end
 * @return {number}
 */
CountableTimeInterval.prototype.count = function(start, end) {};

/**
 * Returns a filtered view of this interval representing every stepth date.
 * 
 * The meaning of step is dependent on this interval’s parent interval as defined by the field function.
 * 
 * For example, timeMinute.every(15) returns an interval representing every fifteen minutes,
 * starting on the hour: :00, :15, :30, :45, etc. Note that for some intervals,
 * the resulting dates may not be uniformly-spaced;
 * timeDay’s parent interval is timeMonth, and thus the interval number resets at the start of each month.
 * 
 * If step is not valid, returns null. If step is one, returns this interval.
 * 
 * This method can be used in conjunction with interval.range to ensure that two overlapping ranges are consistent.
 * 
 * The returned filtered interval does not support interval.count. See also interval.filter.
 * 
 * @param {number} step Number of steps.
 * @return {?}
 */
CountableTimeInterval.prototype.every = function(step) {};

/**
 * Constructs a new custom interval given the specified floor and offset functions.
 * 
 * The returned custom interval is not countable, i.e. does not exposee the methods "count(..)" and "every(...)".
 * 
 * Constructs a new custom interval given the specified floor, offset and count functions.
 * 
 * The returned custom interval is countable and exposes the methods "count(..)" and "every(...)".
 * 
 * Note: due to an internal optimization, the specified count function must not invoke interval.count on other time intervals.
 * 
 * @param {?} floor A floor function which takes a single date as an argument and rounds it down to the nearest interval boundary.
 * @param {?} offset An offset function which takes a date and an integer step as arguments and advances
 * the specified date by the specified number of boundaries; the step may be positive, negative or zero.
 * @param {?=} count A count function which takes a start date and an end date, already floored to the current interval,
 * and returns the number of boundaries between the start (exclusive) and end (inclusive).
 * Note: due to an internal optimization, the specified count function must not invoke interval.count on other time intervals.
 * @param {?=} field An optional field function which takes a date, already floored to the current interval,
 * and returns the field value of the specified date,
 * corresponding to the number of boundaries between this date (exclusive) and the latest previous parent boundary.
 * For example, for the timeDay interval, this returns the number of days since the start of the month.
 * If a field function is not specified, it defaults to counting the number of interval boundaries since
 * the UNIX epoch of January 1, 1970 UTC. The field function defines the behavior of interval.every.
 * @return {?}
 */
function timeInterval(floor, offset, count, field) {}
 /** @type {?} */
var timeMillisecond;

/**
 * This is a convenience alias for timeMillisecond.range(...).
 * 
 * @param {!Date} start A start date object for the range.
 * @param {!Date} stop A stop date object for the range.
 * @param {number=} step An optional number of steps to apply when calculating the dates in the range.
 * @return {!Array<!Date>}
 */
function timeMilliseconds(start, stop, step) {}
 /** @type {?} */
var timeSecond;

/**
 * This is a convenience alias for timeSecond.range(...).
 * 
 * @param {!Date} start A start date object for the range.
 * @param {!Date} stop A stop date object for the range.
 * @param {number=} step An optional number of steps to apply when calculating the dates in the range.
 * @return {!Array<!Date>}
 */
function timeSeconds(start, stop, step) {}
 /** @type {?} */
var timeMinute;

/**
 * This is a convenience alias for timeMinute.range(...).
 * 
 * @param {!Date} start A start date object for the range.
 * @param {!Date} stop A stop date object for the range.
 * @param {number=} step An optional number of steps to apply when calculating the dates in the range.
 * @return {!Array<!Date>}
 */
function timeMinutes(start, stop, step) {}
 /** @type {?} */
var timeHour;

/**
 * This is a convenience alias for timeHour.range(...).
 * 
 * @param {!Date} start A start date object for the range.
 * @param {!Date} stop A stop date object for the range.
 * @param {number=} step An optional number of steps to apply when calculating the dates in the range.
 * @return {!Array<!Date>}
 */
function timeHours(start, stop, step) {}
 /** @type {?} */
var timeDay;

/**
 * This is a convenience alias for timeDay.range(...).
 * 
 * @param {!Date} start A start date object for the range.
 * @param {!Date} stop A stop date object for the range.
 * @param {number=} step An optional number of steps to apply when calculating the dates in the range.
 * @return {!Array<!Date>}
 */
function timeDays(start, stop, step) {}
 /** @type {?} */
var timeWeek;

/**
 * This is a convenience alias for timeWeek.range(...).
 * 
 * @param {!Date} start A start date object for the range.
 * @param {!Date} stop A stop date object for the range.
 * @param {number=} step An optional number of steps to apply when calculating the dates in the range.
 * @return {!Array<!Date>}
 */
function timeWeeks(start, stop, step) {}
 /** @type {?} */
var timeSunday;

/**
 * This is a convenience alias for timeSunday.range(...).
 * 
 * @param {!Date} start A start date object for the range.
 * @param {!Date} stop A stop date object for the range.
 * @param {number=} step An optional number of steps to apply when calculating the dates in the range.
 * @return {!Array<!Date>}
 */
function timeSundays(start, stop, step) {}
 /** @type {?} */
var timeMonday;

/**
 * This is a convenience alias for timeMonday.range(...).
 * 
 * @param {!Date} start A start date object for the range.
 * @param {!Date} stop A stop date object for the range.
 * @param {number=} step An optional number of steps to apply when calculating the dates in the range.
 * @return {!Array<!Date>}
 */
function timeMondays(start, stop, step) {}
 /** @type {?} */
var timeTuesday;

/**
 * This is a convenience alias for timeTuesday.range(...).
 * 
 * @param {!Date} start A start date object for the range.
 * @param {!Date} stop A stop date object for the range.
 * @param {number=} step An optional number of steps to apply when calculating the dates in the range.
 * @return {!Array<!Date>}
 */
function timeTuesdays(start, stop, step) {}
 /** @type {?} */
var timeWednesday;

/**
 * This is a convenience alias for timeWednesday.range(...).
 * 
 * @param {!Date} start A start date object for the range.
 * @param {!Date} stop A stop date object for the range.
 * @param {number=} step An optional number of steps to apply when calculating the dates in the range.
 * @return {!Array<!Date>}
 */
function timeWednesdays(start, stop, step) {}
 /** @type {?} */
var timeThursday;

/**
 * This is a convenience alias for timeThursday.range(...).
 * 
 * @param {!Date} start A start date object for the range.
 * @param {!Date} stop A stop date object for the range.
 * @param {number=} step An optional number of steps to apply when calculating the dates in the range.
 * @return {!Array<!Date>}
 */
function timeThursdays(start, stop, step) {}
 /** @type {?} */
var timeFriday;

/**
 * This is a convenience alias for timeFriday.range(...).
 * 
 * @param {!Date} start A start date object for the range.
 * @param {!Date} stop A stop date object for the range.
 * @param {number=} step An optional number of steps to apply when calculating the dates in the range.
 * @return {!Array<!Date>}
 */
function timeFridays(start, stop, step) {}
 /** @type {?} */
var timeSaturday;

/**
 * This is a convenience alias for timeSaturday.range(...).
 * 
 * @param {!Date} start A start date object for the range.
 * @param {!Date} stop A stop date object for the range.
 * @param {number=} step An optional number of steps to apply when calculating the dates in the range.
 * @return {!Array<!Date>}
 */
function timeSaturdays(start, stop, step) {}
 /** @type {?} */
var timeMonth;

/**
 * This is a convenience alias for timeMonth.range(...).
 * 
 * @param {!Date} start A start date object for the range.
 * @param {!Date} stop A stop date object for the range.
 * @param {number=} step An optional number of steps to apply when calculating the dates in the range.
 * @return {!Array<!Date>}
 */
function timeMonths(start, stop, step) {}
 /** @type {?} */
var timeYear;

/**
 * This is a convenience alias for timeYear.range(...).
 * 
 * @param {!Date} start A start date object for the range.
 * @param {!Date} stop A stop date object for the range.
 * @param {number=} step An optional number of steps to apply when calculating the dates in the range.
 * @return {!Array<!Date>}
 */
function timeYears(start, stop, step) {}
 /** @type {?} */
var utcMillisecond;

/**
 * This is a convenience alias for utcMilliesecond.range(...).
 * 
 * @param {!Date} start A start date object for the range.
 * @param {!Date} stop A stop date object for the range.
 * @param {number=} step An optional number of steps to apply when calculating the dates in the range.
 * @return {!Array<!Date>}
 */
function utcMilliseconds(start, stop, step) {}
 /** @type {?} */
var utcSecond;

/**
 * This is a convenience alias for utcSecond.range(...).
 * 
 * @param {!Date} start A start date object for the range.
 * @param {!Date} stop A stop date object for the range.
 * @param {number=} step An optional number of steps to apply when calculating the dates in the range.
 * @return {!Array<!Date>}
 */
function utcSeconds(start, stop, step) {}
 /** @type {?} */
var utcMinute;

/**
 * This is a convenience alias for utcMinute.range(...).
 * 
 * @param {!Date} start A start date object for the range.
 * @param {!Date} stop A stop date object for the range.
 * @param {number=} step An optional number of steps to apply when calculating the dates in the range.
 * @return {!Array<!Date>}
 */
function utcMinutes(start, stop, step) {}
 /** @type {?} */
var utcHour;

/**
 * This is a convenience alias for utcHour.range(...).
 * 
 * @param {!Date} start A start date object for the range.
 * @param {!Date} stop A stop date object for the range.
 * @param {number=} step An optional number of steps to apply when calculating the dates in the range.
 * @return {!Array<!Date>}
 */
function utcHours(start, stop, step) {}
 /** @type {?} */
var utcDay;

/**
 * This is a convenience alias for utcDay.range(...).
 * 
 * @param {!Date} start A start date object for the range.
 * @param {!Date} stop A stop date object for the range.
 * @param {number=} step An optional number of steps to apply when calculating the dates in the range.
 * @return {!Array<!Date>}
 */
function utcDays(start, stop, step) {}
 /** @type {?} */
var utcWeek;

/**
 * This is a convenience alias for utcWeek.range(...).
 * 
 * @param {!Date} start A start date object for the range.
 * @param {!Date} stop A stop date object for the range.
 * @param {number=} step An optional number of steps to apply when calculating the dates in the range.
 * @return {!Array<!Date>}
 */
function utcWeeks(start, stop, step) {}
 /** @type {?} */
var utcSunday;

/**
 * This is a convenience alias for utcSunday.range(...).
 * 
 * @param {!Date} start A start date object for the range.
 * @param {!Date} stop A stop date object for the range.
 * @param {number=} step An optional number of steps to apply when calculating the dates in the range.
 * @return {!Array<!Date>}
 */
function utcSundays(start, stop, step) {}
 /** @type {?} */
var utcMonday;

/**
 * This is a convenience alias for utcMonday.range(...).
 * 
 * @param {!Date} start A start date object for the range.
 * @param {!Date} stop A stop date object for the range.
 * @param {number=} step An optional number of steps to apply when calculating the dates in the range.
 * @return {!Array<!Date>}
 */
function utcMondays(start, stop, step) {}
 /** @type {?} */
var utcTuesday;

/**
 * This is a convenience alias for utcTuesday.range(...).
 * 
 * @param {!Date} start A start date object for the range.
 * @param {!Date} stop A stop date object for the range.
 * @param {number=} step An optional number of steps to apply when calculating the dates in the range.
 * @return {!Array<!Date>}
 */
function utcTuesdays(start, stop, step) {}
 /** @type {?} */
var utcWednesday;

/**
 * This is a convenience alias for utcWednesday.range(...).
 * 
 * @param {!Date} start A start date object for the range.
 * @param {!Date} stop A stop date object for the range.
 * @param {number=} step An optional number of steps to apply when calculating the dates in the range.
 * @return {!Array<!Date>}
 */
function utcWednesdays(start, stop, step) {}
 /** @type {?} */
var utcThursday;

/**
 * This is a convenience alias for utcThursday.range(...).
 * 
 * @param {!Date} start A start date object for the range.
 * @param {!Date} stop A stop date object for the range.
 * @param {number=} step An optional number of steps to apply when calculating the dates in the range.
 * @return {!Array<!Date>}
 */
function utcThursdays(start, stop, step) {}
 /** @type {?} */
var utcFriday;

/**
 * This is a convenience alias for utcFriday.range(...).
 * 
 * @param {!Date} start A start date object for the range.
 * @param {!Date} stop A stop date object for the range.
 * @param {number=} step An optional number of steps to apply when calculating the dates in the range.
 * @return {!Array<!Date>}
 */
function utcFridays(start, stop, step) {}
 /** @type {?} */
var utcSaturday;

/**
 * This is a convenience alias for utcSaturday.range(...).
 * 
 * @param {!Date} start A start date object for the range.
 * @param {!Date} stop A stop date object for the range.
 * @param {number=} step An optional number of steps to apply when calculating the dates in the range.
 * @return {!Array<!Date>}
 */
function utcSaturdays(start, stop, step) {}
 /** @type {?} */
var utcMonth;

/**
 * This is a convenience alias for utcMonth.range(...).
 * 
 * @param {!Date} start A start date object for the range.
 * @param {!Date} stop A stop date object for the range.
 * @param {number=} step An optional number of steps to apply when calculating the dates in the range.
 * @return {!Array<!Date>}
 */
function utcMonths(start, stop, step) {}
 /** @type {?} */
var utcYear;

/**
 * This is a convenience alias for utcYear.range(...).
 * 
 * @param {!Date} start A start date object for the range.
 * @param {!Date} stop A stop date object for the range.
 * @param {number=} step An optional number of steps to apply when calculating the dates in the range.
 * @return {!Array<!Date>}
 */
function utcYears(start, stop, step) {}
