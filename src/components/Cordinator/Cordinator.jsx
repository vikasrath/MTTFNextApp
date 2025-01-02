"use client"; // Add this if using the component in a client-side route

import React from 'react';
import dynamic from 'next/dynamic';
import { cordinators } from '../../../public/assets/cordinators/cordinators.js';
import Image from 'next/image.js';

// Dynamically import react-slick to avoid SSR issues
const Slider = dynamic(() => import('react-slick'), { ssr: false });

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Cordinator = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1125,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full py-12 px-4 bg-white">
      <h1 className="text-center md:text-4xl text-2xl font-medium border-b pb-6 mb-6 text-[#2C3E50] max-w-[90%] mx-auto">
        Executive Officers / Coordinators
      </h1>
      <Slider {...settings}>
        {cordinators.map((card, index) => (
          <div key={index} className="p-4">
            <div className="max-w-sm mx-auto hover:shadow-lg rounded-lg border border-[#3498DB] shadow-md bg-white">
              <div className="flex items-center mt-4 p-4">
                <Image
                  className="rounded-full border-2 border-gray-200 h-24 w-24"
                  src={card.imageUrl}
                  alt={`${card.name} - ${card.role}`}
                />
                <div className="ml-6">
                  <h5 className="text-[#2C3E50] text-xl font-medium mb-2">
                    {card.name}
                  </h5>
                  <p className="text-gray-500 text-sm">{card.role}</p>
                </div>
              </div>

              <div className="p-5 flex flex-col">
                <p className="text-gray-600 text-base mb-4">{card.feedback}</p>
                <div className="flex">
                  <a
                    href="#"
                    className="bg-[#3498DB] hover:bg-[#2980B9] text-white rounded-full px-4 py-2"
                  >
                    View Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Cordinator;
