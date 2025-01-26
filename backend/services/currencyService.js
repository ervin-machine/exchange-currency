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
*   .then(convertedCurrency => console.log(convertedCurrency))
*   .catch(err => console.error(err));
* 
* // Get available currency codes
* currencyService.getCurrencyCodes()
*   .then(codes => console.log(codes))
*   .catch(err => console.error(err));
*/                                                                                                                                                                                                                                                                                                         

const { apiClient } = require('../utils/api')
const { status } = require('http-status');
const ApiError = require('../utils/apiError');

async function exchangeCurrency(body) {
    const { sourceCurrency, targetCurrency, amount } = body;
    try {
        const convertedCurrency = await apiClient.get(`/pair/${sourceCurrency}/${targetCurrency}/${amount}`);

        if (!convertedCurrency) {
            throw new ApiError(status.BAD_REQUEST, 'Invalid target currency');
        }

        return convertedCurrency.data
    } catch (err) {
        console.log("Error: ", err)
        throw new ApiError(status.INTERNAL_SERVER_ERROR, 'Error exchanging currency');
    }
}

async function getCurrencyCodes() {

    try {
        const currencyCodes = await apiClient.get('/codes');

        if (!currencyCodes) {
            throw new ApiError(status.BAD_REQUEST, 'Invalid request');
        }

        return currencyCodes.data
    } catch (err) {
        console.log("Error: ", err)
        throw new ApiError(status.INTERNAL_SERVER_ERROR, 'Error getting codes');
    }
}

module.exports = {
    exchangeCurrency,
    getCurrencyCodes
}