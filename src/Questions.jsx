import React, { useState, useEffect } from 'react';
import './Questions.css'; // Import the CSS file for styling

const Question = ({ question, answers, correctAnswer, selectedAnswer, onSelectAnswer, onSubmit }) => {
  const [submitted, setSubmitted] = useState(false);
  const [userSelection, setUserSelection] = useState(null);

  useEffect(() => {
    setSubmitted(false); // Reset submitted state when new question props are received
    setUserSelection(selectedAnswer); // Update userSelection when selectedAnswer changes
  }, [question, selectedAnswer]);

  const handleSelectAnswer = (answer) => {
    if (!submitted) {
      setUserSelection(answer); // Update userSelection when an answer is selected
      onSelectAnswer(answer); // Update selectedAnswer for submission
    }
  };

  const handleSubmit = () => {
    if (userSelection !== null) {
      setSubmitted(true);
      onSubmit(userSelection);
    }
  };

  return (
    <div className="question-card">
      <div>
        <h2>{question}</h2>
        <div>
          {answers.map((answer, index) => (
            <button
              key={index}
              onClick={() => handleSelectAnswer(answer)}
              className={(userSelection === answer && !submitted) ? 'selected' : ''}
              disabled={submitted || (selectedAnswer !== null && selectedAnswer !== answer)}
            >
              {answer}
            </button>
          ))}
        </div>
      </div>
      <button onClick={handleSubmit} disabled={userSelection === null || submitted}>
        Submit Answer
      </button>
      {submitted && (
        <div>
          <p>You selected: {userSelection}</p>
          {userSelection === correctAnswer ? (
            <p>Correct!</p>
          ) : (
            <p>Incorrect. The correct answer is: {correctAnswer}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Question;

