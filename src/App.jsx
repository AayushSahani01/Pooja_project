import React from "react";
import { BrowserRouter, Routes , Route} from "react-router-dom";

import HeroRoute from "./landingPage/Home/HeroRoute.jsx";
import About from "./landingPage/about/AboutPage.jsx";
import ContactPage from "./landingPage/Contacts/ContactPage.jsx";
import SupportPage from "./landingPage/support/SupportPage.jsx";
import Login from "./landingPage/signup/Login.jsx";
import Signup from "./landingPage/signup/Signup.jsx";
import Blogs from "./landingPage/about/Blogs.jsx";
import BlogDetailPage from "./landingPage/about/BlogDetailPage.jsx";
import Fashions from "./landingPage/fashions/Fashions.jsx";
import Collection from "./landingPage/fashions/Collection.jsx";
import NotPages from "./NotPages.jsx";
import Orders from "./landingPage/cart/Orders.jsx";
import OnTopBar from "./landingPage/OnTopBar.jsx";
import ShopNow from "./landingPage/fashions/ShopNow.jsx";
import ScrollToTop from "./scrolltotop.jsx";
import ShippingInfo from "./landingPage/ShippingInfo.jsx";


 

function App() {
  return (
    
      <BrowserRouter basename="/">
      <ScrollToTop/>
       <Routes>
        <Route path="/" element={<HeroRoute />} />
        <Route path="/about" element={<About />} />
         <Route path="/contacts" element={<ContactPage />} />
         <Route path="/order" element={<SupportPage />} />
         <Route path="/signup" element={<Signup />} />
         <Route path="/login" element={<Login />} />
           <Route path="/blog" element={<Blogs />} />
        <Route path="/blog/:id" element={<BlogDetailPage />} />
         <Route path="/fashion" element={<Fashions />} />
         <Route path="/collection" element={<Collection />} />
         <Route path="/shop" element={<ShopNow />} />
         <Route path="/order" element={<Orders />} />
         <Route path="/shipping-info" element={<ShippingInfo />} />
         <Route path="/login" element={<Login />} />
        <Route path="/*" element={<NotPages />} />
      </Routes>
      </BrowserRouter>
  )
}

   export default App;
