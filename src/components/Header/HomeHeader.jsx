"use client";
import React, { useRef, useState, useEffect } from "react";
import { headingAnimation } from "../../GsapAnimation/Gsap";
import introVideo from "../../../public/assets/introMTTF.mp4";
import Link from "next/link";

function HomeHeader() {
  const headingRef = useRef();
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    headingAnimation(headingRef);
  }, []);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVideoPlay = () => {
    setIsPlaying(true);
  };

  const handleVideoPause = () => {
    setIsPlaying(false);
  };

  return (
    <>
      <div className="  md:relative h-[400px] md:h-[700px] lg:h-[1050px] bg-gradient-to-r from-[#283853] to-gray-900 md:bg-none  ">
        <div className="flex bg-gradient-to-r pt-20 from-[#283853] to-gray-900 flex-col items-center h-[100%]  md:h-[70%] lg:h-[60%] text-[#FFFFFF]">
          <h1
            ref={headingRef}
            className="text-2xl md:text-[3.9rem] font-medium leading-tight text-center"
          >
            Welcome To MTTF
          </h1>
          <p className="text-center text-sm md:text-start md:text-lg lg:text-[1.5rem] font-custom1 mt-4 md:mt-6 text-[#F1F3F6] mx-4 md:mx-8">
            International association for Science, Technology, Engineering, and Mathematics professor
          </p>
          <Link href={"/about"}>
            <button className="bg-[#03518F] px-5 py-2 md:px-7 md:py-3 text-sm md:text-[15px] font-bold rounded-full text-white mt-6 md:mt-10">
              <span>Learn More</span>
            </button>
          </Link>

          <div className="absolute  bottom-[12%]   md:top-[50%] lg:top-[35%] w-full px-4 md:px-0">
            <div className="relative flex justify-center">
              {/* Video Element */}
              <video
                ref={videoRef}
                className="rounded-xl w-full max-w-[90%] md:max-w-[80%] h-auto"
                controls
                playsInline
                preload="metadata"
                onPlay={handleVideoPlay}
                onPause={handleVideoPause}
              >
                <source src={introVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Play Button Overlay */}
              {!isPlaying && (
                <button
                  onClick={handlePlayPause}
                  className="absolute inset-0 flex justify-center items-center bg-transparent"
                  aria-label="Play video"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="white"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeHeader;
