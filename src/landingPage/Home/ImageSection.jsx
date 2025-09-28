import React from "react";
import LazyImage from "../../components/LazyImage";

const ImageSection = () => {
  const items = [
    {
      src: "https://poojadesiner.wordpress.com/wp-content/uploads/2025/03/yellowdesignerembroideredjacquardsilkweddinglehenga-saira_sboutique_1.jpg",
      title: "New Arrivals",
    },
    {
      src: "https://poojadesiner.wordpress.com/wp-content/uploads/2025/03/koskii-red-zariwork-net-designer-readymadelehenga-gcbr0039483_red_1_3_large.webp",
      title: "Weddings",
    },
    {
      src: "https://poojadesiner.wordpress.com/wp-content/uploads/2025/03/deep-green1.webp",
      title: "Top wear",
    },
    {
      src: "https://poojadesiner.wordpress.com/wp-content/uploads/2025/03/analika.webp?w=1356",
      title: "Kurta Set",
    },
    {
      src: "https://poojadesiner.wordpress.com/wp-content/uploads/2025/03/koskii-red-zariwork-net-designer-readymadelehenga-gcbr0039483_red_1_3_large.webp",
      title: "Party Wear",
    },
    {
      src: "https://poojadesiner.wordpress.com/wp-content/uploads/2025/03/yellowdesignerembroideredjacquardsilkweddinglehenga-saira_sboutique_1.jpg",
      title: "Anarkali Suits",
    },
    {
      src: "https://poojadesiner.wordpress.com/wp-content/uploads/2025/03/saares.webp?w=1540",
      title: "Saarees ",
    },
    {
      src: "https://poojadesiner.wordpress.com/wp-content/uploads/2025/03/new-collection.webp",
      title: "Fashions",
    },
  ];

  return (
    <div className="p-6 m-6">
      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((item, index) => (
          <article
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-lg overflow-hidden cursor-pointer transform hover:scale-105 transition duration-300"
          >
            {/* Image with fixed aspect ratio & top alignment */}
            <LazyImage
              src={item.src}
              alt={`${item.title} collection image`}
              className="w-full aspect-[3/4] object-cover object-top"
            />

            {/* Title */}
            <h2 className="text-center font-semibold text-xl py-3 tracking-wide text-gray-800 hover:text-pink-600 transition-colors duration-200">
              {item.title}
            </h2>
          </article>
        ))}
      </div>
    </div>
  );
};

export default ImageSection;
