import { Reveal } from "@/components/ui/Reveal";
import { SkillsShowcase } from "@/components/sections/SkillsShowcase";
import { SectionShell } from "@/components/ui/SectionShell";

export function Skills() {
  return (
    <SectionShell id="skills">
      <Reveal>
        <div className="skill-section-header">
          <div className="max-w-2xl">
            <p className="section-eyebrow">Skills</p>
            <div className="mb-4 flex">
              <span className="section-accent-line" />
            </div>
            <h2 className="section-title font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Technical <span className="text-gradient-animated">toolkit</span>
            </h2>
            <p className="section-description mt-4 max-w-xl text-base leading-relaxed text-theme-muted sm:text-lg">
              Technologies I use to design, build, and ship full-stack web
              products.
            </p>
          </div>
        </div>
      </Reveal>
      <Reveal delay={120}>
        <SkillsShowcase />
      </Reveal>
    </SectionShell>
  );
}
