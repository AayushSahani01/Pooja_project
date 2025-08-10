import React from "react";
import { BrowserRouter, Routes , Route} from "react-router-dom";

import HeroRoute from "./landingPage/Home/HeroRoute.jsx";
import About from "./landingPage/about/AboutPage.jsx";
import ContactPage from "./landingPage/Contacts/ContactPage.jsx";
import SupportPage from "./landingPage/support/SupportPage.jsx";
import Login from "./landingPage/signup/Login.jsx";
import Signup from "./landingPage/signup/Signup.jsx";
import Blogs from "./landingPage/about/Blogs.jsx";
import Fashions from "./landingPage/fashions/Fashions.jsx";
import Collection from "./landingPage/fashions/Collection.jsx";
import NotPages from "./NotPages.jsx";
import Orders from "./landingPage/cart/Orders.jsx";
import OnTopBar from "./landingPage/OnTopBar.jsx";

 

function App() {
  return (
    
      <BrowserRouter basename="/">
       <Routes>
        <Route path="/" element={<HeroRoute />} />
        <Route path="/about" element={<About />} />
         <Route path="/contacts" element={<ContactPage />} />
         <Route path="/support" element={<SupportPage />} />
         <Route path="/signup" element={<Signup />} />
         <Route path="/login" element={<Login />} />
         <Route path="/blog" element={<Blogs />} />
         <Route path="/fashion" element={<Fashions />} />
         <Route path="/collection" element={<Collection />} />
         <Route path="/order" element={<Orders />} />
         <Route path="/login" element={<Login />} />
        <Route path="/*" element={<NotPages />} />
      </Routes>
      <OnTopBar />
      </BrowserRouter>
  )
}

   export default App;
