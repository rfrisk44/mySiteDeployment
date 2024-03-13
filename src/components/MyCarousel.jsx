import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FaAward } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaPaintBrush } from "react-icons/fa";
import { GiSplitArrows } from "react-icons/gi";
import { FaGlobe } from "react-icons/fa";
import { FaMagnifyingGlassDollar } from "react-icons/fa6";

const MyCarousel = () => {
  return (
    <div style={{marginBottom:'2%'}} className='text-center'>
        <Carousel autoPlay interval={3500} infiniteLoop showThumbs={false} showIndicators={true} showStatus={false} showArrows={true} swipeable={true}>
            {/* Change the carousel pictures */}
        <div>
        <div className='benefit'>
              <FaPhoneAlt size={20}/>
              <h6>Ease of Communication</h6>
              <p className='fw-light'>If there are any problems or changes needed there will be no delay in contact.</p>
            </div>
            <div className='benefit'>
              <FaPaintBrush size={20}/>
              <h6>Customization</h6>
              <p className='fw-light'>A level of Customization that a website builder or AI can't match.</p>
            </div>
          </div>
          <div>
            <div className='benefit'>
              <GiSplitArrows size={20}/>
              <h6>Flexibility</h6>
              <p className='fw-light'>Allows flexibility to pursue a multitude of website approaches.</p>
            </div>
            <div className='benefit'>
              <FaGlobe/>
              <h6>Online Presence</h6>
              <p className='fw-light'>The best way to reach new clients and scale a business.</p>
            </div>
          </div>
          <div>
            <div className='benefit'>
              <FaMagnifyingGlassDollar/>
              <h6>Brand Recognition</h6>
              <p className='fw-light'>Builds an online presence, that allows you to be recognized.</p>
            </div>
            <div className='benefit'>
              <FaAward/>
              <h6>Professionalism</h6>
              <p className='fw-light'>A professionally maintained website boosts credibility with customers and stakeholders.</p>
            </div>
        </div>
        {/* Add more Carousel items for additional slides */}
        </Carousel>
    </div>
  );
};

export default MyCarousel;
