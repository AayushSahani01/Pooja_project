import { motion } from "framer-motion";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";

const fashionItems = [
  {
    title: "Bridal Couture",
    img: "https://poojadesiner.wordpress.com/wp-content/uploads/2025/03/koskii-red-zariwork-net-designer-readymadelehenga-gcbr0039483_red_1_3_large.webp",
    desc: "Intricately designed bridal lehengas crafted with elegance and luxury.",
  },
  {
    title: "Festive Collection",
    img: "https://poojadesiner.wordpress.com/wp-content/uploads/2025/03/yellowdesignerembroideredjacquardsilkweddinglehenga-saira_sboutique_1.jpg",
    desc: "Bright and bold outfits perfect for weddings, parties and celebrations.",
  },
  {
    title: "Elegant Sarees",
    img: "https://poojadesiner.wordpress.com/wp-content/uploads/2025/03/saares.webp?w=1540",
    desc: "Graceful sarees blending modern flair with traditional charm.",
  },
  {
    title: "Kurta & Suit Sets",
    img: "https://poojadesiner.wordpress.com/wp-content/uploads/2025/03/analika.webp?w=1356",
    desc: "Comfortable yet stylish kurta & suit sets designed for daily wear and festivities.",
  },
  {
    title: "Designer Gowns",
    img: "https://blogger.googleusercontent.com/img/a/AVvXsEjxxXLEl0aWLg0NM7VGDaw3PDRpjIJDO_WwVRobF_GeMVHfXZTeYjDeWwKG3xjR5y5GhXiC-VQJzxkFIJx-y4f8UUaiLn-ZTHGAnzsq7wU5Ik9UdfqqZxE8TiHIlqxJI36rv-0lh_ylt3jSP1y44yd0NsjB7Czvhtx2_Azo3bnqIFZsIZZJ4WUYKfXrw0U=w350-h525",
    desc: "Flowy, elegant gowns perfect for cocktail parties and evening occasions.",
  },
  {
    title: "Casual Wear",
    img: "https://poojadesiner.wordpress.com/wp-content/uploads/2025/03/casual.webp",
    desc: "Trendy yet comfortable casual wear for everyday elegance.",
  },
  {
    title: "Ethnic Fusion",
    img: "https://poojadesiner.wordpress.com/wp-content/uploads/2025/03/fusion.webp",
    desc: "Modern Indo-western fusion outfits that blend cultures seamlessly.",
  },
  {
    title: "Accessories",
    img: "https://poojadesiner.wordpress.com/wp-content/uploads/2025/03/accessories.webp",
    desc: "Complete your look with our exquisite jewelry and accessories.",
  },
];

const Fashions = () => {
  return (
    <>
      <Navbar />
      <div className="px-6 py-10 font-serif ">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl mt-14 font-bold text-center mb-12 underline decoration-pink-500"
        >
          Explore Our Fashion World
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {fashionItems.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition group"
            >
              <div className="relative w-full h-80">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-contain p-3 transition duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-5 text-center">
                <h2 className="text-xl font-semibold text-gray-800">
                  {item.title}
                </h2>
                <p className="text-sm mt-3 mb-5 text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
                <Link
                  to="/shop"
                  className="px-6 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg shadow-md transition"
                >
                  Shop Now
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Fashions;
