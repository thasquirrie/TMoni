import React from 'react';
import AboutHeader from '../components/AboutHeader';
import AboutMore from '../components/AboutMore';
import AboutStats from '../components/AboutStats';
import AboutValues from '../components/AboutValues';

const AboutScreen = () => {
  return (
    <div>
      <div>
        <AboutHeader />
      </div>
      <div>
        <AboutMore />
      </div>
      <div className='bg-white p-10'></div>
      <div>
        <AboutValues />
      </div>
      <div>
        <AboutStats />
      </div>
    </div>
  );
};

export default AboutScreen;
