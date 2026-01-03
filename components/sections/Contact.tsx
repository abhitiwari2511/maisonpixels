import * as motion from "motion/react-client";
import { Section } from "../ui/Section";
import ContactForm from "../ContactForm";
import Meet from "../Meet";

export const Contact = () => {
  return (
    <Section id="contact" className="py-16 md:py-24 px-4 md:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-20 mb-12 md:mb-16">
        <div className="space-y-6 md:space-y-8 text-center lg:text-left">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-cream-100"
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
            className="text-zinc-400 text-base md:text-lg max-w-md mx-auto lg:mx-0 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Have a project in mind? We&apos;d love to hear about it. Send us a
            message and we&apos;ll get back to you within 24 hours.
          </motion.p>
        </div>

        <ContactForm />
      </div>

      <div className="pt-8 md:pt-10 mt-12 md:mt-20 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm text-zinc-200">
        <p>&copy; 2026 Maison Pixels. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-cream-100 transition-colors">
            Twitter
          </a>
          <a href="#" className="hover:text-cream-100 transition-colors">
            LinkedIn
          </a>
          <Meet />
        </div>
      </div>
    </Section>
  );
};
