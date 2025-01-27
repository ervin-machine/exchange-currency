const express = require('express');
const CurrencyController = require('../controllers/CurrencyController');
const validate = require('../middlewares/validate');
const CurrencyValidator= require('../validators/CurrencyValidator');

const router = express.Router();

// me
router.post('/exchange', validate(CurrencyValidator.exchangeCurrency), CurrencyController.exchangeCurrency);
router.get('/codes', CurrencyController.getCurrencyCodes);

module.exports = router;
