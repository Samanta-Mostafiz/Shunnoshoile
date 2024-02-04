import React from 'react';
import ServicesCategory from './Service/ServicesCategory';
import ServicesAbout from './Slider Banner/Serveices About/ServicesAbout';
import SliderBanner from './Slider Banner/SliderBanner';

const Home = () => {
    return (
        <div className=''>
            <SliderBanner />
            <ServicesAbout />
            <ServicesCategory />

        </div>
    );
};

export default Home;