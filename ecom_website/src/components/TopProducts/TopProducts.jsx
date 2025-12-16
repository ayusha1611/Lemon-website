import React from "react";
import Img1 from "../../assets/topproducts/t1.jpg";
import Img2 from "../../assets/topproducts/t2.jpg";
import Img3 from "../../assets/topproducts/t3.jpg";
import { FaStar } from "react-icons/fa";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Lip Gloss",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 2,
    img: Img2,
    title: "Foundation Stick",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 3,
    img: Img3,
    title: "Sunscreen",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

const TopProducts = ({handleOrderPopup}) => {
  return (
    <div className="container">
      {/* Header Section */}
      <div className="text-left mb-24">
        <p
          data-aos="fade-up"
          className="text-sm text-primary  text-#393c51"
        >
          Top Rated Products for You
        </p>
        <h1
          data-aos="fade-up"
          className="text-3xl font-bold text-[#393c51]"
        >
          Best Products
        </h1>
        <p
          data-aos="fade-up"
          className="text-xs text-gray-400"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, labore?
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 place-items-center">
        {ProductsData.map((product) => (
          <div
            data-aos="zoom-in"
            key={product.id}
            className="rounded-2xl bg-black dark:bg-[#f4eca7] hover:bg-black/80 dark:hover:bg-primary hover:text-[#2e324e] relative shadow-xl duration-300 group max-w-[300px]"
          >
            {/* Image Section */}
            <div className="h-[200px] flex justify-center items-center">
              <img
                src={product.img}
                alt={product.title}
                className="max-w-[140px] transform group-hover:scale-105 duration-300 drop-shadow-md"
              />
            </div>

            {/* Content Section */}
            <div className="p-4 text-center">
              {/* Stars */}
              <div className="flex justify-center items-center gap-1 mb-2">
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold">{product.title}</h3>

              {/* Description */}
              <p className="text-sm text-gray-500 group-hover:text-black duration-300 line-clamp-2">
                {product.description}
              </p>

              <button className="bg-primary hover:scale-105 duration-300 text-[#2e324e] font-bold py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
              onClick={handleOrderPopup}
              >
              Order Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopProducts;
