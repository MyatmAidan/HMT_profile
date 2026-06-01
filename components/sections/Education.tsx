import { education } from "@/lib/data/education";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";

export function Education() {
  return (
    <section id="education" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Education"
            title="Always learning"
          />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {education.map((item, index) => (
            <Reveal key={item.school} delay={index * 100}>
              <GlassCard className="h-full">
                <p className="text-sm font-medium text-violet-400">
                  {item.period}
                </p>
                <h3 className="mt-2 font-display text-xl font-bold text-foreground">
                  {item.degree}
                </h3>
                <p className="mt-2 text-theme-muted">{item.school}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
