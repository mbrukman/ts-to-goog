/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/rx-angular/index.d.ts:

/**
 * @param {!angular.IScope} $scope
 * @param {function(T): void} callback
 * @return {?<T>}
 */
Rx.IObservable.prototype.safeApply = function($scope, callback) {};
/**
 * @extends {Rx.IScheduler}
 * @record
 * @struct
 */
Rx.ScopeScheduler = function() {};

/**
 * @param {!angular.IScope} scope
 * @return {?}
 */
Rx.ScopeScheduler.prototype.constructor = function(scope) {};
/**
 * @extends {Rx.SchedulerStatic}
 * @record
 * @struct
 */
Rx.ScopeSchedulerStatic = function() {};

/* TODO: ConstructSignature: Rx */
 /** @type {!Rx.ScopeSchedulerStatic} */
Rx.ScopeScheduler;
/** @const */
var rx = {};
/** @const */
rx.angular = {};
/**
 * @extends {angular.IScope}
 * @record
 * @struct
 */
rx.angular.IRxScope = function() {};

/**
 * @param {string} property
 * @return {?<?>}
 */
rx.angular.IRxScope.prototype.$toObservable = function(property) {};
