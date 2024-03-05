import Image from 'next/image';
import Link from 'next/link';
import { MdArrowForward } from 'react-icons/md';

import { trendCars } from '@/data/content';

function TrendVehicles() {
  return (
    <div className="container-custom">
      <div className="space-y-14">
        <div className="flex flex-col items-center gap-5 md:flex-row md:justify-between md:gap-0">
          <h1
            style={{ fontFamily: 'Sequel-semibold' }}
            className="text-2xl md:text-3xl lg:text-5xl"
          >
            Trending Vehicles
          </h1>
          <Link
            href="/#"
            className="flex items-center gap-1 rounded-full bg-blue-600 px-6 py-4 text-base text-white"
          >
            View All <MdArrowForward />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4">
          {trendCars.map((car) => (
            <div
              key={car.name}
              className="flex h-[50vh] flex-col justify-between border border-gray-300 p-5 hover:bg-cyan-500/10 md:h-[30vh] lg:h-[50vh] 2xl:h-[45vh] "
            >
              <h1
                style={{ fontFamily: 'Sequel-normal' }}
                className={` text-3xl`}
              >
                {car.name}
              </h1>

              <div className="h-[50%]">
                <Image
                  src={car.image}
                  alt={car.name}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex items-center justify-between text-sm">
                <p>${car.price}/day</p>
                <Link
                  href="/#"
                  className="rounded-full border border-gray-400 bg-gray-100 px-4 py-2"
                >
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TrendVehicles;
