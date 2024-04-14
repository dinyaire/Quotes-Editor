import React from 'react';
import QuoteItem from './QuoteItem';

const QuoteList = ({ quotes, onEdit, onDelete }) => {
  return (
    <ul>
      {quotes.map(quote => (
        <QuoteItem key={quote._id} quote={quote} onDelete={onDelete} onEdit={onEdit}/>
      ))}
    </ul>
  );
};

export default QuoteList;
