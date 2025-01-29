"use client";
import React from "react";
import HomeHeader from "./HomeHeader";

function Header({ title, description, isHome = false }) {
  return (
    <>
      {isHome ? (
        <HomeHeader />
      ) : (
        <div className="relative bg-gradient-to-br from-blue-900 via-gray-900 to-black text-white min-h-[80vh] flex items-center justify-center px-6">
          {/* Background Patterns */}
          <div className="absolute inset-0">
            <svg
              className="absolute top-0 left-0 w-full h-full opacity-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 800 600"
              preserveAspectRatio="none"
            >
              <circle cx="400" cy="300" r="300" fill="url(#gradient)" />
              <defs>
                <radialGradient id="gradient" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#1e3a8a" />
                  <stop offset="100%" stopColor="transparent" />
                </radialGradient>
              </defs>
            </svg>
          </div>
          <div className="absolute top-10 left-20 w-36 h-36 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-tr from-cyan-500 to-teal-500 rounded-full blur-3xl opacity-40"></div>

          {/* Content */}
          <div className="relative z-10 text-center max-w-4xl mt-12">
            {/* Title */}
            <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight tracking-tight">
              {title || "Transform Your Digital Journey"}
            </h1>

            {/* Decorative Underline */}
            <div className="mt-4">
              <span className="block w-16 h-1 mx-auto bg-blue-600 rounded-lg"></span>
            </div>

            {/* Description */}
            <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {description ||
                "Empower your business with cutting-edge technology and innovative solutions that drive growth and success."}
            </p>
          </div>

          {/* Bottom Floating Elements */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-[1200px] flex justify-between items-center px-6">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-500 rounded-full blur-2xl opacity-50"></div>
            <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 via-teal-400 to-green-400 rounded-full blur-2xl opacity-50"></div>
            <div className="w-10 h-10 bg-gradient-to-br from-pink-500 via-red-500 to-orange-500 rounded-full blur-2xl opacity-50"></div>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
