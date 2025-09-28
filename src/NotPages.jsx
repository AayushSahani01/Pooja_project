import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './landingPage/Navbar';
import Footer from './landingPage/Footer';

const NotPages = () => {
  return (
    <>
      <Navbar />
      <main id="main-content" className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="max-w-md w-full text-center">
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-gray-300 mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Oops! Page Not Found
            </h2>
            <p className="text-gray-600 mb-8">
              The page you're looking for doesn't exist or has been moved.
            </p>
          </div>
          
          <div className="space-y-4">
            <Link
              to="/"
              className="inline-block bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
            >
              Go Back Home
            </Link>
            
            <div className="text-sm text-gray-500">
              <p>Or try one of these popular pages:</p>
              <div className="mt-4 space-x-4">
                <Link 
                  to="/about" 
                  className="text-red-500 hover:underline focus:outline-none focus:underline"
                >
                  About Us
                </Link>
                <Link 
                  to="/fashion" 
                  className="text-red-500 hover:underline focus:outline-none focus:underline"
                >
                  Fashion
                </Link>
                <Link 
                  to="/contacts" 
                  className="text-red-500 hover:underline focus:outline-none focus:underline"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default NotPages;