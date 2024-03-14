import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Question from './Questions';
import './TriviaApp.css'; // Import the CSS file for styling

const TriviaApp = ({ score, setScore, questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null); // Initialize selectedAnswer state
  const navigate = useNavigate(); // Initialize useHistory

  const handleAnswerSubmit = (selectedAnswer) => {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.correctAnswer) {
        setScore((prevScore) => prevScore + 1); // Increment score using the previous state
    }
  };


  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Handle end of quiz, e.g., navigate to summary page
      navigate.push('/summary'); // Navigate to the summary page
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setSelectedAnswer(null); // Reset selectedAnswer when moving to previous question
    }
  };
  const handleStartOver = () => {
    setScore(0); // Reset score to 0
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
  };
  
  const handleGoHome = () => {
    setScore(0); // Reset score to 0
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
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
          <button onClick={handleStartOver}>Start Over</button>           
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
      <div>
        <Link to="/" className="home-button" onClick={handleGoHome}>
          Go Home
        </Link>
      </div>    
    </div>
  );
};

export default TriviaApp
