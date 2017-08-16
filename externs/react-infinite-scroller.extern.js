/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/react-infinite-scroller/index.d.ts:

/* TODO: ImportDeclaration in  */
/** @const */
var InfiniteScroll = {};
/**
 * @extends {React.HTMLProps}
 * @record
 * @struct
 */
InfiniteScroll.InfiniteScrollProps = function() {};
 /** @type {string} */
InfiniteScroll.InfiniteScrollProps.prototype.element;
 /** @type {boolean} */
InfiniteScroll.InfiniteScrollProps.prototype.hasMore;
 /** @type {boolean} */
InfiniteScroll.InfiniteScrollProps.prototype.initialLoad;
 /** @type {boolean} */
InfiniteScroll.InfiniteScrollProps.prototype.isReverse;
 /** @type {number} */
InfiniteScroll.InfiniteScrollProps.prototype.pageStart;
 /** @type {number} */
InfiniteScroll.InfiniteScrollProps.prototype.threshold;
 /** @type {boolean} */
InfiniteScroll.InfiniteScrollProps.prototype.useCapture;
 /** @type {boolean} */
InfiniteScroll.InfiniteScrollProps.prototype.useWindow;
 /** @type {!React.ReactElement<?>} */
InfiniteScroll.InfiniteScrollProps.prototype.loader;

/**
 * A callback for when more items are requested by the user.
 * Page param is next page index.
 * @param {number} page
 * @return {void}
 */
InfiniteScroll.InfiniteScrollProps.prototype.loadMore = function(page) {};
/**
 * @extends {React.Component}
 * @constructor
 * @struct
 */
InfiniteScroll.InfiniteScroll = function() {};

/* TODO: ExportAssignment in  */
