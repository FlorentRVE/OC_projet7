// composant de page à propos

import { Link } from 'react-router-dom';

const AboutCard = () => {

    return (
    <div>
        <div>
            <p> A propos de notre agence</p>
            <p><Link to="/">Retour accueil</Link></p>
        </div>
    </div>
    )

}

export default AboutCard;