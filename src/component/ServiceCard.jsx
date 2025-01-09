import React from 'react';
import { Link } from 'react-router-dom';


const ServiceCard = ({ id, image, title, description }) => (
  <div className="max-w-sm bg-gray-200 rounded-xl overflow-hidden border border-gray-500 shadow-lg hover:scale-95 duration-300 ease-in hover:shadow-2xl p-4 m-4">
    <img className="w-full h-48 rounded-xl border border-[#65422e] object-cover" src={image} alt={title} />
    <div className="px-6 py-4">
      <div className="font-bold text-center text-[#65422e] text-xl mb-2">{title}</div>
      {/* <p className="text-gray-700 text-center text-base">{id}</p> */}
      <p className="text-gray-700 text-center text-base">{description}</p>
    </div>
    <div className="px-6 text-center pt-4 pb-2">
      <Link
      to={`/details/${id}`}
       className="bg-[#65422e] hover:bg-[#c5762c] text-white font-bold py-3 px-4 rounded-xl">
        View Details &rarr;
      </Link>
    </div>
  </div>
);

export default ServiceCard;
