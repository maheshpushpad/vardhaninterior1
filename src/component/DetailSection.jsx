import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ServiceInfo from './ServiceInfo.js';
import { FaShareAlt, FaPhoneAlt, FaArrowLeft, FaWhatsapp } from 'react-icons/fa';

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = ServiceInfo.find((item) => item.id === parseInt(id));



  const GetWhatsappURL = (service) => {
    const title = [service.title, service.description];
    const url = window.location.href;
    const message = "Hii, i am showing best interior designer for " + service.title + " " + title.join(" ") + " from " + url;
    return `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}


const booking = (service) => {
  const phoneNumber = '6268738997'; // Replace with client phone number
  const title = [service.title, service.description];
  const url = window.location.href;
  const message = "I am reaching out to a request for a " + service.title + " " + title.join(" ") + " from " + url + ". Please provide me with more details.";
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

  if (!service) {
    return <div className="text-center py-12">Service not found</div>;
  }

  return (
    <div className="container bg-white mx-auto pt-8 px-4 py-12">

      {/* service details */}

      <div className="bg-white px-3 hover:shadow-2xl mt-4 rounded-2xl border border-[#65422e]  shadow-lg overflow-hidden md:flex md:items-center">
        <img
          src={service.image}
          alt={service.title}
          className="w-full md:w-1/2 rounded-2xl object-cover border-2 border-[#65422e] mb-6 mt-4 hover:scale-95 duration-300 md:mb-0"
        />
        
        <div className="p-6 px-8 md:w-1/2">
          <h1 className="text-3xl text-center border-b border-[#65422e] pb-2 text-[#65422e] font-bold mb-4">{service.title}</h1>
          <p className="text-lg mb-4">{service.description}</p>
          <div className="flex flex-col md:flex-row mb-6">
            <div className="md:w-1/2">
              <h2 className="text-xl text-[#65422e] font-semibold mb-2">Price</h2>
              <p className="text-lg font-medium">{service.price}</p>
            </div>
            <div className="md:w-1/2 mt-4 md:mt-0">
              <h2 className="text-xl text-[#65422e] font-semibold mb-2">Duration</h2>
              <p className="text-lg font-medium">{service.duration}</p>
            </div>
          </div>
          <div className="mb-6">
            <h2 className="text-xl text-[#65422e] font-semibold mb-2">Features</h2>
            <ul className="list-disc list-inside pl-5">
              {service.features.map((feature, index) => (
                <li key={index} className="text-base mb-1">{feature}</li>
              ))}
            </ul>
          </div>

          {/* whatsapp and call buttons */}

    <div className="flex flex-col items-center justify-center md:flex-row p-4 rounded-lg space-y-4 md:space-y-0 md:space-x-4">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center justify-center bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
      >
        <FaArrowLeft className="mr-2" /> Back
      </button>

      <button
        onClick={() => window.location.href = GetWhatsappURL(service)}
        className="flex items-center justify-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
      >
        <FaShareAlt className="mr-2" /> Share
      </button>

      <button
        onClick={() => window.location.href = booking(service)}
        // href="tel:+1234567890"
        className="flex items-center justify-center bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
      >
        <FaWhatsapp className="mr-2 size-lg" /> Book
      </button>
    </div>


          {/* whatsapp and call buttons */}

        </div>
      </div>
    </div>
  );
};

export default Details;
