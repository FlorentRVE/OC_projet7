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

      <div>

        {data.map((item) => (
            
          <div id={item.id} className= {styles.infoContainer}>


            <div className= {styles.infoLocation}>

                  <h1>{item.title}</h1>
                  <h2>{item.location}</h2>

                  <div className= {styles.infoTagsContainer}>
                    {item.tags.map(element => (
                      <p className= {styles.infoTagsItem}>{element}</p>
                    ))}
                  </div>
            </div>

            <div className= {styles.hostContainer}>

                <div className= {styles.hostInfo}>

                  <p className= {styles.hostName}>{item.host.name}</p>
                  <img src={item.host.picture} className= {styles.hostImage} alt='description'/>
                </div>
                
                <p className= {styles.hostRating}>{item.rating}</p>
            </div>

          </div>
        ))}
      </div>

    
    </div>
  );
};

export default LogementInformation;
