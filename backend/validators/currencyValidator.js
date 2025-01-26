/**
 * Validation Schema Module
 * 
 * This module defines and exports validation schemas for API request payloads
 * using the Joi library. These schemas ensure that incoming data adheres
 * to the expected format and contains all required fields.
 * 
 * Validation Schema:
 * 
 * 1. exchangeCurrency
 *    - Validates the payload for the currency exchange API endpoint.
 *    - Ensures the presence of required fields and validates their types.
 *    - Fields:
 *        - `sourceCurrency` (string, required): The currency to convert from.
 *        - `targetCurrency` (string, required): The currency to convert to.
 *        - `amount` (number, required): The amount to be converted.
 * 
 * Example Usage:
 * 
 * const { exchangeCurrency } = require('./validationSchema');
 * 
 * app.post('/exchange', validate(exchangeCurrency), (req, res) => {
 *   // Handle the request
 * });
 */

const Joi = require('joi');

const exchangeCurrency = {
  body: Joi.object().keys({
    sourceCurrency: Joi.string().required(),
    targetCurrency: Joi.string().required(),
    amount: Joi.number().required()
  }),
};

module.exports = {
    exchangeCurrency,
}