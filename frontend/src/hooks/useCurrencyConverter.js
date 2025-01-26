import { useState, useCallback, useEffect } from 'react';
import useDebounce from '../utils/useDebounce';
import { exchangeCurrency, getCurrencyCodes } from '../services/currencyService';

/**
 * Custom hook to manage state and logic for currency conversion
 * @returns {Object} - State values and functions for currency conversion
 */
const useCurrencyConverter = () => {
  const [sourceCurrency, setSourceCurrency] = useState('USD'); // State for the source currency
  const [targetCurrency, setTargetCurrency] = useState('EUR'); // State for the target currency
  const [amount, setAmount] = useState('1'); // State for the input amount
  const [convertedAmount, setConvertedAmount] = useState(null); // State for the converted amount
  const [error, setError] = useState(''); // State for error messages
  const [currencyCodes, setCurrencyCodes] = useState([]); // State for supported currency codes

  const debouncedAmount = useDebounce(amount, 500); // Debounces the amount input to optimize API calls

  /**
   * Fetches the converted amount from the API
   */
  const fetchConvertedAmount = useCallback(async () => {
    if (!debouncedAmount || !sourceCurrency || !targetCurrency) return;

    try {
      setError('');
      const response = await exchangeCurrency(sourceCurrency, targetCurrency, parseFloat(debouncedAmount));
      setConvertedAmount(response.data.conversion_result);
    } catch (err) {
      setConvertedAmount(null);
      setError(err.response?.data?.error || 'Error converting currency');
    }
  }, [debouncedAmount, sourceCurrency, targetCurrency]);

  // Swaps sourceCurrency and targetCurrency
  const handleSwap = () => {
    setSourceCurrency(targetCurrency)
    setTargetCurrency(sourceCurrency)
  }

  const handleAmount = (e) => {
    const value = e.target.value;
    const isValidNumber = /^[0-9]*\.?[0-9]*$/;
    if (!isValidNumber.test(value)) {
      e.preventDefault();
      return;
    }

    // Prevent input of ',' and validate only one '.'
    if (value.includes(',') || (value.split('.').length > 2)) {
      e.preventDefault();
      return;
    }

    setAmount(value)
  }

  /**
   * Fetches the supported currency codes from the API
   */
  const fetchCurrencyCodes = useCallback(async () => {
    try {
      const response = await getCurrencyCodes();
      setCurrencyCodes(response.data.supported_codes);
    } catch (err) {
      console.error('Error fetching currency codes:', err);
    }
  }, []);

  // Automatically fetches converted amount whenever input or currencies change
  useEffect(() => {
    fetchConvertedAmount();
  }, [debouncedAmount, fetchConvertedAmount]);

  // Fetches currency codes on component mount
  useEffect(() => {
    fetchCurrencyCodes();
  }, [fetchCurrencyCodes]);

  return {
    sourceCurrency,
    targetCurrency,
    amount,
    convertedAmount,
    error,
    currencyCodes,
    setSourceCurrency,
    setTargetCurrency,
    handleSwap,
    handleAmount
  };
};

export default useCurrencyConverter;
