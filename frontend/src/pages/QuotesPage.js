import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddQuoteForm from '../components/AddQuoteForm';
import QuoteList from '../components/QuoteList';

const QuotesPage = () => {
  const [quotes, setQuotes] = useState([]);
  const [isEditing, setIsEditing] = useState(false); // Define isEditing state
  const [editedText, setEditedText] = useState(''); // Define editedText state
  const [editedAuthor, setEditedAuthor] = useState(''); // Define editedAuthor state

  // Function to fetch quotes from the server
  const fetchQuotes = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/quotes`);
      setQuotes(response.data);
    } catch (error) {
      console.error('Error fetching quotes:', error);
    }
  };

  // Effect to fetch quotes when the component mounts or when quotes change
  useEffect(() => {
    fetchQuotes();
  }, []); // Empty dependency array ensures the effect runs only once after mount

  const handleAddQuote = async (newQuote) => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/quotes`, newQuote);
      setQuotes([...quotes, response.data]); // Update state with the newly added quote
    } catch (error) {
      console.error('Error adding quote:', error);
    }
  };

  const handleDeleteQuote = async (id) => {
    try {
      await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/api/quotes/${id}`);
      setQuotes(quotes.filter((quote) => quote._id !== id)); // Remove the deleted quote from state
    } catch (error) {
      console.error('Error deleting quote:', error);
    }
  };

  const handleEditQuote = async (id, updatedQuote) => {
    try {
      // Make a PUT request to update the existing quote
      await axios.put(`${process.env.REACT_APP_BACKEND_URL}/api/quotes/${id}`, updatedQuote);
      // Fetch the updated list of quotes after successful save
      await fetchQuotes();
    } catch (error) {
      console.error('Error updating quote:', error);
    }
  };

  return (
    <div>
      <h1>Quotes Editor</h1>
      <AddQuoteForm onAdd={handleAddQuote}  />
      <QuoteList quotes={quotes} onDelete={handleDeleteQuote} onEdit={handleEditQuote} />
    </div>
  );
};

export default QuotesPage;
