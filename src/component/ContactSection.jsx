import React from 'react';

const ContactSection = () => {
  return (
    <div id="contact" className="bg-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-[60%]">
            <h3 className="text-2xl text-center font-bold text-[#65422e] mb-4">Get Direction</h3>
            <p className="text-gray-600 font-semibold mb-4">
              If you have any questions or need assistance, please don't hesitate to reach out to us. We're here to help and answer any questions you may have.
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3665.1868154770887!2d77.46385117509972!3d23.27266067899919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c693667169c2f%3A0x5daa462c9976ddc1!2sVardhan%20Interiors!5e0!3m2!1sen!2sin!4v1725189551291!5m2!1sen!2sin"
              width="100%"
              height="420"
              style={{ border: 10 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
          <div className="lg:w-[40%] flex flex-col space-y-4">
            <h2 className="text-2xl font-bold text-center text-[#65422e]">Contact Us</h2>
            <p className="text-gray-600 font-semibold">
              Fill in the form to get in touch with us. We will get back to you as soon as possible.
            </p>
            <input
              className="form-input px-4 py-3 border border-gray-300 rounded-lg shadow-sm"
              type="text"
              placeholder="Your Name"
            />
            <input
              minLength="10"
              maxLength="10"
              className="form-input px-4 py-3 border border-gray-300 rounded-lg shadow-sm"
              type="text"
              placeholder="Your Number"
            />
            <input
              className="form-input px-4 py-3 border border-gray-300 rounded-lg shadow-sm"
              type="email"
              placeholder="Your Email ID"
            />
            <input
              maxLength="250"
              className="form-input px-4 py-3 border border-gray-300 rounded-lg shadow-sm"
              type="text"
              placeholder="City"
            />
            <textarea
              rows="3"
              className="form-textarea px-4 py-3 border border-gray-300 rounded-lg shadow-sm"
              placeholder="Type Your Message.."
            ></textarea>
            <div className="text-center">
              <button
                type="submit"
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
