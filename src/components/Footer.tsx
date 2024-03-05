import Link from 'next/link';
import {
  BsArrowRight,
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsYoutube,
} from 'react-icons/bs';
import { MdCopyright } from 'react-icons/md';

import { footerData } from '@/data/content';

function FooterComp() {
  return (
    <div className="container-custom pt-14 text-sm lg:text-base">
      <div className="items-start justify-between space-y-7 lg:flex lg:space-y-0">
        <div className="flex flex-col gap-5 md:w-[30%]">
          <div style={{ fontFamily: 'Sequel-semibold' }} className="text-xl">
            Auto
            <span
              style={{ fontFamily: 'Sequel-bold' }}
              className="text-blue-600"
            >
              Elite{' '}
            </span>
            Motors
          </div>
          <div className="lg:w-[80%]">
            <div className="space-y-3">
              <p className="">Subscribe to our newsletter</p>
              <div className="flex w-full items-center justify-between rounded-full border-2 border-gray-400 bg-gray-100 py-1 pl-3 pr-1">
                <input
                  type="text"
                  placeholder="Email"
                  className=" w-[65%] border-transparent bg-transparent p-0 text-sm ring-transparent focus:border-transparent focus:ring-transparent"
                />
                <div className="rounded-full bg-black p-2 text-white ">
                  <BsArrowRight className="text-2xl" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 text-sm 2xl:text-xl">
            <BsFacebook />
            <BsYoutube />
            <BsTwitter />
            <BsInstagram />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-7 md:grid-cols-3 lg:w-[65%]">
          {footerData.map((data) => (
            <div key={data.title} className="flex flex-col gap-5">
              <h1 className="font-semibold">{data.title}</h1>
              <div className="flex flex-col gap-3 text-gray-500">
                {data.data.map((i) => (
                  <Link key={i} href="/#">
                    {i}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr className="mb-5 mt-14 h-px border-0 bg-gray-300" />
      <div className="flex items-center justify-center pb-5 text-xs md:text-sm lg:text-base">
        Copyright{' '}
        <span>
          <MdCopyright />
        </span>{' '}
        2023. All rights reserved by{' '}
        <a href="https://devspherelabs.com/" className="ml-1 underline">
          DevsphereLabs
        </a>
        .
      </div>
    </div>
  );
}

export default FooterComp;
