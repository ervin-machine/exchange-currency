import React from 'react';

const ConvertedCurrency = (props) => {
    const { convertedCurrency } = props
  return (
    <div className="max-w-2xl mx-auto p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Converted Currency Details</h2>
      <ul className="space-y-4">
        <li className="flex justify-between">
          <span className="font-medium">Base Code:</span>
          <span>{convertedCurrency.base_code}</span>
        </li>
        <li className="flex justify-between">
          <span className="font-medium">Conversion Rate:</span>
          <span>{convertedCurrency.conversion_rate}</span>
        </li>
        <li className="flex justify-between">
          <span className="font-medium">Conversion Result:</span>
          <span>{convertedCurrency.conversion_result}</span>
        </li>
        <li className="flex justify-between">
          <span className="font-medium">Target Code:</span>
          <span>{convertedCurrency.target_code}</span>
        </li>
        <li className="flex justify-between">
          <span className="font-medium">Documentation:</span>
          <a href={convertedCurrency.documentation} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            View Documentation
          </a>
        </li>
        <li className="flex justify-between">
          <span className="font-medium">Terms of Use:</span>
          <a href={convertedCurrency.terms_of_use} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            View Terms of Use
          </a>
        </li>
        <li className="flex justify-between">
          <span className="font-medium">Last Update (UTC):</span>
          <span>{convertedCurrency.time_last_update_utc}</span>
        </li>
        <li className="flex justify-between">
          <span className="font-medium">Next Update (UTC):</span>
          <span>{convertedCurrency.time_next_update_utc}</span>
        </li>
      </ul>
    </div>
  );
};

export default ConvertedCurrency;
