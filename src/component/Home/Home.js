// Exemple d'utilisation d'une fonction de notre fichier api.js

import React from 'react';

import Header from '../Header';
import Img from '../Img';
import HomeGrid from './Home_grid';
import Footer from '../Footer';


const Home = () => {

  return (
    <div>
      
      < Header/>

      < Img src = '/images/IMG.png' text = 'Chez vous, partout et ailleurs'/>

      < HomeGrid />

      < Footer/>

    
    </div>
  );
};

export default Home;
