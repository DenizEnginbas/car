'use client';

import { useState } from 'react';

import { tabs } from '../data/content';
import Search from './Search';

const TabsComponent = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className="mx-auto lg:w-[80%]">
      <div className="">
        <ul className="flex items-center text-sm">
          {tabs.map((tab) => (
            <li key={tab.tabName}>
              <button
                type="button"
                onClick={() => handleTabClick(tab.value)}
                onKeyDownCapture={() => handleTabClick(tab.value)}
                className={`inline-flex ${
                  tab.border
                } cursor-pointer items-center gap-2 px-4 py-3 ${
                  activeTab === tab.value
                    ? 'relative bg-white  after:absolute after:bottom-0 after:left-0 after:h-0.5'
                    : 'bg-[#c2c5aa]'
                }`}
              >
                {tab.tabName}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="">
        {tabs.map((tab) => (
          <div
            key={tab.tabName}
            className={`duration-600 transition-opacity ${
              activeTab === tab.value ? 'block' : 'hidden'
            }`}
            style={{ opacity: activeTab === tab.value ? 1 : 0 }}
          >
            <Search />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabsComponent;
