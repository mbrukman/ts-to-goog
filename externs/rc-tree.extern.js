/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/rc-tree/index.d.ts:

/* TODO: ImportDeclaration in  */
/**
 * @extends {Props}
 * @record
 * @struct
 */
function TreeNodeProps() {}
 /** @type {string} */
TreeNodeProps.prototype.className;
 /** @type {boolean} */
TreeNodeProps.prototype.disabled;
 /** @type {boolean} */
TreeNodeProps.prototype.disableCheckbox;
 /** @type {(string|!JSX.Element)} */
TreeNodeProps.prototype.title;
 /** @type {(string|number)} */
TreeNodeProps.prototype.key;
 /** @type {boolean} */
TreeNodeProps.prototype.isLeaf;
/**
 * @constructor
 * @struct
 */
function TreeNode() {}
/**
 * @record
 * @struct
 */
function ExpandData() {}
 /** @type {boolean} */
ExpandData.prototype.expanded;
 /** @type {?} */
ExpandData.prototype.node;
/**
 * @record
 * @struct
 */
function CheckData() {}
 /** @type {boolean} */
CheckData.prototype.checked;
 /** @type {!Array<?>} */
CheckData.prototype.checkedNodes;
 /** @type {!Array<string>} */
CheckData.prototype.halfCheckedKeys;
 /** @type {?} */
CheckData.prototype.node;
 /** @type {string} */
CheckData.prototype.event;
/**
 * @record
 * @struct
 */
function SelectData() {}
 /** @type {boolean} */
SelectData.prototype.selected;
 /** @type {!Array<?>} */
SelectData.prototype.selectedNodes;
 /** @type {?} */
SelectData.prototype.node;
 /** @type {string} */
SelectData.prototype.event;
/**
 * @extends {Props}
 * @record
 * @struct
 */
function TreeProps() {}
 /** @type {string} */
TreeProps.prototype.className;
 /** @type {string} */
TreeProps.prototype.prefixCls;
 /** @type {boolean} */
TreeProps.prototype.showLine;
 /** @type {boolean} */
TreeProps.prototype.showIcon;
 /** @type {boolean} */
TreeProps.prototype.selectable;
 /** @type {boolean} */
TreeProps.prototype.multiple;
 /** @type {(boolean|!JSX.Element)} */
TreeProps.prototype.checkable;
 /** @type {boolean} */
TreeProps.prototype.defaultExpandAll;
 /** @type {!Array<string>} */
TreeProps.prototype.defaultExpandedKeys;
 /** @type {!Array<string>} */
TreeProps.prototype.expandedKeys;
 /** @type {boolean} */
TreeProps.prototype.autoExpandParent;
 /** @type {!Array<string>} */
TreeProps.prototype.defaultCheckedKeys;
 /** @type {(!Array<string>|?)} */
TreeProps.prototype.checkedKeys;
 /** @type {boolean} */
TreeProps.prototype.checkStrictly;
 /** @type {!Array<string>} */
TreeProps.prototype.defaultSelectedKeys;
 /** @type {!Array<string>} */
TreeProps.prototype.selectedKeys;
 /** @type {boolean} */
TreeProps.prototype.draggable;

/**
 * fire on treeNode expand or not
 * @param {!Array<string>} expandedKeys
 * @param {?} e
 * @return {void}
 */
TreeProps.prototype.onExpand = function(expandedKeys, e) {};

/**
 * click the treeNode/checkbox to fire
 * @param {!Array<string>} checkedKeys
 * @param {?} e
 * @return {void}
 */
TreeProps.prototype.onCheck = function(checkedKeys, e) {};

/**
 * click the treeNode to fire
 * @param {!Array<string>} selectedKeys
 * @param {?} e
 * @return {void}
 */
TreeProps.prototype.onSelect = function(selectedKeys, e) {};

/**
 * filter some treeNodes as you need.
 * @param {?} node
 * @return {boolean}
 */
TreeProps.prototype.filterTreeNode = function(node) {};

/**
 * load data asynchronously
 * @param {?} node
 * @return {!Promise<?>}
 */
TreeProps.prototype.loadData = function(node) {};
/**
 * @constructor
 * @struct
 */
function Tree() {}