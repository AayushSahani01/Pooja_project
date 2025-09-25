import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import OnTopBar from './OnTopBar';
import ScrollToTop from '../scrolltotop';
import { FaShippingFast, FaMoneyBillWave, FaGlobeAmericas, FaTruck } from 'react-icons/fa'; // Importing icons

const ShippingInfo = () => {
  return (
    <>
      <ScrollToTop />
      <OnTopBar />
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-stone-900 via-stone-800 to-stone-950 text-gray-200 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-stone-800/70 backdrop-blur-sm rounded-xl shadow-2xl p-8 md:p-12 border border-stone-700/50">
          <h1 className="text-4xl font-extrabold text-center mb-10 bg-gradient-to-r from-amber-200 to-pink-300 bg-clip-text text-transparent">
            Shipping Information
          </h1>

          {/* Delivery Times */}
          <section className="mb-10 p-6 bg-stone-700/50 rounded-lg border border-stone-600/50 shadow-inner">
            <h2 className="text-3xl font-semibold mb-5 flex items-center text-amber-300">
              <FaShippingFast className="mr-3 text-amber-400" /> Delivery Times
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We strive to process and ship all orders as quickly as possible.
              Delivery times may vary depending on your location and the shipping method selected.
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li><span className="font-medium text-pink-300">Standard Shipping:</span> 5-7 business days</li>
              <li><span className="font-medium text-pink-300">Express Shipping:</span> 2-3 business days</li>
              <li><span className="font-medium text-pink-300">International Shipping:</span> 10-20 business days (customs delays may occur)</li>
            </ul>
            <p className="text-gray-400 text-sm mt-4 italic">
              Please note that these are estimated delivery times and actual delivery may be subject to unforeseen delays.
            </p>
          </section>

          {/* Shipping Costs */}
          <section className="mb-10 p-6 bg-stone-700/50 rounded-lg border border-stone-600/50 shadow-inner">
            <h2 className="text-3xl font-semibold mb-5 flex items-center text-amber-300">
              <FaMoneyBillWave className="mr-3 text-amber-400" /> Shipping Costs
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Shipping costs are calculated based on the weight of your order, the shipping method chosen, and your delivery address.
              You can view the exact shipping cost at checkout before finalizing your purchase.
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li><span className="font-medium text-pink-300">Standard Shipping:</span> $5.00 - $15.00 (depending on order weight)</li>
              <li><span className="font-medium text-pink-300">Express Shipping:</span> $15.00 - $30.00 (depending on order weight)</li>
              <li><span className="font-medium text-pink-300">International Shipping:</span> Calculated at checkout</li>
            </ul>
            <p className="text-gray-400 text-sm mt-4 italic">
              <span className="font-bold text-pink-300">Free standard shipping</span> may be available for orders over a certain amount. Please check our promotions for current offers.
            </p>
          </section>

          {/* Available Regions */}
          <section className="mb-10 p-6 bg-stone-700/50 rounded-lg border border-stone-600/50 shadow-inner">
            <h2 className="text-3xl font-semibold mb-5 flex items-center text-amber-300">
              <FaGlobeAmericas className="mr-3 text-amber-400" /> Available Regions
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We currently ship to the following regions:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>United States</li>
              <li>Canada</li>
              <li>United Kingdom</li>
              <li>European Union (select countries)</li>
              <li>Australia</li>
              <li>New Zealand</li>
            </ul>
            <p className="text-gray-400 text-sm mt-4 italic">
              If your country is not listed, please <a href="/contacts" className="text-pink-400 hover:underline">contact our support team</a> to inquire about special arrangements.
            </p>
          </section>

          {/* Tracking Your Order */}
          <section className="p-6 bg-stone-700/50 rounded-lg border border-stone-600/50 shadow-inner">
            <h2 className="text-3xl font-semibold mb-5 flex items-center text-amber-300">
              <FaTruck className="mr-3 text-amber-400" /> Tracking Your Order
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Once your order has been shipped, you will receive a confirmation email with a tracking number.
              You can use this tracking number to monitor the status of your delivery on our website or the carrier's website.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ShippingInfo;
