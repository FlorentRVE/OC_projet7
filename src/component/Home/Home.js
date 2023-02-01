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

      < Img src = '/images/IMG.png' text = 'Chez vous, partout et ailleurs'/>

      < HomeGrid/>
    </div>

      < Footer/>

    
    </div>
  );
};

export default Home;
