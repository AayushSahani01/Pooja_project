import React, { useState, useEffect } from "react";
import { FaInstagramSquare, FaFacebookSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaSquareXTwitter, FaLinkedin, FaHeart } from "react-icons/fa6";
import { SlLocationPin } from "react-icons/sl";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { BiSolidDiscount } from "react-icons/bi";
import { RiCustomerService2Fill } from "react-icons/ri";
import { BsArrowUpCircle, BsShieldCheck } from "react-icons/bs";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail("");
      }, 3000);
    }
  };

  return (
    <>
      <footer className="relative bg-gradient-to-br from-stone-900 via-stone-800 to-stone-950 text-gray-200 pt-16 px-6 md:px-12 lg:px-20 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-[url('https://uploads-ssl.webflow.com/627a529d514e4b6d768ff5a4/62a08feba2e9973cdeb7a6d0_noise.png')] opacity-10"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-amber-500 to-pink-500"></div>

        {/* Floating Elements */}
        <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-gradient-to-r from-pink-600/10 to-amber-500/10 blur-2xl"></div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-r from-amber-500/10 to-pink-600/10 blur-2xl"></div>

        {/* Main Content */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 z-10">
          {/* Brand & Description */}
          <div className="flex flex-col items-center md:items-start">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-pink-600 to-amber-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <img
                src="https://poojadesiner.wordpress.com/wp-content/uploads/2025/03/images-2.jpg"
                alt="Pooja Designer Boutique Logo"
                width={120}
                height={120}
                className="relative rounded-full shadow-lg border-4 border-stone-800 group-hover:border-pink-500/30 transition-all duration-500"
              />
            </div>
            <h1 className="text-2xl font-extrabold tracking-wide mt-4 bg-gradient-to-r from-amber-200 to-pink-300 bg-clip-text text-transparent">
              Pooja Designer Boutique
            </h1>
            <p className="mt-4 text-gray-400 text-sm leading-relaxed text-center md:text-left max-w-xs">
              Welcome to Pooja Designer Boutique, your one-stop destination for
              top-quality designer clothes. We're committed to great prices,
              fast delivery, and excellent customer service.
            </p>

            {/* Trust Badges */}
            <div className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start">
              <div className="flex items-center bg-stone-800/50 backdrop-blur-sm px-3 py-1.5 rounded-full border border-stone-700/50 text-xs">
                <BsShieldCheck className="text-amber-400 mr-1" />
                <span>Secure Payment</span>
              </div>
              <div className="flex items-center bg-stone-800/50 backdrop-blur-sm px-3 py-1.5 rounded-full border border-stone-700/50 text-xs">
                <RiCustomerService2Fill className="text-pink-400 mr-1" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-lg font-semibold mb-4 relative inline-block pb-2">
              Quick Links
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-gradient-to-r from-pink-500 to-amber-500"></span>
            </h2>
            <ul className="space-y-3 text-center md:text-left">
              {[
                { name: "Home", path: "/" },
                { name: "New Arrivals", path: "/collection" },
                { name: "Collections", path: "/collection" },
                { name: "About", path: "/about" },
                { name: "Blog", path: "/blog" },
                { name: "Contact", path: "/contacts" },
              ].map((link, idx) => (
                <li key={idx} className="group">
                  <a
                    href={link.path}
                    className="text-gray-400 hover:text-white transition-all duration-300 flex items-center group-hover:translate-x-1"
                  >
                    <span className="w-2 h-0.5 bg-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-2"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies & Information */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-lg font-semibold mb-4 relative inline-block pb-2">
              Policies & Info
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-gradient-to-r from-amber-500 to-pink-500"></span>
            </h2>
            <ul className="space-y-3 text-center md:text-left">
              {[
                { name: "Terms & Conditions", path: "#" },
                { name: "Privacy Policy", path: "#" },
                { name: "Return Policy", path: "/return-policy" },
                { name: "Shipping Info", path: "/shipping-info" },
                { name: "Size Guide", path: "/size-guide" },
                { name: "Care Instructions", path: "#" },
              ].map((link, idx) => (
                <li key={idx} className="group">
                  <a
                    href={link.path}
                    className="text-gray-400 hover:text-white transition-all duration-300 flex items-center group-hover:translate-x-1"
                  >
                    <span className="w-2 h-0.5 bg-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-2"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Special Offer */}
            <div className="mt-6 p-4 bg-gradient-to-br from-stone-800/50 to-stone-900/50 backdrop-blur-sm rounded-xl border border-stone-700/30 shadow-lg">
              <div className="flex items-center">
                <BiSolidDiscount className="text-2xl text-amber-400 mr-2" />
                <div>
                  <p className="text-sm font-medium">First Order Discount</p>
                  <p className="text-xs text-gray-400">Use code: WELCOME15</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact & Newsletter */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-lg font-semibold mb-4 relative inline-block pb-2">
              Stay Connected
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-gradient-to-r from-pink-500 to-amber-500"></span>
            </h2>

            {/* Contact Details */}
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3 text-sm">
                <SlLocationPin className="text-lg mt-0.5 text-amber-400 flex-shrink-0" />
                <p className="text-gray-400">
                  HOUSE NO 38, BLOCK 4, MOTI NAGAR, Ramesh Nagar, New Delhi,
                  West Delhi - 110015
                </p>
              </div>

              <div className="flex items-center gap-3 text-sm">
                <MdOutlineMarkEmailRead className="text-lg text-pink-400 flex-shrink-0" />
                <a
                  href="mailto:contact@100xdevs.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  contact@100xdevs.com
                </a>
              </div>

              <div className="text-sm text-gray-400">Phone: +91 9999999999</div>
            </div>

            {/* Newsletter */}
            <div className="w-full">
              <p className="text-sm text-gray-400 mb-3">
                Subscribe to our newsletter
              </p>
              {subscribed ? (
                <div className="p-3 bg-green-900/30 border border-green-700/30 rounded-lg text-center text-green-300 text-sm">
                  Thank you for subscribing!
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="w-full bg-stone-800/50 backdrop-blur-sm border border-stone-700/50 rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500/30 focus:border-pink-500/30 transition-all"
                    required
                  />
                  <button
                    type="submit"
                    className="absolute right-1 top-1 bg-gradient-to-r from-pink-600 to-amber-600 hover:from-pink-700 hover:to-amber-700 text-white py-2 px-4 rounded-lg text-sm transition-all duration-300 transform hover:scale-105"
                  >
                    Join
                  </button>
                </form>
              )}
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <p className="text-sm text-gray-400 mb-3">Follow Us</p>
              <div className="flex space-x-3">
                {[
                  {
                    icon: <FaInstagramSquare className="text-xl" />,
                    color: "hover:text-pink-400",
                  },
                  {
                    icon: <FaFacebookSquare className="text-xl" />,
                    color: "hover:text-blue-400",
                  },
                  {
                    icon: <IoLogoYoutube className="text-xl" />,
                    color: "hover:text-red-400",
                  },
                  {
                    icon: <FaSquareXTwitter className="text-xl" />,
                    color: "hover:text-gray-300",
                  },
                  {
                    icon: <FaLinkedin className="text-xl" />,
                    color: "hover:text-blue-300",
                  },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className={`p-2 bg-stone-800/50 backdrop-blur-sm rounded-lg border border-stone-700/30 text-gray-400 ${social.color} transition-all duration-300 hover:bg-stone-700/50 hover:scale-110`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 pb-6 border-t border-stone-700/50 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-stone-900 px-4">
            <div className="flex items-center text-xs">
              <span className="mr-1">Made with</span>
              <FaHeart className="text-pink-500 animate-pulse" />
              <span className="ml-1">in India</span>
              <span className="ml-1">🇮🇳</span>
            </div>
          </div>

          <p>
            © {new Date().getFullYear()} Pooja Designer Boutique. All Rights
            Reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Sitemap
            </a>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-5 z-50 p-4 bg-gradient-to-br from-stone-800 to-stone-900 text-amber-400 rounded-full shadow-lg border border-stone-700/50 hover:from-amber-500 hover:to-pink-500 hover:text-white transition-all duration-300 transform hover:scale-110"
          aria-label="Scroll to top"
        >
          <BsArrowUpCircle className="text-xl" />
        </button>
      )}
    </>
  );
};

export default Footer;
