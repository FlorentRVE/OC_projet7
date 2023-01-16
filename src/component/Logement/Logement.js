// Exemple d'utilisation d'une fonction de notre fichier api.js

import React from 'react';

import Header from '../Header';
import LogementCarrousel from './Logement_carrousel';
import LogementInformation from './Logement_Information';
import LogementDescription from './Logement_description';
import LogementEquipement from './Logement_equipement';
import Footer from '../Footer';

const Logement = () => {

  return (
    <div>
      
      < Header/>

      < LogementCarrousel />

      < LogementInformation />

      < LogementDescription />

      < LogementEquipement />

      <Footer />
    
    </div>
  );
};

export default Logement;
