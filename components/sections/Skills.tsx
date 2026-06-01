import { skillCategories } from "@/lib/data/skills";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";

export function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Skills"
            title="Tools I use daily"
            description="A balanced stack across frontend, backend, and data layers."
          />
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <Reveal key={category.title} delay={index * 80}>
              <GlassCard glow className="h-full">
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {category.title}
                </h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <li
                      key={skill}
                      className="skill-pill rounded-xl px-3 py-2 text-sm font-medium"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
