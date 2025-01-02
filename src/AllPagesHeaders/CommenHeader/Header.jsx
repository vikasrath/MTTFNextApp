import React from 'react';
import Image from 'next/image';
function Header({ title, description, imgsrc, button, buttonLink }) {
    return (

        <>
            <div className='flex flex-col justify-center items-center w-full  inset-0 -z-10 bg-cover bg-center bg-no-repeat bg-gradient-header   bg-[#0d1c2c] '>
                <div className='flex flex-col md:flex-row justify-center items-center gap-10  md:mb-20  text-[#FFFFFF] mt-36'>
                    {/* Text Section */}
                    <div className='flex-1 md:text-left mt-36   text-center px-6   '>
                        <h1 className='md:text-[3.9rem] text-4xl font-medium leading-none text-center '>
                            {title}
                        </h1>
                        <p className='text-center  md:mt-6 mt-4'>
                            {description}
                        </p>
                        {button && (
                            <div className="rounded-md shadow flex items-center justify-center mt-8">
                                <a href={buttonLink}
                                    className=" w-[80%] lg:w-[50%] px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-blue-500 border border-transparent rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue md:py-4 md:text-lg md:px-10 text-center">
                                    {button}
                                </a>
                            </div>
                        )}
                    </div>

                    {/* Image Section */}
                    <div className='flex-1  flex justify-center '>
                        <Image src={imgsrc} alt=""
                            width={300}
                            height={300}
                        />
                    </div>
                </div>
            </div>


        </>

    );
}

export default Header;
