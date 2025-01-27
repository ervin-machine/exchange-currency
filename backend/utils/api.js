const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') }); // Load environment variables

const axios = require('axios');

const EXCHANGE_CURRENCY_API = process.env.EXCHANGE_CURRENCY_API; // Base URL for the currency exchange API

/**
 * Configured Axios client with the base URL set to the exchange API endpoint.
 */
const apiClient = axios.create({
    baseURL: EXCHANGE_CURRENCY_API, // Backend URL
});

module.exports = {
    apiClient,
};
