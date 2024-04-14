const express = require('express');
const router = express.Router();
const quoteController = require('../controllers/quoteController');

// Routes
router.get('/', quoteController.getAllQuotes);
router.post('/', quoteController.addQuote);
router.put('/:id', quoteController.updateQuote);
router.delete('/:id', quoteController.deleteQuote);

module.exports = router;
