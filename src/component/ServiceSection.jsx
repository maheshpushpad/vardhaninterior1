import React from 'react';
import ServiceCard from './ServiceCard';
import ServiceInfo from './ServiceInfo';

const ServicesSection = () => (
  <div className="container bg-white mx-auto px-4 py-8">
    <h1 className="text-4xl underline text-[#65422e] text-center font-bold mb-20">Our Services</h1>


    <div className="flex flex-wrap justify-center">
      {ServiceInfo.map((service, index) => (
        <ServiceCard 
          key={index}
          id={service.id}
          image={service.image}
          title={service.title}
          description={service.description}
        />
      ))}
    </div>
  </div>
);

export default ServicesSection;
