/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/aurelia-knockout/index.d.ts:
/**
 * @record
 * @struct
 */
function KnockoutBindable() {}

/**
 * Applys all values from a data object (usually the activation data) to the corresponding instance fields
 * in the current view model if they are marked as \@bindable. By default all matching values from the data object
 * are applied. To only apply observable values set the last parameter to `true`. Subscriptions are created
 * for all Knockout observables in the data object to update the view-model values respectively.
 * 
 * @param {?} data - the data object
 * @param {?} target - the target view model
 * @param {boolean=} applyOnlyObservables - `true` if only observable values should be applied, false by default.
 * @return {void}
 */
KnockoutBindable.prototype.applyBindableValues = function(data, target, applyOnlyObservables) {};
