import Link from "next/link";
import React from "react";
import { FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const ProfileCardComponent = () => {
  return (
    <div className="relative shrink-0 w-fit">
      {/* Soft Green Glow */}
      <div className="absolute -inset-8 lg:-inset-10 bg-[#B4F4C1]/50 rounded-[3rem] lg:rounded-[4rem] blur-[50px] lg:blur-[60px] -z-10"></div>

      {/* Card Content */}
      <div className="bg-white/95 backdrop-blur-md rounded-[2rem] lg:rounded-[2.5rem] p-4 pr-8 lg:p-5 lg:pr-12 flex items-center gap-4 lg:gap-6 shadow-[0_8px_24px_rgb(0,0,0,0.04)] border border-white">
        {/* Profile Picture Placeholder */}
        <div className="w-20 h-26 lg:w-25 lg:h-32.5 rounded-xl lg:rounded-2xl overflow-hidden shrink-0 bg-linear-to-b from-[#EFE8DF] to-[#E3D8CA]">
          <img src="https://pub-8c248eea42b94299b4bfe60626ee88ac.r2.dev/arindam.jpeg" alt="Arindam Sharma" className="w-full h-full object-cover" />
        </div>

        <div className="flex flex-col">
          <h2 className="text-xl lg:text-[1.7rem] font-medium text-gray-900 mb-0.5 lg:mb-1 tracking-tight">
            Arindam Sharma
          </h2>
          <p className="text-sm lg:text-[15px] text-gray-500 mb-4 lg:mb-6 font-light tracking-wide">
            Software Developer
          </p>

          <div className="flex items-center gap-2 lg:gap-3">
            <Link
              href="#"
              className="w-8 h-8 lg:w-8.5 lg:h-8.5 rounded-full border border-gray-300 flex items-center justify-center text-gray-400 hover:text-gray-900 hover:border-gray-400 transition-colors"
            >
              <FaInstagram className="w-4 h-4" />
            </Link>
            <Link
              href="#"
              className="w-8 h-8 lg:w-8.5 lg:h-8.5 rounded-full border border-gray-300 flex items-center justify-center text-gray-400 hover:text-gray-900 hover:border-gray-400 transition-colors"
            >
              <FaLinkedin className="w-4 h-4" />
            </Link>
            <Link
              href="#"
              className="w-8 h-8 lg:w-8.5 lg:h-8.5 rounded-full border border-gray-300 flex items-center justify-center text-gray-400 hover:text-gray-900 hover:border-gray-400 transition-colors"
            >
              <FaXTwitter className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCardComponent;
