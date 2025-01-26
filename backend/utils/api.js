/**
 * API Client Module
 * 
 * This module sets up and exports a pre-configured Axios instance to communicate
 * with the currency exchange API. It loads environment variables for configuration
 * and ensures all HTTP requests use the specified base URL.
 * 
 * Key Features:
 * - Loads environment variables from the `.env` file located two directories above
 *   the current file's location using the `dotenv` package.
 * - Configures an Axios instance with the base URL defined in the `EXCHANGE_CURRENCY_API`
 *   environment variable.
 * - Provides a reusable Axios client (`apiClient`) for consistent API interactions.
 * 
 * Example Usage:
 * 
 * const { apiClient } = require('./api');
 * 
 * async function fetchExchangeRates() {
 *   try {
 *     const response = await apiClient.get('/path-to-endpoint');
 *     console.log(response.data);
 *   } catch (error) {
 *     console.error('Error fetching exchange rates:', error);
 *   }
 * }
 */

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
