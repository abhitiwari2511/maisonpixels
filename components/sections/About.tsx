import * as motion from "motion/react-client";
import { Section } from "../ui/Section";

export const About = () => {
  return (
    <Section id="about" className="bg-dark-950 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/3 w-150 h-150 bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.h2
          className="text-4xl md:text-[3.5rem] font-bold mb-8 leading-tight font-serif italic"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-cream-100">&ldquo;Good design is obvious.</span>{" "}
          <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-pink-300 via-purple-300 to-indigo-300">
            Great design is transparent&rdquo;
          </span>
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-cream-200/60 mb-6 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          We are a team of perfectionists who believe that the best digital
          experiences are the ones that feel natural. We strip away the
          unnecessary to reveal the essential.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-12 border-t border-white/10">
            {[
              { label: "Founded", value: "2019" },
              { label: "Projects", value: "150+" },
              { label: "Awards", value: "12" },
              { label: "Clients", value: "Global" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-3xl font-bold mb-1 text-cream-50">
                  {stat.value}
                </div>
                <div className="text-xs uppercase tracking-widest text-indigo-200/40">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
};
