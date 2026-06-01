import { experience } from "@/lib/data/experience";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";

export function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Experience"
            title="Where I've built & learned"
          />
        </Reveal>

        <ol className="relative space-y-8 before:absolute before:left-[7px] before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-gradient-to-b before:from-cyan-500/60 before:via-violet-500/40 before:to-transparent sm:before:left-[11px]">
          {experience.map((item, index) => (
            <Reveal key={item.company} delay={index * 80}>
              <li className="relative pl-10 sm:pl-14">
                <span className="absolute left-0 top-2 flex h-4 w-4 items-center justify-center rounded-full border border-cyan-400/50 bg-cyan-400/20 sm:h-6 sm:w-6">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                </span>
                <GlassCard glow>
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-medium text-theme-accent">
                        {item.period}
                      </p>
                      <h3 className="mt-1 font-display text-xl font-bold text-foreground sm:text-2xl">
                        {item.role}
                      </h3>
                      <p className="mt-1 text-theme-muted">{item.company}</p>
                    </div>
                  </div>
                  <ul className="mt-5 space-y-2">
                    {item.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-3 text-sm leading-relaxed text-theme-muted sm:text-base"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-violet-400" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
