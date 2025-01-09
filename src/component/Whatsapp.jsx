// src/components/WhatsAppIcon.jsx
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const Whatsapp = () => {
    return (
        <a
            href="https://wa.me/8629920453"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed z-10 bottom-4 right-5 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300 "
        >
            <FaWhatsapp size={28} />
        </a>
    );
};

export default Whatsapp;