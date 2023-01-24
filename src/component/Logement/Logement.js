// Exemple d'utilisation d'une fonction de notre fichier api.js

import React from 'react';
import { useParams, Navigate} from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as api from '../../utils/api';

import Header from '../Header';
import LogementCarrousel from './Logement_carrousel';
import LogementInformation from './Logement_Information';
import LogementDescription from './Logement_description';
import LogementEquipement from './Logement_equipement';
import Footer from '../Footer';

import styles from '../../css/logement.module.css'

const Logement = () => {

  const params = useParams();
  const id = params.id;

  const [data, setData] = useState({});
  
  useEffect(() => {
    api.getItem(id).then((data) => {
      setData(data[0]);

    });
  }, [id]);

  if(data === undefined) {
    return <Navigate to="/404" />;
  }

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
