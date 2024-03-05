'use client';

import Image from 'next/image';
import type { FC } from 'react';
import React, { useState } from 'react';
import useBoolean from 'react-use/lib/useBoolean';
import useInterval from 'react-use/lib/useInterval';

import { bgImages as DATA } from '@/data/content';

export interface SectionHero2Props {
  className?: string;
}

const BgSlider: FC<SectionHero2Props> = ({ className = '' }) => {
  // =================
  const [indexActive, setIndexActive] = useState(0);
  const [isRunning] = useBoolean(true);

  const handleAutoNext = () => {
    setIndexActive((state) => {
      if (state >= DATA.length - 1) {
        return 0;
      }
      return state + 1;
    });
  };

  useInterval(
    () => {
      handleAutoNext();
    },
    isRunning ? 5500 : null,
  );
  //

  // =================

  const renderItem = (index: number) => {
    const isActive = indexActive === index;
    const item = DATA[index];
    if (!isActive) {
      return null;
    }
    return (
      <div
        className={`nc-SectionHero2Item nc-SectionHero2Item--animation absolute inset-x-0 -z-20 h-screen min-h-0 overflow-hidden md:h-[50vh] lg:h-screen 2xl:h-[95vh] ${className}`}
        key={index}
      >
        {/* BG */}
        <div className="absolute inset-0">
          {/* @ts-ignore */}
          <Image src={item} alt="" className="h-full w-full object-cover" />
        </div>
      </div>
    );
  };

  return <>{DATA.map((_, index) => renderItem(index))}</>;
};

export default BgSlider;
