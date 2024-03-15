import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TriviaApp.css'; 
import './Questions.css';

const Home = () => {
  const navigate = useNavigate();

  const handleStartPlaying = () => {
    // Navigate to the trivia game component
    navigate('/trivia');
  };

  return (
    <div className="home-card">
      <h1>NFL Trivia </h1>
      <h4>Created by Steven Wieczorek</h4>
      <button  onClick={handleStartPlaying}>Start Playing</button>
    </div>
  );
};

export default Home;
