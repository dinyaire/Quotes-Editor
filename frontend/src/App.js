import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import QuotesPage from './pages/QuotesPage';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<QuotesPage />} /> 
      </Routes>
    </Router>
  );
};

export default App;
