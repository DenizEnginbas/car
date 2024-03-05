import Link from 'next/link';
import React from 'react';
import { MdClose } from 'react-icons/md';

export interface NavMobileProps {
  onClickClose?: () => void;
}

const NavMobile: React.FC<NavMobileProps> = ({ onClickClose }) => {
  const renderMagnifyingGlassIcon = () => {
    return (
      <svg
        width={22}
        height={22}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22 22L20 20"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  };

  const renderSearchForm = () => {
    return (
      <form
        action=""
        method="POST"
        className="flex-1 text-slate-900 dark:text-slate-200"
      >
        <div className="flex h-full items-center space-x-1 rounded-full border-2 border-gray-400 bg-gray-100 px-4 py-2">
          {renderMagnifyingGlassIcon()}
          <input
            type="search"
            placeholder="Type and press enter"
            className="w-full border-none bg-transparent text-sm focus:outline-none focus:ring-0 "
          />
        </div>
        <input type="submit" hidden value="" />
      </form>
    );
  };

  const list = [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'Services',
      href: '/#services',
    },
    {
      title: 'Fleet',
      href: '/#fleet',
    },
    {
      title: 'Contact',
      href: '/#contact',
    },
    {
      title: 'FAQs',
      href: '/#FAQ',
    },
  ];

  return (
    <div className="h-screen w-full divide-y-2 divide-neutral-100 overflow-y-auto bg-white py-2 shadow-lg ring-1  transition">
      <div className="px-5 py-2">
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
        <button
          type="button"
          onKeyDownCapture={onClickClose}
          className="absolute right-2 top-2 p-1"
          onClick={onClickClose}
        >
          <MdClose />
        </button>
        <div className="mt-5">{renderSearchForm()}</div>
      </div>
      <ul className="flex flex-col space-y-5 px-5 py-6">
        {list.map((item) => (
          <Link href={item.href} key={item.title} className="capitalize">
            {item.title}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default NavMobile;
