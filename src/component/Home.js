// Exemple d'utilisation d'une fonction de notre fichier api.js

import * as api from '../utils/api';
import { useState, useEffect } from 'react';
import React from 'react';

const Home = () => {

  const [data, setData] = useState([]);
  
  useEffect(() => {
    api.getData().then((data) => {
      setData(data);
    });
  }, []);

  return (
    <div>
      <h1>Bienvenue chez notre agence immobilière</h1>
      <p>Voilà la liste des biens :</p>

      {data.map((item) => (
        <div id={item.id}>
          <h3>{item.title}</h3>
          <img src={item.pictures[1]} alt='description'/>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
