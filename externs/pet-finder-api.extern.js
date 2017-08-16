/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/pet-finder-api/index.d.ts:

/**
 * @param {string} api_key
 * @param {string} api_secret
 * @param {?=} options
 * @return {!petFinder.PetFinder}
 */
function petFinder(api_key, api_secret, options) {}
/**
 * @record
 * @struct
 */
petFinder.PetFinder = function() {};

/**
 * @param {string} animal
 * @param {function(?, !Array<string>): void} callback
 * @return {void}
 */
petFinder.PetFinder.prototype.getBreedList = function(animal, callback) {};

/**
 * @param {number} petId
 * @param {?} options
 * @param {function(?, !petFinder.Pet): void} callback
 * @return {void}
 */
petFinder.PetFinder.prototype.getPet = function(petId, options, callback) {};

/**
 * @param {?} options
 * @param {function(?, !petFinder.Pet): void} callback
 * @return {void}
 */
petFinder.PetFinder.prototype.getRandomPet = function(options, callback) {};

/**
 * @param {?} options
 * @param {function(?, !Array<!petFinder.Pet>): void} callback
 * @return {void}
 */
petFinder.PetFinder.prototype.findPet = function(options, callback) {};

/**
 * @param {string} location
 * @param {?} options
 * @param {function(?, !Array<!petFinder.Shelter>): void} callback
 * @return {void}
 */
petFinder.PetFinder.prototype.findShelter = function(location, options, callback) {};

/**
 * @param {string} shelterId
 * @param {?} options
 * @param {function(?, !petFinder.Shelter): void} callback
 * @return {void}
 */
petFinder.PetFinder.prototype.getShelter = function(shelterId, options, callback) {};

/**
 * @param {string} shelterId
 * @param {?} options
 * @param {function(?, !Array<!petFinder.Pet>): void} callback
 * @return {void}
 */
petFinder.PetFinder.prototype.getPetsInShelter = function(shelterId, options, callback) {};

/**
 * @param {string} animal
 * @param {string} breed
 * @param {?} options
 * @param {function(?, !Array<!petFinder.Shelter>): void} callback
 * @return {void}
 */
petFinder.PetFinder.prototype.getSheltersWithBreeds = function(animal, breed, options, callback) {};
/**
 * @record
 * @struct
 */
petFinder.Pet = function() {};
 /** @type {number} */
petFinder.Pet.prototype.id;
 /** @type {string} */
petFinder.Pet.prototype.name;
 /** @type {string} */
petFinder.Pet.prototype.status;
 /** @type {string} */
petFinder.Pet.prototype.description;
 /** @type {string} */
petFinder.Pet.prototype.sex;
 /** @type {string} */
petFinder.Pet.prototype.age;
 /** @type {string} */
petFinder.Pet.prototype.size;
 /** @type {string} */
petFinder.Pet.prototype.mix;
 /** @type {string} */
petFinder.Pet.prototype.animal;
 /** @type {string} */
petFinder.Pet.prototype.shelterId;
 /** @type {string} */
petFinder.Pet.prototype.shelterPetId;
 /** @type {!petFinder.Contact} */
petFinder.Pet.prototype.contact;
 /** @type {!Array<string>} */
petFinder.Pet.prototype.options;
 /** @type {!Array<string>} */
petFinder.Pet.prototype.breeds;
 /** @type {?} */
petFinder.Pet.prototype.media;
/**
 * @record
 * @struct
 */
petFinder.Shelter = function() {};
 /** @type {string} */
petFinder.Shelter.prototype.id;
 /** @type {string} */
petFinder.Shelter.prototype.name;
 /** @type {string} */
petFinder.Shelter.prototype.email;
 /** @type {string} */
petFinder.Shelter.prototype.phone;
 /** @type {string} */
petFinder.Shelter.prototype.fax;
 /** @type {string} */
petFinder.Shelter.prototype.address1;
 /** @type {string} */
petFinder.Shelter.prototype.address2;
 /** @type {string} */
petFinder.Shelter.prototype.city;
 /** @type {string} */
petFinder.Shelter.prototype.state;
 /** @type {string} */
petFinder.Shelter.prototype.zip;
 /** @type {string} */
petFinder.Shelter.prototype.country;
 /** @type {number} */
petFinder.Shelter.prototype.longitude;
 /** @type {number} */
petFinder.Shelter.prototype.latitude;
/**
 * @record
 * @struct
 */
petFinder.Contact = function() {};
 /** @type {string} */
petFinder.Contact.prototype.email;
 /** @type {string} */
petFinder.Contact.prototype.phone;
 /** @type {string} */
petFinder.Contact.prototype.fax;
 /** @type {string} */
petFinder.Contact.prototype.address1;
 /** @type {string} */
petFinder.Contact.prototype.address2;
 /** @type {string} */
petFinder.Contact.prototype.city;
 /** @type {string} */
petFinder.Contact.prototype.state;
 /** @type {string} */
petFinder.Contact.prototype.zip;

/* TODO: ExportAssignment in  */
