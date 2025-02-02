"use client";
import introVideo from "../../../public/assets/introMTTF.mp4";
import Link from "next/link";

function HomeHeader() {

  return (
    <div className="relative min-h-screen">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
      >
        <source src={"../../../public/assets/introMTTF.mp4"} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center">
        <div className="text-center text-white px-4 sm:px-8">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            Welcome to <span className="text-blue-400">MTTF</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-8">
            International association for Science, Technology, Engineering, and Mathematics professors.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/whoWeAre/about"
              className="px-6 py-3 bg-blue-600 text-sm sm:text-lg rounded-full font-bold hover:bg-blue-700 transition"
            >
              Learn More
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 border-2 border-white text-sm sm:text-lg rounded-full hover:bg-white hover:text-black transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeHeader;
