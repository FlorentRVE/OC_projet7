//=============================== Page Erreur ==========================

import { Link } from 'react-router-dom';
import Header from './Header';
import styles from '../css/error.module.css'

const Error = () => {

    return (
    <div>
        < Header/>
        <div className={styles.textBox}>
            <p className={styles.title}>404</p>
            <p className={styles.text}>Oups! La page que vous demandez n'existe pas</p>
        </div>
        <Link to="/" style={{ textDecoration: 'none' }}><p className={styles.link}>Retourner sur la page d'accueil</p></Link>
    </div>
    )

}

export default Error;