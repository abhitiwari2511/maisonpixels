"use client";

import React from "react";
import * as motion from "motion/react-client";

export const About = () => {
  return (
    <section id="about" className="w-full py-24 md:py-36 px-6 md:px-12 bg-[#09090b] text-white relative overflow-hidden">
      {/* Subtle ambient orange glow behind section */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[450px] h-[450px] bg-[#ef4d23]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        {/* Uppercase Orange Label */}
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[#ef4d23] uppercase tracking-widest text-xs font-extrabold mb-6 inline-block"
        >
          ABOUT MAISON PIXELS
        </motion.span>

        {/* Large Serif Heading */}
        <motion.h2
          className="text-3xl sm:text-5xl md:text-6xl font-bold mb-8 leading-[1.15] font-serif italic text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          &ldquo;Good design is obvious. <br className="hidden sm:block" />
          <span>Great design is </span>
          <span className="text-[#ef4d23] font-extrabold">transparent&rdquo;</span>
        </motion.h2>

        {/* Paragraph Description */}
        <motion.p
          className="text-zinc-400 text-base sm:text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed font-normal"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          We are a team of <strong className="text-white font-semibold">perfectionists</strong> who believe that the best digital experiences are the ones that feel natural. We strip away the unnecessary to <strong className="text-white font-semibold">reveal the essential</strong>.
        </motion.p>

        {/* Divider & Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-zinc-800/80">
            {[
              { label: "FOUNDED", value: "2019" },
              { label: "PROJECTS", value: "150+" },
              { label: "AWARDS", value: "12" },
              { label: "CLIENTS", value: "Global" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2 text-[#ef4d23] font-serif tracking-tight">
                  {stat.value}
                </div>
                <div className="text-[11px] uppercase tracking-widest text-zinc-300 font-extrabold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
