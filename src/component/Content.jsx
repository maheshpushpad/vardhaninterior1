import React from 'react';
import 'tailwindcss/tailwind.css';
import 'animate.css/animate.min.css';

const Content = () => {
  return (
    <div id="content" className="no-top no-bottom">

      <section
        id="section-about-us-3"
        className="side-bg no-padding relative"
        style={{
          backgroundImage: 'url(https://example.com/your-image.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '607px'
        }}
      >
        <div className="container mx-auto h-full flex items-center">
          <div className="inner-padding w-full md:w-6/12 ml-auto animate__animated animate__fadeInRight" data-wow-delay=".5s">
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-white mb-4">
              We believe that every client has unique requirements and taste. In order to support that, we add up the best and most creative designs to make your dream a reality. We have endless ideas that can impress you at every step. You are always welcome to discuss your ideas.
            </p>
            <ul className="text-white list-disc pl-5">
              <li>Practice</li>
              <li>Talent</li>
              <li>Fresh Minds</li>
              <li>Experience</li>
              <li>Guaranteed Client Satisfaction</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="call-to-action bg-gray-100 text-center text-gray-800 py-16" aria-label="cta">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 animate__animated animate__fadeInUp">Are you looking for interior design experts?</h2>
          <a
            href="http://www.shallyinteriordesigner.com/contact.htm"
            className="btn btn-outline-black btn-lg animate__animated animate__fadeInUp"
          >
            Get Quotation
          </a>
        </div>
      </section>

      <section id="section-testimonial-2" className="bg-gray-800 text-light py-16">
        <div className="container mx-auto">
          <div
            id="testimonial-carousel"
            className="owl-carousel owl-theme animate__animated animate__fadeInUp"
            data-wow-delay=".3s"
          >
            {[
              {
                quote: "I really love the way in which Shally Interior Designer works. I love their concept and innovative solutions. I recommend them as they offer perfect decorating solutions. I appreciate Shally and recommend to everyone.",
                author: "Mukesh"
              },
              {
                quote: "The decorators at Shally Interior Designer have done a marvelous job for our office. Their commitment towards work and professional approach helped us to complete our office well in time.",
                author: "Nisha"
              },
              {
                quote: "We are delighted by the final product delivered by Shally. The interiors of the entire building are perfect. The team was very sensitive to our design needs and went to extraordinary lengths to develop the appropriate design for us.",
                author: "Pooja"
              }
            ].map((testimonial, index) => (
              <div className="md:w-6/12 mx-auto mb-8" key={index}>
                <div className="de_testi p-8 bg-white rounded-lg shadow-lg">
                  <blockquote className="mb-4">
                    <p className="text-gray-800">{testimonial.quote}</p>
                  </blockquote>
                  <div className="de_testi_by text-gray-600 font-bold">{testimonial.author}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Content;
