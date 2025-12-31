import * as motion from "motion/react-client";
import { Section } from "../ui/Section";
import { Layers, Code2, PenTool, BarChart3 } from "lucide-react";

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
    title: "Brand Strategy",
    description:
      "Defining your digital identity with comprehensive design systems and strategic positioning.",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Growth & Analytics",
    description:
      "Data-driven insights to optimize performance and ensure your digital product reaches its target audience.",
  },
];

export const Services = () => {
  return (
    <Section id="services" className="bg-dark-900/50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl text-yellow-500 md:text-5xl font-bold mb-6 text-cream-100">
            Our Expertise
          </h2>
          <p className="text-cream-200/60 text-lg leading-relaxed max-w-md">
            We don&apos;t just build websites; we build comprehensive digital
            solutions that solve real business problems. Our holistic approach
            ensures consistency from concept to code.
          </p>
          <div className="mt-8 h-px w-24 bg-linear-to-r from-green-400 to-transparent" />
        </motion.div>

        <div className="grid grid-cols-1 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group border-b border-white/10 pb-10 last:border-0 hover:border-white/20 transition-colors duration-500"
            >
              <div className="flex items-start gap-4 mb-4">
                <span className="p-2 rounded-lg bg-white/5 text-indigo-200 group-hover:bg-cream-100 group-hover:text-dark-950 transition-colors duration-300">
                  {service.icon}
                </span>
                <h3 className="text-xl font-medium text-cream-100 pt-1 group-hover:translate-x-1 transition-transform duration-300">
                  {service.title}
                </h3>
              </div>
              <p className="text-cream-200/50 pl-13 group-hover:text-cream-200/80 transition-colors">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};
