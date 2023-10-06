// import React, { useState } from 'react';
// import './Navbar.css';
 

// import logo from './Images/logo.png';
// import { Link } from 'react-router-dom';

// function Navbar() {
//   const [isMenuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav>
//       <div className="left">
//         <div className="logo">
//           <Link to="/">
//             <img src={logo} alt="logo" className="logo_img" style={{ width: '180px', height: '70px' }} />
//           </Link>
//         </div>
//         <div className="menu-icon" onClick={toggleMenu}>
//           <i className={`fa ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
//         </div>
//       </div>
//       <div className={`center ${isMenuOpen ? 'show' : ''}`}>
//         <ul className="nav-links">
//           <li>
//           <a href='/Products'><Link to="/Products">Products</Link></a>
//           </li>
//           <li>
//             <Link to="/UseCases">Use Cases</Link>
//           </li>
//           <li>
//             <Link to="/Company">Company</Link>
//           </li>
//           <li>
//             <Link to="/joinUs">Join Us</Link>
//           </li>
//         </ul>
//       </div>
//       <div className="right">
//         <ul className="action-links">
//           <li>
//             <Link to="/GetDemo">Get a demo</Link>
//           </li>
//           <li>
//             <Link to="/Login">Login</Link>
//           </li>
//         </ul>
//         <div className="rightMost"></div>
//         <button>Get Started</button>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;


import React, { useState } from 'react';
import './Navbar.css';
import logo from './Images/logo.png';
import {Link} from 'react-router-dom';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="App">
      <header>
        <div className="navbar">
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
          <a href="/GetDemo">Get a Demo</a>
          <a href="/Login">Login</a>
            <button className="get-started-button">Get Started</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;

