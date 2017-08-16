/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/recompose/index.d.ts:
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "recompose"
/** @const */
tsickle_declare_module.recompose = {};

/* TODO: ImportDeclaration in tsickle_declare_module.recompose */

/* TODO: ImportDeclaration in tsickle_declare_module.recompose */

/** @typedef {function(TInner): TOutter} */
tsickle_declare_module.recompose.mapper;

/** @typedef {function(T): boolean} */
tsickle_declare_module.recompose.predicate;

/** @typedef {function(T, T): boolean} */
tsickle_declare_module.recompose.predicateDiff;

/** @typedef {?} */
tsickle_declare_module.recompose.Diff;

/** @typedef {?} */
tsickle_declare_module.recompose.Omit;
/**
 * @record
 * @struct
 */
tsickle_declare_module.recompose.Observer = function() {};

/**
 * @param {T} props
 * @return {void}
 */
tsickle_declare_module.recompose.Observer.prototype.next = function(props) {};

/**
 * @return {void}
 */
tsickle_declare_module.recompose.Observer.prototype.complete = function() {};
/**
 * @record
 * @struct
 */
tsickle_declare_module.recompose.Subscription = function() {};

/**
 * @return {void}
 */
tsickle_declare_module.recompose.Subscription.prototype.unsubscribe = function() {};
/**
 * @record
 * @struct
 */
tsickle_declare_module.recompose.Subscribable = function() {};

/**
 * @param {!Observer<T>} observer
 * @return {!Subscription}
 */
tsickle_declare_module.recompose.Subscribable.prototype.subscribe = function(observer) {};
/**
 * @record
 * @struct
 */
tsickle_declare_module.recompose.ComponentEnhancer = function() {};

/* TODO: CallSignature: tsickle_declare_module.recompose */
/**
 * @record
 * @struct
 */
tsickle_declare_module.recompose.InferableComponentEnhancerWithProps = function() {};

/* TODO: CallSignature: tsickle_declare_module.recompose */

/** @typedef {!InferableComponentEnhancerWithProps<TInjectedProps, !Object>} */
tsickle_declare_module.recompose.InferableComponentEnhancer;

/** @typedef {!InferableComponentEnhancerWithProps<TInjectedProps, ?>} */
tsickle_declare_module.recompose.DefaultingInferableComponentEnhancer;

/**
 * @template TInner, TOutter
 * @param {function(TOutter): TInner} propsMapper
 * @return {!InferableComponentEnhancerWithProps<TInner, TOutter>}
 */
tsickle_declare_module.recompose.mapProps = function(propsMapper) {};

/**
 * @template TInner, TOutter
 * @param {(TInner|function(TOutter): TInner)} createProps
 * @return {!InferableComponentEnhancerWithProps<?, TOutter>}
 */
tsickle_declare_module.recompose.withProps = function(createProps) {};

/**
 * @template TInner, TOutter
 * @param {(!Array<string>|function(TOutter, TOutter): boolean)} shouldMapOrKeys
 * @param {function(TOutter): TInner} createProps
 * @return {!InferableComponentEnhancerWithProps<?, TOutter>}
 */
tsickle_declare_module.recompose.withPropsOnChange = function(shouldMapOrKeys, createProps) {};

/** @typedef {!Function} */
tsickle_declare_module.recompose.EventHandler;

/** @typedef {!Object<string,function(TOutter): !Function>} */
tsickle_declare_module.recompose.HandleCreators;

/** @typedef {function(TOutter): !Object<string,function(TOutter): !Function>} */
tsickle_declare_module.recompose.HandleCreatorsFactory;

/**
 * @template TOutter, THandlers
 * @param {(!Object<string,function(TOutter): !Function>|function(TOutter): ?)} handlerCreators
 * @return {!InferableComponentEnhancerWithProps<THandlers, TOutter>}
 */
tsickle_declare_module.recompose.withHandlers = function(handlerCreators) {};

/**
 * @template T
 * @param {T} props
 * @return {!InferableComponentEnhancerWithProps<T, ?>}
 */
tsickle_declare_module.recompose.defaultProps = function(props) {};

/**
 * @param {string} outterName
 * @param {string} innerName
 * @return {!ComponentEnhancer<?, ?>}
 */
tsickle_declare_module.recompose.renameProp = function(outterName, innerName) {};

/** @typedef {!Object<string,string>} */
tsickle_declare_module.recompose.NameMap;

/**
 * @param {!Object<string,string>} nameMap
 * @return {!ComponentEnhancer<?, ?>}
 */
tsickle_declare_module.recompose.renameProps = function(nameMap) {};

/**
 * @param {string} propName
 * @return {!ComponentEnhancer<?, ?>}
 */
tsickle_declare_module.recompose.flattenProp = function(propName) {};

/** @typedef {?} */
tsickle_declare_module.recompose.stateProps;

/**
 * @template TOutter, TState, TStateName, TStateUpdaterName
 * @param {TStateName} stateName
 * @param {TStateUpdaterName} stateUpdaterName
 * @param {(TState|function(TOutter): TState)} initialState
 * @return {!InferableComponentEnhancerWithProps<?, TOutter>}
 */
tsickle_declare_module.recompose.withState = function(stateName, stateUpdaterName, initialState) {};

/** @typedef {function(!Array<?>): TState} */
tsickle_declare_module.recompose.StateHandler;

/** @typedef {!Object<string,function(TState, TOutter): function(!Array<?>): TState>} */
tsickle_declare_module.recompose.StateUpdaters;

/**
 * @template TState, TUpdaters, TOutter
 * @param {(TState|function(TOutter): TState)} createProps
 * @param {!Object<string,function(TState, TOutter): function(!Array<?>): TState>} stateUpdaters
 * @return {!InferableComponentEnhancerWithProps<?, TOutter>}
 */
tsickle_declare_module.recompose.withStateHandlers = function(createProps, stateUpdaters) {};

/** @typedef {function(TState, TAction): TState} */
tsickle_declare_module.recompose.reducer;

/** @typedef {?} */
tsickle_declare_module.recompose.reducerProps;

/**
 * @template TOutter, TState, TAction, TStateName, TDispatchName
 * @param {TStateName} stateName
 * @param {TDispatchName} dispatchName
 * @param {function(TState, TAction): TState} reducer
 * @param {(TState|function(TOutter): TState)} initialState
 * @return {!InferableComponentEnhancerWithProps<?, TOutter>}
 */
tsickle_declare_module.recompose.withReducer = function(stateName, dispatchName, reducer, initialState) {};

/**
 * @template TOutter
 * @param {function(TOutter): boolean} test
 * @param {(!ComponentEnhancer<?, ?>|!InferableComponentEnhancerWithProps<!Object, ?>)} trueEnhancer
 * @param {(!ComponentEnhancer<?, ?>|!InferableComponentEnhancerWithProps<!Object, ?>)=} falseEnhancer
 * @return {!ComponentEnhancer<?, TOutter>}
 */
tsickle_declare_module.recompose.branch = function(test, trueEnhancer, falseEnhancer) {};

/**
 * @template TProps
 * @param {(string|!React.ComponentClass<TProps>|!React.StatelessComponent<TProps>)} component
 * @return {!ComponentEnhancer<?, ?>}
 */
tsickle_declare_module.recompose.renderComponent = function(component) {};
 /** @type {!InferableComponentEnhancerWithProps<!Object, ?>} */
tsickle_declare_module.recompose.renderNothing;

/**
 * @template TProps
 * @param {function(TProps, TProps): boolean} test
 * @return {!InferableComponentEnhancerWithProps<!Object, ?>}
 */
tsickle_declare_module.recompose.shouldUpdate = function(test) {};

/**
 * @template TProps
 * @param {(!React.ComponentClass<TProps>|!React.StatelessComponent<TProps>)} component
 * @return {(!React.ComponentClass<TProps>|!React.StatelessComponent<TProps>)}
 */
tsickle_declare_module.recompose.pure = function(component) {};

/**
 * @param {!Array<string>} propKeys
 * @return {!InferableComponentEnhancerWithProps<!Object, ?>}
 */
tsickle_declare_module.recompose.onlyUpdateForKeys = function(propKeys) {};
 /** @type {!InferableComponentEnhancerWithProps<!Object, ?>} */
tsickle_declare_module.recompose.onlyUpdateForPropTypes;

/**
 * @template TContext, TProps
 * @param {?} childContextTypes
 * @param {function(TProps): ?} getChildContext
 * @return {!InferableComponentEnhancerWithProps<!Object, ?>}
 */
tsickle_declare_module.recompose.withContext = function(childContextTypes, getChildContext) {};

/**
 * @template TContext
 * @param {?} contextTypes
 * @return {!InferableComponentEnhancerWithProps<TContext, !Object>}
 */
tsickle_declare_module.recompose.getContext = function(contextTypes) {};
/**
 * @record
 * @struct
 */
tsickle_declare_module.recompose.ReactLifeCycleFunctionsThisArguments = function() {};
 /** @type {TProps} */
tsickle_declare_module.recompose.ReactLifeCycleFunctionsThisArguments.prototype.props;
 /** @type {TState} */
tsickle_declare_module.recompose.ReactLifeCycleFunctionsThisArguments.prototype.state;
 /** @type {?} */
tsickle_declare_module.recompose.ReactLifeCycleFunctionsThisArguments.prototype.context;
 /** @type {!Object<string,(!React.Component<?, !Object>|!Element)>} */
tsickle_declare_module.recompose.ReactLifeCycleFunctionsThisArguments.prototype.refs;

/**
 * @template TKeyOfState
 * @param {function(TState, TProps): ?|?} f_or_state
 * @param {function(): ?=} callback
 * @return {void}
 */
tsickle_declare_module.recompose.ReactLifeCycleFunctionsThisArguments.prototype.setState = function(f_or_state, callback) {};

/**
 * @param {function(): ?=} callBack
 * @return {void}
 */
tsickle_declare_module.recompose.ReactLifeCycleFunctionsThisArguments.prototype.forceUpdate = function(callBack) {};
/**
 * @record
 * @struct
 */
tsickle_declare_module.recompose.ReactLifeCycleFunctions = function() {};
 /** @type {function(): void} */
tsickle_declare_module.recompose.ReactLifeCycleFunctions.prototype.componentWillMount;
 /** @type {function(): void} */
tsickle_declare_module.recompose.ReactLifeCycleFunctions.prototype.componentDidMount;
 /** @type {function(TProps): void} */
tsickle_declare_module.recompose.ReactLifeCycleFunctions.prototype.componentWillReceiveProps;
 /** @type {function(TProps, TState): boolean} */
tsickle_declare_module.recompose.ReactLifeCycleFunctions.prototype.shouldComponentUpdate;
 /** @type {function(TProps, TState): void} */
tsickle_declare_module.recompose.ReactLifeCycleFunctions.prototype.componentWillUpdate;
 /** @type {function(TProps, TState): void} */
tsickle_declare_module.recompose.ReactLifeCycleFunctions.prototype.componentDidUpdate;
 /** @type {function(): void} */
tsickle_declare_module.recompose.ReactLifeCycleFunctions.prototype.componentWillUnmount;

/**
 * @template TProps, TState
 * @param {!ReactLifeCycleFunctions<TProps, TState>} spec
 * @return {!InferableComponentEnhancerWithProps<!Object, ?>}
 */
tsickle_declare_module.recompose.lifecycle = function(spec) {};
 /** @type {!InferableComponentEnhancerWithProps<!Object, ?>} */
tsickle_declare_module.recompose.toClass;

/**
 * @template TOutter
 * @param {string} key
 * @param {?} value
 * @return {!ComponentEnhancer<TOutter, TOutter>}
 */
tsickle_declare_module.recompose.setStatic = function(key, value) {};

/**
 * @template TOutter
 * @param {?} propTypes
 * @return {!ComponentEnhancer<?, TOutter>}
 */
tsickle_declare_module.recompose.setPropTypes = function(propTypes) {};

/**
 * @template TOutter
 * @param {string} displayName
 * @return {!ComponentEnhancer<TOutter, TOutter>}
 */
tsickle_declare_module.recompose.setDisplayName = function(displayName) {};

/**
 * @template TInner, TOutter
 * @param {...!Function} functions
 * @return {!ComponentEnhancer<TInner, TOutter>}
 */
tsickle_declare_module.recompose.compose = function(functions) {};

/**
 * @param {(!React.ComponentClass<?>|!React.StatelessComponent<?>)} component
 * @return {string}
 */
tsickle_declare_module.recompose.getDisplayName = function(component) {};

/**
 * @param {(!React.ComponentClass<?>|!React.StatelessComponent<?>)} component
 * @param {string} wrapperName
 * @return {string}
 */
tsickle_declare_module.recompose.wrapDisplayName = function(component, wrapperName) {};

/**
 * @param {!Object} a
 * @param {!Object} b
 * @return {boolean}
 */
tsickle_declare_module.recompose.shallowEqual = function(a, b) {};

/**
 * @param {?} value
 * @return {boolean}
 */
tsickle_declare_module.recompose.isClassComponent = function(value) {};

/**
 * @param {(string|!React.ComponentClass<?>|!React.StatelessComponent<?>)} type
 * @param {!Object=} props
 * @param {(string|number|boolean|!Object|!React.ReactElement<?>|!Array<(string|number|boolean|!Array<?>|!React.ReactElement<?>)>)=} children
 * @return {!React.ReactElement<?>}
 */
tsickle_declare_module.recompose.createEagerElement = function(type, props, children) {};

/** @typedef {function(!Object, (string|number|boolean|!Object|!React.ReactElement<?>|!Array<(string|number|boolean|!Array<?>|!React.ReactElement<?>)>)): !React.ReactElement<?>} */
tsickle_declare_module.recompose.componentFactory;

/**
 * @param {(string|!React.ComponentClass<?>|!React.StatelessComponent<?>)} type
 * @return {function(!Object, (string|number|boolean|!Object|!React.ReactElement<?>|!Array<(string|number|boolean|!Array<?>|!React.ReactElement<?>)>)): !React.ReactElement<?>}
 */
tsickle_declare_module.recompose.createEagerFactory = function(type) {};

/**
 * @param {function(!Object): void} callback
 * @return {!React.ComponentClass<?>}
 */
tsickle_declare_module.recompose.createSink = function(callback) {};

/**
 * @param {string} propName
 * @return {!React.StatelessComponent<?>}
 */
tsickle_declare_module.recompose.componentFromProp = function(propName) {};

/**
 * @param {...(string|!React.ComponentClass<?>|!React.StatelessComponent<?>)} Components
 * @return {!React.ComponentClass<?>}
 */
tsickle_declare_module.recompose.nest = function(Components) {};

/**
 * @template TProps
 * @param {!InferableComponentEnhancerWithProps<TProps, !Object>} hoc
 * @return {!InferableComponentEnhancerWithProps<TProps, !Object>}
 */
tsickle_declare_module.recompose.hoistStatics = function(hoc) {};

/**
 * @template TProps
 * @param {function(!Subscribable<TProps>): !Subscribable<(string|number|boolean|!Object|!React.ReactElement<?>|!Array<(string|number|boolean|!Array<?>|!React.ReactElement<?>)>)>} propsToReactNode
 * @return {(!React.ComponentClass<TProps>|!React.StatelessComponent<TProps>)}
 */
tsickle_declare_module.recompose.componentFromStream = function(propsToReactNode) {};

/**
 * @param {{fromESObservable: function(!Subscribable<T>): ?, toESObservable: function(?): !Subscribable<T>}} config
 * @return {function(function(!Subscribable<TProps>): !Subscribable<(string|number|boolean|!Object|!React.ReactElement<?>|!Array<(string|number|boolean|!Array<?>|!React.ReactElement<?>)>)>): (!React.ComponentClass<TProps>|!React.StatelessComponent<TProps>)}
 */
tsickle_declare_module.recompose.componentFromStreamWithConfig = function(config) {};

/**
 * @template TInner, TOutter
 * @param {function(!Subscribable<TOutter>): !Subscribable<TInner>} transform
 * @return {!ComponentEnhancer<TInner, TOutter>}
 */
tsickle_declare_module.recompose.mapPropsStream = function(transform) {};

/**
 * @param {{fromESObservable: function(!Subscribable<T>): ?, toESObservable: function(?): !Subscribable<T>}} config
 * @return {function(function(!Subscribable<TOutter>): !Subscribable<TInner>): !ComponentEnhancer<TInner, TOutter>}
 */
tsickle_declare_module.recompose.mapPropsStreamWithConfig = function(config) {};

/** @typedef {{handler: function(T): void, stream: TSubs}} */
tsickle_declare_module.recompose.EventHandlerOf;

/**
 * @template T, TSubs
 * @return {{handler: function(T): void, stream: TSubs}}
 */
tsickle_declare_module.recompose.createEventHandler = function() {};

/** @typedef {{fromESObservable: function(!Subscribable<T>): ?, toESObservable: function(?): !Subscribable<T>}} */
tsickle_declare_module.recompose.ObservableConfig;

/**
 * @param {{fromESObservable: function(!Subscribable<T>): ?, toESObservable: function(?): !Subscribable<T>}} config
 * @return {void}
 */
tsickle_declare_module.recompose.setObservableConfig = function(config) {};
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "recompose/rxjsObservableConfig"
/** @const */
tsickle_declare_module.recompose_rxjsObservableConfig = {};

/* TODO: ImportDeclaration in tsickle_declare_module.recompose_rxjsObservableConfig */
 /** @type {{fromESObservable: function(!Subscribable<T>): ?, toESObservable: function(?): !Subscribable<T>}} */
tsickle_declare_module.recompose_rxjsObservableConfig.rxjsconfig;

/* TODO: ExportAssignment in tsickle_declare_module.recompose_rxjsObservableConfig */
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "recompose/rxjs4ObservableConfig"
/** @const */
tsickle_declare_module.recompose_rxjs_ObservableConfig = {};

/* TODO: ImportDeclaration in tsickle_declare_module.recompose_rxjs_ObservableConfig */
 /** @type {{fromESObservable: function(!Subscribable<T>): ?, toESObservable: function(?): !Subscribable<T>}} */
tsickle_declare_module.recompose_rxjs_ObservableConfig.rxjs4config;

/* TODO: ExportAssignment in tsickle_declare_module.recompose_rxjs_ObservableConfig */
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "recompose/mostObservableConfig"
/** @const */
tsickle_declare_module.recompose_mostObservableConfig = {};

/* TODO: ImportDeclaration in tsickle_declare_module.recompose_mostObservableConfig */
 /** @type {{fromESObservable: function(!Subscribable<T>): ?, toESObservable: function(?): !Subscribable<T>}} */
tsickle_declare_module.recompose_mostObservableConfig.mostConfig;

/* TODO: ExportAssignment in tsickle_declare_module.recompose_mostObservableConfig */
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "recompose/xstreamObservableConfig"
/** @const */
tsickle_declare_module.recompose_xstreamObservableConfig = {};

/* TODO: ImportDeclaration in tsickle_declare_module.recompose_xstreamObservableConfig */
 /** @type {{fromESObservable: function(!Subscribable<T>): ?, toESObservable: function(?): !Subscribable<T>}} */
tsickle_declare_module.recompose_xstreamObservableConfig.xstreamConfig;

/* TODO: ExportAssignment in tsickle_declare_module.recompose_xstreamObservableConfig */
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "recompose/baconObservableConfig"
/** @const */
tsickle_declare_module.recompose_baconObservableConfig = {};

/* TODO: ImportDeclaration in tsickle_declare_module.recompose_baconObservableConfig */
 /** @type {{fromESObservable: function(!Subscribable<T>): ?, toESObservable: function(?): !Subscribable<T>}} */
tsickle_declare_module.recompose_baconObservableConfig.baconConfig;

/* TODO: ExportAssignment in tsickle_declare_module.recompose_baconObservableConfig */
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "recompose/kefirObservableConfig"
/** @const */
tsickle_declare_module.recompose_kefirObservableConfig = {};

/* TODO: ImportDeclaration in tsickle_declare_module.recompose_kefirObservableConfig */
 /** @type {{fromESObservable: function(!Subscribable<T>): ?, toESObservable: function(?): !Subscribable<T>}} */
tsickle_declare_module.recompose_kefirObservableConfig.kefirConfig;

/* TODO: ExportAssignment in tsickle_declare_module.recompose_kefirObservableConfig */
