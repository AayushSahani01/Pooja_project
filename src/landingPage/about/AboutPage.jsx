import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar.jsx';
import Contract from '../Contract.jsx';
import Footer from '../Footer.jsx';
import Support from '../Support.jsx';
import Qna from '../Qna.jsx';

const About = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <div className="about-section p-17 bg-gray-100 text-center">
                <h1>About Us</h1>
                <p>We are a company dedicated to providing the best services to our customers.</p>
            </div>
            <Contract />
            <Support />
            <Footer />
            <Qna />
        </div>
    );
}
export default About;