/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/node-calendar/index.d.ts:
/**
 * @record
 * @struct
 */
function IWeekRow() {}

/* TODO: IndexSignature:  */
/**
 * @record
 * @struct
 */
function IMonthGrid() {}

/* TODO: IndexSignature:  */
/**
 * @record
 * @struct
 */
function IMonthRow() {}

/* TODO: IndexSignature:  */
/**
 * @record
 * @struct
 */
function IYearGrid() {}

/* TODO: IndexSignature:  */
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "node-calendar"
/** @const */
tsickle_declare_module.node_calendar = {};
 /** @type {number} */
tsickle_declare_module.node_calendar.MONDAY;
 /** @type {number} */
tsickle_declare_module.node_calendar.TUESDAY;
 /** @type {number} */
tsickle_declare_module.node_calendar.WEDNESDAY;
 /** @type {number} */
tsickle_declare_module.node_calendar.THURSDAY;
 /** @type {number} */
tsickle_declare_module.node_calendar.FRIDAY;
 /** @type {number} */
tsickle_declare_module.node_calendar.SATURDAY;
 /** @type {number} */
tsickle_declare_module.node_calendar.SUNDAY;
 /** @type {number} */
tsickle_declare_module.node_calendar.JANUARY;
 /** @type {number} */
tsickle_declare_module.node_calendar.FEBRUARY;
 /** @type {number} */
tsickle_declare_module.node_calendar.MARCH;
 /** @type {number} */
tsickle_declare_module.node_calendar.APRIL;
 /** @type {number} */
tsickle_declare_module.node_calendar.MAY;
 /** @type {number} */
tsickle_declare_module.node_calendar.JUNE;
 /** @type {number} */
tsickle_declare_module.node_calendar.JULY;
 /** @type {number} */
tsickle_declare_module.node_calendar.AUGUST;
 /** @type {number} */
tsickle_declare_module.node_calendar.SEPTEMBER;
 /** @type {number} */
tsickle_declare_module.node_calendar.OCTOBER;
 /** @type {number} */
tsickle_declare_module.node_calendar.NOVEMBER;
 /** @type {number} */
tsickle_declare_module.node_calendar.DECEMBER;
 /** @type {!Array<string>} */
tsickle_declare_module.node_calendar.day_name;
 /** @type {!Array<string>} */
tsickle_declare_module.node_calendar.day_abbr;
 /** @type {!Array<string>} */
tsickle_declare_module.node_calendar.month_name;
 /** @type {!Array<string>} */
tsickle_declare_module.node_calendar.month_abbr;

/**
 * @constructor
 * @struct
 *  Numerical day of the week the calendar weeks should start.
 *  (0=MON, 1=TUE, ...) Default: 0
 * @param {number=} firstweekday
 */
tsickle_declare_module.node_calendar.Calendar = function(firstweekday) {};

/**
 * Numerical day of the week the calendar weeks should start.
 * (0=MON, 1=TUE, ...)
 * 
 * \@method getfirstweekday
 * @return {number}
 */
tsickle_declare_module.node_calendar.Calendar.prototype.getfirstweekday = function() {};

/**
 * Numerical day of the week the calendar weeks should start.
 * (0=MON, 1=TUE, ...)
 * 
 *  Numerical day of the week the calendar weeks should start.
 *  (0=MON, 1=TUE, ...) Default: 0
 * @param {number} firstweekday
 * @return {void}
 */
tsickle_declare_module.node_calendar.Calendar.prototype.setfirstweekday = function(firstweekday) {};

/**
 * One week of weekday numbers starting with the configured first one.
 * @return {!Array<number>}
 */
tsickle_declare_module.node_calendar.Calendar.prototype.iterweekdays = function() {};

/**
 * Dates for one month. The array will contain Date values and will always
 * iterate through complete weeks, so it will yield dates outside the
 * specified month.
 * 
 *  Year for which the calendar should be generated.
 * 
 *  Month for which the calendar should be generated.
 * @param {number} year
 * @param {number} month
 * @return {!Array<!Date>}
 */
tsickle_declare_module.node_calendar.Calendar.prototype.itermonthdates = function(year, month) {};

/**
 * Like itermonthdates(), but will yield day numbers. For days outside
 * the specified month the day number is 0.
 * 
 *  Year for which the calendar should be generated.
 * 
 *  Month for which the calendar should be generated.
 * @param {number} year
 * @param {number} month
 * @return {!Array<number>}
 */
tsickle_declare_module.node_calendar.Calendar.prototype.itermonthdays = function(year, month) {};

/**
 * Like itermonthdates(), but will yield [day number, weekday number]
 * arrays. For days outside the specified month the day number is 0.
 * 
 *  Year for which the calendar should be generated.
 * 
 *  Month for which the calendar should be generated.
 * @param {number} year
 * @param {number} month
 * @return {!Array<!Array<?>>}
 */
tsickle_declare_module.node_calendar.Calendar.prototype.itermonthdays2 = function(year, month) {};

/**
 * A matrix (array of array) representing a month's calendar.
 * Each row represents a week; week entries are Date values.
 * 
 *  Year for which the calendar should be generated.
 * 
 *  Month for which the calendar should be generated.
 * @param {number} year
 * @param {number} month
 * @return {!IMonthGrid<!Date>}
 */
tsickle_declare_module.node_calendar.Calendar.prototype.monthdatescalendar = function(year, month) {};

/**
 * A matrix representing a month's calendar. Each row represents a week;
 * days outside this month are zero.
 * 
 *  Year for which the calendar should be generated.
 * 
 *  Month for which the calendar should be generated.
 * @param {number} year
 * @param {number} month
 * @return {!IMonthGrid<number>}
 */
tsickle_declare_module.node_calendar.Calendar.prototype.monthdayscalendar = function(year, month) {};

/**
 * Return a matrix representing a month's calendar. Each row represents
 * a week; week entries are [day number, weekday number] arrays. Day numbers
 * outside this month are zero.
 * 
 *  Year for which the calendar should be generated.
 * 
 *  Month for which the calendar should be generated.
 * @param {number} year
 * @param {number} month
 * @return {!IMonthGrid<!Array<?>>}
 */
tsickle_declare_module.node_calendar.Calendar.prototype.monthdays2calendar = function(year, month) {};

/**
 * The specified year ready for formatting. The return value is an array
 * of month rows. Each month row contains up to width months. Each month
 * contains between 4 and 6 weeks and each week contains 1-7 days. Days
 * are Date objects.
 * 
 *  Year for which the calendar should be generated.
 * 
 *  The number of months to include in each row. Default: 3
 * @param {number} year
 * @param {number=} width
 * @return {!IYearGrid<!Date>}
 */
tsickle_declare_module.node_calendar.Calendar.prototype.yeardatescalendar = function(year, width) {};

/**
 * the specified year ready for formatting (similar to yeardatescalendar()).
 * Entries in the week arrays are day numbers. Day numbers outside this
 * month are zero.
 * 
 *  Year for which the calendar should be generated
 * 
 *  The number of months to include in each row. Default: 3
 * @param {number} year
 * @param {number=} width
 * @return {!IYearGrid<number>}
 */
tsickle_declare_module.node_calendar.Calendar.prototype.yeardayscalendar = function(year, width) {};

/**
 * The specified year ready for formatting (similar to yeardatescalendar()).
 * Entries in the week arrays are [day number, weekday number] arrays.
 * Day numbers outside this month are zero.
 * 
 *  Year for which the calendar should be generated
 * 
 *  The number of months to include in each row. Default: 3
 * @param {number} year
 * @param {number=} width
 * @return {!IYearGrid<!Array<?>>}
 */
tsickle_declare_module.node_calendar.Calendar.prototype.yeardays2calendar = function(year, width) {};

/**
 *  Year to test.
 * 
 *  true for leap years, false for non-leap years.
 * @param {number} year
 * @return {boolean}
 */
tsickle_declare_module.node_calendar.isleap = function(year) {};

/**
 *  Beginning year in the range to test.
 * 
 *  Ending year in the range to test.
 * 
 *  Number of leap years in range (y1...y2). Assumes y1 <= y2.
 * @param {number} y1
 * @param {number} y2
 * @return {number}
 */
tsickle_declare_module.node_calendar.leapdays = function(y1, y2) {};

/**
 *  Year for which the range should be calculated.
 * 
 *  Month for which the range should be calculated.
 * 
 * @throws {IllegalMonthError} if the provided month is invalid.
 * 
 *  starting weekday (0-6 ~ Mon-Sun) and number of days (28-31) for year, month.
 * @param {number} year
 * @param {number} month
 * @return {!Array<?>}
 */
tsickle_declare_module.node_calendar.monthrange = function(year, month) {};

/**
 * Sets the locale for use in extracting month and weekday names.
 * 
 *  Locale to set on the calendar object. Default: en_US
 * 
 * @throws {IllegalLocaleError} if the provided locale is invalid.
 * @param {string=} locale
 * @return {void}
 */
tsickle_declare_module.node_calendar.setlocale = function(locale) {};

/**
 * Unrelated but handy function to calculate Unix timestamp from GMT.
 * 
 * @throws {IllegalMonthError} if the provided month element is invalid.
 * 
 * @throws {IllegalDayError} if the provided day element is invalid.
 * 
 * @throws {IllegalTimeError} if any of the the provided time elements are invalid.
 * 
 *  Unix timestamp from GMT.
 * @param {!Array<?>} timegmt {[number, number, number, number, number, number]}
 *  An array containing the elements from a time structure dataset.
 *  Format: [tm_year, tm_mon, tm_mday, tm_hour, tm_min, tm_sec]
 * 
 * @return {number}
 */
tsickle_declare_module.node_calendar.timegm = function(timegmt) {};

/**
 *  Year for which the weekday should be calculated.
 * 
 *  Month for which the weekday should be calculated.
 * 
 *  Day for which the weekday should be calculated.
 * 
 * @throws {IllegalMonthError} if the provided month element is invalid.
 * 
 * @throws {IllegalDayError} if the provided day element is invalid.
 * 
 *  weekday (0-6 ~ Mon-Sun) for year (1970-...), month (1-12), day (1-31).
 * @param {number} year
 * @param {number} month
 * @param {number} day
 * @return {number}
 */
tsickle_declare_module.node_calendar.weekday = function(year, month, day) {};

/**
 * @constructor
 * @struct
 *  Optional custom error message.
 * @param {string=} message
 */
tsickle_declare_module.node_calendar.IllegalLocaleError = function(message) {};
 /** @type {string} */
tsickle_declare_module.node_calendar.IllegalLocaleError.prototype.name;
 /** @type {string} */
tsickle_declare_module.node_calendar.IllegalLocaleError.prototype.message;

/**
 * @constructor
 * @struct
 *  Optional custom error message.
 * @param {string=} message
 */
tsickle_declare_module.node_calendar.IllegalDayError = function(message) {};
 /** @type {string} */
tsickle_declare_module.node_calendar.IllegalDayError.prototype.name;
 /** @type {string} */
tsickle_declare_module.node_calendar.IllegalDayError.prototype.message;

/**
 * @constructor
 * @struct
 *  Optional custom error message.
 * @param {string=} message
 */
tsickle_declare_module.node_calendar.IllegalMonthError = function(message) {};
 /** @type {string} */
tsickle_declare_module.node_calendar.IllegalMonthError.prototype.name;
 /** @type {string} */
tsickle_declare_module.node_calendar.IllegalMonthError.prototype.message;

/**
 * @constructor
 * @struct
 *  Optional custom error message.
 * @param {string=} message
 */
tsickle_declare_module.node_calendar.IllegalTimeError = function(message) {};
 /** @type {string} */
tsickle_declare_module.node_calendar.IllegalTimeError.prototype.name;
 /** @type {string} */
tsickle_declare_module.node_calendar.IllegalTimeError.prototype.message;

/**
 * @constructor
 * @struct
 *  Optional custom error message.
 * @param {string=} message
 */
tsickle_declare_module.node_calendar.IllegalWeekdayError = function(message) {};
 /** @type {string} */
tsickle_declare_module.node_calendar.IllegalWeekdayError.prototype.name;
 /** @type {string} */
tsickle_declare_module.node_calendar.IllegalWeekdayError.prototype.message;
