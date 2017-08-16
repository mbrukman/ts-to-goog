/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/react-sortable-hoc/index.d.ts:
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "react-sortable-hoc"
/** @const */
tsickle_declare_module.react_sortable_hoc = {};

/* TODO: ImportDeclaration in tsickle_declare_module.react_sortable_hoc */

/** @typedef {string} */
tsickle_declare_module.react_sortable_hoc.Axis;

/** @typedef {(string|number)} */
tsickle_declare_module.react_sortable_hoc.Offset;
/**
 * @record
 * @struct
 */
tsickle_declare_module.react_sortable_hoc.SortStart = function() {};
 /** @type {!Element} */
tsickle_declare_module.react_sortable_hoc.SortStart.prototype.node;
 /** @type {number} */
tsickle_declare_module.react_sortable_hoc.SortStart.prototype.index;
 /** @type {(string|number)} */
tsickle_declare_module.react_sortable_hoc.SortStart.prototype.collection;

/** @typedef {(!React.MouseEvent<?>|!React.TouchEvent<?>)} */
tsickle_declare_module.react_sortable_hoc.SortEvent;

/** @typedef {function(!SortStart, (!React.MouseEvent<?>|!React.TouchEvent<?>)): void} */
tsickle_declare_module.react_sortable_hoc.SortStartHandler;

/** @typedef {function((!React.MouseEvent<?>|!React.TouchEvent<?>)): void} */
tsickle_declare_module.react_sortable_hoc.SortMoveHandler;
/**
 * @record
 * @struct
 */
tsickle_declare_module.react_sortable_hoc.SortEnd = function() {};
 /** @type {number} */
tsickle_declare_module.react_sortable_hoc.SortEnd.prototype.oldIndex;
 /** @type {number} */
tsickle_declare_module.react_sortable_hoc.SortEnd.prototype.newIndex;
 /** @type {(string|number)} */
tsickle_declare_module.react_sortable_hoc.SortEnd.prototype.collection;

/** @typedef {function(!SortEnd, (!React.MouseEvent<?>|!React.TouchEvent<?>)): void} */
tsickle_declare_module.react_sortable_hoc.SortEndHandler;

/** @typedef {function(!React.ReactElement<?>): !HTMLElement} */
tsickle_declare_module.react_sortable_hoc.ContainerGetter;
/**
 * @record
 * @struct
 */
tsickle_declare_module.react_sortable_hoc.Dimensions = function() {};
 /** @type {number} */
tsickle_declare_module.react_sortable_hoc.Dimensions.prototype.width;
 /** @type {number} */
tsickle_declare_module.react_sortable_hoc.Dimensions.prototype.height;
/**
 * @record
 * @struct
 */
tsickle_declare_module.react_sortable_hoc.SortableContainerProps = function() {};
 /** @type {string} */
tsickle_declare_module.react_sortable_hoc.SortableContainerProps.prototype.axis;
 /** @type {string} */
tsickle_declare_module.react_sortable_hoc.SortableContainerProps.prototype.lockAxis;
 /** @type {string} */
tsickle_declare_module.react_sortable_hoc.SortableContainerProps.prototype.helperClass;
 /** @type {number} */
tsickle_declare_module.react_sortable_hoc.SortableContainerProps.prototype.transitionDuration;
 /** @type {number} */
tsickle_declare_module.react_sortable_hoc.SortableContainerProps.prototype.pressDelay;
 /** @type {number} */
tsickle_declare_module.react_sortable_hoc.SortableContainerProps.prototype.pressThreshold;
 /** @type {number} */
tsickle_declare_module.react_sortable_hoc.SortableContainerProps.prototype.distance;
 /** @type {function((!React.MouseEvent<?>|!React.TouchEvent<?>)): boolean} */
tsickle_declare_module.react_sortable_hoc.SortableContainerProps.prototype.shouldCancelStart;
 /** @type {function(!SortStart, (!React.MouseEvent<?>|!React.TouchEvent<?>)): void} */
tsickle_declare_module.react_sortable_hoc.SortableContainerProps.prototype.onSortStart;
 /** @type {function((!React.MouseEvent<?>|!React.TouchEvent<?>)): void} */
tsickle_declare_module.react_sortable_hoc.SortableContainerProps.prototype.onSortMove;
 /** @type {function(!SortEnd, (!React.MouseEvent<?>|!React.TouchEvent<?>)): void} */
tsickle_declare_module.react_sortable_hoc.SortableContainerProps.prototype.onSortEnd;
 /** @type {boolean} */
tsickle_declare_module.react_sortable_hoc.SortableContainerProps.prototype.useDragHandle;
 /** @type {boolean} */
tsickle_declare_module.react_sortable_hoc.SortableContainerProps.prototype.useWindowAsScrollContainer;
 /** @type {boolean} */
tsickle_declare_module.react_sortable_hoc.SortableContainerProps.prototype.hideSortableGhost;
 /** @type {boolean} */
tsickle_declare_module.react_sortable_hoc.SortableContainerProps.prototype.lockToContainerEdges;
 /** @type {(string|number|!Array<?>)} */
tsickle_declare_module.react_sortable_hoc.SortableContainerProps.prototype.lockOffset;
 /** @type {function(!React.ReactElement<?>): !HTMLElement} */
tsickle_declare_module.react_sortable_hoc.SortableContainerProps.prototype.getContainer;
 /** @type {function(!SortStart): !Dimensions} */
tsickle_declare_module.react_sortable_hoc.SortableContainerProps.prototype.getHelperDimensions;
/**
 * @record
 * @struct
 */
tsickle_declare_module.react_sortable_hoc.SortableElementProps = function() {};
 /** @type {number} */
tsickle_declare_module.react_sortable_hoc.SortableElementProps.prototype.index;
 /** @type {(string|number)} */
tsickle_declare_module.react_sortable_hoc.SortableElementProps.prototype.collection;
 /** @type {boolean} */
tsickle_declare_module.react_sortable_hoc.SortableElementProps.prototype.disabled;
/**
 * @record
 * @struct
 */
tsickle_declare_module.react_sortable_hoc.Config = function() {};
 /** @type {boolean} */
tsickle_declare_module.react_sortable_hoc.Config.prototype.withRef;

/** @typedef {function(P): !JSX.Element} */
tsickle_declare_module.react_sortable_hoc.WrappedComponentFactory;

/** @typedef {(!React.ComponentClass<P>|function(P): !JSX.Element)} */
tsickle_declare_module.react_sortable_hoc.WrappedComponent;

/**
 * @template P
 * @param {(!React.ComponentClass<P>|function(P): !JSX.Element)} wrappedComponent
 * @param {!Config=} config
 * @return {!React.ComponentClass<?>}
 */
tsickle_declare_module.react_sortable_hoc.SortableContainer = function(wrappedComponent, config) {};

/**
 * @template P
 * @param {(!React.ComponentClass<P>|function(P): !JSX.Element)} wrappedComponent
 * @param {!Config=} config
 * @return {!React.ComponentClass<?>}
 */
tsickle_declare_module.react_sortable_hoc.SortableElement = function(wrappedComponent, config) {};

/**
 * @template P
 * @param {(!React.ComponentClass<P>|function(P): !JSX.Element)} wrappedComponent
 * @param {!Config=} config
 * @return {!React.ComponentClass<P>}
 */
tsickle_declare_module.react_sortable_hoc.SortableHandle = function(wrappedComponent, config) {};

/**
 * @template T
 * @param {!Array<T>} collection
 * @param {number} previousIndex
 * @param {number} newIndex
 * @return {!Array<T>}
 */
tsickle_declare_module.react_sortable_hoc.arrayMove = function(collection, previousIndex, newIndex) {};