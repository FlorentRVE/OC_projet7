import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as api from '../../utils/api';
import styles from '../../css/home.module.css'

const HomeGrid = () => {

    const [data, setData] = useState([]);
  
    useEffect(() => {
      api.getData().then((data) => {
        setData(data);
      });
    }, []);
  
    return (

    <div className= {styles.container}>

        {data.map((item) => (

          <Link  key={item.id} to={`/logement/${item.id}`}>

            <div id={item.id} className= {styles.item}>
              
              <h3 className= {styles.itemTitle}>{item.title}</h3>
            </div>
          </Link>
        ))}

    </div>
    )
}

export default HomeGrid