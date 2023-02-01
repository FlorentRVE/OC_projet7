//=================== Réutilisation du composant Collapse adapté à la page A propos ===================

import React from 'react';
import Collapse from '../Collapse';
import styles from '../../css/about.module.css';

const AboutCollapse = (props) => {

    return (
      <Collapse title = {props.title}>
        
        <p className= {styles.collapseTextAbout}>{props.description}</p>

      </Collapse >
    );
  }
  
export default AboutCollapse;