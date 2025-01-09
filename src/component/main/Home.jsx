import React from 'react';
import CaraSoul from '../CaraSoul';
import WhyChooseUs from '../WhyChooseUs';
import HomeService from '../HomeService';
import Fact from '../Fact';
import OurProcess from '../Process';
import HomeAbout from '../HomeAbout';
// import Content from '../Content';

const i1 = '../assets/Images/carasoul/i1.jpg';

const Home = () => {
  return (
    <div className=' pt-16' >
      <CaraSoul />
      <HomeAbout />
      <WhyChooseUs />
      <HomeService />
      <Fact />
      <OurProcess />
      {/* <Content /> */}
     
    </div>
    
  );
}

export default Home;