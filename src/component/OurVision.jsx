import React from 'react'
import 'tailwindcss/tailwind.css';
import { motion } from 'framer-motion';
import vision from '../assets/Images/vision.png';

const OurVision = () => {
  return (
    <div className="container mx-auto flex flex-col lg:flex-row items-center mt-16 lg:space-x-12">
        <motion.div
          className="w-full lg:w-1/2 mb-10 lg:mb-0 order-2 lg:order-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold text-[#65422e] mb-4">
            Our Vision
          </h2>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Our vision is to create inspiring and innovative spaces that enhance
            the quality of life for our clients. We believe in the power of
            design to transform not just spaces, but also the way people feel
            and interact within those spaces.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            We are committed to sustainability and use eco-friendly materials
            and practices whenever possible. Our goal is to create timeless
            designs that are both beautiful and functional, tailored to meet the
            unique needs of each client.
          </p>
        </motion.div>
        <motion.div
          className="w-full lg:w-1/2 order-1 lg:order-2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={vision}
            alt="Our Vision"
            className="rounded-lg shadow-lg w-full"
          />
        </motion.div>
      </div>
  )
}

export default OurVision
