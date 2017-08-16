/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/jsoneditoronline/index.d.ts:
/**
 * @record
 * @struct
 */
function JSONEditorOptions() {}
 /** @type {function(): void} */
JSONEditorOptions.prototype.change;
 /** @type {boolean} */
JSONEditorOptions.prototype.history;
 /** @type {string} */
JSONEditorOptions.prototype.mode;
 /** @type {string} */
JSONEditorOptions.prototype.name;
 /** @type {boolean} */
JSONEditorOptions.prototype.search;

/**
 * @constructor
 * @struct
 * @param {!JSONEditor} editor
 */
function JSONEditorHistory(editor) {}

/**
 * @return {void}
 */
JSONEditorHistory.prototype.onChange = function() {};

/**
 * @param {string} action
 * @param {!Object} params
 * @return {void}
 */
JSONEditorHistory.prototype.add = function(action, params) {};

/**
 * @return {void}
 */
JSONEditorHistory.prototype.clear = function() {};

/**
 * @return {boolean}
 */
JSONEditorHistory.prototype.canUndo = function() {};

/**
 * @return {boolean}
 */
JSONEditorHistory.prototype.canRedo = function() {};

/**
 * @return {void}
 */
JSONEditorHistory.prototype.undo = function() {};

/**
 * @return {void}
 */
JSONEditorHistory.prototype.redo = function() {};
/**
 * @record
 * @struct
 */
function JSONEditorNodeUpdateDomOptions() {}
 /** @type {boolean} */
JSONEditorNodeUpdateDomOptions.prototype.recurse;
 /** @type {boolean} */
JSONEditorNodeUpdateDomOptions.prototype.updateIndexes;
/**
 * @record
 * @struct
 */
function JSONEditorNodeType() {}
 /** @type {string} */
JSONEditorNodeType.prototype.value;
 /** @type {string} */
JSONEditorNodeType.prototype.className;
 /** @type {string} */
JSONEditorNodeType.prototype.title;
/**
 * @record
 * @struct
 */
function JSONEditorConstructorParams() {}
 /** @type {string} */
JSONEditorConstructorParams.prototype.field;
 /** @type {boolean} */
JSONEditorConstructorParams.prototype.fieldEditable;
 /** @type {?} */
JSONEditorConstructorParams.prototype.value;

/**
 * @constructor
 * @struct
 * @param {!JSONEditor} editor
 * @param {!JSONEditorConstructorParams} params
 */
function JSONEditorNode(editor, params) {}
 /** @type {!Array<!JSONEditorNodeType>} */
JSONEditorNode.prototype.types;

/**
 * @param {!JSONEditorNode} parent
 * @return {void}
 */
JSONEditorNode.prototype.setParent = function(parent) {};

/**
 * @return {!JSONEditorNode}
 */
JSONEditorNode.prototype.getParent = function() {};

/**
 * @param {string} field
 * @param {boolean} fieldEditable
 * @return {void}
 */
JSONEditorNode.prototype.setField = function(field, fieldEditable) {};

/**
 * @return {string}
 */
JSONEditorNode.prototype.getField = function() {};

/**
 * @param {?} value
 * @return {void}
 */
JSONEditorNode.prototype.setValue = function(value) {};

/**
 * @return {?}
 */
JSONEditorNode.prototype.getValue = function() {};

/**
 * @return {number}
 */
JSONEditorNode.prototype.getLevel = function() {};

/**
 * @return {!JSONEditorNode}
 */
JSONEditorNode.prototype.clone = function() {};

/**
 * @param {boolean} recurse
 * @return {void}
 */
JSONEditorNode.prototype.expand = function(recurse) {};

/**
 * @param {boolean} recurse
 * @return {void}
 */
JSONEditorNode.prototype.collapse = function(recurse) {};

/**
 * @return {void}
 */
JSONEditorNode.prototype.showChilds = function() {};

/**
 * @return {void}
 */
JSONEditorNode.prototype.hide = function() {};

/**
 * @return {void}
 */
JSONEditorNode.prototype.hideChilds = function() {};

/**
 * @param {!JSONEditorNode} node
 * @return {void}
 */
JSONEditorNode.prototype.appendChild = function(node) {};

/**
 * @param {!JSONEditorNode} node
 * @param {!JSONEditorNode} beforeNode
 * @return {void}
 */
JSONEditorNode.prototype.moveBefore = function(node, beforeNode) {};

/**
 * @param {!JSONEditorNode} node
 * @param {number} index
 * @return {void}
 */
JSONEditorNode.prototype.moveTo = function(node, index) {};

/**
 * @param {!JSONEditorNode} node
 * @param {!JSONEditorNode} beforeNode
 * @return {void}
 */
JSONEditorNode.prototype.insertBefore = function(node, beforeNode) {};

/**
 * @param {string} text
 * @return {!Array<!JSONEditorNode>}
 */
JSONEditorNode.prototype.search = function(text) {};

/**
 * @return {void}
 */
JSONEditorNode.prototype.scrollTo = function() {};

/**
 * @return {void}
 */
JSONEditorNode.prototype.focus = function() {};

/**
 * @return {void}
 */
JSONEditorNode.prototype.blur = function() {};

/**
 * @param {!JSONEditorNode} node
 * @return {boolean}
 */
JSONEditorNode.prototype.containsNode = function(node) {};

/**
 * @param {!JSONEditorNode} node
 * @return {!JSONEditorNode}
 */
JSONEditorNode.prototype.removeChild = function(node) {};

/**
 * @param {string} newType
 * @return {void}
 */
JSONEditorNode.prototype.changeType = function(newType) {};

/**
 * @return {void}
 */
JSONEditorNode.prototype.clearDom = function() {};

/**
 * @return {!HTMLElement}
 */
JSONEditorNode.prototype.getDom = function() {};

/**
 * @param {boolean} highlight
 * @return {void}
 */
JSONEditorNode.prototype.setHighlight = function(highlight) {};

/**
 * @param {?} value
 * @return {void}
 */
JSONEditorNode.prototype.updateValue = function(value) {};

/**
 * @param {string} field
 * @return {void}
 */
JSONEditorNode.prototype.updateField = function(field) {};

/**
 * @return {void}
 */
JSONEditorNode.prototype.updateDom = function() {};

/**
 * @param {!Event} event
 * @return {void}
 */
JSONEditorNode.prototype.onEvent = function(event) {};

/**
 * @return {!HTMLElement}
 */
JSONEditorNode.prototype.getAppend = function() {};

/**
 * @constructor
 * @struct
 * @param {!JSONEditor} editor
 */
function JSONEditorAppendNode(editor) {}
/**
 * @record
 * @struct
 */
function JSONEditorShowDropDownListParams() {}
 /** @type {number} */
JSONEditorShowDropDownListParams.prototype.x;
 /** @type {number} */
JSONEditorShowDropDownListParams.prototype.y;
 /** @type {!JSONEditorNode} */
JSONEditorShowDropDownListParams.prototype.node;
 /** @type {string} */
JSONEditorShowDropDownListParams.prototype.value;
 /** @type {!Array<!Object>} */
JSONEditorShowDropDownListParams.prototype.values;
 /** @type {string} */
JSONEditorShowDropDownListParams.prototype.optionSelectedClassName;
 /** @type {string} */
JSONEditorShowDropDownListParams.prototype.optionClassName;
 /** @type {function(?): void} */
JSONEditorShowDropDownListParams.prototype.callback;

/**
 * @constructor
 * @struct
 * @param {!JSONEditor} editor
 * @param {!HTMLElement} container
 */
function JSONEditorSearchBox(editor, container) {}

/**
 * @return {void}
 */
JSONEditorSearchBox.prototype.next = function() {};

/**
 * @return {void}
 */
JSONEditorSearchBox.prototype.previous = function() {};

/**
 * @param {number} index
 * @return {void}
 */
JSONEditorSearchBox.prototype.setActiveResult = function(index) {};

/**
 * @return {void}
 */
JSONEditorSearchBox.prototype.focusActiveResult = function() {};

/**
 * @return {void}
 */
JSONEditorSearchBox.prototype.clearDelay = function() {};

/**
 * @param {!Event} event
 * @return {void}
 */
JSONEditorSearchBox.prototype.onDelayedSearch = function(event) {};

/**
 * @param {!Event} event
 * @param {boolean} forcedSearch
 * @return {void}
 */
JSONEditorSearchBox.prototype.onSearch = function(event, forcedSearch) {};

/**
 * @param {!Event} event
 * @return {void}
 */
JSONEditorSearchBox.prototype.onKeyDown = function(event) {};

/**
 * @param {!Event} event
 * @return {void}
 */
JSONEditorSearchBox.prototype.onKeyUp = function(event) {};
/**
 * @record
 * @struct
 */
function JSONEditorBuffer() {}
 /** @type {string} */
JSONEditorBuffer.prototype.text;

/**
 * @return {string}
 */
JSONEditorBuffer.prototype.flush = function() {};

/**
 * @param {string} text
 * @return {void}
 */
JSONEditorBuffer.prototype.set = function(text) {};
/**
 * @record
 * @struct
 */
function JSONEditorActionParams() {}
 /** @type {!JSONEditorNode} */
JSONEditorActionParams.prototype.node;
 /** @type {string} */
JSONEditorActionParams.prototype.oldValue;
 /** @type {string} */
JSONEditorActionParams.prototype.newValue;
 /** @type {!JSONEditorNode} */
JSONEditorActionParams.prototype.startParent;
 /** @type {!JSONEditorNode} */
JSONEditorActionParams.prototype.endParent;
 /** @type {number} */
JSONEditorActionParams.prototype.startIndex;
 /** @type {number} */
JSONEditorActionParams.prototype.endIndex;
 /** @type {!JSONEditorNode} */
JSONEditorActionParams.prototype.clone;
 /** @type {!JSONEditorNode} */
JSONEditorActionParams.prototype.parent;
 /** @type {number} */
JSONEditorActionParams.prototype.index;
 /** @type {!JSONEditorNodeType} */
JSONEditorActionParams.prototype.oldType;
 /** @type {!JSONEditorNodeType} */
JSONEditorActionParams.prototype.newType;

/**
 * @constructor
 * @struct
 * @param {!HTMLElement} container
 * @param {!JSONEditorOptions=} options
 * @param {?=} json
 */
function JSONEditor(container, options, json) {}
 /** @type {!JSONEditorHistory} */
JSONEditor.prototype.History;
 /** @type {!JSONEditorNode} */
JSONEditor.prototype.Node;
 /** @type {!JSONEditorSearchBox} */
JSONEditor.prototype.SearchBox;
 /** @type {!JSONEditorNode} */
JSONEditor.focusNode;
 /** @type {boolean} */
JSONEditor.freezeHighlight;
 /** @type {{addEventListener: function(!HTMLElement, string, function(!Event): void, boolean): function(!Event): void, removeEventListener: function(!HTMLElement, string, function(!Event): void, boolean): void, stopPropagation: function(!Event): void, preventDefault: function(!Event): void}} */
JSONEditor.prototype.Events;

/**
 * @param {!Object} json
 * @param {string=} name
 * @return {void}
 */
JSONEditor.prototype.set = function(json, name) {};

/**
 * @param {string=} name
 * @return {void}
 */
JSONEditor.prototype.setName = function(name) {};

/**
 * @return {!Object}
 */
JSONEditor.prototype.get = function() {};

/**
 * @return {string}
 */
JSONEditor.prototype.getName = function() {};

/**
 * @return {void}
 */
JSONEditor.prototype.clear = function() {};

/**
 * @param {string} text
 * @return {!Array<?>}
 */
JSONEditor.prototype.search = function(text) {};

/**
 * @return {void}
 */
JSONEditor.prototype.expandAll = function() {};

/**
 * @return {void}
 */
JSONEditor.prototype.collapseAll = function() {};

/**
 * @return {void}
 */
JSONEditor.prototype.focus = function() {};

/**
 * @param {number} top
 * @return {void}
 */
JSONEditor.prototype.scrollTo = function(top) {};

/**
 * @param {!HTMLElement} target
 * @return {!JSONEditorNode}
 */
JSONEditor.getNodeFromTarget = function(target) {};

/**
 * @param {!HTMLElement} elem
 * @return {number}
 */
JSONEditor.getAbsoluteLeft = function(elem) {};

/**
 * @param {!HTMLElement} elem
 * @return {number}
 */
JSONEditor.getAbsoluteTop = function(elem) {};

/**
 * @param {!HTMLElement} elem
 * @param {string} className
 * @return {void}
 */
JSONEditor.addClassName = function(elem, className) {};

/**
 * @param {!HTMLElement} elem
 * @param {string} className
 * @return {void}
 */
JSONEditor.removeClassName = function(elem, className) {};

/**
 * @param {!HTMLElement} divElement
 * @return {void}
 */
JSONEditor.stripFormatting = function(divElement) {};

/**
 * @param {!HTMLElement} contentEditableElement
 * @return {void}
 */
JSONEditor.setEndOfContentEditable = function(contentEditableElement) {};

/**
 * @param {!HTMLElement} element
 * @param {!JSONEditorBuffer} buffer
 * @return {string}
 */
JSONEditor.getInnerText = function(element, buffer) {};

/**
 * @return {number}
 */
JSONEditor.getInternetExplorerVersion = function() {};

/**
 * @param {string} jsonString
 * @return {!Object}
 */
JSONEditor.parse = function(jsonString) {};

/**
 * @param {string} jsonString
 * @return {string}
 */
JSONEditor.validate = function(jsonString) {};
/**
 * @record
 * @struct
 */
function JSONFormatterOptions() {}
 /** @type {function(): void} */
JSONFormatterOptions.prototype.change;
 /** @type {number} */
JSONFormatterOptions.prototype.indentation;

/**
 * @constructor
 * @struct
 * @param {!HTMLElement} container
 * @param {!JSONFormatterOptions=} options
 * @param {?=} json
 */
function JSONFormatter(container, options, json) {}

/**
 * @param {!Object} json
 * @return {void}
 */
JSONFormatter.prototype.set = function(json) {};

/**
 * @return {!Object}
 */
JSONFormatter.prototype.get = function() {};

/**
 * @param {string} jsonString
 * @return {void}
 */
JSONFormatter.prototype.setText = function(jsonString) {};

/**
 * @return {string}
 */
JSONFormatter.prototype.getText = function() {};

/**
 * @param {string} err
 * @return {void}
 */
JSONFormatter.prototype.onError = function(err) {};