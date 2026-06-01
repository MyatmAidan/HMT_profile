import { projects } from "@/lib/data/projects";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";

export function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Projects"
            title="Real work, real impact"
            description="Selected builds from freelance and client projects — POS systems, dashboards, and APIs."
          />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal
              key={project.title}
              delay={index * 80}
              className={project.featured ? "md:col-span-2 lg:col-span-1" : ""}
            >
              <GlassCard
                glow={project.featured}
                className="group flex h-full flex-col"
              >
                {project.featured ? (
                  <span className="mb-4 inline-flex w-fit rounded-full bg-violet-500/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-violet-300">
                    Featured
                  </span>
                ) : null}
                <h3 className="font-display text-xl font-bold text-foreground transition-colors group-hover:text-theme-accent">
                  {project.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-theme-muted sm:text-base">
                  {project.description}
                </p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="tech-tag rounded-full px-3 py-1 text-xs"
                    >
                      {tech}
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
