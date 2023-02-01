//===================================== Composant Collapse ===============================

import React from 'react';
import { useState} from 'react';

import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from '../css/collapse.module.css';

// Au click, collapse change d'état grâce à setCollapse, passant de fermé à ouvert et vice versa.
// Props.title et props.children permettent la réutilisation du composant de manière dynamique.

const Collapse = (props) => {

    const [collapse, setCollapse] = useState(styles.isClosed); // On crée l'état collapse "fermé" par défaut

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