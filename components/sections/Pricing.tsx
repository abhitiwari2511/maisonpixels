"use client";

import React, { useState } from "react";
import * as motion from "motion/react-client";
import { Check, Globe, Smartphone, Sparkles, ArrowRight, ShieldCheck, Clock } from "lucide-react";
import { bookMeet } from "@/components/Meet";

export const Pricing = () => {
  const [webOption, setWebOption] = useState<"premade" | "custom">("custom");
  const [appOption, setAppOption] = useState<"premade" | "custom">("custom");

  const webData = {
    premade: {
      tag: "RAPID LAUNCH",
      title: "Pre-Made Web Template",
      price: "₹4,999",
      delivery: "3-5 Days Delivery",
      desc: "Ideal for startups needing a fast, professional online presence.",
      packages: [
        { name: "Landing Page", price: "₹4,999" },
        { name: "Standard Business Site", price: "₹7,999" },
      ],
      features: [
        "Pre-designed UI/UX templates",
        "Mobile-first responsive layout",
        "Contact form & lead capture",
        "Basic SEO setup & metadata",
        "Fast 3-5 days delivery timeline",
      ],
    },
    custom: {
      tag: "MOST POPULAR",
      title: "Custom Coded Web App",
      price: "₹9,999",
      delivery: "7-14 Days Delivery",
      desc: "Bespoke full-stack web applications built with Next.js 15 & React.",
      packages: [
        { name: "Multi-Page Business Suite", price: "₹9,999" },
        { name: "Full E-Commerce Store", price: "₹19,999" },
      ],
      features: [
        "Custom Next.js 15 & React codebase",
        "Bespoke UI/UX design & brand system",
        "Sanity Headless CMS integration",
        "Custom backend APIs & database",
        "Technical SEO & speed optimization",
      ],
    },
  };

  const appData = {
    premade: {
      tag: "RAPID MVP",
      title: "Pre-Made App Framework",
      price: "₹9,999",
      delivery: "5-7 Days Delivery",
      desc: "Pre-architected mobile MVP layout to validate your app idea quickly.",
      packages: [
        { name: "Starter App Framework", price: "₹9,999" },
        { name: "E-Commerce Mobile Starter", price: "₹14,999" },
      ],
      features: [
        "Pre-built cross-platform UI screens",
        "User authentication & profile flow",
        "Standard push notification setup",
        "Basic backend API connector",
        "Fast deployment readiness",
      ],
    },
    custom: {
      tag: "FULL TAILORED",
      title: "Custom Coded Mobile App",
      price: "₹24,999",
      delivery: "14-21 Days Delivery",
      desc: "Tailor-made cross-platform application with custom backend & APIs.",
      packages: [
        { name: "Custom Mobile App", price: "₹24,999" },
        { name: "Enterprise App Suite", price: "₹44,999" },
      ],
      features: [
        "Flutter / React Native cross-platform app",
        "Touch-first UI/UX & micro-interactions",
        "Real-time database & REST API sync",
        "App Store & Google Play publishing",
        "Dedicated post-launch maintenance",
      ],
    },
  };

  return (
    <section id="pricing" className="w-full py-20 md:py-28 px-6 md:px-12 bg-[#09090b] text-white relative overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#ef4d23]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
{/* web dev section card */}
      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#ef4d23] uppercase tracking-widest text-xs font-extrabold mb-3 block flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4" /> PACKAGES & PRICING
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl font-bold font-serif text-[#fafafa] mb-4 tracking-tight"
          >
            Simple, Transparent Pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-zinc-400 text-sm sm:text-base leading-relaxed"
          >
            Choose between rapid <span className="text-white font-medium">Pre-Made Templates</span> or fully tailored <span className="text-white font-medium">Custom Coded Solutions</span>.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-zinc-900/40 rounded-3xl p-7 sm:p-9 border border-zinc-800/80 shadow-2xl flex flex-col justify-between hover:border-[#ef4d23]/40 transition-all duration-300 backdrop-blur-xl group"
          >
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-2xl bg-[#ef4d23]/10 border border-[#ef4d23]/25 text-[#ef4d23]">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-serif text-white">
                      Web Development
                    </h3>
                  </div>
                </div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-[#ef4d23]/10 text-[#ef4d23] border border-[#ef4d23]/20">
                  {webData[webOption].tag}
                </span>
              </div>

              <div className="bg-zinc-950 p-1.5 rounded-2xl border border-zinc-800/80 flex gap-2 mb-8">
                <button
                  type="button"
                  onClick={() => setWebOption("premade")}
                  className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition-all duration-200 ${
                    webOption === "premade"
                      ? "bg-[#ef4d23] text-white shadow-md"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  ⚡ Pre-Made
                </button>
                <button
                  type="button"
                  onClick={() => setWebOption("custom")}
                  className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold transition-all duration-200 ${
                    webOption === "custom"
                      ? "bg-[#ef4d23] text-white shadow-md"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  ✨ Custom Coded
                </button>
              </div>

              <div className="mb-8 pb-6 border-b border-zinc-800/80">
                <span className="text-xs uppercase tracking-widest text-zinc-500 font-extrabold block mb-1">
                  Starting From
                </span>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                    {webData[webOption].price}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs text-zinc-400 mt-2">
                  <Clock className="w-3.5 h-3.5 text-[#ef4d23]" />
                  <span>{webData[webOption].delivery}</span>
                </div>
                <p className="text-xs text-zinc-400 mt-3 leading-relaxed">
                  {webData[webOption].desc}
                </p>
              </div>

              <div className="mb-8 space-y-2.5">
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-zinc-400 block mb-3">
                  Available Tiers:
                </span>
                {webData[webOption].packages.map((pkg, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center py-2.5 px-4 rounded-xl bg-zinc-950/60 border border-zinc-800/60 text-xs"
                  >
                    <span className="font-semibold text-zinc-200">{pkg.name}</span>
                    <span className="font-extrabold text-[#ef4d23]">{pkg.price}</span>
                  </div>
                ))}
              </div>

              <div className="mb-8">
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-zinc-400 block mb-4 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#ef4d23]" /> What&apos;s Included:
                </span>
                <ul className="space-y-3.5">
                  {webData[webOption].features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-3 text-xs sm:text-sm text-zinc-300">
                      <div className="p-1 rounded-md bg-[#ef4d23]/15 text-[#ef4d23] shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="leading-snug">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <a
              href="#contact"
              className="w-full py-3.5 px-6 rounded-2xl bg-[#ef4d23] hover:bg-[#d9421a] text-white text-center font-bold text-sm transition-all duration-300 shadow-[0_0_25px_rgba(239,77,35,0.25)] flex items-center justify-center gap-2 group-hover:scale-[1.01]"
            >
              <span>Get Web Dev Quote</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

{/* app dev section card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="bg-zinc-900/40 rounded-3xl p-7 sm:p-9 border border-zinc-800/80 shadow-2xl flex flex-col justify-between hover:border-[#ef4d23]/40 transition-all duration-300 backdrop-blur-xl group"
          >
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-2xl bg-[#ef4d23]/10 border border-[#ef4d23]/25 text-[#ef4d23]">
                    <Smartphone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-serif text-white">
                      App Development
                    </h3>
                  </div>
                </div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-[#ef4d23]/10 text-[#ef4d23] border border-[#ef4d23]/20">
                  {appData[appOption].tag}
                </span>
              </div>


              <div className="bg-zinc-950 p-1.5 rounded-2xl border border-zinc-800/80 flex gap-2 mb-8">
                <button
                  type="button"
                  onClick={() => setAppOption("premade")}
                  className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition-all duration-200 ${
                    appOption === "premade"
                      ? "bg-[#ef4d23] text-white shadow-md"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  ⚡ Pre-Made
                </button>
                <button
                  type="button"
                  onClick={() => setAppOption("custom")}
                  className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition-all duration-200 ${
                    appOption === "custom"
                      ? "bg-[#ef4d23] text-white shadow-md"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  ✨ Custom Coded
                </button>
              </div>

              
              <div className="mb-8 pb-6 border-b border-zinc-800/80">
                <span className="text-xs uppercase tracking-widest text-zinc-500 font-extrabold block mb-1">
                  Starting From
                </span>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                    {appData[appOption].price}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs text-zinc-400 mt-2">
                  <Clock className="w-3.5 h-3.5 text-[#ef4d23]" />
                  <span>{appData[appOption].delivery}</span>
                </div>
                <p className="text-xs text-zinc-400 mt-3 leading-relaxed">
                  {appData[appOption].desc}
                </p>
              </div>

              
              <div className="mb-8 space-y-2.5">
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-zinc-400 block mb-3">
                  Available Tiers:
                </span>
                {appData[appOption].packages.map((pkg, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center py-2.5 px-4 rounded-xl bg-zinc-950/60 border border-zinc-800/60 text-xs"
                  >
                    <span className="font-semibold text-zinc-200">{pkg.name}</span>
                    <span className="font-extrabold text-[#ef4d23]">{pkg.price}</span>
                  </div>
                ))}
              </div>

              
              <div className="mb-8">
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-zinc-400 block mb-4 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#ef4d23]" /> What&apos;s Included:
                </span>
                <ul className="space-y-3.5">
                  {appData[appOption].features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-3 text-xs sm:text-sm text-zinc-300">
                      <div className="p-1 rounded-md bg-[#ef4d23]/15 text-[#ef4d23] shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="leading-snug">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            
            <a
              href="#contact"
              className="w-full py-3.5 px-6 rounded-2xl bg-zinc-800 hover:bg-[#ef4d23] text-white text-center font-bold text-sm transition-all duration-300 border border-zinc-700 hover:border-[#ef4d23] shadow-md flex items-center justify-center gap-2 group-hover:scale-[1.01]"
            >
              <span>Get App Dev Quote</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

        </div>

        {/* contact button section */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 border border-zinc-800/80 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl"
        >
          <div>
            <h4 className="text-lg sm:text-xl font-bold font-serif text-white mb-1">
              Need a Custom Enterprise Solution?
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Have specific architecture requirements or backend integrations? Talk directly to our lead engineers.
            </p>
          </div>
          <button
            type="button"
            onClick={bookMeet}
            className="cursor-pointer px-6 py-3 rounded-2xl bg-[#ef4d23] hover:bg-[#d63d15] text-white font-extrabold text-xs tracking-wider uppercase transition-all duration-300 whitespace-nowrap shadow-lg hover:shadow-[0_0_20px_rgba(239,77,35,0.4)]"
          >
            TALK TO OUR DEVELOPERS
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default Pricing;
