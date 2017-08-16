/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/natural/index.d.ts:

/* TODO: ImportEqualsDeclaration in  */
/**
 * @record
 * @struct
 */
function Tokenizer() {}

/**
 * @param {string} text
 * @return {!Array<string>}
 */
Tokenizer.prototype.tokenize = function(text) {};
/**
 * @implements {Tokenizer}
 * @constructor
 * @struct
 */
function WordTokenizer() {}

/**
 * @param {string} text
 * @return {!Array<string>}
 */
WordTokenizer.prototype.tokenize = function(text) {};
/**
 * @implements {Tokenizer}
 * @constructor
 * @struct
 */
function AggressiveTokenizer() {}

/**
 * @param {string} text
 * @return {!Array<string>}
 */
AggressiveTokenizer.prototype.tokenize = function(text) {};
/**
 * @implements {Tokenizer}
 * @constructor
 * @struct
 */
function TreebankWordTokenizer() {}

/**
 * @param {string} text
 * @return {!Array<string>}
 */
TreebankWordTokenizer.prototype.tokenize = function(text) {};
/**
 * @record
 * @struct
 */
function RegexTokenizerOptions() {}
 /** @type {!RegExp} */
RegexTokenizerOptions.prototype.pattern;
 /** @type {boolean} */
RegexTokenizerOptions.prototype.discardEmpty;

/**
 * @constructor
 * @struct
 * @param {?} options
 */
function RegexpTokenizer(options) {}

/**
 * @param {string} text
 * @return {!Array<string>}
 */
RegexpTokenizer.prototype.tokenize = function(text) {};
/**
 * @implements {Tokenizer}
 * @constructor
 * @struct
 */
function WordPunctTokenizer() {}

/**
 * @param {string} text
 * @return {!Array<string>}
 */
WordPunctTokenizer.prototype.tokenize = function(text) {};

/**
 * @param {string} s1
 * @param {string} s2
 * @param {number=} dt
 * @return {number}
 */
function JaroWinklerDistance(s1, s2, dt) {}

/**
 * @param {string} source
 * @param {string} target
 * @param {?=} options
 * @return {number}
 */
function LevenshteinDistance(source, target, options) {}

/**
 * @param {string} str1
 * @param {string} str2
 * @return {number}
 */
function DiceCoefficient(str1, str2) {}
/**
 * @record
 * @struct
 */
function Stemmer() {}

/**
 * @param {string} token
 * @return {string}
 */
Stemmer.prototype.stem = function(token) {};
 /** @type {{stem: function(string): string}} */
var PorterStemmer;
 /** @type {{stem: function(string): string}} */
var PorterStemmerRu;
 /** @type {{stem: function(string): string}} */
var PorterStemmerEs;
 /** @type {{stem: function(string): string}} */
var PorterStemmerFa;
 /** @type {{stem: function(string): string}} */
var PorterStemmerFr;
 /** @type {{stem: function(string): string}} */
var PorterStemmerIt;
 /** @type {{stem: function(string): string}} */
var PorterStemmerNo;
 /** @type {{stem: function(string): string}} */
var PorterStemmerPt;
 /** @type {{stem: function(string): string}} */
var LancasterStemmer;
/**
 * @record
 * @struct
 */
function BayesClassifierCallback() {}

/* TODO: CallSignature:  */
/**
 * @constructor
 * @struct
 */
function BayesClassifier() {}
 /** @type {!internal.EventEmitter} */
BayesClassifier.prototype.events;

/**
 * @param {string|!Array<string>} text
 * @param {string} stem
 * @return {void}
 */
BayesClassifier.prototype.addDocument = function(text, stem) {};

/**
 * @return {void}
 */
BayesClassifier.prototype.train = function() {};

/**
 * @param {string} observation
 * @return {string}
 */
BayesClassifier.prototype.classify = function(observation) {};

/**
 * @param {string} observation
 * @return {!Array<string>}
 */
BayesClassifier.prototype.getClassifications = function(observation) {};

/**
 * @param {string} filename
 * @param {?} callback
 * @return {void}
 */
BayesClassifier.prototype.save = function(filename, callback) {};

/**
 * @param {string} filename
 * @param {?} stemmer
 * @param {?} callback
 * @return {void}
 */
BayesClassifier.load = function(filename, stemmer, callback) {};

/**
 * @param {?} classifier
 * @param {?=} stemmer
 * @return {!BayesClassifier}
 */
BayesClassifier.restore = function(classifier, stemmer) {};
/**
 * @record
 * @struct
 */
function LogisticRegressionClassifierCallback() {}

/* TODO: CallSignature:  */
/**
 * @constructor
 * @struct
 */
function LogisticRegressionClassifier() {}
 /** @type {!internal.EventEmitter} */
LogisticRegressionClassifier.prototype.events;

/**
 * @param {string|!Array<string>} text
 * @param {string} stem
 * @return {void}
 */
LogisticRegressionClassifier.prototype.addDocument = function(text, stem) {};

/**
 * @return {void}
 */
LogisticRegressionClassifier.prototype.train = function() {};

/**
 * @param {string} observation
 * @return {string}
 */
LogisticRegressionClassifier.prototype.classify = function(observation) {};

/**
 * @param {string} observation
 * @return {!Array<string>}
 */
LogisticRegressionClassifier.prototype.getClassifications = function(observation) {};

/**
 * @param {string} filename
 * @param {?} callback
 * @return {void}
 */
LogisticRegressionClassifier.prototype.save = function(filename, callback) {};

/**
 * @param {string} filename
 * @param {?} stemmer
 * @param {?} callback
 * @return {void}
 */
LogisticRegressionClassifier.load = function(filename, stemmer, callback) {};

/**
 * @param {?} classifier
 * @param {?=} stemmer
 * @return {!LogisticRegressionClassifier}
 */
LogisticRegressionClassifier.restore = function(classifier, stemmer) {};
/**
 * @record
 * @struct
 */
function Phonetic() {}

/**
 * @param {string} stringA
 * @param {string} stringB
 * @return {boolean}
 */
Phonetic.prototype.compare = function(stringA, stringB) {};

/**
 * @param {string} token
 * @param {number=} maxLength
 * @return {string}
 */
Phonetic.prototype.process = function(token, maxLength) {};
 /** @type {{compare: function(string, string): boolean, process: function(string, number): string}} */
var Metaphone;
 /** @type {{compare: function(string, string): boolean, process: function(string, number): string}} */
var SoundEx;
 /** @type {{compare: function(string, string): boolean, process: function(string, number): !Array<string>}} */
var DoubleMetaphone;
/**
 * @constructor
 * @struct
 */
function NounInflector() {}

/**
 * @param {string} token
 * @return {string}
 */
NounInflector.prototype.pluralize = function(token) {};

/**
 * @param {string} token
 * @return {string}
 */
NounInflector.prototype.singularize = function(token) {};
 /** @type {{nth: function(number): string}} */
var CountInflector;
/**
 * @constructor
 * @struct
 */
function PresentVerbInflector() {}

/**
 * @param {string} token
 * @return {string}
 */
PresentVerbInflector.prototype.pluralize = function(token) {};

/**
 * @param {string} token
 * @return {string}
 */
PresentVerbInflector.prototype.singularize = function(token) {};
 /** @type {{bigrams: ?, trigrams: ?, ngrams: ?}} */
var NGrams;
 /** @type {{bigrams: ?, trigrams: ?, ngrams: ?}} */
var NGramsZH;
/**
 * @record
 * @struct
 */
function TfIdfCallback() {}

/* TODO: CallSignature:  */
/**
 * @record
 * @struct
 */
function TfIdfTerm() {}
 /** @type {string} */
TfIdfTerm.prototype.term;
 /** @type {number} */
TfIdfTerm.prototype.tfidf;

/**
 * @constructor
 * @struct
 * @param {?=} deserialized
 */
function TfIdf(deserialized) {}

/**
 * @param {string|!Array<string>} document
 * @param {string=} key
 * @param {boolean=} restoreCache
 * @return {void}
 */
TfIdf.prototype.addDocument = function(document, key, restoreCache) {};

/**
 * @param {string} path
 * @param {string=} encoding
 * @param {string=} key
 * @param {boolean=} restoreCache
 * @return {void}
 */
TfIdf.prototype.addFileSync = function(path, encoding, key, restoreCache) {};

/**
 * @param {string} terms
 * @param {number} d
 * @return {void}
 */
TfIdf.prototype.tfidf = function(terms, d) {};

/**
 * @param {string|!Array<string>} terms
 * @param {?} callback
 * @return {void}
 */
TfIdf.prototype.tfidfs = function(terms, callback) {};

/**
 * @param {number} d
 * @return {!Array<?>}
 */
TfIdf.prototype.listTerms = function(d) {};

/**
 * @constructor
 * @struct
 * @param {boolean=} caseSensitive
 */
function Trie(caseSensitive) {}

/**
 * @param {string} text
 * @return {boolean}
 */
Trie.prototype.addString = function(text) {};

/**
 * @param {!Array<string>} strings
 * @return {void}
 */
Trie.prototype.addStrings = function(strings) {};

/**
 * @param {string} token
 * @return {boolean}
 */
Trie.prototype.contains = function(token) {};

/**
 * @param {string} text
 * @return {!Array<string>}
 */
Trie.prototype.findPrefix = function(text) {};

/**
 * @param {string} text
 * @return {!Array<string>}
 */
Trie.prototype.findMatchesOnPath = function(text) {};

/**
 * @param {string} text
 * @return {!Array<string>}
 */
Trie.prototype.keysWithPrefix = function(text) {};
/**
 * @constructor
 * @struct
 */
function EdgeWeightedDigraph() {}

/**
 * @param {number} start
 * @param {number} end
 * @param {number} weight
 * @return {void}
 */
EdgeWeightedDigraph.prototype.add = function(start, end, weight) {};

/**
 * @return {number}
 */
EdgeWeightedDigraph.prototype.v = function() {};

/**
 * @return {number}
 */
EdgeWeightedDigraph.prototype.e = function() {};

/**
 * @constructor
 * @struct
 * @param {!EdgeWeightedDigraph} diagraph
 * @param {number} startVertex
 */
function ShortestPathTree(diagraph, startVertex) {}

/**
 * @param {number} vertex
 * @return {number}
 */
ShortestPathTree.prototype.getDistTo = function(vertex) {};

/**
 * @param {number} vertex
 * @return {boolean}
 */
ShortestPathTree.prototype.hasDistTo = function(vertex) {};

/**
 * @param {number} vertex
 * @return {!Array<number>}
 */
ShortestPathTree.prototype.pathTo = function(vertex) {};

/**
 * @constructor
 * @struct
 * @param {!EdgeWeightedDigraph} diagraph
 * @param {number} startVertex
 */
function LongestPathTree(diagraph, startVertex) {}

/**
 * @param {number} vertex
 * @return {number}
 */
LongestPathTree.prototype.getDistTo = function(vertex) {};

/**
 * @param {number} vertex
 * @return {boolean}
 */
LongestPathTree.prototype.hasDistTo = function(vertex) {};

/**
 * @param {number} vertex
 * @return {!Array<number>}
 */
LongestPathTree.prototype.pathTo = function(vertex) {};
/**
 * @record
 * @struct
 */
function WordNetLookupResults() {}
 /** @type {number} */
WordNetLookupResults.prototype.synsetOffset;
 /** @type {string} */
WordNetLookupResults.prototype.pos;
 /** @type {string} */
WordNetLookupResults.prototype.lemma;
 /** @type {!Array<string>} */
WordNetLookupResults.prototype.synonyms;
 /** @type {string} */
WordNetLookupResults.prototype.gloss;
/**
 * @record
 * @struct
 */
function WordNetLookupCallback() {}

/* TODO: CallSignature:  */
/**
 * @record
 * @struct
 */
function WordNetGetCallback() {}

/* TODO: CallSignature:  */

/**
 * @constructor
 * @struct
 * @param {string=} filename
 */
function WordNet(filename) {}

/**
 * @param {string} word
 * @param {?} callback
 * @return {void}
 */
WordNet.prototype.lookup = function(word, callback) {};

/**
 * @param {number} synsetOffset
 * @param {string} pos
 * @param {?} callback
 * @return {void}
 */
WordNet.prototype.get = function(synsetOffset, pos, callback) {};

/**
 * @constructor
 * @struct
 * @param {!Array<string>} wordlist
 */
function Spellcheck(wordlist) {}

/**
 * @param {string} word
 * @return {boolean}
 */
Spellcheck.prototype.isCorrect = function(word) {};

/**
 * @param {string} word
 * @param {number=} maxDistance
 * @return {!Array<string>}
 */
Spellcheck.prototype.getCorrections = function(word, maxDistance) {};

/**
 * @constructor
 * @struct
 * @param {string} name
 * @param {string} parameter1
 * @param {string=} parameter2
 */
function Predicate(name, parameter1, parameter2) {}
 /** @type {string} */
Predicate.prototype.name;
 /** @type {string} */
Predicate.prototype.parameter1;
 /** @type {string} */
Predicate.prototype.parameter2;
 /** @type {function(!Array<!Array<string>>, number, string): boolean} */
Predicate.prototype.function;

/**
 * @param {!Array<!Array<string>>} tagged_sentence
 * @param {number} position
 * @return {boolean}
 */
Predicate.prototype.evaluate = function(tagged_sentence, position) {};

/**
 * @constructor
 * @struct
 * @param {string} c1
 * @param {string} c2
 * @param {string} predicate
 * @param {string} parameter1
 * @param {string=} parameter2
 */
function TransformationRule(c1, c2, predicate, parameter1, parameter2) {}
 /** @type {!Array<string>} */
TransformationRule.prototype.literal;
 /** @type {!Predicate} */
TransformationRule.prototype.predicate;
 /** @type {string} */
TransformationRule.prototype.old_category;
 /** @type {string} */
TransformationRule.prototype.new_category;

/**
 * @param {!Array<!Array<string>>} tagged_sentence
 * @param {number} position
 * @return {void}
 */
TransformationRule.prototype.apply = function(tagged_sentence, position) {};

/**
 * @constructor
 * @struct
 * @param {string} filename
 */
function RuleSet(filename) {}
 /** @type {!Array<!TransformationRule>} */
RuleSet.prototype.rules;

/**
 * @constructor
 * @struct
 * @param {string} filename
 * @param {string} defaultCategory
 */
function Lexicon(filename, defaultCategory) {}
 /** @type {string} */
Lexicon.prototype.defaultCategory;

/**
 * @param {string} data
 * @return {void}
 */
Lexicon.prototype.parseLexicon = function(data) {};

/**
 * @param {string} word
 * @return {!Array<string>}
 */
Lexicon.prototype.tagWord = function(word) {};

/**
 * @constructor
 * @struct
 * @param {!Lexicon} lexicon
 * @param {!RuleSet} ruleSet
 */
function BrillPOSTagger(lexicon, ruleSet) {}
 /** @type {!Lexicon} */
BrillPOSTagger.prototype.lexicon;
 /** @type {!RuleSet} */
BrillPOSTagger.prototype.ruleSet;

/**
 * @param {!Array<string>} sentence
 * @return {!Array<!Array<string>>}
 */
BrillPOSTagger.prototype.tag = function(sentence) {};
