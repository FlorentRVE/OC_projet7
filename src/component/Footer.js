import React from 'react';
import styles from '../css/footer.module.css'

function Footer() {
  return (
    
    <footer className= {styles.footer}>
      <img  className= {styles.footer_img} src='/images/LOGO_FOOTER.png' alt='Logo X'/>
      <p className= {styles.footer_text}>© 2020 Kasa. All right reserved</p>
    </footer>
  );
}

export default Footer;
