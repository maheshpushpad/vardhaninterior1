

import React, { useState, useEffect } from 'react';
import { Disclosure } from '@headlessui/react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/Images/logo.png';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/About' },
  { name: 'Our Services', href: '/Services' },
  { name: 'Projects', href: '/Project' },
  { name: 'Testimonials', href: '/Testimonials' },
  { name: 'Gallery', href: '/Gallery' },
  { name: 'Contact Us', href: '/Contact' },
];

const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      // Scrolling down
      setShowHeader(false);
    } else {
      // Scrolling up
      setShowHeader(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <Disclosure as="nav" className={`bg-white text-black px-2 fixed w-full z-50 transition-transform duration-300 ${showHeader ? 'transform translate-y-0' : 'transform -translate-y-full'}`}>
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 md:px-6 lg:px-8">
            <div className="relative flex h-20 items-center justify-between">
              <div className="flex-1 flex items-center justify-between md:items-stretch md:justify-start">
                <div className="flex-shrink-0">
                  <img src={logo} alt="Logo" className="h-16 rounded-full border-2 border-[#65422e] w-auto" />
                  
                </div>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center lg:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <FaTimes className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <FaBars className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              <div className="hidden lg:ml-6 lg:flex lg:space-x-8 items-center">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    className={({ isActive }) =>
                      classNames(
                        isActive ? 'bg-[#65422e] text-white' : 'text-black',
                        'rounded-md px-3 py-2 text-sm font-medium'
                      )
                    }
                    aria-current={({ isActive }) => (isActive ? 'page' : undefined)}
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden w-full bg-white">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as={NavLink}
                  to={item.href}
                  className={({ isActive }) =>
                    classNames(
                      isActive ? 'bg-gray-900 text-white' : 'text-black hover:bg-gray-700 hover:text-white',
                      'block rounded-md px-3 py-2 text-base font-medium'
                    )
                  }
                  aria-current={({ isActive }) => (isActive ? 'page' : undefined)}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Header;
