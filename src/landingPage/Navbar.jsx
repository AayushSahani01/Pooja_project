import React, { useState, useEffect } from "react";
import { FaGithubSquare } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollWidth(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Skip to main content link for screen readers */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white text-black px-4 py-2 rounded-md z-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Skip to main content
      </a>
      
      <header className="fixed w-full z-40 shadow-lg" role="banner">
        {/* Top Scroll Line */}
        <div
          className="h-[4px] bg-gradient-to-r from-red-800 via-red-500 to-orange-800 transition-all duration-300"
          style={{ width: `${scrollWidth}%` }}
          role="progressbar"
          aria-label="Page scroll progress"
          aria-valuenow={Math.round(scrollWidth)}
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>

      {/* Navbar */}
      <div className="bg-gradient-to-r from-red-500 via-red-400 to-orange-500 text-white">
        <div className="flex flex-row justify-evenly items-center px-4 py-2">
          {/* Logo */}
          <div className="w-2/6">
            <Link to="/">
              <img
                src="https://poojadesiner.wordpress.com/wp-content/uploads/2025/03/images-2.jpg"
                alt="logo"
                className="w-18 h-14 rounded-full cursor-pointer hover:scale-110 transition-transform duration-300"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:block" role="navigation" aria-label="Main navigation">
            <ul className="flex flex-row justify-evenly gap-x-6 text-[19px] items-center">
              {[
                { title: "Home", link: "/" },
                { title: "About", link: "/about" },
                { title: "Blog", link: "/blog" },
                { title: "Fashions", link: "/fashion" },
                { title: "Collection", link: "/collection" },
                { title: "Contacts", link: "/contacts" },
                { title: "Order", link: "/order" },
              ].map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item.link}
                    className="cursor-pointer font-semibold hover:text-black hover:bg-white hover:rounded-md px-2 py-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                    aria-label={`Navigate to ${item.title} page`}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}

              {/* Github */}
              <li>
                <Link 
                  to="https://github.com/AayushSahani01/Pooja_project"
                  className="text-3xl cursor-pointer hover:animate-bounce hover:text-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded"
                  aria-label="Visit our GitHub repository"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithubSquare />
                </Link>
              </li>

              {/* Login */}
              <li>
                <Link 
                  to="/login"
                  className="text-3xl cursor-pointer hover:text-black hover:animate-pulse focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded"
                  aria-label="Login to your account"
                >
                  <FiLogIn />
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="text-4xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded"
              aria-label={open ? "Close mobile menu" : "Open mobile menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              <MdMenu />
            </button>
            
            {open && (
              <div 
                id="mobile-menu"
                className="absolute top-0 left-0 w-full h-screen bg-red-600 flex flex-col justify-center items-center text-white z-50"
                role="dialog"
                aria-modal="true"
                aria-labelledby="mobile-menu-title"
              >
                <h2 id="mobile-menu-title" className="sr-only">Mobile Navigation Menu</h2>
                
                {/* Close button */}
                <button
                  onClick={() => setOpen(false)}
                  className="absolute top-6 right-6 text-3xl hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded"
                  aria-label="Close mobile menu"
                >
                  ×
                </button>

                <nav role="navigation" aria-label="Mobile navigation">
                  <ul className="flex flex-col gap-y-6 text-xl font-semibold">
                    {[
                      { title: "Home", link: "/" },
                      { title: "About", link: "/about" },
                      { title: "Blog", link: "/blog" },
                      { title: "Fashions", link: "/fashion" },
                      { title: "Collection", link: "/collection" },
                      { title: "Contacts", link: "/contacts" },
                      { title: "Order", link: "/order" },
                    ].map((item, index) => (
                      <li key={index}>
                        <Link
                          to={item.link}
                          onClick={() => setOpen(false)}
                          className="hover:text-black hover:bg-white px-4 py-2 rounded-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                          aria-label={`Navigate to ${item.title} page`}
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>
      </header>
    </>
  );
};

export default Navbar;
