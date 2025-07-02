import React from "react";

const Support = () => {
  return (
    <div className="h-fit text-center p-4 m-48">
      <div className="flex flex-col justify-center items-center p-4 m-4 bg-stone-100 rounded-lg shadow-lg">
        <div className="text-3xl font-bold text-center underline-offset-2">
          <h1>Tailoring services boutique</h1>
        </div>
        <div className="text-2xl font-light p-6 m-4  ">
          <p>
            We here at Pooja Designer Boutique believe that a perfect fit is as
            important as a perfect design. Therefore, we provide expert
            tailoring to ensure that any garment, be it ready-made or custom,
            fits you to perfection. Our zone of experts with years of tailoring
            experience bring forth garments that not only flatter your natural
            silhouette but also mirror your persona.
          </p>
        </div>
        <div className="p-2 m-6 flex justify-self-center bg-stone-950 rounded-full text-2xl font-serif text-white hover:bg-stone-600 text-shadow-2xs cursor-pointer in-focus-visible:">
          <button>Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default Support;
