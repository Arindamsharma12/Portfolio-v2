"use client";

import { Triangle, Menu, Download, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";

const HeaderComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 left-0 right-0 z-[60] pointer-events-auto bg-white/95 backdrop-blur-sm border-b border-gray-100/50">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <Triangle
              className="w-5 h-5 lg:w-6 lg:h-6 text-[#79F740] fill-[#79F740]"
              strokeWidth={0}
            />
            <span className="text-[18px] lg:text-[20px] font-semibold tracking-wide text-gray-900 uppercase">
              Arindam
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            <Link
              href="#projects"
              className="text-[16px] lg:text-[17px] font-medium text-gray-800 hover:text-black transition-colors"
            >
              Projects
            </Link>
            <Link
              href="#about"
              className="text-[16px] lg:text-[17px] font-medium text-gray-800 hover:text-black transition-colors"
            >
              About & Contact
            </Link>
          </nav>

          {/* Desktop Right Section */}
          <div className="hidden md:flex items-center gap-8">
            <span className="text-[15px] lg:text-[16px] text-gray-400">
              Email:{" "}
              <a
                href="mailto:hello@example.com"
                className="text-gray-800 font-medium hover:text-black transition-colors"
              >
                hello@example.com
              </a>
            </span>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-[#262626] hover:bg-black text-white px-5 py-2.5 lg:px-6 lg:py-3 rounded-[100px] text-[15px] lg:text-[16px] font-medium transition-colors"
            >
              <Download className="w-4 h-4 lg:w-4.5 lg:h-4.5" />
              My Resume
            </a>
          </div>

          {/* Mobile Hamburger / Close */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button
                className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl hover:bg-black/5 transition-colors relative"
                aria-label={isOpen ? "Close menu" : "Open menu"}
              >
                <Menu 
                  className={`w-5 h-5 text-gray-700 absolute transition-all duration-300 ${isOpen ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"}`} 
                  strokeWidth={1.8} 
                />
                <X 
                  className={`w-5 h-5 text-gray-700 absolute transition-all duration-300 ${isOpen ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"}`} 
                  strokeWidth={1.8} 
                />
              </button>
            </SheetTrigger>
            <SheetContent 
              side="top" 
              showCloseButton={false} 
              className="p-0 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-xl pt-24"
            >
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              
              <div className="flex flex-col px-6 pb-12 gap-8">
                {/* Navigation Links */}
                <div className="flex flex-col items-center gap-6 mt-4">
                  <SheetClose asChild>
                    <Link
                      href="#projects"
                      className="text-[18px] font-medium text-gray-800 hover:text-black transition-colors"
                    >
                      Projects
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      href="#about"
                      className="text-[18px] font-medium text-gray-800 hover:text-black transition-colors"
                    >
                      About & Contact
                    </Link>
                  </SheetClose>
                </div>

                {/* Email Section */}
                <div className="flex flex-col items-center gap-1 mt-2">
                  <span className="text-[15px] text-gray-400">Email:</span>
                  <a
                    href="mailto:hello@example.com"
                    className="text-[16px] font-medium text-gray-900 hover:text-black transition-colors"
                  >
                    hello@example.com
                  </a>
                </div>

                {/* Resume Button */}
                <div className="flex justify-center mt-2">
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-[#262626] hover:bg-black text-white px-6 py-3.5 rounded-[100px] text-[15px] font-medium transition-colors"
                  >
                    <Download className="w-4.5 h-4.5" />
                    My Resume
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
