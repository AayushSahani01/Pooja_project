import React from "react";
import Navbar from "../Navbar";
import { motion } from "framer-motion";
import Footer from "../Footer";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-b from-white to-pink-50 min-h-screen px-6 py-12 font-serif">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl mt-14 font-bold text-pink-700 mb-4">
            About Us
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Where tradition meets elegance. We bring you timeless fashion pieces
            that blend culture, craftsmanship, and modern aesthetics.
          </p>
        </motion.div>

        {/* Our Story */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-semibold mb-4 text-center underline decoration-pink-500">
            Our Story
          </h2>
          <p className="text-gray-700 leading-relaxed text-center">
            Born from a passion for traditional Indian artistry, our brand
            celebrates the beauty of handcrafted fabrics, intricate embroidery,
            and timeless silhouettes. Every lehenga, saree, and gown we create
            tells a story of heritage while embracing modern design for today’s
            confident women. Our mission is not just to sell outfits, but to
            craft memories for weddings, celebrations, and life’s grand
            occasions.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto mb-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-md p-6 rounded-2xl border-t-4 border-pink-500"
          >
            <h3 className="text-2xl font-semibold mb-2">Our Mission</h3>
            <p className="text-gray-700">
              To empower every woman with attire that radiates confidence,
              elegance, and individuality. We aim to revive traditional
              craftsmanship while keeping fashion sustainable and contemporary.
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-md p-6 rounded-2xl border-t-4 border-pink-500"
          >
            <h3 className="text-2xl font-semibold mb-2">Our Vision</h3>
            <p className="text-gray-700">
              To be the leading destination for women’s fashion that bridges
              culture and modernity — where every collection inspires pride,
              beauty, and timeless style.
            </p>
          </motion.div>
        </div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-6xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-semibold text-center mb-10 underline decoration-pink-500">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Handcrafted Quality",
                desc: "Every piece is carefully designed with love and artistry, using the finest fabrics and skilled craftsmanship.",
              },
              {
                title: "Exclusive Designs",
                desc: "Our collections are unique, blending traditional artistry with modern fashion trends.",
              },
              {
                title: "Customer Experience",
                desc: "From browsing to delivery, we ensure a seamless, personalized, and memorable shopping journey.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl shadow-md p-6 text-center border border-gray-200"
              >
                <h3 className="text-xl font-bold text-pink-600 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Awards & Recognition */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
          className="max-w-5xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl font-semibold mb-6 underline decoration-pink-500">
            Awards & Recognition
          </h2>
          <p className="text-gray-600">
            Our brand has been honored at multiple fashion shows, including the{" "}
            <span className="font-bold">Indian Couture Week 2024</span> and the{" "}
            <span className="font-bold">Global Ethnic Wear Summit</span>. Each
            recognition motivates us to set new standards in design and quality.
          </p>
        </motion.div>

        {/* Sustainability Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-6xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-semibold text-center mb-6 underline decoration-pink-500">
            Sustainability Promise
          </h2>
          <p className="text-gray-700 text-center max-w-4xl mx-auto">
            We believe in slow fashion. From eco-friendly fabrics to ethical
            production practices, our collections are designed to respect the
            environment and support local artisans. Every purchase you make is a
            step toward a more sustainable future in fashion.
          </p>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-6xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-semibold text-center mb-10 underline decoration-pink-500">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "Riya Sharma",
                feedback:
                  "The lehenga I bought for my wedding was beyond perfect! The detailing and craftsmanship were breathtaking.",
              },
              {
                name: "Ananya Verma",
                feedback:
                  "I love how this brand combines tradition with modern fashion. I feel elegant yet trendy every time I wear their outfits.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl shadow-md p-6 border border-gray-200"
              >
                <p className="italic text-gray-600">“{item.feedback}”</p>
                <h4 className="text-pink-600 mt-4 font-semibold">
                  - {item.name}
                </h4>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Founder Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
          className="max-w-5xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl font-semibold mb-6 underline decoration-pink-500">
            Meet the Founder
          </h2>
          <img
            src="https://poojadesiner.wordpress.com/wp-content/uploads/2025/03/founder.jpg"
            alt="Founder"
            className="w-40 h-40 rounded-full mx-auto mb-4 shadow-lg object-cover"
          />
          <h3 className="text-xl font-bold">Aayush Sahani</h3>
          <p className="text-gray-600 max-w-3xl mx-auto mt-2">
            A visionary designer who believes that fashion is not just clothing
            but an expression of identity and tradition. With years of
            experience in crafting bespoke ethnic wear, he brings authenticity,
            elegance, and innovation to every collection.
          </p>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl font-bold mb-4 text-pink-700">
            Be Part of Our Story
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Explore our collections and experience the elegance of fashion that
            speaks tradition and modernity together.
          </p>
          <a
            href="/shop"
            className="px-6 py-3 bg-pink-600 text-white rounded-full shadow-lg hover:bg-pink-700 transition"
          >
            Shop Now
          </a>
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
