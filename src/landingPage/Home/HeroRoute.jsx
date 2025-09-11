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
import Fun from './Fun';
import MainSection from './MainSection';

const HeroRoute = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <HomeSection />
            <MainSection />
            <ImageSection />
            <Buy />
            <Fun />
            <Qna />
            <Support />
            <Contract />
            <Info />
            <Footer />
        </>
    );
};

export default HeroRoute;