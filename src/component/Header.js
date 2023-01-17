import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/header.module.css'
import { useLocation } from 'react-router-dom';

function Header() {

  const { pathname } = useLocation();

  return (
    <header className= {styles.header}>

      <nav className= {styles.nav}>

        <p> Logo KASA</p>

        <div className= {styles.menu}>

          <p>
            <Link to="/" className= {styles.menuItem} style={{ textDecoration: pathname === '/' ? 'underline' : 'none' }}>Accueil</Link>
          </p>

          <p>
            <Link to="/about" className= {styles.menuItem} style={{ textDecoration: pathname === '/about' ? 'underline' : 'none' }}>A propos</Link>
          </p>
        </div>
      </nav>
    </header>
  );
}

export default Header;
