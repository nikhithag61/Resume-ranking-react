import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../images/logo.png';
 
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar w-full">
      <div className="navbar-container">
        <Link to="/userselection" className="logo">
          <img src={logo} alt="Logo" />
          Criteria
        </Link>
       <div className=''>
        <ul className={`nav-links ${isMenuOpen ? 'open' : '' }`}>
        
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
        </div>

        <button className="menu-toggle" onClick={toggleMenu}>
          {/* You can add a menu icon here, e.g., from react-icons */}
          Menu
        </button>
      </div>
    </nav>
  );
}

export default Navbar;