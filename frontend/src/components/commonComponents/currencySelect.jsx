import React from 'react';

/**
 * A reusable dropdown component for selecting currencies
 * @param {Object} props
 * @param {string} props.label - Label for the dropdown
 * @param {string} props.value - Current selected value
 * @param {function} props.onChange - Callback for handling changes
 * @param {Array} props.currencyCodes - Array of available currency codes
 */
const CurrencySelect = ({ role, value, onChange, currencyCodes }) => (
  <div style={{ marginBottom: '10px' }}>
    <select 
      className='block py-2.5 px-0 w-full text-sm text-black-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer'
      value={value} 
      onChange={onChange} 
      role={role}
      aria-label="Currency Selector">
      <option value="">-- Select a currency --</option>
      {currencyCodes?.map((currency, index) => (
        <option key={index} value={currency[0]}>
          {currency[0]} - {currency[1]}
        </option>
      ))}
    </select>
  </div>
);

export default CurrencySelect;
