import Link from 'next/link';
import { GoPerson } from 'react-icons/go';
import { RiSearch2Line } from 'react-icons/ri';

import MenuBar from './MenuBar';

const TopNav = () => {
  return (
    <div className="container-custom">
      <div className="wrapper flex items-center justify-between rounded-full bg-white px-5 py-3 shadow-md lg:justify-normal">
        <div
          style={{ fontFamily: 'Sequel-semibold' }}
          className="text-xl lg:w-[30%]"
        >
          Auto
          <span style={{ fontFamily: 'Sequel-bold' }} className="text-blue-600">
            Elite{' '}
          </span>
          Motors
        </div>
        <div className="hidden w-[40%] items-center justify-center gap-10 lg:flex">
          <Link href="/#">Home</Link>
          <Link href="/#">Services</Link>
          <Link href="/#">Fleet</Link>
          <Link href="/#">FAQs</Link>
          <Link href="/#">Contact</Link>
        </div>
        <div className="hidden w-[30%] items-center justify-end gap-3 lg:flex">
          <div className="flex w-[40%] items-center gap-1 rounded-full border-2 border-gray-400 bg-gray-100 p-2">
            <div>
              <RiSearch2Line className="text-2xl" />
            </div>
            <input
              type="text"
              placeholder="Search"
              className="border-transparent bg-transparent p-0 text-sm ring-transparent focus:border-transparent focus:ring-transparent"
            />
          </div>
          <div className="">
            <div className="rounded-full bg-black p-2.5 text-2xl text-white">
              <GoPerson />
            </div>
          </div>
        </div>
        <div className="lg:hidden">
          <MenuBar />
        </div>
      </div>
    </div>
  );
};

export default TopNav;
