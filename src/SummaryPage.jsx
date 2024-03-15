import React from 'react';
import './Questions.css';


const SummaryPage = ({ score, totalQuestions}) => {
  const percentage = ((score / totalQuestions) * 100).toFixed(2);

  return (
    <div className="question-card">
      <h2>Game Over!</h2>    
      <p>Your Score: {score}/{totalQuestions} ({percentage}%)</p>           
    </div>
  );
};

export default SummaryPage;
