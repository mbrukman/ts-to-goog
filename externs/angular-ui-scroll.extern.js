/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/angular-ui-scroll/index.d.ts:

/* TODO: ImportDeclaration in  */
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "angular"
/** @const */
tsickle_declare_module.angular.ui = {};
/**
 * @record
 * @struct
 */
tsickle_declare_module.angular.ui.IScrollDatasource = function() {};

/**
 * The datasource object implements methods and properties to be used by the directive to access the data
 * 
 * @param {number} index indicates the first data row requested
 * 
 * @param {number} count indicates number of data rows requested
 * 
 * @param {function(!Array<T>): ?} success function to call when the data are retrieved. The implementation of the service has to call
 * this function when the data are retrieved and pass it an array of the items retrieved. If no items are
 * retrieved, an empty array has to be passed.
 * 
 * Important: Make sure to respect the index and count parameters of the request. The array passed to the
 * success method should have exactly count elements unless it hit eof/bof
 * @return {void}
 */
tsickle_declare_module.angular.ui.IScrollDatasource.prototype.get = function(index, count, success) {};
/**
 * @record
 * @struct
 */
tsickle_declare_module.angular.ui.IScrollAdapter = function() {};
 /** @type {boolean} */
tsickle_declare_module.angular.ui.IScrollAdapter.prototype.isLoading;
 /** @type {?} */
tsickle_declare_module.angular.ui.IScrollAdapter.prototype.topVisible;
 /** @type {!angular.IAugmentedJQueryStatic} */
tsickle_declare_module.angular.ui.IScrollAdapter.prototype.topVisibleElement;
 /** @type {!angular.IRepeatScope} */
tsickle_declare_module.angular.ui.IScrollAdapter.prototype.topVisibleScope;

/**
 * calling this method reinitializes and reloads the scroller content.
 * @param {number=} startIndex is an integer indicating what item index the scroller will use to start the load process.
 * @return {void}
 */
tsickle_declare_module.angular.ui.IScrollAdapter.prototype.reload = function(startIndex) {};

/**
 * Replaces the item in the buffer at the given index with the new items.
 * 
 * Replaces the item in the buffer at the given index with the new items.
 * 
 * @param {number|function(?, !angular.IRepeatScope): ?} index_or_updater provides position of the item to be affected in the dataset (not in the buffer). If the item with
 * the given index currently is not in the buffer no updates will be applied. $index property of the item $scope
 * can be used to access the index value for a given item
 *  / is a function to be applied to every item currently in the buffer. The function will receive
 * 3 parameters: item, scope, and element. Here item is the item to be affected, scope is the item $scope, and
 * element is the html element for the item. The return value of the function should be an array of items.
 * Similarly to the newItem parameter (see above), if the array is empty([]), the item is deleted, otherwise
 * the item is replaced by the items in the array. If the return value is not an array, the item remains
 * unaffected, unless some updates were made to the item in the updater function. This can be thought of as
 * in place update.
 * @param {!Array<?>=} newItems is an array of items to replace the affected item. If the array is empty ([]) the item will
 * be deleted, otherwise the items in the array replace the item. If the newItem array contains the old item,
 * the old item stays in place.
 * @return {void}
 */
tsickle_declare_module.angular.ui.IScrollAdapter.prototype.applyUpdates = function(index_or_updater, newItems) {};

/**
 * Adds new items after the last item in the buffer
 * 
 * @param {!Array<?>} newItems provides an array of items to be appended.
 * @return {void}
 */
tsickle_declare_module.angular.ui.IScrollAdapter.prototype.append = function(newItems) {};

/**
 * Adds new items before the first item in the buffer
 * 
 * @param {!Array<?>} newItems provides an array of items to be prepended.
 * @return {void}
 */
tsickle_declare_module.angular.ui.IScrollAdapter.prototype.prepend = function(newItems) {};
