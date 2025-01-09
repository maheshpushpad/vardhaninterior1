// src/OurProcess.js
import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import p1 from '../assets/Images/Process/p1.webp';
import p2 from '../assets/Images/Process/p2.jpeg';
import p3 from '../assets/Images/Process/p3.jpeg';
import p4 from '../assets/Images/Process/p4.webp';

// Step Component
const Step = ({ title, description, image, animationDelay }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  if (inView) {
    controls.start({ opacity: 1, y: 0 });
  }

  return (
    <motion.div
      ref={ref}
      className="bg-slate-300 shadow-lg p-6 rounded-lg hover:scale-105 transform transition duration-300 ease-in-out"
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      transition={{ duration: 0.6, delay: animationDelay }}
    >
      <img src={image} alt={title} className="w-full h-40 object-cover rounded-t-lg mb-4" />
      <h3 className="text-xl font-semibold text-black mb-2">{title}</h3>
      <p className="text-black">{description}</p>
    </motion.div>
  );
};

// Data for steps
const data = [
  {
    title: 'Consult',
    description: 'Discuss your needs and preferences with our experts.',
    image: p1,
  },
  {
    title: 'Design',
    description: 'We create stunning designs tailored to your space.',
    image: p2,
  },
  {
    title: 'Production',
    description: 'Our team works on producing high-quality materials.',
    image: p3,
  },
  {
    title: 'Installation',
    description: 'We install everything with precision and care.',
    image: p4,
  },
];

// OurProcess Component
const OurProcess = () => {
  return (
    <section className="bg-gray-50 py-16 px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#65422e] mb-8">Our Process</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.map((step, index) => (
            <Step
              key={index}
              title={step.title}
              description={step.description}
              image={step.image}
              animationDelay={index * 0.5}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
