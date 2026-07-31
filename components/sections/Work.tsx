"use client";

import React from "react";
import * as motion from "motion/react-client";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Glam Diamonds",
    category: "Development",
    image:
      "https://res.cloudinary.com/dilmh6rup/image/upload/v1767452794/Screenshot_2026-01-03_203222_fg4oyr.png",
    description:
      "A diamond e-commerce platform with custom filtering and search.",
    url: "https://glamdiamonds.vercel.app/",
  },
];

export const Work = () => {
  return (
    <section id="work" className="w-full py-20 md:py-28 px-6 md:px-12 bg-[#09090b] text-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-10 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#ef4d23] uppercase tracking-widest text-xs font-extrabold mb-3 block">
              SELECTED WORK
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white font-serif">
              Featured Projects
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="group bg-zinc-900/50 rounded-2xl p-5 border border-zinc-800/80 shadow-xl hover:border-[#ef4d23]/50 transition-all duration-300 flex flex-col justify-between"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="overflow-hidden rounded-xl mb-5 bg-zinc-950 aspect-4/3 relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-xs p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="w-4 h-4 text-[#ef4d23]" />
                </div>
              </div>

              <div className="flex justify-between items-start gap-2 pt-1">
                <div>
                  <h3 className="text-xl font-bold font-serif text-white group-hover:text-[#ef4d23] transition-colors mb-1">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-300 font-medium">
                    {project.description}
                  </p>
                </div>
                <span className="text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-[#ef4d23]/15 text-[#ef4d23] whitespace-nowrap">
                  {project.category}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
