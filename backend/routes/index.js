const express = require('express');
const router = express.Router();

const currencyRoute = require('./currencyRoute')

router.use('/currency', currencyRoute);

module.exports = router;