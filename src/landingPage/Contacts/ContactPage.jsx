import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar.jsx';
import Footer from '../Footer.jsx';
import Info from '../Home/Info.jsx';

const ContactPage = () => {
    return (
        <>
        <Navbar />
            <div className="pt-24 m-0 text-center font-serif">
                <h1 className='text-4xl font-bold'>Contact Us</h1>
                <p className='text-2xl pt-2 text-slate-500'>We are a company dedicated to providing the best services to our customers.</p>
            </div>
            <Info />
            <Footer />
   
       </>
    );
};

export default ContactPage;