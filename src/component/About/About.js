// composant de page à propos

import Header from '../Header';
import Footer from '../Footer';
import Img from '../Img';
import AboutCollapse from './About_collapse';

const About = () => {

    return (
    <div>
        < Header/>

        < Img  src = '/images/IMG_ABOUT.png' text = ''/>

        < AboutCollapse title = {'Fiabilité'} description = {'Les annonces postées sur Kasa garantissent une fiablité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.'}/>

        < AboutCollapse title = {'Respect'} description = {'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'} />

        < AboutCollapse title = {'Service'} description = {"Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."} />

        < AboutCollapse title = {'Sécurité'} description = {"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."} />

        <Footer /> 
    </div>
    )

}

export default About;