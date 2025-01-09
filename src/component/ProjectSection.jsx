import React from 'react';
import ProjectCard from './ProjectCard';
import g1 from '../assets/Images/Gallery/g1.jpg';
import g2 from '../assets/Images/Gallery/g2.jpg';
import g3 from '../assets/Images/Gallery/g3.jpeg';
import p5 from '../assets/Images/Gallery/p5.jpg';
import p7 from '../assets/Images/Gallery/p7.jpg';
import p8 from '../assets/Images/Gallery/p8.jpg';
import g9 from '../assets/Images/Gallery/g18.jpg';
import g8 from '../assets/Images/Gallery/g8.jpg';

const projects = [
  {
    title: 'Modern Living Room',
    image: g1,
    description: 'A modern living room with minimalist design and smart home integration.',
    location: 'Mumbai, Maharashtra',
    completionDate: 'June 2023',
    clientName: 'Aarav Sharma',
    testimonial: 'The design exceeded our expectations and truly transformed our space.',
  },
  {
    title: 'Contemporary Bedroom',
    image: g9,
    description: 'A contemporary bedroom with a cozy and elegant design.',
    location: 'Bangalore, Karnataka',
    completionDate: 'April 2023',
    clientName: 'Priya Menon',
    testimonial: 'A beautiful and serene bedroom that provides the perfect retreat.',
  },
  {
    title: 'Luxury Kitchen',
    image: g2,
    description: 'A luxury kitchen with high-end appliances and a sleek design.',
    location: 'Delhi, Delhi',
    completionDate: 'March 2023',
    clientName: 'Rohan Gupta',
    testimonial: 'The kitchen is both functional and stylish, a chef’s dream.',
  },
  {
    title: 'Elegant Dining Room',
    image: g3,
    description: 'An elegant dining room with classic elements and a warm ambiance.',
    location: 'Chennai, Tamil Nadu',
    completionDate: 'May 2023',
    clientName: 'Lakshmi Iyer',
    testimonial: 'The dining room is perfect for family gatherings and dinner parties.',
  },
  {
    title: 'Modern Office Space',
    image: p5,
    description: 'A modern office space designed for productivity and collaboration.',
    location: 'Pune, Maharashtra',
    completionDate: 'July 2023',
    clientName: 'Anil Kapoor',
    testimonial: 'The office layout has significantly improved our team’s efficiency.',
  },

  {
    title: 'Stylish Bathroom',
    image: g8,
    description: 'A stylish bathroom with modern fixtures and a spa-like feel.',
    location: 'Hyderabad, Telangana',
    completionDate: 'September 2023',
    clientName: 'Siddharth Rao',
    testimonial: 'The bathroom has become our sanctuary for relaxation.',
  },
  {
    title: 'Chic Balcony Garden',
    image: p7,
    description: 'A chic balcony garden with beautiful plants and comfortable seating.',
    location: 'Ahmedabad, Gujarat',
    completionDate: 'October 2023',
    clientName: 'Ritika Patel',
    testimonial: 'The balcony garden is a green oasis in our home.',
  },
  {
    title: 'Cozy Home Library',
    image: p8,
    description: 'A cozy home library with built-in bookshelves and comfortable seating.',
    location: 'Kolkata, West Bengal',
    completionDate: 'August 2023',
    clientName: 'Neha Verma',
    testimonial: 'A perfect space for reading and relaxation.',
  },
];


const ProjectSection = () => {
  return (
    <section className="py-6 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl text-[#65422e] font-bold text-center mb-20 underline ">Our Projects</h1>
    {/* <h1 className="text-3xl text-[#65422e] text-center font-bold mb-6">Our Services</h1> */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
