import { projects } from "@/lib/data/projects";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";
import { GlassCard } from "@/components/ui/GlassCard";

export function Projects() {
  return (
    <SectionShell id="projects" alt glow="center">
      <Reveal>
        <SectionHeading
          eyebrow="Portfolio"
          title="Selected"
          highlight="projects"
          description="Real applications built for clients and production use."
        />
      </Reveal>

      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal
            key={project.title}
            delay={index * 70}
            className={project.featured ? "md:col-span-2" : ""}
          >
            <GlassCard
              glow={project.featured}
              className="card-shine group project-card flex h-full flex-col"
            >
              <div className="flex items-start gap-4">
                <span className="project-index" aria-hidden>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <h3 className="text-lg font-bold text-foreground transition-colors group-hover:text-theme-accent sm:text-xl">
                      {project.title}
                    </h3>
                    {project.featured ? (
                      <span className="status-chip">Featured</span>
                    ) : null}
                  </div>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-theme-muted sm:text-base">
                    {project.description}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <li key={tech} className="tech-tag rounded-md px-2.5 py-1 text-xs font-medium">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
