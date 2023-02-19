//===================================== Composant Collapse ===============================

import React from 'react';
import { useState} from 'react';

import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from '../css/collapse.module.css';

// La valeur "collapse" initialisé avec useState permet de déterminer si le composant est ouvert ou fermé selon la classe CSS affecté à la valeur.
// Au clique, si "collapse" vaut "styles.isClosed" il passe à "styles.isOpen" et vice versa selon la valeur initiale.
// Props.title et props.children permettent la réutilisation du composant de manière dynamique.

const Collapse = (props) => {

    const [collapse, setCollapse] = useState(styles.isClosed); // La valeur de collapse correspond à "fermé" par défaut

    return (
      <div className= {styles.container}>
        <div className= {styles.titleBox} onClick={() => setCollapse(collapse === styles.isClosed ? styles.isOpen : styles.isClosed)}>
            <h2 className= {styles.title}>{props.title}</h2>
            <FontAwesomeIcon icon={collapse === styles.isClosed ? faChevronDown : faChevronUp} className={styles.arrow}/>
        </div>
        <div className={collapse}>
          {props.children}
        </div>
      </div>
    );
  }
  
export default Collapse;