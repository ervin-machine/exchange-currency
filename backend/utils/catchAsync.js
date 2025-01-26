/**
 * catchAsync Utility Function
 *
 * This function is a higher-order utility used to wrap asynchronous route handler functions 
 * in Express.js to simplify error handling. It ensures that any errors occurring 
 * within the asynchronous function are properly passed to the next middleware 
 * (e.g., an error-handling middleware).
 *
 * Functionality:
 *
 * - Accepts an asynchronous function `fn` as input.
 * - Returns a new function that executes the input function and catches any errors 
 *   using a `Promise.resolve()`. If an error is caught, it forwards the error to the 
 *   next middleware using the `next()` function.
 *
 * Example Usage:
 * 
 * const catchAsync = require('./utils/catchAsync');
 *
 * // Wrapping an async route handler
 * router.get(
 *   '/example',
 *   catchAsync(async (req, res, next) => {
 *     const data = await fetchData(); // Some async operation
 *     res.json(data);
 *   })
 * );
 *
 */

const catchAsync = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch((err) => next(err));
};

module.exports = catchAsync;
