
import React from 'react';
import Image from 'next/image';
function Header({ title, description, imgsrc, button, buttonLink }) {
    return (

        <>
            <h1
                className="mx-auto max-w-4xl font-display font-bold tracking-normal text-white-300 dark:text-gray-300 text-7xl">
                {title}
                <span className="relative whitespace-nowrap text-white-600 dark:text-gray-300">Operations</span>
                <span className="relative whitespace-nowrap  text-indigo-700 dark:text-indigo-700">
                    
                    <span className="relative">with MTTF</span>
                </span>
            </h1>
            <h2 className="mx-auto mt-12 max-w-xl text-lg sm:text-white-400 text-white-500 dark:text-gray-300 leading-7">
            {description}
            </h2>
            <a className="bg-blue-600 dark:bg-gray-800 rounded-xl text-white dark:text-gray-300 font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-blue-500 dark:hover:bg-gray-600 transition"
                href="">Get started
            </a>

        </>

    );
}

export default Header;


