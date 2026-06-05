import { HashScroll } from "@/components/HashScroll";
import { Hero } from "@/components/sections/Hero";
import { TechMarquee } from "@/components/ui/TechMarquee";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <HashScroll />
      <Hero />
      <TechMarquee />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </>
  );
}
