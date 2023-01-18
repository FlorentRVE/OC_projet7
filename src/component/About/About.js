// composant de page à propos

import Header from '../Header';
import Footer from '../Footer';
import AboutImg from './About_img';
import AboutCollapse from './About_collapse';

const About = () => {

    return (
    <div>
        < Header/>

        < AboutImg />

        < AboutCollapse title = {'exemple de titre'} description = {'Les annonces postées sur Kasa garantissent une fiablité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.'}/>

        < AboutCollapse title = {'exemple de titre 2'}/>

        < AboutCollapse title = {'exemple de titre 3'}/>

        < AboutCollapse title = {'exemple de titre 4'}/>

        <Footer />
    </div>
    )

}

export default About;