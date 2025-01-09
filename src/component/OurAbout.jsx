import React from 'react';
import 'tailwindcss/tailwind.css';
import { motion } from 'framer-motion';
import g1 from '../assets/Images/Gallery/a1.png';

const OurAbout = () => {
  return (
    <div className="container mx-auto px-6 lg:px-12 py-16">
      <div className="flex flex-col lg:flex-row items-center lg:space-x-12">
        <motion.div
          className="w-full lg:w-1/2 mb-10 lg:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="relative">
            <img
              src={g1}
              alt="Interior Design"
              className="rounded-lg shadow-lg w-3/4 lg:2/2 mx-auto border-4 border-[#65422e]"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-opacity-20 rounded-lg"></div>
          </div>
        </motion.div>
        <motion.div
          className="w-full lg:w-1/2 lg:pl-12"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl font-extrabold text-[#65422e] mb-6">
            About Us
          </h2>
          <p className="text-gray-800 text-lg mb-6 leading-relaxed">
            Welcome to <span className="font-bold text-[#65422e]">Vardhan Interior</span>, where we are dedicated to transforming spaces into stunning and functional environments. Our team of experienced designers works closely with clients to understand their vision and bring it to life with creativity and precision.
          </p>
          <p className="text-gray-800 text-lg leading-relaxed">
            Whether it's residential or commercial projects, we ensure a seamless process from concept to completion. With a passion for design and attention to detail, we strive to create interiors that reflect our clients' personalities and lifestyles. Join us on a journey to elevate your space with elegance and style.
          </p>
          <motion.button
            className="mt-6 px-6 py-3 bg-[#65422e] text-white rounded-lg shadow-lg hover:bg-[#50351f] transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default OurAbout;
