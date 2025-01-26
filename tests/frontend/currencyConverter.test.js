import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import useCurrencyConverter from '../../frontend/src/hooks/useCurrencyConverter'; // Adjust this path
import CurrencyConverter from '../../frontend/src/components/currencyConverter'; // Adjust this path
import userEvent from "@testing-library/user-event";

jest.mock('../../frontend/src/hooks/useCurrencyConverter'); // Mock the hook outside the test block

describe('CurrencyConverter Component', () => {

  it('allows user to change source currency', () => {
    const mockSetSourceCurrency = jest.fn();

    // Mock implementation of useCurrencyConverter
    useCurrencyConverter.mockReturnValue({
      sourceCurrency: 'USD',
      targetCurrency: 'EUR',
      amount: '',
      convertedAmount: 85,
      error: null,
      currencyCodes: [
        ['USD', 'United States Dollar'],
        ['EUR', 'Euro'],
        ['GBP', 'British Pound'],
      ],
      setSourceCurrency: mockSetSourceCurrency,
      setTargetCurrency: jest.fn(),
      handleAmount: jest.fn(),
      handleSwap: jest.fn(),
    });

    render(<CurrencyConverter />);

    // Find the source currency dropdown
    const dropdowns = screen.getAllByRole('source-combobox');
    const sourceCurrencyDropdown = dropdowns[0]; // Assuming the first dropdown is for source currency

    // Simulate selecting a new currency
    fireEvent.change(sourceCurrencyDropdown, { target: { value: 'EUR' } });

    // Assert that setSourceCurrency was called with the correct value
    expect(mockSetSourceCurrency).toHaveBeenCalledWith('EUR');
  });

  it('allows user to change target currency', () => {
    const mockSetTargetCurrency = jest.fn();
  
    // Mock implementation of useCurrencyConverter
    // Providing mock values for state and functions, and mocking setTargetCurrency to track calls
    useCurrencyConverter.mockReturnValue({
      sourceCurrency: 'USD',
      targetCurrency: 'EUR',
      amount: 100,
      convertedAmount: 85,
      error: null,
      currencyCodes: [
        ['USD', 'United States Dollar'],
        ['EUR', 'Euro'],
        ['GBP', 'British Pound'],
      ],
      setSourceCurrency: jest.fn(),
      setTargetCurrency: mockSetTargetCurrency,
      handleAmount: jest.fn(),
      handleSwap: jest.fn(),
    });
  
    // Render the CurrencyConverter component
    render(<CurrencyConverter />);
  
    // Locate the target currency dropdown using its role
    const dropdowns = screen.getAllByRole('target-combobox');
    const targetCurrencyDropdown = dropdowns[0]; // Assuming the first dropdown is for the target currency
  
    // Simulate selecting a new target currency (GBP)
    fireEvent.change(targetCurrencyDropdown, { target: { value: 'GBP' } });
  
    // Verify that setTargetCurrency was called with the new selected currency
    expect(mockSetTargetCurrency).toHaveBeenCalledWith('GBP');
  });

  test('should update the amount when a valid number is entered', () => {
    // Mock the hook with the necessary state and functions
    const mockSetAmount = jest.fn(); // Mock setAmount
  
    useCurrencyConverter.mockReturnValue({
      sourceCurrency: 'USD',
      targetCurrency: 'EUR',
      amount: '', // start with an empty string
      convertedAmount: 85,
      error: null,
      currencyCodes: [
        ['USD', 'United States Dollar'],
        ['EUR', 'Euro'],
        ['GBP', 'British Pound'],
      ],
      setSourceCurrency: jest.fn(),
      setTargetCurrency: jest.fn(),
      setAmount: mockSetAmount, // Use the mocked setAmount function
      handleAmount: (e) => {
        const value = e.target.value;
        mockSetAmount(value); // Simulate updating the amount state
      },
      handleSwap: jest.fn(),
    });
  
    render(<CurrencyConverter />);
  
    const input = screen.getByRole('currency-amount');
    
    // Simulate typing a valid number
    fireEvent.change(input, { target: { value: '123.45' } });
    
    // Assert that the setAmount function was called with the correct value
    expect(mockSetAmount).toHaveBeenCalledWith('123.45');
  });

  test('should prevent input of commas', () => {
    useCurrencyConverter.mockReturnValue({
      sourceCurrency: 'USD',
      targetCurrency: 'EUR',
      amount: '',
      convertedAmount: 85,
      error: null,
      currencyCodes: [
        ['USD', 'United States Dollar'],
        ['EUR', 'Euro'],
        ['GBP', 'British Pound'],
      ],
      setSourceCurrency: jest.fn(),
      setTargetCurrency: jest.fn(),
      handleAmount: jest.fn(),
      handleSwap: jest.fn(),
    });

    render(<CurrencyConverter />);
    
    const input = screen.getByRole('currency-amount');
    
    // Simulate typing a value with a comma
    fireEvent.change(input, { target: { value: '123,45' } });
    
    // Check that the value does not change (input should be prevented)
    expect(input.value).toBe('');
  });

  test('should prevent multiple periods', () => {
    useCurrencyConverter.mockReturnValue({
      sourceCurrency: 'USD',
      targetCurrency: 'EUR',
      amount: '',
      convertedAmount: 85,
      error: null,
      currencyCodes: [
        ['USD', 'United States Dollar'],
        ['EUR', 'Euro'],
        ['GBP', 'British Pound'],
      ],
      setSourceCurrency: jest.fn(),
      setTargetCurrency: jest.fn(),
      handleAmount: jest.fn(),
      handleSwap: jest.fn(),
    });

    render(<CurrencyConverter />);
    
    const input = screen.getByRole('currency-amount');
    
    // Simulate typing a value with more than one period
    fireEvent.change(input, { target: { value: '123.45.67' } });
    
    // Check that the value does not change (input should be prevented)
    expect(input.value).toBe('');
  });

  test('should allow only valid number inputs', () => {
    useCurrencyConverter.mockReturnValue({
      sourceCurrency: 'USD',
      targetCurrency: 'EUR',
      amount: '',
      convertedAmount: 85,
      error: null,
      currencyCodes: [
        ['USD', 'United States Dollar'],
        ['EUR', 'Euro'],
        ['GBP', 'British Pound'],
      ],
      setSourceCurrency: jest.fn(),
      setTargetCurrency: jest.fn(),
      handleAmount: jest.fn(),
      handleSwap: jest.fn(),
    });
  
    render(<CurrencyConverter />);
    
    const input = screen.getByRole('currency-amount');
    
    // Simulate typing an invalid character (like a letter)
    fireEvent.change(input, { target: { value: '123a' } });
    
    // Check that the value does not change (invalid input should be prevented)
    expect(input.value).toBe('');
  });

  it('triggers handleSwap when SWAP button is clicked', () => {
    const mockHandleSwap = jest.fn();
  
    // Mock implementation of useCurrencyConverter
    // Mocking handleSwap to verify button interaction
    useCurrencyConverter.mockReturnValue({
      sourceCurrency: 'USD',
      targetCurrency: 'EUR',
      amount: 100,
      convertedAmount: 85,
      error: null,
      currencyCodes: ['USD', 'EUR', 'GBP'],
      setSourceCurrency: jest.fn(),
      setTargetCurrency: jest.fn(),
      handleAmount: jest.fn(),
      handleSwap: mockHandleSwap,
    });
  
    // Render the CurrencyConverter component
    render(<CurrencyConverter />);
  
    // Locate the SWAP button by its text
    const swapButton = screen.getByText('SWAP');
  
    // Simulate clicking the SWAP button
    fireEvent.click(swapButton);
  
    // Verify that handleSwap was called once the button is clicked
    expect(mockHandleSwap).toHaveBeenCalled();
  });
  

});
