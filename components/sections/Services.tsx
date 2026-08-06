"use client";

import React from "react";
import * as motion from "motion/react-client";
import { Layers, Code2, PenTool, ArrowRight } from "lucide-react";
import Link from "next/link";

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
    <section id="services" className="w-full py-20 md:py-28 px-6 md:px-12 bg-[#09090b] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
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
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-md mb-8">
              We don&apos;t just build websites; we build <strong className="text-white font-semibold">comprehensive digital solutions</strong> that solve real business problems. Our holistic approach ensures consistency from concept to code.
            </p>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-900 hover:bg-[#ef4d23] text-white text-xs font-extrabold uppercase tracking-wider border border-zinc-800 hover:border-[#ef4d23] transition-all duration-300 shadow-md group mb-10"
            >
              <span>Detailed Services & Pricing</span>
              <ArrowRight className="w-4 h-4 text-[#ef4d23] group-hover:text-white group-hover:translate-x-1 transition-all" />
            </Link>

            <div className="mt-4 md:mt-6">
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
                  "Flutter",
                  "Node.js",
                  "MongoDB",
                  "Sanity CMS",
                  "Shadcn UI",
                  "Figma",
                  "Express.js",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3.5 py-1.5 rounded-full bg-zinc-900 text-white text-xs font-bold border border-zinc-800 hover:border-[#ef4d23] hover:text-[#ef4d23] transition-all cursor-default shadow-xs"
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
