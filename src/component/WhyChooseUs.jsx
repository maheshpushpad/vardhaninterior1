import React from 'react';
import { FaPaintBrush, FaHome, FaUsers, FaAward } from 'react-icons/fa';
import c1 from '../assets/Images/choose/c1.jpg';
import w1 from '../assets/Images/why/w1.jpg';
import w2 from '../assets/Images/why/w2.jpg';
import w3 from '../assets/Images/why/w3.jpg';

const WhyChooseUs = () => {
  const points = [
    {
      icon: <FaPaintBrush className="text-[#65422e] w-12 h-12" />,
      title: 'Creative Designs',
      description: 'Innovative and personalized designs tailored to your needs.',
      image: c1
    },
    {
      icon: <FaHome className="text-[#65422e] w-12 h-12" />,
      title: 'High-Quality Materials',
      description: 'We use only the best materials to ensure durability and elegance.',
      image: w1
    },
    {
      icon: <FaUsers className="text-[#65422e] w-12 h-12" />,
      title: 'Experienced Team',
      description: 'A team of skilled professionals dedicated to delivering excellence.',
      image: w2
    },
    {
      icon: <FaAward className="text-[#65422e] w-12 h-12" />,
      title: 'Award-Winning Services',
      description: 'Recognized and awarded for our exceptional services in interior design.',
      image: w3
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#65422e] mb-8">Why Choose Us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map((point, index) => (
            <div key={index} className="bg-slate-300 shadow-lg px-3 py-5 rounded-lg hover:scale-105 transform transition duration-300 ease-in-out">
              <img src={point.image} alt={point.title} className="w-full h-48  object-cover rounded-t-lg mb-4" />
              <div className="flex items-center justify-center mb-4">{point.icon}</div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">{point.title}</h3>
              <p className="text-gray-600">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
