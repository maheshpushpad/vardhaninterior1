import React, { useRef } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const colors = ["bg-amber-700", "bg-orange-800", "bg-yellow-900", "bg-amber-600", "bg-orange-700"];

const Review = () => {
  const data = [
    {
      name: "Mayank Pushpad",
      testimonial: "Excellent service! The design transformed our living space beautifully. Highly recommend for anyone looking to revamp their home interiors",
    },
    {
      name: "Pradeep Sharma",
      testimonial: "The team did an outstanding job with our kitchen. Every detail was meticulously handled, resulting in a stunning and functional space",
    },
    {
      name: "Sandeep Sharma",
      testimonial: "Good work overall, but there were some delays in the project timeline. However, the final outcome was satisfactory and met our expectations",
    },
    {
      name: "Atul Gupta",
      testimonial: "Fantastic experience! The designers were very professional and understood our needs perfectly. Our bedroom looks amazing now",
    },
    {
      name: "Rahul Singh",
      testimonial: "The redesign of our office space was brilliant. It now feels much more spacious and vibrant. Kudos to the interior design team",
    },
  ];

  const slider = useRef(null);

  const settings = {
    accessibility: true,
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      className="flex flex-col justify-center lg:px-48 pt-16 pb-24"
      style={{
        backgroundImage: "url('/wood-texture.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="text-center w-full">
        <h1 className="text-4xl font-bold text-[#65422e] drop-shadow mb-2">Happy Clients</h1>
        <p className="text-lg text-[#65422e] drop-shadow mb-12">
          
        </p>
      </div>
      <div className="mt-5 mb-10">
        <Slider ref={slider} {...settings}>
          {data.map((item, index) => (
            <div className="h-[370px] my-4 flex flex-col justify-between mx-1" key={index}>
              <div className="h-[370px] mx-4 p-6 shadow-xl bg-[#f7efe3] border border-[#e6d3b3] rounded-tl-[30px] rounded-br-[30px] transition-transform hover:scale-[1.03] duration-300">
                <div className="flex flex-col items-center mb-6 mt-4">
                  <div className={`h-20 w-20 rounded-full flex items-center justify-center text-xl font-bold text-white shadow-md ${colors[index % colors.length]}`}>
                    {item.name.split(" ").map(n => n[0]).join("")}
                  </div>
                </div>
                <div className="flex text-center flex-col px-4">
                  <h1 className="font-semibold text-xl text-amber-900">{item.name}</h1>
                  <p className="italic text-gray-700 mt-2">"{item.testimonial}"</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Review;
