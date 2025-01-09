import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="container bg-gray-900 mx-auto pt-20 border-t border-[#b97432] py-8 px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1">
          <h3 className="text-2xl text-[#b97432] font-bold mb-4">About Us</h3>
          <p className="text-gray-300">
            Welcome to Vardhan Interior. We are dedicated to transforming spaces into stunning and functional environments. Our team of experienced designers works closely with clients to understand
            ...{' '}
            <a
              href="/about"
              className="text-white font-bold hover:text-[#b97432] transition-colors duration-300"
            >
              Read More
            </a>
          </p>
        </div>

        <div className="col-span-1">
          <h3 className="text-2xl text-[#b97432] font-bold mb-4">Residential Interior Design</h3>
          <ul className="space-y-2">
            {["Bedroom", "Dressing Room", "Dining Room", "Drawing Room", "Home Entrance"].map((item) => (
              <li key={item}>
                <a
                  className="block text-gray-300 hover:text-white transition-colors duration-300"
                >
                  {item} Interior Design
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-1">
          <h3 className="text-2xl text-[#b97432] font-bold mb-4">Commercial Interior Design</h3>
          <ul className="space-y-2">
            {["Office", "Showroom", "Restaurant", "Office Entrance", "Gym"].map((item) => (
              <li key={item}>
                <a
                  className="block text-gray-300 hover:text-white transition-colors duration-300"
                >
                  {item} Interior Design
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-1">
          <h3 className="text-2xl text-[#b97432] font-bold mb-4">Contact Us</h3>
          <address className="not-italic">
            <span className="block text-gray-300 mb-2">
              <strong>Opening Hours: </strong>
              <a className="hover:text-white transition-colors duration-300">
                10:00 AM - 8:30 PM <br /> (Mon - Sat)
              </a>
            </span>
            <span className="block text-gray-300 mb-2">
              <strong>Phone: </strong>
              <a
                href="tel:+918629920453"
                className="hover:text-white transition-colors duration-300"
              >
                +91 8629920453
              </a>
            </span>
            <span className="block text-gray-300 mb-2">
              <strong>Email:</strong>{' '}
              <a
                href="mailto:vardhaninterior01@gmail.com"
                className="hover:text-white transition-colors duration-300"
              >
                vardhaninterior01@gmail.com
              </a>
            </span>

            <span className="block text-gray-300">
              <strong>Location:</strong>{' '}
              <a
                href="https://maps.app.goo.gl/S9pCXXbUFEGvdDQG8"
                className="hover:text-white transition-colors duration-300"
              >
                Shop no 10-11, Ganesh Galaxy City, Ayodhya Bypass Rd, beside Bapu ki kutia, ISRO Colony, Ayodhya Nagar, Bhopal, Madhya Pradesh 462041
              </a>
            </span>
          </address>
          <div className="flex space-x-4 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-300">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-300">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-300">
              <FaTwitter />
            </a>
           
          </div>
        </div>
      </div>
      <p className="text-center py-2 pt-24 text-gray-300">
        © 2024 All Rights Reserved | Designed & Developed With ❤️ By
        <a className="font-bold text-white hover:text-[#b97432] transition-colors duration-300" href="https://binarylogix.in/" target="_blank" rel="noopener noreferrer"> Binarylogix Technologies</a>.
      </p>
    </div>
  );
};

export default Footer;
