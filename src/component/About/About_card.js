// composant de page à propos

import React from 'react';
import { Collapse } from 'react-collapse';
import { useState} from 'react';

import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../../css/about.module.css';

const AboutCard = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [icon, setIcon] = useState(faChevronDown);

    return (
      <div className= {styles.div}>
        <div className= {styles.container} onClick={() => {setIsOpen(!isOpen);setIcon(isOpen ? faChevronDown : faChevronUp);}}>
            <h2 className= {styles.title}>Fiabilité</h2>
            <FontAwesomeIcon icon={icon} className= {styles.arrow} />
        </div>
        <Collapse isOpened={isOpen}>
          <p className= {styles.collapse}>Les annonces postées sur Kasa garantissent une fiablité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
        </Collapse>
      </div>
    );
  }
  
export default AboutCard;