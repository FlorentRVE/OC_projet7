// Exemple d'utilisation d'une fonction de notre fichier api.js

import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as api from '../../utils/api';
import styles from '../../css/logement.module.css'


const LogementEquipement = () => {

    const params = useParams();
    const id = params.id;

    const [data, setData] = useState([]);
    
    useEffect(() => {
        api.getItem(id).then((data) => {
        setData(data);
        });
    }, [id]);
  
    return (
        <div>

        <div className= {styles.container}>

            {data.map((item) => (
                
                <div id={item.id} className= {styles.item}>

                    <div>
                        <h3>Equipement</h3>
                        <p>{item.equipments}</p>
                    </div>

                </div>
            ))}
        
            </div>
        
        </div>
    );
};

export default LogementEquipement;
