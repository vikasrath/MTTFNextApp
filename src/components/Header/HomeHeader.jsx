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



      <div
        className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 py-20 bg-gradient-to-r  from-[#283853] to-gray-900 text-white">

        <h1 ref={headingRef}
          className="mx-auto max-w-4xl font-display text-4xl font-bold tracking-normal text-white-300 dark:text-gray-300 sm:text-6xl">
          Welcome To Math Tech Thiinking Foundation
        </h1>
        <button href=""
          className=" bg-[#03518F] px-7 py-3 text-[15px] font-bold rounded-full text-white md:mt-10 mt-8">
          Learn more
        </button>

        <h2 className="mx-auto  mt-3 max-w-xl text-lg sm:text-white-400 text-white-500 dark:text-gray-300 leading-7">
          International association for Science, Technology, Engineering, and Mathematics professor
        </h2>

        <div className=" w-full px-4 md:px-0 mt-8">
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

    </>
  );
}

export default HomeHeader;
