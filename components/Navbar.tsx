"use client";

import * as motion from "motion/react-client";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Meet from "./Meet";
import Link from "next/link";

const navItems = [
  {
    name: "SERVICES",
    url: "#services",
  },
  {
    name: "WORK",
    url: "#work",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 mt-4 md:mt-6 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="pointer-events-auto w-full max-w-4xl p-[1px] rounded-full bg-gradient-to-r from-white/10 via-[#ef4d23]/40 to-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
        >
          <div className="w-full flex justify-between items-center py-2.5 px-5 md:px-7 rounded-full bg-zinc-950/90 backdrop-blur-xl">
            <Link
              href="#"
              className="text-white select-none text-base md:text-lg font-bold flex items-center gap-3 tracking-wider group"
            >
              <div className="relative">
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 300 300"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="shrink-0 group-hover:scale-105 transition-transform duration-300"
                >
                  <defs>
                    <radialGradient id="bgGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#ef4d23" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#020617" stopOpacity="0" />
                    </radialGradient>

                    <linearGradient id="softWave" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#ef4d23" />
                      <stop offset="100%" stopColor="#f97316" />
                    </linearGradient>
                  </defs>

                  <circle cx="150" cy="150" r="120" fill="url(#bgGlow)" />

                  <path
                    d="M90 145 L150 95 L210 145 V205 H90 Z"
                    stroke="#ffffff"
                    strokeWidth="4"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  <path
                    d="M125 160 L110 175 L125 190"
                    stroke="#ef4d23"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  <path
                    d="M175 160 L190 175 L175 190"
                    stroke="#ef4d23"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  <rect
                    x="205"
                    y="200"
                    width="6"
                    height="6"
                    rx="1"
                    fill="#ef4d23"
                  />
                  <rect
                    x="215"
                    y="190"
                    width="6"
                    height="6"
                    rx="1"
                    fill="#ffffff"
                  />
                  <rect
                    x="225"
                    y="200"
                    width="6"
                    height="6"
                    rx="1"
                    fill="#ef4d23"
                  />

                  <path
                    d="M60 210 C120 260 180 260 240 210"
                    stroke="url(#softWave)"
                    strokeWidth="5"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <span className="font-semibold text-sm md:text-base tracking-widest text-white group-hover:text-zinc-200 transition-colors">
                MAISON PIXELS
              </span>
            </Link>

            {/* Desktop Nav Items */}
            <div className="hidden md:flex items-center gap-2">
              {navItems.map((item) => (
                <Link
                  href={item.url}
                  key={item.name}
                  className="px-4 py-1.5 font-medium text-zinc-300 hover:text-white hover:bg-white/5 rounded-full transition-all text-xs tracking-widest"
                >
                  {item.name}
                </Link>
              ))}
              <div className="ml-2">
                <Meet />
              </div>
            </div>

            {/* Mobile Toggle */}
            <button
              className="md:hidden p-2 text-zinc-300 hover:text-white transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 z-40 bg-zinc-950/95 backdrop-blur-2xl pt-28 px-6 md:hidden flex flex-col items-center gap-8 justify-start"
        >
          <div className="flex flex-col items-center gap-6 w-full max-w-xs">
            {navItems.map((item) => (
              <Link
                href={item.url}
                key={item.name}
                onClick={() => setIsOpen(false)}
                className="text-xl cursor-pointer font-bold tracking-widest text-zinc-200 hover:text-[#ef4d23] transition-colors py-3 border-b border-white/10 w-full text-center"
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-4">
              <Meet />
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
