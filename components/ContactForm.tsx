"use client";

import { useForm, ValidationError } from "@formspree/react";
import { motion } from "motion/react";
import { Button } from "./ui/button";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xgovlwzd");
  if (state.succeeded) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex justify-center items-center"
      >
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 md:p-10 lg:p-12 text-center max-w-md">
          <div className="mb-4 flex justify-center">
            <svg
              className="w-16 h-16 text-green-500"
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
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Message Sent!
          </h3>
          <p className="text-zinc-400 text-base md:text-lg">
            Thanks for reaching out! We&apos;ll get back to you as soon as
            possible.
          </p>
        </div>
      </motion.div>
    );
  }
  return (
    <div>
      <motion.form
        onSubmit={handleSubmit}
        className="space-y-4 md:space-y-6 bg-zinc-900/50 p-6 md:p-8 lg:p-10 rounded-2xl border border-zinc-800"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm text-zinc-400 font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-4 mt-2 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all"
              placeholder="John Doe"
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-sm text-zinc-400 font-medium"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-4 mt-2 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all"
              placeholder="john@example.com"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
        </div>
        <div className="space-y-2">
          <label
            htmlFor="message"
            className="text-sm text-zinc-400 font-medium"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-3 mt-2 text-white placeholder:text-zinc-600 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all resize-none"
            placeholder="Tell us about your project..."
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <Button
          type="submit"
          disabled={state.submitting}
          className="w-full bg-white text-zinc-950 hover:bg-zinc-200 font-semibold py-6 rounded-full cursor-pointer transition-all"
        >
          Send Message
        </Button>
      </motion.form>
    </div>
  );
};

export default ContactForm;
