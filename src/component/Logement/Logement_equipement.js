//=============================== Equipement Logement ==========================

import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as api from '../../utils/api';
import Collapse from '../Collapse';
import styles from '../../css/logement.module.css'

// Utilisation du composant réutilisable "Collapse" avec props.title et props.children.

const LogementEquipement = () => {

  const params = useParams(); // Récupération de l'ID dans l'URL.
  const id = params.id;
  let compteur = 0;

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

              <Collapse title = {'Equipement'}>

              <div>
                    {item.equipments.map(element => (
                      <p key={item.id + `${compteur ++}`}  className= {styles.collapseTextEquipement}>{element}</p>
                    ))}
              </div>

              </Collapse >
        </div>
      ))}      
    </div>
  );
};

export default LogementEquipement;
