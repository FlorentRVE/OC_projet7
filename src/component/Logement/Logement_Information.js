// Exemple d'utilisation d'une fonction de notre fichier api.js

import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as api from '../../utils/api';
import styles from '../../css/logement.module.css'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
                
                <div className= {styles.hostRatingFlex}>

                  <FontAwesomeIcon className= {item.rating > 0 ? styles.hostRatingOrange : styles.hostRatingGrey }icon= {faStar} />
                  <FontAwesomeIcon className= {item.rating > 1 ? styles.hostRatingOrange : styles.hostRatingGrey }icon= {faStar} />
                  <FontAwesomeIcon className= {item.rating > 2 ? styles.hostRatingOrange : styles.hostRatingGrey }icon= {faStar} />
                  <FontAwesomeIcon className= {item.rating > 3 ? styles.hostRatingOrange : styles.hostRatingGrey }icon= {faStar} />
                  <FontAwesomeIcon className= {item.rating > 4 ? styles.hostRatingOrange : styles.hostRatingGrey }icon= {faStar} />
                </div>
            </div>

          </div>
        ))}
      </div>

  );
};

export default LogementInformation;
