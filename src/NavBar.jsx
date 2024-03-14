import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = ({ onHomeClick }) => {
  const handleHomeClick = () => {
    if (onHomeClick) {
      onHomeClick(); 
    }
  };

  return (
    <nav className="navbar">
      <Link to="/" onClick={handleHomeClick}>Home</Link>
    </nav>
  );
};

export default NavBar;

