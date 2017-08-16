/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/lazypipe/index.d.ts:
/**
 * @record
 * @struct
 */
function IPipelineBuilder() {}

/* TODO: CallSignature:  */

/**
 * Creates a new lazy pipeline with all the previous steps, and the new step added to the end.
 * @param {!Function} fn A stream creation function to call when the pipeline is created later.
 * @param {...?} args Any remaining arguments are saved and passed into fn when the pipeline is created.
 * @return {?}
 */
IPipelineBuilder.prototype.pipe = function(fn, args) {};

/**
 * Initializes a lazypipe.
 * @return {?}
 */
function lazypipe() {}

/* TODO: ExportAssignment in  */
