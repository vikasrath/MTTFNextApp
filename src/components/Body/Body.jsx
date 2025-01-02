"use client"

import React from 'react';
import { useRouter } from 'next/navigation'; // Use Next.js's useRouter hook
import HomeHeader from "../../AllPagesHeaders/HomeHeader";

function Body({ children }) {
  const router = useRouter();  // Use the router hook from Next.js

  return (
    <div className='  relative flex flex-col justify-between items-center text-center md:pt-10'>
    
      <div className='flex flex-col justify-center items-center w-full  inset-0 -z-10 bg-cover bg-center bg-no-repeat bg-gradient-header   bg-[#0d1c2c] '>
        {children}
      </div>
    </div>
  );
}

export default Body;
