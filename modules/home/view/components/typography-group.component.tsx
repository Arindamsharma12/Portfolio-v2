import React from "react";

const TypographyGroupComponent = () => {
  return (
    <div className="flex flex-col items-start pt-6">
      {/* Online Now Badge */}
      <div className="flex items-center gap-2.5 bg-white px-3.5 py-1.5 rounded-full shadow-sm border border-gray-100 mb-6 ml-2">
        <div className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#75E358] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#65D053]"></span>
        </div>
        <span className="text-[15px] font-medium text-gray-600">
          Online Now
        </span>
      </div>

      {/* Typography Lines */}
      <div className="flex flex-col gap-2">
        {/* Line 1 */}
        <div className="flex flex-wrap items-center gap-3 lg:gap-5">
          <span className="text-4xl lg:text-6xl leading-none font-light text-[#383838] tracking-[-0.03em]">
            Hi! I&apos;m
          </span>
          <div className="bg-white rounded-full px-6 lg:px-10 py-2.5 lg:py-3.5 shadow-[0_12px_35px_rgb(0,0,0,0.06)] border border-gray-50 flex items-center justify-center">
            <span className="text-2xl lg:text-5xl leading-none font-medium bg-linear-to-r from-[#4E77C6] via-[#9462B1] to-[#E35441] bg-clip-text text-transparent">
              Arindam Sharma
            </span>
          </div>
        </div>

        {/* Line 2 */}
        <div className="flex flex-wrap items-center gap-3 lg:gap-5">
          <span className="text-4xl sm:text-5xl lg:text-6xl leading-none font-light text-[#383838] tracking-[-0.03em]">
            a
          </span>
          <div className="bg-[#2D2D2D] rounded-full px-6 lg:px-10 py-2.5 lg:py-3.5 flex items-center justify-center shadow-lg">
            <span className="text-2xl sm:text-4xl lg:text-5xl leading-none font-medium text-white tracking-tight">
              Software Developer
            </span>
          </div>
        </div>

        {/* Line 3 */}
        <div className="flex flex-wrap items-center gap-3 lg:gap-5">
          <span className="text-4xl sm:text-5xl lg:text-6xl leading-none font-light text-[#383838] tracking-[-0.03em]">
            from
          </span>
          <div className="bg-white border-[3px] border-[#EEF5FF] rounded-full px-6 lg:px-10 py-2.5 lg:py-3.5 flex items-center justify-center shadow-sm">
            <span className="text-2xl sm:text-4xl lg:text-5xl leading-none text-[#3A3A3A] tracking-tight">
              Delhi <span className="font-bold">IN</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypographyGroupComponent;
