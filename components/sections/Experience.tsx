import { experience } from "@/lib/data/experience";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";
import { GlassCard } from "@/components/ui/GlassCard";

export function Experience() {
  return (
    <SectionShell id="experience">
      <Reveal>
        <SectionHeading
          eyebrow="Experience"
          title="Where I've"
          highlight="worked"
          description="Hands-on roles from internship to freelance — shipping features end to end."
        />
      </Reveal>

      <div className="space-y-5">
        {experience.map((item, index) => (
          <Reveal key={item.company} delay={index * 80}>
            <GlassCard glow={index === 0} className="card-shine timeline-card">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="timeline-period">{item.period}</p>
                  <h3 className="mt-1 text-xl font-bold text-foreground">
                    {item.role}
                  </h3>
                  <p className="mt-1 text-sm text-theme-muted">{item.company}</p>
                </div>
                {index === 0 ? (
                  <span className="status-chip">Current</span>
                ) : null}
              </div>
              <ul className="mt-5 space-y-2.5">
                {item.highlights.map((highlight) => (
                  <li key={highlight} className="timeline-bullet">
                    {highlight}
                  </li>
                ))}
              </ul>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
