import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Info = () => {
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 md:p-12">
        {/* LEFT SIDE - Contact Info */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col justify-center space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get in <span className="text-indigo-500">Touch</span>
          </h2>
          <p className="text-lg text-gray-500">
            We’d love to hear from you! Whether you have a question, feedback,
            or just want to say hello — drop us a message.
          </p>

          <div className="space-y-4 mt-6">
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-indigo-400 text-2xl" />
              <span className="text-lg">(123) 456-7890</span>
            </div>
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-indigo-400 text-2xl" />
              <span className="text-lg">hi@mygroovydomain.com</span>
            </div>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-indigo-400 text-2xl" />
              <span className="text-lg">
                123 Example Street, San Francisco, CA 12345
              </span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE - Contact Form */}
        <motion.form
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg p-6 md:p-8 flex flex-col gap-5"
        >
          <h3 className="text-2xl font-semibold mb-2">
            Send us a Message
          </h3>

          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg border border-slate-300 bg-white/10 placeholder-gray-500 outline-none focus:ring-2 focus:ring-indigo-400 transition"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-lg border border-slate-300 bg-white/10 placeholder-gray-500 outline-none focus:ring-2 focus:ring-indigo-400 transition"
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full p-3 rounded-lg border border-slate-300 bg-white/10 placeholder-gray-500 outline-none focus:ring-2 focus:ring-indigo-400 transition"
          ></textarea>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 rounded-full transition duration-300 shadow-lg"
          >
            Submit Feedback
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
};

export default Info;
