"use client";

import React, { useState } from 'react';
import Image from 'next/image';
function ServicesCard({ title, discription, logoStatic, logoGif }) {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div
            className="mt-12 lg:ml-12 w-96 bg-white box-border shadow-[0px_0px_15px_rgba(0,0,0,0.09)] p-9 pt-5 space-y-3 relative overflow-hidden hover:scale-105 transition-transform duration-300 hover:shadow-md hover:border-[#392ce7] hover:border flex flex-col justify-center items-center"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="w-24">
               
                <Image src={isHovered ? logoGif : logoStatic} alt="service logo" className="h-full w-full" />
            </div>
            <h1 className="font-bold text-xl">{title}</h1>
            <p className="text-sm text-zinc-500 leading-6">
                {discription}
            </p>
        </div>
    );
}

export default ServicesCard;
