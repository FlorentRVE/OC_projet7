// composant de page à propos

import React from 'react';
import { useState} from 'react';

import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../../css/about.module.css';

const AboutCollapse = (props) => {

    const [collapse, setCollapse] = useState(styles.isClosed);

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
  
export default AboutCollapse;