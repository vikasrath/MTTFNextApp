"use client";

import React from 'react';
import Header from '@/components/Header/Header';
import AdvisoryCommittee from '../advisoryCommittee/page';
import { useState } from 'react';
import { FaBullseye, FaHandshake } from "react-icons/fa";
import { leaders } from './leadersData';
import LeadershipCard from '@/components/GoverningBodyCard/LeadershipCard';

function GoverningBody() {

  const [selected, setSelected] = useState("leadership");

  const handleSelect = () => {
    if(selected === "leadership") {
      setSelected("advisory")
    } else {
      setSelected("leadership")
    }
  }

  const data = leaders[selected];
  

  return (
    <>


      <Header
        title="Our Leaders"
        description="Great leaders inspire growth, empower minds, and pave the way for innovation and excellence."
      />

      <div className="flex justify-center items-center h-26 mt-20 ">
        <button
          onClick={handleSelect}
          className={`flex items-center justify-center gap-2 px-6 w-40 py-3 rounded-2xl font-semibold transition-all duration-300 shadow-md hover:shadow-xl focus:outline-none ${selected === "leadership"
            ? "bg-[#3784A8] text-white hover:bg-[#3784A8]"
            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
        >
          <FaBullseye size={20} /> Leadership
        </button>
        <button
          onClick={handleSelect}
          className={`flex items-center justify-center gap-2 px-6 w-40 py-3 rounded-2xl font-semibold transition-all duration-300 shadow-md hover:shadow-xl focus:outline-none ${selected === "advisory"
            ? "bg-[#3784A8] text-white hover:bg-[#3784A8]"
            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
        >
          <FaHandshake size={20} /> Advisors
        </button>
      </div>


      {/* leadership and advisorcomittee */}
      
      {data && (
        <div className="flex flex-col  md:p-0 pt-24">


          <div className="flex flex-wrap px-10 pb-16">
            {data.map((member) => (
              <div key={member.memberId} className=" w-full md:w-[50%] lg:w-1/3 mt-8 ">
                <LeadershipCard leader={member} />
              </div>
            ))}
          </div>
        </div>
      )}

    </>
  );
}

export default GoverningBody;
