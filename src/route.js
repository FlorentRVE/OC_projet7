import Home from './component/Home/Home';
import About from './component/About/About';
import Error from './component/Error';
import Logement from './component/Logement/Logement';

import {createBrowserRouter} from "react-router-dom";

// Affectation des routes au endpoint correspondant avec page d'erreur par défaut
  
  const router = createBrowserRouter([
    
    { path: "/", element: <Home />, errorElement:<Error />},
        
    { path: "/about", element: <About />, errorElement:<Error />},

    { path: "/logement/:id", element: <Logement />, errorElement:<Error />},

    { path: "/404", element: <Error />}

  ]);

export default router;
