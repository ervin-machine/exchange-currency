/**
 * Request Validation Middleware
 *
 * This middleware validates the incoming HTTP request against a specified Joi schema.
 * It ensures that the `params`, `query`, and `body` of the request conform to the expected structure and rules.
 * If validation fails, an error is thrown with a 400 Bad Request status.
 *
 * Functionality:
 * - Picks the validation rules for `params`, `query`, and `body` from the provided schema.
 * - Extracts the corresponding parts of the request (`req.params`, `req.query`, `req.body`).
 * - Validates the extracted object using Joi, compiling the schema and enabling detailed error messages.
 * - If validation succeeds:
 *   - The validated values are assigned back to the request object (`req`).
 *   - The next middleware is called.
 * - If validation fails:
 *   - An `ApiError` is created with a 400 status code and a descriptive error message.
 *   - The error is passed to the error-handling middleware.
 *
 * Example Usage:
 * - Define a Joi schema for validating a POST request body:
 *   ```
 *   const Joi = require('joi');
 *   const validate = require('./middlewares/validate');
 *
 *   const schema = {
 *     body: Joi.object().keys({
 *       sourceCurrency: Joi.string().required(),
 *       targetCurrency: Joi.string().required(),
 *       amount: Joi.number().required()
 *     }),
 *   };
 *
 *   router.post('/exchange', validate(schema), currencyController.exchangeCurrency);
 *   ```
 */

const Joi = require('joi');
const pick = require('../utils/pick');
const { BadRequestError } = require('../utils/errors')
const validate = (schema) => (req, res, next) => {
  // Extract relevant schemas for validation
  const validSchema = pick(schema, ['params', 'query', 'body']);
  const object = pick(req, Object.keys(validSchema));

  // Validate the extracted object against the compiled schema
  const { value, error } = Joi.compile(validSchema)
    .prefs({ errors: { label: 'key' }, abortEarly: false })
    .validate(object);

  // Handle validation errors
  if (error) {
    const errorMessage = error.details.map((details) => details.message).join(', ');
    return next(BadRequestError(errorMessage));
  }

  // Assign validated values back to the request object and proceed
  Object.assign(req, value);
  return next();
};

module.exports = validate;
