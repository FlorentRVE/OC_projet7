// Exemple d'utilisation d'une fonction de notre fichier api.js

import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as api from '../utils/api';
import Header from './Header';
import styles from '../css/logement.module.css'

const Logement = () => {

  const params = useParams();
  const id = params.id;

  const [data, setData] = useState([]);
  
  useEffect(() => {
    api.getItem(id).then((data) => {
      setData(data);
    });
  }, [id]);

  console.log(id)
  console.log(data)

  return (
    <div>
      
      < Header/>

      <div className= {styles.container}>

          {data.map((item) => (
            
            <div id={item.id} className= {styles.item}>

              <img src={item.pictures[1]} className= {styles.itemImage} alt='description'/>

              <div>

                <div>

                  <h1 className= {styles.itemTitle}>{item.title}</h1>
                  <h2>{item.location}</h2>
                  <p>{item.tags}</p>
                </div>
              </div>

              <div>

                <div>

                  <p>{item.host.name}</p>
                  <img src={item.host.picture} className= {styles.itemImage} alt='description'/>
                </div>
                
                <p>{item.rating}</p>
              </div>

              <div>

                <h3>Description</h3>
                <p>{item.description}</p>
              </div>

              <div>

                <h3>Equipement</h3>
                <p>{item.equipments}</p>
              </div>

            </div>
          ))}
      
        </div>

    
    </div>
  );
};

export default Logement;
