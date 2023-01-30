// composant de page à propos

import React from 'react';
import Collapse from '../Collapse';
import styles from '../../css/about.module.css';

const AboutCollapse = (props) => {

    return (
      <Collapse AboutCollapse title = {props.title}>
        
        <p className= {styles.collapseTextAbout}>{props.description}</p>

      </Collapse >
    );
  }
  
export default AboutCollapse;