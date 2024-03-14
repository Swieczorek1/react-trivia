import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import TriviaApp from './TriviaApp';
import SummaryPage from './SummaryPage';
import NavBar from './NavBar';
import './App.css';

function App() {
  const [score, setScore] = useState(0);
  const [questions] = useState([
    {
      question: 'What is the capital of France?',
      answers: ['Paris', 'Berlin', 'London', 'Madrid'],
      correctAnswer: 'Paris',
    },
    {
      question: 'What is the capital of Mexico?',
      answers: ['Riviera Maya', 'Cabo', 'Mexico City', 'Cancun'],
      correctAnswer: 'Mexico City',
    },
    {
      question: 'What is the capital of Argentina?',
      answers: ['Rio', 'El Bagno', 'Buenos Aires', 'Boca Raton'],
      correctAnswer: 'Buenos Aires',
    },
    {
      question: 'What is the capital of Canada?',
      answers: ['Toronto', 'Ottawa', 'Montreal', 'Liverpool'],
      correctAnswer: 'Ottawa',
    },
  ]);
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="/trivia" element={<TriviaApp score={score} setScore={setScore} questions={questions} />} />        
        <Route path="/summary" element={<SummaryPage score={score} totalQuestions={questions.length} />} />
      </Routes>
    </Router>
  );
}

export default App;