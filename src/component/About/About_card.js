// composant de page à propos

import React from 'react';
import { Collapse } from 'react-collapse';
import { useState} from 'react';

import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../../css/about.module.css';



const AboutCard = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className= {styles.div}>
        <div className= {styles.container} onClick={() => setIsOpen(!isOpen)}>
            <h2 className= {styles.title}>Fiabilité</h2>
            <FontAwesomeIcon icon={faChevronDown} className= {styles.arrow} />
        </div>
        <Collapse isOpened={isOpen}>
          <p className= {styles.collapse}>This is the collapsible text</p>
        </Collapse>
      </div>
    );
  }
export default AboutCard;