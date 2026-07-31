import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import Services from "@/components/sections/Services";
import Work from "@/components/sections/Work";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="w-full min-h-screen font-sans text-white bg-[#09090b] relative overflow-x-hidden m-0 p-0">
      {/* Floating Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Main Content Sections */}
      <main className="w-full flex flex-col bg-[#09090b] m-0 p-0">
        <Services />
        <Work />
        <About />
        <Contact />
      </main>
    </div>
  );
}
