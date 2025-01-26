/**
 * pick Utility Function
 *
 * This function creates a new object composed of specific properties 
 * picked from the provided object. It is particularly useful for 
 * filtering objects to include only the desired keys.
 *
 * Functionality:
 * 
 * - Accepts an object and an array of keys.
 * - Iterates over the array of keys and checks if the key exists in the object.
 * - If the key exists, its value is added to the resulting object.
 * - Returns the resulting object containing only the picked properties.
 *
 * Returns:
 * - An object containing only the properties specified in the `keys` array.
 *
 * Example Usage:
 * 
 * const pick = require('./utils/pick');
 * 
 * const sourceObject = {
 *   sourceCurrency: "USD",
 *   targetCurrency: "EUR",
 *   amount: 30
 * };
 *
 * const keysToPick = ['sourceCurrency', 'targetCurrency', 'amount'];
 * const result = pick(sourceObject, keysToPick);
 * 
 * console.log(result);
 * // Output: { sourceCurrency: "USD", targetCurrency: 'EUR', amount: 30 }
 *
 */

const pick = (object, keys) => {
  return keys.reduce((obj, key) => {
    if (object && Object.prototype.hasOwnProperty.call(object, key)) {
      // Add the key-value pair to the resulting object
      obj[key] = object[key];
    }
    return obj;
  }, {});
};

module.exports = pick;
