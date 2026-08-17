import { Triangle, Menu } from "lucide-react";
import React from "react";

const HeaderComponent = () => {
  return (
    <header className="sticky top-0 left-0 right-0 z-50 md:hidden pointer-events-auto bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <Triangle
              className="w-5 h-5 text-[#65D053] fill-[#65D053]"
              strokeWidth={0}
            />
            <span className="text-[15px] font-semibold tracking-[0.15em] text-gray-800 uppercase">
              Arindam
            </span>
          </div>

          {/* Hamburger */}
          <button
            className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-black/5 transition-colors"
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5 text-gray-700" strokeWidth={1.8} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
