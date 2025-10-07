import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import OnTopBar from './OnTopBar';
import ScrollToTop from '../scrolltotop';
import { FaTshirt, FaTemperatureHigh, FaSun, FaArchive } from 'react-icons/fa'; // Example icons

const CareInstructions = () => {
  return (
    <>
      <ScrollToTop />
      <OnTopBar />
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-stone-900 via-stone-800 to-stone-950 text-gray-200 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-stone-800/70 backdrop-blur-sm rounded-xl shadow-2xl p-8 md:p-12 border border-stone-700/50">
          <h1 className="text-4xl font-extrabold text-center mb-10 bg-gradient-to-r from-amber-200 to-pink-300 bg-clip-text text-transparent">
            Care Instructions
          </h1>

          {/* Washing Instructions */}
          <section className="mb-10 p-6 bg-stone-700/50 rounded-lg border border-stone-600/50 shadow-inner">
            <h2 className="text-3xl font-semibold mb-5 flex items-center text-amber-300">
              <FaTshirt className="mr-3 text-amber-400" /> Washing
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Proper washing is key to maintaining the beauty of your garments.
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li><span className="font-medium text-pink-300">Cottons:</span> Machine wash cold with like colors. Use a gentle cycle.</li>
              <li><span className="font-medium text-pink-300">Silks & Delicates:</span> Hand wash in cold water with a mild detergent. Do not wring.</li>
              <li><span className="font-medium text-pink-300">Synthetics (Polyester, Nylon):</span> Machine wash cold. These fabrics are durable but high heat can damage them.</li>
              <li><span className="font-medium text-pink-300">Embellished & Embroidered:</span> Dry clean only to protect the intricate details.</li>
            </ul>
          </section>

          {/* Drying Instructions */}
          <section className="mb-10 p-6 bg-stone-700/50 rounded-lg border border-stone-600/50 shadow-inner">
            <h2 className="text-3xl font-semibold mb-5 flex items-center text-amber-300">
              <FaSun className="mr-3 text-amber-400" /> Drying
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              To prevent shrinking and damage, follow these drying guidelines.
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li><span className="font-medium text-pink-300">Cottons:</span> Tumble dry on low heat or hang to dry. High heat can cause shrinkage.</li>
              <li><span className="font-medium text-pink-300">Silks & Delicates:</span> Lay flat on a clean, dry towel away from direct sunlight.</li>
              <li><span className="font-medium text-pink-300">Synthetics:</span> Tumble dry on low or no heat. They dry quickly.</li>
            </ul>
          </section>

          {/* Ironing Instructions */}
          <section className="mb-10 p-6 bg-stone-700/50 rounded-lg border border-stone-600/50 shadow-inner">
            <h2 className="text-3xl font-semibold mb-5 flex items-center text-amber-300">
              <FaTemperatureHigh className="mr-3 text-amber-400" /> Ironing
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Keep your clothes wrinkle-free with proper ironing techniques.
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li><span className="font-medium text-pink-300">Cottons:</span> Iron on a high setting, preferably while the fabric is still slightly damp.</li>
              <li><span className="font-medium text-pink-300">Silks & Delicates:</span> Use a low heat setting and iron on the reverse side. Place a cloth between the iron and the fabric.</li>
              <li><span className="font-medium text-pink-300">Synthetics:</span> Use a low to medium heat setting. High heat can melt the fibers.</li>
            </ul>
          </section>

          {/* Storage Instructions */}
          <section className="p-6 bg-stone-700/50 rounded-lg border border-stone-600/50 shadow-inner">
            <h2 className="text-3xl font-semibold mb-5 flex items-center text-amber-300">
              <FaArchive className="mr-3 text-amber-400" /> Storage
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Store your designer pieces correctly to ensure they last a lifetime.
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Store in a cool, dry place away from direct sunlight.</li>
                <li>Use padded hangers for delicate items to avoid stretching or distortion.</li>
                <li>For long-term storage, use breathable garment bags. Avoid plastic bags which can trap moisture.</li>
            </ul>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CareInstructions;
