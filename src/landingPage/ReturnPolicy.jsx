import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import OnTopBar from './OnTopBar';
import ScrollToTop from '../scrolltotop';
import { FaUndo, FaBoxOpen, FaCreditCard, FaExclamationCircle } from 'react-icons/fa';

const ReturnPolicy = () => {
  return (
    <>
      <ScrollToTop />
      <OnTopBar />
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-stone-900 via-stone-800 to-stone-950 text-gray-200 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-stone-800/70 backdrop-blur-sm rounded-xl shadow-2xl p-8 md:p-12 border border-stone-700/50">
          <h1 className="text-4xl font-extrabold text-center mb-10 bg-gradient-to-r from-amber-200 to-pink-300 bg-clip-text text-transparent">
            Return Policy
          </h1>

          {/* Eligibility */}
          <section className="mb-10 p-6 bg-stone-700/50 rounded-lg border border-stone-600/50 shadow-inner">
            <h2 className="text-3xl font-semibold mb-5 flex items-center text-amber-300">
              <FaBoxOpen className="mr-3 text-amber-400" /> Eligibility
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We want you to be completely satisfied with your purchase. If you are not, you may return most new, unworn items within 30 days of delivery for a full refund.
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Items must be in their original condition, with all tags attached.</li>
              <li>Items must be unworn, unwashed, and free of any alterations or damage.</li>
              <li>Original packaging must be included.</li>
            </ul>
          </section>

          {/* How to Initiate a Return */}
          <section className="mb-10 p-6 bg-stone-700/50 rounded-lg border border-stone-600/50 shadow-inner">
            <h2 className="text-3xl font-semibold mb-5 flex items-center text-amber-300">
              <FaUndo className="mr-3 text-amber-400" /> How to Initiate a Return
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              To start a return, please contact our customer support team with your order number and the reason for the return.
            </p>
            <ol className="list-decimal list-inside text-gray-300 space-y-2 ml-4">
                <li>Contact us at <a href="mailto:contact@100xdevs.com" className="text-pink-400 hover:underline">contact@100xdevs.com</a> or through our <a href="/contacts" className="text-pink-400 hover:underline">contact page</a>.</li>
                <li>Our team will provide you with a return authorization and shipping instructions.</li>
                <li>Package the item securely and ship it to the address provided.</li>
            </ol>
          </section>

          {/* Refunds */}
          <section className="mb-10 p-6 bg-stone-700/50 rounded-lg border border-stone-600/50 shadow-inner">
            <h2 className="text-3xl font-semibold mb-5 flex items-center text-amber-300">
              <FaCreditCard className="mr-3 text-amber-400" /> Refunds
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Once we receive and inspect your return, we will process your refund.
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Refunds will be issued to the original method of payment.</li>
              <li>Please allow 5-7 business days for the refund to appear on your statement.</li>
              <li>Shipping costs are non-refundable, unless the return is due to our error.</li>
            </ul>
          </section>

          {/* Non-Returnable Items */}
          <section className="p-6 bg-stone-700/50 rounded-lg border border-stone-600/50 shadow-inner">
            <h2 className="text-3xl font-semibold mb-5 flex items-center text-amber-300">
              <FaExclamationCircle className="mr-3 text-amber-400" /> Non-Returnable Items
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Certain items are not eligible for return, including:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Final sale items</li>
                <li>Custom-made or personalized items</li>
                <li>Gift cards</li>
            </ul>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ReturnPolicy;