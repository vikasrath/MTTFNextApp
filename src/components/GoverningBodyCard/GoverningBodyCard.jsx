import React from 'react';
import Image from 'next/image';
const GoverningBodyCard = ({ member }) => {
    return (
        <div className="  md:p-6 rounded-lg  m-4 transition-transform transform hover:scale-105 flex flex-col items-center">
            <div className="mb-4">
                <Image
                    src={member.img}
                    alt={member.name}
                    className="w-32 h-32 object-cover object-top rounded-full border-4 "
                />
            </div>
            <h2 className="text-lg text-gray-800 font-semibold title-font mb-2 text-center">{member.name}</h2>
            <p className="text-md text-gray-600 mb-1 text-center">{member.position}</p>
            <p className="text-md text-gray-500 text-center">{member.memberId}</p>
            <a href={member.profile}>
                
            </a>
            <button className="w-[60%] mt-3 px-6 py-2 hover:bg-blue-500 text-lg  rounded-3xl border-2 border-blue-400 
             hover:text-white  transition duration-200">
                View Profile...
            </button>
        </div>
    );
};

export default GoverningBodyCard;
