import apiClient from "../utils/api";

/**
 * Exchanges currency by making a POST request to the API
 * @param {string} source - Source currency code
 * @param {string} target - Target currency code
 * @param {number} amount - Amount to convert
 * @returns {Promise} - API response
 */
export const exchangeCurrency = async (source, target, amount) => {
  const response = await apiClient.post('/currency/exchange', {
    sourceCurrency: source,
    targetCurrency: target,
    amount,
  });
  return response;
};

/**
 * Fetches the list of supported currency codes from the API
 * @returns {Promise} - API response with supported currency codes
 */
export const getCurrencyCodes = async () => {
  const response = await apiClient.get('currency/codes');
  return response;
};
