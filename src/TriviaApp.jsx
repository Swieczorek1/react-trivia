import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Question from './Questions';
import './TriviaApp.css'; 

const TriviaApp = ({ score, setScore, questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState(Array(questions.length).fill(null));
  const [answered, setAnswered] = useState(Array(questions.length).fill(false));
  const navigate = useNavigate(); 

  const handleAnswerSubmit = (selectedAnswer) => {
    const updatedSelectedAnswers = [...selectedAnswers];
    updatedSelectedAnswers[currentQuestionIndex] = selectedAnswer;
    setSelectedAnswers(updatedSelectedAnswers);
    const currentQuestion = questions[currentQuestionIndex];
    if (!answered[currentQuestionIndex]) {
      if (selectedAnswer === currentQuestion.correctAnswer) {
        setScore((prevScore) => prevScore + 1); 
      }
      const updatedAnswered = [...answered];
      updatedAnswered[currentQuestionIndex] = true;
      setAnswered(updatedAnswered); 
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      navigate('/summary'); 
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleStartOver = () => {
    setScore(0); 
    setCurrentQuestionIndex(0);
    setSelectedAnswers(Array(questions.length).fill(null));
    setAnswered(Array(questions.length).fill(false));
  };
  
  const handleGoHome = () => {
    setScore(0); 
    setCurrentQuestionIndex(0);
    setSelectedAnswers(Array(questions.length).fill(null));
    setAnswered(Array(questions.length).fill(false));
  };
    
    
  return (
    <div className="trivia-app">
      <h1>Trivia App</h1>
      {currentQuestionIndex < questions.length ? (
        <Question
          question={questions[currentQuestionIndex].question}
          answers={questions[currentQuestionIndex].answers}
          correctAnswer={questions[currentQuestionIndex].correctAnswer}
          selectedAnswer={selectedAnswers[currentQuestionIndex]}
          onSelectAnswer={handleAnswerSubmit}
          onSubmit={handleAnswerSubmit}
          disabled={answered[currentQuestionIndex]}
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

export default TriviaApp;
