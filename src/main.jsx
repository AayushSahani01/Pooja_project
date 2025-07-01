import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from "./landingPage/Navbar.jsx";
import HomeSection from "./landingPage/HomeSection.jsx";
import MainSection from "./landingPage/MainSection.jsx";
import ImageSection from "./landingPage/ImageSection.jsx";
import Buy from "./landingPage/Buy.jsx";
import Qna from "./landingPage/Qna.jsx";
import Fun from "./landingPage/Fun.jsx";
import Contract from "./landingPage/Contract.jsx";
import Info from "./landingPage/Info.jsx";
import Support from "./landingPage/Support.jsx";
import Footer from "./landingPage/Footer.jsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter>
               <Routes>
                <Route path="/" element={<App />} />
                    <Route path="/" element={<Navbar />} />
                    <Route path="/" element={<HomeSection />} />
                    <Route path="/main" element={<MainSection />} />
                    <Route path="/image" element={<ImageSection />} />
                    <Route path="/buy" element={<Buy />} />
                    <Route path="/qna" element={<Qna />} />
                    <Route path="/fun" element={<Fun />} />
                    <Route path="/contract" element={<Contract />} />
                    <Route path="/info" element={<Info />} />
                    <Route path="/support" element={<Support />} />
                    <Route path="/footer" element={<Footer />} />
               </Routes>
           </BrowserRouter>
  </StrictMode>,
)
