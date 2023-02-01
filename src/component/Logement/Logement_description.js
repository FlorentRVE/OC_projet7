//=============================== Description Logement ==========================

import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as api from '../../utils/api';
import Collapse from '../Collapse';
import styles from '../../css/logement.module.css'

// Utilisation du composant réutilisable "Collapse" avec props.title et props.children.

const LogementDescription = () => {

  const params = useParams(); // Récupération de l'ID dans l'URL.
  const id = params.id;

  const [data, setData] = useState([]); // Création du state data.
  
  useEffect(() => {
    api.getItem(id).then((data) => {
      setData(data); // On modifie data pour lui donner la valeur des données récupérées via getItem en utilisant l'ID.
    });
  }, [id]);

  return (

    <div className= {styles.collapseDiv}>
      
      {data.map((item) => (
            
        <div key={item.id} id={item.id} className= {styles.item}>

              <Collapse title = {'Description'}>

                <p className= {styles.collapseTextDescription}>{item.description}</p>

              </Collapse >
        </div>
      ))}      
    </div>    
  );
};

export default LogementDescription;
