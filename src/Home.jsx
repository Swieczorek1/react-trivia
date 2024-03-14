// Home.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleStartPlaying = () => {
    // Navigate to the trivia game component
    navigate('/trivia');
  };

  return (
    <div className="home-page">
      <h1>Steve's Trivia App</h1>
      <button onClick={handleStartPlaying}>Start Playing</button>
    </div>
  );
};

export default Home;
