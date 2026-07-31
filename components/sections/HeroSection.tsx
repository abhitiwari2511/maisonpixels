"use client";

import React from "react";
import * as motion from "motion/react-client";
import { ChevronRight } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#09090b]">
      {/* Background Ambient Radial Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] bg-[#ef4d23]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#ef4d23]/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Foreground content wrapper */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 pt-28 pb-20 text-center flex flex-col items-center justify-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-4 inline-flex items-center gap-2 bg-zinc-900/90 border border-zinc-800 rounded-full px-4 py-1.5 shadow-xl text-xs uppercase tracking-widest text-[#ef4d23] font-extrabold"
        >
          <span className="w-2 h-2 rounded-full bg-[#ef4d23] animate-pulse" />
          <span>Available for new projects</span>
        </motion.div>

        {/* Headline <h1> */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 sm:mt-6 text-white max-w-4xl font-bold tracking-tight"
          style={{
            fontSize: "clamp(40px, 8vw, 82px)",
            lineHeight: 1.08,
          }}
        >
          We craft digital{" "}
          <br className="hidden sm:block" />
          <span className="font-serif italic font-bold text-[#ef4d23]">
            masterpieces.
          </span>
        </motion.h1>

        {/* Subtitle <p> */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 text-zinc-300 px-2 max-w-2xl text-base sm:text-xl leading-relaxed font-normal"
        >
          <strong className="text-white font-semibold">Maison Pixels</strong> is a digital agency focused on <strong className="text-white font-semibold">building brands</strong> through minimal design, <strong className="text-white font-semibold">robust engineering</strong>, and human-centric experiences.
        </motion.p>

        {/* CTA button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 sm:mt-10"
        >
          <a
            href="#work"
            className="inline-flex items-center gap-3 bg-[#ef4d23] text-white rounded-full pl-7 pr-2.5 py-3 text-[15px] font-bold hover:bg-[#d63d15] transition-all shadow-xl group cursor-pointer"
          >
            <span>View Our Work</span>
            <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
              <ChevronRight className="w-4 h-4 text-white" />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
