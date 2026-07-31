"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { motion } from "motion/react";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xgovlwzd");

  if (state.succeeded) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex justify-center items-center h-full"
      >
        <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-8 md:p-10 text-center max-w-md shadow-xl">
          <div className="mb-4 flex justify-center">
            <svg
              className="w-16 h-16 text-[#ef4d23]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold font-serif text-white mb-3">
            Message Sent!
          </h3>
          <p className="text-zinc-300 font-medium text-base">
            Thanks for reaching out! We&apos;ll get back to you as soon as
            possible.
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-4 md:space-y-6 bg-zinc-900/50 p-6 md:p-8 rounded-2xl border border-zinc-800/80 shadow-xl text-white"
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 text-left">
        <div className="space-y-1.5">
          <label htmlFor="name" className="text-xs font-extrabold text-zinc-300 uppercase tracking-wider">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full bg-zinc-950/80 border border-zinc-800/80 rounded-xl px-4 py-3 text-white placeholder:text-zinc-500 focus:outline-none focus:border-[#ef4d23] transition-all text-sm font-semibold"
            placeholder="John Doe"
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="email" className="text-xs font-extrabold text-zinc-300 uppercase tracking-wider">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full bg-zinc-950/80 border border-zinc-800/80 rounded-xl px-4 py-3 text-white placeholder:text-zinc-500 focus:outline-none focus:border-[#ef4d23] transition-all text-sm font-semibold"
            placeholder="john@example.com"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
      </div>

      <div className="space-y-1.5 text-left">
        <label htmlFor="message" className="text-xs font-extrabold text-zinc-300 uppercase tracking-wider">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="w-full bg-zinc-950/80 border border-zinc-800/80 rounded-xl px-4 py-3 text-white placeholder:text-zinc-500 focus:outline-none focus:border-[#ef4d23] transition-all text-sm font-semibold resize-none"
          placeholder="Tell us about your project..."
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="w-full bg-[#ef4d23] hover:bg-[#d63d15] text-white font-bold py-3.5 rounded-full cursor-pointer transition-all shadow-lg hover:shadow-[0_0_20px_rgba(239,77,35,0.4)] text-sm uppercase tracking-wider"
      >
        {state.submitting ? "Sending..." : "Send Message"}
      </button>
    </motion.form>
  );
};

export default ContactForm;
