/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/extended-listbox/index.d.ts:
/**
 * @record
 * @struct
 */
function ListboxItem() {}
 /** @type {string} */
ListboxItem.prototype.text;
 /** @type {string} */
ListboxItem.prototype.id;
 /** @type {number} */
ListboxItem.prototype.index;
 /** @type {boolean} */
ListboxItem.prototype.disabled;
 /** @type {boolean} */
ListboxItem.prototype.selected;
 /** @type {boolean} */
ListboxItem.prototype.groupHeader;
 /** @type {string} */
ListboxItem.prototype.parentGroupId;
 /** @type {!Array<!ListboxItem>} */
ListboxItem.prototype.childItems;
/**
 * @record
 * @struct
 */
function ListboxSearchBarButtonOptions() {}
 /** @type {boolean} */
ListboxSearchBarButtonOptions.prototype.visible;
 /** @type {string} */
ListboxSearchBarButtonOptions.prototype.icon;
 /** @type {function(): void} */
ListboxSearchBarButtonOptions.prototype.onClick;
/**
 * @record
 * @struct
 */
function ListBoxOptions() {}
 /** @type {boolean} */
ListBoxOptions.prototype.searchBar;
 /** @type {string} */
ListBoxOptions.prototype.searchBarWatermark;
 /** @type {!ListboxSearchBarButtonOptions} */
ListBoxOptions.prototype.searchBarButton;
 /** @type {boolean} */
ListBoxOptions.prototype.multiple;
 /** @type {function(): !Array<(string|!ListboxItem)>} */
ListBoxOptions.prototype.getItems;
 /** @type {function(!ListboxEvent): void} */
ListBoxOptions.prototype.onValueChanged;
 /** @type {function(!ListboxEvent): void} */
ListBoxOptions.prototype.onFilterChanged;
 /** @type {function(!ListboxEvent): void} */
ListBoxOptions.prototype.onItemsChanged;
 /** @type {function(!ListboxEvent): void} */
ListBoxOptions.prototype.onItemEnterPressed;
 /** @type {function(!ListboxEvent): void} */
ListBoxOptions.prototype.onItemDoubleClicked;
/**
 * @record
 * @struct
 */
function ListboxEvent() {}
 /** @type {string} */
ListboxEvent.prototype.eventName;
 /** @type {!JQuery} */
ListboxEvent.prototype.target;
 /** @type {?} */
ListboxEvent.prototype.args;
/**
 * @record
 * @struct
 */
function ExtendedListboxInstance() {}
 /** @type {!JQuery} */
ExtendedListboxInstance.prototype.target;

/**
 * Adds a new item to the list
 * @param {(string|!ListboxItem)} item
 * @return {string}
 */
ExtendedListboxInstance.prototype.addItem = function(item) {};

/**
 * Adds new items to the list
 * @param {!Array<(string|!ListboxItem)>} item
 * @return {!Array<string>}
 */
ExtendedListboxInstance.prototype.addItems = function(item) {};

/**
 * Removes a item from the list
 * @param {string} identifier
 * @return {void}
 */
ExtendedListboxInstance.prototype.removeItem = function(identifier) {};

/**
 * Removes items from the list
 * @param {!Array<string>} identifiers
 * @return {void}
 */
ExtendedListboxInstance.prototype.removeItems = function(identifiers) {};

/**
 * Reverts all changes from the DOM
 * @return {void}
 */
ExtendedListboxInstance.prototype.destroy = function() {};

/**
 * Resets the selection state of all items
 * @return {void}
 */
ExtendedListboxInstance.prototype.clearSelection = function() {};

/**
 * Returns a item object for the given id or display text
 * @param {string} identifier
 * @return {!ListboxItem}
 */
ExtendedListboxInstance.prototype.getItem = function(identifier) {};

/**
 * Returns all item objects
 * @return {!Array<!ListboxItem>}
 */
ExtendedListboxInstance.prototype.getItems = function() {};

/**
 * Returns all ListboxItem's which are selected
 * @return {!Array<!ListboxItem>}
 */
ExtendedListboxInstance.prototype.getSelection = function() {};

/**
 * Decreases the index of the matching item by one
 * @param {string} identifier
 * @return {number}
 */
ExtendedListboxInstance.prototype.moveItemUp = function(identifier) {};

/**
 * Increases the index of the matching item by one
 * @param {string} identifier
 * @return {number}
 */
ExtendedListboxInstance.prototype.moveItemDown = function(identifier) {};

/**
 * Moves item to the bottom of the list
 * @param {string} identifier
 * @return {number}
 */
ExtendedListboxInstance.prototype.moveItemToBottom = function(identifier) {};

/**
 * Moves item to the top of the list
 * @param {string} identifier
 * @return {number}
 */
ExtendedListboxInstance.prototype.moveItemToTop = function(identifier) {};

/**
 * Enables or disables the whole list and all childs
 * @param {boolean} state
 * @return {void}
 */
ExtendedListboxInstance.prototype.enable = function(state) {};

/**
 * callback for selection changes
 * @param {function(!ListboxEvent): void} callback
 * @return {void}
 */
ExtendedListboxInstance.prototype.onValueChanged = function(callback) {};

/**
 * callback for item changes (item added, item removed, item order)
 * @param {function(!ListboxEvent): void} callback
 * @return {void}
 */
ExtendedListboxInstance.prototype.onItemsChanged = function(callback) {};

/**
 * callback for searchBar text changes
 * @param {function(!ListboxEvent): void} callback
 * @return {void}
 */
ExtendedListboxInstance.prototype.onFilterChanged = function(callback) {};

/**
 * callback for enter keyPress event on an item
 * @param {function(!ListboxEvent): void} callback
 * @return {void}
 */
ExtendedListboxInstance.prototype.onItemEnterPressed = function(callback) {};

/**
 * callback for doubleClick event on an item
 * @param {function(!ListboxEvent): void} callback
 * @return {void}
 */
ExtendedListboxInstance.prototype.onItemDoubleClicked = function(callback) {};
/**
 * @record
 * @struct
 */
function JQuery() {}

/**
 * constructs a new instance of Listbox on the given DOM item or returns existing
 * constructs a new instance of Listbox on the given DOM item
 * @param {!ListBoxOptions=} options
 * @return {(!ExtendedListboxInstance|!Array<!ExtendedListboxInstance>)}
 */
JQuery.prototype.listbox = function(options) {};