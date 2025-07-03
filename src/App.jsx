import React from "react";
import "./App.css";
import { BrowserRouter, Routes , Route} from "react-router-dom";

import HeroRoute from "./landingPage/Home/HeroRoute.jsx";
import About from "./landingPage/about/AboutPage.jsx";
import ContactPage from "./landingPage/Contacts/ContactPage.jsx";
import SupportPage from "./landingPage/support/SupportPage.jsx";
 
 

function App() {
  return (
      <BrowserRouter>
       <Routes>
        <Route path="/" element={<HeroRoute />} />
        <Route path="/about" element={<About />} />
         <Route path="/contacts" element={<ContactPage />} />
         <Route path="/support" element={<SupportPage />} />
        <Route path="/*" element={<h1>404 Not Found</h1>} />
      </Routes>
      </BrowserRouter>
  )
}

   export default App;