const CurrencyService = require('../services/CurrencyService')

// --------------- me ---------------- //
exports.exchangeCurrency = async (req, res) => {
    const exchangedCurrency = await CurrencyService.exchangeCurrency(req.body);
    res.status(200).json(exchangedCurrency);
};

exports.getCurrencyCodes = async (req, res) => {
    const currencyCodes = await CurrencyService.getCurrencyCodes();
    res.status(200).json(currencyCodes);
};