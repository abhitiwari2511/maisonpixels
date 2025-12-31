import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { HeroSection } from "@/components/sections/HeroSection";
import { Services } from "@/components/sections/Services";
import { Work } from "@/components/sections/Work";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center font-sans text-white">
      <div>
        <HeroSection />
        <Services />
        <Work />
        <About />
        <Contact />
      </div>
    </div>
  );
}
