// src/components/CallIcon.jsx
import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';

const Call = () => {
    return (
        <a
            href="tel: 86299 20453"
            className="fixed z-10 bottom-4 left-5 bg-green-500  text-white p-3 rounded-full border border-white shadow-lg hover:bg-green-600 transition duration-300"
        >
            <FaPhoneAlt size={24} />
        </a>
    );
};

export default Call;