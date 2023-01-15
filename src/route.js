import Home from './component/Home';
import About from './component/About';
import Error from './component/Error';
import Logement from './component/Logement';

import {createBrowserRouter} from "react-router-dom";
  
  const router = createBrowserRouter([
    
    {path: "/", element: <Home />, errorElement:<Error />},
        
    {path: "/about", element: <About />, errorElement:<Error />},

    { path: "/logement/:id", element: <Logement />, errorElement:<Error />}

  ]);

export default router;
