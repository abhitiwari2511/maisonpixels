"use client";

import React from "react";
import * as motion from "motion/react-client";
import { Layers, Code2, PenTool } from "lucide-react";

const services = [
  {
    icon: <PenTool className="w-6 h-6" />,
    title: "UI/UX Design",
    description:
      "Creating intuitive and aesthetically pleasing interfaces that drive user engagement and brand loyalty.",
  },
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "Web Development",
    description:
      "Robust, scalable, and high-performance websites built with the latest technologies like React and Next.js.",
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: "App Development",
    description:
      "Custom mobile applications designed to provide seamless user experiences across all devices.",
  },
];

export const Services = () => {
  return (
    <section id="services" className="w-full py-20 md:py-28 px-6 md:px-12 bg-[#09090b] text-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-left"
          >
            <span className="text-[#ef4d23] uppercase tracking-widest text-xs font-extrabold mb-3 block">
              SERVICES & EXPERTISE
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white font-serif">
              Our Expertise
            </h2>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-md">
              We don&apos;t just build websites; we build <strong className="text-white font-semibold">comprehensive digital solutions</strong> that solve real business problems. Our holistic approach ensures consistency from concept to code.
            </p>
            <div className="mt-6 md:mt-8 h-1.5 w-20 bg-[#ef4d23] rounded-full" />

            <div className="mt-10 md:mt-14">
              <p className="text-xs text-zinc-300 uppercase tracking-widest font-extrabold mb-4">
                Technologies We Use
              </p>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {[
                  "React",
                  "Next.js",
                  "TypeScript",
                  "Tailwind CSS",
                  "Framer Motion",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-full bg-zinc-900 text-white text-xs sm:text-sm font-bold border border-zinc-800 hover:border-[#ef4d23] hover:text-[#ef4d23] transition-all cursor-default shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-5">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-zinc-900/50 rounded-2xl p-6 sm:p-8 border border-zinc-800/80 shadow-xl hover:border-[#ef4d23]/60 hover:bg-zinc-900/80 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-start gap-4 mb-3">
                  <span className="p-3.5 rounded-xl bg-zinc-800/80 border border-zinc-700/50 text-zinc-400 group-hover:bg-[#ef4d23] group-hover:text-white group-hover:border-[#ef4d23] group-hover:shadow-[0_0_20px_rgba(239,77,35,0.4)] transition-all duration-300 shrink-0">
                    {service.icon}
                  </span>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold font-serif text-white pt-1 group-hover:text-[#ef4d23] transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>
                </div>
                <p className="text-zinc-400 text-sm md:text-base leading-relaxed pl-1">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
