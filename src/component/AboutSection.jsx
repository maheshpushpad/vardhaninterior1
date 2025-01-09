import React from 'react';
import 'tailwindcss/tailwind.css';


import OurAbout from './OurAbout';
import OurMission from './OurMission';
import OurVision from './OurVision';

const AboutSection = () => {
  return (
    <section className="bg-gray-100 py-16 px-4">

      <OurAbout />
      <OurVision />
      <OurMission />

      </section>
  );
};

export default AboutSection;
