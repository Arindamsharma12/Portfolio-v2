import { ArrowUpRight } from "lucide-react";
import React from "react";

const ExperienceComponent = () => {
  return (
    <>
      <div className="flex items-start pt-8 lg:pt-4 self-start">
        <span className=" font-semibold text-xl ">
          1.5+ Years of Developing....
        </span>
      </div>
      <div className="flex flex-col items-start max-w-2xl pt-1 lg:pt-4 self-start">
        <p className="text-[#767676] text-xl mb-4 lg:mb-8 font-semibold">
          Software Developer specializing in building scalable applications.
        </p>
        <button className="flex items-center gap-4 bg-[#8CFF2E] hover:bg-[#7EE629] transition-colors rounded-full pl-6 pr-2 py-2 shadow-[0_0_40px_rgba(140,255,46,0.3)]">
          <span className="text-gray-900 font-medium text-[1.05rem]">
            See what i can do
          </span>
          <div className="bg-white rounded-full p-2.5 flex items-center justify-center">
            <ArrowUpRight className="w-5 h-5 text-gray-900" strokeWidth={2.5} />
          </div>
        </button>
      </div>
    </>
  );
};

export default ExperienceComponent;
