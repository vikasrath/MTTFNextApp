import React from "react";
import { FaLinkedin } from "react-icons/fa";

export default function LeadershipCard({ leader }) {
    return (
        <div className="p-4 flex justify-center">
            <div className="p-6 flex items-center w-full max-w-md bg-white rounded-lg shadow-lg transition-all hover:shadow-2xl">
                <img
                    src={leader.img.src}
                    alt={leader.name}
                    className="w-36 h-48 mb-4 object-cover border-4 border-gray-200 rounded-lg shadow-sm"
                />
                <div className="flex flex-col items-start justify-start ml-6 h-full">
                    <h3 className="text-2xl font-semibold text-gray-800">{leader.name}</h3>
                    <p className="text-sm text-gray-500 text-center mb-4">{leader.position}</p>
                    <div className="flex justify-start space-x-4">
                        <a href={leader.profileLink} target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="w-7 h-7 text-blue-700 hover:text-blue-900 transition-colors duration-300" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
