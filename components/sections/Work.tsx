import * as motion from "motion/react-client";
import { Section } from "../ui/Section";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Vanguard Architecture",
    category: "Development",
    image: "https://picsum.photos/id/12/800/600",
    description: "A minimal portfolio for a leading architectural firm.",
  },
  {
    title: "Eos Wellness",
    category: "Design",
    image: "https://picsum.photos/id/24/800/600",
    description: "Rebranding and e-commerce platform for organic skincare.",
  },
  {
    title: "Nexus Finance",
    category: "Web App",
    image: "https://picsum.photos/id/48/800/600",
    description: "Real-time dashboard for a fintech startup.",
  },
];

export const Work = () => {
  return (
    <Section id="work" className="px-4 md:px-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-10 md:mb-16 lg:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-cream-200/50 uppercase tracking-widest text-xs md:text-sm mb-2 block">
            Selected Work
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-cream-100">
            Featured Projects
          </h2>
        </motion.div>

        <motion.a
          href="#"
          className="inline-flex items-center gap-2 text-sm text-cream-100 border-b border-cream-100/30 pb-1 hover:border-cream-100 transition-colors"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          View All Projects <ExternalLink className="w-3 h-3" />
        </motion.a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="group relative cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >
            <div className="overflow-hidden rounded-xl mb-4 md:mb-6 bg-white/5 aspect-4/3">
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
              />
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start gap-2">
              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-medium text-cream-100 mb-1 group-hover:underline decoration-1 underline-offset-4">
                  {project.title}
                </h3>
                <p className="text-xs md:text-sm text-cream-200/50">
                  {project.description}
                </p>
              </div>
              <span className="text-[10px] md:text-xs px-2 md:px-3 py-1 rounded-full border border-white/10 text-cream-200/70 whitespace-nowrap">
                {project.category}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 text-center md:hidden">
        <a
          href="#"
          className="inline-flex items-center gap-2 text-sm text-cream-100 border-b border-cream-100/30 pb-1"
        >
          View All Projects <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </Section>
  );
};
