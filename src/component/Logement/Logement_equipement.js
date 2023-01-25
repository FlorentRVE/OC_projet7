// Exemple d'utilisation d'une fonction de notre fichier api.js

import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as api from '../../utils/api';

import AboutCollapse from '../About/About_collapse';

import styles from '../../css/logement.module.css'

const LogementEquipement = () => {

  const params = useParams();
  const id = params.id;
  let compteur = 0;

  const [data, setData] = useState([]);
  
  useEffect(() => {
    api.getItem(id).then((data) => {
      setData(data);
    });
  }, [id]);

  return (

    <div className= {styles.collapseDiv}>

      {data.map((item) => (
            
        <div key={item.id} id={item.id} className= {styles.item}>

              <AboutCollapse AboutCollapse title = {'Equipement'}>

              <div>
                    {item.equipments.map(element => (
                      <p key={item.id + `${compteur ++}`}  className= {styles.collapseTextEquipement}>{element}</p>
                    ))}
              </div>

              </AboutCollapse >
        </div>
      ))}      
    </div>
  );
};

export default LogementEquipement;
