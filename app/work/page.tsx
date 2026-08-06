import Navbar from "@/components/Navbar";
import Contact from "@/components/sections/Contact";
import { getProjects } from "@/lib/sanity";
import { ExternalLink, ArrowLeft, Sparkles } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "All Work | Maison Pixels",
  description: "Explore our full portfolio of high-conversion websites, mobile applications, and web applications built with cutting-edge tech.",
};

export default async function WorkPage() {
  const projects = await getProjects();

  return (
    <div className="w-full min-h-screen font-sans text-white bg-[#09090b] relative overflow-x-hidden m-0 p-0">
      {/* navbar */}
      <Navbar />

      {/*hero section */}
      <section className="w-full pt-28 pb-10 md:pt-36 md:pb-12 px-6 md:px-12 bg-[#09090b] text-white relative overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#ef4d23]/10 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-2 mb-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-zinc-400 hover:text-[#ef4d23] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Home
            </Link>
            <span className="text-zinc-600">/</span>
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#ef4d23]">
              Work Showcase
            </span>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 pb-6 border-b border-zinc-800/80">
            <div>
              <span className="text-[#ef4d23] uppercase tracking-widest text-xs font-extrabold mb-3 block flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" /> PORTFOLIO & CASE STUDIES
              </span>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-[#fafafa] font-serif tracking-tight">
                All Work & Projects
              </h1>
            </div>
            <p className="text-zinc-400 text-sm md:text-base max-w-md leading-relaxed">
              Explore our complete collection of crafted web apps, mobile platforms, and interactive digital experiences built for ambitious brands.
            </p>
          </div>
        </div>
      </section>

      {/* Main Work grid */}
      <main className="w-full pb-16 px-6 md:px-12 bg-[#09090b]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
            {projects.map((project, index) => (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                key={project.id || index}
                className="group bg-zinc-900/50 rounded-2xl p-6 sm:p-7 border border-zinc-800/80 shadow-xl hover:border-[#ef4d23]/50 transition-all duration-300 flex flex-col justify-between min-h-[460px] sm:min-h-[500px]"
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
                    <h2 className="text-2xl font-bold font-serif text-white group-hover:text-[#ef4d23] transition-colors mb-2">
                      {project.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-zinc-300 font-medium leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-[#ef4d23]/15 text-[#ef4d23] whitespace-nowrap shrink-0">
                    {project.category}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </main>

{/* contact section */}
      <Contact />
    </div>
  );
}
