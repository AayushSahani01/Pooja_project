import React from "react";

const ImageSection = () => {
  return (
    <div className="p-6 m-4 mt-10  flex flex-row">
      <div className="grid grid-cols-4 gap-4 ">
        <div className= "">
          <img src="../assets/image1.jpg" alt="image" />
          <h1 className="text-center font-bold underline hover:font-light">
            New Arrivals
          </h1>
        </div>
        <div>
          <img src="../assets/image2.webp" alt="image" />
          <h1 className="text-center font-bold underline hover:font-light">
            Weddings
          </h1>
        </div>
        <div>
          <img src="../assets/image3.webp" alt="image" />
          <h1 className="text-center font-bold underline hover:font-light">
            Saarees
          </h1>
        </div>
        <div>
          <img src="../assets/image4.webp" alt="image" />
          <h1 className="text-center font-bold underline hover:font-light">
           Kurta Set
          </h1>
        </div>
        <div>
          <img src="../assets/image5.webp" alt="image" />
          <h1 className="text-center font-bold underline hover:font-light">
          Party Wear
          </h1>
        </div>
        <div>
          <img src="../assets/image6.webp" alt="image" />
          <h1 className="text-center font-bold underline hover:font-light">
           Anarkali suits 
          </h1>
        </div>
        <div>
          <img src="../assets/image2.webp" alt="image" />
          <h1 className="text-center font-bold underline hover:font-light">
           Topwear
          </h1>
        </div>
        <div>
          <img src="../assets/image1.jpg" alt="image" />
          <h1 className="text-center font-bold underline hover:font-light">
            Fashions
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ImageSection;
