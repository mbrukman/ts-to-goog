/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/prosemirror-state/index.d.ts:

/* TODO: ImportDeclaration in  */

/* TODO: ImportDeclaration in  */

/* TODO: ImportDeclaration in  */
/**
 * @record
 * @struct
 */
function AnyObject() {}

/* TODO: IndexSignature:  */
/**
 * @record
 * @struct
 */
function PluginSpecProps() {}
 /** @type {?} */
PluginSpecProps.prototype.handleDOMEvents;
 /** @type {?} */
PluginSpecProps.prototype.handleKeyDown;
 /** @type {?} */
PluginSpecProps.prototype.handleKeyPress;
 /** @type {?} */
PluginSpecProps.prototype.handleTextInput;
 /** @type {?} */
PluginSpecProps.prototype.handleClickOn;
 /** @type {?} */
PluginSpecProps.prototype.handleClick;
 /** @type {?} */
PluginSpecProps.prototype.handleDoubleClickOn;
 /** @type {?} */
PluginSpecProps.prototype.handleDoubleClick;
 /** @type {?} */
PluginSpecProps.prototype.handleTripleClickOn;
 /** @type {?} */
PluginSpecProps.prototype.handleTripleClick;
 /** @type {?} */
PluginSpecProps.prototype.handleContextMenu;
 /** @type {?} */
PluginSpecProps.prototype.handlePaste;
 /** @type {?} */
PluginSpecProps.prototype.handleDrop;
 /** @type {?} */
PluginSpecProps.prototype.onFocus;
 /** @type {?} */
PluginSpecProps.prototype.onBlur;
 /** @type {?} */
PluginSpecProps.prototype.createSelectionBetween;
 /** @type {?} */
PluginSpecProps.prototype.domParser;
 /** @type {?} */
PluginSpecProps.prototype.clipboardParser;
 /** @type {?} */
PluginSpecProps.prototype.transformPasted;
 /** @type {?} */
PluginSpecProps.prototype.transformPastedHTML;
 /** @type {?} */
PluginSpecProps.prototype.transformPastedText;
 /** @type {?} */
PluginSpecProps.prototype.nodeViews;
 /** @type {?} */
PluginSpecProps.prototype.clipboardSerializer;
 /** @type {?} */
PluginSpecProps.prototype.decorations;
 /** @type {?} */
PluginSpecProps.prototype.editable;
 /** @type {?} */
PluginSpecProps.prototype.attributes;
 /** @type {number} */
PluginSpecProps.prototype.scrollThreshold;
 /** @type {number} */
PluginSpecProps.prototype.scrollMargin;
/**
 * @record
 * @struct
 */
function PluginSpec() {}
 /** @type {?} */
PluginSpec.prototype.props;
 /** @type {?} */
PluginSpec.prototype.state;
 /** @type {?} */
PluginSpec.prototype.key;
 /** @type {?} */
PluginSpec.prototype.view;
 /** @type {?} */
PluginSpec.prototype.filterTransaction;
 /** @type {?} */
PluginSpec.prototype.appendTransaction;

/**
 * @constructor
 * @struct
 * @param {?} spec
 */
function Plugin(spec) {}
 /** @type {?} */
Plugin.prototype.props;
 /** @type {?} */
Plugin.prototype.spec;

/**
 * @param {?} state
 * @return {?}
 */
Plugin.prototype.getState = function(state) {};
/**
 * @record
 * @struct
 */
function StateField() {}
 /** @type {?} */
StateField.prototype.toJSON;
 /** @type {?} */
StateField.prototype.fromJSON;

/**
 * @param {?} config
 * @param {?} instance
 * @return {?}
 */
StateField.prototype.init = function(config, instance) {};

/**
 * @param {?} tr
 * @param {?} value
 * @param {?} oldState
 * @param {?} newState
 * @return {?}
 */
StateField.prototype.apply = function(tr, value, oldState, newState) {};

/**
 * @constructor
 * @struct
 * @param {string=} name
 */
function PluginKey(name) {}

/**
 * @param {?} state
 * @return {?}
 */
PluginKey.prototype.get = function(state) {};

/**
 * @param {?} state
 * @return {?}
 */
PluginKey.prototype.getState = function(state) {};

/**
 * @constructor
 * @struct
 * @param {?} $anchor
 * @param {?} $head
 * @param {!Array<?>=} ranges
 */
function Selection($anchor, $head, ranges) {}
 /** @type {!Array<?>} */
Selection.prototype.ranges;
 /** @type {?} */
Selection.prototype.$anchor;
 /** @type {?} */
Selection.prototype.$head;
 /** @type {number} */
Selection.prototype.anchor;
 /** @type {number} */
Selection.prototype.head;
 /** @type {number} */
Selection.prototype.from;
 /** @type {number} */
Selection.prototype.to;
 /** @type {?} */
Selection.prototype.$from;
 /** @type {?} */
Selection.prototype.$to;
 /** @type {boolean} */
Selection.prototype.empty;
 /** @type {?} */
Selection.prototype.content;
 /** @type {boolean} */
Selection.prototype.visible;

/**
 * @param {?} p
 * @return {boolean}
 */
Selection.prototype.eq = function(p) {};

/**
 * @param {?} doc
 * @param {?} mapping
 * @return {?}
 */
Selection.prototype.map = function(doc, mapping) {};

/**
 * @param {?} tr
 * @param {?=} content
 * @return {void}
 */
Selection.prototype.replace = function(tr, content) {};

/**
 * @param {?} tr
 * @param {?} node
 * @return {void}
 */
Selection.prototype.replaceWith = function(tr, node) {};

/**
 * @return {?}
 */
Selection.prototype.toJSON = function() {};

/**
 * @return {?}
 */
Selection.prototype.getBookmark = function() {};

/**
 * @param {?} $pos
 * @param {number} dir
 * @param {boolean=} textOnly
 * @return {?}
 */
Selection.findFrom = function($pos, dir, textOnly) {};

/**
 * @param {?} $pos
 * @param {number=} bias
 * @return {?}
 */
Selection.near = function($pos, bias) {};

/**
 * @param {?} doc
 * @return {?}
 */
Selection.atStart = function(doc) {};

/**
 * @param {?} doc
 * @return {?}
 */
Selection.atEnd = function(doc) {};

/**
 * @param {?} doc
 * @param {?} json
 * @return {?}
 */
Selection.fromJSON = function(doc, json) {};

/**
 * @param {string} id
 * @param {?} selectionClass
 * @return {void}
 */
Selection.jsonID = function(id, selectionClass) {};
/**
 * @record
 * @struct
 */
function SelectionBookmark() {}

/**
 * @param {?} mapping
 * @return {?}
 */
SelectionBookmark.prototype.map = function(mapping) {};

/**
 * @param {?} doc
 * @return {?}
 */
SelectionBookmark.prototype.resolve = function(doc) {};

/**
 * @constructor
 * @struct
 * @param {?} $from
 * @param {?} $to
 */
function SelectionRange($from, $to) {}
 /** @type {?} */
SelectionRange.prototype.$from;
 /** @type {?} */
SelectionRange.prototype.$to;

/**
 * @constructor
 * @struct
 * @param {?} $anchor
 * @param {?=} $head
 */
function TextSelection($anchor, $head) {}
 /** @type {?} */
TextSelection.prototype.$cursor;

/**
 * @param {?} doc
 * @param {number} anchor
 * @param {number=} head
 * @return {?}
 */
TextSelection.create = function(doc, anchor, head) {};

/**
 * @param {?} $anchor
 * @param {?} $head
 * @param {number=} bias
 * @return {?}
 */
TextSelection.between = function($anchor, $head, bias) {};

/**
 * @constructor
 * @struct
 * @param {?} $pos
 */
function NodeSelection($pos) {}
 /** @type {?} */
NodeSelection.prototype.node;

/**
 * @param {?} doc
 * @param {number} from
 * @param {number=} p1
 * @return {?}
 */
NodeSelection.create = function(doc, from, p1) {};

/**
 * @param {?} node
 * @return {boolean}
 */
NodeSelection.isSelectable = function(node) {};

/**
 * @constructor
 * @struct
 * @param {?} doc
 */
function AllSelection(doc) {}
/**
 * @constructor
 * @struct
 */
function EditorState() {}
 /** @type {?} */
EditorState.prototype.doc;
 /** @type {?} */
EditorState.prototype.selection;
 /** @type {!Array<?>} */
EditorState.prototype.storedMarks;
 /** @type {?} */
EditorState.prototype.schema;
 /** @type {!Array<?>} */
EditorState.prototype.plugins;
 /** @type {?} */
EditorState.prototype.tr;

/**
 * @param {?} tr
 * @return {?}
 */
EditorState.prototype.apply = function(tr) {};

/**
 * @param {?} tr
 * @return {?}
 */
EditorState.prototype.applyTransaction = function(tr) {};

/**
 * @param {?} config
 * @return {?}
 */
EditorState.prototype.reconfigure = function(config) {};

/**
 * @param {?=} pluginFields
 * @return {?}
 */
EditorState.prototype.toJSON = function(pluginFields) {};

/**
 * @param {?} config
 * @return {?}
 */
EditorState.create = function(config) {};

/**
 * @param {?} config
 * @param {?} json
 * @param {?=} pluginFields
 * @return {?}
 */
EditorState.fromJSON = function(config, json, pluginFields) {};
/**
 * @constructor
 * @struct
 */
function Transaction() {}
 /** @type {number} */
Transaction.prototype.time;
 /** @type {!Array<?>} */
Transaction.prototype.storedMarks;
 /** @type {?} */
Transaction.prototype.selection;
 /** @type {boolean} */
Transaction.prototype.selectionSet;
 /** @type {boolean} */
Transaction.prototype.storedMarksSet;
 /** @type {boolean} */
Transaction.prototype.isGeneric;

/**
 * @param {?} selection
 * @return {?}
 */
Transaction.prototype.setSelection = function(selection) {};

/**
 * @param {!Array<?>=} marks
 * @return {?}
 */
Transaction.prototype.setStoredMarks = function(marks) {};

/**
 * @param {!Array<?>} marks
 * @return {?}
 */
Transaction.prototype.ensureMarks = function(marks) {};

/**
 * @param {number} time
 * @return {?}
 */
Transaction.prototype.setTime = function(time) {};

/**
 * @param {?} slice
 * @return {?}
 */
Transaction.prototype.replaceSelection = function(slice) {};

/**
 * @param {?} node
 * @param {boolean=} inheritMarks
 * @return {?}
 */
Transaction.prototype.replaceSelectionWith = function(node, inheritMarks) {};

/**
 * @return {?}
 */
Transaction.prototype.deleteSelection = function() {};

/**
 * @param {string} text
 * @param {number=} from
 * @param {number=} to
 * @return {?}
 */
Transaction.prototype.insertText = function(text, from, to) {};

/**
 * @param {(string|?)} key
 * @param {?} value
 * @return {?}
 */
Transaction.prototype.setMeta = function(key, value) {};

/**
 * @param {(string|?)} key
 * @return {?}
 */
Transaction.prototype.getMeta = function(key) {};

/**
 * @return {?}
 */
Transaction.prototype.scrollIntoView = function() {};

/**
 * @param {?} mark
 * @return {?}
 */
Transaction.prototype.addStoredMark = function(mark) {};

/**
 * @param {?} mark
 * @return {?}
 */
Transaction.prototype.removeStoredMark = function(mark) {};
