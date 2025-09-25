import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import OnTopBar from './OnTopBar';
import ScrollToTop from '../scrolltotop';
import { FaRulerCombined, FaWeight, FaTape, FaInfoCircle } from 'react-icons/fa';

const SizeGuide = () => {
  return (
    <>
      <ScrollToTop />
      <OnTopBar />
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-stone-900 via-stone-800 to-stone-950 text-gray-200 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-stone-800/70 backdrop-blur-sm rounded-xl shadow-2xl p-8 md:p-12 border border-stone-700/50">
          <h1 className="text-4xl font-extrabold text-center mb-10 bg-gradient-to-r from-amber-200 to-pink-300 bg-clip-text text-transparent">
            Size Guide
          </h1>

          {/* How to Measure */}
          <section className="mb-10 p-6 bg-stone-700/50 rounded-lg border border-stone-600/50 shadow-inner">
            <h2 className="text-3xl font-semibold mb-5 flex items-center text-amber-300">
              <FaRulerCombined className="mr-3 text-amber-400" /> How to Measure
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              To ensure the best fit, please follow our guide on how to take your measurements accurately.
              Use a flexible measuring tape and measure close to your body, but not too tight.
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li><span className="font-medium text-pink-300">Bust:</span> Measure around the fullest part of your bust, keeping the tape parallel to the floor.</li>
              <li><span className="font-medium text-pink-300">Waist:</span> Measure around the narrowest part of your waist, usually just above your belly button.</li>
              <li><span className="font-medium text-pink-300">Hips:</span> Measure around the fullest part of your hips, typically 7-9 inches below your natural waistline.</li>
              <li><span className="font-medium text-pink-300">Inseam:</span> Measure from the top of your inner thigh down to your ankle.</li>
            </ul>
          </section>

          {/* Women's Size Chart */}
          <section className="mb-10 p-6 bg-stone-700/50 rounded-lg border border-stone-600/50 shadow-inner">
            <h2 className="text-3xl font-semibold mb-5 flex items-center text-amber-300">
              <FaTape className="mr-3 text-amber-400" /> Women's Size Chart
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-stone-900/50 rounded-lg">
                <thead>
                  <tr className="bg-stone-700/50 text-pink-300 uppercase text-sm leading-normal">
                    <th className="py-3 px-6 text-left">Size</th>
                    <th className="py-3 px-6 text-left">Bust (in)</th>
                    <th className="py-3 px-6 text-left">Waist (in)</th>
                    <th className="py-3 px-6 text-left">Hips (in)</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300 text-sm font-light">
                  <tr className="border-b border-stone-600/50 hover:bg-stone-800/50">
                    <td className="py-3 px-6 text-left whitespace-nowrap">XS</td>
                    <td className="py-3 px-6 text-left">31-32</td>
                    <td className="py-3 px-6 text-left">23-24</td>
                    <td className="py-3 px-6 text-left">33-34</td>
                  </tr>
                  <tr className="border-b border-stone-600/50 hover:bg-stone-800/50">
                    <td className="py-3 px-6 text-left whitespace-nowrap">S</td>
                    <td className="py-3 px-6 text-left">33-34</td>
                    <td className="py-3 px-6 text-left">25-26</td>
                    <td className="py-3 px-6 text-left">35-36</td>
                  </tr>
                  <tr className="border-b border-stone-600/50 hover:bg-stone-800/50">
                    <td className="py-3 px-6 text-left whitespace-nowrap">M</td>
                    <td className="py-3 px-6 text-left">35-36</td>
                    <td className="py-3 px-6 text-left">27-28</td>
                    <td className="py-3 px-6 text-left">37-38</td>
                  </tr>
                  <tr className="border-b border-stone-600/50 hover:bg-stone-800/50">
                    <td className="py-3 px-6 text-left whitespace-nowrap">L</td>
                    <td className="py-3 px-6 text-left">37-39</td>
                    <td className="py-3 px-6 text-left">29-31</td>
                    <td className="py-3 px-6 text-left">39-41</td>
                  </tr>
                  <tr className="hover:bg-stone-800/50">
                    <td className="py-3 px-6 text-left whitespace-nowrap">XL</td>
                    <td className="py-3 px-6 text-left">40-42</td>
                    <td className="py-3 px-6 text-left">32-34</td>
                    <td className="py-3 px-6 text-left">42-44</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Important Notes */}
          <section className="p-6 bg-stone-700/50 rounded-lg border border-stone-600/50 shadow-inner">
            <h2 className="text-3xl font-semibold mb-5 flex items-center text-amber-300">
              <FaInfoCircle className="mr-3 text-amber-400" /> Important Notes
            </h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Sizes may vary slightly between different styles and brands.</li>
              <li>If you are between sizes, we recommend sizing up for a more comfortable fit.</li>
              <li>If you are between sizes, we recommend sizing up for a more comfortable fit.</li>
              <li>Refer to the specific product page for any unique sizing recommendations.</li>
              <li>Our customer service team is always here to help with any sizing questions!</li>
            </ul>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SizeGuide;
