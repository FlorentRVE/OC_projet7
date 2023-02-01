//=============================== Header ==========================

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from '../css/header.module.css'

// Utilisation de pathname pour souligner le texte du menu selon la page visitée.

function Header() {
  
  const { pathname } = useLocation();

  return (
    <header className= {styles.header}>

      <nav className= {styles.nav}>

        <img src='/images/LOGO.png' alt='Logo X'/>

          <div className= {styles.menu}>

            <p>
              <Link to="/" className= {styles.menuItem} style={{ textDecoration: pathname === '/' ? 'underline' : 'none' }}>Accueil</Link>
            </p>

            <p>
              <Link to="/about" className= {styles.menuItem} style={{ textDecoration: pathname === '/about' ? 'underline' : 'none' }}>A Propos</Link>
            </p>
          </div>
      </nav>
    </header>
  );
}

export default Header;
