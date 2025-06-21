import React from 'react'
import './App.css'
import Navbar from './landingPage/Navbar.jsx';
import HomeSection from './landingPage/HomeSection.jsx';
import MainSection from './landingPage/MainSection.jsx';
import ImageSection from './landingPage/ImageSection.jsx';
import Buy from './landingPage/Buy.jsx';
import Qna from './landingPage/Qna.jsx';
import Fun from './landingPage/Fun.jsx';
import Contract from './landingPage/Contract.jsx';
import Info from './landingPage/Info.jsx';
import Support from './landingPage/Support.jsx';
import Footer  from './landingPage/Footer.jsx'



function App() {
 

  return (
    <>
      <Navbar />
      <HomeSection />
      <MainSection />
      <ImageSection />
      <Buy />
      <Fun />
      <Contract />
      <Info />
      <Support />
      <Footer />
      <Qna />


    </>
  )
}

export default App
