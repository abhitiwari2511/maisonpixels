"use client";

import React from "react";
import * as motion from "motion/react-client";
import ContactForm from "../ContactForm";
import Meet from "../Meet";

export const Contact = () => {
  return (
    <section id="contact" className="w-full py-16 md:py-24 px-6 md:px-12 bg-[#09090b] text-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#ef4d23] uppercase tracking-widest text-xs font-extrabold block"
            >
              GET IN TOUCH
            </motion.span>
            <motion.h2
              className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif text-white leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Let&apos;s create something{" "}
              <span className="text-[#ef4d23] italic font-bold">
                exceptional.
              </span>
            </motion.h2>
            <motion.p
              className="text-zinc-300 text-base md:text-lg max-w-md mx-auto lg:mx-0 leading-relaxed font-medium"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Have a project in mind? We&apos;d love to hear about it. Send us a message and we&apos;ll get back to you within <strong className="text-white font-bold">24 hours</strong>.
            </motion.p>
          </div>

          <ContactForm />
        </div>

        {/* Footer */}
        <div className="pt-8 mt-12 md:mt-16 border-t border-zinc-800/80 flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm text-zinc-400 font-semibold">
          <p>&copy; {new Date().getFullYear()} Maison Pixels. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#ef4d23] font-bold transition-colors">
              Twitter
            </a>
            <a href="#" className="hover:text-[#ef4d23] font-bold transition-colors">
              LinkedIn
            </a>
            <Meet />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
