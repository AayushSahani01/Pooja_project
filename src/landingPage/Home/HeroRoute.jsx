import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar';
import Contract from '../Contract.jsx';
import Footer from '../Footer.jsx';
import Support from '../Support.jsx';
import Qna from '../Qna.jsx';
import HomeSection from './HomeSection';
import ImageSection from './ImageSection';
import Buy from './Buy';
import Info from './Info';
import Faq from './Faq.jsx';
import MainSection from './MainSection';

const HeroRoute = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <HomeSection />
            <MainSection />
            <ImageSection />
            <Buy />
            <Faq />
            <Contract />
            <Info />
            <Support />
            <Footer />
            <Qna />
        </div>
    );
};

export default HeroRoute;