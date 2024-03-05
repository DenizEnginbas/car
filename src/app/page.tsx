import React from 'react';

import BgSlider from '@/components/BgSlider';
import BookTesla from '@/components/BookTesla';
import CarCategory from '@/components/CarCategory';
import Heading from '@/components/Heading';
import Services from '@/components/Services';
import TopNav from '@/components/TopNav';
import TrendVehicles from '@/components/TrendVehicles';
import bg from '@/images/bg-tesla.jpg';

const page = () => {
  return (
    <div className="relative">
      <BgSlider />
      <div className="relative">
        <div className="absolute top-5 z-10 w-full">
          <TopNav />
        </div>

        <div>
          <Heading />
        </div>
      </div>

      <div className="py-32">
        <CarCategory />
      </div>

      <div className="bg-gray-100 py-32">
        <TrendVehicles />
      </div>

      <div className="bg-black py-20">
        <Services />
      </div>

      <div
        className="bg-cover bg-center"
        style={{ backgroundImage: `url(${bg.src})` }}
      >
        <BookTesla />
      </div>
    </div>
  );
};

export default page;
