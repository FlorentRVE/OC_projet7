// Exemple d'utilisation d'une fonction de notre fichier api.js

import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as api from '../../utils/api';

import Collapse from '../Collapse';
import styles from '../../css/logement.module.css'

const LogementDescription = () => {

  const params = useParams();
  const id = params.id;

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

              <Collapse AboutCollapse title = {'Description'}>

                <p className= {styles.collapseTextDescription}>{item.description}</p>

              </Collapse >
        </div>
      ))}      
    </div>    
  );
};

export default LogementDescription;
