"use client";

import * as motion from "motion/react-client";
// import { Button } from "./ui/button";
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
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 mt-4 md:mt-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full max-w-200 flex justify-between items-center p-4 px-4 md:px-6 rounded-full bg-zinc-950"
        >
          <Link
            href={"#"}
            className="text-white select-none text-base md:text-lg font-bold flex items-center gap-2"
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 300 300"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="shrink-0"
            >
              <defs>
                <radialGradient id="bgGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#7dd3fc" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#020617" stopOpacity="0" />
                </radialGradient>

                <linearGradient id="softWave" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#60a5fa" />
                  <stop offset="100%" stopColor="#a78bfa" />
                </linearGradient>
              </defs>

              <circle cx="150" cy="150" r="120" fill="url(#bgGlow)" />

              {/* logo svg icon */}

              <path
                d="M90 145 L150 95 L210 145 V205 H90 Z"
                stroke="#e0f2fe"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <path
                d="M125 160 L110 175 L125 190"
                stroke="#7dd3fc"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <path
                d="M175 160 L190 175 L175 190"
                stroke="#7dd3fc"
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
                fill="#93c5fd"
              />
              <rect
                x="215"
                y="190"
                width="6"
                height="6"
                rx="1"
                fill="#a78bfa"
              />
              <rect
                x="225"
                y="200"
                width="6"
                height="6"
                rx="1"
                fill="#60a5fa"
              />

              <path
                d="M60 210 C120 260 180 260 240 210"
                stroke="url(#softWave)"
                strokeWidth="5"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
            MAISON PIXELS
          </Link>

          {/* desktop */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <Link
                href={item.url}
                key={item.name}
                className="px-3 py-1 font-semibold text-white cursor-pointer hover:text-zinc-200 transition text-sm"
              >
                {item.name}
              </Link>
            ))}
            <Meet />
          </div>

          <button
            className="md:hidden p-2 text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </motion.div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 z-40 bg-zinc-950 pt-24 px-6 md:hidden"
        >
          <div className="flex flex-col items-center gap-6">
            {navItems.map((item) => (
              <Link
                href={item.url}
                key={item.name}
                onClick={() => setIsOpen(false)}
                className="text-2xl cursor-pointer font-semibold text-white hover:text-zinc-300 transition"
              >
                {item.name}
              </Link>
            ))}
            <Meet />
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
