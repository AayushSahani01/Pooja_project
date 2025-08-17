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
    <div className="fixed w-full z-50 shadow-lg">
      {/* Top Scroll Line */}
      <div
        className="h-[4px] bg-gradient-to-r from-red-500 to-orange-600 transition-all duration-300"
        style={{ width: `${scrollWidth}%` }}
      ></div>

      {/* Navbar */}
      <div className="bg-gradient-to-r from-red-600 via-red-500 to-orange-500 text-white">
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
          <div className="hidden md:block">
            <ul className="flex flex-row justify-evenly gap-x-6 text-[19px] items-center">
              {[
                { title: "Home", link: "/" },
                { title: "About", link: "/about" },
                { title: "Blog", link: "/blog" },
                { title: "Fashions", link: "/fashion" },
                { title: "Collection", link: "/collection" },
                { title: "Contacts", link: "/contacts" },
                { title: "Support", link: "/support" },
              ].map((item, index) => (
                <Link to={item.link} key={index}>
                  <li className="cursor-pointer font-semibold hover:text-black hover:bg-white hover:rounded-md px-2 py-1 transition-all duration-300">
                    {item.title}
                  </li>
                </Link>
              ))}

              {/* Github */}
              <Link to="https://github.com/AayushSahani01/Pooja_project">
                <li className="text-3xl cursor-pointer hover:animate-bounce hover:text-black">
                  <FaGithubSquare />
                </li>
              </Link>

              {/* Login */}
              <Link to="/login">
                <li className="text-3xl cursor-pointer hover:text-black hover:animate-pulse">
                  <FiLogIn />
                </li>
              </Link>
            </ul>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <MdMenu
              className="text-4xl cursor-pointer"
              onClick={() => setOpen(!open)}
            />
            {open && (
              <div className="absolute top-0 left-0 w-full h-screen bg-red-600 flex flex-col justify-center items-center text-white">
                <ul className="flex flex-col gap-y-6 text-xl font-semibold">
                  {[
                    { title: "Home", link: "/" },
                    { title: "About", link: "/about" },
                    { title: "Blog", link: "/blog" },
                    { title: "Fashions", link: "/fashion" },
                    { title: "Collection", link: "/collection" },
                    { title: "Contacts", link: "/contacts" },
                    { title: "Support", link: "/support" },
                  ].map((item, index) => (
                    <Link
                      to={item.link}
                      key={index}
                      onClick={() => setOpen(false)}
                    >
                      <li className="hover:text-black hover:bg-white px-4 py-2 rounded-md transition-all duration-300">
                        {item.title}
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
