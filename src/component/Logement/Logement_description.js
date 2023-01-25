// Exemple d'utilisation d'une fonction de notre fichier api.js

import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as api from '../../utils/api';


// import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
// import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import AboutCollapse from '../About/About_collapse';

import styles from '../../css/logement.module.css'

const LogementDescription = () => {

  const params = useParams();
  const id = params.id;

  const [data, setData] = useState([]);
  // const [collapse, setCollapse] = useState(styles.isClosed);
  
  useEffect(() => {
    api.getItem(id).then((data) => {
      setData(data);
    });
  }, [id]);

  return (

    <div className= {styles.collapseDiv}>
      
      {data.map((item) => (
            
        <div key={item.id} id={item.id} className= {styles.item}>

              <AboutCollapse AboutCollapse title = {'Description'}>

                <p className= {styles.collapseText}>{item.description}</p>

              </AboutCollapse >
        </div>
      ))}      
    </div>    
  );
};

export default LogementDescription;
