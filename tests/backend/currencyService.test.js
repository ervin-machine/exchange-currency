const { exchangeCurrency, getCurrencyCodes } = require('../../backend/services/currencyService');
const { apiClient } = require('../../backend/utils/api');

jest.mock('../../backend/utils/api', () => ({
  apiClient: {
    get: jest.fn(),
  },
}));

describe('Currency Service Tests', () => {
  describe('exchangeCurrency', () => {
    it('should return converted currency when valid input is provided', async () => {
      apiClient.get.mockResolvedValue({ data: { converted: 100.5 } });

      const body = {
        sourceCurrency: 'USD',
        targetCurrency: 'EUR',
        amount: 100,
      };

      const result = await exchangeCurrency(body);
      expect(result).toEqual({ converted: 100.5 });
      expect(apiClient.get).toHaveBeenCalledWith('/pair/USD/EUR/100');
    });

    it('should throw an error for exchaning currency', async () => {
      apiClient.get.mockResolvedValue(null);

      const body = {
        sourceCurrency: 'USD',
        targetCurrency: 'INVALID',
        amount: 100,
      };

      await expect(exchangeCurrency(body)).rejects.toThrow('Error exchanging currency');
    });
  });

  describe('getCurrencyCodes', () => {
    it('should return currency codes', async () => {
      const mockData = [
        ['USD', 'United States Dollar'],
        ['EUR', 'Euro'],
      ];
      apiClient.get.mockResolvedValue({ data: mockData });

      const result = await getCurrencyCodes();
      expect(result).toEqual(mockData);
      expect(apiClient.get).toHaveBeenCalledWith('/codes');
    });
  });
});
