import { ArrowUpRight } from "lucide-react";
import React from "react";

const ExperienceComponent = () => {
  return (
    <>
      <div className="flex items-start pt-8 lg:pt-4 self-start">
        <span className=" font-medium lg:font-semibold text-lg lg:text-xl ">
          1.5+ Years of Developing....
        </span>
      </div>
      <div className="flex flex-col items-start max-w-2xl pt-1 lg:pt-4 self-start">
        <p className="text-[#767676] text-lg lg:text-xl mb-4 lg:mb-8 font-medium lg:font-semibold">
          Software Developer specializing in building scalable applications.
        </p>
        <button className="group flex items-center gap-5 lg:gap-6 bg-[#8CFF2E] hover:bg-[#7EE629] transition-colors rounded-full pl-8 pr-2.5 py-2.5 lg:pl-10 lg:pr-3 lg:py-3 shadow-[0_0_40px_rgba(140,255,46,0.3)]">
          <span className=" text-xl lg:font-medium lg:text-[1.3rem]">
            See what i can do
          </span>
          <div className="bg-white rounded-full p-3 lg:p-4 flex items-center justify-center">
            <ArrowUpRight
              className="w-5 h-5 lg:w-6 lg:h-6 text-gray-900 transition-transform duration-300 group-hover:rotate-45"
              strokeWidth={1.5}
            />
          </div>
        </button>
      </div>
    </>
  );
};

export default ExperienceComponent;
