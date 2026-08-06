
import * as motion from "motion/react-client";
import { ExternalLink } from "lucide-react";
import { getProjects } from "@/lib/sanity";
// import initialProjects from "@/data/projects.json";

export const Work = async () => {
  const projectList = await getProjects();

  return (
    <section id="work" className="w-full py-20 md:py-28 px-6 md:px-12 bg-[#09090b] text-white relative overflow-hidden">
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-10 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#ef4d23] uppercase tracking-widest text-xs font-extrabold mb-3 block">
              SELECTED WORK
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#fafafa] font-serif">
              Featured Projects
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a
              href="/work"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-900 hover:bg-[#ef4d23] text-white text-sm font-bold border border-zinc-800 hover:border-[#ef4d23] transition-all duration-300 shadow-lg group"
            >
              <span>See All Work</span>
              <ExternalLink className="w-4 h-4 text-[#ef4d23] group-hover:text-white transition-colors" />
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {projectList.slice(0, 3).map((project, index) => (
            <motion.a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              key={project.id || index}
              className="group bg-zinc-900/50 rounded-2xl p-6 sm:p-7 border border-zinc-800/80 shadow-xl hover:border-[#ef4d23]/50 transition-all duration-300 flex flex-col justify-between min-h-[460px] sm:min-h-[500px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="overflow-hidden rounded-xl mb-6 bg-zinc-950 h-[260px] sm:h-[300px] md:h-[320px] relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-xs p-2.5 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="w-4 h-4 text-[#ef4d23]" />
                </div>
              </div>

              <div className="flex justify-between items-start gap-3 pt-2">
                <div>
                  <h3 className="text-2xl font-bold font-serif text-white group-hover:text-[#ef4d23] transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-300 font-medium leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <span className="text-[11px] font-extrabold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-[#ef4d23]/15 text-[#ef4d23] whitespace-nowrap shrink-0">
                  {project.category}
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Bottom CTA for Work Page */}
        <div className="mt-14 text-center sm:hidden">
          <a
            href="/work"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#ef4d23] text-white text-sm font-bold hover:bg-[#d9421a] transition-all duration-300 shadow-[0_0_25px_rgba(239,77,35,0.4)]"
          >
            <span>See All Work Cards</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Work;
