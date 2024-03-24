'use client';

import { useState } from 'react';
import dmcWeb from '../assets/dmc-web.png';
import nexmedWeb from '../assets/nexmed-web.png';
import Image from 'next/image';

export default function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [
    {dmcWeb},
    {nexmedWeb},
    {dmcWeb},
  ];

  const goToPrevious = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="flex justify-center items-center">
      <button
        className="p-4"
        onClick={goToPrevious}
      >
        {'<'}
      </button>
      <div className="w-full flex justify-center items-center overflow-hidden">
        <img
          
          alt={`Slide ${activeIndex}`}
          className="w-full object-cover transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        />
      </div>
      <button
        className="p-4"
        onClick={goToNext}
      >
        {'>'}
      </button>
    </div>
  );
}
