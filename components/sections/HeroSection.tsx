import * as motion from "motion/react-client";
import { Section } from "../ui/Section";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

export const HeroSection = () => {
  return (
    <Section className="mt-14 flex items-center justify-center pt-32 pb-20 relative overflow-visible">
      <div className="max-w-3xl mx-auto text-center z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 inline-flex items-center gap-2 px-3 py-2 rounded-full border border-zinc-900 bg-black backdrop-blur-sm"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs uppercase tracking-widest text-zinc-400 font-medium">
            Available for new projects
          </span>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <span className="text-yellow-700">We craft digital</span>{" "}
          <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-linear-to-b from-white via-zinc-300 to-zinc-600">
            masterpieces.
          </span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Maison Pixels is a digital agency focused on building brands through
          minimal design, robust engineering, and human-centric experiences.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button
            className="bg-cream-100 cursor-pointer bg-white text-zinc-950 hover:bg-zinc-300 font-semibold px-8 py-6 rounded-full text-base"
            size="lg"
          >
            View Our Work
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </Section>
  );
};
