import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import {createBrowserRouter} from "react-router-dom";
  
  const router = createBrowserRouter([
    
    {path: "/",
    element: <Home />},
        
    {path: "/contact",
    element: <Contact />},
        
    {path: "/about",
    element: <About />}

  ]);

export default router;
