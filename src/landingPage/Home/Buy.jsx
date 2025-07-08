import React from "react";

const Buy = () => {
  return (
    <div className="border-t-4 border-gray-300 p-8 m-4">
      <div className="grid grid-cols-2 ">
        <div>
          <img src="https://poojadesiner.wordpress.com/wp-content/uploads/2025/03/nd2925.webp" alt="images" srcset="" />
        </div>
        <div className="px-6 py-48 mt-12 shadow-2xl">
          <h1 className="text-3xl font-bold text-center p-4 m-4">
            Pooja Designer Boutique
          </h1>
          <div>
          <p className="font-extralight font-serif py-10 m-4">
            Pooja Designer Boutique is where we make fashion dreams come true
            without compromising in any way on reality-the manifestation of
            desires in the world of fashion. We add an exquisite array of
            custom-made bridal or other beautiful garments for the contemporary
            and the traditional. So whether it is a bridal lehenga that simply
            stops the show, an elegant saree, or simply a chic everyday outfit
            that you are looking for, our designs are meant to make you feel
            beautiful and confident.
          </p>
          <h5 className="p-4 m-3 text-center text-2xl ">
            Available for pre-order now.
          </h5>
          <button className="p-4 m-4 flex justify-self-center bg-stone-950 rounded-full text-2xl font-serif text-white hover:bg-stone-600 text-shadow-2xs cursor-pointer in-focus-visible:">
            Buy Now
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Buy;
