import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SimpleLandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="/Assets/pooja-logo.jpg" 
                alt="Pooja Logo" 
                className="h-10 w-auto"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <span 
                className="ml-3 text-2xl font-playfair font-bold text-purple-800 text-elegant hidden"
              >
                Pooja Fashion
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link to="/" className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-poppins font-medium transition-all duration-300 hover:scale-105">
                  Home
                </Link>
                <Link to="/fashion" className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-poppins font-medium transition-all duration-300 hover:scale-105">
                  Fashion
                </Link>
                <Link to="/collection" className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-poppins font-medium transition-all duration-300 hover:scale-105">
                  Collection
                </Link>
                <Link to="/about" className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-poppins font-medium transition-all duration-300 hover:scale-105">
                  About
                </Link>
                <Link to="/contacts" className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-poppins font-medium transition-all duration-300 hover:scale-105">
                  Contact
                </Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-purple-600 p-2"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link to="/" className="text-gray-700 hover:text-purple-600 block px-3 py-2 text-base font-medium">
                  Home
                </Link>
                <Link to="/fashion" className="text-gray-700 hover:text-purple-600 block px-3 py-2 text-base font-medium">
                  Fashion
                </Link>
                <Link to="/collection" className="text-gray-700 hover:text-purple-600 block px-3 py-2 text-base font-medium">
                  Collection
                </Link>
                <Link to="/about" className="text-gray-700 hover:text-purple-600 block px-3 py-2 text-base font-medium">
                  About
                </Link>
                <Link to="/contacts" className="text-gray-700 hover:text-purple-600 block px-3 py-2 text-base font-medium">
                  Contact
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-gray-900 mb-6 text-elegant text-shadow-elegant leading-tight">
                Embrace 
                <span className="text-luxury font-dancing text-5xl md:text-6xl lg:text-7xl">
                  {" "}Traditional
                </span>
                <br />
                <span className="font-cormorant italic">Elegance</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 font-poppins font-light leading-relaxed animate-slide-up">
                Discover the beauty of traditional Indian wear. From stunning sarees to elegant lehengas, 
                find your perfect traditional outfit that celebrates your heritage and style.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up">
                <Link 
                  to="/shop"
                  className="bg-purple-600 text-white px-8 py-4 rounded-lg text-lg font-poppins font-semibold hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                >
                  Shop Traditional Wear
                </Link>
                <Link 
                  to="/collection"
                  className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg text-lg font-poppins font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300 hover:shadow-lg"
                >
                  View Collection
                </Link>
              </div>
            </div>

            {/* Image Section */}
            <div className="relative">
              <div className="relative z-10">
                {/* Main featured image */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="/Assets/image1.jpg" 
                    alt="Beautiful woman in traditional Indian wear" 
                    className="w-full h-96 lg:h-[500px] object-cover"
                    onError={(e) => {
                      // Fallback to a placeholder if image fails to load
                      e.target.src = "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                
                {/* Floating accent images */}
                <div className="hidden lg:block absolute -top-6 -right-6 w-24 h-24 rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="/Assets/image2.webp" 
                    alt="Traditional jewelry" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1617039487629-c80f0101482b?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80";
                    }}
                  />
                </div>
                
                <div className="hidden lg:block absolute -bottom-6 -left-6 w-20 h-20 rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="/Assets/image3.webp" 
                    alt="Traditional patterns" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1610030469983-98e550d6193c?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80";
                    }}
                  />
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-purple-200 rounded-full opacity-30 blur-xl"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-pink-200 rounded-full opacity-30 blur-xl"></div>
            </div>
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-purple-200 rounded-full opacity-10"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-pink-200 rounded-full opacity-10"></div>
      </div>

      {/* Traditional Wear Showcase */}
      <div className="py-20 bg-gradient-to-b from-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mb-4 text-elegant">
              Traditional 
              <span className="font-dancing text-luxury text-4xl md:text-5xl">Elegance</span> 
              <span className="font-cormorant italic">Collection</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-poppins font-light leading-relaxed">
              Immerse yourself in the timeless beauty of traditional Indian fashion. Each piece tells a story of heritage, craftsmanship, and contemporary style.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {/* Saree Collection */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img 
                src="/Assets/image4.webp" 
                alt="Elegant Saree Collection" 
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1583391733956-6c78276477e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-playfair font-semibold mb-2 text-elegant">Exquisite Sarees</h3>
                <p className="text-sm opacity-90 font-poppins font-light">Handwoven with love, designed for grace</p>
              </div>
            </div>

            {/* Lehenga Collection */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img 
                src="/Assets/image5.webp" 
                alt="Beautiful Lehenga Collection" 
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1610030469667-1b4e21b7defe?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-playfair font-semibold mb-2 text-elegant">Stunning Lehengas</h3>
                <p className="text-sm opacity-90 font-poppins font-light">Perfect for celebrations and special occasions</p>
              </div>
            </div>

            {/* Anarkali Collection */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img 
                src="/Assets/image6.webp" 
                alt="Graceful Anarkali Suits" 
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-playfair font-semibold mb-2 text-elegant">Elegant Anarkalis</h3>
                <p className="text-sm opacity-90 font-poppins font-light">Flowing elegance meets modern sophistication</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mb-4 text-elegant">
              Why Choose 
              <span className="font-dancing text-luxury text-4xl md:text-5xl">Pooja Fashion</span>?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-poppins font-light leading-relaxed">
              We bring you the finest collection of traditional wear with authentic craftsmanship and modern styling.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-playfair font-semibold text-gray-900 mb-2 text-elegant">Authentic Heritage</h3>
              <p className="text-gray-600 font-poppins font-light leading-relaxed">
                Traditional designs rooted in Indian culture, crafted by skilled artisans with generations of expertise.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
              </div>
              <h3 className="text-xl font-playfair font-semibold text-gray-900 mb-2 text-elegant">Premium Fabrics</h3>
              <p className="text-gray-600 font-poppins font-light leading-relaxed">
                Luxurious silks, soft cottons, and finest materials sourced for comfort and elegance that lasts.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-playfair font-semibold text-gray-900 mb-2 text-elegant">Perfect Fit</h3>
              <p className="text-gray-600 font-poppins font-light leading-relaxed">
                Custom tailoring and size options to ensure every outfit fits you perfectly and enhances your natural beauty.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative bg-gradient-to-r from-purple-600 to-pink-600 py-16 overflow-hidden">
        {/* Background image overlay */}
        <div className="absolute inset-0 opacity-20">
          <img 
            src="/Assets/wallpaper.jpg" 
            alt="Traditional background" 
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-4 text-elegant text-shadow-elegant">
            Celebrate Your 
            <span className="font-dancing text-4xl md:text-5xl text-pink-200">Heritage</span> 
            in Style
          </h2>
          <p className="text-lg text-purple-100 mb-8 max-w-3xl mx-auto font-poppins font-light leading-relaxed">
            Step into a world where tradition meets contemporary elegance. Discover handcrafted pieces 
            that honor our rich cultural heritage while embracing modern sensibilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/fashion"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg text-lg font-poppins font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              Explore Traditional Wear
            </Link>
            <Link 
              to="/collection"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-poppins font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 hover:shadow-lg"
            >
              View Latest Arrivals
            </Link>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-16 -translate-y-16"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/10 rounded-full translate-x-20 translate-y-20"></div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-playfair font-semibold mb-4 text-elegant">Pooja Fashion</h3>
              <p className="text-gray-400 font-poppins font-light">
                Your destination for premium traditional fashion and timeless style.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-playfair font-semibold mb-4 text-elegant">Quick Links</h4>
              <div className="space-y-2">
                <Link to="/fashion" className="text-gray-400 hover:text-white block font-poppins transition-colors duration-300">Fashion</Link>
                <Link to="/collection" className="text-gray-400 hover:text-white block font-poppins transition-colors duration-300">Collection</Link>
                <Link to="/about" className="text-gray-400 hover:text-white block font-poppins transition-colors duration-300">About Us</Link>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-playfair font-semibold mb-4 text-elegant">Support</h4>
              <div className="space-y-2">
                <Link to="/contacts" className="text-gray-400 hover:text-white block font-poppins transition-colors duration-300">Contact</Link>
                <Link to="/shipping-info" className="text-gray-400 hover:text-white block font-poppins transition-colors duration-300">Shipping</Link>
                <Link to="/size-guide" className="text-gray-400 hover:text-white block font-poppins transition-colors duration-300">Size Guide</Link>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-playfair font-semibold mb-4 text-elegant">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.404-5.956 1.404-5.956s-.359-.719-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.724.099.120.112.225.085.347-.091.381-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 23.888 12.017 23.888c6.624 0 11.99-5.367 11.99-11.989C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 font-poppins font-light">
              © 2025 
              <span className="font-dancing text-purple-400 text-lg mx-1">Pooja Fashion</span>
              . All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SimpleLandingPage;
