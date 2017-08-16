/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/ionic/index.d.ts:
/**
 * @record
 * @struct
 */
function IonicStatic() {}
 /** @type {string} */
IonicStatic.prototype.version;
 /** @type {{ready: function(function(): ?): void, setGrade: function(string): void, device: function(): ?, is: function(string): boolean, isWebView: function(): boolean, isIPad: function(): boolean, isIOS: function(): boolean, isAndroid: function(): boolean, isWindowsPhone: function(): boolean, platform: function(): string, version: function(): number, exitApp: function(): void, showStatusBar: function(boolean): void, fullScreen: function(boolean, boolean): void, isReady: boolean, isFullScreen: boolean, platforms: !Array<string>, grade: string}} */
IonicStatic.prototype.Platform;
 /** @type {!IonicStatic} */
var ionic;
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "ionic"
/** @const */
tsickle_declare_module.ionic = {};

/* TODO: ExportAssignment in tsickle_declare_module.ionic */
/** @const */
ionic.actionSheet = {};
/**
 * @record
 * @struct
 */
ionic.actionSheet.IonicActionSheetService = function() {};

/**
 * @param {!ionic.actionSheet.IonicActionSheetOptions} options
 * @return {function(): void}
 */
ionic.actionSheet.IonicActionSheetService.prototype.show = function(options) {};
/**
 * @record
 * @struct
 */
ionic.actionSheet.IonicActionSheetButton = function() {};
 /** @type {string} */
ionic.actionSheet.IonicActionSheetButton.prototype.text;
/**
 * @record
 * @struct
 */
ionic.actionSheet.IonicActionSheetOptions = function() {};
 /** @type {!Array<!ionic.actionSheet.IonicActionSheetButton>} */
ionic.actionSheet.IonicActionSheetOptions.prototype.buttons;
 /** @type {string} */
ionic.actionSheet.IonicActionSheetOptions.prototype.titleText;
 /** @type {string} */
ionic.actionSheet.IonicActionSheetOptions.prototype.cancelText;
 /** @type {string} */
ionic.actionSheet.IonicActionSheetOptions.prototype.destructiveText;
 /** @type {function(): ?} */
ionic.actionSheet.IonicActionSheetOptions.prototype.cancel;
 /** @type {function(number): boolean} */
ionic.actionSheet.IonicActionSheetOptions.prototype.buttonClicked;
 /** @type {function(): boolean} */
ionic.actionSheet.IonicActionSheetOptions.prototype.destructiveButtonClicked;
 /** @type {boolean} */
ionic.actionSheet.IonicActionSheetOptions.prototype.cancelOnStateChange;
 /** @type {string} */
ionic.actionSheet.IonicActionSheetOptions.prototype.cssClass;
/** @const */
ionic.backdrop = {};
/**
 * @record
 * @struct
 */
ionic.backdrop.IonicBackdropService = function() {};

/**
 * @return {void}
 */
ionic.backdrop.IonicBackdropService.prototype.retain = function() {};

/**
 * @return {void}
 */
ionic.backdrop.IonicBackdropService.prototype.release = function() {};
/** @const */
ionic.gestures = {};
/**
 * @record
 * @struct
 */
ionic.gestures.IonicGestureService = function() {};

/**
 * @param {string} eventType
 * @param {function(?): ?} callback
 * @param {!angular.IAugmentedJQuery} $element
 * @param {?} options
 * @return {!ionic.gestures.IonicGesture}
 */
ionic.gestures.IonicGestureService.prototype.on = function(eventType, callback, $element, options) {};

/**
 * @param {!ionic.gestures.IonicGesture} gesture
 * @param {string} eventType
 * @param {function(?): ?} callback
 * @return {void}
 */
ionic.gestures.IonicGestureService.prototype.off = function(gesture, eventType, callback) {};
/**
 * @record
 * @struct
 */
ionic.gestures.IonicGesture = function() {};
 /** @type {!Element} */
ionic.gestures.IonicGesture.prototype.element;
 /** @type {boolean} */
ionic.gestures.IonicGesture.prototype.enabled;
 /** @type {{stop_browser_behavior: string}} */
ionic.gestures.IonicGesture.prototype.options;

/**
 * @param {string} gesture
 * @param {!Function} handler
 * @return {!ionic.gestures.IonicGesture}
 */
ionic.gestures.IonicGesture.prototype.on = function(gesture, handler) {};

/**
 * @param {string} gesture
 * @param {!Function} handler
 * @return {!ionic.gestures.IonicGesture}
 */
ionic.gestures.IonicGesture.prototype.off = function(gesture, handler) {};

/**
 * @param {string} gesture
 * @param {?} eventData
 * @return {!ionic.gestures.IonicGesture}
 */
ionic.gestures.IonicGesture.prototype.trigger = function(gesture, eventData) {};

/**
 * @param {boolean} state
 * @return {!ionic.gestures.IonicGesture}
 */
ionic.gestures.IonicGesture.prototype.enable = function(state) {};
/** @const */
ionic.list = {};
/**
 * @record
 * @struct
 */
ionic.list.IonicListDelegate = function() {};

/**
 * @param {boolean=} showReorder
 * @return {boolean}
 */
ionic.list.IonicListDelegate.prototype.showReorder = function(showReorder) {};

/**
 * @param {boolean=} showDelete
 * @return {boolean}
 */
ionic.list.IonicListDelegate.prototype.showDelete = function(showDelete) {};

/**
 * @param {boolean=} canSwipeItems
 * @return {boolean}
 */
ionic.list.IonicListDelegate.prototype.canSwipeItems = function(canSwipeItems) {};

/**
 * @return {void}
 */
ionic.list.IonicListDelegate.prototype.closeOptionButtons = function() {};

/**
 * @param {string} handle
 * @return {!ionic.list.IonicListDelegate}
 */
ionic.list.IonicListDelegate.prototype.$getByHandle = function(handle) {};
/** @const */
ionic.loading = {};
/**
 * @record
 * @struct
 */
ionic.loading.IonicLoadingService = function() {};

/**
 * @param {!ionic.loading.IonicLoadingOptions=} opts
 * @return {void}
 */
ionic.loading.IonicLoadingService.prototype.show = function(opts) {};

/**
 * @return {void}
 */
ionic.loading.IonicLoadingService.prototype.hide = function() {};
/**
 * @record
 * @struct
 */
ionic.loading.IonicLoadingOptions = function() {};
 /** @type {string} */
ionic.loading.IonicLoadingOptions.prototype.template;
 /** @type {string} */
ionic.loading.IonicLoadingOptions.prototype.templateUrl;
 /** @type {?} */
ionic.loading.IonicLoadingOptions.prototype.scope;
 /** @type {boolean} */
ionic.loading.IonicLoadingOptions.prototype.noBackdrop;
 /** @type {boolean} */
ionic.loading.IonicLoadingOptions.prototype.hideOnStateChange;
 /** @type {number} */
ionic.loading.IonicLoadingOptions.prototype.delay;
 /** @type {number} */
ionic.loading.IonicLoadingOptions.prototype.duration;
/** @const */
ionic.modal = {};
/**
 * @record
 * @struct
 */
ionic.modal.IonicModalService = function() {};

/**
 * @param {string} templateString
 * @param {!ionic.modal.IonicModalOptions=} options
 * @return {!ionic.modal.IonicModalController}
 */
ionic.modal.IonicModalService.prototype.fromTemplate = function(templateString, options) {};

/**
 * @param {string} templateUrl
 * @param {!ionic.modal.IonicModalOptions=} options
 * @return {!angular.IPromise<!ionic.modal.IonicModalController>}
 */
ionic.modal.IonicModalService.prototype.fromTemplateUrl = function(templateUrl, options) {};
/**
 * @record
 * @struct
 */
ionic.modal.IonicModalController = function() {};

/**
 * @param {!ionic.modal.IonicModalOptions} options
 * @return {void}
 */
ionic.modal.IonicModalController.prototype.initialize = function(options) {};

/**
 * @return {!angular.IPromise<void>}
 */
ionic.modal.IonicModalController.prototype.show = function() {};

/**
 * @return {!angular.IPromise<void>}
 */
ionic.modal.IonicModalController.prototype.hide = function() {};

/**
 * @return {!angular.IPromise<void>}
 */
ionic.modal.IonicModalController.prototype.remove = function() {};

/**
 * @return {boolean}
 */
ionic.modal.IonicModalController.prototype.isShown = function() {};
/**
 * @record
 * @struct
 */
ionic.modal.IonicModalOptions = function() {};
 /** @type {?} */
ionic.modal.IonicModalOptions.prototype.scope;
 /** @type {string} */
ionic.modal.IonicModalOptions.prototype.animation;
 /** @type {boolean} */
ionic.modal.IonicModalOptions.prototype.focusFirstInput;
 /** @type {boolean} */
ionic.modal.IonicModalOptions.prototype.backdropClickToClose;
 /** @type {boolean} */
ionic.modal.IonicModalOptions.prototype.hardwareBackButtonClose;
/** @const */
ionic.navigation = {};
/**
 * @record
 * @struct
 */
ionic.navigation.IonicNavBarDelegate = function() {};

/**
 * @param {string=} direction
 * @return {void}
 */
ionic.navigation.IonicNavBarDelegate.prototype.align = function(direction) {};

/**
 * @param {boolean=} show
 * @return {boolean}
 */
ionic.navigation.IonicNavBarDelegate.prototype.showBackButton = function(show) {};

/**
 * @param {boolean=} show
 * @return {boolean}
 */
ionic.navigation.IonicNavBarDelegate.prototype.showBar = function(show) {};

/**
 * @param {string} title
 * @return {void}
 */
ionic.navigation.IonicNavBarDelegate.prototype.title = function(title) {};
/**
 * @record
 * @struct
 */
ionic.navigation.IonicHistoryService = function() {};

/**
 * @return {?}
 */
ionic.navigation.IonicHistoryService.prototype.viewHistory = function() {};

/**
 * @param {?=} view
 * @return {?}
 */
ionic.navigation.IonicHistoryService.prototype.currentView = function(view) {};

/**
 * @return {string}
 */
ionic.navigation.IonicHistoryService.prototype.currentHistoryId = function() {};

/**
 * @param {string=} val
 * @return {string}
 */
ionic.navigation.IonicHistoryService.prototype.currentTitle = function(val) {};

/**
 * @param {?=} view
 * @return {?}
 */
ionic.navigation.IonicHistoryService.prototype.backView = function(view) {};

/**
 * @return {string}
 */
ionic.navigation.IonicHistoryService.prototype.backTitle = function() {};

/**
 * @param {?=} view
 * @return {?}
 */
ionic.navigation.IonicHistoryService.prototype.forwardView = function(view) {};

/**
 * @return {string}
 */
ionic.navigation.IonicHistoryService.prototype.currentStateName = function() {};

/**
 * @param {number=} backCount
 * @return {void}
 */
ionic.navigation.IonicHistoryService.prototype.goBack = function(backCount) {};

/**
 * @return {void}
 */
ionic.navigation.IonicHistoryService.prototype.removeBackView = function() {};

/**
 * @return {void}
 */
ionic.navigation.IonicHistoryService.prototype.clearHistory = function() {};

/**
 * @return {!angular.IPromise<?>}
 */
ionic.navigation.IonicHistoryService.prototype.clearCache = function() {};

/**
 * @param {!ionic.navigation.IonicHistoryNextViewOptions} options
 * @return {void}
 */
ionic.navigation.IonicHistoryService.prototype.nextViewOptions = function(options) {};
/**
 * @record
 * @struct
 */
ionic.navigation.IonicHistoryNextViewOptions = function() {};
 /** @type {boolean} */
ionic.navigation.IonicHistoryNextViewOptions.prototype.disableAnimate;
 /** @type {boolean} */
ionic.navigation.IonicHistoryNextViewOptions.prototype.disableBack;
 /** @type {boolean} */
ionic.navigation.IonicHistoryNextViewOptions.prototype.historyRoot;
/** @const */
ionic.platform = {};
/**
 * @record
 * @struct
 */
ionic.platform.IonicPlatformService = function() {};

/**
 * @param {!Function} callback
 * @return {void}
 */
ionic.platform.IonicPlatformService.prototype.onHardwareBackButton = function(callback) {};

/**
 * @param {!Function} callback
 * @return {void}
 */
ionic.platform.IonicPlatformService.prototype.offHardwareBackButton = function(callback) {};

/**
 * @param {!Function} callback
 * @param {number} priority
 * @param {?=} actionId
 * @return {!Function}
 */
ionic.platform.IonicPlatformService.prototype.registerBackButtonAction = function(callback, priority, actionId) {};

/**
 * @param {string} type
 * @param {!Function} callback
 * @return {!Function}
 */
ionic.platform.IonicPlatformService.prototype.on = function(type, callback) {};

/**
 * @param {!Function=} callback
 * @return {!angular.IPromise<?>}
 */
ionic.platform.IonicPlatformService.prototype.ready = function(callback) {};
/** @const */
ionic.popover = {};
/**
 * @record
 * @struct
 */
ionic.popover.IonicPopoverService = function() {};

/**
 * @param {string} templateString
 * @param {!ionic.popover.IonicPopoverOptions} options
 * @return {!ionic.popover.IonicPopoverController}
 */
ionic.popover.IonicPopoverService.prototype.fromTemplate = function(templateString, options) {};

/**
 * @param {string} templateUrl
 * @param {!ionic.popover.IonicPopoverOptions} options
 * @return {!angular.IPromise<!ionic.popover.IonicPopoverController>}
 */
ionic.popover.IonicPopoverService.prototype.fromTemplateUrl = function(templateUrl, options) {};
/**
 * @record
 * @struct
 */
ionic.popover.IonicPopoverController = function() {};

/**
 * @param {!ionic.popover.IonicPopoverOptions} options
 * @return {void}
 */
ionic.popover.IonicPopoverController.prototype.initialize = function(options) {};

/**
 * @param {?=} $event
 * @return {!angular.IPromise<?>}
 */
ionic.popover.IonicPopoverController.prototype.show = function($event) {};

/**
 * @return {!angular.IPromise<?>}
 */
ionic.popover.IonicPopoverController.prototype.hide = function() {};

/**
 * @return {boolean}
 */
ionic.popover.IonicPopoverController.prototype.isShown = function() {};

/**
 * @return {!angular.IPromise<?>}
 */
ionic.popover.IonicPopoverController.prototype.remove = function() {};
/**
 * @record
 * @struct
 */
ionic.popover.IonicPopoverOptions = function() {};
 /** @type {?} */
ionic.popover.IonicPopoverOptions.prototype.scope;
 /** @type {boolean} */
ionic.popover.IonicPopoverOptions.prototype.focusFirstInput;
 /** @type {boolean} */
ionic.popover.IonicPopoverOptions.prototype.backdropClickToClose;
 /** @type {boolean} */
ionic.popover.IonicPopoverOptions.prototype.hardwareBackButtonClose;
/** @const */
ionic.popup = {};
/**
 * @record
 * @struct
 */
ionic.popup.IonicPopupService = function() {};

/**
 * @param {!ionic.popup.IonicPopupFullOptions} options
 * @return {!ionic.popup.IonicPopupPromise}
 */
ionic.popup.IonicPopupService.prototype.show = function(options) {};

/**
 * @param {!ionic.popup.IonicPopupAlertOptions} options
 * @return {!ionic.popup.IonicPopupPromise}
 */
ionic.popup.IonicPopupService.prototype.alert = function(options) {};

/**
 * @param {!ionic.popup.IonicPopupConfirmOptions} options
 * @return {!ionic.popup.IonicPopupConfirmPromise}
 */
ionic.popup.IonicPopupService.prototype.confirm = function(options) {};

/**
 * @param {!ionic.popup.IonicPopupPromptOptions} options
 * @return {!ionic.popup.IonicPopupPromise}
 */
ionic.popup.IonicPopupService.prototype.prompt = function(options) {};
/**
 * @extends {angular.IPromise}
 * @record
 * @struct
 */
ionic.popup.IonicPopupConfirmPromise = function() {};

/**
 * @param {boolean=} value
 * @return {void}
 */
ionic.popup.IonicPopupConfirmPromise.prototype.close = function(value) {};
/**
 * @extends {angular.IPromise}
 * @record
 * @struct
 */
ionic.popup.IonicPopupPromise = function() {};

/**
 * @param {?=} value
 * @return {?}
 */
ionic.popup.IonicPopupPromise.prototype.close = function(value) {};
/**
 * @record
 * @struct
 */
ionic.popup.IonicPopupBaseOptions = function() {};
 /** @type {string} */
ionic.popup.IonicPopupBaseOptions.prototype.title;
 /** @type {string} */
ionic.popup.IonicPopupBaseOptions.prototype.cssClass;
 /** @type {string} */
ionic.popup.IonicPopupBaseOptions.prototype.subTitle;
 /** @type {string} */
ionic.popup.IonicPopupBaseOptions.prototype.template;
 /** @type {string} */
ionic.popup.IonicPopupBaseOptions.prototype.templateUrl;
/**
 * @extends {ionic.popup.IonicPopupBaseOptions}
 * @record
 * @struct
 */
ionic.popup.IonicPopupFullOptions = function() {};
 /** @type {?} */
ionic.popup.IonicPopupFullOptions.prototype.scope;
 /** @type {!Array<!ionic.popup.IonicPopupButton>} */
ionic.popup.IonicPopupFullOptions.prototype.buttons;
/**
 * @record
 * @struct
 */
ionic.popup.IonicPopupButton = function() {};
 /** @type {string} */
ionic.popup.IonicPopupButton.prototype.text;
 /** @type {string} */
ionic.popup.IonicPopupButton.prototype.type;

/**
 * @param {?=} event
 * @return {void}
 */
ionic.popup.IonicPopupButton.prototype.onTap = function(event) {};
/**
 * @extends {ionic.popup.IonicPopupBaseOptions}
 * @record
 * @struct
 */
ionic.popup.IonicPopupAlertOptions = function() {};
 /** @type {string} */
ionic.popup.IonicPopupAlertOptions.prototype.okText;
 /** @type {string} */
ionic.popup.IonicPopupAlertOptions.prototype.okType;
/**
 * @extends {ionic.popup.IonicPopupBaseOptions}
 * @record
 * @struct
 */
ionic.popup.IonicPopupConfirmOptions = function() {};
 /** @type {string} */
ionic.popup.IonicPopupConfirmOptions.prototype.cancelText;
 /** @type {string} */
ionic.popup.IonicPopupConfirmOptions.prototype.cancelType;
 /** @type {string} */
ionic.popup.IonicPopupConfirmOptions.prototype.okText;
 /** @type {string} */
ionic.popup.IonicPopupConfirmOptions.prototype.okType;
/**
 * @extends {ionic.popup.IonicPopupBaseOptions}
 * @record
 * @struct
 */
ionic.popup.IonicPopupPromptOptions = function() {};
 /** @type {string} */
ionic.popup.IonicPopupPromptOptions.prototype.inputType;
 /** @type {string} */
ionic.popup.IonicPopupPromptOptions.prototype.inputPlaceholder;
 /** @type {string} */
ionic.popup.IonicPopupPromptOptions.prototype.cancelText;
 /** @type {string} */
ionic.popup.IonicPopupPromptOptions.prototype.cancelType;
 /** @type {string} */
ionic.popup.IonicPopupPromptOptions.prototype.okText;
 /** @type {string} */
ionic.popup.IonicPopupPromptOptions.prototype.okType;
/** @const */
ionic.scroll = {};
/**
 * @record
 * @struct
 */
ionic.scroll.IonicScrollDelegate = function() {};

/**
 * @return {void}
 */
ionic.scroll.IonicScrollDelegate.prototype.resize = function() {};

/**
 * @param {boolean=} shouldAnimate
 * @return {void}
 */
ionic.scroll.IonicScrollDelegate.prototype.scrollTop = function(shouldAnimate) {};

/**
 * @param {boolean=} shouldAnimate
 * @return {void}
 */
ionic.scroll.IonicScrollDelegate.prototype.scrollBottom = function(shouldAnimate) {};

/**
 * @param {number} left
 * @param {number} top
 * @param {boolean=} shouldAnimate
 * @return {void}
 */
ionic.scroll.IonicScrollDelegate.prototype.scrollTo = function(left, top, shouldAnimate) {};

/**
 * @param {number} left
 * @param {number} top
 * @param {boolean=} shouldAnimate
 * @return {void}
 */
ionic.scroll.IonicScrollDelegate.prototype.scrollBy = function(left, top, shouldAnimate) {};

/**
 * @param {number} level
 * @param {boolean=} animate
 * @param {number=} originLeft
 * @param {number=} originTop
 * @return {void}
 */
ionic.scroll.IonicScrollDelegate.prototype.zoomTo = function(level, animate, originLeft, originTop) {};

/**
 * @param {number} factor
 * @param {boolean=} animate
 * @param {number=} originLeft
 * @param {number=} originTop
 * @return {void}
 */
ionic.scroll.IonicScrollDelegate.prototype.zoomBy = function(factor, animate, originLeft, originTop) {};

/**
 * @return {{left: number, top: number}}
 */
ionic.scroll.IonicScrollDelegate.prototype.getScrollPosition = function() {};

/**
 * @param {boolean=} shouldAnimate
 * @return {void}
 */
ionic.scroll.IonicScrollDelegate.prototype.anchorScroll = function(shouldAnimate) {};

/**
 * @param {boolean=} shouldFreeze
 * @return {boolean}
 */
ionic.scroll.IonicScrollDelegate.prototype.freezeScroll = function(shouldFreeze) {};

/**
 * @param {boolean=} shouldFreeze
 * @return {boolean}
 */
ionic.scroll.IonicScrollDelegate.prototype.freezeAllScrolls = function(shouldFreeze) {};

/**
 * @return {?}
 */
ionic.scroll.IonicScrollDelegate.prototype.getScrollView = function() {};

/**
 * @param {string} handle
 * @return {!ionic.scroll.IonicScrollDelegate}
 */
ionic.scroll.IonicScrollDelegate.prototype.$getByHandle = function(handle) {};
/** @const */
ionic.sideMenu = {};
/**
 * @record
 * @struct
 */
ionic.sideMenu.IonicSideMenuDelegate = function() {};

/**
 * @param {boolean=} isOpen
 * @return {void}
 */
ionic.sideMenu.IonicSideMenuDelegate.prototype.toggleLeft = function(isOpen) {};

/**
 * @param {boolean=} isOpen
 * @return {void}
 */
ionic.sideMenu.IonicSideMenuDelegate.prototype.toggleRight = function(isOpen) {};

/**
 * @return {number}
 */
ionic.sideMenu.IonicSideMenuDelegate.prototype.getOpenRatio = function() {};

/**
 * @return {boolean}
 */
ionic.sideMenu.IonicSideMenuDelegate.prototype.isOpen = function() {};

/**
 * @return {boolean}
 */
ionic.sideMenu.IonicSideMenuDelegate.prototype.isOpenLeft = function() {};

/**
 * @return {boolean}
 */
ionic.sideMenu.IonicSideMenuDelegate.prototype.isOpenRight = function() {};

/**
 * @param {boolean=} canDrag
 * @return {boolean}
 */
ionic.sideMenu.IonicSideMenuDelegate.prototype.canDragContent = function(canDrag) {};

/**
 * @param {(number|boolean)=} value
 * @return {boolean}
 */
ionic.sideMenu.IonicSideMenuDelegate.prototype.edgeDragThreshold = function(value) {};

/**
 * @param {string} handle
 * @return {!ionic.sideMenu.IonicSideMenuDelegate}
 */
ionic.sideMenu.IonicSideMenuDelegate.prototype.$getByHandle = function(handle) {};
/** @const */
ionic.slideBox = {};
/**
 * @record
 * @struct
 */
ionic.slideBox.IonicSlideBoxDelegate = function() {};

/**
 * @return {void}
 */
ionic.slideBox.IonicSlideBoxDelegate.prototype.update = function() {};

/**
 * @param {number} to
 * @param {number=} speed
 * @return {void}
 */
ionic.slideBox.IonicSlideBoxDelegate.prototype.slide = function(to, speed) {};

/**
 * @param {boolean=} shouldEnable
 * @return {boolean}
 */
ionic.slideBox.IonicSlideBoxDelegate.prototype.enableSlide = function(shouldEnable) {};

/**
 * @param {number=} speed
 * @return {void}
 */
ionic.slideBox.IonicSlideBoxDelegate.prototype.previous = function(speed) {};

/**
 * @param {number=} speed
 * @return {void}
 */
ionic.slideBox.IonicSlideBoxDelegate.prototype.next = function(speed) {};

/**
 * @return {void}
 */
ionic.slideBox.IonicSlideBoxDelegate.prototype.stop = function() {};

/**
 * @return {void}
 */
ionic.slideBox.IonicSlideBoxDelegate.prototype.start = function() {};

/**
 * @return {number}
 */
ionic.slideBox.IonicSlideBoxDelegate.prototype.currentIndex = function() {};

/**
 * @return {number}
 */
ionic.slideBox.IonicSlideBoxDelegate.prototype.slidesCount = function() {};

/**
 * @param {string} handle
 * @return {!ionic.slideBox.IonicSlideBoxDelegate}
 */
ionic.slideBox.IonicSlideBoxDelegate.prototype.$getByHandle = function(handle) {};
/** @const */
ionic.tabs = {};
/**
 * @record
 * @struct
 */
ionic.tabs.IonicTabsDelegate = function() {};

/**
 * @param {number} index
 * @return {void}
 */
ionic.tabs.IonicTabsDelegate.prototype.select = function(index) {};

/**
 * @return {number}
 */
ionic.tabs.IonicTabsDelegate.prototype.selectedIndex = function() {};

/**
 * @param {string} handle
 * @return {!ionic.tabs.IonicTabsDelegate}
 */
ionic.tabs.IonicTabsDelegate.prototype.$getByHandle = function(handle) {};

/**
 * @param {boolean=} show
 * @return {boolean}
 */
ionic.tabs.IonicTabsDelegate.prototype.showBar = function(show) {};
/** @const */
ionic.utility = {};
/**
 * @record
 * @struct
 */
ionic.utility.IonicConfigProvider = function() {};
 /** @type {{transition: function(string): string, maxCache: function(number): number, forwardCache: function(boolean): boolean, swipeBackEnabled: function(boolean): boolean}} */
ionic.utility.IonicConfigProvider.prototype.views;
 /** @type {{jsScrolling: function(boolean): boolean}} */
ionic.utility.IonicConfigProvider.prototype.scrolling;
 /** @type {{icon: function(string): string, text: function(string): string, previousTitleText: function(boolean): boolean}} */
ionic.utility.IonicConfigProvider.prototype.backButton;
 /** @type {{checkbox: function(string): string, toggle: function(string): string}} */
ionic.utility.IonicConfigProvider.prototype.form;
 /** @type {{icon: function(string): string}} */
ionic.utility.IonicConfigProvider.prototype.spinner;
 /** @type {{style: function(string): string, position: function(string): string}} */
ionic.utility.IonicConfigProvider.prototype.tabs;
 /** @type {{maxPrefetch: function(number): number}} */
ionic.utility.IonicConfigProvider.prototype.templates;
 /** @type {{alignTitle: function(string): string, positionPrimaryButtons: function(string): string, positionSecondaryButtons: function(string): string}} */
ionic.utility.IonicConfigProvider.prototype.navBar;
/**
 * @record
 * @struct
 */
ionic.utility.IonicPositionService = function() {};

/**
 * @param {?} element
 * @return {{top: number, left: number, width: number, height: number}}
 */
ionic.utility.IonicPositionService.prototype.position = function(element) {};

/**
 * @param {?} element
 * @return {{top: number, left: number, width: number, height: number}}
 */
ionic.utility.IonicPositionService.prototype.offset = function(element) {};