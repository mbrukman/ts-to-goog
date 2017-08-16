/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/p-settle/index.d.ts:
/** @const */
var pSettle = {};
/**
 * @record
 * @struct
 */
pSettle.SettledResult = function() {};
 /** @type {boolean} */
pSettle.SettledResult.prototype.isFulfilled;
 /** @type {boolean} */
pSettle.SettledResult.prototype.isRejected;
 /** @type {T} */
pSettle.SettledResult.prototype.value;
 /** @type {?} */
pSettle.SettledResult.prototype.reason;

/**
 * Returns a Promise that is fulfilled when all promises in `input` are settled.
 * 
 * The fulfilled value is an array of objects with the following properties:
 * 
 * * `isFulfilled`
 * * `isRejected`
 * * `value` or `reason` (Depending on whether the promise fulfilled or rejected)
 * 
 * @template T
 * @param {!Iterable<!PromiseLike<T>>} input
 * @return {!Promise<!Array<!pSettle.SettledResult<T>>>}
 */
function pSettle(input) {}

/* TODO: ExportAssignment in  */