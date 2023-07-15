import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav>
      <div className='logo'>
        <img src="./icons_assets/Logo.svg" alt="LOGO"></img>
      </div>
      <div className={`hamburger ${showMenu ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
        </div>
      <ul className={`navigation ${showMenu ? 'show' : ''}`}>
        <li className='elements'>
          <Link to='/'>HOME</Link>
        </li>
        <li className='elements'>
          <Link to="/">ABOUT</Link>
          </li>
        <li className='elements'>
        <Link to="/">MENU</Link>
        </li>
        <li className='elements'>
        <Link to="/reservations">RESERVATIONS</Link>
        </li>
        <li className='elements'>
        <Link to="/">ORDER ONLINE</Link>
        </li>
        <li className='elements'>
          <Link to="/">LOGIN</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
