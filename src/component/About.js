// composant de page à propos

import { Link } from 'react-router-dom';
import Header from './Header';

const About = () => {

    return (
    <div>
        < Header/>
        <p> A propos de notre agence</p>
        <p><Link to="/">Retour accueil</Link></p>
    </div>
    )

}

export default About;