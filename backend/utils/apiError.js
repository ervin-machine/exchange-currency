/**
 * ApiError Class
 *
 * This class is used to handle custom API errors throughout the application. 
 * It extends the built-in JavaScript `Error` class and adds additional 
 * properties specific to API error handling.
 *
 * Constructor:
 *
 * - Accepts four arguments:
 *   1. `statusCode` (number): HTTP status code for the error.
 *   2. `message` (string): A descriptive error message.
 *   3. `isOperational` (boolean, optional): Defaults to `true`. Marks the error as operational.
 *   4. `stack` (string, optional): The stack trace. If not provided, the `Error.captureStackTrace` method is used to generate it.
 *
 * Usage Example:
 * 
 * const ApiError = require('./utils/apiError');
 *
 * // Throw a 404 Not Found error
 * throw new ApiError(404, 'Resource not found');
 * 
 */

class ApiError extends Error {
  constructor(statusCode, message, isOperational = true, stack = '') {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

module.exports = ApiError;
