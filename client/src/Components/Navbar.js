import React, { useState } from 'react';
import './Navbar.css';
import logo from './Images/logo.png';
import {Link} from 'react-router-dom';

function Navbar () {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="App">
      <header>
        <div className="navbar" >
          <div className="logo">
           <Link to="/"><a href="/"><img src={logo} alt="Company Logo" /></a></Link> 
          </div>
          <div className={`hamburger-menu ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <nav className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <ul>
              <li><Link to="/Products"><a href="#">Products</a></Link></li>
              <li><Link to="/UseCase"><a href="#">Use Cases</a></Link></li>
              <li><Link to="/JoinUs"><a href="/JoinUs">Join Us</a></Link></li>
              <li><Link to="/Company"><a href="/Company">Company</a></Link></li>
             
            </ul>
          </nav>
          <div className={`right-menu ${menuOpen ? 'active' : ''}`}>
          <Link to="/GetDemo"><a href="/GetDemo">Get a Demo</a></Link>
          <Link to="/Login"><a href="/Login">Login</a></Link>
            <button className="get-started-button">Get Started</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;

