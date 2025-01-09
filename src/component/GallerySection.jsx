import React, { useState } from 'react';
import g1 from './../assets/Images/Gallery/g1.jpg';
import g2 from './../assets/Images/Gallery/g2.jpg';
import g3 from './../assets/Images/Gallery/g18.jpg';
import g4 from './../assets/Images/Gallery/g3.jpeg';
import g5 from './../assets/Images/Gallery/g5.jpg';
import g6 from './../assets/Images/Gallery/g6.jpg';
import g7 from './../assets/Images/Gallery/g7.jpg';
import g8 from './../assets/Images/Gallery/g8.jpg';
import g9 from './../assets/Images/Gallery/g9.jpg';
import g10 from './../assets/Images/Gallery/g10.jpg';
import g11 from './../assets/Images/Gallery/g11.jpg';
import g12 from './../assets/Images/Gallery/g12.jpg';
import g13 from './../assets/Images/Gallery/g13.jpg';
import g14 from './../assets/Images/Gallery/g14.jpg';
import g15 from './../assets/Images/Gallery/g15.jpg';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const photos = [
    { id: 1, name: 'Photo 1', url: g1 },
    { id: 2, name: 'Photo 2', url: g2 },
    { id: 3, name: 'Photo 3', url: g3 },
    { id: 4, name: 'Photo 4', url: g4 },
    { id: 5, name: 'Photo 5', url: g5 },
    { id: 6, name: 'Photo 6', url: g6 },
    { id: 7, name: 'Photo 7', url: g7 },
    { id: 8, name: 'Photo 8', url: g8 },
    { id: 9, name: 'Photo 9', url: g9 },
    { id: 10, name: 'Photo 10', url: g10 },
    { id: 11, name: 'Photo 11', url: g11 },
    { id: 12, name: 'Photo 12', url: g12 },
    { id: 13, name: 'Photo 13', url: g13 },
    { id: 14, name: 'Photo 14', url: g14 },
    { id: 15, name: 'Photo 16', url: g15 },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* <h1 className="text-2xl font-bold text-center mb-6">Gallery</h1> */}
      <h1 className="text-4xl underline text-[#65422e] text-center font-bold mb-20">Photo Gallery</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 mt-3 gap-4">
        {photos.map(photo => (
          <div
            key={photo.id}
            className="border rounded-lg mb-4 overflow-hidden shadow-xl hover:shadow-2xl hover:scale-95 duration-300 cursor-pointer"
            onClick={() => setSelectedImage(photo.url)}
          >
            <img src={photo.url} alt={photo.name} className="w-full h-72 object-cover object-center" loading="lazy" />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img src={selectedImage} alt="Selected" className="max-w-full p-5  rounded-xl max-h-full" />
        </div>
      )}
    </div>
  );
};

export default GallerySection;
