import React, { useState } from 'react';

const AddQuoteForm = ({ onAdd }) => {
  const [text, setText] = useState('');
  const [author, setAuthor] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!text.trim() || !author.trim()) {
      setError('Please enter both the quote text and the author.');
    } else if (!isValidQuote(text)) {
      setError('Please enter a valid quote text (max 100 characters).');
    } else if (!isValidAuthor(author)) {
      setError('Please enter a valid author name (max 50 characters).');
    } else {
      // Call the onAdd function with the new quote
      onAdd({ text, author });
      // Reset the form fields and error message after successful submission
      setText('');
      setAuthor('');
      setError('');
    }
  };

  // Function to validate the quote text
  const isValidQuote = (quote) => {
    return quote.length <= 100;
  };

  // Function to validate the author name
  const isValidAuthor = (author) => {
    return author.length <= 50;
  };

  return (
    <form onSubmit={handleSubmit} className="add-quote-form">
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter quote text" />
      <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Enter author" />
      <button type="submit">Add Quote</button>
      {error && <p className="error-message">{error}</p>}
    </form>
  );
};

export default AddQuoteForm;
