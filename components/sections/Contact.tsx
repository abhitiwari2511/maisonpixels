import * as motion from "motion/react-client";
import { Section } from "../ui/Section";
import { Button } from "../ui/button";

export const Contact = () => {
  return (
    <Section id="contact" className="py-24 md:py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-16">
        <div className="space-y-8">
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-cream-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Let&apos;s create something{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-gray-400 to-gray-600">
              exceptional.
            </span>
          </motion.h2>
          <motion.p
            className="text-zinc-400 text-lg max-w-md leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Have a project in mind? We&apos;d love to hear about it. Send us a
            message and we&apos;ll get back to you within 24 hours.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-3 pt-4"
          >
            <p className="text-white hover:text-zinc-300 transition-colors cursor-pointer">
              hello@maisonpixels.com
            </p>
            <p className="text-white hover:text-zinc-300 transition-colors cursor-pointer">
              +91 8750714310
            </p>
            <p className="text-white pt-2">New Delhi, India</p>
          </motion.div>
        </div>

        <motion.form
          className="space-y-6 bg-zinc-900/50 p-8 md:p-10 rounded-2xl border border-zinc-800"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="text-sm text-zinc-400 font-medium"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-4 mt-2 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all"
                placeholder="John Doe"
              />
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
                className="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-4 mt-2 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all"
                placeholder="john@example.com"
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
              rows={5}
              className="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-3 mt-2 text-white placeholder:text-zinc-600 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all resize-none"
              placeholder="Tell us about your project..."
            ></textarea>
          </div>
          <Button className="w-full bg-white text-zinc-950 hover:bg-zinc-200 font-semibold py-6 rounded-full cursor-pointer transition-all">
            Send Message
          </Button>
        </motion.form>
      </div>

      <div className="pt-10 mt-20 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-200">
        <p>&copy; 2024 Maison Pixels. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-cream-100 transition-colors">
            Privacy
          </a>
          <a href="#" className="hover:text-cream-100 transition-colors">
            Terms
          </a>
          <a href="#" className="hover:text-cream-100 transition-colors">
            Twitter
          </a>
          <a href="#" className="hover:text-cream-100 transition-colors">
            LinkedIn
          </a>
        </div>
      </div>
    </Section>
  );
};
