import React, { useState, useEffect } from "react";
// import i1 from "../assets/Images/carasoul/i1.jpg";

const CountUp = ({ endValue, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = endValue;
    const increment = end / (duration / 1000 * 60); // duration in seconds, 60 FPS
    const step = () => {
      start += increment;
      if (start >= end) {
        setCount(end);
      } else {
        setCount(Math.ceil(start));
        requestAnimationFrame(step);
      }
    };
    step();
  }, [endValue, duration]);

  return <h3 className="text-4xl font-bold text-[#fff]">{count}+</h3>;
};

const FunFacts = () => {
  return (
    <section id="section-fun-facts" className="bg-[#412a1f] py-12" >
        {/* style={{backgroundImage: `url(${i1})`, backgroundSize: 'cover', backgroundPosition: 'center'}} */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div className="wow fadeIn" data-wow-delay="0">
            <div className="de_count">
              <CountUp endValue={100} duration={2000} />
              <span className="text-lg font-bold mt-2 text-[#d66f2d]">Satisfied Clients</span>
            </div>
          </div>
          <div className="wow fadeIn" data-wow-delay=".50s">
            <div className="de_count">
              <CountUp endValue={100} duration={2000} />
              <span className="text-lg font-bold mt-2 text-[#d66f2d]">Projects Completed</span>
            </div>
          </div>
          <div className="wow fadeIn" data-wow-delay=".50s">
            <div className="de_count">
              <CountUp endValue={5} duration={2000} />
              <span className="text-lg font-bold mt-2 text-[#d66f2d]">Years of Experience</span>
            </div>
          </div>
          <div className="wow fadeIn" data-wow-delay=".75s">
            <div className="de_count">
              <CountUp endValue={10} duration={2000} />
              <span className="text-lg font-bold mt-2 text-[#d66f2d]">Active Projects</span>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .wow.fadeIn {
          animation: fadeIn 1s forwards;
        }
      `}</style>
    </section>
  );
};

export default FunFacts;
