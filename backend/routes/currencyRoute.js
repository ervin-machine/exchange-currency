/**
 * Currency Router
 *
 * This module defines the routes for handling currency-related operations,
 * including currency exchange and retrieving available currency codes. It
 * uses validation middleware to ensure input data integrity and routes the
 * requests to the corresponding controller functions.
 *
 * Routes:
 *
 * 1. POST `/exchange`
 *    - Validates the request body using `ExchangeCurrencyValidator.exchangeCurrency`.
 *    - Calls `ExchangeCurrencyController.exchangeCurrency` to perform the currency exchange operation.
 *
 * 2. GET `/codes`
 *    - Calls `ExchangeCurrencyController.getCurrencyCodes` to retrieve a list of available currency codes.
 *
 */

const express = require('express');
const { currencyController } = require('../controllers');
const validate = require('../middlewares/validate');
const { currencyValidator } = require('../validators');

const router = express.Router();

router.post('/exchange', validate(currencyValidator.exchangeCurrency), currencyController.exchangeCurrency);
router.get('/codes', currencyController.getCurrencyCodes);

module.exports = router;
