/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/bcryptjs/index.d.ts:

/**
 * Sets the pseudo random number generator to use as a fallback if neither node's crypto module nor the Web Crypto API is available.
 * Please note: It is highly important that the PRNG used is cryptographically secure and that it is seeded properly!
 * @param {function(number): !Array<number>} random Function taking the number of bytes to generate as its sole argument, returning the corresponding array of cryptographically secure random byte values.
 * @return {void}
 */
function setRandomFallback(random) {}

/**
 * Synchronously generates a salt.
 * @throws If a random fallback is required but not set
 * @param {number=} rounds Number of rounds to use, defaults to 10 if omitted
 * @return {string} Resulting salt
 */
function genSaltSync(rounds) {}

/**
 * Asynchronously generates a salt.
 * Asynchronously generates a salt.
 * Asynchronously generates a salt.
 * @param {number|function(!Error, string): void=} rounds_or_callback  Number of rounds to use, defaults to 10 if omitted / Callback receiving the error, if any, and the resulting salt /   Number of rounds to use, defaults to 10 if omitted
 * @param {function(!Error, string): void=} callback Callback receiving the error, if any, and the resulting salt
 * @return {!Promise<string>|void} Promise with resulting salt, if callback has been omitted
 */
function genSalt(rounds_or_callback, callback) {}

/**
 * Synchronously generates a hash for the given string.
 * @param {string} s    String to hash
 * @param {(string|number)=} salt Salt length to generate or salt to use, default to 10
 * @return {string} Resulting hash
 */
function hashSync(s, salt) {}

/**
 * Asynchronously generates a hash for the given string.
 * Asynchronously generates a hash for the given string.
 * @param {string} s                String to hash
 * @param {(string|number)} salt             Salt length to generate or salt to use
 * @param {function(!Error, string): void=} callback         Callback receiving the error, if any, and the resulting hash
 * @param {function(number): void=} progressCallback Callback successively called with the percentage of rounds completed (0.0 - 1.0), maximally once per MAX_EXECUTION_TIME = 100 ms.
 * @return {!Promise<string>|void} Promise with resulting hash, if callback has been omitted
 */
function hash(s, salt, callback, progressCallback) {}

/**
 * Synchronously tests a string against a hash.
 * @param {string} s    String to compare
 * @param {string} hash Hash to test against
 * @return {boolean} true if matching, otherwise false
 */
function compareSync(s, hash) {}

/**
 * Asynchronously compares the given data against the given hash.
 * Asynchronously compares the given data against the given hash.
 * @param {string} s                Data to compare
 * @param {string} hash             Data to be compared to
 * @param {function(!Error, boolean): void=} callback         Callback receiving the error, if any, otherwise the result
 * @param {function(number): void=} progressCallback Callback successively called with the percentage of rounds completed (0.0 - 1.0), maximally once per MAX_EXECUTION_TIME = 100 ms.
 * @return {!Promise<boolean>|void} Promise, if callback has been omitted
 */
function compare(s, hash, callback, progressCallback) {}

/**
 * Gets the number of rounds used to encrypt the specified hash.
 * @param {string} hash Hash to extract the used number of rounds from
 * @return {number} Number of rounds used
 */
function getRounds(hash) {}

/**
 * Gets the salt portion from a hash. Does not validate the hash.
 * @param {string} hash Hash to extract the salt from
 * @return {string} Extracted salt part
 */
function getSalt(hash) {}
