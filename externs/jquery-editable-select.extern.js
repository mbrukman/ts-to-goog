/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/jquery-editable-select/index.d.ts:
/** @const */
var JQueryEditableSelect = {};
/**
 * @record
 * @struct
 */
JQueryEditableSelect.EditableSelectOptions = function() {};
 /** @type {boolean} */
JQueryEditableSelect.EditableSelectOptions.prototype.filter;
 /** @type {string} */
JQueryEditableSelect.EditableSelectOptions.prototype.effects;
 /** @type {(number|string)} */
JQueryEditableSelect.EditableSelectOptions.prototype.duration;
 /** @type {(string|?<!HTMLElement>)} */
JQueryEditableSelect.EditableSelectOptions.prototype.appendTo;
 /** @type {string} */
JQueryEditableSelect.EditableSelectOptions.prototype.trigger;

/**
 * Transforms the <select> into a typeahead field. Accepts an optional options object.
 * 
 * Manually shows/hide/filters/clears/destorys the dropdown list.
 * 
 * Manually sets the value of the text field to the value of the $element passed as parameter.
 * 
 * Adds a new option in the dropdown list
 * 
 * Removes an option in the dropdown list at the given index.
 * 
 * @param {!JQueryEditableSelect.EditableSelectOptions|string=} options_or_action Options setting the editable select behavior / Action to apply / Action to apply, must be 'select' / Action to apply, must be 'add' / Action to apply, must be 'remove'
 * @param {?<!HTMLElement>|string|number=} element_or_text_or_index element to select (it must be one of the elements in the dropdown list) / Test to be displayed / position of the element to remove.
 * @param {number=} index position to insert the element at.
 * @param {!Array<{name: string, value: string}>=} attrs optional attributes to add to the element
 * @param {string=} data optional data to add to the element
 * @return {?<!HTMLElement>|void}
 */
JQuery.prototype.editableSelect = function(options_or_action, element_or_text_or_index, index, attrs, data) {};
