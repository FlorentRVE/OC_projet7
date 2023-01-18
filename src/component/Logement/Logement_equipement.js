// Exemple d'utilisation d'une fonction de notre fichier api.js

import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as api from '../../utils/api';

import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from '../../css/logement.module.css'

const LogementEquipement = () => {

  const params = useParams();
  const id = params.id;

  const [data, setData] = useState([]);
  const [collapse, setCollapse] = useState(styles.isClosed);
  
  useEffect(() => {
    api.getItem(id).then((data) => {
      setData(data);
    });
  }, [id]);

  return (

    <div className= {styles.collapseDiv}>

      {data.map((item) => (
            
        <div id={item.id} className= {styles.item}>

              <div className= {styles.div}>
                <div className= {styles.collapseContainer} onClick={() => setCollapse(collapse === styles.isClosed ? styles.isOpen : styles.isClosed)}>
                  <h2 className= {styles.collapseTitle}>Equipements</h2>
                  <FontAwesomeIcon icon={collapse === styles.isClosed ? faChevronDown : faChevronUp} className={styles.arrow}/>
                </div>
                <div className={collapse}>
                  <div>
                    {item.equipments.map(element => (
                      <p className= {styles.collapseTextEquipement}>{element}</p>
                    ))}
                  </div>
                </div>
              </div>
        </div>
      ))}      
    </div>
  );
};

export default LogementEquipement;
