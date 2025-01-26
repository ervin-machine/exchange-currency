/**
 * Exchange Currency Controller
 *
 * This module contains controller functions for handling currency-related operations,
 * such as exchanging currency and retrieving available currency codes. These controllers
 * interact with the `ExchangeCurrencyService` to perform the business logic and send
 * appropriate responses to the client.
 *
 * Functions:
 *
 * 1. exchangeCurrency(req, res)
 *    - Handles the request to exchange an amount from one currency to another.
 *    - Uses the `ExchangeCurrencyService.exchangeCurrency` service function to perform the operation.
 *    - Sends the converted currency details to the client or an error message if the operation fails.
 *
 * 2. getCurrencyCodes(req, res)
 *    - Handles the request to retrieve all available currency codes.
 *    - Uses the `ExchangeCurrencyService.getCurrencyCodes` service function to fetch the data.
 *    - Sends the list of currency codes to the client or an error message if the operation fails.
 *
 * Example Usage:
 *
 * const { currencyController } = require('./controllers');
 *
 * app.post('/exchange', currencyController.exchangeCurrency);
 * app.get('/currency-codes', currencyController.getCurrencyCodes);
 */

const { currencyService } = require('../services');
const catchAsync = require('../utils/catchAsync');
const { status } = require('http-status');

const exchangeCurrency = catchAsync(async (req, res) => {
  try {
    const exchangedCurrency = await currencyService.exchangeCurrency(req.body);
    res.status(status.CREATED).send(exchangedCurrency);
  } catch (err) {
    console.log("Error:", err);
    res.status(status.INTERNAL_SERVER_ERROR).send({ 
      message: "Failed to exchange currency", 
      error: err.message 
    });
  }
});

const getCurrencyCodes = catchAsync(async (req, res) => {
  try {
    const currencyCodes = await currencyService.getCurrencyCodes();
    res.status(status.OK).send(currencyCodes);
  } catch (err) {
    console.log("Error:", err);
    res.status(status.INTERNAL_SERVER_ERROR).send({ 
      message: "Failed to get currency codes", 
      error: err.message 
    });
  }
});

module.exports = {
  exchangeCurrency,
  getCurrencyCodes,
};
