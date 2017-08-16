/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/jquerymobile/index.d.ts:
/**
 * @record
 * @struct
 */
function JQueryMobileEvent() {}

/* TODO: CallSignature:  */
/**
 * @record
 * @struct
 */
function DialogOptions() {}
 /** @type {string} */
DialogOptions.prototype.closeBtn;
 /** @type {string} */
DialogOptions.prototype.closeBtnText;
 /** @type {boolean} */
DialogOptions.prototype.corners;
 /** @type {string} */
DialogOptions.prototype.initSelector;
 /** @type {string} */
DialogOptions.prototype.overlayTheme;
/**
 * @record
 * @struct
 */
function DialogEvents() {}
 /** @type {!JQueryMobileEvent} */
DialogEvents.prototype.create;
/**
 * @record
 * @struct
 */
function PopupOptions() {}
 /** @type {boolean} */
PopupOptions.prototype.corners;
 /** @type {boolean} */
PopupOptions.prototype.history;
 /** @type {string} */
PopupOptions.prototype.initSelector;
 /** @type {string} */
PopupOptions.prototype.overlayTheme;
 /** @type {string} */
PopupOptions.prototype.positionTo;
 /** @type {boolean} */
PopupOptions.prototype.shadow;
 /** @type {string} */
PopupOptions.prototype.theme;
 /** @type {string} */
PopupOptions.prototype.tolerance;
 /** @type {string} */
PopupOptions.prototype.transition;
/**
 * @record
 * @struct
 */
function PopupEvents() {}
 /** @type {!JQueryMobileEvent} */
PopupEvents.prototype.popupbeforeposition;
 /** @type {!JQueryMobileEvent} */
PopupEvents.prototype.popupafteropen;
 /** @type {!JQueryMobileEvent} */
PopupEvents.prototype.popupafterclose;
/**
 * @record
 * @struct
 */
function FixedToolbarOptions() {}
 /** @type {boolean} */
FixedToolbarOptions.prototype.visibleOnPageShow;
 /** @type {boolean} */
FixedToolbarOptions.prototype.disablePageZoom;
 /** @type {string} */
FixedToolbarOptions.prototype.transition;
 /** @type {boolean} */
FixedToolbarOptions.prototype.fullscreen;
 /** @type {boolean} */
FixedToolbarOptions.prototype.tapToggle;
 /** @type {string} */
FixedToolbarOptions.prototype.tapToggleBlacklist;
 /** @type {string} */
FixedToolbarOptions.prototype.hideDuringFocus;
 /** @type {boolean} */
FixedToolbarOptions.prototype.updatePagePadding;
 /** @type {!Function} */
FixedToolbarOptions.prototype.supportBlacklist;
 /** @type {string} */
FixedToolbarOptions.prototype.initSelector;
/**
 * @record
 * @struct
 */
function FixedToolbarEvents() {}
 /** @type {!JQueryMobileEvent} */
FixedToolbarEvents.prototype.create;
/**
 * @record
 * @struct
 */
function ButtonOptions() {}
 /** @type {boolean} */
ButtonOptions.prototype.corners;
 /** @type {string} */
ButtonOptions.prototype.icon;
 /** @type {string} */
ButtonOptions.prototype.iconpos;
 /** @type {boolean} */
ButtonOptions.prototype.iconshadow;
 /** @type {boolean} */
ButtonOptions.prototype.inline;
 /** @type {boolean} */
ButtonOptions.prototype.mini;
 /** @type {boolean} */
ButtonOptions.prototype.shadow;
 /** @type {string} */
ButtonOptions.prototype.theme;
 /** @type {string} */
ButtonOptions.prototype.initSelector;
/**
 * @record
 * @struct
 */
function ButtonEvents() {}
 /** @type {!JQueryMobileEvent} */
ButtonEvents.prototype.create;
/**
 * @record
 * @struct
 */
function CollapsibleOptions() {}
 /** @type {boolean} */
CollapsibleOptions.prototype.collapsed;
 /** @type {string} */
CollapsibleOptions.prototype.collapseCueText;
 /** @type {string} */
CollapsibleOptions.prototype.collapsedIcon;
 /** @type {string} */
CollapsibleOptions.prototype.contentTheme;
 /** @type {string} */
CollapsibleOptions.prototype.expandCueText;
 /** @type {string} */
CollapsibleOptions.prototype.expandedIcon;
 /** @type {string} */
CollapsibleOptions.prototype.heading;
 /** @type {string} */
CollapsibleOptions.prototype.iconpos;
 /** @type {string} */
CollapsibleOptions.prototype.initSelector;
 /** @type {boolean} */
CollapsibleOptions.prototype.inset;
 /** @type {boolean} */
CollapsibleOptions.prototype.mini;
 /** @type {string} */
CollapsibleOptions.prototype.theme;
/**
 * @record
 * @struct
 */
function CollapsibleEvents() {}
 /** @type {!JQueryMobileEvent} */
CollapsibleEvents.prototype.create;
 /** @type {!JQueryMobileEvent} */
CollapsibleEvents.prototype.collapse;
 /** @type {!JQueryMobileEvent} */
CollapsibleEvents.prototype.expand;
/**
 * @record
 * @struct
 */
function CollapsibleSetOptions() {}
 /** @type {string} */
CollapsibleSetOptions.prototype.collapsedIcon;
 /** @type {string} */
CollapsibleSetOptions.prototype.expandedIcon;
 /** @type {string} */
CollapsibleSetOptions.prototype.iconpos;
 /** @type {string} */
CollapsibleSetOptions.prototype.initSelector;
 /** @type {boolean} */
CollapsibleSetOptions.prototype.inset;
 /** @type {boolean} */
CollapsibleSetOptions.prototype.mini;
 /** @type {string} */
CollapsibleSetOptions.prototype.theme;
/**
 * @record
 * @struct
 */
function CollapsibleSetEvents() {}
 /** @type {!JQueryMobileEvent} */
CollapsibleSetEvents.prototype.create;
/**
 * @record
 * @struct
 */
function TextInputOptions() {}
 /** @type {boolean} */
TextInputOptions.prototype.clearBtn;
 /** @type {string} */
TextInputOptions.prototype.clearBtnText;
 /** @type {boolean} */
TextInputOptions.prototype.disabled;
 /** @type {string} */
TextInputOptions.prototype.initSelector;
 /** @type {boolean} */
TextInputOptions.prototype.mini;
 /** @type {boolean} */
TextInputOptions.prototype.preventFocusZoom;
 /** @type {string} */
TextInputOptions.prototype.theme;
/**
 * @record
 * @struct
 */
function TextInputEvents() {}
 /** @type {!JQueryMobileEvent} */
TextInputEvents.prototype.create;
/**
 * @record
 * @struct
 */
function SearchInputOptions() {}
 /** @type {string} */
SearchInputOptions.prototype.clearSearchButtonText;
 /** @type {boolean} */
SearchInputOptions.prototype.disabled;
 /** @type {string} */
SearchInputOptions.prototype.initSelector;
 /** @type {boolean} */
SearchInputOptions.prototype.mini;
 /** @type {string} */
SearchInputOptions.prototype.theme;
/**
 * @record
 * @struct
 */
function SliderOptions() {}
 /** @type {boolean} */
SliderOptions.prototype.disabled;
 /** @type {boolean} */
SliderOptions.prototype.highlight;
 /** @type {string} */
SliderOptions.prototype.initSelector;
 /** @type {boolean} */
SliderOptions.prototype.mini;
 /** @type {string} */
SliderOptions.prototype.theme;
 /** @type {string} */
SliderOptions.prototype.trackTheme;
/**
 * @record
 * @struct
 */
function SliderEvents() {}
 /** @type {!JQueryMobileEvent} */
SliderEvents.prototype.create;
 /** @type {!JQueryMobileEvent} */
SliderEvents.prototype.slidestart;
 /** @type {!JQueryMobileEvent} */
SliderEvents.prototype.slidestop;
/**
 * @record
 * @struct
 */
function FlipswitchOptions() {}
 /** @type {boolean} */
FlipswitchOptions.prototype.corners;
 /** @type {boolean} */
FlipswitchOptions.prototype.defaults;
 /** @type {boolean} */
FlipswitchOptions.prototype.disabled;
 /** @type {boolean} */
FlipswitchOptions.prototype.enhanced;
 /** @type {boolean} */
FlipswitchOptions.prototype.mini;
 /** @type {string} */
FlipswitchOptions.prototype.offText;
 /** @type {string} */
FlipswitchOptions.prototype.onText;
 /** @type {string} */
FlipswitchOptions.prototype.theme;
 /** @type {string} */
FlipswitchOptions.prototype.wrapperClass;
/**
 * @record
 * @struct
 */
function CheckboxRadioOptions() {}
 /** @type {boolean} */
CheckboxRadioOptions.prototype.mini;
 /** @type {string} */
CheckboxRadioOptions.prototype.theme;
/**
 * @record
 * @struct
 */
function CheckboxRadioEvents() {}
 /** @type {!JQueryMobileEvent} */
CheckboxRadioEvents.prototype.create;
/**
 * @record
 * @struct
 */
function SelectMenuOptions() {}
 /** @type {boolean} */
SelectMenuOptions.prototype.corners;
 /** @type {string} */
SelectMenuOptions.prototype.icon;
 /** @type {string} */
SelectMenuOptions.prototype.iconpos;
 /** @type {boolean} */
SelectMenuOptions.prototype.iconshadow;
 /** @type {string} */
SelectMenuOptions.prototype.initSelector;
 /** @type {boolean} */
SelectMenuOptions.prototype.inline;
 /** @type {boolean} */
SelectMenuOptions.prototype.hidePlaceholderMenuItems;
 /** @type {boolean} */
SelectMenuOptions.prototype.mini;
 /** @type {boolean} */
SelectMenuOptions.prototype.nativeMenu;
 /** @type {string} */
SelectMenuOptions.prototype.overlayTheme;
 /** @type {boolean} */
SelectMenuOptions.prototype.preventFocusZoom;
 /** @type {boolean} */
SelectMenuOptions.prototype.shadow;
 /** @type {string} */
SelectMenuOptions.prototype.theme;
/**
 * @record
 * @struct
 */
function SelectMenuEvents() {}
 /** @type {!JQueryMobileEvent} */
SelectMenuEvents.prototype.create;
/**
 * @record
 * @struct
 */
function ListViewOptions() {}
 /** @type {boolean} */
ListViewOptions.prototype.autodividers;
 /** @type {function(?<!HTMLElement>): string} */
ListViewOptions.prototype.autodividersSelector;
 /** @type {string} */
ListViewOptions.prototype.countTheme;
 /** @type {boolean} */
ListViewOptions.prototype.defaults;
 /** @type {boolean} */
ListViewOptions.prototype.disabled;
 /** @type {string} */
ListViewOptions.prototype.dividerTheme;
 /** @type {boolean} */
ListViewOptions.prototype.filter;
 /** @type {!Function} */
ListViewOptions.prototype.filterCallback;
 /** @type {string} */
ListViewOptions.prototype.filterPlaceholder;
 /** @type {string} */
ListViewOptions.prototype.filterTheme;
 /** @type {string} */
ListViewOptions.prototype.headerTheme;
 /** @type {string} */
ListViewOptions.prototype.initSelector;
 /** @type {boolean} */
ListViewOptions.prototype.inset;
 /** @type {string} */
ListViewOptions.prototype.splitIcon;
 /** @type {string} */
ListViewOptions.prototype.splitTheme;
 /** @type {string} */
ListViewOptions.prototype.theme;
/**
 * @record
 * @struct
 */
function ListViewEvents() {}
 /** @type {!JQueryMobileEvent} */
ListViewEvents.prototype.create;
/**
 * @record
 * @struct
 */
function FilterableOptions() {}
 /** @type {?} */
FilterableOptions.prototype.children;
 /** @type {boolean} */
FilterableOptions.prototype.defaults;
 /** @type {boolean} */
FilterableOptions.prototype.disabled;
 /** @type {boolean} */
FilterableOptions.prototype.enhanced;
 /** @type {function(number, string): boolean} */
FilterableOptions.prototype.filterCallback;
 /** @type {string} */
FilterableOptions.prototype.filterPlaceholder;
 /** @type {boolean} */
FilterableOptions.prototype.filterReveal;
 /** @type {string} */
FilterableOptions.prototype.filterTheme;
 /** @type {?} */
FilterableOptions.prototype.input;
/**
 * @record
 * @struct
 */
function NavbarOptions() {}
 /** @type {string} */
NavbarOptions.prototype.iconpos;
/**
 * @record
 * @struct
 */
function ControlgroupOptions() {}
 /** @type {boolean} */
ControlgroupOptions.prototype.corners;
 /** @type {boolean} */
ControlgroupOptions.prototype.excludeInvisible;
 /** @type {boolean} */
ControlgroupOptions.prototype.mini;
 /** @type {boolean} */
ControlgroupOptions.prototype.shadow;
 /** @type {string} */
ControlgroupOptions.prototype.type;
/**
 * @record
 * @struct
 */
function JQueryMobileOptions() {}
 /** @type {string} */
JQueryMobileOptions.prototype.activeBtnClass;
 /** @type {string} */
JQueryMobileOptions.prototype.activePageClass;
 /** @type {boolean} */
JQueryMobileOptions.prototype.ajaxEnabled;
 /** @type {boolean} */
JQueryMobileOptions.prototype.allowCrossDomainPages;
 /** @type {boolean} */
JQueryMobileOptions.prototype.autoInitializePage;
 /** @type {?} */
JQueryMobileOptions.prototype.buttonMarkup;
 /** @type {string} */
JQueryMobileOptions.prototype.defaultDialogTransition;
 /** @type {string} */
JQueryMobileOptions.prototype.defaultPageTransition;
 /** @type {number} */
JQueryMobileOptions.prototype.getMaxScrollForTransition;
 /** @type {!Function} */
JQueryMobileOptions.prototype.gradeA;
 /** @type {boolean} */
JQueryMobileOptions.prototype.hashListeningEnabled;
 /** @type {boolean} */
JQueryMobileOptions.prototype.ignoreContentEnabled;
 /** @type {boolean} */
JQueryMobileOptions.prototype.linkBindingEnabled;
 /** @type {boolean} */
JQueryMobileOptions.prototype.loadingMessageTextVisible;
 /** @type {string} */
JQueryMobileOptions.prototype.loadingMessageTheme;
 /** @type {number} */
JQueryMobileOptions.prototype.maxTransitionWidth;
 /** @type {number} */
JQueryMobileOptions.prototype.minScrollBack;
 /** @type {number} */
JQueryMobileOptions.prototype.ns;
 /** @type {string} */
JQueryMobileOptions.prototype.pageLoadErrorMessage;
 /** @type {string} */
JQueryMobileOptions.prototype.pageLoadErrorMessageTheme;
 /** @type {boolean} */
JQueryMobileOptions.prototype.phonegapNavigationEnabled;
 /** @type {boolean} */
JQueryMobileOptions.prototype.pushStateEnabled;
 /** @type {string} */
JQueryMobileOptions.prototype.subPageUrlKey;
 /** @type {boolean} */
JQueryMobileOptions.prototype.touchOverflowEnabled;
 /** @type {?} */
JQueryMobileOptions.prototype.transitionFallbacks;
/**
 * @record
 * @struct
 */
function JQueryMobileEvents() {}
 /** @type {?} */
JQueryMobileEvents.prototype.tap;
 /** @type {?} */
JQueryMobileEvents.prototype.taphold;
 /** @type {?} */
JQueryMobileEvents.prototype.swipe;
 /** @type {?} */
JQueryMobileEvents.prototype.swipeleft;
 /** @type {?} */
JQueryMobileEvents.prototype.swiperight;
 /** @type {?} */
JQueryMobileEvents.prototype.vmouseover;
 /** @type {?} */
JQueryMobileEvents.prototype.vmouseout;
 /** @type {?} */
JQueryMobileEvents.prototype.vmousedown;
 /** @type {?} */
JQueryMobileEvents.prototype.vmousemove;
 /** @type {?} */
JQueryMobileEvents.prototype.vmouseup;
 /** @type {?} */
JQueryMobileEvents.prototype.vclick;
 /** @type {?} */
JQueryMobileEvents.prototype.vmousecancel;
 /** @type {?} */
JQueryMobileEvents.prototype.orientationchange;
 /** @type {?} */
JQueryMobileEvents.prototype.scrollstart;
 /** @type {?} */
JQueryMobileEvents.prototype.scrollstop;
 /** @type {?} */
JQueryMobileEvents.prototype.pagebeforeload;
 /** @type {?} */
JQueryMobileEvents.prototype.pageload;
 /** @type {?} */
JQueryMobileEvents.prototype.pageloadfailed;
 /** @type {?} */
JQueryMobileEvents.prototype.pagebeforechange;
 /** @type {?} */
JQueryMobileEvents.prototype.pagechange;
 /** @type {?} */
JQueryMobileEvents.prototype.pagechangefailed;
 /** @type {?} */
JQueryMobileEvents.prototype.pagebeforeshow;
 /** @type {?} */
JQueryMobileEvents.prototype.pagebeforehide;
 /** @type {?} */
JQueryMobileEvents.prototype.pageshow;
 /** @type {?} */
JQueryMobileEvents.prototype.pagehide;
 /** @type {?} */
JQueryMobileEvents.prototype.pagebeforecreate;
 /** @type {?} */
JQueryMobileEvents.prototype.pagecreate;
 /** @type {?} */
JQueryMobileEvents.prototype.pageinit;
 /** @type {?} */
JQueryMobileEvents.prototype.pageremove;
 /** @type {?} */
JQueryMobileEvents.prototype.updatelayout;
/**
 * @record
 * @struct
 */
function ChangePageOptions() {}
 /** @type {boolean} */
ChangePageOptions.prototype.allowSamePageTransition;
 /** @type {boolean} */
ChangePageOptions.prototype.changeHash;
 /** @type {?} */
ChangePageOptions.prototype.data;
 /** @type {string} */
ChangePageOptions.prototype.dataUrl;
 /** @type {?<!HTMLElement>} */
ChangePageOptions.prototype.pageContainer;
 /** @type {boolean} */
ChangePageOptions.prototype.reloadPage;
 /** @type {boolean} */
ChangePageOptions.prototype.reverse;
 /** @type {string} */
ChangePageOptions.prototype.role;
 /** @type {boolean} */
ChangePageOptions.prototype.showLoadMsg;
 /** @type {string} */
ChangePageOptions.prototype.transition;
 /** @type {string} */
ChangePageOptions.prototype.type;
/**
 * @record
 * @struct
 */
function LoadPageOptions() {}
 /** @type {?} */
LoadPageOptions.prototype.data;
 /** @type {number} */
LoadPageOptions.prototype.loadMsgDelay;
 /** @type {?<!HTMLElement>} */
LoadPageOptions.prototype.pageContainer;
 /** @type {boolean} */
LoadPageOptions.prototype.reloadPage;
 /** @type {string} */
LoadPageOptions.prototype.role;
 /** @type {boolean} */
LoadPageOptions.prototype.showLoadMsg;
 /** @type {string} */
LoadPageOptions.prototype.type;
/**
 * @record
 * @struct
 */
function LoaderOptions() {}
 /** @type {string} */
LoaderOptions.prototype.theme;
 /** @type {boolean} */
LoaderOptions.prototype.textVisible;
 /** @type {string} */
LoaderOptions.prototype.html;
 /** @type {string} */
LoaderOptions.prototype.text;
 /** @type {boolean} */
LoaderOptions.prototype.textonly;
/**
 * @record
 * @struct
 */
function JQueryMobilePath() {}

/**
 * @param {string} url
 * @return {string}
 */
JQueryMobilePath.prototype.get = function(url) {};

/**
 * @param {boolean=} asParsedObject
 * @return {?}
 */
JQueryMobilePath.prototype.getDocumentBase = function(asParsedObject) {};

/**
 * @param {boolean=} asParsedObject
 * @return {?}
 */
JQueryMobilePath.prototype.getDocumentUrl = function(asParsedObject) {};

/**
 * @return {string}
 */
JQueryMobilePath.prototype.getLocation = function() {};

/**
 * @param {string} url
 * @return {boolean}
 */
JQueryMobilePath.prototype.isAbsoluteUrl = function(url) {};

/**
 * @param {string} url
 * @return {boolean}
 */
JQueryMobilePath.prototype.isRelativeUrl = function(url) {};

/**
 * @param {string} relUrl
 * @param {string} absUrl
 * @return {string}
 */
JQueryMobilePath.prototype.makeUrlAbsolute = function(relUrl, absUrl) {};

/**
 * @return {!ParsedPath}
 */
JQueryMobilePath.prototype.parseLocation = function() {};

/**
 * @param {string} url
 * @return {!ParsedPath}
 */
JQueryMobilePath.prototype.parseUrl = function(url) {};
/**
 * @record
 * @struct
 */
function ParsedPath() {}
 /** @type {string} */
ParsedPath.prototype.authority;
 /** @type {string} */
ParsedPath.prototype.directory;
 /** @type {string} */
ParsedPath.prototype.domain;
 /** @type {string} */
ParsedPath.prototype.doubleSlash;
 /** @type {string} */
ParsedPath.prototype.filename;
 /** @type {string} */
ParsedPath.prototype.hash;
 /** @type {string} */
ParsedPath.prototype.host;
 /** @type {string} */
ParsedPath.prototype.hostname;
 /** @type {string} */
ParsedPath.prototype.href;
 /** @type {string} */
ParsedPath.prototype.hrefNoHash;
 /** @type {string} */
ParsedPath.prototype.hrefNoSearch;
 /** @type {string} */
ParsedPath.prototype.password;
 /** @type {string} */
ParsedPath.prototype.pathname;
 /** @type {string} */
ParsedPath.prototype.port;
 /** @type {string} */
ParsedPath.prototype.protocol;
 /** @type {string} */
ParsedPath.prototype.search;
 /** @type {string} */
ParsedPath.prototype.username;
/**
 * @extends {JQueryMobileOptions}
 * @record
 * @struct
 */
function JQueryMobile() {}
 /** @type {string} */
JQueryMobile.prototype.version;
 /** @type {?} */
JQueryMobile.prototype.pageContainer;
 /** @type {?} */
JQueryMobile.prototype.base;
 /** @type {?<!HTMLElement>} */
JQueryMobile.prototype.activePage;
 /** @type {!JQueryMobileOptions} */
JQueryMobile.prototype.options;
 /** @type {?} */
JQueryMobile.prototype.transitionFallbacks;
 /** @type {?} */
JQueryMobile.prototype.loader;
 /** @type {?} */
JQueryMobile.prototype.page;
 /** @type {?} */
JQueryMobile.prototype.touchOverflow;
 /** @type {?} */
JQueryMobile.prototype.showCategory;
 /** @type {!JQueryMobilePath} */
JQueryMobile.prototype.path;
 /** @type {?} */
JQueryMobile.prototype.dialog;
 /** @type {?} */
JQueryMobile.prototype.popup;
 /** @type {?} */
JQueryMobile.prototype.fixedtoolbar;
 /** @type {?} */
JQueryMobile.prototype.button;
 /** @type {?} */
JQueryMobile.prototype.collapsible;
 /** @type {?} */
JQueryMobile.prototype.collapsibleset;
 /** @type {?} */
JQueryMobile.prototype.textinput;
 /** @type {?} */
JQueryMobile.prototype.slider;
 /** @type {?} */
JQueryMobile.prototype.flipswitch;
 /** @type {?} */
JQueryMobile.prototype.checkboxradio;
 /** @type {?} */
JQueryMobile.prototype.selectmenu;
 /** @type {?} */
JQueryMobile.prototype.listview;
 /** @type {?} */
JQueryMobile.prototype.filterable;
 /** @type {number} */
JQueryMobile.prototype.defaultHomeScroll;

/**
 * @param {?} to
 * @param {!ChangePageOptions=} options
 * @return {void}
 */
JQueryMobile.prototype.changePage = function(to, options) {};

/**
 * @return {void}
 */
JQueryMobile.prototype.initializePage = function() {};

/**
 * @param {?} url
 * @param {!LoadPageOptions=} options
 * @return {void}
 */
JQueryMobile.prototype.loadPage = function(url, options) {};

/**
 * @param {string=} command
 * @param {!LoaderOptions=} options
 * @return {?<!HTMLElement>}
 */
JQueryMobile.prototype.loading = function(command, options) {};

/**
 * @param {number} yPos
 * @return {void}
 */
JQueryMobile.prototype.silentScroll = function(yPos) {};
 /** @type {?} */
JQuerySupport.prototype.touchOverflow;

/**
 * @return {?<!HTMLElement>}
 */
JQuery.prototype.enhanceWithin = function() {};

/**
 * @param {string|!DialogOptions|!DialogEvents=} command_or_options_or_events
 * @return {?<!HTMLElement>}
 */
JQuery.prototype.dialog = function(command_or_options_or_events) {};

/**
 * @param {string|!PopupOptions|!PopupEvents=} command_or_options_or_events
 * @param {!PopupOptions=} options
 * @return {?<!HTMLElement>}
 */
JQuery.prototype.popup = function(command_or_options_or_events, options) {};

/**
 * @param {string|!FixedToolbarOptions|!FixedToolbarEvents=} command_or_options_or_events
 * @return {?<!HTMLElement>}
 */
JQuery.prototype.fixedtoolbar = function(command_or_options_or_events) {};

/**
 * @param {string|!ButtonOptions|!ButtonEvents=} command_or_options_or_events
 * @return {?<!HTMLElement>}
 */
JQuery.prototype.button = function(command_or_options_or_events) {};

/**
 * @param {!ButtonOptions=} options
 * @return {?<!HTMLElement>}
 */
JQuery.prototype.buttonMarkup = function(options) {};

/**
 * @param {string|!CollapsibleOptions|!CollapsibleEvents=} command_or_options_or_events
 * @return {?<!HTMLElement>}
 */
JQuery.prototype.collapsible = function(command_or_options_or_events) {};

/**
 * @param {string=} command
 * @return {?<!HTMLElement>}
 */
JQuery.prototype.collapsibleSet = function(command) {};

/**
 * @param {!CollapsibleSetOptions|!CollapsibleSetEvents} options_or_events
 * @return {?<!HTMLElement>}
 */
JQuery.prototype.collapsibleset = function(options_or_events) {};

/**
 * @param {string|!TextInputOptions|!TextInputEvents|!SearchInputOptions=} command_or_options_or_events
 * @return {?<!HTMLElement>}
 */
JQuery.prototype.textinput = function(command_or_options_or_events) {};

/**
 * @param {string|!SliderOptions|!SliderEvents=} command_or_options_or_events
 * @return {?<!HTMLElement>}
 */
JQuery.prototype.slider = function(command_or_options_or_events) {};

/**
 * @param {string|!FlipswitchOptions=} command_or_options
 * @return {?<!HTMLElement>}
 */
JQuery.prototype.flipswitch = function(command_or_options) {};

/**
 * @param {string|!CheckboxRadioOptions|!CheckboxRadioEvents=} command_or_options_or_events
 * @return {?<!HTMLElement>}
 */
JQuery.prototype.checkboxradio = function(command_or_options_or_events) {};

/**
 * @param {string|!SelectMenuOptions|!SelectMenuEvents=} command_or_options_or_events
 * @param {boolean=} update
 * @return {?<!HTMLElement>}
 */
JQuery.prototype.selectmenu = function(command_or_options_or_events, update) {};

/**
 * @param {string|!ListViewOptions|!ListViewEvents=} command_or_options_or_events
 * @return {?<!HTMLElement>}
 */
JQuery.prototype.listview = function(command_or_options_or_events) {};

/**
 * @param {string|!FilterableOptions=} command_or_options
 * @return {?<!HTMLElement>}
 */
JQuery.prototype.filterable = function(command_or_options) {};

/**
 * @param {!NavbarOptions=} options
 * @return {?<!HTMLElement>}
 */
JQuery.prototype.navbar = function(options) {};

/**
 * @param {string=} command
 * @return {?<!HTMLElement>}
 */
JQuery.prototype.table = function(command) {};

/**
 * @param {string|!ControlgroupOptions=} command_or_options
 * @return {?<!HTMLElement>}
 */
JQuery.prototype.controlgroup = function(command_or_options) {};
 /** @type {!JQueryMobile} */
JQueryStatic.prototype.mobile;