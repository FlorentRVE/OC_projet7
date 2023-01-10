// composant de page à propos

import { Link } from 'react-router-dom';

const About = () => {

    return (
    <div>
        <p> A propos de notre agence</p>
        <p><Link to="/">Retour accueil</Link></p>
    </div>
    )

}

export default About;