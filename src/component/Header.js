import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/header.module.css'

function Header() {
  return (
    <header className= {styles.header}>

      <nav className= {styles.nav}>

        <p> Logo KASA</p>

        <div className= {styles.menu}>

          <p>
            <Link to="/" className= {styles.menuItem}>Accueil</Link>
          </p>

          <p>
            <Link to="/about" className= {styles.menuItem}>A propos</Link>
          </p>
        </div>
      </nav>
    </header>
  );
}

export default Header;
