import * as motion from "motion/react-client";
import { Section } from "../ui/Section";
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
    <Section id="services" className="bg-dark-900/50 px-4 md:px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-24">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-cream-100">
            Our Expertise
          </h2>
          <p className="text-cream-200/60 text-base md:text-lg leading-relaxed max-w-md mx-auto md:mx-0">
            We don&apos;t just build websites; we build comprehensive digital
            solutions that solve real business problems. Our holistic approach
            ensures consistency from concept to code.
          </p>
          <div className="mt-6 md:mt-8 h-px w-24 bg-linear-to-r from-green-400 to-transparent mx-auto md:mx-0" />

          <div className="mt-8 md:mt-12">
            <p className="text-xs md:text-sm text-cream-200/40 uppercase tracking-widest mb-4">
              Technologies We Use
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-2 md:gap-3">
              {[
                "React",
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
                "Framer Motion",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-full bg-white/5 text-cream-200/70 text-xs md:text-sm border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-10 md:mt-14 hidden md:flex justify-center md:justify-start"
          >
            <svg
              width="380"
              height="300"
              viewBox="0 0 280 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="opacity-30 hover:opacity-50 transition-opacity duration-500"
            >
              <rect
                x="20"
                y="20"
                width="180"
                height="130"
                rx="8"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-cream-200"
              />

              <line
                x1="20"
                y1="45"
                x2="200"
                y2="45"
                stroke="currentColor"
                strokeWidth="1"
                className="text-cream-200/50"
              />

              <circle
                cx="35"
                cy="32"
                r="4"
                stroke="currentColor"
                strokeWidth="1"
                className="text-red-400/60"
              />
              <circle
                cx="50"
                cy="32"
                r="4"
                stroke="currentColor"
                strokeWidth="1"
                className="text-yellow-400/60"
              />
              <circle
                cx="65"
                cy="32"
                r="4"
                stroke="currentColor"
                strokeWidth="1"
                className="text-green-400/60"
              />

              <line
                x1="35"
                y1="60"
                x2="100"
                y2="60"
                stroke="currentColor"
                strokeWidth="2"
                className="text-indigo-400/50"
              />
              <line
                x1="35"
                y1="75"
                x2="140"
                y2="75"
                stroke="currentColor"
                strokeWidth="2"
                className="text-cream-200/30"
              />
              <line
                x1="35"
                y1="90"
                x2="120"
                y2="90"
                stroke="currentColor"
                strokeWidth="2"
                className="text-cream-200/30"
              />
              <line
                x1="35"
                y1="105"
                x2="80"
                y2="105"
                stroke="currentColor"
                strokeWidth="2"
                className="text-green-400/40"
              />
              <line
                x1="35"
                y1="120"
                x2="160"
                y2="120"
                stroke="currentColor"
                strokeWidth="2"
                className="text-cream-200/30"
              />

              <rect
                x="160"
                y="60"
                width="100"
                height="70"
                rx="6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                className="text-cream-200/40"
              />
              <circle
                cx="210"
                cy="95"
                r="15"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-yellow-500/50"
              />

              <path
                d="M230 150 L245 175 L238 177 L245 190 L240 192 L233 179 L225 185 Z"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
                className="text-cream-200/60"
              />

              <path
                d="M200 95 Q 220 95 220 80"
                stroke="currentColor"
                strokeWidth="1"
                strokeDasharray="3 3"
                className="text-indigo-400/30"
              />
            </svg>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group border-b border-white/10 pb-8 md:pb-10 last:border-0 hover:border-white/20 transition-colors duration-500"
            >
              <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
                <span className="p-2 rounded-lg bg-white/5 text-indigo-200 group-hover:bg-cream-100 group-hover:text-dark-950 transition-colors duration-300 shrink-0">
                  {service.icon}
                </span>
                <h3 className="text-lg md:text-xl font-medium text-cream-100 pt-1 group-hover:translate-x-1 transition-transform duration-300">
                  {service.title}
                </h3>
              </div>
              <p className="text-cream-200/50 pl-11 md:pl-13 text-sm md:text-base group-hover:text-cream-200/80 transition-colors">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};
