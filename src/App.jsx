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
      question: '1.) What team have won the most Super Bowls?',
      answers: ['Bears', 'Chiefs', 'Patriots', 'Steelers'],
      correctAnswer: 'Steelers',
    },
    {
      question: '2.) Which is the only NFL team that play their home games in New York state?',
      answers: ['Colts', 'Jets', 'Bills', 'Giants'],
      correctAnswer: 'Bills',
    },
    {
      question: '3.)Who was selected first in the 2012 NFL Draft?',
      answers: ['Robert Griffin III', 'Andrew Luck', 'Luke Kuechly', 'Cam Newton'],
      correctAnswer: 'Andrew Luck',
    },
    {
      question: '4.)Which NFL team has never had the #1 pick overall in the drafts?',
      answers: ['New England Patriots', 'Denver Broncos', 'Philadelphia Eagles', 'Chicago Bears'],
      correctAnswer: 'Denver Broncos',
    },
    {
      question: '5.) Which NFL team has had the most number of #1 picks out of the following?',
      answers: ['Cincinnati Bengals', 'Minnesota Vikings', 'Indianapolis Colts', 'Kansas city chiefs'],
      correctAnswer: 'Indianapolis Colts',
    },
    {
      question: '6.) Which player has been awarded the highest number of Superbowl MVPs?',
      answers: ['Terry Bradshaw', 'Tom Brady', 'Joe Montan', 'Patrick Mahomes'],
      correctAnswer: 'Tom Brady',
    },
    {
      question: '7.) What is the name of the trophy given to the winners of the Superbowl?',
      answers: ['George Halas Trophy', 'Ed Thorp Memorial Trophy', 'Lamar Hunt Trophy', 'Vince Lombardi Trophy'],
      correctAnswer: 'Vince Lombardi Trophy',
    },
    {
      question: '8.) Which is the only team in NFL to have a perfect season (undefeated season)?',
      answers: ['Miami Dolphins, 1972', 'Pittsburgh Steelers, 1978', 'New England Patriots, 2007', 'SF 49ers, 2019'],
      correctAnswer: 'Miami Dolphins, 1972',
    },
    {
      question: '9.) What Is The Highest Score Ever (both teams combined) In An NFL Game?',
      answers: ['110', '113', '108', '90'],
      correctAnswer: '113, Washington Redskins 72-41 New York Giants ',
    },
    {
      question: '10.) What city did the Baltimore ravens previously base out of (before relocation)?',
      answers: [' Kenosha', 'Cleveland', 'Los Angelos', 'Boston'],
      correctAnswer: 'Cleveland',
    },
    {
      question: '11.) What were the Kansas city chiefs once known as? ',
      answers: ['Dallas Texans', 'Cincinnati Celts', ' Hartford Blues', 'New York Yankees'],
      correctAnswer: 'Dallas Texans',
    },
    {
      question: '12.) How many Superbowl titles does John Madden have?',
      answers: ['1', '2', ' 3', '4'],
      correctAnswer: '1',
    },
    {
      question: '13.) When was the current Philadelphia Eagles logo made and adopted? ',
      answers: ['1994', '2002', '1996', '1974'],
      correctAnswer: '1996',
    },
    {
      question: '14.) Which team currently plays in Bank of America stadium?',
      answers: ['Cowboys', 'Patriots', 'Bengals', 'Panthers'],
      correctAnswer: 'Panthers',
    },
    {
      question: '15.) Where was the National Football League founded?',
      answers: ['New York City', 'Kansas City', 'Canton', 'Green Bay'],
      correctAnswer: 'Canton',
    },
    {
      question: '16.) When were helmets made mandatory in NFL?',
      answers: ['1939', '1943', '1967', '1929'],
      correctAnswer: '1943',
    },
    {
      question: '17.) Which NFL team calls Soldier Field home?',
      answers: ['Ravens', 'Patriots', 'Bears', 'Buccaneers'],
      correctAnswer: 'Bears',
    },
    {
      question: '18.) Who is the all-time leading rusher in NFL history?',
      answers: ['Christian McCaffrey', 'Barry Sanders', 'Emmit Smith', 'Walter Payton'],
      correctAnswer: 'Emmit Smith',
    },
    {
      question: '19.) What name is given to the last player selected in the NFL draft?',
      answers: ['Captain Caboose', 'Mr. Irrelevant', 'Mr. Made It', 'Sr. Forgettable'],
      correctAnswer: 'Mr. Irrelevant',
    },
    {
      question: '20.) What Tri-State area team won the 1960 NFL Championship?',
      answers: ['Steelers', 'Giants', 'Eagles', 'Jets'],
      correctAnswer: 'Eagles',
    },
  ]);
  const resetScore = () => {
    setScore(0);
  };

  return (
    <Router>
      <NavBar onHomeClick={resetScore} />
      <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="/trivia" element={<TriviaApp score={score} setScore={setScore} questions={questions} />} />        
        <Route path="/summary" element={<SummaryPage score={score} totalQuestions={questions.length} />} />
      </Routes>
    </Router>
  );
}

export default App;