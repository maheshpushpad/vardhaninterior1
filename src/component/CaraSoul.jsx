import React, { useState, useEffect } from 'react';
import i1 from '../assets/Images/carasoul/b1.jpg';
import i2 from '../assets/Images/carasoul/b2.jpg';
import i3 from '../assets/Images/carasoul/b3.jpg';
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";

const CaraSoul = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { id: 0, srcimg: i1, alt: 'Slide 1', title: 'Modern Living Room', subtitle: 'Elegant and Cozy' },
    { id: 1, srcimg: i2, alt: 'Slide 2', title: 'Minimalist Kitchen', subtitle: 'Sleek and Functional' },
    { id: 2, srcimg: i3, alt: 'Slide 3', title: 'Luxurious Bedroom', subtitle: 'Comfort and Style' },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval); // Clear interval on component unmount
  }, [currentSlide]); // Dependency array ensures the effect is re-run when currentSlide changes

  return (
    <div className="relative w-full h-[75vh]">
      <ul className="overflow-hidden relative w-full h-full">
        {slides.map((slide, index) => (
          <li
            key={slide.id}
            className={`absolute transition-opacity duration-500 ease-in-out w-full h-full ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <img src={slide.srcimg} alt={slide.alt} className="w-full h-full object-center object-cover" />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 text-white text-center">
              <div className="slide">
                <h1 className="text-2xl md:text-4xl font-bold">{slide.title}</h1>
                <h3 className="text-lg md:text-2xl">{slide.subtitle}</h3>
              </div>
            </div>
          </li>
        ))}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 z-20 transform -translate-y-1/2 bg-gray-500 opacity-50 text-white px-2 py-2 rounded-full focus:outline-none"
        >
          <MdKeyboardDoubleArrowLeft className='h-8 w-8 rounded-full' />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 z-20 transform -translate-y-1/2 bg-gray-500 opacity-50 text-white px-2 py-2 rounded-full focus:outline-none"
        >
          <MdKeyboardDoubleArrowRight className='h-8 w-8 rounded-full' />
        </button>
      </ul>
    </div>
  );
};

export default CaraSoul;
