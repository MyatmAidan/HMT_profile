import Image from "next/image";
import { projects } from "@/lib/data/projects";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";

export function Projects() {
  return (
    <SectionShell id="projects">
      {/* Background decorative elements */}
      <div className="proj-bg-shapes" aria-hidden>
        <div className="proj-bg-grid" />
        <div className="proj-bg-glow proj-bg-glow-1" />
        <div className="proj-bg-glow proj-bg-glow-2" />
      </div>

      <Reveal>
        <SectionHeading
          eyebrow="Portfolio"
          title="Selected"
          highlight="projects"
          description="Real applications built for clients and production use."
        />
      </Reveal>

      <div className="proj-grid">
        {projects.map((project, index) => (
          <Reveal
            key={project.title}
            delay={index * 100}
            direction={index % 2 === 0 ? "left" : "right"}
            className={project.featured ? "proj-featured-span" : ""}
          >
            <article
              className={`proj-card ${project.featured ? "proj-card-featured" : ""}`}
            >
              {/* Animated gradient border */}
              <div className="proj-card-border" aria-hidden />

              {/* Image area */}
              {project.image && (
                <div className="proj-card-media">
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    fill
                    sizes={project.featured ? "(max-width: 768px) 100vw, 1100px" : "(max-width: 768px) 100vw, 540px"}
                    className="proj-card-image"
                  />
                  <div className="proj-card-media-overlay" />
                  {project.featured && (
                    <span className="proj-featured-badge">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                      Featured
                    </span>
                  )}
                </div>
              )}

              {/* Content */}
              <div className="proj-card-content">
                <div className="proj-card-header">
                  <span className="proj-card-index" aria-hidden>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="proj-card-title">{project.title}</h3>
                </div>

                <p className="proj-card-desc">{project.description}</p>

                {/* Tech stack */}
                <ul className="proj-card-stack">
                  {project.stack.map((tech) => (
                    <li key={tech} className="proj-tech-tag">
                      <span className="proj-tech-dot" />
                      {tech}
                    </li>
                  ))}
                </ul>

                {/* Visit link */}
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="proj-card-link"
                  >
                    <span>Visit site</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </a>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
