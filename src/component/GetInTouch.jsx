import React from "react";

const GetInTouch = () => {
  return (
    <section className="bg-white py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#65422e] underline mb-20">Get In Touch with Us</h2>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-8">
        <ContactItem
          icon={
            <svg
              aria-hidden="true"
              className="w-10 h-10 text-white"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"
              ></path>
            </svg>
          }
          title="Call Us"
          text={
            <>
              <a href="tel:8319955741">+91 8629920453</a>
            </>
          }
        />
        <ContactItem
          icon={
            <svg
              aria-hidden="true"
              className="w-10 h-10 text-white"
              viewBox="0 0 576 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                d="M160 448c-25.6 0-51.2-22.4-64-32-64-44.8-83.2-60.8-96-70.4V480c0 17.67 14.33 32 32 32h256c17.67 0 32-14.33 32-32V345.6c-12.8 9.6-32 25.6-96 70.4-12.8 9.6-38.4 32-64 32zm128-192H32c-17.67 0-32 14.33-32 32v16c25.6 19.2 22.4 19.2 115.2 86.4 9.6 6.4 28.8 25.6 44.8 25.6s35.2-19.2 44.8-22.4c92.8-67.2 89.6-67.2 115.2-86.4V288c0-17.67-14.33-32-32-32zm256-96H224c-17.67 0-32 14.33-32 32v32h96c33.21 0 60.59 25.42 63.71 57.82l.29-.22V416h192c17.67 0 32-14.33 32-32V192c0-17.67-14.33-32-32-32zm-32 128h-64v-64h64v64zm-352-96c0-35.29 28.71-64 64-64h224V32c0-17.67-14.33-32-32-32H96C78.33 0 64 14.33 64 32v192h96v-32z"
              ></path>
            </svg>
          }
          title="Email Us"
          text={
            <>
              <a href="mailto:manvika@gmail.com">vardhaninterior@gmail.com</a>
            </>
          }
        />
        <ContactItem
          icon={
            <svg
              aria-hidden="true"
              className="w-10 h-10 text-white"
              viewBox="0 0 448 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                d="M400 64h-48V12c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v52H160V12c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v52H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm-6 400H54a6 6 0 0 1-6-6V160h352v298a6 6 0 0 1-6 6zm-52.849-200.65L198.842 404.519c-4.705 4.667-12.303 4.637-16.971-.068l-75.091-75.699c-4.667-4.705-4.637-12.303.068-16.971l22.719-22.536c4.705-4.667 12.303-4.637 16.97.069l44.104 44.461 111.072-110.181c4.705-4.667 12.303-4.637 16.971.068l22.536 22.718c4.667 4.705 4.636 12.303-.069 16.97z"
              ></path>
            </svg>
          }
          title="Opening Hours"
          text={
            <>
              <p>Monday - Saturday: 10:00AM - 8:30PM</p>
              <p>Sunday: Closed</p>
            </>
          }
        />
        <ContactItem
          icon={
            <svg
              aria-hidden="true"
              className="w-10 h-10 text-white"
              viewBox="0 0 320 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                d="M208 96c26.5 0 48-21.5 48-48S234.5 0 208 0s-48 21.5-48 48 21.5 48 48 48zm94.5 149.1l-23.3-11.8-9.7-29.4c-14.7-44.6-55.7-75.8-102.2-75.9-36-.1-55.9 10.1-93.3 25.2-21.6 8.7-39.3 25.2-49.7 46.2L17.6 213c-7.8 15.8-1.5 35 14.2 42.9 15.6 7.9 34.6 1.5 42.5-14.3L81 228c3.5-7 9.3-12.5 16.5-15.4l26.8-10.8-15.2 60.7c-5.2 20.8.4 42.9 14.9 58.8l59.9 65.4c7.2 7.9 12.3 17.4 14.9 27.7l18.3 73.3c4.3 17.1 21.7 27.6 38.8 23.3 17.1-4.3 27.6-21.7 23.3-38.8l-22.2-89c-2.6-10.3-7.7-19.9-14.9-27.7l-45.5-49.7 18.9-75.6 5.6 17c5.3 16 17.5 28.7 33.5 35.1l23.3 11.8c15.7 7.9 34.8 1.4 42.6-14.3 7.8-15.8 1.5-35-14.2-42.9z"
              ></path>
            </svg>
          }
          title="Location"
          text={
            <>
              <p> Shop no 10-11, Ganesh Galaxy City, Ayodhya Bypass Rd, beside Bapu ki kutia, ISRO Colony, Ayodhya Nagar, Bhopal, Madhya Pradesh 462041</p>
            </>
          }
        />
      </div>
    </section>
  );
};

const ContactItem = ({ icon, title, text }) => {
  return (
    <div className="bg-gray-200 shadow-lg rounded-lg p-6 hover:scale-105 transition text-center w-72 h-64 flex flex-col justify-between">
      <div className="bg-[#65422e] w-20 h-20 rounded-full flex items-center hover:scale-90 transition justify-center mx-auto mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-bold mb-2 text-black">{title}</h3>
      <div className="text-gray-600">{text}</div>
    </div>
  );
};

export default GetInTouch;
