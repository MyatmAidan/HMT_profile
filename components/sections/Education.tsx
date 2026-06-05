import { education } from "@/lib/data/education";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";
import { GlassCard } from "@/components/ui/GlassCard";

export function Education() {
  return (
    <SectionShell id="education" alt glow="left">
      <Reveal>
        <SectionHeading
          eyebrow="Education"
          title="Academic"
          highlight="background"
        />
      </Reveal>

      <div className="grid gap-5 md:grid-cols-2">
        {education.map((item, index) => (
          <Reveal key={item.school} delay={index * 80}>
            <GlassCard glow className="card-shine timeline-card h-full">
              <p className="timeline-period">{item.period}</p>
              <h3 className="mt-2 text-lg font-bold text-foreground">
                {item.degree}
              </h3>
              <p className="mt-2 text-sm text-theme-muted">{item.school}</p>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
