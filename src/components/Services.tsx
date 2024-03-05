import Image from 'next/image';

import { serviesData } from '@/data/content';

function Services() {
  return (
    <div className="container-custom grid gap-10 text-white md:grid-cols-2 lg:grid-cols-4">
      {serviesData.map((service) => (
        <div key={service.desc}>
          <div className="flex items-center gap-4">
            <Image src={service.icon} alt="" className="w-20" />
            <div className="w-[70%] text-sm font-extralight">
              {service.desc}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Services;
