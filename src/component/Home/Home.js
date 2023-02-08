//=============================== Composant Home ==========================

import React from 'react';

import Header from '../Header';
import Img from '../Img';
import HomeGrid from './Home_grid';
import Footer from '../Footer';
import styles from '../../css/global.module.css'


const Home = () => {

  return (
    <div>
      
    <div className={styles.width}>
      < Header/>

      < Img src = {window.innerWidth < 692 ? '/images/IMG_mobile.png' : '/images/IMG.png'} text = 'Chez vous, partout et ailleurs' height = '9rem'/>

      < HomeGrid/>
    </div>

      < Footer/>

    
    </div>
  );
};

export default Home;
