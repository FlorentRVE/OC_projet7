// Exemple d'utilisation d'une fonction de notre fichier api.js

import React from 'react';

import Header from '../Header';
import LogementCarrousel from './Logement_carrousel';
import LogementInformation from './Logement_Information';
import LogementDescription from './Logement_description';
import LogementEquipement from './Logement_equipement';
import Footer from '../Footer';

import styles from '../../css/logement.module.css'

const Logement = () => {

  return (
    <div>
      
      < Header/>

      < LogementCarrousel />

      < LogementInformation />

      <div className= {styles.collapseFlex}>

      < LogementDescription />

      < LogementEquipement />

      </div>

      <Footer />
    
    </div>
  );
};

export default Logement;
