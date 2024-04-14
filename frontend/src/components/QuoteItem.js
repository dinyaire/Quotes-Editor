import React, { useState } from 'react';

const QuoteItem = ({ quote, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(quote.text);
  const [editedAuthor, setEditedAuthor] = useState(quote.author);

  const handleDelete = async () => {
    onDelete(quote._id);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    try {
      onEdit(quote._id, {text: editedText, author: editedAuthor}); // Notify the parent component that editing has started
      setIsEditing(false); // Reset isEditing state
    } catch (error) {
      console.error('Error updating quote:', error);
    }
  };

  return (
    <li>
      {isEditing ? (
        <>
          <input type="text" value={editedText} onChange={(e) => setEditedText(e.target.value)} />
          <input type="text" value={editedAuthor} onChange={(e) => setEditedAuthor(e.target.value)} />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          "{quote.text}" - {quote.author}
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </>
      )}
    </li>
  );
};

export default QuoteItem;
