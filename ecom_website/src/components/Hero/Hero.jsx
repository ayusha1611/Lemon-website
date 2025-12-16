import React from "react";
import Image1 from "../../assets/hero/lipstick1.png";
import Image2 from "../../assets/hero/lipstick2.png";
import Image3 from "../../assets/hero/skincare.png";
import Slider from "react-slick";

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Upto 40% off on all Skin Care Products",
    description:
      "Discover premium skincare products at amazing discounts. Upgrade your routine today!",
  },
  {
    id: 2,
    img: Image2,
    title: "Upto 50% off on all Cosmetics Items",
    description:
      "Reimagine your beauty with unbeatable offers on top-quality cosmetics.",
  },
  {
    id: 3,
    img: Image3,
    title: "Upto 20% off on all Hair Care Products",
    description:
      "Achieve healthy, radiant hair with discounted hair care essentials.",
  },
];

const Hero = ({ handleOrderPopup }) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="relative bg-[#f8f9fc] h-auto py-10">
      <div className="container mx-auto px-4">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div key={data.id} className="grid grid-cols-1 sm:grid-cols-2 items-center gap-8">
              {/* Image */}
              <div className="flex justify-center">
                <img
                  src={data.img}
                  alt={`Promotional image for ${data.title}`}
                  className="w-[250px] sm:w-[300px] lg:w-[350px] h-auto object-contain"
                  data-aos="zoom-in"
                  data-aos-once="true"
                />
              </div>

              {/* Text Content */}
              <div className="text-center sm:text-left flex flex-col gap-4">
                <h1
                  className="text-2xl sm:text-3xl lg:text-5xl font-bold text-[#393c51]"
                  data-aos="zoom-out"
                  data-aos-duration="500"
                  data-aos-once="true"
                >
                  {data.title}
                </h1>
                <p
                  className="text-sm sm:text-base lg:text-lg text-gray-600"
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="100"
                >
                  {data.description}
                </p>
                <button
                  onClick={handleOrderPopup}
                  className="bg-[#f4eca7] hover:scale-105 transition-transform text-[#393c51] text-lg font-bold py-2 px-3 rounded-full shadow-lg"
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="300"
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
