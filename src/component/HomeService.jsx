import React from 'react';
import photo from '../assets/Images/Gallery/a1.png';

const HomeService = () => {
  return (
    <section id="section-services" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">

          <div className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
            <div className="space-y-16">
              <div className="lg:text-right hover:scale-95 duration-300">
                <h3 className="text-xl font-bold text-[#d66f2d]">Personalized Design</h3>
                <p className='text-sm'>Our team works with you to create a design tailored to your specific preferences and lifestyle, ensuring your space feels uniquely yours.</p>
              </div>
              <div className="lg:text-right hover:scale-95 duration-300">
                <h3 className="text-xl font-bold text-[#d66f2d]">Eco-Friendly Solutions</h3>
                <p className='text-sm'>We provide sustainable and environmentally friendly design solutions that help reduce your carbon footprint and promote a healthier living environment.</p>
              </div>
              <div className="lg:text-right hover:scale-95 duration-300">
                <h3 className="text-xl font-bold text-[#d66f2d]">Virtual Consultations</h3>
                <p className='text-sm'>Connect with our experts from the comfort of your home through virtual consultations. We ensure that you receive the best advice and design ideas remotely.</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0 flex justify-center items-center">
            <img src={photo} alt="Interior Design" className="max-w-full rounded-full hover:shadow-black border-solid border-2 border-[#65422e] hover:scale-95 duration-300 shadow-lg" />
          </div>
          {/* Image */}

          <div className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
            <div className="space-y-16">
              <div className="lg:text-left hover:scale-95 duration-300">
                <h3 className="text-xl font-bold text-[#d66f2d]">Comprehensive Planning</h3>
                <p className='text-sm'>We offer a full range of planning services, from initial consultation to final implementation, ensuring every detail is covered.</p>
              </div>
              <div className="lg:text-left hover:scale-95 duration-300">
                <h3 className="text-xl font-bold text-[#d66f2d]">Timely Project Completion</h3>
                <p className='text-sm'>Our team is committed to delivering your project on time, without compromising on quality. We ensure your space is ready as per the agreed timeline.</p>
              </div>
              <div className="lg:text-left hover:scale-95 duration-300">
                <h3 className="text-xl font-bold text-[#d66f2d]">Customer Satisfaction</h3>
                <p className='text-sm'>Customer satisfaction is our top priority. We strive to exceed your expectations with every project, ensuring you are delighted with the results.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HomeService;
