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
];

// Featured Categories with Multiple Images
const featuredCategories = [
  {
    id: "ethnic-fusion",
    title: "Ethnic Fusion",
    subtitle: "Where Tradition Meets Modernity",
    desc: "Contemporary Indo-western designs that beautifully blend cultural heritage with modern aesthetics.",
    images: [
      {
        src: "/Assets/image4.webp",
        fallback: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        alt: "Indo-western Fusion Dress",
        title: "Designer Fusion Dress"
      },
      {
        src: "/Assets/image5.webp", 
        fallback: "https://images.unsplash.com/photo-1610030469667-1b4e21b7defe?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        alt: "Ethnic Crop Top with Palazzo",
        title: "Crop Top Palazzo Set"
      },
      {
        src: "/Assets/image6.webp",
        fallback: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", 
        alt: "Fusion Anarkali",
        title: "Modern Anarkali"
      }
    ]
  },
  {
    id: "accessories",
    title: "Accessories",
    subtitle: "Complete Your Traditional Look",
    desc: "Exquisite jewelry, bags, and accessories that add the perfect finishing touch to your outfit.",
    images: [
      {
        src: "/Assets/image2.webp",
        fallback: "https://images.unsplash.com/photo-1617039487629-c80f0101482b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        alt: "Traditional Jewelry Set",
        title: "Kundan Jewelry Set"
      },
      {
        src: "/Assets/image3.webp",
        fallback: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        alt: "Embroidered Clutch",
        title: "Designer Clutches"
      },
      {
        src: "/Assets/image1.jpg",
        fallback: "https://images.unsplash.com/photo-1506629905587-4b81fac4dd60?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        alt: "Traditional Bangles",
        title: "Ethnic Bangles"
      }
    ]
  },
  {
    id: "casual-wear", 
    title: "Casual Wear",
    subtitle: "Everyday Elegance Redefined",
    desc: "Comfortable yet stylish casual wear that brings effortless elegance to your daily wardrobe.",
    images: [
      {
        src: "/Assets/image1.jpg",
        fallback: "https://images.unsplash.com/photo-1583391733956-6c78276477e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        alt: "Casual Kurta",
        title: "Cotton Kurta Set"
      },
      {
        src: "/Assets/image2.webp",
        fallback: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        alt: "Casual Dress",
        title: "Casual Day Dress"
      },
      {
        src: "/Assets/image3.webp",
        fallback: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        alt: "Casual Separates",
        title: "Mix & Match Separates"
      }
    ]
  }
];

const Fashions = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
        {/* Hero Section */}
        <div className="px-6 py-16">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-5xl mt-14 font-playfair font-bold text-center mb-4 text-gray-900"
          >
            Explore Our 
            <span className="text-luxury font-dancing text-5xl lg:text-6xl"> Fashion </span>
            World
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center text-gray-600 font-poppins font-light text-lg max-w-2xl mx-auto mb-12"
          >
            Discover our curated collections that celebrate tradition while embracing contemporary style
          </motion.p>
        </div>

        {/* Traditional Collections Grid */}
        <div className="px-6 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
            {fashionItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative w-full h-80">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 text-center">
                  <h2 className="text-xl font-playfair font-semibold text-gray-800 mb-3">
                    {item.title}
                  </h2>
                  <p className="text-sm text-gray-600 font-poppins font-light leading-relaxed mb-5">
                    {item.desc}
                  </p>
                  <Link
                    to="/shop"
                    className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-poppins font-medium transition-all duration-300 hover:shadow-lg transform hover:scale-105"
                  >
                    Shop Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Featured Categories with Multiple Images */}
        <div className="px-6 py-16 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
                Featured 
                <span className="font-dancing text-luxury text-4xl lg:text-5xl"> Collections</span>
              </h2>
              <p className="text-gray-600 font-poppins font-light text-lg max-w-3xl mx-auto">
                Discover our signature collections featuring ethnic fusion, elegant accessories, and contemporary casual wear
              </p>
            </motion.div>

            {featuredCategories.map((category, categoryIdx) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIdx * 0.2 }}
                className="mb-20 last:mb-0"
              >
                {/* Category Header */}
                <div className="text-center mb-12">
                  <h3 className="text-2xl lg:text-3xl font-playfair font-bold text-gray-900 mb-2">
                    {category.title}
                  </h3>
                  <p className="text-purple-600 font-dancing text-xl mb-4">
                    {category.subtitle}
                  </p>
                  <p className="text-gray-600 font-poppins font-light max-w-2xl mx-auto">
                    {category.desc}
                  </p>
                </div>

                {/* Images Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {category.images.map((image, imageIdx) => (
                    <motion.div
                      key={imageIdx}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: (categoryIdx * 0.2) + (imageIdx * 0.1) }}
                      whileHover={{ y: -10 }}
                      className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
                    >
                      <div className="aspect-[4/5] overflow-hidden">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          onError={(e) => {
                            e.target.src = image.fallback;
                          }}
                        />
                      </div>
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Title Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <h4 className="text-lg font-playfair font-semibold mb-2">
                          {image.title}
                        </h4>
                        <Link
                          to="/collection"
                          className="text-sm font-poppins bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg hover:bg-white/30 transition-colors duration-300"
                        >
                          View Details →
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Category CTA */}
                <div className="text-center mt-12">
                  <Link
                    to="/collection"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-poppins font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Explore {category.title} Collection
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Fashions;
