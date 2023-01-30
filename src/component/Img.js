import React from 'react';
import styles from '../css/img.module.css'

const Img = (props) => {

return (

    <div  className= {styles.image} style={{ 
        backgroundImage: `url(${props.src})`,
        backgroundRepeat:"no-repeat",
        backgroundSize: 'cover',
    }}>
    <div className= {styles.bg} >
            
        <p className= {styles.imageTxt}>{props.text}</p>
    </div>
</div>

)

}

export default Img