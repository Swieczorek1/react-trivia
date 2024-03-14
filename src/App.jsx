// App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import TriviaApp from './TriviaApp';
import SummaryPage from './SummaryPage';
import NavBar from './NavBar';
import './App.css';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trivia" element={<TriviaApp />} />
        <Route path="/summary" component={SummaryPage} />
      </Routes>
    </Router>
  );
}

export default App;
