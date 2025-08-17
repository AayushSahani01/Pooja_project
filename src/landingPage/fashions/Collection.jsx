import React from "react";
import Navbar from "../Navbar";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const collections = [
  {
    title: "Luxury Bridal Wear",
    subtitle: "Traditional • Handcrafted • Elegant",
    img: "https://poojadesiner.wordpress.com/wp-content/uploads/2025/03/koskii-red-zariwork-net-designer-readymadelehenga-gcbr0039483_red_1_3_large.webp",
    desc: "Celebrate your big day in timeless handcrafted couture designed with intricate details and premium fabrics.",
  },
  {
    title: "Party Specials",
    subtitle: "Chic • Stylish • Glamorous",
    img: "https://poojadesiner.wordpress.com/wp-content/uploads/2025/03/new-collection.webp",
    desc: "Stand out at every celebration with our dazzling designer party wear, made to leave lasting impressions.",
  },
  {
    title: "Casual Elegance",
    subtitle: "Minimal • Comfortable • Daily Wear",
    img: "https://poojadesiner.wordpress.com/wp-content/uploads/2025/03/deep-green1.webp",
    desc: "Effortless fashion for everyday elegance. Perfect blends of comfort, trend, and sophistication.",
  },
  {
    title: "Seasonal Trends",
    subtitle: "Fresh • Vibrant • Exclusive",
    img: "https://poojadesiner.wordpress.com/wp-content/uploads/2025/03/pooja-butique.png",
    desc: "Explore our handpicked seasonal must-haves, curated to keep your wardrobe up-to-date and chic.",
  },
];

const Collection = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-b from-rose-50 via-white to-amber-50 py-12 px-6 font-serif">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl mt-10 font-bold text-center mb-6 underline decoration-amber-500"
        >
          Our Signature Collections
        </motion.h1>
        <p className="text-center max-w-2xl mx-auto text-gray-600 mb-14 text-lg">
          Discover fashion that blends tradition with modern aesthetics.
          Handcrafted designs, premium fabrics, and timeless elegance curated
          for every occasion.
        </p>

        {/* Collection List */}
        <div className="space-y-20">
          {collections.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row items-center gap-10 ${
                idx % 2 === 0 ? "" : "md:flex-row-reverse"
              }`}
            >
              {/* Image */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-full md:w-1/2 overflow-hidden rounded-2xl shadow-2xl"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-[450px] object-cover object-center transition-transform duration-500 hover:scale-110"
                />
              </motion.div>

              {/* Text Content */}
              <div className="md:w-1/2 text-center md:text-left">
                <h2 className="text-3xl font-bold text-gray-800">
                  {item.title}
                </h2>
                <p className="text-amber-600 italic mt-1">{item.subtitle}</p>
                <p className="mt-4 text-gray-600 text-lg">{item.desc}</p>
                <div className="mt-6 flex gap-4 justify-center md:justify-start">
                  <Link to="/shop" className="px-6 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg shadow-md transition">
                    Shop Now
                  </Link>
                  <Link to="/collection" className="px-6 py-2 border border-amber-600 text-amber-600 hover:bg-amber-100 rounded-lg shadow-sm transition">
                    View Details
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Collection;
