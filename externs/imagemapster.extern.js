/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/imagemapster/index.d.ts:

/* TODO: ImportEqualsDeclaration in  */
/** @const */
var ImageMapster = {};

/** @typedef {string} */
ImageMapster.Select;

/** @typedef {string} */
ImageMapster.Deselect;

/** @typedef {string} */
ImageMapster.Set;

/** @typedef {string} */
ImageMapster.Get;

/** @typedef {string} */
ImageMapster.Highlight;

/** @typedef {string} */
ImageMapster.Unbind;

/** @typedef {string} */
ImageMapster.Resize;

/** @typedef {string} */
ImageMapster.Snapshot;

/** @typedef {string} */
ImageMapster.Rebind;

/** @typedef {string} */
ImageMapster.Keys;

/** @typedef {string} */
ImageMapster.SetOptions;

/** @typedef {string} */
ImageMapster.GetOptions;

/** @typedef {string} */
ImageMapster.Tooltip;

/** @typedef {string} */
ImageMapster.ToolTipCloseEvent;

/** @typedef {string} */
ImageMapster.State;
/**
 * @record
 * @struct
 */
ImageMapster.RenderingOptions = function() {};
 /** @type {boolean} */
ImageMapster.RenderingOptions.prototype.fade;
 /** @type {number} */
ImageMapster.RenderingOptions.prototype.fadeDuration;
 /** @type {boolean} */
ImageMapster.RenderingOptions.prototype.highlight;
 /** @type {boolean} */
ImageMapster.RenderingOptions.prototype.isSelectable;
 /** @type {boolean} */
ImageMapster.RenderingOptions.prototype.isDeselectable;
 /** @type {boolean} */
ImageMapster.RenderingOptions.prototype.singleSelect;
 /** @type {boolean} */
ImageMapster.RenderingOptions.prototype.staticState;
 /** @type {boolean} */
ImageMapster.RenderingOptions.prototype.selected;
 /** @type {string} */
ImageMapster.RenderingOptions.prototype.altImage;
 /** @type {boolean} */
ImageMapster.RenderingOptions.prototype.altImageFill;
 /** @type {boolean} */
ImageMapster.RenderingOptions.prototype.altImageStroke;
 /** @type {number} */
ImageMapster.RenderingOptions.prototype.altImageOpacity;
 /** @type {boolean} */
ImageMapster.RenderingOptions.prototype.fill;
 /** @type {string} */
ImageMapster.RenderingOptions.prototype.fillColor;
 /** @type {string} */
ImageMapster.RenderingOptions.prototype.fillColorMask;
 /** @type {number} */
ImageMapster.RenderingOptions.prototype.fillOpacity;
 /** @type {boolean} */
ImageMapster.RenderingOptions.prototype.stroke;
 /** @type {string} */
ImageMapster.RenderingOptions.prototype.strokeColor;
 /** @type {number} */
ImageMapster.RenderingOptions.prototype.strokeOpacity;
 /** @type {number} */
ImageMapster.RenderingOptions.prototype.strokeWidth;
 /** @type {(string|!ImageMapster.RenderingOptions)} */
ImageMapster.RenderingOptions.prototype.render_highlight;
 /** @type {(string|!ImageMapster.RenderingOptions)} */
ImageMapster.RenderingOptions.prototype.render_select;
/**
 * @extends {ImageMapster.RenderingOptions}
 * @record
 * @struct
 */
ImageMapster.AreaRenderingOptions = function() {};
 /** @type {string} */
ImageMapster.AreaRenderingOptions.prototype.key;
 /** @type {string} */
ImageMapster.AreaRenderingOptions.prototype.includeKeys;
 /** @type {boolean} */
ImageMapster.AreaRenderingOptions.prototype.isMask;
 /** @type {string} */
ImageMapster.AreaRenderingOptions.prototype.toolTip;
/**
 * @record
 * @struct
 */
ImageMapster.OnClickData = function() {};
 /** @type {!JQuery} */
ImageMapster.OnClickData.prototype.listTarget;
 /** @type {string} */
ImageMapster.OnClickData.prototype.key;
 /** @type {!JQueryEventObject} */
ImageMapster.OnClickData.prototype.e;
 /** @type {boolean} */
ImageMapster.OnClickData.prototype.selected;
/**
 * @record
 * @struct
 */
ImageMapster.OnStateChangeData = function() {};
 /** @type {string} */
ImageMapster.OnStateChangeData.prototype.key;
 /** @type {string} */
ImageMapster.OnStateChangeData.prototype.state;
 /** @type {boolean} */
ImageMapster.OnStateChangeData.prototype.selected;
/**
 * @record
 * @struct
 */
ImageMapster.OnMouseData = function() {};
 /** @type {string} */
ImageMapster.OnMouseData.prototype.key;
 /** @type {boolean} */
ImageMapster.OnMouseData.prototype.selected;
 /** @type {!JQueryEventObject} */
ImageMapster.OnMouseData.prototype.e;
 /** @type {!ImageMapster.AreaRenderingOptions} */
ImageMapster.OnMouseData.prototype.options;
/**
 * @record
 * @struct
 */
ImageMapster.OnGetListData = function() {};
 /** @type {string} */
ImageMapster.OnGetListData.prototype.key;
 /** @type {string} */
ImageMapster.OnGetListData.prototype.value;
 /** @type {!Array<?>} */
ImageMapster.OnGetListData.prototype.area;
 /** @type {!ImageMapster.AreaRenderingOptions} */
ImageMapster.OnGetListData.prototype.options;
/**
 * @record
 * @struct
 */
ImageMapster.OnShowToolTipData = function() {};
 /** @type {!JQuery} */
ImageMapster.OnShowToolTipData.prototype.toolTip;
 /** @type {string} */
ImageMapster.OnShowToolTipData.prototype.key;
 /** @type {boolean} */
ImageMapster.OnShowToolTipData.prototype.selected;
 /** @type {!ImageMapster.AreaRenderingOptions} */
ImageMapster.OnShowToolTipData.prototype.areaOptions;
/**
 * @extends {ImageMapster.RenderingOptions}
 * @record
 * @struct
 */
ImageMapster.Options = function() {};
 /** @type {string} */
ImageMapster.Options.prototype.mapKey;
 /** @type {string} */
ImageMapster.Options.prototype.mapValue;
 /** @type {boolean} */
ImageMapster.Options.prototype.clickNavigate;
 /** @type {string} */
ImageMapster.Options.prototype.listKey;
 /** @type {string} */
ImageMapster.Options.prototype.listSelectedAttribute;
 /** @type {string} */
ImageMapster.Options.prototype.listSelectedClass;
 /** @type {!Array<!ImageMapster.AreaRenderingOptions>} */
ImageMapster.Options.prototype.areas;
 /** @type {(string|boolean)} */
ImageMapster.Options.prototype.wrapClass;
 /** @type {(string|boolean)} */
ImageMapster.Options.prototype.wrapCss;
 /** @type {number} */
ImageMapster.Options.prototype.mouseoutDelay;
 /** @type {(boolean|string)} */
ImageMapster.Options.prototype.sortList;
 /** @type {number} */
ImageMapster.Options.prototype.configTimeout;
 /** @type {boolean} */
ImageMapster.Options.prototype.scaleMap;
 /** @type {boolean} */
ImageMapster.Options.prototype.noHrefIsMask;
 /** @type {!JQuery} */
ImageMapster.Options.prototype.boundList;
 /** @type {boolean} */
ImageMapster.Options.prototype.showToolTip;
 /** @type {(string|!JQuery)} */
ImageMapster.Options.prototype.toolTipContainer;
 /** @type {!Array<string>} */
ImageMapster.Options.prototype.toolTipClose;
 /** @type {function(!ImageMapster.OnClickData): void} */
ImageMapster.Options.prototype.onClick;
 /** @type {function(!ImageMapster.OnMouseData): void} */
ImageMapster.Options.prototype.onMouseover;
 /** @type {function(!ImageMapster.OnMouseData): void} */
ImageMapster.Options.prototype.onMouseout;
 /** @type {function(!ImageMapster.OnGetListData): !JQuery} */
ImageMapster.Options.prototype.onGetList;
 /** @type {function(boolean): void} */
ImageMapster.Options.prototype.onConfigured;
 /** @type {function(!ImageMapster.OnStateChangeData): void} */
ImageMapster.Options.prototype.onStateChange;
 /** @type {function(!ImageMapster.OnShowToolTipData): void} */
ImageMapster.Options.prototype.onShowToolTip;

/**
 * 
 * All images in the jQuery object will be bound. The specific example
 * above will attempt to bind to all images present on the page. Each image
 * must be bound to an image map identified with the usemap attribute. If
 * there is no usemap attribute, or it does not refer to a valid map, then
 * the image will be ignored. Therefore you can use this syntax to activate
 * all imagemaps on a page. Because pages often contain many images,
 * though, it will be faster to select just the image you are targeting
 * using a more specific selector.
 * 
 * Images are often not completely loaded when script execution begins.
 * ImageMapster will ensure that all images are loaded before it permits
 * interaction from the client. If an alternate image is specified, this
 * will also be preloaded.
 * 
 * Because images are loaded asynchronously, code execution will often
 * return to your script before the ImageMapster is available. If you apply
 * other methods to it (such as selecting or deselecting areas), these
 * commands will be queued until the image has been loaded, and then
 * executed automatically. So you don't need to worry about using callbacks
 * for initial configuration. You can assign a function to a callback when
 * configuration is complete if needed to perform other setup activities on
 * the page.
 * select: Cause an area to become selected. This is similar to a user
 * click, but will not cause a click event to be fired.
 * 
 * Programatically select elements from the image map. The programmatic
 * selection/deselection methods will not honor the staticState property.
 * deselect: Cause an area to become deselected
 * 
 * The opposite of select, this causes an area to become deselected. If it
 * was not previously selected, nothing changes.
 * set: select or deselect an area
 * 
 * Select or deselect elements from jQuery objects wrapping "area" tags on
 * the map based on truthiness of selected. If the area represents a bound
 * area on the imagemap, it will be selected or deselected. The method can
 * be called from an AREA, or from a bound image, passing a specific key as
 * a 2nd parameter
 * 
 * If the selected parameter is omitted (or anything other than "true" or
 * "false") then the state of each area will be toggled.
 * 
 * You can include an object containing rendering options as the last
 * parameter. When present, these will supercede the default and
 * area-specific rendering options.
 * get: get keys for all selected areas
 * 
 * When no "key" parameter is included, returns a comma-separated list of
 * keys representing the areas currently selected. If specified, returns
 * true or false indicating whether the area specified is selected.
 * highlight: highlight, clear, or return highlight state
 * 
 * This method is used to control or obtain the current highlight state.
 * Setting the highlight does not mimic a mouseover, rather, it only sets
 * the highlight. Events and tooltips will not be activated. Even using
 * these methods, it is not possible to highlight more than one area at a
 * time. If another area is highlighted programatically, any existing
 * highlight will be removed.
 * 
 * Once set this way, the highlight will be removed when any user-event
 * that would normally cause a highlight to be removed occurs (e.g. moving
 * the mouse into any area), or it is removed programatically.
 * unbind: unbind ImageMapster from an image
 * 
 * Removes the ImageMapster binding from an image and restores it to its
 * original state. All visible elements (selections, tooltips) will be
 * removed.
 * 
 * If the optional "preserveState" parameter is true, the selection overlay
 * and any active tooltips will be preserved. Tooltips can still be
 * dismissed by a user click, but once unbound, the selection states can no
 * longer be controlled either by the user or programatically. To remove
 * them, the actual DOM elements must be removed.
 * 
 * Notes: When a mapster is first bound, several things happen. A div
 * element is created which wraps the image. A copy is made of the original
 * image, and the original image is set be transparent. This allows
 * creating visible elements for the selections & highlights without
 * interfering with the image map. Additionally, canvas elements are
 * created (for HTML5 browsers), or a VML elements are created for Internet
 * Explorer, to render the effects. Profile information about each bound
 * image map is stored in memory, and finally, event handlers are bound to
 * the image map.
 * 
 * The "unbind" method cleans up these resources: it removes the wrapper,
 * restores the image to its original visibility state, and releases
 * internal resources. When using 'preserveState', the internal resources
 * are cleaned up and event handling is disabled, but HTML elements are not
 * removed. Each element created by ImageMapster is assigned a class of
 * "mapster_el", which can be used to target them for later removal, though
 * it is not easy to complete this process manually because of the wrapper
 * and styles applied during configuration, which will be left intact when
 * using "preserveState."
 * snapshot: take a "snapshot" of the current selection state, and reset
 * ImageMapster
 * 
 * This option is similar to unbind with preserveState. After a snapshot,
 * any active selections will still appear as they did at the time of the
 * snapshot, but they are no longer part of the ImageMapster. This is
 * useful for configuring an initial state, or creating complex
 * representations that may not be easily accomplished with area
 * configuration options.
 * 
 * For example, you could bind in image with a specific set of options;
 * programatically select some areas; and take a snapshot; then set new
 * options that cause a different rendering mode. This way you could have
 * certain areas appear differently from the selection highlight, but be
 * "highlighted again" using the new rendering options. Any effects in
 * place at the time of the snapshot essentially become part of the image
 * and are not affected by future operations.
 * rebind: rebind ImageMapster with new options
 * 
 * This method is similar to set_options, in that its purpose is to change
 * options for an existing bound map. However, unlike set_options rebind
 * will immediately apply all the new options to the existing map. This
 * means that rendering options will change areas that are already selected
 * to be rendered with the new options. If you pass area-specific options,
 * these will also be applied, e.g. you could cause new areas to be
 * selected by passing selected: true in an area specific options.
 * 
 * set_options, in contrast only changes the options, and does not apply
 * them to any existing data. When using set_options the new options only
 * apply to future actions.
 * resize: change the size of the image and map
 * 
 * This will resize the image map to the dimensions specified. Note that
 * either width or height should be passed, and the other will be
 * calculated in the same aspect ratio as the original image. If you pass
 * both, only the width will be used to calculate the new dimensions: the
 * proportions must remain the same as the original image. (Though I intend
 * to allow scaling without constraining proportions, it will be difficult
 * to make work for certain shapes -- e.g. circles, which would have to
 * become ovals).
 * 
 * This method will recalculate and re-render the entire imagemap, so it
 * will work exactly the same under the new sizing scheme. When the image
 * is unbound, the imagemap will be restored to its original condition.
 * 
 * When using HTML5 canvases, any existing selections, etc. will be
 * preserved during the animation. VML data cannot be resized dynamically,
 * however, so in IE<9 the selections will be erased, then redrawn when the
 * animation is complete.
 * keys: get the primary mapKey (or comma-separated list of keys) for an
 * area, set of areas, or key group. Version 1.2.4.050
 * 
 * This method allows you to obtain the primary mapKey (or keys) associated
 * with another key, or one or more areas. If the all parameter is true,
 * the method returns all keys or groups that include the area.
 * 
 * When using area groups, it is possible for more than one key to be
 * associated with a map area. It's also possible for an area to be
 * highlighted from code as part of a group, but be inaccessible to the
 * end-user. This is because area groups are separate physical entities
 * from the areas defined by their primary key. They can have different
 * options, and are highlighted independently. Note: the way area groups
 * work is not well documented here yet. I am working on a more
 * comprehensive tutorial for the site. In the meantime please see this
 * example which describes area groups in detail, and shows how they work
 * through an active demonstration.
 * 
 * There are reasons you may want to be able to access the primary keys
 * that make up an area group directly. Perhaps you want to select a group
 * of areas using the options from a group - but not as a separate group.
 * Perhaps you want to be able to compare the area clicked against a group
 * you have defined to take some action if the area is a member of a
 * certain group. This method provides access to that information.
 * 
 * This method allows working with groups in a variety of ways by providing
 * access to a complete list of primary keys in any group, or all keys
 * which contain a given primary key.
 * set_options: set active options
 * 
 * When called without the "options" parameter, returns an object with all
 * active options. When the parameter is included, the active options are
 * updated for the imagemap, and any area options are merged with existing
 * area options. Unlike "rebind", this will not rebind or reapply any
 * options, but only update the state. This may affect future actions, but
 * it will not change any existing state information.
 * get_options: get active options
 * 
 * When called with no parameters, returns the options that the mapster was
 * configured using. When called with a single key it returns the
 * area-specific options assigned to that area. The final parameter
 * effective determines whether the actual options in effect for this area,
 * or the specific options assigned are returned.
 * 
 * Areas inherit the global options assigned, but can be overridden by
 * area-specific options. The "effective" options contain all options
 * including those that are inherited, as well as any specifically assigned
 * to the area.
 * tooltip: show/hide tooltips from code
 * 
 * See the tooltip options section below for options to control how
 * tooltips appear and are dismissed.
 * 
 * This method can be used to manipulate tooltips from code. If the global
 * showToolTip option is false, these methods will still work, so you have
 * the ability to control tooltips bound to areas completely using your own
 * logic, if desired. These methods can also be used to have better control
 * over events needed to close the tooltip, e.g. you could have no tooltip
 * closing event, but add a "close" button to your contianer that will
 * cause the tooltip to close when clicked.
 * @param {!ImageMapster.Options|string=} options_or_method
 * @param {boolean|!ImageMapster.RenderingOptions|string|(string|boolean)|!ImageMapster.Options|number=} selected_or_options_or_key_or_flag_or_preserveState_or_width_or_all
 * @param {!ImageMapster.RenderingOptions|number|boolean=} options_or_height_or_all_or_effective
 * @param {number=} duration
 * @return {!JQuery|void|(string|boolean)|(string|!Array<string>)|(!ImageMapster.AreaRenderingOptions|!ImageMapster.Options)}
 */
JQuery.prototype.mapster = function(options_or_method, selected_or_options_or_key_or_flag_or_preserveState_or_width_or_all, options_or_height_or_all_or_effective, duration) {};