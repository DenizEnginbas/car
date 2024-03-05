import Image from 'next/image';
import { BsArrowUpRight } from 'react-icons/bs';

import { carsCategory } from '@/data/content';

function CarCategory() {
  return (
    <div className="container-custom">
      <div className="space-y-14">
        <h1
          style={{ fontFamily: 'Sequel-semibold' }}
          className="text-3xl lg:text-5xl"
        >
          Car Category
        </h1>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {carsCategory.map((car) => (
            <div
              key={car.name}
              className="relative h-[50vh] bg-cover md:h-[35vh] lg:h-[45vh]"
            >
              <h1
                style={{ fontFamily: 'Sequel-normal' }}
                className={`absolute w-[70%] ${
                  car.id === 3 ? 'text-white' : 'text-white'
                } left-5 top-5 text-3xl`}
              >
                {car.name}
              </h1>

              <Image
                width={400}
                height={600}
                src={car.imageUrl}
                alt={car.name}
                className={`object-cover ${
                  car.id === 1 ? 'object-left' : ''
                } h-full w-full`}
              />

              <div className="absolute bottom-5 right-5 text-xl">
                <div className="rounded-full bg-white p-2 text-black hover:bg-blue-600 hover:text-white 2xl:p-4">
                  <BsArrowUpRight />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CarCategory;
