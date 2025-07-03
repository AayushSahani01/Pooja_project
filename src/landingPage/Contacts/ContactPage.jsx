import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar.jsx';
import Contract from '../Contract.jsx';
import Footer from '../Footer.jsx';

const ContactPage = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <div className="about-section p-18 m-0 bg-slate-200 rounded-lg shadow-lg">
                <h1>ContactPages Us</h1>
                <p>We are a company dedicated to providing the best services to our customers.</p>
            </div>
            <Contract />
            <Footer />
   
        </div>
    );
};

export default ContactPage;