import React from 'react';
import useCurrencyConverter from '../../hooks/useCurrencyConverter';
import CurrencySelect from '../commonComponents/currencySelect';

/**
 * Main component for currency conversion
 * Handles user input and displays conversion results
 */
const CurrencyConverter = () => {
  const {
    sourceCurrency,
    targetCurrency,
    amount,
    convertedAmount,
    error,
    currencyCodes,
    setSourceCurrency,
    setTargetCurrency,
    handleAmount, // This should be connected to the input's onChange
    handleSwap
  } = useCurrencyConverter();

  return (
    <div className="flex flex-col items-center space-y-4 justify-center content-center h-full">
      {/* Source Currency Dropdown */}
      <CurrencySelect
        value={sourceCurrency}
        onChange={(e) => setSourceCurrency(e.target.value)}
        currencyCodes={currencyCodes}
        role="source-combobox"
      />
      
      <button 
        onClick={handleSwap} 
        className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
          SWAP
      </button>

      {/* Target Currency Dropdown */}
      <CurrencySelect
        value={targetCurrency}
        onChange={(e) => setTargetCurrency(e.target.value)}
        currencyCodes={currencyCodes}
        role="target-combobox"
      />

      {/* Input for Amount */}
      <div style={{ marginBottom: '10px' }}>
        <input
          type="string"
          value={amount}
          onChange={handleAmount}
          role="currency-amount"
          placeholder='amount'
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        />
      </div>

      {/* Display Converted Amount */}
      {convertedAmount !== null && (
        <div>
          <h3>Converted Amount: {convertedAmount} {targetCurrency}</h3>
        </div>
      )}

      {/* Error Message */}
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  );
};

export default CurrencyConverter;
