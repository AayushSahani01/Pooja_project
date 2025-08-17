import React from "react";
import Navbar from "../Navbar";
import { motion } from "framer-motion";

const ShopNow = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-b from-pink-50 to-white min-h-screen py-12 px-6 font-serif">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-10 underline decoration-pink-500"
        >
          Shop Your Favorites
        </motion.h1>

        {/* Grid for Products */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Designer Lehenga",
              price: "₹18,999",
              img: "https://poojadesiner.wordpress.com/wp-content/uploads/2025/03/koskii-red-zariwork-net-designer-readymadelehenga-gcbr0039483_red_1_3_large.webp",
            },
            {
              title: "Bridal Saree",
              price: "₹12,499",
              img: "https://poojadesiner.wordpress.com/wp-content/uploads/2025/03/saares.webp?w=1540",
            },
            {
              title: "Party Gown",
              price: "₹14,999",
              img: "https://poojadesiner.wordpress.com/wp-content/uploads/2025/03/new-collection.webp",
            },
            {
              title: "Kurta Set",
              price: "₹7,499",
              img: "https://poojadesiner.wordpress.com/wp-content/uploads/2025/03/analika.webp?w=1356",
            },
            {
              title: "Festive Lehenga",
              price: "₹21,999",
              img: "https://poojadesiner.wordpress.com/wp-content/uploads/2025/03/yellowdesignerembroideredjacquardsilkweddinglehenga-saira_sboutique_1.jpg",
            },
            {
              title: "Casual Saree",
              price: "₹5,999",
              img: "https://poojadesiner.wordpress.com/wp-content/uploads/2025/03/deep-green1.webp",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-80 object-contain"
              />
              <div className="p-4 text-center">
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <p className="text-gray-700 font-bold mt-2">{item.price}</p>
                <button className="mt-4 px-6 py-2 rounded-lg bg-pink-600 hover:bg-pink-700 text-white shadow-md transition">
                  Buy Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ShopNow;
