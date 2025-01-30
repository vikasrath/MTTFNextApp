import React from "react";
import { FaLinkedin } from "react-icons/fa";

export default function LeadershipCard({ leader }) {
    return (
        <div className="p-4 flex justify-center w-full">
            <div className="p-6 flex items-center w-full max-w-md bg-white rounded-lg shadow-lg transition-all hover:shadow-2xl">
                <img
                    src={leader.img.src}
                    alt={leader.name}
                    className="w-28 h-36 lg:w-36 lg:h-44 xl:w-40 xl:h-48 mb-4 object-cover border-4 border-gray-200 rounded-lg shadow-sm"
                />
                <div className="flex flex-col items-start justify-start ml-6 max-h-full">
                    <h3 className="text-lg md:text-xl xl:text-2xl font-semibold text-gray-800">{leader.name}</h3>
                    <p className="text-xs md:text-sm xl:text-lg text-gray-500 text-start mb-4">{leader.position}</p>
                    <div className="flex justify-start space-x-4 ">
                        <a href={leader.profileLink} target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="w-5 h-5 text-blue-700 hover:text-blue-900 transition-colors duration-300" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
