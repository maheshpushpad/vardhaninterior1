import React from 'react'
import 'tailwindcss/tailwind.css';
import { motion } from 'framer-motion';
import mission from '../assets/Images/mission.png';

const OurMission = () => {
  return (
    <div className="container mx-auto flex flex-col lg:flex-row items-center mt-16 lg:space-x-12">
      <motion.div
        className="w-full lg:w-1/2 mb-10 lg:mb-0"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src={mission}
          alt="Our Mission"
          className="rounded-lg shadow-lg w-full"
        />
      </motion.div>
      <motion.div
        className="w-full lg:w-1/2 lg:pl-12"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold text-[#65422e] mb-4">
          Our Mission
        </h2>
        <p className="text-gray-700 text-lg mb-6 leading-relaxed">
          Our mission is to deliver exceptional design solutions that enhance the quality of life and provide lasting value. We are committed to creating spaces that are not only beautiful and functional but also sustainable and reflective of our clients' unique personalities and needs.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          Through innovative design, meticulous attention to detail, and a collaborative approach, we strive to exceed our clients' expectations and build lasting relationships based on trust and mutual respect. Our goal is to transform your vision into reality and create environments that inspire and delight.
        </p>
      </motion.div>
    </div>
  )
}

export default OurMission
