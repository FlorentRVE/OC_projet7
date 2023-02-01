//===================================== Grille Page D'accueil ===============================

import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as api from '../../utils/api';
import styles from '../../css/home.module.css'

// Utilisation de la fonction getData défini dans le fichier api.js pour récupérer les données des logements
// depuis le json et les afficher.

const HomeGrid = () => {

    const [data, setData] = useState([]); // Création du state data. 
  
    useEffect(() => {
      api.getData().then((data) => {
        setData(data); // On modifie data pour lui donner la valeur des données récupérées via getData.
      });
    }, []);
  
    return (

    <div className= {styles.container}>

        {data.map((item) => (

          <Link key={item.id} to={`/logement/${item.id}`} style={{ textDecoration: 'none' }}>

            <div id={item.id} className= {styles.item}>
              
              <h3 className= {styles.itemTitle}>{item.title}</h3>
            </div>
          </Link>
        ))}

    </div>
    )
}

export default HomeGrid