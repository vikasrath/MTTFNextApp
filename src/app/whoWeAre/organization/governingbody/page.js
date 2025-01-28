"use client";

import React from 'react';
import meher from "../../../../../public/assets/GovermentBodyImage/meher.jpg"
import pooja from "../../../../../public/assets/GovermentBodyImage/pooja.jpg";
import jasswinder from "../../../../../public/assets/GovermentBodyImage/jasswinder.jpeg";
import shalu from "../../../../../public/assets/GovermentBodyImage/shalu.jpg";
import upinder from "../../../../../public/assets/GovermentBodyImage/upinder.jpg";
import yogita from "../../../../../public/assets/GovermentBodyImage/yogita.jpg";
import Madhuchand from "../../../../../public/assets/GovermentBodyImage/Madhuchand.jpg";
import gurmeet from "../../../../../public/assets/GovermentBodyImage/gurmeet.jpg";
import bharti from "../../../../../public/assets/GovermentBodyImage/bharti.png";
import biswaranjan from "../../../../../public/assets/GovermentBodyImage/biswaranjan.jpg";
import jatin from "../../../../../public/assets/GovermentBodyImage/jatin.jpeg";
import daljeet from "../../../../../public/assets/GovermentBodyImage/daljeet.jpg";
import Header from '@/components/Header/Header';
import GoverningBodyCard from '@/components/GoverningBodyCard/GoverningBodyCard';
import sourabh from "../../../../../public/assets/GovermentBodyImage/sourabh.jpg";
import AdvisoryCommittee from '../advisoryCommittee/page';
import { useState } from 'react';
import { FaBullseye, FaHandshake } from "react-icons/fa";

function GoverningBody() {

    const [govbody, setgovbody] = useState(true)
    const [advisor, setadvisor] = useState(false)

    const governingBody = [
        { name: "Mehar Chand, Ph.D", position: "Founder & President (MTTF, India)", memberId: "MTTF5575130", img: meher },
        { name: "Sourabh Kumar", position: "AVP", memberId: "", img: sourabh, profileLink: "https://www.linkedin.com/in/sourabhkumar91/" },
        { name: "Gurmej Singh Sandhu, Ph.D", position: "General Secretary (MTTF, India)", memberId: "MTTF2017073", img: gurmeet },
        { name: "Jaswinder Pal, Ph.D", position: "Director of Accounts (MTTF, India)", memberId: "MTTF6104175", img: jasswinder },
        { name: "Biswaranjan Senapati, Ph.D", position: "Executive Member (MTTF, India)", memberId: "MTTF19596466", img: biswaranjan },
        { name: "Pooja, Ph.D", position: "Executive Member (MTTF, India)", memberId: "MTTF20102922", img: pooja },
        { name: "Bharti Kapoor, Ph.D", position: "Executive Member (MTTF, India)", memberId: "MTTF6547519", img: bharti },
        { name: "Madhuchanda Rakshit, Ph.D", position: "Executive Member (MTTF, India)", memberId: "MTTF7597798", img: Madhuchand },
        { name: "Yogita Shama, Ph.D", position: "Executive Member (MTTF, India)", memberId: "MTTF000000", img: yogita },
        { name: "Upinder Kaur, Ph.D", position: "Executive Member (MTTF, India)", memberId: "MTTF9928796", img: upinder },
        { name: "Shalu Gupta, Ph.D", position: "Executive Member (MTTF, India)", memberId: "MTTF367784", img: shalu },
        { name: "Daljeet Kaur, Ph.D", position: "Executive Member (MTTF, India)", memberId: "MTTF19568242", img: daljeet },
        { name: "Jatin Bansal, JRF", position: "Executive Member (MTTF, India)", memberId: "MTTF19541982", img: jatin }
    ];

    const handlegovbody = () => {
        setgovbody(true)
        setadvisor(false)
    }
    const handleadvisiors = () => {
        setgovbody(false)
        setadvisor(true)
    };

    return (
        <>


            <Header
                title="Our Visionary Leaders"
                description="Meet the visionary leaders of the MathTech Thinking Foundation (MTTF), whose expertise and dedication drive innovation and educational excellence. Their guidance empowers individuals, fosters academic growth, and promotes a brighter future in mathematics and technology."
            />

<div className="flex justify-center items-center h-26 mt-20 ">
        <button
          onClick={handlegovbody}
          className={`flex items-center justify-center gap-2 px-6 w-40 py-3 rounded-2xl font-semibold transition-all duration-300 shadow-md hover:shadow-xl focus:outline-none ${govbody
            ? "bg-[#3784A8] text-white hover:bg-[#3784A8]"
            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          <FaBullseye size={20} /> Leadership
        </button>
        <button
          onClick={handleadvisiors}
          className={`flex items-center justify-center gap-2 px-6 w-40 py-3 rounded-2xl font-semibold transition-all duration-300 shadow-md hover:shadow-xl focus:outline-none ${advisor
            ? "bg-[#3784A8] text-white hover:bg-[#3784A8]"
            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          <FaHandshake size={20} /> Advisors
        </button>
      </div>


            {/* governingBody.................. */}
            {govbody && (
                <div className="flex flex-col  md:p-8 pt-24">


                    <div className="flex flex-wrap justify-center px-4">
                        {governingBody.map((member) => (
                            <div key={member.memberId} className=" w-full md:w-[50%] lg:w-[30%] mt-12 ">
                                <GoverningBodyCard member={member} />
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* advisorcomittee.................. */}
            {advisor && (
                <AdvisoryCommittee />
            )}
        </>
    );
}

export default GoverningBody;
