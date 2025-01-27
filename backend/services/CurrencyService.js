/**
* Currency Service Module
* 
* This module provides services for handling currency-related operations, including converting 
* currency and retrieving available currency codes. It interacts with an external API client 
* for fetching the required data and utilizes custom error handling utilities.
* 
* Functions:
* 
* 1. exchangeCurrency(body)
*    - Converts an amount from one currency to another.
*    - Parameters:
*        - `body`: An object containing the sourceCurrency, targetCurrency, and amount.
*    - Makes an API call to fetch the converted currency value.
*    - Throws ApiError if the conversion fails or the target currency is invalid.
*    - Returns the converted currency value if successful.
* 
* 2. getCurrencyCodes()
*    - Retrieves the list of available currency codes.
*    - Makes an API call to fetch the currency codes.
*    - Throws ApiError if the request fails.
*    - Returns the list of currency codes if successful.
* 
* Example Usage:
* 
* const currencyService = require('./currencyService');
* 
* // Convert currency
* currencyService.exchangeCurrency({ sourceCurrency: 'USD', targetCurrency: 'EUR', amount: 100 })
*   .then(exchangedCurrency => console.log(exchangedCurrency))
*   .catch(err => console.error(err));
* 
* // Get available currency codes
* currencyService.getCurrencyCodes()
*   .then(codes => console.log(codes))
*   .catch(err => console.error(err));
*/                                                                                                                                                                                                                                                                                                         

const { apiClient } = require('../utils/api')
const { BadRequestError } = require('../utils/errors')
const ENDPOINTS = require('../constants/endpoints');

exports.exchangeCurrency = async (body) => {
    const { sourceCurrency, targetCurrency, amount } = body;
    
    const exchangedCurrency = await apiClient.get(`${ENDPOINTS.CURRENCY.PAIR}/${sourceCurrency}/${targetCurrency}/${amount}`);
    if (!exchangedCurrency) throw BadRequestError('Invalid target currency');
    return exchangedCurrency.data
}

exports.getCurrencyCodes = async () => {
    const currencyCodes = await apiClient.get(ENDPOINTS.CURRENCY.CODES);
    if (!currencyCodes) throw BadRequestError('Invalid request');
    return currencyCodes.data
}