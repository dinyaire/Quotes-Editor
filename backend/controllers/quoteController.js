const Quote = require('../models/Quote');

// Controller methods
module.exports = {
  getAllQuotes: async (req, res) => {
    try {
      const quotes = await Quote.find();
      res.json(quotes);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  addQuote: async (req, res) => {
    const { text, author } = req.body;
    try {
      const newQuote = new Quote({ text, author });
      await newQuote.save();
      res.status(201).json(newQuote);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  deleteQuote: async (req, res) => {
    const { id } = req.params;
    try {
      await Quote.findByIdAndDelete(id);
      res.json({ message: 'Quote deleted' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  updateQuote: async (req, res) => {
    const { id } = req.params;
    const { text, author } = req.body;
    try {
      const updatedQuote = await Quote.findByIdAndUpdate(id, { text, author }, { new: true });
      res.json(updatedQuote);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },
};
