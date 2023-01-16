// Exemple d'utilisation d'une fonction de notre fichier api.js

import React from 'react';

import Header from '../Header';
import HomeImg from './Home_img';
import HomeGrid from './Home_grid';
import Footer from '../Footer';


const Home = () => {

  return (
    <div>
      
      < Header/>

      < HomeImg />

      < HomeGrid />

      < Footer/>

    
    </div>
  );
};

export default Home;
