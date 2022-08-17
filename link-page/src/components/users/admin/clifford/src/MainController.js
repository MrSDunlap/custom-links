import React from 'react';
import './index.css';
import { 
  BrowserRouter,
  Routes,
  Route } from 'react-router-dom';
import App from './App';
import Home from './SiteAssests/home';
import Contact from './SiteAssests/contact';


const MainContent = () =>{
   return ( 
      <div>
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<App />} >
                <Route path="Home" element={<Home />} />
                <Route path="Contact" element={<Contact />} />
              </Route>
            </Routes>
          </BrowserRouter>
      </div>    
   );
};

export default MainContent;
