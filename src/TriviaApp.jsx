import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'; // Import useHistory
import Question from './Questions';
import './TriviaApp.css'; // Import the CSS file for styling

const TriviaApp = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null); // Initialize selectedAnswer state
  const history = useHistory(); // Initialize useHistory

  const questions = [
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
  ];

  const handleAnswerSubmit = (selectedAnswer) => {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Handle end of quiz, e.g., navigate to summary page
      history.push('/summary'); // Navigate to the summary page
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setSelectedAnswer(null); // Reset selectedAnswer when moving to previous question
    }
  };

  return (
    <div className="trivia-app">
      <h1>Trivia App</h1>
      {currentQuestionIndex < questions.length ? (
        <Question
          question={questions[currentQuestionIndex].question}
          answers={questions[currentQuestionIndex].answers}
          correctAnswer={questions[currentQuestionIndex].correctAnswer}
          selectedAnswer={selectedAnswer} // Pass selectedAnswer to Question component
          onSelectAnswer={setSelectedAnswer} // Pass setSelectedAnswer to Question component
          onSubmit={handleAnswerSubmit}
        />
      ) : (
        <div>
          <h2>Game Over!</h2>
          <p>Your Score: {score}/{questions.length}</p>
        </div>
      )}
      <div>
        <button onClick={handlePreviousQuestion} className="previous-question-button" disabled={currentQuestionIndex === 0}>
          Previous Question
        </button>
        {currentQuestionIndex < questions.length - 1 ? (
          <button onClick={handleNextQuestion} className="next-question-button">
            Next Question
          </button>
        ) : (
          <Link to="/summary" className="finish-game-button">
            Finish Game
          </Link>
        )}
      </div>
    </div>
  );
};

export default TriviaApp;
