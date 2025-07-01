import React from "react";
import "./App.css";
import Navbar from "./landingPage/Navbar";
import HomeSection from "./landingPage/HomeSection";
import MainSection from "./landingPage/MainSection.jsx";
import ImageSection from "./landingPage/ImageSection.jsx";
import Buy from "./landingPage/Buy.jsx";
import Qna from "./landingPage/Qna.jsx";
import Fun from "./landingPage/Fun.jsx";
import Contract from "./landingPage/Contract.jsx";
import Info from "./landingPage/Info.jsx";
import Support from "./landingPage/Support.jsx";
import Footer from "./landingPage/Footer.jsx";
    

   function App() {
       return (
          <div>
            <Navbar />
            <HomeSection />
            <MainSection />
            <ImageSection />
            <Buy />
            <Qna />
            <Fun />
            <Contract />
            <Info />
            <Support />
            <Footer />
          </div> 
       );
   }

   export default App;