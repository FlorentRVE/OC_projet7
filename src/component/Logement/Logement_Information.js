// Exemple d'utilisation d'une fonction de notre fichier api.js

import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as api from '../../utils/api';
import styles from '../../css/logement.module.css'

const LogementInformation = () => {

  const params = useParams();
  const id = params.id;

  const [data, setData] = useState([]);
  
  useEffect(() => {
    api.getItem(id).then((data) => {
      setData(data);
    });
  }, [id]);

  return (
    <div>

      <div className= {styles.container}>

        {data.map((item) => (
            
          <div id={item.id} className= {styles.item}>

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

          </div>
        ))}
      </div>

    
    </div>
  );
};

export default LogementInformation;
