//=============================== Composant Logement ==========================

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
import style from '../../css/global.module.css'

const Logement = () => {

  const params = useParams(); // Récupération de l'ID dans l'URL.
  const id = params.id;

  const [data, setData] = useState({}); // Création du state data.
  
  useEffect(() => {
    api.getItem(id).then((data) => {
      setData(data[0]); // On modifie data pour lui donner la valeur des données récupérées via getItem en utilisant l'ID.

    });
  }, [id]);

  if(data === undefined) {
    return <Navigate to="/404" />; // Redirection vers la page d'erreur si ID non présent dans le json.
  }

  return (
    <div>
        <div className={style.width}>
                
          < Header/>

          < LogementCarrousel />

          < LogementInformation />

          <div className= {styles.collapseFlex}>

            < LogementDescription />

            < LogementEquipement />

          </div>
        </div>

      <Footer />
    
    </div>
  );
};

export default Logement;
