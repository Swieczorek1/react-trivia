import React, { useState, useEffect } from 'react';
import './Questions.css'; // Import the CSS file for styling

const Question = ({ question, answers, correctAnswer, selectedAnswer, onSelectAnswer, onSubmit }) => {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setSubmitted(false); // Reset submitted state when new question props are received
  }, [question]);

  const handleSelectAnswer = (answer) => {
    if (!submitted) {
      onSelectAnswer(answer);
    }
  };

  const handleSubmit = () => {
    if (selectedAnswer !== null) {
      setSubmitted(true);
      onSubmit(selectedAnswer);
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
              className={selectedAnswer === answer ? 'selected' : ''}
              disabled={submitted}
            >
              {answer}
            </button>
          ))}
        </div>
      </div>
      <button onClick={handleSubmit} disabled={selectedAnswer === null || submitted}>
        Submit Answer
      </button>
      {submitted && (
        <div>
          <p>You selected: {selectedAnswer}</p>
          {selectedAnswer === correctAnswer ? (
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
