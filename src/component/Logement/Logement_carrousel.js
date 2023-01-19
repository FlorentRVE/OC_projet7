// Exemple d'utilisation d'une fonction de notre fichier api.js

import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as api from '../../utils/api';

import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from '../../css/logement.module.css'

const LogementCarrousel = () => {

  const params = useParams();
  const id = params.id;

  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    api.getItem(id).then((data) => {
      setData(data);
    });
  }, [id]);

  const previousImage = () => {
    const newIndex = currentIndex - 1;
    setCurrentIndex(newIndex < 0 ? data[0].pictures.length - 1 : newIndex);
    console.log(data)
}

  const nextImage = () => {
    const newIndex = currentIndex + 1;
    setCurrentIndex(newIndex === data[0].pictures.length ? 0 : newIndex);
    console.log(data)
}

  return (

    <div className={styles.carouselContainer}>  

      {data.map((item) => (
            
        <div id={item.id} className={styles.carouselDiv}>

          <img src={item.pictures[currentIndex]} className= {styles.carrouselImage} alt='description'/>


            <div className={styles.carrouselArrow}>
              <FontAwesomeIcon onClick={previousImage} icon= { faChevronLeft } />
              <FontAwesomeIcon onClick={nextImage} icon= { faChevronRight } />
            </div>

            <p className= {styles.carrouselLength}>{currentIndex + 1 + '/' + data[0].pictures.length}</p>

        </div>

      ))}   

    </div>
  );
};

export default LogementCarrousel;
