// composant de la page contact

import { Link } from 'react-router-dom';
import Header from './Header';

const Error = () => {

    return (
    <div>
        < Header/>
        <p> Erreur 404</p>
        <p><Link to="/">Retour accueil</Link></p>
    </div>
    )

}

export default Error;