//=============================== Composant Image réutilisable ==========================

import React from 'react';
import styles from '../css/img.module.css'

// Props.src, props.height et props.text permettent la réutilisation du composant de manière dynamique.

const Img = (props) => {

return (

    <div  className= {styles.image} style={{ 
        backgroundImage: `url(${props.src})`,
        backgroundRepeat:"no-repeat",
        backgroundSize: 'cover',
        height: props.height
    }}>
    <div className= {styles.bg} >
            
        <p className= {styles.imageTxt}>{props.text}</p>
    </div>
    </div>

)

}

export default Img