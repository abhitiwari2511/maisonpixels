import * as motion from "motion/react-client";
import { Section } from '../ui/Section';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Vanguard Architecture",
    category: "Development",
    image: "https://picsum.photos/id/12/800/600",
    description: "A minimal portfolio for a leading architectural firm."
  },
  {
    title: "Eos Wellness",
    category: "Design",
    image: "https://picsum.photos/id/24/800/600",
    description: "Rebranding and e-commerce platform for organic skincare."
  },
  {
    title: "Nexus Finance",
    category: "Web App",
    image: "https://picsum.photos/id/48/800/600",
    description: "Real-time dashboard for a fintech startup."
  }
];

export const Work = () => {
  return (
    <Section id="work">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
        >
          <span className="text-cream-200/50 uppercase tracking-widest text-sm mb-2 block">Selected Work</span>
          <h2 className="text-4xl md:text-5xl font-bold text-cream-100">Featured Projects</h2>
        </motion.div>
        
        <motion.a 
          href="#"
          className="hidden md:inline-flex items-center gap-2 text-sm text-cream-100 border-b border-cream-100/30 pb-1 hover:border-cream-100 transition-colors"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          View All Projects <ExternalLink className="w-3 h-3" />
        </motion.a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="group relative cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="overflow-hidden rounded-xl mb-6 bg-white/5 aspect-4/3">
              <motion.img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
              />
            </div>
            
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-medium text-cream-100 mb-1 group-hover:underline decoration-1 underline-offset-4">{project.title}</h3>
                <p className="text-sm text-cream-200/50">{project.description}</p>
              </div>
              <span className="text-xs px-3 py-1 rounded-full border border-white/10 text-cream-200/70">
                {project.category}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-12 text-center md:hidden">
         <a href="#" className="inline-flex items-center gap-2 text-sm text-cream-100 border-b border-cream-100/30 pb-1">
          View All Projects <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </Section>
  );
};