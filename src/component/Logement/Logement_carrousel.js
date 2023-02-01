//=============================== Carrousel Logement ==========================

import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as api from '../../utils/api';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../../css/logement.module.css'

const LogementCarrousel = () => {

  const params = useParams(); // Récupération de l'ID dans l'URL.
  const id = params.id;

  const [data, setData] = useState([]); 
  const [Index, setIndex] = useState(0); // Création du state data et Index
  
  useEffect(() => {
    api.getItem(id).then((data) => {
      setData(data); // On modifie data pour lui donner la valeur des données récupérées via getItem en utilisant l'ID.
    });
  }, [id]);

// Modification du state Index selon la fonction appelée au click sur les flèches gauche/droite.
  const previousImage = () => {
    const newIndex = Index - 1;
    setIndex(newIndex < 0 ? data[0].pictures.length - 1 : newIndex);
}

  const nextImage = () => {
    const newIndex = Index + 1;
    setIndex(newIndex === data[0].pictures.length ? 0 : newIndex);
}

  return (

    <div className={styles.carouselContainer}>  

      {data.map((item) => (
            
        <div key={item.id} id={item.id} className={styles.carouselDiv}>

          <img src={item.pictures[Index]} className= {styles.carrouselImage} alt='Visite du logement'/>


            <div className={styles.carrouselArrow} style={{display: item.pictures.length === 1 ? 'none' : 'show' }}>
              <FontAwesomeIcon onClick={previousImage} icon= { faChevronLeft } />
              <FontAwesomeIcon onClick={nextImage} icon= { faChevronRight } />
            </div>

            <p className= {styles.carrouselLength} style={{display: item.pictures.length === 1 ? 'none' : 'show' }}>{Index + 1 + '/' + data[0].pictures.length}</p>

        </div>

      ))}   

    </div>
  );
};

export default LogementCarrousel;
