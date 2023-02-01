//=============================== Information Logement ==========================

import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as api from '../../utils/api';
import styles from '../../css/logement.module.css'

const LogementInformation = () => {

  const params = useParams();
  const id = params.id; // Récupération de l'ID dans l'URL.
  let compteur = 0; // Compteur utilisé pour générer un attribut "key" unique.

  const [data, setData] = useState([]); // Création du state data.
  
  useEffect(() => {
    api.getItem(id).then((data) => {
      setData(data); // On modifie data pour lui donner la valeur des données récupérées via getItem en utilisant l'ID.
    });
  }, [id]);

  return (

      <div>

        {data.map((item) => (
            
          <div key={item.id}  id={item.id} className= {styles.infoContainer}>

            {/* ================== Informations sur le logement ================ */}
            <div className= {styles.infoLocation}>

              <h1>{item.title}</h1>
              <h2>{item.location}</h2>

              <div className= {styles.infoTagsContainer}>
                {item.tags.map(element => (
                  <p key={item.id + `${compteur ++}`} className= {styles.infoTagsItem}>{element}</p>
                ))}
              </div>
            </div>
            
            {/* ==================== Informations sur l'hôte ===================== */}
            <div className= {styles.hostContainer}>

              <div className= {styles.hostInfo}>

                <p className= {styles.hostName}>{item.host.name}</p>
                <img src={item.host.picture} className= {styles.hostImage} alt="Portrait de l'hôte"/>
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
