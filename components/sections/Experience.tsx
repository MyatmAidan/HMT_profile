import Image from "next/image";
import { experience } from "@/lib/data/experience";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";

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

      <div className="exp-timeline">
        {/* Vertical connecting line */}
        <div className="exp-spine" aria-hidden />

        {experience.map((item, index) => (
          <Reveal key={item.company} delay={index * 120}>
            <article className={`exp-card ${index === 0 ? "exp-card-current" : ""}`}>
              {/* Timeline node */}
              <div className="exp-node" aria-hidden>
                <div className="exp-node-dot" />
                {index === 0 && <div className="exp-node-ping" />}
              </div>

              {/* Gradient border */}
              <div className="exp-card-border" aria-hidden />

              {/* Card header */}
              <div className="exp-card-header">
                <div className="exp-card-header-left">
                  <span className="exp-period-chip">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    {item.period}
                  </span>
                  <h3 className="exp-role">{item.role}</h3>
                  <p className="exp-company">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                    </svg>
                    {item.company}
                  </p>
                </div>
                {index === 0 && (
                  <span className="exp-current-badge">
                    <span className="exp-current-dot" />
                    Current
                  </span>
                )}
              </div>

              {/* Project showcases */}
              {item.projects?.length ? (
                <div className="exp-projects">
                  {item.projects.map((project) => (
                    <a
                      key={project.url}
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="exp-project-card"
                    >
                      <div className="exp-project-media">
                        <Image
                          src={project.image}
                          alt={`${project.title} website`}
                          fill
                          sizes="(max-width: 768px) 90vw, 360px"
                          className="exp-project-image"
                        />
                        <div className="exp-project-overlay" />
                      </div>
                      <div className="exp-project-meta">
                        <span>{project.title}</span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="7" y1="17" x2="17" y2="7" />
                          <polyline points="7 7 17 7 17 17" />
                        </svg>
                      </div>
                    </a>
                  ))}
                </div>
              ) : null}

              {/* Highlights */}
              <ul className="exp-highlights">
                {item.highlights.map((highlight) => (
                  <li key={highlight} className="exp-highlight-item">
                    <span className="exp-highlight-marker" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
