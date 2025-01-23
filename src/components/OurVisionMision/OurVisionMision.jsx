import React from 'react';
import { FaLightbulb, FaHandshake } from 'react-icons/fa';

function OurVisionMission() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center px-6 py-12">
      {/* Vision Section */}
      <div className="w-full max-w-4xl mb-12 p-8 bg-white rounded-lg shadow-lg border-t-4 border-blue-600">
        <div className="flex items-center mb-4">
          <FaLightbulb className="text-blue-600 text-3xl mr-3" />
          <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800">
            What is our Vision?
          </h1>
        </div>
        <p className="text-gray-600 text-lg leading-relaxed">
          MTTF aims to create a welcoming and supportive environment for STEM professionals, fostering research, innovation, communication, and collaborations that have the potential to be sustainable and globally shareable in the long term.
        </p>
      </div>

      {/* Mission Section */}
      <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-lg border-t-4 border-green-600">
        <div className="flex items-center mb-4">
          <FaHandshake className="text-green-600 text-3xl mr-3" />
          <h2 className="text-3xl lg:text-4xl font-semibold text-gray-800">
            Our Mission
          </h2>
        </div>
        <p className="text-gray-600 text-lg leading-relaxed">
          We strive to create an environment where innovation and research thrive, producing leaders for tomorrow. By collaborating with organizations globally, transforming education through practical learning, and addressing worldwide challenges, we aim to nurture talent that can secure a better future. Our mission is to promote excellence in mathematics and computational thinking, recognize young researchers, and contribute to societal outreach through relevant workshops and events.
        </p>
      </div>
    </div>
  );
}

export default OurVisionMission;
